import Vue from 'vue'
// 日期格式
Vue.filter('dateFormate', function (_date) {
  let date2 = new Date(_date)
  let y1 = date2.getFullYear()
  // 获取完整的年份4位, 1970 - ????
  let m1 = date2.getMonth() < 9 ? '0' + (date2.getMonth() + 1) : date2.getDate() + 1
  // 获取当前月份( 0 - 11, 0代表1月 )
  // 所以获取当前月份是myDate.getMonth () + 1
  let d1 = date2.getDate() < 9 ? '0' + (date2.getDate()+1) : date2.getDate() + 1
  // 获取当前日1 31
  let dateM = y1 + '-' + m1 + '-' + d1
  return dateM
})
// 数字格式
Vue.filter('number', function(_data) {
  
})