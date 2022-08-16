<!--
 * @Author: your name
 * @Date: 2021-07-14 09:48:26
 * @LastEditTime: 2021-08-19 16:26:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-training-doc/docs/html-css/css.md
-->
# VUE(2.x)
[vue官方视频教程](https://learning.dcloud.io/#/?vid=0)

* **数据驱动**---双向数据绑定。 ViewModel，保证数据和视图的一致性，DOM是数据的一种自然映射（数据驱动DOM变化）  

* **组件化**---可复用。页面可以看作全部是由组件树构成的  

* **虚拟DOM**--更高效。
## Vue
### Vue组件
* 组件是**可复用的Vue实例**

#### 组件基础&组件注册
  * 全局注册
  * 局部注册

#### 单文件组件
[点击查看官网](https://cn.vuejs.org/v2/guide/single-file-components.html)  

#### 组件通讯 
[vue中组件通信方式整理](https://juejin.cn/post/6844903887162310669)
  * 父子组件之间通信 
    * props / $emit
    * $children / $parent
  * 非父子组件之间通信(兄弟组件、隔代关系组件等)
    * Vuex
    * localStorage / sessionStorage

#### 插槽*
  Slot 通俗的理解就是“占坑”，在组件模板中占好了位置，当使用该组件标签时候，组件标签里面的内容就会自动填坑（替换组件模板中slot位置）。  

  * 插槽内容-- `基础插槽`
    * 后备内容-- `插槽的默认值`
  * 具名插槽-- `<slot name="header"></slot>`
    * 具名插槽的缩写(2.6.0新增)-- ` v-slot:header 可以被重写为 #header`
  * 作用域插槽-- `让插槽内容能够访问子组件中才有的数据`
    * 编译作用域-- `父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。`
    ```html
    <!-- 子组件内 -->
    <span>
      <slot v-bind:userInfo="user">
        {{ user.lastName }}
      </slot>
    </span>
    ```
    ```html
    <!-- 父组件 -->
    <current-user>
      <template v-slot:default="slotProps">
        {{ slotProps.userInfo.lastName }}
      </template>
    </current-user>
    ```
    * 独占默认插槽的缩写语法-- `当被提供的内容只有默认插槽时，组件的标签可以被当作插槽的模板来使用`
    ```html
    <!-- 父组件 -->
    <current-user v-slot="slotProps">
      {{ slotProps.user.lastName }}
    </current-user>
    ```
    **只要出现多个插槽，请始终为所有的插槽使用完整的基于 `<template>` 的语法**
    * 解构插槽 Prop
    ```html
    <current-user v-slot="{ user }">
      {{ user.firstName }}
    </current-user>
    ```
  * 动态插槽名
    ```html
    <base-layout>
      <template v-slot:[dynamicSlotName]>
        ...
      </template>
    </base-layout>
    ```
  [Vue 插槽(slot)使用](https://juejin.cn/post/6844903920037281805)
### 生命周期
#### 生命周期图示
![生命周期](./assets/vue-lifecycle.jpg)

#### 生命周期钩子函数
每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做**生命周期钩子**的函数，这**给了用户在不同阶段添加自己的代码的机会**。

**created**  
可以发起ajax请求，不能访问真实dom  

**mounted**  
也可以发起ajax请求，可以访问真实dom  

**注意 mounted 不会保证所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以在 mounted 内部使用 vm.$nextTick：**  
```javascript
mounted: function () {
  this.$nextTick(function () {
    // Code that will run only after the
    // entire view has been rendered
  })
}
```
**beforeDestroy**  
实例销毁之前调用，在这一步，实例仍然完全可用。一般在这里移除事件监听器、定时器等，避免内存泄漏。
### 模板语法
#### 插值
#### 指令
  * 内置指令
  * 缩写
  * 自定义指令 \*
### 样式相关
#### Class 与 Style 绑定
  * 绑定 HTML Class
  * 绑定内联样式
### 数据相关
#### 表单输入绑定(v-model)
#### computed

#### watch

#### filter*

### 事件处理
#### 事件监听
v-on 指令监听 DOM 事件，并在触发时运行一些 JavaScript 代码
#### 事件处理方法
v-on 接收一个需要调用的方法名称
#### 事件修饰符
解决在事件处理程序中调用 event.preventDefault()等问题

::: warning
使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 v-on:click.prevent.self 会**阻止所有的点击**，而 v-on:click.self.prevent 只会阻止对元素自身的点击。
:::
### 全局API&内置组件
**内置组件**  
* component
* transition
* transition-group
* keep-alive
* slot
### Vue CLI初始化项目
Vue CLI 是一个基于 Vue.js 进行快速开发的完整系统，提供：  

* 通过 @vue/cli 实现的交互式的**项目脚手架**。
* 通过 @vue/cli + @vue/cli-service-global 实现的**零配置原型开发**。
* 一个运行时依赖 (@vue/cli-service)，该依赖：
  * 可升级；
  * 基于 webpack 构建，并带有合理的默认配置；
  * 可以通过项目内的配置文件进行配置；
  * 可以通过插件进行扩展。
* 一个丰富的官方插件集合，集成了前端生态中最好的工具。
* 一套完全图形化的创建和管理 Vue.js 项目的用户界面。

```bash
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```
::: warning 关于旧版本
Vue CLI 的包名称由 vue-cli 改成了 @vue/cli。 如果你已经全局安装了旧版本的 vue-cli (1.x 或 2.x)，你需要先通过 npm uninstall vue-cli -g 或 yarn global remove vue-cli 卸载它。
:::

## Vue Router路由
[Vue Router官方文档](https://router.vuejs.org/zh/)

## Vuex缓存<font color=#3eaf7c>*</font>
[Vuex官方文档](https://vuex.vuejs.org/zh/)
