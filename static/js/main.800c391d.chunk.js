(this["webpackJsonpnews-site"]=this["webpackJsonpnews-site"]||[]).push([[0],{11:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(5),a=c.n(r),i=(c(11),c(4)),j=c.n(i),u=c(6),o=c(2),l=c(0),b=function(e){var t=e.object,c=e.query,n=t.author;return n=null===n?c:n,Object(l.jsxs)("div",{className:"NewsComp",children:[Object(l.jsxs)("div",{className:"news-details",children:[Object(l.jsx)("h3",{children:t.title}),Object(l.jsx)("p",{children:t.description}),Object(l.jsx)("a",{href:t.url,target:"_blank",rel:"noreferrer",children:Object(l.jsx)("button",{"data-hover":n,className:"btn",children:Object(l.jsx)("div",{children:"Get News"})})})]}),Object(l.jsx)("div",{className:"product-image",children:Object(l.jsx)("img",{src:t.image,alt:c,className:"src"})})]})},h=function(e){var t=e.data,c=e.query;return Object(l.jsx)("div",{className:"NewsContainer",children:t.map((function(e,t){return Object(l.jsx)(b,{query:c,object:e},t)}))})},d=function(e){var t=e.setSearchQuery,c=Object(n.useState)("google"),s=Object(o.a)(c,2),r=s[0],a=s[1],i=Object(n.useState)("google"),j=Object(o.a)(i,2),u=j[0],b=j[1];return Object(n.useEffect)((function(){t(u)})),Object(l.jsxs)("div",{className:"Header",children:[Object(l.jsx)("h2",{children:"NewsApi"}),Object(l.jsxs)("div",{className:"search",children:[Object(l.jsx)("input",{type:"text",onChange:function(e){return a(e.target.value)}}),Object(l.jsx)("button",{onClick:function(e){b(r)},children:"Search"})]}),Object(l.jsx)("h3",{children:"About"}),Object(l.jsx)("h3",{children:"Contact"}),Object(l.jsx)("h3",{children:"Website"})]})},O=function(e){var t=e.searchQuery,c=e.popular,s=e.setSearchQuery,r=Object(n.useState)(t),a=Object(o.a)(r,2),i=a[0],j=a[1];return Object(n.useEffect)((function(){s(i)})),Object(l.jsxs)("div",{className:"SideContainer",children:[Object(l.jsx)("h2",{children:"Popular"}),c.map((function(e,t){return Object(l.jsx)("a",{href:"#",className:"popularLinks",onClick:function(t){return j(e)},children:Object(l.jsx)("p",{children:e})})}))]})};var p=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(!1),a=Object(o.a)(r,2),i=a[0],b=a[1],p=Object(n.useState)("google"),x=Object(o.a)(p,2),f=x[0],v=x[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(j.a.mark((function e(){var t,c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,fetch("https://api.currentsapi.services/v1/search?keywords=".concat(f,"&language=en&apiKey=JGVX1_3HUNNqK1NUbxqcp0thpYm_CtJnUeqtsDTyYMUf7nah"));case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,n=c.news,s(n),b(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[f]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(d,{setSearchQuery:v}),Object(l.jsxs)("div",{className:"page-body",children:[i?"":Object(l.jsx)(O,{searchQuery:f,setSearchQuery:v,popular:["Google","Tesla","China","Apple","India","United States","Germany"]}),i?Object(l.jsx)("h1",{children:"Loading"}):Object(l.jsx)(h,{data:c,query:f})]})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),x()}},[[14,1,2]]]);
//# sourceMappingURL=main.800c391d.chunk.js.map