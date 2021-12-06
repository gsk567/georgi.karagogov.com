<template>
  <div class="app">
      <app-header :open-menu="showMenu" @menu:clicked="menuClicked"></app-header>
      <div class="body-container">
        <router-view class="view-content"></router-view>
        <app-footer></app-footer>
      </div>
  </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import Header from './components/layout/Header.vue';
	import Footer from './components/layout/Footer.vue';
    export default {
        components: {
            appHeader: Header,
            appFooter: Footer
		},
      data() {
        return {
          showMenu: false
        }
      },
      computed: {
        currentRoute() {
          return this.$route.fullPath;
        }
      },
      watch: {
          currentRoute() {
            this.showMenu = false;
          }
      },
		methods: {
      menuClicked() {
        this.showMenu = !this.showMenu;
      }
		},
		mounted: function() {
      this.showMenu = false;
		}
  }
</script>

<style>
    @import './assets/css/normalize.css';
    @import 'https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900,900i';
    @import './assets/css/fontawesome-all.min.css';
    @import './assets/css/style.css';
</style>
