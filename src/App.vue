<template>
  <div class="app">
      <app-header></app-header>
      <div class="body-container">
        <router-view class="view-content"></router-view>
        <app-footer></app-footer>
      </div>
  </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import jQuery from 'jquery';
    import Header from './components/layout/Header.vue';
	import Footer from './components/layout/Footer.vue';
    export default {
        components: {
            appHeader: Header,
            appFooter: Footer
		},
		methods: {
			closeSideMenus: function() {
                jQuery(".cover_div").hide();
				if (jQuery(".menu").hasClass("open")) {
					jQuery('.main-submenu').removeClass("open");
					jQuery('.menu').removeClass("open");
				}
			}
		},
		mounted: function() {
			jQuery('.container').click(function(){
				closeSideMenus();
			});
            jQuery('.menu').click(function() {
				if (jQuery(this).hasClass("open")) {
					jQuery('.main-submenu').removeClass("open");
					jQuery(this).removeClass("open");
					jQuery(".cover_div").hide();
				}
				else {
					closeSideMenus();
					jQuery('.main-submenu').addClass("open");
					jQuery(this).addClass("open");
					jQuery(".cover_div").show();
				}
			});

			jQuery(".submenu-anchor-links").click(function()
			{
				closeSideMenus();
			});
		}
    }
		
	function closeSideMenus() {
		jQuery(".cover_div").hide();
		if (jQuery(".menu").hasClass("open")) {
			jQuery('.main-submenu').removeClass("open");
			jQuery('.menu').removeClass("open");
		}
	}
</script>

<style>
    @import './assets/css/normalize.css';
    @import 'https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900,900i';
    @import './assets/css/fontawesome-all.min.css';
    @import './assets/css/style.css';
</style>