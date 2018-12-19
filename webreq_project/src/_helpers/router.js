import Vue from "vue";
import Router from "vue-router";

import Home from "../views/Home.vue";
import RequisitarEquipamento from "../views/RequisitarEquipamento.vue";
import ListaUtilizadores from "../views/ListaUtilizadores.vue";
import MinhasRequisicoes from "../views/MinhasRequisicoes.vue";
import ValidacaoRequisicoes from "../views/ValidacaoRequisicoes.vue";
import VerificacaoDevolucoes from "../views/VerificacaoDevolucoes.vue";
import Contactos from "../views/Contactos.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/equipamentos",
            name: "requisitar-equipamento",
            component: RequisitarEquipamento
        },
        {
            path: "/utilizadores",
            name: "lista-utilizadores",
            component: ListaUtilizadores
        },
        {
            path: "/requisicoes",
            name: "minhas-requisicoes",
            component: MinhasRequisicoes
        },
        {
            path: "/validacao",
            name: "validacao-requisicoes",
            component: ValidacaoRequisicoes
        },
        {
            path: "/verificacao",
            name: "verificacao-devolucoes",
            component: VerificacaoDevolucoes
        },
        {
            path: "/contactos",
            name: "contactos",
            component: Contactos
        },
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/register",
            name: "register",
            component: Register
        },
        // otherwise redirect to home
        { path: '*', redirect: '/' }
    ]
});

router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login', '/register', '/'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    /*if (loggedIn){
        return next({
            path: '/contactos'
        })
    }
    else */if (authRequired && !loggedIn) {
        return next('/login');
    }

    next();
})
