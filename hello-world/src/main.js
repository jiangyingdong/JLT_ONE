import Vue from 'vue'
import App from './App.vue'
import router from './router'

// ElementUI UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 国际化
import i18n from './lang'
Vue.use(ElementUI, {
  size: 'medium',
  i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
