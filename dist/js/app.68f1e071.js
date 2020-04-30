(function(e){function t(t){for(var a,l,u=t[0],i=t[1],s=t[2],m=0,f=[];m<u.length;m++)l=u[m],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&f.push(r[l][0]),r[l]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);c&&c(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,u=1;u<n.length;u++){var i=n[u];0!==r[i]&&(a=!1)}a&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={app:0},o=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var c=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},1087:function(e,t,n){},"15b2":function(e,t,n){"use strict";var a=n("89fe"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Form",{on:{submitForm:e.onSubmit}}),n("TotalBalance",{attrs:{total:e.TotalBalance}}),n("BudgetList",{attrs:{list:e.list},on:{deleteItem:e.onDeleteItem}})],1)},o=[],l=(n("13d5"),n("07ac"),n("5530")),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"budget-list-wrap"},[n("el-card",{attrs:{header:e.header}}),e.isEmpty?e._l(e.list,(function(t,a){return n("div",{key:a,staticClass:"list-item"},[n("span",{staticClass:"budget-comment"},[e._v(e._s(t.comment))]),n("span",{staticClass:"budget-value"},[e._v(e._s(t.value))]),n("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(n){return e.deleteItem(t.id)}}},[e._v("Delete")])],1)})):n("el-alert",{attrs:{type:"info",title:e.emptyTitle,closable:"false"}})],2)},i=[],s=(n("b64b"),{name:"BudgetList",props:{list:{type:Object,default:function(){return{}}}},data:function(){return{header:"Budget List",emptyTitle:"Empty list"}},methods:{deleteItem:function(e){this.$emit("deleteItem",e)}},computed:{isEmpty:function(){return Boolean(Object.keys(this.list).length)}}}),c=s,m=(n("5eae"),n("2877")),f=Object(m["a"])(c,u,i,!1,null,"1570efe8",null),p=f.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"total-value"},[e._v("Balance: "+e._s(e.total))])},b=[],v=(n("a9e3"),{name:"TotalBalance",props:{total:{type:Number,default:0}}}),h=v,y=(n("15b2"),Object(m["a"])(h,d,b,!1,null,"4c985506",null)),g=y.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-card",{staticClass:"form-card"},[n("el-form",{ref:"addItemForm",attrs:{model:e.formData,rules:e.rules,"label-position":"top"}},[n("el-form-item",{attrs:{label:"Type",prop:"type"}},[n("el-select",{staticClass:"type-select",attrs:{placeholder:"Choose type"},model:{value:e.formData.type,callback:function(t){e.$set(e.formData,"type",t)},expression:"formData.type"}},[n("el-option",{attrs:{label:"Income",value:"INCOME"}}),n("el-option",{attrs:{label:"Outcome",value:"OUTCOME"}})],1)],1),n("el-form-item",{attrs:{label:"Comment",prop:"comment"}},[n("el-input",{model:{value:e.formData.comment,callback:function(t){e.$set(e.formData,"comment",t)},expression:"formData.comment"}})],1),n("el-form-item",{attrs:{label:"Value",prop:"value"}},[n("el-input",{model:{value:e.formData.value,callback:function(t){e.$set(e.formData,"value",e._n(t))},expression:"formData.value"}})],1),n("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("Submit")])],1)],1)},_=[],j={name:"Form",data:function(){return{formData:{type:"INCOME",comment:"",value:0},rules:{type:[{required:!0,message:"Please select type",trigger:"blur"}],comment:[{required:!0,message:"Please input comment",trigger:"change"}],value:[{required:!0,message:"Please enter value",trigger:"change"},{type:"number",message:"Value must be a number",trigger:"change"}]}}},methods:{onSubmit:function(){var e=this;this.$refs.addItemForm.validate((function(t){t&&(e.$emit("submitForm",Object(l["a"])({},e.formData)),e.$refs.addItemForm.resetFields())}))}}},C=j,D=(n("9f74"),Object(m["a"])(C,O,_,!1,null,"1ea02300",null)),I=D.exports,S={name:"App",components:{BudgetList:p,TotalBalance:g,Form:I},data:function(){return{list:{1:{type:"INCOME",value:100,comment:"Some comment",id:1},2:{type:"OUTCOME",value:-50,comment:"Some outcome comment",id:2}}}},methods:{onDeleteItem:function(e){this.$delete(this.list,e)},onSubmit:function(e){var t=Object(l["a"])({},e,{id:String(Math.random())});this.$set(this.list,t.id,t)}},computed:{TotalBalance:function(){return Object.values(this.list).reduce((function(e,t){return e+t.value}),0)}}},$=S,x=(n("034f"),Object(m["a"])($,r,o,!1,null,null,null)),E=x.exports,T=(n("4160"),n("159b"),n("b2d6")),w=n.n(T),B=n("4897"),F=n.n(B),k=(n("377f"),n("5c96")),M=[k["Button"],k["Card"],k["Form"],k["FormItem"],k["Input"],k["Select"],k["Option"],k["Alert"]];F.a.use(w.a),M.forEach((function(e){return a["default"].use(e,{locale:F.a})})),a["default"].config.productionTip=!1,new a["default"]({render:function(e){return e(E)}}).$mount("#app")},"5d5c":function(e,t,n){},"5eae":function(e,t,n){"use strict";var a=n("5d5c"),r=n.n(a);r.a},"85ec":function(e,t,n){},"89fe":function(e,t,n){},"9f74":function(e,t,n){"use strict";var a=n("1087"),r=n.n(a);r.a}});
//# sourceMappingURL=app.68f1e071.js.map