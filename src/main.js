import Vue from 'vue'
import {
  Button,
  Table,
  TableColumn,
  Dialog,
  Input,
  DatePicker,
  Option,
  Select,
  Pagination,
  Checkbox,
  Tag,
  Popover,
  Main,
  Aside,
  Container,
  Loading,
  Form,
  FormItem
} from 'element-ui'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Dialog)
Vue.use(Input)
Vue.use(DatePicker)
Vue.use(Option)
Vue.use(Select)
Vue.use(Pagination)
Vue.use(Checkbox)
Vue.use(Tag)
Vue.use(Popover)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Container)
Vue.use(Loading)
Vue.use(Form)
Vue.use(FormItem)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
