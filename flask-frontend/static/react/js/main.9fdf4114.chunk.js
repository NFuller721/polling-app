(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{64:function(t,e,n){},65:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),l=n(17),i=n.n(l),c=n(22),s=n(7),r=n(16),p=n.n(r),u=n(18),j=n(23),b=n(24),h=n(32),x=n(30),d=n(31),O=n(88),C=n(93),f=n(91),m=n(67),v=n(49),g=n(87),k=n(85),A=n(2),y=function(t){var e=t.children,n=Object(k.a)("(prefers-color-scheme: dark)"),o=Object(v.a)({palette:{type:n?"dark":"light"}});return Object(A.jsx)(g.a,{theme:o,children:e})},I=n(47),D=n(89),T=n(92),B=n(90),S=function(t){var e=t.pollId,n=t.pollInfo,a=t.onVote,l=Object(o.useState)({optionA:!1,optionB:!1,optionC:!1,optionD:!1,optionE:!1}),i=Object(d.a)(l,2),c=i[0],s=i[1],r=Object(O.a)({Form:{display:"flex",flexDirection:"column",height:"calc(100% - 32px)"},Grow:{flexGrow:1},Button:{justifySelf:"flex-end"}})(),j=function(t){s(Object(I.a)({},t.target.name,[t.target.checked]))},b=function(){var t=Object(u.a)(p.a.mark((function t(n){var o,l,i;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),o="",!c.optionA){t.next=6;break}o="A",t.next=24;break;case 6:if(!c.optionB){t.next=10;break}o="B",t.next=24;break;case 10:if(!c.optionC){t.next=14;break}o="C",t.next=24;break;case 14:if(!c.optionD){t.next=18;break}o="D",t.next=24;break;case 18:if(!c.optionE){t.next=22;break}o="E",t.next=24;break;case 22:return console.warn("No option selected"),t.abrupt("return","");case 24:return l=JSON.stringify({pollId:e,option:o}),t.next=27,fetch("/Api/467586970086574653/vote",{method:"POST",headers:{"Content-Type":"application/json"},body:l});case 27:return i=t.sent,t.next=30,i.json();case 30:t.sent,a();case 32:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(A.jsxs)("form",{onSubmit:b,className:"PollForm "+r.Form,children:[null==n.optionACount?Object(A.jsx)("div",{}):Object(A.jsx)(D.a,{control:Object(A.jsx)(T.a,{name:"optionA",onChange:j,checked:c.optionA}),label:n.optionATitle}),null==n.optionBCount?Object(A.jsx)("div",{}):Object(A.jsx)(D.a,{control:Object(A.jsx)(T.a,{name:"optionB",onChange:j,checked:c.optionB}),label:n.optionBTitle}),null==n.optionCCount?Object(A.jsx)("div",{}):Object(A.jsx)(D.a,{control:Object(A.jsx)(T.a,{name:"optionC",onChange:j,checked:c.optionC}),label:n.optionCTitle}),null==n.optionDCount?Object(A.jsx)("div",{}):Object(A.jsx)(D.a,{control:Object(A.jsx)(T.a,{name:"optionD",onChange:j,checked:c.optionD}),label:n.optionDTitle}),null==n.optionECount?Object(A.jsx)("div",{}):Object(A.jsx)(D.a,{control:Object(A.jsx)(T.a,{name:"optionE",onChange:j,checked:c.optionE}),label:n.optionETitle}),Object(A.jsx)("div",{className:r.Grow}),Object(A.jsx)(B.a,{className:r.Button,variant:"contained",type:"submit",children:"Vote"})]})},w=function(t){var e=t.value,n=t.max,o=t.label;return Object(A.jsxs)("div",{className:"PollResult",children:[Object(A.jsx)("label",{children:o}),Object(A.jsx)("progress",{value:e,max:n})]})},E=function(t){Object(h.a)(n,t);var e=Object(x.a)(n);function n(t){var o;return Object(j.a)(this,n),(o=e.call(this,t)).state={optionACount:0,optionBCount:0,optionCCount:0,optionDCount:0,optionECount:0,All:0},o}return Object(b.a)(n,[{key:"setAll",value:function(t){var e=0;e+=null!=t.optionACount?t.optionACount:0,e+=null!=t.optionBCount?t.optionBCount:0,e+=null!=t.optionCCount?t.optionCCount:0,e+=null!=t.optionDCount?t.optionDCount:0,e+=null!=t.optionDCount?t.optionDCount:0,this.setState({optionACount:t.optionACount,optionBCount:t.optionBCount,optionCCount:t.optionCCount,optionDCount:t.optionDCount,optionECount:t.optionECount,All:e})}},{key:"componentDidMount",value:function(){var t=Object(u.a)(p.a.mark((function t(){var e,n,o;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=JSON.stringify({pollId:this.props.match.params.pollId}),t.next=3,fetch("/Api/467586970086574653/read",{method:"POST",headers:{"Content-Type":"application/json"},body:e});case 3:return n=t.sent,t.next=6,n.json();case 6:o=t.sent,this.setAll(o.Response);case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(A.jsxs)("div",{className:"PollResults",children:[null!=this.state.optionACount?Object(A.jsx)(w,{value:this.state.optionACount,max:this.state.All,label:"Hello There"}):Object(A.jsx)(A.Fragment,{}),null!=this.state.optionBCount?Object(A.jsx)(w,{value:this.state.optionBCount,max:this.state.All,label:"Hello There"}):Object(A.jsx)(A.Fragment,{}),null!=this.state.optionCCount?Object(A.jsx)(w,{value:this.state.optionCCount,max:this.state.All,label:"Hello There"}):Object(A.jsx)(A.Fragment,{}),null!=this.state.optionDCount?Object(A.jsx)(w,{value:this.state.optionDCount,max:this.state.All,label:"Hello There"}):Object(A.jsx)(A.Fragment,{}),null!=this.state.optionECount?Object(A.jsx)(w,{value:this.state.optionECount,max:this.state.All,label:"Hello There"}):Object(A.jsx)(A.Fragment,{})]})}}]),n}(a.a.Component),N=Object(s.f)(E),F=function(t){var e=t.pollId,n=t.pollInfo,a=Object(O.a)({Card:{height:"450px",width:"375px"},CardContent:{boxSizing:"border-box",height:"calc(100% - 16px)"}})(),l=Object(o.useState)(!1),i=Object(d.a)(l,2),c=i[0],s=i[1];return Object(A.jsx)(y,{children:Object(A.jsx)(C.a,{className:a.Card,children:Object(A.jsxs)(f.a,{className:a.CardContent,children:[Object(A.jsx)("div",{clasName:"PollTitle",children:Object(A.jsx)(m.a,{variant:"h3",children:n.title})}),c?Object(A.jsx)(N,{}):Object(A.jsx)(S,{pollId:e,pollInfo:n,onVote:function(){s(!c)}})]})})})},P=(n(64),function(t){Object(h.a)(n,t);var e=Object(x.a)(n);function n(t){var o;return Object(j.a)(this,n),(o=e.call(this,t)).setPollInfo=function(t){o.setState({pollInfo:t})},o.state={pollInfo:{}},o}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var t=Object(u.a)(p.a.mark((function t(){var e,n,o;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=JSON.stringify({pollId:this.props.match.params.pollId}),t.next=3,fetch("/Api/467586970086574653/read",{method:"POST",headers:{"Content-Type":"application/json"},body:e});case 3:return n=t.sent,t.next=6,n.json();case 6:o=t.sent,this.setState({pollInfo:o.Response});case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(A.jsx)(F,{pollId:this.props.match.params.pollId,pollInfo:this.state.pollInfo})}}]),n}(a.a.Component)),H=Object(s.f)(P);var J=function(){return Object(A.jsx)(c.a,{children:Object(A.jsx)("div",{className:"App",style:{display:"flex",justifyContent:"center",paddingTop:"50px"},children:Object(A.jsxs)(s.c,{children:[Object(A.jsx)(s.a,{exact:!0,path:"/",children:Object(A.jsx)("p",{children:"Hello There"})}),Object(A.jsx)(s.a,{exact:!0,path:"/poll/:pollId",children:Object(A.jsx)(H,{})})]})})})},R=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,94)).then((function(e){var n=e.getCLS,o=e.getFID,a=e.getFCP,l=e.getLCP,i=e.getTTFB;n(t),o(t),a(t),l(t),i(t)}))};i.a.render(Object(A.jsx)(a.a.StrictMode,{children:Object(A.jsx)(J,{})}),document.getElementById("root")),R()}},[[65,1,2]]]);
//# sourceMappingURL=main.9fdf4114.chunk.js.map