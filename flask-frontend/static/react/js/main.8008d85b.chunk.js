(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{43:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n.n(c),s=n(11),a=n.n(s),r=n(16),i=n(3),j=n(17),l=n.n(j),p=n(22),h=n(23),d=n(24),u=n(30),b=n(29),f=n(59),O=n(2),x=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(h.a)(this,n);for(var c=arguments.length,o=new Array(c),s=0;s<c;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))).state={pollInfo:{}},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=Object(p.a)(l.a.mark((function t(){var e,n,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=JSON.stringify({pollId:this.props.match.params.pollId}),t.next=3,fetch("/Api/467586970086574653/read",{method:"POST",headers:{"Content-Type":"application/json"},body:e});case 3:return n=t.sent,t.next=6,n.json();case 6:c=t.sent,this.setState({pollInfo:c.Response}),console.log(this.state.pollInfo);case 9:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(O.jsxs)("form",{children:[this.state.pollInfo.optionACount?Object(O.jsx)(f.a,{checked:!1}):Object(O.jsx)("div",{}),this.state.pollInfo.optionBCount?Object(O.jsx)(f.a,{checked:!1}):Object(O.jsx)("div",{}),this.state.pollInfo.optionCCount?Object(O.jsx)(f.a,{checked:!1}):Object(O.jsx)("div",{}),this.state.pollInfo.optionDCount?Object(O.jsx)(f.a,{checked:!1}):Object(O.jsx)("div",{}),this.state.pollInfo.optionECount?Object(O.jsx)(f.a,{checked:!1}):Object(O.jsx)("div",{})]})}}]),n}(o.a.Component),v=Object(i.f)(x);var I=function(){return Object(O.jsx)(r.a,{children:Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(i.c,{children:[Object(O.jsx)(i.a,{exact:!0,path:"/",children:Object(O.jsx)("p",{children:"Hello There"})}),Object(O.jsx)(i.a,{exact:!0,path:"/poll/:pollId",children:Object(O.jsx)(v,{})})]})})})},C=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,60)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),c(t),o(t),s(t),a(t)}))};a.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(I,{})}),document.getElementById("root")),C()}},[[43,1,2]]]);
//# sourceMappingURL=main.8008d85b.chunk.js.map