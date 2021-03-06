# JavaScript性能优化 #
  ## 1. 内存管理 ##
  ## 2. 垃圾回收与常见GC算法 ##
  ## 3. V8引擎的垃圾回收 ##
  ## 4. Performance 工具 ##
  ## 5. 代码优化实例 ##

## 1. 内存管理 ##
### 1.1 内存管理介绍 ###
  - 内存：由可读写单元组成，表示一片可操作的空间
  - 管理：人为的去操作一片空间的申请，使用和释放
  - 内存管理：开发者主动申请空间，使用空间，释放空间
  - 管理流程：申请 - 使用 - 释放

### 1.2 JavaScript 内存管理
  - 申请内存空间
  - 使用内存空间
  - 释放内存空间
## 2. 垃圾回收与常见GC算法 ##
### 2.1 JavaScript中的垃圾
  - JavaScript中内存管理是自动的
  - 对象不再被引用时是垃圾
  - 对象不能从根上访问到时是垃圾

### 2.2 JavaScript中的可达对象 ###
  - 可以访问到的对象就是可达对象（引用，作用域链）
  - 可达的标准就是从根出发是否能够被找到
  - JavaScript中的根可以理解为全局对象

+ 总结：JavaScript中的垃圾回收其实就是找到垃圾，然后让JavaScript执行引擎来进行空间的释放和回收

### 2.3 GC 定义与作用 ###
  - GC就是垃圾回收机制的简写
  - GC可以找到内存中的垃圾，并释放和回收空间

### 2.4 GC算法是什么 ###
  - GC是一种机制，垃圾回收器完成具体的工作
  - 工作的内容就是查找垃圾释放空间，回收空间
  - 算法就是工作时查找和回收所遵循的规则

### 2.5 常见的GC算法 ###
  1. 引用计数
  2. 标记清除
  3. 标记整理
  4. 分代回收 

### 2.5.1 引用计数算法 ###
  - 核心思想：设置引用计数，判断当前引用对象是否为0 
  - 引用计数器
  - 引用关系改变时修改引用数字
  - 引用数字为0 时立即回收
  ####  引用计数算法的优点 ####
    - 发现垃圾立即回收
    - 最大限度减少程序暂停（运用程序在执行过程中有一定的消耗，而当前的执行平台内存肯定是有上限的，所以内存肯定有占满的时候，因为引用计数算法时刻监控那些引用数值为0的对象 。比较极端的情况，当内存即将要满的情况下，引用计数就会立马找到那些数值为0 的对象空间，然后对其释放所以就保证的内存不会有占满的情况。
  #### 引用计数算法的缺点 ####
    - 无法回收循环引用的对象
    ```
      例子：
      function fn(obj1,obj2){
        const obj1 = {}
        const obj2 = {}

        obj1.name = obj2
        obj2.name = obj1

        return "ykk"
    }

    fn()
    因为对象的循环引用导致他的值不可能为0 所以无法进入垃圾回收机制。
    ```
    - 时间开销大（当前的引用计数需要维护一个数值的变化 ，时刻监控当前对象的引用数值是否需要修改 ，本身对象的数值修改就需要消耗时间，如果内存里面有更多的对象需要修改，消耗时间就会更大一些。

### 2.5.2 标记清除算法
  - 核心思想：分标记和清除二阶段完成
  - 遍历所有对象找标记活动对象
  - 遍历所有对象清楚没有标记对象
  - 回收相应的空间
  #### 优缺点 ####
    - 可以回收循环引用的对象
    - 容易产生碎片化空间，浪费空间
    - 不会立即回收垃圾对象
    标记清除的缺点就是找到垃圾对象空间后直接进行回收而有可能产生大量碎片化空间
### 2.5.3 标记整理算法的原理 ###
  - 标记整理可以看做是标记清除的增强
  - 标记阶段的操作和标记清除一致
  - 清除阶段会先执行整理，移动对象位置
  #### 优缺点 ####
    - 减少碎片化空间
    - 不会立即回收垃圾对象

## 3 V8引擎的垃圾回收 ##

### 3.1 认识V8 ###
  - V8是一款主流的JavaScript执行引擎
  - V8采用即使编译
  - V8内存设限

### 3.2 V8垃圾回收策略 ###
  - 采用分代回收的思想
  - 内存分为新生代，老生代
  - 针对不同的对象采用不同的算法

### 3.3 V8中常用的GC算法 ###
  - 分代回收
  - 空间复制
  - 标记清除
  - 标记整理
  - 标记增量

### 细节对比 ###
  - 新生代区域垃圾回收使用空间换时间 （始终有一部分是空间不适用的，即使很小也是一种浪费，所以会造成空间上的浪费）
  - 老生代区域垃圾回收不适合复制算法

## 4. Performance 工具 ##

### 为什么使用Performance
  - GC的目的是为了实现内存空间的良性循环
  - 良性循环的基石是合理使用
  - 时刻关注才能确定是否合理 
  - Performance 提供多种监控方式

### Performance 的使用步骤
  - 打开浏览器输入目标网址
  - 进入开发人员工具面板，选择性能
  - 开启录制功能，访问具体页面
  - 执行用户行为，一段时间后停止录制
  - 分析界面中记录的内存消息

### 内存问题的外在表现 ###
  - 页面出现延迟加载或经常性暂停
  如果界面经常出现延迟或者经常性的暂停他的底层会能会频繁的伴随着垃圾回收出现，而之所以频繁的出现垃圾回收，在于我们程序代码中肯定有一些代码是瞬间让我们的内存爆掉，这样的代码肯定是不合适的
  - 页面持续性出现糟糕的性能
    （使用过程中一直不是很好用，底层存在内存膨胀，所谓的内存膨胀指的是为了达到一个最佳的使用速度，可能回去申请一定的内存空间，但是申请的内存大小超过了当前设备提供的大小）
  - 页面性能随时间延长越来越差
  （这一过程伴随着内存泄漏，在这种情况下刚开始的时候是没有问题的，由于某些代码的出现，随着时间的挣扎，让我们的内存空间越来越少，这就是所谓的内存泄漏，因此这种情况就会随着使用时间越长性能越差的现象）

### 界定内存问题的标准 ###
  - 内存泄漏：内存使用持续增高
  - 内存膨胀：在多数设备上都存在性能问题
  - 频繁垃圾回收：通过内存变化图进行分析

### 监控内存的几种方式
  1. 浏览器任务管理器
  2. Timeline 时序图记录
  3. 堆快照查找分离 DOM
  4. 判断是否存在频繁的垃圾回收

### 什么是分离DOM ###
  - 界面元素存活在DOM树上
  - 垃圾对象时的DOM 节点
  - 分离状态的DOM 节点

### 为什么确定频繁的垃圾回收 ###
  - GC工作时应用程序是停止的
  - 频繁且过长的GC会导致应用假死
  - 用户使用中 感知应用卡顿

### 确定频繁的垃圾回收 ###
  - Timeline 中频繁的上升下降
  - 任务管理器中的数据频繁的增加减小

### Performance 总结
  1. Performance 的使用流程
  2. 内存问题的相关分支
  3. Performance 时序图监控内存变化
  4. 任务管理器监控内存变化
  5. 堆快照查找分离DOM

## 5. 代码优化实例 ##

### 为什么要慎用全局变量 ###
  - 全局变量定义在全局执行上下文，是所有作用域链的顶端
  - 全局执行上下文一直存在于上下文执行栈，直到程序退出
  - 如果某个局部作用域链出现了同名变量则会覆盖或者污染全局。
### 缓存全局变量 ###
  - 将使用中无法避免的全局变量缓存到局部
###  通过原型对象添加附加方法 ###
  ```
  通过原型对象添加附加方法从而提高性能

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
  ```

### 避开闭包陷阱 ###
### 避免属性访问方法使用 ###
### For循环优化 ###
  ```
    var arrList = []
    arrList[10] = 'icoder'

    for(var i = 0; i<arrList.length; i ++){
      console.log(arrList[i])
    }
    for(var i = arrList.length; i; i --){
      console.log(arrList[i])
    }
  ```
###  选择最优的循环方法 ###
  ```
    //如果只是遍历数据不需要进行其他的操作首选是forEach 其次是优化后的for循环，最后是for in
      let arr = new Array(1,2,3,4,5);

      arr.forEach(item => {
        console.log(item)
      });
      for (var i = arr.length; i ; i --){
        console.log(arr[i])
      }
      for (var i in arr){
        console.log(arr[i]])
      }
  ```
### 文档碎片优化节点添加 ###

  - 节点的添加操作必然会有回流和重绘
  ```
   for (var i = 10; i; i --){
     var op = document.createElement("p");
     op.innerHTML = i
     document.body.appendChild(op)
   }
  //优化后
  const fragEle = document.createDocumentFragment()
  for (var i = 5; i; i --){
     var op = document.createElement("p");
     op.innerHTML = i
     fragEle.appendChild(op)
   }
   document.body.appendChild(fragEle)
  ```

### 克隆优化节点操作 ###
  ```
    for (var i = 3; i; i --){
        var op = document.createElement("p");
        op.innerHTML = i
        document.body.appendChild(op)
      }
    //优化后的
    const oldP = document.getElementById("box1")
    for (var i = 4; i; i --){
        var newP = oldP.cloneNode(i);
        newP.innerHTML = i
        document.body.appendChild(newP)
      }
  ```

### 直接量替换 new Object ###

  ```
    var arr = new Array(3)
    arr[0] = 1
    arr[0] = 2
    arr[0] = 3
    //优化后
    var arr = [1,2,3]
  
  ```

  







