<template>
  <div class="top-div">
    <slot></slot>
  </div>
</template>

<script setup lang="ts" name="topBg"></script>

<style scoped lang="scss">
.top-div {
  background-image: url('@/assets/images/bg2.png');
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;
  width: 100%;
  height: 322px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
