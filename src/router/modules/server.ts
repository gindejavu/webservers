// 服务器管理
import serverIcon from "@/assets/svg/navIcon9.svg?component";

export default {
  path: "/server",
  name: "ServerManagement",
  meta: {
    title: "服务器管理",
    icon: serverIcon,
    rank: 8
  },
  children: [
    {
      path: "/server/list",
      name: "ServerList",
      component: () => import("@/views/server/list.vue"),
      meta: { title: "服务器列表" }
    },
    {
      path: "/server/config",
      name: "ServerConfig",
      component: () => import("@/views/server/config.vue"),
      meta: { title: "服务器配置" }
    }
  ]
} satisfies RouteConfigsTable;
