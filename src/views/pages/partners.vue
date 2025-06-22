<template>
  <div class="pages_content">
    <top-bg>
      <div class="fontClass">新时代 新格局 新成就</div>
    </top-bg>
    <div class="bgColor">
      <div class="content_box">
        <div
          class="content_box_item"
          v-for="(item, index) in baseData"
          :key="index"
        >
          <h3 class="title">{{ item.name }}</h3>
          <div class="logo_box">
            <div
              class="logo_div mt16"
              v-for="(items, indexs) in item.imgUrlList"
              :key="indexs"
              :style="{
                marginRight: indexs % 5 == 4 ? '0' : '25px',
              }"
            >
              <img :src="items" :alt="item.name" />
            </div>
          </div>
        </div>
        <div class="blank"></div>
      </div>
    </div>

    <footerss></footerss>
  </div>
</template>

<script setup lang="ts" name="partners">
import topBg from '@/views/components/topBg.vue'
import footerss from '@/views/components/footerss.vue'
import { reactive } from 'vue'
const baseData = reactive([
  {
    name: '承办单位',
    imgUrlList: [
      '/logo1.png',
      '/logo1.png',
      '/logo1.png',
      '/logo1.png',
      '/logo1.png',
      '/logo1.png',
      '/logo1.png',
      '/logo1.png',
      '/logo1.png',
    ],
  },
  {
    name: '协办单位',
    imgUrlList: [
      '/logo1.png',
      '/logo1.png',
      '/logo1.png',
      '/logo1.png',
      '/logo1.png',
    ],
  },
  {
    name: '钻石赞助',
    imgUrlList: ['/logo1.png'],
  },
])
</script>

<style scoped lang="scss">
.pages_content {
  display: flex;
  min-height: calc(100vh - $base-header-height);
  flex-direction: column;
  .fontClass {
    font-size: 30px;
    color: #fff;
  }
  .bgColor {
    width: 100%;
    background-color: #fff;
  }
  .content_box {
    flex: 1;
    height: 100%;
    width: 1200px;
    margin: 0 auto;
    .content_box_item {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-top: 64px;
      .title {
        font-size: 24px;
        font-weight: bold;
        color: #313131;
        margin-bottom: 24px;
      }
      .logo_box {
        display: flex;
        flex-wrap: wrap;
        .logo_div {
          box-sizing: border-box;
          width: 220px;
          height: 80px;
          border: 1px solid #d0d7df;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    .blank {
      width: 100%;
      height: 60px;
    }
  }
}
</style>
