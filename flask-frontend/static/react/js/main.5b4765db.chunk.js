(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{44:function(t,e,n){"use strict";n.r(e);var o=n(0),c=n.n(o),a=n(11),s=n.n(a),i=n(16),l=n(3),p=n(17),r=n.n(p),h=n(22),j=n(23),d=n(24),u=n(25),O=n(31),b=n(30),f=n(60),x=n(2),C=function(t){Object(O.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(d.a)(this,n);for(var o=arguments.length,c=new Array(o),a=0;a<o;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={pollInfo:{},pollOptions:{optionA:!1,optionB:!1,optionC:!1,optionD:!1,optionE:!1}},t.checkHandler=function(e){t.setState({pollOptions:Object(j.a)({},e.target.name,[e.target.checked])})},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=Object(h.a)(r.a.mark((function t(){var e,n,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=JSON.stringify({pollId:this.props.match.params.pollId}),t.next=3,fetch("/Api/467586970086574653/read",{method:"POST",headers:{"Content-Type":"application/json"},body:e});case 3:return n=t.sent,t.next=6,n.json();case 6:o=t.sent,this.setState({pollInfo:o.Response});case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(x.jsxs)("form",{children:[null==this.state.pollInfo.optionACount?Object(x.jsx)("div",{}):Object(x.jsx)(f.a,{name:"optionA",onChange:this.checkHandler,checked:this.state.pollOptions.optionA}),null==this.state.pollInfo.optionBCount?Object(x.jsx)("div",{}):Object(x.jsx)(f.a,{name:"optionB",onChange:this.checkHandler,checked:this.state.pollOptions.optionB}),null==this.state.pollInfo.optionCCount?Object(x.jsx)("div",{}):Object(x.jsx)(f.a,{name:"optionC",onChange:this.checkHandler,checked:this.state.pollOptions.optionC}),null==this.state.pollInfo.optionDCount?Object(x.jsx)("div",{}):Object(x.jsx)(f.a,{name:"optionD",onChange:this.checkHandler,checked:this.state.pollOptions.optionD}),null==this.state.pollInfo.optionECount?Object(x.jsx)("div",{}):Object(x.jsx)(f.a,{name:"optionE",onChange:this.checkHandler,checked:this.state.pollOptions.optionE})]})}}]),n}(c.a.Component),k=Object(l.f)(C);var v=function(){return Object(x.jsx)(i.a,{children:Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)(l.c,{children:[Object(x.jsx)(l.a,{exact:!0,path:"/",children:Object(x.jsx)("p",{children:"Hello There"})}),Object(x.jsx)(l.a,{exact:!0,path:"/poll/:pollId",children:Object(x.jsx)(k,{})})]})})})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),o(t),c(t),a(t),s(t)}))};s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(v,{})}),document.getElementById("root")),m()}},[[44,1,2]]]);
//# sourceMappingURL=main.5b4765db.chunk.js.map