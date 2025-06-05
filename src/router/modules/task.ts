// 任务管理
import taskIcon from "@/assets/svg/navIcon5.svg?component";

export default {
  path: "/task",
  name: "TaskManagement",
  meta: {
    title: "任务管理",
    icon: taskIcon,
    rank: 4
  },
  children: [
    {
      path: "/task/pending",
      name: "TaskPending",
      component: () => import("@/views/task/pending.vue"),
      meta: { title: "待提交列表" }
    },
    {
      path: "/task/list",
      name: "TaskList",
      component: () => import("@/views/task/list.vue"),
      meta: { title: "任务列表" }
    }
  ]
} satisfies RouteConfigsTable;
