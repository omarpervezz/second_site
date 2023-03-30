/*
 UAParser.js v0.7.21
 Lightweight JavaScript-based User-Agent string parser
 https://github.com/faisalman/ua-parser-js

 Copyright ? 2012-2019 Faisal Salman <f@faisalman.com>
 Licensed under MIT License
*/
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(a){return a.raw=a};$jscomp.createTemplateTagFirstArgWithRaw=function(a,e){a.raw=e;return a};$jscomp.arrayIteratorImpl=function(a){var e=0;return function(){return e<a.length?{done:!1,value:a[e++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;
$jscomp.ISOLATE_POLYFILLS=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,e,f){if(a==Array.prototype||a==Object.prototype)return a;a[e]=f.value;return a};
$jscomp.getGlobal=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var e=0;e<a.length;++e){var f=a[e];if(f&&f.Math==Math)return f}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};
$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(a,e){var f=$jscomp.propertyToPolyfillSymbol[e];if(null==f)return a[e];f=a[f];return void 0!==f?f:a[e]};$jscomp.polyfill=function(a,e,f,d){e&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(a,e,f,d):$jscomp.polyfillUnisolated(a,e,f,d))};
$jscomp.polyfillUnisolated=function(a,e,f,d){f=$jscomp.global;a=a.split(".");for(d=0;d<a.length-1;d++){var b=a[d];if(!(b in f))return;f=f[b]}a=a[a.length-1];d=f[a];e=e(d);e!=d&&null!=e&&$jscomp.defineProperty(f,a,{configurable:!0,writable:!0,value:e})};
$jscomp.polyfillIsolated=function(a,e,f,d){var b=a.split(".");a=1===b.length;d=b[0];d=!a&&d in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var k=0;k<b.length-1;k++){var h=b[k];if(!(h in d))return;d=d[h]}b=b[b.length-1];f=$jscomp.IS_SYMBOL_NATIVE&&"es6"===f?d[b]:null;e=e(f);null!=e&&(a?$jscomp.defineProperty($jscomp.polyfills,b,{configurable:!0,writable:!0,value:e}):e!==f&&($jscomp.propertyToPolyfillSymbol[b]=$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(b):$jscomp.POLYFILL_PREFIX+b,b=
$jscomp.propertyToPolyfillSymbol[b],$jscomp.defineProperty(d,b,{configurable:!0,writable:!0,value:e})))};$jscomp.initSymbol=function(){};
$jscomp.polyfill("Symbol",function(a){if(a)return a;var e=function(b,k){this.$jscomp$symbol$id_=b;$jscomp.defineProperty(this,"description",{configurable:!0,writable:!0,value:k})};e.prototype.toString=function(){return this.$jscomp$symbol$id_};var f=0,d=function(b){if(this instanceof d)throw new TypeError("Symbol is not a constructor");return new e("jscomp_symbol_"+(b||"")+"_"+f++,b)};return d},"es6","es3");$jscomp.initSymbolIterator=function(){};
$jscomp.polyfill("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var e="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),f=0;f<e.length;f++){var d=$jscomp.global[e[f]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&$jscomp.defineProperty(d.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))}})}return a},"es6",
"es3");$jscomp.initSymbolAsyncIterator=function(){};$jscomp.iteratorPrototype=function(a){a={next:a};a[Symbol.iterator]=function(){return this};return a};$jscomp.iteratorFromArray=function(a,e){a instanceof String&&(a+="");var f=0,d={next:function(){if(f<a.length){var b=f++;return{value:e(b,a[b]),done:!1}}d.next=function(){return{done:!0,value:void 0}};return d.next()}};d[Symbol.iterator]=function(){return d};return d};
$jscomp.polyfill("Array.prototype.keys",function(a){return a?a:function(){return $jscomp.iteratorFromArray(this,function(e){return e})}},"es6","es3");$jscomp.polyfill("Object.getOwnPropertySymbols",function(a){return a?a:function(){return[]}},"es6","es5");$jscomp.owns=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)};
$jscomp.assign=$jscomp.TRUST_ES6_POLYFILLS&&"function"==typeof Object.assign?Object.assign:function(a,e){for(var f=1;f<arguments.length;f++){var d=arguments[f];if(d)for(var b in d)$jscomp.owns(d,b)&&(a[b]=d[b])}return a};$jscomp.polyfill("Object.assign",function(a){return a||$jscomp.assign},"es6","es3");
(function(a){"object"===typeof exports&&"undefined"!==typeof module?module.exports=a():"function"===typeof define&&define.amd?define([],a):("undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:this).SmartBanner=a()})(function(){return function(){function a(e,f,d){function b(q,x){if(!f[q]){if(!e[q]){var t="function"==typeof require&&require;if(!x&&t)return t(q,!0);if(k)return k(q,!0);x=Error("Cannot find module '"+q+"'");throw x.code="MODULE_NOT_FOUND",
x;}x=f[q]={exports:{}};e[q][0].call(x.exports,function(m){return b(e[q][1][m]||m)},x,x.exports,a,e,f,d)}return f[q].exports}for(var k="function"==typeof require&&require,h=0;h<d.length;h++)b(d[h]);return b}return a}()({1:[function(a,e,f){function d(c){return(c=document.cookie.match(new RegExp("(?:^|; )"+c.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)")))?decodeURIComponent(c[1]):void 0}function b(c){var n="";if(void 0!==m.get("_landing")){for(var g=JSON.parse(d("_landing")),u=Object.keys(g).length,
v=Object.keys(g),z=0;z<u;z++)n=z===u-1?n+(v[z]+"="+g[v[z]]):n+(v[z]+"="+g[v[z]]+"&");n=encodeURIComponent(n);n="/?pid=website&c=adwords&af_sub1="+n+"&af_sub2="+location.href}else n="/?pid=website&c=adwords&af_sub2="+location.href;return(new URL(c+n)).href}function k(c,n){return p[""+c].alias[""+n]}function h(c){var n=y(navigator.userAgent),g={},u={},v=!1;if(c.isOneAppOfDateExpires)for(var z in p[""+c.app].alias){var A=k(z,c.app);if(A===z+"-options"&&"Android"!==n.os.name){v=!0;break}g=m.get(A+"-closed");
u=m.get(A+"-installed");if(g||u){v=!0;break}}else if(A=k(c.namespace,c.app),g=m.get(A+"-closed"),u=m.get(A+"-installed"),g||u)v=!0;return{userDismissed:g,userInstalled:u,status:v}}var q=a("object-assign"),x=a("component-query"),t=a("get-doc"),m=a("cookie-cutter"),y=a("ua-parser-js"),B=(navigator.language||navigator.userLanguage||navigator.browserLanguage).slice(-2)||"us",l=t&&t.documentElement,p={invest:{link:"https://alpari-invest.onelink.me/d5ee",alias:{invest:"invest-invest",options:"invest-options",
mobile:"invest-mobile"},name:"Alpari Invest"},options:{link:"https://alparioptions.onelink.me/2396208183",alias:{invest:"options-invest",options:"options-options",mobile:"options-mobile"},name:"Alpari Fix Contracts"},mobile:{link:"https://alparimobileanalytics.onelink.me/SZ7T",alias:{invest:"mobile-invest",options:"mobile-options",mobile:"mobile-mobile"},name:"Alpari Mobile"}},r={ios:{getStoreLink:function(c){return""}},android:{getStoreLink:function(c){return""}}};a=function(c){var n=y(navigator.userAgent);
this.options=q({},{daysHidden:30,daysReminder:30,isOpenNext:30,isOneAppOfDateExpires:!0,appStoreLanguage:B,button:"OPEN",store:{ios:"On the App Store",android:"In Google Play",windows:"In the Windows Store"},namespace:"",price:{ios:"FREE",android:"FREE",windows:"FREE"},theme:"",icon:"",force:""},c||{});this.options.force?this.type=this.options.force:"Windows Phone"===n.os.name||"Windows Mobile"===n.os.name?this.type="windows":"iOS"===n.os.name?this.type="ios":"Android"===n.os.name&&(this.type="android");
if(this.type&&this.options.store[this.type]&&(this.isMobileSafari="ios"===this.type&&"Mobile Safari"===n.browser.name&&6<=parseInt(n.os.version,10),"ios"===this.type&&"Mobile Safari"===n.browser.name&&parseInt(n.os.version,10),c=m.get(this.options.namespace+"-await"),!(0<Number(c)-Date.now()))){c=h(this.options);switch(this.options.namespace){case "mobile":c.status&&(this.options.app="invest",c=h(this.options));break;case "invest":c.status&&(this.options.app="mobile",c=h(this.options));break;case "options":c.status&&
(this.options.app="mobile",c=h(this.options)),c.status&&(this.options.app="invest",c=h(this.options))}c.status||(q(this,r[this.type]),this.create(),this.show())}};var w={ru:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c",en:"View",fa:"\u0646\u06af\u0627\u0647 \u06a9\u0646",ua:"\u0414\u0438\u0432\u0438\u0442\u0438\u0441\u044f"};a.prototype={constructor:a,create:function(){var c=this,n=this.options.price[this.type]+" - "+this.options.store[this.type],g=this.options.theme||this.type,u=t.createElement("div");
this.options.title=p[""+this.options.app].name;var v={};v="mobile_ios"===this.options.app+"_"+g?"/public/img/pages/smart-banner/"+this.options.app+"_"+g+".png":"/public/img/pages/smart-banner/"+this.options.app+"_"+g+".svg";var z=b(p[""+this.options.app].link);u.className="smartbanner smartbanner-"+g+" smartbanner-"+c.options.app+" smartbanner-"+c.options.app+"-"+g;u.innerHTML='<div class="smartbanner-container"><a href="javascript:void(0);" class="smartbanner-close"></a><span class="smartbanner-icon" style="background-image: url('+
v+')"></span><div class="smartbanner-info"><div class="smartbanner-title">'+this.options.title+'</div><div class="smartbanner-company">'+this.options.author+'</div><span class="smartbanner-price">'+n+'</span></div><p class="smartbanner-button smartbanner-button-'+this.options.app+'"><a target="_blank" href="'+z+'" class="smartbanner-button-text">'+w[""+this.options.appStoreLanguage]+"</a><p></div>";t.body?t.body.appendChild(u):t&&t.addEventListener("DOMContentLoaded",function(){t.body.appendChild(u)});
window.addEventListener("scroll",function(A){-8>document.body.getBoundingClientRect().top?h(c.options).status?u.className="smartbanner smartbanner-"+g+" smartbanner-"+c.options.app+" smartbanner-"+c.options.app+"-"+g:u.className="smartbanner smartbanner-"+g+" -header_sticky_smart-banner smartbanner-"+c.options.app+" smartbanner-"+c.options.app+"-"+g:u.className="smartbanner smartbanner-"+g+" smartbanner-"+c.options.app+" smartbanner-"+c.options.app+"-"+g});x(".smartbanner-button",u).addEventListener("click",
this.install.bind(this),!1);x(".smartbanner-close",u).addEventListener("click",this.close.bind(this),!1)},hide:function(){l.classList.remove("smartbanner-show");if("function"===typeof this.options.close)return this.options.close()},show:function(){l.classList.add("smartbanner-show");if("function"===typeof this.options.show)return this.options.show()},close:function(){this.hide();var c=window.document.body.querySelector(".-header_sticky_banner");c&&c.classList.remove("-header_sticky_banner");c=k(this.options.namespace,
this.options.app);m.set(c+"-closed","true",{path:"/",expires:new Date(Number(new Date)+864E5*this.options.daysHidden)});m.set(this.options.namespace+"-await",Date.now()+6E4*this.options.isOpenNext,{path:"/",expires:new Date(Number(Date.now())+6E4*this.options.isOpenNext)});if("function"===typeof this.options.close)return this.options.close()},install:function(){this.hide();var c=window.document.body.querySelector(".-header_sticky_banner");c&&c.classList.remove("-header_sticky_banner");c=k(this.options.namespace,
this.options.app);m.set(c+"-installed","true",{path:"/",expires:new Date(Number(new Date)+864E5*this.options.daysReminder)});m.set(this.options.namespace+"-await",Date.now()+6E4*this.options.isOpenNext,{path:"/",expires:new Date(Number(Date.now())+6E4*this.options.isOpenNext)});if("function"===typeof this.options.close)return this.options.close()},parseAppId:function(){var c=x('meta[name="'+this.appMeta+'"]');if(c)return this.appId=c.getAttribute("content")}};e.exports=a},{"component-query":2,"cookie-cutter":3,
"get-doc":4,"object-assign":6,"ua-parser-js":7}],2:[function(a,e,f){function d(b,k){return k.querySelector(b)}f=e.exports=function(b,k){k=k||document;return d(b,k)};f.all=function(b,k){k=k||document;return k.querySelectorAll(b)};f.engine=function(b){if(!b.one)throw Error(".one callback required");if(!b.all)throw Error(".all callback required");d=b.one;f.all=b.all;return f}},{}],3:[function(a,e,f){f=e.exports=function(d){d||(d={});"string"===typeof d&&(d={cookie:d});void 0===d.cookie&&(d.cookie="");
return{get:function(b){for(var k=d.cookie.split(/;\s*/),h=0;h<k.length;h++){var q=k[h].split("=");if(unescape(q[0])===b)return unescape(q[1])}},set:function(b,k,h){h||(h={});b=escape(b)+"="+escape(k);h.expires&&(b+="; expires="+h.expires);h.path&&(b+="; path="+escape(h.path));h.domain&&(b+="; domain="+escape(h.domain));h.secure&&(b+="; secure");return d.cookie=b}}};"undefined"!==typeof document&&(a=f(document),f.get=a.get,f.set=a.set)},{}],4:[function(a,e,f){a=a("has-dom");e.exports=a()?document:
null},{"has-dom":5}],5:[function(a,e,f){e.exports=function(){return"undefined"!==typeof window&&"undefined"!==typeof document&&"function"===typeof document.createElement}},{}],6:[function(a,e,f){var d=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var h=new String("abc");h[5]="de";if("5"===Object.getOwnPropertyNames(h)[0])return!1;var q={};for(h=0;10>h;h++)q["_"+String.fromCharCode(h)]=h;if("0123456789"!==
Object.getOwnPropertyNames(q).map(function(t){return q[t]}).join(""))return!1;var x={};"abcdefghijklmnopqrst".split("").forEach(function(t){x[t]=t});return"abcdefghijklmnopqrst"!==Object.keys(Object.assign({},x)).join("")?!1:!0}catch(t){return!1}}()?Object.assign:function(h,q){if(null===h||void 0===h)throw new TypeError("Object.assign cannot be called with null or undefined");var x=Object(h);for(var t,m=1;m<arguments.length;m++){var y=Object(arguments[m]);for(var B in y)b.call(y,B)&&(x[B]=y[B]);if(d){t=
d(y);for(var l=0;l<t.length;l++)k.call(y,t[l])&&(x[t[l]]=y[t[l]])}}return x}},{}],7:[function(a,e,f){(function(d,b){var k={extend:function(l,p){var r={},w;for(w in l)r[w]=p[w]&&0===p[w].length%2?p[w].concat(l[w]):l[w];return r},has:function(l,p){return"string"===typeof l?-1!==p.toLowerCase().indexOf(l.toLowerCase()):!1},lowerize:function(l){return l.toLowerCase()},major:function(l){return"string"===typeof l?l.replace(/[^\d\.]/g,"").split(".")[0]:b},trim:function(l){return l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
"")}},h=function(l,p){for(var r=0,w,c,n,g,u,v;r<p.length&&!u;){var z=p[r],A=p[r+1];for(w=c=0;w<z.length&&!u;)if(u=z[w++].exec(l))for(n=0;n<A.length;n++)v=u[++c],g=A[n],"object"===typeof g&&0<g.length?2==g.length?this[g[0]]="function"==typeof g[1]?g[1].call(this,v):g[1]:3==g.length?this[g[0]]="function"!==typeof g[1]||g[1].exec&&g[1].test?v?v.replace(g[1],g[2]):b:v?g[1].call(this,v,g[2]):b:4==g.length&&(this[g[0]]=v?g[3].call(this,v.replace(g[1],g[2])):b):this[g]=v?v:b;r+=2}},q=function(l,p){for(var r in p)if("object"===
typeof p[r]&&0<p[r].length)for(var w=0;w<p[r].length;w++){if(k.has(p[r][w],l))return"?"===r?b:r}else if(k.has(p[r],l))return"?"===r?b:r;return l},x={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2E3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},t={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],["name","version"],[/(opios)[\/\s]+([\w\.]+)/i],
[["name","Opera Mini"],"version"],[/\s(opr)\/([\w\.]+)/i],[["name","Opera"],"version"],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],["name","version"],[/(konqueror)\/([\w\.]+)/i],
[["name","Konqueror"],"version"],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[["name","IE"],"version"],[/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],[["name","Edge"],"version"],[/(yabrowser)\/([\w\.]+)/i],[["name","Yandex"],"version"],[/(Avast)\/([\w\.]+)/i],[["name","Avast Secure Browser"],"version"],[/(AVG)\/([\w\.]+)/i],[["name","AVG Secure Browser"],"version"],[/(puffin)\/([\w\.]+)/i],[["name","Puffin"],"version"],[/(focus)\/([\w\.]+)/i],[["name","Firefox Focus"],"version"],[/(opt)\/([\w\.]+)/i],
[["name","Opera Touch"],"version"],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[["name","UCBrowser"],"version"],[/(comodo_dragon)\/([\w\.]+)/i],[["name",/_/g," "],"version"],[/(windowswechat qbcore)\/([\w\.]+)/i],[["name","WeChat(Win) Desktop"],"version"],[/(micromessenger)\/([\w\.]+)/i],[["name","WeChat"],"version"],[/(brave)\/([\w\.]+)/i],[["name","Brave"],"version"],[/(qqbrowserlite)\/([\w\.]+)/i],["name","version"],[/(QQ)\/([\d\.]+)/i],["name","version"],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
["name","version"],[/(baiduboxapp)[\/\s]?([\w\.]+)/i],["name","version"],[/(2345Explorer)[\/\s]?([\w\.]+)/i],["name","version"],[/(MetaSr)[\/\s]?([\w\.]+)/i],["name"],[/(LBBROWSER)/i],["name"],[/xiaomi\/miuibrowser\/([\w\.]+)/i],["version",["name","MIUI Browser"]],[/;fbav\/([\w\.]+);/i],["version",["name","Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],["name","version"],[/headlesschrome(?:\/([\w\.]+)|\s)/i],["version",["name","Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],
[["name",/(.+)/,"$1 WebView"],"version"],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[["name",/(.+(?:g|us))(.+)/,"$1 $2"],"version"],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],["version",["name","Android Browser"]],[/(sailfishbrowser)\/([\w\.]+)/i],[["name","Sailfish Browser"],"version"],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],["name","version"],[/(dolfin)\/([\w\.]+)/i],[["name","Dolphin"],"version"],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[["name",
"360 Browser"]],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[["name","Chrome"],"version"],[/(coast)\/([\w\.]+)/i],[["name","Opera Coast"],"version"],[/fxios\/([\w\.-]+)/i],["version",["name","Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],["version",["name","Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],["version","name"],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[["name","GSA"],"version"],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
["name",["version",q,{"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],["name","version"],[/(navigator|netscape)\/([\w\.-]+)/i],[["name","Netscape"],"version"],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],["name","version"]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",k.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",k.lowerize]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],
[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[["architecture",k.lowerize]]],device:[[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],["model","vendor",["type","tablet"]],[/applecoremedia\/[\w\.]+ \((ipad)/],["model",["vendor","Apple"],["type","tablet"]],[/(apple\s{0,1}tv)/i],[["model","Apple TV"],["vendor","Apple"],["type","smarttv"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,
/(dell)\s(strea[kpr\s\d]*[\dko])/i],["vendor","model",["type","tablet"]],[/(kf[A-z]+)\sbuild\/.+silk\//i],["model",["vendor","Amazon"],["type","tablet"]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[["model",q,{"Fire Phone":["SD","KF"]}],["vendor","Amazon"],["type","mobile"]],[/android.+aft([bms])\sbuild/i],["model",["vendor","Amazon"],["type","smarttv"]],[/\((ip[honed|\s\w*]+);.+(apple)/i],["model","vendor",["type","mobile"]],[/\((ip[honed|\s\w*]+);/i],["model",["vendor","Apple"],["type","mobile"]],
[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],["vendor","model",["type","mobile"]],[/\(bb10;\s(\w+)/i],["model",["vendor","BlackBerry"],["type","mobile"]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],["model",["vendor","Asus"],["type","tablet"]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[["vendor","Sony"],["model","Xperia Tablet"],
["type","tablet"]],[/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],["model",["vendor","Sony"],["type","mobile"]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],["vendor","model",["type","console"]],[/android.+;\s(shield)\sbuild/i],["model",["vendor","Nvidia"],["type","console"]],[/(playstation\s[34portablevi]+)/i],["model",["vendor","Sony"],["type","console"]],[/(sprint\s(\w+))/i],[["vendor",q,{HTC:"APA",Sprint:"Sprint"}],["model",q,{"Evo Shift 4G":"7373KT"}],["type",
"mobile"]],[/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],["vendor",["model",/_/g," "],["type","mobile"]],[/(nexus\s9)/i],["model",["vendor","HTC"],["type","tablet"]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i],["model",["vendor","Huawei"],["type","mobile"]],[/android.+(bah2?-a?[lw]\d{2})/i],["model",["vendor","Huawei"],["type","tablet"]],[/(microsoft);\s(lumia[\s\w]+)/i],["vendor","model",["type",
"mobile"]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],["model",["vendor","Microsoft"],["type","console"]],[/(kin\.[onetw]{3})/i],[["model",/\./g," "],["vendor","Microsoft"],["type","mobile"]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],["model",["vendor","Motorola"],["type","mobile"]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],["model",["vendor","Motorola"],["type","tablet"]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
[["vendor",k.trim],["model",k.trim],["type","smarttv"]],[/hbbtv.+maple;(\d+)/i],[["model",/^/,"SmartTV"],["vendor","Samsung"],["type","smarttv"]],[/\(dtv[\);].+(aquos)/i],["model",["vendor","Sharp"],["type","smarttv"]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[["vendor","Samsung"],"model",["type","tablet"]],[/smart-tv.+(samsung)/i],["vendor",["type","smarttv"],"model"],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,
/sec-((sgh\w+))/i],[["vendor","Samsung"],"model",["type","mobile"]],[/sie-(\w*)/i],["model",["vendor","Siemens"],["type","mobile"]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[["vendor","Nokia"],"model",["type","mobile"]],[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],["model",["vendor","Acer"],["type","tablet"]],[/android.+([vl]k\-?\d{3})\s+build/i],["model",["vendor","LG"],["type","tablet"]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[["vendor","LG"],"model",["type",
"tablet"]],[/(lg) netcast\.tv/i],["vendor","model",["type","smarttv"]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],["model",["vendor","LG"],["type","mobile"]],[/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],["vendor","model",["type","tablet"]],[/android.+(ideatab[a-z0-9\-\s]+)/i],["model",["vendor","Lenovo"],["type","tablet"]],[/(lenovo)[_\s-]?([\w-]+)/i],["vendor","model",["type","mobile"]],[/linux;.+((jolla));/i],["vendor","model",["type","mobile"]],[/((pebble))app\/[\d\.]+\s/i],
["vendor","model",["type","wearable"]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],["vendor","model",["type","mobile"]],[/crkey/i],[["model","Chromecast"],["vendor","Google"],["type","smarttv"]],[/android.+;\s(glass)\s\d/i],["model",["vendor","Google"],["type","wearable"]],[/android.+;\s(pixel c)[\s)]/i],["model",["vendor","Google"],["type","tablet"]],[/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],["model",["vendor","Google"],["type","mobile"]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,
/android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[["model",/_/g," "],["vendor","Xiaomi"],["type","mobile"]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[["model",/_/g," "],["vendor","Xiaomi"],["type","tablet"]],[/android.+;\s(m[1-5]\snote)\sbuild/i],["model",["vendor","Meizu"],["type","mobile"]],[/(mz)-([\w-]{2,})/i],[["vendor","Meizu"],"model",["type","mobile"]],[/android.+a000(1)\s+build/i,
/android.+oneplus\s(a\d{4})[\s)]/i],["model",["vendor","OnePlus"],["type","mobile"]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],["model",["vendor","RCA"],["type","tablet"]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],["model",["vendor","Dell"],["type","tablet"]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],["model",["vendor","Verizon"],["type","tablet"]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[["vendor","Barnes & Noble"],"model",["type","tablet"]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
["model",["vendor","NuVision"],["type","tablet"]],[/android.+;\s(k88)\sbuild/i],["model",["vendor","ZTE"],["type","tablet"]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],["model",["vendor","Swiss"],["type","mobile"]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],["model",["vendor","Swiss"],["type","tablet"]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],["model",["vendor","Zeki"],["type","tablet"]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
[["vendor","Dragon Touch"],"model",["type","tablet"]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],["model",["vendor","Insignia"],["type","tablet"]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],["model",["vendor","NextBook"],["type","tablet"]],[/android.+[;\/]\s*(Xtreme_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[["vendor","Voice"],"model",["type","mobile"]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[["vendor","LvTel"],"model",["type","mobile"]],[/android.+;\s(PH-1)\s/i],["model",
["vendor","Essential"],["type","mobile"]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],["model",["vendor","Envizen"],["type","tablet"]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],["vendor","model",["type","tablet"]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],["model",["vendor","MachSpeed"],["type","tablet"]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],["vendor","model",["type","tablet"]],[/android.+[;\/]\s*TU_(1491)\s+build/i],["model",["vendor","Rotor"],
["type","tablet"]],[/android.+(KS(.+))\s+build/i],["model",["vendor","Amazon"],["type","tablet"]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],["vendor","model",["type","tablet"]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[["type",k.lowerize],"vendor","model"],[/[\s\/\(](smart-?tv)[;\)]/i],[["type","smarttv"]],[/(android[\w\.\s\-]{0,9});.+build/i],["model",["vendor","Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],["version",["name","EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
["version",["name","Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],["name","version"],[/rv:([\w\.]{1,9}).+(gecko)/i],["version","name"]],os:[[/microsoft\s(windows)\s(vista|xp)/i],["name","version"],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],["name",["version",q,x]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
[["name","Windows"],["version",q,x]],[/\((bb)(10);/i],[["name","BlackBerry"],"version"],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],["name","version"],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[["name","Symbian"],"version"],[/\((series40);/i],["name"],[/mozilla.+\(mobile;.+gecko.+firefox/i],[["name","Firefox OS"],"version"],[/(nintendo|playstation)\s([wids34portablevu]+)/i,
/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],["name","version"],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[["name","Chromium OS"],"version"],[/(sunos)\s?([\w\.\d]*)/i],[["name","Solaris"],"version"],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],["name","version"],[/(haiku)\s(\w+)/i],["name","version"],
[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[["version",/_/g,"."],["name","iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[["name","Mac OS"],["version",/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],["name","version"]]},m=function(l,p){"object"===typeof l&&(p=l,l=b);if(!(this instanceof m))return(new m(l,
p)).getResult();var r=l||(d&&d.navigator&&d.navigator.userAgent?d.navigator.userAgent:""),w=p?k.extend(t,p):t;this.getBrowser=function(){var c={name:b,version:b};h.call(c,r,w.browser);c.major=k.major(c.version);return c};this.getCPU=function(){var c={architecture:b};h.call(c,r,w.cpu);return c};this.getDevice=function(){var c={vendor:b,model:b,type:b};h.call(c,r,w.device);return c};this.getEngine=function(){var c={name:b,version:b};h.call(c,r,w.engine);return c};this.getOS=function(){var c={name:b,
version:b};h.call(c,r,w.os);return c};this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}};this.getUA=function(){return r};this.setUA=function(c){r=c;return this};return this};m.VERSION="0.7.21";m.BROWSER={NAME:"name",MAJOR:"major",VERSION:"version"};m.CPU={ARCHITECTURE:"architecture"};m.DEVICE={MODEL:"model",VENDOR:"vendor",TYPE:"type",CONSOLE:"console",MOBILE:"mobile",SMARTTV:"smarttv",TABLET:"tablet",
WEARABLE:"wearable",EMBEDDED:"embedded"};m.ENGINE={NAME:"name",VERSION:"version"};m.OS={NAME:"name",VERSION:"version"};"undefined"!==typeof f?("undefined"!==typeof e&&e.exports&&(f=e.exports=m),f.UAParser=m):d&&(d.UAParser=m);var y=d&&(d.jQuery||d.Zepto);if(y&&!y.ua){var B=new m;y.ua=B.getResult();y.ua.get=function(){return B.getUA()};y.ua.set=function(l){B.setUA(l);l=B.getResult();for(var p in l)y.ua[p]=l[p]}}})("object"===typeof window?window:this)},{}]},{},[1])(1)});
