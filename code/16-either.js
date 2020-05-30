//Either 函子
let { log } = console
class Left{
  static of(value){
    return new Left(value)
  }
  constructor(value){
    this._value = value
  }
  map(fn){
    return this
  }
} 

class Right{
  static of(value){
    return new Right(value)
  }
  constructor(value){
    this._value = value
  }
  map(fn){
    return Right.of(fn(this._value))
  }
} 
// let r1 = Left.of(12).map(x => x+1)
// let r2 = Right.of(12).map(x => x+1)

function parseJSON(str){
  try{
    return Right.of(JSON.parse(str))
  }catch(e){
    return Left.of({error:e.message})
  }
}
let r = parseJSON('{name:ykk}')
let r = parseJSON('{"name":"ykk"}')
        .map(x => x.name.toUpperCase())
log(r)
