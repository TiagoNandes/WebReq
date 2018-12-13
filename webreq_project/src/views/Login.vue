<template>
<div>
            <NavBar/>

    <div class="login-clean">
        <form method="post">
            <h2 class="sr-only">Login Form</h2>
            <div class="illustration"><i class="icon ion-ios-navigate" style="color:#1485ee;"></i></div>
            <div class="form-group"><input class="form-control" type="email" name="email" placeholder="Email"></div>
            <div class="form-group"><input class="form-control" type="password" name="password" placeholder="Password"></div>
            <div class="form-group" style="color:#1485ee;"><button class="btn btn-primary btn-block" type="submit" style="background-color:#1485ee;">Log In</button></div><a href="#" class="forgot">Forgot your email or password?</a></form>
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
