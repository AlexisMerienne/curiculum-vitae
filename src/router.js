import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/home",
            name: "home",
            component: () => import("./components/Curiculum")
        },
        {
            path: "/experiencepro",
            name: "experiencepro",
            component: () => import("./components/pages/ExperiencePro")
        },
    ]
});

