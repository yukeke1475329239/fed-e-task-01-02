//高阶函数-函数作为参数
// 函数作为参数的好处:
//函数作为参数的话，可以让函数变得更灵活，而且调用的时候不需要考虑它内部是如何实现的，函数把内部实现的细节帮我们屏蔽了而且函数的名字是有实际意义的。 
//函数式编程可以使代码更简洁
//for of 是对for循环的抽象
// function forEach(arr,fn){
//   for(let i=0;i<arr.length;i++){
//     fn(arr[i])
//   }
// }

// let arr  = [1,2,3,4];
// forEach(arr,function(item){
//   console.log(item)
// })

// function filter (array,fn){
//   let result = []
//   for(let i=0;i<array.length;i++){
//     if(fn(array[i])){
//       result.push(array[i])
//     }
//   }
//   return result
// }

// let arr  = [1,2,3,4];
// let r = filter(arr,function(item){
//   return item % 2===0
// })
// console.log(r)

//函数作为返回值

// function makeFn(){
//   let msg = "hello";
//   return function (){
//     console.log(msg)
//   }
// }

// let fn =makeFn();
// fn();
// makeFn()()

// function pay(fn){
//   let done = false;
//   return function (){
//     if(!done){
//       done = true;
//       return fn.apply(this,arguments)
//     }
//   }  
// }

// let p = pay(function(money,b){
//   console.log(money,b)
//   console.log("支付："+b)
// })

// p(5,7)
// p(5)
// p(5)
// let a = function(money,b){
//   console.log(money,b)
//   console.log("支付："+money)
// }
// a.apply(this,[2,4])

//map

const map = (array,fn) =>{
  let result = []
  for(val of array){
   result.push(fn(val))
  }
  return result
}

// let arr = [1,2,3,4]
// let r = map(arr,(n)=> n*n)
// console.log(r)

// every作用用来指定数组中的元素是否都满足指定的条件。 (数组中有一个不满足的返回false 全都满足的返回true)
const every = (array,fn) =>{
   let flag = true
   for(item of array){
     flag = fn(item)
     if(!flag){
       break
     }
   }
  return flag
}

// let arr = [2,3,4];
// let r = every(arr,n => n>=2)
// console.log(r)

//some 作用是用来指定数组中的元素是否有一个满足条件。

const some = (array,fn) =>{
  let flag = false
  for(item of array){
    flag = fn(item)
    if(flag){
      break
    }
  }
  return flag
}

// let arr = [1,5,4,7];
// let s = some(arr,n => n%2===0)
// console.log(s)


