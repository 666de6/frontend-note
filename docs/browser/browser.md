<!--
 * @Author: Ada J
 * @Date: 2022-08-26 10:24:47
 * @LastEditTime: 2022-08-27 16:17:03
 * @Description: 
-->
# 浏览器
## 同源策略
### 同源策略
同源策略是一个重要的安全策略，它用于限制一个origin的文档或者它加载的脚本如何能与另一个源的资源进行交互。它能帮助阻隔恶意文档，减少可能被攻击的媒介。
### 同源定义
协议(protocol),端口(port),域名/IP(host) 均相同的两个URL。
非同源，有些行为会受到限制，例如：
* Cookie,WebStorage无法读取；
* DOM无法获取；
* AJAX请求无法发送；
## 跨域
### 跨源网络访问
严格来说，浏览器并不是拒绝所有的跨域请求，实际上拒绝的是跨域的读操作。

同源策略控制了不同源之间的交互，这些交互通常分为三类：

* ✅ 通常浏览器允许进行跨域 **写操作**（Cross-origin writes），如链接(a)，表单提交(form);
* ✅ 通常浏览器允许跨域 **资源嵌入**（Cross-origin embedding），如link、img、script 标签;
* ❌ 通常浏览器不允许跨域 **读操作**（Cross-origin reads），如由 XMLHttpRequest 或 Fetch APIs 发起的跨源 HTTP 请求，Web 字体 (CSS 中通过 @font-face 使用跨源字体资源);

### 跨域实现
> **JSONP**

**JSON** - JavaScript Object Notation (JSON) 是一种数据交换格式。用来序列化对象、数组、数值、字符串、布尔值和 null。

两个方法：
**JSON.parse()**, 
**JSON.stringify()**

**JSONP** - JSON with Padding，填充式JSON或者说是参数式JSON;

JSONP原理就是动态插入带有跨域url的script标签，然后调用回调函数;
前端：
```js
function addScriptTag(src) {
  var script = document.createElement('script');
  script.setAttribute("type","text/javascript");
  script.src = src;
  document.body.appendChild(script);
}

window.onload = function () {
  addScriptTag('http://localhost:8080/api/jsonp?cb=jsonpCallback');
}

function jsonpCallback(data) {
  console.log('Your public IP address is: ' + data.ip);
};
//该请求有一个callback参数，用来指定回调函数的名字，这对于JSONP是必需的
```
后端：
```js
const Koa = require('koa');
const fs = require('fs');
const app = new Koa();

app.use(async (ctx, next) => {
  if (ctx.path === '/api/jsonp') {
    const { cb } = ctx.query;
    let obj = {
      "id": "0.0.0.0"
    }
    ctx.body = `${cb}(${JSON.stringify(obj)})`;
    return;
  }
});

app.listen(8080);
```
缺点： 
* 只支持get请求
* 跨站脚本攻击风险

> **CORS(Cross-Origin Resource Sharing)跨域资源共享**

跨源资源共享 (CORS)（或跨域资源共享）是一种基于 HTTP 头的机制，该机制通过允许服务器标示除了它自己以外的其它 origin（域，协议和端口），使得浏览器允许这些 origin 访问加载自己的资源。

通常使用 CORS 时，异步请求会被分为**简单请求**和**非简单请求**，非简单请求的区别是会先发送一个**预检请求**（Preflight Request）。

* **简单请求**
若请求 满足所有下述条件，则该请求可视为“简单请求”：
(1) 请求方法是以下三种方法之一
  * GET
  * HEAD
  * POST
(2) HTTP的头信息不超出以下几种字段：
  * Accept
  * Accept-Language
  * Content-Language
  * Content-Type（需要注意额外的限制，值仅限三者之一text/plain，multipart/form-data，application/x-www-form-urlencoded）

浏览器发现这次跨源AJAX请求是简单请求，就自动在头信息之中，添加一个Origin字段

request
```bash
GET /resources/public-data/ HTTP/1.1
Host: bar.other
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Origin: https://foo.example

#Origin字段用来说明，本次请求来自哪个源（协议 + 域名 + 端口）,服务器根据这个值，决定是否同意这次请求
```
response
```bash
HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 00:23:53 GMT
Server: Apache/2
Access-Control-Allow-Origin: *
Content-Type: application/xml
#服务端返回的 Access-Control-Allow-Origin: * 表明，该资源可以被 任意 外域访问。
```
使用 Origin 和 Access-Control-Allow-Origin 就能完成最简单的访问控制。如果服务端仅允许来自 https://foo.example 的访问，该首部字段的内容如下：

```bash
Access-Control-Allow-Origin: https://foo.example
```

* **非简单请求和预检请求**
“需预检的请求”要求必须首先使用 OPTIONS 方法发起一个预检请求到服务器，以获知服务器是否允许该实际请求。
如下是一个需要执行预检请求的 HTTP 请求：
```js
const xhr = new XMLHttpRequest();
xhr.open('POST', 'https://bar.other/resources/post-here/');
xhr.setRequestHeader('X-PINGOTHER', 'pingpong');
xhr.setRequestHeader('Content-Type', 'application/xml');
xhr.onreadystatechange = handler;
xhr.send('<person><name>Arun</name></person>');
```
交互示意图
![prelight-request](./assets/preflight_correct.png)

> **Nginx 代理跨域**

> **window.postMessage**

> **WebSocket**

## cookies & localStorage & sessionStorage
## 在地址栏里输入一个 URL,到这个页面呈现出来<font color=#3eaf7c>*</font>
## 强缓存和协商缓存<font color=#3eaf7c>*</font>
## web worker<font color=#3eaf7c>*</font>
## XSS(跨站脚本攻击) 和 CSRF(跨站请求伪造攻击) 攻击/防御方法<font color=#3eaf7c>*</font>

