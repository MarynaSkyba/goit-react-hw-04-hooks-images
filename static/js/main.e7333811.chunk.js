(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{33:function(n,e,t){},79:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(24),i=t.n(o),c=(t(33),t(6)),s=t.n(c),p=t(15),l=t(7),d=t(8),u=t(9),h=t(11),g=t(10),x=t(25),b=t.n(x),m=(t(55),t(1));function f(){return Object(m.jsx)(b.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})}var j,v,w,O,y,k,S,I,z=t(12),C=t(3),D=t(4),L=D.a.header(j||(j=Object(C.a)(["\ntop: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b3;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),M=D.a.form(v||(v=Object(C.a)(["\ndisplay: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),B=D.a.button(w||(w=Object(C.a)(["  \ndisplay: inline-block;\nwidth: 48px;\nheight: 48px;\nborder: 0;\nbackground-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\nbackground-size: 40%;\nbackground-repeat: no-repeat;\nbackground-position: center;\nopacity: 0.6;\ntransition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\ncursor: pointer;\noutline: none;\n&:hover{\n    opacity: 1;\n}\n"]))),F=D.a.span(O||(O=Object(C.a)(["\nposition: absolute;\nwidth: 1px;\nheight: 1px;\npadding: 0;\noverflow: hidden;\nclip: rect(0, 0, 0, 0);\nwhite-space: nowrap;\nclip-path: inset(50%);\nborder: 0;\n"]))),E=D.a.input(y||(y=Object(C.a)(["\ndisplay: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;}\n"]))),U=function(n){var e=n.onSubmit;return Object(m.jsx)(L,{children:Object(m.jsxs)(M,{onSubmit:function(n){n.preventDefault(),e(n.target.elements.searchImage.value.toLowerCase())},children:[Object(m.jsx)(B,{type:"submit",children:Object(m.jsx)(F,{children:"Search"})}),Object(m.jsx)(E,{type:"text",name:"searchImage",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},K=t(27),A=t.n(K),J=function(){var n=Object(l.a)(s.a.mark((function n(e,t){var a;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=22578117-98ddcf36fbc3d0da8c48aeee6&image_type=photo&orientation=horizontal&per_page=12"));case 2:return a=n.sent,n.abrupt("return",a.data.hits);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),R=D.a.li(k||(k=Object(C.a)(["\nborder-radius: 2px;\nbox-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n  0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),T=D.a.img(S||(S=Object(C.a)(["\nwidth: 100%;\n  height: 260px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover{\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"])));function _(n){var e=n.image,t=n.onClick,a=e.id,r=e.webformatURL,o=e.tags;return Object(m.jsx)(R,{onClick:t,children:Object(m.jsx)(T,{src:r,alt:o})},a)}var q,H,P,W=D.a.ul(I||(I=Object(C.a)(["\ndisplay: grid;\nmax-width: calc(100vw - 48px);\ngrid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\ngrid-gap: 16px;\nmargin-top: 0;\nmargin-bottom: 0;\npadding: 0;\nlist-style: none;\nmargin-left: auto;\nmargin-right: auto;\n"]))),G=function(n){var e=n.images,t=n.onSelect;return Object(m.jsx)(W,{children:e.map((function(n,e){return Object(m.jsx)(_,{image:n,onClick:function(){return t(n)}},e)}))})},N=D.a.button(q||(q=Object(C.a)(["\ndisplay: block;\nmargin-left: auto;\nmargin-right: auto;\nmargin-top: 20px;\nmargin-bottom: 20px;\npadding: 8px 16px;\nborder-radius: 5px;\nbackground-color: #3f51b5;\ntransition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\ntext-align: center;\ncolor: #fff;\nborder: 0;\ntext-decoration: none;\ncursor: pointer;\nfont-family: inherit;\nfont-size: 18px;\nline-height: 24px;\nfont-style: normal;\nfont-weight: 500;\nmin-width: 180px;\nbox-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n  0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  &:hover,\n  &:focus{\n    background-color: #303f9f;\n  }\n"])));function Q(n){var e=n.onClick;return Object(m.jsx)(N,{type:"button",onClick:e,children:"Load more..."})}var V=D.a.div(H||(H=Object(C.a)(["\nposition: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),X=D.a.div(P||(P=Object(C.a)(["\nmax-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),Y=function(n){Object(h.a)(t,n);var e=Object(g.a)(t);function t(){var n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).handleKeyDown=function(e){"Escape"===e.code&&n.props.onSelect()},n.handleBackDrop=function(e){e.currentTarget===e.target&&n.props.onSelect()},n}return Object(u.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var n=this.props,e=n.src,t=n.alt;return Object(m.jsx)(V,{onClick:this.handleBackDrop,children:Object(m.jsx)(X,{children:Object(m.jsx)("img",{src:e,alt:t})})})}}]),t}(a.Component),Z=function(n){Object(h.a)(t,n);var e=Object(g.a)(t);function t(){var n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).state={selectedImage:null,searchImage:null,images:[],page:1,error:null,status:"idle",showModal:!1},n.handleFormSubmit=function(e){n.setState({searchImage:e,page:1,images:[]})},n.handleButtonLoadMore=function(){n.setState((function(n){return{page:n.page+1}}))},n.handleSelectedImage=function(e){n.setState((function(n){return{showModal:!n.showModal,selectedImage:e}}))},n}return Object(u.a)(t,[{key:"componentDidUpdate",value:function(){var n=Object(l.a)(s.a.mark((function n(e,t){var a,r,o,i;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=this.state,r=a.searchImage,o=a.page,t.searchImage===r&&t.page===o){n.next=18;break}return n.prev=2,this.setState({status:"pending"}),n.next=6,J(r,o);case 6:if(i=n.sent,this.setState({status:"resolved"}),""!==r.trim()&&0!==i.length){n.next=10;break}return n.abrupt("return",z.b.error("\u043d\u0435\u0442 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c  ".concat(r)));case 10:this.setState({images:[].concat(Object(p.a)(this.state.images),Object(p.a)(i))}),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),n.next=18;break;case 14:n.prev=14,n.t0=n.catch(2),this.setState({status:"rejected"}),z.b.error("\u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 18:case"end":return n.stop()}}),n,this,[[2,14]])})));return function(e,t){return n.apply(this,arguments)}}()},{key:"render",value:function(){var n=this.state,e=n.images,t=n.status,a=n.showModal,r=n.selectedImage,o=e.length>=1;return Object(m.jsxs)("div",{children:[Object(m.jsx)(U,{onSubmit:this.handleFormSubmit}),"pending"===t&&Object(m.jsx)(f,{}),Object(m.jsx)(G,{images:e,onSelect:this.handleSelectedImage}),o&&Object(m.jsx)(Q,{onClick:this.handleButtonLoadMore}),a&&Object(m.jsx)(Y,{src:r.largeImageURL,alt:r.tags,onSelect:this.handleSelectedImage}),Object(m.jsx)(z.a,{})]})}}]),t}(a.Component);i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(Z,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.e7333811.chunk.js.map