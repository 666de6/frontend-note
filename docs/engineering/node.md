<!--
 * @Author: your name
 * @Date: 2021-07-14 10:11:49
 * @LastEditTime: 2021-08-19 16:24:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-training-doc/docs/javascript/ES6.md
-->
# NODE基础
Node是一个基于**Chrome V8引擎**的JavaScript代码**运行环境**。  
`一个 JavaScript 运行时，它能让你在命令行中运行 JS 代码。让 JS 跳出浏览器的约束成为更通用的编程语言。`

[node教程](https://fe.rualc.com/note/node-basic.html#wo-de-xue-xi-dai-ma)

## 常用工具
* npm
  * Node Package Manager，包管理器，node 装好后附带的工具
  * npm i -g npm 是升级 npm 自己
* nvm
  * Node Version Manager，Node 版本（环境）切换工具
  * brew install nvm
* nrm
  * Npm Registry Manager，npm 源管理器
  * npm i -g nrm --registry=https://registry.npm.taobao.org
* yarn
  * 可代替 npm 的管理器，处理 node_modules 的速度更快
  * npm i -g yarn

## npm
npm（node包管理器），由三个独立的部分组成：  

* 网站
* 注册表（registry）
* 命令行工具 (CLI)

[网站](https://www.npmjs.com/) 是开发者查找包（package）、设置参数以及管理 npm 使用体验的主要途径。  

注册表 是一个巨大的数据库，保存了每个包（package）的信息。  

CLI 通过命令行或终端运行。开发者通过 CLI 与 npm 打交道。例如：  
```bash
npm i dhc-hsaf-ui

npm install dhc-hsaf-ui
```
