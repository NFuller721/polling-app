(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{34:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(16),s=n.n(a),o=n(11),i=n(1),p=n(12),l=n.n(p),u=n(17),h=n(18),d=n(19),j=n(22),b=n(21),f=n(3),O=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={pollId:this.props.match.params.pollId},"/Api/467586970086574653/read",e.next=4,fetch("/Api/467586970086574653/read",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify()});case 4:return n=e.sent,e.next=7,n.json(t);case 7:c=e.sent,console.log(c);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(f.jsx)("p",{children:this.props.match.params.pollId})}}]),n}(r.a.Component),x=Object(i.f)(O);var m=function(){return Object(f.jsx)(o.a,{children:Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)(i.c,{children:[Object(f.jsx)(i.a,{exact:!0,path:"/",children:Object(f.jsx)("p",{children:"Hello There"})}),Object(f.jsx)(i.a,{exact:!0,path:"/poll/:pollId",children:Object(f.jsx)(x,{})})]})})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(m,{})}),document.getElementById("root")),v()}},[[34,1,2]]]);
//# sourceMappingURL=main.6b8dec95.chunk.js.map