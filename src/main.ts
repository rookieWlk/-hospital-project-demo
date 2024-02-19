// vue3提供的方法createApp方法，可以用来创建应用实例的方法
import { createApp } from "vue";
// 引入清除默认样式
import "./style/reset.scss";
// 引入根组件App
import App from "@/App.vue";

// 引入全局组件--头部
import HospitalHead from "@/components/hospital-head/index.vue";
// 引入全局组件--底部
import HospitalFoot from "@/components/hospital-foot/index.vue";

// 引入vue-router核心插件并安装
import router from "@/router";

// 引入element-plus插件并安装
import ElementPlus from 'element-plus'

//引入pinia仓库
// import pinia from '@/store'

import 'element-plus/dist/index.css'
// 利用createApp方法创建应用实例，并将其挂载到#app元素上

const app = createApp(App);
app.component("HospitalHead", HospitalHead);
app.component("HospitalFoot", HospitalFoot);

// 安装vue-router
app.use(router);
// 安装element-plus
app.use(ElementPlus);
//安装pinia仓库
// app.use(pinia);

// 挂载，挂载点在父级目录里的index.html里的 id="app"
app.mount("#app"); //注意：app.mount('#app')要写到最后
// 因为在 Vue 3 中，应用实例需要先进行配置和初始化，然后才能被挂载到 DOM 上。
// 如果你在调用 app.mount('#app') 之前对应用实例进行了修改或配置，那么这些修改和配置可能会被忽略。

// 另一种写法：
// createApp(App).mount('#app')
