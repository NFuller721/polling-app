(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{64:function(t,e,n){"use strict";n.r(e);var o=n(0),c=n.n(o),a=n(16),i=n.n(a),l=n(27),r=n(7),s=n(28),j=n.n(s),p=n(36),b=n(37),h=n(38),d=n(47),u=n(45),O=n(39),x=n(46),f=n(87),m=n(92),C=n(88),v=n(66),g=n(89),k=n(91),I=n(90),T=n(44),y=n(86),S=n(84),D=n(3),A=function(t){var e=t.children,n=Object(S.a)("(prefers-color-scheme: dark)"),o=Object(T.a)({palette:{type:n?"dark":"light"}});return Object(D.jsx)(y.a,{theme:o,children:e})},B=function(t){var e=t.pollInfo,n=Object(o.useState)({optionA:!1,optionB:!1,optionC:!1,optionD:!1,optionE:!1}),c=Object(x.a)(n,2),a=c[0],i=c[1],l=Object(f.a)({Card:{height:"450px",width:"375px"}})(),r=function(t){i(Object(O.a)({},t.target.name,[t.target.checked]))};return Object(D.jsx)(A,{children:Object(D.jsx)(m.a,{className:l.Card,children:Object(D.jsxs)(C.a,{children:[Object(D.jsx)("div",{clasName:"PollTitle",children:Object(D.jsx)(v.a,{children:e.title})}),Object(D.jsxs)("form",{onSubmit:function(t){t.preventDefault()},className:"Poll",children:[null==e.optionACount?Object(D.jsx)("div",{}):Object(D.jsx)(g.a,{control:Object(D.jsx)(k.a,{name:"optionA",onChange:r,checked:a.optionA}),label:e.optionATitle}),null==e.optionBCount?Object(D.jsx)("div",{}):Object(D.jsx)(g.a,{control:Object(D.jsx)(k.a,{name:"optionB",onChange:r,checked:a.optionB}),label:e.optionBTitle}),null==e.optionCCount?Object(D.jsx)("div",{}):Object(D.jsx)(g.a,{control:Object(D.jsx)(k.a,{name:"optionC",onChange:r,checked:a.optionC}),label:e.optionCTitle}),null==e.optionDCount?Object(D.jsx)("div",{}):Object(D.jsx)(g.a,{control:Object(D.jsx)(k.a,{name:"optionD",onChange:r,checked:a.optionD}),label:e.optionDTitle}),null==e.optionECount?Object(D.jsx)("div",{}):Object(D.jsx)(g.a,{control:Object(D.jsx)(k.a,{name:"optionE",onChange:r,checked:a.optionE}),label:e.optionETitle}),Object(D.jsx)(I.a,{variant:"contained",type:"submit",children:"Submit"})]})]})})})},E=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(t){var o;return Object(b.a)(this,n),(o=e.call(this,t)).setPollInfo=function(t){o.setState({pollInfo:t})},o.state={pollInfo:{}},o}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=Object(p.a)(j.a.mark((function t(){var e,n,o;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=JSON.stringify({pollId:this.props.match.params.pollId}),t.next=3,fetch("/Api/467586970086574653/read",{method:"POST",headers:{"Content-Type":"application/json"},body:e});case 3:return n=t.sent,t.next=6,n.json();case 6:o=t.sent,this.setState({pollInfo:o.Response});case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(D.jsx)(B,{pollInfo:this.state.pollInfo})}}]),n}(c.a.Component),P=Object(r.f)(E);var w=function(){return Object(D.jsx)(l.a,{children:Object(D.jsx)("div",{className:"App",children:Object(D.jsxs)(r.c,{children:[Object(D.jsx)(r.a,{exact:!0,path:"/",children:Object(D.jsx)("p",{children:"Hello There"})}),Object(D.jsx)(r.a,{exact:!0,path:"/poll/:pollId",children:Object(D.jsx)(P,{})})]})})})},N=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,93)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),o(t),c(t),a(t),i(t)}))};i.a.render(Object(D.jsx)(c.a.StrictMode,{children:Object(D.jsx)(w,{})}),document.getElementById("root")),N()}},[[64,1,2]]]);
//# sourceMappingURL=main.319177bf.chunk.js.map