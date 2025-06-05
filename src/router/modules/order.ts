// 订单管理
import orderIcon from "@/assets/svg/navIcon4.svg?component";

export default {
  path: "/order",
  name: "OrderManagement",
  meta: {
    title: "订单管理",
    icon: orderIcon,
    rank: 3
  },
  component: () => import("@/views/order/index.vue")
} satisfies RouteConfigsTable;
