webpackJsonp([26],{"+V9I":function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("l8zM"),r=a.n(l);for(var v in l)"default"!==v&&function(s){a.d(t,s,function(){return l[s]})}(v);var _=a("u5Bb"),e=a("/4AN")(r.a,_.a,!1,null,null,null);t.default=e.exports},Nxnu:function(s,t,a){s.exports=a("+V9I")},l8zM:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{text:"",visibility:!1}}}},u5Bb:function(s,t,a){"use strict";var l={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"markdown-body"},[a("h1",[s._v("文本输入框")]),s._v(" "),s._m(0),s._v(" "),s._m(1),s._v(" "),a("demo-block",{attrs:{jsfiddle:{html:'<mu-container>\n  <mu-text-field></mu-text-field><br>\n  <mu-text-field placeholder="Please input......"></mu-text-field><br>\n  <mu-text-field disabled placeholder="disabled input"></mu-text-field><br>\n  <mu-text-field placeholder="error input" error-text="Please input......"></mu-text-field><br>\n  <mu-text-field label="Email Address" suffix="@gmail.com"></mu-text-field><br>\n  <mu-text-field label="Label Float" prefix="$" label-float></mu-text-field><br>\n  <mu-text-field label="Password" :action-icon="visibility ? \'visibility_off\' : \'visibility\'" :action-click="() => (visibility = !visibility)" :type="visibility ? \'text\' : \'password\'"></mu-text-field><br>\n  <mu-text-field label="Full Width" full-width></mu-text-field>\n</mu-container>\n\n',script:"\nexport default {\n  data () {\n    return {\n      visibility: false\n    }\n  }\n}\n",style:null}}},[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("mu-container",[a("mu-text-field"),a("br"),s._v(" "),a("mu-text-field",{attrs:{placeholder:"Please input......"}}),a("br"),s._v(" "),a("mu-text-field",{attrs:{disabled:"",placeholder:"disabled input"}}),a("br"),s._v(" "),a("mu-text-field",{attrs:{placeholder:"error input","error-text":"Please input......"}}),a("br"),s._v(" "),a("mu-text-field",{attrs:{label:"Email Address",suffix:"@gmail.com"}}),a("br"),s._v(" "),a("mu-text-field",{attrs:{label:"Label Float",prefix:"$","label-float":""}}),a("br"),s._v(" "),a("mu-text-field",{attrs:{label:"Password","action-icon":s.visibility?"visibility_off":"visibility","action-click":function(){return s.visibility=!s.visibility},type:s.visibility?"text":"password"}}),a("br"),s._v(" "),a("mu-text-field",{attrs:{label:"Full Width","full-width":""}})],1)],1),s._v(" "),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v("/>")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"Please input......"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v("/>")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"disabled input"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v("/>")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"error input"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("error-text")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"Please input......"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v("/>")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"Email Address"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("suffix")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"@gmail.com"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v("/>")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"Label Float"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("prefix")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"$"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label-float")]),s._v(" >")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v("/>")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"Password"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":action-icon")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("\"visibility ? 'visibility_off' : 'visibility'\"")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":action-click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"() => (visibility = !visibility)"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":type")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("\"visibility ? 'text' : 'password'\"")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v("/>")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"Full Width"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("full-width")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("visibility")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n    }\n  }\n}\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),a("demo-block",{attrs:{jsfiddle:{html:'<mu-container>\n  <mu-text-field placeholder="默认3行, 最大显示6行" multi-line :rows="3" :rows-max="6"></mu-text-field><br>\n  <mu-text-field multi-line="" :rows="4" full-width></mu-text-field><br>\n</mu-container>\n',script:null,style:null}}},[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("mu-container",[a("mu-text-field",{attrs:{placeholder:"默认3行, 最大显示6行","multi-line":"",rows:3,"rows-max":6}}),a("br"),s._v(" "),a("mu-text-field",{attrs:{"multi-line":"",rows:4,"full-width":""}}),a("br")],1)],1),s._v(" "),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"默认3行, 最大显示6行"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("multi-line")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":rows")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":rows-max")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"6"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v("/>")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("multi-line")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":rows")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"4"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("full-width")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v("/>")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),s._m(4),s._v(" "),a("demo-block",{attrs:{jsfiddle:{html:'<mu-container>\n  <mu-text-field type="number" placeholder="电话号码" icon="phone"></mu-text-field><br>\n  <mu-text-field multi-line :rows="4" icon="comment" placeholder="输入信息"></mu-text-field><br>\n</mu-container>\n',script:null,style:null}}},[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("mu-container",[a("mu-text-field",{attrs:{type:"number",placeholder:"电话号码",icon:"phone"}}),a("br"),s._v(" "),a("mu-text-field",{attrs:{"multi-line":"",rows:4,icon:"comment",placeholder:"输入信息"}}),a("br")],1)],1),s._v(" "),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"number"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"电话号码"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("icon")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"phone"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v("/>")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("multi-line")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":rows")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"4"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("icon")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"comment"')]),s._v("  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"输入信息"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v("/>")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),s._m(5),s._v(" "),a("demo-block",{attrs:{jsfiddle:{html:'<mu-container>\n  <mu-text-field label="UserName" label-float help-text="用户名为6-12长度的字符" icon="account_circle"></mu-text-field><br>\n  <mu-text-field label="Password" label-float error-text="请输入密码" icon="locked"></mu-text-field><br>\n</mu-container>\n',script:null,style:null}}},[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("mu-container",[a("mu-text-field",{attrs:{label:"UserName","label-float":"","help-text":"用户名为6-12长度的字符",icon:"account_circle"}}),a("br"),s._v(" "),a("mu-text-field",{attrs:{label:"Password","label-float":"","error-text":"请输入密码",icon:"locked"}}),a("br")],1)],1),s._v(" "),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"UserName"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label-float")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("help-text")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"用户名为6-12长度的字符"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("icon")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"account_circle"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v("/>")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"Password"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label-float")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("error-text")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"请输入密码"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("icon")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"locked"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v("/>")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),s._m(6),s._v(" "),s._m(7),s._v(" "),a("demo-block",{attrs:{jsfiddle:{html:'<mu-container>\n  <mu-text-field placeholder="最多不超过10个字符" :max-length="10"></mu-text-field><br>\n  <mu-text-field placeholder="不允许超过100个字符" multi-line :rows="3" :max-length="100"></mu-text-field><br>\n</mu-container>\n',script:null,style:null}}},[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("mu-container",[a("mu-text-field",{attrs:{placeholder:"最多不超过10个字符","max-length":10}}),a("br"),s._v(" "),a("mu-text-field",{attrs:{placeholder:"不允许超过100个字符","multi-line":"",rows:3,"max-length":100}}),a("br")],1)],1),s._v(" "),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"最多不超过10个字符"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":max-length")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"10"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v("/>")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"不允许超过100个字符"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("multi-line")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":rows")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":max-length")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"100"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v("/>")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),s._m(8)],1)},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",{pre:!0},[this._v("mu-text-field")]),this._v(" 用于收集用户提供的信息。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"shi-li"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shi-li","aria-hidden":"true"}},[this._v("¶")]),this._v(" 示例")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"duo-xing-shu-ru"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#duo-xing-shu-ru","aria-hidden":"true"}},[this._v("¶")]),this._v(" 多行输入")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("设置 "),a("code",{pre:!0},[s._v("multi-line")]),s._v(" 之后会被渲染成 "),a("code",{pre:!0},[s._v("textarea")]),s._v(" 标签，通过 "),a("code",{pre:!0},[s._v("rows")]),s._v(" 和 "),a("code",{pre:!0},[s._v("rowsMax")]),s._v(" 控制显示输入框的行数。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"tu-biao-xian-shi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tu-biao-xian-shi","aria-hidden":"true"}},[this._v("¶")]),this._v(" 图标显示")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"bang-zhu-wen-zi-he-cuo-wu-zhuang-tai"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bang-zhu-wen-zi-he-cuo-wu-zhuang-tai","aria-hidden":"true"}},[this._v("¶")]),this._v(" 帮助文字和错误状态")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"shu-ru-chang-du-xian-zhi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shu-ru-chang-du-xian-zhi","aria-hidden":"true"}},[this._v("¶")]),this._v(" 输入长度限制")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("设置 "),t("code",{pre:!0},[this._v("max-length")]),this._v(" 后会启动输入长度限制，并显示输入字符数。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("介绍")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("可选值")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("color")]),s._v(" "),a("td",[s._v("输入框颜色")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("—")]),s._v(" "),a("td",[s._v("—")])]),s._v(" "),a("tr",[a("td",[s._v("icon")]),s._v(" "),a("td",[s._v("输入框左边的图标")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("—")]),s._v(" "),a("td",[s._v("—")])]),s._v(" "),a("tr",[a("td",[s._v("label")]),s._v(" "),a("td",[s._v("标签文本")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("—")]),s._v(" "),a("td",[s._v("—")])]),s._v(" "),a("tr",[a("td",[s._v("label-float")]),s._v(" "),a("td",[s._v("标签是否浮动")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("—")]),s._v(" "),a("td",[s._v("false")])]),s._v(" "),a("tr",[a("td",[s._v("underline-show")]),s._v(" "),a("td",[s._v("是否显示底部的横线")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("—")]),s._v(" "),a("td",[s._v("true")])]),s._v(" "),a("tr",[a("td",[s._v("error-text")]),s._v(" "),a("td",[s._v("错误提醒文字，如果此参数有值，那么输入框会转为错误的状态, 显示效果将会更改")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("—")]),s._v(" "),a("td",[s._v("—")])]),s._v(" "),a("tr",[a("td",[s._v("help-text")]),s._v(" "),a("td",[s._v("帮助文字")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("—")]),s._v(" "),a("td",[s._v("—")])]),s._v(" "),a("tr",[a("td",[s._v("full-width")]),s._v(" "),a("td",[s._v("是否将宽度设置为 100%, 默认 256px")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("—")]),s._v(" "),a("td",[s._v("false")])]),s._v(" "),a("tr",[a("td",[s._v("disabled")]),s._v(" "),a("td",[s._v("输入框是否不可用")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("—")]),s._v(" "),a("td",[s._v("false")])]),s._v(" "),a("tr",[a("td",[s._v("multi-line")]),s._v(" "),a("td",[s._v("是否多行输入")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("—")]),s._v(" "),a("td",[s._v("—")])]),s._v(" "),a("tr",[a("td",[s._v("max-length")]),s._v(" "),a("td",[s._v("最多可输入字符数")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[s._v("—")]),s._v(" "),a("td",[s._v("—")])]),s._v(" "),a("tr",[a("td",[s._v("rows")]),s._v(" "),a("td",[s._v("行数")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[s._v("—")]),s._v(" "),a("td",[s._v("1")])]),s._v(" "),a("tr",[a("td",[s._v("rows-max")]),s._v(" "),a("td",[s._v("最大行数")]),s._v(" "),a("td",[s._v("—")]),s._v(" "),a("td",[s._v("—")]),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("action-icon")]),s._v(" "),a("td",[s._v("输入框右边的图标")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("—")]),s._v(" "),a("td",[s._v("—")])]),s._v(" "),a("tr",[a("td",[s._v("action-click")]),s._v(" "),a("td",[s._v("图标点击之后执行的函数")]),s._v(" "),a("td",[s._v("Function")]),s._v(" "),a("td",[s._v("—")]),s._v(" "),a("td",[s._v("—")])]),s._v(" "),a("tr",[a("td",[s._v("solo")]),s._v(" "),a("td",[s._v("改变样式，设置之后会隐藏输入框的下划线和标签")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("—")]),s._v(" "),a("td",[s._v("false")])]),s._v(" "),a("tr",[a("td",[s._v("prefix")]),s._v(" "),a("td",[s._v("输入框前缀内容")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("—")]),s._v(" "),a("td",[s._v("—")])]),s._v(" "),a("tr",[a("td",[s._v("suffix")]),s._v(" "),a("td",[s._v("输入框尾部内容")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("—")]),s._v(" "),a("td",[s._v("—")])])])])}]};t.a=l}});