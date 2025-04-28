<template>
  <!-- svg:图标外层容器节点,内部需要与use标签结合使用 -->
  <svg :style="{ width, height }">
    <!--xlink:href执行用哪一个图标,属性值务必#icon-图标名字 -->
    <!-- use标签fi11属性可以设置图标的颜色-->
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
  defineProps({
    //xlink:href属性值前缀
    prefix: {
      type: String,
      default: '#icon-'
    },
    // 图标名字
    name: {
      type: String,
      default: ''
    },
    // 图标颜色
    color: {
      type: String,
      default: ''
    },
    // 图标大小
    width: {
      type: String,
      default: '16px'
    },
    height: {
      type: String,
      default: '16px'
    }
  })
</script>

<style scoped></style>
