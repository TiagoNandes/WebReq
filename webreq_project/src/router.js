import Vue from "vue";
import Router from "vue-router";
//import BootstrapVue from 'bootstrap-vue';


import Home from "./views/Home.vue";
import RequisitarEquipamento from "./views/RequisitarEquipamento.vue";
import ListaUtilizadores from "./views/ListaUtilizadores.vue";
import MinhasRequisicoes from "./views/MinhasRequisicoes.vue";
import ValidacaoRequisicoes from "./views/ValidacaoRequisicoes.vue";
import VerificacaoDevolucoes from "./views/VerificacaoDevolucoes.vue";

Vue.use(Router);
//Vue.use(BootstrapVue);

export default new Router({
    routes: [{
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
        path:"*",
        redirect:"/"
    }




    ]
});