<template>
  <LoginWrapper>
    <template #login-content>
      <div class="selectView">
        <div class="selectCard">
          <div class="SelectAccountText">Select Account Type</div>
          <div class="selectList">
            <BackButton />
            <div
              v-for="item in selectAccountList"
              :key="item.id"
              class="selectItem"
              :style="{
                borderColor: item.color,
                backgroundImage: `url(${item.BG})`
              }"
              @click="goSumbitAnOrder(item.id)"
            >
              <div class="itemTop">
                <div class="title">{{ item.title }}</div>
                <div class="icon" :style="{ backgroundColor: item.color }">
                  <img :src="item.icon" alt="" />
                </div>
              </div>
              <div class="itemButtom">{{ item.text }}</div>
              <div
                class="itemRound"
                :style="{ backgroundColor: item.bgColor }"
              />
            </div>
          </div>
        </div>
      </div>
    </template>
  </LoginWrapper>
</template>

<script setup lang="ts">
import LoginWrapper from "./components/LoginWrapper.vue";
import BackButton from "./components/BackButton.vue";

import { ref } from "vue";
import enquire from "@/assets/img/enquire.png";
import submit from "@/assets/img/submit.png";
import bgc1 from "@/assets/img/bgc1.png";
import bgc from "@/assets/img/bgc.png";

import { useRouter } from "vue-router";
const router = useRouter();

const selectAccountList = ref([
  {
    id: "1",
    title: "Submit An Order",
    text: "Order Placement | Order Management | Customer Support System",
    icon: enquire,
    color: "rgba(77,121,255,0.65)",
    BG: bgc1,
    bgColor: "rgba(255,255,255,0.1)"
  },
  {
    id: "2",
    title: "Be An Agent",
    text: "Recruit Downline | Manage Downline | View Earnings",
    icon: submit,
    color: "rgba(143,233,81,0.8)",
    BG: bgc,
    bgColor: "rgba(255,255,255,0.2)"
  }
]);

const goSumbitAnOrder = (id: string) => {
  //跳转到 /login/submit
  router.push({
    path: "/login/submit",
    query: { id }
  });
};
</script>

<style lang="less" scoped>
.selectView {
  display: flex;
  align-items: center;
}
.selectCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .SelectAccountText {
    width: 270px;
    height: 39px;
    line-height: 39px;
    color: rgba(255, 255, 255, 1);
    font-size: 28px;
    text-align: center;
    font-family: PingFangSC-regular;
    margin-bottom: 50px;
  }
}
.selectList {
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  .selectItem {
    cursor: pointer;
    width: 500px;
    height: 110px;
    border-radius: 10px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    overflow: hidden;
    padding: 20px;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.02);
    }
    .itemRound {
      position: absolute;
      right: -10px;
      bottom: 15px;
      right: -10px;
      /* background-color: rgba(255, 255, 255, 0.2); */
      border-radius: 50%;
      background-size: 100% 100%;
      width: 80px;
      height: 80px;
    }
    .itemTop {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 4px;
      .title {
        width: 224px;
        height: 39px;
        line-height: 39px;
        color: rgba(255, 255, 255, 1);
        font-size: 28px;
        text-align: left;
        font-family: PingFangSC-bold;
      }

      .icon {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        padding: 13px;
      }
    }
    .itemButtom {
      line-height: 20px;
      color: rgba(0, 0, 0);
      font-size: 14px;
      text-align: left;
      font-family: PingFangSC-regular;
    }
  }
}
</style>
