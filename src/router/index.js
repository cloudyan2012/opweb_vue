import  { useUserStore }  from "@/stores/user";
import { createRouter, createWebHashHistory } from "vue-router";

function loadView(view) {
  return () => import(`@/views/${view}.vue`);
}

const router = createRouter({
  history: createWebHashHistory(),
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
      path: "/notes",
      name: "notes",
      component: loadView('Notes')
    },
    {
      path: "/reports",
      name: "reports",
      component: loadView('Reports')
    },
    {
      path: "/admin",
      name: "admin",
      component: loadView('Admin')
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
  if (!username && to.name !== 'login') {
    return { name: 'login', query: { redirect: to.fullPath }}
  }
})

export default router;
