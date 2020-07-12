<template>
    <div class="row" id="cf">
        <vue-headful 
            title="Contact • Georgi Karagogov"
            description="Contact with Georgi Karagogov"
            image="https://cdn.gsk567.com/images/logo.jpg"/>
        <div class="col-12 p-0">
            <div class="header-card d-flex">
                <div class="header-card-container">
                    <h1>Contact Me</h1>
                </div>
            </div>
        </div>
        <div v-if="contacts.length > 0" class="w-100 pl-4 pr-4 pt-3 pb-3 row m-0">
            <div v-for="(contact, index) in contacts" :key="index" class="col-12 col-sm-6 col-md-4 col-lg-3 pb-2 pt-2 contact-card">
                <div class="card p-0">
                    <div class="card-body p-0 row m-0 p-2">
                        <div class="col-2 p-0 my-auto">
                            <img :src="contact.image" class="w-100"/>
                        </div>
                        <div class="col-10 text-center my-auto">
                            <h2 class="card-title">{{contact.value}}</h2>
                        </div>
                        <div class="col-12 text-center">
                            <hr/>
                            <a target="_blank" :href="contact.link" class="btn btn-view hvr-pop font-weight-bold">Contact me via {{contact.title}}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-5 w-100">
            <p class="p-0"><span class="font-weight-bold">Important Notice:</span> Contacts provided on this or another page are personal data of Georgi Karagogov and their usage for any kind of automatic email systems and/or subscriptions without the permission of Georgi Karagogov is forbidden.</p>
        </div>

    </div>
</template>

<script>

    import contacts from "../../data/contacts";

    export default {
        data() {
            return {

            }
        },
        computed: {
            contacts() {
                return contacts.data;
            }
        }
    }
</script>

<style lang="scss">
#cf {
    .header-card {
        background-image: url('../../../public/assets/images/hp-contact-form.jpg');
    }

    .contact-card {
        .card {
            border: none;
            line-height: 1.42857143;
            border-radius: 2px;
            height: 100%;
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

        h2 {
            font-size: 16px;
            font-weight: bold;
            margin: auto;
            padding-bottom: 0px;
            text-align: center;
        }

        .project-type {
            font-size: 12px;
            font-weight: bold;
            margin: 0px;
            padding-left: 10px;
            padding-right: 10px;
        }

        img {
            border-radius: 0px;
        }

        .tech-tag {
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

    }
}
</style>