<template>
  <CARD>
    <div class="table-container">
      <el-form>
        <el-form-item label="老板昵称">
          <el-input v-model="bossName" placeholder="请输入" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">
            <img
              style="width: 18px; height: 18px; margin-right: 5px"
              src="@/assets/img/search1.png"
              alt=""
            />查询</el-button
          >
        </el-form-item>
      </el-form>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="id" label="序号" width="80" />
        <el-table-column prop="accountId" label="账号ID" width="130" />
        <el-table-column prop="bossName" label="老板昵称" width="100" />
        <el-table-column prop="availableBalance" label="可用余额" width="120" />
        <el-table-column prop="totalOrders" label="订单总数" width="100" />
        <el-table-column
          prop="ongoingOrders"
          label="正在进行订单数"
          width="150"
        />
        <el-table-column
          prop="lastRechargeTime"
          label="上次充值时间"
          width="180"
        />
        <el-table-column
          prop="totalConsumption"
          label="总消费金额"
          width="130"
        />
        <el-table-column label="操作" width="150">
          <template #default="{ row }">
            <span style=" margin-right: 10px; color: #409eff;cursor: pointer"
              >{{ row }}老板交易</span
            >
            <span style=" color: #409eff;cursor: pointer">修改单价</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </CARD>
</template>

<script setup lang="ts">
import { ref } from "vue";

const tableData = ref([
  {
    id: 1,
    accountId: "0201927321",
    bossName: "Admin",
    availableBalance: "＄987.40",
    totalOrders: 18,
    ongoingOrders: 2,
    lastRechargeTime: "2025/05/23 10:30:00",
    totalConsumption: "＄16,895.46"
  },
  {
    id: 2,
    accountId: "0201927321",
    bossName: "Admin",
    availableBalance: "＄987.40",
    totalOrders: 25,
    ongoingOrders: 1,
    lastRechargeTime: "2025/05/22 21:30:50",
    totalConsumption: "＄16,895.46"
  },
  {
    id: 3,
    accountId: "0201927321",
    bossName: "Admin",
    availableBalance: "＄987.00",
    totalOrders: 99,
    ongoingOrders: 3,
    lastRechargeTime: "2025/05/22 19:56:43",
    totalConsumption: "＄16,895.46"
  },
  {
    id: 4,
    accountId: "0201927321",
    bossName: "Admin",
    availableBalance: "＄987.12",
    totalOrders: 106,
    ongoingOrders: 0,
    lastRechargeTime: "2025/05/22 10:41:13",
    totalConsumption: "＄16,895.46"
  },
  {
    id: 5,
    accountId: "0201927321",
    bossName: "Admin",
    availableBalance: "＄987.40",
    totalOrders: 7,
    ongoingOrders: 0,
    lastRechargeTime: "2025/05/23 10:30:00",
    totalConsumption: "＄16,895.46"
  },
  {
    id: 6,
    accountId: "0201927321",
    bossName: "Admin",
    availableBalance: "＄987.40",
    totalOrders: 1,
    ongoingOrders: 0,
    lastRechargeTime: "2025/05/22 21:30:50",
    totalConsumption: "＄16,895.46"
  },
  {
    id: 7,
    accountId: "0201927321",
    bossName: "Admin",
    availableBalance: "＄987.00",
    totalOrders: 0,
    ongoingOrders: 7,
    lastRechargeTime: "2025/05/22 19:56:43",
    totalConsumption: "＄16,895.46"
  },
  {
    id: 8,
    accountId: "0201927321",
    bossName: "Admin",
    availableBalance: "＄987.12",
    totalOrders: 85,
    ongoingOrders: 9,
    lastRechargeTime: "2025/05/22 10:41:13",
    totalConsumption: "＄16,895.46"
  },
  {
    id: 9,
    accountId: "0201927321",
    bossName: "Admin",
    availableBalance: "＄987.40",
    totalOrders: 3,
    ongoingOrders: 1,
    lastRechargeTime: "2025/05/22 06:20:36",
    totalConsumption: "＄16,895.46"
  },
  {
    id: 10,
    accountId: "0201927321",
    bossName: "Admin",
    availableBalance: "＄987.40",
    totalOrders: 85,
    ongoingOrders: 9,
    lastRechargeTime: "2025/05/22 10:41:13",
    totalConsumption: "＄16,895.46"
  }
]);
</script>
