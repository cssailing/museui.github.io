webpackJsonp([16],{"7Qra":function(s,a,t){"use strict";var n={render:function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("div",{staticClass:"markdown-body"},[n("h1",[s._v("薄片")]),s._v(" "),s._m(0),s._v(" "),s._m(1),s._v(" "),n("demo-block",{attrs:{jsfiddle:{html:'<mu-container class="demo-chip-wrapper">\n  <mu-chip class="demo-chip">\n    default chip\n  </mu-chip>\n  <mu-chip class="demo-chip" @delete="handleClose" delete>\n    delete chip\n  </mu-chip>\n  <mu-chip class="demo-chip" color="red">\n    <mu-avatar :size="32">\n      <img src="../../assets/images/uicon.jpg">\n    </mu-avatar>\n    avatar chip\n  </mu-chip>\n  <mu-chip class="demo-chip" color="green" @delete="handleClose" delete>\n    <mu-avatar :size="32">\n      <img src="../../assets/images/uicon.jpg">\n    </mu-avatar>\n    avatar delete chip\n  </mu-chip>\n  <mu-chip class="demo-chip" color="teal" @delete="handleClose" delete>\n    <mu-avatar :size="32" color="blue">\n      <mu-icon value="face"></mu-icon>\n    </mu-avatar>\n    icon avatar chip\n  </mu-chip>\n\n  <mu-chip class="demo-chip" color="blue300" @delete="handleClose" delete>\n    <mu-avatar text-color="blue300" color="indigo900" :size="32">MB</mu-avatar> custom chip\n  </mu-chip>\n</mu-container>\n\n\n',script:"\nexport default {\n  methods: {\n    handleClose () {\n      window.alert('你点击了删除按钮')\n    }\n  }\n}\n",style:"\n.demo-chip-wrapper {\n  text-align: center;\n}\n.demo-chip {\n  margin: 8px;\n  vertical-align: middle;\n}\n"}}},[n("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[n("mu-container",{staticClass:"demo-chip-wrapper"},[n("mu-chip",{staticClass:"demo-chip"},[s._v("\n    default chip\n  ")]),s._v(" "),n("mu-chip",{staticClass:"demo-chip",attrs:{delete:""},on:{delete:s.handleClose}},[s._v("\n    delete chip\n  ")]),s._v(" "),n("mu-chip",{staticClass:"demo-chip",attrs:{color:"red"}},[n("mu-avatar",{attrs:{size:32}},[n("img",{attrs:{src:t("T22g")}})]),s._v("\n    avatar chip\n  ")],1),s._v(" "),n("mu-chip",{staticClass:"demo-chip",attrs:{color:"green",delete:""},on:{delete:s.handleClose}},[n("mu-avatar",{attrs:{size:32}},[n("img",{attrs:{src:t("T22g")}})]),s._v("\n    avatar delete chip\n  ")],1),s._v(" "),n("mu-chip",{staticClass:"demo-chip",attrs:{color:"teal",delete:""},on:{delete:s.handleClose}},[n("mu-avatar",{attrs:{size:32,color:"blue"}},[n("mu-icon",{attrs:{value:"face"}})],1),s._v("\n    icon avatar chip\n  ")],1),s._v(" "),n("mu-chip",{staticClass:"demo-chip",attrs:{color:"blue300",delete:""},on:{delete:s.handleClose}},[n("mu-avatar",{attrs:{"text-color":"blue300",color:"indigo900",size:32}},[s._v("MB")]),s._v(" custom chip\n  ")],1)],1)],1),s._v(" "),n("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[n("pre",{pre:!0,attrs:{class:"hljs"}},[n("code",{attrs:{"v-pre":""}},[n("span",{attrs:{class:"hljs-tag"}},[s._v("<"),n("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(" "),n("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),n("span",{attrs:{class:"hljs-string"}},[s._v('"demo-chip-wrapper"')]),s._v(">")]),s._v("\n  "),n("span",{attrs:{class:"hljs-tag"}},[s._v("<"),n("span",{attrs:{class:"hljs-name"}},[s._v("mu-chip")]),s._v(" "),n("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),n("span",{attrs:{class:"hljs-string"}},[s._v('"demo-chip"')]),s._v(">")]),s._v("\n    default chip\n  "),n("span",{attrs:{class:"hljs-tag"}},[s._v("</"),n("span",{attrs:{class:"hljs-name"}},[s._v("mu-chip")]),s._v(">")]),s._v("\n  "),n("span",{attrs:{class:"hljs-tag"}},[s._v("<"),n("span",{attrs:{class:"hljs-name"}},[s._v("mu-chip")]),s._v(" "),n("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),n("span",{attrs:{class:"hljs-string"}},[s._v('"demo-chip"')]),s._v(" "),n("span",{attrs:{class:"hljs-attr"}},[s._v("@delete")]),s._v("="),n("span",{attrs:{class:"hljs-string"}},[s._v('"handleClose"')]),s._v(" "),n("span",{attrs:{class:"hljs-attr"}},[s._v("delete")]),s._v(">")]),s._v("\n    delete chip\n  "),n("span",{attrs:{class:"hljs-tag"}},[s._v("</"),n("span",{attrs:{class:"hljs-name"}},[s._v("mu-chip")]),s._v(">")]),s._v("\n  "),n("span",{attrs:{class:"hljs-tag"}},[s._v("<"),n("span",{attrs:{class:"hljs-name"}},[s._v("mu-chip")]),s._v(" "),n("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),n("span",{attrs:{class:"hljs-string"}},[s._v('"demo-chip"')]),s._v(" "),n("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),n("span",{attrs:{class:"hljs-string"}},[s._v('"red"')]),s._v(">")]),s._v("\n    "),n("span",{attrs:{class:"hljs-tag"}},[s._v("<"),n("span",{attrs:{class:"hljs-name"}},[s._v("mu-avatar")]),s._v(" "),n("span",{attrs:{class:"hljs-attr"}},[s._v(":size")]),s._v("="),n("span",{attrs:{class:"hljs-string"}},[s._v('"32"')]),s._v(">")]),s._v("\n      "),n("span",{attrs:{class:"hljs-tag"}},[s._v("<"),n("span",{attrs:{class:"hljs-name"}},[s._v("img")]),s._v(" "),n("span",{attrs:{class:"hljs-attr"}},[s._v("src")]),s._v("="),n("span",{attrs:{class:"hljs-string"}},[s._v('"../../assets/images/uicon.jpg"')]),s._v(">")]),s._v("\n    "),n("span",{attrs:{class:"hljs-tag"}},[s._v("</"),n("span",{attrs:{class:"hljs-name"}},[s._v("mu-avatar")]),s._v(">")]),s._v("\n    avatar chip\n  "),n("span",{attrs:{class:"hljs-tag"}},[s._v("</"),n("span",{attrs:{class:"hljs-name"}},[s._v("mu-chip")]),s._v(">")]),s._v("\n  "),n("span",{attrs:{class:"hljs-tag"}},[s._v("<"),n("span",{attrs:{class:"hljs-name"}},[s._v("mu-chip")]),s._v(" "),n("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),n("span",{attrs:{class:"hljs-string"}},[s._v('"demo-chip"')]),s._v(" "),n("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),n("span",{attrs:{class:"hljs-string"}},[s._v('"green"')]),s._v(" "),n("span",{attrs:{class:"hljs-attr"}},[s._v("@delete")]),s._v("="),n("span",{attrs:{class:"hljs-string"}},[s._v('"handleClose"')]),s._v(" "),n("span",{attrs:{class:"hljs-attr"}},[s._v("delete")]),s._v(">")]),s._v("\n    "),n("span",{attrs:{class:"hljs-tag"}},[s._v("<"),n("span",{attrs:{class:"hljs-name"}},[s._v("mu-avatar")]),s._v(" "),n("span",{attrs:{class:"hljs-attr"}},[s._v(":size")]),s._v("="),n("span",{attrs:{class:"hljs-string"}},[s._v('"32"')]),s._v(">")]),s._v("\n      "),n("span",{attrs:{class:"hljs-tag"}},[s._v("<"),n("span",{attrs:{class:"hljs-name"}},[s._v("img")]),s._v(" "),n("span",{attrs:{class:"hljs-attr"}},[s._v("src")]),s._v("="),n("span",{attrs:{class:"hljs-string"}},[s._v('"../../assets/images/uicon.jpg"')]),s._v(">")]),s._v("\n    "),n("span",{attrs:{class:"hljs-tag"}},[s._v("</"),n("span",{attrs:{class:"hljs-name"}},[s._v("mu-avatar")]),s._v(">")]),s._v("\n    avatar delete chip\n  "),n("span",{attrs:{class:"hljs-tag"}},[s._v("</"),n("span",{attrs:{class:"hljs-name"}},[s._v("mu-chip")]),s._v(">")]),s._v("\n  "),n("span",{attrs:{class:"hljs-tag"}},[s._v("<"),n("span",{attrs:{class:"hljs-name"}},[s._v("mu-chip")]),s._v(" "),n("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),n("span",{attrs:{class:"hljs-string"}},[s._v('"demo-chip"')]),s._v(" "),n("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),n("span",{attrs:{class:"hljs-string"}},[s._v('"teal"')]),s._v(" "),n("span",{attrs:{class:"hljs-attr"}},[s._v("@delete")]),s._v("="),n("span",{attrs:{class:"hljs-string"}},[s._v('"handleClose"')]),s._v(" "),n("span",{attrs:{class:"hljs-attr"}},[s._v("delete")]),s._v(">")]),s._v("\n    "),n("span",{attrs:{class:"hljs-tag"}},[s._v("<"),n("span",{attrs:{class:"hljs-name"}},[s._v("mu-avatar")]),s._v(" "),n("span",{attrs:{class:"hljs-attr"}},[s._v(":size")]),s._v("="),n("span",{attrs:{class:"hljs-string"}},[s._v('"32"')]),s._v(" "),n("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),n("span",{attrs:{class:"hljs-string"}},[s._v('"blue"')]),s._v(">")]),s._v("\n      "),n("span",{attrs:{class:"hljs-tag"}},[s._v("<"),n("span",{attrs:{class:"hljs-name"}},[s._v("mu-icon")]),s._v(" "),n("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),n("span",{attrs:{class:"hljs-string"}},[s._v('"face"')]),s._v(">")]),n("span",{attrs:{class:"hljs-tag"}},[s._v("</"),n("span",{attrs:{class:"hljs-name"}},[s._v("mu-icon")]),s._v(">")]),s._v("\n    "),n("span",{attrs:{class:"hljs-tag"}},[s._v("</"),n("span",{attrs:{class:"hljs-name"}},[s._v("mu-avatar")]),s._v(">")]),s._v("\n    icon avatar chip\n  "),n("span",{attrs:{class:"hljs-tag"}},[s._v("</"),n("span",{attrs:{class:"hljs-name"}},[s._v("mu-chip")]),s._v(">")]),s._v("\n\n  "),n("span",{attrs:{class:"hljs-tag"}},[s._v("<"),n("span",{attrs:{class:"hljs-name"}},[s._v("mu-chip")]),s._v(" "),n("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),n("span",{attrs:{class:"hljs-string"}},[s._v('"demo-chip"')]),s._v(" "),n("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),n("span",{attrs:{class:"hljs-string"}},[s._v('"blue300"')]),s._v(" "),n("span",{attrs:{class:"hljs-attr"}},[s._v("@delete")]),s._v("="),n("span",{attrs:{class:"hljs-string"}},[s._v('"handleClose"')]),s._v(" "),n("span",{attrs:{class:"hljs-attr"}},[s._v("delete")]),s._v(">")]),s._v("\n    "),n("span",{attrs:{class:"hljs-tag"}},[s._v("<"),n("span",{attrs:{class:"hljs-name"}},[s._v("mu-avatar")]),s._v(" "),n("span",{attrs:{class:"hljs-attr"}},[s._v("text-color")]),s._v("="),n("span",{attrs:{class:"hljs-string"}},[s._v('"blue300"')]),s._v(" "),n("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),n("span",{attrs:{class:"hljs-string"}},[s._v('"indigo900"')]),s._v(" "),n("span",{attrs:{class:"hljs-attr"}},[s._v(":size")]),s._v("="),n("span",{attrs:{class:"hljs-string"}},[s._v('"32"')]),s._v(">")]),s._v("MB"),n("span",{attrs:{class:"hljs-tag"}},[s._v("</"),n("span",{attrs:{class:"hljs-name"}},[s._v("mu-avatar")]),s._v(">")]),s._v(" custom chip\n  "),n("span",{attrs:{class:"hljs-tag"}},[s._v("</"),n("span",{attrs:{class:"hljs-name"}},[s._v("mu-chip")]),s._v(">")]),s._v("\n"),n("span",{attrs:{class:"hljs-tag"}},[s._v("</"),n("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n"),n("span",{attrs:{class:"hljs-tag"}},[s._v("<"),n("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),n("span",{attrs:{class:"javascript"}},[s._v("\n"),n("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),n("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  "),n("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    handleClose () {\n      "),n("span",{attrs:{class:"hljs-built_in"}},[s._v("window")]),s._v(".alert("),n("span",{attrs:{class:"hljs-string"}},[s._v("'你点击了删除按钮'")]),s._v(")\n    }\n  }\n}\n")]),n("span",{attrs:{class:"hljs-tag"}},[s._v("</"),n("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),n("span",{attrs:{class:"hljs-tag"}},[s._v("<"),n("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(" "),n("span",{attrs:{class:"hljs-attr"}},[s._v("lang")]),s._v("="),n("span",{attrs:{class:"hljs-string"}},[s._v('"less"')]),s._v(">")]),n("span",{attrs:{class:"css"}},[s._v("\n"),n("span",{attrs:{class:"hljs-selector-class"}},[s._v(".demo-chip-wrapper")]),s._v(" {\n  "),n("span",{attrs:{class:"hljs-attribute"}},[s._v("text-align")]),s._v(": center;\n}\n"),n("span",{attrs:{class:"hljs-selector-class"}},[s._v(".demo-chip")]),s._v(" {\n  "),n("span",{attrs:{class:"hljs-attribute"}},[s._v("margin")]),s._v(": "),n("span",{attrs:{class:"hljs-number"}},[s._v("8px")]),s._v(";\n  "),n("span",{attrs:{class:"hljs-attribute"}},[s._v("vertical-align")]),s._v(": middle;\n}\n")]),n("span",{attrs:{class:"hljs-tag"}},[s._v("</"),n("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),s._m(2),s._v(" "),n("demo-block",{attrs:{jsfiddle:{html:'<mu-container class="demo-chip-wrapper">\n  <mu-chip class="demo-chip" v-for="chip, index in chips" :key="chip" :color="chip" @delete="remove(index)" delete>{{chip}}</mu-chip>\n  <mu-button color="primary" v-if="chips.length === 0" @click="reset">reset</mu-button>\n</mu-container>\n\n\n',script:"\nconst initChips = ['primary', 'secondary', 'success', 'warning', 'info', 'error'];\nexport default {\n  data () {\n    return {\n      chips: [...initChips]\n    }\n  },\n  methods: {\n    remove (index) {\n      this.chips.splice(index, 1);\n    },\n    reset () {\n      this.chips = [...initChips];\n    }\n  }\n}\n",style:"\n.demo-chip-wrapper {\n  text-align: center;\n}\n.demo-chip {\n  margin: 8px;\n  vertical-align: middle;\n}\n"}}},[n("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[n("mu-container",{staticClass:"demo-chip-wrapper"},[s._l(s.chips,function(a,t){return n("mu-chip",{key:a,staticClass:"demo-chip",attrs:{color:a,delete:""},on:{delete:function(a){s.remove(t)}}},[s._v(s._s(a))])}),s._v(" "),0===s.chips.length?n("mu-button",{attrs:{color:"primary"},on:{click:s.reset}},[s._v("reset")]):s._e()],2)],1),s._v(" "),n("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[n("pre",{pre:!0,attrs:{class:"hljs"}},[n("code",{attrs:{"v-pre":""}},[n("span",{attrs:{class:"hljs-tag"}},[s._v("<"),n("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v("  "),n("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),n("span",{attrs:{class:"hljs-string"}},[s._v('"demo-chip-wrapper"')]),s._v(">")]),s._v("\n  "),n("span",{attrs:{class:"hljs-tag"}},[s._v("<"),n("span",{attrs:{class:"hljs-name"}},[s._v("mu-chip")]),s._v(" "),n("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),n("span",{attrs:{class:"hljs-string"}},[s._v('"demo-chip"')]),s._v(" "),n("span",{attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),n("span",{attrs:{class:"hljs-string"}},[s._v('"chip, index in chips"')]),s._v(" "),n("span",{attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),n("span",{attrs:{class:"hljs-string"}},[s._v('"chip"')]),s._v(" "),n("span",{attrs:{class:"hljs-attr"}},[s._v(":color")]),s._v("="),n("span",{attrs:{class:"hljs-string"}},[s._v('"chip"')]),s._v(" "),n("span",{attrs:{class:"hljs-attr"}},[s._v("@delete")]),s._v("="),n("span",{attrs:{class:"hljs-string"}},[s._v('"remove(index)"')]),s._v(" "),n("span",{attrs:{class:"hljs-attr"}},[s._v("delete")]),s._v(">")]),s._v("{{chip}}"),n("span",{attrs:{class:"hljs-tag"}},[s._v("</"),n("span",{attrs:{class:"hljs-name"}},[s._v("mu-chip")]),s._v(">")]),s._v("\n  "),n("span",{attrs:{class:"hljs-tag"}},[s._v("<"),n("span",{attrs:{class:"hljs-name"}},[s._v("mu-button")]),s._v(" "),n("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),n("span",{attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" "),n("span",{attrs:{class:"hljs-attr"}},[s._v("v-if")]),s._v("="),n("span",{attrs:{class:"hljs-string"}},[s._v('"chips.length === 0"')]),s._v(" "),n("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),n("span",{attrs:{class:"hljs-string"}},[s._v('"reset"')]),s._v(">")]),s._v("reset"),n("span",{attrs:{class:"hljs-tag"}},[s._v("</"),n("span",{attrs:{class:"hljs-name"}},[s._v("mu-button")]),s._v(">")]),s._v("\n"),n("span",{attrs:{class:"hljs-tag"}},[s._v("</"),n("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n"),n("span",{attrs:{class:"hljs-tag"}},[s._v("<"),n("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),n("span",{attrs:{class:"javascript"}},[s._v("\n"),n("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" initChips = ["),n("span",{attrs:{class:"hljs-string"}},[s._v("'primary'")]),s._v(", "),n("span",{attrs:{class:"hljs-string"}},[s._v("'secondary'")]),s._v(", "),n("span",{attrs:{class:"hljs-string"}},[s._v("'success'")]),s._v(", "),n("span",{attrs:{class:"hljs-string"}},[s._v("'warning'")]),s._v(", "),n("span",{attrs:{class:"hljs-string"}},[s._v("'info'")]),s._v(", "),n("span",{attrs:{class:"hljs-string"}},[s._v("'error'")]),s._v("];\n"),n("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),n("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),n("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),n("span",{attrs:{class:"hljs-attr"}},[s._v("chips")]),s._v(": [...initChips]\n    }\n  },\n  "),n("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    remove (index) {\n      "),n("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".chips.splice(index, "),n("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(");\n    },\n    reset () {\n      "),n("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".chips = [...initChips];\n    }\n  }\n}\n")]),n("span",{attrs:{class:"hljs-tag"}},[s._v("</"),n("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),n("span",{attrs:{class:"hljs-tag"}},[s._v("<"),n("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(" "),n("span",{attrs:{class:"hljs-attr"}},[s._v("lang")]),s._v("="),n("span",{attrs:{class:"hljs-string"}},[s._v('"less"')]),s._v(">")]),n("span",{attrs:{class:"css"}},[s._v("\n"),n("span",{attrs:{class:"hljs-selector-class"}},[s._v(".demo-chip-wrapper")]),s._v(" {\n  "),n("span",{attrs:{class:"hljs-attribute"}},[s._v("text-align")]),s._v(": center;\n}\n"),n("span",{attrs:{class:"hljs-selector-class"}},[s._v(".demo-chip")]),s._v(" {\n  "),n("span",{attrs:{class:"hljs-attribute"}},[s._v("margin")]),s._v(": "),n("span",{attrs:{class:"hljs-number"}},[s._v("8px")]),s._v(";\n  "),n("span",{attrs:{class:"hljs-attribute"}},[s._v("vertical-align")]),s._v(": middle;\n}\n")]),n("span",{attrs:{class:"hljs-tag"}},[s._v("</"),n("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),s._m(3),s._v(" "),s._m(4),s._v(" "),s._m(5),s._v(" "),s._m(6)],1)},staticRenderFns:[function(){var s=this.$createElement,a=this._self._c||s;return a("p",[a("code",{pre:!0},[this._v("mu-chip")]),this._v(" 是一种小块的用来呈现复杂实体的块，比如说日历的事件或联系人。它可以包含一张图片，一个短字符串(必要时可能被截取的字符串)，或者是其它的一些与实体对象有关的简洁的信息。")])},function(){var s=this.$createElement,a=this._self._c||s;return a("h2",{attrs:{id:"shi-li"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shi-li","aria-hidden":"true"}},[this._v("¶")]),this._v(" 示例")])},function(){var s=this.$createElement,a=this._self._c||s;return a("h2",{attrs:{id:"chips-array"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chips-array","aria-hidden":"true"}},[this._v("¶")]),this._v(" Chips Array")])},function(){var s=this.$createElement,a=this._self._c||s;return a("h2",{attrs:{id:"chip-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chip-props","aria-hidden":"true"}},[this._v("¶")]),this._v(" Chip Props")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("介绍")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("可选值")]),s._v(" "),t("th",[s._v("默认值")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("color")]),s._v(" "),t("td",[s._v("chip 的颜色")]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td",[s._v("—")]),s._v(" "),t("td",[s._v("—")])]),s._v(" "),t("tr",[t("td",[s._v("text-color")]),s._v(" "),t("td",[s._v("chip 文字颜色")]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td",[s._v("—")]),s._v(" "),t("td",[s._v("—")])]),s._v(" "),t("tr",[t("td",[s._v("selected")]),s._v(" "),t("td",[s._v("已选中状态")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[s._v("—")]),s._v(" "),t("td",[s._v("false")])]),s._v(" "),t("tr",[t("td",[s._v("delete")]),s._v(" "),t("td",[s._v("显示删除的图标")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[s._v("—")]),s._v(" "),t("td",[s._v("false")])])])])},function(){var s=this.$createElement,a=this._self._c||s;return a("h2",{attrs:{id:"chip-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chip-events","aria-hidden":"true"}},[this._v("¶")]),this._v(" Chip Events")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("名称")]),s._v(" "),t("th",[s._v("介绍")]),s._v(" "),t("th",[s._v("回调参数")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("delete")]),s._v(" "),t("td",[s._v("点击删除图标时触发事件")]),s._v(" "),t("td",[s._v("—")])])])])}]};a.a=n},Cf4m:function(s,a,t){var n=t("OfS0");"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);t("X/Wc")("ff79d2c6",n,!0,{})},E8Rn:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t("gjEk"),l=t.n(n);for(var r in n)"default"!==r&&function(s){t.d(a,s,function(){return n[s]})}(r);var e=t("7Qra");var v=function(s){t("Cf4m")},c=t("/4AN")(l.a,e.a,!1,v,null,null);a.default=c.exports},OfS0:function(s,a,t){(s.exports=t("lcwS")(!1)).push([s.i,".demo-chip-wrapper{text-align:center}.demo-chip{margin:8px;vertical-align:middle}",""])},gjEk:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=["primary","secondary","success","warning","info","error"];a.default={data:function(){return{chips:[].concat(n)}},methods:{handleClose:function(){window.alert("你点击了删除按钮")},remove:function(s){this.chips.splice(s,1)},reset:function(){this.chips=[].concat(n)}}}},wIy8:function(s,a,t){s.exports=t("E8Rn")}});
//# sourceMappingURL=16.5d195d32cb2cd607da01.js.map