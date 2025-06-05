<template>
  <div class="card" :style="cardStyle">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";

const props = defineProps<{
  width?: string | number;
  height?: string | number;
  backgroundColor?: string;
}>();

const cardStyle = computed(() => ({
  height:
    typeof props.height === "number"
      ? `${props.height}px`
      : props.height || "96%",
  backgroundColor: props.backgroundColor || "#fff",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  padding: "16px",
  boxSizing: "border-box"
}));
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 20px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 1);
  color: rgba(16, 16, 16, 1);
  font-size: 14px;
  text-align: center;
  box-shadow: 0px 4px 10px 0px rgba(78, 89, 105, 0.2);
  font-family: -regular;
}
</style>
