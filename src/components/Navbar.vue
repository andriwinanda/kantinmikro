<template>
  <nav class="navbar">
    <span
      class="navbar-item navbar-burger"
      @click="onToggleCollapse"
      :class="{ 'is-active': !isShowSidebar }"
    >
      <span></span>
      <span></span>
      <span></span>
    </span>
    <span class="navbar-item">
      <b>{{getDisplayName}}</b>
    </span>

    <div class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item is-size-7 has-text-right">
          Hello {{dataUser? dataUser.name :""}},
          <br />
          {{dataUser? dataUser.role : ""}}
        </div>
        <b-dropdown position="is-bottom-left" aria-role="menu" trap-focus>
          <a class="navbar-item" slot="trigger" role="button">
            <figure class="navbar-item image is-48x48">
              <img
                class="is-rounded"
                src="https://bulma.io/images/placeholders/96x96.png"
                alt="Placeholder image"
              />
              <b-icon icon="menu-down"></b-icon>
            </figure>
          </a>

          <!-- <b-dropdown-item custom aria-role="menuitem">
            Logged as
            <b>Andri Winanda</b>
          </b-dropdown-item>
          <hr class="dropdown-divider" />-->
          <b-dropdown-item has-link aria-role="menuitem">
            <a @click.prevent="logout()">Logout</a>
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      isShowSidebar: state => state.showSidebar,
      dataUser: state => state.login.dataUser
    }),
    getDisplayName() {
      if (this.$route.name) return this.$route.name;
    }
  },
  methods: {
    onToggleCollapse() {
      this.$store.dispatch("showSidebar");
    },
    logout() {
      this.$store.commit("login/logout");
      this.$router.push("/login");
    }
  }
};
</script>
<style>
.navbar {
  background: none !important;
}
</style>
