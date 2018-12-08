// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Select, Container, Header, Aside, Main,
  Footer, Menu, MenuItem, MenuItemGroup, Submenu, Table, Scrollbar } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(Button).use(Container).use(Header).use(Aside).use(Main).use(Footer).use(Menu).use(MenuItem).use(Scrollbar)
  .use(MenuItemGroup).use(Submenu).use(Table).use(Select)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})