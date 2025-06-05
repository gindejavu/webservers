<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useGlobal } from "@pureadmin/utils";
import { useNav } from "@/layout/hooks/useNav";
import customIcon from "@/assets/img/double-left.png";
import MenuFold from "~icons/ri/menu-fold-fill";
// double-left
interface Props {
  isActive?: boolean;
}

withDefaults(defineProps<Props>(), {
  isActive: false
});

const { t } = useI18n();
const { tooltipEffect } = useNav();

const iconClass = computed(() => {
  return [
    "ml-4",
    "mb-1",
    "w-[16px]",
    "h-[16px]",
    "inline-block!",
    "align-middle",
    "cursor-pointer",
    "duration-[100ms]"
  ];
});

const { $storage } = useGlobal<GlobalPropertiesApi>();
const themeColor = computed(() => $storage.layout?.themeColor);

const emit = defineEmits<{
  (e: "toggleClick"): void;
}>();

const toggleClick = () => {
  emit("toggleClick");
};
</script>

<template>
  <div
    v-tippy="{
      content: isActive
        ? t('buttons.pureClickCollapse')
        : t('buttons.pureClickExpand'),
      theme: tooltipEffect,
      hideOnClick: 'toggle',
      placement: 'right'
    }"
    class="left-collapse"
    :class="[iconClass, themeColor === 'light' ? '' : 'text-primary']"
    :style="{ transform: isActive ? 'none' : 'rotateY(180deg)' }"
    alt="collapse icon"
    @click="toggleClick"
  >
    <img :src="customIcon" />
  </div>
</template>

<style lang="scss" scoped>
.left-collapse {
  position: absolute;
  bottom: 40px;
  left: 0;
  width: 30px;
  height: 30px;
  font-size: 16px;
  line-height: 23px;
  color: rgb(16 16 16 / 100%);
  text-align: left;
  background-color: rgb(0 239 158 / 40%);
  border-radius: 8px;
}
</style>
