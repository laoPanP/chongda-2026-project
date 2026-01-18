<template>
  <div class="pages_content">
    <top-bg>
      <div class="fontClass">开源资源</div>
    </top-bg>
    <div class="bgColor">
      <div class="content_box">
        <h2 class="main-title">开源资源平台</h2>
        <div class="content-section">
          <p>
            开源资源平台致力于收集、整理和分享各类优质开源软件、工具和项目，为开发者和学习者提供丰富的学习和参考资源。
          </p>
        </div>

        <h3 class="sub-title">资源分类</h3>
        <div class="content-section">
          <div class="resource-categories">
            <div
              class="category-card"
              v-for="(category, index) in resourceCategories"
              :key="index"
            >
              <h4>{{ category.name }}</h4>
              <p class="category-description">{{ category.description }}</p>
              <div class="category-count">资源数量：{{ category.count }}</div>
            </div>
          </div>
        </div>

        <h3 class="sub-title">热门推荐</h3>
        <div class="content-section">
          <div class="recommended-resources">
            <div
              class="resource-item"
              v-for="(resource, index) in recommendedResources"
              :key="index"
            >
              <div class="resource-header">
                <h4>{{ resource.name }}</h4>
                <span class="resource-star">⭐ {{ resource.stars }}</span>
              </div>
              <div class="resource-info">
                <p><strong>分类：</strong>{{ resource.category }}</p>
                <p><strong>语言：</strong>{{ resource.language }}</p>
                <p><strong>更新时间：</strong>{{ resource.updateTime }}</p>
              </div>
              <div class="resource-description">
                <p>{{ resource.description }}</p>
              </div>
              <div class="resource-link">
                <a :href="resource.link" target="_blank">访问资源</a>
              </div>
            </div>
          </div>
        </div>

        <h3 class="sub-title">开源社区</h3>
        <div class="content-section">
          <div class="community-info">
            <div class="community-stats">
              <div class="stat-item">
                <span class="stat-number">{{ communityStats.members }}</span>
                <span class="stat-label">社区成员</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">{{ communityStats.projects }}</span>
                <span class="stat-label">开源项目</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">{{
                  communityStats.contributions
                }}</span>
                <span class="stat-label">贡献次数</span>
              </div>
            </div>
            <div class="community-description">
              <p>
                加入我们的开源社区，与全球开发者一起交流学习，共同推动开源事业发展。
              </p>
            </div>
          </div>
        </div>

        <div class="blank"></div>
      </div>
    </div>

    <footerss></footerss>
  </div>
</template>

<script setup lang="ts" name="openSource">
import topBg from '@/views/components/topBg.vue'
import footerss from '@/views/components/footerss.vue'
import { reactive } from 'vue'

const resourceCategories = reactive([
  {
    name: '前端开发',
    description: 'HTML、CSS、JavaScript等前端技术相关资源',
    count: 125,
  },
  {
    name: '后端开发',
    description: 'Java、Python、Go等后端技术相关资源',
    count: 98,
  },
  {
    name: '人工智能',
    description: '机器学习、深度学习等AI相关资源',
    count: 76,
  },
  {
    name: '大数据',
    description: 'Hadoop、Spark等大数据技术相关资源',
    count: 54,
  },
  {
    name: '移动开发',
    description: 'Android、iOS等移动开发相关资源',
    count: 89,
  },
  {
    name: 'DevOps',
    description: 'Docker、Kubernetes等DevOps工具相关资源',
    count: 43,
  },
])

const recommendedResources = reactive([
  {
    name: 'Vue.js',
    description: '渐进式JavaScript框架',
    category: '前端开发',
    language: 'JavaScript',
    stars: '200k+',
    updateTime: '2026-01-10',
    link: 'https://vuejs.org/',
  },
  {
    name: 'React',
    description: '用于构建用户界面的JavaScript库',
    category: '前端开发',
    language: 'JavaScript',
    stars: '210k+',
    updateTime: '2026-01-12',
    link: 'https://react.dev/',
  },
  {
    name: 'TensorFlow',
    description: '端到端开源机器学习平台',
    category: '人工智能',
    language: 'Python',
    stars: '180k+',
    updateTime: '2026-01-08',
    link: 'https://www.tensorflow.org/',
  },
  {
    name: 'Django',
    description: '高级Python Web框架',
    category: '后端开发',
    language: 'Python',
    stars: '75k+',
    updateTime: '2026-01-15',
    link: 'https://www.djangoproject.com/',
  },
])

const communityStats = reactive({
  members: 15230,
  projects: 2845,
  contributions: 125678,
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

    .resource-categories {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;

      .category-card {
        padding: 20px;
        background-color: #f5f5f5;
        border-radius: 8px;

        h4 {
          font-size: 18px;
          font-weight: bold;
          color: #313131;
          margin-bottom: 10px;
        }

        .category-description {
          margin-bottom: 15px;
        }

        .category-count {
          background-color: #021a5b;
          color: #fff;
          padding: 5px 10px;
          border-radius: 4px;
          font-size: 14px;
          text-align: center;
        }
      }
    }

    .recommended-resources {
      .resource-item {
        padding: 20px;
        background-color: #f9f9f9;
        border-radius: 8px;
        margin-bottom: 20px;
        border-left: 4px solid #021a5b;

        .resource-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;

          h4 {
            font-size: 18px;
            font-weight: bold;
            color: #313131;
          }

          .resource-star {
            color: #f59e0b;
            font-weight: bold;
          }
        }

        .resource-info {
          margin-bottom: 15px;
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }

        .resource-description {
          background-color: #fff;
          padding: 15px;
          border-radius: 4px;
          margin-bottom: 15px;
        }

        .resource-link {
          text-align: right;

          a {
            color: #021a5b;
            text-decoration: none;
            font-weight: bold;
            padding: 8px 15px;
            border: 2px solid #021a5b;
            border-radius: 4px;
            transition: all 0.3s;

            &:hover {
              background-color: #021a5b;
              color: #fff;
            }
          }
        }
      }
    }

    .community-info {
      background-color: #f5f5f5;
      padding: 30px;
      border-radius: 8px;

      .community-stats {
        display: flex;
        justify-content: space-around;
        margin-bottom: 20px;

        .stat-item {
          text-align: center;

          .stat-number {
            display: block;
            font-size: 32px;
            font-weight: bold;
            color: #021a5b;
            margin-bottom: 5px;
          }

          .stat-label {
            color: #666;
          }
        }
      }

      .community-description {
        text-align: center;
        font-size: 18px;
      }
    }

    .blank {
      width: 100%;
      height: 60px;
    }
  }
}
</style>
