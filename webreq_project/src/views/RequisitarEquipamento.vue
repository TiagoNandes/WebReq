<template>
  <div class="equipamentos-list">
    <!-- Renders the navbar -->
    <NavBar/>
    <!-- Container for render all the remaining components -->
    <div class="container" style="margin-top:80px">
      <h2>REQUISITAR EQUIPAMENTO</h2>
      <table class="table table-dark table-hover table-sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Categoria</th>
            <th>Sub-Categoria</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="equipamento in equipamentos" :key="equipamento.id">
            <td>{{ equipamento.id }}</td>
            <td>{{ equipamento.name }}</td>
            <td>{{ equipamento.categoria }}</td>
            <td>{{ equipamento.subCategoria }}</td>

            <!-- <td>
              <router-link
                :to="{ name: 'equipamento-detail', params: { equipamentoId: equipamento.id } }"
                tag="button"
                :class="{ btn: true, 'btn-danger': true, 'btn-sm': true }"
                >more info</router-link
              >
            </td>-->
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>




<script>
import NavBar from "@/components/NavBar.vue";
export default {
  data: function() {
    return {
      equipamentos: JSON.parse(localStorage.getItem("equipamentos"))
    };
  },
  components: {
    NavBar
  }
};
</script>
