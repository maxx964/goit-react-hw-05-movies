"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[786],{969:function(e,t,r){r.d(t,{Z:function(){return i}});r(791);var s=r(87),a={movieList:"MoviesList_movieList__ajAf9",movieItem:"MoviesList_movieItem__Xb1p8",moviePoster:"MoviesList_moviePoster__R0IFr",movieTitle:"MoviesList_movieTitle__3BJ-O"},n=r(184),i=function(e){var t=e.movies,r=e.basePath;return(0,n.jsx)("ul",{className:a.movieList,children:t.map((function(e){return(0,n.jsx)("li",{className:a.movieItem,children:(0,n.jsxs)(s.rU,{to:"".concat(r,"/").concat(e.id),className:a.movieLink,children:[(0,n.jsx)("div",{className:a.moviePoster,children:(0,n.jsx)("img",{src:e.poster_path?"https://image.tmdb.org/t/p/w154".concat(e.poster_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:e.title})}),(0,n.jsx)("p",{className:a.movieTitle,children:e.title})]})},e.id)}))})}},786:function(e,t,r){r.r(t),r.d(t,{default:function(){return S}});var s=r(861),a=r(671),n=r(144),i=r(136),o=r(104),c=r(757),l=r.n(c),h=r(791),m=r(969),u=r(692),v={searchContainer:"SearchForm_searchContainer__oS+YP"},p=r(184),d=function(e){(0,i.Z)(r,e);var t=(0,o.Z)(r);function r(){var e;(0,a.Z)(this,r);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={query:""},e.handleSearchChange=function(t){e.setState({query:t.target.value})},e.handleSearchSubmit=function(t){t.preventDefault();var r=e.state.query;e.props.onSearch(r)},e}return(0,n.Z)(r,[{key:"render",value:function(){return(0,p.jsx)("div",{className:v.movies,children:(0,p.jsxs)("form",{className:v.searchContainer,onSubmit:this.handleSearchSubmit,children:[(0,p.jsx)("input",{type:"text",placeholder:"Search for movies...",value:this.state.query,onChange:this.handleSearchChange}),(0,p.jsx)("button",{type:"submit",children:(0,p.jsx)(u.wTD,{size:36,style:{color:"white"}})})]})})}}]),r}(h.Component),f=d,x={movies:"Movies_movies__I+WGX"},_=function(e){(0,i.Z)(r,e);var t=(0,o.Z)(r);function r(){var e;(0,a.Z)(this,r);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={movies:[]},e.defaultImg="https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",e.handleSearch=function(){var t=(0,s.Z)(l().mark((function t(r){var s,a,n;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.themoviedb.org/3/search/movie?api_key=9a4b9e4760b7564e10a80d0c72f50665&query=".concat(r));case 3:if((s=t.sent).ok){t.next=6;break}throw new Error("Network response was not ok");case 6:return t.next=8,s.json();case 8:a=t.sent,n=a.results,localStorage.setItem("searchedMovies",JSON.stringify(n)),e.setState({movies:n}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.error("Error fetching search results:",t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}(),e}return(0,n.Z)(r,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("searchedMovies");e&&this.setState({movies:JSON.parse(e)})}},{key:"render",value:function(){return(0,p.jsxs)("div",{className:x.movies,children:[(0,p.jsx)("h1",{children:"Popular Movies"}),(0,p.jsx)("div",{className:x.searchContainer,children:(0,p.jsx)(f,{onSearch:this.handleSearch})}),(0,p.jsx)(m.Z,{movies:this.state.movies,basePath:"/movies"})]})}}]),r}(h.Component),S=_}}]);
//# sourceMappingURL=786.94c391ea.chunk.js.map