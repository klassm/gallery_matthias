(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){},201:function(e,t,a){},205:function(e,t,a){"use strict";a.r(t);var n=a(24),r=a.n(n),c=a(82),i=a(0),o=a.n(i),l=a(28),s=a.n(l),u=(a(104),a(17)),m=a(18),h=a(21),d=a(19),p=a(22),b=a(32),v=a(41),f=a(30),E=a(207),g=a(36),O=(a(109),a(84)),j=a.n(O);var k=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"getPhotos",value:function(){var e=this.props.images||{};return function(e){for(var t=Object(g.a)(e),a=t.length-1;a>0;a--){var n=Math.floor(Math.random()*(a+1)),r=[t[n],t[a]];t[a]=r[0],t[n]=r[1]}return t}(Object.values(e).map(function(e){return e.slice(e.length-4,e.length)}).reduce(function(e,t){return[].concat(Object(g.a)(e),Object(g.a)(t))},[]).map(function(e){return{original:e.path,thumbnail:e.thumbnailPath}}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"home"},o.a.createElement(j.a,{items:this.getPhotos(),autoPlay:!0}))}}]),t}(i.Component);var y=Object(b.b)(function(e){return{images:e.images||{}}})(k),w=a(85),A=a.n(w),I=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"getPhotos",value:function(){return this.props.images[this.props.albumId]||[]}},{key:"getThumbnailWidthAndHeight",value:function(e){var t=e.height,a=e.width,n=t>a?212/t:320/a;return{width:Math.floor(a*n),height:Math.floor(t*n)}}},{key:"render",value:function(){var e=this,t=this.getPhotos().reverse().map(function(t){var a=e.getThumbnailWidthAndHeight(t),n=a.width,r=a.height;return{src:t.path,thumbnail:t.thumbnailPath,thumbnailWidth:n,thumbnailHeight:r}});return 0===t.length?"<p>not found</p>":o.a.createElement(A.a,{images:t,enableImageSelection:!1})}}]),t}(i.Component);var x=Object(b.b)(function(e){return{images:e.images||{}}})(I),N=function(){return o.a.createElement("div",null,o.a.createElement(x,{albumId:"Landscape"}))},L=function(){return o.a.createElement("div",null,o.a.createElement(x,{albumId:"Macro"}))},_=a(209),M=a(208),C=a(52),P=a(87),S=a.n(P),G=[{title:"Landscape",link:"/landscape"},{title:"Macro",link:"/macro"},{title:"Nature",link:"/nature"}],T=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={navExpanded:!1},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"setNavExpanded",value:function(e){this.setState({navExpanded:e})}},{key:"closeNav",value:function(){this.setState({navExpanded:!1})}},{key:"render",value:function(){var e=this,t=G.map(function(t){var a=t.title,n=t.link;return o.a.createElement(C.LinkContainer,{to:n,key:n,onSelect:e.closeNav.bind(e)},o.a.createElement(S.a,null,a))});return o.a.createElement(_.a,{className:"navbar navbar-dark bg-dark",expand:"lg",onToggle:this.setNavExpanded.bind(this),expanded:this.state.navExpanded},o.a.createElement(C.LinkContainer,{to:"/",onClick:this.closeNav.bind(this)},o.a.createElement(_.a.Brand,null,"Gallery")),o.a.createElement(_.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),o.a.createElement(_.a.Collapse,{id:"responsive-navbar-nav"},o.a.createElement(M.a,{className:"mr-auto"},t)))}}]),t}(i.Component),D=a(15);var W={LOAD_IMAGES:"LOAD_IMAGES",INITIAL_PAGE_LOAD:"INITIAL_PAGE_LOAD"};var B=Object(D.c)({images:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;return a!==W.LOAD_IMAGES+"_SUCCESS"?e:n.data}}),H=a(93),J=a.n(H),K=a(11),R=a(96),U=a(210),q=a(94),$=a(44),z=a(54),F=r.a.mark(V),Q=r.a.mark(X);function V(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.b)({type:W.LOAD_IMAGES,payload:{request:{method:"get",url:"/config.json"}}});case 2:case"end":return e.stop()}},F)}function X(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.a)([Object(z.b)(W.INITIAL_PAGE_LOAD,V)]);case 2:case"end":return e.stop()}},Q)}var Y={default:{client:J.a.create({baseURL:"/",responseType:"json",timeout:2e4})}},Z=Object(K.a)({basename:"/gallery"}),ee=Object(R.a)(),te=[Object(q.multiClientMiddleware)(Y),ee,Object(U.a)(Z)],ae=Object(D.e)(B,D.a.apply(void 0,te));ee.run(X);var ne=ae,re=(a(201),a(95)),ce=a(37);function ie(e){return o.a.createElement("a",{className:"footerIcon",href:e.link,target:"_blank",rel:"noopener noreferrer"},o.a.createElement(re.a,{icon:e.icon}))}function oe(){return o.a.createElement("div",{className:"footer"},o.a.createElement("div",null,o.a.createElement(ie,{icon:ce.a,link:"https://500px.com/Klassm"}),o.a.createElement(ie,{icon:ce.c,link:"http://instagram.com/klassm"}),o.a.createElement(ie,{icon:ce.d,link:"https://twitter.com/klassm"}),o.a.createElement(ie,{icon:ce.b,link:"https://github.com/klassm"})),o.a.createElement("div",{className:"author"},"Matthias Kla\xdf \u25e6 photos.klass.li"))}var le=function(){return o.a.createElement("div",null,o.a.createElement(x,{albumId:"Nature"}))},se=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement(b.a,{store:ne},o.a.createElement("div",{className:"App"},o.a.createElement("div",null,o.a.createElement(v.BrowserRouter,null,o.a.createElement("div",null,o.a.createElement(T,null),o.a.createElement(E.a,{style:{padding:"10px",maxWidth:"1200px"}},o.a.createElement(f.d,{exact:!0,path:"/",component:y}),o.a.createElement(f.d,{path:"/macro",component:L}),o.a.createElement(f.d,{path:"/landscape",component:N}),o.a.createElement(f.d,{path:"/nature",component:le}))),o.a.createElement(oe,null)))))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(204);Object(c.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=W.INITIAL_PAGE_LOAD,ne.dispatch({type:t}),s.a.render(o.a.createElement(se,null),document.getElementById("root"));case 3:case"end":return e.stop()}},e)}))(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},98:function(e,t,a){e.exports=a(205)}},[[98,1,2]]]);
//# sourceMappingURL=main.ebcc728d.chunk.js.map