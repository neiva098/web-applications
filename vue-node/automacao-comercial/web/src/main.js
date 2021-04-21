import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import Buefy from "buefy";
import axios from "axios";
import VueAxios from "vue-axios";
import "buefy/dist/buefy.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserSecret, faPlusCircle, faMinusCircle, faEdit);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(Buefy);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
