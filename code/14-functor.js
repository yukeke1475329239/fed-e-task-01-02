//Functor 函子

class Container {
  static of(value){
    return new Container(value)
  }
  constructor(value){
    this._value = value
  }
  map(fn){
    return new Container (fn(this._value))
  }
}

// let container = new Container(5)
//                 .map(sum => sum+1 )
//                 .map(sum => sum * sum)

let r = Container.of(8)
                  .map(sum => sum * sum)
                  .map(sum => sum + 1)
    console.log(r)
//函子是一个具有map方法的对象，函子里面维护一个值，这个值永远 不对外公布，想要对
// 这个值进行处理 就调用map方法通过map传递一个处理值的函数map方法执行完毕之后会
// 返回一个新的函子所以可以通过这种方式一致链式调用map方法
