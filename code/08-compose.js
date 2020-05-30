//函数组合演示

function compose(f,g){
  return function(value){
    return f(g(value))
  }
}
function reverse(arr){
 return arr.reverse()
}
function first(arr){
  return arr[0]
 }
const A = compose(first,reverse)
console.log(A([1,2,3,4]))