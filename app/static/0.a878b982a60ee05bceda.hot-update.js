webpackHotUpdate(0,{214:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=n(0),o=n(225),u=n(224),i=n(275);t.default=function(){var e=o.useDispatch(),t=a.useState(),n=t[0],c=t[1];return r.createElement("form",null,r.createElement("div",{className:"col-md-12"},r.createElement(u.TextField,{value:n,onChange:function(e){return c(e.target.value)},multiline:!0})),r.createElement(u.Button,{variant:"contained",color:"primary",onClick:function(){return e(i.GetTextAnalysis(n))}},"Submit"))}},275:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function u(e){try{c(r.next(e))}catch(e){o(e)}}function i(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,i)}c((r=r.apply(e,t||[])).next())}))},a=this&&this.__generator||function(e,t){var n,r,a,o,u={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(a=u.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){u=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){u.label=o[1];break}if(6===o[0]&&u.label<a[1]){u.label=a[1],a=o;break}if(a&&u.label<a[2]){u.label=a[2],u.ops.push(o);break}a[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(e,u)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.GetTextAnalysis=void 0;var o=n(276),u=n(265);t.GetTextAnalysis=function(e){return function(t){return r(void 0,void 0,void 0,(function(){var n;return a(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),t({type:u.TEXT_ANALYSIS_LOADING}),[4,o.default.post("http://127.0.0.1:5000/process",{text:e})];case 1:return n=r.sent(),t({type:u.TEXT_ANALYSIS_SUCCESS,payload:n.data}),[3,3];case 2:return r.sent(),t({type:u.TEXT_ANALYSIS_FAILED}),[3,3];case 3:return[2]}}))}))}}}});
//# sourceMappingURL=0.a878b982a60ee05bceda.hot-update.js.map