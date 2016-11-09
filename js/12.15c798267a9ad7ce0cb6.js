webpackJsonp([12,50],{109:function(e,t,a){var n,r;a(704),n=a(263);var o=a(1423);r=n=n||{},"object"!=typeof n["default"]&&"function"!=typeof n["default"]||(r=n=n["default"]),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,e.exports=n},171:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:[{name:"anchorOrigin",type:"Object","default":"{vertical: 'bottom', horizontal: 'left' }",desc:"锚点的位置定义，弹出补全列表是以这个点为基准定位"},{name:"targetOrigin",type:"Object","default":"{vertical: 'top', horizontal: 'left' }",desc:"锚点相对于弹出补全列表的位置"},{name:"dataSource",type:"Array","default":"",desc:"必须，填充补全列表的数据"},{name:"dataSourceConfig",type:"Object","default":"{text: 'text', value: 'value'}",desc:"dataSource 的配置信息，text 显示文本属性名称，value 值的属性名称"},{name:"disableFocusRipple",type:"Boolean","default":"true",desc:"将 focus 时波纹效果设置为不可用"},{name:"filter",type:"String, Function","default":"caseSensitiveFilter",desc:"过滤器配置，用于过滤 dataSource 里的数据，只显示于输入相关的数据。"},{name:"maxSearchResults",type:"Number","default":"",desc:"最多显示数据的条数"},{name:"openOnFocus",type:"Boolean","default":"false",desc:"是否在 focus 是显示补全信息列表"},{name:"menuCloseDelay",type:"Number","default":"300",desc:"补全列表关闭的延迟时间，单位：ms"},{name:"label",type:"String","default":"",desc:"输入框的标签"},{name:"labelFloat",type:"Boolean","default":"false",desc:"标签是否浮动"},{name:"disabled",type:"Boolean","default":"false",desc:"输入框是否不可用"},{name:"hintText",type:"String","default":"",desc:"提示文本"},{name:"helpText",type:"String","default":"",desc:"输入的帮助文字"},{name:"errorText",type:"String","default":"",desc:"错误提醒文字，如果此参数有值，那么输入框会转为错误的状态, 显示效果将会更改"},{name:"errorColor",type:"String","default":"",desc:"错误状态的时的颜色，默认为红色"},{name:"icon",type:"String","default":"",desc:"显示图标"},{name:"fullWidth",type:"Boolean","default":"false",desc:"是否将宽度设置为 100%, 默认 256px"},{name:"underlineShow",type:"Boolean","default":"true",desc:"是否显示底部的横线"},{name:"value",type:"String","default":"",desc:"输入框的值，可不设置此参数，使用 v-model 指令代替"}],events:[{name:"focus",desc:"输入框获取焦点事件"},{name:"blur",desc:"输入框失去焦点事件"},{name:"select",desc:"选择补全列表事件, 会传入这条数据和index值，(item, index)"},{name:"input",desc:"输入时触发的事件，传入value, (value)"},{name:"change",desc:"同 input 事件一样"}]}},260:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=["Red","Orange","Yellow","Green","Blue","Purple","Black","White"],n=["Apple","Apricot","Avocado","Banana","Bilberry","Blackberry","Blackcurrant","Blueberry","Boysenberry","Blood Orange","Cantaloupe","Currant","Cherry","Cherimoya","Cloudberry","Coconut","Cranberry","Clementine","Damson","Date","Dragonfruit","Durian","Elderberry","Feijoa","Fig","Goji berry","Gooseberry","Grape","Grapefruit","Guava","Honeydew","Huckleberry","Jabouticaba","Jackfruit","Jambul","Jujube","Juniper berry","Kiwi fruit","Kumquat","Lemon","Lime","Loquat","Lychee","Nectarine","Mango","Marion berry","Melon","Miracle fruit","Mulberry","Mandarine","Olive","Orange","Papaya","Passionfruit","Peach","Pear","Persimmon","Physalis","Plum","Pineapple","Pumpkin","Pomegranate","Pomelo","Purple Mangosteen","Quince","Raspberry","Raisin","Rambutan","Redcurrant","Salal berry","Satsuma","Star fruit","Strawberry","Squash","Salmonberry","Tamarillo","Tamarind","Tomato","Tangerine","Ugli fruit","Watermelon"];t["default"]={data:function(){return{colors:a,fruits:n,myfilter:function(e,t){return t&&t.toLowerCase().indexOf("m")!==-1&&t.toLowerCase().indexOf("y")!==-1}}}}},261:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:function(){return{dataSource:[{value:"t1",text:"第一个Icon",rightIcon:"inbox"},{value:"t2",text:"第二个Icon",rightIcon:"info"},{value:"t3",text:"第三个Icon",rightIcon:"search"}],focusData:["123456","789723","775873"]}}}},262:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:function(){return{dataSource:[]}},methods:{handleInput:function(e){this.dataSource=[e,e+e,e+e+e]}}}},263:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(1003),o=n(r),l=a(1062),u=n(l),i=a(913),c=n(i),s=a(1061),d=n(s),f=a(912),p=n(f),m=a(1060),b=n(m),h=a(911),y=n(h),x=a(171),S=n(x);t["default"]={data:function(){return{text:o["default"],exampleSimpleCode:c["default"],examplePropsCode:p["default"],exampleFilterCode:y["default"],apiData:S["default"]}},components:{"ex-simple":u["default"],"ex-props":d["default"],"ex-filter":b["default"]}}},559:function(e,t,a){t=e.exports=a(1)(),t.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",file:"index.vue",sourceRoot:"webpack://"}])},704:function(e,t,a){var n=a(559);"string"==typeof n&&(n=[[e.id,n,""]]);a(2)(n,{});n.locals&&(e.exports=n.locals)},911:function(e,t){e.exports="<template>\n<div>\n  <mu-auto-complete label=\"不过滤 dataSource\" :maxSearchResults=\"5\" labelFloat :dataSource=\"colors\" filter=\"noFilter\"/><br/>\n  <mu-auto-complete label=\"区分大小写的文字匹配过滤\" :maxSearchResults=\"5\" labelFloat :dataSource=\"fruits\" filter=\"caseSensitiveFilter\"/><br/>\n  <mu-auto-complete label=\"不区分大小写的文字匹配过滤\" :maxSearchResults=\"5\" labelFloat :dataSource=\"fruits\" filter=\"caseInsensitiveFilter\"/><br/>\n  <mu-auto-complete label=\"只显示有 ‘m’ 和 ‘y’ 的数据\" :maxSearchResults=\"5\" labelFloat :dataSource=\"fruits\" :filter=\"myfilter\"/>\n</div>\n</template>\n\n<script>\nconst colors = [\n  'Red',\n  'Orange',\n  'Yellow',\n  'Green',\n  'Blue',\n  'Purple',\n  'Black',\n  'White'\n]\n\nconst fruits = [\n  'Apple', 'Apricot', 'Avocado',\n  'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',\n  'Boysenberry', 'Blood Orange',\n  'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya', 'Cloudberry',\n  'Coconut', 'Cranberry', 'Clementine',\n  'Damson', 'Date', 'Dragonfruit', 'Durian',\n  'Elderberry',\n  'Feijoa', 'Fig',\n  'Goji berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava',\n  'Honeydew', 'Huckleberry',\n  'Jabouticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry',\n  'Kiwi fruit', 'Kumquat',\n  'Lemon', 'Lime', 'Loquat', 'Lychee',\n  'Nectarine',\n  'Mango', 'Marion berry', 'Melon', 'Miracle fruit', 'Mulberry', 'Mandarine',\n  'Olive', 'Orange',\n  'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Physalis', 'Plum', 'Pineapple',\n  'Pumpkin', 'Pomegranate', 'Pomelo', 'Purple Mangosteen',\n  'Quince',\n  'Raspberry', 'Raisin', 'Rambutan', 'Redcurrant',\n  'Salal berry', 'Satsuma', 'Star fruit', 'Strawberry', 'Squash', 'Salmonberry',\n  'Tamarillo', 'Tamarind', 'Tomato', 'Tangerine',\n  'Ugli fruit',\n  'Watermelon'\n]\nexport default {\n  data () {\n    return {\n      colors,\n      fruits,\n      myfilter (searchText, key) {\n        return key && key.toLowerCase().indexOf('m') !== -1 && key.toLowerCase().indexOf('y') !== -1\n      }\n    }\n  }\n}\n</script>\n"},912:function(e,t){e.exports="<template>\n<div>\n  <mu-auto-complete filter=\"noFilter\" label=\"配置 datasource 显示 icon\" labelFloat :dataSource=\"dataSource\"/> <br/>\n  <mu-auto-complete filter=\"noFilter\" label=\"在 focus 的时候显示补全信息\" openOnFocus labelFloat :dataSource=\"focusData\"/>\n</div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      dataSource: [{\n        value: 't1',\n        text: '第一个Icon',\n        rightIcon: 'inbox'\n      }, {\n        value: 't2',\n        text: '第二个Icon',\n        rightIcon: 'info'\n      }, {\n        value: 't3',\n        text: '第三个Icon',\n        rightIcon: 'search'\n      }],\n      focusData: ['123456', '789723', '775873']\n    }\n  }\n}\n</script>\n"},913:function(e,t){e.exports='<template>\n<div>\n  <mu-auto-complete hintText="请随便输入点啥" @input="handleInput" :dataSource="dataSource"/>\n  <mu-auto-complete hintText="请随便输入点啥" labelFloat label="full width" fullWidth @input="handleInput" :dataSource="dataSource"/>\n</div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      dataSource: []\n    }\n  },\n  methods: {\n    handleInput (val) {\n      this.dataSource = [\n        val,\n        val + val,\n        val + val + val\n      ]\n    }\n  }\n}\n</script>\n'},1003:function(e,t){e.exports="## Auto Complete\n\n[auto complete](https://material.google.com/components/text-fields.html#text-fields-auto-complete-text-field) 是普通文本输入框的扩展，可以动态的自动完成输入，采取不同的 `filter` 配置，来显示不同下来菜单以提示可以补全的内容。\n\n### 示例\n"},1060:function(e,t,a){var n,r;n=a(260);var o=a(1281);r=n=n||{},"object"!=typeof n["default"]&&"function"!=typeof n["default"]||(r=n=n["default"]),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,e.exports=n},1061:function(e,t,a){var n,r;n=a(261);var o=a(1327);r=n=n||{},"object"!=typeof n["default"]&&"function"!=typeof n["default"]||(r=n=n["default"]),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,e.exports=n},1062:function(e,t,a){var n,r;n=a(262);var o=a(1290);r=n=n||{},"object"!=typeof n["default"]&&"function"!=typeof n["default"]||(r=n=n["default"]),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,e.exports=n},1281:function(module,exports){module.exports={render:function(){with(this)return _h("div",[_h("mu-auto-complete",{attrs:{label:"不过滤 dataSource",maxSearchResults:5,labelFloat:"",dataSource:colors,filter:"noFilter"}}),_m(0)," ",_h("mu-auto-complete",{attrs:{label:"区分大小写的文字匹配过滤",maxSearchResults:5,labelFloat:"",dataSource:fruits,filter:"caseSensitiveFilter"}}),_m(1)," ",_h("mu-auto-complete",{attrs:{label:"不区分大小写的文字匹配过滤",maxSearchResults:5,labelFloat:"",dataSource:fruits,filter:"caseInsensitiveFilter"}}),_m(2)," ",_h("mu-auto-complete",{attrs:{label:"只显示有 ‘m’ 和 ‘y’ 的数据",maxSearchResults:5,labelFloat:"",dataSource:fruits,filter:myfilter}})])},staticRenderFns:[function(){with(this)return _h("br")},function(){with(this)return _h("br")},function(){with(this)return _h("br")}]}},1290:function(module,exports){module.exports={render:function(){with(this)return _h("div",[_h("mu-auto-complete",{attrs:{hintText:"请随便输入点啥",dataSource:dataSource},on:{input:handleInput}})," ",_h("mu-auto-complete",{attrs:{hintText:"请随便输入点啥",labelFloat:"",label:"full width",fullWidth:"",dataSource:dataSource},on:{input:handleInput}})])},staticRenderFns:[]}},1327:function(module,exports){module.exports={render:function(){with(this)return _h("div",[_h("mu-auto-complete",{attrs:{filter:"noFilter",label:"配置 datasource 显示 icon",labelFloat:"",dataSource:dataSource}})," ",_m(0)," ",_h("mu-auto-complete",{attrs:{filter:"noFilter",label:"在 focus 的时候显示补全信息",openOnFocus:"",labelFloat:"",dataSource:focusData}})])},staticRenderFns:[function(){with(this)return _h("br")}]}},1423:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"content-wrapper"},[_h("markdown-element",{attrs:{text:text}})," ",_h("code-example",{attrs:{title:"简单的使用",description:"auto complete 组件必须要一个 `dataSource` 属性，决定了提示补全的内容。 ",code:exampleSimpleCode}},[_h("ex-simple")])," ",_h("code-example",{attrs:{title:"不同的配置参数使用",description:"`dataSource` 可以通过配置 `leftIcon` 或者 `rightIcon` 来显示 Icon， 通过设置 `openOnFocus` 输入框 focus 时的时候显示补全信息。 ",code:examplePropsCode}},[_h("ex-props")])," ",_h("code-example",{attrs:{title:"Filter 的使用",description:"通过配置不同的 `filter` 来过滤 `dataSource` 中的数据，只提示和输入相关的数据，也可以自定义 `filter` 函数，完成不同的 `dataSource` 过滤， `maxSearchResults` 用来控制显示结果的数量。",code:exampleFilterCode}},[_h("ex-filter")])," ",_h("api-view",{attrs:{api:apiData}})])},staticRenderFns:[]}}});
//# sourceMappingURL=12.15c798267a9ad7ce0cb6.js.map