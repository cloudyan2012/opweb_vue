import { createRouter, createWebHistory } from "vue-router";
import  { useUserStore }  from "@/stores/user";
import HomeView from "../views/HomeView.vue";
import SmartView from "@/views/SmartView.vue";
import LoginView from "@/views/LoginView.vue";
import LogoutView from "@/views/LogoutView.vue";


const router = createRouter({
  history: createWebHistory(),
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
    },
    {
      path: "/logout",
      name: "logout",
      component: LogoutView
    }
  ],
});

router.beforeEach(async (to, from) => {
  const userStore = useUserStore();
  const username = userStore.getUser();
  console.log(username);
  if (!username && to.name !== 'login') {
    return { name: 'login', query: { redirect: to.fullPath }}
  }
})

export default router;
