import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import VueApollo from "vue-apollo";
import "./plugins/element.js";

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  uri: "http://localhost:8000/",
  cache
});

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  apolloProvider
}).$mount("#app");
