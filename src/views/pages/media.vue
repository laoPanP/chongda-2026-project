<template>
  <div class="pages_content">
    <top-bg>
      <div class="fontClass">新时代 新格局 新成就</div>
    </top-bg>
    <div class="content_box">
      <!-- CECC媒体合作申请 -->
      <div class="contact_box">
        <div class="title_class">{{ baseData1.title }}</div>
        <div class="contact_div">
          <div class="img_div"><img :src="baseData1.imgUrl" /></div>
          <div class="contact_text_div">
            <div class="contact_text_title">{{ baseData1.content_title }}</div>
            <div class="contact_text_content">
              <div>合作咨询：</div>
              <div
                class="contact_text_item mr32"
                v-for="(item, index) in baseData1.contactList"
                :key="index"
              >
                {{ item }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- CECC主办方报道 -->
      <div class="report_class">
        <div class="title_class">{{ baseData2.title }}</div>
        <div class="report_content">
          <a
            class="report_item"
            v-for="(item, index) in baseData2.reportList"
            :key="index"
            :href="item.toUrl"
            target="_blank"
          >
            <span class="report_item_name">{{ item.name }}</span>
            <span class="report_item_time">{{ item.time }}</span>
          </a>
        </div>
      </div>
      <!-- 媒体支持 -->
      <div class="media_support">
        <div class="title_class">{{ baseData3.title }}</div>
        <div class="media_support_list">
          <div
            class="media_support_item mb32"
            v-for="(item, index) in baseData3.imgUrlList"
            :key="index"
            :style="{
              marginRight: index % 4 == 3 ? '0' : '50px',
            }"
          >
            <img :src="item" />
          </div>
        </div>
      </div>
      <div class="blank"></div>
    </div>
    <footerss></footerss>
  </div>
</template>

<script setup lang="ts" name="media">
import topBg from '@/views/components/topBg.vue'
import footerss from '@/views/components/footerss.vue'
import { reactive } from 'vue'
const baseData1 = reactive({
  title: 'CECC媒体合作申请',
  imgUrl: '/media_01.png',
  content_title: '现场报道/媒体合作',
  contactList: ['jingyi@msup.com.cn', '13920859305（同微信）'],
})
const baseData2 = reactive({
  title: 'CECC主办方报道',
  reportList: [
    {
      name: '【大会回顾】2019中国计算机教育大会（CECC2019）在厦门成功举办',
      time: '2021-09-01',
      toUrl: 'https://www.baidu.com',
    },
    {
      name: '【开幕式回顾】首届中国计算机教育大会在厦门隆重举行',
      time: '2021-09-01',
      toUrl: 'https://www.baidu.com',
    },
    {
      name: '【参会指南】CECC| 2019中国计算机教育大会日程指南',
      time: '2021-09-01',
      toUrl: 'https://www.baidu.com',
    },
  ],
})
const baseData3 = reactive({
  title: '媒体支持',
  imgUrlList: ['/mt1.png', '/mt2.png', '/mt3.png', '/mt4.png', '/mt5.png'],
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
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    .title_class {
      margin: 30px 0;
      color: #313131;
      font-weight: 700;
      font-size: 24px;
      text-align: center;
    }
    .contact_box {
      width: 100%;
      display: flex;
      flex-direction: column;

      .contact_div {
        width: 100%;
        background-color: #fff;
        display: flex;
        .img_div {
          margin: 80px;
          width: 100px;
          height: 100px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .contact_text_div {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .contact_text_title {
            font-size: 28px;
            font-weight: bold;
            color: #4a4a4a;
            line-height: 300%;
          }
          .contact_text_content {
            display: flex;
            font-size: 20px;
            color: #666;
            line-height: 200%;
            font-weight: bold;
          }
        }
      }
    }
    .report_class {
      .report_content {
        padding: 20px 10px;
        .report_item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 10px;
          border-bottom: 1px solid #e0e0e0;
          text-decoration: none;
          color: inherit;
          cursor: pointer;
          transition: color 0.2s ease-in-out;

          .report_item_name {
            color: #333;
            font-size: 16px;
          }

          .report_item_time {
            color: #888;
            font-size: 14px;
            white-space: nowrap;
            margin-left: 20px;
          }

          &:hover {
            .report_item_name,
            .report_item_time {
              text-decoration: underline;
              color: #021a5b;
            }
          }
        }
      }
    }
    .media_support {
      .media_support_list {
        padding: 0 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .media_support_item {
          background-color: #fff;
          width: 257.5px;
          height: 80px;
          display: flex;
          align-items: center;
          img {
            width: 100%;
            height: 80%;
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
