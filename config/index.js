export default {
  development: {
    cdn: './',
    apiBaseUrl: '/api' // 开发环境接口请求，后用于proxy代理配置
  },
  beta: {
    cdn: '//test', // 测试环境cdn路径
    apiBaseUrl: '//www.test' // 测试环境接口地址
  },
  release: {
    cdn: '//product', // 正式环境cdn路径
    apiBaseUrl: '//www.product' // 正是环境接口地址
  }
}