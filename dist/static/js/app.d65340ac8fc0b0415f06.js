webpackJsonp([1],{"3J4u":function(t,e,n){"use strict";var a=n("Xxa5"),s=n.n(a),i=n("exGp"),r=n.n(i);e.a={name:"addpost",data:function(){return{title:"",description:""}},methods:{addPost:function(){var t=this;return r()(s.a.mark(function e(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},e,t)}))()}}}},"9M+g":function(t,e){},AWdy:function(t,e,n){"use strict";function a(t){r||n("oSOL")}var s=n("Dawa"),i=n("o+Yh"),r=!1,o=n("VU/8"),c=a,l=o(s.a,i.a,!1,c,null,null);l.options.__file="src/components/EditPost.vue",e.a=l.exports},Dawa:function(t,e,n){"use strict";var a=n("Xxa5"),s=n.n(a),i=n("exGp"),r=n.n(i);e.a={name:"editpost",data:function(){return{title:"",description:""}},mounted:function(){this.getPost()},methods:{getPost:function(){var t=this;return r()(s.a.mark(function e(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},e,t)}))()},updatePost:function(){var t=this;return r()(s.a.mark(function e(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},e,t)}))()}}}},DoRh:function(t,e,n){"use strict";var a=n("3J4u"),s=n("EnET"),i=n("VU/8"),r=i(a.a,s.a,!1,null,null,null);r.options.__file="src/components/AddPost.vue",e.a=r.exports},EnET:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"posts"},[n("h1",[t._v("Add Post")]),t._v(" "),n("div",{staticClass:"form"},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",name:"title",placeholder:"TITLE"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),n("div",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],attrs:{rows:"15",cols:"15",placeholder:"DESCRIPTION"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})]),t._v(" "),n("div",[n("button",{staticClass:"app_post_btn",on:{click:t.addPost}},[t._v("Add")])])])])},s=[];a._withStripped=!0;var i={render:a,staticRenderFns:s};e.a=i},EtHn:function(t,e){},IUNK:function(t,e,n){"use strict";var a=n("Xxa5"),s=n.n(a),i=n("exGp"),r=n.n(i),o=n("eyEX");e.a={name:"posts",data:function(){return{date:{},transactions:[],posts:[],dateFilter:"today",accountFilter:"all",selected:"",options:[{value:"",text:"All Accounts"},{value:"bankId=823",text:"GTB - Primary Savings"},{value:"bankId=073",text:"GTB - Business Savings"},{value:"bankId=493",text:"GTB - Current"},{value:"bankId=431",text:"Access - Savings"}]}},mounted:function(){this.getPosts(),this.getTransactions()},methods:{getDate:function(t){var e=document.getElementsByClassName("selected");console.log(e),e[0].className=e[0].className.replace(" selected",""),t.target.parentNode.className+=" selected";var n="";""!==this.selected&&(n="&"+this.selected);var a="/?filter="+t.target.innerHTML+n;this.dateFilter=t.target.innerHTML,console.log(t.target.innerHTML),this.getTransactions(a)},getSelectedItem:function(t){var e="";""!==this.selected&&(e="&"+this.selected);var n="/?filter="+this.dateFilter+e;this.accountFilter=this.selected,this.getTransactions(n)},getTransactions:function(t){var e=this;return r()(s.a.mark(function n(){var a;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.fetchTransactions(t);case 2:a=n.sent,e.transactions=a.data.transactions,console.log("inside getTransactions",e.transactions);case 5:case"end":return n.stop()}},n,e)}))()},getPosts:function(){var t=this;return r()(s.a.mark(function e(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},e,t)}))()},deletePost:function(t){var e=this;return r()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,e)}))()}}}},Jmt5:function(t,e){},LlYy:function(t,e){},M93x:function(t,e,n){"use strict";var a=n("xJD8"),s=n("Ty93"),i=n("VU/8"),r=i(a.a,s.a,!1,null,null,null);r.options.__file="src/App.vue",e.a=r.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s=n("M93x"),i=n("YaEn"),r=n("oYt9"),o=n("RZCy"),c=n.n(o),l=n("Jmt5"),d=(n.n(l),n("9M+g")),u=(n.n(d),n("pyoj")),p=(n.n(u),n("SoGI")),v=(n.n(p),n("LlYy")),f=(n.n(v),n("EtHn")),m=(n.n(f),n("Tqaz")),_=n("ViqS"),h=n.n(_);a.default.filter("formatNumber",function(t){return h()(t).format("0,0.00")}),a.default.use(m.a),a.default.use(c.a),a.default.use(r.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:i.a,template:"<App/>",components:{App:s.a}})},NZaW:function(t,e,n){"use strict";var a=n("IUNK"),s=n("nmse"),i=n("VU/8"),r=i(a.a,s.a,!1,null,null,null);r.options.__file="src/components/Transactions.vue",e.a=r.exports},RYxx:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"\n.form input, .form textarea {\n  width: 500px;\n  padding: 10px;\n  border: 1px solid #e0dede;\n  outline: none;\n  font-size: 12px;\n}\n.form div {\n  margin: 20px;\n}\n.app_post_btn {\n  background: #4d7ef7;\n  color: #fff;\n  padding: 10px 80px;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: bold;\n  width: 520px;\n  border: none;\n  cursor: pointer;\n}\n",""])},SoGI:function(t,e){},Ty93:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[];a._withStripped=!0;var i={render:a,staticRenderFns:s};e.a=i},UdIB:function(t,e){},YaEn:function(t,e,n){"use strict";var a=n("7+uW"),s=n("/ocq"),i=n("NZaW"),r=n("DoRh"),o=n("AWdy");a.default.use(s.a),e.a=new s.a({mode:"history",routes:[{path:"/",name:"Transactions",component:i.a},{path:"/posts/add",component:r.a,name:"addpost"},{path:"/posts/:id/edit",component:o.a,name:"editpost"}]})},eyEX:function(t,e,n){"use strict";var a=n("w8lG");e.a={fetchTransactions:function(t){var e="";return e=void 0===t?"/":t,console.log("inside fetchTransactions ",e),n.i(a.a)().get(e)},fetchPosts:function(){return n.i(a.a)().get("posts")},addPost:function(t){return n.i(a.a)().post("add_post",t)},updatePost:function(t){return n.i(a.a)().put("posts/"+t.id,t)},getPost:function(t){return n.i(a.a)().get("post/"+t.id)},deletePost:function(t){return n.i(a.a)().delete("posts/"+t)}}},nmse:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"header"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("b-form-select",{staticClass:"page-account",attrs:{options:t.options},on:{change:t.getSelectedItem},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),t._v(" "),n("div",{staticClass:"page-time-filter"},[n("div",{staticClass:"date today selected",on:{click:t.getDate},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[n("p",{staticClass:"btn-link"},[t._v(" today ")])]),t._v(" "),n("div",{staticClass:"date yesterday",on:{click:t.getDate},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[n("p",{staticClass:"btn-link"},[t._v("yesterday")])]),t._v(" "),n("div",{staticClass:"date week",on:{click:t.getDate},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[n("p",{staticClass:"btn-link"},[t._v("week")])]),t._v(" "),n("div",{staticClass:"date month",on:{click:t.getDate},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[n("p",{staticClass:"btn-link"},[t._v("month")])])])],1),t._v(" "),n("div",{staticClass:"content"},[t._m(2),t._v(" "),n("div",{staticClass:"funds-container"},[n("p",{staticClass:"section-label"},[t._v("\n            My Funds\n            ")]),t._v(" "),n("div",{staticClass:"card card-large card-payments"},[n("a",{attrs:{href:"/payments/all"}},[n("p",{staticClass:"card-label btn-link"},[t._v("\n                    Payments\n                ")]),t._v(" "),n("div",{staticClass:"card-amount-container"},[n("p",{staticClass:"card-amount"},[t._v("\n                      "+t._s(t._f("formatNumber")(t.transactions.payments))+"\n                        ")]),t._v(" "),n("img",{staticClass:"icon icon-payment",attrs:{src:"/static/imgs/icon-payments.svg",alt:""}})])])]),t._v(" "),n("div",{staticClass:"card card-large card-earnings"},[n("a",{attrs:{href:""}},[n("p",{staticClass:"card-label btn-link"},[t._v("\n                    Earnings\n                ")]),t._v(" "),n("div",{staticClass:"card-amount-container"},[n("p",{staticClass:"card-amount"},[t._v("\n                        "+t._s(t._f("formatNumber")(t.transactions.earnings))+"\n                        ")]),t._v(" "),n("img",{staticClass:"icon icon-earnings",attrs:{src:"/static/imgs/icon-earnings.svg",alt:""}})])])])])])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top-navbar"},[n("a",{staticClass:"logo btn-link",attrs:{href:""}},[t._v("Owomida.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-title"},[n("h1",[t._v(" Overview")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"date-row"},[n("p",{staticClass:"date"},[t._v("June 18, 2020")])])}];a._withStripped=!0;var i={render:a,staticRenderFns:s};e.a=i},"o+Yh":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"posts"},[n("h1",[t._v("Edit Post")]),t._v(" "),n("div",{staticClass:"form"},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",name:"title",placeholder:"TITLE"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),n("div",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],attrs:{rows:"15",cols:"15",placeholder:"DESCRIPTION"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})]),t._v(" "),n("div",[n("button",{staticClass:"app_post_btn",on:{click:t.updatePost}},[t._v("Update")])])])])},s=[];a._withStripped=!0;var i={render:a,staticRenderFns:s};e.a=i},oSOL:function(t,e,n){var a=n("RYxx");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("cfb6fac6",a,!1,{})},pyoj:function(t,e){},w8lG:function(t,e,n){"use strict";var a=n("mtWM"),s=n.n(a);e.a=function(){return s.a.create({baseURL:"https://owomida-server.herokuapp.com"})}},xJD8:function(t,e,n){"use strict";e.a={name:"app",head:{title:{inner:"Owomida"},meta:[{name:"HandheldFriendly",content:"True"},{name:"MobileOptimized",content:"320"},{name:"viewport",content:"width=device-width minimum-scale=1.0 maximum-scale=1.0 user-scalable=no"}]}}}},["NHnr"]);
//# sourceMappingURL=app.d65340ac8fc0b0415f06.js.map