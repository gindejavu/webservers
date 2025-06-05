// 费用管理
import expenseIcon from "@/assets/svg/navIcon3.svg?component";

export default {
  path: "/expense",
  name: "ExpenseManagement",
  meta: {
    title: "费用管理",
    icon: expenseIcon,
    rank: 2
  },
  children: [
    {
      path: "/expense/boss",
      name: "ExpenseBoss",
      component: () => import("@/views/expense/boss.vue"),
      meta: { title: "老板费用" }
    },
    {
      path: "/expense/agent",
      name: "ExpenseAgent",
      component: () => import("@/views/expense/agent.vue"),
      meta: { title: "代理费用" }
    },
    {
      path: "/expense/black",
      name: "ExpenseBlack",
      component: () => import("@/views/expense/black.vue"),
      meta: { title: "小黑费用" }
    },
    {
      path: "/expense/platform",
      name: "ExpensePlatform",
      component: () => import("@/views/expense/platform.vue"),
      meta: { title: "平台流水" }
    }
  ]
} satisfies RouteConfigsTable;
