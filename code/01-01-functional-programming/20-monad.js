//IO函子的问题
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
let cat = fp.flowRight(print,readFile)
console.log(cat("./package.json")._value()._value())
