<template>
    <div id="loading-splash">
        <div class="lds-css"><div style="width:100%;height:100%" class="lds-rolling"><div></div></div></div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">
#loading-splash {
    margin: auto;
    min-height: 300px;
    display: flex;
    .lds-css {
        margin: auto;
    }
    @keyframes lds-rolling {
    0% {
        -webkit-transform: translate(-50%, -50%) rotate(0deg);
        transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
        -webkit-transform: translate(-50%, -50%) rotate(360deg);
        transform: translate(-50%, -50%) rotate(360deg);
    }
    }
    @-webkit-keyframes lds-rolling {
    0% {
        -webkit-transform: translate(-50%, -50%) rotate(0deg);
        transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
        -webkit-transform: translate(-50%, -50%) rotate(360deg);
        transform: translate(-50%, -50%) rotate(360deg);
    }
    }
    .lds-rolling {
    position: relative;
    }
    .lds-rolling div,
    .lds-rolling div:after {
    position: absolute;
    width: 160px;
    height: 160px;
    border: 20px solid #28292f;
    border-top-color: transparent;
    border-radius: 50%;
    }
    .lds-rolling div {
    -webkit-animation: lds-rolling 1s linear infinite;
    animation: lds-rolling 1s linear infinite;
    top: 100px;
    left: 100px;
    }
    .lds-rolling div:after {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    }
    .lds-rolling {
    width: 60px !important;
    height: 60px !important;
    -webkit-transform: translate(-30px, -30px) scale(0.3) translate(30px, 30px);
    transform: translate(-30px, -30px) scale(0.3) translate(30px, 30px);
    }
} 
</style>