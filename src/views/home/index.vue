<template>
  <div class="pages_content">
    <top-bg>
      <div class="fontClass">新时代 新格局 新成就</div>
    </top-bg>
    <div class="content_box">
      <div class="content_div">
        <!-- 顶部日期tab -->
        <div class="date-tabs">
          <div
            v-for="(date, idx) in dateTabs"
            :key="date"
            class="date-tab"
            :class="{ active: idx === activeDateIdx }"
            @click="selectDate(idx)"
          >
            {{ date }}
          </div>
        </div>
        <!-- 动态按钮 -->
        <div v-if="tabData[activeDateIdx]?.buttons?.length" class="tab-btns">
          <div
            v-for="(btn, idx) in tabData[activeDateIdx].buttons"
            :key="btn.key"
            class="tab-btn"
            :class="{ active: idx === activeBtnIdx }"
            @click="selectBtn(idx)"
          >
            {{ btn.label }}
          </div>
        </div>
        <!-- 列表 -->
        <div class="list-box">
          <div v-for="(item, idx) in currentList" :key="idx">
            <div
              class="list-row"
              :class="{ clickable: item.right === 'expand' }"
              @click="item.right === 'expand' ? toggleExpand(idx) : null"
            >
              <div class="row-left">
                <span class="row-time">{{ item.time }}</span>
                <span class="row-text">{{ item.text }}</span>
              </div>
              <div class="row-right">
                <template v-if="item.right === 'expand'">
                  <span class="expand-btn">
                    <el-icon v-show="expandedIdx !== idx">
                      <ArrowDown />
                    </el-icon>
                    <el-icon v-show="expandedIdx === idx">
                      <ArrowUp />
                    </el-icon>
                  </span>
                </template>
                <template v-else-if="item.right">
                  <span class="row-place">{{ item.right }}</span>
                </template>
              </div>
            </div>
            <!-- 展开详情，单独一行 -->
            <transition name="expand">
              <div
                v-if="item.right === 'expand' && expandedIdx === idx"
                class="row-detail"
                :key="'detail-' + idx"
              >
                {{ item.detail }}
              </div>
            </transition>
          </div>
        </div>
      </div>
      <div class="blank"></div>
    </div>
    <footerss></footerss>
  </div>
</template>

<script setup lang="ts" name="executive">
import topBg from '@/views/components/topBg.vue'
import footerss from '@/views/components/footerss.vue'
import { ref, computed } from 'vue'

// 假数据
const dateTabs = ref([
  '2024-06-01',
  '2024-06-02',
  '2024-06-03',
  '2024-06-04',
  '2024-06-05',
])
const activeDateIdx = ref(0)

// 新结构：按钮有key，list每项有key，无按钮时key为''
const tabData = ref([
  {
    buttons: [
      { label: '主题演讲', key: 'main' },
      { label: '专题论坛', key: 'forum' },
    ],
    list: [
      {
        key: 'main',
        time: '08:30-09:10',
        text: '开幕式及领导致辞',
        right: '地点：厦门国际会议中心一楼南大堂',
      },
      {
        key: 'main',
        time: '09:10-10:00',
        text: '主旨演讲',
        right: 'expand',
        detail: '主旨演讲详细内容介绍，内容较长，支持平滑展开动画。',
      },
      { key: 'main', time: '10:00-10:30', text: '茶歇', right: '' },
      {
        key: 'forum',
        time: '13:30-14:00',
        text: '专题论坛A',
        right: 'expand',
        detail: '专题论坛A详细内容',
      },
      { key: 'forum', time: '14:00-14:30', text: '专题论坛B', right: '' },
    ],
  },
  {
    buttons: [{ label: '主题演讲', key: 'main' }],
    list: [
      {
        key: 'main',
        time: '08:30-09:10',
        text: '分论坛A',
        right: 'expand',
        detail: '分论坛A详细内容',
      },
      { key: 'main', time: '09:10-10:00', text: '分论坛B', right: '' },
    ],
  },
  {
    buttons: [],
    list: [{ key: '', time: '08:30-09:10', text: '自由交流', right: '' }],
  },
  // 2024-06-04
  {
    buttons: [{ label: '专题论坛', key: 'forum' }],
    list: [
      {
        key: 'forum',
        time: '09:00-09:30',
        text: '专题论坛一',
        right: 'expand',
        detail: '专题论坛一详细内容介绍。',
      },
      {
        key: 'forum',
        time: '09:30-10:00',
        text: '专题论坛二',
        right: 'expand',
        detail: '专题论坛二详细内容介绍。',
      },
    ],
  },
  // 2024-06-05
  {
    buttons: [],
    list: [
      {
        key: '',
        time: '10:00-11:00',
        text: '闭幕式',
        right: '地点：厦门国际会议中心三楼',
      },
    ],
  },
])

const activeBtnIdx = ref(0)
const expandedIdx = ref(-1)

// 当前按钮key
const currentBtnKey = computed(() => {
  const btns = tabData.value[activeDateIdx.value].buttons
  if (btns && btns.length > 0) {
    return btns[activeBtnIdx.value]?.key
  }
  return ''
})
// 当前展示的列表
const currentList = computed(() => {
  const data = tabData.value[activeDateIdx.value]
  if (data.buttons && data.buttons.length > 0) {
    return data.list.filter((item) => item.key === currentBtnKey.value)
  } else {
    return data.list
  }
})

function selectDate(idx: number) {
  activeDateIdx.value = idx
  activeBtnIdx.value = 0
  expandedIdx.value = -1
}
function selectBtn(idx: number) {
  activeBtnIdx.value = idx
  expandedIdx.value = -1
}
function toggleExpand(idx: number) {
  expandedIdx.value = expandedIdx.value === idx ? -1 : idx
}

defineExpose({
  dateTabs,
  activeDateIdx,
  tabData,
  activeBtnIdx,
  expandedIdx,
  selectDate,
  selectBtn,
  toggleExpand,
})
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
  .content_box {
    flex: 1;
    height: 100%;
    width: 100%;
    background-color: #fff;
    .content_div {
      height: 100%;
      width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      padding-top: 30px;
      .date-tabs {
        display: flex;
        flex-wrap: wrap;
        gap: 16px 32px;
        margin-bottom: 24px;
        justify-content: center;
        .date-tab {
          min-width: 120px;
          padding: 8px 24px;
          font-size: 18px;
          color: #333;
          border-radius: 6px 6px 0 0;
          cursor: pointer;
          border-bottom: 2px solid transparent;
          transition: all 0.2s;
          &.active {
            border-bottom: 2px solid #1a4fa0;
            font-weight: bold;
          }
        }
      }
      .tab-btns {
        display: flex;
        gap: 16px;
        margin-bottom: 24px;
        justify-content: center;
        .tab-btn {
          padding: 0 32px;
          font-size: 16px;
          color: #333;
          background: #e6eaf3;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
          height: 40px;
          line-height: 40px;
          display: flex;
          align-items: center;
          &.active {
            background: #021a5b;
            color: #fff;
            font-weight: bold;
          }
        }
      }
      .list-box {
        display: flex;
        flex-direction: column;
        gap: 6px;
        .list-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #e5ecfb;
          border-radius: 8px;
          height: 68px;
          min-height: 68px;
          max-height: 68px;
          padding: 0 24px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          position: relative;
          cursor: default;
          &.clickable {
            cursor: pointer;
            &:hover {
              background: #d3e0fa;
            }
          }
          .row-left {
            display: flex;
            align-items: center;
            gap: 16px;
            .row-time {
              font-size: 16px;
              color: #33459f;
              font-weight: bold;
            }
            .row-text {
              font-size: 16px;
              color: #33459f;
            }
          }
          .row-right {
            display: flex;
            align-items: center;
            .row-place {
              color: #33459f;
              font-size: 15px;
            }
            .expand-btn {
              cursor: pointer;
              display: flex;
              align-items: center;
              margin-left: 8px;
              .el-icon {
                color: #021a5b;
                font-weight: bold;
                font-size: 20px;
                transition: transform 0.2s;
              }
              svg {
                stroke: #021a5b;
                stroke-width: 2.5;
              }
            }
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
// 展开动画
.expand-enter-active,
.expand-leave-active {
  transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s;
  overflow: hidden;
}
.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}
.expand-enter-to,
.expand-leave-from {
  max-height: 300px;
  opacity: 1;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
