<template>
  <div id="app">
    <Nav />
    <transition>
      <router-view />
    </transition>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  name: "app",
  components: {
    Nav
  }
};
</script>

<style lang="scss" global>
body {
  margin: 0;
  background-color: #f5f5f5;
}
.page {
  padding: 40px;
}
</style>
