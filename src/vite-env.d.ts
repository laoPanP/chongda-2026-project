/// <reference types="vite/client" />
// 声明 Vue 文件模块类型 防止使用@页面提示错误（不影响项目运行）
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
// 声明虚拟模块
declare module 'virtual:svg-icons-register' {
  const component: any;
  export default component;
}
declare module '@/*'