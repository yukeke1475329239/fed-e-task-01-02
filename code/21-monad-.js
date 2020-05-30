//IO Monad
let fp = require("lodash/fp")
const fs = require("fs")

class Io{
  constructor(fn){
    this._value = fn
  }
  static of(value){
     return new Io(function(){
       return value
     })
  }
  join(){
    return this._value()
  }
  flatMap(fn){
    return this.map(fn).join()
  }
  map(fn){
    return new Io(fp.flowRight(fn,this._value))
  }
}

let  readFile = function(filename){
   return new Io(function(){
     return fs.readFileSync(filename,'utf-8')
   })
}

let print  = function(x){
  return new Io(function(){
    return x
  })
}

let r = readFile("./package.json")
        .map(fp.toUpper)
        .flatMap(print)
        console.log(r.join())

