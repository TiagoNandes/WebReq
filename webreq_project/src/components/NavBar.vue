<!--<template >-->
    <!--  <nav id="menu" class="navbar navbar-default navbar-fixed-top">
    <div class="container">-->
      <!-- Brand and toggle get grouped for better mobile display -->
     <!-- <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand page-scroll" href="#page-top">WebReq</a>
      </div>
-->
      <!-- Collect the nav links, forms, and other content for toggling  -->
    <!--  <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-center">
          <li>
            <router-link :to="{ name: 'lista-utilizadores' }" :class="{ 'nav-link': true }"
          >Lista De Utilizadores</router-link
        > 
            <a href="#home" class="page-scroll">Home</a>
          </li>
          <li>
            <router-link :to="{ name: 'requisitar-equipamento' }" :class="{ 'nav-link': true }"
          >Requisitar Equipamento</router-link>
          </li>
          <li>
            <a href="#" class="page-scroll">Minhas Requisições</a>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="" data-toggle="modal" data-target="#loginModal">
              <i class="fas fa-user"></i>&emsp;Login</a>
          </li>
        </ul>
      </div>-->
      <!-- /.navbar-collapse -->
      <!--
    </div>
  </nav>-->
<!--</template>-->


<template>
  <!-- Renders the navbar with the respective router-links -->
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
    <a class="navbar-brand" href="/">WebReq</a>
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link :to="{ name: 'requisitar-equipamento' }" :class="{ 'nav-link': true }"
          >Requisitar Equipamento</router-link
        >
      </li>
      <li class="nav-item">
         <router-link :to="{ name: 'lista-utilizadores' }" :class="{ 'nav-link': true }"
          >Lista De Utilizadores</router-link
        > 
      </li> 
        <li class="nav-item">
         <router-link :to="{ name: 'minhas-requisicoes' }" :class="{ 'nav-link': true }"
          >Minhas Requisicões</router-link
        > 
      </li>   <li class="nav-item">
         <router-link :to="{ name: 'validacao-requisicoes' }" :class="{ 'nav-link': true }"
          >Validação de requisições</router-link
        > 
      </li>   <li class="nav-item">
         <router-link :to="{ name: 'verificacao-devolucoes' }" :class="{ 'nav-link': true }"
          >Verificação de devoluções</router-link
        > 
      </li> 
  </ul>
  </nav>
</template>
