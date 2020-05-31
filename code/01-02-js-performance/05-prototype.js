
function Fn1(){
  this.foo = function(){
    console.log(1)
  }
}

let fn1 = new Fn1()

function Fn2(){
  
}
Fn2.prototype.foo = function(){
  console.log(1)
}
let fn2 = new Fn2()