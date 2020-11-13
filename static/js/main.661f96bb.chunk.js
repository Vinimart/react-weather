(this["webpackJsonpreact-weather"]=this["webpackJsonpreact-weather"]||[]).push([[0],{16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),c=a.n(r),s=a(9),i=a.n(s),o=(a(16),a(2)),h=a(3),u=a(6),d=a(5),l=a(4),b=a.p+"images/6aecb827c40d4e1bff9cdfff09b69e20-preloader.svg",p=a(8),j=a.n(p),v=a(10),f={key:"2f66048c0472a33ffb7149e006c911b5",base:"https://api.openweathermap.org/data/2.5/"},g=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).key=f.key,e.base=f.base,e.lang="pt_br",e.unit="metric",e}return Object(h.a)(a,[{key:"fetchWeather",value:function(){var e=Object(v.a)(j.a.mark((function e(t){var a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.base,"weather?q=").concat(t,"&lang=").concat(this.lang,"&units=").concat(this.unit,"&appid=").concat(this.key));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),a}(c.a.Component),m=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"getDate",value:function(){var e=(new Date).toLocaleString("pt-br",{year:"numeric",month:"short",weekday:"long",day:"numeric"});return this.date=e.charAt(0).toUpperCase()+e.slice(1),this.date}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"location-box",children:[Object(n.jsxs)("div",{className:"location",children:[this.props.city,", ",this.props.country]}),Object(n.jsx)("div",{className:"date",children:this.getDate()})]})}}]),a}(c.a.Component),O=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).unit="\xb0C",e}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"weather-box",children:[Object(n.jsx)("div",{className:"temp",children:"".concat(this.props.temp).concat(this.unit)}),Object(n.jsx)("div",{className:"weather",children:this.props.desc})]})}}]),a}(c.a.Component),y=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).getApi=new g,e.state={value:"Itaja\xed"},e.handleChange=e.handleChange.bind(Object(u.a)(e)),e.keyPress=e.keyPress.bind(Object(u.a)(e)),e.fetchApi(),e}return Object(h.a)(a,[{key:"changeBackground",value:function(e){switch(this.app=document.querySelector(".App"),this.bg="warm",!0){case e<=10:this.bg="cold",this.setBackground(this.bg);break;case e>=11&&e<=25:this.bg="warm",this.setBackground(this.bg);break;case e>=26&&e<=30:this.bg="hot",this.setBackground(this.bg);break;case e>=31:this.bg="hotter",this.setBackground(this.bg);break;default:this.setBackground(this.bg)}}},{key:"setBackground",value:function(e){for(var t=this.app.classList;t.length>1;)t.remove(t.item(1));this.app.classList.add(e)}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"keyPress",value:function(e){if(13===e.keyCode){if(this.prevQuery===this.state.value)return;this.fetchApi()}}},{key:"fetchApi",value:function(){var e=this;this.getApi.fetchWeather(this.state.value).then((function(t){e.props.onLoaded(),e.weather={city:t.name,country:t.sys.country,temp:Math.round(t.main.temp),desc:t.weather[0].description},e.prevQuery=e.state.value,e.changeBackground(e.weather.temp),e.forceUpdate()})).catch((function(){console.warn("Por favor, insira uma localiza\xe7\xe3o v\xe1lida")}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"weather-container",children:[Object(n.jsx)("div",{className:"search-box",children:Object(n.jsx)("input",{type:"text",className:"search-bar",placeholder:"Insira uma localiza\xe7\xe3o e pressione 'enter'",value:this.state.value,onKeyDown:this.keyPress,onChange:this.handleChange})}),this.weather?Object(n.jsxs)("div",{className:"weather-main",children:[Object(n.jsx)(m,{city:this.weather.city,country:this.weather.country}),Object(n.jsx)(O,{temp:this.weather.temp,desc:this.weather.desc})]}):""]})}}]),a}(c.a.Component),k=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).hideLoader=n.hideLoader.bind(Object(u.a)(n)),n}return Object(h.a)(a,[{key:"hideLoader",value:function(){var e=this;setTimeout((function(){e.preloader.style.display="none"}),1e3)}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{id:"preloader",className:"preloader",ref:function(t){e.preloader=t},children:Object(n.jsx)("img",{src:b,alt:"preloader"})}),Object(n.jsx)(y,{onLoaded:this.hideLoader})]})}}]),a}(c.a.Component);var w=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)("main",{children:Object(n.jsx)(k,{})})})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(w,{})}),document.getElementById("root")),x()}},[[18,1,2]]]);
//# sourceMappingURL=main.661f96bb.chunk.js.map