// @ts-nocheck

// \ai-result-display目录下还有类似这种 "'文字' + value + '文字'" 写法的，只要是文本加变量的写法，都改成等效的模板字符串写法

// \ai-result-display目录下所有模板中还有类似这种 '文字{{ value }}-{{ value }}文字'  写法的，只要是文本加{}}这种组合的写法，都改成等效的模板字符串写法

import translateSecret from './translateSecret'
const commonRule = {
  caller: '',
  functionName: 'i18n.t',
  customizeKey: function getCustomizeKey(key, path) {
    return `${key}`
  },
  customSlot: function getCustomSlot(slotValue) {
    return `{${slotValue}}`
  },
  importDeclaration: "import { i18n } from '@/pages/ai-workspace/i18n'",
  functionSnippets: '',
}
export default {
  input: '\\src\\components\\ai-workspace\\ai-result-display\\resource-map\\**\\*',
  output: '',
  exclude: ['**/node_modules/**/*'],
  rules: {
    js: {
      ...commonRule,
    },
    ts: {
      ...commonRule,
    },
    cjs: {
      ...commonRule,
    },
    mjs: {
      ...commonRule,
    },
    jsx: {
      ...commonRule,
    },
    tsx: {
      ...commonRule,
    },
    vue: {
      ...commonRule,
      functionNameInTemplate: '$t',
      functionNameInScript: 'i18n.t',
      tagOrder: ['template', 'script', 'style'],
    },
  },
  prettier: { semi: false, singleQuote: true },
  incremental: true,
  skipExtract: false,
  localePath: '\\src\\pages\\ai-workspace\\language\\AiResultDisplay\\zh_CN.js',
  localeFileType: 'js',
  excelPath: '',
  exportExcel: false,
  translateValue: true,
  convertKeyConfig: {
    type: 'pinyin',
    prefix: 'AiResultDisplay.',
  },
  locales: ['en'],
  globalRule: { ignoreMethods: [] },
  adjustKeyMap: async function (allKeyValue, currentFileKeyMap, currentFilePath) {
    return allKeyValue
  },
  ...translateSecret,
}
