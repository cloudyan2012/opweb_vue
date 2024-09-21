import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SmartView from "@/views/SmartView.vue";
import LoginView from "@/views/LoginView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/smart",
      name: "smarthome",
      component: SmartView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView
    }
  ],
});

export default router;
