<!--
 * @Author: your name
 * @Date: 2021-07-14 09:48:07
 * @LastEditTime: 2021-10-23 13:38:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-training-doc/docs/html-css/html.md
-->
# HTML

## 常用标签
div, span...
## 语义化标签、属性
(1) 用正确的标签做正确的事情;  
(2) html 语义化让页面的内容结构化,结构更清晰,便于对浏览器、搜索引擎解析;  
(3) 即使在没有样式 CSS 情况下也以一种文档格式显示,并且是容易阅读的;  
(4) 搜索引擎的爬虫也依赖于 HTML 标记来确定上下文和各个关键字的权重,利于SEO;  
(5) 使阅读源代码的人对网站更容易将网站分块,便于阅读维护理解;  

***“用对”比“不用”好，“不用”比“用错”好***

::: tip em和i标签的区别

在默认情况下，它们的视觉效果是一样的。但语义是不同的。em标签表示其内容的着重强调，而i标签表示从正常散文中区分出的文本，例如外来词等
``` html
昨天我吃了一个橘子
今天我吃了一个<em>苹果</em>
```
``` html
昨天我吃了一个橘子
今天我吃了<em>两个</em>橘子
```

:::
## 理解DOM
**DOM**（Document Object Model——文档对象模型）将web页面与到脚本或编程语言连接起来。  
::: tip DOM
DOM模型用一个逻辑树来表示一个文档，DOM将文档解析为一个由节点和对象（包含属性和方法的对象）组成的结构集合。DOM的方法(methods)让你可以用特定方式操作这个树，用这些方法你可以改变文档的结构、样式或者内容。  

DOM是web页面的完全的面向对象表述，它能够使用如JavaScript等脚本语言进行修改。
:::
## 表单校验、提交 / 文件上传
### 表单校验
::: tip 客户端校验
**JavaScript 校验**，这是可以完全自定义的实现方式；  
通过自定义函数进行校验  
**HTML5 内置校验**，这不需要 JavaScript ，而且性能更好，但是不能像JavaScript那样可自定义。
[点击查看MDN](https://developer.mozilla.org/zh-CN/docs/orphaned/Web/Guide/HTML/HTML5/Constraint_validation)
:::

::: tip 服务器端校验
如果数据没通过校验，则会直接从服务器端返回错误消息，并且告诉浏览器端发生错误的具体位置和原因。
:::
### 表单提交
::: tip form表单
form 元素定义了如何发送数据。它的所有属性都是为了让您配置当用户点击提交按钮时发送的请求。两个最重要的属性是**action**和**method**。  
[点击查看MDN](https://developer.mozilla.org/zh-CN/docs/Learn/Forms/Sending_and_retrieving_form_data)
:::

### 文件上传
::: tip 表单上传
这是传统的form表单上传，使用form表单的input[type=”file”]控件，可以打开系统的文件选择对话框，从而达到选择文件并上传的目的，它的好处是多浏览器兼容，它是web开发者最常用的一种文件上传方式。
```html
<form method="post" action="http://uploadUrl" enctype="multipart/form-data">
  <input name="file" type="file" accept="image/gif,image.jpg" />
  <input name="token" type="hidden" />
  <input type="submit" value="提交" />
</form>
```
***accept**属性是HTML5的新属性，它规定了可通过文件上传提交的文件类型*
:::

::: tip Ajax无刷新上传
Ajax无刷新上传的方式，本质上与表单上传无异，只是把表单里的内容提出来采用ajax提交，并且由前端决定请求结果回传后的展示结果，不用像直接表单上传那样刷新和跳转页面。在这里，我们采用jQuery来作为操作DOM和创建ajax提交的js基础库。
html代码片段如下
```html
<form>
    <input id="file" name="file" type="file" />
    <input id="token" name="token" type="hidden" />
</form>
```
javascript代码片段如下
```javascript
$("#file").on("change", function(){
  var formData = new FormData();
  formData.append("file", $("#file")[0].files);
  formData.append("token", $("#token").val());
  $.ajax({
      url: "http://uploadUrl",
      type: "POST",
      data: formData,
      processData: false, // 不要对data参数进行序列化处理，默认为true 
      contentType: false, // 不要设置Content-Type请求头，因为文件数据是以 multipart/form-data 来编码
      success: function(response){
        // 根据返回结果指定界面操作
      }
  });
});
```
***Files对象***  
由于HTML5中我们可以通过为表单元素添加*multiple*属性，因此我们通过*input*上传文件后得到的是一个Files对象（伪数组形式）。如果multiple属性没有指定，则这个列表只有一个成员。[点击查看MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file)

***FileReader对象***  
HTML5新增内建对象，可以读取本地文件内容。[点击查看MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader)

:::

## HTML5
**概念**  
HTML的最新稳定版本,HTML5将HTML从用于构造一个文档的一个简单标记，到一个完整的应用程序开发平台。除其他功能外,HTML5还包括新元素和用于增强存储、多媒体和硬件访问的JavaScript APIs。

### 新增元素
HTML5不仅新增了一些标签和属性，还对以前的标签和属性做了一些删、改。
### Web Storage
Web Storage API 提供机制， 使浏览器能以一种比使用Cookie更直观的方式存储键/值对。  

::: tip Web Storage 包含如下两种机制：
**sessionStorage** 为每一个给定的源（given origin）维持一个独立的存储区域，该存储区域在页面会话期间可用（即只要浏览器处于打开状态，包括页面重新加载和恢复）。  
**localStorage** 同样的功能，但是在浏览器关闭，然后重新打开后数据仍然存在。
:::
### 多媒体音视频
::: tip audio标签
用于在文档中嵌入音频内容 [点击查看MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/audio)
:::

::: tip video标签
用于支持文档内的视频播放 [点击查看MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video)
:::

### pushState & replaceState
**History API** window 对象通过 history 对象提供了对浏览器的会话历史的访问。使用 back(),  forward()和  go() 方法来完成在用户历史记录中向后和向前的跳转。[点击查看MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/History_API)  

HTML5引入了 **history.pushState()** 和 **history.replaceState()** 方法，它们分别可以**添加和修改历史记录条目**。这些方法通常与 **window.onpopstate** 配合使用。

::: tip popstate
window.onpopstate是popstate事件在window对象上的事件处理程序。  

**注意**：调用history.pushState()或者history.replaceState()**不会触发popstate事件**. **popstate事件只会在浏览器某些行为下触发, 比如点击后退、前进按钮(或者在JavaScript中调用history.back()、history.forward()、history.go()方法)，此外，a 标签的锚点也会触发该事件.**

当网页加载时,各浏览器对popstate事件是否触发有不同的表现,Chrome 和 Safari会触发popstate事件, 而Firefox不会。
:::





