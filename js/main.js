$(document).ready((function(){function e(e){var t=e.find("li").length;t>3&&(e.find("li:nth-last-child(-n+3)").clone().prependTo(e),e.addClass("animate-left"),e.css("animation-duration",5*t+"s"))}$(document).ready((function(){$slideLeft=$(".slide-list"),$slideLeft.bind("contentchanged",(function(){e($slideLeft)})),e($slideLeft)}));let t=$(".submenu > a");if($(t).click((function(e){e.preventDefault(),$(this).toggleClass("show"),$(t).not($(this)).removeClass("show")})),$(document).click((function(e){let n=$(e.target);n.closest(".submenu a").length||n.closest(".submenu .sublist").length||$(t).removeClass("show")})),$(".ipinfobox__body-readmore").click((function(e){e.preventDefault(),$(this).parent().toggleClass(),$(this).find("span").toggle()})),$(".header__burgerbtn").click((function(){$(".header__nav").addClass("show"),$(".menugb").addClass("show")})),$(".mobclosemenu").click((function(){$(".header__nav").removeClass("show"),$(".menugb").removeClass("show")})),$("*").is("#navi-text")){const e=[{text:"Build the Future - better, faster, together!"},{text:"Build the Future - better, faster, together!"},{text:"Build the Future - better, faster, together!"}];async function n(e,t,n=100){const o=e.split("");let i=0;for(;i<o.length;)await a(n),$(t).append(o[i]),i++}async function o(e){const t=$(e).html().split("");for(;t.length>0;)await a(100),t.pop(),$(e).html(t.join(""))}function i(e,t){$(e).css("color",t)}function a(e){return new Promise((t=>setTimeout(t,e)))}$(document).ready((async function(){!async function(e,t){var r=0;for(;;)i(t,e[r].color),await n(e[r].text,t),await a(1500),await o(t),await a(500),++r>=e.length&&(r=0)}(e,"#feature-text")}))}var r,c,s,l,d,u,h,f=!0;function m(e){var t=posy=0;e.pageX||e.pageY?(t=e.pageX,posy=e.pageY):(e.clientX||e.clientY)&&(t=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,posy=e.clientY+document.body.scrollTop+document.documentElement.scrollTop),h.x=t,h.y=posy}function g(){f=!(document.body.scrollTop>c)}function v(){r=window.innerWidth,c=window.innerHeight,s.style.height=c+"px",l.width=r,l.height=c}function w(){if(f)for(var e in d.clearRect(0,0,r,c),u)Math.abs(x(h,u[e]))<4e3?(u[e].active=.3,u[e].circle.active=.6):Math.abs(x(h,u[e]))<2e4?(u[e].active=.1,u[e].circle.active=.3):Math.abs(x(h,u[e]))<4e4?(u[e].active=.02,u[e].circle.active=.1):(u[e].active=0,u[e].circle.active=0),y(u[e]),u[e].circle.draw();requestAnimationFrame(w)}function p(e){TweenLite.to(e,1+1*Math.random(),{x:e.originX-50+100*Math.random(),y:e.originY-50+100*Math.random(),ease:Circ.easeInOut,onComplete:function(){p(e)}})}function y(e){if(e.active)for(var t in e.closest)d.beginPath(),d.moveTo(e.x,e.y),d.lineTo(e.closest[t].x,e.closest[t].y),d.strokeStyle="rgba(156,217,249,"+e.active+")",d.stroke()}function b(e,t,n){var o=this;o.pos=e||null,o.radius=t||null,o.color=n||null,this.draw=function(){o.active&&(d.beginPath(),d.arc(o.pos.x,o.pos.y,o.radius,0,2*Math.PI,!1),d.fillStyle="rgba(156,217,249,"+o.active+")",d.fill())}}function x(e,t){return Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2)}!function(){r=window.innerWidth,c=window.innerHeight,h={x:r/2,y:c/2},(s=document.getElementById("large-header")).style.height=c+"px",(l=document.getElementById("demo-canvas")).width=r,l.height=c,d=l.getContext("2d"),u=[];for(var e=0;e<r;e+=r/20)for(var t=0;t<c;t+=c/20){var n=e+Math.random()*r/20,o=t+Math.random()*c/20,i={x:n,originX:n,y:o,originY:o};u.push(i)}for(var a=0;a<u.length;a++){for(var f=[],m=u[a],g=0;g<u.length;g++){var v=u[g];if(m!=v){for(var w=!1,p=0;p<5;p++)w||null==f[p]&&(f[p]=v,w=!0);for(p=0;p<5;p++)w||x(m,v)<x(m,f[p])&&(f[p]=v,w=!0)}}m.closest=f}for(var a in u){var y=new b(u[a],2+6*Math.random(),"rgba(255,255,255, .6)");u[a].circle=y}}(),function(){for(var e in w(),u)p(u[e])}(),function(){"ontouchstart"in window||window.addEventListener("mousemove",m);window.addEventListener("scroll",g),window.addEventListener("resize",v)}()}));