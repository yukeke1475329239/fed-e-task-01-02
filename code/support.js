const fp = require("lodash/fp")

class Container {
  static of(value){
    return new Container(value)
  }
  constructor(value){
    this._value = value
  }
  map(fn){
    return Container.of(fn(this._value))
  }
}

// let r = Container.of(8)
//                 .map(sum => sum * sum)
//                 .map(sum => sum + 1)
//                 console.log(r)

class MayBe{
      static of(x){
        return new MayBe(x)
      }
      constructor(x){
        this._value = x
      }
      isNothing(){
        return this._value === null || this._value === undefined
      }
      map(fu){
        return this.isNothing() ? this : MayBe.of(fu(this._value))
      }
    }
module.exports ={
  MayBe,
  Container
}
    // let r = MayBe.of("hello")
    //             .map(x => x.toUpperCase())
    //             //  .map(x => null)
    //             .map(x => "word")
    //             .map(x => x.toUpperCase())
    // console.log(r)