<template>
  <div class="backBtn" @click="goBack">
    <img class="backImg" src="@/assets/img/back.png" alt="" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  console.log("按钮点击了");
  // 用back()方法回退
  router.back();
};
</script>

<style scoped>
.backBtn {
  position: absolute;
  left: -147px;
  z-index: 9999;
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: rgb(0 239 158 / 40%);
  border-radius: 50%;

  .backImg {
    width: 20px;
    height: 20px;
  }
}
</style>
