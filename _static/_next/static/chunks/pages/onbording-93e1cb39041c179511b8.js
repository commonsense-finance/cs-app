(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[33],{9965:function(e,n,s){"use strict";s.r(n),s.d(n,{Index:function(){return A},default:function(){return M}});var r=s(5893),c=s(2227),t=s(8863),i=s(682),l=s(9704),a=s(6265),o=(s(809),s(1664)),d=s(5955),u=s(3974),x=s(7495),j=s(452),h=s(1828),m=s(7294),f=s(1967),v=s(4051),p=s(1555),b=s(4716),N=s(7515),g=s(6827),Z=s(2307),C=s(6532),y=s(5937);function O(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,r)}return s}var k=function(){var e=(0,l.v9)(c.KJ),n=(0,x.K)(),s=n.account,t=n.error,i=n.deactivate,a=(0,l.I0)(),o=(0,m.useState)(!1),j=o[0],h=o[1],f=(0,m.useState)(""),v=(f[0],f[1]);return(0,m.useEffect)((function(){t&&v(t.message)}),[t]),(0,m.useEffect)((function(){s?e.isLogin?"Not Connected"===e.merge_fields.STATUS&&a((0,N.mw)(s)):(a((0,N.hv)(s)),a((0,N.Tf)("Connected")),a((0,N.tV)(s||""))):e.isLogin||(a((0,N.hv)("")),a((0,N.Tf)("Not Connected")))}),[s]),(0,r.jsxs)(r.Fragment,{children:[s?(0,r.jsx)(d.zx,{className:"me-2",onClick:i,children:"Disconnect"}):(0,r.jsx)(d.zx,{className:"me-2",onClick:function(){return h(!0)},children:"Connect Wallet"}),(0,r.jsx)(u.xY,{showModal:j,handleClose:function(){return h(!1)}})]})},w=function(){var e,n=(0,l.v9)(c.KJ),s=(0,l.I0)();return(0,r.jsxs)(f.Z,{children:[(0,r.jsxs)(v.Z,{className:"pb-3",children:[(0,r.jsx)(p.Z,{sm:5,children:(0,r.jsx)(f.Z.Control,{value:null===(e=n.merge_fields)||void 0===e?void 0:e.FNAME,onChange:function(e){s((0,N.qC)(e.currentTarget.value))},placeholder:"Your Name"})}),(0,r.jsx)(p.Z,{sm:7,children:(0,r.jsx)(b.Z,{value:n.email,onChange:function(e){s((0,N.vV)(e.currentTarget.value))},placeholder:"Your Email"})})]}),(0,r.jsxs)(v.Z,{children:[(0,r.jsx)(p.Z,{children:(0,r.jsx)(k,{})}),(0,r.jsxs)(p.Z,{className:"text-end",children:[(0,r.jsx)(d.zx,{className:"me-2",onClick:function(){s((0,N.sy)()),s((0,N.yq)("Saved"))},children:"Save"}),(0,r.jsx)(d.zx,{onClick:function(){s((0,N.yq)("Saved"))},children:"Cancel"})]})]})]})},_=function(){var e=(0,l.v9)(c.KJ),n=(0,l.I0)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(f.Z,{children:(0,r.jsxs)(v.Z,{children:[(0,r.jsx)(p.Z,{children:(0,r.jsx)(b.Z,{value:e.email,onChange:function(e){n((0,N.vV)(e.currentTarget.value))},placeholder:"Your Email"})}),(0,r.jsxs)(p.Z,{xs:"auto",children:[(0,r.jsx)(d.zx,{className:"me-2",onClick:function(){n((0,N.A1)(e.email))},children:"Log In"}),(0,r.jsx)(k,{})]})]})})})},T=function(){var e=(0,l.v9)(t.Pu),n=(0,l.v9)(c.KJ),s=(0,l.I0)();return(0,r.jsxs)("div",{className:"pb-5",children:[(0,r.jsxs)(v.Z,{children:[(0,r.jsx)(p.Z,{children:(0,r.jsx)("h2",{children:"1. Log In "})}),(0,r.jsx)(p.Z,{className:"text-end",children:"add"!==n.action&&(0,r.jsx)(d.zx,{variant:"link",className:"text-".concat(e.textMode," pt-3"),onClick:function(){s((0,N.yq)("add"))},children:"Start Onbording"})})]}),(0,r.jsx)(d.Zb,{children:"add"==n.action?(0,r.jsx)(w,{}):(0,r.jsx)(_,{})})]})},E=function(){var e=(0,l.v9)(c.KJ),n=(0,x.K)().deactivate,s=(0,l.I0)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:e.merge_fields.FNAME}),(0,r.jsx)("p",{children:e.email}),(0,r.jsx)("p",{className:"pb-3",children:e.merge_fields.ADDRESS}),(0,r.jsxs)(v.Z,{className:"align-items-center",children:[(0,r.jsx)(p.Z,{sm:5,children:(0,r.jsx)(d.zx,{onClick:function(){s((0,N.yq)("update"))},children:"Edit"})}),(0,r.jsxs)(p.Z,{sm:7,className:"text-end",children:[" ",(0,r.jsx)(k,{}),(0,r.jsx)(d.zx,{onClick:function(){return console.log("handleLogout"),n(),void s((0,N.bl)(""))},children:"Close All"})]})]})]})},P=function(){var e=(0,l.v9)(c.KJ);return(0,r.jsxs)("div",{className:"pb-5",children:[(0,r.jsxs)("h2",{children:["1. Your Account"," ",(0,r.jsx)(g.Z,{className:"ms-1",size:"27px",color:"#75bfc0"})]}),(0,r.jsx)(d.Zb,{children:"update"==e.action?(0,r.jsx)(w,{}):(0,r.jsx)(E,{})})]})},S=function(){var e="Not Connected"!==(0,l.v9)(c.KJ).merge_fields.STATUS;return(0,r.jsxs)("div",{className:"pb-5",children:[(0,r.jsxs)("h2",{children:["2. Wallet"," ",e&&(0,r.jsx)(g.Z,{className:"ms-1",size:"27px",color:"#75bfc0"})]}),(0,r.jsx)(d.Zb,{children:e?(0,r.jsx)("p",{children:"Metamask Connected"}):(0,r.jsx)("p",{children:"How to install Metamask? Do you need help?"})})]})},I=function(e){var n=(0,x.K)().account,s=(0,Z.mT)((0,j.m)(e.contractPolygon,n)||0),c=function(e,n){return(Number(n)*Number(e)).toFixed(2)}(s,(0,y.a)(e.contractPolygon,"usd","polygon-pos"));return console.log(Number(c)),(0,r.jsxs)(v.Z,{children:[(0,r.jsxs)(p.Z,{children:[e.symbol,": ",s]}),(0,r.jsx)(p.Z,{className:"text-end",children:c}),(0,r.jsx)(p.Z,{children:0!==Number(c)&&(0,r.jsx)(o.default,{href:{pathname:"/token/0",query:{id:0}},children:(0,r.jsx)("a",{className:"btn-sm me-2",children:n?"Invest":"View"})})})]})},K=function(){var e=(0,x.K)().account,n=(0,h.M)(e);return(0,r.jsxs)("div",{className:"pb-5",children:[(0,r.jsx)("h2",{children:"3. Funds & Invest"}),(0,r.jsxs)(d.Zb,{children:[(0,r.jsxs)("p",{className:"pb-3",children:["MATIC Balance: ",(0,Z.mT)(n||0)," ",n?(0,r.jsx)(g.Z,{className:"ms-1",size:"15px",color:"#75bfc0"}):"Please buy MATIC"]}),C.TV.map((function(e){return(0,r.jsx)(I,function(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?O(Object(s),!0).forEach((function(n){(0,a.Z)(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):O(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}({},e),e.id)}))]})]})},z=function(){var e=(0,l.v9)(c.KJ),n=(0,l.v9)(t.Pu);return(0,r.jsxs)(i.Z,{className:"text-".concat(n.textMode," py-4 w-50"),children:[(0,r.jsx)("h1",{className:"pb-3",children:"Onbording"}),e.isLogin?(0,r.jsx)(P,{}):(0,r.jsx)(T,{}),(0,r.jsx)(S,{}),(0,r.jsx)(K,{})]})},A=function(){return(0,r.jsx)(z,{})},M=A},555:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/onbording",function(){return s(9965)}])}},function(e){e.O(0,[774,351,509,276],(function(){return n=555,e(e.s=n);var n}));var n=e.O();_N_E=n}]);