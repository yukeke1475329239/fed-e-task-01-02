//普通函数

// function checkAge(min,age){
//   return age >= min
// }
// checkAge(18,24)
// checkAge(18,30)
//柯里化
function checkAge(min){
  return function(age){
    return age >= min
  }
}
let checkAge18 = checkAge(18)
console.log(checkAge18(20))

// es6

// let checkAge = min => (age =>age>=min)
// let checkAge18 = checkAge(18)
// console.log(checkAge18(20))
