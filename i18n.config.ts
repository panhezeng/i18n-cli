// @ts-nocheck
export default {
  input: 'D:\\Workspace\\Company\\Project\\xuetangx-fe\\apps\\rainweb\\src\\components\\smart-mooc',
  output: '',
  exclude: ['**/node_modules/**/*'],
  rules: {
    js: {
      caller: '',
      functionName: 'i18n.t',
      customizeKey: function getCustomizeKey(key, path) {
        console.log('rules js customizeKey', key, path)
        return key
      },
      customSlot: function getCustomSlot(slotValue) {
        return `{${slotValue}}`
      },
      importDeclaration: 'import { i18n } from "@/pages/smart-mooc/i18n"',
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
      importDeclaration: 'import { i18n } from "@/pages/smart-mooc/i18n"',
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
      importDeclaration: 'import { i18n } from "@/pages/smart-mooc/i18n"',
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
      importDeclaration: 'import { i18n } from "@/pages/smart-mooc/i18n"',
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
      importDeclaration: 'import { i18n } from "@/pages/smart-mooc/i18n"',
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
      importDeclaration: 'import { i18n } from "@/pages/smart-mooc/i18n"',
      functionSnippets: '',
    },
    vue: {
      caller: 'this',
      functionNameInTemplate: '$t',
      functionNameInScript: 'i18n.t',
      customizeKey: function getCustomizeKey(key, path) {
        // const res = await translateUtils.googleTranslate(key, 'zh-CN', 'en-US')
        console.log('rules vue customizeKey', key, path)
        return key
      },
      customSlot: function getCustomSlot(slotValue) {
        return `{${slotValue}}`
      },
      importDeclaration: 'import { i18n } from "@/pages/smart-mooc/i18n"',
      tagOrder: ['template', 'script', 'style'],
    },
  },
  prettier: { semi: false, singleQuote: true },
  incremental: true,
  skipExtract: false,
  localePath:
    'D:\\Workspace\\Company\\Project\\xuetangx-fe\\apps\\rainweb\\src\\pages\\smart-mooc\\locales\\zh.json',
  localeFileType: 'json',
  excelPath:
    'D:\\Workspace\\Company\\Project\\xuetangx-fe\\apps\\rainweb\\src\\pages\\smart-mooc\\locales\\locales.xlsx',
  exportExcel: false,
  skipTranslate: true,
  translateKey: true,
  translationTextMaxLength: 5000,
  locales: ['en'],
  globalRule: { ignoreMethods: [] },
  adjustKeyMap: function (allKeyValue, currentFileKeyMap, currentFilePath) {
    return allKeyValue
  },
}
