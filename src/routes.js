import Home from './pages/home/Home.vue';
import Development from './pages/development/Development.vue';
import Design from './pages/design/Design.vue';
import About from './pages/about/About.vue';
import CV from './pages/cv/CV.vue';
import Videos from './pages/videos/Videos.vue';
import Contact from './pages/contact/Contact.vue';
import Competences from './pages/competences/Competences.vue';
import Snippets from './pages/snippets/Snippets.vue';
import PageNotFound from './pages/errors/PageNotFound.vue';

export const routes = [
    { path: '/', component: Home },
    { path: '/development', component: Development },
    { path: '/design', component: Design },
    { path: '/about', component: About },
    { path: '/cv', component: CV },
    { path: '/videos', component: Videos },
    { path: '/contact', component: Contact },
    { path: '/competences', component: Competences },
    { path: '/snippets', component: Snippets },

    //errors
    { path: '/404', component: PageNotFound },  
    { path: '*', redirect: '/404' },  
];