<template>
  <div class="pages_content">
    <top-bg>
      <div class="fontClass">教育创新与发展平台</div>
    </top-bg>
    <div class="content_box">
      <div class="content_div">
        <div class="conference-info">
          <h1 class="conference-title">
            教育创新与发展平台
          </h1>
          <div class="conference-content">
            <p class="conference-intro">
              欢迎来到教育创新与发展平台！我们致力于推动教育改革与创新，构建面向未来的教育生态系统。通过整合优质教育资源，促进产学研深度融合，为学生、教师和教育机构提供全方位的支持与服务。
            </p>

            <p class="conference-focus">
              平台涵盖101计划、虚拟教研室、学科竞赛、教学研讨会、开源资源和合作伙伴等多个板块，旨在打造一个集教育教学、科学研究、实践创新于一体的综合性平台。
            </p>

            <p class="conference-significance">
              教育是国家发展的基石，创新是教育发展的动力。我们秉承"以学生为中心，以创新为引领"的理念，积极探索教育教学新模式，推动教育资源共享与优化配置，助力培养具有国际视野和创新能力的高素质人才。
            </p>

            <p class="conference-invitation">
              让我们携手共进，共同推动教育创新与发展，为建设教育强国贡献力量！
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
