import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
const app = createApp(App);
// createApp(App).mount("#app");

// 引入ui依赖
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
app.use(ElementPlus);
// 引入webgl3d组件包
import "./assets/index.css";
import webgl3d from "@supermap/iclient3d-vue-for-webgl";
// import "./demo.js";
// import webgl3d_mc from "./assets/js/types"; //先引入
// window.webgl3d_mc = webgl3d_mc; //便于全局调用
app.use(webgl3d);

app.mount("#app");
