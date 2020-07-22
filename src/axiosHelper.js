import axios from 'axios'
import store from './store/store'
import router from './router'
import { getToken } from './localstorageHelper'
import { SnackbarProgrammatic as Snackbar } from 'buefy'

let myAxios = axios.create();

let token = getToken();
// if (token) {
//   this.axios.defaults.headers.common["Authorization"] = getToken();
// }
if (token) {
  myAxios.defaults.headers.common["Authorization"] = token;
}
myAxios.defaults.baseURL = `http://url`

myAxios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  if (error) {
    if (error.response.status === 500) {
      Snackbar.open({
        message: "<b>Network Error</b><br/>Please Check Your Network Connection",
        position: 'is-bottom-right',
        type: 'is-danger',
        queue: false
      });
    }
    if(error.response.status === 401){
    // else if (error.response.status === 401) {
      // if (this.$router.path != '/login') {
        Snackbar.open({
          message: "<b>Your Session Has Ended</b><br/>Please Login Again to Continue",
          position: 'is-bottom-right',
          type: 'is-danger',
          queue: false
        });
        store.dispatch("login/logout")
        router.push('/login')
        // this.$buefy.toast.open({
        //   duration: 1000,
        //   message: "Please Login Again",
        //   type: "is-danger",
        //   position: "is-top"
        // });
      // }
    }
  }
  return Promise.reject(error)
})

export default myAxios
