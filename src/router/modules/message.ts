// 消息管理
import messageIcon from "@/assets/svg/navIcon6.svg?component";

export default {
  path: "/message",
  name: "MessageManagement",
  meta: {
    title: "消息管理",
    icon: messageIcon,
    rank: 5
  },
  component: () => import("@/views/message/index.vue")
} satisfies RouteConfigsTable;
