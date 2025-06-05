<template>
  <div>
    <div class="navBar">
      <div class="navLeft">
        <el-input
          v-model="input"
          style="width: 100%; max-width: 500px"
          placeholder="Type here to search
"
        >
          <template #prefix>
            <img class="icon" src="@/assets/img/search.png" alt="" />
          </template>
        </el-input>
      </div>
      <div class="navRight">
        <div class="icons">
          <img src="@/assets/img/icons1.png" alt="" />
          <div>
            <el-dropdown
              id="header-translation"
              trigger="click"
              :teleported="false"
            >
              <img src="@/assets/img/icons2.png" alt="" />
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item
                    :style="getDropdownItemStyle(locale, 'zh')"
                    @click="translationCh"
                  >
                    <IconifyIconOffline
                      v-show="locale === 'zh'"
                      :icon="Check"
                    />
                    简体中文
                  </el-dropdown-item>
                  <el-dropdown-item
                    :style="getDropdownItemStyle(locale, 'en')"
                    @click="translationEn"
                  >
                    <span v-show="locale === 'en'">
                      <IconifyIconOffline :icon="Check" />
                    </span>
                    English
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
          <img src="@/assets/img/icons3.png" alt="" />
          <!-- 全屏 -->
          <LaySidebarFullScreen id="full-screen" />
        </div>
        <div class="prices">＄99,56</div>
        <div class="user-dropdown">
          <el-dropdown
            :teleported="false"
            trigger="click"
            @command="handleCommand"
            @visible-change="handleVisibleChange"
          >
            <span class="user-trigger">
              <div class="avater">
                <img src="@/assets/img/avater.png" alt="" />
              </div>
              <div class="userName">Admin</div>
              <!-- :class="{ rotated: isOpen }" -->
              <img
                class="arrdown"
                :class="{ rotated: isOpen }"
                src="@/assets/img/arrDown.png"
                alt=""
              />
            </span>
            <template #dropdown>
              <el-dropdown-menu class="dropdown-menu">
                <el-dropdown-item command="changePassword">
                  <img
                    class="dropdownIcon"
                    src="@/assets/img/userImg1.png"
                    alt=""
                  />
                  修改密码
                </el-dropdown-item>
                <el-dropdown-item command="recharge">
                  <img
                    class="dropdownIcon"
                    src="@/assets/img/userImg2.png"
                    alt=""
                  />
                  在线充值
                </el-dropdown-item>
                <el-dropdown-item command="history">
                  <img
                    class="dropdownIcon"
                    src="@/assets/img/userImg3.png"
                    alt=""
                  />
                  充值记录
                </el-dropdown-item>
                <el-dropdown-item command="logout">
                  <img
                    class="dropdownIcon"
                    src="@/assets/img/userImg4.png"
                    alt=""
                  />
                  退出
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <span
          class="set-icon navbar-bg-hover"
          :title="t('buttons.pureOpenSystemSet')"
          @click="onPanel"
        >
          <IconifyIconOffline :icon="Setting" />
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

import { useNav } from "@/layout/hooks/useNav";
import LaySearch from "../lay-search/index.vue";
import LayNotice from "../lay-notice/index.vue";
import LayNavMix from "../lay-sidebar/NavMix.vue";
import { useTranslationLang } from "@/layout/hooks/useTranslationLang";
import LaySidebarFullScreen from "../lay-sidebar/components/SidebarFullScreen.vue";
import LaySidebarBreadCrumb from "../lay-sidebar/components/SidebarBreadCrumb.vue";
import LaySidebarTopCollapse from "../lay-sidebar/components/SidebarTopCollapse.vue";

import GlobalizationIcon from "@/assets/svg/globalization.svg?component";
import LogoutCircleRLine from "~icons/ri/logout-circle-r-line";
import Setting from "~icons/ri/settings-3-line";
import Check from "~icons/ep/check";

const {
  layout,
  device,
  logout,
  onPanel,
  pureApp,
  username,
  userAvatar,
  avatarsStyle,
  toggleSideBar,
  getDropdownItemStyle,
  getDropdownItemClass
} = useNav();

const { t, locale, translationCh, translationEn } = useTranslationLang();
const input = ref("");
const isOpen = ref(false);
const handleVisibleChange = visible => {
  isOpen.value = visible;
  console.log("visible", visible, "isOpen", isOpen.value);
};
const handleCommand = command => {
  switch (command) {
    case "changePassword":
      ElMessage.info("点击了 修改密码");
      break;
    case "recharge":
      ElMessage.info("点击了 在线充值");
      break;
    case "history":
      ElMessage.info("点击了 充值记录");
      break;
    case "logout":
      ElMessage.info("点击了 退出");
      break;
  }
};
</script>

<style scoped lang="less">
.navBar {
  width: 100%;
  padding-left: 44.47px;
  padding-right: 30px;
  height: 80px;
  line-height: 20px;
  background-color: rgba(0, 0, 0, 1);
  color: rgba(16, 16, 16, 1);
  font-size: 14px;
  box-shadow: 0px 4px 10px 0px rgba(78, 89, 105, 0.2);
  font-family: -regular;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navLeft {
  flex: 1;
  display: flex;
  gap: 74.47px;
  align-items: center;
  .navLogo {
    cursor: pointer;
    display: grid;
    place-items: center;
    width: 161.07px;
    height: 36px;
  }
  .icon {
    width: 20px;
    height: 20px;
  }
}
.navRight {
  flex: 1;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 20px;
  .icons {
    display: flex;
    align-items: center;
    gap: 20px;
    img {
      width: 24px;
      height: 24px;
    }
  }
  .prices {
    line-height: 28px;
    color: rgba(0, 239, 158, 1);
    font-size: 20px;
    text-align: left;
    font-family: PingFangSC-regular;
  }
  .user-dropdown {
    padding-right: 10px;
    height: 40px;
    line-height: 20px;
    border-radius: 40px;
    background-color: rgba(51, 51, 51, 1);
    border: 1px solid rgba(79, 79, 79, 1);
    display: flex;
    align-items: center;
    .user-trigger {
      display: flex;
      gap: 4px;

      align-items: center;
      .avater {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        flex-shrink: 0;
        background-color: rgba(229, 229, 229, 1);
      }
      .userName {
        color: rgba(255, 255, 255, 1);
        font-size: 14px;
        font-family: PingFangSC-regular;
      }
      .arrdown {
        width: 18px;
        height: 18px;
      }
    }
  }
}
.arrdown {
  transition: transform 0.3s ease;
}

.rotated {
  transform: rotate(180deg);
}
:deep(.el-input__wrapper) {
  height: 40px;
  /* line-height: 20px; */
  border-radius: 8px;
  background-color: rgba(250, 250, 250, 1);
  color: rgba(154, 154, 154, 1);
  font-size: 14px;
  text-align: left;
  font-family: -regular;
  /* border: 1px solid rgba(255, 0, 0, 0); */
  box-shadow: none;
}
:deep(.el-input__wrapper .is-focus) {
  box-shadow: none;
}
:deep(.el-input__wrapper:focus-within) {
  /* border: 1px solid #00EF9E; 设置焦点时边框颜色为绿色  */
}
:deep(.el-input__inner) {
  color: rgba(154, 154, 154, 1);
}
:deep(.el-input__inner::placeholder) {
  color: rgba(154, 154, 154, 1);
  font-size: 14px;
  text-align: left;
  font-family: -regular;
}

:deep(.el-popper.is-light, .el-popper.is-light > .el-popper__arrow:before) {
  background: rgba(51, 51, 51, 1);
  border: 1px solid rgba(79, 79, 79, 1);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);

  width: 119px;
  line-height: 20px;
  border-radius: 5px;
  background-color: rgba(51, 51, 51, 1);
  color: rgba(16, 16, 16, 1);
  font-size: 14px;
  text-align: left;
  font-family: -regular;
  border: 1px solid rgba(79, 79, 79, 1);
  padding: 10px;
}
:deep(.el-dropdown-menu) {
  background-color: rgba(51, 51, 51, 1);
}
:deep(.el-popper.is-light > .el-popper__arrow:before) {
  background: rgba(51, 51, 51, 1) !important;
  border: 1px solid rgba(79, 79, 79, 1);
}
:deep(.el-dropdown-menu__item) {
  background-color: transparent !important;

  color: rgba(255, 255, 255, 1) !important;
  font-size: 12px;
  text-align: left;
  font-family: PingFangSC-regular;
  display: flex;
  align-items: center;
  gap: 4px;
}
.dropdownIcon {
  width: 12px;
  height: 12px;
}
:deep(.el-dropdown-menu__item:hover) {
  background-color: rgba(0, 239, 158, 1) !important;
  color: rgba(0, 0, 0, 1) !important;
  border-radius: 8px;
  .dropdownIcon {
    filter: brightness(1000%) invert(1);
  }
}
</style>
