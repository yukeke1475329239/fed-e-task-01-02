
const _ = require("lodash")
//要柯里化的函数
function getSum(a,b,c){
  return a + b + c
}
//柯里化后的函数
let curried = _.curry(getSum)

console.log(curried(1,2,3))
console.log(curried(1)(2,4))
console.log(curried(1,2)(4))