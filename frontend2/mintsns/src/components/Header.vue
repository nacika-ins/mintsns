<template>
  <header id="header" role="banner">
    <h1><img class="logo" src="../assets/images/header_logo.png" alt="mintsns" /></h1>
    <img class="user-icon" :src="user.thumbnailUrl">
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import {mapState} from "vuex";

@Component({
  computed: {
    ...mapState({ user: state => state.user })
  },
})
export default class Header extends Vue {}
</script>

<style scoped lang="scss">
header[role="banner"] {
  background-color: white;
  border-bottom: 1px solid #dde3dd;
  padding: 5px;
  height: 30px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2000;
  width: 100%;
}
header[role="banner"] h1 {
  text-align: left;
  margin: 0px;
  font-size: 1.125rem;
  color: #8cb98c;
}
header[role="banner"] h1 .logo {
  height: 2rem;
  position: relative;
  z-index: 3000;
}
header[role="banner"] .user-icon {
  position: absolute;
  top: 4px;
  right: 21px;
  width: 2rem;
  height: 2rem;
  border-radius: 5px;
  cursor: pointer;
  z-index: 3000;
}
header[role="banner"] .notification-button {
  cursor: pointer;
  position: absolute;
  top: 7px;
  right: 65px;
  width: 16px;
  height: 16px;
  padding: 5px;
  border-radius: 5px;
  background-color: #eef3ee;
  font-size: 0.75rem;
  text-align: center;
  font-family: monospace;
  color: #b7b7b7;
  z-index: 3000;
}
header[role="banner"] .notification-button.active {
  color: white;
  background-color: #f5544b;
}
header[role="banner"] .navigation {
  position: absolute;
  top: 0px;
  left: 50%;
  margin-left: -350px;
  width: 700px;
  padding-left: 103px;
}
header[role="banner"] .navigation .navigation-item {
  float: left;
  margin-right: 10px;
  width: 90px;
  text-align: center;
  margin-top: 10px;
  font-size: 0.8125rem;
  color: #1fb3a2;
  overflow: hidden;
  white-space: nowrap;
}
header[role="banner"] .navigation .navigation-cover-left-1 {
  display: block;
  top: 0;
  left: -36px;
  width: 260px;
  height: 40px;
  z-index: 1001;
  position: absolute;
  background-color: #fff;
}
header[role="banner"] .navigation .navigation-cover-left-2 {
  display: block;
  top: 0;
  left: 224px;
  width: 100px;
  height: 40px;
  z-index: 1001;
  position: absolute;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#fff),
    to(rgba(255, 255, 255, 0))
  );
}
header[role="banner"] .navigation .navigation-cover-right-1 {
  display: block;
  top: 0;
  right: 62px;
  width: 270px;
  height: 40px;
  z-index: 1001;
  position: absolute;
  background-color: #fff;
}
header[role="banner"] .navigation .navigation-cover-right-2 {
  display: block;
  top: 0;
  right: 332px;
  width: 100px;
  height: 40px;
  z-index: 1001;
  position: absolute;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(255, 255, 255, 0)),
    to(#fff)
  );
}
header[role="banner"] .navigation .navigation-arrow-left {
  position: absolute;
  top: -1px;
  left: 155px;
  color: #5ec8bc;
  font-size: 0.75rem;
  z-index: 1002;
  font-family: sans-serif;
  font-weight: 700;
  cursor: pointer;
  padding: 10px 60px;
}
header[role="banner"] .navigation .navigation-arrow-right {
  position: absolute;
  top: -1px;
  right: 263px;
  color: #5ec8bc;
  font-size: 0.75rem;
  z-index: 1002;
  font-family: sans-serif;
  font-weight: 700;
  cursor: pointer;
  padding: 10px 60px;
}
header[role="banner"] .navigation .navigation-arrow-left:hover,
header[role="banner"] .navigation .navigation-arrow-right:hover {
  color: #68e8d6;
  font-weight: 700;
}
.header-margin {
  margin-top: 40px;
}
</style>
