(this["webpackJsonpbrownjacob998-project1"]=this["webpackJsonpbrownjacob998-project1"]||[]).push([[0],{121:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(32),o=a.n(s),l=a(7),c=a(12),i=a(10),u=a(11),m=a(69),p=a(16),d=a(122),h=a(123),E=a(124),g=a(125),f=a(126),v=a(138),b=a(139),I=a(140),w=a(127),y=a(65),O=a(22),j=function(e){var t=Object(r.useState)(!1),a=Object(m.a)(t,2),s=a[0],o=a[1];return n.a.createElement("div",null,n.a.createElement(d.a,{color:"light",light:!0,expand:"md"},n.a.createElement("span",{style:{marginRight:"20px"},className:"style"}),n.a.createElement(h.a,{onClick:function(){return o(!s)}}),n.a.createElement(E.a,{isOpen:s,navbar:!0},n.a.createElement(g.a,{className:"mr-auto",navbar:!0},n.a.createElement(f.a,null,n.a.createElement(O.b,{to:"/home",style:{marginRight:10}},"Home")),n.a.createElement(f.a,null,n.a.createElement(O.b,{hidden:!!e.loggedInUser,to:"/login",className:"nav-link",activeClassName:"active",style:{marginRight:-5}},"Login")),n.a.createElement(v.a,{nav:!0,inNavbar:!0},n.a.createElement(b.a,{nav:!0,caret:!0},"Users"),n.a.createElement(I.a,{right:!0},n.a.createElement(w.a,null,n.a.createElement(O.b,{to:"/users"},"Get User Info")),n.a.createElement(w.a,null,n.a.createElement(O.b,{to:"/pusers"},"Update User Info")),n.a.createElement(w.a,null,n.a.createElement(O.b,{hidden:!(e.loggedInUser&&"Finance-Manager"==e.loggedInUser.role),to:"/allusers",className:"nav-link",activeClassName:"active"},"Get All Users")))),n.a.createElement(v.a,{nav:!0,inNavbar:!0},n.a.createElement(b.a,{nav:!0,caret:!0},"Reimbursements"),n.a.createElement(I.a,{right:!0},n.a.createElement(w.a,null,n.a.createElement(O.b,{to:"/reimbursements"},"Get Reimbursement Info")),n.a.createElement(w.a,null,n.a.createElement(O.b,{to:"/newreimbursements"},"Submit New Reimbursement"))))),n.a.createElement(f.a,{tag:function(){return n.a.createElement(y.a,{hidden:!e.loggedInUser,onClick:e.logoutUser,color:"secondary",outline:!0},"Logout ",n.a.createElement(p.a,{to:"/login"}))}}))))},U=a(6),S=a.n(U),D=a(9),x=a(128),k=a(129),M=a(130),N=a(131),R=a(132),C=a(141),L=a(133),F=a(134),T=a(68),P=a.n(T),A=function e(t,a,r,n,s,o,c,i,u){Object(l.a)(this,e),this.reimID=void 0,this.author=void 0,this.amount=void 0,this.dateSubmitted=void 0,this.dateResolved=void 0,this.description=void 0,this.resolver=void 0,this.status=void 0,this.type=void 0,this.reimID=t,this.author=a,this.dateResolved=s,this.dateSubmitted=n,this.amount=r,this.description=o,this.resolver=c,this.status=i,this.type=u},G=function e(t,a,r,n,s,o,c){Object(l.a)(this,e),this.userID=void 0,this.userName=void 0,this.password=void 0,this.firstName=void 0,this.lastName=void 0,this.email=void 0,this.role=void 0,this.userID=t,this.userName=a,this.password=r,this.firstName=n,this.lastName=s,this.email=o,this.role=c},z=a(70),Y=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e,r){var n;return Object(l.a)(this,a),(n=t.call(this,e)).username=void 0,n.username=r,n}return a}(Object(z.a)(Error)),H=P.a.create({baseURL:"http://54.196.11.203:3001",withCredentials:!0});function J(e,t){return q.apply(this,arguments)}function q(){return(q=Object(D.a)(S.a.mark((function e(t,a){var r,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.post("/login",{username:t,password:a});case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:if(e.prev=8,e.t0=e.catch(0),401!==e.t0.response.status){e.next=14;break}throw new Y("Failed to authenticate",t);case 14:throw e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function B(){return W.apply(this,arguments)}function W(){return(W=Object(D.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.get("/users");case 2:return t=e.sent,e.abrupt("return",t.data.map((function(e){var t=e.userID,a=e.userName,r=e.password,n=e.firstName,s=e.lastName,o=e.email,l=e.role;return new G(t,a,r,n,s,o,l)})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(e){return Q.apply(this,arguments)}function Q(){return(Q=Object(D.a)(S.a.mark((function e(t){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.get("/users/".concat(t));case 2:return a=e.sent,e.abrupt("return",a.data.map((function(e){var t=e.userID,a=e.userName,r=e.password,n=e.firstName,s=e.lastName,o=e.email,l=e.role;return new G(t,a,r,n,s,o,l)})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e,t,a,r,n){return X.apply(this,arguments)}function X(){return(X=Object(D.a)(S.a.mark((function e(t,a,r,n,s){var o,l,c,i,u,m,p,d,h;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.patch("/users",{id:t,username:null,password:a,firstname:r,lastname:r,email:s,role:null});case 2:return o=e.sent,l=o.data,c=l.userID,i=l.userName,u=l.password,m=l.firstName,p=l.lastName,d=l.email,h=l.role,e.abrupt("return",[new G(c,i,u,m,p,d,h)]);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e){return $.apply(this,arguments)}function $(){return($=Object(D.a)(S.a.mark((function e(t){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.get("/reimbursements/user/".concat(t));case 2:return a=e.sent,e.abrupt("return",a.data.map((function(e){var t=e.reimID,a=e.author,r=e.amount,n=e.dateSubmitted,s=e.dateResolved,o=e.description,l=e.resolver,c=e.status,i=e.type;return new A(t,a,r,n,s,o,l,c,i)})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return ee.apply(this,arguments)}function ee(){return(ee=Object(D.a)(S.a.mark((function e(t){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.get("/reimbursements/status/".concat(t));case 2:return a=e.sent,e.abrupt("return",a.data.map((function(e){var t=e.reimID,a=e.author,r=e.amount,n=e.dateSubmitted,s=e.dateResolved,o=e.description,l=e.resolver,c=e.status,i=e.type;return new A(t,a,r,n,s,o,l,c,i)})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function te(e,t){return ae.apply(this,arguments)}function ae(){return(ae=Object(D.a)(S.a.mark((function e(t,a){var r,n,s,o,l,c,i,u,m,p,d;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.patch("/reimbursements",{id:t,status:a});case 2:return r=e.sent,n=r.data,s=n.reimID,o=n.author,l=n.amount,c=n.dateSubmitted,i=n.dateResolved,u=n.description,m=n.resolver,p=n.status,d=n.type,e.abrupt("return",[new A(s,o,l,c,i,u,m,p,d)]);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function re(e,t,a){return ne.apply(this,arguments)}function ne(){return(ne=Object(D.a)(S.a.mark((function e(t,a,r){var n,s,o,l,c,i,u,m,p,d,h;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.post("/reimbursements",{amount:t,description:a,type:r});case 2:return n=e.sent,s=n.data,o=s.reimID,l=s.author,c=s.amount,i=s.dateSubmitted,u=s.dateResolved,m=s.description,p=s.resolver,d=s.status,h=s.type,e.abrupt("return",[new A(o,l,c,i,u,m,p,d,h)]);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var se=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).setUsername=function(e){r.setState({username:e.currentTarget.value})},r.setPassword=function(e){r.setState({password:e.currentTarget.value})},r.clearError=function(){r.setState({errorMessage:"",isError:!1})},r.attemptLogin=function(){var e=Object(D.a)(S.a.mark((function e(t){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(t),e.prev=2,e.next=5,J(r.state.username,r.state.password);case 5:a=e.sent,r.props.updateUser(a),r.setState({username:"",password:""}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),r.setState({password:"",isError:!0,errorMessage:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),r.state={username:"",password:"",isError:!1,errorMessage:""},r}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("span",{style:{paddingLeft:"20px"},className:"style"}),n.a.createElement(x.a,{onSubmit:this.attemptLogin},n.a.createElement(k.a,{row:!0},n.a.createElement(M.a,{for:"username",sm:2},"Username"),n.a.createElement(N.a,{sm:6},n.a.createElement(R.a,{onChange:this.setUsername,value:this.state.username,type:"text",name:"username",id:"username",placeholder:"your username"}))),n.a.createElement(k.a,{row:!0},n.a.createElement(M.a,{for:"password",sm:2},"Password"),n.a.createElement(N.a,{sm:6},n.a.createElement(R.a,{onChange:this.setPassword,value:this.state.password,type:"password",name:"password",id:"password",required:!0}))),n.a.createElement(y.a,{color:"info"},"Submit")),n.a.createElement(C.a,{isOpen:this.state.isError},n.a.createElement(L.a,{icon:"danger",toggle:this.clearError},"Error!"),n.a.createElement(F.a,null,this.state.errorMessage)))}}]),a}(n.a.Component),oe=a(136),le=a(137),ce=a(135),ie=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement(ce.a,{striped:!0},n.a.createElement("thead",null,n.a.createElement("tr",null,Object.keys(this.props.objects[0]).map((function(e){return n.a.createElement("th",{key:e},e)})))),n.a.createElement("tbody",null,this.props.objects.map((function(e,t){return n.a.createElement("tr",{key:t},Object.values(e).map((function(e,t){return n.a.createElement("td",{key:t},e)})))}))))}}]),a}(n.a.Component),ue=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).setID=function(e){r.setState({id:e.currentTarget.value})},r.clearError=function(){r.setState({errorMessage:"",isError:!1})},r.attemptRetrieval=function(){var e=Object(D.a)(S.a.mark((function e(t){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(t),e.prev=2,e.next=5,K(r.state.id);case 5:a=e.sent,r.props.updateUsers(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),r.setState({isError:!0,errorMessage:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),r.state={id:0,isError:!1,errorMessage:""},r}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(x.a,{onSubmit:this.attemptRetrieval},n.a.createElement(k.a,{row:!0},n.a.createElement(M.a,{for:"ID",sm:8},"Enter ID for Employee"),n.a.createElement(N.a,{sm:6},n.a.createElement(R.a,{onChange:this.setID,value:this.state.id,type:"number",name:"ID",id:"id",placeholder:"input ID"}))),n.a.createElement(y.a,{color:"info"},"Submit")),n.a.createElement(C.a,{isOpen:this.state.isError},n.a.createElement(L.a,{icon:"danger",toggle:this.clearError},"Error!"),n.a.createElement(F.a,null,this.state.errorMessage)))}}]),a}(n.a.Component),me=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).updateUsers=function(e){r.setState({users:e})},r.clearError=function(){r.setState({isError:!1,errorMessage:""})},r.state={users:[],loggedInUser:r.props.loggedInUser[0],usersLoaded:!1,isError:!1,errorMessage:""},r}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(D.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{this.setState({loggedInUser:this.props.loggedInUser[0],users:this.props.loggedInUser,usersLoaded:!0})}catch(t){this.setState({isError:!0,errorMessage:t.message})}case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.isError?n.a.createElement("h3",null,"Error retrieving users: ",this.state.errorMessage):n.a.createElement(oe.a,null,n.a.createElement(le.a,null,this.state.usersLoaded?n.a.createElement(N.a,{md:{size:8}},"Finance-Manager"==this.state.loggedInUser.role?n.a.createElement("h4",null,"User Information"):n.a.createElement("h4",null,"Your Information"),n.a.createElement(ie,{objects:this.state.users})):n.a.createElement(n.a.Fragment,null),this.state.loggedInUser&&"Finance-Manager"==this.state.loggedInUser.role?n.a.createElement(N.a,null,n.a.createElement(ue,{updateUsers:this.updateUsers})):n.a.createElement(n.a.Fragment,null)))}}]),a}(n.a.Component),pe=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).updateUsers=function(e){r.setState({users:e})},r.clearError=function(){r.setState({isError:!1,errorMessage:""})},r.state={users:[],loggedInUser:r.props.loggedInUser,userLoaded:!1,isError:!1,errorMessage:""},r}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(D.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=this,e.next=4,B();case 4:e.t1=e.sent,e.t2={users:e.t1,userLoaded:!0},e.t0.setState.call(e.t0,e.t2),e.next=12;break;case 9:e.prev=9,e.t3=e.catch(0),this.setState({isError:!0,errorMessage:e.t3.message});case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.isError?n.a.createElement("h3",null,"Error retrieving users: ",this.state.errorMessage):n.a.createElement(oe.a,null,n.a.createElement(le.a,null,this.state.userLoaded?n.a.createElement(N.a,{md:{size:8}},"Finance-Manager"==this.state.loggedInUser.role?n.a.createElement("h4",null,"User Information"):n.a.createElement("h4",null,"Your Information"),n.a.createElement(ie,{objects:this.state.users})):n.a.createElement(n.a.Fragment,null)))}}]),a}(n.a.Component),de=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).setID=function(e){r.setState({id:e.currentTarget.value})},r.clearError=function(){r.setState({errorMessage:"",isError:!1})},r.attemptRetrieval=function(){var e=Object(D.a)(S.a.mark((function e(t){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(t),e.prev=2,e.next=5,Z(r.state.id);case 5:a=e.sent,r.props.updateReims(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),r.setState({isError:!0,errorMessage:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),r.state={id:0,isError:!1,errorMessage:""},r}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(x.a,{onSubmit:this.attemptRetrieval},n.a.createElement(k.a,{row:!0},n.a.createElement(M.a,{for:"ID",sm:8},"Enter ID for Employee"),n.a.createElement(N.a,{sm:6},n.a.createElement(R.a,{onChange:this.setID,value:this.state.id,type:"number",name:"ID",id:"id",placeholder:"input ID"}))),n.a.createElement(y.a,{color:"info"},"Submit")),n.a.createElement(C.a,{isOpen:this.state.isError},n.a.createElement(L.a,{icon:"danger",toggle:this.clearError},"Error!"),n.a.createElement(F.a,null,this.state.errorMessage)))}}]),a}(n.a.Component),he=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).setID=function(e){r.setState({id:e.currentTarget.value})},r.clearError=function(){r.setState({errorMessage:"",isError:!1})},r.attemptRetrieval=function(){var e=Object(D.a)(S.a.mark((function e(t){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(t),e.prev=2,e.next=5,_(r.state.id);case 5:a=e.sent,r.props.updateReims(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),r.setState({isError:!0,errorMessage:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),r.state={id:2,isError:!1,errorMessage:""},r}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(x.a,{onSubmit:this.attemptRetrieval},n.a.createElement(k.a,{row:!0},n.a.createElement(M.a,{for:"ID",sm:8},"Select option for Status type retrieval")),n.a.createElement(k.a,null,n.a.createElement("select",{value:this.state.id,onChange:this.setID},n.a.createElement("option",{value:"1"},"Approved"),n.a.createElement("option",{selected:!0,value:"2"},"Pending"),n.a.createElement("option",{value:"3"},"Denied"))),n.a.createElement(y.a,{color:"info"},"Submit")),n.a.createElement(C.a,{isOpen:this.state.isError},n.a.createElement(L.a,{icon:"danger",toggle:this.clearError},"Error!"),n.a.createElement(F.a,null,this.state.errorMessage)))}}]),a}(n.a.Component),Ee=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).setID=function(e){r.setState({id:e.currentTarget.value})},r.setStatus=function(e){r.setState({status:e.currentTarget.value})},r.clearError=function(){r.setState({errorMessage:"",isError:!1})},r.attemptPatch=function(){var e=Object(D.a)(S.a.mark((function e(t){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(t),e.prev=2,e.next=5,te(r.state.id,r.state.status);case 5:a=e.sent,r.props.updateReims(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),r.setState({isError:!0,errorMessage:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),r.state={id:0,status:"Pending",isError:!1,errorMessage:""},r}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(x.a,{onSubmit:this.attemptPatch},n.a.createElement(k.a,{row:!0},n.a.createElement(M.a,{for:"ID",sm:8},"Enter Reim ID to update and Status ID to update to"),n.a.createElement(N.a,{sm:6},n.a.createElement(R.a,{onChange:this.setID,value:this.state.id,type:"number",name:"ID",id:"id",placeholder:"input ID"}))),n.a.createElement(k.a,null,n.a.createElement("select",{value:this.state.status,onChange:this.setStatus},n.a.createElement("option",{value:"Approved"},"Approved"),n.a.createElement("option",{selected:!0,value:"Pending"},"Pending"),n.a.createElement("option",{value:"Denied"},"Denied"))),n.a.createElement(y.a,{color:"info"},"Submit")),n.a.createElement(C.a,{isOpen:this.state.isError},n.a.createElement(L.a,{icon:"danger",toggle:this.clearError},"Error!"),n.a.createElement(F.a,null,this.state.errorMessage)))}}]),a}(n.a.Component),ge=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).updateReims=function(e){r.setState({reim:e})},r.clearError=function(){r.setState({isError:!1,errorMessage:""})},r.state={reim:[],loggedInUser:r.props.loggedInUser,reimLoaded:!1,isError:!1,errorMessage:""},r}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(D.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=this,e.t1=this.props.loggedInUser,e.next=5,Z(this.props.loggedInUser.userID);case 5:e.t2=e.sent,e.t3={loggedInUser:e.t1,reim:e.t2,reimLoaded:!0},e.t0.setState.call(e.t0,e.t3),e.next=13;break;case 10:e.prev=10,e.t4=e.catch(0),this.setState({isError:!0,errorMessage:e.t4.message});case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.isError?n.a.createElement("h3",null,"Error retrieving users: ",this.state.errorMessage):n.a.createElement(oe.a,null,n.a.createElement(le.a,null,this.state.loggedInUser&&"Finance-Manager"==this.state.loggedInUser.role?n.a.createElement(N.a,null,n.a.createElement("h4",null,"Get User's Reimbursements"),n.a.createElement(de,{updateReims:this.updateReims}),n.a.createElement("h4",null,"Get Reimbursements by Status"),n.a.createElement(he,{updateReims:this.updateReims}),n.a.createElement("h4",null,"Update Reimbursement Status by ReimID"),n.a.createElement(Ee,{updateReims:this.updateReims})):n.a.createElement(n.a.Fragment,null),this.state.reimLoaded?n.a.createElement(N.a,{md:{size:8}},"Finance-Manager"==this.state.loggedInUser.role?n.a.createElement("h4",null,"User Information"):n.a.createElement("h4",null,"Your Information"),n.a.createElement(ie,{objects:this.state.reim})):n.a.createElement(n.a.Fragment,null)))}}]),a}(n.a.Component),fe=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).setDesc=function(e){r.setState({description:e.currentTarget.value})},r.setType=function(e){r.setState({type:e.currentTarget.value})},r.setAmount=function(e){r.setState({amount:e.currentTarget.value})},r.clearError=function(){r.setState({errorMessage:"",isError:!1})},r.attemptPost=function(){var e=Object(D.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(t),e.prev=2,e.next=5,re(r.state.amount,r.state.description,r.state.type);case 5:e.sent,alert("Reimbursement posted successfully"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),r.setState({isError:!0,errorMessage:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),r.state={amount:0,description:"",type:"Other",isError:!1,errorMessage:""},r}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(x.a,{onSubmit:this.attemptPost},n.a.createElement(k.a,{row:!0},n.a.createElement(M.a,{for:"ID",sm:8},"Enter Amount to be Reimbursed"),n.a.createElement(N.a,{sm:6},n.a.createElement(R.a,{onChange:this.setAmount,value:this.state.amount,type:"number",name:"ID",id:"id",placeholder:"input amount"}))),n.a.createElement(k.a,{row:!0},n.a.createElement(M.a,{for:"desc",sm:8},"Enter Description"),n.a.createElement(N.a,{sm:6},n.a.createElement(R.a,{onChange:this.setDesc,value:this.state.description,type:"text",name:"desc",id:"desc",placeholder:"Input Description"}))),n.a.createElement(k.a,null,n.a.createElement(M.a,{for:"desc"},"Enter Expense Type"),n.a.createElement("div",null,n.a.createElement("select",{value:this.state.type,onChange:this.setType},n.a.createElement("option",{value:"Lodging"},"Lodging"),n.a.createElement("option",{selected:!0,value:"Travel"},"Travel"),n.a.createElement("option",{value:"Food"},"Food"),n.a.createElement("option",{value:"Other"},"Other")))),n.a.createElement(y.a,{color:"info"},"Submit")),n.a.createElement(C.a,{isOpen:this.state.isError},n.a.createElement(L.a,{icon:"danger",toggle:this.clearError},"Error!"),n.a.createElement(F.a,null,this.state.errorMessage)))}}]),a}(n.a.Component),ve=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).setFirst=function(e){r.setState({firstName:e.currentTarget.value})},r.setLast=function(e){r.setState({lastName:e.currentTarget.value})},r.setEmail=function(e){r.setState({email:e.currentTarget.value})},r.setPass=function(e){r.setState({password:e.currentTarget.value})},r.clearError=function(){r.setState({errorMessage:"",isError:!1})},r.attemptPatch=function(){var e=Object(D.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(t),e.prev=2,e.next=5,V(r.state.loggedInUser.userID,r.state.password,r.state.firstName,r.state.lastName,r.state.email);case 5:e.sent,r.props.logoutUser(),alert("User update successfully, please log back in"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),r.setState({isError:!0,errorMessage:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),r.state={loggedInUser:r.props.loggedInUser,firstName:null,lastName:null,email:null,password:null,isError:!1,errorMessage:""},r}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(x.a,{onSubmit:this.attemptPatch},n.a.createElement("h4",null,"Leave fields blank if they shouldn't be updated"),n.a.createElement(k.a,{row:!0},n.a.createElement(M.a,{for:"ID",sm:8},"Enter new First Name"),n.a.createElement(N.a,{sm:6},n.a.createElement(R.a,{onChange:this.setFirst,value:this.state.firstName,type:"text",name:"ID",id:"id",placeholder:"name"}))),n.a.createElement(k.a,{row:!0},n.a.createElement(M.a,{for:"ID",sm:8},"Enter new Last Name"),n.a.createElement(N.a,{sm:6},n.a.createElement(R.a,{onChange:this.setLast,value:this.state.lastName,type:"text",name:"ID",id:"id",placeholder:"name"}))),n.a.createElement(k.a,{row:!0},n.a.createElement(M.a,{for:"ID",sm:8},"Enter new email"),n.a.createElement(N.a,{sm:6},n.a.createElement(R.a,{onChange:this.setEmail,value:this.state.email,type:"text",name:"ID",id:"id",placeholder:"email"}))),n.a.createElement(k.a,{row:!0},n.a.createElement(M.a,{for:"ID",sm:8},"Enter new password"),n.a.createElement(N.a,{sm:6},n.a.createElement(R.a,{onChange:this.setPass,value:this.state.password,type:"password",name:"ID",id:"id",placeholder:""}))),n.a.createElement(y.a,{color:"info"},"Submit")),n.a.createElement(C.a,{isOpen:this.state.isError},n.a.createElement(L.a,{icon:"danger",toggle:this.clearError},"Error!"),n.a.createElement(F.a,null,this.state.errorMessage)))}}]),a}(n.a.Component),be=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).updateUser=function(e){r.setState({loggedInUser:e})},r.clearLogin=function(){r.setState({loggedInUser:null})},r.state={loggedInUser:null},r}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"ERS Client"),n.a.createElement("h2",null,"Hello ",this.state.loggedInUser?this.state.loggedInUser.firstName+" "+this.state.loggedInUser.lastName:"guest"),n.a.createElement(O.a,null,n.a.createElement(j,{loggedInUser:this.state.loggedInUser,logoutUser:this.clearLogin}),n.a.createElement(p.d,null,n.a.createElement(p.b,{exact:!0,path:"/"},this.state.loggedInUser?n.a.createElement(n.a.Fragment,null):n.a.createElement(p.a,{to:"/login"})),n.a.createElement(p.b,{path:"/home"},n.a.createElement("h2",null,"Welcome"," ",this.state.loggedInUser&&"Finance-Manager"==this.state.loggedInUser.role?"home manager,":this.state.loggedInUser?"home, ".concat(this.state.loggedInUser.userName,"!"):"guest!")),n.a.createElement(p.b,{path:"/login"}," ",n.a.createElement(se,{updateUser:this.updateUser}),this.state.loggedInUser?n.a.createElement(p.a,{to:"/home"}):n.a.createElement(n.a.Fragment,null)),n.a.createElement(p.b,{path:"/users",render:function(t){return n.a.createElement(me,{loggedInUser:[e.state.loggedInUser]})}}),n.a.createElement(p.b,{path:"/pusers",render:function(t){return n.a.createElement(ve,{loggedInUser:e.state.loggedInUser,logoutUser:e.clearLogin})}}),n.a.createElement(p.b,{path:"/allusers",render:function(t){return n.a.createElement(pe,{loggedInUser:e.state.loggedInUser})}}),n.a.createElement(p.b,{path:"/reimbursements"}," ",n.a.createElement(ge,{loggedInUser:this.state.loggedInUser})),n.a.createElement(p.b,{path:"/newreimbursements"}," ",n.a.createElement(fe,{loggedInUser:this.state.loggedInUser})),n.a.createElement(p.b,null,this.state.loggedInUser?n.a.createElement(n.a.Fragment,null):n.a.createElement(p.a,{to:"/login"})))),n.a.createElement("h4",null,this.state.loggedInUser?"":"Please login before proceeding."))}}]),a}(n.a.Component);a(120);o.a.render(n.a.createElement(be,null),document.getElementById("root"))},71:function(e,t,a){e.exports=a(121)}},[[71,1,2]]]);
//# sourceMappingURL=main.7416d226.chunk.js.map