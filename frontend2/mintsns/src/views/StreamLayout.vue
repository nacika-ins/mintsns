<template>
  <div>
    <Header />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters, mapMutations, mapState } from "vuex";
import Header from "@/components/Header.vue";
import {setUserAction} from "@/store/modules/user/action";
import User from "@/model/User";

@Component({
  components: {
    Header
  },
  computed: {
    ...mapState({ user: state => state.user })
  },
  ...mapGetters("cart", {
    products: "cartProducts",
    total: "cartTotalPrice"
  }),
  methods: {
    ...mapMutations(["increment"]),
    checkout(products) {
      this.$store.dispatch("cart/checkout", products);
    },
    setUser() {
      this.$store.dispatch("user/setUser", );
    },
    onClickPrevStream() {},
    onClickNextStream() {}
  },
  created() {
    this.store.dispatch(setUserAction(User.));
  },
})
export default class StreamLayout extends Vue {}
</script>

<style scoped lang="scss"></style>
