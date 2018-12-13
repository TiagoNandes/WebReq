<template>
  <div>
    <!-- Renders the navbar -->
    <NavBar/>
    <div class="contact-clean" style="padding:48px;"></div>
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-8">
            <form method="post">
              <h2 class="text-center" style="color:#1485ee;">Contacta-nos:</h2>
              <div class="form-group">
                <input class="form-control" type="text" name="name" placeholder="Name">
              </div>
              <div class="form-group">
                <input
                  class="form-control is-invalid"
                  type="email"
                  name="email"
                  placeholder="Email"
                >
              </div>
              <div class="form-group">
                <textarea class="form-control" rows="14" name="message" placeholder="Message"></textarea>
              </div>
              <div class="form-group">
                <button class="btn btn-primary" type="submit">Enviar</button>
              </div>
            </form>
          </div>
          <div class="col">
            <h3 style="font-size:25px;color:#1485ee;">Informações de contacto</h3>
            <i class="icon ion-ios-location icon" style="color:#1485ee;"></i>
            <strong>&nbsp;Localização</strong>
            <p>
              <br>R. Dom Sancho I, 981,&nbsp;
              <br>4480-876 Vila do Conde
              <br>
              <br>
            </p>
            <i class="icon ion-ios-telephone icon" style="color:#1485ee;"></i>
            <strong>&nbsp;Telefone</strong>
            <p>
              <br>252 291 700
              <br>
              <br>
            </p>
            <i class="icon ion-android-mail icon" style="color:#1485ee;"></i>
            <strong>&nbsp;Email</strong>
            <p>
              <br>geral@esmad.ipp.pt
              <br>
              <br>
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>
<script>

import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    NavBar,
    Footer
  }
};
</script>
