// 用户管理
import userIcon from "@/assets/svg/navIcon2.svg?component";

export default {
  path: "/user",
  name: "UserManagement",
  meta: {
    title: "用户管理",
    icon: userIcon,
    rank: 1
  },
  children: [
    {
      path: "/user/upstream",
      name: "UserUpstream",
      component: () => import("@/views/user/upstream.vue"),
      meta: { title: "上游老板" }
    },
    {
      path: "/user/customer",
      name: "UserCustomer",
      component: () => import("@/views/user/customer.vue"),
      meta: { title: "老板客服" }
    },
    {
      path: "/user/blacklist",
      name: "UserBlacklist",
      component: () => import("@/views/user/blacklist.vue"),
      meta: { title: "小黑用户" }
    },
    {
      path: "/user/agent",
      name: "UserAgent",
      component: () => import("@/views/user/agent.vue"),
      meta: { title: "下级代理" }
    },
    {
      path: "/user/admin",
      name: "UserAdmin",
      component: () => import("@/views/user/admin.vue"),
      meta: { title: "管理员" }
    },
    {
      path: "/user/agreement",
      name: "UserAgreement",
      component: () => import("@/views/user/agreement.vue"),
      meta: { title: "用户协议" }
    }
  ]
} satisfies RouteConfigsTable;
