
let obj = {name: "ykk"}

let obj2 = obj

obj = null

console.log(obj2.name)


function func(){
 var  name = "ykk";
  return name
}
func()
// console.log(name)

function fn(obj1,obj2){
  const obj1 = {}
  const obj2 = {}

  obj1.name = obj2
  obj2.name = obj1

  return "ykk"
}

fn()