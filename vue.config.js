const px2rem = require('postcss-px2rem')
// 配置postcs-px2rem  基准大小 baseSize，需要和rem.js中单位rem值占比一样相同
  
module.exports = {
  // 开启模板编译
  // runtimeCompiler: true,
  // 暂时关闭 eslint 语法检查
  lintOnSave: false,
  css: { // 添加postcss配置
    loaderOptions: {
      postcss: {
        plugins: [
          px2rem({
            remUnit: 37.5   
          })
        ]
      }
    }
  } 
}
