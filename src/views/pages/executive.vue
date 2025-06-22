<template>
  <div class="pages_content">
    <top-bg>
      <div class="fontClass">新时代 新格局 新成就</div>
    </top-bg>
    <div class="content_box">
      <div
        class="content_box_item mb32"
        v-for="(item, index) in baseData"
        :key="index"
      >
        <div class="title">{{ item.position }}</div>
        <baseCard :item="item"></baseCard>
      </div>
      <div class="blank"></div>
    </div>
    <footerss></footerss>
  </div>
</template>

<script setup lang="ts" name="executive">
import topBg from '@/views/components/topBg.vue'
import footerss from '@/views/components/footerss.vue'
import baseCard from '@/views/components/baseCard.vue'
import loginBg from '@/assets/images/login_bg.png'
import { reactive } from 'vue'
const baseData = reactive([
  {
    position: '共同主席',
    imgUrl: loginBg,
    name: '张尧学',
    introduce:
      '中国工程院院士，教育部高等学校软件工程专业教学指导委员会主任委员，清华大学教授',
  },
  {
    position: '',
    imgUrl: loginBg,
    name: '赵沁平',
    introduce: '中国工程院院士，北京航空航天大学教授',
  },
  {
    position: '程序委员会主席',
    imgUrl: loginBg,
    name: '武永卫',
    introduce:
      '教育部高等学校计算机类专业教学指导委员会秘书长，清华大学计算机科学与技术系副主任、长聘教授',
  },
  {
    position: '程序委员会副主席',
    imgUrl: loginBg,
    name: '张龙',
    introduce: '高等教育出版社数字教材出版中心主任',
  },
  {
    position: '组织委员会主席',
    imgUrl: loginBg,
    name: '卢先和',
    introduce: '清华大学出版社总编辑、编审',
  },
  {
    position: '组织委员会副主席',
    imgUrl: loginBg,
    name: '刘付强',
    introduce: 'msup创始人兼CEO，北京微上信息技术研究院院长',
  },
  {
    position: '大会论坛主席',
    imgUrl: loginBg,
    name: '封化民',
    introduce:
      '教育部高等学校网络空间安全专业教学指导委员会秘书长，北京电子科技学院教授',
  },
  {
    position: '分论坛主席',
    imgUrl: loginBg,
    name: '桂小林',
    introduce:
      '教育部高等学校大学计算机课程教学指导委员会秘书长，西安交通大学电子与信息工程学院教授',
  },
  {
    position: '产学研合作论坛共同主席',
    imgUrl: loginBg,
    name: '陈志刚',
    introduce:
      '教育部高等学校软件工程专业教学指导委员会秘书长，中南大学计算机学院党委书记、教授',
  },
  {
    position: '',
    imgUrl: loginBg,
    name: '卢苇',
    introduce:
      '教育部软件工程专业教学指导委员会副主任委员、北京交通大学软件学院教授',
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
  .content_box {
    flex: 1;
    height: 100%;
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    .content_box_item {
      display: flex;
      flex-wrap: wrap; /* 允许换行 */
      justify-content: space-between; /* 两端对齐，中间自动分配剩余空间 */
      width: 48%;
      .title {
        font-size: 30px;
        color: #000000;
        padding: 20px 15px 0 15px;
        margin-top: 0;
        text-align: left;
        margin-bottom: 20px;
        font-weight: 600;
      }
    }
    .blank {
      width: 100%;
      height: 60px;
    }
  }
}
</style>
