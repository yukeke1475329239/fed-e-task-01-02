//记忆函数

const _ = require("lodash");

function getArea(r){
  console.log(r)
  return Math.PI * r * r
}

// let A = _.memoize(getArea)
// console.log(A(2))
// console.log(A(2))
// console.log(A(2))

function memoize(fn){
  let cache = {}
  return function(){
    let key = JSON.stringify(arguments)
    cache[key] = cache[key] || fn.apply(fn,arguments)
    return cache[key]
  }
}
let A = memoize(getArea)
console.log(A(2))
console.log(A(2))
console.log(A(3))
console.log(A(2))

