import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Team from "./views/profiles/Team.vue";
import Radoslav from "./views/profiles/RadoslavProfile.vue";
import Dinh from "./views/profiles/DinhProfile.vue";
import Hung from "./views/profiles/HungProfile.vue";
import GameHung from "./views/games/GameHung.vue";
import GameDinh from "./views/games/GameDinh.vue";

import MainArticle from "./views/article/MainArticle.vue"


Vue.use(Router);

export default new Router({
    linkExactActiveClass: "active",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            component: About
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            //  component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: "/team",
            name: "team",
            component: Team
        },
        {
            path: "/team/radoslav",
            name: "radoslav",
            component: Radoslav
        },
        {
            path: "/team/dinh",
            name: "dinh",
            component: Dinh,
            meta: {
                breadCrumb: [
                    {text: 'Home', disaled: false, href: '/'},
                    {text: 'Team', disabled: false, href: '/team'},
                    {text: 'Dinh', disabled: true, href: '/team/dinh'}
                ]
            } //TODO meta breadcrumbs
        },
        {
            path: "/team/hung",
            name: "hung",
            component: Hung
        },
        {
            path: "/game/Hung",
            name: "GameHung",
            component: GameHung
        },
        {
            path: "/game/Dinh",
            name: "GameHung",
            component: GameDinh
        },
        {
            path: "/articles/mainarticle",
            name: "mainarticle",
            component: MainArticle
        }

    ],
    mode: 'history'
});
