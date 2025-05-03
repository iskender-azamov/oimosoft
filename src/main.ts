import { createApp } from "vue";

import App from "./App.vue";

import router from "./router";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Card from "primevue/card";
import Dialog from "primevue/dialog";
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './assets/scss/reset.scss'
import './assets/scss/common.scss'
const app = createApp(App);
app.use(PrimeVue);
app.use(router);
app.component("Card", Card);
app.component("Button", Button);
app.component("Dialog", Dialog);
app.mount("#app");
