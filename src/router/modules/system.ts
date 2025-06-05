// 系统管理
import systemIcon from "@/assets/svg/navIcon10.svg?component";

export default {
  path: "/system",
  name: "SystemManagement",
  meta: {
    title: "系统管理",
    icon: systemIcon,
    rank: 9
  },
  children: [
    {
      path: "/system/role",
      name: "SystemRole",
      component: () => import("@/views/system/role.vue"),
      meta: { title: "角色管理" }
    },
    {
      path: "/system/log",
      name: "SystemLog",
      component: () => import("@/views/system/log.vue"),
      meta: { title: "操作日志" }
    }
  ]
} satisfies RouteConfigsTable;
