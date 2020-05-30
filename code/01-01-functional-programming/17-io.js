//io函子
let fp = require("lodash/fp")

class Io{
  constructor(fn){
    this._value = fn
  }
  static of(value){
     return new Io(function(){
       return value
     })
  }
  map(fn){
    return new Io(fp.flowRight(fn,this._value))
  }
}

let r = Io.of({a:'kk'}).map(x => x.a)
console.log(r._value())