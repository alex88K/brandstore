 /*--Animation----------------------*/

(function() {
	var $animation_elements = $('.animation-elem'),
		$window = $(window);

	function check_if_in_view() {
		var window_height = $window.height(),
			window_top_position = $window.scrollTop(),
			window_bottom_position = (window_top_position + window_height);
		
		$.each($animation_elements, function() {
			var $element = $(this),
				element_height = $element.outerHeight(),
				element_top_position = $element.offset().top,
				element_bottom_position = (element_top_position + element_height);
				
			if ((element_bottom_position >= window_top_position) &&
				(element_top_position <= window_bottom_position)) {
				$element.addClass('in-view');
			} else { 
				$element.removeClass('in-view');
			}	
		});
	}

	$window.on('scroll', check_if_in_view);
	$window.trigger('scroll');
})();

(function() {
	function stick_the_menu() {
		var w_top_pos = $(window).scrollTop(),
			header = $('.main-header'),
			header_h = header.outerHeight();

		if ($('body').hasClass('inner')) {
			return false;
		} else {
			if (w_top_pos > 1) {
				header.addClass('fixed-menu');
			} else {
				header.removeClass('fixed-menu');
			} 
		}
	}

	$(window).on('scroll', stick_the_menu);
})();

// $(function(){
// 	var colors = [
// 		[0x5c,0x40,0xa6],
// 		[231, 77, 141],

// 		[0x7b,0x9f,0xde],
// 		[253, 175, 94]
// 	];

// 	var step = 0;
// 	//color table indices for:
// 	// current color left
// 	// next color left
// 	// current color right
// 	// next color right
// 	var colorIndices = [0,1,2,3];

// 	//transition speed
// 	var gradientSpeed = 0.005;

// 	function updateGradient() {
// 		var c0_0 = colors[colorIndices[0]];
// 		var c0_1 = colors[colorIndices[1]];
// 		var c1_0 = colors[colorIndices[2]];
// 		var c1_1 = colors[colorIndices[3]];

// 		var istep = 1 - step;
// 		var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
// 		var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
// 		var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
// 		var color1 = "#"+((r1 << 16) | (g1 << 8) | b1).toString(16);

// 		var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
// 		var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
// 		var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
// 		var color2 = "#"+((r2 << 16) | (g2 << 8) | b2).toString(16);

// 		$('.inner-simple .main-header').css({
// 		background: "linear-gradient(-45deg, "+color1+" 0%, "+color2+" 100%)"});

// 		step += gradientSpeed;
// 		if ( step >= 1 ){
// 			step %= 1;
// 			colorIndices[0] = colorIndices[1];
// 			colorIndices[2] = colorIndices[3];

// 			//pick two new target color indices
// 			//do not pick the same as the current one
// 			colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
// 			colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
// 		}
// 	}
// 	setInterval(updateGradient,30);
// });

/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.1
*/
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});

/*! jQuery & Zepto Lazy v1.7.3 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2016 Daniel 'Eisbehr' Kern */
!function(t,e){"use strict";function r(r,a,i,l,u){function c(){L=t.devicePixelRatio>1,f(i),a.delay>=0&&setTimeout(function(){s(!0)},a.delay),(a.delay<0||a.combined)&&(l.e=v(a.throttle,function(t){"resize"===t.type&&(w=B=-1),s(t.all)}),l.a=function(t){f(t),i.push.apply(i,t)},l.g=function(){return i=n(i).filter(function(){return!n(this).data(a.loadedName)})},s(),n(a.appendScroll).on("scroll."+u+" resize."+u,l.e))}function f(t){var i=a.defaultImage,o=a.placeholder,l=a.imageBase,u=a.srcsetAttribute,c=a.loaderAttribute,f=a._f||{};t=n(t).filter(function(){var t=n(this),r=b(this);return!t.data(a.handledName)&&(t.attr(a.attribute)||t.attr(u)||t.attr(c)||f[r]!==e)}).data("plugin_"+a.name,r);for(var s=0,d=t.length;s<d;s++){var A=n(t[s]),m=b(t[s]),h=A.attr(a.imageBaseAttribute)||l;m==N&&h&&A.attr(u)&&A.attr(u,g(A.attr(u),h)),f[m]===e||A.attr(c)||A.attr(c,f[m]),m==N&&i&&!A.attr(E)?A.attr(E,i):m==N||!o||A.css(O)&&"none"!=A.css(O)||A.css(O,"url('"+o+"')")}}function s(t){if(!i.length)return void(a.autoDestroy&&r.destroy());for(var e=!1,o=a.imageBase||"",l=a.srcsetAttribute,u=a.handledName,c=0;c<i.length;c++)if(t||A(i[c])){var f=n(i[c]),s=b(i[c]),m=f.attr(a.attribute),h=f.attr(a.imageBaseAttribute)||o,g=f.attr(a.loaderAttribute);f.data(u)||a.visibleOnly&&!f.is(":visible")||!((m||f.attr(l))&&(s==N&&(h+m!=f.attr(E)||f.attr(l)!=f.attr(F))||s!=N&&h+m!=f.css(O))||g)||(e=!0,f.data(u,!0),d(f,s,h,g))}e&&(i=n(i).filter(function(){return!n(this).data(u)}))}function d(t,e,r,i){++z;var o=function(){y("onError",t),p(),o=n.noop};y("beforeLoad",t);var l=a.attribute,u=a.srcsetAttribute,c=a.sizesAttribute,f=a.retinaAttribute,s=a.removeAttribute,d=a.loadedName,A=t.attr(f);if(i){var m=function(){s&&t.removeAttr(a.loaderAttribute),t.data(d,!0),y(T,t),setTimeout(p,1),m=n.noop};t.off(I).one(I,o).one(D,m),y(i,t,function(e){e?(t.off(D),m()):(t.off(I),o())})||t.trigger(I)}else{var h=n(new Image);h.one(I,o).one(D,function(){t.hide(),e==N?t.attr(C,h.attr(C)).attr(F,h.attr(F)).attr(E,h.attr(E)):t.css(O,"url('"+h.attr(E)+"')"),t[a.effect](a.effectTime),s&&(t.removeAttr(l+" "+u+" "+f+" "+a.imageBaseAttribute),c!==C&&t.removeAttr(c)),t.data(d,!0),y(T,t),h.remove(),p()});var b=(L&&A?A:t.attr(l))||"";h.attr(C,t.attr(c)).attr(F,t.attr(u)).attr(E,b?r+b:null),h.complete&&h.load()}}function A(t){var e=t.getBoundingClientRect(),r=a.scrollDirection,n=a.threshold,i=h()+n>e.top&&-n<e.bottom,o=m()+n>e.left&&-n<e.right;return"vertical"==r?i:"horizontal"==r?o:i&&o}function m(){return w>=0?w:w=n(t).width()}function h(){return B>=0?B:B=n(t).height()}function b(t){return t.tagName.toLowerCase()}function g(t,e){if(e){var r=t.split(",");t="";for(var a=0,n=r.length;a<n;a++)t+=e+r[a].trim()+(a!==n-1?",":"")}return t}function v(t,e){var n,i=0;return function(o,l){function u(){i=+new Date,e.call(r,o)}var c=+new Date-i;n&&clearTimeout(n),c>t||!a.enableThrottle||l?u():n=setTimeout(u,t-c)}}function p(){--z,i.length||z||y("onFinishedAll")}function y(t,e,n){return!!(t=a[t])&&(t.apply(r,[].slice.call(arguments,1)),!0)}var z=0,w=-1,B=-1,L=!1,T="afterLoad",D="load",I="error",N="img",E="src",F="srcset",C="sizes",O="background-image";"event"==a.bind||o?c():n(t).on(D+"."+u,c)}function a(a,o){var l=this,u=n.extend({},l.config,o),c={},f=u.name+"-"+ ++i;return l.config=function(t,r){return r===e?u[t]:(u[t]=r,l)},l.addItems=function(t){return c.a&&c.a("string"===n.type(t)?n(t):t),l},l.getItems=function(){return c.g?c.g():{}},l.update=function(t){return c.e&&c.e({},!t),l},l.loadAll=function(){return c.e&&c.e({all:!0},!0),l},l.destroy=function(){return n(u.appendScroll).off("."+f,c.e),n(t).off("."+f),c={},e},r(l,u,a,c,f),u.chainable?a:l}var n=t.jQuery||t.Zepto,i=0,o=!1;n.fn.Lazy=n.fn.lazy=function(t){return new a(this,t)},n.Lazy=n.lazy=function(t,r,i){if(n.isFunction(r)&&(i=r,r=[]),n.isFunction(i)){t=n.isArray(t)?t:[t],r=n.isArray(r)?r:[r];for(var o=a.prototype.config,l=o._f||(o._f={}),u=0,c=t.length;u<c;u++)(o[t[u]]===e||n.isFunction(o[t[u]]))&&(o[t[u]]=i);for(var f=0,s=r.length;f<s;f++)l[r[f]]=t[0]}},a.prototype.config={name:"lazy",chainable:!0,autoDestroy:!0,bind:"load",threshold:500,visibleOnly:!1,appendScroll:t,scrollDirection:"both",imageBase:null,defaultImage:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",placeholder:null,delay:-1,combined:!1,attribute:"data-src",srcsetAttribute:"data-srcset",sizesAttribute:"data-sizes",retinaAttribute:"data-retina",loaderAttribute:"data-loader",imageBaseAttribute:"data-imagebase",removeAttribute:!0,handledName:"handled",loadedName:"loaded",effect:"show",effectTime:0,enableThrottle:!0,throttle:250,beforeLoad:e,afterLoad:e,onError:e,onFinishedAll:e},n(t).on("load",function(){o=!0})}(window);

/*!
 * baguetteBox.js
 * @author  feimosi
 * @version 1.8.1
 * @url https://github.com/feimosi/baguetteBox.js
 */
!function(t,e){"use strict";"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.baguetteBox=e()}(this,function(){"use strict";function t(t,n){M.transforms=k(),M.svg=w(),i(),o(t),e(t,n)}function e(t,e){var n=document.querySelectorAll(t),o={galleries:[],nodeList:n};U[t]=o,[].forEach.call(n,function(t){e&&e.filter&&(V=e.filter);var n=[];if(n="A"===t.tagName?[t]:t.getElementsByTagName("a"),n=[].filter.call(n,function(t){return V.test(t.href)}),0!==n.length){var i=[];[].forEach.call(n,function(t,n){var o=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1,u(i,e),c(n)},a={eventHandler:o,imageElement:t};E(t,"click",o),i.push(a)}),o.galleries.push(i)}})}function n(){for(var t in U)U.hasOwnProperty(t)&&o(t)}function o(t){if(U.hasOwnProperty(t)){var e=U[t].galleries;[].forEach.call(e,function(t){[].forEach.call(t,function(t){B(t.imageElement,"click",t.eventHandler)}),R===t&&(R=[])}),delete U[t]}}function i(){return(S=T("baguetteBox-overlay"))?(P=T("baguetteBox-slider"),F=T("previous-button"),H=T("next-button"),void(L=T("close-button"))):(S=N("div"),S.setAttribute("role","dialog"),S.id="baguetteBox-overlay",document.getElementsByTagName("body")[0].appendChild(S),P=N("div"),P.id="baguetteBox-slider",S.appendChild(P),F=N("button"),F.setAttribute("type","button"),F.id="previous-button",F.setAttribute("aria-label","Previous"),F.innerHTML=M.svg?I:"&lt;",S.appendChild(F),H=N("button"),H.setAttribute("type","button"),H.id="next-button",H.setAttribute("aria-label","Next"),H.innerHTML=M.svg?Y:"&gt;",S.appendChild(H),L=N("button"),L.setAttribute("type","button"),L.id="close-button",L.setAttribute("aria-label","Close"),L.innerHTML=M.svg?q:"&times;",S.appendChild(L),F.className=H.className=L.className="baguetteBox-button",void r())}function a(t){switch(t.keyCode){case 37:v();break;case 39:h();break;case 27:p()}}function r(){E(S,"click",J),E(F,"click",K),E(H,"click",Q),E(L,"click",Z),E(S,"touchstart",$),E(S,"touchmove",_),E(S,"touchend",tt),E(document,"focus",et,!0)}function l(){B(S,"click",J),B(F,"click",K),B(H,"click",Q),B(L,"click",Z),B(S,"touchstart",$),B(S,"touchmove",_),B(S,"touchend",tt),B(document,"focus",et,!0)}function u(t,e){if(R!==t){for(R=t,s(e);P.firstChild;)P.removeChild(P.firstChild);W.length=0;for(var n,o=[],i=[],a=0;a<t.length;a++)n=N("div"),n.className="full-image",n.id="baguette-img-"+a,W.push(n),o.push("baguetteBox-figure-"+a),i.push("baguetteBox-figcaption-"+a),P.appendChild(W[a]);S.setAttribute("aria-labelledby",o.join(" ")),S.setAttribute("aria-describedby",i.join(" "))}}function s(t){t||(t={});for(var e in X)j[e]=X[e],"undefined"!=typeof t[e]&&(j[e]=t[e]);P.style.transition=P.style.webkitTransition="fadeIn"===j.animation?"opacity .4s ease":"slideIn"===j.animation?"":"none","auto"===j.buttons&&("ontouchstart"in window||1===R.length)&&(j.buttons=!1),F.style.display=H.style.display=j.buttons?"":"none";try{S.style.backgroundColor=j.overlayBackgroundColor}catch(t){}}function c(t){j.noScrollbars&&(document.documentElement.style.overflowY="hidden",document.body.style.overflowY="scroll"),"block"!==S.style.display&&(E(document,"keydown",a),z=t,D={count:0,startX:null,startY:null},m(z,function(){x(z),C(z)}),y(),S.style.display="block",j.fullScreen&&f(),setTimeout(function(){S.className="visible",j.afterShow&&j.afterShow()},50),j.onChange&&j.onChange(z,W.length),G=document.activeElement,d())}function d(){j.buttons?F.focus():L.focus()}function f(){S.requestFullscreen?S.requestFullscreen():S.webkitRequestFullscreen?S.webkitRequestFullscreen():S.mozRequestFullScreen&&S.mozRequestFullScreen()}function g(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}function p(){j.noScrollbars&&(document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto"),"none"!==S.style.display&&(B(document,"keydown",a),S.className="",setTimeout(function(){S.style.display="none",g(),j.afterHide&&j.afterHide()},500),G.focus())}function m(t,e){var n=W[t];if("undefined"!=typeof n){if(n.getElementsByTagName("img")[0])return void(e&&e());var o=R[t].imageElement,i=o.getElementsByTagName("img")[0],a="function"==typeof j.captions?j.captions.call(R,o):o.getAttribute("data-caption")||o.title,r=b(o),l=N("figure");if(l.id="baguetteBox-figure-"+t,l.innerHTML='<div class="baguetteBox-spinner"><div class="baguetteBox-double-bounce1"></div><div class="baguetteBox-double-bounce2"></div></div>',j.captions&&a){var u=N("figcaption");u.id="baguetteBox-figcaption-"+t,u.innerHTML=a,l.appendChild(u)}n.appendChild(l);var s=N("img");s.onload=function(){var n=document.querySelector("#baguette-img-"+t+" .baguetteBox-spinner");l.removeChild(n),!j.async&&e&&e()},s.setAttribute("src",r),s.alt=i?i.alt||"":"",j.titleTag&&a&&(s.title=a),l.appendChild(s),j.async&&e&&e()}}function b(t){var e=t.href;if(t.dataset){var n=[];for(var o in t.dataset)"at-"!==o.substring(0,3)||isNaN(o.substring(3))||(n[o.replace("at-","")]=t.dataset[o]);for(var i=Object.keys(n).sort(function(t,e){return parseInt(t,10)<parseInt(e,10)?-1:1}),a=window.innerWidth*window.devicePixelRatio,r=0;r<i.length-1&&i[r]<a;)r++;e=n[i[r]]||e}return e}function h(){var t;return z<=W.length-2?(z++,y(),x(z),t=!0):j.animation&&(P.className="bounce-from-right",setTimeout(function(){P.className=""},400),t=!1),j.onChange&&j.onChange(z,W.length),t}function v(){var t;return z>=1?(z--,y(),C(z),t=!0):j.animation&&(P.className="bounce-from-left",setTimeout(function(){P.className=""},400),t=!1),j.onChange&&j.onChange(z,W.length),t}function y(){var t=100*-z+"%";"fadeIn"===j.animation?(P.style.opacity=0,setTimeout(function(){M.transforms?P.style.transform=P.style.webkitTransform="translate3d("+t+",0,0)":P.style.left=t,P.style.opacity=1},400)):M.transforms?P.style.transform=P.style.webkitTransform="translate3d("+t+",0,0)":P.style.left=t}function k(){var t=N("div");return"undefined"!=typeof t.style.perspective||"undefined"!=typeof t.style.webkitPerspective}function w(){var t=N("div");return t.innerHTML="<svg/>","http://www.w3.org/2000/svg"===(t.firstChild&&t.firstChild.namespaceURI)}function x(t){t-z>=j.preload||m(t+1,function(){x(t+1)})}function C(t){z-t>=j.preload||m(t-1,function(){C(t-1)})}function E(t,e,n,o){t.addEventListener?t.addEventListener(e,n,o):t.attachEvent("on"+e,n)}function B(t,e,n,o){t.removeEventListener?t.removeEventListener(e,n,o):t.detachEvent("on"+e,n)}function T(t){return document.getElementById(t)}function N(t){return document.createElement(t)}function A(){l(),n(),B(document,"keydown",a),document.getElementsByTagName("body")[0].removeChild(document.getElementById("baguetteBox-overlay")),U={},R=[],z=0}var S,P,F,H,L,I='<svg width="44" height="60"><polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',Y='<svg width="44" height="60"><polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',q='<svg width="30" height="30"><g stroke="rgb(160,160,160)" stroke-width="4"><line x1="5" y1="5" x2="25" y2="25"/><line x1="5" y1="25" x2="25" y2="5"/></g></svg>',j={},X={captions:!0,fullScreen:!1,noScrollbars:!1,titleTag:!1,buttons:"auto",async:!1,preload:2,animation:"slideIn",afterShow:null,afterHide:null,onChange:null,overlayBackgroundColor:"rgba(0,0,0,.8)"},M={},R=[],z=0,D={},O=!1,V=/.+\.(gif|jpe?g|png|webp)/i,U={},W=[],G=null,J=function(t){t.target.id.indexOf("baguette-img")!==-1&&p()},K=function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,v()},Q=function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,h()},Z=function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,p()},$=function(t){D.count++,D.count>1&&(D.multitouch=!0),D.startX=t.changedTouches[0].pageX,D.startY=t.changedTouches[0].pageY},_=function(t){if(!O&&!D.multitouch){t.preventDefault?t.preventDefault():t.returnValue=!1;var e=t.touches[0]||t.changedTouches[0];e.pageX-D.startX>40?(O=!0,v()):e.pageX-D.startX<-40?(O=!0,h()):D.startY-e.pageY>100&&p()}},tt=function(){D.count--,D.count<=0&&(D.multitouch=!1),O=!1},et=function(t){"block"!==S.style.display||S.contains(t.target)||(t.stopPropagation(),d())};return[].forEach||(Array.prototype.forEach=function(t,e){for(var n=0;n<this.length;n++)t.call(e,this[n],n,this)}),[].filter||(Array.prototype.filter=function(t,e,n,o,i){for(n=this,o=[],i=0;i<n.length;i++)t.call(e,n[i],i,n)&&o.push(n[i]);return o}),{run:t,destroy:A,showNext:h,showPrevious:v}});


$(document).ready(function() {

	$('[data-toggle="tooltip"]').tooltip();

/*--Sliders-------------------------*/ 

	var universalCarousel = $('.universal-carousel .owl-carousel');

	if (universalCarousel.length > 0) {
		universalCarousel.owlCarousel({ 
			autoplay: false,
			autoplayTimeout: 5000,
			items: 1,
			loop: true,
			dots: false,
			smartSpeed: 800,
			fluidSpeed: 800,
		});
	}

	var topCarousel = $('#top-carousel .owl-carousel');

	if (topCarousel.length > 0) {
		topCarousel.owlCarousel({ 
			autoplay: false,
			autoplayTimeout: 5000,
			items: 1,
			loop: true,
			dots: false,
			smartSpeed: 800,
			fluidSpeed: 800,
		});
	}

	topCarousel.on('change.owl.carousel', function(event) {
	   var $currentItem = $('.owl-item', topCarousel).eq(event.item.index);
	   var $elemsToanim = $currentItem.find("[data-animation-out]");
	   setAnimation ($elemsToanim, 'out');
	});

	topCarousel.on('changed.owl.carousel', function(event) {
	   var $currentItem = $('.owl-item', topCarousel).eq(event.item.index);
	   var $elemsToanim = $currentItem.find("[data-animation-in]");
	   setAnimation ($elemsToanim, 'in');
	});

	function setAnimation ( _elem, _InOut ) {
		var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

	 	_elem.each ( function () {
	   	var $elem = $(this);
	   	var $animationType = 'animated ' + $elem.data( 'animation-' + _InOut );

	   	$elem.addClass($animationType).one(animationEndEvent, function () {
	   		$elem.removeClass($animationType); 
	   	});
	 	});
	}

	$('.carousel-nav .right').click(function() {
		$('.owl-carousel').trigger('next.owl.carousel');
  	});

  	$('.carousel-nav .left').click(function() {
		$('.owl-carousel').trigger('prev.owl.carousel');
  	});

	$('#results-carousel').carousel({ interval: 5000 });
	$('#letters-carousel').carousel({ interval: 5000 });

/*------------------------------------*/ 

	$("input[name='m-phone'").mask("+7 (999) 999-9999");

	baguetteBox.run('.letter-gallery');

	$('#top-details').on('click', function(e) {
		e.preventDefault();
		
		var in_h = $('.inner-top').height(),
			 body = $('body, html');

		body.animate({ scrollTop: in_h }, 1000);
	});

/*--Random TABs-----------------*/

	var tabs = $('.nav-tabs li').length,
		 i = parseInt(Math.floor(Math.random() * tabs));
	
	$('.nav-tabs a:eq(' + i + ') ').tab('show');

/*--dropdown-toggle & hamburger toggle--------------------*/

	$(document).on('click', '.dropdown a > .dropdown-toggle', function(e) {
		e.stopPropagation();
      $(this).parent().parent().toggleClass('open');
      return false;
   });

	$('.navbar-toggle').on('click', function() {
		$(this).toggleClass('on');
	});

/*--form signin-------------------------*/

	$('.form-signin input, .form-signin textarea').on('change', function() {
		$(this).next('label').addClass('stick-label');

		if ($(this).val() == '') {
			$(this).next('label').removeClass('stick-label');
		}
	});

	$.each($('.form-signin input, .form-signin textarea'), function() {
		if ($(this).val() != '') {
			$(this).next('label').addClass('stick-label');
		}
	});

/*--Readmore----------------------------*/

	$('.readMore').on('click', function(e) {
		e.preventDefault();

		var el = $(this).prev('p'),
			 h = el.addClass('check').height();

		el.removeClass('check');
		el.addClass('checked').animate({ height: h}, 600)
			.next('a')
			.animate({ opacity: 0 }, 400);
	});

/*--Gallery project HOVER-------------*/

	$('.site-project').hover(function() {
		$(this).addClass('on');
	}, function() { 
		$(this).removeClass('on');
	});

/*--Vacancy page checkbox------------*/

	$('.vacancy-title').on('click', function() {
		$(this).toggleClass('active').next().slideToggle(400);
		$(this).find('.glyphicon').toggleClass('rotate');
	});

/*--Modal form------------------------*/

	// $('.form-signin').submit(function(e) {
	// 	e.preventDefault();
	// 	$('#sendmail-form').modal('hide');
	// 	$('#thanks-modal').modal('show');
	// });

/*--Form submit--------------------*/

	$(document).on('af_complete', function(event,response) {
		var form_id = response.form.parents('.modal').attr('id');
		if (response.success) {
			$('#'+form_id).modal('hide');
			$('#thanks-modal').modal('show');
		}
	});

/*--Anchor nav-------------------------*/

	$('#anchor-nav a, a[href="#contact-block"]').on('click', function(e) {
		e.preventDefault();
	   var hash = this.hash;
	   var res = $(hash).offset().top;

	   $('html, body').animate({
	   	scrollTop: res
	   }, 1000, function(){
	   	window.location.hash = hash;
	   });
	});

	var subNav = $('#sub-nav'),
		 anchorNav = $('#anchor-nav');

	if (anchorNav.length) {
		anchorNav.affix({
			offset: {
		   	top: anchorNav.offset().top
			}
		});
	}
	
	if (subNav.length) {
		subNav.affix({
			offset: {
		   	top: subNav.offset().top
			}
		});
	}

});

/*--Lazyload img -----------*/

$(function() {
   $('.lazy').Lazy({
   	scrollDirection: 'vertical',
		effect: 'fadeIn',
		effectTime: 400,
		visibleOnly: true,
		onError: function(element) {
			console.log('error loading ' + element.data('src'));
		}
   });
});