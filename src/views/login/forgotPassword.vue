<template>
  <LoginWrapper>
    <template #login-content>
      <div class="ForgotView">
        <BackButton />
        <div v-if="isForgot" class="ForgotCard">
          <div class="ForgotText">Forgot password</div>
          <div class="ForgotForm">
            <el-form
              ref="forgotFormRef"
              :rules="forgotRules"
              :model="forgotForm"
              label-width="auto"
              style="width: 100%"
            >
              <el-form-item style="margin-bottom: 39.5px" prop="email">
                <div class="ForgotInput">
                  <el-input v-model="forgotForm.email" placeholder="E-mail">
                    <template #prefix>
                      <img class="icon" src="@/assets/img/email.png" alt="" />
                    </template>
                  </el-input>
                  <div class="sending">Sending</div>
                </div>
              </el-form-item>

              <el-form-item>
                <div class="accessBtn" @click="submitForgotForm">
                  Switch to your email app
                </div>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div v-else class="ChangeCard">
          <div class="ForgotText">Change password</div>
          <div class="ForgotForm">
            <el-form
              ref="changeFormRef"
              :model="changeForm"
              :rules="changeRules"
              label-width="auto"
              style="width: 100%"
            >
              <el-form-item style="margin-bottom: 20px">
                <el-input
                  v-model="changeForm.email"
                  disabled
                  placeholder="E-mail"
                >
                  <template #prefix>
                    <img class="icon" src="@/assets/img/email.png" alt="" />
                  </template>
                </el-input>
              </el-form-item>

              <el-form-item style="margin-bottom: 20px" prop="passWord">
                <el-input
                  v-model="changeForm.passWord"
                  placeholder="Please input a password
"
                >
                  <template #prefix>
                    <img class="icon" src="@/assets/img/passWord.png" alt="" />
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item
                style="margin-bottom: 39.5px"
                prop="confirmPassword"
              >
                <el-input
                  v-model="changeForm.confirmPassword"
                  placeholder="Confirm your password
"
                >
                  <template #prefix>
                    <img class="icon" src="@/assets/img/passWord.png" alt="" />
                  </template>
                </el-input>
              </el-form-item>

              <el-form-item>
                <div class="accessBtn" @click="submitChangeForm">Confirm</div>
              </el-form-item>
            </el-form>
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
import { validateEmail, validatePassword } from "@/utils/validate.ts";

const forgotForm = ref({
  email: ""
});
const changeForm = ref({
  email: forgotForm.value.email,
  passWord: "",
  confirmPassword: ""
});
const isForgot = ref(true);

const forgotRules = {
  email: [
    { required: true, message: "请输入邮箱", trigger: "change" },
    {
      validator: (_rule: any, value: string, callback: any) => {
        if (!validateEmail(value)) {
          callback(new Error("邮箱格式不正确"));
        } else {
          callback();
        }
      }
    }
  ]
};

const changeRules = {
  email: [],
  passWord: [
    { required: true, message: "请输入新密码", trigger: "change" },
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
  ],
  confirmPassword: [
    { required: true, message: "请确认新密码", trigger: "change" },
    {
      validator: (_rule: any, value: string, callback: any) => {
        if (value !== changeForm.value.passWord) {
          callback(new Error("两次输入的密码不一致"));
        } else {
          callback();
        }
      },
      trigger: "change"
    }
  ]
};
const forgotFormRef = ref();
const submitForgotForm = () => {
  forgotFormRef.value?.validate((valid: boolean) => {
    if (valid) {
      // 提交忘记密码逻辑
      console.log("忘记密码成功:", forgotForm.value);
      isForgot.value = false;
      changeForm.value.email = forgotForm.value.email;
    } else {
      console.log("表单验证失败");
    }
  });
};
const changeFormRef = ref();
const submitChangeForm = () => {
  changeFormRef.value?.validate((valid: boolean) => {
    if (valid) {
      // 提交修改逻辑
      console.log("修改成功:", changeForm.value);
    } else {
      console.log("表单验证失败");
    }
  });
};
</script>

<style lang="less" scoped>
.ForgotView {
  position: relative;
  display: flex;
  align-items: center;
}
.ForgotCard,
.ChangeCard {
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
}
.ForgotText {
  height: 39px;
  line-height: 39px;
  color: rgba(255, 255, 255, 1);
  font-size: 28px;
  text-align: left;
  font-family: PingFangSC-regular;
  margin-bottom: 50px;
}
.ForgotForm {
  width: 100%;
  margin-bottom: 40px;
  .icon {
    width: 18px;
    height: 18px;
  }
  .ForgotInput {
    width: 100%;
    display: flex;
    gap: 20px;
    .sending {
      width: 74px;
      height: 40px;
      line-height: 17px;
      border-radius: 8px;
      background-color: #00ef9e;
      color: rgba(0, 0, 0, 1);
      font-size: 12px;
      font-family: PingFangSC-bold;
      display: grid;
      place-items: center;
    }
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
  color: #fff;
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
:deep(.el-input.is-disabled .el-input__wrapper) {
  background: rgba(51, 51, 51, 1) !important;
  color: rgba(255, 255, 255, 1) !important;
  font-size: 12px;
  text-align: left;
  font-family: -regular;
  box-shadow: none;
  cursor: not-allowed;
  border: none;
}
:deep(.el-input.is-disabled .el-input__inner) {
  color: rgba(255, 255, 255, 1) !important;
  -webkit-text-fill-color: #fff;
}
/* :deep(.el-input__inner:focus) {
  color: #00ff00;  设置焦点时输入文字颜色为绿色
} */
</style>
