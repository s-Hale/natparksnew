(this.webpackJsonpnatparksnew=this.webpackJsonpnatparksnew||[]).push([[0],{22:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),o=n.n(c),s=n(10),i=n(2),j=(n(22),n(9)),d=n(1),p=function(e){var t,n=e.options,r=Object(a.useState)(0),c=Object(j.a)(r,2),o=c[0],i=c[1],p=Object(a.useState)([]),u=Object(j.a)(p,2),l=u[0],b=u[1],O=Object(a.useState)(!1),h=Object(j.a)(O,2),m=h[0],k=h[1],x=Object(a.useState)(""),C=Object(j.a)(x,2),f=C[0],v=C[1],g=function(e){i(0),b([]),k(!1),v(e.currentTarget.innerText)};return m&&f&&(t=l.length?Object(d.jsx)("ul",{className:"options",children:l.map((function(e,t){var n;return t===o&&(n="option-active"),Object(d.jsx)(s.b,{to:{pathname:"/park/".concat(e.parkCode)},className:n,onClick:g,children:e.name},e.parkCode)}))}):Object(d.jsx)("div",{className:"no-options",children:Object(d.jsx)("em",{children:"No Option"})})),Object(d.jsxs)("div",{className:"search",children:[Object(d.jsx)("input",{type:"text",className:"search-box",onChange:function(e){var t=e.currentTarget.value,a=n.filter((function(e){return e.name.toLowerCase().indexOf(t.toLowerCase())>-1}));i(0),b(a),k(!0),v(t)},onKeyDown:function(e){if(13===e.keyCode)i(0),k(!1),v(l[o]);else if(38===e.keyCode){if(0===o)return;i(o-1)}else if(40===e.keyCode){if(o-1===l.length)return;i(o+1)}},value:f}),t]})},u=[{name:"Acadia",parkCode:"acad"},{name:"Shenandoah",parkCode:"shen"},{name:"Yosemite",parkCode:"yose"},{name:"Everglades",parkCode:"ever"},{name:"Grand Canyon",parkCode:"grca"},{name:"Yellowstone",parkCode:"yell"},{name:"Joshua Tree",parkCode:"jotr"},{name:"Grand Teton",parkCode:"grte"}],l=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(p,{options:u})})},b=function(){return Object(d.jsx)("div",{children:"i am park page"})},O=function(){return Object(d.jsx)(s.a,{children:Object(d.jsxs)("div",{children:[Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{exact:!0,path:"/",component:l}),Object(d.jsx)(i.a,{path:"/park/:parkCode",component:b})]}),Object(d.jsx)("div",{className:"App"})]})})};o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.cb2646f3.chunk.js.map