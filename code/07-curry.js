
function getNum(a,b,c){
  return a + b + c
}

function curry(func){
  return function curryFunc(...args){
    if(args.length < func.length){
      return function(){
        console.log(arguments)
       return curryFunc(...args.concat(Array.from(arguments)))
      }
    }
    return func(...args)
  }
}

const curryNum = curry(getNum);
console.log(curryNum(1)(9)(3))