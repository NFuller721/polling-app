(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{53:function(t,e,n){"use strict";n.r(e);var o=n(0),l=n.n(o),c=n(16),s=n.n(c),a=n(23),i=n(4),p=n(24),r=n.n(p),h=n(29),j=n(30),d=n(31),b=n(32),O=n(38),u=n(37),f=n(72),x=n(71),C=n(3),v=function(t){Object(O.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(d.a)(this,n);for(var o=arguments.length,l=new Array(o),c=0;c<o;c++)l[c]=arguments[c];return(t=e.call.apply(e,[this].concat(l))).state={pollInfo:{},pollOptions:{optionA:!1,optionB:!1,optionC:!1,optionD:!1,optionE:!1}},t.checkHandler=function(e){t.setState({pollOptions:Object(j.a)({},e.target.name,[e.target.checked])})},t}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var t=Object(h.a)(r.a.mark((function t(){var e,n,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=JSON.stringify({pollId:this.props.match.params.pollId}),t.next=3,fetch("/Api/467586970086574653/read",{method:"POST",headers:{"Content-Type":"application/json"},body:e});case 3:return n=t.sent,t.next=6,n.json();case 6:o=t.sent,this.setState({pollInfo:o.Response});case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(C.jsxs)("form",{children:[Object(C.jsx)("div",{clasName:"PollTitle",children:Object(C.jsx)("h1",{children:this.state.pollInfo.title})}),Object(C.jsxs)("div",{className:"Poll",children:[null==this.state.pollInfo.optionACount?Object(C.jsx)("div",{}):Object(C.jsx)(f.a,{control:Object(C.jsx)(x.a,{name:"optionA",onChange:this.checkHandler,checked:this.state.pollOptions.optionA}),label:this.state.pollInfo.optionATitle}),null==this.state.pollInfo.optionBCount?Object(C.jsx)("div",{}):Object(C.jsx)(f.a,{control:Object(C.jsx)(x.a,{name:"optionB",onChange:this.checkHandler,checked:this.state.pollOptions.optionB}),label:this.state.pollInfo.optionBTitle}),null==this.state.pollInfo.optionCCount?Object(C.jsx)("div",{}):Object(C.jsx)(f.a,{control:Object(C.jsx)(x.a,{name:"optionC",onChange:this.checkHandler,checked:this.state.pollOptions.optionC}),label:this.state.pollInfo.optionCTitle}),null==this.state.pollInfo.optionDCount?Object(C.jsx)("div",{}):Object(C.jsx)(f.a,{control:Object(C.jsx)(x.a,{name:"optionD",onChange:this.checkHandler,checked:this.state.pollOptions.optionD}),label:this.state.pollInfo.optionDTitle}),null==this.state.pollInfo.optionECount?Object(C.jsx)("div",{}):Object(C.jsx)(f.a,{control:Object(C.jsx)(x.a,{name:"optionE",onChange:this.checkHandler,checked:this.state.pollOptions.optionE}),label:this.state.pollInfo.optionETitle})]})]})}}]),n}(l.a.Component),m=Object(i.f)(v);var I=function(){return Object(C.jsx)(a.a,{children:Object(C.jsx)("div",{className:"App",children:Object(C.jsxs)(i.c,{children:[Object(C.jsx)(i.a,{exact:!0,path:"/",children:Object(C.jsx)("p",{children:"Hello There"})}),Object(C.jsx)(i.a,{exact:!0,path:"/poll/:pollId",children:Object(C.jsx)(m,{})})]})})})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(e){var n=e.getCLS,o=e.getFID,l=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),o(t),l(t),c(t),s(t)}))};s.a.render(Object(C.jsx)(l.a.StrictMode,{children:Object(C.jsx)(I,{})}),document.getElementById("root")),k()}},[[53,1,2]]]);
//# sourceMappingURL=main.9648a805.chunk.js.map