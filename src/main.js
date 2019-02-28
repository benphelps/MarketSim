import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'
import BootstrapVue from 'bootstrap-vue'

import App from './App.vue'
import store from './store/store.js'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(new VueSocketIO({
    debug: false,
    connection: 'https://ws-api.iextrading.com/1.0/tops',
    vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
    }
}))

new Vue({
	store,
	render: h => h(App),
}).$mount('#app')
