(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(7),s=a.n(l),r=a(1),i=a(2),o=a(4),m=a(3),u=(a(14),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"preloader",value:function(){var e=document.querySelector(".preloader");setTimeout(function(){e.style.opacity="0",setTimeout(function(){e.style.display="none"},1e3)},3e3)}},{key:"componentDidMount",value:function(){this.preloader()}},{key:"render",value:function(){return c.a.createElement("div",{className:"preloader"},c.a.createElement("div",{class:"spinner_wrap"},c.a.createElement("div",{class:"spinner"})))}}]),a}(n.Component)),d=a(5),v=(a(15),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).count=n.count.bind(Object(d.a)(n)),n.state={days:0,minutes:0,hours:0,secounds:0,time_up:""},n.x=null,n.deadline=null,n}return Object(i.a)(a,[{key:"count",value:function(){var e=(new Date).getTime(),t=this.deadline-e,a=Math.floor(t/864e5),n=Math.floor(t%864e5/36e5),c=Math.floor(t%36e5/6e4),l=Math.floor(t%6e4/1e3),s=a<10?"0"+a:a,r=n<10?"0"+n:n,i=c<10?"0"+c:c,o=l<10?"0"+l:l;this.setState({days:s,minutes:i,hours:r,seconds:o}),t<0&&(clearInterval(this.x),this.setState({days:0,minutes:0,hours:0,seconds:0,time_up:"TIME IS UP"}))}},{key:"componentDidMount",value:function(){this.deadline=new Date("Dec 15, 2022 21:00:00").getTime(),this.x=setInterval(this.count,1e3)}},{key:"render",value:function(){var e=this.state,t=e.days,a=e.seconds,n=e.hours,l=e.minutes;return c.a.createElement("div",{id:"countdown"},c.a.createElement("div",{className:"col-4"},c.a.createElement("div",{className:"box"},c.a.createElement("p",{id:"day"},t),c.a.createElement("span",{className:"text"},"Days"))),c.a.createElement("div",{className:"col-4"},c.a.createElement("div",{className:"box"},c.a.createElement("p",{id:"hour"},n),c.a.createElement("span",{className:"text"},"Hours"))),c.a.createElement("div",{className:"col-4"},c.a.createElement("div",{className:"box"},c.a.createElement("p",{id:"minute"},l),c.a.createElement("span",{className:"text"},"Minutes"))),c.a.createElement("div",{className:"col-4"},c.a.createElement("div",{className:"box"},c.a.createElement("p",{id:"second"},a),c.a.createElement("span",{className:"text"},"Seconds"))))}}]),a}(n.Component)),E=(a(16),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"modal",value:function(){var e=document.getElementById("modal");e.classList.toggle("is_open")}},{key:"render",value:function(){return c.a.createElement("div",{className:"optin"},c.a.createElement("div",{id:"modal"},c.a.createElement("div",{className:"wrapper"},c.a.createElement("h3",null,"Enter Your Email"),c.a.createElement("div",{className:"clearfix"},c.a.createElement("div",{className:"col-8"}),c.a.createElement("div",{className:"col-3"})))))}}]),a}(n.Component));a(17);function p(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"overlay"}),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"sub_container"},c.a.createElement("img",{src:"/assets/img/wma_logo.jpeg"}),c.a.createElement("h2",null,"Official Website of Western Musicians Assosiation ( WMA )",c.a.createElement("br",null),"Coming Soon"),c.a.createElement(v,null),c.a.createElement(E,null),c.a.createElement(u,null))))}var f=document.getElementById("root");s.a.render(c.a.createElement(p,null),f)}],[[8,1,2]]]);
//# sourceMappingURL=main.b760ece4.chunk.js.map