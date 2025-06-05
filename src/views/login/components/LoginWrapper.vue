<template>
  <div class="loginView">
    <div class="loginViewBg">
      <div class="container">
        <div class="leftImg">
          <img src="@/assets/img/roundLeft.png" alt="" />
        </div>
        <div class="rightImg">
          <img src="@/assets/img/roundRight.png" alt="" />
        </div>
        <nav class="loginNav">
          <div class="logo"><img src="@/assets/img/logo.png" alt="" /></div>
          <div class="langBtn"><img src="@/assets/img/lang.png" alt="" /></div>
          <!-- <el-button @click="changeLanguage('en')">English</el-button>
          <el-button @click="changeLanguage('zh')">中文</el-button> -->
        </nav>
        <div class="loginContent">
          <slot name="login-content" />
        </div>
        <footer class="footer">
          <img class="footerIcon" src="@/assets/img/logoIcon.png" alt="" />
          <span>Stay in control. Earn real money. </span>
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

function changeLanguage(lang) {
  locale.value = lang;
  localStorage.setItem("language", lang);
  // 保存语言设置到 localStorage
}

const form = ref({
  userName: "",
  passWord: ""
});
</script>

<style lang="less" scoped>
.loginView {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  overflow-y: auto;
}

.loginViewBg {
  flex: 1;
  position: relative;
  width: 100%;
  height: 100vh;
  background: url("@/assets/img/loginBg.png") no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
}
.loginContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  flex: 1;
}
.leftImg {
  position: absolute;
  left: 265px;
  top: 0px;
  width: 444px;
  height: 444px;
}

.rightImg {
  position: absolute;
  left: 1420px;
  right: 500px;
  top: 444px;
  width: 500px;
  height: 500px;
}
.loginNav {
  width: 100%;
  height: 60px;
  line-height: 20px;
  margin-bottom: 200px;
  padding: 0 30px;
  border-radius: 8px;
  background-color: rgba(51, 51, 51, 1);
  font-size: 14px;
  box-shadow: 0px 4px 10px 0px rgba(78, 89, 105, 0.17);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  .logo {
    width: 80.66px;
  }
  .langBtn {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
}

.footer {
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  line-height: 20px;
  color: rgba(206, 206, 206, 1);
  font-size: 14px;
  text-align: left;
  gap: 10px;
  font-family: PingFangSC-bold;
  .footerIcon {
    width: 26.6px;
    height: 30px;
  }
}
</style>
