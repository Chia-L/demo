import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// view-ui-plus
import ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'


const app = createApp(App)

app.use(router)
  .use(ElementPlus)
  .use(ViewUIPlus)

app.mount('#app')
