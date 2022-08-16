<!--
 * @Author: your name
 * @Date: 2021-07-14 10:44:21
 * @LastEditTime: 2021-08-19 16:31:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-training-doc/docs/engineering/webpack.md
-->
# WEBPACK

* 作用/意义
* 基本配置了解  
[webpack 4.x官方文档](https://v4.webpack.docschina.org/)
* Vue CLI构建项目自动集成webpack
  * `vue inspect > output.js` 查看默认webpack配置
    * `vue inspect --plugins` 列出所有默认插件
  * `vue.config.js` 项目中可以更改webpack配置的入口

## 基本配置
## plugin<font color=#3eaf7c>*</font>
**插件接口允许用户直接介入编译过程**。 插件可以在不同时期运行的生命周期挂钩上注册回调函数。在单个编译流程中，当每个钩子都被执行后，插件将拥有当前编译流程的完整访问权限。
## loader<font color=#3eaf7c>*</font>
**Loaders 用于对模块的源代码进行转换**。 它们被编写成一类将源代码作为参数传入， 并将编译转换后的新版本代码传出的函数体。
