<template>
  <div class="box5">
    <div class="title">
      <p>未来七天游客数量趋势图</p>
      <img src="../../images/dataScreen-title.png" alt="" />
    </div>
    <div class="charts mt20" ref="line"></div>
  </div>
</template>

<script setup lang="ts">
  import * as echarts from 'echarts'
  import { ref, onMounted } from 'vue'
  //获取图形图标的节点
  let line = ref()
  onMounted(() => {
    let mycharts = echarts.init(line.value)
    //设置配置项
    mycharts.setOption({
      title: {
        text: ''
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        splitLine: { show: false },
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        axisLine: { show: false },
        axisTick: {
          show: true,
          alignWithLabel: true // 确保刻度与标签对齐
        },
        axisLabel: {
          color: '#666' // 设置标签颜色
        }
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: function (value) {
          // 动态计算最大值，比数据最大值多20%空间
          return Math.ceil(value.max * 1.2)
        },
        boundaryGap: false,
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed', // 虚线样式
            color: '#eee'
          }
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#999' // 轴线颜色
          }
        },
        axisTick: {
          show: true,
          length: 4 // 刻度线长度
        },
        axisLabel: {
          color: '#666', // 标签颜色
          formatter: function (value) {
            // 格式化Y轴标签
            if (value >= 1000) {
              return value / 1000 + 'k'
            }
            return value
          }
        }
      },
      grid: {
        left: 60,
        top: 30, // 增加顶部间距
        right: 30,
        bottom: 30 // 增加底部间距
      },
      series: [
        {
          type: 'line',
          data: [120, 1240, 66, 1200, 321, 890, 1200],
          smooth: true,
          symbol: 'circle', // 显示数据点
          symbolSize: 8, // 数据点大小
          lineStyle: {
            width: 3, // 线条加粗
            color: '#1890ff' // 主线条颜色
          },
          itemStyle: {
            color: '#fff', // 数据点填充色
            borderColor: '#1890ff', // 数据点边框色
            borderWidth: 2
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(24, 144, 255, 0.5)' // 半透明渐变起点
                },
                {
                  offset: 1,
                  color: 'rgba(24, 144, 255, 0.1)' // 半透明渐变终点
                }
              ]
            }
          },
          emphasis: {
            // 高亮样式
            itemStyle: {
              color: '#fff',
              borderColor: '#ff4d4f',
              borderWidth: 2
            }
          }
        }
      ],
      tooltip: {
        // 添加提示框配置
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      }
    })
  })
</script>

<style scoped lang="scss">
  .box5 {
    width: 100%;
    height: 100%;
    background: url(../../images/dataScreen-main-cb.png) no-repeat;
    background-size: 100% 100%;
    .title {
      margin-left: 10px;

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
    .charts {
      height: calc(100% - 70px);
    }
  }
</style>
