import Vue from "vue";
import VueRouter from "vue-router";
import BrivaEnterprise from "../components/briva-enterprise.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "BrivaEnterpriseHome",
    component: BrivaEnterprise,
    meta: { requiresAuth: true },
  },
  {
    path: "/home",
    name: "BrivaEnterpriseHome",
    component: BrivaEnterprise,
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});

router.beforeEach((to, from, next) => {
  const isRouteDefined = router.options.routes.some(
    (route) => route.path === to.path
  );
  if (!isRouteDefined) {
    next("/");
  } else {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      const isAuthenticated = true;
      if (!isAuthenticated) {
        next("/");
      } else {
        next();
      }
    } else {
      next();
    }
  }
});

export default router;
