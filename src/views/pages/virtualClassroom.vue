<template>
  <div class="pages_content">
    <top-bg>
      <div class="fontClass">虚拟教研室</div>
    </top-bg>
    <div class="bgColor">
      <div class="content_box">
        <h2 class="main-title">虚拟教研室建设</h2>
        <div class="content-section">
          <p>虚拟教研室是利用现代信息技术构建的跨时空教学研究平台，旨在打破地域限制，促进优质教育资源共享，提升教学研究水平。</p>
        </div>
        
        <h3 class="sub-title">建设目标</h3>
        <div class="content-section">
          <div class="goal-container">
            <div class="goal-card">
              <h4>资源共享</h4>
              <p>整合优质教学资源，实现跨校、跨区域资源共享</p>
            </div>
            <div class="goal-card">
              <h4>协同创新</h4>
              <p>促进教师之间的协同研究与创新</p>
            </div>
            <div class="goal-card">
              <h4>教学改革</h4>
              <p>推动教学模式与方法的改革创新</p>
            </div>
            <div class="goal-card">
              <h4>能力提升</h4>
              <p>提升教师教学研究能力和学生学习效果</p>
            </div>
          </div>
        </div>
        
        <h3 class="sub-title">主要功能</h3>
        <div class="content-section">
          <ul class="feature-list">
            <li>
              <h4>在线教学</h4>
              <p>支持实时直播、录播课程等多种教学形式</p>
            </li>
            <li>
              <h4>研讨交流</h4>
              <p>提供在线研讨、论坛交流等功能</p>
            </li>
            <li>
              <h4>资源库</h4>
              <p>建设丰富的教学资源库，包括课件、案例、视频等</p>
            </li>
            <li>
              <h4>项目管理</h4>
              <p>支持教学研究项目的在线管理与协作</p>
            </li>
          </ul>
        </div>
        
        <h3 class="sub-title">加入方式</h3>
        <div class="content-section">
          <p>欢迎各高校教师和研究人员加入虚拟教研室，共同推动教学研究的发展。</p>
        </div>
        
        <div class="blank"></div>
      </div>
    </div>
    
    <footerss></footerss>
  </div>
</template>

<script setup lang="ts" name="virtualClassroom">
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
    
    .goal-container {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      
      .goal-card {
        flex: 1;
        min-width: 250px;
        padding: 20px;
        background-color: #f5f5f5;
        border-radius: 8px;
        h4 {
          font-size: 18px;
          font-weight: bold;
          color: #313131;
          margin-bottom: 10px;
        }
      }
    }
    
    .feature-list {
      list-style-type: none;
      padding: 0;
      
      li {
        margin-bottom: 20px;
        padding: 20px;
        border-left: 4px solid #021a5b;
        background-color: #f9f9f9;
        
        h4 {
          font-size: 18px;
          font-weight: bold;
          color: #313131;
          margin-bottom: 10px;
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