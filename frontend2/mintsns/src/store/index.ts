import Vue from "vue";
import Vuex from "vuex";
import VuexORM from "@vuex-orm/core";
import User from "../model/User";
import cart from './modules/cart'
import products from './modules/products'
import user from "@/store/modules/user";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

const database = new VuexORM.Database();

database.register(User);

export default new Vuex.Store({
  modules: {
    cart,
    products,
    user
  },
  strict: debug,
  plugins: [VuexORM.install(database)]
});
