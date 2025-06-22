<template>
  <div class="pages_content">
    <top-bg>
      <div class="fontClass">新时代 新格局 新成就</div>
    </top-bg>
    <div class="content_box"></div>
    <footerss></footerss>
  </div>
</template>

<script setup lang="ts" name="home">
import topBg from '@/views/components/topBg.vue'
import footerss from '@/views/components/footerss.vue'
// import { reactive } from 'vue'
// let data = reactive([
//   {
//     dateTime: '12月6日',
//     sortList: [],
//     contentList: [
//       {
//         time: '14:00-22:00',
//         title: '现场签到',
//         content: '地点：厦门国际会议中心一楼南大堂1',
//         isShowMore: false,
//       },
//     ],
//   },
// ])
</script>

<style scoped lang="scss">
.pages_content {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  .fontClass {
    font-size: 30px;
    color: #fff;
  }
}
</style>
