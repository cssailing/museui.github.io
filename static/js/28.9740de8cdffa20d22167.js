webpackJsonp([28],{"6Xqf":function(t,s,a){"use strict";var l={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"markdown-body"},[a("h1",[t._v("弹出框")]),t._v(" "),t._m(0),t._v(" "),a("demo-block",{attrs:{jsfiddle:{html:'<mu-button ref="button" @click="open = !open">Dropdown</mu-button>\n<mu-popover cover :open.sync="open" :trigger="trigger">\n   <mu-list>\n    <mu-list-item button>\n      <mu-list-item-title>Refresh</mu-list-item-title>\n    </mu-list-item>\n    <mu-list-item button>\n      <mu-list-item-title>Send feedback</mu-list-item-title>\n    </mu-list-item>\n    <mu-list-item button>\n      <mu-list-item-title>Settings</mu-list-item-title>\n    </mu-list-item>\n    <mu-list-item button>\n      <mu-list-item-title>Help</mu-list-item-title>\n    </mu-list-item>\n    <mu-list-item button>\n      <mu-list-item-title>Sign out</mu-list-item-title>\n    </mu-list-item>\n  </mu-list>\n</mu-popover>\n\n',script:"\nexport default {\n  data () {\n    return {\n      open: false,\n      trigger: null\n    }\n  },\n  mounted () {\n    this.trigger = this.$refs.button.$el;\n  }\n}\n",style:null}}},[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("mu-button",{ref:"button",on:{click:function(s){t.open=!t.open}}},[t._v("Dropdown")]),t._v(" "),a("mu-popover",{attrs:{cover:"",open:t.open,trigger:t.trigger},on:{"update:open":function(s){t.open=s}}},[a("mu-list",[a("mu-list-item",{attrs:{button:""}},[a("mu-list-item-title",[t._v("Refresh")])],1),t._v(" "),a("mu-list-item",{attrs:{button:""}},[a("mu-list-item-title",[t._v("Send feedback")])],1),t._v(" "),a("mu-list-item",{attrs:{button:""}},[a("mu-list-item-title",[t._v("Settings")])],1),t._v(" "),a("mu-list-item",{attrs:{button:""}},[a("mu-list-item-title",[t._v("Help")])],1),t._v(" "),a("mu-list-item",{attrs:{button:""}},[a("mu-list-item-title",[t._v("Sign out")])],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-button")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"button"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"open = !open"')]),t._v(">")]),t._v("Dropdown"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-button")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-popover")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("cover")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":open.sync")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"open"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":trigger")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"trigger"')]),t._v(">")]),t._v("\n   "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list-item")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("button")]),t._v(">")]),t._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list-item-title")]),t._v(">")]),t._v("Refresh"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list-item-title")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list-item")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list-item")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("button")]),t._v(">")]),t._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list-item-title")]),t._v(">")]),t._v("Send feedback"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list-item-title")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list-item")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list-item")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("button")]),t._v(">")]),t._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list-item-title")]),t._v(">")]),t._v("Settings"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list-item-title")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list-item")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list-item")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("button")]),t._v(">")]),t._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list-item-title")]),t._v(">")]),t._v("Help"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list-item-title")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list-item")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list-item")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("button")]),t._v(">")]),t._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list-item-title")]),t._v(">")]),t._v("Sign out"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list-item-title")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list-item")]),t._v(">")]),t._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-popover")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{attrs:{class:"javascript"}},[t._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n  data () {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n      "),a("span",{attrs:{class:"hljs-attr"}},[t._v("open")]),t._v(": "),a("span",{attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(",\n      "),a("span",{attrs:{class:"hljs-attr"}},[t._v("trigger")]),t._v(": "),a("span",{attrs:{class:"hljs-literal"}},[t._v("null")]),t._v("\n    }\n  },\n  mounted () {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".trigger = "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$refs.button.$el;\n  }\n}\n")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])])]),t._v(" "),t._m(1),t._v(" "),t._m(2)],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",{pre:!0},[this._v("mu-popover")]),this._v(" 用于弹出显示，它封装在 "),s("code",{pre:!0},[this._v("mu-menu")]),this._v(" 组件内部。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"popover-props"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#popover-props","aria-hidden":"true"}},[this._v("¶")]),this._v(" Popover Props")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("介绍")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("可选值")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("cover")]),t._v(" "),a("td",[t._v("弹出是否覆盖触发元素")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("lazy")]),t._v(" "),a("td",[t._v("是否在打开时才渲染元素")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("—")])]),t._v(" "),a("tr",[a("td",[t._v("placement")]),t._v(" "),a("td",[t._v("弹出位置")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("top / top-start / top-end / bottom / bottom-start / bottom-end / left / left-start / left-end / right / right-start / right-end")]),t._v(" "),a("td",[t._v("bottom-start")])]),t._v(" "),a("tr",[a("td",[t._v("open")]),t._v(" "),a("td",[t._v("是否打开")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("trigger")]),t._v(" "),a("td",[t._v("触发元素")]),t._v(" "),a("td",[t._v("Element")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("—")])])])])}]};s.a=l},VWeM:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var l=a("cetB"),n=a.n(l);for(var e in l)"default"!==e&&function(t){a.d(s,t,function(){return l[t]})}(e);var v=a("6Xqf"),_=a("/4AN")(n.a,v.a,!1,null,null,null);s.default=_.exports},cetB:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{open:!1,trigger:null}},mounted:function(){this.trigger=this.$refs.button.$el}}},jGOc:function(t,s,a){t.exports=a("VWeM")}});