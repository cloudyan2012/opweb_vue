import  { useUserStore }  from "@/stores/user";
import { createRouter, createWebHistory } from "vue-router";

function loadView(view) {
  return () => import(`@/views/${view}.vue`);
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: loadView('Home')
    },
    {
      path: "/smart",
      name: "smarthome",
      component: loadView('Smart')
    },
    {
      path: "/login",
      name: "login",
      component: loadView('Login')
    },
    {
      path: "/logout",
      name: "logout",
      component: loadView('Logout')
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
