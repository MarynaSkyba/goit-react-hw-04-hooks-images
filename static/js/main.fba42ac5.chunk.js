(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{32:function(n,t,e){},78:function(n,t,e){"use strict";e.r(t);var r,a=e(0),i=e.n(a),o=e(23),c=e.n(o),p=(e(32),e(7)),s=e.n(p),u=e(14),d=e(10),l=e(6),b=e(24),x=e.n(b),g=(e(54),e(3)),h=e(4),f=h.a.div(r||(r=Object(g.a)(["\nposition: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n"]))),j=e(1);function m(){return Object(j.jsx)(f,{children:Object(j.jsx)(x.a,{type:"Rings",color:"#00BFFF",height:80,width:80,timeout:3e3})})}var O,v,w,k,y,S,z,C,E=e(11),L=h.a.header(O||(O=Object(g.a)(["\ntop: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b3;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),F=h.a.form(v||(v=Object(g.a)(["\ndisplay: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),I=h.a.button(w||(w=Object(g.a)(["  \ndisplay: inline-block;\nwidth: 48px;\nheight: 48px;\nborder: 0;\nbackground-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\nbackground-size: 40%;\nbackground-repeat: no-repeat;\nbackground-position: center;\nopacity: 0.6;\ntransition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\ncursor: pointer;\noutline: none;\n&:hover{\n    opacity: 1;\n}\n"]))),R=h.a.span(k||(k=Object(g.a)(["\nposition: absolute;\nwidth: 1px;\nheight: 1px;\npadding: 0;\noverflow: hidden;\nclip: rect(0, 0, 0, 0);\nwhite-space: nowrap;\nclip-path: inset(50%);\nborder: 0;\n"]))),B=h.a.input(y||(y=Object(g.a)(["\ndisplay: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;}\n"]))),J=function(n){var t=n.onSubmit;return Object(j.jsx)(L,{children:Object(j.jsxs)(F,{onSubmit:function(n){n.preventDefault(),t(n.target.elements.searchImage.value.toLowerCase())},children:[Object(j.jsx)(I,{type:"submit",children:Object(j.jsx)(R,{children:"Search"})}),Object(j.jsx)(B,{type:"text",name:"searchImage",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},T=e(26),U=e.n(T),_=function(){var n=Object(d.a)(s.a.mark((function n(t,e){var r;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,U.a.get("https://pixabay.com/api/?q=".concat(t,"&page=").concat(e,"&key=22578117-98ddcf36fbc3d0da8c48aeee6&image_type=photo&orientation=horizontal&per_page=12"));case 2:return r=n.sent,n.abrupt("return",r.data.hits);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),q=h.a.li(S||(S=Object(g.a)(["\nborder-radius: 2px;\nbox-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n  0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),D=h.a.img(z||(z=Object(g.a)(["\nwidth: 100%;\n  height: 260px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover{\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"])));function H(n){var t=n.image,e=n.onClick,r=t.webformatURL,a=t.tags;return Object(j.jsx)(q,{onClick:e,children:Object(j.jsx)(D,{src:r,alt:a})})}var M,A,G,K=h.a.ul(C||(C=Object(g.a)(["\ndisplay: grid;\nmax-width: calc(100vw - 48px);\ngrid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\ngrid-gap: 16px;\nmargin-top: 0;\nmargin-bottom: 0;\npadding: 0;\nlist-style: none;\nmargin-left: auto;\nmargin-right: auto;\n"]))),N=function(n){var t=n.images,e=n.onSelect;return Object(j.jsx)(K,{children:t.map((function(n,t){return Object(j.jsx)(H,{image:n,onClick:function(){return e(n)}},t)}))})},P=h.a.button(M||(M=Object(g.a)(["\ndisplay: block;\nmargin-left: auto;\nmargin-right: auto;\nmargin-top: 20px;\nmargin-bottom: 20px;\npadding: 8px 16px;\nborder-radius: 5px;\nbackground-color: #3f51b5;\ntransition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\ntext-align: center;\ncolor: #fff;\nborder: 0;\ntext-decoration: none;\ncursor: pointer;\nfont-family: inherit;\nfont-size: 18px;\nline-height: 24px;\nfont-style: normal;\nfont-weight: 500;\nmin-width: 180px;\nbox-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n  0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  &:hover,\n  &:focus{\n    background-color: #303f9f;\n  }\n"])));function Q(n){var t=n.onClick;return Object(j.jsx)(P,{type:"button",onClick:t,children:"Load more..."})}var V=h.a.div(A||(A=Object(g.a)(["\nposition: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),W=h.a.div(G||(G=Object(g.a)(["\nmax-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"])));function X(n){var t=n.src,e=n.alt,r=n.onSelect;Object(a.useEffect)((function(){return window.addEventListener("keydown",i),function(){window.removeEventListener("keydown",i)}}));var i=function(n){"Escape"===n.code&&r()};return Object(j.jsx)(V,{onClick:function(n){n.currentTarget===n.target&&r()},children:Object(j.jsx)(W,{children:Object(j.jsx)("img",{src:t,alt:e})})})}function Y(){var n=Object(a.useState)(null),t=Object(l.a)(n,2),e=t[0],r=t[1],i=Object(a.useState)(null),o=Object(l.a)(i,2),c=o[0],p=o[1],b=Object(a.useState)([]),x=Object(l.a)(b,2),g=x[0],h=x[1],f=Object(a.useState)(1),O=Object(l.a)(f,2),v=O[0],w=O[1],k=Object(a.useState)("idle"),y=Object(l.a)(k,2),S=y[0],z=y[1],C=Object(a.useState)(!1),L=Object(l.a)(C,2),F=L[0],I=L[1];Object(a.useEffect)((function(){function n(){return(n=Object(d.a)(s.a.mark((function n(){var t;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,_(c,v);case 3:if(t=n.sent,""!==c.trim()&&0!==t.length){n.next=6;break}return n.abrupt("return",E.b.error("\u043d\u0435\u0442 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c  ".concat(c)));case 6:h((function(n){return[].concat(Object(u.a)(n),Object(u.a)(t))})),z("resolved"),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),z("rejected"),E.b.error("\u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 15:case"end":return n.stop()}}),n,null,[[0,11]])})))).apply(this,arguments)}c&&(z("pending"),function(){n.apply(this,arguments)}())}),[v,c]);var R=function(n){I(!F),r(n)},B=g.length>=12;return Object(j.jsxs)("div",{children:[Object(j.jsx)(J,{onSubmit:function(n){w(1),h([]),p(n)}}),"pending"===S&&Object(j.jsx)(m,{}),Object(j.jsx)(N,{images:g,onSelect:R}),B&&Object(j.jsx)(Q,{onClick:function(){w((function(n){return n+1}))}}),F&&Object(j.jsx)(X,{src:e.largeImageURL,alt:e.tags,onSelect:R}),Object(j.jsx)(E.a,{})]})}c.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(Y,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.fba42ac5.chunk.js.map