import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import ProjectDetails from "./views/ProjectDetails.vue"
import Home from "./views/Home.vue"

import "./style.css";
import "./input.css";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/', name: 'home', component: Home},
        {path: '/projects/:id', name: 'project', component: ProjectDetails, props:true}
    ]
})

createApp(App).use(router).mount("#app");
