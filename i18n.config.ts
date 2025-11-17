// @ts-nocheck
export default {
  input:
    'D:\\Workspace\\Company\\Project\\xuetangx-fe\\apps\\rainweb\\src\\components\\ai-workspace\\ai-result-display',
  output: '',
  exclude: ['**/node_modules/**/*'],
  rules: {
    js: {
      caller: '',
      functionName: 'i18n.t',
      customizeKey: function getCustomizeKey(key, path) {
        return key
      },
      customSlot: function getCustomSlot(slotValue) {
        return `{${slotValue}}`
      },
      importDeclaration: "import { i18n } from '@/pages/ai-workspace/i18n'",
    },
    ts: {
      caller: '',
      functionName: 't',
      customizeKey: function getCustomizeKey(key, path) {
        return key
      },
      customSlot: function getCustomSlot(slotValue) {
        return `{${slotValue}}`
      },
      importDeclaration: "import { i18n } from '@/pages/ai-workspace/i18n'",
    },
    cjs: {
      caller: '',
      functionName: 't',
      customizeKey: function getCustomizeKey(key, path) {
        return key
      },
      customSlot: function getCustomSlot(slotValue) {
        return `{${slotValue}}`
      },
      importDeclaration: "import { i18n } from '@/pages/ai-workspace/i18n'",
    },
    mjs: {
      caller: '',
      functionName: 't',
      customizeKey: function getCustomizeKey(key, path) {
        return key
      },
      customSlot: function getCustomSlot(slotValue) {
        return `{${slotValue}}`
      },
      importDeclaration: "import { i18n } from '@/pages/ai-workspace/i18n'",
    },
    jsx: {
      caller: '',
      functionName: 't',
      customizeKey: function getCustomizeKey(key, path) {
        return key
      },
      customSlot: function getCustomSlot(slotValue) {
        return `{${slotValue}}`
      },
      importDeclaration: "import { i18n } from '@/pages/ai-workspace/i18n'",
      functionSnippets: '',
    },
    tsx: {
      caller: '',
      functionName: 't',
      customizeKey: function getCustomizeKey(key, path) {
        return key
      },
      customSlot: function getCustomSlot(slotValue) {
        return `{${slotValue}}`
      },
      importDeclaration: "import { i18n } from '@/pages/ai-workspace/i18n'",
      functionSnippets: '',
    },
    vue: {
      caller: 'this',
      functionNameInTemplate: '$t',
      functionNameInScript: 'i18n.t',
      customizeKey: function getCustomizeKey(key, path) {
        return key
      },
      customSlot: function getCustomSlot(slotValue) {
        return `{${slotValue}}`
      },
      importDeclaration: "import { i18n } from '@/pages/ai-workspace/i18n'",
      tagOrder: ['template', 'script', 'style'],
    },
  },
  prettier: { semi: false, singleQuote: true },
  incremental: true,
  skipExtract: false,
  localePath:
    'D:\\Workspace\\Company\\Project\\xuetangx-fe\\apps\\rainweb\\src\\pages\\ai-workspace\\language\\AIResultDisplay\\zh.js',
  localeFileType: 'js',
  excelPath:
    'D:\\Workspace\\Company\\Project\\xuetangx-fe\\apps\\rainweb\\src\\pages\\ai-workspace\\language\\AIResultDisplay\\locales.xlsx',
  exportExcel: false,
  skipTranslate: false,
  translateKey: true,
  translator: 'baidu',
  baidu: {},
  translationTextMaxLength: 5000,
  locales: ['en'],
  globalRule: { ignoreMethods: [] },
  adjustKeyMap: async function (allKeyValue, currentFileKeyMap, currentFilePath) {
    return allKeyValue
  },
}
