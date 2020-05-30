
const reverse = arr => arr.reverse()
const first = arr => arr[0]
const toUpper = s => s.toUpperCase()

// function flowRight(...args){
//    return function(value){
//       return args.reverse().reduce(function(acc,func){
//        return func(acc)
//      },value)
//    }
// }

const flowRight = (...args) => value => args.reverse().reduce((acc,fn) => fn(acc), value)
const compost = flowRight(toUpper,first,reverse)
console.log(compost(["jack","tom","kkke"]))
