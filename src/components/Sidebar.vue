<template>
  <sidebar-menu
    :menu="menu"
    :hideToggle="true"
    :collapsed="collapsed"
    :show-one-child="true"
    width="280px"
    disableHover
    @toggle-collapse="onToggleCollapse"
  >
    <div slot="header">
      <div class="column has-text-centered" v-if="!isShowSidebar">
        <img width="200" src="../assets/img/company-white.png" alt />
      </div>
      <div v-else class="column">
        <img width="50" src="../assets/img/company-logo.png" alt />
      </div>
    </div>
  </sidebar-menu>
</template>
<script>
import { SidebarMenu } from 'vue-sidebar-menu'
import { mapState } from 'vuex'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
export default {
  components: {
    SidebarMenu
  },
  props: ['collapsed'],
  methods: {
    onToggleCollapse () {
      this.$store.dispatch('showSidebar')
    }
  },
  computed: {
    ...mapState({
      isShowSidebar: state => state.showSidebar
    })
  },
  data () {
    return {
      menu: [
        {
          header: true,
          title: 'Main Navigation',
          hiddenOnCollapse: true
        },
        {
          href: '/',
          title: 'Dashboard',
          icon: 'fa fa-tachometer-alt'
        },
        {
          title: 'Member',
          icon: 'fa fa-users',
          child: [
            {
              href: '/member/stand',
              title: 'Stand List'
            },
            {
              href: '/member/user',
              title: 'User List'
            },
          ]
        },
      ]
    }
  }
}
</script>
<style lang="scss">
@import "../assets/css/style.scss";
@import "~vue-sidebar-menu/src/scss/vue-sidebar-menu.scss";
.v-sidebar-menu .vsm--link.vsm--link_active,
.v-sidebar-menu .vsm--item.vsm--item_open .vsm--link_level-[n],
.v-sidebar-menu .vsm--icon,
.v-sidebar-menu.vsm_expanded .vsm--item_open .vsm--link_level-1,
.v-sidebar-menu .vsm--mobile-bg {
  background-color: $primary !important;
}
.vsm--list{
  width: 100% !important;
}
.v-sidebar-menu{
  transition: 0.9s all ease;
}
</style>
