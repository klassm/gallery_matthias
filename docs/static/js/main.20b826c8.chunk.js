(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,a){},183:function(e,t,a){},187:function(e,t,a){"use strict";a.r(t);var n=a(23),r=a.n(n),c=a(79),l=a(0),i=a.n(l),o=a(13),s=a.n(o),u=(a(100),a(18)),m=a(19),h=a(22),p=a(21),d=a(29),v=a(36),b=a(7),E=a(190),f=a(31),g=(a(106),a(82)),O=a.n(g);var k=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"getPhotos",value:function(){var e=this.props.images||{};return function(e){for(var t=Object(f.a)(e),a=t.length-1;a>0;a--){var n=Math.floor(Math.random()*(a+1)),r=[t[n],t[a]];t[a]=r[0],t[n]=r[1]}return t}(Object.values(e).map((function(e){return e.slice(e.length-4,e.length)})).reduce((function(e,t){return[].concat(Object(f.a)(e),Object(f.a)(t))}),[]).map((function(e){return{original:e.path,thumbnail:e.thumbnailPath}})))}},{key:"render",value:function(){return i.a.createElement("div",{className:"home"},i.a.createElement(O.a,{items:this.getPhotos(),autoPlay:!0}))}}]),a}(l.Component);var j=Object(d.b)((function(e){return{images:e.images||{}}}))(k),y=a(83),A=a.n(y),I=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"getPhotos",value:function(){return this.props.images[this.props.albumId]||[]}},{key:"getThumbnailWidthAndHeight",value:function(e){var t=e.height,a=e.width,n=t>a?212/t:320/a;return{width:Math.floor(a*n),height:Math.floor(t*n)}}},{key:"render",value:function(){var e=this,t=this.getPhotos().reverse().map((function(t){var a=e.getThumbnailWidthAndHeight(t),n=a.width,r=a.height;return{src:t.path,thumbnail:t.thumbnailPath,thumbnailWidth:n,thumbnailHeight:r}}));return 0===t.length?"<p>not found</p>":i.a.createElement(A.a,{images:t,enableImageSelection:!1})}}]),a}(l.Component);var w=Object(d.b)((function(e){return{images:e.images||{}}}))(I),x=function(){return i.a.createElement("div",null,i.a.createElement(w,{albumId:"Landscape"}))},L=function(){return i.a.createElement("div",null,i.a.createElement(w,{albumId:"Macro"}))},N=a(191),_=a(192),C=a(48),P=a(41),M=[{title:"Landscape",link:"/landscape"},{title:"Macro",link:"/macro"},{title:"Animals",link:"/animals"},{title:"City",link:"/city"},{title:"Plants",link:"/plants"}],S=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={navExpanded:!1},n}return Object(m.a)(a,[{key:"setNavExpanded",value:function(e){this.setState({navExpanded:e})}},{key:"closeNav",value:function(){this.setState({navExpanded:!1})}},{key:"render",value:function(){var e=this,t=M.map((function(t){var a=t.title,n=t.link;return i.a.createElement(C.LinkContainer,{to:n,key:n,onSelect:e.closeNav.bind(e)},i.a.createElement(P.a,null,a))}));return i.a.createElement(N.a,{className:"navbar navbar-dark bg-dark",expand:"lg",onToggle:this.setNavExpanded.bind(this),expanded:this.state.navExpanded},i.a.createElement(C.LinkContainer,{to:"/",onClick:this.closeNav.bind(this)},i.a.createElement(N.a.Brand,null,"Gallery")),i.a.createElement(N.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),i.a.createElement(N.a.Collapse,{id:"responsive-navbar-nav"},i.a.createElement(_.a,{className:"mr-auto"},t)))}}]),a}(l.Component),G=a(16);var T={LOAD_IMAGES:"LOAD_IMAGES",INITIAL_PAGE_LOAD:"INITIAL_PAGE_LOAD"};var D=Object(G.c)({images:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;return a!==T.LOAD_IMAGES+"_SUCCESS"?e:n.data}}),W=a(89),B=a.n(W),H=a(10),J=a(92),K=a(193),R=a(90),U=a(38),q=a(52),$=r.a.mark(F),z=r.a.mark(Q);function F(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.b)({type:T.LOAD_IMAGES,payload:{request:{method:"get",url:"/config.json"}}});case 2:case"end":return e.stop()}}),$)}function Q(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.a)([Object(q.b)(T.INITIAL_PAGE_LOAD,F)]);case 2:case"end":return e.stop()}}),z)}var V={default:{client:B.a.create({baseURL:"/",responseType:"json",timeout:2e4})}},X=Object(H.a)({basename:"/gallery"}),Y=Object(J.a)(),Z=[Object(R.multiClientMiddleware)(V),Y,Object(K.a)(X)],ee=Object(G.e)(D,G.a.apply(void 0,Z));Y.run(Q);var te=ee,ae=(a(183),a(91)),ne=a(33);function re(e){return i.a.createElement("a",{className:"footerIcon",href:e.link,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(ae.a,{icon:e.icon}))}function ce(){return i.a.createElement("div",{className:"footer"},i.a.createElement("div",null,i.a.createElement(re,{icon:ne.a,link:"https://500px.com/Klassm"}),i.a.createElement(re,{icon:ne.c,link:"http://instagram.com/klassm"}),i.a.createElement(re,{icon:ne.d,link:"https://twitter.com/klassm"}),i.a.createElement(re,{icon:ne.b,link:"https://github.com/klassm"})),i.a.createElement("div",{className:"author"},"Matthias Kla\xdf \u25e6 photos.klass.li"))}var le=function(){return i.a.createElement("div",null,i.a.createElement(w,{albumId:"City"}))},ie=function(){return i.a.createElement("div",null,i.a.createElement(w,{albumId:"Plants"}))},oe=function(){return i.a.createElement("div",null,i.a.createElement(w,{albumId:"Animals"}))},se=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement(d.a,{store:te},i.a.createElement("div",{className:"App"},i.a.createElement("div",null,i.a.createElement(v.BrowserRouter,null,i.a.createElement("div",null,i.a.createElement(S,null),i.a.createElement(E.a,{style:{padding:"10px",maxWidth:"1200px"}},i.a.createElement(b.d,{exact:!0,path:"/",component:j}),i.a.createElement(b.d,{path:"/macro",component:L}),i.a.createElement(b.d,{path:"/landscape",component:x}),i.a.createElement(b.d,{path:"/animals",component:oe}),i.a.createElement(b.d,{path:"/city",component:le}),i.a.createElement(b.d,{path:"/plants",component:ie}))),i.a.createElement(ce,null)))))}}]),a}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(186);Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=T.INITIAL_PAGE_LOAD,te.dispatch({type:t}),s.a.render(i.a.createElement(se,null),document.getElementById("root"));case 3:case"end":return e.stop()}}),e)})))(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},94:function(e,t,a){e.exports=a(187)}},[[94,1,2]]]);
//# sourceMappingURL=main.20b826c8.chunk.js.map