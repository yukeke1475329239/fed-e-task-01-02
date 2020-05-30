//柯里化案例
const _ = require("lodash")
const { log } = console
// match如果匹配就返回匹配的内容按数组的形式，如果没有匹配就返回null
// log("ss ff f".match(/\s+/g))
// log("ss2f3ff".match(/\d+/g))

const match = _.curry(function (reg,str){
  return str.match(reg)
})

const matchStr =  match(/\s+/g)
const matchNumber =  match(/\d+/g)
// log(matchNumber("wer3"))
const filter = _.curry(function(func,array){
  return array.filter(func)
})
const filterArr = filter(matchStr)
// console.log(filterArr(["w 3","e 1"]))
// console.log(filter(matchStr)(["Y 3","e1"]))
