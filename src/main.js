import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import VueCompositionApi from '@vue/composition-api';
import vuetify from './plugins/vuetify';

import VueGtag from "vue-gtag";

Vue.use(VueGtag, {
  config: { id: "UA-37870949-2" }
});

Vue.use(VueCompositionApi);

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
