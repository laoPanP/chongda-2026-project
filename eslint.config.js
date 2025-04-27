import globals from 'globals'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import prettierConfig from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier' // 正确导入方式

export default [
  // {
  // name - 配置对象的名称。这在错误消息和配置检查器中使用，以帮助识别正在使用哪个配置对象
  // files - 指示配置对象应应用于的文件的通配符模式数组。如果未指定，则配置对象适用于与任何其他配置对象匹配的所有文件
  // ignores - 指示配置对象不应应用于的文件的通配符模式数组。如果未指定，则配置对象适用于 files 匹配的所有文件。如果 ignores 在配置对象中没有任何其他键的情况下使用，则模式充当 全局忽略 并应用于每个配置对象。
  // extends - 包含要应用的其他配置的字符串、配置对象或配置数组的数组。
  // languageOptions:{//包含与如何为代码检查配置 JavaScript 相关的设置的对象。
  //    ecmaVersion - 支持的 ECMAScript 版本。可以是任何年份（即 2022）或版本（即 5）。对于最新支持的版本，设置为 "latest"。（默认："latest"）
  //    sourceType - JavaScript 源代码的类型。可能的值是 "script" 用于传统脚本文件，"module" 用于 ECMAScript 模块 (ESM) 和 "commonjs" 用于 CommonJS 文件。（默认："module" 用于 .js 和 .mjs 文件；"commonjs" 用于 .cjs 文件）
  //    globals - 指定在代码检查期间应添加到全局作用域的其他对象的对象。
  //    parser - 包含 parse() 方法或 parseForESLint() 方法的对象。（默认：espree）
  //    parserOptions - 指定直接传递给解析器上的 parse() 或 parseForESLint() 方法的其他选项的对象。可用选项取决于解析器。
  // }
  // linterOptions: {
  //   noInlineConfig - 一个布尔值，指示是否允许内联配置。
  //   reportUnusedDisableDirectives - 一个严重性字符串，指示是否以及如何应跟踪和报告未使用的禁用和启用指令。对于旧版兼容性，true 相当于 "warn"，false 相当于 "off"。（默认值："warn"）
  //   reportUnusedInlineConfigs - 严重性字符串，指示是否以及如何跟踪和报告未使用的内联配置。（默认："off"）
  // }
  // processor - 包含 preprocess() 和 postprocess() 方法的对象或指示插件内处理器名称的字符串（即 "pluginName/processorName"）
  // plugins - 包含插件名称到插件对象的名称-值映射的对象。指定 files 时，这些插件仅对匹配的文件可用
  // settings - 一个包含名称-值对信息的对象，所有规则都应使用这些信息
  // },
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
