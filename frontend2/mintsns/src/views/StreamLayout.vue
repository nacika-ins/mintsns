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

@Component({
  components: {
    Header
  },
  computed: {
    ...mapState({ user: state => state.user.setUser })
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
    onClickPrevStream() {},
    onClickNextStream() {}
  }
})
export default class StreamLayout extends Vue {}
</script>

<style scoped lang="scss"></style>
