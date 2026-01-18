<template>
  <div class="pages_content">
    <top-bg>
      <div class="fontClass">101计划</div>
    </top-bg>
    <div class="bgColor">
      <div class="content_box">
        <h2 class="main-title">101计划概述</h2>
        <div class="content-section">
          <p>
            101计划是为了培养面向未来的创新型人才而设立的综合性教育项目，旨在通过跨学科融合、项目式学习和产业实践，提升学生的创新能力和实践技能。
          </p>
        </div>

        <h3 class="sub-title">计划目标</h3>
        <div class="content-section">
          <ul class="goal-list">
            <li>培养具有国际视野的创新型人才</li>
            <li>推动产学研深度融合</li>
            <li>促进教育资源的共享与优化配置</li>
            <li>提升我国在关键领域的竞争力</li>
          </ul>
        </div>

        <h3 class="sub-title">实施内容</h3>
        <div class="content-section">
          <div class="content-item">
            <h4>课程体系</h4>
            <p>
              建立跨学科的课程体系，涵盖计算机科学、人工智能、大数据、物联网等前沿领域。
            </p>
          </div>
          <div class="content-item">
            <h4>实践项目</h4>
            <p>与企业合作开展真实项目实践，让学生在实际问题中锻炼解决能力。</p>
          </div>
          <div class="content-item">
            <h4>国际交流</h4>
            <p>提供国际交流机会，让学生了解全球最新科技发展动态。</p>
          </div>
        </div>

        <div class="blank"></div>
      </div>
    </div>

    <footerss></footerss>
  </div>
</template>

<script setup lang="ts" name="plan101">
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
  }
  .bgColor {
    width: 100%;
    background-color: #fff;
  }
  .content_box {
    flex: 1;
    height: 100%;
    width: 1200px;
    margin: 0 auto;
    padding: 40px 0;

    .main-title {
      font-size: 28px;
      font-weight: bold;
      color: #313131;
      text-align: center;
      margin-bottom: 30px;
    }

    .sub-title {
      font-size: 24px;
      font-weight: bold;
      color: #313131;
      margin: 30px 0 20px 0;
    }

    .content-section {
      font-size: 16px;
      line-height: 1.8;
      color: #666;
      margin-bottom: 20px;
    }

    .goal-list {
      list-style-type: disc;
      padding-left: 20px;
    }

    .content-item {
      margin-bottom: 20px;
      h4 {
        font-size: 18px;
        font-weight: bold;
        color: #313131;
        margin-bottom: 10px;
      }
    }

    .blank {
      width: 100%;
      height: 60px;
    }
  }
}
</style>
