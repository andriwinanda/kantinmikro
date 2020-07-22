<template>
  <div>
    <div id="app" v-if="$route.path != '/login'">
      <sidebar-menu :collapsed="isShowSidebar" />
      <div class="wrapper" :class="{'collapsed' : isShowSidebar}">
        <navbar />
        <div class="view">
          <router-view />
        </div>
      </div>
    </div>
    <div id="login" v-else>
      <router-view />
    </div>
  </div>
</template>

<script>
import SidebarMenu from "./components/Sidebar.vue";
import Navbar from "./components/Navbar.vue";
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    SidebarMenu,
    Navbar
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      isShowSidebar: state => state.showSidebar
    })
  }
};
</script>

<style>
.wrapper {
  padding-left: 280px;
  transition: 0.9s all ease;
}
.wrapper.collapsed {
  padding-left: 50px;
}
.aside {
  display: block;
  width: auto;
  height: 100%;
}
#app {
  min-height: 100vh;
  /* background-color: #f3f3f3; */
  background-color: #fff;
  background-image: url("./assets/img/Group363.png");
  background-size: 800px;
  background-position-y: 0;
  background-position-x: 200px;
  background-repeat: no-repeat;
  display: block;
}
#login {
  min-height: 100vh;
  background-color: #f3f3f3;
  background-image: url("./assets/img/Group364.png");
  background-size: 800px;
  background-position-y: 0;
  background-position-x: 15px;
  background-repeat: no-repeat;
  display: block;
}
.view {
  padding: 15px;
}
</style>
