
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace

const str = '12345' //= > 15,628,954 千分符
str.replace(/\d{1,3}(?=(\d{3})+$)/g, (match,p1,p2) => {
  console.log(match, '1')
  console.log(p1, '2')
  console.log(p2, '3')
})