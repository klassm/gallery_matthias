(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,a){},183:function(e,t,a){},187:function(e,t,a){"use strict";a.r(t);var n=a(23),r=a.n(n),c=a(79),i=a(0),l=a.n(i),o=a(13),u=a.n(o),s=(a(100),a(18)),m=a(19),h=a(22),p=a(21),d=a(29),v=a(36),b=a(7),E=a(190),f=a(31),g=(a(106),a(82)),O=a.n(g);var k=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"getPhotos",value:function(){var e=this.props.images||{};return function(e){for(var t=Object(f.a)(e),a=t.length-1;a>0;a--){var n=Math.floor(Math.random()*(a+1)),r=[t[n],t[a]];t[a]=r[0],t[n]=r[1]}return t}(Object.values(e).map((function(e){return e.slice(e.length-4,e.length)})).reduce((function(e,t){return[].concat(Object(f.a)(e),Object(f.a)(t))}),[]).map((function(e){return{original:e.path,thumbnail:e.thumbnailPath}})))}},{key:"render",value:function(){return l.a.createElement("div",{className:"home"},l.a.createElement(O.a,{items:this.getPhotos(),autoPlay:!0}))}}]),a}(i.Component);var j=Object(d.b)((function(e){return{images:e.images||{}}}))(k),y=a(83),A=a.n(y),I=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"getPhotos",value:function(){return this.props.images[this.props.albumId]||[]}},{key:"getThumbnailWidthAndHeight",value:function(e){var t=e.height,a=e.width,n=t>a?212/t:320/a;return{width:Math.floor(a*n),height:Math.floor(t*n)}}},{key:"render",value:function(){var e=this,t=this.getPhotos().reverse().map((function(t){var a=e.getThumbnailWidthAndHeight(t),n=a.width,r=a.height;return{src:t.path,thumbnail:t.thumbnailPath,thumbnailWidth:n,thumbnailHeight:r}}));return 0===t.length?"<p>not found</p>":l.a.createElement(A.a,{images:t,enableImageSelection:!1})}}]),a}(i.Component);var w=Object(d.b)((function(e){return{images:e.images||{}}}))(I),x=function(){return l.a.createElement("div",null,l.a.createElement(w,{albumId:"Landscape"}))},L=function(){return l.a.createElement("div",null,l.a.createElement(w,{albumId:"Macro"}))},N=a(191),C=a(192),_=a(48),M=a(41),P=[{title:"Landscape",link:"/landscape"},{title:"Macro",link:"/macro"},{title:"Nature",link:"/nature"},{title:"Animals",link:"/animals"},{title:"City",link:"/city"},{title:"Plants",link:"/plants"}],S=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={navExpanded:!1},n}return Object(m.a)(a,[{key:"setNavExpanded",value:function(e){this.setState({navExpanded:e})}},{key:"closeNav",value:function(){this.setState({navExpanded:!1})}},{key:"render",value:function(){var e=this,t=P.map((function(t){var a=t.title,n=t.link;return l.a.createElement(_.LinkContainer,{to:n,key:n,onSelect:e.closeNav.bind(e)},l.a.createElement(M.a,null,a))}));return l.a.createElement(N.a,{className:"navbar navbar-dark bg-dark",expand:"lg",onToggle:this.setNavExpanded.bind(this),expanded:this.state.navExpanded},l.a.createElement(_.LinkContainer,{to:"/",onClick:this.closeNav.bind(this)},l.a.createElement(N.a.Brand,null,"Gallery")),l.a.createElement(N.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(N.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(C.a,{className:"mr-auto"},t)))}}]),a}(i.Component),G=a(16);var T={LOAD_IMAGES:"LOAD_IMAGES",INITIAL_PAGE_LOAD:"INITIAL_PAGE_LOAD"};var D=Object(G.c)({images:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;return a!==T.LOAD_IMAGES+"_SUCCESS"?e:n.data}}),W=a(89),B=a.n(W),H=a(10),J=a(92),K=a(193),R=a(90),U=a(38),q=a(52),$=r.a.mark(F),z=r.a.mark(Q);function F(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.b)({type:T.LOAD_IMAGES,payload:{request:{method:"get",url:"/config.json"}}});case 2:case"end":return e.stop()}}),$)}function Q(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.a)([Object(q.b)(T.INITIAL_PAGE_LOAD,F)]);case 2:case"end":return e.stop()}}),z)}var V={default:{client:B.a.create({baseURL:"/",responseType:"json",timeout:2e4})}},X=Object(H.a)({basename:"/gallery"}),Y=Object(J.a)(),Z=[Object(R.multiClientMiddleware)(V),Y,Object(K.a)(X)],ee=Object(G.e)(D,G.a.apply(void 0,Z));Y.run(Q);var te=ee,ae=(a(183),a(91)),ne=a(33);function re(e){return l.a.createElement("a",{className:"footerIcon",href:e.link,target:"_blank",rel:"noopener noreferrer"},l.a.createElement(ae.a,{icon:e.icon}))}function ce(){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",null,l.a.createElement(re,{icon:ne.a,link:"https://500px.com/Klassm"}),l.a.createElement(re,{icon:ne.c,link:"http://instagram.com/klassm"}),l.a.createElement(re,{icon:ne.d,link:"https://twitter.com/klassm"}),l.a.createElement(re,{icon:ne.b,link:"https://github.com/klassm"})),l.a.createElement("div",{className:"author"},"Matthias Kla\xdf \u25e6 photos.klass.li"))}var ie=function(){return l.a.createElement("div",null,l.a.createElement(w,{albumId:"Animals"}))},le=function(){return l.a.createElement("div",null,l.a.createElement(w,{albumId:"City"}))},oe=function(){return l.a.createElement("div",null,l.a.createElement(w,{albumId:"City"}))},ue=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(d.a,{store:te},l.a.createElement("div",{className:"App"},l.a.createElement("div",null,l.a.createElement(v.BrowserRouter,null,l.a.createElement("div",null,l.a.createElement(S,null),l.a.createElement(E.a,{style:{padding:"10px",maxWidth:"1200px"}},l.a.createElement(b.d,{exact:!0,path:"/",component:j}),l.a.createElement(b.d,{path:"/macro",component:L}),l.a.createElement(b.d,{path:"/landscape",component:x}),l.a.createElement(b.d,{path:"/nature",component:ie}),l.a.createElement(b.d,{path:"/city",component:le}),l.a.createElement(b.d,{path:"/plants",component:oe}))),l.a.createElement(ce,null)))))}}]),a}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(186);Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=T.INITIAL_PAGE_LOAD,te.dispatch({type:t}),u.a.render(l.a.createElement(ue,null),document.getElementById("root"));case 3:case"end":return e.stop()}}),e)})))(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},94:function(e,t,a){e.exports=a(187)}},[[94,1,2]]]);
//# sourceMappingURL=main.0c2a6fa5.chunk.js.map