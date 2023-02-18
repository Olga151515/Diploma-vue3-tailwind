import { createApp } from "vue";
import { createPinia } from "pinia";
import VueEasyLightbox from "vue-easy-lightbox";
import "./app.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueEasyLightbox);
app.mount("#app");
