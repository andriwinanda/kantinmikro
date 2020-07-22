<template>
  <div class="section">
    <!-- <b-loading :is-full-page="true" :active.sync="isLoading" /> -->
    <div class="formToken">
      <p class="title has-text-centered">
        <img src="../assets/img/company-white.png" alt="">
      </p>
      <div class="card card-shadow">
        <div class="card-content">
          <div class="content">
            <div class="label">Username</div>
            <b-field>
              <b-input v-model="username" />
            </b-field>
            <div class="label">Password</div>
            <b-field>
              <b-input type="password" v-model="password" @keyup.enter.native="login()" />
            </b-field>
            <b-field>
              <b-button class="is-fullwidth" type="is-primary" @click="login">Login</b-button>
            </b-field>
          </div>
        </div>
      </div>
      <!-- <small>*) Harap masukan username aplikasi anda</small> -->
    </div>
  </div>
</template>
<script>
import {
  setToken,
  getToken,
  setDataUser,
  getDataUser
} from "@/localstorageHelper";

import { urlEncoded } from "../functionHelper";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      // let dataLogin = {
      //   username: this.username,
      //   password: this.password
      // };

      // this.axios
      //   .post("/login", urlEncoded(dataLogin))
      //   .then(res => {
      //     let data = res.data.success;

      //     if (data.role == "Admin") {
      //       let token = "Bearer " + data.token;
            let dataLogin = {
              token: "jwt",
              dataUser: {
                name: "admin",
                role: "admin"
              }
            };
            this.$store.dispatch("login/login").then(res => {
              this.$store.commit("login/setLocalstorage", dataLogin.dataUser);

              setToken(dataLogin.token);
              setDataUser(dataLogin.dataUser);
              this.$router.push("/");
            });
        //     this.axios.defaults.headers.common["Authorization"] = token;
        //     this.$buefy.toast.open({
        //       duration: 1000,
        //       message: "Login Berhasil",
        //       type: "is-primary",
        //       position: "is-top"
        //     });
        //   } else {
        //     this.$buefy.toast.open({
        //       duration: 3000,
        //       message: "You dont have access to this site",
        //       type: "is-danger",
        //       position: "is-top"
        //     });
        //   }
        // })
        // .catch(() => {
        //   this.$buefy.toast.open({
        //     duration: 1000,
        //     message: "username/password incorrect",
        //     type: "is-danger",
        //     position: "is-top"
        //   });
        // });
    }
  }
};
</script>
<style scoped>
.formToken {
  width: 400px;
  margin: auto;
}
.section {
  padding-top: 7rem !important;
}
</style>
