<template>
  <div class="home">
    <!-- Renders the navbar -->
    <NavBar/>
    <!-- Renders the welcome message -->
    <div class="container" style="margin-top:80px">
      <PagInicial/>
    </div>
    <Footer/>
  </div>

</template>

<script>
import NavBar from "@/components/NavBar.vue";
import PagInicial from "@/components/PagInicial.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    NavBar,
    PagInicial,
    Footer
  }
};
</script>
