<template>
  <LoginWrapper>
    <template #login-content>
      <div class="loginCard">
        <div class="loginText">Login</div>
        <div class="loginForm">
          <el-form
            ref="formRef"
            :model="form"
            :rules="rules"
            label-width="auto"
            style="width: 100%"
          >
            <el-form-item style="margin-bottom: 20px" prop="userName">
              <el-input v-model="form.userName" placeholder="Username">
                <template #prefix>
                  <img class="icon" src="@/assets/img/userName.png" alt="" />
                </template>
              </el-input>
            </el-form-item>
            <el-form-item style="margin-bottom: 10px" prop="passWord">
              <el-input v-model="form.passWord" placeholder="password">
                <template #prefix>
                  <img class="icon" src="@/assets/img/passWord.png" alt="" />
                </template>
              </el-input>
            </el-form-item>
            <el-form-item style="margin-bottom: 40px">
              <div class="Forgot" @click="goForgotPassword">
                Forgot password
                <img class="help" src="@/assets/img/help.png" alt="" />
              </div>
            </el-form-item>
            <el-form-item>
              <div class="accessBtn" @click="submitForm">ACCESS SYSTEM</div>
            </el-form-item>
          </el-form>
        </div>
        <div class="notAMember" @click="goSelectAccount">
          Not a member? Create an account
        </div>
      </div>
      <div class="ByLogging">
        By logging in, you agree to the
        <span class="greenColor">《Xiaohei Privacy Policy》</span>and
        <span class="greenColor">《Xiaohei User Service Policy》</span>
      </div>
    </template>
  </LoginWrapper>
</template>

<script setup lang="ts">
import LoginWrapper from "./components/LoginWrapper.vue";
import { ref } from "vue";
import { useUserStoreHook } from "@/store/modules/user";
import { initRouter, getTopMenu } from "@/router/utils";
import { useRouter } from "vue-router";
const router = useRouter();
import { useI18n } from "vue-i18n";
import { validateUsername, validatePassword } from "@/utils/validate.ts";
const form = ref({
  userName: "",
  passWord: ""
});

const goForgotPassword = () => {
  // 跳转到忘记密码页面
  router.push("/login/forgot");
  console.log("Forgot Password Clicked");
};
const goSelectAccount = () => {
  // 跳转到选择账户类型页面
  router.push("/login/selectAccount");
};

const formRef = ref();
// 定义表单验证规则
const rules = ref({
  userName: [
    { required: true, message: "请输入用户名", trigger: "change" },
    {
      validator: (_rule: any, value: string, callback: any) => {
        if (!validateUsername(value)) {
          callback(new Error("用户名格式不正确"));
        } else {
          callback();
        }
      },
      trigger: "change"
    }
  ],
  passWord: [
    { required: true, message: "请输入密码", trigger: "change" },
    {
      validator: (_rule: any, value: string, callback: any) => {
        if (!validatePassword(value)) {
          callback(new Error("密码需包含大小写字母和数字，长度不少于6位"));
        } else {
          callback();
        }
      },
      trigger: "change"
    }
  ]
});
const loading = ref(false);
const disabled = ref(false);

// 提交表单函数
const submitForm = () => {
  formRef.value?.validate((valid: boolean) => {
    if (valid) {
      // 在这里执行实际的提交操作
      //   loading.value = true;
      useUserStoreHook()
        .loginByUsername({
          username: form.value.username,
          password: form.value.password
        })
        .then(res => {
          if (res.success) {
            // 获取后端路由
            return initRouter().then(() => {
              disabled.value = true;
              router
                .push(getTopMenu(true).path)
                .then(() => {
                  // message(t("login.pureLoginSuccess"), { type: "success" });
                })
                .finally(() => (disabled.value = false));
            });
          } else {
            message(t("login.pureLoginFail"), { type: "error" });
          }
        })
        .finally(() => (loading.value = false));
    } else {
      console.log("Form validation failed!");
      return false;
    }
  });
};
</script>

<style lang="less" scoped>
.loginCard {
  margin-bottom: 30px;
  width: 500px;
  /* height: 500px; */
  padding: 70.5px 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 20px;
  border-radius: 8px;
  background: linear-gradient(
    180.04deg,
    rgba(51, 51, 51, 1) 0.03%,
    rgba(0, 0, 0, 1) 49.51%,
    rgba(27, 56, 47, 1) 127.63%
  );
  color: rgba(16, 16, 16, 1);
  font-size: 14px;
  text-align: center;
  box-shadow: 2px 2px 10px 2px rgba(143, 233, 81, 0.2);
  font-family: PingFangSC-regular;
  border: 1px solid rgba(108, 108, 108, 1);

  .loginText {
    height: 39px;
    line-height: 39px;
    color: rgba(255, 255, 255, 1);
    font-size: 28px;
    text-align: left;
    font-family: PingFangSC-regular;
    margin-bottom: 50px;
  }
  .loginForm {
    width: 100%;
    margin-bottom: 40px;
    .icon {
      width: 18px;
      height: 18px;
    }
  }
  .Forgot {
    width: 100%;
    line-height: 20px;
    color: rgba(255, 255, 255, 1);
    font-size: 14px;
    text-align: left;
    font-family: PingFangSC-regular;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 8px;
    cursor: pointer;
    .help {
      margin-top: 2px;
      width: 14px;
      height: 14px;
    }
  }
  .accessBtn {
    cursor: pointer;
    width: 100%;
    height: 40px;
    line-height: 20px;
    border-radius: 8px;
    background-color: #00ef9e;
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    font-family: -bold;
    display: grid;
    place-items: center;
  }
}
.notAMember {
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  text-align: center;
  font-family: PingFangSC-regular;
  cursor: pointer;
  text-decoration: underline;
  color: #00ef9e;
}
.ByLogging {
  margin-bottom: 160px;

  line-height: 20px;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  text-align: center;
  font-family: PingFangSC-regular;
  .greenColor {
    color: #00ef9e;
  }
}

.footer {
  position: fixed;
  bottom: 60px;
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

:deep(.el-input__wrapper) {
  height: 40px;
  line-height: 17px;
  border-radius: 8px;
  background: linear-gradient(
    180.04deg,
    rgba(51, 51, 51, 1) 0.03%,
    rgba(0, 0, 0, 1) 49.51%,
    rgba(27, 56, 47, 1) 127.63%
  );
  font-size: 12px;
  text-align: left;
  font-family: -regular;
  border: 1px solid rgba(206, 206, 206, 1);
  box-shadow: none;
}
/* :deep(.el-input__wrapper:focus-within) {
  border: 1px solid #00EF9E; 设置焦点时边框颜色为绿色 
} */
:deep(.el-input__inner) {
  color: rgba(255, 255, 255, 1);
}
:deep(.el-input__inner::placeholder) {
  color: rgba(190, 190, 190, 1);
  font-size: 12px;
  text-align: left;
  font-family: -regular;
}
/* :deep(.el-input__inner:focus) {
  color: #00ff00;  设置焦点时输入文字颜色为绿色
} */
</style>
