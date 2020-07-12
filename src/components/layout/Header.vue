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
            <a class="menu hvr-pop" href="javascript:;"></a>
        </header>
        <div class="main-submenu">
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
    import jQuery from 'jquery';
    export default {
        methods: {
            scrollToTop: function () {
                jQuery('html, body').animate({scrollTop: 0}, 'slow');
            }
        }
    }
</script>

<style>

</style>