!function(e){function t(o){if(n[o])return n[o].exports;var c=n[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,t),c.l=!0,c.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=12)}([function(e,t){e.exports=function(e,t,n,o){var c,i=e=e||{},r=typeof e.default;"object"!==r&&"function"!==r||(c=e,i=e.default);var a="function"==typeof i?i.options:i;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),o){var u=a.computed||(a.computed={});Object.keys(o).forEach(function(e){var t=o[e];u[e]=function(){return t}})}return{esModule:c,exports:i,options:a}}},function(e,t,n){n(5);var o=n(0)(n(3),n(10),null,null);e.exports=o.exports},function(e,t){e.exports=Vue},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(9),c=n.n(o),i={viewModel:Object};t.default={components:{iconCommand:c.a},name:"app",props:i,data:function(){return this.viewModel}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(7);t.default={mixins:[o.a],props:{nome:String,icon:String}}},function(e,t){},function(e,t){},function(e,t,n){"use strict";const o={props:{command:{required:!0,validator:function(e){return"object"==typeof e}},arg:{type:Object,required:!1,default:null}},computed:{canExecute:function(){return null!==this.command&&this.command.CanExecuteValue}},watch:{"command.CanExecuteCount":function(){this.computeCanExecute()},arg:function(){this.computeCanExecute()}},methods:{computeCanExecute:function(){null!==this.command&&this.command.CanExecute(this.arg)},execute:function(){if(this.canExecute){var e=this.beforeCommand;e&&e(),this.command.Execute(this.arg)}}}};t.a=o},function(e,t,n){e.exports=n.p+"76ec2a09aa20e8a01442f48f046c1a57.png"},function(e,t,n){n(6);var o=n(0)(n(4),n(11),null,null);e.exports=o.exports},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ui grey inverted vertical footer segment main"},[n("div",{staticClass:"ui grid inverted"},[n("div",{staticClass:"center aligned thirteen wide column"},[n("div",{staticClass:"ui menu icon grey compact inverted"},[n("icon-command",{attrs:{command:e.DebugBrowser,icon:"bars",nome:"Inspect"}}),e._v(" "),e.VmDebug?n("icon-command",{class:{active:e.IsDebuggingVm},attrs:{command:e.DebugWindow,icon:"bug",nome:"Vm debugger"}}):e._e(),e._v(" "),n("icon-command",{attrs:{command:e.ShowInfo,direction:"right",icon:"info circle",nome:"About"}})],1)]),e._v(" "),e._m(0)])])},staticRenderFns:[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"left floated right aligned three wide column"},[o("div",{staticClass:"description"},[o("div",{staticClass:"ui circular label white"},[o("img",{staticClass:"logo",attrs:{src:n(8)}})])])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ui button inverted labeled icon",on:{click:e.execute}},[n("i",{staticClass:"icon",class:e.icon}),e._v("\n    "+e._s(e.nome)+"\n")])},staticRenderFns:[]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),c=n.n(o),i=n(1),r=n.n(i);c.a.component("app",r.a)}]);