<template>
  <div class="pages_content">
    <top-bg>
      <div class="fontClass">新时代 新格局 新成就</div>
    </top-bg>
    <div class="content_box">
      <div class="guide-container">
        <div class="guide-content">
          <p class="guide_p1">您好！</p>
          <p class="guide_p1">
            欢迎参加第十九届全国高校操作系统课程教学研讨会！为确保您顺利参会，请仔细阅读以下参会指南。
          </p>

          <p class="guide_p2">一、报到时间地点</p>
          <p class="guide_p3">
            2025年7月18日，阿拉尔塔河花园酒店(滨海路东1595号)
          </p>

          <p class="guide_p2">二、会议时间地点</p>
          <p class="guide_p3">
            2025年7月19日-20日，塔里木大学信息工程学院(新疆阿拉尔市)
          </p>

          <p class="guide_p2">三、会务费用</p>
          <p class="guide_p3">
            会务费 1200 元/人，缴费信息将在后续报名确认时发布。
          </p>

          <p class="guide_p2">四、食宿及交通</p>
          <p class="guide_p3">食宿及交通费用自理。</p>
          <div class="hotel_info">
            <p class="guide_p4">
              <strong>组委会推荐酒店：</strong>阿拉尔塔河花园酒店
            </p>
            <p class="guide_p4"><strong>交通建议：</strong></p>
            <p class="guide_p4">
              因阿拉尔市地处新疆南疆，建议优先选择航空出行，参会老师可选择直飞阿拉尔市塔里木机场或阿克苏市红旗坡机场。组委会将在塔里木机场、阿克苏红旗坡机场安排接站。
            </p>
          </div>

          <p class="guide_p2">五、报名方式</p>
          <p class="guide_p3">
            在线填写报名表：<a
              href="http://oscourse2019.mikecrm.com/aEVQwMh"
              target="_blank"
              class="registration-link"
              >http://oscourse2019.mikecrm.com/aEVQwMh</a
            >
          </p>
          <p class="guide_p4">
            请各位老师尽量提前报名，并在报名信息中确认是否要预定住宿。
          </p>

          <p class="guide_p2">六、组委会联系方式</p>
          <div class="contact_info">
            <p class="guide_p4">
              <strong>工作邮箱：</strong>OSSeminar2025@163.com
            </p>
            <p class="guide_p4"><strong>总务：</strong></p>
            <ul class="contact_list">
              <li>李旭 (18999672534)</li>
              <li>劳冬青 (15109083065)</li>
              <li>韩清华 (18299591420)</li>
            </ul>
            <p class="guide_p4"><strong>报名注册：</strong></p>
            <ul class="contact_list">
              <li>王冬 (13909971854)</li>
              <li>高贤强 (18935845886)</li>
              <li>何钰枫 (13278881138)</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="blank"></div>
    </div>
    <footerss></footerss>
  </div>
</template>

<script setup lang="ts" name="guide">
import topBg from '@/views/components/topBg.vue'
import footerss from '@/views/components/footerss.vue'
</script>

<style scoped lang="scss">
.pages_content {
  display: flex;
  min-height: calc(100vh - $base-header-height);
  flex-direction: column;

  .fontClass {
    font-size: 30px;
    color: #fff;
    text-align: center;
    font-weight: bold;
  }

  .content_box {
    flex: 1;
    height: 100%;
    width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
    background-color: #fff;

    .guide-container {
      max-width: 1000px;
      margin: 0 auto;

      .guide-content {
        line-height: 1.8;

        .guide_p1 {
          font-size: 16px;
          color: #333;
          margin-bottom: 16px;
          text-align: justify;
        }

        .guide_p2 {
          font-size: 18px;
          color: #021a5b;
          font-weight: bold;
          margin: 32px 0 16px 0;
          padding-left: 16px;
          border-left: 4px solid #021a5b;
        }

        .guide_p3 {
          font-size: 16px;
          color: #333;
          margin-bottom: 16px;
          padding-left: 20px;
          line-height: 1.6;
        }

        .guide_p4 {
          font-size: 15px;
          color: #666;
          margin-bottom: 12px;
          padding-left: 20px;
          line-height: 1.6;
        }

        .hotel_info {
          background: #f5f7fa;
          padding: 20px;
          border-radius: 8px;
          margin: 16px 0;
          border-left: 4px solid #021a5b;
        }

        .contact_info {
          background: #e5ecfb;
          padding: 24px;
          border-radius: 8px;
          margin: 16px 0;

          .contact_list {
            list-style: none;
            padding-left: 20px;
            margin: 8px 0 16px 0;

            li {
              font-size: 15px;
              color: #666;
              margin-bottom: 8px;
              padding-left: 16px;
              position: relative;

              &::before {
                content: '•';
                color: #021a5b;
                font-weight: bold;
                position: absolute;
                left: 0;
              }
            }
          }
        }

        .registration-link {
          color: #021a5b;
          text-decoration: none;
          font-weight: bold;

          &:hover {
            text-decoration: underline;
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

// 响应式设计
@media (max-width: 768px) {
  .content_box {
    width: 100% !important;
    padding: 20px 16px !important;

    .guide-container {
      .guide-content {
        .guide_p2 {
          font-size: 16px;
        }

        .guide_p3,
        .guide_p4 {
          padding-left: 16px;
        }

        .hotel_info,
        .contact_info {
          padding: 16px;
        }
      }
    }
  }
}
</style>
