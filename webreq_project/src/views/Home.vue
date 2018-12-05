<template>
  <div class="home">
    <!-- Renders the navbar -->
    <NavBar/>
    <!-- Renders the welcome message -->
    <div class="container" style="margin-top:80px">
      <PagInicial/>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import PagInicial from "@/components/PagInicial.vue";
export default {
  components: {
    NavBar,
    PagInicial
  }
};
</script>
