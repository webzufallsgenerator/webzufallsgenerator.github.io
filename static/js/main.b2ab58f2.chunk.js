(this.webpackJsonpzufallsgenerator_online=this.webpackJsonpzufallsgenerator_online||[]).push([[0],{103:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),o=n.n(c),i=(n(90),n(30)),s=(n(53),n(54)),l=n(11),d=n(149),j=n(153),b=n(67),h=n.n(b),m=n(5);var x=function(){return Object(m.jsxs)("div",{children:[Object(m.jsxs)(h.a,{children:[Object(m.jsx)("title",{children:"random-now.com - Free random generators"}),Object(m.jsx)("meta",{name:"description",content:"Pick random winners. Generate random groups. Get started now for free!"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"random-now.com"}),Object(m.jsx)("h3",{children:"Welcome to random-now.com! Select a random generator and get started now!"}),Object(m.jsx)(d.a,{variant:"contained",size:"large",color:"primary",href:"/generators/picker",endIcon:Object(m.jsx)(j.a,{}),children:"Random Picker"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("h5",{children:"More random generators are coming soon!"})]})]})},u=n(58),O=n(55),p=n(161),g=n(160),f=n(155),v=n(167),k=n(166),y=n(163),w=n(156),C=n(157),S=n(158),I=n(72),N=n.n(I),P=n(162),z=n(51),B=n(154),L=n(12),M=n(159),R=Object(B.a)((function(e){return{root:{display:"flex"},drawer:{width:240,flexShrink:0},appBar:{background:"rgb(113, 116, 129)",zIndex:e.zIndex.drawer+1},menuButton:Object(i.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:Object(O.a)(Object(O.a)({},e.mixins.toolbar),{},{zIndex:e.zIndex.drawer-1}),drawerPaper:{width:240},content:{flexGrow:1,padding:e.spacing(3)}}}));var F=Object(l.f)((function(e){var t=e.window,n=e.history,a=R(),c=Object(L.a)(),o=r.a.useState(!1),i=Object(u.a)(o,2),s=i[0],l=i[1],d=r.a.useState(!1),j=Object(u.a)(d,2),b=j[0],h=j[1],x=[{text:"Home",onClick:function(){n.push("/"),h(!1)}},{text:"Generators",onClick:function(){l(!s)},secondLayer:[{text:"Random Picker",onClick:function(){n.push("/generators/picker"),h(!1)}},{text:"Random Groups",onClick:function(){n.push("/generators/groups"),h(!1)}},{text:"Throw a Dice",onClick:function(){n.push("/generators/dice"),h(!1)}}]},{text:"Contact us",onClick:function(){n.push("/contact"),h(!1)}}],O=function(){h(!b)},I=Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:a.toolbar}),Object(m.jsx)(f.a,{}),Object(m.jsxs)(w.a,{children:[Object(m.jsx)(C.a,{button:!0,onClick:x[0].onClick,children:Object(m.jsx)(S.a,{primary:x[0].text})},x[0].text),Object(m.jsx)(C.a,{button:!0,onClick:x[1].onClick,children:Object(m.jsx)(S.a,{primary:x[1].text})},x[1].text),Object(m.jsx)(M.a,{in:s,timeout:"auto",unmountOnExit:!0,children:Object(m.jsx)(w.a,{component:"div",disablePadding:!0,children:Object(m.jsx)(C.a,{button:!0,onClick:x[1].secondLayer[0].onClick,children:Object(m.jsx)(S.a,{inset:!0,primary:x[1].secondLayer[0].text})},x[1].secondLayer[0].text)})})]})]}),B=void 0!==t?function(){return t().document.body}:void 0;return Object(m.jsxs)("div",{className:a.root,children:[Object(m.jsx)(g.a,{}),Object(m.jsx)(p.a,{className:a.appBar,children:Object(m.jsxs)(P.a,{children:[Object(m.jsx)(y.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:O,className:a.menuButton,children:Object(m.jsx)(N.a,{})}),Object(m.jsx)(z.a,{variant:"h5",noWrap:!0,children:"random-now.com"})]})}),Object(m.jsxs)("nav",{className:a.drawer,"aria-label":"mailbox folders",children:[Object(m.jsx)(k.a,{smUp:!0,implementation:"css",children:Object(m.jsx)(v.a,{container:B,variant:"temporary",anchor:"rtl"===c.direction?"right":"left",open:b,onClose:O,classes:{paper:a.drawerPaper},ModalProps:{keepMounted:!0},children:I})}),Object(m.jsx)(k.a,{xsDown:!0,implementation:"css",children:Object(m.jsx)(v.a,{classes:{paper:a.drawerPaper},variant:"permanent",open:!0,children:I})})]})]})})),G=n(73),D=n(74),E=n(44),J=n(76),T=n(75),_=n(164);var A=function(e){return Object(m.jsx)("div",{children:Object(m.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(m.jsx)(_.a,{multiline:!0,id:"outlined-textarea",label:"Names/Items",placeholder:"Enter all the names/items here",variant:"outlined",value:e.data.names,onChange:e.handleChange,style:{width:500}}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(d.a,{type:"submit",variant:"contained",color:"primary",endIcon:Object(m.jsx)(j.a,{}),children:"Pick random"})]})})},W=function(e){Object(J.a)(n,e);var t=Object(T.a)(n);function n(e){var a;return Object(G.a)(this,n),(a=t.call(this,e)).state={names:"",random_generated:[]},a.handleChange=a.handleChange.bind(Object(E.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(E.a)(a)),a}return Object(D.a)(n,[{key:"handleChange",value:function(e){this.setState({names:e.target.value}),console.log(this.state.names)}},{key:"handleSubmit",value:function(){var e=this.state.names.split("\n");console.log(e);var t=e[Math.floor(Math.random()*e.length)];localStorage.setItem("randomName",t),localStorage.setItem("names",JSON.stringify(e))}},{key:"componentDidMount",value:function(){if(null!=localStorage.getItem("names")){var e=JSON.parse(localStorage.getItem("names"));this.setState({names:e.join("\n")})}}},{key:"render",value:function(){if(null!=localStorage.getItem("randomName"))var e=localStorage.getItem("randomName");return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Random Picker"}),Object(m.jsx)("h3",{children:"Enter all the names or items and pick a random one!"}),Object(m.jsx)("h4",{children:"Press enter after every entry!"}),Object(m.jsx)(A,{handleChange:this.handleChange,handleSubmit:this.handleSubmit,data:this.state}),Object(m.jsx)("p",{style:{marginBottom:0},children:"Randomly picked was:"}),Object(m.jsx)("b",{style:{marginTop:0},children:e})]})}}]),n}(a.Component),H=Object(B.a)((function(e){var t;return{content:(t={},Object(i.a)(t,e.breakpoints.up("sm"),{marginLeft:280}),Object(i.a)(t,"flexShrink",0),Object(i.a)(t,"padding",50),t)}}));var U=function(){var e=H();return Object(m.jsx)(s.a,{children:Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)("header",{className:"App-header",children:[Object(m.jsx)(F,{}),Object(m.jsx)("div",{className:e.content,children:Object(m.jsxs)(l.c,{children:[Object(m.jsx)(l.a,{exact:!0,path:"/",children:Object(m.jsx)(x,{})}),Object(m.jsx)(l.a,{exact:!0,path:"/generators/picker",children:Object(m.jsx)(W,{})})]})})]})})})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,168)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};o.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(U,{})}),document.getElementById("root")),q()},53:function(e,t,n){},90:function(e,t,n){}},[[103,1,2]]]);
//# sourceMappingURL=main.b2ab58f2.chunk.js.map