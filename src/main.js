import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

createApp(App).mount("#app");

const TwoWayBindingApp = {
  data() {
    return {
      message: "Hell",
    };
  },
};

Vue.createApp(TwoWayBindingApp).mount("#two-way-binding");
