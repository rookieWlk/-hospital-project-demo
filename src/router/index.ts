import { createRouter, createWebHistory } from "vue-router";
// createRouter方法，用来创建路由器，可以管理多个路由

export default createRouter({
  // 路由的模式的设置
  history: createWebHistory(),
  // 管理多个路由
  routes: [
    {
      // 重定向
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      // 路由懒加载
      component: () => import("@/pages/home/index.vue"),
    },
    {
      path: "/hospital",
      component: () => import("@/pages/hospital/index.vue"),
    },
  ],
  // 页面的滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    };
  },
});
