var e,t,r,n,i,o,a,s,c,u,l,p,d,f,h,g,v=globalThis;function y(e){return e&&e.__esModule?e.default:e}var m={},b={},_=function(e){return e&&e.Math===Math&&e};b=_("object"==typeof globalThis&&globalThis)||_("object"==typeof window&&window)||_("object"==typeof self&&self)||_("object"==typeof v&&v)||_("object"==typeof b&&b)||function(){return this}()||Function("return this")();var w={},k={};w=!(k=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var E={},S={};S=!k(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var $=Function.prototype.call;E=S?$.bind($):function(){return $.apply($,arguments)};var O={}.propertyIsEnumerable,j=Object.getOwnPropertyDescriptor;n=j&&!O.call({1:2},1)?function(e){var t=j(this,e);return!!t&&t.enumerable}:O;var P={};P=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var L={},M={},x={},T=Function.prototype,F=T.call,I=S&&T.bind.bind(F,F),q={},N=(x=S?I:function(e){return function(){return F.apply(e,arguments)}})({}.toString),H=x("".slice);q=function(e){return H(N(e),8,-1)};var R=Object,C=x("".split);M=k(function(){return!R("z").propertyIsEnumerable(0)})?function(e){return"String"===q(e)?C(e,""):R(e)}:R;var A={},U={};U=function(e){return null==e};var D=TypeError;A=function(e){if(U(e))throw new D("Can't call method on "+e);return e},L=function(e){return M(A(e))};var G={},W={},Y={},B={},z="object"==typeof document&&document.all;B=void 0===z&&void 0!==z?function(e){return"function"==typeof e||e===z}:function(e){return"function"==typeof e},Y=function(e){return"object"==typeof e?null!==e:B(e)};var J={},Q={};Q=function(e,t){var r;return arguments.length<2?(r=b[e],B(r)?r:void 0):b[e]&&b[e][t]};var V={};V=x({}.isPrototypeOf);var K={},X={},Z={},ee={};ee="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var et=b.process,er=b.Deno,en=et&&et.versions||er&&er.version,ei=en&&en.v8;ei&&(o=(i=ei.split("."))[0]>0&&i[0]<4?1:+(i[0]+i[1])),!o&&ee&&(!(i=ee.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=ee.match(/Chrome\/(\d+)/))&&(o=+i[1]),Z=o;var eo=b.String;K=(X=!!Object.getOwnPropertySymbols&&!k(function(){var e=Symbol("symbol detection");return!eo(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&Z&&Z<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ea=Object;J=K?function(e){return"symbol"==typeof e}:function(e){var t=Q("Symbol");return B(t)&&V(t.prototype,ea(e))};var es={},ec={},eu={},el=String;eu=function(e){try{return el(e)}catch(e){return"Object"}};var ep=TypeError;ec=function(e){if(B(e))return e;throw new ep(eu(e)+" is not a function")},es=function(e,t){var r=e[t];return U(r)?void 0:ec(r)};var ed={},ef=TypeError;ed=function(e,t){var r,n;if("string"===t&&B(r=e.toString)&&!Y(n=E(r,e))||B(r=e.valueOf)&&!Y(n=E(r,e))||"string"!==t&&B(r=e.toString)&&!Y(n=E(r,e)))return n;throw new ef("Can't convert object to primitive value")};var eh={},eg={},ev={};ev=!1;var ey={},em=Object.defineProperty;ey=function(e,t){try{em(b,e,{value:t,configurable:!0,writable:!0})}catch(r){b[e]=t}return t};var eb="__core-js_shared__",e_=eg=b[eb]||ey(eb,{});(e_.versions||(e_.versions=[])).push({version:"3.37.1",mode:ev?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE",source:"https://github.com/zloirock/core-js"}),eh=function(e,t){return eg[e]||(eg[e]=t||{})};var ew={},ek={},eE=Object;ek=function(e){return eE(A(e))};var eS=x({}.hasOwnProperty);ew=Object.hasOwn||function(e,t){return eS(ek(e),t)};var e$={},eO=0,ej=Math.random(),eP=x(1..toString);e$=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eP(++eO+ej,36)};var eL=b.Symbol,eM=eh("wks"),ex=K?eL.for||eL:eL&&eL.withoutSetter||e$,eT=TypeError,eF=(ew(eM,e="toPrimitive")||(eM[e]=X&&ew(eL,e)?eL[e]:ex("Symbol."+e)),eM[e]);W=function(e,t){if(!Y(e)||J(e))return e;var r,n=es(e,eF);if(n){if(void 0===t&&(t="default"),r=E(n,e,t),!Y(r)||J(r))return r;throw new eT("Can't convert object to primitive value")}return void 0===t&&(t="number"),ed(e,t)},G=function(e){var t=W(e,"string");return J(t)?t:t+""};var eI={},eq={},eN=b.document,eH=Y(eN)&&Y(eN.createElement);eq=function(e){return eH?eN.createElement(e):{}},eI=!w&&!k(function(){return 7!==Object.defineProperty(eq("div"),"a",{get:function(){return 7}}).a});var eR=Object.getOwnPropertyDescriptor;r=w?eR:function(e,t){if(e=L(e),t=G(t),eI)try{return eR(e,t)}catch(e){}if(ew(e,t))return P(!E(n,e,t),e[t])};var eC={},eA={};eA=w&&k(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eU={},eD=String,eG=TypeError;eU=function(e){if(Y(e))return e;throw new eG(eD(e)+" is not an object")};var eW=TypeError,eY=Object.defineProperty,eB=Object.getOwnPropertyDescriptor,ez="enumerable",eJ="configurable",eQ="writable";a=w?eA?function(e,t,r){if(eU(e),t=G(t),eU(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eQ in r&&!r[eQ]){var n=eB(e,t);n&&n[eQ]&&(e[t]=r.value,r={configurable:eJ in r?r[eJ]:n[eJ],enumerable:ez in r?r[ez]:n[ez],writable:!1})}return eY(e,t,r)}:eY:function(e,t,r){if(eU(e),t=G(t),eU(r),eI)try{return eY(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eW("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eC=w?function(e,t,r){return a(e,t,P(1,r))}:function(e,t,r){return e[t]=r,e};var eV={},eK={},eX=Function.prototype,eZ=w&&Object.getOwnPropertyDescriptor,e0=ew(eX,"name")&&(!w||w&&eZ(eX,"name").configurable),e1={},e9=x(Function.toString);B(eg.inspectSource)||(eg.inspectSource=function(e){return e9(e)}),e1=eg.inspectSource;var e2={},e4={},e3=b.WeakMap;e4=B(e3)&&/native code/.test(String(e3));var e7={},e8=eh("keys");e7=function(e){return e8[e]||(e8[e]=e$(e))};var e5={};e5={};var e6="Object already initialized",te=b.TypeError,tt=b.WeakMap;if(e4||eg.state){var tr=eg.state||(eg.state=new tt);tr.get=tr.get,tr.has=tr.has,tr.set=tr.set,s=function(e,t){if(tr.has(e))throw new te(e6);return t.facade=e,tr.set(e,t),t},c=function(e){return tr.get(e)||{}},u=function(e){return tr.has(e)}}else{var tn=e7("state");e5[tn]=!0,s=function(e,t){if(ew(e,tn))throw new te(e6);return t.facade=e,eC(e,tn,t),t},c=function(e){return ew(e,tn)?e[tn]:{}},u=function(e){return ew(e,tn)}}var ti=(e2={set:s,get:c,has:u,enforce:function(e){return u(e)?c(e):s(e,{})},getterFor:function(e){return function(t){var r;if(!Y(t)||(r=c(t)).type!==e)throw new te("Incompatible receiver, "+e+" required");return r}}}).enforce,to=e2.get,ta=String,ts=Object.defineProperty,tc=x("".slice),tu=x("".replace),tl=x([].join),tp=w&&!k(function(){return 8!==ts(function(){},"length",{value:8}).length}),td=String(String).split("String"),tf=eK=function(e,t,r){"Symbol("===tc(ta(t),0,7)&&(t="["+tu(ta(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!ew(e,"name")||e0&&e.name!==t)&&(w?ts(e,"name",{value:t,configurable:!0}):e.name=t),tp&&r&&ew(r,"arity")&&e.length!==r.arity&&ts(e,"length",{value:r.arity});try{r&&ew(r,"constructor")&&r.constructor?w&&ts(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=ti(e);return ew(n,"source")||(n.source=tl(td,"string"==typeof t?t:"")),e};Function.prototype.toString=tf(function(){return B(this)&&to(this).source||e1(this)},"toString"),eV=function(e,t,r,n){var i=(n={}).enumerable,o=void 0!==n.name?n.name:t;if(B(r)&&eK(r,o,n),n.global)i?e[t]=r:ey(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:a(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var th={},tg={},tv={},ty={},tm={},tb={},t_=Math.ceil,tw=Math.floor;tb=Math.trunc||function(e){var t=+e;return(t>0?tw:t_)(t)},tm=function(e){var t=+e;return t!=t||0===t?0:tb(t)};var tk=Math.max,tE=Math.min;ty=function(e,t){var r=tm(e);return r<0?tk(r+t,0):tE(r,t)};var tS={},t$={},tO=Math.min;t$=function(e){var t=tm(e);return t>0?tO(t,9007199254740991):0},tS=function(e){return t$(e.length)};var tj=function(e){return function(t,r,n){var i,o=L(t),a=tS(o);if(0===a)return!e&&-1;var s=ty(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tP={includes:tj(!0),indexOf:tj(!1)}.indexOf,tL=x([].push);tv=function(e,t){var r,n=L(e),i=0,o=[];for(r in n)!ew(e5,r)&&ew(n,r)&&tL(o,r);for(;t.length>i;)ew(n,r=t[i++])&&(~tP(o,r)||tL(o,r));return o};var tM=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(e){return tv(e,tM)},p=Object.getOwnPropertySymbols;var tx=x([].concat);tg=Q("Reflect","ownKeys")||function(e){var t=l(eU(e));return p?tx(t,p(e)):t},th=function(e,t,n){for(var i=tg(t),o=0;o<i.length;o++){var s=i[o];ew(e,s)||n&&ew(n,s)||a(e,s,r(t,s))}};var tT={},tF=/#|\.prototype\./,tI=function(e,t){var r=tN[tq(e)];return r===tR||r!==tH&&(B(t)?k(t):!!t)},tq=tI.normalize=function(e){return String(e).replace(tF,".").toLowerCase()},tN=tI.data={},tH=tI.NATIVE="N",tR=tI.POLYFILL="P";tT=tI,m=function(e,t){var n,i,o,a,s,c=e.target,u=e.global,l=e.stat;if(n=u?b:l?b[c]||ey(c,{}):b[c]&&b[c].prototype)for(i in t){if(a=t[i],o=e.dontCallGetSet?(s=r(n,i))&&s.value:n[i],!tT(u?i:c+(l?".":"#")+i,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;th(a,o)}(e.sham||o&&o.sham)&&eC(a,"sham",!0),eV(n,i,a,e)}};var tC={},tA={},tU=Function.prototype,tD=tU.apply,tG=tU.call;tA="object"==typeof Reflect&&Reflect.apply||(S?tG.bind(tD):function(){return tG.apply(tD,arguments)});var tW={},tY={},tB=(tY=function(e){if("Function"===q(e))return x(e)})(tY.bind);tW=function(e,t){return ec(e),void 0===t?e:S?tB(e,t):function(){return e.apply(t,arguments)}};var tz={};tz=Q("document","documentElement");var tJ={};tJ=x([].slice);var tQ={},tV=TypeError;tQ=function(e,t){if(e<t)throw new tV("Not enough arguments");return e};var tK={};tK=/(?:ipad|iphone|ipod).*applewebkit/i.test(ee);var tX={};tX="process"===q(b.process);var tZ=b.setImmediate,t0=b.clearImmediate,t1=b.process,t9=b.Dispatch,t2=b.Function,t4=b.MessageChannel,t3=b.String,t7=0,t8={},t5="onreadystatechange";k(function(){d=b.location});var t6=function(e){if(ew(t8,e)){var t=t8[e];delete t8[e],t()}},re=function(e){return function(){t6(e)}},rt=function(e){t6(e.data)},rr=function(e){b.postMessage(t3(e),d.protocol+"//"+d.host)};tZ&&t0||(tZ=function(e){tQ(arguments.length,1);var t=B(e)?e:t2(e),r=tJ(arguments,1);return t8[++t7]=function(){tA(t,void 0,r)},f(t7),t7},t0=function(e){delete t8[e]},tX?f=function(e){t1.nextTick(re(e))}:t9&&t9.now?f=function(e){t9.now(re(e))}:t4&&!tK?(g=(h=new t4).port2,h.port1.onmessage=rt,f=tW(g.postMessage,g)):b.addEventListener&&B(b.postMessage)&&!b.importScripts&&d&&"file:"!==d.protocol&&!k(rr)?(f=rr,b.addEventListener("message",rt,!1)):f=t5 in eq("script")?function(e){tz.appendChild(eq("script"))[t5]=function(){tz.removeChild(this),t6(e)}}:function(e){setTimeout(re(e),0)});var rn=(tC={set:tZ,clear:t0}).clear;m({global:!0,bind:!0,enumerable:!0,forced:b.clearImmediate!==rn},{clearImmediate:rn});var ri=tC.set,ro={},ra={};ra="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rs=b.Function,rc=/MSIE .\./.test(ee)||ra&&((t=b.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));ro=function(e,t){var r=t?2:1;return rc?function(n,i){var o=tQ(arguments.length,1)>r,a=B(n)?n:rs(n),s=o?tJ(arguments,r):[],c=o?function(){tA(a,this,s)}:a;return t?e(c,i):e(c)}:e};var ru=b.setImmediate?ro(ri,!1):ri;m({global:!0,bind:!0,enumerable:!0,forced:b.setImmediate!==ru},{setImmediate:ru});var rl=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof v?r:v).prototype);return i(c,"_invoke",{value:(a=new j(o||[]),s=d,function(r,i){if(s===f)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g;var a=p(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(o,a);if(c){if(c===g)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===d)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=f;var u=p(e,n,a);if("normal"===u.type){if(s=a.done?h:"suspendedYield",u.arg===g)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=h,a.method="throw",a.arg=u.arg)}})}),c}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d="suspendedStart",f="executing",h="completed",g={};function v(){}function y(){}function m(){}var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(P([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=m.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=p(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function P(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return y.prototype=m,i(k,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),u(k,c,"Generator"),u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=P,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;O(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:P(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=rl}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rl:Function("r","regeneratorRuntime = r")(rl)}const rp="https://forkify-api.herokuapp.com/api/v2/recipes",rd="447f5fea-1340-4409-939b-cf88cbf6aaee",rf=async(e,t=null)=>{try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error();return i}catch(e){throw e}},rh={recipe:{bookmarked:!1},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},rg=e=>{let t=e.data.recipe;return{id:t.id,title:t.title,publisher:t.publisher,img:t.image_url,ingredients:t.ingredients,sourceUrl:t.source_url,savingTime:t.cooking_time,servings:t.servings,...t.key&&{key:t.key}}},rv=async e=>{try{let t=await rf(`${rp}/${e}`);rh.recipe=rg(t),rh.bookmarks.some(t=>t.id==e)&&(rh.recipe.bookmarked=!0)}catch(e){throw e}},ry=async e=>{try{rh.search.query=e,rh.search.page=1;let t=await rf(`${rp}?search=${e}&key=${rd}`);rh.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,img:e.image_url,...e.key&&{key:e.key}}))}catch(e){throw e}},rm=(e=rh.search.page)=>{rh.search.page=e;let t=(e-1)*rh.search.resultsPerPage,r=e*rh.search.resultsPerPage;return rh.search.results.slice(t,r)},rb=e=>{rh.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rh.recipe.servings}),rh.recipe.servings=e},r_=()=>{localStorage.setItem("bookmarks",JSON.stringify(rh.bookmarks))},rw=e=>{rh.bookmarks.push(e),e.id==rh.recipe.id&&(rh.recipe.bookmarked=!0),r_()},rk=e=>{let t=rh.bookmarks.findIndex(t=>t.id==e);rh.bookmarks.splice(t,1),e==rh.recipe.id&&(rh.recipe.bookmarked=!1),r_()},rE=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!=e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error();let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,image_url:e.image,source_url:e.sourceUrl,cooking_time:e.cookingTime,servings:e.servings,publisher:e.publisher,ingredients:t},n=await rf(`${rp}?key=${rd}`,r);rh.recipe=rg(n),rw(rh.recipe)}catch(e){throw e}};!function(){localStorage.clear();let e=localStorage.getItem("bookmarks");e&&(rh.bookmarks=JSON.parse(e))}();var rS={};rS=new URL("icons.c14567a0.svg",import.meta.url).toString();class r${_data;render(e){if(!e||Array.isArray(e)&&0==e.length)return this.renderErrorMessage();this._data=e;let t=this._generateMarkUp();this._clear(),this._add(t)}update(e){if(!e||Array.isArray(e)&&0==e.length)return this.renderErrorMessage();this._data=e;let t=this._generateMarkUp(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*"));Array.from(this._parentElement.querySelectorAll("*")).forEach((e,t)=>{let n=r[t];n.isEqualNode(e)||(Array.from(n.attributes).forEach(t=>{e.setAttribute(t.name,t.value)}),n.firstChild?.nodeValue.trim()===""||(e.textContent=n.textContent))})}_clear(){this._parentElement.innerHTML=""}_add(e){this._parentElement.insertAdjacentHTML("afterbegin",e)}renderSpinner(){let e=`
          <div class="spinner">
            <svg>
              <use href="${y(rS)}#icon-loader"></use>
            </svg>
          </div> 
          `;this._clear(),this._add(e)}renderErrorMessage(e=this._errorMessage){let t=`
        <div class="error">
          <div>
            <svg>
              <use href="${y(rS)}#icon-alert-triangle"></use>
            </svg>
          </div>
          <p>${e}</p>
        </div> 
      `;this._clear(),this._add(t)}renderMessage(e){let t=`
        <div class="error">
          <div>
            <svg>
              <use href="${y(rS)}#icon-smile"></use>
            </svg>
          </div>
          <p>${e}</p>
        </div> 
      `;this._clear(),this._add(t)}}var rO={};function rj(e,t,r,n,i){var o,a,s;let c=[2,3,5];if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&c.push(t);let u=0,l=e,p=t;for(;u<=c.length;)l%c[u]==0&&p%c[u]==0?(c[u],l/=c[u],p/=c[u]):u++;return o=p,a=l,s=r,1===o&&1===a?(s=`${n}${(parseInt(s)+1).toString()}`,`${s}`):0===a?`${n}${s}`:"0"==s?`${n}${a}/${o}`:`${n}${s} ${a}/${o}`}rO=function(e){let t,r;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let n=e.toString(),i=n.split("."),o=i[0];if("0"==r&&"0"!==o)return o;if("0"==r&&"0"==o)return"0";if("99"==(r=n.length>=17?i[1].slice(0,i[1].length-1):i[1])&&"0"!==o)return`${o} 99/100`;if("99"==r&&"0"==o)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return o;let a=r.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(!a||!(r.length>2)){var s,c;return s=r,c=t,rj(parseInt(s,10),Math.pow(10,s.length),o,c,!1)}{let e=a[0].split("").reverse().join(""),n=a[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),function(e,t,r,n,i){let o=e.length-r.length>=1?e.length-r.length:1,a=Math.pow(10,o),s=parseFloat(`0.${e}`),c=Math.pow(10,t.length);return rj(Math.round((s*c-s)*Math.pow(10,o)),(c-1)*a,n,i,!0)}(r,n,e,o,t)}};class rP extends r${_parentElement=document.querySelector(".recipe");_errorMessage="No Ruestls Found For Your Search, Please Try Again!";_message="";addHandlerRender(e){window.addEventListener("hashchange",e),window.addEventListener("load",e)}addHandlerBookMark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--round")&&e()})}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--tiny");if(!r)return;let n=+r.dataset.servings;n>0&&e(n)})}_generateMarkUp(){return`
    <figure class="recipe__fig">
      <img src="${this._data.img}" alt="${this._data.title}" 
      class="recipe__img" />
      <h1 class="recipe__title">
          <span>${this._data.title}</span>
      </h1>
      </figure>

      <div class="recipe__details">
      <div class="recipe__info">
          <svg class="recipe__info-icon">
          <use href="${y(rS)}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${this._data.savingTime}</span>
          <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
          <svg class="recipe__info-icon">
          <use href="${y(rS)}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
          <button data-servings="${this._data.servings-1}" class="btn--tiny btn--increase-servings">
              <svg>
              <use href="${y(rS)}#icon-minus-circle"></use>
              </svg>
          </button>
          <button data-servings="${this._data.servings+1}" class="btn--tiny btn--increase-servings">
              <svg>
              <use href="${y(rS)}#icon-plus-circle"></use>
              </svg>
          </button>
          </div>
      </div>

      <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
          <svg>
          <use href="${y(rS)}#icon-user"></use>
          </svg>
      </div>
      <button class="btn--round ">
          <svg class="">
          <use href="${y(rS)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
          </svg>
      </button>
      </div>

      <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateRecipeIngredients).join("")}
      </ul>
      </div>

      <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
          directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${this._data.sourceUrl}"
        target="_blank">
        <span>Directions</span>
        <svg class="search__icon">
        <use href="${y(rS)}#icon-arrow-right"></use>
        </svg>
      </a>
      </div>
    </div>
    
    `}_generateRecipeIngredients(e){return`
      <li class="recipe__ingredient">
      <svg class="recipe__icon">
      <use href="${y(rS)}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${e.quantity?y(rO)(e.quantity):""}</div>
      <div class="recipe__description">
      <span class="recipe__unit">${e.unit}</span>   
      ${e.description}
      </div>
      </li>
  `}}var rL=new rP;class rM{#e=document.querySelector(".search");#t;getQuery(){return this.#t=this.#e.querySelector(".search__field").value,this.#r(),this.#t}#r(){this.#e.querySelector(".search__field").value=""}addHandlerRender(e){this.#e.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rx=new rM;class rT extends r${_parentElement="";_generateMarkUp(){return this._data.map(this._generateMarkUpHelper).join("")}_generateMarkUpHelper(e){let t=window.location.hash.slice(1);return`
        <li class="preview">
            <a class="preview__link ${e.id==t?"preview__link--active":""}" href="#${e.id}">
            <figure class="preview__fig">
                <img src="${e.img}" alt="${e.title}" />
            </figure>
            <div class="preview__data">
            <h4 class="preview__title">${e.title}</h4>
            <p class="preview__publisher">${e.publisher}</p>
            <div class="preview__user-generated ${e.key?"":"hidden"}">
              <svg>
              <use href="${y(rS)}#icon-user"></use>
              </svg>
            </div>
            </div>
            </a> 
        </li>
        `}}class rF extends rT{_parentElement=document.querySelector(".results");_errorMessage="No Recipes Match Your Search \uD83D\uDE22, Try Again!"}var rI=new rF;class rq extends r${_parentElement=document.querySelector(".pagination");_generateMarkUp(){let e=Math.ceil(this._data.results.length/this._data.resultsPerPage),t=this._data.page;return 1===t&&e>1?this._getNextPage(t+1):t>1&&t<e?this._getNextPage(t+1)+this._getPrvPage(t-1):t>1&&t===e?this._getPrvPage(t-1):""}_getNextPage(e){return`
        <button data-goto="${e}" class=" btn--inline pagination__btn--next">
            <span>Page ${e}</span>
            <svg class="search__icon">
                <use href="${y(rS)}#icon-arrow-right"></use>
            </svg>
        </button>
    `}_getPrvPage(e){return`
        <button data-goto="${e}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${y(rS)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e}</span>
        </button>
    `}addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}}var rN=new rq;class rH extends rT{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No Bookmarks yet! Find a recipe and bookmark it ;)";addHandlerRender=e=>{window.addEventListener("load",e)}}var rR=new rH;class rC extends r${_successMessage="Your recipe was successfully uploaded :)";_parentElement=document.querySelector(".upload");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");_overlay=document.querySelector(".overlay");_window=document.querySelector(".add-recipe-window");constructor(){super(),this._controlWindow()}_controlWindow(){[this._btnOpen,this._btnClose,this._overlay].forEach(e=>e.addEventListener("click",this.toggle.bind(this)))}toggle(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}}var rA=new rC;const rU=async()=>{try{let e=window.location.hash.slice(1);if(!e)return;rI.update(rm()),rL.renderSpinner(),await rv(e),rL.render(rh.recipe)}catch(e){rL.renderErrorMessage()}},rD=async()=>{try{let e=rx.getQuery();rI.renderSpinner(),await ry(e),rI.render(rm()),rN.render(rh.search)}catch(e){rI.renderErrorMessage()}},rG=()=>{rR.render(rh.bookmarks)},rW=async function(e){try{rA.renderSpinner(),await rE(e),rL.render(rh.recipe),rA.renderMessage("Your recipe was successfully uploaded :)"),rG(),window.history.pushState(null,"",`#${rh.recipe.id}`),setTimeout(()=>{rA.toggle(),window.location.reload()},2500)}catch(e){rA.renderErrorMessage("Wrong ingredints Format! Please use the correct Format :)"),setTimeout(()=>{window.location.reload()},2500)}};console.log("Welcome to Forkify!"),rR.addHandlerRender(rG),rL.addHandlerRender(rU),rL.addHandlerUpdateServings(e=>{rb(e),rL.update(rh.recipe)}),rL.addHandlerBookMark(()=>{rh.recipe.bookmarked?rk(rh.recipe.id):rw(rh.recipe),rL.update(rh.recipe),rG()}),rx.addHandlerRender(rD),rN.addHandlerClick(e=>{try{rI.render(rm(e)),rN.render(rh.search)}catch(e){throw e}}),rA.addHandlerUpload(rW);
//# sourceMappingURL=index.3f7e24fa.js.map
