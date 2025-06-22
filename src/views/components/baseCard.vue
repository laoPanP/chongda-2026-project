<template>
  <div class="card-div">
    <!-- 左侧头像区域 -->
    <div class="avatar-container">
      <div class="avatar">
        <img :src="item.imgUrl" :alt="item.name" />
      </div>
    </div>
    <!-- 右侧信息区域 -->
    <div class="info-container">
      <div class="name">{{ item.name }}</div>
      <div class="divider"></div>
      <div class="description">{{ item.introduce }}</div>
    </div>
  </div>
</template>

<script setup lang="ts" name="baseCard">
// 定义组件的 props
interface Item {
  name: string
  introduce: string
  imgUrl: string
}

interface Props {
  item: Item
}

// 设置默认值
withDefaults(defineProps<Props>(), {
  item: () => ({
    name: '姓名',
    introduce: '介绍信息',
    imgUrl: '',
  }),
})
</script>

<style scoped lang="scss">
.card-div {
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  .avatar-container {
    flex-shrink: 0;

    .avatar {
      width: 110px;
      height: 110px;
      border-radius: 50%;
      overflow: hidden;
      border: 3px solid #f0f0f0;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .info-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0px;

    .name {
      font-weight: bold;
      line-height: 1.4;
      font-size: 20px;
      color: #3e3a39;
    }

    .divider {
      height: 1px;
      background: #e0e0e0;
      margin: 4px 0;
    }

    .description {
      color: #666;
      line-height: 1.6;
      font-size: 16px;
      font-weight: 100;
    }
  }
}
</style>
