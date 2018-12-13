

<template>
  <nav class="navbar navbar-light navbar-expand-md  navigation-clean-button">
    <div class="container">
      <a class="navbar-brand" href="#" style="font-family:Karla, sans-serif;">Websomething</a>
      <button class="navbar-toggler" data-toggle="collapse" data-target="#navcol-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navcol-1">
        <ul class="nav navbar-nav mr-auto">
          <li class="nav-item" role="presentation">
            <a
              class="nav-link"
              href="#"
              style="font-family:Karla, sans-serif;color:#1485ee;"
            >
              <router-link :to="{ name: 'home' }" :class="{ 'nav-link': true }">Home</router-link>
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" href="#" style="font-family:Karla, sans-serif;">
              <router-link
                :to="{ name: 'requisitar-equipamento' }"
                :class="{ 'nav-link': true }"
              >Requisitar</router-link>
            </a>
          </li>

          <li class="nav-item" role="presentation">
            <a class="nav-link" href="#" style="font-family:Karla, sans-serif;">
              <router-link :to="{ name: 'contactos' }" :class="{ 'nav-link': true }">Contactos</router-link>
            </a>
          </li>
        </ul>
        <span class="navbar-text actions">
          <a
            class="btn btn-light action-button"
            role="button"
            href="#"
            style=" background-color:rgb(20,133,238); font-family:Karla, sans-serif;">
          <router-link :to="{ name: 'login' }" :class="{ 'nav-link': true }">Login</router-link></a>
        </span>
      </div>
    </div>
  </nav>
</template>