import eslintJs from '@eslint/js'
import vueParser from 'vue-eslint-parser'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
  {
    ignores: ['**/dist/', '**/vendor/'],
  },

  eslintJs.configs['recommended'],

  {
    files: ['**/*.{js,ts,jsx,tsx,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        myCustomGlobal: 'readonly',
      },
    },
    rules: {},
  },

  ...pluginVue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
    },
  },
]
