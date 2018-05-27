webpackJsonp([46],{IC0p:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"markdown-body"},[e("h1",[t._v("Muse UI Contributing Guide")]),t._v(" "),e("p",[t._v("Hi! 首先感谢你使用 Muse UI。")]),t._v(" "),e("p",[t._v("Muse UI 是一套 Material Design 风格开源组件库，旨在快速搭建页面。它基于 Vue 2.0 开发，并提供了自定义主题，充分满足可定制化的需求。")]),t._v(" "),e("p",[t._v("Muse UI 的成长离不开大家的支持，如果你愿意为 Muse UI 贡献代码或提供建议，请阅读以下内容。")]),t._v(" "),e("h2",{attrs:{id:"issue-gui-fan"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#issue-gui-fan","aria-hidden":"true"}},[t._v("¶")]),t._v(" Issue 规范")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("issue 仅用于提交 Bug 或 Feature 相关的内容，其它内容可能会被直接关闭。使用上有问题可以来 "),e("a",{attrs:{href:"https://gitter.im/muse-ui/muse-ui"}},[t._v("gitter")]),t._v(" 大家一起讨论")])]),t._v(" "),e("li",[e("p",[t._v("在提交 issue 之前，请搜索相关内容是否已被提出。")])]),t._v(" "),e("li",[e("p",[t._v("请说明 Muse UI 和 Vue 的版本号，并提供操作系统和浏览器信息。推荐使用 "),e("a",{attrs:{href:"https://jsfiddle.net/"}},[t._v("JSFiddle")]),t._v(" 生成在线 demo，这能够更直观地重现问题。")])])]),t._v(" "),e("h2",{attrs:{id:"pull-request-gui-fan"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pull-request-gui-fan","aria-hidden":"true"}},[t._v("¶")]),t._v(" Pull Request 规范")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("请先 fork 一份到自己的项目下，不要直接在仓库下建分支。")])]),t._v(" "),e("li",[e("p",[t._v("commit 信息要以[组件名]: 描述信息 的形式填写，例如 AppBar: fix xxx bug。")])]),t._v(" "),e("li",[e("p",[t._v("不要提交 "),e("code",{pre:!0},[t._v("dist")]),t._v(" 或 "),e("code",{pre:!0},[t._v("docs")]),t._v(" 文件夹下的文件")])]),t._v(" "),e("li",[e("p",[t._v("执行 npm run build 后可以正确打包文件。")])]),t._v(" "),e("li",[e("p",[t._v("提交 PR 前请 rebase，确保 commit 记录的整洁。")])]),t._v(" "),e("li",[e("p",[t._v("如果是修复 bug，请在 PR 中给出描述信息。")])])]),t._v(" "),e("h2",{attrs:{id:"kai-fa-huan-jing-da-jian"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kai-fa-huan-jing-da-jian","aria-hidden":"true"}},[t._v("¶")]),t._v(" 开发环境搭建")]),t._v(" "),e("p",[t._v("首先你需要 Node.js 8+ 和 NPM 4+")]),t._v(" "),e("pre",{pre:!0,attrs:{class:"hljs"}},[e("code",{attrs:{"v-pre":""}},[t._v("git "),e("span",{attrs:{class:"hljs-built_in"}},[t._v("clone")]),t._v(" git@github.com:museui/muse-ui.git\nnpm run dev\n"),e("span",{attrs:{class:"hljs-comment"}},[t._v("# open http://localhost:3000")]),t._v("\n")])]),t._v(" "),e("p",[t._v("安装慢可以使用 yarn 搭配 taobao registry")]),t._v(" "),e("pre",{pre:!0,attrs:{class:"hljs"}},[e("code",{attrs:{"v-pre":""}},[t._v("npm i yarn -g\nyarn config "),e("span",{attrs:{class:"hljs-built_in"}},[t._v("set")]),t._v(" registry https://registry.npm.taobao.org\nyarn\nnpm run dev\n\n"),e("span",{attrs:{class:"hljs-comment"}},[t._v("# open http://localhost:3000")]),t._v("\n")])]),t._v(" "),e("p",[t._v("build:")]),t._v(" "),e("pre",{pre:!0,attrs:{class:"hljs"}},[e("code",{attrs:{"v-pre":""}},[t._v("npm run build\n")])]),t._v(" "),e("h2",{attrs:{id:"dai-ma-gui-fan"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dai-ma-gui-fan","aria-hidden":"true"}},[t._v("¶")]),t._v(" 代码规范")]),t._v(" "),e("p",[t._v("eslint "),e("a",{attrs:{href:"https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style"}},[t._v("standard")]),t._v(" 规范，建议IDE上添加 eslint 的插件。")])])}]},r=e("/4AN")(null,a,!1,null,null,null);s.default=r.exports},llxs:function(t,s,e){t.exports=e("IC0p")}});