<template>
    <div>
        <header>
            <router-link @click.native="scrollToTop" class="logo hvr-pop" tag="a" title="gsk567" to="/"></router-link>
            <div class="top-menu">
                <router-link @click.native="scrollToTop" active-class="active" class="hvr-pop" tag="a" title="Development"
                             to="/development">Development
                </router-link>
                <router-link @click.native="scrollToTop" active-class="active" class="hvr-pop" tag="a" title="Design"
                             to="/design">Design
                </router-link>
            </div>
            <a class="menu hvr-pop" :class="{ 'open': openMenu }" @click="$emit('menu:clicked')" href="javascript:void(0);"></a>
        </header>
        <div class="main-submenu" :class="{ 'open': openMenu }">
            <div class="submenu-wrap">
                <router-link @click.native="scrollToTop" active-class="active" class="submenu-anchor-links" tag="a"
                             title="Development" to="/development">Development
                </router-link>
                <router-link @click.native="scrollToTop" active-class="active" class="submenu-anchor-links" tag="a"
                             title="Design" to="/design">Design
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      props: {
        openMenu: {
          type: Boolean,
          required: true
        }
      },
        methods: {
            scrollToTop: function () {
                window.scrollTo(0, 0);
            }
        }
    }
</script>

<style>

</style>
