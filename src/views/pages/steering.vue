<template>
  <div class="pages_content">
    <top-bg>
      <div class="fontClass">新时代 新格局 新成就</div>
    </top-bg>
    <div class="content_box">
      <div
        class="content_box_item"
        v-for="(item, index) in baseData"
        :key="index"
      >
        <div class="title">{{ item.title }}</div>
        <div class="user_box">
          <div
            class="content_user_item mb20"
            v-for="(items, indexs) in item.userList"
            :key="indexs"
          >
            <baseCard :item="items"></baseCard>
          </div>
        </div>
      </div>
      <div class="blank"></div>
    </div>
    <footerss></footerss>
  </div>
</template>

<script setup lang="ts" name="steering">
import topBg from '@/views/components/topBg.vue'
import footerss from '@/views/components/footerss.vue'
import baseCard from '@/views/components/baseCard.vue'
import loginBg from '@/assets/images/login_bg.png'
import { reactive } from 'vue'
const baseData = reactive([
  {
    title: '共同主席',
    userList: [
      {
        imgUrl: loginBg,
        name: '赵沁平',
        introduce: '中国工程院院士，北京航空航天大学教授',
      },
      {
        imgUrl: loginBg,
        name: '张尧学',
        introduce:
          '中国工程院院士，教育部高等学校软件工程专业教学指导委员会主任委员，清华大学教授',
      },
    ],
  },
  {
    title: '副主席',
    userList: [
      {
        imgUrl: loginBg,
        name: '赵沁平',
        introduce: '中国工程院院士，北京航空航天大学教授',
      },
      {
        imgUrl: loginBg,
        name: '张尧学',
        introduce:
          '中国工程院院士，教育部高等学校软件工程专业教学指导委员会主任委员，清华大学教授',
      },
      {
        imgUrl: loginBg,
        name: '赵沁平',
        introduce: '中国工程院院士，北京航空航天大学教授',
      },
      {
        imgUrl: loginBg,
        name: '张尧学',
        introduce:
          '中国工程院院士，教育部高等学校软件工程专业教学指导委员会主任委员，清华大学教授',
      },
      {
        imgUrl: loginBg,
        name: '赵沁平',
        introduce: '中国工程院院士，北京航空航天大学教授',
      },
      {
        imgUrl: loginBg,
        name: '张尧学',
        introduce:
          '中国工程院院士，教育部高等学校软件工程专业教学指导委员会主任委员，清华大学教授',
      },
      {
        imgUrl: loginBg,
        name: '赵沁平',
        introduce: '中国工程院院士，北京航空航天大学教授',
      },
      {
        imgUrl: loginBg,
        name: '张尧学',
        introduce:
          '中国工程院院士，教育部高等学校软件工程专业教学指导委员会主任委员，清华大学教授',
      },
    ],
  },
])
</script>

<style scoped lang="scss">
.pages_content {
  display: flex;
  min-height: calc(100vh - 95px);
  flex-direction: column;
  .fontClass {
    font-size: 30px;
    color: #fff;
  }
  .content_box {
    flex: 1;
    height: 100%;
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    .content_box_item {
      display: flex;
      flex-direction: column;
      .title {
        font-size: 30px;
        color: #000000;
        padding: 20px 15px 0 15px;
        margin-top: 0;
        text-align: left;
        margin-bottom: 20px;
        font-weight: 600;
      }
      .user_box {
        width: 100%;
        display: flex;
        flex-wrap: wrap; /* 允许换行 */
        justify-content: space-between; /* 两端对齐，中间自动分配剩余空间 */
        .content_user_item {
          width: 48%;
          display: flex;
        }
      }
    }
    .blank {
      width: 100%;
      height: 32px;
    }
  }
}
</style>
