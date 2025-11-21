// @ts-nocheck
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
  input:
    'D:\\Workspace\\Company\\Project\\xuetangx-fe\\apps\\rainweb\\src\\components\\ai-workspace\\ai-result-display\\*',
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
  localePath:
    'D:\\Workspace\\Company\\Project\\xuetangx-fe\\apps\\rainweb\\src\\pages\\ai-workspace\\language\\AiResultDisplay\\zh_CN.js',
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
