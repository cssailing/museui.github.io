webpackJsonp([13],{"6fQI":function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=t("kiGt"),l=t.n(r);for(var e in r)"default"!==e&&function(s){t.d(a,s,function(){return r[s]})}(e);var n=t("E7vZ");var v=function(s){t("YeVa")},_=t("/4AN")(l.a,n.a,!1,v,null,null);a.default=_.exports},CX1p:function(s,a,t){(s.exports=t("lcwS")(!1)).push([s.i,".demo-linear-progress{margin:16px 0}.demo-circular-progress{margin:0 16px}",""])},E7vZ:function(s,a,t){"use strict";var r={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"markdown-body"},[t("h1",[s._v("进度条")]),s._v(" "),s._m(0),s._v(" "),s._m(1),s._v(" "),t("demo-block",{attrs:{jsfiddle:{html:'<mu-container>\n  <mu-flex class="demo-linear-progress">\n    <mu-linear-progress></mu-linear-progress>\n  </mu-flex>\n  <mu-flex class="demo-linear-progress">\n    <mu-linear-progress color="secondary"></mu-linear-progress>\n  </mu-flex>\n  <mu-flex class="demo-linear-progress">\n    <mu-linear-progress :value="linear" mode="determinate" color="green"></mu-linear-progress>\n  </mu-flex>\n</mu-container>\n\n\n\n',script:"\nexport default {\n  data () {\n    return {\n      linear: 10\n    }\n  },\n  created () {\n    this.timer = setInterval(() => {\n      this.linear += 10;\n      if (this.linear > 100) this.linear = 0;\n    }, 1000)\n  },\n  beforeDestroy () {\n    if (this.timer) clearInterval(this.timer);\n  }\n}\n",style:"\n.demo-linear-progress {\n  margin: 16px 0;\n}\n"}}},[t("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[t("mu-container",[t("mu-flex",{staticClass:"demo-linear-progress"},[t("mu-linear-progress")],1),s._v(" "),t("mu-flex",{staticClass:"demo-linear-progress"},[t("mu-linear-progress",{attrs:{color:"secondary"}})],1),s._v(" "),t("mu-flex",{staticClass:"demo-linear-progress"},[t("mu-linear-progress",{attrs:{value:s.linear,mode:"determinate",color:"green"}})],1)],1)],1),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-flex")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"demo-linear-progress"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-linear-progress")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-linear-progress")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-flex")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-flex")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"demo-linear-progress"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-linear-progress")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"secondary"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-linear-progress")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-flex")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-flex")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"demo-linear-progress"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-linear-progress")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"linear"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("mode")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"determinate"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"green"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-linear-progress")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-flex")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("linear")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("10")]),s._v("\n    }\n  },\n  created () {\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".timer = setInterval("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".linear += "),t("span",{attrs:{class:"hljs-number"}},[s._v("10")]),s._v(";\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" ("),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".linear > "),t("span",{attrs:{class:"hljs-number"}},[s._v("100")]),s._v(") "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".linear = "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n    }, "),t("span",{attrs:{class:"hljs-number"}},[s._v("1000")]),s._v(")\n  },\n  beforeDestroy () {\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" ("),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".timer) clearInterval("),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".timer);\n  }\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),t("span",{attrs:{class:"css"}},[s._v("\n"),t("span",{attrs:{class:"hljs-selector-class"}},[s._v(".demo-linear-progress")]),s._v(" {\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("margin")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("16px")]),s._v(" "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),s._m(2),s._v(" "),t("demo-block",{attrs:{jsfiddle:{html:'<mu-container>\n  <mu-flex class="demo-linear-progress">\n    <mu-linear-progress mode="determinate" :value="30"></mu-linear-progress>\n  </mu-flex>\n  <mu-flex class="demo-linear-progress">\n    <mu-linear-progress mode="determinate" :value="60" :size="10" color="secondary"></mu-linear-progress>\n  </mu-flex>\n  <mu-flex class="demo-linear-progress">\n    <mu-linear-progress mode="determinate" :value="90" :size="15" color="green"></mu-linear-progress>\n  </mu-flex>\n</mu-container>\n\n',script:null,style:"\n.demo-linear-progress {\n  margin: 16px 0;\n}\n"}}},[t("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[t("mu-container",[t("mu-flex",{staticClass:"demo-linear-progress"},[t("mu-linear-progress",{attrs:{mode:"determinate",value:30}})],1),s._v(" "),t("mu-flex",{staticClass:"demo-linear-progress"},[t("mu-linear-progress",{attrs:{mode:"determinate",value:60,size:10,color:"secondary"}})],1),s._v(" "),t("mu-flex",{staticClass:"demo-linear-progress"},[t("mu-linear-progress",{attrs:{mode:"determinate",value:90,size:15,color:"green"}})],1)],1)],1),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-flex")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"demo-linear-progress"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-linear-progress")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("mode")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"determinate"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"30"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-linear-progress")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-flex")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-flex")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"demo-linear-progress"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-linear-progress")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("mode")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"determinate"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"60"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"10"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"secondary"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-linear-progress")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-flex")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-flex")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"demo-linear-progress"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-linear-progress")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("mode")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"determinate"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"90"')]),s._v("  "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"15"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"green"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-linear-progress")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-flex")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),t("span",{attrs:{class:"css"}},[s._v("\n"),t("span",{attrs:{class:"hljs-selector-class"}},[s._v(".demo-linear-progress")]),s._v(" {\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("margin")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("16px")]),s._v(" "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),s._m(3),s._v(" "),t("demo-block",{attrs:{jsfiddle:{html:'<mu-circular-progress class="demo-circular-progress" :size="36"></mu-circular-progress>\n<mu-circular-progress class="demo-circular-progress" color="secondary" :stroke-width="5" :size="48"></mu-circular-progress>\n<mu-circular-progress class="demo-circular-progress" color="warning" :stroke-width="7" :size="56"></mu-circular-progress>\n',script:null,style:null}}},[t("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[t("mu-circular-progress",{staticClass:"demo-circular-progress",attrs:{size:36}}),s._v(" "),t("mu-circular-progress",{staticClass:"demo-circular-progress",attrs:{color:"secondary","stroke-width":5,size:48}}),s._v(" "),t("mu-circular-progress",{staticClass:"demo-circular-progress",attrs:{color:"warning","stroke-width":7,size:56}})],1),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-circular-progress")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"demo-circular-progress"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"36"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-circular-progress")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-circular-progress")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"demo-circular-progress"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"secondary"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":stroke-width")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"5"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"48"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-circular-progress")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-circular-progress")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"demo-circular-progress"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"warning"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":stroke-width")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"7"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"56"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-circular-progress")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),s._m(4),s._v(" "),t("demo-block",{attrs:{jsfiddle:{html:'<mu-circular-progress class="demo-circular-progress" mode="determinate" :value="40" :size="56"></mu-circular-progress>\n<mu-circular-progress class="demo-circular-progress" mode="determinate" :value="60" color="secondary" :stroke-width="5" :size="72"></mu-circular-progress>\n<mu-circular-progress class="demo-circular-progress" mode="determinate" :value="80" color="warning" :stroke-width="7" :size="96"></mu-circular-progress>\n',script:null,style:null}}},[t("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[t("mu-circular-progress",{staticClass:"demo-circular-progress",attrs:{mode:"determinate",value:40,size:56}}),s._v(" "),t("mu-circular-progress",{staticClass:"demo-circular-progress",attrs:{mode:"determinate",value:60,color:"secondary","stroke-width":5,size:72}}),s._v(" "),t("mu-circular-progress",{staticClass:"demo-circular-progress",attrs:{mode:"determinate",value:80,color:"warning","stroke-width":7,size:96}})],1),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-circular-progress")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"demo-circular-progress"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("mode")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"determinate"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"40"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"56"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-circular-progress")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-circular-progress")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"demo-circular-progress"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("mode")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"determinate"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"60"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"secondary"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":stroke-width")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"5"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"72"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-circular-progress")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-circular-progress")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"demo-circular-progress"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("mode")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"determinate"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"80"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"warning"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":stroke-width")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"7"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"96"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-circular-progress")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),s._m(5),s._v(" "),s._m(6),s._v(" "),s._m(7),s._v(" "),s._m(8)],1)},staticRenderFns:[function(){var s=this.$createElement,a=this._self._c||s;return a("p",[a("code",{pre:!0},[this._v("mu-linear-progress")]),this._v(" 和 "),a("code",{pre:!0},[this._v("mu-circular-progress")]),this._v(" 用于向用户显示数据加载进度。")])},function(){var s=this.$createElement,a=this._self._c||s;return a("h2",{attrs:{id:"shi-li"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shi-li","aria-hidden":"true"}},[this._v("¶")]),this._v(" 示例")])},function(){var s=this.$createElement,a=this._self._c||s;return a("h2",{attrs:{id:"bu-tong-de-se-cai-he-da-xiao"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bu-tong-de-se-cai-he-da-xiao","aria-hidden":"true"}},[this._v("¶")]),this._v(" 不同的色彩和大小")])},function(){var s=this.$createElement,a=this._self._c||s;return a("h2",{attrs:{id:"huan-xing-jin-du-tiao"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#huan-xing-jin-du-tiao","aria-hidden":"true"}},[this._v("¶")]),this._v(" 环形进度条")])},function(){var s=this.$createElement,a=this._self._c||s;return a("h2",{attrs:{id:"ding-zhi-yuan-huan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ding-zhi-yuan-huan","aria-hidden":"true"}},[this._v("¶")]),this._v(" 定值圆环")])},function(){var s=this.$createElement,a=this._self._c||s;return a("h2",{attrs:{id:"linear-progress-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linear-progress-props","aria-hidden":"true"}},[this._v("¶")]),this._v(" Linear Progress Props")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("介绍")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("可选值")]),s._v(" "),t("th",[s._v("默认值")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("mode")]),s._v(" "),t("td",[s._v("显示模式， indeterminate 不确定进度模式，这时 value、min、max 无效, determinate 需要通过改变value值来改变进度显示")]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td",[s._v("indeterminate/determinate")]),s._v(" "),t("td",[s._v("indeterminate")])]),s._v(" "),t("tr",[t("td",[s._v("max")]),s._v(" "),t("td",[s._v("最大值")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[s._v("—")]),s._v(" "),t("td",[s._v("100")])]),s._v(" "),t("tr",[t("td",[s._v("min")]),s._v(" "),t("td",[s._v("最小值")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[s._v("—")]),s._v(" "),t("td",[s._v("0")])]),s._v(" "),t("tr",[t("td",[s._v("value")]),s._v(" "),t("td",[s._v("进度显示值")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[s._v("—")]),s._v(" "),t("td",[s._v("—")])]),s._v(" "),t("tr",[t("td",[s._v("size")]),s._v(" "),t("td",[s._v("进度条高度")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[s._v("—")]),s._v(" "),t("td",[s._v("—")])]),s._v(" "),t("tr",[t("td",[s._v("color")]),s._v(" "),t("td",[s._v("颜色")]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td",[s._v("—")]),s._v(" "),t("td",[s._v("—")])])])])},function(){var s=this.$createElement,a=this._self._c||s;return a("h2",{attrs:{id:"circular-progress-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#circular-progress-props","aria-hidden":"true"}},[this._v("¶")]),this._v(" Circular Progress Props")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("介绍")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("可选值")]),s._v(" "),t("th",[s._v("默认值")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("mode")]),s._v(" "),t("td",[s._v("显示模式， indeterminate 不确定进度模式，这时 value、min、max 无效, determinate 需要通过改变value值来改变进度显示")]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td",[s._v("indeterminate/determinate")]),s._v(" "),t("td",[s._v("indeterminate")])]),s._v(" "),t("tr",[t("td",[s._v("max")]),s._v(" "),t("td",[s._v("最大值")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[s._v("—")]),s._v(" "),t("td",[s._v("100")])]),s._v(" "),t("tr",[t("td",[s._v("min")]),s._v(" "),t("td",[s._v("最小值")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[s._v("—")]),s._v(" "),t("td",[s._v("0")])]),s._v(" "),t("tr",[t("td",[s._v("value")]),s._v(" "),t("td",[s._v("进度显示值")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[s._v("—")]),s._v(" "),t("td",[s._v("—")])]),s._v(" "),t("tr",[t("td",[s._v("size")]),s._v(" "),t("td",[s._v("圆环的尺寸")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[s._v("—")]),s._v(" "),t("td",[s._v("—")])]),s._v(" "),t("tr",[t("td",[s._v("stroke-width")]),s._v(" "),t("td",[s._v("圆环的宽度")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[s._v("—")]),s._v(" "),t("td",[s._v("—")])]),s._v(" "),t("tr",[t("td",[s._v("color")]),s._v(" "),t("td",[s._v("颜色")]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td",[s._v("—")]),s._v(" "),t("td",[s._v("—")])])])])}]};a.a=r},YeVa:function(s,a,t){var r=t("CX1p");"string"==typeof r&&(r=[[s.i,r,""]]),r.locals&&(s.exports=r.locals);t("X/Wc")("2987f34a",r,!0,{})},kiGt:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{linear:10}},created:function(){var s=this;this.timer=setInterval(function(){s.linear+=10,s.linear>100&&(s.linear=0)},1e3)},beforeDestroy:function(){this.timer&&clearInterval(this.timer)}}},u53S:function(s,a,t){s.exports=t("6fQI")}});
//# sourceMappingURL=13.31fafe6cac6c747de674.js.map