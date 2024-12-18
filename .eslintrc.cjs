module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ['import', 'html', 'prettier', 'vue'],
  extends: ['plugin:vue/recommended'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  globals: {
    axios: true,
    ELEMENT: true,
    MS_PER_DAY: true
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prefer-const': 'off',
    semi: ['error', 'never'],
    'comma-dangle': [2, 'never'],
    'space-before-function-paren': [2, 'never'],

    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off',
    'prettier/prettier': [
      'warn',
      {
        $schema: 'https://json.schemastore.org/prettierrc',
        semi: false,
        tabWidth: 2,
        useTabs: false,
        singleQuote: true,
        printWidth: 100,
        trailingComma: 'none',
        jsxBracketSameLine: false,
        jsxSingleQuote: false
      }
    ]
  }
}
