<template>
    <div class="row" id="design">
        <vue-headful 
            title="Design • Georgi Karagogov"
            description="Design projects list"
            image="https://cdn.gsk567.com/images/logo.jpg"/>
        <div class="col-12 p-0">
            <div class="header-card d-flex">
                <div class="header-card-container">
                    <h1>Design</h1>
                </div>
            </div>
        </div>
        <div class="row pl-4 pr-4 pt-3 pb-3" v-if="projects.length > 0">
            <div v-for="(project, index) in projects" :key="index" class="col-12 col-sm-6 col-md-4 col-lg-3 pb-2 pt-2 project-card">
                <div class="card design-card">
                    <div class="design-card-image" :style="'background-image: url(' + project.src + ')'"></div>
                    <div class="card-body p-2 text-center">
                        <h4 class="card-title font-weight-bold mb-0">{{project.title}}</h4>
                    </div>
                    <button @click="selectedPicture = project" target="_blank" class="btn btn-view hvr-pop">VIEW</button>
                </div>
            </div>
        </div>
        <modal :title="selectedPicture.title" v-if="selectedPicture != null" @close="selectedPicture = null" button="Close">
            <template slot="body">
                <div class="w-100 text-center gallery-modal">
                    <img :src="selectedPicture.src"/>
                </div>
            </template>
        </modal>
    </div>
</template>

<script>
    import Modal from "../../components/misc/Modal";
    import designProjects from "../../data/designProjects";
    export default {
        data() {
            return {
                selectedPicture: null
            }
        },
        components: {
            Modal
        },
        computed: {
            projects() {
                return designProjects.data;
            }
        }
    }
</script>

<style scoped lang="scss">
    #design .header-card {
        background-image: url('../../../public/assets/images/hp-img3.jpg');
    }

    .gallery-modal  {
        max-height: 100%;
        img {
            max-width: 100%;
            width: auto;
            max-height: 400px;
        }
    }

    .design-card {
        .design-card-image {
            width: 100%;
            height: 200px;
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
        }
    }

    .project-card {
    .card {
        border: none;
        line-height: 1.42857143;
        border-radius: 2px;
        -webkit-transition: box-shadow .25s;
        transition: box-shadow .25s;
        -webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
        box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
    }

    .card:hover {
        -webkit-box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
        box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    }

    .card-body {
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
    }

    .project-tags {
        margin: 10px;
    }

    .project-tags span {
        display: inline-block;
        background-color: #ddd;
        margin: 2px;
        line-height: 10px;
        padding: 3px 4px;
        border-radius: 3px;
        font-size: 10px;
        font-weight: bold;
        color: #333;

    }

    h2 {
        font-size: 21px;
        padding: 10px;
        font-weight: bold;
        margin: 0px;
        padding-bottom: 0px;
    }

    .project-type {
        font-size: 12px;
        font-weight: bold;
        margin: 0px;
        padding-left: 10px;
        padding-right: 10px;
    }

    .btn-view {
        width: 100%;
        font-weight: bold;
        border-radius: 0px;
    }

    img {
        border-radius: 0px;
    }

    }
</style>