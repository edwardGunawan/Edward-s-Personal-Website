/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-applicationcache-backgroundsize-bgpositionxy-bgrepeatspace_bgrepeatround-borderimage-borderradius-boxshadow-boxsizing-cssanimations-csscolumns-cssgradients-cssgrid_cssgridlegacy-cssinvalid-cssremunit-cssresize-csstransforms-csstransitions-cssvalid-cssvhunit-displaytable-ellipsis-eventlistener-inputtypes-lastchild-mediaqueries-multiplebgs-nthchild-opacity-overflowscrolling-rgba-siblinggeneral-textalignlast-textshadow-setclasses !*/
!function(e,t,n){function r(e,t){return typeof e===t}function i(){var e,t,n,i,s,o,a;for(var d in x)if(x.hasOwnProperty(d)){if(e=[],t=x[d],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=r(t.fn,"function")?t.fn():t.fn,s=0;s<e.length;s++)o=e[s],a=o.split("."),1===a.length?Modernizr[a[0]]=i:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=i),b.push((i?"":"no-")+a.join("-"))}}function s(e){var t=w.className,n=Modernizr._config.classPrefix||"";if(C&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),C?w.className.baseVal=t:w.className=t)}function o(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):C?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(t,n,r){var i;if("getComputedStyle"in e){i=getComputedStyle.call(e,t,n);var s=e.console;if(null!==i)r&&(i=i.getPropertyValue(r));else if(s){var o=s.error?"error":"log";s[o].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else i=!n&&t.currentStyle&&t.currentStyle[r];return i}function d(){var e=t.body;return e||(e=o(C?"svg":"body"),e.fake=!0),e}function l(e,n,r,i){var s,a,l,u,c="modernizr",f=o("div"),p=d();if(parseInt(r,10))for(;r--;)l=o("div"),l.id=i?i[r]:c+(r+1),f.appendChild(l);return s=o("style"),s.type="text/css",s.id="s"+c,(p.fake?p:f).appendChild(s),p.appendChild(f),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(t.createTextNode(e)),f.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",u=w.style.overflow,w.style.overflow="hidden",w.appendChild(p)),a=n(f,e),p.fake?(p.parentNode.removeChild(p),w.style.overflow=u,w.offsetHeight):f.parentNode.removeChild(f),!!a}function u(e,t){return!!~(""+e).indexOf(t)}function c(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function f(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var i;for(var s in e)if(e[s]in t)return n===!1?e[s]:(i=t[e[s]],r(i,"function")?f(i,n||t):i);return!1}function m(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function h(t,r){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(m(t[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];i--;)s.push("("+m(t[i])+":"+r+")");return s=s.join(" or "),l("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==a(e,null,"position")})}return n}function g(e,t,i,s){function a(){l&&(delete R.style,delete R.modElem)}if(s=r(s,"undefined")?!1:s,!r(i,"undefined")){var d=h(e,i);if(!r(d,"undefined"))return d}for(var l,f,p,m,g,v=["modernizr","tspan","samp"];!R.style&&v.length;)l=!0,R.modElem=o(v.shift()),R.style=R.modElem.style;for(p=e.length,f=0;p>f;f++)if(m=e[f],g=R.style[m],u(m,"-")&&(m=c(m)),R.style[m]!==n){if(s||r(i,"undefined"))return a(),"pfx"==t?m:!0;try{R.style[m]=i}catch(y){}if(R.style[m]!=g)return a(),"pfx"==t?m:!0}return a(),!1}function v(e,t,n,i,s){var o=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+N.join(o+" ")+o).split(" ");return r(t,"string")||r(t,"undefined")?g(a,t,i,s):(a=(e+" "+W.join(o+" ")+o).split(" "),p(a,t,n))}function y(e,t,r){return v(e,n,n,t,r)}var b=[],x=[],T={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){x.push({name:e,fn:t,options:n})},addAsyncTest:function(e){x.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=T,Modernizr=new Modernizr,Modernizr.addTest("applicationcache","applicationCache"in e),Modernizr.addTest("eventlistener","addEventListener"in e);var w=t.documentElement,C="svg"===w.nodeName.toLowerCase(),S=T._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];T._prefixes=S,Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="",i=0,s=S.length-1;s>i;i++)e=0===i?"to ":"",r+=t+S[i]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(r+=t+"-webkit-"+n);var a=o("a"),d=a.style;return d.cssText=r,(""+d.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("multiplebgs",function(){var e=o("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),Modernizr.addTest("opacity",function(){var e=o("a").style;return e.cssText=S.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),Modernizr.addTest("cssremunit",function(){var e=o("a").style;try{e.fontSize="3rem"}catch(t){}return/rem/.test(e.fontSize)}),Modernizr.addTest("rgba",function(){var e=o("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1});var k=o("input"),z="search tel url email datetime date month week time datetime-local number range color".split(" "),_={};Modernizr.inputtypes=function(e){for(var r,i,s,o=e.length,a="1)",d=0;o>d;d++)k.setAttribute("type",r=e[d]),s="text"!==k.type&&"style"in k,s&&(k.value=a,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&k.style.WebkitAppearance!==n?(w.appendChild(k),i=t.defaultView,s=i.getComputedStyle&&"textfield"!==i.getComputedStyle(k,null).WebkitAppearance&&0!==k.offsetHeight,w.removeChild(k)):/^(search|tel)$/.test(r)||(s=/^(url|email)$/.test(r)?k.checkValidity&&k.checkValidity()===!1:k.value!=a)),_[e[d]]=!!s;return _}(z);var P=T.testStyles=l;P("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}",function(e){var t,n=e.childNodes;t=n[0].offsetLeft<n[1].offsetLeft,Modernizr.addTest("displaytable",t,{aliases:["display-table"]})},2),Modernizr.addTest("cssinvalid",function(){return P("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:invalid{width:50px}",function(e){var t=o("input");return t.required=!0,e.appendChild(t),t.clientWidth>10})}),P("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){Modernizr.addTest("lastchild",e.lastChild.offsetWidth>e.firstChild.offsetWidth)},2),P("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){for(var t=e.getElementsByTagName("div"),n=!0,r=0;5>r;r++)n=n&&t[r].offsetWidth===r%2+1;Modernizr.addTest("nthchild",n)},5),Modernizr.addTest("siblinggeneral",function(){return P("#modernizr div {width:100px} #modernizr div ~ div {width:200px;display:block}",function(e){return 200==e.lastChild.offsetWidth},2)}),Modernizr.addTest("cssvalid",function(){return P("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:valid{width:50px}",function(e){var t=o("input");return e.appendChild(t),t.clientWidth>10})}),P("#modernizr { height: 50vh; }",function(t){var n=parseInt(e.innerHeight/2,10),r=parseInt(a(t,null,"height"),10);Modernizr.addTest("cssvhunit",r==n)});var A=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return l("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();T.mq=A,Modernizr.addTest("mediaqueries",A("only all"));var E="Moz O ms Webkit",N=T._config.usePrefixes?E.split(" "):[];T._cssomPrefixes=N;var W=T._config.usePrefixes?E.toLowerCase().split(" "):[];T._domPrefixes=W;var L={elem:o("modernizr")};Modernizr._q.push(function(){delete L.elem});var R={style:L.elem.style};Modernizr._q.unshift(function(){delete R.style});var j=T.testProp=function(e,t,r){return g([e],n,t,r)};Modernizr.addTest("textshadow",j("textShadow","1px 1px")),T.testAllProps=v,T.testAllProps=y,Modernizr.addTest("cssanimations",y("animationName","a",!0)),Modernizr.addTest("bgpositionxy",function(){return y("backgroundPositionX","3px",!0)&&y("backgroundPositionY","5px",!0)}),Modernizr.addTest("bgrepeatround",y("backgroundRepeat","round")),Modernizr.addTest("bgrepeatspace",y("backgroundRepeat","space")),Modernizr.addTest("backgroundsize",y("backgroundSize","100%",!0)),Modernizr.addTest("borderimage",y("borderImage","url() 1",!0)),Modernizr.addTest("borderradius",y("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",y("boxShadow","1px 1px",!0)),Modernizr.addTest("boxsizing",y("boxSizing","border-box",!0)&&(t.documentMode===n||t.documentMode>7)),function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=y("columnCount");try{e=!!t,e&&(e=new Boolean(e))}catch(n){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<n.length;r++)e=n[r].toLowerCase(),t=y("column"+n[r]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||y(n[r])),Modernizr.addTest("csscolumns."+e,t)}(),Modernizr.addTest("cssgridlegacy",y("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",y("grid-template-rows","none",!0)),Modernizr.addTest("ellipsis",y("textOverflow","ellipsis")),Modernizr.addTest("overflowscrolling",y("overflowScrolling","touch",!0)),Modernizr.addTest("cssresize",y("resize","both",!0)),Modernizr.addTest("textalignlast",y("textAlignLast")),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&y("transform","scale(1)",!0)}),Modernizr.addTest("csstransitions",y("transition","all",!0)),i(),s(b),delete T.addTest,delete T.addAsyncTest;for(var q=0;q<Modernizr._q.length;q++)Modernizr._q[q]();e.Modernizr=Modernizr}(window,document);
