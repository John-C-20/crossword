(this.webpackJsonpcrossword=this.webpackJsonpcrossword||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(4),l=c.n(a),j=(c(9),c.p,c(2)),r=c(0);function i(e){var t=Object(n.useState)(e.cell.x),c=Object(j.a)(t,2),s=(c[0],c[1],Object(n.useState)(e.cell.y)),a=Object(j.a)(s,2),l=(a[0],a[1],Object(n.useState)(e.cell.solution)),i=Object(j.a)(l,2),o=i[0],u=(i[1],Object(n.useState)(e.cell.number)),b=Object(j.a)(u,2),O=b[0],d=(b[1],Object(n.useState)(e.cell.type)),h=Object(j.a)(d,2);h[0],h[1];return o?Object(r.jsxs)("div",{className:"cell",children:[Object(r.jsx)("div",{className:"cell-number",children:O}),Object(r.jsx)("div",{className:"cell-letter",children:o})]}):Object(r.jsx)("div",{className:"cell-black"})}function o(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=(t[0],t[1],Object(n.useState)(!1)),s=Object(j.a)(c,2),a=(s[0],s[1],Object(n.useState)({cells:[]})),l=Object(j.a)(a,2),o=l[0],u=l[1];return Object(n.useEffect)((function(){fetch("crossword-puzzle.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){return u(e)}))}),[]),Object(r.jsx)("div",{className:"game-container",children:Object(r.jsx)("div",{className:"grid",children:o.cells.map((function(e){return Object(r.jsx)(i,{cell:e})}))})})}c(11);var u=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)("header",{className:"App-header",children:Object(r.jsx)(o,{})})})},b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,l=t.getTTFB;c(e),n(e),s(e),a(e),l(e)}))};l.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(u,{})}),document.getElementById("root")),b()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.abfe88f7.chunk.js.map