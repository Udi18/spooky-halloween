(this["webpackJsonpspooky-halloween"]=this["webpackJsonpspooky-halloween"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),o=n.n(c),l=(n(12),n(13),function(){return r.a.createElement("div",{className:"Home"},r.a.createElement("span",null,"Hello, this application is intended to be a fun way to practice your React and TypeScript coding while celebrating Hacktoberfest 2020!"),r.a.createElement("br",null),r.a.createElement("span",null,"Feel free to fork this repository, make some changes, and submit a pull request!"),r.a.createElement("br",null),r.a.createElement("span",null,"Please avoid purposeless pull requests. Thank you"))}),i=n(6),u=n(3),s={currentPage:"Home"},d=function(e,t){switch(t.type){case"SET_CURRENT_PAGE":return Object(u.a)(Object(u.a)({},e),{},{currentPage:t.payload})}},m=Object(a.createContext)(s),p=Object(a.createContext)((function(){})),v=function(e){var t=e.children,n=Object(a.useReducer)(d,s),c=Object(i.a)(n,2),o=c[0],l=c[1];return r.a.createElement(p.Provider,{value:l},r.a.createElement(m.Provider,{value:o},t))},f=(n(14),["Home","Scare Me!"]),h=function(){var e=Object(a.useContext)(p);return r.a.createElement("div",{className:"Navigation"},f.map((function(t){return r.a.createElement("div",{className:"Navigation-Option",key:t,onClick:function(n){return function(t,n){e({type:"SET_CURRENT_PAGE",payload:n})}(0,t)}},t)})))},E=n(1),g=n.n(E),w=n(2),y=(n(16),function(){var e=Object(w.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),b=function(){var e=Object(w.a)(g.a.mark((function e(){var t,n,a,r,c,o,l,i,u,s,d,m;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y("https://www.reddit.com/r/techsupportgore/random.json");case 2:l=e.sent,console.log("randomRedditPost: ",l),console.log("randomRedditPost?.[0]?.children?.[0]: ",!!(null===l||void 0===l||null===(t=l[0])||void 0===t||null===(n=t.data)||void 0===n||null===(a=n.children)||void 0===a?void 0:a[0])),!(null===l||void 0===l||null===(r=l[0])||void 0===r||null===(c=r.data)||void 0===c||null===(o=c.children)||void 0===o?void 0:o[0])||l[0].data.children[0].data.gallery_data&&l[0].data.children[0].data.gallery_data.items[0].media_id?(i=l[0].data.children[0].data,u=i.gallery_data.items[0].media_id,s=document.createElement("img"),(d=document.createElement("span")).innerHTML="Click the image to get another random spook!",s.setAttribute("src",i.media_metadata[u].s.u.split("amp;").join("")),s.onclick=function(){b()},(m=document.querySelector(".Scare-Me"))&&(m.innerHTML="",m.appendChild(s),m.appendChild(d))):b();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){return Object(a.useEffect)((function(){b()}),[]),r.a.createElement("div",{className:"Scare-Me"})};function j(){var e,t=(e="currentPage",Object(a.useContext)(m)[e]),n=function(){switch(t){case"Home":return r.a.createElement(l,null);case"Scare Me!":return r.a.createElement(k,null);default:return null}};return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-Title"},"Happy Halloween!"),r.a.createElement("div",{className:"App-Navigation"},r.a.createElement(h,null)),r.a.createElement("div",{className:"App-Body"},r.a.createElement(n,null)))}var N=function(){return r.a.createElement(v,null,r.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.76180d44.chunk.js.map