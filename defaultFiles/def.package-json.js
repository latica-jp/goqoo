module.exports = projectName => ({
  name: projectName,
  version: '1.0.0',
  description: '',
  scripts: {
    build: 'webpack --progress --mode development',
    watch: 'webpack --progress --mode development --watch',
    release: 'webpack --progress --mode production',
    prettier: 'prettier --write webpack.config.js "src/**/*.js"',
    'eslint-check': 'eslint --print-config .eslintrc.js | eslint-config-prettier-check',
  },
  keywords: [],
  author: '',
  license: 'UNLICENSED',
  private: true,
  devDependencies: {
    'babel-core': '^6.26.0',
    'babel-eslint': '^8.0.2',
    'babel-loader': '^7.1.2',
    'babel-plugin-transform-class-properties': '^6.24.1',
    'babel-preset-env': '^1.6.1',
    'css-loader': '^0.28.7',
    eslint: '^4.12.1',
    'eslint-config-prettier': '^2.9.0',
    'eslint-config-standard': '^11.0.0',
    'eslint-config-vue': '^2.0.2',
    'eslint-plugin-import': '^2.12.0',
    'eslint-plugin-node': '^6.0.1',
    'eslint-plugin-promise': '^3.6.0',
    'eslint-plugin-standard': '^3.0.1',
    'eslint-plugin-vue': '^4.5.0',
    'exports-loader': '^0.7.0',
    'html-loader': '^0.5.1',
    'node-sass': '^4.7.2',
    prettier: '^1.10.2',
    'sass-loader': '^7.0.1',
    'style-loader': '^0.21.0',
    webpack: '^4.8.3',
    'webpack-cli': '^2.1.4',
  },
  dependencies: {
    'babel-polyfill': '^6.26.0',
    'foundation-sites': '^6.4.4-rc1',
    'kintone-utility': 'https://github.com/kintone/kintoneUtility.git',
    vue: '^2.5.9',
  },
})