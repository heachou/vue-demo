module.exports = {
  // 选项...
  css: {
    extract: true,
    sourceMap: false,
    //此项设置为false会影响element-ui引入时样式失效
    // requireModuleExtension: false
  },
  devServer: {
    compress: true,
    disableHostCheck: true, //webpack4.0 开启热更新
  }
}