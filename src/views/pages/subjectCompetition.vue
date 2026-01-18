<template>
  <div class="pages_content">
    <top-bg>
      <div class="fontClass">学科竞赛</div>
    </top-bg>
    <div class="bgColor">
      <div class="content_box">
        <h2 class="main-title">学科竞赛平台</h2>
        <div class="content-section">
          <p>学科竞赛是提升学生实践能力和创新精神的重要途径，我们搭建学科竞赛平台，为学生提供展示才华、交流学习的机会。</p>
        </div>
        
        <h3 class="sub-title">竞赛类型</h3>
        <div class="content-section">
          <div class="competition-grid">
            <div class="competition-card">
              <h4>计算机类</h4>
              <ul>
                <li>ACM程序设计竞赛</li>
                <li>全国大学生计算机设计大赛</li>
                <li>蓝桥杯全国软件和信息技术专业人才大赛</li>
              </ul>
            </div>
            <div class="competition-card">
              <h4>人工智能类</h4>
              <ul>
                <li>中国高校计算机大赛-人工智能创意赛</li>
                <li>全国大学生人工智能创新大赛</li>
                <li>百度AI开发者大赛</li>
              </ul>
            </div>
            <div class="competition-card">
              <h4>电子信息类</h4>
              <ul>
                <li>全国大学生电子设计竞赛</li>
                <li>“挑战杯”全国大学生课外学术科技作品竞赛</li>
                <li>全国大学生机器人大赛</li>
              </ul>
            </div>
            <div class="competition-card">
              <h4>创新创业类</h4>
              <ul>
                <li>“互联网+”大学生创新创业大赛</li>
                <li>全国大学生创新创业训练计划</li>
                <li>中国“互联网+”大学生创新创业大赛</li>
              </ul>
            </div>
          </div>
        </div>
        
        <h3 class="sub-title">竞赛动态</h3>
        <div class="content-section">
          <div class="news-list">
            <div class="news-item" v-for="(news, index) in newsList" :key="index">
              <div class="news-date">{{ news.date }}</div>
              <div class="news-content">
                <h4>{{ news.title }}</h4>
                <p>{{ news.description }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="sub-title">获奖展示</h3>
        <div class="content-section">
          <div class="award-showcase">
            <div class="award-item" v-for="(award, index) in awardList" :key="index">
              <div class="award-medal">{{ award.medal }}</div>
              <div class="award-info">
                <h4>{{ award.competition }}</h4>
                <p>{{ award.team }}</p>
                <p class="award-year">{{ award.year }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="blank"></div>
      </div>
    </div>
    
    <footerss></footerss>
  </div>
</template>

<script setup lang="ts" name="subjectCompetition">
import topBg from '@/views/components/topBg.vue'
import footerss from '@/views/components/footerss.vue'
import { reactive } from 'vue'

const newsList = reactive([
  {
    date: '2026-01-15',
    title: '2026年ACM程序设计竞赛开始报名',
    description: '第45届ACM国际大学生程序设计竞赛现已开放报名，欢迎广大学生积极参与。'
  },
  {
    date: '2026-01-10',
    title: '全国大学生计算机设计大赛获奖名单公布',
    description: '我校学生在2025年全国大学生计算机设计大赛中取得优异成绩。'
  },
  {
    date: '2026-01-05',
    title: '人工智能创意赛赛前培训通知',
    description: '为提高参赛选手的竞争力，将于1月15日举办人工智能创意赛赛前培训。'
  }
])

const awardList = reactive([
  {
    medal: '🥇',
    competition: 'ACM程序设计竞赛',
    team: '校队A组',
    year: '2025'
  },
  {
    medal: '🥈',
    competition: '全国大学生计算机设计大赛',
    team: '创新团队',
    year: '2025'
  },
  {
    medal: '🥉',
    competition: '蓝桥杯全国软件和信息技术专业人才大赛',
    team: '算法小组',
    year: '2025'
  }
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
    
    .competition-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      
      .competition-card {
        padding: 20px;
        background-color: #f5f5f5;
        border-radius: 8px;
        
        h4 {
          font-size: 18px;
          font-weight: bold;
          color: #313131;
          margin-bottom: 15px;
        }
        
        ul {
          padding-left: 20px;
          
          li {
            margin-bottom: 8px;
          }
        }
      }
    }
    
    .news-list {
      .news-item {
        display: flex;
        margin-bottom: 20px;
        padding: 20px;
        border-bottom: 1px solid #e0e0e0;
        
        .news-date {
          width: 120px;
          color: #021a5b;
          font-weight: bold;
          margin-right: 20px;
        }
        
        .news-content {
          flex: 1;
          
          h4 {
            font-size: 18px;
            font-weight: bold;
            color: #313131;
            margin-bottom: 8px;
          }
        }
      }
    }
    
    .award-showcase {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      
      .award-item {
        display: flex;
        align-items: center;
        padding: 15px;
        background-color: #f9f9f9;
        border-radius: 8px;
        
        .award-medal {
          font-size: 48px;
          margin-right: 20px;
        }
        
        .award-info {
          
          h4 {
            font-size: 18px;
            font-weight: bold;
            color: #313131;
            margin-bottom: 5px;
          }
          
          .award-year {
            color: #999;
            font-size: 14px;
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