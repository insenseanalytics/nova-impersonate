!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=function(e,t,n,r,o,i){var s,c=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(s=e,c=e.default);var a,u="function"==typeof c?c.options:c;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),o&&(u._scopeId=o),i?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=a):r&&(a=r),a){var d=u.functional,p=d?u.render:u.beforeCreate;d?(u._injectStyles=a,u.render=function(e,t){return a.call(t),p(e,t)}):u.beforeCreate=p?[].concat(p,a):[a]}return{esModule:s,exports:c,options:u}}},function(e,t,n){n(2),e.exports=n(9)},function(e,t,n){Nova.booting(function(e,t){e.config.devtools=!0,e.component("index-impersonate-field",n(3)),e.component("detail-impersonate-field",n(6))})},function(e,t,n){var r=n(0)(n(4),n(5),!1,null,null,null);e.exports=r.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["resourceName","field"],methods:{onClick:function(){window.open("/nova-impersonate/users/"+this.field.id,"_top")}},mounted:function(){var e=this.$el.parentElement;e.classList.add("td-fit"),e.style.paddingRight="0px"}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"impersonate cursor-pointer text-70 hover:text-primary no-underline flex items-center",style:e.field.hideText?"width:22px":"",on:{click:e.onClick}},[n("svg",{attrs:{width:"22",height:"18","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M383.9 308.3l23.9-62.6c4-10.5-3.7-21.7-15-21.7h-58.5c11-18.9 17.8-40.6 17.8-64v-.3c39.2-7.8 64-19.1 64-31.7 0-13.3-27.3-25.1-70.1-33-9.2-32.8-27-65.8-40.6-82.8-9.5-11.9-25.9-15.6-39.5-8.8l-27.6 13.8c-9 4.5-19.6 4.5-28.6 0L182.1 3.4c-13.6-6.8-30-3.1-39.5 8.8-13.5 17-31.4 50-40.6 82.8-42.7 7.9-70 19.7-70 33 0 12.6 24.8 23.9 64 31.7v.3c0 23.4 6.8 45.1 17.8 64H56.3c-11.5 0-19.2 11.7-14.7 22.3l25.8 60.2C27.3 329.8 0 372.7 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-48.4-25.8-90.4-64.1-114.1zM176 480l-41.6-192 49.6 32 24 40-32 120zm96 0l-32-120 24-40 49.6-32L272 480zm41.7-298.5c-3.9 11.9-7 24.6-16.5 33.4-10.1 9.3-48 22.4-64-25-2.8-8.4-15.4-8.4-18.3 0-17 50.2-56 32.4-64 25-9.5-8.8-12.7-21.5-16.5-33.4-.8-2.5-6.3-5.7-6.3-5.8v-10.8c28.3 3.6 61 5.8 96 5.8s67.7-2.1 96-5.8v10.8c-.1.1-5.6 3.2-6.4 5.8z"}})]),e._v(" "),e.field.hideText?e._e():n("span",{staticClass:"ml-2"},[e._v("\n        "+e._s(e.__("Impersonate"))+"\n    ")])])},staticRenderFns:[]}},function(e,t,n){var r=n(0)(n(7),n(8),!1,null,null,null);e.exports=r.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["resourceName","field"],methods:{onClick:function(){window.open("/nova-impersonate/users/"+this.field.id,"_top")}}}},function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("a",{staticClass:"impersonate cursor-pointer text-70 hover:text-primary no-underline flex items-center",on:{click:this.onClick}},[t("svg",{attrs:{width:"22",height:"18","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[t("path",{attrs:{fill:"currentColor",d:"M383.9 308.3l23.9-62.6c4-10.5-3.7-21.7-15-21.7h-58.5c11-18.9 17.8-40.6 17.8-64v-.3c39.2-7.8 64-19.1 64-31.7 0-13.3-27.3-25.1-70.1-33-9.2-32.8-27-65.8-40.6-82.8-9.5-11.9-25.9-15.6-39.5-8.8l-27.6 13.8c-9 4.5-19.6 4.5-28.6 0L182.1 3.4c-13.6-6.8-30-3.1-39.5 8.8-13.5 17-31.4 50-40.6 82.8-42.7 7.9-70 19.7-70 33 0 12.6 24.8 23.9 64 31.7v.3c0 23.4 6.8 45.1 17.8 64H56.3c-11.5 0-19.2 11.7-14.7 22.3l25.8 60.2C27.3 329.8 0 372.7 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-48.4-25.8-90.4-64.1-114.1zM176 480l-41.6-192 49.6 32 24 40-32 120zm96 0l-32-120 24-40 49.6-32L272 480zm41.7-298.5c-3.9 11.9-7 24.6-16.5 33.4-10.1 9.3-48 22.4-64-25-2.8-8.4-15.4-8.4-18.3 0-17 50.2-56 32.4-64 25-9.5-8.8-12.7-21.5-16.5-33.4-.8-2.5-6.3-5.7-6.3-5.8v-10.8c28.3 3.6 61 5.8 96 5.8s67.7-2.1 96-5.8v10.8c-.1.1-5.6 3.2-6.4 5.8z"}})]),this._v(" "),t("span",{staticClass:"ml-2",domProps:{textContent:this._s(this.__("Impersonate"))}})])},staticRenderFns:[]}},function(e,t){}]);