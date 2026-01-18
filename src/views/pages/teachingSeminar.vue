<template>
  <div class="pages_content">
    <top-bg>
      <div class="fontClass">教学研讨会</div>
    </top-bg>
    <div class="bgColor">
      <div class="content_box">
        <h2 class="main-title">教学研讨会平台</h2>
        <div class="content-section">
          <p>教学研讨会是教师交流教学经验、探讨教学改革的重要平台，旨在促进教学质量的提升和教学方法的创新。</p>
        </div>
        
        <h3 class="sub-title">近期研讨会</h3>
        <div class="content-section">
          <div class="seminar-list">
            <div class="seminar-card" v-for="(seminar, index) in upcomingSeminars" :key="index">
              <div class="seminar-header">
                <h4>{{ seminar.title }}</h4>
                <span class="seminar-date">{{ seminar.date }}</span>
              </div>
              <div class="seminar-info">
                <p><strong>地点：</strong>{{ seminar.location }}</p>
                <p><strong>主讲人：</strong>{{ seminar.speaker }}</p>
                <p><strong>主题：</strong>{{ seminar.theme }}</p>
              </div>
              <div class="seminar-description">
                <p>{{ seminar.description }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="sub-title">研讨会主题分类</h3>
        <div class="content-section">
          <div class="theme-categories">
            <div class="category-item" v-for="(category, index) in categories" :key="index">
              <h4>{{ category.name }}</h4>
              <p>包含 {{ category.count }} 场研讨会</p>
            </div>
          </div>
        </div>
        
        <h3 class="sub-title">研讨会成果</h3>
        <div class="content-section">
          <div class="achievements">
            <div class="achievement-item">
              <h4>教学论文</h4>
              <p>已发表教学研究论文 {{ paperCount }} 篇</p>
            </div>
            <div class="achievement-item">
              <h4>教学改革项目</h4>
              <p>获批各级教学改革项目 {{ projectCount }} 项</p>
            </div>
            <div class="achievement-item">
              <h4>教学成果奖</h4>
              <p>获得各级教学成果奖 {{ awardCount }} 项</p>
            </div>
          </div>
        </div>
        
        <div class="blank"></div>
      </div>
    </div>
    
    <footerss></footerss>
  </div>
</template>

<script setup lang="ts" name="teachingSeminar">
import topBg from '@/views/components/topBg.vue'
import footerss from '@/views/components/footerss.vue'
import { reactive, ref } from 'vue'

const upcomingSeminars = reactive([
  {
    title: '新时代高校计算机教育改革研讨会',
    date: '2026-02-10',
    location: '线上会议室',
    speaker: '张教授',
    theme: '计算机教育与产业需求对接',
    description: '探讨新时代背景下高校计算机教育如何更好地满足产业发展需求，推动教育教学改革。'
  },
  {
    title: '人工智能教学方法创新研讨会',
    date: '2026-02-25',
    location: '学术交流中心',
    speaker: '李博士',
    theme: 'AI时代的教学方法与实践',
    description: '分享人工智能领域教学的创新方法和实践经验，促进教学质量提升。'
  },
  {
    title: '在线教学与混合式教学研讨会',
    date: '2026-03-15',
    location: '线上+线下',
    speaker: '王教授',
    theme: '后疫情时代的教学模式创新',
    description: '探讨后疫情时代在线教学与混合式教学的有效实施策略。'
  }
])

const categories = reactive([
  { name: '计算机教育', count: 15 },
  { name: '人工智能教学', count: 12 },
  { name: '在线教育', count: 10 },
  { name: '教学方法创新', count: 8 },
  { name: '课程建设', count: 11 }
])

const paperCount = ref(45)
const projectCount = ref(23)
const awardCount = ref(18)
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
    
    .seminar-list {
      .seminar-card {
        padding: 20px;
        background-color: #f9f9f9;
        border-radius: 8px;
        margin-bottom: 20px;
        border-left: 4px solid #021a5b;
        
        .seminar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
          
          h4 {
            font-size: 18px;
            font-weight: bold;
            color: #313131;
          }
          
          .seminar-date {
            color: #021a5b;
            font-weight: bold;
          }
        }
        
        .seminar-info {
          margin-bottom: 15px;
        }
        
        .seminar-description {
          background-color: #fff;
          padding: 15px;
          border-radius: 4px;
        }
      }
    }
    
    .theme-categories {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      
      .category-item {
        flex: 1;
        min-width: 200px;
        padding: 20px;
        background-color: #f5f5f5;
        border-radius: 8px;
        text-align: center;
        
        h4 {
          font-size: 18px;
          font-weight: bold;
          color: #313131;
          margin-bottom: 10px;
        }
      }
    }
    
    .achievements {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      
      .achievement-item {
        flex: 1;
        min-width: 250px;
        padding: 20px;
        background-color: #021a5b;
        color: #fff;
        border-radius: 8px;
        text-align: center;
        
        h4 {
          font-size: 20px;
          font-weight: bold;
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