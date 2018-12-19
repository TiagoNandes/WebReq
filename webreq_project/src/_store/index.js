import Vue from 'vue';
import Vuex from 'vuex';

import { alert } from './alert.module';
import { account } from './account.module';
import { users } from './users.module';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        alert,
        account,
        users
    },
    state:{/*
        users: [
          { id: 0, nome: 'Admin', email: 'admin@admin.com', password: 'admin', tipoUser: 1 },
          { id: 1, nome: 'Funcionario', email: 'funcionario@funcionario.com', password: 'funcionario', tipoUser: 2 },
          { id: 2, nome: 'Aluno', email: 'aluno@aluno.com', password: 'aluno', tipoUser: 3 }
        ],
        equipamento: [
          { id: 0, nome: 'S15', marca: "Sony",modelo:"S15",  categoria: 'Máquinas', subCategoria: 'Fotográficas', estado: "Disponivel", referencia:"12345" },
          { id: 1, nome: 'M20', marca: "Sony",modelo:"M20",  categoria: 'Máquinas', subCategoria: 'De filmar', estado: "Indisponivel", referencia:"22345" },
        ]*/
      }
});
