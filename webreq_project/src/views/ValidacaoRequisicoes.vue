<template>
  <div class="home">
    <!-- Renders the navbar -->
    <NavBar/>
    <!-- Renders the welcome message -->
    <div class="container" style="margin-top:80px">
            <h2>VALIDAR REQUISIÇÕES</h2>

    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar,
  }
};
</script>
