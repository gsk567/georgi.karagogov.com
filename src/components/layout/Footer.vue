<template>
    <footer>
        <div class="row footer-section-top">
            <div class="col-12 footer-menu row">
                <div class="col-md-6">
                    <ul>
                        <li class="hvr-pop d-inline-block"><router-link @click.native="scrollToTop" to="/about" tag="a" active-class="active" title="About">About</router-link></li>
                        <li class="hvr-pop d-inline-block"><router-link @click.native="scrollToTop" to="/cv" tag="a" active-class="active" title="Videos">CV</router-link></li>
                        <li class="hvr-pop d-inline-block"><router-link @click.native="scrollToTop" to="/contact" tag="a" active-class="active" title="Contact">Contact</router-link></li>
                        <li class="hvr-pop d-inline-block"><router-link @click.native="scrollToTop" to="/videos" tag="a" active-class="active" title="Videos">Videos</router-link></li>
                        <li class="hvr-pop d-inline-block"><router-link @click.native="scrollToTop" to="/snippets" tag="a" active-class="active" title="Snippets">Snippets</router-link></li>
                        <li class="hvr-pop d-inline-block"><router-link @click.native="scrollToTop" to="/competences" tag="a" active-class="active" title="Competences">Competences</router-link></li>
                    </ul>
                </div>
                <div class="col-md-6 col-12 d-none d-md-flex">
                    <div class="footer-quote">
                        <h3><q>When your sample is large, no single instance will significantly change the aggregate or the total. The largest observation will remain impressive, but eventually insignificant, to the sum.</q></h3>
                        <p>Nassim Nicholas Taleb</p>
                    </div>
                </div>
            </div>

        </div>
        <div class="row footer-section-bottom">
            <div class="col-sm-4 d-flex">
                <ul class="social-media-menu my-auto mx-auto mx-sm-0">
                    <li class="hvr-pop"><a target="_blank" title="Facebook" href="https://www.facebook.com/gsk567">Facebook</a></li>
                    <li class="hvr-pop"><a target="_blank" title="LinkedIn" href="https://www.linkedin.com/in/georgi-karagogov/">LinkedIn</a></li>
                    <li class="hvr-pop"><a target="_blank" title="GitHub" href="https://github.com/gsk567">GitHub</a></li>
                    <li class="hvr-pop"><a target="_blank" title="Instagram" href="https://www.instagram.com/vranata/">Instagram</a></li>
                </ul>
            </div>
          <div class="col-sm-4 d-flex">
            <a href="https://www.netlify.com" class="mb-3 mx-auto my-sm-auto">
              <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" />
            </a>
          </div>
            <div class="col-sm-4 credits d-flex">
                <p class="my-auto w-100">© {{(new Date()).getFullYear()}} - Georgi Karagogov. All rights reserved.</p>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        methods: {
          scrollToTop: function () {
            window.scrollTo(0, 0);
          }
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Cookie');
    .bmc-button img {
        width: 27px !important;
        margin-bottom: 1px !important;
        box-shadow: none !important;
        border: none !important;
        vertical-align: middle !important;
    }
    .bmc-button {
        line-height: 36px !important;
        height:37px !important;
        text-decoration: none !important;
        display:inline-flex !important;
        color:#000000 !important;
        background-color:#FFDD00 !important;
        border-radius: 3px !important;
        border: 1px solid transparent !important;
        padding: 1px 9px !important;
        font-size: 22px !important;
        letter-spacing:0.6px !important;
        margin: 0 auto !important;
        font-family:'Cookie', cursive !important;
        -webkit-box-sizing: border-box !important;
        box-sizing: border-box !important;
        -o-transition: 0.3s all linear !important;
        -webkit-transition: 0.3s all linear !important;
        -moz-transition: 0.3s all linear !important;
        -ms-transition: 0.3s all linear !important;
        transition: 0.3s all linear !important;
    }
    .bmc-button:hover, .bmc-button:active, .bmc-button:focus {
        text-decoration: none !important;
        opacity: 0.85 !important;color:#000000 !important;
    }

    .m-auto {
        margin: auto !important;
    }

    .logo-footer {
        margin: auto;
        text-decoration: none !important;
        color: #000 !important;
        display: block;
    }

    .logo-footer img {
        width: 80px;
    }

    .footer-quote {
        margin: auto;
    }

    .footer-quote h3{
        font-size: 18px;
        line-height: 24px;
        font-style: italic;
        text-align: right;
    }

    .footer-quote p{
        margin-top: 10px;
        font-size: 16px;
        font-weight: bold;
        text-align: right;
    }

    .hosting-banner {
        margin: 0 auto;
        cursor: pointer;
        padding: 0px;
        border: none;
        width: 200px;
        height: 160px;
        border-radius: 2px;
        -webkit-transition: box-shadow .25s;
        -webkit-transition: -webkit-box-shadow .25s;
        transition: -webkit-box-shadow .25s;
        transition: box-shadow .25s;
        transition: box-shadow .25s, -webkit-box-shadow .25s;
        -webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
        box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    }

    .hosting-banner img {
        width: 100%;
    }
</style>
