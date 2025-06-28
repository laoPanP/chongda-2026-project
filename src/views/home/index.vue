<template>
  <div class="pages_content">
    <top-bg>
      <div class="fontClass">第十九届全国高校操作系统课程教学研讨会</div>
    </top-bg>
    <div class="content_box">
      <div class="content_div">
        <div class="conference-info">
          <h1 class="conference-title">
            第十九届（2025年）全国高校操作系统课程教学研讨会
          </h1>
          <div class="conference-content">
            <p class="conference-intro">
              第十九届（2025年）全国高校操作系统课程教学研讨会将于2025年7月18日-20日在新疆·阿拉尔召开。本次会议旨在把握新时代计算机教育发展脉搏，汇聚操作系统领域的国家领军人才、知名学者、一线教师及企业专家，通过特邀报告、专题研讨、教学论坛等多种形式，共同探讨操作系统课程教学改革与人才培养创新。组委会诚挚邀请您拨冗出席，共襄盛举，擘画操作系统教育新蓝图！
            </p>

            <p class="conference-focus">
              本届会议将围绕教学质量、AI赋能、案例实践、赛教融合、实验创新和教学评价等多个关键问题开展广泛深入的研讨，充分发挥产学研协同育人优势，促进全国高校操作系统课程的教学水平进一步提升，人才培养质量进一步提升！
            </p>

            <p class="conference-significance">
              操作系统作为计算机系统的核心基础软件与安全基石，是计算机类专业的核心基础。推动操作系统技术自主可控不仅是产业发展的迫切需求，更是国家信息安全的战略要求，需要高校、企业和社会各界通力协作。全国高校操作系统课程教学研讨会自1988年开办以来，已成功举办十八届，成为国内计算机类专业教学领域最具影响力和凝聚力的课程研讨会之一。会议始终致力于为全国高校计算机类专业教师、教学管理者及企业研发人员搭建课程教学、人才培养与科研创新的高水平交流平台。
            </p>

            <p class="conference-invitation">
              诚邀您莅临美丽的新疆阿拉尔，分享智慧，碰撞思想，携手推动全国高校操作系统课程建设与人才培养再次上新台阶！期待与您相聚2025年盛夏！
            </p>
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
    width: 100%;
    background-color: #fff;

    .content_div {
      height: 100%;
      width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      padding: 40px 20px;

      .conference-info {
        max-width: 1000px;
        margin: 0 auto;

        .conference-title {
          font-size: 28px;
          color: #021a5b;
          text-align: center;
          margin-bottom: 40px;
          font-weight: bold;
          line-height: 1.4;
        }

        .conference-content {
          p {
            font-size: 16px;
            line-height: 1.8;
            color: #333;
            margin-bottom: 24px;
            text-align: justify;
            text-indent: 2em;
          }

          .conference-intro {
            font-size: 17px;
            color: #021a5b;
            font-weight: 500;
          }

          .conference-focus {
            background: #f5f7fa;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #021a5b;
            margin: 30px 0;
          }

          .conference-significance {
            background: #e5ecfb;
            padding: 20px;
            border-radius: 8px;
            margin: 30px 0;
          }

          .conference-invitation {
            font-size: 18px;
            color: #021a5b;
            font-weight: bold;
            text-align: center;
            background: linear-gradient(135deg, #e5ecfb 0%, #f5f7fa 100%);
            padding: 25px;
            border-radius: 12px;
            border: 2px solid #021a5b;
            margin-top: 40px;
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
