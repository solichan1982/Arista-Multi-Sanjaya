/*! jQuery Migrate v3.4.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e,window)}):"object"==typeof module&&module.exports?module.exports=t(require("jquery"),window):t(jQuery,window)}(function(s,n){"use strict";function e(e){return 0<=function(e,t){for(var r=/^(\d+)\.(\d+)\.(\d+)/,n=r.exec(e)||[],o=r.exec(t)||[],a=1;a<=3;a++){if(+o[a]<+n[a])return 1;if(+n[a]<+o[a])return-1}return 0}(s.fn.jquery,e)}s.migrateVersion="3.4.1";var t=Object.create(null);s.migrateDisablePatches=function(){for(var e=0;e<arguments.length;e++)t[arguments[e]]=!0},s.migrateEnablePatches=function(){for(var e=0;e<arguments.length;e++)delete t[arguments[e]]},s.migrateIsPatchEnabled=function(e){return!t[e]},n.console&&n.console.log&&(s&&e("3.0.0")&&!e("5.0.0")||n.console.log("JQMIGRATE: jQuery 3.x-4.x REQUIRED"),s.migrateWarnings&&n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),n.console.log("JQMIGRATE: Migrate is installed"+(s.migrateMute?"":" with logging active")+", version "+s.migrateVersion));var o={};function u(e,t){var r=n.console;!s.migrateIsPatchEnabled(e)||s.migrateDeduplicateWarnings&&o[t]||(o[t]=!0,s.migrateWarnings.push(t+" ["+e+"]"),r&&r.warn&&!s.migrateMute&&(r.warn("JQMIGRATE: "+t),s.migrateTrace&&r.trace&&r.trace()))}function r(e,t,r,n,o){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return u(n,o),r},set:function(e){u(n,o),r=e}})}function a(e,t,r,n,o){var a=e[t];e[t]=function(){return o&&u(n,o),(s.migrateIsPatchEnabled(n)?r:a||s.noop).apply(this,arguments)}}function c(e,t,r,n,o){if(!o)throw new Error("No warning message provided");return a(e,t,r,n,o),0}function i(e,t,r,n){return a(e,t,r,n),0}s.migrateDeduplicateWarnings=!0,s.migrateWarnings=[],void 0===s.migrateTrace&&(s.migrateTrace=!0),s.migrateReset=function(){o={},s.migrateWarnings.length=0},"BackCompat"===n.document.compatMode&&u("quirks","jQuery is not compatible with Quirks Mode");var d,l,p,f={},m=s.fn.init,y=s.find,h=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,g=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,v=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;for(d in i(s.fn,"init",function(e){var t=Array.prototype.slice.call(arguments);return s.migrateIsPatchEnabled("selector-empty-id")&&"string"==typeof e&&"#"===e&&(u("selector-empty-id","jQuery( '#' ) is not a valid selector"),t[0]=[]),m.apply(this,t)},"selector-empty-id"),s.fn.init.prototype=s.fn,i(s,"find",function(t){var r=Array.prototype.slice.call(arguments);if("string"==typeof t&&h.test(t))try{n.document.querySelector(t)}catch(e){t=t.replace(g,function(e,t,r,n){return"["+t+r+'"'+n+'"]'});try{n.document.querySelector(t),u("selector-hash","Attribute selector with '#' must be quoted: "+r[0]),r[0]=t}catch(e){u("selector-hash","Attribute selector with '#' was not fixed: "+r[0])}}return y.apply(this,r)},"selector-hash"),y)Object.prototype.hasOwnProperty.call(y,d)&&(s.find[d]=y[d]);c(s.fn,"size",function(){return this.length},"size","jQuery.fn.size() is deprecated and removed; use the .length property"),c(s,"parseJSON",function(){return JSON.parse.apply(null,arguments)},"parseJSON","jQuery.parseJSON is deprecated; use JSON.parse"),c(s,"holdReady",s.holdReady,"holdReady","jQuery.holdReady is deprecated"),c(s,"unique",s.uniqueSort,"unique","jQuery.unique is deprecated; use jQuery.uniqueSort"),r(s.expr,"filters",s.expr.pseudos,"expr-pre-pseudos","jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),r(s.expr,":",s.expr.pseudos,"expr-pre-pseudos","jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),e("3.1.1")&&c(s,"trim",function(e){return null==e?"":(e+"").replace(v,"$1")},"trim","jQuery.trim is deprecated; use String.prototype.trim"),e("3.2.0")&&(c(s,"nodeName",function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},"nodeName","jQuery.nodeName is deprecated"),c(s,"isArray",Array.isArray,"isArray","jQuery.isArray is deprecated; use Array.isArray")),e("3.3.0")&&(c(s,"isNumeric",function(e){var t=typeof e;return("number"==t||"string"==t)&&!isNaN(e-parseFloat(e))},"isNumeric","jQuery.isNumeric() is deprecated"),s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){f["[object "+t+"]"]=t.toLowerCase()}),c(s,"type",function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?f[Object.prototype.toString.call(e)]||"object":typeof e},"type","jQuery.type is deprecated"),c(s,"isFunction",function(e){return"function"==typeof e},"isFunction","jQuery.isFunction() is deprecated"),c(s,"isWindow",function(e){return null!=e&&e===e.window},"isWindow","jQuery.isWindow() is deprecated")),s.ajax&&(l=s.ajax,p=/(=)\?(?=&|$)|\?\?/,i(s,"ajax",function(){var e=l.apply(this,arguments);return e.promise&&(c(e,"success",e.done,"jqXHR-methods","jQXHR.success is deprecated and removed"),c(e,"error",e.fail,"jqXHR-methods","jQXHR.error is deprecated and removed"),c(e,"complete",e.always,"jqXHR-methods","jQXHR.complete is deprecated and removed")),e},"jqXHR-methods"),e("4.0.0")||s.ajaxPrefilter("+json",function(e){!1!==e.jsonp&&(p.test(e.url)||"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&p.test(e.data))&&u("jsonp-promotion","JSON-to-JSONP auto-promotion is deprecated")}));var j=s.fn.removeAttr,b=s.fn.toggleClass,w=/\S+/g;function x(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}i(s.fn,"removeAttr",function(e){var r=this,n=!1;return s.each(e.match(w),function(e,t){s.expr.match.bool.test(t)&&r.each(function(){if(!1!==s(this).prop(t))return!(n=!0)}),n&&(u("removeAttr-bool","jQuery.fn.removeAttr no longer sets boolean properties: "+t),r.prop(t,!1))}),j.apply(this,arguments)},"removeAttr-bool"),i(s.fn,"toggleClass",function(t){return void 0!==t&&"boolean"!=typeof t?b.apply(this,arguments):(u("toggleClass-bool","jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var e=this.getAttribute&&this.getAttribute("class")||"";e&&s.data(this,"__className__",e),this.setAttribute&&this.setAttribute("class",!e&&!1!==t&&s.data(this,"__className__")||"")}))},"toggleClass-bool");var Q,A,R=!1,C=/^[a-z]/,N=/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;s.swap&&s.each(["height","width","reliableMarginRight"],function(e,t){var r=s.cssHooks[t]&&s.cssHooks[t].get;r&&(s.cssHooks[t].get=function(){var e;return R=!0,e=r.apply(this,arguments),R=!1,e})}),i(s,"swap",function(e,t,r,n){var o,a,i={};for(a in R||u("swap","jQuery.swap() is undocumented and deprecated"),t)i[a]=e.style[a],e.style[a]=t[a];for(a in o=r.apply(e,n||[]),t)e.style[a]=i[a];return o},"swap"),e("3.4.0")&&"undefined"!=typeof Proxy&&(s.cssProps=new Proxy(s.cssProps||{},{set:function(){return u("cssProps","jQuery.cssProps is deprecated"),Reflect.set.apply(this,arguments)}})),e("4.0.0")?(A={animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},"undefined"!=typeof Proxy?s.cssNumber=new Proxy(A,{get:function(){return u("css-number","jQuery.cssNumber is deprecated"),Reflect.get.apply(this,arguments)},set:function(){return u("css-number","jQuery.cssNumber is deprecated"),Reflect.set.apply(this,arguments)}}):s.cssNumber=A):A=s.cssNumber,Q=s.fn.css,i(s.fn,"css",function(e,t){var r,n,o=this;return e&&"object"==typeof e&&!Array.isArray(e)?(s.each(e,function(e,t){s.fn.css.call(o,e,t)}),this):("number"==typeof t&&(r=x(e),n=r,C.test(n)&&N.test(n[0].toUpperCase()+n.slice(1))||A[r]||u("css-number",'Number-typed values are deprecated for jQuery.fn.css( "'+e+'", value )')),Q.apply(this,arguments))},"css-number");var S,P,k,H,E=s.data;i(s,"data",function(e,t,r){var n,o,a;if(t&&"object"==typeof t&&2===arguments.length){for(a in n=s.hasData(e)&&E.call(this,e),o={},t)a!==x(a)?(u("data-camelCase","jQuery.data() always sets/gets camelCased names: "+a),n[a]=t[a]):o[a]=t[a];return E.call(this,e,o),t}return t&&"string"==typeof t&&t!==x(t)&&(n=s.hasData(e)&&E.call(this,e))&&t in n?(u("data-camelCase","jQuery.data() always sets/gets camelCased names: "+t),2<arguments.length&&(n[t]=r),n[t]):E.apply(this,arguments)},"data-camelCase"),s.fx&&(k=s.Tween.prototype.run,H=function(e){return e},i(s.Tween.prototype,"run",function(){1<s.easing[this.easing].length&&(u("easing-one-arg","'jQuery.easing."+this.easing.toString()+"' should use only one argument"),s.easing[this.easing]=H),k.apply(this,arguments)},"easing-one-arg"),S=s.fx.interval,P="jQuery.fx.interval is deprecated",n.requestAnimationFrame&&Object.defineProperty(s.fx,"interval",{configurable:!0,enumerable:!0,get:function(){return n.document.hidden||u("fx-interval",P),s.migrateIsPatchEnabled("fx-interval")&&void 0===S?13:S},set:function(e){u("fx-interval",P),S=e}}));var M=s.fn.load,q=s.event.add,O=s.event.fix;s.event.props=[],s.event.fixHooks={},r(s.event.props,"concat",s.event.props.concat,"event-old-patch","jQuery.event.props.concat() is deprecated and removed"),i(s.event,"fix",function(e){var t,r=e.type,n=this.fixHooks[r],o=s.event.props;if(o.length){u("event-old-patch","jQuery.event.props are deprecated and removed: "+o.join());while(o.length)s.event.addProp(o.pop())}if(n&&!n._migrated_&&(n._migrated_=!0,u("event-old-patch","jQuery.event.fixHooks are deprecated and removed: "+r),(o=n.props)&&o.length))while(o.length)s.event.addProp(o.pop());return t=O.call(this,e),n&&n.filter?n.filter(t,e):t},"event-old-patch"),i(s.event,"add",function(e,t){return e===n&&"load"===t&&"complete"===n.document.readyState&&u("load-after-event","jQuery(window).on('load'...) called after load event occurred"),q.apply(this,arguments)},"load-after-event"),s.each(["load","unload","error"],function(e,t){i(s.fn,t,function(){var e=Array.prototype.slice.call(arguments,0);return"load"===t&&"string"==typeof e[0]?M.apply(this,e):(u("shorthand-removed-v3","jQuery.fn."+t+"() is deprecated"),e.splice(0,0,t),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))},"shorthand-removed-v3")}),s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,r){c(s.fn,r,function(e,t){return 0<arguments.length?this.on(r,null,e,t):this.trigger(r)},"shorthand-deprecated-v3","jQuery.fn."+r+"() event shorthand is deprecated")}),s(function(){s(n.document).triggerHandler("ready")}),s.event.special.ready={setup:function(){this===n.document&&u("ready-event","'ready' event is deprecated")}},c(s.fn,"bind",function(e,t,r){return this.on(e,null,t,r)},"pre-on-methods","jQuery.fn.bind() is deprecated"),c(s.fn,"unbind",function(e,t){return this.off(e,null,t)},"pre-on-methods","jQuery.fn.unbind() is deprecated"),c(s.fn,"delegate",function(e,t,r,n){return this.on(t,e,r,n)},"pre-on-methods","jQuery.fn.delegate() is deprecated"),c(s.fn,"undelegate",function(e,t,r){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",r)},"pre-on-methods","jQuery.fn.undelegate() is deprecated"),c(s.fn,"hover",function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)},"pre-on-methods","jQuery.fn.hover() is deprecated");function T(e){var t=n.document.implementation.createHTMLDocument("");return t.body.innerHTML=e,t.body&&t.body.innerHTML}var F=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;s.UNSAFE_restoreLegacyHtmlPrefilter=function(){s.migrateEnablePatches("self-closed-tags")},i(s,"htmlPrefilter",function(e){var t,r;return(r=(t=e).replace(F,"<$1></$2>"))!==t&&T(t)!==T(r)&&u("self-closed-tags","HTML tags must be properly nested and closed: "+t),e.replace(F,"<$1></$2>")},"self-closed-tags"),s.migrateDisablePatches("self-closed-tags");var D,W,_,I=s.fn.offset;return i(s.fn,"offset",function(){var e=this[0];return!e||e.nodeType&&e.getBoundingClientRect?I.apply(this,arguments):(u("offset-valid-elem","jQuery.fn.offset() requires a valid DOM element"),arguments.length?this:void 0)},"offset-valid-elem"),s.ajax&&(D=s.param,i(s,"param",function(e,t){var r=s.ajaxSettings&&s.ajaxSettings.traditional;return void 0===t&&r&&(u("param-ajax-traditional","jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),t=r),D.call(this,e,t)},"param-ajax-traditional")),c(s.fn,"andSelf",s.fn.addBack,"andSelf","jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),s.Deferred&&(W=s.Deferred,_=[["resolve","done",s.Callbacks("once memory"),s.Callbacks("once memory"),"resolved"],["reject","fail",s.Callbacks("once memory"),s.Callbacks("once memory"),"rejected"],["notify","progress",s.Callbacks("memory"),s.Callbacks("memory")]],i(s,"Deferred",function(e){var a=W(),i=a.promise();function t(){var o=arguments;return s.Deferred(function(n){s.each(_,function(e,t){var r="function"==typeof o[e]&&o[e];a[t[1]](function(){var e=r&&r.apply(this,arguments);e&&"function"==typeof e.promise?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[t[0]+"With"](this===i?n.promise():this,r?[e]:arguments)})}),o=null}).promise()}return c(a,"pipe",t,"deferred-pipe","deferred.pipe() is deprecated"),c(i,"pipe",t,"deferred-pipe","deferred.pipe() is deprecated"),e&&e.call(a,a),a},"deferred-pipe"),s.Deferred.exceptionHook=W.exceptionHook),s});
;/*! This file is auto-generated */
window.addComment=function(v){var I,C,h,E=v.document,b={commentReplyClass:"comment-reply-link",commentReplyTitleId:"reply-title",cancelReplyId:"cancel-comment-reply-link",commentFormId:"commentform",temporaryFormId:"wp-temp-form-div",parentIdFieldId:"comment_parent",postIdFieldId:"comment_post_ID"},e=v.MutationObserver||v.WebKitMutationObserver||v.MozMutationObserver,r="querySelector"in E&&"addEventListener"in v,n=!!E.documentElement.dataset;function t(){d(),e&&new e(o).observe(E.body,{childList:!0,subtree:!0})}function d(e){if(r&&(I=g(b.cancelReplyId),C=g(b.commentFormId),I)){I.addEventListener("touchstart",l),I.addEventListener("click",l);function t(e){if((e.metaKey||e.ctrlKey)&&13===e.keyCode)return C.removeEventListener("keydown",t),e.preventDefault(),C.submit.click(),!1}C&&C.addEventListener("keydown",t);for(var n,d=function(e){var t=b.commentReplyClass;e&&e.childNodes||(e=E);e=E.getElementsByClassName?e.getElementsByClassName(t):e.querySelectorAll("."+t);return e}(e),o=0,i=d.length;o<i;o++)(n=d[o]).addEventListener("touchstart",a),n.addEventListener("click",a)}}function l(e){var t,n,d=g(b.temporaryFormId);d&&h&&(g(b.parentIdFieldId).value="0",t=d.textContent,d.parentNode.replaceChild(h,d),this.style.display="none",n=(d=(d=g(b.commentReplyTitleId))&&d.firstChild)&&d.nextSibling,d&&d.nodeType===Node.TEXT_NODE&&t&&(n&&"A"===n.nodeName&&n.id!==b.cancelReplyId&&(n.style.display=""),d.textContent=t),e.preventDefault())}function a(e){var t=g(b.commentReplyTitleId),t=t&&t.firstChild.textContent,n=this,d=m(n,"belowelement"),o=m(n,"commentid"),i=m(n,"respondelement"),r=m(n,"postid"),n=m(n,"replyto")||t;d&&o&&i&&r&&!1===v.addComment.moveForm(d,o,i,r,n)&&e.preventDefault()}function o(e){for(var t=e.length;t--;)if(e[t].addedNodes.length)return void d()}function m(e,t){return n?e.dataset[t]:e.getAttribute("data-"+t)}function g(e){return E.getElementById(e)}return r&&"loading"!==E.readyState?t():r&&v.addEventListener("DOMContentLoaded",t,!1),{init:d,moveForm:function(e,t,n,d,o){var i,r,l,a,m,c,s,e=g(e),n=(h=g(n),g(b.parentIdFieldId)),y=g(b.postIdFieldId),p=g(b.commentReplyTitleId),u=(p=p&&p.firstChild)&&p.nextSibling;if(e&&h&&n){void 0===o&&(o=p&&p.textContent),a=h,m=b.temporaryFormId,c=g(m),s=(s=g(b.commentReplyTitleId))?s.firstChild.textContent:"",c||((c=E.createElement("div")).id=m,c.style.display="none",c.textContent=s,a.parentNode.insertBefore(c,a)),d&&y&&(y.value=d),n.value=t,I.style.display="",e.parentNode.insertBefore(h,e.nextSibling),p&&p.nodeType===Node.TEXT_NODE&&(u&&"A"===u.nodeName&&u.id!==b.cancelReplyId&&(u.style.display="none"),p.textContent=o),I.onclick=function(){return!1};try{for(var f=0;f<C.elements.length;f++)if(i=C.elements[f],r=!1,"getComputedStyle"in v?l=v.getComputedStyle(i):E.documentElement.currentStyle&&(l=i.currentStyle),(i.offsetWidth<=0&&i.offsetHeight<=0||"hidden"===l.visibility)&&(r=!0),"hidden"!==i.type&&!i.disabled&&!r){i.focus();break}}catch(e){}return!1}}}}(window);
;jQuery(function($){"use strict";window.onscroll=function(){scrollFunction()};function scrollFunction(){if(document.body.scrollTop>350||document.documentElement.scrollTop>350){document.getElementById("header-nav").style.display="block";document.getElementById("body-nav").style.display="none"}else{document.getElementById("header-nav").style.display="none";document.getElementById("body-nav").style.display="block"}}
$(window).on("scroll",function(){function counter(){var oTop;if($(".counterUp").length!==0){oTop=$(".counterUp").offset().top-window.innerHeight}
if($(window).scrollTop()>oTop){$(".counterUp").each(function(){var $this=$(this),countTo=$this.attr("data-count");$({countNum:$this.text(),}).animate({countNum:countTo,},{duration:1000,easing:"swing",step:function(){$this.text(Math.floor(this.countNum))},complete:function(){$this.text(this.countNum)},})})}}
counter();function scrollTopBtn(){var scrollToTop=$("#back-to-top"),scroll=$(window).scrollTop();if(scroll>=50){scrollToTop.fadeIn()}else{scrollToTop.fadeOut()}}
scrollTopBtn()});$(document).ready(function(){function navSearch(){$(".nav-search").on("click",function(){$(".search-block").fadeIn(350)});$(".search-close").on("click",function(){$(".search-block").fadeOut(350)})}
navSearch();function backToTop(){$("#back-to-top").on("click",function(){$("#back-to-top").tooltip("hide");$("body,html").animate({scrollTop:0,},800);return!1})}
backToTop();function bannerCarouselOne(){$(".banner-carousel.banner-carousel-1").slick({slidesToShow:1,slidesToScroll:1,autoplay:!0,dots:!1,speed:600,arrows:!0,prevArrow:'<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',nextArrow:'<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>',});$(".banner-carousel.banner-carousel-1").slickAnimation()}
bannerCarouselOne();function bannerCarouselTwo(){$(".banner-carousel.banner-carousel-2").slick({fade:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,dots:!1,speed:600,arrows:!0,prevArrow:'<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',nextArrow:'<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>',})}
bannerCarouselTwo();function pageSlider(){$(".page-slider").slick({fade:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,dots:!1,speed:600,arrows:!0,prevArrow:'<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',nextArrow:'<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>',})}
pageSlider();function projectShuffle(){if($(".shuffle-wrapper").length!==0){var Shuffle=window.Shuffle;var myShuffle=new Shuffle(document.querySelector(".shuffle-wrapper"),{itemSelector:".shuffle-item",sizer:".shuffle-sizer",buffer:1,});$('input[name="shuffle-filter"]').on("change",function(evt){var input=evt.currentTarget;if(input.checked){myShuffle.filter(input.value)}});$(".shuffle-btn-group label").on("click",function(){$(".shuffle-btn-group label").removeClass("active");$(this).addClass("active")})}}
projectShuffle();function testimonialCarousel(){$(".testimonial-slide").slick({slidesToShow:1,slidesToScroll:1,dots:!1,speed:600,arrows:!1,})}
testimonialCarousel();function teamCarousel(){$(".team-slide").slick({dots:!1,infinite:!1,speed:300,slidesToShow:4,slidesToScroll:2,arrows:!0,prevArrow:'<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',nextArrow:'<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>',responsive:[{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:3,},},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2,},},{breakpoint:481,settings:{slidesToShow:1,slidesToScroll:1,},},],})}
teamCarousel();function cusCarousel(){$(".cus-carousel").slick({infinite:!0,autoplay:!0,slidesToShow:8,autoplaySpeed:1000,slidesToScroll:1,responsive:[{breakpoint:992,settings:{slidesToShow:5,slidesToScroll:1,},},{breakpoint:768,settings:{slidesToShow:2,autoplaySpeed:1500,slidesToScroll:2,},},],})}
cusCarousel();function cusCarousel2(){$(".cus-carousel-2").slick({infinite:!0,autoplay:!0,slidesToShow:8,autoplaySpeed:1200,slidesToScroll:1,responsive:[{breakpoint:992,settings:{slidesToShow:5,slidesToScroll:1,},},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2,autoplaySpeed:1800,},},],})}
cusCarousel2();function mediaPopup(){$(".gallery-popup").colorbox({rel:"gallery-popup",transition:"slideshow",innerHeight:"500",});$(".popup").colorbox({iframe:!0,innerWidth:600,innerHeight:400,})}
mediaPopup()})})
;/*!
 * Bootstrap v4.5.3 (https://getbootstrap.com/)
 * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports, require("jquery"), require("popper.js"))
    : "function" == typeof define && define.amd
    ? define(["exports", "jquery", "popper.js"], e)
    : e(
        ((t =
          "undefined" != typeof globalThis ? globalThis : t || self).bootstrap =
          {}),
        t.jQuery,
        t.Popper
      );
})(this, function (t, e, n) {
  "use strict";
  function i(t) {
    return t && "object" == typeof t && "default" in t ? t : { default: t };
  }
  var o = i(e),
    a = i(n);
  function s(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function l(t, e, n) {
    return e && s(t.prototype, e), n && s(t, n), t;
  }
  function r() {
    return (r =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }).apply(this, arguments);
  }
  function u(t) {
    var e = this,
      n = !1;
    return (
      o.default(this).one(d.TRANSITION_END, function () {
        n = !0;
      }),
      setTimeout(function () {
        n || d.triggerTransitionEnd(e);
      }, t),
      this
    );
  }
  var d = {
    TRANSITION_END: "bsTransitionEnd",
    getUID: function (t) {
      do {
        t += ~~(1e6 * Math.random());
      } while (document.getElementById(t));
      return t;
    },
    getSelectorFromElement: function (t) {
      var e = t.getAttribute("data-target");
      if (!e || "#" === e) {
        var n = t.getAttribute("href");
        e = n && "#" !== n ? n.trim() : "";
      }
      try {
        return document.querySelector(e) ? e : null;
      } catch (t) {
        return null;
      }
    },
    getTransitionDurationFromElement: function (t) {
      if (!t) return 0;
      var e = o.default(t).css("transition-duration"),
        n = o.default(t).css("transition-delay"),
        i = parseFloat(e),
        a = parseFloat(n);
      return i || a
        ? ((e = e.split(",")[0]),
          (n = n.split(",")[0]),
          1e3 * (parseFloat(e) + parseFloat(n)))
        : 0;
    },
    reflow: function (t) {
      return t.offsetHeight;
    },
    triggerTransitionEnd: function (t) {
      o.default(t).trigger("transitionend");
    },
    supportsTransitionEnd: function () {
      return Boolean("transitionend");
    },
    isElement: function (t) {
      return (t[0] || t).nodeType;
    },
    typeCheckConfig: function (t, e, n) {
      for (var i in n)
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
            a = e[i],
            s =
              a && d.isElement(a)
                ? "element"
                : null === (l = a) || "undefined" == typeof l
                ? "" + l
                : {}.toString
                    .call(l)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase();
          if (!new RegExp(o).test(s))
            throw new Error(
              t.toUpperCase() +
                ': Option "' +
                i +
                '" provided type "' +
                s +
                '" but expected type "' +
                o +
                '".'
            );
        }
      var l;
    },
    findShadowRoot: function (t) {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t.getRootNode) {
        var e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot
        ? t
        : t.parentNode
        ? d.findShadowRoot(t.parentNode)
        : null;
    },
    jQueryDetection: function () {
      if ("undefined" == typeof o.default)
        throw new TypeError(
          "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
        );
      var t = o.default.fn.jquery.split(" ")[0].split(".");
      if (
        (t[0] < 2 && t[1] < 9) ||
        (1 === t[0] && 9 === t[1] && t[2] < 1) ||
        t[0] >= 4
      )
        throw new Error(
          "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
        );
    },
  };
  d.jQueryDetection(),
    (o.default.fn.emulateTransitionEnd = u),
    (o.default.event.special[d.TRANSITION_END] = {
      bindType: "transitionend",
      delegateType: "transitionend",
      handle: function (t) {
        if (o.default(t.target).is(this))
          return t.handleObj.handler.apply(this, arguments);
      },
    });
  var f = "alert",
    c = o.default.fn[f],
    h = (function () {
      function t(t) {
        this._element = t;
      }
      var e = t.prototype;
      return (
        (e.close = function (t) {
          var e = this._element;
          t && (e = this._getRootElement(t)),
            this._triggerCloseEvent(e).isDefaultPrevented() ||
              this._removeElement(e);
        }),
        (e.dispose = function () {
          o.default.removeData(this._element, "bs.alert"),
            (this._element = null);
        }),
        (e._getRootElement = function (t) {
          var e = d.getSelectorFromElement(t),
            n = !1;
          return (
            e && (n = document.querySelector(e)),
            n || (n = o.default(t).closest(".alert")[0]),
            n
          );
        }),
        (e._triggerCloseEvent = function (t) {
          var e = o.default.Event("close.bs.alert");
          return o.default(t).trigger(e), e;
        }),
        (e._removeElement = function (t) {
          var e = this;
          if (
            (o.default(t).removeClass("show"), o.default(t).hasClass("fade"))
          ) {
            var n = d.getTransitionDurationFromElement(t);
            o.default(t)
              .one(d.TRANSITION_END, function (n) {
                return e._destroyElement(t, n);
              })
              .emulateTransitionEnd(n);
          } else this._destroyElement(t);
        }),
        (e._destroyElement = function (t) {
          o.default(t).detach().trigger("closed.bs.alert").remove();
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = o.default(this),
              i = n.data("bs.alert");
            i || ((i = new t(this)), n.data("bs.alert", i)),
              "close" === e && i[e](this);
          });
        }),
        (t._handleDismiss = function (t) {
          return function (e) {
            e && e.preventDefault(), t.close(this);
          };
        }),
        l(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
        ]),
        t
      );
    })();
  o
    .default(document)
    .on(
      "click.bs.alert.data-api",
      '[data-dismiss="alert"]',
      h._handleDismiss(new h())
    ),
    (o.default.fn[f] = h._jQueryInterface),
    (o.default.fn[f].Constructor = h),
    (o.default.fn[f].noConflict = function () {
      return (o.default.fn[f] = c), h._jQueryInterface;
    });
  var g = o.default.fn.button,
    m = (function () {
      function t(t) {
        (this._element = t), (this.shouldAvoidTriggerChange = !1);
      }
      var e = t.prototype;
      return (
        (e.toggle = function () {
          var t = !0,
            e = !0,
            n = o.default(this._element).closest('[data-toggle="buttons"]')[0];
          if (n) {
            var i = this._element.querySelector('input:not([type="hidden"])');
            if (i) {
              if ("radio" === i.type)
                if (i.checked && this._element.classList.contains("active"))
                  t = !1;
                else {
                  var a = n.querySelector(".active");
                  a && o.default(a).removeClass("active");
                }
              t &&
                (("checkbox" !== i.type && "radio" !== i.type) ||
                  (i.checked = !this._element.classList.contains("active")),
                this.shouldAvoidTriggerChange ||
                  o.default(i).trigger("change")),
                i.focus(),
                (e = !1);
            }
          }
          this._element.hasAttribute("disabled") ||
            this._element.classList.contains("disabled") ||
            (e &&
              this._element.setAttribute(
                "aria-pressed",
                !this._element.classList.contains("active")
              ),
            t && o.default(this._element).toggleClass("active"));
        }),
        (e.dispose = function () {
          o.default.removeData(this._element, "bs.button"),
            (this._element = null);
        }),
        (t._jQueryInterface = function (e, n) {
          return this.each(function () {
            var i = o.default(this),
              a = i.data("bs.button");
            a || ((a = new t(this)), i.data("bs.button", a)),
              (a.shouldAvoidTriggerChange = n),
              "toggle" === e && a[e]();
          });
        }),
        l(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
        ]),
        t
      );
    })();
  o
    .default(document)
    .on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) {
      var e = t.target,
        n = e;
      if (
        (o.default(e).hasClass("btn") || (e = o.default(e).closest(".btn")[0]),
        !e || e.hasAttribute("disabled") || e.classList.contains("disabled"))
      )
        t.preventDefault();
      else {
        var i = e.querySelector('input:not([type="hidden"])');
        if (
          i &&
          (i.hasAttribute("disabled") || i.classList.contains("disabled"))
        )
          return void t.preventDefault();
        ("INPUT" !== n.tagName && "LABEL" === e.tagName) ||
          m._jQueryInterface.call(
            o.default(e),
            "toggle",
            "INPUT" === n.tagName
          );
      }
    })
    .on(
      "focus.bs.button.data-api blur.bs.button.data-api",
      '[data-toggle^="button"]',
      function (t) {
        var e = o.default(t.target).closest(".btn")[0];
        o.default(e).toggleClass("focus", /^focus(in)?$/.test(t.type));
      }
    ),
    o.default(window).on("load.bs.button.data-api", function () {
      for (
        var t = [].slice.call(
            document.querySelectorAll('[data-toggle="buttons"] .btn')
          ),
          e = 0,
          n = t.length;
        e < n;
        e++
      ) {
        var i = t[e],
          o = i.querySelector('input:not([type="hidden"])');
        o.checked || o.hasAttribute("checked")
          ? i.classList.add("active")
          : i.classList.remove("active");
      }
      for (
        var a = 0,
          s = (t = [].slice.call(
            document.querySelectorAll('[data-toggle="button"]')
          )).length;
        a < s;
        a++
      ) {
        var l = t[a];
        "true" === l.getAttribute("aria-pressed")
          ? l.classList.add("active")
          : l.classList.remove("active");
      }
    }),
    (o.default.fn.button = m._jQueryInterface),
    (o.default.fn.button.Constructor = m),
    (o.default.fn.button.noConflict = function () {
      return (o.default.fn.button = g), m._jQueryInterface;
    });
  var p = "carousel",
    _ = ".bs.carousel",
    v = o.default.fn[p],
    b = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0,
    },
    y = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean",
    },
    E = { TOUCH: "touch", PEN: "pen" },
    w = (function () {
      function t(t, e) {
        (this._items = null),
          (this._interval = null),
          (this._activeElement = null),
          (this._isPaused = !1),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this.touchStartX = 0),
          (this.touchDeltaX = 0),
          (this._config = this._getConfig(e)),
          (this._element = t),
          (this._indicatorsElement = this._element.querySelector(
            ".carousel-indicators"
          )),
          (this._touchSupported =
            "ontouchstart" in document.documentElement ||
            navigator.maxTouchPoints > 0),
          (this._pointerEvent = Boolean(
            window.PointerEvent || window.MSPointerEvent
          )),
          this._addEventListeners();
      }
      var e = t.prototype;
      return (
        (e.next = function () {
          this._isSliding || this._slide("next");
        }),
        (e.nextWhenVisible = function () {
          var t = o.default(this._element);
          !document.hidden &&
            t.is(":visible") &&
            "hidden" !== t.css("visibility") &&
            this.next();
        }),
        (e.prev = function () {
          this._isSliding || this._slide("prev");
        }),
        (e.pause = function (t) {
          t || (this._isPaused = !0),
            this._element.querySelector(
              ".carousel-item-next, .carousel-item-prev"
            ) && (d.triggerTransitionEnd(this._element), this.cycle(!0)),
            clearInterval(this._interval),
            (this._interval = null);
        }),
        (e.cycle = function (t) {
          t || (this._isPaused = !1),
            this._interval &&
              (clearInterval(this._interval), (this._interval = null)),
            this._config.interval &&
              !this._isPaused &&
              (this._interval = setInterval(
                (document.visibilityState
                  ? this.nextWhenVisible
                  : this.next
                ).bind(this),
                this._config.interval
              ));
        }),
        (e.to = function (t) {
          var e = this;
          this._activeElement = this._element.querySelector(
            ".active.carousel-item"
          );
          var n = this._getItemIndex(this._activeElement);
          if (!(t > this._items.length - 1 || t < 0))
            if (this._isSliding)
              o.default(this._element).one("slid.bs.carousel", function () {
                return e.to(t);
              });
            else {
              if (n === t) return this.pause(), void this.cycle();
              var i = t > n ? "next" : "prev";
              this._slide(i, this._items[t]);
            }
        }),
        (e.dispose = function () {
          o.default(this._element).off(_),
            o.default.removeData(this._element, "bs.carousel"),
            (this._items = null),
            (this._config = null),
            (this._element = null),
            (this._interval = null),
            (this._isPaused = null),
            (this._isSliding = null),
            (this._activeElement = null),
            (this._indicatorsElement = null);
        }),
        (e._getConfig = function (t) {
          return (t = r({}, b, t)), d.typeCheckConfig(p, t, y), t;
        }),
        (e._handleSwipe = function () {
          var t = Math.abs(this.touchDeltaX);
          if (!(t <= 40)) {
            var e = t / this.touchDeltaX;
            (this.touchDeltaX = 0), e > 0 && this.prev(), e < 0 && this.next();
          }
        }),
        (e._addEventListeners = function () {
          var t = this;
          this._config.keyboard &&
            o.default(this._element).on("keydown.bs.carousel", function (e) {
              return t._keydown(e);
            }),
            "hover" === this._config.pause &&
              o
                .default(this._element)
                .on("mouseenter.bs.carousel", function (e) {
                  return t.pause(e);
                })
                .on("mouseleave.bs.carousel", function (e) {
                  return t.cycle(e);
                }),
            this._config.touch && this._addTouchEventListeners();
        }),
        (e._addTouchEventListeners = function () {
          var t = this;
          if (this._touchSupported) {
            var e = function (e) {
                t._pointerEvent && E[e.originalEvent.pointerType.toUpperCase()]
                  ? (t.touchStartX = e.originalEvent.clientX)
                  : t._pointerEvent ||
                    (t.touchStartX = e.originalEvent.touches[0].clientX);
              },
              n = function (e) {
                t._pointerEvent &&
                  E[e.originalEvent.pointerType.toUpperCase()] &&
                  (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX),
                  t._handleSwipe(),
                  "hover" === t._config.pause &&
                    (t.pause(),
                    t.touchTimeout && clearTimeout(t.touchTimeout),
                    (t.touchTimeout = setTimeout(function (e) {
                      return t.cycle(e);
                    }, 500 + t._config.interval)));
              };
            o
              .default(this._element.querySelectorAll(".carousel-item img"))
              .on("dragstart.bs.carousel", function (t) {
                return t.preventDefault();
              }),
              this._pointerEvent
                ? (o
                    .default(this._element)
                    .on("pointerdown.bs.carousel", function (t) {
                      return e(t);
                    }),
                  o
                    .default(this._element)
                    .on("pointerup.bs.carousel", function (t) {
                      return n(t);
                    }),
                  this._element.classList.add("pointer-event"))
                : (o
                    .default(this._element)
                    .on("touchstart.bs.carousel", function (t) {
                      return e(t);
                    }),
                  o
                    .default(this._element)
                    .on("touchmove.bs.carousel", function (e) {
                      return (function (e) {
                        e.originalEvent.touches &&
                        e.originalEvent.touches.length > 1
                          ? (t.touchDeltaX = 0)
                          : (t.touchDeltaX =
                              e.originalEvent.touches[0].clientX -
                              t.touchStartX);
                      })(e);
                    }),
                  o
                    .default(this._element)
                    .on("touchend.bs.carousel", function (t) {
                      return n(t);
                    }));
          }
        }),
        (e._keydown = function (t) {
          if (!/input|textarea/i.test(t.target.tagName))
            switch (t.which) {
              case 37:
                t.preventDefault(), this.prev();
                break;
              case 39:
                t.preventDefault(), this.next();
            }
        }),
        (e._getItemIndex = function (t) {
          return (
            (this._items =
              t && t.parentNode
                ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item"))
                : []),
            this._items.indexOf(t)
          );
        }),
        (e._getItemByDirection = function (t, e) {
          var n = "next" === t,
            i = "prev" === t,
            o = this._getItemIndex(e),
            a = this._items.length - 1;
          if (((i && 0 === o) || (n && o === a)) && !this._config.wrap)
            return e;
          var s = (o + ("prev" === t ? -1 : 1)) % this._items.length;
          return -1 === s
            ? this._items[this._items.length - 1]
            : this._items[s];
        }),
        (e._triggerSlideEvent = function (t, e) {
          var n = this._getItemIndex(t),
            i = this._getItemIndex(
              this._element.querySelector(".active.carousel-item")
            ),
            a = o.default.Event("slide.bs.carousel", {
              relatedTarget: t,
              direction: e,
              from: i,
              to: n,
            });
          return o.default(this._element).trigger(a), a;
        }),
        (e._setActiveIndicatorElement = function (t) {
          if (this._indicatorsElement) {
            var e = [].slice.call(
              this._indicatorsElement.querySelectorAll(".active")
            );
            o.default(e).removeClass("active");
            var n = this._indicatorsElement.children[this._getItemIndex(t)];
            n && o.default(n).addClass("active");
          }
        }),
        (e._slide = function (t, e) {
          var n,
            i,
            a,
            s = this,
            l = this._element.querySelector(".active.carousel-item"),
            r = this._getItemIndex(l),
            u = e || (l && this._getItemByDirection(t, l)),
            f = this._getItemIndex(u),
            c = Boolean(this._interval);
          if (
            ("next" === t
              ? ((n = "carousel-item-left"),
                (i = "carousel-item-next"),
                (a = "left"))
              : ((n = "carousel-item-right"),
                (i = "carousel-item-prev"),
                (a = "right")),
            u && o.default(u).hasClass("active"))
          )
            this._isSliding = !1;
          else if (
            !this._triggerSlideEvent(u, a).isDefaultPrevented() &&
            l &&
            u
          ) {
            (this._isSliding = !0),
              c && this.pause(),
              this._setActiveIndicatorElement(u);
            var h = o.default.Event("slid.bs.carousel", {
              relatedTarget: u,
              direction: a,
              from: r,
              to: f,
            });
            if (o.default(this._element).hasClass("slide")) {
              o.default(u).addClass(i),
                d.reflow(u),
                o.default(l).addClass(n),
                o.default(u).addClass(n);
              var g = parseInt(u.getAttribute("data-interval"), 10);
              g
                ? ((this._config.defaultInterval =
                    this._config.defaultInterval || this._config.interval),
                  (this._config.interval = g))
                : (this._config.interval =
                    this._config.defaultInterval || this._config.interval);
              var m = d.getTransitionDurationFromElement(l);
              o.default(l)
                .one(d.TRANSITION_END, function () {
                  o
                    .default(u)
                    .removeClass(n + " " + i)
                    .addClass("active"),
                    o.default(l).removeClass("active " + i + " " + n),
                    (s._isSliding = !1),
                    setTimeout(function () {
                      return o.default(s._element).trigger(h);
                    }, 0);
                })
                .emulateTransitionEnd(m);
            } else
              o.default(l).removeClass("active"),
                o.default(u).addClass("active"),
                (this._isSliding = !1),
                o.default(this._element).trigger(h);
            c && this.cycle();
          }
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = o.default(this).data("bs.carousel"),
              i = r({}, b, o.default(this).data());
            "object" == typeof e && (i = r({}, i, e));
            var a = "string" == typeof e ? e : i.slide;
            if (
              (n ||
                ((n = new t(this, i)), o.default(this).data("bs.carousel", n)),
              "number" == typeof e)
            )
              n.to(e);
            else if ("string" == typeof a) {
              if ("undefined" == typeof n[a])
                throw new TypeError('No method named "' + a + '"');
              n[a]();
            } else i.interval && i.ride && (n.pause(), n.cycle());
          });
        }),
        (t._dataApiClickHandler = function (e) {
          var n = d.getSelectorFromElement(this);
          if (n) {
            var i = o.default(n)[0];
            if (i && o.default(i).hasClass("carousel")) {
              var a = r({}, o.default(i).data(), o.default(this).data()),
                s = this.getAttribute("data-slide-to");
              s && (a.interval = !1),
                t._jQueryInterface.call(o.default(i), a),
                s && o.default(i).data("bs.carousel").to(s),
                e.preventDefault();
            }
          }
        }),
        l(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return b;
            },
          },
        ]),
        t
      );
    })();
  o
    .default(document)
    .on(
      "click.bs.carousel.data-api",
      "[data-slide], [data-slide-to]",
      w._dataApiClickHandler
    ),
    o.default(window).on("load.bs.carousel.data-api", function () {
      for (
        var t = [].slice.call(
            document.querySelectorAll('[data-ride="carousel"]')
          ),
          e = 0,
          n = t.length;
        e < n;
        e++
      ) {
        var i = o.default(t[e]);
        w._jQueryInterface.call(i, i.data());
      }
    }),
    (o.default.fn[p] = w._jQueryInterface),
    (o.default.fn[p].Constructor = w),
    (o.default.fn[p].noConflict = function () {
      return (o.default.fn[p] = v), w._jQueryInterface;
    });
  var T = "collapse",
    C = o.default.fn[T],
    S = { toggle: !0, parent: "" },
    N = { toggle: "boolean", parent: "(string|element)" },
    D = (function () {
      function t(t, e) {
        (this._isTransitioning = !1),
          (this._element = t),
          (this._config = this._getConfig(e)),
          (this._triggerArray = [].slice.call(
            document.querySelectorAll(
              '[data-toggle="collapse"][href="#' +
                t.id +
                '"],[data-toggle="collapse"][data-target="#' +
                t.id +
                '"]'
            )
          ));
        for (
          var n = [].slice.call(
              document.querySelectorAll('[data-toggle="collapse"]')
            ),
            i = 0,
            o = n.length;
          i < o;
          i++
        ) {
          var a = n[i],
            s = d.getSelectorFromElement(a),
            l = [].slice
              .call(document.querySelectorAll(s))
              .filter(function (e) {
                return e === t;
              });
          null !== s &&
            l.length > 0 &&
            ((this._selector = s), this._triggerArray.push(a));
        }
        (this._parent = this._config.parent ? this._getParent() : null),
          this._config.parent ||
            this._addAriaAndCollapsedClass(this._element, this._triggerArray),
          this._config.toggle && this.toggle();
      }
      var e = t.prototype;
      return (
        (e.toggle = function () {
          o.default(this._element).hasClass("show") ? this.hide() : this.show();
        }),
        (e.show = function () {
          var e,
            n,
            i = this;
          if (
            !this._isTransitioning &&
            !o.default(this._element).hasClass("show") &&
            (this._parent &&
              0 ===
                (e = [].slice
                  .call(this._parent.querySelectorAll(".show, .collapsing"))
                  .filter(function (t) {
                    return "string" == typeof i._config.parent
                      ? t.getAttribute("data-parent") === i._config.parent
                      : t.classList.contains("collapse");
                  })).length &&
              (e = null),
            !(
              e &&
              (n = o.default(e).not(this._selector).data("bs.collapse")) &&
              n._isTransitioning
            ))
          ) {
            var a = o.default.Event("show.bs.collapse");
            if (
              (o.default(this._element).trigger(a), !a.isDefaultPrevented())
            ) {
              e &&
                (t._jQueryInterface.call(
                  o.default(e).not(this._selector),
                  "hide"
                ),
                n || o.default(e).data("bs.collapse", null));
              var s = this._getDimension();
              o
                .default(this._element)
                .removeClass("collapse")
                .addClass("collapsing"),
                (this._element.style[s] = 0),
                this._triggerArray.length &&
                  o
                    .default(this._triggerArray)
                    .removeClass("collapsed")
                    .attr("aria-expanded", !0),
                this.setTransitioning(!0);
              var l = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                r = d.getTransitionDurationFromElement(this._element);
              o
                .default(this._element)
                .one(d.TRANSITION_END, function () {
                  o
                    .default(i._element)
                    .removeClass("collapsing")
                    .addClass("collapse show"),
                    (i._element.style[s] = ""),
                    i.setTransitioning(!1),
                    o.default(i._element).trigger("shown.bs.collapse");
                })
                .emulateTransitionEnd(r),
                (this._element.style[s] = this._element[l] + "px");
            }
          }
        }),
        (e.hide = function () {
          var t = this;
          if (
            !this._isTransitioning &&
            o.default(this._element).hasClass("show")
          ) {
            var e = o.default.Event("hide.bs.collapse");
            if (
              (o.default(this._element).trigger(e), !e.isDefaultPrevented())
            ) {
              var n = this._getDimension();
              (this._element.style[n] =
                this._element.getBoundingClientRect()[n] + "px"),
                d.reflow(this._element),
                o
                  .default(this._element)
                  .addClass("collapsing")
                  .removeClass("collapse show");
              var i = this._triggerArray.length;
              if (i > 0)
                for (var a = 0; a < i; a++) {
                  var s = this._triggerArray[a],
                    l = d.getSelectorFromElement(s);
                  if (null !== l)
                    o
                      .default([].slice.call(document.querySelectorAll(l)))
                      .hasClass("show") ||
                      o
                        .default(s)
                        .addClass("collapsed")
                        .attr("aria-expanded", !1);
                }
              this.setTransitioning(!0);
              this._element.style[n] = "";
              var r = d.getTransitionDurationFromElement(this._element);
              o.default(this._element)
                .one(d.TRANSITION_END, function () {
                  t.setTransitioning(!1),
                    o
                      .default(t._element)
                      .removeClass("collapsing")
                      .addClass("collapse")
                      .trigger("hidden.bs.collapse");
                })
                .emulateTransitionEnd(r);
            }
          }
        }),
        (e.setTransitioning = function (t) {
          this._isTransitioning = t;
        }),
        (e.dispose = function () {
          o.default.removeData(this._element, "bs.collapse"),
            (this._config = null),
            (this._parent = null),
            (this._element = null),
            (this._triggerArray = null),
            (this._isTransitioning = null);
        }),
        (e._getConfig = function (t) {
          return (
            ((t = r({}, S, t)).toggle = Boolean(t.toggle)),
            d.typeCheckConfig(T, t, N),
            t
          );
        }),
        (e._getDimension = function () {
          return o.default(this._element).hasClass("width")
            ? "width"
            : "height";
        }),
        (e._getParent = function () {
          var e,
            n = this;
          d.isElement(this._config.parent)
            ? ((e = this._config.parent),
              "undefined" != typeof this._config.parent.jquery &&
                (e = this._config.parent[0]))
            : (e = document.querySelector(this._config.parent));
          var i =
              '[data-toggle="collapse"][data-parent="' +
              this._config.parent +
              '"]',
            a = [].slice.call(e.querySelectorAll(i));
          return (
            o.default(a).each(function (e, i) {
              n._addAriaAndCollapsedClass(t._getTargetFromElement(i), [i]);
            }),
            e
          );
        }),
        (e._addAriaAndCollapsedClass = function (t, e) {
          var n = o.default(t).hasClass("show");
          e.length &&
            o.default(e).toggleClass("collapsed", !n).attr("aria-expanded", n);
        }),
        (t._getTargetFromElement = function (t) {
          var e = d.getSelectorFromElement(t);
          return e ? document.querySelector(e) : null;
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = o.default(this),
              i = n.data("bs.collapse"),
              a = r({}, S, n.data(), "object" == typeof e && e ? e : {});
            if (
              (!i &&
                a.toggle &&
                "string" == typeof e &&
                /show|hide/.test(e) &&
                (a.toggle = !1),
              i || ((i = new t(this, a)), n.data("bs.collapse", i)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof i[e])
                throw new TypeError('No method named "' + e + '"');
              i[e]();
            }
          });
        }),
        l(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return S;
            },
          },
        ]),
        t
      );
    })();
  o
    .default(document)
    .on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (t) {
      "A" === t.currentTarget.tagName && t.preventDefault();
      var e = o.default(this),
        n = d.getSelectorFromElement(this),
        i = [].slice.call(document.querySelectorAll(n));
      o.default(i).each(function () {
        var t = o.default(this),
          n = t.data("bs.collapse") ? "toggle" : e.data();
        D._jQueryInterface.call(t, n);
      });
    }),
    (o.default.fn[T] = D._jQueryInterface),
    (o.default.fn[T].Constructor = D),
    (o.default.fn[T].noConflict = function () {
      return (o.default.fn[T] = C), D._jQueryInterface;
    });
  var k = "dropdown",
    A = o.default.fn[k],
    I = new RegExp("38|40|27"),
    j = {
      offset: 0,
      flip: !0,
      boundary: "scrollParent",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
    },
    O = {
      offset: "(number|string|function)",
      flip: "boolean",
      boundary: "(string|element)",
      reference: "(string|element)",
      display: "string",
      popperConfig: "(null|object)",
    },
    x = (function () {
      function t(t, e) {
        (this._element = t),
          (this._popper = null),
          (this._config = this._getConfig(e)),
          (this._menu = this._getMenuElement()),
          (this._inNavbar = this._detectNavbar()),
          this._addEventListeners();
      }
      var e = t.prototype;
      return (
        (e.toggle = function () {
          if (
            !this._element.disabled &&
            !o.default(this._element).hasClass("disabled")
          ) {
            var e = o.default(this._menu).hasClass("show");
            t._clearMenus(), e || this.show(!0);
          }
        }),
        (e.show = function (e) {
          if (
            (void 0 === e && (e = !1),
            !(
              this._element.disabled ||
              o.default(this._element).hasClass("disabled") ||
              o.default(this._menu).hasClass("show")
            ))
          ) {
            var n = { relatedTarget: this._element },
              i = o.default.Event("show.bs.dropdown", n),
              s = t._getParentFromElement(this._element);
            if ((o.default(s).trigger(i), !i.isDefaultPrevented())) {
              if (!this._inNavbar && e) {
                if ("undefined" == typeof a.default)
                  throw new TypeError(
                    "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                  );
                var l = this._element;
                "parent" === this._config.reference
                  ? (l = s)
                  : d.isElement(this._config.reference) &&
                    ((l = this._config.reference),
                    "undefined" != typeof this._config.reference.jquery &&
                      (l = this._config.reference[0])),
                  "scrollParent" !== this._config.boundary &&
                    o.default(s).addClass("position-static"),
                  (this._popper = new a.default(
                    l,
                    this._menu,
                    this._getPopperConfig()
                  ));
              }
              "ontouchstart" in document.documentElement &&
                0 === o.default(s).closest(".navbar-nav").length &&
                o
                  .default(document.body)
                  .children()
                  .on("mouseover", null, o.default.noop),
                this._element.focus(),
                this._element.setAttribute("aria-expanded", !0),
                o.default(this._menu).toggleClass("show"),
                o
                  .default(s)
                  .toggleClass("show")
                  .trigger(o.default.Event("shown.bs.dropdown", n));
            }
          }
        }),
        (e.hide = function () {
          if (
            !this._element.disabled &&
            !o.default(this._element).hasClass("disabled") &&
            o.default(this._menu).hasClass("show")
          ) {
            var e = { relatedTarget: this._element },
              n = o.default.Event("hide.bs.dropdown", e),
              i = t._getParentFromElement(this._element);
            o.default(i).trigger(n),
              n.isDefaultPrevented() ||
                (this._popper && this._popper.destroy(),
                o.default(this._menu).toggleClass("show"),
                o
                  .default(i)
                  .toggleClass("show")
                  .trigger(o.default.Event("hidden.bs.dropdown", e)));
          }
        }),
        (e.dispose = function () {
          o.default.removeData(this._element, "bs.dropdown"),
            o.default(this._element).off(".bs.dropdown"),
            (this._element = null),
            (this._menu = null),
            null !== this._popper &&
              (this._popper.destroy(), (this._popper = null));
        }),
        (e.update = function () {
          (this._inNavbar = this._detectNavbar()),
            null !== this._popper && this._popper.scheduleUpdate();
        }),
        (e._addEventListeners = function () {
          var t = this;
          o.default(this._element).on("click.bs.dropdown", function (e) {
            e.preventDefault(), e.stopPropagation(), t.toggle();
          });
        }),
        (e._getConfig = function (t) {
          return (
            (t = r(
              {},
              this.constructor.Default,
              o.default(this._element).data(),
              t
            )),
            d.typeCheckConfig(k, t, this.constructor.DefaultType),
            t
          );
        }),
        (e._getMenuElement = function () {
          if (!this._menu) {
            var e = t._getParentFromElement(this._element);
            e && (this._menu = e.querySelector(".dropdown-menu"));
          }
          return this._menu;
        }),
        (e._getPlacement = function () {
          var t = o.default(this._element.parentNode),
            e = "bottom-start";
          return (
            t.hasClass("dropup")
              ? (e = o.default(this._menu).hasClass("dropdown-menu-right")
                  ? "top-end"
                  : "top-start")
              : t.hasClass("dropright")
              ? (e = "right-start")
              : t.hasClass("dropleft")
              ? (e = "left-start")
              : o.default(this._menu).hasClass("dropdown-menu-right") &&
                (e = "bottom-end"),
            e
          );
        }),
        (e._detectNavbar = function () {
          return o.default(this._element).closest(".navbar").length > 0;
        }),
        (e._getOffset = function () {
          var t = this,
            e = {};
          return (
            "function" == typeof this._config.offset
              ? (e.fn = function (e) {
                  return (
                    (e.offsets = r(
                      {},
                      e.offsets,
                      t._config.offset(e.offsets, t._element) || {}
                    )),
                    e
                  );
                })
              : (e.offset = this._config.offset),
            e
          );
        }),
        (e._getPopperConfig = function () {
          var t = {
            placement: this._getPlacement(),
            modifiers: {
              offset: this._getOffset(),
              flip: { enabled: this._config.flip },
              preventOverflow: { boundariesElement: this._config.boundary },
            },
          };
          return (
            "static" === this._config.display &&
              (t.modifiers.applyStyle = { enabled: !1 }),
            r({}, t, this._config.popperConfig)
          );
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = o.default(this).data("bs.dropdown");
            if (
              (n ||
                ((n = new t(this, "object" == typeof e ? e : null)),
                o.default(this).data("bs.dropdown", n)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof n[e])
                throw new TypeError('No method named "' + e + '"');
              n[e]();
            }
          });
        }),
        (t._clearMenus = function (e) {
          if (!e || (3 !== e.which && ("keyup" !== e.type || 9 === e.which)))
            for (
              var n = [].slice.call(
                  document.querySelectorAll('[data-toggle="dropdown"]')
                ),
                i = 0,
                a = n.length;
              i < a;
              i++
            ) {
              var s = t._getParentFromElement(n[i]),
                l = o.default(n[i]).data("bs.dropdown"),
                r = { relatedTarget: n[i] };
              if ((e && "click" === e.type && (r.clickEvent = e), l)) {
                var u = l._menu;
                if (
                  o.default(s).hasClass("show") &&
                  !(
                    e &&
                    (("click" === e.type &&
                      /input|textarea/i.test(e.target.tagName)) ||
                      ("keyup" === e.type && 9 === e.which)) &&
                    o.default.contains(s, e.target)
                  )
                ) {
                  var d = o.default.Event("hide.bs.dropdown", r);
                  o.default(s).trigger(d),
                    d.isDefaultPrevented() ||
                      ("ontouchstart" in document.documentElement &&
                        o
                          .default(document.body)
                          .children()
                          .off("mouseover", null, o.default.noop),
                      n[i].setAttribute("aria-expanded", "false"),
                      l._popper && l._popper.destroy(),
                      o.default(u).removeClass("show"),
                      o
                        .default(s)
                        .removeClass("show")
                        .trigger(o.default.Event("hidden.bs.dropdown", r)));
                }
              }
            }
        }),
        (t._getParentFromElement = function (t) {
          var e,
            n = d.getSelectorFromElement(t);
          return n && (e = document.querySelector(n)), e || t.parentNode;
        }),
        (t._dataApiKeydownHandler = function (e) {
          if (
            !(/input|textarea/i.test(e.target.tagName)
              ? 32 === e.which ||
                (27 !== e.which &&
                  ((40 !== e.which && 38 !== e.which) ||
                    o.default(e.target).closest(".dropdown-menu").length))
              : !I.test(e.which)) &&
            !this.disabled &&
            !o.default(this).hasClass("disabled")
          ) {
            var n = t._getParentFromElement(this),
              i = o.default(n).hasClass("show");
            if (i || 27 !== e.which) {
              if (
                (e.preventDefault(),
                e.stopPropagation(),
                !i || 27 === e.which || 32 === e.which)
              )
                return (
                  27 === e.which &&
                    o
                      .default(n.querySelector('[data-toggle="dropdown"]'))
                      .trigger("focus"),
                  void o.default(this).trigger("click")
                );
              var a = [].slice
                .call(
                  n.querySelectorAll(
                    ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
                  )
                )
                .filter(function (t) {
                  return o.default(t).is(":visible");
                });
              if (0 !== a.length) {
                var s = a.indexOf(e.target);
                38 === e.which && s > 0 && s--,
                  40 === e.which && s < a.length - 1 && s++,
                  s < 0 && (s = 0),
                  a[s].focus();
              }
            }
          }
        }),
        l(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return j;
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return O;
            },
          },
        ]),
        t
      );
    })();
  o
    .default(document)
    .on(
      "keydown.bs.dropdown.data-api",
      '[data-toggle="dropdown"]',
      x._dataApiKeydownHandler
    )
    .on(
      "keydown.bs.dropdown.data-api",
      ".dropdown-menu",
      x._dataApiKeydownHandler
    )
    .on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", x._clearMenus)
    .on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function (t) {
      t.preventDefault(),
        t.stopPropagation(),
        x._jQueryInterface.call(o.default(this), "toggle");
    })
    .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
      t.stopPropagation();
    }),
    (o.default.fn[k] = x._jQueryInterface),
    (o.default.fn[k].Constructor = x),
    (o.default.fn[k].noConflict = function () {
      return (o.default.fn[k] = A), x._jQueryInterface;
    });
  var P = o.default.fn.modal,
    R = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
    L = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
      show: "boolean",
    },
    q = (function () {
      function t(t, e) {
        (this._config = this._getConfig(e)),
          (this._element = t),
          (this._dialog = t.querySelector(".modal-dialog")),
          (this._backdrop = null),
          (this._isShown = !1),
          (this._isBodyOverflowing = !1),
          (this._ignoreBackdropClick = !1),
          (this._isTransitioning = !1),
          (this._scrollbarWidth = 0);
      }
      var e = t.prototype;
      return (
        (e.toggle = function (t) {
          return this._isShown ? this.hide() : this.show(t);
        }),
        (e.show = function (t) {
          var e = this;
          if (!this._isShown && !this._isTransitioning) {
            o.default(this._element).hasClass("fade") &&
              (this._isTransitioning = !0);
            var n = o.default.Event("show.bs.modal", { relatedTarget: t });
            o.default(this._element).trigger(n),
              this._isShown ||
                n.isDefaultPrevented() ||
                ((this._isShown = !0),
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                o
                  .default(this._element)
                  .on(
                    "click.dismiss.bs.modal",
                    '[data-dismiss="modal"]',
                    function (t) {
                      return e.hide(t);
                    }
                  ),
                o
                  .default(this._dialog)
                  .on("mousedown.dismiss.bs.modal", function () {
                    o.default(e._element).one(
                      "mouseup.dismiss.bs.modal",
                      function (t) {
                        o.default(t.target).is(e._element) &&
                          (e._ignoreBackdropClick = !0);
                      }
                    );
                  }),
                this._showBackdrop(function () {
                  return e._showElement(t);
                }));
          }
        }),
        (e.hide = function (t) {
          var e = this;
          if (
            (t && t.preventDefault(), this._isShown && !this._isTransitioning)
          ) {
            var n = o.default.Event("hide.bs.modal");
            if (
              (o.default(this._element).trigger(n),
              this._isShown && !n.isDefaultPrevented())
            ) {
              this._isShown = !1;
              var i = o.default(this._element).hasClass("fade");
              if (
                (i && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                o.default(document).off("focusin.bs.modal"),
                o.default(this._element).removeClass("show"),
                o.default(this._element).off("click.dismiss.bs.modal"),
                o.default(this._dialog).off("mousedown.dismiss.bs.modal"),
                i)
              ) {
                var a = d.getTransitionDurationFromElement(this._element);
                o.default(this._element)
                  .one(d.TRANSITION_END, function (t) {
                    return e._hideModal(t);
                  })
                  .emulateTransitionEnd(a);
              } else this._hideModal();
            }
          }
        }),
        (e.dispose = function () {
          [window, this._element, this._dialog].forEach(function (t) {
            return o.default(t).off(".bs.modal");
          }),
            o.default(document).off("focusin.bs.modal"),
            o.default.removeData(this._element, "bs.modal"),
            (this._config = null),
            (this._element = null),
            (this._dialog = null),
            (this._backdrop = null),
            (this._isShown = null),
            (this._isBodyOverflowing = null),
            (this._ignoreBackdropClick = null),
            (this._isTransitioning = null),
            (this._scrollbarWidth = null);
        }),
        (e.handleUpdate = function () {
          this._adjustDialog();
        }),
        (e._getConfig = function (t) {
          return (t = r({}, R, t)), d.typeCheckConfig("modal", t, L), t;
        }),
        (e._triggerBackdropTransition = function () {
          var t = this;
          if ("static" === this._config.backdrop) {
            var e = o.default.Event("hidePrevented.bs.modal");
            if ((o.default(this._element).trigger(e), e.isDefaultPrevented()))
              return;
            var n =
              this._element.scrollHeight >
              document.documentElement.clientHeight;
            n || (this._element.style.overflowY = "hidden"),
              this._element.classList.add("modal-static");
            var i = d.getTransitionDurationFromElement(this._dialog);
            o.default(this._element).off(d.TRANSITION_END),
              o
                .default(this._element)
                .one(d.TRANSITION_END, function () {
                  t._element.classList.remove("modal-static"),
                    n ||
                      o
                        .default(t._element)
                        .one(d.TRANSITION_END, function () {
                          t._element.style.overflowY = "";
                        })
                        .emulateTransitionEnd(t._element, i);
                })
                .emulateTransitionEnd(i),
              this._element.focus();
          } else this.hide();
        }),
        (e._showElement = function (t) {
          var e = this,
            n = o.default(this._element).hasClass("fade"),
            i = this._dialog ? this._dialog.querySelector(".modal-body") : null;
          (this._element.parentNode &&
            this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
            document.body.appendChild(this._element),
            (this._element.style.display = "block"),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            o.default(this._dialog).hasClass("modal-dialog-scrollable") && i
              ? (i.scrollTop = 0)
              : (this._element.scrollTop = 0),
            n && d.reflow(this._element),
            o.default(this._element).addClass("show"),
            this._config.focus && this._enforceFocus();
          var a = o.default.Event("shown.bs.modal", { relatedTarget: t }),
            s = function () {
              e._config.focus && e._element.focus(),
                (e._isTransitioning = !1),
                o.default(e._element).trigger(a);
            };
          if (n) {
            var l = d.getTransitionDurationFromElement(this._dialog);
            o.default(this._dialog)
              .one(d.TRANSITION_END, s)
              .emulateTransitionEnd(l);
          } else s();
        }),
        (e._enforceFocus = function () {
          var t = this;
          o.default(document)
            .off("focusin.bs.modal")
            .on("focusin.bs.modal", function (e) {
              document !== e.target &&
                t._element !== e.target &&
                0 === o.default(t._element).has(e.target).length &&
                t._element.focus();
            });
        }),
        (e._setEscapeEvent = function () {
          var t = this;
          this._isShown
            ? o
                .default(this._element)
                .on("keydown.dismiss.bs.modal", function (e) {
                  t._config.keyboard && 27 === e.which
                    ? (e.preventDefault(), t.hide())
                    : t._config.keyboard ||
                      27 !== e.which ||
                      t._triggerBackdropTransition();
                })
            : this._isShown ||
              o.default(this._element).off("keydown.dismiss.bs.modal");
        }),
        (e._setResizeEvent = function () {
          var t = this;
          this._isShown
            ? o.default(window).on("resize.bs.modal", function (e) {
                return t.handleUpdate(e);
              })
            : o.default(window).off("resize.bs.modal");
        }),
        (e._hideModal = function () {
          var t = this;
          (this._element.style.display = "none"),
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            (this._isTransitioning = !1),
            this._showBackdrop(function () {
              o.default(document.body).removeClass("modal-open"),
                t._resetAdjustments(),
                t._resetScrollbar(),
                o.default(t._element).trigger("hidden.bs.modal");
            });
        }),
        (e._removeBackdrop = function () {
          this._backdrop &&
            (o.default(this._backdrop).remove(), (this._backdrop = null));
        }),
        (e._showBackdrop = function (t) {
          var e = this,
            n = o.default(this._element).hasClass("fade") ? "fade" : "";
          if (this._isShown && this._config.backdrop) {
            if (
              ((this._backdrop = document.createElement("div")),
              (this._backdrop.className = "modal-backdrop"),
              n && this._backdrop.classList.add(n),
              o.default(this._backdrop).appendTo(document.body),
              o
                .default(this._element)
                .on("click.dismiss.bs.modal", function (t) {
                  e._ignoreBackdropClick
                    ? (e._ignoreBackdropClick = !1)
                    : t.target === t.currentTarget &&
                      e._triggerBackdropTransition();
                }),
              n && d.reflow(this._backdrop),
              o.default(this._backdrop).addClass("show"),
              !t)
            )
              return;
            if (!n) return void t();
            var i = d.getTransitionDurationFromElement(this._backdrop);
            o.default(this._backdrop)
              .one(d.TRANSITION_END, t)
              .emulateTransitionEnd(i);
          } else if (!this._isShown && this._backdrop) {
            o.default(this._backdrop).removeClass("show");
            var a = function () {
              e._removeBackdrop(), t && t();
            };
            if (o.default(this._element).hasClass("fade")) {
              var s = d.getTransitionDurationFromElement(this._backdrop);
              o.default(this._backdrop)
                .one(d.TRANSITION_END, a)
                .emulateTransitionEnd(s);
            } else a();
          } else t && t();
        }),
        (e._adjustDialog = function () {
          var t =
            this._element.scrollHeight > document.documentElement.clientHeight;
          !this._isBodyOverflowing &&
            t &&
            (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing &&
              !t &&
              (this._element.style.paddingRight = this._scrollbarWidth + "px");
        }),
        (e._resetAdjustments = function () {
          (this._element.style.paddingLeft = ""),
            (this._element.style.paddingRight = "");
        }),
        (e._checkScrollbar = function () {
          var t = document.body.getBoundingClientRect();
          (this._isBodyOverflowing =
            Math.round(t.left + t.right) < window.innerWidth),
            (this._scrollbarWidth = this._getScrollbarWidth());
        }),
        (e._setScrollbar = function () {
          var t = this;
          if (this._isBodyOverflowing) {
            var e = [].slice.call(
                document.querySelectorAll(
                  ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
                )
              ),
              n = [].slice.call(document.querySelectorAll(".sticky-top"));
            o.default(e).each(function (e, n) {
              var i = n.style.paddingRight,
                a = o.default(n).css("padding-right");
              o.default(n)
                .data("padding-right", i)
                .css("padding-right", parseFloat(a) + t._scrollbarWidth + "px");
            }),
              o.default(n).each(function (e, n) {
                var i = n.style.marginRight,
                  a = o.default(n).css("margin-right");
                o.default(n)
                  .data("margin-right", i)
                  .css(
                    "margin-right",
                    parseFloat(a) - t._scrollbarWidth + "px"
                  );
              });
            var i = document.body.style.paddingRight,
              a = o.default(document.body).css("padding-right");
            o.default(document.body)
              .data("padding-right", i)
              .css(
                "padding-right",
                parseFloat(a) + this._scrollbarWidth + "px"
              );
          }
          o.default(document.body).addClass("modal-open");
        }),
        (e._resetScrollbar = function () {
          var t = [].slice.call(
            document.querySelectorAll(
              ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
            )
          );
          o.default(t).each(function (t, e) {
            var n = o.default(e).data("padding-right");
            o.default(e).removeData("padding-right"),
              (e.style.paddingRight = n || "");
          });
          var e = [].slice.call(document.querySelectorAll(".sticky-top"));
          o.default(e).each(function (t, e) {
            var n = o.default(e).data("margin-right");
            "undefined" != typeof n &&
              o.default(e).css("margin-right", n).removeData("margin-right");
          });
          var n = o.default(document.body).data("padding-right");
          o.default(document.body).removeData("padding-right"),
            (document.body.style.paddingRight = n || "");
        }),
        (e._getScrollbarWidth = function () {
          var t = document.createElement("div");
          (t.className = "modal-scrollbar-measure"),
            document.body.appendChild(t);
          var e = t.getBoundingClientRect().width - t.clientWidth;
          return document.body.removeChild(t), e;
        }),
        (t._jQueryInterface = function (e, n) {
          return this.each(function () {
            var i = o.default(this).data("bs.modal"),
              a = r(
                {},
                R,
                o.default(this).data(),
                "object" == typeof e && e ? e : {}
              );
            if (
              (i || ((i = new t(this, a)), o.default(this).data("bs.modal", i)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof i[e])
                throw new TypeError('No method named "' + e + '"');
              i[e](n);
            } else a.show && i.show(n);
          });
        }),
        l(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return R;
            },
          },
        ]),
        t
      );
    })();
  o
    .default(document)
    .on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
      var e,
        n = this,
        i = d.getSelectorFromElement(this);
      i && (e = document.querySelector(i));
      var a = o.default(e).data("bs.modal")
        ? "toggle"
        : r({}, o.default(e).data(), o.default(this).data());
      ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
      var s = o.default(e).one("show.bs.modal", function (t) {
        t.isDefaultPrevented() ||
          s.one("hidden.bs.modal", function () {
            o.default(n).is(":visible") && n.focus();
          });
      });
      q._jQueryInterface.call(o.default(e), a, this);
    }),
    (o.default.fn.modal = q._jQueryInterface),
    (o.default.fn.modal.Constructor = q),
    (o.default.fn.modal.noConflict = function () {
      return (o.default.fn.modal = P), q._jQueryInterface;
    });
  var F = [
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ],
    Q = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: [],
    },
    B = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
    H =
      /^data:(?:image\/(?:bmp|gif|jpeg|webp|webp|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
  function U(t, e, n) {
    if (0 === t.length) return t;
    if (n && "function" == typeof n) return n(t);
    for (
      var i = new window.DOMParser().parseFromString(t, "text/html"),
        o = Object.keys(e),
        a = [].slice.call(i.body.querySelectorAll("*")),
        s = function (t, n) {
          var i = a[t],
            s = i.nodeName.toLowerCase();
          if (-1 === o.indexOf(i.nodeName.toLowerCase()))
            return i.parentNode.removeChild(i), "continue";
          var l = [].slice.call(i.attributes),
            r = [].concat(e["*"] || [], e[s] || []);
          l.forEach(function (t) {
            (function (t, e) {
              var n = t.nodeName.toLowerCase();
              if (-1 !== e.indexOf(n))
                return (
                  -1 === F.indexOf(n) ||
                  Boolean(t.nodeValue.match(B) || t.nodeValue.match(H))
                );
              for (
                var i = e.filter(function (t) {
                    return t instanceof RegExp;
                  }),
                  o = 0,
                  a = i.length;
                o < a;
                o++
              )
                if (n.match(i[o])) return !0;
              return !1;
            })(t, r) || i.removeAttribute(t.nodeName);
          });
        },
        l = 0,
        r = a.length;
      l < r;
      l++
    )
      s(l);
    return i.body.innerHTML;
  }
  var M = "tooltip",
    W = o.default.fn[M],
    V = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
    z = ["sanitize", "whiteList", "sanitizeFn"],
    K = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(number|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacement: "(string|array)",
      boundary: "(string|element)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      whiteList: "object",
      popperConfig: "(null|object)",
    },
    X = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: "right",
      BOTTOM: "bottom",
      LEFT: "left",
    },
    Y = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: 0,
      container: !1,
      fallbackPlacement: "flip",
      boundary: "scrollParent",
      sanitize: !0,
      sanitizeFn: null,
      whiteList: Q,
      popperConfig: null,
    },
    $ = {
      HIDE: "hide.bs.tooltip",
      HIDDEN: "hidden.bs.tooltip",
      SHOW: "show.bs.tooltip",
      SHOWN: "shown.bs.tooltip",
      INSERTED: "inserted.bs.tooltip",
      CLICK: "click.bs.tooltip",
      FOCUSIN: "focusin.bs.tooltip",
      FOCUSOUT: "focusout.bs.tooltip",
      MOUSEENTER: "mouseenter.bs.tooltip",
      MOUSELEAVE: "mouseleave.bs.tooltip",
    },
    J = (function () {
      function t(t, e) {
        if ("undefined" == typeof a.default)
          throw new TypeError(
            "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
          );
        (this._isEnabled = !0),
          (this._timeout = 0),
          (this._hoverState = ""),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this.element = t),
          (this.config = this._getConfig(e)),
          (this.tip = null),
          this._setListeners();
      }
      var e = t.prototype;
      return (
        (e.enable = function () {
          this._isEnabled = !0;
        }),
        (e.disable = function () {
          this._isEnabled = !1;
        }),
        (e.toggleEnabled = function () {
          this._isEnabled = !this._isEnabled;
        }),
        (e.toggle = function (t) {
          if (this._isEnabled)
            if (t) {
              var e = this.constructor.DATA_KEY,
                n = o.default(t.currentTarget).data(e);
              n ||
                ((n = new this.constructor(
                  t.currentTarget,
                  this._getDelegateConfig()
                )),
                o.default(t.currentTarget).data(e, n)),
                (n._activeTrigger.click = !n._activeTrigger.click),
                n._isWithActiveTrigger()
                  ? n._enter(null, n)
                  : n._leave(null, n);
            } else {
              if (o.default(this.getTipElement()).hasClass("show"))
                return void this._leave(null, this);
              this._enter(null, this);
            }
        }),
        (e.dispose = function () {
          clearTimeout(this._timeout),
            o.default.removeData(this.element, this.constructor.DATA_KEY),
            o.default(this.element).off(this.constructor.EVENT_KEY),
            o
              .default(this.element)
              .closest(".modal")
              .off("hide.bs.modal", this._hideModalHandler),
            this.tip && o.default(this.tip).remove(),
            (this._isEnabled = null),
            (this._timeout = null),
            (this._hoverState = null),
            (this._activeTrigger = null),
            this._popper && this._popper.destroy(),
            (this._popper = null),
            (this.element = null),
            (this.config = null),
            (this.tip = null);
        }),
        (e.show = function () {
          var t = this;
          if ("none" === o.default(this.element).css("display"))
            throw new Error("Please use show on visible elements");
          var e = o.default.Event(this.constructor.Event.SHOW);
          if (this.isWithContent() && this._isEnabled) {
            o.default(this.element).trigger(e);
            var n = d.findShadowRoot(this.element),
              i = o.default.contains(
                null !== n ? n : this.element.ownerDocument.documentElement,
                this.element
              );
            if (e.isDefaultPrevented() || !i) return;
            var s = this.getTipElement(),
              l = d.getUID(this.constructor.NAME);
            s.setAttribute("id", l),
              this.element.setAttribute("aria-describedby", l),
              this.setContent(),
              this.config.animation && o.default(s).addClass("fade");
            var r =
                "function" == typeof this.config.placement
                  ? this.config.placement.call(this, s, this.element)
                  : this.config.placement,
              u = this._getAttachment(r);
            this.addAttachmentClass(u);
            var f = this._getContainer();
            o.default(s).data(this.constructor.DATA_KEY, this),
              o.default.contains(
                this.element.ownerDocument.documentElement,
                this.tip
              ) || o.default(s).appendTo(f),
              o.default(this.element).trigger(this.constructor.Event.INSERTED),
              (this._popper = new a.default(
                this.element,
                s,
                this._getPopperConfig(u)
              )),
              o.default(s).addClass("show"),
              "ontouchstart" in document.documentElement &&
                o
                  .default(document.body)
                  .children()
                  .on("mouseover", null, o.default.noop);
            var c = function () {
              t.config.animation && t._fixTransition();
              var e = t._hoverState;
              (t._hoverState = null),
                o.default(t.element).trigger(t.constructor.Event.SHOWN),
                "out" === e && t._leave(null, t);
            };
            if (o.default(this.tip).hasClass("fade")) {
              var h = d.getTransitionDurationFromElement(this.tip);
              o.default(this.tip)
                .one(d.TRANSITION_END, c)
                .emulateTransitionEnd(h);
            } else c();
          }
        }),
        (e.hide = function (t) {
          var e = this,
            n = this.getTipElement(),
            i = o.default.Event(this.constructor.Event.HIDE),
            a = function () {
              "show" !== e._hoverState &&
                n.parentNode &&
                n.parentNode.removeChild(n),
                e._cleanTipClass(),
                e.element.removeAttribute("aria-describedby"),
                o.default(e.element).trigger(e.constructor.Event.HIDDEN),
                null !== e._popper && e._popper.destroy(),
                t && t();
            };
          if ((o.default(this.element).trigger(i), !i.isDefaultPrevented())) {
            if (
              (o.default(n).removeClass("show"),
              "ontouchstart" in document.documentElement &&
                o
                  .default(document.body)
                  .children()
                  .off("mouseover", null, o.default.noop),
              (this._activeTrigger.click = !1),
              (this._activeTrigger.focus = !1),
              (this._activeTrigger.hover = !1),
              o.default(this.tip).hasClass("fade"))
            ) {
              var s = d.getTransitionDurationFromElement(n);
              o.default(n).one(d.TRANSITION_END, a).emulateTransitionEnd(s);
            } else a();
            this._hoverState = "";
          }
        }),
        (e.update = function () {
          null !== this._popper && this._popper.scheduleUpdate();
        }),
        (e.isWithContent = function () {
          return Boolean(this.getTitle());
        }),
        (e.addAttachmentClass = function (t) {
          o.default(this.getTipElement()).addClass("bs-tooltip-" + t);
        }),
        (e.getTipElement = function () {
          return (
            (this.tip = this.tip || o.default(this.config.template)[0]),
            this.tip
          );
        }),
        (e.setContent = function () {
          var t = this.getTipElement();
          this.setElementContent(
            o.default(t.querySelectorAll(".tooltip-inner")),
            this.getTitle()
          ),
            o.default(t).removeClass("fade show");
        }),
        (e.setElementContent = function (t, e) {
          "object" != typeof e || (!e.nodeType && !e.jquery)
            ? this.config.html
              ? (this.config.sanitize &&
                  (e = U(e, this.config.whiteList, this.config.sanitizeFn)),
                t.html(e))
              : t.text(e)
            : this.config.html
            ? o.default(e).parent().is(t) || t.empty().append(e)
            : t.text(o.default(e).text());
        }),
        (e.getTitle = function () {
          var t = this.element.getAttribute("data-original-title");
          return (
            t ||
              (t =
                "function" == typeof this.config.title
                  ? this.config.title.call(this.element)
                  : this.config.title),
            t
          );
        }),
        (e._getPopperConfig = function (t) {
          var e = this;
          return r(
            {},
            {
              placement: t,
              modifiers: {
                offset: this._getOffset(),
                flip: { behavior: this.config.fallbackPlacement },
                arrow: { element: ".arrow" },
                preventOverflow: { boundariesElement: this.config.boundary },
              },
              onCreate: function (t) {
                t.originalPlacement !== t.placement &&
                  e._handlePopperPlacementChange(t);
              },
              onUpdate: function (t) {
                return e._handlePopperPlacementChange(t);
              },
            },
            this.config.popperConfig
          );
        }),
        (e._getOffset = function () {
          var t = this,
            e = {};
          return (
            "function" == typeof this.config.offset
              ? (e.fn = function (e) {
                  return (
                    (e.offsets = r(
                      {},
                      e.offsets,
                      t.config.offset(e.offsets, t.element) || {}
                    )),
                    e
                  );
                })
              : (e.offset = this.config.offset),
            e
          );
        }),
        (e._getContainer = function () {
          return !1 === this.config.container
            ? document.body
            : d.isElement(this.config.container)
            ? o.default(this.config.container)
            : o.default(document).find(this.config.container);
        }),
        (e._getAttachment = function (t) {
          return X[t.toUpperCase()];
        }),
        (e._setListeners = function () {
          var t = this;
          this.config.trigger.split(" ").forEach(function (e) {
            if ("click" === e)
              o.default(t.element).on(
                t.constructor.Event.CLICK,
                t.config.selector,
                function (e) {
                  return t.toggle(e);
                }
              );
            else if ("manual" !== e) {
              var n =
                  "hover" === e
                    ? t.constructor.Event.MOUSEENTER
                    : t.constructor.Event.FOCUSIN,
                i =
                  "hover" === e
                    ? t.constructor.Event.MOUSELEAVE
                    : t.constructor.Event.FOCUSOUT;
              o.default(t.element)
                .on(n, t.config.selector, function (e) {
                  return t._enter(e);
                })
                .on(i, t.config.selector, function (e) {
                  return t._leave(e);
                });
            }
          }),
            (this._hideModalHandler = function () {
              t.element && t.hide();
            }),
            o
              .default(this.element)
              .closest(".modal")
              .on("hide.bs.modal", this._hideModalHandler),
            this.config.selector
              ? (this.config = r({}, this.config, {
                  trigger: "manual",
                  selector: "",
                }))
              : this._fixTitle();
        }),
        (e._fixTitle = function () {
          var t = typeof this.element.getAttribute("data-original-title");
          (this.element.getAttribute("title") || "string" !== t) &&
            (this.element.setAttribute(
              "data-original-title",
              this.element.getAttribute("title") || ""
            ),
            this.element.setAttribute("title", ""));
        }),
        (e._enter = function (t, e) {
          var n = this.constructor.DATA_KEY;
          (e = e || o.default(t.currentTarget).data(n)) ||
            ((e = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            o.default(t.currentTarget).data(n, e)),
            t &&
              (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0),
            o.default(e.getTipElement()).hasClass("show") ||
            "show" === e._hoverState
              ? (e._hoverState = "show")
              : (clearTimeout(e._timeout),
                (e._hoverState = "show"),
                e.config.delay && e.config.delay.show
                  ? (e._timeout = setTimeout(function () {
                      "show" === e._hoverState && e.show();
                    }, e.config.delay.show))
                  : e.show());
        }),
        (e._leave = function (t, e) {
          var n = this.constructor.DATA_KEY;
          (e = e || o.default(t.currentTarget).data(n)) ||
            ((e = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            o.default(t.currentTarget).data(n, e)),
            t &&
              (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] =
                !1),
            e._isWithActiveTrigger() ||
              (clearTimeout(e._timeout),
              (e._hoverState = "out"),
              e.config.delay && e.config.delay.hide
                ? (e._timeout = setTimeout(function () {
                    "out" === e._hoverState && e.hide();
                  }, e.config.delay.hide))
                : e.hide());
        }),
        (e._isWithActiveTrigger = function () {
          for (var t in this._activeTrigger)
            if (this._activeTrigger[t]) return !0;
          return !1;
        }),
        (e._getConfig = function (t) {
          var e = o.default(this.element).data();
          return (
            Object.keys(e).forEach(function (t) {
              -1 !== z.indexOf(t) && delete e[t];
            }),
            "number" ==
              typeof (t = r(
                {},
                this.constructor.Default,
                e,
                "object" == typeof t && t ? t : {}
              )).delay && (t.delay = { show: t.delay, hide: t.delay }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            d.typeCheckConfig(M, t, this.constructor.DefaultType),
            t.sanitize &&
              (t.template = U(t.template, t.whiteList, t.sanitizeFn)),
            t
          );
        }),
        (e._getDelegateConfig = function () {
          var t = {};
          if (this.config)
            for (var e in this.config)
              this.constructor.Default[e] !== this.config[e] &&
                (t[e] = this.config[e]);
          return t;
        }),
        (e._cleanTipClass = function () {
          var t = o.default(this.getTipElement()),
            e = t.attr("class").match(V);
          null !== e && e.length && t.removeClass(e.join(""));
        }),
        (e._handlePopperPlacementChange = function (t) {
          (this.tip = t.instance.popper),
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(t.placement));
        }),
        (e._fixTransition = function () {
          var t = this.getTipElement(),
            e = this.config.animation;
          null === t.getAttribute("x-placement") &&
            (o.default(t).removeClass("fade"),
            (this.config.animation = !1),
            this.hide(),
            this.show(),
            (this.config.animation = e));
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = o.default(this),
              i = n.data("bs.tooltip"),
              a = "object" == typeof e && e;
            if (
              (i || !/dispose|hide/.test(e)) &&
              (i || ((i = new t(this, a)), n.data("bs.tooltip", i)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof i[e])
                throw new TypeError('No method named "' + e + '"');
              i[e]();
            }
          });
        }),
        l(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return Y;
            },
          },
          {
            key: "NAME",
            get: function () {
              return M;
            },
          },
          {
            key: "DATA_KEY",
            get: function () {
              return "bs.tooltip";
            },
          },
          {
            key: "Event",
            get: function () {
              return $;
            },
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return ".bs.tooltip";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return K;
            },
          },
        ]),
        t
      );
    })();
  (o.default.fn[M] = J._jQueryInterface),
    (o.default.fn[M].Constructor = J),
    (o.default.fn[M].noConflict = function () {
      return (o.default.fn[M] = W), J._jQueryInterface;
    });
  var G = "popover",
    Z = o.default.fn[G],
    tt = new RegExp("(^|\\s)bs-popover\\S+", "g"),
    et = r({}, J.Default, {
      placement: "right",
      trigger: "click",
      content: "",
      template:
        '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    }),
    nt = r({}, J.DefaultType, { content: "(string|element|function)" }),
    it = {
      HIDE: "hide.bs.popover",
      HIDDEN: "hidden.bs.popover",
      SHOW: "show.bs.popover",
      SHOWN: "shown.bs.popover",
      INSERTED: "inserted.bs.popover",
      CLICK: "click.bs.popover",
      FOCUSIN: "focusin.bs.popover",
      FOCUSOUT: "focusout.bs.popover",
      MOUSEENTER: "mouseenter.bs.popover",
      MOUSELEAVE: "mouseleave.bs.popover",
    },
    ot = (function (t) {
      var e, n;
      function i() {
        return t.apply(this, arguments) || this;
      }
      (n = t),
        ((e = i).prototype = Object.create(n.prototype)),
        (e.prototype.constructor = e),
        (e.__proto__ = n);
      var a = i.prototype;
      return (
        (a.isWithContent = function () {
          return this.getTitle() || this._getContent();
        }),
        (a.addAttachmentClass = function (t) {
          o.default(this.getTipElement()).addClass("bs-popover-" + t);
        }),
        (a.getTipElement = function () {
          return (
            (this.tip = this.tip || o.default(this.config.template)[0]),
            this.tip
          );
        }),
        (a.setContent = function () {
          var t = o.default(this.getTipElement());
          this.setElementContent(t.find(".popover-header"), this.getTitle());
          var e = this._getContent();
          "function" == typeof e && (e = e.call(this.element)),
            this.setElementContent(t.find(".popover-body"), e),
            t.removeClass("fade show");
        }),
        (a._getContent = function () {
          return (
            this.element.getAttribute("data-content") || this.config.content
          );
        }),
        (a._cleanTipClass = function () {
          var t = o.default(this.getTipElement()),
            e = t.attr("class").match(tt);
          null !== e && e.length > 0 && t.removeClass(e.join(""));
        }),
        (i._jQueryInterface = function (t) {
          return this.each(function () {
            var e = o.default(this).data("bs.popover"),
              n = "object" == typeof t ? t : null;
            if (
              (e || !/dispose|hide/.test(t)) &&
              (e ||
                ((e = new i(this, n)), o.default(this).data("bs.popover", e)),
              "string" == typeof t)
            ) {
              if ("undefined" == typeof e[t])
                throw new TypeError('No method named "' + t + '"');
              e[t]();
            }
          });
        }),
        l(i, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return et;
            },
          },
          {
            key: "NAME",
            get: function () {
              return G;
            },
          },
          {
            key: "DATA_KEY",
            get: function () {
              return "bs.popover";
            },
          },
          {
            key: "Event",
            get: function () {
              return it;
            },
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return ".bs.popover";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return nt;
            },
          },
        ]),
        i
      );
    })(J);
  (o.default.fn[G] = ot._jQueryInterface),
    (o.default.fn[G].Constructor = ot),
    (o.default.fn[G].noConflict = function () {
      return (o.default.fn[G] = Z), ot._jQueryInterface;
    });
  var at = "scrollspy",
    st = o.default.fn[at],
    lt = { offset: 10, method: "auto", target: "" },
    rt = { offset: "number", method: "string", target: "(string|element)" },
    ut = (function () {
      function t(t, e) {
        var n = this;
        (this._element = t),
          (this._scrollElement = "BODY" === t.tagName ? window : t),
          (this._config = this._getConfig(e)),
          (this._selector =
            this._config.target +
            " .nav-link," +
            this._config.target +
            " .list-group-item," +
            this._config.target +
            " .dropdown-item"),
          (this._offsets = []),
          (this._targets = []),
          (this._activeTarget = null),
          (this._scrollHeight = 0),
          o
            .default(this._scrollElement)
            .on("scroll.bs.scrollspy", function (t) {
              return n._process(t);
            }),
          this.refresh(),
          this._process();
      }
      var e = t.prototype;
      return (
        (e.refresh = function () {
          var t = this,
            e =
              this._scrollElement === this._scrollElement.window
                ? "offset"
                : "position",
            n = "auto" === this._config.method ? e : this._config.method,
            i = "position" === n ? this._getScrollTop() : 0;
          (this._offsets = []),
            (this._targets = []),
            (this._scrollHeight = this._getScrollHeight()),
            [].slice
              .call(document.querySelectorAll(this._selector))
              .map(function (t) {
                var e,
                  a = d.getSelectorFromElement(t);
                if ((a && (e = document.querySelector(a)), e)) {
                  var s = e.getBoundingClientRect();
                  if (s.width || s.height)
                    return [o.default(e)[n]().top + i, a];
                }
                return null;
              })
              .filter(function (t) {
                return t;
              })
              .sort(function (t, e) {
                return t[0] - e[0];
              })
              .forEach(function (e) {
                t._offsets.push(e[0]), t._targets.push(e[1]);
              });
        }),
        (e.dispose = function () {
          o.default.removeData(this._element, "bs.scrollspy"),
            o.default(this._scrollElement).off(".bs.scrollspy"),
            (this._element = null),
            (this._scrollElement = null),
            (this._config = null),
            (this._selector = null),
            (this._offsets = null),
            (this._targets = null),
            (this._activeTarget = null),
            (this._scrollHeight = null);
        }),
        (e._getConfig = function (t) {
          if (
            "string" !=
              typeof (t = r({}, lt, "object" == typeof t && t ? t : {}))
                .target &&
            d.isElement(t.target)
          ) {
            var e = o.default(t.target).attr("id");
            e || ((e = d.getUID(at)), o.default(t.target).attr("id", e)),
              (t.target = "#" + e);
          }
          return d.typeCheckConfig(at, t, rt), t;
        }),
        (e._getScrollTop = function () {
          return this._scrollElement === window
            ? this._scrollElement.pageYOffset
            : this._scrollElement.scrollTop;
        }),
        (e._getScrollHeight = function () {
          return (
            this._scrollElement.scrollHeight ||
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight
            )
          );
        }),
        (e._getOffsetHeight = function () {
          return this._scrollElement === window
            ? window.innerHeight
            : this._scrollElement.getBoundingClientRect().height;
        }),
        (e._process = function () {
          var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            n = this._config.offset + e - this._getOffsetHeight();
          if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
            var i = this._targets[this._targets.length - 1];
            this._activeTarget !== i && this._activate(i);
          } else {
            if (
              this._activeTarget &&
              t < this._offsets[0] &&
              this._offsets[0] > 0
            )
              return (this._activeTarget = null), void this._clear();
            for (var o = this._offsets.length; o--; ) {
              this._activeTarget !== this._targets[o] &&
                t >= this._offsets[o] &&
                ("undefined" == typeof this._offsets[o + 1] ||
                  t < this._offsets[o + 1]) &&
                this._activate(this._targets[o]);
            }
          }
        }),
        (e._activate = function (t) {
          (this._activeTarget = t), this._clear();
          var e = this._selector.split(",").map(function (e) {
              return (
                e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
              );
            }),
            n = o.default(
              [].slice.call(document.querySelectorAll(e.join(",")))
            );
          n.hasClass("dropdown-item")
            ? (n
                .closest(".dropdown")
                .find(".dropdown-toggle")
                .addClass("active"),
              n.addClass("active"))
            : (n.addClass("active"),
              n
                .parents(".nav, .list-group")
                .prev(".nav-link, .list-group-item")
                .addClass("active"),
              n
                .parents(".nav, .list-group")
                .prev(".nav-item")
                .children(".nav-link")
                .addClass("active")),
            o
              .default(this._scrollElement)
              .trigger("activate.bs.scrollspy", { relatedTarget: t });
        }),
        (e._clear = function () {
          [].slice
            .call(document.querySelectorAll(this._selector))
            .filter(function (t) {
              return t.classList.contains("active");
            })
            .forEach(function (t) {
              return t.classList.remove("active");
            });
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = o.default(this).data("bs.scrollspy");
            if (
              (n ||
                ((n = new t(this, "object" == typeof e && e)),
                o.default(this).data("bs.scrollspy", n)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof n[e])
                throw new TypeError('No method named "' + e + '"');
              n[e]();
            }
          });
        }),
        l(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return lt;
            },
          },
        ]),
        t
      );
    })();
  o.default(window).on("load.bs.scrollspy.data-api", function () {
    for (
      var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')),
        e = t.length;
      e--;

    ) {
      var n = o.default(t[e]);
      ut._jQueryInterface.call(n, n.data());
    }
  }),
    (o.default.fn[at] = ut._jQueryInterface),
    (o.default.fn[at].Constructor = ut),
    (o.default.fn[at].noConflict = function () {
      return (o.default.fn[at] = st), ut._jQueryInterface;
    });
  var dt = o.default.fn.tab,
    ft = (function () {
      function t(t) {
        this._element = t;
      }
      var e = t.prototype;
      return (
        (e.show = function () {
          var t = this;
          if (
            !(
              (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                o.default(this._element).hasClass("active")) ||
              o.default(this._element).hasClass("disabled")
            )
          ) {
            var e,
              n,
              i = o.default(this._element).closest(".nav, .list-group")[0],
              a = d.getSelectorFromElement(this._element);
            if (i) {
              var s =
                "UL" === i.nodeName || "OL" === i.nodeName
                  ? "> li > .active"
                  : ".active";
              n = (n = o.default.makeArray(o.default(i).find(s)))[n.length - 1];
            }
            var l = o.default.Event("hide.bs.tab", {
                relatedTarget: this._element,
              }),
              r = o.default.Event("show.bs.tab", { relatedTarget: n });
            if (
              (n && o.default(n).trigger(l),
              o.default(this._element).trigger(r),
              !r.isDefaultPrevented() && !l.isDefaultPrevented())
            ) {
              a && (e = document.querySelector(a)),
                this._activate(this._element, i);
              var u = function () {
                var e = o.default.Event("hidden.bs.tab", {
                    relatedTarget: t._element,
                  }),
                  i = o.default.Event("shown.bs.tab", { relatedTarget: n });
                o.default(n).trigger(e), o.default(t._element).trigger(i);
              };
              e ? this._activate(e, e.parentNode, u) : u();
            }
          }
        }),
        (e.dispose = function () {
          o.default.removeData(this._element, "bs.tab"), (this._element = null);
        }),
        (e._activate = function (t, e, n) {
          var i = this,
            a = (
              !e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
                ? o.default(e).children(".active")
                : o.default(e).find("> li > .active")
            )[0],
            s = n && a && o.default(a).hasClass("fade"),
            l = function () {
              return i._transitionComplete(t, a, n);
            };
          if (a && s) {
            var r = d.getTransitionDurationFromElement(a);
            o.default(a)
              .removeClass("show")
              .one(d.TRANSITION_END, l)
              .emulateTransitionEnd(r);
          } else l();
        }),
        (e._transitionComplete = function (t, e, n) {
          if (e) {
            o.default(e).removeClass("active");
            var i = o.default(e.parentNode).find("> .dropdown-menu .active")[0];
            i && o.default(i).removeClass("active"),
              "tab" === e.getAttribute("role") &&
                e.setAttribute("aria-selected", !1);
          }
          if (
            (o.default(t).addClass("active"),
            "tab" === t.getAttribute("role") &&
              t.setAttribute("aria-selected", !0),
            d.reflow(t),
            t.classList.contains("fade") && t.classList.add("show"),
            t.parentNode && o.default(t.parentNode).hasClass("dropdown-menu"))
          ) {
            var a = o.default(t).closest(".dropdown")[0];
            if (a) {
              var s = [].slice.call(a.querySelectorAll(".dropdown-toggle"));
              o.default(s).addClass("active");
            }
            t.setAttribute("aria-expanded", !0);
          }
          n && n();
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = o.default(this),
              i = n.data("bs.tab");
            if (
              (i || ((i = new t(this)), n.data("bs.tab", i)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof i[e])
                throw new TypeError('No method named "' + e + '"');
              i[e]();
            }
          });
        }),
        l(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
        ]),
        t
      );
    })();
  o
    .default(document)
    .on(
      "click.bs.tab.data-api",
      '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      function (t) {
        t.preventDefault(), ft._jQueryInterface.call(o.default(this), "show");
      }
    ),
    (o.default.fn.tab = ft._jQueryInterface),
    (o.default.fn.tab.Constructor = ft),
    (o.default.fn.tab.noConflict = function () {
      return (o.default.fn.tab = dt), ft._jQueryInterface;
    });
  var ct = o.default.fn.toast,
    ht = { animation: "boolean", autohide: "boolean", delay: "number" },
    gt = { animation: !0, autohide: !0, delay: 500 },
    mt = (function () {
      function t(t, e) {
        (this._element = t),
          (this._config = this._getConfig(e)),
          (this._timeout = null),
          this._setListeners();
      }
      var e = t.prototype;
      return (
        (e.show = function () {
          var t = this,
            e = o.default.Event("show.bs.toast");
          if ((o.default(this._element).trigger(e), !e.isDefaultPrevented())) {
            this._clearTimeout(),
              this._config.animation && this._element.classList.add("fade");
            var n = function () {
              t._element.classList.remove("showing"),
                t._element.classList.add("show"),
                o.default(t._element).trigger("shown.bs.toast"),
                t._config.autohide &&
                  (t._timeout = setTimeout(function () {
                    t.hide();
                  }, t._config.delay));
            };
            if (
              (this._element.classList.remove("hide"),
              d.reflow(this._element),
              this._element.classList.add("showing"),
              this._config.animation)
            ) {
              var i = d.getTransitionDurationFromElement(this._element);
              o.default(this._element)
                .one(d.TRANSITION_END, n)
                .emulateTransitionEnd(i);
            } else n();
          }
        }),
        (e.hide = function () {
          if (this._element.classList.contains("show")) {
            var t = o.default.Event("hide.bs.toast");
            o.default(this._element).trigger(t),
              t.isDefaultPrevented() || this._close();
          }
        }),
        (e.dispose = function () {
          this._clearTimeout(),
            this._element.classList.contains("show") &&
              this._element.classList.remove("show"),
            o.default(this._element).off("click.dismiss.bs.toast"),
            o.default.removeData(this._element, "bs.toast"),
            (this._element = null),
            (this._config = null);
        }),
        (e._getConfig = function (t) {
          return (
            (t = r(
              {},
              gt,
              o.default(this._element).data(),
              "object" == typeof t && t ? t : {}
            )),
            d.typeCheckConfig("toast", t, this.constructor.DefaultType),
            t
          );
        }),
        (e._setListeners = function () {
          var t = this;
          o.default(this._element).on(
            "click.dismiss.bs.toast",
            '[data-dismiss="toast"]',
            function () {
              return t.hide();
            }
          );
        }),
        (e._close = function () {
          var t = this,
            e = function () {
              t._element.classList.add("hide"),
                o.default(t._element).trigger("hidden.bs.toast");
            };
          if (
            (this._element.classList.remove("show"), this._config.animation)
          ) {
            var n = d.getTransitionDurationFromElement(this._element);
            o.default(this._element)
              .one(d.TRANSITION_END, e)
              .emulateTransitionEnd(n);
          } else e();
        }),
        (e._clearTimeout = function () {
          clearTimeout(this._timeout), (this._timeout = null);
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = o.default(this),
              i = n.data("bs.toast");
            if (
              (i ||
                ((i = new t(this, "object" == typeof e && e)),
                n.data("bs.toast", i)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof i[e])
                throw new TypeError('No method named "' + e + '"');
              i[e](this);
            }
          });
        }),
        l(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return ht;
            },
          },
          {
            key: "Default",
            get: function () {
              return gt;
            },
          },
        ]),
        t
      );
    })();
  (o.default.fn.toast = mt._jQueryInterface),
    (o.default.fn.toast.Constructor = mt),
    (o.default.fn.toast.noConflict = function () {
      return (o.default.fn.toast = ct), mt._jQueryInterface;
    }),
    (t.Alert = h),
    (t.Button = m),
    (t.Carousel = w),
    (t.Collapse = D),
    (t.Dropdown = x),
    (t.Modal = q),
    (t.Popover = ot),
    (t.Scrollspy = ut),
    (t.Tab = ft),
    (t.Toast = mt),
    (t.Tooltip = J),
    (t.Util = d),
    Object.defineProperty(t, "__esModule", { value: !0 });
});
;!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});
;/*
 slick-animation.js

 Version: 0.3.3 Beta
 Author: Marvin Hübner
 Docs: https://github.com/marvinhuebner/slick-animation
 Repo: https://github.com/marvinhuebner/slick-animation
 */
!function(a){a.fn.slickAnimation=function(){function n(a,n,t,i,o){o="undefined"!=typeof o?o:!1,1==n.opacity?(a.addClass(t),a.addClass(i)):(a.removeClass(t),a.removeClass(i)),o&&a.css(n)}function t(a,n){return a?1e3*a+1e3:n?1e3*n:a||n?1e3*a+1e3*n:1e3}function i(a,n,t){var i=["animation-"+n,"-webkit-animation-"+n,"-moz-animation-"+n,"-o-animation-"+n,"-ms-animation-"+n],o={}
i.forEach(function(a){o[a]=t+"s"}),a.css(o)}var o=a(this),e=o.find(".slick-list .slick-track > div"),s=o.find('[data-slick-index="0"]'),r="animated",c={opacity:"1"},d={opacity:"0"}
return e.each(function(){var e=a(this)
e.find("[data-animation-in]").each(function(){var u=a(this)
u.css(d)
var l=u.attr("data-animation-in"),f=u.attr("data-animation-out"),h=u.attr("data-delay-in"),m=u.attr("data-duration-in"),y=u.attr("data-delay-out"),C=u.attr("data-duration-out")
f?(s.length>0&&e.hasClass("slick-current")&&(n(u,c,l,r,!0),h&&i(u,"delay",h),m&&i(u,"duration",m),setTimeout(function(){n(u,d,l,r),n(u,c,f,r),y&&i(u,"delay",y),C&&i(u,"duration",C)},t(h,m))),o.on("afterChange",function(a,o,s){e.hasClass("slick-current")&&(n(u,c,l,r,!0),h&&i(u,"delay",h),m&&i(u,"duration",m),setTimeout(function(){n(u,d,l,r),n(u,c,f,r),y&&i(u,"delay",y),C&&i(u,"duration",C)},t(h,m)))}),o.on("beforeChange",function(a,t,i){n(u,d,f,r,!0)})):(s.length>0&&e.hasClass("slick-current")&&(n(u,c,l,r,!0),h&&i(u,"delay",h),m&&i(u,"duration",m)),o.on("afterChange",function(a,t,o){e.hasClass("slick-current")&&(n(u,c,l,r,!0),h&&i(u,"delay",h),m&&i(u,"duration",m))}),o.on("beforeChange",function(a,t,i){n(u,d,l,r,!0)}))})}),this}}(jQuery)
;/*!
	Colorbox 1.6.3
	license: MIT
	http://www.jacklmoore.com/colorbox
*/
(function($,document,window){var
defaults={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:0.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:undefined,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|webp|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return $(this).attr("href")},title:function(){return this.title},createImg:function(){var img=new Image();var attrs=$(this).data("cbox-img-attrs");if(typeof attrs==="object"){$.each(attrs,function(key,val){img[key]=val})}
return img},createIframe:function(){var iframe=document.createElement("iframe");var attrs=$(this).data("cbox-iframe-attrs");if(typeof attrs==="object"){$.each(attrs,function(key,val){iframe[key]=val})}
if("frameBorder" in iframe){iframe.frameBorder=0}
if("allowTransparency" in iframe){iframe.allowTransparency="true"}
iframe.name=new Date().getTime();iframe.allowFullscreen=!0;return iframe},},colorbox="colorbox",prefix="cbox",boxElement=prefix+"Element",event_open=prefix+"_open",event_load=prefix+"_load",event_complete=prefix+"_complete",event_cleanup=prefix+"_cleanup",event_closed=prefix+"_closed",event_purge=prefix+"_purge",$overlay,$box,$wrap,$content,$topBorder,$leftBorder,$rightBorder,$bottomBorder,$related,$window,$loaded,$loadingBay,$loadingOverlay,$title,$current,$slideshow,$next,$prev,$close,$groupControls,$events=$("<a/>"),settings,interfaceHeight,interfaceWidth,loadedHeight,loadedWidth,index,photo,open,active,closing,loadingTimer,publicMethod,div="div",requests=0,previousCSS={},init;function $tag(tag,id,css){var element=document.createElement(tag);if(id){element.id=prefix+id}
if(css){element.style.cssText=css}
return $(element)}
function winheight(){return window.innerHeight?window.innerHeight:$(window).height()}
function Settings(element,options){if(options!==Object(options)){options={}}
this.cache={};this.el=element;this.value=function(key){var dataAttr;if(this.cache[key]===undefined){dataAttr=$(this.el).attr("data-cbox-"+key);if(dataAttr!==undefined){this.cache[key]=dataAttr}else if(options[key]!==undefined){this.cache[key]=options[key]}else if(defaults[key]!==undefined){this.cache[key]=defaults[key]}}
return this.cache[key]};this.get=function(key){var value=this.value(key);return $.isFunction(value)?value.call(this.el,this):value}}
function getIndex(increment){var max=$related.length,newIndex=(index+increment)%max;return newIndex<0?max+newIndex:newIndex}
function setSize(size,dimension){return Math.round((/%/.test(size)?(dimension==="x"?$window.width():winheight())/100:1)*parseInt(size,10))}
function isImage(settings,url){return settings.get("photo")||settings.get("photoRegex").test(url)}
function retinaUrl(settings,url){return settings.get("retinaUrl")&&window.devicePixelRatio>1?url.replace(settings.get("photoRegex"),settings.get("retinaSuffix")):url}
function trapFocus(e){if("contains" in $box[0]&&!$box[0].contains(e.target)&&e.target!==$overlay[0]){e.stopPropagation();$box.focus()}}
function setClass(str){if(setClass.str!==str){$box.add($overlay).removeClass(setClass.str).addClass(str);setClass.str=str}}
function getRelated(rel){index=0;if(rel&&rel!==!1&&rel!=="nofollow"){$related=$("."+boxElement).filter(function(){var options=$.data(this,colorbox);var settings=new Settings(this,options);return settings.get("rel")===rel});index=$related.index(settings.el);if(index===-1){$related=$related.add(settings.el);index=$related.length-1}}else{$related=$(settings.el)}}
function trigger(event){$(document).trigger(event);$events.triggerHandler(event)}
var slideshow=(function(){var active,className=prefix+"Slideshow_",click="click."+prefix,timeOut;function clear(){clearTimeout(timeOut)}
function set(){if(settings.get("loop")||$related[index+1]){clear();timeOut=setTimeout(publicMethod.next,settings.get("slideshowSpeed"))}}
function start(){$slideshow.html(settings.get("slideshowStop")).unbind(click).one(click,stop);$events.bind(event_complete,set).bind(event_load,clear);$box.removeClass(className+"off").addClass(className+"on")}
function stop(){clear();$events.unbind(event_complete,set).unbind(event_load,clear);$slideshow.html(settings.get("slideshowStart")).unbind(click).one(click,function(){publicMethod.next();start()});$box.removeClass(className+"on").addClass(className+"off")}
function reset(){active=!1;$slideshow.hide();clear();$events.unbind(event_complete,set).unbind(event_load,clear);$box.removeClass(className+"off "+className+"on")}
return function(){if(active){if(!settings.get("slideshow")){$events.unbind(event_cleanup,reset);reset()}}else{if(settings.get("slideshow")&&$related[1]){active=!0;$events.one(event_cleanup,reset);if(settings.get("slideshowAuto")){start()}else{stop()}
$slideshow.show()}}}})();function launch(element){var options;if(!closing){options=$(element).data(colorbox);settings=new Settings(element,options);getRelated(settings.get("rel"));if(!open){open=active=!0;setClass(settings.get("className"));$box.css({visibility:"hidden",display:"block",opacity:""});$loaded=$tag(div,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden");$content.css({width:"",height:""}).append($loaded);interfaceHeight=$topBorder.height()+$bottomBorder.height()+$content.outerHeight(!0)-$content.height();interfaceWidth=$leftBorder.width()+$rightBorder.width()+$content.outerWidth(!0)-$content.width();loadedHeight=$loaded.outerHeight(!0);loadedWidth=$loaded.outerWidth(!0);var initialWidth=setSize(settings.get("initialWidth"),"x");var initialHeight=setSize(settings.get("initialHeight"),"y");var maxWidth=settings.get("maxWidth");var maxHeight=settings.get("maxHeight");settings.w=Math.max((maxWidth!==!1?Math.min(initialWidth,setSize(maxWidth,"x")):initialWidth)-loadedWidth-interfaceWidth,0);settings.h=Math.max((maxHeight!==!1?Math.min(initialHeight,setSize(maxHeight,"y")):initialHeight)-loadedHeight-interfaceHeight,0);$loaded.css({width:"",height:settings.h});publicMethod.position();trigger(event_open);settings.get("onOpen");$groupControls.add($title).hide();$box.focus();if(settings.get("trapFocus")){if(document.addEventListener){document.addEventListener("focus",trapFocus,!0);$events.one(event_closed,function(){document.removeEventListener("focus",trapFocus,!0)})}}
if(settings.get("returnFocus")){$events.one(event_closed,function(){$(settings.el).focus()})}}
var opacity=parseFloat(settings.get("opacity"));$overlay.css({opacity:opacity===opacity?opacity:"",cursor:settings.get("overlayClose")?"pointer":"",visibility:"visible",}).show();if(settings.get("closeButton")){$close.html(settings.get("close")).appendTo($content)}else{$close.appendTo("<div/>")}
load()}}
function appendHTML(){if(!$box){init=!1;$window=$(window);$box=$tag(div).attr({id:colorbox,class:$.support.opacity===!1?prefix+"IE":"",role:"dialog",tabindex:"-1",}).hide();$overlay=$tag(div,"Overlay").hide();$loadingOverlay=$([$tag(div,"LoadingOverlay")[0],$tag(div,"LoadingGraphic")[0],]);$wrap=$tag(div,"Wrapper");$content=$tag(div,"Content").append(($title=$tag(div,"Title")),($current=$tag(div,"Current")),($prev=$('<button type="button"/>').attr({id:prefix+"Previous",})),($next=$('<button type="button"/>').attr({id:prefix+"Next"})),($slideshow=$('<button type="button"/>').attr({id:prefix+"Slideshow",})),$loadingOverlay);$close=$('<button type="button"/>').attr({id:prefix+"Close"});$wrap.append($tag(div).append($tag(div,"TopLeft"),($topBorder=$tag(div,"TopCenter")),$tag(div,"TopRight")),$tag(div,!1,"clear:left").append(($leftBorder=$tag(div,"MiddleLeft")),$content,($rightBorder=$tag(div,"MiddleRight"))),$tag(div,!1,"clear:left").append($tag(div,"BottomLeft"),($bottomBorder=$tag(div,"BottomCenter")),$tag(div,"BottomRight"))).find("div div").css({float:"left"});$loadingBay=$tag(div,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;");$groupControls=$next.add($prev).add($current).add($slideshow)}
if(document.body&&!$box.parent().length){$(document.body).append($overlay,$box.append($wrap,$loadingBay))}}
function addBindings(){function clickHandler(e){if(!(e.which>1||e.shiftKey||e.altKey||e.metaKey||e.ctrlKey)){e.preventDefault();launch(this)}}
if($box){if(!init){init=!0;$next.click(function(){publicMethod.next()});$prev.click(function(){publicMethod.prev()});$close.click(function(){publicMethod.close()});$overlay.click(function(){if(settings.get("overlayClose")){publicMethod.close()}});$(document).bind("keydown."+prefix,function(e){var key=e.keyCode;if(open&&settings.get("escKey")&&key===27){e.preventDefault();publicMethod.close()}
if(open&&settings.get("arrowKey")&&$related[1]&&!e.altKey){if(key===37){e.preventDefault();$prev.click()}else if(key===39){e.preventDefault();$next.click()}}});if($.isFunction($.fn.on)){$(document).on("click."+prefix,"."+boxElement,clickHandler)}else{$("."+boxElement).live("click."+prefix,clickHandler)}}
return!0}
return!1}
if($[colorbox]){return}
$(appendHTML);publicMethod=$.fn[colorbox]=$[colorbox]=function(options,callback){var settings;var $obj=this;options=options||{};if($.isFunction($obj)){$obj=$("<a/>");options.open=!0}
if(!$obj[0]){return $obj}
appendHTML();if(addBindings()){if(callback){options.onComplete=callback}
$obj.each(function(){var old=$.data(this,colorbox)||{};$.data(this,colorbox,$.extend(old,options))}).addClass(boxElement);settings=new Settings($obj[0],options);if(settings.get("open")){launch($obj[0])}}
return $obj};publicMethod.position=function(speed,loadedCallback){var css,top=0,left=0,offset=$box.offset(),scrollTop,scrollLeft;$window.unbind("resize."+prefix);$box.css({top:-9e4,left:-9e4});scrollTop=$window.scrollTop();scrollLeft=$window.scrollLeft();if(settings.get("fixed")){offset.top-=scrollTop;offset.left-=scrollLeft;$box.css({position:"fixed"})}else{top=scrollTop;left=scrollLeft;$box.css({position:"absolute"})}
if(settings.get("right")!==!1){left+=Math.max($window.width()-settings.w-loadedWidth-interfaceWidth-setSize(settings.get("right"),"x"),0)}else if(settings.get("left")!==!1){left+=setSize(settings.get("left"),"x")}else{left+=Math.round(Math.max($window.width()-settings.w-loadedWidth-interfaceWidth,0)/2)}
if(settings.get("bottom")!==!1){top+=Math.max(winheight()-settings.h-loadedHeight-interfaceHeight-setSize(settings.get("bottom"),"y"),0)}else if(settings.get("top")!==!1){top+=setSize(settings.get("top"),"y")}else{top+=Math.round(Math.max(winheight()-settings.h-loadedHeight-interfaceHeight,0)/2)}
$box.css({top:offset.top,left:offset.left,visibility:"visible"});$wrap[0].style.width=$wrap[0].style.height="9999px";function modalDimensions(){$topBorder[0].style.width=$bottomBorder[0].style.width=$content[0].style.width=parseInt($box[0].style.width,10)-interfaceWidth+"px";$content[0].style.height=$leftBorder[0].style.height=$rightBorder[0].style.height=parseInt($box[0].style.height,10)-interfaceHeight+"px"}
css={width:settings.w+loadedWidth+interfaceWidth,height:settings.h+loadedHeight+interfaceHeight,top:top,left:left,};if(speed){var tempSpeed=0;$.each(css,function(i){if(css[i]!==previousCSS[i]){tempSpeed=speed;return}});speed=tempSpeed}
previousCSS=css;if(!speed){$box.css(css)}
$box.dequeue().animate(css,{duration:speed||0,complete:function(){modalDimensions();active=!1;$wrap[0].style.width=settings.w+loadedWidth+interfaceWidth+"px";$wrap[0].style.height=settings.h+loadedHeight+interfaceHeight+"px";if(settings.get("reposition")){setTimeout(function(){$window.bind("resize."+prefix,publicMethod.position)},1)}
if($.isFunction(loadedCallback)){loadedCallback()}},step:modalDimensions,})};publicMethod.resize=function(options){var scrolltop;if(open){options=options||{};if(options.width){settings.w=setSize(options.width,"x")-loadedWidth-interfaceWidth}
if(options.innerWidth){settings.w=setSize(options.innerWidth,"x")}
$loaded.css({width:settings.w});if(options.height){settings.h=setSize(options.height,"y")-loadedHeight-interfaceHeight}
if(options.innerHeight){settings.h=setSize(options.innerHeight,"y")}
if(!options.innerHeight&&!options.height){scrolltop=$loaded.scrollTop();$loaded.css({height:"auto"});settings.h=$loaded.height()}
$loaded.css({height:settings.h});if(scrolltop){$loaded.scrollTop(scrolltop)}
publicMethod.position(settings.get("transition")==="none"?0:settings.get("speed"))}};publicMethod.prep=function(object){if(!open){return}
var callback,speed=settings.get("transition")==="none"?0:settings.get("speed");$loaded.remove();$loaded=$tag(div,"LoadedContent").append(object);function getWidth(){settings.w=settings.w||$loaded.width();settings.w=settings.mw&&settings.mw<settings.w?settings.mw:settings.w;return settings.w}
function getHeight(){settings.h=settings.h||$loaded.height();settings.h=settings.mh&&settings.mh<settings.h?settings.mh:settings.h;return settings.h}
$loaded.hide().appendTo($loadingBay.show()).css({width:getWidth(),overflow:settings.get("scrolling")?"auto":"hidden",}).css({height:getHeight()}).prependTo($content);$loadingBay.hide();$(photo).css({float:"none"});setClass(settings.get("className"));callback=function(){var total=$related.length,iframe,complete;if(!open){return}
function removeFilter(){if($.support.opacity===!1){$box[0].style.removeAttribute("filter")}}
complete=function(){clearTimeout(loadingTimer);$loadingOverlay.hide();trigger(event_complete);settings.get("onComplete")};$title.html(settings.get("title")).show();$loaded.show();if(total>1){if(typeof settings.get("current")==="string"){$current.html(settings.get("current").replace("{current}",index+1).replace("{total}",total)).show()}
$next[settings.get("loop")||index<total-1?"show":"hide"]().html(settings.get("next"));$prev[settings.get("loop")||index?"show":"hide"]().html(settings.get("previous"));slideshow();if(settings.get("preloading")){$.each([getIndex(-1),getIndex(1)],function(){var img,i=$related[this],settings=new Settings(i,$.data(i,colorbox)),src=settings.get("href");if(src&&isImage(settings,src)){src=retinaUrl(settings,src);img=document.createElement("img");img.src=src}})}}else{$groupControls.hide()}
if(settings.get("iframe")){iframe=settings.get("createIframe");if(!settings.get("scrolling")){iframe.scrolling="no"}
$(iframe).attr({src:settings.get("href"),class:prefix+"Iframe",}).one("load",complete).appendTo($loaded);$events.one(event_purge,function(){iframe.src="//about:blank"});if(settings.get("fastIframe")){$(iframe).trigger("load")}}else{complete()}
if(settings.get("transition")==="fade"){$box.fadeTo(speed,1,removeFilter)}else{removeFilter()}};if(settings.get("transition")==="fade"){$box.fadeTo(speed,0,function(){publicMethod.position(0,callback)})}else{publicMethod.position(speed,callback)}};function load(){var href,setResize,prep=publicMethod.prep,$inline,request=++requests;active=!0;photo=!1;trigger(event_purge);trigger(event_load);settings.get("onLoad");settings.h=settings.get("height")?setSize(settings.get("height"),"y")-loadedHeight-interfaceHeight:settings.get("innerHeight")&&setSize(settings.get("innerHeight"),"y");settings.w=settings.get("width")?setSize(settings.get("width"),"x")-loadedWidth-interfaceWidth:settings.get("innerWidth")&&setSize(settings.get("innerWidth"),"x");settings.mw=settings.w;settings.mh=settings.h;if(settings.get("maxWidth")){settings.mw=setSize(settings.get("maxWidth"),"x")-loadedWidth-interfaceWidth;settings.mw=settings.w&&settings.w<settings.mw?settings.w:settings.mw}
if(settings.get("maxHeight")){settings.mh=setSize(settings.get("maxHeight"),"y")-loadedHeight-interfaceHeight;settings.mh=settings.h&&settings.h<settings.mh?settings.h:settings.mh}
href=settings.get("href");loadingTimer=setTimeout(function(){$loadingOverlay.show()},100);if(settings.get("inline")){var $target=$(href);$inline=$("<div>").hide().insertBefore($target);$events.one(event_purge,function(){$inline.replaceWith($target)});prep($target)}else if(settings.get("iframe")){prep(" ")}else if(settings.get("html")){prep(settings.get("html"))}else if(isImage(settings,href)){href=retinaUrl(settings,href);photo=settings.get("createImg");$(photo).addClass(prefix+"Photo").bind("error."+prefix,function(){prep($tag(div,"Error").html(settings.get("imgError")))}).one("load",function(){if(request!==requests){return}
setTimeout(function(){var percent;if(settings.get("retinaImage")&&window.devicePixelRatio>1){photo.height=photo.height/window.devicePixelRatio;photo.width=photo.width/window.devicePixelRatio}
if(settings.get("scalePhotos")){setResize=function(){photo.height-=photo.height*percent;photo.width-=photo.width*percent};if(settings.mw&&photo.width>settings.mw){percent=(photo.width-settings.mw)/photo.width;setResize()}
if(settings.mh&&photo.height>settings.mh){percent=(photo.height-settings.mh)/photo.height;setResize()}}
if(settings.h){photo.style.marginTop=Math.max(settings.mh-photo.height,0)/2+"px"}
if($related[1]&&(settings.get("loop")||$related[index+1])){photo.style.cursor="pointer";$(photo).bind("click."+prefix,function(){publicMethod.next()})}
photo.style.width=photo.width+"px";photo.style.height=photo.height+"px";prep(photo)},1)});photo.src=href}else if(href){$loadingBay.load(href,settings.get("data"),function(data,status){if(request===requests){prep(status==="error"?$tag(div,"Error").html(settings.get("xhrError")):$(this).contents())}})}}
publicMethod.next=function(){if(!active&&$related[1]&&(settings.get("loop")||$related[index+1])){index=getIndex(1);launch($related[index])}};publicMethod.prev=function(){if(!active&&$related[1]&&(settings.get("loop")||index)){index=getIndex(-1);launch($related[index])}};publicMethod.close=function(){if(open&&!closing){closing=!0;open=!1;trigger(event_cleanup);settings.get("onCleanup");$window.unbind("."+prefix);$overlay.fadeTo(settings.get("fadeOut")||0,0);$box.stop().fadeTo(settings.get("fadeOut")||0,0,function(){$box.hide();$overlay.hide();trigger(event_purge);$loaded.remove();setTimeout(function(){closing=!1;trigger(event_closed);settings.get("onClosed")},1)})}};publicMethod.remove=function(){if(!$box){return}
$box.stop();$[colorbox].close();$box.stop(!1,!0).remove();$overlay.remove();closing=!1;$box=null;$("."+boxElement).removeData(colorbox).removeClass(boxElement);$(document).unbind("click."+prefix).unbind("keydown."+prefix)};publicMethod.element=function(){return $(settings.el)};publicMethod.settings=defaults})(jQuery,document,window)
;!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).Shuffle=e()}(this,function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function r(){}r.prototype={on:function(t,e,i){var n=this.e||(this.e={});return(n[t]||(n[t]=[])).push({fn:e,ctx:i}),this},once:function(t,e,i){var n=this;function s(){n.off(t,s),e.apply(i,arguments)}return s._=e,this.on(t,s,i)},emit:function(t){for(var e=[].slice.call(arguments,1),i=((this.e||(this.e={}))[t]||[]).slice(),n=0,s=i.length;n<s;n++)i[n].fn.apply(i[n].ctx,e);return this},off:function(t,e){var i=this.e||(this.e={}),n=i[t],s=[];if(n&&e)for(var o=0,r=n.length;o<r;o++)n[o].fn!==e&&n[o].fn._!==e&&s.push(n[o]);return s.length?i[t]=s:delete i[t],this}};var l=r,a=r;l.TinyEmitter=a;var u="undefined"!=typeof Element?Element.prototype:{},h=u.matches||u.matchesSelector||u.webkitMatchesSelector||u.mozMatchesSelector||u.msMatchesSelector||u.oMatchesSelector,f=function(t,e){if(!t||1!==t.nodeType)return!1;if(h)return h.call(t,e);for(var i=t.parentNode.querySelectorAll(e),n=0;n<i.length;n++)if(i[n]==t)return!0;return!1};var c=function(t,e){var i,n,s,o,r=0;return function(){i=this,n=arguments;var t=new Date-r;return o||(t>=e?l():o=setTimeout(l,e-t)),s};function l(){o=0,r=+new Date,s=t.apply(i,n),i=null,n=null}};function d(){}function m(t){return parseFloat(t)||0}var p=function(){function e(i,n){t(this,e),this.x=m(i),this.y=m(n)}return i(e,null,[{key:"equals",value:function(t,e){return t.x===e.x&&t.y===e.y}}]),e}(),v=function(){function e(i,n,s,o,r){t(this,e),this.id=r,this.left=i,this.top=n,this.width=s,this.height=o}return i(e,null,[{key:"intersects",value:function(t,e){return t.left<e.left+e.width&&e.left<t.left+t.width&&t.top<e.top+e.height&&e.top<t.top+t.height}}]),e}(),y={BASE:"shuffle",SHUFFLE_ITEM:"shuffle-item",VISIBLE:"shuffle-item--visible",HIDDEN:"shuffle-item--hidden"},g=0,_=function(){function e(i){t(this,e),g+=1,this.id=g,this.element=i,this.isVisible=!0,this.isHidden=!1}return i(e,[{key:"show",value:function(){this.isVisible=!0,this.element.classList.remove(y.HIDDEN),this.element.classList.add(y.VISIBLE),this.element.removeAttribute("aria-hidden")}},{key:"hide",value:function(){this.isVisible=!1,this.element.classList.remove(y.VISIBLE),this.element.classList.add(y.HIDDEN),this.element.setAttribute("aria-hidden",!0)}},{key:"init",value:function(){this.addClasses([y.SHUFFLE_ITEM,y.VISIBLE]),this.applyCss(e.Css.INITIAL),this.scale=e.Scale.VISIBLE,this.point=new p}},{key:"addClasses",value:function(t){var e=this;t.forEach(function(t){e.element.classList.add(t)})}},{key:"removeClasses",value:function(t){var e=this;t.forEach(function(t){e.element.classList.remove(t)})}},{key:"applyCss",value:function(t){var e=this;Object.keys(t).forEach(function(i){e.element.style[i]=t[i]})}},{key:"dispose",value:function(){this.removeClasses([y.HIDDEN,y.VISIBLE,y.SHUFFLE_ITEM]),this.element.removeAttribute("style"),this.element=null}}]),e}();_.Css={INITIAL:{position:"absolute",top:0,left:0,visibility:"visible",willChange:"transform"},VISIBLE:{before:{opacity:1,visibility:"visible"},after:{transitionDelay:""}},HIDDEN:{before:{opacity:0},after:{visibility:"hidden",transitionDelay:""}}},_.Scale={VISIBLE:1,HIDDEN:.001};var E=null,I=function(){if(null!==E)return E;var t=document.body||document.documentElement,e=document.createElement("div");return e.style.cssText="width:10px;padding:2px;box-sizing:border-box;",t.appendChild(e),E="10px"===window.getComputedStyle(e,null).width,t.removeChild(e),E};function b(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window.getComputedStyle(t,null),n=m(i[e]);return I()||"width"!==e?I()||"height"!==e||(n+=m(i.paddingTop)+m(i.paddingBottom)+m(i.borderTopWidth)+m(i.borderBottomWidth)):n+=m(i.paddingLeft)+m(i.paddingRight)+m(i.borderLeftWidth)+m(i.borderRightWidth),n}var S={reverse:!1,by:null,compare:null,randomize:!1,key:"element"};function T(t,e){var i=Object.assign({},S,e),n=Array.from(t),s=!1;return t.length?i.randomize?function(t){for(var e=t.length;e;){e-=1;var i=Math.floor(Math.random()*(e+1)),n=t[i];t[i]=t[e],t[e]=n}return t}(t):("function"==typeof i.by?t.sort(function(t,e){if(s)return 0;var n=i.by(t[i.key]),o=i.by(e[i.key]);return void 0===n&&void 0===o?(s=!0,0):n<o||"sortFirst"===n||"sortLast"===o?-1:n>o||"sortLast"===n||"sortFirst"===o?1:0}):"function"==typeof i.compare&&t.sort(i.compare),s?n:(i.reverse&&t.reverse(),t)):[]}var k={},w="transitionend",C=0;function L(t){return!!k[t]&&(k[t].element.removeEventListener(w,k[t].listener),k[t]=null,!0)}function D(t,e){var i=w+(C+=1),n=function(t){t.currentTarget===t.target&&(L(i),e(t))};return t.addEventListener(w,n),k[i]={element:t,listener:n},i}function z(t){return Math.max.apply(Math,t)}function M(t,e,i,n){var s=t/e;return Math.abs(Math.round(s)-s)<n&&(s=Math.round(s)),Math.min(Math.ceil(s),i)}function A(t,e,i){if(1===e)return t;for(var n=[],s=0;s<=i-e;s++)n.push(z(t.slice(s,s+e)));return n}function F(t,e){for(var i,n=(i=t,Math.min.apply(Math,i)),s=0,o=t.length;s<o;s++)if(t[s]>=n-e&&t[s]<=n+e)return s;return 0}function x(t,e){var i={};t.forEach(function(t){i[t.top]?i[t.top].push(t):i[t.top]=[t]});var n=[],s=[],o=[];return Object.keys(i).forEach(function(t){var r=i[t];s.push(r);var l,a=r[r.length-1],u=a.left+a.width,h=Math.round((e-u)/2),f=r,c=!1;if(h>0){var d=[];(c=r.every(function(t){var e=new v(t.left+h,t.top,t.width,t.height,t.id),i=!n.some(function(t){return v.intersects(e,t)});return d.push(e),i}))&&(f=d)}if(!c&&r.some(function(t){return n.some(function(e){var i=v.intersects(t,e);return i&&(l=e),i})})){var m=o.findIndex(function(t){return t.includes(l)});o.splice(m,1,s[m])}n=n.concat(f),o.push(f)}),[].concat.apply([],o).sort(function(t,e){return t.id-e.id}).map(function(t){return new p(t.left,t.top)})}function O(t){return Array.from(new Set(t))}var N=0,H=function(e){function r(e){var i,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t(this,r),(i=o(this,n(r).call(this))).options=Object.assign({},r.options,s),i.options.delimeter&&(i.options.delimiter=i.options.delimeter),i.lastSort={},i.group=r.ALL_ITEMS,i.lastFilter=r.ALL_ITEMS,i.isEnabled=!0,i.isDestroyed=!1,i.isInitialized=!1,i._transitions=[],i.isTransitioning=!1,i._queue=[];var l=i._getElementOption(e);if(!l)throw new TypeError("Shuffle needs to be initialized with an element.");return i.element=l,i.id="shuffle_"+N,N+=1,i._init(),i.isInitialized=!0,i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(r,l),i(r,[{key:"_init",value:function(){if(this.items=this._getItems(),this.options.sizer=this._getElementOption(this.options.sizer),this.element.classList.add(r.Classes.BASE),this._initItems(this.items),this._onResize=this._getResizeFunction(),window.addEventListener("resize",this._onResize),"complete"!==document.readyState){var t=this.layout.bind(this);window.addEventListener("load",function e(){window.removeEventListener("load",e),t()})}var e=window.getComputedStyle(this.element,null),i=r.getSize(this.element).width;this._validateStyles(e),this._setColumns(i),this.filter(this.options.group,this.options.initialSort),this.element.offsetWidth,this.setItemTransitions(this.items),this.element.style.transition="height ".concat(this.options.speed,"ms ").concat(this.options.easing)}},{key:"_getResizeFunction",value:function(){var t=this._handleResize.bind(this);return this.options.throttle?this.options.throttle(t,this.options.throttleTime):t}},{key:"_getElementOption",value:function(t){return"string"==typeof t?this.element.querySelector(t):t&&t.nodeType&&1===t.nodeType?t:t&&t.jquery?t[0]:null}},{key:"_validateStyles",value:function(t){"static"===t.position&&(this.element.style.position="relative"),"hidden"!==t.overflow&&(this.element.style.overflow="hidden")}},{key:"_filter",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.lastFilter,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.items,i=this._getFilteredSets(t,e);return this._toggleFilterClasses(i),this.lastFilter=t,"string"==typeof t&&(this.group=t),i}},{key:"_getFilteredSets",value:function(t,e){var i=this,n=[],s=[];return t===r.ALL_ITEMS?n=e:e.forEach(function(e){i._doesPassFilter(t,e.element)?n.push(e):s.push(e)}),{visible:n,hidden:s}}},{key:"_doesPassFilter",value:function(t,e){if("function"==typeof t)return t.call(e,e,this);var i=e.getAttribute("data-"+r.FILTER_ATTRIBUTE_KEY),n=this.options.delimiter?i.split(this.options.delimiter):JSON.parse(i);function s(t){return n.includes(t)}return Array.isArray(t)?this.options.filterMode===r.FilterMode.ANY?t.some(s):t.every(s):n.includes(t)}},{key:"_toggleFilterClasses",value:function(t){var e=t.visible,i=t.hidden;e.forEach(function(t){t.show()}),i.forEach(function(t){t.hide()})}},{key:"_initItems",value:function(t){t.forEach(function(t){t.init()})}},{key:"_disposeItems",value:function(t){t.forEach(function(t){t.dispose()})}},{key:"_updateItemCount",value:function(){this.visibleItems=this._getFilteredItems().length}},{key:"setItemTransitions",value:function(t){var e=this.options,i=e.speed,n=e.easing,s=this.options.useTransforms?["transform"]:["top","left"],o=Object.keys(_.Css.HIDDEN.before).map(function(t){return t.replace(/([A-Z])/g,function(t,e){return"-".concat(e.toLowerCase())})}),r=s.concat(o).join();t.forEach(function(t){t.element.style.transitionDuration=i+"ms",t.element.style.transitionTimingFunction=n,t.element.style.transitionProperty=r})}},{key:"_getItems",value:function(){var t=this;return Array.from(this.element.children).filter(function(e){return f(e,t.options.itemSelector)}).map(function(t){return new _(t)})}},{key:"_mergeNewItems",value:function(t){var e=Array.from(this.element.children);return T(this.items.concat(t),{by:function(t){return e.indexOf(t)}})}},{key:"_getFilteredItems",value:function(){return this.items.filter(function(t){return t.isVisible})}},{key:"_getConcealedItems",value:function(){return this.items.filter(function(t){return!t.isVisible})}},{key:"_getColumnSize",value:function(t,e){var i;return 0===(i="function"==typeof this.options.columnWidth?this.options.columnWidth(t):this.options.sizer?r.getSize(this.options.sizer).width:this.options.columnWidth?this.options.columnWidth:this.items.length>0?r.getSize(this.items[0].element,!0).width:t)&&(i=t),i+e}},{key:"_getGutterSize",value:function(t){return"function"==typeof this.options.gutterWidth?this.options.gutterWidth(t):this.options.sizer?b(this.options.sizer,"marginLeft"):this.options.gutterWidth}},{key:"_setColumns",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.getSize(this.element).width,e=this._getGutterSize(t),i=this._getColumnSize(t,e),n=(t+e)/i;Math.abs(Math.round(n)-n)<this.options.columnThreshold&&(n=Math.round(n)),this.cols=Math.max(Math.floor(n||0),1),this.containerWidth=t,this.colWidth=i}},{key:"_setContainerSize",value:function(){this.element.style.height=this._getContainerSize()+"px"}},{key:"_getContainerSize",value:function(){return z(this.positions)}},{key:"_getStaggerAmount",value:function(t){return Math.min(t*this.options.staggerAmount,this.options.staggerAmountMax)}},{key:"_dispatch",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.isDestroyed||(e.shuffle=this,this.emit(t,e))}},{key:"_resetCols",value:function(){var t=this.cols;for(this.positions=[];t;)t-=1,this.positions.push(0)}},{key:"_layout",value:function(t){var e=this,i=this._getNextPositions(t),n=0;t.forEach(function(t,s){function o(){t.applyCss(_.Css.VISIBLE.after)}if(p.equals(t.point,i[s])&&!t.isHidden)return t.applyCss(_.Css.VISIBLE.before),void o();t.point=i[s],t.scale=_.Scale.VISIBLE,t.isHidden=!1;var r=e.getStylesForTransition(t,_.Css.VISIBLE.before);r.transitionDelay=e._getStaggerAmount(n)+"ms",e._queue.push({item:t,styles:r,callback:o}),n+=1})}},{key:"_getNextPositions",value:function(t){var e=this;if(this.options.isCentered){var i=t.map(function(t,i){var n=r.getSize(t.element,!0),s=e._getItemPosition(n);return new v(s.x,s.y,n.width,n.height,i)});return this.getTransformedPositions(i,this.containerWidth)}return t.map(function(t){return e._getItemPosition(r.getSize(t.element,!0))})}},{key:"_getItemPosition",value:function(t){return function(t){for(var e=t.itemSize,i=t.positions,n=t.gridSize,s=t.total,o=t.threshold,r=t.buffer,l=M(e.width,n,s,o),a=A(i,l,s),u=F(a,r),h=new p(n*u,a[u]),f=a[u]+e.height,c=0;c<l;c++)i[u+c]=f;return h}({itemSize:t,positions:this.positions,gridSize:this.colWidth,total:this.cols,threshold:this.options.columnThreshold,buffer:this.options.buffer})}},{key:"getTransformedPositions",value:function(t,e){return x(t,e)}},{key:"_shrink",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._getConcealedItems(),i=0;e.forEach(function(e){function n(){e.applyCss(_.Css.HIDDEN.after)}if(e.isHidden)return e.applyCss(_.Css.HIDDEN.before),void n();e.scale=_.Scale.HIDDEN,e.isHidden=!0;var s=t.getStylesForTransition(e,_.Css.HIDDEN.before);s.transitionDelay=t._getStaggerAmount(i)+"ms",t._queue.push({item:e,styles:s,callback:n}),i+=1})}},{key:"_handleResize",value:function(){this.isEnabled&&!this.isDestroyed&&this.update()}},{key:"getStylesForTransition",value:function(t,e){var i=Object.assign({},e);if(this.options.useTransforms){var n=this.options.roundTransforms?Math.round(t.point.x):t.point.x,s=this.options.roundTransforms?Math.round(t.point.y):t.point.y;i.transform="translate(".concat(n,"px, ").concat(s,"px) scale(").concat(t.scale,")")}else i.left=t.point.x+"px",i.top=t.point.y+"px";return i}},{key:"_whenTransitionDone",value:function(t,e,i){var n=D(t,function(t){e(),i(null,t)});this._transitions.push(n)}},{key:"_getTransitionFunction",value:function(t){var e=this;return function(i){t.item.applyCss(t.styles),e._whenTransitionDone(t.item.element,t.callback,i)}}},{key:"_processQueue",value:function(){this.isTransitioning&&this._cancelMovement();var t=this.options.speed>0,e=this._queue.length>0;e&&t&&this.isInitialized?this._startTransitions(this._queue):e?(this._styleImmediately(this._queue),this._dispatch(r.EventType.LAYOUT)):this._dispatch(r.EventType.LAYOUT),this._queue.length=0}},{key:"_startTransitions",value:function(t){var e=this;this.isTransitioning=!0,function(t,e,i){i||("function"==typeof e?(i=e,e=null):i=d);var n=t&&t.length;if(!n)return i(null,[]);var s=!1,o=new Array(n);function r(t){return function(e,r){if(!s){if(e)return i(e,o),void(s=!0);o[t]=r,--n||i(null,o)}}}t.forEach(e?function(t,i){t.call(e,r(i))}:function(t,e){t(r(e))})}(t.map(function(t){return e._getTransitionFunction(t)}),this._movementFinished.bind(this))}},{key:"_cancelMovement",value:function(){this._transitions.forEach(L),this._transitions.length=0,this.isTransitioning=!1}},{key:"_styleImmediately",value:function(t){if(t.length){var e=t.map(function(t){return t.item.element});r._skipTransitions(e,function(){t.forEach(function(t){t.item.applyCss(t.styles),t.callback()})})}}},{key:"_movementFinished",value:function(){this._transitions.length=0,this.isTransitioning=!1,this._dispatch(r.EventType.LAYOUT)}},{key:"filter",value:function(t,e){this.isEnabled&&((!t||t&&0===t.length)&&(t=r.ALL_ITEMS),this._filter(t),this._shrink(),this._updateItemCount(),this.sort(e))}},{key:"sort",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.lastSort;if(this.isEnabled){this._resetCols();var e=T(this._getFilteredItems(),t);this._layout(e),this._processQueue(),this._setContainerSize(),this.lastSort=t}}},{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.isEnabled&&(t||this._setColumns(),this.sort())}},{key:"layout",value:function(){this.update(!0)}},{key:"add",value:function(t){var e=this,i=O(t).map(function(t){return new _(t)});this._initItems(i),this._resetCols();var n=T(this._mergeNewItems(i),this.lastSort),s=this._filter(this.lastFilter,n),o=function(t){return i.includes(t)},r=function(t){t.scale=_.Scale.HIDDEN,t.isHidden=!0,t.applyCss(_.Css.HIDDEN.before),t.applyCss(_.Css.HIDDEN.after)},l=this._getNextPositions(s.visible);s.visible.forEach(function(t,i){o(t)&&(t.point=l[i],r(t),t.applyCss(e.getStylesForTransition(t,{})))}),s.hidden.forEach(function(t){o(t)&&r(t)}),this.element.offsetWidth,this.setItemTransitions(i),this.items=this._mergeNewItems(i),this.filter(this.lastFilter)}},{key:"disable",value:function(){this.isEnabled=!1}},{key:"enable",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.isEnabled=!0,t&&this.update()}},{key:"remove",value:function(t){var e=this;if(t.length){var i=O(t),n=i.map(function(t){return e.getItemByElement(t)}).filter(function(t){return!!t});this._toggleFilterClasses({visible:[],hidden:n}),this._shrink(n),this.sort(),this.items=this.items.filter(function(t){return!n.includes(t)}),this._updateItemCount(),this.once(r.EventType.LAYOUT,function(){e._disposeItems(n),i.forEach(function(t){t.parentNode.removeChild(t)}),e._dispatch(r.EventType.REMOVED,{collection:i})})}}},{key:"getItemByElement",value:function(t){return this.items.find(function(e){return e.element===t})}},{key:"resetItems",value:function(){var t=this;this._disposeItems(this.items),this.isInitialized=!1,this.items=this._getItems(),this._initItems(this.items),this.once(r.EventType.LAYOUT,function(){t.setItemTransitions(t.items),t.isInitialized=!0}),this.filter(this.lastFilter)}},{key:"destroy",value:function(){this._cancelMovement(),window.removeEventListener("resize",this._onResize),this.element.classList.remove("shuffle"),this.element.removeAttribute("style"),this._disposeItems(this.items),this.items.length=0,this._transitions.length=0,this.options.sizer=null,this.element=null,this.isDestroyed=!0,this.isEnabled=!1}}],[{key:"getSize",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=window.getComputedStyle(t,null),n=b(t,"width",i),s=b(t,"height",i);e&&(n+=b(t,"marginLeft",i)+b(t,"marginRight",i),s+=b(t,"marginTop",i)+b(t,"marginBottom",i));return{width:n,height:s}}},{key:"_skipTransitions",value:function(t,e){var i=t.map(function(t){var e=t.style,i=e.transitionDuration,n=e.transitionDelay;return e.transitionDuration="0ms",e.transitionDelay="0ms",{duration:i,delay:n}});e(),t[0].offsetWidth,t.forEach(function(t,e){t.style.transitionDuration=i[e].duration,t.style.transitionDelay=i[e].delay})}}]),r}();return H.ShuffleItem=_,H.ALL_ITEMS="all",H.FILTER_ATTRIBUTE_KEY="groups",H.EventType={LAYOUT:"shuffle:layout",REMOVED:"shuffle:removed"},H.Classes=y,H.FilterMode={ANY:"any",ALL:"all"},H.options={group:H.ALL_ITEMS,speed:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)",itemSelector:"*",sizer:null,gutterWidth:0,columnWidth:0,delimiter:null,buffer:0,columnThreshold:.01,initialSort:null,throttle:c,throttleTime:300,staggerAmount:15,staggerAmountMax:150,useTransforms:!0,filterMode:H.FilterMode.ANY,isCentered:!1,roundTransforms:!0},H.Point=p,H.Rect=v,H.__sorter=T,H.__getColumnSpan=M,H.__getAvailablePositions=A,H.__getShortColumn=F,H.__getCenteredPositions=x,H});
;jQuery(function($){"use strict";window.onscroll=function(){scrollFunction()};function scrollFunction(){if(document.body.scrollTop>350||document.documentElement.scrollTop>350){document.getElementById("header-nav").style.display="block";document.getElementById("body-nav").style.display="none"}else{document.getElementById("header-nav").style.display="none";document.getElementById("body-nav").style.display="block"}}
$(window).on("scroll",function(){function counter(){var oTop;if($(".counterUp").length!==0){oTop=$(".counterUp").offset().top-window.innerHeight}
if($(window).scrollTop()>oTop){$(".counterUp").each(function(){var $this=$(this),countTo=$this.attr("data-count");$({countNum:$this.text(),}).animate({countNum:countTo,},{duration:1000,easing:"swing",step:function(){$this.text(Math.floor(this.countNum))},complete:function(){$this.text(this.countNum)},})})}}
counter();function scrollTopBtn(){var scrollToTop=$("#back-to-top"),scroll=$(window).scrollTop();if(scroll>=50){scrollToTop.fadeIn()}else{scrollToTop.fadeOut()}}
scrollTopBtn()});$(document).ready(function(){function navSearch(){$(".nav-search").on("click",function(){$(".search-block").fadeIn(350)});$(".search-close").on("click",function(){$(".search-block").fadeOut(350)})}
navSearch();function backToTop(){$("#back-to-top").on("click",function(){$("#back-to-top").tooltip("hide");$("body,html").animate({scrollTop:0,},800);return!1})}
backToTop();function bannerCarouselOne(){$(".banner-carousel.banner-carousel-1").slick({slidesToShow:1,slidesToScroll:1,autoplay:!0,dots:!1,speed:600,arrows:!0,prevArrow:'<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',nextArrow:'<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>',});$(".banner-carousel.banner-carousel-1").slickAnimation()}
bannerCarouselOne();function bannerCarouselTwo(){$(".banner-carousel.banner-carousel-2").slick({fade:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,dots:!1,speed:600,arrows:!0,prevArrow:'<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',nextArrow:'<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>',})}
bannerCarouselTwo();function pageSlider(){$(".page-slider").slick({fade:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,dots:!1,speed:600,arrows:!0,prevArrow:'<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',nextArrow:'<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>',})}
pageSlider();function projectShuffle(){if($(".shuffle-wrapper").length!==0){var Shuffle=window.Shuffle;var myShuffle=new Shuffle(document.querySelector(".shuffle-wrapper"),{itemSelector:".shuffle-item",sizer:".shuffle-sizer",buffer:1,});$('input[name="shuffle-filter"]').on("change",function(evt){var input=evt.currentTarget;if(input.checked){myShuffle.filter(input.value)}});$(".shuffle-btn-group label").on("click",function(){$(".shuffle-btn-group label").removeClass("active");$(this).addClass("active")})}}
projectShuffle();function testimonialCarousel(){$(".testimonial-slide").slick({slidesToShow:1,slidesToScroll:1,dots:!1,speed:600,arrows:!1,})}
testimonialCarousel();function teamCarousel(){$(".team-slide").slick({dots:!1,infinite:!1,speed:300,slidesToShow:4,slidesToScroll:2,arrows:!0,prevArrow:'<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',nextArrow:'<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>',responsive:[{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:3,},},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2,},},{breakpoint:481,settings:{slidesToShow:1,slidesToScroll:1,},},],})}
teamCarousel();function cusCarousel(){$(".cus-carousel").slick({infinite:!0,autoplay:!0,slidesToShow:8,autoplaySpeed:1000,slidesToScroll:1,responsive:[{breakpoint:992,settings:{slidesToShow:5,slidesToScroll:1,},},{breakpoint:768,settings:{slidesToShow:2,autoplaySpeed:1500,slidesToScroll:2,},},],})}
cusCarousel();function cusCarousel2(){$(".cus-carousel-2").slick({infinite:!0,autoplay:!0,slidesToShow:8,autoplaySpeed:1200,slidesToScroll:1,responsive:[{breakpoint:992,settings:{slidesToShow:5,slidesToScroll:1,},},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2,autoplaySpeed:1800,},},],})}
cusCarousel2();function mediaPopup(){$(".gallery-popup").colorbox({rel:"gallery-popup",transition:"slideshow",innerHeight:"500",});$(".popup").colorbox({iframe:!0,innerWidth:600,innerHeight:400,})}
mediaPopup()})})
;