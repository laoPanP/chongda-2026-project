<template>
  <div class="pages_content">
    <top-bg>
      <div class="fontClass">会议日程</div>
    </top-bg>
    <div class="bgColor">
      <div class="content_box">
        <div class="schedule-container">
          <!-- 会议基本信息 -->
          <div class="schedule-section">
            <h2 class="section-title">会议基本信息</h2>
            <div class="info-grid">
              <div class="info-item">
                <div class="info-icon">📅</div>
                <div class="info-content">
                  <h3>会议时间</h3>
                  <p>2025年7月18日 - 20日</p>
                </div>
              </div>
              <div class="info-item">
                <div class="info-icon">📍</div>
                <div class="info-content">
                  <h3>会议地点</h3>
                  <p>新疆阿拉尔市塔里木大学</p>
                </div>
              </div>
              <div class="info-item">
                <div class="info-icon">⏰</div>
                <div class="info-content">
                  <h3>报名截止</h3>
                  <p>2025年6月30日</p>
                </div>
              </div>
              <div class="info-item">
                <div class="info-icon">👥</div>
                <div class="info-content">
                  <h3>参会对象</h3>
                  <p>全国各高校操作系统课教师</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 报名信息 -->
          <div class="schedule-section">
            <h2 class="section-title">报名信息</h2>
            <div class="registration-info">
              <div class="registration-card">
                <h3>教学研讨会报名表</h3>
                <p>请点击下方链接进行在线报名</p>
                <a
                  href="http://oscourse2019.mikecrm.com/aEVQwMh"
                  target="_blank"
                  class="registration-link"
                >
                  <span>立即报名</span>
                  <i class="arrow-icon">→</i>
                </a>
              </div>
              <div class="registration-card">
                <h3>反馈结果查询</h3>
                <p>查看报名反馈结果</p>
                <a
                  href="http://oscourse2019.mikecrm.com/r.php?t=aEVQwMh"
                  target="_blank"
                  class="registration-link"
                >
                  <span>查看结果</span>
                  <i class="arrow-icon">→</i>
                </a>
              </div>
            </div>
          </div>

          <!-- 温馨提示 -->
          <div class="schedule-section">
            <h2 class="section-title">温馨提示</h2>
            <div class="notice-content">
              <div class="notice-item">
                <div class="notice-icon">💡</div>
                <p>欢迎全国各高校的操作系统课教师积极报名参会</p>
              </div>
              <div class="notice-item">
                <div class="notice-icon">📝</div>
                <p>请务必在报名截止时间前完成报名</p>
              </div>
              <div class="notice-item">
                <div class="notice-icon">🔗</div>
                <p>报名链接和反馈查询链接请妥善保存</p>
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

<script setup lang="ts" name="meetingSchedule">
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

  .bgColor {
    width: 100%;
    background-color: #f5f7fa;
  }

  .content_box {
    flex: 1;
    height: 100%;
    width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;

    .schedule-container {
      max-width: 1000px;
      margin: 0 auto;

      .schedule-section {
        background: #fff;
        border-radius: 12px;
        padding: 32px;
        margin-bottom: 32px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

        .section-title {
          font-size: 24px;
          color: #021a5b;
          margin-bottom: 24px;
          font-weight: bold;
          text-align: center;
          position: relative;

          &::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 3px;
            background: linear-gradient(90deg, #021a5b, #4a90e2);
            border-radius: 2px;
          }
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;

          .info-item {
            display: flex;
            align-items: center;
            padding: 20px;
            background: linear-gradient(135deg, #e5ecfb 0%, #f5f7fa 100%);
            border-radius: 8px;
            border-left: 4px solid #021a5b;
            transition: transform 0.2s, box-shadow 0.2s;

            &:hover {
              transform: translateY(-2px);
              box-shadow: 0 6px 20px rgba(2, 26, 91, 0.15);
            }

            .info-icon {
              font-size: 32px;
              margin-right: 16px;
              flex-shrink: 0;
            }

            .info-content {
              h3 {
                font-size: 16px;
                color: #021a5b;
                margin-bottom: 4px;
                font-weight: bold;
              }

              p {
                font-size: 14px;
                color: #666;
                margin: 0;
              }
            }
          }
        }

        .registration-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;

          .registration-card {
            background: linear-gradient(135deg, #021a5b 0%, #4a90e2 100%);
            color: #fff;
            padding: 32px;
            border-radius: 12px;
            text-align: center;
            transition: transform 0.2s, box-shadow 0.2s;

            &:hover {
              transform: translateY(-4px);
              box-shadow: 0 8px 25px rgba(2, 26, 91, 0.3);
            }

            h3 {
              font-size: 20px;
              margin-bottom: 12px;
              font-weight: bold;
            }

            p {
              font-size: 14px;
              margin-bottom: 24px;
              opacity: 0.9;
            }

            .registration-link {
              display: inline-flex;
              align-items: center;
              background: rgba(255, 255, 255, 0.2);
              color: #fff;
              padding: 12px 24px;
              border-radius: 6px;
              text-decoration: none;
              font-weight: bold;
              transition: background 0.2s;

              &:hover {
                background: rgba(255, 255, 255, 0.3);
              }

              .arrow-icon {
                margin-left: 8px;
                font-size: 18px;
              }
            }
          }
        }

        .notice-content {
          .notice-item {
            display: flex;
            align-items: center;
            padding: 16px 0;
            border-bottom: 1px solid #e5e5e5;

            &:last-child {
              border-bottom: none;
            }

            .notice-icon {
              font-size: 24px;
              margin-right: 16px;
              flex-shrink: 0;
            }

            p {
              font-size: 16px;
              color: #333;
              margin: 0;
              line-height: 1.6;
            }
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

    .schedule-container {
      .schedule-section {
        padding: 24px 20px;

        .info-grid {
          grid-template-columns: 1fr;
        }

        .registration-info {
          grid-template-columns: 1fr;
        }
      }
    }
  }
}
</style>
