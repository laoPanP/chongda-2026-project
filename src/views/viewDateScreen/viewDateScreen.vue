<template>
  <div class="container">
    <!-- 数据大屏展示内容区域 -->
    <div class="screen" ref="screen">
      <!-- 数据大屏顶部 -->
      <div class="top">
        <Top />
      </div>
      <div class="bottom">
        <div class="left">
          <Tourist class="tourist_box"></Tourist>
          <Sex class="sex_box"></Sex>
          <Age class="age_box"></Age>
        </div>
        <div class="center">
          <Map class="map"></Map>
          <Line class="line"></Line>
        </div>
        <div class="right">
          <Rank class="rank"></Rank>
          <Year class="year"></Year>
          <Counter class="count"></Counter>
        </div>
      </div>
      <div class="bottom_height"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  // //引入顶部的子组件
  import Top from './components/top/index.vue'
  // //引入左侧三个子组件
  import Tourist from './components/tourist/index.vue'
  import Sex from './components/sex/index.vue'
  import Age from './components/age/index.vue'

  // //引入中间两个子组件
  import Map from './components/map/index.vue'
  import Line from './components/line/index.vue'

  // //引入右侧三个子组件
  import Rank from './components/rank/index.vue'
  import Year from './components/year/index.vue'
  import Counter from './components/couter/index.vue'
  // //获取数据大屏展示内容盒子的DOM元素
  let screen = ref()
  onMounted(() => {
    screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
  })
  // //定义大屏缩放比例
  function getScale(w = 1920, h = 1080) {
    const ww = window.innerWidth / w
    const wh = window.innerHeight / h
    return ww < wh ? ww : wh
  }
  // //监听视口变化
  window.onresize = () => {
    screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
  }
</script>

<style scoped lang="scss">
  .container {
    width: 100vw;
    height: 100vh;
    background: url(./images/bg.png) no-repeat;
    background-size: cover;
    .screen {
      position: fixed;
      width: 1920px;
      height: 1080px;
      left: 50%;
      top: 50%;
      transform-origin: left top;
      .top {
        width: 100%;
        height: 40px;
      }
      .bottom {
        display: flex;
        height: 1024px;
        margin: 0 40px;
        .right {
          flex: 1;
          display: flex;
          flex-direction: column;
          .rank {
            flex: 1.2;
            min-height: 0;
            overflow: hidden;
          }
          .year {
            flex: 1;
            min-height: 0;
            overflow: hidden;
          }
          .count {
            flex: 1;
            min-height: 0;
            overflow: hidden;
          }
        }
        .left {
          height: 100%;
          flex: 1;
          display: flex;
          flex-direction: column;
          .tourist_box {
            flex: 1.2;
            min-height: 0;
            overflow: hidden;
          }
          .sex_box {
            flex: 1;
            min-height: 0;
            overflow: hidden;
          }
          .age_box {
            flex: 1;
            min-height: 0;
            overflow: hidden;
          }
        }
        .center {
          flex: 2;
          display: flex;
          flex-direction: column;
          margin: 40px 16px 0;
          .map {
            flex: 2.5;
            min-height: 0;
            overflow: hidden;
          }
          .line {
            flex: 1;
            min-height: 0;
            overflow: hidden;
          }
        }
      }
      .bottom_height {
        height: 16px;
        width: 100%;
      }
    }
  }
</style>
