import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'
Vue.config.productionTip = false
const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: 'https://api.saguenaylacsaintjean.ca/api/v2/graphql'
})
const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

Vue.use(VueApollo)
new Vue({
  router,
  store,
  provide: apolloProvider.provide(),
  render: h => h(App)
}).$mount('#app')
