import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from "@/router";
import VueLazyload from 'vue-lazyload'
import { firestorePlugin } from "vuefire";
import style from "./assets/style/style.css"
import VueSimpleAlert from "vue-simple-alert";
import VueCarousel from 'vue-carousel';
import SweetAlertIcons from 'vue-sweetalert-icons';

// import Ads from 'vue-google-adsense'
// Vue.use(require('vue-script2'))
// Vue.use(Ads.AutoAdsense, { adClient: 'ca-pub-5411598541821639', isNewAdsCode: true })

Vue.config.productionTip = false

Vue.use(VueCarousel);
Vue.use(VueLazyload)
Vue.use(firestorePlugin);
Vue.use(VueSimpleAlert);
Vue.use(SweetAlertIcons);

new Vue({
    style,
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app')
