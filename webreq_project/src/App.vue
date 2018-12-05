<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>
export default {
  data: function() {
    return {
      equipamentos: []
    };
  },
  created() {
    if (!localStorage.equipamentos) {
      this.equipamentos = [
        {
          id: 0,
          name: "Sony Alpha A6000 16-50mm F3.5-5.6 OSS PZ Preto",
          photo:
            "https://rhinocamera.imgix.net/products/lg/45d25faf-fac3-49c7-bc84-b7bf8e87c9d6.jpg",
          categoria: "Máquinas",
          subCategoria: "Fotográficas"
        },
        {
          id: 1,
          name: "Câmara de Video Sony FDR-AX53 8.29 MP Zoom 40 X LCD 7.5CM",
          photo:
            "https://www.electrocosto.pt/515774-small_default/sony-fdr-ax53.jpg",
          categoria: "Máquinas",
          subCategoria: "De Video"
        }
      ];
      localStorage.setItem("equipamentos", JSON.stringify(this.equipamentos));
    } else {
      this.equipamentos = JSON.parse(localStorage.getItem("equipamentos"));
    }
  },/*
  mounted(){
    let mainScript = document.createElement('script')
    mainScript.setAttribute('src','./assets/js/page.js')
  document.head.appendChild(mainScript)
  }*/
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>