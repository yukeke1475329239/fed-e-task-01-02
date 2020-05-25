//高阶函数-函数作为参数
// 函数作为参数的好处，函数作为参数的话，可以让函数变得更灵活，而且调用的时候不需要考虑它内部是如何实现的，函数把内部实现的细节帮我们屏蔽了而且函数的名字是有实际意义的。 

function forEach(arr,fn){
  for(let i=0;i<arr.length;i++){
    fn(arr[i])
  }
}

// let arr  = [1,2,3,4];
// forEach(arr,function(item){
//   console.log(item)
// })

function filter (array,fn){
  let result = []
  for(let i=0;i<array.length;i++){
    if(fn(array[i])){
      result.push(array[i])
    }
  }
  return result
}

let arr  = [1,2,3,4];

let r = filter(arr,function(item){
  return item % 2===0
})
console.log(r)


