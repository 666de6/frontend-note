<!--
 * @Author: your name
 * @Date: 2021-07-14 10:11:49
 * @LastEditTime: 2021-08-19 16:43:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-training-doc/docs/javascript/ES6.md
-->
# ES6

## 变量和常量声明
**let(ES6)**  
声明一个 ***块作用域*** 的 ***局部变量*** ，可选初始化一个值。  
**const(ES6)**  
声明一个 ***块作用域*** 的只读 ***常量***。  

## 变量的解构赋值（数组、对象解构赋值…）
解构赋值语法是一种 Javascript 表达式。通过解构赋值, 可以将属性/值从对象/数组中取出,赋值给其他变量。  

### 解构数组  
1. 变量声明并赋值时的解构  
```javascript
var foo = ["one", "two", "three"];
var [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"
``` 

2. 将剩余数组(Rest)赋值给一个变量  
```javascript
var [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]
```
**...**  

### 解构对象  
1. 基本赋值
```javascript
var o = {p: 42, q: true};
var {p, q} = o;
console.log(p); // 42
console.log(q); // true
```

2. 函数参数默认值  
```javascript
function drawES2015Chart({size = 'big', cords = { x: 0, y: 0 }, radius = 25} = {})
{
  console.log(size, cords, radius);
  // do some chart drawing
}

drawES2015Chart({
  cords: { x: 18, y: 30 },
  radius: 30
});
```

3. 对象解构中的 Rest  
```javascript
let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}
a; // 10
b; // 20
rest; // { c: 30, d: 40 }
```

**...**  
## 字符串的扩展
**模板字符串**  
模板字符串使用反引号 (\` \`) 来代替普通字符串中的用双引号和单引号。模板字符串可以包含特定语法（${expression}）的占位符。**在模版字符串内使用反引号（`）时，需要在它前面加转义符（\）**。  
```javascript
var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."
```
## 数值的扩展
**指数运算符**  
ES2016 新增了一个指数运算符（**）。  
**这个运算符的一个特点是右结合，而不是常见的左结合**。多个指数运算符连用时，是从最右边开始计算的。  
```javascript
// 相当于 2 ** (3 ** 2)
2 ** 3 ** 2
// 512
```
**BigInt 数据类型**  
JavaScript 所有数字都保存成 64 位浮点数，这给数值的表示带来了两大限制。一是数值的精度只能到 53 个二进制位（相当于 16 个十进制位），大于这个范围的整数，JavaScript 是无法精确表示的，这使得 JavaScript 不适合进行科学和金融方面的精确计算。二是大于或等于2的1024次方的数值，JavaScript 无法表示，会返回Infinity。

```javascript
const a = 2172141653n;
const b = 15346349309n;
// BigInt 可以保持精度
a * b // 33334444555566667777n
// 普通整数无法保持精度
Number(a) * Number(b) // 33334444555566670000
```
**BigInt 只用来表示整数，没有位数的限制，任何位数的整数都可以精确表示。**

## 函数的扩展
### 函数参数的默认值 
ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面。
```javascript
function log(x, y ='World'){
  console.log(x, y);
}
log('Hello')// Hello World
log('Hello','China')// Hello China
log('Hello','')// Hello
```
**参数变量是默认声明的，所以不能用let或const再次声明**。
```javascript
function foo(x =5){
  let x =1;// error
const x =2;// error
}
```

通常情况下，**定义了默认值的参数，应该是函数的尾参数**。否则无法只省略该参数，而不省略它后面的参数，除非显式输入undefined。
```javascript
function f(x =1, y){
return[x, y];
}
f()// [1, undefined]
f(2)// [2, undefined]
f(,1)// 报错
f(undefined,1)// [1, 1]
```
**一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域（context）**。等到初始化结束，这个作用域就会消失。
```javascript
let x =1;
function f(y = x){
  let x =2;
  console.log(y);
}
f()// 1
```
### rest 参数
ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。rest 参数搭配的变量是一个**数组**，该变量将多余的参数放入数组中。
```javascript
function add(...values) {
  console.log(values)
}
add(2, 5, 3) // [2,5,3]
```
arguments对象不是数组，而是一个类似数组的对象。所以为了使用数组的方法，必须使用Array.prototype.slice.call先将其转为数组。
```javascript
// arguments变量的写法
function sortNumbers() {
  return Array.prototype.slice.call(arguments).sort();
}
// rest参数的写法
const sortNumbers = (...numbers) => numbers.sort();
```
注意，**rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错**。
```javascript
// 报错
function f(a, ...b, c) {
  // ...
}
```
### 箭头函数
箭头函数表达式的语法 ***比函数表达式更简洁***，并且 ***没有自己的this***。箭头函数表达式更适用于那些本来需要匿名函数的地方，并且它 ***不能用作构造函数***。  

***箭头函数不会创建自己的this,它只会从自己的作用域链的上一层继承this***。  
```javascript
var obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c: function() {
    console.log( this.i, this)
  }
}
```
## 数组的扩展
### 扩展运算符
扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。
```javascript
console.log(...[1, 2, 3])
// 1 2 3
console.log(1, ...[2, 3, 4], 5)
// 1 2 3 4 5
[...document.querySelectorAll('div')]
// [<div>, <div>, <div>]
```

该运算符主要用于函数调用。
```javascript
function push(array, ...items) {
  array.push(...items);
}
function add(x, y) {
  return x + y;
}
const numbers = [4, 38];
add(...numbers) // 42
```

**扩展运算符的应用**  
（1）复制数组
```javascript
const a1 = [1, 2];
// 写法一
const a2 = [...a1];
// 写法二
const [...a2] = a1;
```
（2）合并数组
```javascript
const a1 = [{ foo: 1 }];
const a2 = [{ bar: 2 }];
const a3 = a1.concat(a2);
const a4 = [...a1, ...a2];
a3[0] === a1[0] // true
a4[0] === a1[0] // true
```
a3和a4是用两种不同方法合并而成的新数组，但是它们的成员都是对原数组成员的引用，这就是浅拷贝。如果修改了引用指向的值，会同步反映到新数组。  

（3）与解构赋值结合  
```javascript
const [first, ...rest] = [1, 2, 3, 4, 5];
first // 1
rest  // [2, 3, 4, 5]
// 如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。
const [...butLast, last] = [1, 2, 3, 4, 5];
// 报错
const [first, ...middle, last] = [1, 2, 3, 4, 5];
// 报错
```
（4）字符串  
扩展运算符还可以将字符串转为真正的数组。
```javascript
[...'hello']
// [ "h", "e", "l", "l", "o" ]
```
（5）实现了 Iterator 接口的对象  
任何定义了遍历器（Iterator）接口的对象（参阅 Iterator 一章），都可以用扩展运算符转为真正的数组。
```javascript
let nodeList = document.querySelectorAll('div');
let array = [...nodeList];
```
上面代码中，querySelectorAll方法返回的是一个NodeList对象。它不是数组，而是一个类似数组的对象。这时，扩展运算符可以将其转为真正的数组，原因就在于NodeList对象实现了 Iterator 。  

（6）Map 和 Set 结构，Generator 函数  
扩展运算符内部调用的是数据结构的 Iterator 接口，因此只要具有 Iterator 接口的对象，都可以使用扩展运算符.  

*原生具备 Iterator 接口的数据结构如下*。

* Array
* Map
* Set
* String
* TypedArray
* 函数的 arguments 对象
* NodeList 对象

## 对象的扩展
### 属性的简洁表示法
ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。
```javascript
const foo = 'bar';
const baz = {foo};
baz // {foo: "bar"}
// 等同于
const baz = {foo: foo};
// 属性名就是变量名, 属性值就是变量值。
```

除了属性简写，方法也可以简写。
```javascript
const o = {
  method() {
    return "Hello!";
  }
};
// 等同于
const o = {
  method: function() {
    return "Hello!";
  }
};
```
### 属性名表达式
ES6 允许字面量定义对象时，用方法二（表达式）作为对象的属性名，即把表达式放在方括号内。
```javascript
let propKey = 'foo';
let obj = {
  [propKey]: true,
  ['a' + 'bc']: 123
};
```
表达式还可以用于定义方法名。
```javascript
let obj = {
  ['h' + 'ello']() {
    return 'hi';
  }
};
obj.hello() // hi
```
属性名表达式与简洁表示法，不能同时使用，会报错。
```javascript
// 报错
const foo = 'bar';
const bar = 'abc';
const baz = { [foo] };
// 正确
const foo = 'bar';
const baz = { [foo]: 'abc'};
```
属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串[object Object]
```javascript
const keyA = {a: 1};
const keyB = {b: 2};
const myObject = {
  [keyA]: 'valueA',
  [keyB]: 'valueB'
};
myObject // Object {[object Object]: "valueB"}
//[keyA]和[keyB]得到的都是[object Object]，所以[keyB]会把[keyA]覆盖掉，而myObject最后只有一个[object Object]属性。
```

### 对象的扩展运算符
已经介绍过扩展运算符（...）。ES2018 将这个运算符引入了对象。  
对象的扩展运算符（...）用于取出参数对象的所有可遍历属性，拷贝到当前对象之中  
```javascript
let z = { a: 3, b: 4 };
let n = { ...z };
n // { a: 3, b: 4 }
```
**对象的扩展运算符等同于使用Object.assign()方法。**
```javascript
let aClone = { ...a };
// 等同于
let aClone = Object.assign({}, a);
```
### 链判断运算符
如果读取对象内部的某个属性，往往需要判断一下该对象是否存在。比如，要读取message.body.user.firstName，安全的写法是写成下面这样。
```javascript
const firstName = (message
  && message.body
  && message.body.user
  && message.body.user.firstName) || 'default';
```
这样的层层判断非常麻烦，因此 ES2020 引入了“**链判断运算符**”（optional chaining operator）?.，简化上面的写法。
```javascript
const firstName = message?.body?.user?.firstName || 'default';
const fooValue = myForm.querySelector('input[name=foo]')?.value
```
**上面代码使用了?.运算符，直接在链式调用的时候判断，左侧的对象是否为null或undefined。如果是的，就不再往下运算，而是返回undefined。**  

**链判断运算符有三种用法。**  

* **obj?.prop**  // 对象属性
* **obj?.[expr]**  // 同上
* **func?.(...args)**  // 函数或对象方法的调用

*使用这个运算符，有几个注意点。*  
（1）短路机制  
（2）delete 运算符  
（3）括号的影响  
（4）报错场合  
（5）右侧不得为十进制数值  

### Null 判断运算符
读取对象属性的时候，如果某个属性的值是null或undefined，有时候需要为它们指定默认值。常见做法是通过||运算符指定默认值。
```javascript
const headerText = response.settings.headerText || 'Hello, world!';
const animationDuration = response.settings.animationDuration || 300;
const showSplashScreen = response.settings.showSplashScreen || true;
```
上面的三行代码都通过||运算符指定默认值，但是这样写是错的。开发者的原意是，只要属性的值为null或undefined，默认值就会生效，但是属性的值如果为空字符串或false或0，默认值也会生效。  

**为了避免这种情况，ES2020 引入了一个新的 Null 判断运算符??。它的行为类似||，但是只有运算符左侧的值为null或undefined时，才会返回右侧的值**。  
```javascript
const headerText = response.settings.headerText ?? 'Hello, world!';
const animationDuration = response.settings.animationDuration ?? 300;
const showSplashScreen = response.settings.showSplashScreen ?? true;
```
**??有一个运算优先级问题，它与&&和||的优先级孰高孰低。现在的规则是，如果多个逻辑运算符一起使用，必须用括号表明优先级，否则会报错**。  
```javascript
(lhs && middle) ?? rhs;
lhs && (middle ?? rhs);
(lhs ?? middle) && rhs;
lhs ?? (middle && rhs);
(lhs || middle) ?? rhs;
lhs || (middle ?? rhs);
(lhs ?? middle) || rhs;
lhs ?? (middle || rhs);
```

## Promise异步编程<font color=#3eaf7c>*</font>
### Promise 的含义
**Promise 是异步编程的一种解决方案**，比传统的解决方案——回调函数和事件——更合理和更强大。它由社区最早提出和实现，ES6 将其写进了语言标准，统一了用法，原生提供了Promise对象。  

所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。  

**Promise对象有以下两个特点：**  
（1）**对象的状态不受外界影响**。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。  

（2）**一旦状态改变，就不会再变，任何时候都可以得到这个结果**。Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。  

在 Promise 出现以前，在我们处理多个异步请求嵌套时，代码往往是这样的  
```javascript
$.ajax('url1',function success(result1){
    $.ajax('url2',function success(result2){
        $.ajax('url3',function success(result3){
          // doSomething()
        })
    })
})
```
用Promise改写之后，是这样的
```javascript
function request(url) {
  return new Promise((resolve, reject) => {
    $.ajax(url,function success(result){
        resolve(result)
    })
  })
}
request('url1')
  .then(res => {
  return request('url2')
}).then(res => {
  return request('url3')
}).then(res => {
  // doSomething()
})
```
**Promise为我们解决了什么问题？** 在传统的异步编程中，如果异步之间存在依赖关系，就需要通过层层嵌套回调的方式满足这种依赖，如果嵌套层数过多，可读性和可以维护性都会变得很差，产生所谓的“回调地狱”，而 Promise 将嵌套调用改为链式调用，增加了可阅读性和可维护性。也就是说，**Promise 解决的是异步编码风格的问题**。

### 基本用法
ES6 规定，Promise对象是一个构造函数，用来生成Promise实例。
```javascript
const promise = new Promise(function(resolve, reject) {
  // ... some code
  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
```
Promise构造函数接受**一个函数作为参数**，该函数的两个参数分别是**resolve**和**reject**。   

resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；  

reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。  

Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。
```javascript
promise.then(function(value) {
  // success
}, function(error) {
  // failure
});
```
then方法可以接受两个回调函数作为参数。**第一个回调函数是Promise对象的状态变为resolved时调用，第二个回调函数是Promise对象的状态变为rejected时调用**。其中，**第二个函数是可选的**，不一定要提供。这两个函数都接受Promise对象传出的值作为参数。  

**Promise 新建后就会立即执行**。  
```javascript
let promise = new Promise(function(resolve, reject) {
  console.log('Promise');
  resolve();
});
promise.then(function() {
  console.log('resolved.');
});
console.log('Hi!');
// Promise
// Hi!
// resolved
```
### Promise.prototype.then()
Promise 实例具有then方法，也就是说，then方法是定义在原型对象Promise.prototype上的。**它的作用是为 Promise 实例添加状态改变时的回调函数**。  

then方法**返回的是一个新的Promise实例**（注意，不是原来那个Promise实例）。因此可以采用**链式写法**，即then方法后面再调用另一个then方法。  

采用链式的then，可以指定一组按照次序调用的回调函数。这时，**前一个回调函数，有可能返回的还是一个Promise对象（即有异步操作），这时后一个回调函数，就会等待该Promise对象的状态发生变化，才会被调用**。  
```javascript
getJSON("/post/1.json").then(
  post => getJSON(post.commentURL)
).then(
  comments => console.log("resolved: ", comments),
  err => console.log("rejected: ", err)
);
// 这时，第二个then方法指定的回调函数，就会等待这个新的Promise对象状态发生变化。如果变为resolved，就调用第一个回调函数，如果状态变为rejected，就调用第二个回调函数。
```
### Promise.prototype.catch()
Promise.prototype.catch()方法是.then(null, rejection)或.then(undefined, rejection)的别名，用于指定发生错误时的回调函数。  
```javascript
p.then((val) => console.log('fulfilled:', val))
  .catch((err) => console.log('rejected', err));
// 等同于
p.then((val) => console.log('fulfilled:', val))
  .then(null, (err) => console.log("rejected:", err));
```
另外，**then()方法指定的回调函数，如果运行中抛出错误，也会被catch()方法捕获**。  

Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个catch语句捕获。  
```javascript
getJSON('/post/1.json').then(function(post) {
  return getJSON(post.commentURL);
}).then(function(comments) {
  // some code
}).catch(function(error) {
  // 处理前面三个Promise产生的错误
});
```
一般来说，不要在then()方法里面定义 Reject 状态的回调函数（即then的第二个参数），**总是使用catch方法**。

如果没有使用catch()方法指定错误处理的回调函数，Promise 对象抛出的错误不会传递到外层代码，即不会有任何反应。  
Promise 内部的错误不会影响到 Promise 外部的代码，通俗的说法就是“**Promise 会吃掉错误**”。  
```javascript
const someAsyncThing = function() {
  return new Promise(function(resolve, reject) {
    // 下面一行会报错，因为x没有声明
    resolve(x + 2);
  });
};
someAsyncThing().then(function() {
  console.log('everything is great');
});
setTimeout(() => { console.log(123) }, 2000);
// Uncaught (in promise) ReferenceError: x is not defined
// 123

// someAsyncThing()函数产生的 Promise 对象，内部有语法错误。浏览器运行到这一行，会打印出错误提示ReferenceError: x is not defined，但是不会退出进程、终止脚本执行，2 秒之后还是会输出123。
```
### Promise.prototype.finally()
finally()方法用于指定**不管 Promise 对象最后状态如何，都会执行的操作**。该方法是 ES2018 引入标准的。  
```javascript
promise
.then(result => {···})
.catch(error => {···})
.finally(() => {···});
// 不管promise最后的状态，在执行完then或catch指定的回调函数以后，都会执行finally方法指定的回调函数。
```
### Promise.all()
Promise.all()方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。  
```javascript
const p = Promise.all([p1, p2, p3]);
// Promise.all()方法接受一个数组作为参数，p1、p2、p3都是 Promise 实例，如果不是，就会先调用下面讲到的Promise.resolve方法，将参数转为 Promise 实例，再进一步处理。
// 另外，Promise.all()方法的参数可以不是数组，但必须具有 Iterator 接口，且返回的每个成员都是 Promise 实例。
```
p的状态由p1、p2、p3决定，分成两种情况。  

**（1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数**。  

**（2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数**。  

```javascript
// 生成一个Promise对象的数组
const promises = [2, 3, 5, 7, 11, 13].map(function (id) {
  return getJSON('/post/' + id + ".json");
});
Promise.all(promises).then(function (posts) {
  // ...
}).catch(function(reason){
  // ...
});
```
上面代码中，promises是包含 6 个 Promise 实例的数组，只有这 6 个实例的状态都变成fulfilled，或者其中有一个变为rejected，才会调用Promise.all方法后面的回调函数。

## Symbol Set Map<font color=#3eaf7c>*</font>
## Proxy<font color=#3eaf7c>*</font>
## Reflect<font color=#3eaf7c>*</font>
## Iterator / for...of<font color=#3eaf7c>*</font>
## Generator 函数<font color=#3eaf7c>*</font>
## async 函数<font color=#3eaf7c>*</font>
## Class<font color=#3eaf7c>*</font>
## Module<font color=#3eaf7c>*</font>