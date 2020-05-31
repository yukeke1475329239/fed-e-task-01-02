# 于可可 ｜ Part 1 | 模块二

## 简答题

### 1，描述引用计数的工作原理和优缺点？

  引用计数的核心思想是设置引用计数，判断当前引用对象是否为0 ，引用数字为0 时立即回收。
  优点：
    - 发现垃圾立即回收
    - 最大限度减少程序暂停
  缺点：
    - 无法回收循环引用的对象
    - 时间开销大

### 2，描述标记整理算法的工作流程。 ###

  - 标记整理可以看做是标记清除的增强
  - 标记阶段的操作和标记清除一致
  - 清除阶段会先执行整理，移动对象位置

### 3，描述V8中新生代存储区垃圾回收的流程。 ###

  在V8的内部，把内存空间分成两个部分左侧是新生代对象，右侧是老生代对象
  将当前内存一分为二，一部分用来存储新生代对象（新生代对象就是存活时间较短的对象），采用标记整理的算法对当前的from空间进行一个活动对象的标记和整理操作，然后在把他们copy到当前的TO空间，最后在置换一下两个空间的状态，这就完成了空间的释放操作。

### 4，描述增量标记算法在何时使用，及工作原理。
  增量标记算法在老生代对象回收实现时使用，采用增量标记可以进行效率优化
  增量标记的原理是将我们当前整段的垃圾回收操作给它拆分成多个小块，组合着去完成当前整个回收，从而去替代之前一口气做完的垃圾回收操作，它的好处是垃圾回收与程序交替着，而不是要等到程序完成之后在进行垃圾回收。

## 代码题1 ##

### 第一题 ###

   ```
      let isLastInStock = fp.flowRight(fp.prop("in_stock"),fp.last)
   ```
### 第二题 ###

  ```
    let isLastInStock = fp.flowRight(fp.prop("name"),fp.first)
  ```

### 第三题 ###
  ```
    function compose(f,g){
      return function(value){
        return f(g(value))
      }
    }
    let _average = function(xs){
      fp.reduce(fp.add,0,xs) / xs.length
    }

    let averageDollarValue = function(cars){
      let dollar_values = fp.map(function(car){
        return car.dollar_value
      },cars)
      return dollar_values
    }

    let B = compose(_average,averageDollarValue)
  ```
### 第四题 ###

  ```
    let _underscore = fp.replace(/\W+/g,'_')
    const f = fp.flowRight(_underscore,fp.toLower);
    console.log(f("Hello  Word"))
  ```

## 代码题2 ##

### 第一题 ###

    ```

      let mayBe = MayBe.of([5,6,1])
      let ex1 = mayBe.map(x => x.map(x => fp.add(x,1)))
    ```

### 第二题 ###
    ```
      let xs = Container.of(["do","eo"])
      let ex2 = xs.map(x => fp.first(x) ) 
    ```
### 第三题 ### 
  ```
    let user = {id:3,name:"ykk"}
    let ex3 = safeProp('name',user).map(x => fp.first(x))
  ```
### 第四题 ###
  
  ```
  let ex4 = MayBe.of(5.1).map(x=> x ? parseInt(x):null)
  console.log(ex4)
  ```



