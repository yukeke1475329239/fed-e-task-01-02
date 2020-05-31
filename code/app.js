const fp = require("lodash/fp")
//数据

// const cars = [
//   {
//     name:"Ferrari FF",
//     horsepower:660,
//     dollar_value:700000,
//     in_stock:123
//   },
//   {
//     name:"Audi R8",
//     horsepower:525,
//     dollar_value:114200,
//     in_stock:1
//   }
// ]
//1,使用函数组合fp.flowRight()重新实现下面这个函数

// let A = function (cars){
//   //获取最后一跳数据
//   let last_car = fp.last(cars)
//   console.log(last_car)
//   //获取最后一条数据的in_stock属性值
  
//   return fp.prop('in_stock',last_car)
// }
// console.log(A(cars))
// fp.flowRight
// let isLastInStock = fp.flowRight(fp.prop("in_stock"),fp.last)

// let isLastInStock = fp.flowRight(fp.prop("name"),fp.first)
// console.log(isLastInStock(cars))
// function compose(f,g){
//   return function(value){
//     return f(g(value))
//   }
// }
// let _average = function(xs){
//   fp.reduce(fp.add,0,xs) / xs.length
// }

// let averageDollarValue = function(cars){
//   let dollar_values = fp.map(function(car){
//     return car.dollar_value
//   },cars)
//   return dollar_values
// }

// let B = compose(_average,averageDollarValue)

// let _underscore = fp.replace(/\W+/g,'_')
// const f = fp.flowRight(_underscore,fp.toLower);
// console.log(f("Hello  Word"))
//-----------------------------------------------
const { MayBe, Container } = require("./support")

// let mayBe = MayBe.of([5,6,1])
// let ex1 = mayBe
//             .map(x => x.map(x => fp.add(x,1)))

// let xs = Container.of(["do","eo"])
// let ex2 = xs.map(x => fp.first(x) ) 
// console.log(ex2)

// let safeProp = fp.curry(function (x,o){
//   return MayBe.of(o[x])
// })

// let user = {id:3,name:"ykk"}
// let ex3 = safeProp('name',user).map(x => fp.first(x))
// console.log(ex3 )

// let ex4 = function(n){
//   if(n){
//     return parseInt(n)
//   }
// }
let ex4 = MayBe.of(5.1).map(x=> x ? parseInt(x):null)
console.log(ex4)








