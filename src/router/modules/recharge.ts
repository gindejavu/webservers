// 充值管理
import rechargeIcon from "@/assets/svg/navIcon8.svg?component";

export default {
  path: "/recharge",
  name: "RechargeManagement",
  meta: {
    title: "充值管理",
    icon: rechargeIcon,
    rank: 7
  },
  children: [
    {
      path: "/recharge/setting",
      name: "RechargeSetting",
      component: () => import("@/views/recharge/setting.vue"),
      meta: { title: "充值设置" }
    },
    {
      path: "/recharge/list",
      name: "RechargeList",
      component: () => import("@/views/recharge/list.vue"),
      meta: { title: "充值列表" }
    }
  ]
} satisfies RouteConfigsTable;
