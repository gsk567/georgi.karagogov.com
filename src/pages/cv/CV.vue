<template>
    <div>
        <vue-headful
                title="CV • Georgi Karagogov"
                description="Georgi Karagogov CV"
                image="https://cdn.gsk567.com/images/logo.jpg"/>
        <section class="card personal-card">
            <div id="cv">
                <div class="mainDetails">
                    <div class="d-flex">
                        <div id="headshot">
                            <img src="/assets/images/gk-image.jpg" :alt="cvData.header.name" />
                        </div>

                        <div id="name">
                            <h1 class="">{{cvData.header.name}}</h1>
                            <h2 class="">{{cvData.header.title}}</h2>
                            <hr/>
                            <p class="m-1 additional-info">Born in <span class="font-weight-bold">{{cvData.about.from}} on {{cvData.about.born}}</span></p>
                            <p class="m-1 additional-info">Lives in <span class="font-weight-bold">{{cvData.about.livesIn}}</span></p>
                        </div>

                        <div id="contactDetails">
                            <ul>
                                <li>Email: <a class="font-weight-bold d-block mt-1" :href="'mailto:' + cvData.header.email" target="_blank">{{cvData.header.email}}</a></li>
                                <li>Website: <a class="font-weight-bold d-block mt-1" href="/">{{cvData.header.website}}</a></li>
                                <li>Mobile: <a class="font-weight-bold d-block mt-1" :href="'tel:' + cvData.header.mobile" target="_blank">{{cvData.header.mobile}}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id="mainArea">
                    <section class="row">
                        <div class="sectionTitle">
                            <h1>Education</h1>
                        </div>

                        <div class="sectionContent">
                            <article v-for="(education, educationIndex) in cvData.education" :key="'education-' + educationIndex">
                                <h2 class="mb-1">{{education.place}}</h2>
                                <p class="subDetails">{{education.period}}</p>
                                <p>{{education.title}}</p>
                            </article>
                        </div>
                    </section>
                    <hr/>
                    <section class="row">
                        <div class="sectionTitle">
                            <h1>Work Experience</h1>
                        </div>

                        <div class="sectionContent">
                            <article v-for="(workExperience, workExperienceIndex) in cvData.workExperience" :key="'work-experience-' + workExperienceIndex">
                                <h2 class="mb-1 d-inline-block">{{workExperience.company}}</h2> as <h5 class="mb-1 d-inline-block">{{workExperience.position}}</h5>

                                <p class="subDetails">{{workExperience.fromTo}}</p>
                                <p>{{workExperience.description}}</p>
                            </article>
                        </div>
                    </section>
                    <hr/>
                    <section class="row">
                        <div class="sectionTitle">
                            <h1>Key Skills</h1>
                        </div>

                        <div class="sectionContent">
                            <ul class="keySkills">
                                <li class="font-weight-bold mb-1" v-for="(skill, skillIndex) in skills" :key="'skillIndex' + skillIndex">{{skill.name}}</li>
                            </ul>
                            <router-link class="color-primary float-right" to="/competences">Read more</router-link>
                        </div>
                    </section>
                    <hr/>
                    <section class="row">
                        <div class="sectionTitle">
                            <h1>Technologies</h1>
                        </div>

                        <div class="sectionContent">
                            <article class="mb-3" v-for="(technologyType, technologyTypeIndex) in cvData.technologies" :key="'technologyType-' + technologyTypeIndex">
                                <h3 class="font-weight-bold">{{technologyType.type}}</h3>
                                <div>
                                    <span class="badge badge-primary m-1" v-for="(techItem, techItemIndex) in technologyType.items" :key="'tech-type-' + technologyTypeIndex + '-item-' + techItemIndex">{{techItem}}</span>
                                </div>
                            </article>
                        </div>
                    </section>
                    <hr/>
                    <section class="row">
                        <div class="sectionTitle">
                            <h1>Projects</h1>
                            <p class="text-small pr-3">The descriptions in this section are short because it is sensitive technology-based information about the projects</p>
                        </div>

                        <div class="sectionContent">
                            <article v-for="(project, projectIndex) in cvData.projects" :key="'project-' + projectIndex" class="mb-3">
                                <h3 class="font-weight-bold d-flex">
                                  <a class="text-success my-auto" v-if="project.url" :href="project.url" target="_blank">{{ project.name }}</a>
                                  <span class="my-auto" v-else>{{ project.name }}</span>
                                  <span class="badge badge-info p-1 ml-1" v-if="project.personal">personal</span>
                                </h3>
                                <p class="m-0">{{project.description}}</p>
                            </article>
                        </div>
                    </section>
                    <hr/>
                    <section class="row">
                        <div class="sectionTitle">
                            <h1>Lectures</h1>
                        </div>

                        <div class="sectionContent">
                            <article class="mb-3" v-for="(event, eventIndex) in cvData.events" :key="'event-' + eventIndex">
                                <h3 class="font-weight-bold mb-1">{{event.name}} ({{event.period}})</h3>
                                <p>Represent: <strong>{{event.represent}}</strong></p>
                            </article>
                        </div>
                    </section>
                    <hr/>
                    <section class="row">
                        <div class="sectionTitle">
                            <h1>Languages</h1>
                        </div>

                        <div class="sectionContent">
                            <article v-for="(language, languageIndex) in cvData.languages" :key="'language-' + languageIndex">
                                <h3 class="font-weight-bold">{{language.name}}</h3>
                                <p>Level: {{language.level}}</p>
                            </article>
                        </div>
                    </section>
                    <hr/>
                    <section class="row">
                        <div class="sectionTitle">
                            <h1>Certificates</h1>
                        </div>

                        <div class="sectionContent">
                            <article v-for="(certificate, certificateIndex) in cvData.certificates" :key="'certificate-' + certificateIndex">
                                <h3 class="font-weight-bold">{{certificate.title}}</h3>
                                <p>Issued by {{certificate.issuer}}</p>
                            </article>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    </div>

</template>

<script>
    import cv from "../../data/cv";
    import competences from "../../data/competences";

    export default {
        name: "CV",
        computed: {
            cvData() {
                return cv.data;
            },
            skills() {
                return competences.data;
            }
        }
    }
</script>

<style scoped lang="scss">
    $redColor: #dd3333;

    .text-small {
        font-size: 12px;
    }

    .badge-primary {
        background: $redColor !important;
    }

    .color-primary {
        color: $redColor !important;
    }

    p {
        font-size: 1em;
        line-height: 1.4em;
        margin-bottom: 20px;
        color: #444;
    }

    #cv {
        margin: auto;
    }

    .mainDetails {
        padding: 25px 35px;
        border-bottom: 2px solid $redColor;
    }

    #name {
        h1 {
            font-size: 1.6em;
            font-weight: 700;
            margin-bottom: 6px;
        }

        h2 {
            font-size: 1.1em;
            margin-left: 2px;
        }

        .additional-info {
            font-size: 0.8em;
        }
    }

    #mainArea {
        padding: 0 40px;

        section {
            margin-top: 10px;
        }
    }

    #headshot {
        width: 12.5%;
        float: left;
        margin-right: 30px;

        img {
            width: 100%;
            height: auto;
            -webkit-border-radius: 4px;
            border-radius: 4px;
        }
    }

    #name {
        float: left;
    }

    #contactDetails {
        float: right;
        margin-left: 20px;
    }

    #contactDetails ul {
        list-style-type: none;
        font-size: 0.9em;
        margin-top: 2px;
    }

    #contactDetails ul li {
        margin-bottom: 8px;
    }

    #contactDetails ul li a, a[href^=tel] {
        color: #444;
        text-decoration: none;
        -webkit-transition: all .3s ease-in;
        -moz-transition: all .3s ease-in;
        -o-transition: all .3s ease-in;
        -ms-transition: all .3s ease-in;
        transition: all .3s ease-in;
    }

    #contactDetails ul li a:hover {
        color: $redColor;
    }

    .sectionTitle {
        width: 25%;
    }

    .sectionContent {
        float: right;
        width: 72.5%;
    }

    .sectionTitle h1 {
        font-style: italic;
        font-size: 1.4em;
        color: $redColor;
    }

    .sectionContent h2 {
        font-size: 1.2em;
        font-weight: bold;
    }

    .subDetails {
        font-size: 0.8em;
        font-style: italic;
        margin-bottom: 3px;
    }

    .keySkills {
        list-style-type: none;
        -moz-column-count:3;
        -webkit-column-count:3;
        column-count:3;
        margin-bottom: 20px;
        font-size: 1em;
        color: #444;
    }

    .keySkills ul li {
        margin-bottom: 3px;
    }

    @media all and (min-width: 602px) and (max-width: 800px) {
        #headshot {
            display: none;
        }

        .keySkills {
            -moz-column-count:2;
            -webkit-column-count:2;
            column-count:2;
        }
    }

    @media all and (max-width: 601px) {
        .mainDetails > .d-flex {
            display: block !important;
        }

        #cv {
            width: 95%;
            margin: 10px auto;
            min-width: 280px;
        }

        #headshot {
            display: block;
            width: 100%;
            margin-bottom: 10px;
        }

        #name, #contactDetails {
            float: none;
            display: block;
            width: 100% !important;
            text-align: center;
            margin: 10px 0px;
        }

        .sectionTitle, .sectionContent {
            float: none;
            width: 100%;
        }

        .sectionTitle {
            margin-left: -2px;
            font-size: 1.25em;
            margin-bottom: 10px;
        }

        .keySkills {
            -moz-column-count:2;
            -webkit-column-count:2;
            column-count:2;
        }
    }

    @media all and (max-width: 480px) {
        .mainDetails {
            padding: 15px 15px;
        }

        section {
            padding: 15px 0 0;
        }

        #mainArea {
            padding: 0 25px;
        }


        .keySkills {
            -moz-column-count:1;
            -webkit-column-count:1;
            column-count:1;
        }

        #name h1 {
            line-height: .8em;
            margin-bottom: 4px;
        }
    }

    @media print {
        #cv {
            width: 100%;
        }
    }
</style>