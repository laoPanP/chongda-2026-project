module.exports = {
  // 添加规则插件
  plugins: ['stylelint-order'],
  // 继承推荐规范配置
  extends: [
    'stylelint-config-standard', // 配置stylelint扩展插件
    'stylelint-config-html/vue', // 配置vue中template样式格式化
    'stylelint-config-standard-scss', // 配置stylelint scss插件
    'stylelint-config-recommended-vue/scss', // 配置vue中scss样式格式化
    'stylelint-config-recommended-scss', // 配置vue中scss样式格式化
    'stylelint-config-recess-order' // 配置styleint css属性书写顺序插件
    // 'stylelint-config-prettier' // 处理与prettier冲突，stylelint大于等于v15是已经不需要此插件
  ],
  // 不同格式的文件指定自定义语法
  overrides: [
    {
      files: ['**/*.(scss|css|vue|html)'],
      customSyntax: 'postcss-scss'
    },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html'
    }
  ],
  // 忽略检测文件
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts', '**/*.json', '**/*.md', '**/*.yaml'],
  // 自定义配置规则 null是关闭该规则 always是必须
  rules: {
    // 在 css 中使用 v-bind，不报错
    'value-keyword-case': null,
    //禁止在具有较高优先级的选择器后出现被其覆盖
    'no-descending-specificity': null,
    // 要求或禁止URL的引号“always（必须加上引号）”
    'function-url-quotes': 'always',
    // 关闭禁止空源码
    'no-empty-source': null,
    // 指定类选择器的模式 关闭强制选择器类名格式
    'selector-class-pattern': null,
    // 禁止未知的属性
    'property-no-unknown': null,
    // 大括号之前必须有一个空格或者不能有空白符 此规则已经在stylelint15以上的版本中废弃
    // 'block-opening-brace-space-before': null,
    // 关闭禁止值使用浏览器前缀 -webkit -moz
    'value-no-vendor-prefix': null,
    // 关闭禁止属性使用浏览器前缀 -webkit -moz
    'property-no-vendor-prefix': null,

    // 单冒号 : → 伪类在这里配置 允许 Vue 的 global
    'selector-pseudo-class-no-unknown': [
      //不允许未知选择器
      true,
      {
        ignorePseudoClasses: ['global', 'deep'] //忽略属性，修改iview或者elementui的样式时用得到
      }
    ],
    // 双冒号 :: → 伪元素在这里配置 允许 Vue 的 v-deep
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep']
      }
    ],
    // 针对 box-shadow 的复杂值配置
    'declaration-property-value-no-unknown': [
      true,
      {
        ignoreProperties: {
          // 匹配 rgba($variable, alpha) 格式 例如：box-shadow: 0 0 0 2px rgba($secondary-color, 0.2)
          'box-shadow': ['/rgba\\(\\s*\\$[\\w-]+\\s*,\\s*[\\d.]+\\)/']
        }
      }
    ],
    // 指定样式的排序 修复后会帮我们自动整理CSS样式的顺序
    'order/properties-order': [
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'display',
      'justify-content',
      'align-items',
      'float',
      'clear',
      'overflow',
      'overflow-x',
      'overflow-y',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'font-size',
      'font-family',
      'text-align',
      'text-justify',
      'text-indent',
      'text-overflow',
      'text-decoration',
      'white-space',
      'color',
      'background',
      'background-position',
      'background-repeat',
      'background-size',
      'background-color',
      'background-clip',
      'border',
      'border-style',
      'border-width',
      'border-color',
      'border-top-style',
      'border-top-width',
      'border-top-color',
      'border-right-style',
      'border-right-width',
      'border-right-color',
      'border-bottom-style',
      'border-bottom-width',
      'border-bottom-color',
      'border-left-style',
      'border-left-width',
      'border-left-color',
      'border-radius',
      'opacity',
      'filter',
      'list-style',
      'outline',
      'visibility',
      'box-shadow',
      'text-shadow',
      'resize',
      'transition'
    ]
  }
}
