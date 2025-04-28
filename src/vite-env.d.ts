/// <reference types="vite/client" />
// 声明 Vue 文件模块类型 防止使用@页面提示错误（不影响项目运行）
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
// 通用路径别名类型（覆盖所有 @/ 子路径）
declare module '@/*' {
  // 自动推断导出类型（根据实际文件内容）
  const value: any
  export default value
}
