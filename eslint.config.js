import globals from 'globals'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import prettierConfig from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier' // 正确导入方式

export default [
  {
    ignores: [
      'node_modules',
      'dist',
      '.gitignore',
      'package.json',
      'package-lock.json',
      'dist-ssr',
      '*.local',
      '.npmrc',
      '.DS_Store',
      'dev-dist',
      'dist_electron',
      '*.d.ts',
      'src/assets/**'
    ]
  },
  /** js推荐配置 */
  eslint.configs.recommended,
  /** vue推荐配置 */
  ...eslintPluginVue.configs['flat/recommended'],
  // 新增 TypeScript 配置
  ...tseslint.configs.recommended,
  /** prettier 配置 */
  eslintPluginPrettierRecommended,

  //javascript 规则
  {
    files: ['**/*.{js,mjs,cjs,vue,ts}'],
    plugins: {
      prettier: eslintPluginPrettier
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
          htmlWhitespaceSensitivity: 'ignore'
        }
      ],
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 生产环境中警告 console 使用，开发环境中关闭规则
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off' // 生产环境中警告 debugger 使用，开发环境中关闭规则
    }
  },

  // vue 规则
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        /** typescript项目需要用到这个 */
        parser: tseslint.parser,
        ecmaVersion: 'latest',
        /** 允许在.vue 文件中使用 JSX */
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      'vue/component-definition-name-casing': 'off',
      'vue/singleline-html-element-content-newline': ['off'],
      'vue/no-mutating-props': [
        'error',
        {
          shallowOnly: true
        }
      ],
      // 要求组件名称始终为 “-” 链接的单词
      'vue/multi-word-component-names': 'off',
      // 关闭 index.html 文件报 clear 错误
      'vue/comment-directive': 'off',
      // 关闭对 defineProps 的有效性检查
      'vue/valid-define-props': 'off',
      // 允许在一个文件中定义多个组件
      'vue/one-component-per-file': 'off',
      // 关闭 Prop 类型要求的警告
      'vue/require-prop-types': 'off',
      // 关闭属性顺序要求
      'vue/attributes-order': 'off',
      // 关闭对默认 Prop 的要求
      'vue/require-default-prop': 'off',
      // 关闭连字符命名检验
      'vue/attribute-hyphenation': 'off',
      // 关闭自闭合标签的要求
      'vue/html-self-closing': 'off',
      // 禁止在关闭的括号前有换行
      'vue/html-closing-bracket-newline': 'off',
      // 允许使用 v-html 指令
      'vue/no-v-html': 'off'
    }
  }
]
