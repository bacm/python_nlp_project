webpackHotUpdate(0,{209:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),l=n(210),r=n(214),o=n(225);t.default=function(){var e=o.useSelector((function(e){return e.textAnalysis}));return a.createElement("div",null,a.createElement(r.default,null),e&&!e.loading&&e.data&&e.data.map((function(e){return a.createElement(l.default,{label:e.text,pos:e.pos})})))}},210:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),l=n(114),r=n(74),o=n(61),u=n(26),c=l.makeStyles((function(e){return{typography:{padding:e.spacing(2)}}}));t.default=function(e){var t=c(),n=a.useState(null),l=n[0],i=n[1],s=Boolean(l),d=s?"simple-popover":void 0;return a.createElement("span",null,a.createElement(r.default,{label:e.label,onClick:function(e){i(e.currentTarget)}}),a.createElement(o.default,{id:d,open:s,anchorEl:l,onClose:function(){i(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"}},a.createElement(u.default,{className:t.typography},"position is ",e.pos)))}}});
//# sourceMappingURL=0.3ec7fe338246b65df6a1.hot-update.js.map