(this.webpackJsonpfootball=this.webpackJsonpfootball||[]).push([[0],{100:function(e,a,t){e.exports=t(176)},105:function(e,a,t){},106:function(e,a,t){},176:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(20),c=t.n(l),m=(t(105),t(11)),s=t(12),o=t(14),i=t(13),d=t(15),u=(t(106),t(6)),h=t(70),E=t(92),p=t(177),f=t(178),g=t(179),b=t(180),y=t(181),v=t(182),N=t(183),k=t(184),j=t(185),w=t(186),O=t(16),x=t(18),L=[{id:1,altText:"The Best",captionHeader:"FC GAMITSY",captionText:"welcome",src:"./assets/images/slide1.jpg"},{id:2,altText:"One team",captionHeader:"PLAY",captionText:"FOOTBAL",src:"./assets/images/slide2.jpg"},{id:3,altText:"It's just",captionHeader:"It's just",captionText:"A game",src:"./assets/images/slide3.jpg"}],T=function(){var e=Object(n.useState)(0),a=Object(h.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!1),m=Object(h.a)(c,2),s=m[0],o=m[1],i=function(){if(!s){var e=t===L.length-1?0:t+1;l(e)}},d=function(){if(!s){var e=0===t?L.length-1:t-1;l(e)}},u=L.map((function(e){return r.a.createElement(E.a,{img:e.src,className:"custom-tag drk",tag:"div",key:e.id,onExiting:function(){return o(!0)},onExited:function(){return o(!1)}},r.a.createElement("div",{class:"overlay"},r.a.createElement("img",{class:"fluid",src:e.src,alt:e.altText})),r.a.createElement(p.a,{captionText:e.captionText,captionHeader:e.captionHeader}))}));return r.a.createElement(f.a,{activeIndex:t,next:i,previous:d},r.a.createElement(g.a,{items:L,activeIndex:t,onClickHandler:function(e){s||l(e)}}),u,r.a.createElement(b.a,{direction:"prev",directionText:"Previous",onClickHandler:d}),r.a.createElement(b.a,{direction:"next",directionText:"Next",onClickHandler:i}))},C=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(o.a)(this,Object(i.a)(a).call(this,e))).toggleNav=t.toggleNav.bind(Object(u.a)(t)),t.state={isNavOpen:!1},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"render",value:function(){return r.a.createElement("div",{name:"home"},r.a.createElement(y.a,{id:"navi",class:"nav-bar",dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(v.a,{onClick:this.toggleNav}),r.a.createElement(N.a,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:"./assets/images/fc_logo1.jpg",height:"30",alt:"FC Gamitsy"})),r.a.createElement("div",{className:"navbar-list"},r.a.createElement(k.a,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(j.a,{navbar:!0},r.a.createElement(w.a,null,r.a.createElement(O.b,{className:"nav-link",to:"#home"},r.a.createElement(x.Link,{to:"home",spy:!0,smooth:!0},"HOME"))),r.a.createElement(w.a,null,r.a.createElement(O.b,{className:"nav-link",to:"#team"},r.a.createElement(x.Link,{to:"team",spy:!0,smooth:!0},"TEAM"))),r.a.createElement(w.a,null,r.a.createElement(O.b,{className:"nav-link",to:"#history"},r.a.createElement(x.Link,{to:"history",spy:!0,smooth:!0},"HISTORY"))),r.a.createElement(w.a,null,r.a.createElement(O.b,{className:"nav-link",to:"#contact"},r.a.createElement(x.Link,{to:"contact",spy:!0,smooth:!0},"CONTACTS")))))))),r.a.createElement(T,null))}}]),a}(n.Component);var F=function(){return r.a.createElement("div",{className:"row row-content footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-md-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",{className:"liLink"},r.a.createElement(O.b,{className:"nav-link",to:"#home"},r.a.createElement(x.Link,{to:"home",spy:!0,smooth:!0},"Home"))),r.a.createElement("li",{className:"liLink"},r.a.createElement(O.b,{className:"nav-link",to:"#team"},r.a.createElement(x.Link,{to:"team",spy:!0,smooth:!0},"Team"))),r.a.createElement("li",{className:"liLink"},r.a.createElement(O.b,{className:"nav-link",to:"#history"},r.a.createElement(x.Link,{to:"history",spy:!0,smooth:!0},"History"))),r.a.createElement("li",{className:"liLink"},r.a.createElement(O.b,{className:"nav-link",to:"#contact"},r.a.createElement(x.Link,{to:"contact",spy:!0,smooth:!0},"Contact Us"))))),r.a.createElement("div",{className:"col-7 col-md-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"Russia, Perm region",r.a.createElement("br",null),"Osa city",r.a.createElement("br",null),">",r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +7 912 1111111",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",r.a.createElement("a",{href:"mailto:subz05@bk.ru"},"fcga@gmail.com"))),r.a.createElement("div",{className:"col-12 col-md-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2020 Football Club Gamitsy")))))},M=t(187),S=t(188),I=t(189),A=t(190),R=t(93),Z=function(e){function a(){return Object(m.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(R.a,{videoId:"TWlh_p06Tbc",opts:{height:"437.89",width:"100%",playerVars:{autoplay:0}},onReady:this._onReady})}},{key:"_onReady",value:function(e){e.target.pauseVideo()}}]),a}(r.a.Component);var q=function(){return r.a.createElement("div",{name:"history"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{className:"row row-content description-bottom"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,'Starting in 1996, FC "Gamitsy" quickly gained popularity among the local boys and girls. Daily training sessions led to the formation of the main players of the team. The achievements of the team - prizes in a friendly and on the football games.')),r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement(M.a,null,r.a.createElement(S.a,{id:"CardStatistic",className:"text-white"},"Facts At a Glance"),r.a.createElement(I.a,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"1996 year"),r.a.createElement("dt",{className:"col-6"},"Format of games"),r.a.createElement("dd",{className:"col-6"},"5x5, 11x11")))))),r.a.createElement("div",{className:"row description-top"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement(M.a,{className:"tactical"},r.a.createElement(A.a,{width:"100%",src:"assets/images/tactical.jpg"}),r.a.createElement(I.a,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You were born to be a player. You were meant to be here. This moment is yours."),r.a.createElement("footer",{className:"blockquote-footer"},"Herb Brooks"))))),r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement(Z,{id:"Intro"})))))},P=t(191),D=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Now Loading . . ."))},H=function(e){function a(e){return Object(m.a)(this,a),Object(o.a)(this,Object(i.a)(a).call(this,e))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.players.map((function(e){return r.a.createElement("div",{className:"col-12 col-md-4 foto-teams"},r.a.createElement(M.a,{key:e.id},r.a.createElement(A.a,{className:"ramka img-shadow-1",src:e.image,alt:e.name}),r.a.createElement(P.a,null)))}));return this.props.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(D,null))):r.a.createElement("div",{name:"team",className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",{id:"TeamHeader"},"Our Team"))),r.a.createElement("div",{className:"row justify-content-between"},e))}}]),a}(n.Component),Y=t(192),_=t(193),J=t(194),G=t(195),V=t(10),U=t(97),B=function(e){return e&&e.length},z=function(e){return function(a){return!a||a.length<=e}},W=function(e){return function(a){return a&&a.length>=e}},K=function(e){return!isNaN(Number(e))},$=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)};function Q(e){var a=e.comments;e.addComment;return a?r.a.createElement("div",{className:"col-12 col-md9 offset-md-1"},r.a.createElement("h4",null,"Comments"),r.a.createElement("ul",{className:"list-unstyled comments-text"},a.map((function(e){var a=new Date(e.date).toLocaleDateString("en-Us",{day:"numeric",month:"short",year:"numeric"});return r.a.createElement("ul",{class:"list-unstyled"},r.a.createElement(U.Fade,{in:!0},r.a.createElement("li",{class:"media"},r.a.createElement("img",{src:"https://yt3.ggpht.com/a/AGF-l7_KVyuiY0btstoTirAqjnQyPwC6mB9y8CfwJg=s900-c-k-c0xffffffff-no-rj-mo",class:"mr-3",alt:"author"}),r.a.createElement("div",{class:"media-body"},r.a.createElement("h5",{class:"mt-0"},e.author,", ",a),e.comment)),r.a.createElement("li",null,r.a.createElement("br",null))))})))):r.a.createElement("div",null)}var X=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(o.a)(this,Object(i.a)(a).call(this,e))).handleSubmit=t.handleSubmit.bind(Object(u.a)(t)),t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"handleSubmit",value:function(e){this.props.addComment(e.firstname,e.message),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{name:"contact",id:"submitForm",className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send Us Your Feedback")),r.a.createElement("div",{className:"col-12"},r.a.createElement(V.Form,{model:"feedback",onSubmit:function(a){return e.handleSubmit(a)}},r.a.createElement(Y.a,{className:"form-group"},r.a.createElement(_.a,{htmlFor:"firstname",md:2},"First Name"),r.a.createElement(J.a,{md:10},r.a.createElement(V.Control.text,{model:".firstname",name:"firstname",id:"firstname",className:"form-control",placeholder:"First Name",validators:{required:B,minLength:W(3),maxLength:z(15)}}),r.a.createElement(V.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(Y.a,{className:"form-group"},r.a.createElement(_.a,{htmlFor:"lastname",md:2},"Last Name"),r.a.createElement(J.a,{md:10},r.a.createElement(V.Control.text,{model:".lastname",name:"lastname",id:"lastname",className:"form-control",placeholder:"Last Name",validators:{required:B,minLength:W(3),maxLength:z(15)}}),r.a.createElement(V.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(Y.a,{className:"form-group"},r.a.createElement(_.a,{htmlFor:"telnum",md:2},"Tel."),r.a.createElement(J.a,{md:10},r.a.createElement(V.Control.text,{model:".telnum",name:"telnum",id:"telnum",className:"form-control",placeholder:"x (xxx) xxx-xxxx",validators:{required:B,minLength:W(3),maxLength:z(15),isNumber:K}}),r.a.createElement(V.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required ",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}}))),r.a.createElement(Y.a,{className:"form-group"},r.a.createElement(_.a,{htmlFor:"email",md:2},"Email"),r.a.createElement(J.a,{md:10},r.a.createElement(V.Control.text,{model:".email",name:"email",id:"email",className:"form-control",placeholder:"E-mail",validators:{required:B,validEmail:$}}),r.a.createElement(V.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required ",validEmail:"Invalid Email Address"}}))),r.a.createElement(Y.a,{className:"form-group"},r.a.createElement(J.a,{className:"submitLeft",md:{size:10,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(_.a,{check:!0},r.a.createElement(V.Control.checkbox,{model:".agree",className:"form-check-input"})," "," ",r.a.createElement("strong",null,"May we contact you?"))))),r.a.createElement(Y.a,{className:"form-group"},r.a.createElement(_.a,{htmlFor:"message",md:2},"Your Feedback"),r.a.createElement(J.a,{md:10},r.a.createElement(V.Control.textarea,{model:".message",name:"message",id:"message",className:"form-control",placeholder:"Message"}))),r.a.createElement(Y.a,{className:"form-group"},r.a.createElement(J.a,{className:"submitLeft",md:{size:10,offset:2}},r.a.createElement(G.a,{type:"submit",color:"warning"},"Send Feedback"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(Q,{comments:this.props.comments,addComment:this.props.addComment}))))}}]),a}(n.Component),ee=t(21),ae=[{id:0,name:"Roman",image:"assets/images/player1.jpg",number:"10",amplua:"Keeper"},{id:1,name:"Alexey",image:"assets/images/player2.jpg",number:"6",amplua:"Forward"},{id:2,name:"Petr",image:"assets/images/player3.jpg",number:"3",amplua:"Winger"},{id:3,name:"Vitaliy",image:"assets/images/player4.jpg",number:"12",amplua:"Fullback"},{id:4,name:"Jakov",image:"assets/images/player5.jpg",number:"4",amplua:"Centerback"},{id:5,name:"Mikhail",image:"assets/images/player6.jpg",number:"5",amplua:"Centerback"}],te=function(){return{type:"PLAYERS_LOADING"}},ne=function(e){return{type:"ADD_PLAYERS",payload:e}},re=function(e){function a(e){return Object(m.a)(this,a),Object(o.a)(this,Object(i.a)(a).call(this,e))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchPlayers()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement(H,{players:this.props.players.players,isLoading:this.props.players.isLoading,errMess:this.props.players.errMess}),r.a.createElement(q,null),r.a.createElement(X,{comments:this.props.comments,addComment:this.props.addComment,resetFeedbackForm:this.props.resetFeedbackForm}),r.a.createElement(F,null))}}]),a}(n.Component),le=Object(ee.connect)((function(e){return{players:e.players,comments:e.comments}}),(function(e){return{addComment:function(a,t){return e(function(e,a){return{type:"ADD_COMMENT",payload:{author:e,comment:a}}}(a,t))},fetchPlayers:function(){e((function(e){e(te(!0)),setTimeout((function(){e(ne(ae))}),2e3)}))},resetFeedbackForm:function(){e(V.actions.reset("feedback"))}}}))(re),ce=t(33),me=t(22),se=t(98),oe=t(99),ie=t.n(oe),de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,players:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_PLAYERS":return Object(ce.a)({},e,{isLoading:!1,errMess:null,players:a.payload});case"PLAYERS_LOADING":return Object(ce.a)({},e,{isLoading:!0,errMess:null,players:[]});case"PLAYERS_FAILED":return Object(ce.a)({},e,{isLoading:!1,errMess:a.payload});default:return e}},ue=[{id:0,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:1,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:2,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:3,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:4,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:6,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:7,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:8,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:9,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:10,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:11,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:12,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:13,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:14,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:15,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:16,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:17,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:18,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:19,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"}],he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_COMMENT":var t=a.payload;return t.id=e.length,t.date=(new Date).toISOString(),e.concat(t);default:return e}},Ee={firstname:"",lastname:"",telnum:"",email:"",agree:!1,message:""},pe=Object(me.createStore)(Object(me.combineReducers)(Object(ce.a)({players:de,comments:he},Object(V.createForms)({feedback:Ee}))),Object(me.applyMiddleware)(se.a,ie.a)),fe=function(e){function a(){return Object(m.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(ee.Provider,{store:pe},r.a.createElement(O.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(le,null))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(173),t(174),t(175);c.a.render(r.a.createElement(fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[100,1,2]]]);
//# sourceMappingURL=main.4b21154e.chunk.js.map