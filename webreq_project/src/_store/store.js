import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
/*
const utilizadores = {
  //state, getters, mutations, actions
  state: {
    // isLoggedIn: !!localStorage.getItem(“token”)
    users: [
      { id: 0, nome: 'Admin', email: 'admin@admin.com', password: 'admin', tipoUser: 1 },
      { id: 1, nome: 'Funcionario', email: 'funcionario@funcionario.com', password: 'funcionario', tipoUser: 2 },
      { id: 2, nome: 'Aluno', email: 'aluno@aluno.com', password: 'aluno', tipoUser: 3 }
    ]
  },
  mutations: {
//login ()
  },
  actions: {
//login ()
  },
  getters: {

//isAdmin()
  }
}*/
/*
export default new Vuex.Store({
  state:{
    users: [
      { id: 0, nome: 'Admin', email: 'admin@admin.com', password: 'admin', tipoUser: 1 },
      { id: 1, nome: 'Funcionario', email: 'funcionario@funcionario.com', password: 'funcionario', tipoUser: 2 },
      { id: 2, nome: 'Aluno', email: 'aluno@aluno.com', password: 'aluno', tipoUser: 3 }
    ],
    equipamento: [
      { id: 0, nome: 'S15', marca: "Sony",modelo:"S15",  categoria: 'Máquinas', subCategoria: 'Fotográficas', estado: "Disponivel", referencia:"12345" },
      { id: 1, nome: 'M20', marca: "Sony",modelo:"M20",  categoria: 'Máquinas', subCategoria: 'De filmar', estado: "Indisponivel", referencia:"22345" },
    ]
  },
  getters:{
    verifyLogin: (state) => (credentials) => {
      let errorMsg = ""
      //User exists
      if (((state.users.find(user => user.email === credentials.email)) != null)) {
        //Wrong Password
        if ((state.users.find(user => user.email === credentials.email).password != credentials.password)) {
          errorMsg += "Wrong Password "
        }
        else {
          state.userIdLogged = state.users.find(user => user.email === credentials.email).id
          localStorage.setItem("userLogged", state.userIdLogged)
        }
      }
      else {
        errorMsg += "email not found"
      }
      return errorMsg
    },
  },
  mutations:{
  },
  actions:{
  }
  })
*/
//https://medium.com/front-end-weekly/persisting-user-authentication-with-vuex-in-vue-b1514d5d3278
//https://scotch.io/tutorials/handling-authentication-in-vue-using-vuex