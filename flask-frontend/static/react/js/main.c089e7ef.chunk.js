(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{54:function(t,e,n){"use strict";n.r(e);var o=n(0),l=n.n(o),a=n(16),c=n.n(a),i=n(23),s=n(7),p=n(24),r=n.n(p),h=n(30),j=n(31),d=n(32),b=n(33),u=n(39),O=n(38),f=n(79),x=n(75),m=n(55),v=n(76),C=n(78),I=n(77),k=n(3),g=function(t){Object(u.a)(n,t);var e=Object(O.a)(n);function n(){var t;Object(d.a)(this,n);for(var o=arguments.length,l=new Array(o),a=0;a<o;a++)l[a]=arguments[a];return(t=e.call.apply(e,[this].concat(l))).state={pollInfo:{},pollOptions:{optionA:!1,optionB:!1,optionC:!1,optionD:!1,optionE:!1}},t.checkHandler=function(e){t.setState({pollOptions:Object(j.a)({},e.target.name,[e.target.checked])})},t.submitHandler=function(t){t.preventDefault()},t}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var t=Object(h.a)(r.a.mark((function t(){var e,n,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=JSON.stringify({pollId:this.props.match.params.pollId}),t.next=3,fetch("/Api/467586970086574653/read",{method:"POST",headers:{"Content-Type":"application/json"},body:e});case 3:return n=t.sent,t.next=6,n.json();case 6:o=t.sent,this.setState({pollInfo:o.Response});case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(k.jsx)(f.a,{children:Object(k.jsxs)(x.a,{children:[Object(k.jsx)("div",{clasName:"PollTitle",children:Object(k.jsx)(m.a,{children:this.state.pollInfo.title})}),Object(k.jsxs)("form",{onSubmit:this.submitHandler,className:"Poll",children:[null==this.state.pollInfo.optionACount?Object(k.jsx)("div",{}):Object(k.jsx)(v.a,{control:Object(k.jsx)(C.a,{name:"optionA",onChange:this.checkHandler,checked:this.state.pollOptions.optionA}),label:this.state.pollInfo.optionATitle}),null==this.state.pollInfo.optionBCount?Object(k.jsx)("div",{}):Object(k.jsx)(v.a,{control:Object(k.jsx)(C.a,{name:"optionB",onChange:this.checkHandler,checked:this.state.pollOptions.optionB}),label:this.state.pollInfo.optionBTitle}),null==this.state.pollInfo.optionCCount?Object(k.jsx)("div",{}):Object(k.jsx)(v.a,{control:Object(k.jsx)(C.a,{name:"optionC",onChange:this.checkHandler,checked:this.state.pollOptions.optionC}),label:this.state.pollInfo.optionCTitle}),null==this.state.pollInfo.optionDCount?Object(k.jsx)("div",{}):Object(k.jsx)(v.a,{control:Object(k.jsx)(C.a,{name:"optionD",onChange:this.checkHandler,checked:this.state.pollOptions.optionD}),label:this.state.pollInfo.optionDTitle}),null==this.state.pollInfo.optionECount?Object(k.jsx)("div",{}):Object(k.jsx)(v.a,{control:Object(k.jsx)(C.a,{name:"optionE",onChange:this.checkHandler,checked:this.state.pollOptions.optionE}),label:this.state.pollInfo.optionETitle}),Object(k.jsx)(I.a,{variant:"contained",type:"submit",children:"Submit"})]})]})})}}]),n}(l.a.Component),T=Object(s.f)(g);var y=function(){return Object(k.jsx)(i.a,{children:Object(k.jsx)("div",{className:"App",children:Object(k.jsxs)(s.c,{children:[Object(k.jsx)(s.a,{exact:!0,path:"/",children:Object(k.jsx)("p",{children:"Hello There"})}),Object(k.jsx)(s.a,{exact:!0,path:"/poll/:pollId",children:Object(k.jsx)(T,{})})]})})})},H=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(e){var n=e.getCLS,o=e.getFID,l=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),o(t),l(t),a(t),c(t)}))};c.a.render(Object(k.jsx)(l.a.StrictMode,{children:Object(k.jsx)(y,{})}),document.getElementById("root")),H()}},[[54,1,2]]]);
//# sourceMappingURL=main.c089e7ef.chunk.js.map