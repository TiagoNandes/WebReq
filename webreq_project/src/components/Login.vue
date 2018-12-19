<template>
  <div>
    <NavBar/>

    <div class="login-clean">
      <!-- <form method="post"> -->
      <form @submit.prevent="handleSubmit">
        <h2 class="sr-only">Login Form</h2>
        <div class="illustration">
          <i class="icon ion-ios-navigate" style="color:#1485ee;"></i>
        </div>
        <div class="form-group">
          <input
            v-model="email"
            type="email"
            name="email"
            placeholder="Email"
            class="form-control"
            :class="{ 'is-invalid': submitted && !email}"
          >
          <div v-show="submitted && !email" class="invalid-feedback">E-mail is required</div>
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="password"
            name="password"
            placeholder="Password"
            v-model="password"
            :class="{ 'is-invalid': submitted && !password }"
          >
          <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
        </div>
        <div class="form-group">
          <button class="btn btn-primary" :disabled="status.loggingIn">Login</button>
          <img
            v-show="status.loggingIn"
            src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
          >
          <router-link to="/register" class="btn btn-link">Register</router-link>
        </div>
        <!-- <div class="form-group" style="color:#1485ee;">
          <button
            class="btn btn-primary btn-block"
            type="submit"
            style="background-color:#1485ee;"
           :disabled="status.loggingIn"
          >Log In</button>
        </div>-->
        <!-- <a href="#" class="forgot">Forgot your email or password?</a> -->
      </form>
    </div>
    <Footer/>
  </div>
</template>
<!--<script>

import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    NavBar,
    Footer
  }
};
</script>-->
<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    NavBar,
    Footer
  },

  data() {
    return {
      email: "",
      password: "",
      submitted: false
    };
  },
  computed: {
    ...mapState("account", ["status"])
  },
  created() {
    // reset login status
    this.logout();
  },
  methods: {
    ...mapActions("account", ["login", "logout"]),
    handleSubmit(e) {
      this.submitted = true;
      const { email, password } = this;
      if (email && password) {
        this.login({ email, password });
      }
    }
  }
};
