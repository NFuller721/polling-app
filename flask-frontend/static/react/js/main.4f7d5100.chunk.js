(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{43:function(t,e,n){"use strict";n.r(e);var o=n(0),c=n.n(o),s=n(11),a=n.n(s),r=n(16),i=n(3),l=n(17),p=n.n(l),j=n(22),u=n(23),h=n(24),f=n(30),d=n(29),b=n(59),O=n(2),x=function(t){Object(f.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(u.a)(this,n);for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={pollInfo:{}},t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=Object(j.a)(p.a.mark((function t(){var e,n,o;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=JSON.stringify({pollId:this.props.match.params.pollId}),t.next=3,fetch("/Api/467586970086574653/read",{method:"POST",headers:{"Content-Type":"application/json"},body:e});case 3:return n=t.sent,t.next=6,n.json();case 6:o=t.sent,this.setState({pollInfo:o.Response}),console.log("number"==typeof this.state.pollInfo.optionACount),console.log("number"==typeof this.state.pollInfo.optionACount),console.log("number"==typeof this.state.pollInfo.optionACount),console.log("number"==typeof this.state.pollInfo.optionACount),console.log("number"==typeof this.state.pollInfo.optionACount);case 13:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(O.jsxs)("form",{children:[this.state.pollInfo.optionACount>=0?Object(O.jsx)(b.a,{checked:!1}):Object(O.jsx)("div",{}),this.state.pollInfo.optionBCount>=0?Object(O.jsx)(b.a,{checked:!1}):Object(O.jsx)("div",{}),this.state.pollInfo.optionCCount>=0?Object(O.jsx)(b.a,{checked:!1}):Object(O.jsx)("div",{}),this.state.pollInfo.optionDCount>=0?Object(O.jsx)(b.a,{checked:!1}):Object(O.jsx)("div",{}),this.state.pollInfo.optionECount>=0?Object(O.jsx)(b.a,{checked:!1}):Object(O.jsx)("div",{})]})}}]),n}(c.a.Component),v=Object(i.f)(x);var I=function(){return Object(O.jsx)(r.a,{children:Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(i.c,{children:[Object(O.jsx)(i.a,{exact:!0,path:"/",children:Object(O.jsx)("p",{children:"Hello There"})}),Object(O.jsx)(i.a,{exact:!0,path:"/poll/:pollId",children:Object(O.jsx)(v,{})})]})})})},C=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,60)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),o(t),c(t),s(t),a(t)}))};a.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(I,{})}),document.getElementById("root")),C()}},[[43,1,2]]]);
//# sourceMappingURL=main.4f7d5100.chunk.js.map