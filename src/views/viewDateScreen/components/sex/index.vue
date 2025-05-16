<template>
  <div>
    <div class="box1 mt20">
      <div class="title">
        <p>男女比例</p>
        <img src="../../images/dataScreen-title.png" alt="" />
      </div>
      <div class="sex">
        <div class="man personnel_class">
          <img src="../../images/man.png" alt="" />
          <div class="personnel_name">男士</div>
        </div>
        <div class="women personnel_class">
          <img src="../../images/woman.png" alt="" />
          <div class="personnel_name">女士</div>
        </div>
      </div>

      <div class="charts_box">
        <div class="rate">
          <p>男士60%</p>
          <p>女士40%</p>
        </div>
        <div class="charts_div">
          <div class="charts" ref="charts"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import * as echarts from 'echarts'
  //获取图形图标的DOM节点
  let charts = ref()
  onMounted(() => {
    //初始化echarts实例
    let mycharts = echarts.init(charts.value)
    //设置配置项
    mycharts.setOption({
      //组件标题
      title: {
        text: '', //主标题
        textStyle: {
          //主标题颜色
          color: 'skyblue'
        },
        left: '40%'
      },
      //x|y
      xAxis: {
        show: false,
        min: 0,
        max: 100
      },
      yAxis: {
        show: false,
        type: 'category'
      },
      series: [
        {
          type: 'bar',
          data: [58],
          barWidth: 20,
          z: 100,
          itemStyle: {
            color: 'blue',
            borderRadius: 20
          }
        },
        {
          type: 'bar',
          data: [100],
          barWidth: 20,
          //调整女士柱条位置
          barGap: '-100%',
          itemStyle: {
            color: 'red',
            borderRadius: 20
          }
        }
      ],
      grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      }
    })
  })
</script>

<style scoped lang="scss">
  .box1 {
    width: 100%;
    height: 100%;
    background: url(../../images/dataScreen-main-cb.png) no-repeat;
    background-size: 100% 100%;
    .title {
      p {
        color: white;
        font-size: 20px;
      }
      img {
        margin-top: 10px;
        width: 70px;
        height: 10px;
      }
    }
    .sex {
      display: flex;
      justify-content: center;
      margin: 50px 0 10px 0;
      .personnel_class {
        position: relative;
        margin: 0 20px;
        width: 110px;
        height: 120px;
        display: flex;
        justify-content: center;
        align-items: center;
        .personnel_name {
          position: absolute;
          left: 38px;
          top: 0;
          color: #fff;
        }
      }
      .man {
        background: url(../../images/man-bg.png) no-repeat;
      }

      .women {
        background: url(../../images/woman-bg.png) no-repeat;
      }
    }
    .charts_box {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .rate {
        width: 60%;
        display: flex;
        justify-content: space-between;
        color: white;
      }
      .charts_div {
        width: 60%;
        .charts {
          height: 40px;
        }
      }
    }
  }
</style>
