"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[785],{785:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(861),o=n(439),i=n(757),c=n.n(i),a=n(791),s={home:"Home_home__ymPq-",container:"Home_container__3pR7L",title:"Home_title__Bfc6A",list:"Home_list__7yUoi",item:"Home_item__Nns9a",link:"Home_link__89GqQ"},u=n(87),l=n(184),m=function(){var e=(0,a.useState)([]),t=(0,o.Z)(e,2),n=t[0],i=t[1];return(0,a.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=9a4b9e4760b7564e10a80d0c72f50665");case 3:if((t=e.sent).ok){e.next=6;break}throw Error("Network response was not ok");case 6:return e.next=8,t.json();case 8:n=e.sent,i(n.results),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,l.jsxs)("div",{className:s.home,children:[(0,l.jsx)("h2",{children:"Trending today"}),(0,l.jsx)("ul",{className:s.movieList,children:n.map((function(e){return(0,l.jsx)("li",{className:s.movieItem,children:(0,l.jsx)(u.rU,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})}},861:function(e,t,n){function r(e,t,n,r,o,i,c){try{var a=e[i](c),s=a.value}catch(u){return void n(u)}a.done?t(s):Promise.resolve(s).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var c=e.apply(t,n);function a(e){r(c,o,i,a,s,"next",e)}function s(e){r(c,o,i,a,s,"throw",e)}a(void 0)}))}}n.d(t,{Z:function(){return o}})}}]);
//# sourceMappingURL=785.0aecbf56.chunk.js.map