(this["webpackJsonpmister-bitcoin"]=this["webpackJsonpmister-bitcoin"]||[]).push([[0],{103:function(e,t,n){e.exports=n.p+"static/media/add-contact.da05397d.svg"},220:function(e,t,n){e.exports=n.p+"static/media/bitcoin.56e5ff88.svg"},222:function(e,t,n){e.exports=n.p+"static/media/back.7a10c171.svg"},223:function(e,t,n){e.exports=n.p+"static/media/edit-contact.570dbdbd.svg"},224:function(e,t,n){e.exports=n.p+"static/media/home.8eacb5a5.svg"},225:function(e,t,n){e.exports=n.p+"static/media/members.de02feb6.svg"},262:function(e,t,n){e.exports=n(420)},267:function(e,t,n){},268:function(e,t,n){},420:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(97),o=n.n(c),i=(n(267),n(16)),s=(n(268),n(29)),l=n(30),u=n(6),m=n.n(u),p=n(12),d=n(143),f=n.n(d),h={getRate:function(){var e=Object(p.a)(m.a.mark((function e(){var t,n,a,r=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,e.prev=1,e.next=4,f.a.get("https://blockchain.info/tobtc?currency=USD&value=1");case 4:return n=e.sent,a=+n.data,e.abrupt("return",a*t);case 9:e.prev=9,e.t0=e.catch(1),console.log("err");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),getMarketPrice:function(){var e=Object(p.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("https://api.blockchain.info/charts/market-price?timespan=".concat(t,"months&format=json&cors=true&limit=10"));case 3:return n=e.sent,a=n.data.values.map((function(e){var t=new Date(1e3*e.x);return{x:"".concat(t.getDate(),"/").concat(t.getMonth()+1,"/").concat(t.getFullYear()),y:e.y}})),e.abrupt("return",[{id:"bitcoin",color:"hsl(118, 70%, 50%)",data:a}]);case 8:e.prev=8,e.t0=e.catch(0),console.log("err");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},v=function(e){var t=localStorage.user;return t?JSON.parse(t):null}(),b=function(){var e=Object(p.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],n=t?JSON.parse(JSON.stringify(v.moves.filter((function(e){return e.contactId===t})))):JSON.parse(JSON.stringify(v.moves)).splice(0,3),e.next=4,h.getRate(1);case 4:return a=e.sent,n.forEach((function(e){e.countBitcoin=e.count*a;var t=new Date(e.at);e.atToShow="".concat(t.getDate(),"/").concat(t.getMonth(),"/").concat(t.getFullYear())})),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E={getUser:function(e){return Promise.resolve(v)},sendCoins:function(e,t,n){return v.dolars-=e,v.moves.unshift({count:e,contactId:t,contactName:n,at:Date.now()}),localStorage.user=JSON.stringify(v),Promise.resolve(b(t))},getMoves:b,isConnected:function(e){return!!v},setUser:function(e){return v={name:e,dolars:100,moves:[]},localStorage.user=JSON.stringify(v),Promise.resolve(v)}},g=n(104),C=n(14),O=n(11),y=n(28),k=n(27),S=n(26),w=n(99);function _(){return function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.getUser();case 2:return n=e.sent,e.next=5,h.getRate(n.dolars);case 5:n.coins=e.sent,t({type:"LOAD_USER",user:n});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function j(){return function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.getMoves();case 2:n=e.sent,t({type:"SET_CURR_MOVES",moves:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}var N=function(e){var t=e.move,n=e.contact;return r.a.createElement("div",{className:"move-preview"},n?"":r.a.createElement("p",null,"To: ",t.contactName),r.a.createElement("p",null,"Amount: ",r.a.createElement("span",{className:"dolar"},"$",t.count)," | ",r.a.createElement("span",{className:"bitcoin"},"BTC:",Math.round(1e4*(t.countBitcoin+Number.EPSILON))/1e4)),r.a.createElement("p",null,"At: ",t.atToShow))},x=function(e){var t=e.moves,n=e.contact,a=void 0!==n&&n;return r.a.createElement("div",{className:"move-list"},t.map((function(e){return r.a.createElement(N,{contact:a,move:e,key:e.at})})))},M=n(220),T=n.n(M),D=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(C.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).setMarket=function(t){h.getMarketPrice(t).then((function(t){return e.setState({data:t})}))},e}return Object(O.a)(n,[{key:"componentDidMount",value:function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.props.laodUser(),this.props.loadMove();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t,n,a,c,o=this;return(null===(e=this.state)||void 0===e?void 0:e.data)||this.setMarket(6),r.a.createElement("div",{className:"home-page"},r.a.createElement("div",{className:"titles"},r.a.createElement("h2",null,"Hi ",null===(t=this.props.user)||void 0===t?void 0:t.name),r.a.createElement("p",{className:"dolar"},"$",null===(n=this.props.user)||void 0===n?void 0:n.dolars),r.a.createElement("p",null,r.a.createElement("img",{src:T.a,alt:""}),r.a.createElement("span",null,Math.round(1e4*(((null===(a=this.props.user)||void 0===a?void 0:a.coins)||0)+Number.EPSILON))/1e4))),r.a.createElement("div",{className:"details"},r.a.createElement("div",{className:"bitcoin"},r.a.createElement("h3",null,"Bitcoin Rate: ",this.state?Object(g.a)(this.state.data[0].data).pop().y:""),r.a.createElement("div",{style:{height:400,maxWidth:800}},r.a.createElement("div",{className:"set-cart"},r.a.createElement("button",{onClick:function(e){return o.setMarket(1)}},"1M"),r.a.createElement("button",{onClick:function(e){return o.setMarket(2)}},"2M"),r.a.createElement("button",{onClick:function(e){return o.setMarket(6)}},"6M"),r.a.createElement("button",{onClick:function(e){return o.setMarket(12)}},"12M"),r.a.createElement("button",{onClick:function(e){return o.setMarket(24)}},"24M")),r.a.createElement(w.a,{data:(null===(c=this.state)||void 0===c?void 0:c.data)||[],margin:{top:50,right:10,bottom:50,left:60},xScale:{type:"point"},axisTop:null,axisRight:null,axisBottom:null,axisLeft:{orient:"left",tickSize:5,tickPadding:5,tickRotation:0,legend:"Dolars",legendOffset:-50,legendPosition:"middle",colors:"#fff"},colors:{scheme:"nivo"},pointSize:2,pointColor:{theme:"background"},pointBorderWidth:1,enableGridX:!1,enableGridY:!1,pointBorderColor:{from:"serieColor"},enableArea:!0,areaOpacity:.25,useMesh:!0,theme:{axis:{ticks:{line:{stroke:"#9fa6ad"},text:{fill:"#9fa6ad"}}},grid:{line:{stroke:"pink",strokeWidth:2,strokeDasharray:"4 4"}}}}))),r.a.createElement("div",{className:"moves"},r.a.createElement("h3",null,"Your Last 3 Moves:"),this.props.moves?r.a.createElement(x,{moves:this.props.moves}):"")))}}]),n}(a.Component),L={laodUser:_,loadMove:j},A=Object(S.b)((function(e){return{user:e.user.user,moves:e.user.currMoves}}),L)(D),R=[{_id:"5a56640269f443a5d64b32ca",name:"Ochoa Hyde",email:"ochoahyde@renovize.com",phone:"+1 (968) 593-3824"},{_id:"5a5664025f6ae9aa24a99fde",name:"Hallie Mclean",email:"halliemclean@renovize.com",phone:"+1 (948) 464-2888"},{_id:"5a56640252d6acddd183d319",name:"Parsons Norris",email:"parsonsnorris@renovize.com",phone:"+1 (958) 502-3495"},{_id:"5a566402ed1cf349f0b47b4d",name:"Rachel Lowe",email:"rachellowe@renovize.com",phone:"+1 (911) 475-2312"},{_id:"5a566402abce24c6bfe4699d",name:"Dominique Soto",email:"dominiquesoto@renovize.com",phone:"+1 (807) 551-3258"},{_id:"5a566402a6499c1d4da9220a",name:"Shana Pope",email:"shanapope@renovize.com",phone:"+1 (970) 527-3082"},{_id:"5a566402f90ae30e97f990db",name:"Faulkner Flores",email:"faulknerflores@renovize.com",phone:"+1 (952) 501-2678"},{_id:"5a5664027bae84ef280ffbdf",name:"Holder Bean",email:"holderbean@renovize.com",phone:"+1 (989) 503-2663"},{_id:"5a566402e3b846c5f6aec652",name:"Rosanne Shelton",email:"rosanneshelton@renovize.com",phone:"+1 (968) 454-3851"},{_id:"5a56640272c7dcdf59c3d411",name:"Pamela Nolan",email:"pamelanolan@renovize.com",phone:"+1 (986) 545-2166"},{_id:"5a5664029a8dd82a6178b15f",name:"Roy Cantu",email:"roycantu@renovize.com",phone:"+1 (929) 571-2295"},{_id:"5a5664028c096d08eeb13a8a",name:"Ollie Christian",email:"olliechristian@renovize.com",phone:"+1 (977) 419-3550"},{_id:"5a5664026c53582bb9ebe9d1",name:"Nguyen Walls",email:"nguyenwalls@renovize.com",phone:"+1 (963) 471-3181"},{_id:"5a56640298ab77236845b82b",name:"Glenna Santana",email:"glennasantana@renovize.com",phone:"+1 (860) 467-2376"},{_id:"5a56640208fba3e8ecb97305",name:"Malone Clark",email:"maloneclark@renovize.com",phone:"+1 (818) 565-2557"},{_id:"5a566402abb3146207bc4ec5",name:"Floyd Rutledge",email:"floydrutledge@renovize.com",phone:"+1 (807) 597-3629"},{_id:"5a56640298500fead8cb1ee5",name:"Grace James",email:"gracejames@renovize.com",phone:"+1 (959) 525-2529"},{_id:"5a56640243427b8f8445231e",name:"Tanner Gates",email:"tannergates@renovize.com",phone:"+1 (978) 591-2291"},{_id:"5a5664025c3abdad6f5e098c",name:"Lilly Conner",email:"lillyconner@renovize.com",phone:"+1 (842) 587-3812"}],B=function(e){var t=localStorage.contacts;return t?JSON.parse(t):(localStorage.contacts=JSON.stringify(R),R)}();function P(e){return e.sort((function(e,t){return e.name.toLocaleLowerCase()<t.name.toLocaleLowerCase()?-1:e.name.toLocaleLowerCase()>t.name.toLocaleLowerCase()?1:0}))}function z(e){return new Promise((function(t,n){e._id=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<e;a++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}(),B.unshift(e),localStorage.contacts=JSON.stringify(B),t(e)}))}function I(e){return e=e.toLocaleLowerCase(),B.filter((function(t){return t.name.toLocaleLowerCase().includes(e)||t.phone.toLocaleLowerCase().includes(e)||t.email.toLocaleLowerCase().includes(e)}))}var U={getContacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return new Promise((function(t,n){var a=B;e&&e.term&&(a=I(e.term)),t(P(a))}))},getContactById:function(e){return new Promise((function(t,n){var a=B.find((function(t){return t._id===e}));a?t(a):n("Contact id ".concat(e," not found!"))}))},deleteContact:function(e){return new Promise((function(t,n){var a=B.findIndex((function(t){return t._id===e}));-1!==a&&B.splice(a,1),localStorage.contacts=JSON.stringify(B),t(B)}))},saveContact:function(e){return e._id?function(e){return new Promise((function(t,n){var a=B.findIndex((function(t){return e._id===t._id}));-1!==a&&(B[a]=e),localStorage.contacts=JSON.stringify(B),t(e)}))}(e):z(e)},getEmptyContact:function(){return{name:"",email:"",phone:""}}};function J(e){return function(){var t=Object(p.a)(m.a.mark((function t(n){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U.getContactById(e);case 2:a=t.sent,n({type:"SET_CURR_CONTACT",contact:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}var H=function(e){var t=e.contact;return r.a.createElement(s.b,{to:"/contact/"+t._id},r.a.createElement("div",{className:"contact-preview"},r.a.createElement("img",{src:"https://robohash.org/"+t._id,alt:t.name}),r.a.createElement("p",null,t.name)))},F=function(e){var t=e.contacts;return r.a.createElement("div",{className:"contact-list"},t.map((function(e){return r.a.createElement(H,{contact:e,key:e._id})})))},W=n(21),G=n(62),V=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(e){var a;return Object(C.a)(this,n),(a=t.call(this,e)).state={term:""},a.onChangeHandler=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(G.a)({},r,n),(function(){a.props.onFilter(Object(W.a)({},a.state))}))},a.state=Object(W.a)({},e.filterBy),a}return Object(O.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact-filter"},r.a.createElement("form",null,r.a.createElement("input",{type:"text",placeholder:"search",onChange:this.onChangeHandler,name:"term",value:this.state.term})))}}]),n}(a.Component),Y=n(103),X=n.n(Y),$=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(C.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={filterBy:{term:""},contacts:[]},e.onFileHendler=function(t){e.props.loadContacts(t)},e}return Object(O.a)(n,[{key:"componentDidMount",value:function(){this.props.loadContacts(this.state.filterBy)}},{key:"render",value:function(){return r.a.createElement("div",{className:"contact-page"},r.a.createElement(V,{onFilter:this.onFileHendler,filterBy:this.state.filterBy}),r.a.createElement(F,{contacts:this.props.contacts}),r.a.createElement(s.b,{to:"/edit"},r.a.createElement("img",{className:"add",src:X.a,alt:"add",title:"Add"})))}}]),n}(a.Component),q={loadContacts:function(e){return function(){var t=Object(p.a)(m.a.mark((function t(n){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U.getContacts(e);case 2:a=t.sent,n({type:"SET_CONTACTS",contacts:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},K=Object(S.b)((function(e){return{contacts:e.contact.contacts}}),q)($),Q=function(e){var t=e.send,n=e.name,c=Object(a.useState)(0),o=Object(i.a)(c,2),s=o[0],l=o[1];return r.a.createElement("div",{className:"transfer-fund"},r.a.createElement("p",null,"Transfer coins to ",n),r.a.createElement("label",null,r.a.createElement("span",null,"Amount ($):"),r.a.createElement("input",{type:"number",value:s,onChange:function(e){l(e.target.value)}}),r.a.createElement("button",{onClick:function(){t(s),l(0)}},"transfer")))},Z=n(222),ee=n.n(Z),te=n(223),ne=n.n(te),ae=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(C.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).hendlerSend=function(t){var n=e.props.contact,a=n._id,r=n.name;e.props.addMove({_id:a,name:r,count:t})},e}return Object(O.a)(n,[{key:"componentDidMount",value:function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.match.params.id,this.props.loadContactById(t),this.props.setCurrMoves(t);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.contact;return e?r.a.createElement("div",{className:"contact-details-page"},r.a.createElement("nav",null,r.a.createElement(s.b,{to:"/contact"},r.a.createElement("img",{src:ee.a,alt:"Back"})),r.a.createElement(s.b,{to:"/edit/"+e._id},r.a.createElement("img",{src:ne.a,alt:"Edit"}))),r.a.createElement("main",null,r.a.createElement("img",{src:"https://robohash.org/".concat(e._id,".png"),alt:""}),r.a.createElement("p",null,"Name: ",e.name),r.a.createElement("p",null,"Phone: ",e.email),r.a.createElement("p",null,"Email: ",e.phone),r.a.createElement(Q,{name:e.name,send:this.hendlerSend}),r.a.createElement("div",{className:"moves"},this.props.moves.length?r.a.createElement("h3",null,"Your Moves:"):"",r.a.createElement(x,{contact:!0,moves:this.props.moves})))):r.a.createElement("div",null,"Loading! :) ")}}]),n}(a.Component),re={setCurrMoves:function(e){return function(){var t=Object(p.a)(m.a.mark((function t(n){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.getMoves(e);case 2:a=t.sent,n({type:"SET_CURR_MOVES",moves:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},loadContactById:J,addMove:function(e){var t=e.count,n=e._id,a=e.name;return function(){var e=Object(p.a)(m.a.mark((function e(r){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.sendCoins(t,n,a);case 2:c=e.sent,r({type:"SET_CURR_MOVES",moves:c});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},ce=Object(S.b)((function(e){return{contact:e.contact.currContact,moves:e.user.currMoves}}),re)(ae),oe=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(C.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contact:{name:"",email:"",phone:""}},e.handleInputChange=function(t,n){e.setState((function(e){var a=e.contact;return{contact:Object(W.a)({},a,Object(G.a)({},t,n))}}))},e.handleSave=function(t){e.props.saveContact(e.state.contact).then((function(t){return e.setState({redirect:!0,newId:t._id})}))},e.handleDelete=function(t){e.state.contact._id?e.props.deleteContact(e.state.contact._id).then((function(t){return e.setState({back:!0})})):e.setState({back:!0})},e}return Object(O.a)(n,[{key:"componentDidMount",value:function(){var e=Object(p.a)(m.a.mark((function e(){var t,n=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=this.props.match.params.id)?(this.setState({deleteStr:"Delete"}),this.props.loadContactById(t).then((function(e){return n.setState({contact:JSON.parse(JSON.stringify(n.props.currContact)),img:"https://robohash.org/".concat(n.props.currContact._id,".png")})})).catch((function(e){}))):this.setState({deleteStr:"Cancel",img:X.a});case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this,n=this.state.contact;return this.state.redirect?n._id?r.a.createElement(l.a,{push:!0,to:"/contact/"+n._id}):r.a.createElement(l.a,{push:!0,to:"/contact/"+this.state.newId}):this.state.back?r.a.createElement(l.a,{push:!0,to:"/contact"}):n?r.a.createElement("div",{className:"contact-edit"},r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},r.a.createElement("img",{src:null===(e=this.state)||void 0===e?void 0:e.img,alt:""}),r.a.createElement("input",{type:"text",onChange:function(e){return t.handleInputChange("name",e.target.value)},placeholder:"Name",value:n.name}),r.a.createElement("input",{type:"text",onChange:function(e){return t.handleInputChange("email",e.target.value)},placeholder:"Email",value:n.email}),r.a.createElement("input",{type:"text",onChange:function(e){return t.handleInputChange("phone",e.target.value)},placeholder:"phone",value:n.phone}),r.a.createElement("div",{className:"btn"},r.a.createElement("button",{onClick:this.handleSave},"Save Contact"),r.a.createElement("button",{className:"del",onClick:this.handleDelete},this.state.deleteStr)))):r.a.createElement("div",null,"Loading! :) ")}}]),n}(a.Component),ie={loadContactById:J,saveContact:function(e){return function(){var t=Object(p.a)(m.a.mark((function t(n){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=!!e._id,t.next=3,U.saveContact(e);case 3:return e=t.sent,n(a?{type:"UPDATE_CONTACT",contact:e}:{type:"ADD_CONTACT",contact:e}),t.abrupt("return",e);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},deleteContact:function(e){return function(){var t=Object(p.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U.deleteContact(e);case 2:n({type:"DELETE_CONTACT",id:e});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},se=Object(S.b)((function(e){return{currContact:e.contact.currContact}}),ie)(oe),le=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(C.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).clickHelnder=Object(p.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.setUser(e.state.name);case 2:e.props.signup();case 3:case"end":return t.stop()}}),t)}))),e}return Object(O.a)(n,[{key:"componentDidMount",value:function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({name:""});case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"signup-page"},r.a.createElement("h1",null,"Hello new user"),r.a.createElement("form",{onSubmit:this.clickHelnder},r.a.createElement("input",{type:"text",placeholder:"Enter Name",onChange:function(t){return e.setState({name:t.target.value})}}),r.a.createElement("button",null,"Signup")))}}]),n}(a.Component),ue={laodUser:_,loadMove:j},me=Object(S.b)((function(e){return{user:e.user.user}}),ue)(le),pe=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],o=function(e){h.getMarketPrice(e).then(c)};return n.length||o(6),r.a.createElement("div",{className:"statistic-page"},r.a.createElement("button",{onClick:function(e){return o(2)}},"2"),r.a.createElement("button",{onClick:function(e){return o(6)}},"6"),r.a.createElement("button",{onClick:function(e){return o(12)}},"12"),r.a.createElement("button",{onClick:function(e){return o(24)}},"24"),r.a.createElement("div",{style:{height:400}},r.a.createElement(w.a,{data:n,margin:{top:50,right:110,bottom:10,left:60},xScale:{type:"point"},yScale:{type:"linear",min:"auto",max:"auto",stacked:!0,reverse:!1},axisTop:null,axisRight:null,axisBottom:null,axisLeft:{orient:"left",tickSize:5,tickPadding:5,tickRotation:0,legend:"Dolars",legendOffset:-50,legendPosition:"middle"},colors:{scheme:"nivo"},pointSize:2,pointColor:{theme:"background"},pointBorderWidth:2,pointBorderColor:{from:"serieColor"},enableArea:!0,areaOpacity:.25,useMesh:!0})))},de=n(224),fe=n.n(de),he=n(225),ve=n.n(he),be=function(){return r.a.createElement("div",{className:"nav-bar"},r.a.createElement(s.b,{to:"/"},r.a.createElement("img",{src:fe.a,alt:"Home",title:"Home"})),r.a.createElement(s.b,{to:"/contact"},r.a.createElement("img",{src:ve.a,alt:"Contact",title:"Contact"})))};var Ee=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2)[1];return r.a.createElement("div",{className:"App"},E.isConnected()?r.a.createElement(s.a,null,r.a.createElement(be,null),r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/",component:A}),r.a.createElement(l.b,{path:"/contact/:id",component:ce}),r.a.createElement(l.b,{path:"/contact",component:K}),r.a.createElement(l.b,{path:"/edit/:id?",component:se}),r.a.createElement(l.b,{path:"/statistic",component:pe}))):r.a.createElement(me,{signup:function(e){t()}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ge=n(52),Ce=n(226),Oe={user:null,currMoves:[]};var ye={contacts:[],currContact:null};var ke=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ge.d,Se=Object(ge.c)({contact:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CONTACTS":return Object(W.a)({},e,{contacts:t.contacts});case"SET_CURR_CONTACT":return Object(W.a)({},e,{currContact:t.contact});case"UPDATE_CONTACT":return Object(W.a)({},e,{contacts:e.contacts.map((function(e){return e._id===t.contact._id?t.contact:e}))});case"DELETE_CONTACT":return Object(W.a)({},e,{contacts:e.contacts.filter((function(e){return e._id!==t.id}))});case"ADD_CONTACT":return Object(W.a)({},e,{contacts:[].concat(Object(g.a)(e.contacts),[t.contact])});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_USER":return Object(W.a)({},e,{user:t.user});case"SET_CURR_MOVES":return Object(W.a)({},e,{currMoves:t.moves});default:return e}}}),we=Object(ge.e)(Se,ke(Object(ge.a)(Ce.a)));o.a.render(r.a.createElement(S.a,{store:we},r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[262,1,2]]]);
//# sourceMappingURL=main.f3ffe79f.chunk.js.map