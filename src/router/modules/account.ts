// 账号管理
import navIcon from "@/assets/svg/navIcon7.svg?component";

export default {
  path: "/account",
  name: "AccountManagement",
  redirect: "/account/list",
  meta: {
    title: "账号管理",
    icon: navIcon,
    rank: 6
  },
  children: [
    {
      path: "/account/list",
      name: "AccountList",
      component: () => import("@/views/account/index.vue"),
      meta: { title: "账号管理" }
    }
  ]
} satisfies RouteConfigsTable;
