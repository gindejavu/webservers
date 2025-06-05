<template>
  <LoginWrapper>
    <template #login-content>
      <div class="submitView">
        <div class="submitCard">
          <BackButton />
          <div class="submitText">Submit An Order</div>
          <div class="submitForm">
            <el-form
              ref="formRef"
              :rules="rules"
              :model="form"
              label-width="auto"
              style="width: 100%"
            >
              <el-form-item style="margin-bottom: 20px" prop="email">
                <el-input
                  v-model="form.email"
                  placeholder="Enter email to bind"
                >
                  <template #prefix>
                    <img class="icon" src="@/assets/img/email.png" alt="" />
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item style="margin-bottom: 18px" prop="userName">
                <el-input
                  v-model="form.userName"
                  placeholder="Enter one user name
"
                >
                  <template #prefix>
                    <img class="icon" src="@/assets/img/userName.png" alt="" />
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item style="margin-bottom: 20px" prop="passWord">
                <div class="hintText">
                  Uppercase, lowercase, numbers, and minimum 6 characters.
                </div>
                <el-input
                  v-model="form.passWord"
                  placeholder="Please input a password
"
                >
                  <template #prefix>
                    <img class="icon" src="@/assets/img/passWord.png" alt="" />
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item style="margin-bottom: 20px" prop="confirmPassword">
                <el-input
                  v-model="form.confirmPassword"
                  placeholder=" Confirm your password "
                >
                  <template #prefix>
                    <img class="icon" src="@/assets/img/passWord.png" alt="" />
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item style="margin-bottom: 20px" prop="verificationCode">
                <div class="form_item">
                  <el-input
                    v-model="form.verificationCode"
                    placeholder="Enter verification code
"
                  >
                    <template #prefix>
                      <img
                        class="icon"
                        src="@/assets/img/fingerprint.png"
                        alt=""
                      />
                    </template>
                  </el-input>
                  <img
                    class="Verification"
                    src="@/assets/img/Verification.png"
                    alt=""
                  />
                </div>
              </el-form-item>

              <el-form-item>
                <div class="accessBtn" @click="handleSubmit">Confirm</div>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="ByLogging">
          By registering, you agree to the
          <span class="greenColor">《Xiaohei Privacy Policy》</span>and
          <span class="greenColor">《Xiaohei User Service Policy》</span>
        </div>
      </div>
      <el-dialog v-model="DialogVisible" center align-center>
        <div class="DiaClose" @click="CloseDialog">
          <img src="@/assets/img/close.png" alt="" />
        </div>
        <img class="DiaLeft" src="@/assets/img/submitRound.png" alt="" />
        <img class="DiaRight" src="@/assets/img/DiaRight.png" alt="" />
        <div class="DiaTitle">Complete Registration</div>
        <div class="DiaText">
          Registration successful! ✨
          <br />
          Check your email to activate your account.
        </div>
        <template #footer>
          <div class="diaBtn">Switch to your email app</div>
        </template>
      </el-dialog>
    </template>
  </LoginWrapper>
</template>

<script setup lang="ts">
import LoginWrapper from "./components/LoginWrapper.vue";
import BackButton from "./components/BackButton.vue";

import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
import { useI18n } from "vue-i18n";

const form = ref({
  email: "",
  userName: "",
  passWord: "",
  confirmPassword: "",
  verificationCode: ""
});
import {
  validateEmail,
  validatePassword,
  validateUsername
} from "@/utils/validate.ts";

const formRef = ref();
const rules = {
  email: [
    { required: true, message: "请输入邮箱", trigger: "change" },
    {
      validator: (_rule: any, value: string, callback: any) => {
        if (!validateEmail(value)) {
          callback(new Error("邮箱格式不正确"));
        } else {
          callback();
        }
      },
      trigger: "change"
    }
  ],
  userName: [
    { required: true, message: "请输入用户名", trigger: "change" },
    {
      validator: (_rule: any, value: string, callback: any) => {
        if (!validateUsername(value)) {
          callback(new Error("用户名格式不正确（至少4位字母或数字）"));
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
  ],
  confirmPassword: [
    { required: true, message: "请确认密码", trigger: "change" },
    {
      validator: (_rule: any, value: string, callback: any) => {
        if (value !== form.value.passWord) {
          callback(new Error("两次输入的密码不一致"));
        } else {
          callback();
        }
      },
      trigger: "change"
    }
  ],
  verificationCode: [
    { required: true, message: "请输入验证码", trigger: "change" }
  ]
};

const handleSubmit = () => {
  // 表单验证
  formRef.value?.validate((valid: boolean) => {
    if (valid) {
      // 所有字段验证通过，执行提交逻辑
      console.log("提交表单数据:", form.value);

      // 提交请求逻辑放这里，例如:
      // await axios.post('/api/register', form.value)
    } else {
      ElMessage.error("请完善表单信息");
    }
  });
};

const DialogVisible = ref(false);

const CloseDialog = () => {
  DialogVisible.value = false;
};
</script>

<style lang="less" scoped>
.submitView {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.submitCard {
  position: relative;
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

  .submitText {
    left: 850.84px;
    top: 300px;
    width: 218px;
    height: 39px;
    line-height: 39px;
    color: rgba(255, 255, 255, 1);
    font-size: 28px;
    text-align: center;
    font-family: PingFangSC-regular;
    margin-bottom: 50px;
  }

  .submitForm {
    width: 100%;
    margin-bottom: 40px;

    .icon {
      width: 18px;
      height: 18px;
    }
  }

  .form_item {
    display: flex;
    width: 100%;
    gap: 16px;

    .Verification {
      cursor: pointer;
      width: 84.32px;
      height: 40px;
      background-color: rgba(229, 229, 229, 1);
    }
  }

  .hintText {
    line-height: 8px;
    color: rgba(190, 190, 190, 1);
    font-size: 10px;
    text-align: left;
    font-family: PingFangSC-regular;
    margin-bottom: 4px;
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
    display: grid;
    place-items: center;
  }
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
}

:deep(.el-dialog__header.show-close) {
  padding: 0 !important;
}

:deep(.el-dialog__headerbtn) {
  display: none;
}

:deep(.el-dialog) {
  padding: 60px 45px;
  width: 450px;
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
  position: relative;
  overflow: hidden;
}

.DiaLeft,
.DiaRight {
  position: absolute;
  width: 200px;
  height: 200px;
}

.DiaLeft {
  left: -116px;
  top: 30px;
}

.DiaRight {
  right: -58px;
  bottom: 23px;
}

.DiaTitle {
  width: 300px;
  height: 39px;
  line-height: 39px;
  color: rgba(255, 255, 255, 1);
  font-size: 28px;
  font-family: PingFangSC-bold;
  margin-bottom: 32px;
}

.DiaText {
  width: 360px;
  height: 54px;
  line-height: 25px;
  color: rgba(206, 206, 206, 1);
  font-size: 18px;
  text-align: left;
  font-family: PingFangSC-regular;
  margin-bottom: 82px;
}

.diaBtn {
  width: 350px;
  height: 46px;
  line-height: 23px;
  border-radius: 8px;
  background-color: rgba(0, 239, 158, 1);
  color: rgba(0, 0, 0, 1);
  font-size: 16px;
  display: grid;
  place-items: center;
  margin: 0 auto;
  cursor: pointer;
}

.DiaClose {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background-color: rgba(154, 154, 154, 0.4);
  border-radius: 50%;
  padding: 10px;
  display: grid;
  place-items: center;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 239, 158, 0.4);
  }
}
</style>
