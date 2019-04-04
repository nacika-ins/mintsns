import shop from "../../../api/shop";
import {action, actionCreatorFactory, combineAction} from "vuex-typescript-fsa/lib";
import {setUserAction} from "@/store/modules/user/action";





// initial state
// shape: [{ id, quantity }]
const state = {
  items: [],
  checkoutStatus: null,
  name: "",
  id: null,
  thumbnailUrl: null
};

// getters
const getters = {
  cartProducts: (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      const product = rootState.products.all.find(product => product.id === id);
      return {
        title: product.title,
        price: product.price,
        quantity
      };
    });
  },

  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  }
};

// actions
const actions = {
  ...combineAction(
    action(setUserAction, (context, action) => {
      context.commit(action);
    })
  ),
  setUser({ state, commit }, user: { id: number; name: string; thumbnailUrl: string }) {
      commit("setUser", user);
  },
  checkout({ commit, state }, products) {
    const savedCartItems = [...state.items];
    commit("setCheckoutStatus", null);
    // empty cart
    commit("setCartItems", { items: [] });
    shop.buyProducts(
      products,
      () => commit("setCheckoutStatus", "successful"),
      () => {
        commit("setCheckoutStatus", "failed");
        // rollback to the cart saved before sending the request
        commit("setCartItems", { items: savedCartItems });
      }
    );
  },

  addProductToCart({ state, commit }, product) {
    commit("setCheckoutStatus", null);
    if (product.inventory > 0) {
      const cartItem = state.items.find(item => item.id === product.id);
      if (!cartItem) {
        commit("pushProductToCart", { id: product.id });
      } else {
        commit("incrementItemQuantity", cartItem);
      }
      // remove 1 item from stock
      commit(
        "products/decrementProductInventory",
        { id: product.id },
        { root: true }
      );
    }
  }
};

// mutations
const mutations = {
  pushProductToCart(state, { id }) {
    state.items.push({
      id,
      quantity: 1
    });
  },

  incrementItemQuantity(state, { id }) {
    const cartItem = state.items.find(item => item.id === id);
    cartItem.quantity++;
  },

  setCartItems(state, { items }) {
    state.items = items;
  },

  setCheckoutStatus(state, status) {
    state.checkoutStatus = status;
  },

  setUser(state, user: { id: number; name: string; thumbnailUrl: string }) {
    state.id = user.id;
    state.name = user.name;
    state.thumbnailUrl = user.thumbnailUrl;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};