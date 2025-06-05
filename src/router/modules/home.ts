// import { $t } from "@/plugins/i18n";
// const { VITE_HIDE_HOME } = import.meta.env;
const Layout = () => import("@/layout/index.vue");

// export default {
//   path: "/",
//   name: "Home",
//   component: Layout,
//   redirect: "/welcome",
//   meta: {
//     icon: "ep/home-filled",
//     title: $t("menus.pureHome"),
//     rank: 0
//   },
//   children: [
//     {
//       path: "/welcome",
//       name: "Welcome",
//       component: () => import("@/views/welcome/index.vue"),
//       meta: {
//         title: $t("menus.pureHome"),
//         showLink: VITE_HIDE_HOME === "true" ? false : true
//       }
//     }
//   ]
// } satisfies RouteConfigsTable;

import navIcon1 from "@/assets/svg/navIcon1.svg?component";

export default {
  path: "/",
  name: "home",
  redirect: "/home",
  component: Layout,
  meta: {
    rank: 0,
    title: "首页",
    icon: navIcon1
  },
  children: [
    {
      path: "/home",
      name: "homeChild",
      component: () => import("@/views/home/index.vue"),
      meta: {
        title: "首页"
      }
    }
  ]
} satisfies RouteConfigsTable;
