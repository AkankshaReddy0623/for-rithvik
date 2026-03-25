function Zv(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(i,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function Qv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Fm={exports:{}},Ol={},km={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bs=Symbol.for("react.element"),Jv=Symbol.for("react.portal"),e_=Symbol.for("react.fragment"),t_=Symbol.for("react.strict_mode"),n_=Symbol.for("react.profiler"),i_=Symbol.for("react.provider"),r_=Symbol.for("react.context"),o_=Symbol.for("react.forward_ref"),s_=Symbol.for("react.suspense"),a_=Symbol.for("react.memo"),l_=Symbol.for("react.lazy"),Nf=Symbol.iterator;function c_(t){return t===null||typeof t!="object"?null:(t=Nf&&t[Nf]||t["@@iterator"],typeof t=="function"?t:null)}var Om={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zm=Object.assign,Bm={};function Oo(t,e,n){this.props=t,this.context=e,this.refs=Bm,this.updater=n||Om}Oo.prototype.isReactComponent={};Oo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Oo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Hm(){}Hm.prototype=Oo.prototype;function Ad(t,e,n){this.props=t,this.context=e,this.refs=Bm,this.updater=n||Om}var Cd=Ad.prototype=new Hm;Cd.constructor=Ad;zm(Cd,Oo.prototype);Cd.isPureReactComponent=!0;var Ff=Array.isArray,Gm=Object.prototype.hasOwnProperty,Rd={current:null},Vm={key:!0,ref:!0,__self:!0,__source:!0};function Wm(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Gm.call(e,i)&&!Vm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Bs,type:t,key:o,ref:s,props:r,_owner:Rd.current}}function u_(t,e){return{$$typeof:Bs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Pd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Bs}function d_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var kf=/\/+/g;function uc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?d_(""+t.key):e.toString(36)}function qa(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Bs:case Jv:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+uc(s,0):i,Ff(r)?(n="",t!=null&&(n=t.replace(kf,"$&/")+"/"),qa(r,e,n,"",function(c){return c})):r!=null&&(Pd(r)&&(r=u_(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(kf,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",Ff(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+uc(o,a);s+=qa(o,e,n,l,r)}else if(l=c_(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+uc(o,a++),s+=qa(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function ea(t,e,n){if(t==null)return t;var i=[],r=0;return qa(t,i,"","",function(o){return e.call(n,o,r++)}),i}function f_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Yt={current:null},Ka={transition:null},h_={ReactCurrentDispatcher:Yt,ReactCurrentBatchConfig:Ka,ReactCurrentOwner:Rd};function jm(){throw Error("act(...) is not supported in production builds of React.")}Ge.Children={map:ea,forEach:function(t,e,n){ea(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ea(t,function(){e++}),e},toArray:function(t){return ea(t,function(e){return e})||[]},only:function(t){if(!Pd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ge.Component=Oo;Ge.Fragment=e_;Ge.Profiler=n_;Ge.PureComponent=Ad;Ge.StrictMode=t_;Ge.Suspense=s_;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h_;Ge.act=jm;Ge.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=zm({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Rd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Gm.call(e,l)&&!Vm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Bs,type:t.type,key:r,ref:o,props:i,_owner:s}};Ge.createContext=function(t){return t={$$typeof:r_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:i_,_context:t},t.Consumer=t};Ge.createElement=Wm;Ge.createFactory=function(t){var e=Wm.bind(null,t);return e.type=t,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(t){return{$$typeof:o_,render:t}};Ge.isValidElement=Pd;Ge.lazy=function(t){return{$$typeof:l_,_payload:{_status:-1,_result:t},_init:f_}};Ge.memo=function(t,e){return{$$typeof:a_,type:t,compare:e===void 0?null:e}};Ge.startTransition=function(t){var e=Ka.transition;Ka.transition={};try{t()}finally{Ka.transition=e}};Ge.unstable_act=jm;Ge.useCallback=function(t,e){return Yt.current.useCallback(t,e)};Ge.useContext=function(t){return Yt.current.useContext(t)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(t){return Yt.current.useDeferredValue(t)};Ge.useEffect=function(t,e){return Yt.current.useEffect(t,e)};Ge.useId=function(){return Yt.current.useId()};Ge.useImperativeHandle=function(t,e,n){return Yt.current.useImperativeHandle(t,e,n)};Ge.useInsertionEffect=function(t,e){return Yt.current.useInsertionEffect(t,e)};Ge.useLayoutEffect=function(t,e){return Yt.current.useLayoutEffect(t,e)};Ge.useMemo=function(t,e){return Yt.current.useMemo(t,e)};Ge.useReducer=function(t,e,n){return Yt.current.useReducer(t,e,n)};Ge.useRef=function(t){return Yt.current.useRef(t)};Ge.useState=function(t){return Yt.current.useState(t)};Ge.useSyncExternalStore=function(t,e,n){return Yt.current.useSyncExternalStore(t,e,n)};Ge.useTransition=function(){return Yt.current.useTransition()};Ge.version="18.3.1";km.exports=Ge;var U=km.exports;const Xm=Qv(U),p_=Zv({__proto__:null,default:Xm},[U]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_=U,g_=Symbol.for("react.element"),v_=Symbol.for("react.fragment"),__=Object.prototype.hasOwnProperty,x_=m_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y_={key:!0,ref:!0,__self:!0,__source:!0};function Ym(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)__.call(e,i)&&!y_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:g_,type:t,key:o,ref:s,props:r,_owner:x_.current}}Ol.Fragment=v_;Ol.jsx=Ym;Ol.jsxs=Ym;Fm.exports=Ol;var M=Fm.exports,yu={},$m={exports:{}},xn={},qm={exports:{}},Km={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,k){var H=P.length;P.push(k);e:for(;0<H;){var Z=H-1>>>1,ee=P[Z];if(0<r(ee,k))P[Z]=k,P[H]=ee,H=Z;else break e}}function n(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var k=P[0],H=P.pop();if(H!==k){P[0]=H;e:for(var Z=0,ee=P.length,ge=ee>>>1;Z<ge;){var j=2*(Z+1)-1,te=P[j],ce=j+1,Ee=P[ce];if(0>r(te,H))ce<ee&&0>r(Ee,te)?(P[Z]=Ee,P[ce]=H,Z=ce):(P[Z]=te,P[j]=H,Z=j);else if(ce<ee&&0>r(Ee,H))P[Z]=Ee,P[ce]=H,Z=ce;else break e}}return k}function r(P,k){var H=P.sortIndex-k.sortIndex;return H!==0?H:P.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],c=[],d=1,f=null,h=3,v=!1,_=!1,y=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var k=n(c);k!==null;){if(k.callback===null)i(c);else if(k.startTime<=P)i(c),k.sortIndex=k.expirationTime,e(l,k);else break;k=n(c)}}function x(P){if(y=!1,m(P),!_)if(n(l)!==null)_=!0,I(A);else{var k=n(c);k!==null&&B(x,k.startTime-P)}}function A(P,k){_=!1,y&&(y=!1,u(L),L=-1),v=!0;var H=h;try{for(m(k),f=n(l);f!==null&&(!(f.expirationTime>k)||P&&!w());){var Z=f.callback;if(typeof Z=="function"){f.callback=null,h=f.priorityLevel;var ee=Z(f.expirationTime<=k);k=t.unstable_now(),typeof ee=="function"?f.callback=ee:f===n(l)&&i(l),m(k)}else i(l);f=n(l)}if(f!==null)var ge=!0;else{var j=n(c);j!==null&&B(x,j.startTime-k),ge=!1}return ge}finally{f=null,h=H,v=!1}}var E=!1,b=null,L=-1,F=5,S=-1;function w(){return!(t.unstable_now()-S<F)}function N(){if(b!==null){var P=t.unstable_now();S=P;var k=!0;try{k=b(!0,P)}finally{k?O():(E=!1,b=null)}}else E=!1}var O;if(typeof g=="function")O=function(){g(N)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,G=R.port2;R.port1.onmessage=N,O=function(){G.postMessage(null)}}else O=function(){p(N,0)};function I(P){b=P,E||(E=!0,O())}function B(P,k){L=p(function(){P(t.unstable_now())},k)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){_||v||(_=!0,I(A))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(h){case 1:case 2:case 3:var k=3;break;default:k=h}var H=h;h=k;try{return P()}finally{h=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,k){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var H=h;h=P;try{return k()}finally{h=H}},t.unstable_scheduleCallback=function(P,k,H){var Z=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?Z+H:Z):H=Z,P){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=H+ee,P={id:d++,callback:k,priorityLevel:P,startTime:H,expirationTime:ee,sortIndex:-1},H>Z?(P.sortIndex=H,e(c,P),n(l)===null&&P===n(c)&&(y?(u(L),L=-1):y=!0,B(x,H-Z))):(P.sortIndex=ee,e(l,P),_||v||(_=!0,I(A))),P},t.unstable_shouldYield=w,t.unstable_wrapCallback=function(P){var k=h;return function(){var H=h;h=k;try{return P.apply(this,arguments)}finally{h=H}}}})(Km);qm.exports=Km;var S_=qm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_=U,_n=S_;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zm=new Set,ys={};function kr(t,e){Ao(t,e),Ao(t+"Capture",e)}function Ao(t,e){for(ys[t]=e,t=0;t<e.length;t++)Zm.add(e[t])}var mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=Object.prototype.hasOwnProperty,E_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Of={},zf={};function w_(t){return Su.call(zf,t)?!0:Su.call(Of,t)?!1:E_.test(t)?zf[t]=!0:(Of[t]=!0,!1)}function T_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function b_(t,e,n,i){if(e===null||typeof e>"u"||T_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $t(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){It[t]=new $t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];It[e]=new $t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){It[t]=new $t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){It[t]=new $t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){It[t]=new $t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){It[t]=new $t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){It[t]=new $t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){It[t]=new $t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){It[t]=new $t(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ld=/[\-:]([a-z])/g;function Dd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ld,Dd);It[e]=new $t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ld,Dd);It[e]=new $t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ld,Dd);It[e]=new $t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){It[t]=new $t(t,1,!1,t.toLowerCase(),null,!1,!1)});It.xlinkHref=new $t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){It[t]=new $t(t,1,!1,t.toLowerCase(),null,!0,!0)});function Id(t,e,n,i){var r=It.hasOwnProperty(e)?It[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(b_(e,n,r,i)&&(n=null),i||r===null?w_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var yi=M_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ta=Symbol.for("react.element"),io=Symbol.for("react.portal"),ro=Symbol.for("react.fragment"),Ud=Symbol.for("react.strict_mode"),Mu=Symbol.for("react.profiler"),Qm=Symbol.for("react.provider"),Jm=Symbol.for("react.context"),Nd=Symbol.for("react.forward_ref"),Eu=Symbol.for("react.suspense"),wu=Symbol.for("react.suspense_list"),Fd=Symbol.for("react.memo"),Ri=Symbol.for("react.lazy"),eg=Symbol.for("react.offscreen"),Bf=Symbol.iterator;function jo(t){return t===null||typeof t!="object"?null:(t=Bf&&t[Bf]||t["@@iterator"],typeof t=="function"?t:null)}var ut=Object.assign,dc;function ss(t){if(dc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);dc=e&&e[1]||""}return`
`+dc+t}var fc=!1;function hc(t,e){if(!t||fc)return"";fc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{fc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ss(t):""}function A_(t){switch(t.tag){case 5:return ss(t.type);case 16:return ss("Lazy");case 13:return ss("Suspense");case 19:return ss("SuspenseList");case 0:case 2:case 15:return t=hc(t.type,!1),t;case 11:return t=hc(t.type.render,!1),t;case 1:return t=hc(t.type,!0),t;default:return""}}function Tu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ro:return"Fragment";case io:return"Portal";case Mu:return"Profiler";case Ud:return"StrictMode";case Eu:return"Suspense";case wu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Jm:return(t.displayName||"Context")+".Consumer";case Qm:return(t._context.displayName||"Context")+".Provider";case Nd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Fd:return e=t.displayName||null,e!==null?e:Tu(t.type)||"Memo";case Ri:e=t._payload,t=t._init;try{return Tu(t(e))}catch{}}return null}function C_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tu(e);case 8:return e===Ud?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function qi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function tg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function R_(t){var e=tg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function na(t){t._valueTracker||(t._valueTracker=R_(t))}function ng(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=tg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ll(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bu(t,e){var n=e.checked;return ut({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Hf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=qi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ig(t,e){e=e.checked,e!=null&&Id(t,"checked",e,!1)}function Au(t,e){ig(t,e);var n=qi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Cu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Cu(t,e.type,qi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Gf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Cu(t,e,n){(e!=="number"||ll(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var as=Array.isArray;function xo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+qi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Ru(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return ut({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Vf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(as(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:qi(n)}}function rg(t,e){var n=qi(e.value),i=qi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Wf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function og(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?og(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ia,sg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ia=ia||document.createElement("div"),ia.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ia.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ss(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var us={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},P_=["Webkit","ms","Moz","O"];Object.keys(us).forEach(function(t){P_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),us[e]=us[t]})});function ag(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||us.hasOwnProperty(t)&&us[t]?(""+e).trim():e+"px"}function lg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=ag(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var L_=ut({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lu(t,e){if(e){if(L_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function Du(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Iu=null;function kd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Uu=null,yo=null,So=null;function jf(t){if(t=Vs(t)){if(typeof Uu!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=Vl(e),Uu(t.stateNode,t.type,e))}}function cg(t){yo?So?So.push(t):So=[t]:yo=t}function ug(){if(yo){var t=yo,e=So;if(So=yo=null,jf(t),e)for(t=0;t<e.length;t++)jf(e[t])}}function dg(t,e){return t(e)}function fg(){}var pc=!1;function hg(t,e,n){if(pc)return t(e,n);pc=!0;try{return dg(t,e,n)}finally{pc=!1,(yo!==null||So!==null)&&(fg(),ug())}}function Ms(t,e){var n=t.stateNode;if(n===null)return null;var i=Vl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var Nu=!1;if(mi)try{var Xo={};Object.defineProperty(Xo,"passive",{get:function(){Nu=!0}}),window.addEventListener("test",Xo,Xo),window.removeEventListener("test",Xo,Xo)}catch{Nu=!1}function D_(t,e,n,i,r,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ds=!1,cl=null,ul=!1,Fu=null,I_={onError:function(t){ds=!0,cl=t}};function U_(t,e,n,i,r,o,s,a,l){ds=!1,cl=null,D_.apply(I_,arguments)}function N_(t,e,n,i,r,o,s,a,l){if(U_.apply(this,arguments),ds){if(ds){var c=cl;ds=!1,cl=null}else throw Error(ie(198));ul||(ul=!0,Fu=c)}}function Or(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function pg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Xf(t){if(Or(t)!==t)throw Error(ie(188))}function F_(t){var e=t.alternate;if(!e){if(e=Or(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Xf(r),t;if(o===i)return Xf(r),e;o=o.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function mg(t){return t=F_(t),t!==null?gg(t):null}function gg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=gg(t);if(e!==null)return e;t=t.sibling}return null}var vg=_n.unstable_scheduleCallback,Yf=_n.unstable_cancelCallback,k_=_n.unstable_shouldYield,O_=_n.unstable_requestPaint,pt=_n.unstable_now,z_=_n.unstable_getCurrentPriorityLevel,Od=_n.unstable_ImmediatePriority,_g=_n.unstable_UserBlockingPriority,dl=_n.unstable_NormalPriority,B_=_n.unstable_LowPriority,xg=_n.unstable_IdlePriority,zl=null,Kn=null;function H_(t){if(Kn&&typeof Kn.onCommitFiberRoot=="function")try{Kn.onCommitFiberRoot(zl,t,void 0,(t.current.flags&128)===128)}catch{}}var Bn=Math.clz32?Math.clz32:W_,G_=Math.log,V_=Math.LN2;function W_(t){return t>>>=0,t===0?32:31-(G_(t)/V_|0)|0}var ra=64,oa=4194304;function ls(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function fl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=ls(a):(o&=s,o!==0&&(i=ls(o)))}else s=n&~r,s!==0?i=ls(s):o!==0&&(i=ls(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Bn(e),r=1<<n,i|=t[n],e&=~r;return i}function j_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Bn(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=j_(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function ku(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function yg(){var t=ra;return ra<<=1,!(ra&4194240)&&(ra=64),t}function mc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Hs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bn(e),t[e]=n}function Y_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Bn(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function zd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Bn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ke=0;function Sg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Mg,Bd,Eg,wg,Tg,Ou=!1,sa=[],Oi=null,zi=null,Bi=null,Es=new Map,ws=new Map,Li=[],$_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $f(t,e){switch(t){case"focusin":case"focusout":Oi=null;break;case"dragenter":case"dragleave":zi=null;break;case"mouseover":case"mouseout":Bi=null;break;case"pointerover":case"pointerout":Es.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ws.delete(e.pointerId)}}function Yo(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=Vs(e),e!==null&&Bd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function q_(t,e,n,i,r){switch(e){case"focusin":return Oi=Yo(Oi,t,e,n,i,r),!0;case"dragenter":return zi=Yo(zi,t,e,n,i,r),!0;case"mouseover":return Bi=Yo(Bi,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return Es.set(o,Yo(Es.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,ws.set(o,Yo(ws.get(o)||null,t,e,n,i,r)),!0}return!1}function bg(t){var e=Sr(t.target);if(e!==null){var n=Or(e);if(n!==null){if(e=n.tag,e===13){if(e=pg(n),e!==null){t.blockedOn=e,Tg(t.priority,function(){Eg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Za(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=zu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Iu=i,n.target.dispatchEvent(i),Iu=null}else return e=Vs(n),e!==null&&Bd(e),t.blockedOn=n,!1;e.shift()}return!0}function qf(t,e,n){Za(t)&&n.delete(e)}function K_(){Ou=!1,Oi!==null&&Za(Oi)&&(Oi=null),zi!==null&&Za(zi)&&(zi=null),Bi!==null&&Za(Bi)&&(Bi=null),Es.forEach(qf),ws.forEach(qf)}function $o(t,e){t.blockedOn===e&&(t.blockedOn=null,Ou||(Ou=!0,_n.unstable_scheduleCallback(_n.unstable_NormalPriority,K_)))}function Ts(t){function e(r){return $o(r,t)}if(0<sa.length){$o(sa[0],t);for(var n=1;n<sa.length;n++){var i=sa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Oi!==null&&$o(Oi,t),zi!==null&&$o(zi,t),Bi!==null&&$o(Bi,t),Es.forEach(e),ws.forEach(e),n=0;n<Li.length;n++)i=Li[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Li.length&&(n=Li[0],n.blockedOn===null);)bg(n),n.blockedOn===null&&Li.shift()}var Mo=yi.ReactCurrentBatchConfig,hl=!0;function Z_(t,e,n,i){var r=Ke,o=Mo.transition;Mo.transition=null;try{Ke=1,Hd(t,e,n,i)}finally{Ke=r,Mo.transition=o}}function Q_(t,e,n,i){var r=Ke,o=Mo.transition;Mo.transition=null;try{Ke=4,Hd(t,e,n,i)}finally{Ke=r,Mo.transition=o}}function Hd(t,e,n,i){if(hl){var r=zu(t,e,n,i);if(r===null)Tc(t,e,i,pl,n),$f(t,i);else if(q_(r,t,e,n,i))i.stopPropagation();else if($f(t,i),e&4&&-1<$_.indexOf(t)){for(;r!==null;){var o=Vs(r);if(o!==null&&Mg(o),o=zu(t,e,n,i),o===null&&Tc(t,e,i,pl,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else Tc(t,e,i,null,n)}}var pl=null;function zu(t,e,n,i){if(pl=null,t=kd(i),t=Sr(t),t!==null)if(e=Or(t),e===null)t=null;else if(n=e.tag,n===13){if(t=pg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return pl=t,null}function Ag(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(z_()){case Od:return 1;case _g:return 4;case dl:case B_:return 16;case xg:return 536870912;default:return 16}default:return 16}}var Ui=null,Gd=null,Qa=null;function Cg(){if(Qa)return Qa;var t,e=Gd,n=e.length,i,r="value"in Ui?Ui.value:Ui.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return Qa=r.slice(t,1<i?1-i:void 0)}function Ja(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function aa(){return!0}function Kf(){return!1}function yn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?aa:Kf,this.isPropagationStopped=Kf,this}return ut(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=aa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=aa)},persist:function(){},isPersistent:aa}),e}var zo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vd=yn(zo),Gs=ut({},zo,{view:0,detail:0}),J_=yn(Gs),gc,vc,qo,Bl=ut({},Gs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qo&&(qo&&t.type==="mousemove"?(gc=t.screenX-qo.screenX,vc=t.screenY-qo.screenY):vc=gc=0,qo=t),gc)},movementY:function(t){return"movementY"in t?t.movementY:vc}}),Zf=yn(Bl),ex=ut({},Bl,{dataTransfer:0}),tx=yn(ex),nx=ut({},Gs,{relatedTarget:0}),_c=yn(nx),ix=ut({},zo,{animationName:0,elapsedTime:0,pseudoElement:0}),rx=yn(ix),ox=ut({},zo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),sx=yn(ox),ax=ut({},zo,{data:0}),Qf=yn(ax),lx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ux={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ux[t])?!!e[t]:!1}function Wd(){return dx}var fx=ut({},Gs,{key:function(t){if(t.key){var e=lx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ja(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wd,charCode:function(t){return t.type==="keypress"?Ja(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ja(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hx=yn(fx),px=ut({},Bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jf=yn(px),mx=ut({},Gs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wd}),gx=yn(mx),vx=ut({},zo,{propertyName:0,elapsedTime:0,pseudoElement:0}),_x=yn(vx),xx=ut({},Bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yx=yn(xx),Sx=[9,13,27,32],jd=mi&&"CompositionEvent"in window,fs=null;mi&&"documentMode"in document&&(fs=document.documentMode);var Mx=mi&&"TextEvent"in window&&!fs,Rg=mi&&(!jd||fs&&8<fs&&11>=fs),eh=" ",th=!1;function Pg(t,e){switch(t){case"keyup":return Sx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var oo=!1;function Ex(t,e){switch(t){case"compositionend":return Lg(e);case"keypress":return e.which!==32?null:(th=!0,eh);case"textInput":return t=e.data,t===eh&&th?null:t;default:return null}}function wx(t,e){if(oo)return t==="compositionend"||!jd&&Pg(t,e)?(t=Cg(),Qa=Gd=Ui=null,oo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Rg&&e.locale!=="ko"?null:e.data;default:return null}}var Tx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Tx[t.type]:e==="textarea"}function Dg(t,e,n,i){cg(i),e=ml(e,"onChange"),0<e.length&&(n=new Vd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var hs=null,bs=null;function bx(t){Vg(t,0)}function Hl(t){var e=lo(t);if(ng(e))return t}function Ax(t,e){if(t==="change")return e}var Ig=!1;if(mi){var xc;if(mi){var yc="oninput"in document;if(!yc){var ih=document.createElement("div");ih.setAttribute("oninput","return;"),yc=typeof ih.oninput=="function"}xc=yc}else xc=!1;Ig=xc&&(!document.documentMode||9<document.documentMode)}function rh(){hs&&(hs.detachEvent("onpropertychange",Ug),bs=hs=null)}function Ug(t){if(t.propertyName==="value"&&Hl(bs)){var e=[];Dg(e,bs,t,kd(t)),hg(bx,e)}}function Cx(t,e,n){t==="focusin"?(rh(),hs=e,bs=n,hs.attachEvent("onpropertychange",Ug)):t==="focusout"&&rh()}function Rx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hl(bs)}function Px(t,e){if(t==="click")return Hl(e)}function Lx(t,e){if(t==="input"||t==="change")return Hl(e)}function Dx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gn=typeof Object.is=="function"?Object.is:Dx;function As(t,e){if(Gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Su.call(e,r)||!Gn(t[r],e[r]))return!1}return!0}function oh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sh(t,e){var n=oh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=oh(n)}}function Ng(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ng(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Fg(){for(var t=window,e=ll();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ll(t.document)}return e}function Xd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ix(t){var e=Fg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ng(n.ownerDocument.documentElement,n)){if(i!==null&&Xd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=sh(n,o);var s=sh(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ux=mi&&"documentMode"in document&&11>=document.documentMode,so=null,Bu=null,ps=null,Hu=!1;function ah(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hu||so==null||so!==ll(i)||(i=so,"selectionStart"in i&&Xd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ps&&As(ps,i)||(ps=i,i=ml(Bu,"onSelect"),0<i.length&&(e=new Vd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=so)))}function la(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ao={animationend:la("Animation","AnimationEnd"),animationiteration:la("Animation","AnimationIteration"),animationstart:la("Animation","AnimationStart"),transitionend:la("Transition","TransitionEnd")},Sc={},kg={};mi&&(kg=document.createElement("div").style,"AnimationEvent"in window||(delete ao.animationend.animation,delete ao.animationiteration.animation,delete ao.animationstart.animation),"TransitionEvent"in window||delete ao.transitionend.transition);function Gl(t){if(Sc[t])return Sc[t];if(!ao[t])return t;var e=ao[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in kg)return Sc[t]=e[n];return t}var Og=Gl("animationend"),zg=Gl("animationiteration"),Bg=Gl("animationstart"),Hg=Gl("transitionend"),Gg=new Map,lh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ji(t,e){Gg.set(t,e),kr(e,[t])}for(var Mc=0;Mc<lh.length;Mc++){var Ec=lh[Mc],Nx=Ec.toLowerCase(),Fx=Ec[0].toUpperCase()+Ec.slice(1);Ji(Nx,"on"+Fx)}Ji(Og,"onAnimationEnd");Ji(zg,"onAnimationIteration");Ji(Bg,"onAnimationStart");Ji("dblclick","onDoubleClick");Ji("focusin","onFocus");Ji("focusout","onBlur");Ji(Hg,"onTransitionEnd");Ao("onMouseEnter",["mouseout","mouseover"]);Ao("onMouseLeave",["mouseout","mouseover"]);Ao("onPointerEnter",["pointerout","pointerover"]);Ao("onPointerLeave",["pointerout","pointerover"]);kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kx=new Set("cancel close invalid load scroll toggle".split(" ").concat(cs));function ch(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,N_(i,e,void 0,t),t.currentTarget=null}function Vg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;ch(r,a,c),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;ch(r,a,c),o=l}}}if(ul)throw t=Fu,ul=!1,Fu=null,t}function tt(t,e){var n=e[Xu];n===void 0&&(n=e[Xu]=new Set);var i=t+"__bubble";n.has(i)||(Wg(e,t,2,!1),n.add(i))}function wc(t,e,n){var i=0;e&&(i|=4),Wg(n,t,i,e)}var ca="_reactListening"+Math.random().toString(36).slice(2);function Cs(t){if(!t[ca]){t[ca]=!0,Zm.forEach(function(n){n!=="selectionchange"&&(kx.has(n)||wc(n,!1,t),wc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ca]||(e[ca]=!0,wc("selectionchange",!1,e))}}function Wg(t,e,n,i){switch(Ag(e)){case 1:var r=Z_;break;case 4:r=Q_;break;default:r=Hd}n=r.bind(null,e,n,t),r=void 0,!Nu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Tc(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Sr(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}hg(function(){var c=o,d=kd(n),f=[];e:{var h=Gg.get(t);if(h!==void 0){var v=Vd,_=t;switch(t){case"keypress":if(Ja(n)===0)break e;case"keydown":case"keyup":v=hx;break;case"focusin":_="focus",v=_c;break;case"focusout":_="blur",v=_c;break;case"beforeblur":case"afterblur":v=_c;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Zf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=tx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=gx;break;case Og:case zg:case Bg:v=rx;break;case Hg:v=_x;break;case"scroll":v=J_;break;case"wheel":v=yx;break;case"copy":case"cut":case"paste":v=sx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Jf}var y=(e&4)!==0,p=!y&&t==="scroll",u=y?h!==null?h+"Capture":null:h;y=[];for(var g=c,m;g!==null;){m=g;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,u!==null&&(x=Ms(g,u),x!=null&&y.push(Rs(g,x,m)))),p)break;g=g.return}0<y.length&&(h=new v(h,_,null,n,d),f.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",h&&n!==Iu&&(_=n.relatedTarget||n.fromElement)&&(Sr(_)||_[gi]))break e;if((v||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,v?(_=n.relatedTarget||n.toElement,v=c,_=_?Sr(_):null,_!==null&&(p=Or(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(v=null,_=c),v!==_)){if(y=Zf,x="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=Jf,x="onPointerLeave",u="onPointerEnter",g="pointer"),p=v==null?h:lo(v),m=_==null?h:lo(_),h=new y(x,g+"leave",v,n,d),h.target=p,h.relatedTarget=m,x=null,Sr(d)===c&&(y=new y(u,g+"enter",_,n,d),y.target=m,y.relatedTarget=p,x=y),p=x,v&&_)t:{for(y=v,u=_,g=0,m=y;m;m=Br(m))g++;for(m=0,x=u;x;x=Br(x))m++;for(;0<g-m;)y=Br(y),g--;for(;0<m-g;)u=Br(u),m--;for(;g--;){if(y===u||u!==null&&y===u.alternate)break t;y=Br(y),u=Br(u)}y=null}else y=null;v!==null&&uh(f,h,v,y,!1),_!==null&&p!==null&&uh(f,p,_,y,!0)}}e:{if(h=c?lo(c):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var A=Ax;else if(nh(h))if(Ig)A=Lx;else{A=Rx;var E=Cx}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(A=Px);if(A&&(A=A(t,c))){Dg(f,A,n,d);break e}E&&E(t,h,c),t==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&Cu(h,"number",h.value)}switch(E=c?lo(c):window,t){case"focusin":(nh(E)||E.contentEditable==="true")&&(so=E,Bu=c,ps=null);break;case"focusout":ps=Bu=so=null;break;case"mousedown":Hu=!0;break;case"contextmenu":case"mouseup":case"dragend":Hu=!1,ah(f,n,d);break;case"selectionchange":if(Ux)break;case"keydown":case"keyup":ah(f,n,d)}var b;if(jd)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else oo?Pg(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Rg&&n.locale!=="ko"&&(oo||L!=="onCompositionStart"?L==="onCompositionEnd"&&oo&&(b=Cg()):(Ui=d,Gd="value"in Ui?Ui.value:Ui.textContent,oo=!0)),E=ml(c,L),0<E.length&&(L=new Qf(L,t,null,n,d),f.push({event:L,listeners:E}),b?L.data=b:(b=Lg(n),b!==null&&(L.data=b)))),(b=Mx?Ex(t,n):wx(t,n))&&(c=ml(c,"onBeforeInput"),0<c.length&&(d=new Qf("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=b))}Vg(f,e)})}function Rs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ml(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Ms(t,n),o!=null&&i.unshift(Rs(t,o,r)),o=Ms(t,e),o!=null&&i.push(Rs(t,o,r))),t=t.return}return i}function Br(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function uh(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ms(n,o),l!=null&&s.unshift(Rs(n,l,a))):r||(l=Ms(n,o),l!=null&&s.push(Rs(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Ox=/\r\n?/g,zx=/\u0000|\uFFFD/g;function dh(t){return(typeof t=="string"?t:""+t).replace(Ox,`
`).replace(zx,"")}function ua(t,e,n){if(e=dh(e),dh(t)!==e&&n)throw Error(ie(425))}function gl(){}var Gu=null,Vu=null;function Wu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ju=typeof setTimeout=="function"?setTimeout:void 0,Bx=typeof clearTimeout=="function"?clearTimeout:void 0,fh=typeof Promise=="function"?Promise:void 0,Hx=typeof queueMicrotask=="function"?queueMicrotask:typeof fh<"u"?function(t){return fh.resolve(null).then(t).catch(Gx)}:ju;function Gx(t){setTimeout(function(){throw t})}function bc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ts(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ts(e)}function Hi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function hh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Bo=Math.random().toString(36).slice(2),$n="__reactFiber$"+Bo,Ps="__reactProps$"+Bo,gi="__reactContainer$"+Bo,Xu="__reactEvents$"+Bo,Vx="__reactListeners$"+Bo,Wx="__reactHandles$"+Bo;function Sr(t){var e=t[$n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[gi]||n[$n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=hh(t);t!==null;){if(n=t[$n])return n;t=hh(t)}return e}t=n,n=t.parentNode}return null}function Vs(t){return t=t[$n]||t[gi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function lo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function Vl(t){return t[Ps]||null}var Yu=[],co=-1;function er(t){return{current:t}}function it(t){0>co||(t.current=Yu[co],Yu[co]=null,co--)}function et(t,e){co++,Yu[co]=t.current,t.current=e}var Ki={},Ht=er(Ki),tn=er(!1),Lr=Ki;function Co(t,e){var n=t.type.contextTypes;if(!n)return Ki;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function nn(t){return t=t.childContextTypes,t!=null}function vl(){it(tn),it(Ht)}function ph(t,e,n){if(Ht.current!==Ki)throw Error(ie(168));et(Ht,e),et(tn,n)}function jg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,C_(t)||"Unknown",r));return ut({},n,i)}function _l(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ki,Lr=Ht.current,et(Ht,t),et(tn,tn.current),!0}function mh(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=jg(t,e,Lr),i.__reactInternalMemoizedMergedChildContext=t,it(tn),it(Ht),et(Ht,t)):it(tn),et(tn,n)}var si=null,Wl=!1,Ac=!1;function Xg(t){si===null?si=[t]:si.push(t)}function jx(t){Wl=!0,Xg(t)}function tr(){if(!Ac&&si!==null){Ac=!0;var t=0,e=Ke;try{var n=si;for(Ke=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}si=null,Wl=!1}catch(r){throw si!==null&&(si=si.slice(t+1)),vg(Od,tr),r}finally{Ke=e,Ac=!1}}return null}var uo=[],fo=0,xl=null,yl=0,wn=[],Tn=0,Dr=null,ui=1,di="";function fr(t,e){uo[fo++]=yl,uo[fo++]=xl,xl=t,yl=e}function Yg(t,e,n){wn[Tn++]=ui,wn[Tn++]=di,wn[Tn++]=Dr,Dr=t;var i=ui;t=di;var r=32-Bn(i)-1;i&=~(1<<r),n+=1;var o=32-Bn(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,ui=1<<32-Bn(e)+r|n<<r|i,di=o+t}else ui=1<<o|n<<r|i,di=t}function Yd(t){t.return!==null&&(fr(t,1),Yg(t,1,0))}function $d(t){for(;t===xl;)xl=uo[--fo],uo[fo]=null,yl=uo[--fo],uo[fo]=null;for(;t===Dr;)Dr=wn[--Tn],wn[Tn]=null,di=wn[--Tn],wn[Tn]=null,ui=wn[--Tn],wn[Tn]=null}var gn=null,mn=null,st=!1,kn=null;function $g(t,e){var n=An(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function gh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gn=t,mn=Hi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gn=t,mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Dr!==null?{id:ui,overflow:di}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=An(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gn=t,mn=null,!0):!1;default:return!1}}function $u(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qu(t){if(st){var e=mn;if(e){var n=e;if(!gh(t,e)){if($u(t))throw Error(ie(418));e=Hi(n.nextSibling);var i=gn;e&&gh(t,e)?$g(i,n):(t.flags=t.flags&-4097|2,st=!1,gn=t)}}else{if($u(t))throw Error(ie(418));t.flags=t.flags&-4097|2,st=!1,gn=t}}}function vh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gn=t}function da(t){if(t!==gn)return!1;if(!st)return vh(t),st=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Wu(t.type,t.memoizedProps)),e&&(e=mn)){if($u(t))throw qg(),Error(ie(418));for(;e;)$g(t,e),e=Hi(e.nextSibling)}if(vh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){mn=Hi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}mn=null}}else mn=gn?Hi(t.stateNode.nextSibling):null;return!0}function qg(){for(var t=mn;t;)t=Hi(t.nextSibling)}function Ro(){mn=gn=null,st=!1}function qd(t){kn===null?kn=[t]:kn.push(t)}var Xx=yi.ReactCurrentBatchConfig;function Ko(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function fa(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function _h(t){var e=t._init;return e(t._payload)}function Kg(t){function e(u,g){if(t){var m=u.deletions;m===null?(u.deletions=[g],u.flags|=16):m.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=ji(u,g),u.index=0,u.sibling=null,u}function o(u,g,m){return u.index=m,t?(m=u.alternate,m!==null?(m=m.index,m<g?(u.flags|=2,g):m):(u.flags|=2,g)):(u.flags|=1048576,g)}function s(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,g,m,x){return g===null||g.tag!==6?(g=Uc(m,u.mode,x),g.return=u,g):(g=r(g,m),g.return=u,g)}function l(u,g,m,x){var A=m.type;return A===ro?d(u,g,m.props.children,x,m.key):g!==null&&(g.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ri&&_h(A)===g.type)?(x=r(g,m.props),x.ref=Ko(u,g,m),x.return=u,x):(x=sl(m.type,m.key,m.props,null,u.mode,x),x.ref=Ko(u,g,m),x.return=u,x)}function c(u,g,m,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==m.containerInfo||g.stateNode.implementation!==m.implementation?(g=Nc(m,u.mode,x),g.return=u,g):(g=r(g,m.children||[]),g.return=u,g)}function d(u,g,m,x,A){return g===null||g.tag!==7?(g=br(m,u.mode,x,A),g.return=u,g):(g=r(g,m),g.return=u,g)}function f(u,g,m){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Uc(""+g,u.mode,m),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ta:return m=sl(g.type,g.key,g.props,null,u.mode,m),m.ref=Ko(u,null,g),m.return=u,m;case io:return g=Nc(g,u.mode,m),g.return=u,g;case Ri:var x=g._init;return f(u,x(g._payload),m)}if(as(g)||jo(g))return g=br(g,u.mode,m,null),g.return=u,g;fa(u,g)}return null}function h(u,g,m,x){var A=g!==null?g.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return A!==null?null:a(u,g,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ta:return m.key===A?l(u,g,m,x):null;case io:return m.key===A?c(u,g,m,x):null;case Ri:return A=m._init,h(u,g,A(m._payload),x)}if(as(m)||jo(m))return A!==null?null:d(u,g,m,x,null);fa(u,m)}return null}function v(u,g,m,x,A){if(typeof x=="string"&&x!==""||typeof x=="number")return u=u.get(m)||null,a(g,u,""+x,A);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ta:return u=u.get(x.key===null?m:x.key)||null,l(g,u,x,A);case io:return u=u.get(x.key===null?m:x.key)||null,c(g,u,x,A);case Ri:var E=x._init;return v(u,g,m,E(x._payload),A)}if(as(x)||jo(x))return u=u.get(m)||null,d(g,u,x,A,null);fa(g,x)}return null}function _(u,g,m,x){for(var A=null,E=null,b=g,L=g=0,F=null;b!==null&&L<m.length;L++){b.index>L?(F=b,b=null):F=b.sibling;var S=h(u,b,m[L],x);if(S===null){b===null&&(b=F);break}t&&b&&S.alternate===null&&e(u,b),g=o(S,g,L),E===null?A=S:E.sibling=S,E=S,b=F}if(L===m.length)return n(u,b),st&&fr(u,L),A;if(b===null){for(;L<m.length;L++)b=f(u,m[L],x),b!==null&&(g=o(b,g,L),E===null?A=b:E.sibling=b,E=b);return st&&fr(u,L),A}for(b=i(u,b);L<m.length;L++)F=v(b,u,L,m[L],x),F!==null&&(t&&F.alternate!==null&&b.delete(F.key===null?L:F.key),g=o(F,g,L),E===null?A=F:E.sibling=F,E=F);return t&&b.forEach(function(w){return e(u,w)}),st&&fr(u,L),A}function y(u,g,m,x){var A=jo(m);if(typeof A!="function")throw Error(ie(150));if(m=A.call(m),m==null)throw Error(ie(151));for(var E=A=null,b=g,L=g=0,F=null,S=m.next();b!==null&&!S.done;L++,S=m.next()){b.index>L?(F=b,b=null):F=b.sibling;var w=h(u,b,S.value,x);if(w===null){b===null&&(b=F);break}t&&b&&w.alternate===null&&e(u,b),g=o(w,g,L),E===null?A=w:E.sibling=w,E=w,b=F}if(S.done)return n(u,b),st&&fr(u,L),A;if(b===null){for(;!S.done;L++,S=m.next())S=f(u,S.value,x),S!==null&&(g=o(S,g,L),E===null?A=S:E.sibling=S,E=S);return st&&fr(u,L),A}for(b=i(u,b);!S.done;L++,S=m.next())S=v(b,u,L,S.value,x),S!==null&&(t&&S.alternate!==null&&b.delete(S.key===null?L:S.key),g=o(S,g,L),E===null?A=S:E.sibling=S,E=S);return t&&b.forEach(function(N){return e(u,N)}),st&&fr(u,L),A}function p(u,g,m,x){if(typeof m=="object"&&m!==null&&m.type===ro&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ta:e:{for(var A=m.key,E=g;E!==null;){if(E.key===A){if(A=m.type,A===ro){if(E.tag===7){n(u,E.sibling),g=r(E,m.props.children),g.return=u,u=g;break e}}else if(E.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ri&&_h(A)===E.type){n(u,E.sibling),g=r(E,m.props),g.ref=Ko(u,E,m),g.return=u,u=g;break e}n(u,E);break}else e(u,E);E=E.sibling}m.type===ro?(g=br(m.props.children,u.mode,x,m.key),g.return=u,u=g):(x=sl(m.type,m.key,m.props,null,u.mode,x),x.ref=Ko(u,g,m),x.return=u,u=x)}return s(u);case io:e:{for(E=m.key;g!==null;){if(g.key===E)if(g.tag===4&&g.stateNode.containerInfo===m.containerInfo&&g.stateNode.implementation===m.implementation){n(u,g.sibling),g=r(g,m.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=Nc(m,u.mode,x),g.return=u,u=g}return s(u);case Ri:return E=m._init,p(u,g,E(m._payload),x)}if(as(m))return _(u,g,m,x);if(jo(m))return y(u,g,m,x);fa(u,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,m),g.return=u,u=g):(n(u,g),g=Uc(m,u.mode,x),g.return=u,u=g),s(u)):n(u,g)}return p}var Po=Kg(!0),Zg=Kg(!1),Sl=er(null),Ml=null,ho=null,Kd=null;function Zd(){Kd=ho=Ml=null}function Qd(t){var e=Sl.current;it(Sl),t._currentValue=e}function Ku(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Eo(t,e){Ml=t,Kd=ho=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(en=!0),t.firstContext=null)}function Rn(t){var e=t._currentValue;if(Kd!==t)if(t={context:t,memoizedValue:e,next:null},ho===null){if(Ml===null)throw Error(ie(308));ho=t,Ml.dependencies={lanes:0,firstContext:t}}else ho=ho.next=t;return e}var Mr=null;function Jd(t){Mr===null?Mr=[t]:Mr.push(t)}function Qg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Jd(e)):(n.next=r.next,r.next=n),e.interleaved=n,vi(t,i)}function vi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Pi=!1;function ef(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function pi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Gi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,vi(t,n)}return r=i.interleaved,r===null?(e.next=e,Jd(i)):(e.next=r.next,r.next=e),i.interleaved=e,vi(t,n)}function el(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,zd(t,n)}}function xh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function El(t,e,n,i){var r=t.updateQueue;Pi=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(o!==null){var f=r.baseState;s=0,d=c=l=null,a=o;do{var h=a.lane,v=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(h=e,v=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){f=_.call(v,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(v,f,h):_,h==null)break e;f=ut({},f,h);break e;case 2:Pi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else v={eventTime:v,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=v,l=f):d=d.next=v,s|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Ur|=s,t.lanes=s,t.memoizedState=f}}function yh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Ws={},Zn=er(Ws),Ls=er(Ws),Ds=er(Ws);function Er(t){if(t===Ws)throw Error(ie(174));return t}function tf(t,e){switch(et(Ds,e),et(Ls,t),et(Zn,Ws),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Pu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Pu(e,t)}it(Zn),et(Zn,e)}function Lo(){it(Zn),it(Ls),it(Ds)}function e0(t){Er(Ds.current);var e=Er(Zn.current),n=Pu(e,t.type);e!==n&&(et(Ls,t),et(Zn,n))}function nf(t){Ls.current===t&&(it(Zn),it(Ls))}var lt=er(0);function wl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Cc=[];function rf(){for(var t=0;t<Cc.length;t++)Cc[t]._workInProgressVersionPrimary=null;Cc.length=0}var tl=yi.ReactCurrentDispatcher,Rc=yi.ReactCurrentBatchConfig,Ir=0,ct=null,yt=null,bt=null,Tl=!1,ms=!1,Is=0,Yx=0;function Nt(){throw Error(ie(321))}function of(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gn(t[n],e[n]))return!1;return!0}function sf(t,e,n,i,r,o){if(Ir=o,ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tl.current=t===null||t.memoizedState===null?Zx:Qx,t=n(i,r),ms){o=0;do{if(ms=!1,Is=0,25<=o)throw Error(ie(301));o+=1,bt=yt=null,e.updateQueue=null,tl.current=Jx,t=n(i,r)}while(ms)}if(tl.current=bl,e=yt!==null&&yt.next!==null,Ir=0,bt=yt=ct=null,Tl=!1,e)throw Error(ie(300));return t}function af(){var t=Is!==0;return Is=0,t}function jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?ct.memoizedState=bt=t:bt=bt.next=t,bt}function Pn(){if(yt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=yt.next;var e=bt===null?ct.memoizedState:bt.next;if(e!==null)bt=e,yt=t;else{if(t===null)throw Error(ie(310));yt=t,t={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},bt===null?ct.memoizedState=bt=t:bt=bt.next=t}return bt}function Us(t,e){return typeof e=="function"?e(t):e}function Pc(t){var e=Pn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=yt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,c=o;do{var d=c.lane;if((Ir&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,s=i):l=l.next=f,ct.lanes|=d,Ur|=d}c=c.next}while(c!==null&&c!==o);l===null?s=i:l.next=a,Gn(i,e.memoizedState)||(en=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,ct.lanes|=o,Ur|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Lc(t){var e=Pn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);Gn(o,e.memoizedState)||(en=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function t0(){}function n0(t,e){var n=ct,i=Pn(),r=e(),o=!Gn(i.memoizedState,r);if(o&&(i.memoizedState=r,en=!0),i=i.queue,lf(o0.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||bt!==null&&bt.memoizedState.tag&1){if(n.flags|=2048,Ns(9,r0.bind(null,n,i,r,e),void 0,null),At===null)throw Error(ie(349));Ir&30||i0(n,e,r)}return r}function i0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function r0(t,e,n,i){e.value=n,e.getSnapshot=i,s0(e)&&a0(t)}function o0(t,e,n){return n(function(){s0(e)&&a0(t)})}function s0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gn(t,n)}catch{return!0}}function a0(t){var e=vi(t,1);e!==null&&Hn(e,t,1,-1)}function Sh(t){var e=jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Us,lastRenderedState:t},e.queue=t,t=t.dispatch=Kx.bind(null,ct,t),[e.memoizedState,t]}function Ns(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function l0(){return Pn().memoizedState}function nl(t,e,n,i){var r=jn();ct.flags|=t,r.memoizedState=Ns(1|e,n,void 0,i===void 0?null:i)}function jl(t,e,n,i){var r=Pn();i=i===void 0?null:i;var o=void 0;if(yt!==null){var s=yt.memoizedState;if(o=s.destroy,i!==null&&of(i,s.deps)){r.memoizedState=Ns(e,n,o,i);return}}ct.flags|=t,r.memoizedState=Ns(1|e,n,o,i)}function Mh(t,e){return nl(8390656,8,t,e)}function lf(t,e){return jl(2048,8,t,e)}function c0(t,e){return jl(4,2,t,e)}function u0(t,e){return jl(4,4,t,e)}function d0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function f0(t,e,n){return n=n!=null?n.concat([t]):null,jl(4,4,d0.bind(null,e,t),n)}function cf(){}function h0(t,e){var n=Pn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&of(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function p0(t,e){var n=Pn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&of(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function m0(t,e,n){return Ir&21?(Gn(n,e)||(n=yg(),ct.lanes|=n,Ur|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,en=!0),t.memoizedState=n)}function $x(t,e){var n=Ke;Ke=n!==0&&4>n?n:4,t(!0);var i=Rc.transition;Rc.transition={};try{t(!1),e()}finally{Ke=n,Rc.transition=i}}function g0(){return Pn().memoizedState}function qx(t,e,n){var i=Wi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},v0(t))_0(e,n);else if(n=Qg(t,e,n,i),n!==null){var r=Xt();Hn(n,t,i,r),x0(n,e,i)}}function Kx(t,e,n){var i=Wi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(v0(t))_0(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,Gn(a,s)){var l=e.interleaved;l===null?(r.next=r,Jd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Qg(t,e,r,i),n!==null&&(r=Xt(),Hn(n,t,i,r),x0(n,e,i))}}function v0(t){var e=t.alternate;return t===ct||e!==null&&e===ct}function _0(t,e){ms=Tl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function x0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,zd(t,n)}}var bl={readContext:Rn,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useInsertionEffect:Nt,useLayoutEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useMutableSource:Nt,useSyncExternalStore:Nt,useId:Nt,unstable_isNewReconciler:!1},Zx={readContext:Rn,useCallback:function(t,e){return jn().memoizedState=[t,e===void 0?null:e],t},useContext:Rn,useEffect:Mh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,nl(4194308,4,d0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return nl(4,2,t,e)},useMemo:function(t,e){var n=jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=jn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=qx.bind(null,ct,t),[i.memoizedState,t]},useRef:function(t){var e=jn();return t={current:t},e.memoizedState=t},useState:Sh,useDebugValue:cf,useDeferredValue:function(t){return jn().memoizedState=t},useTransition:function(){var t=Sh(!1),e=t[0];return t=$x.bind(null,t[1]),jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ct,r=jn();if(st){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),At===null)throw Error(ie(349));Ir&30||i0(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,Mh(o0.bind(null,i,o,t),[t]),i.flags|=2048,Ns(9,r0.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=jn(),e=At.identifierPrefix;if(st){var n=di,i=ui;n=(i&~(1<<32-Bn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Is++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Yx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Qx={readContext:Rn,useCallback:h0,useContext:Rn,useEffect:lf,useImperativeHandle:f0,useInsertionEffect:c0,useLayoutEffect:u0,useMemo:p0,useReducer:Pc,useRef:l0,useState:function(){return Pc(Us)},useDebugValue:cf,useDeferredValue:function(t){var e=Pn();return m0(e,yt.memoizedState,t)},useTransition:function(){var t=Pc(Us)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:t0,useSyncExternalStore:n0,useId:g0,unstable_isNewReconciler:!1},Jx={readContext:Rn,useCallback:h0,useContext:Rn,useEffect:lf,useImperativeHandle:f0,useInsertionEffect:c0,useLayoutEffect:u0,useMemo:p0,useReducer:Lc,useRef:l0,useState:function(){return Lc(Us)},useDebugValue:cf,useDeferredValue:function(t){var e=Pn();return yt===null?e.memoizedState=t:m0(e,yt.memoizedState,t)},useTransition:function(){var t=Lc(Us)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:t0,useSyncExternalStore:n0,useId:g0,unstable_isNewReconciler:!1};function Nn(t,e){if(t&&t.defaultProps){e=ut({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Zu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ut({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Xl={isMounted:function(t){return(t=t._reactInternals)?Or(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=Wi(t),o=pi(i,r);o.payload=e,n!=null&&(o.callback=n),e=Gi(t,o,r),e!==null&&(Hn(e,t,r,i),el(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=Wi(t),o=pi(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Gi(t,o,r),e!==null&&(Hn(e,t,r,i),el(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xt(),i=Wi(t),r=pi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Gi(t,r,i),e!==null&&(Hn(e,t,i,n),el(e,t,i))}};function Eh(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!As(n,i)||!As(r,o):!0}function y0(t,e,n){var i=!1,r=Ki,o=e.contextType;return typeof o=="object"&&o!==null?o=Rn(o):(r=nn(e)?Lr:Ht.current,i=e.contextTypes,o=(i=i!=null)?Co(t,r):Ki),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Xl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function wh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Xl.enqueueReplaceState(e,e.state,null)}function Qu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},ef(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Rn(o):(o=nn(e)?Lr:Ht.current,r.context=Co(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Zu(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Xl.enqueueReplaceState(r,r.state,null),El(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Do(t,e){try{var n="",i=e;do n+=A_(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function Dc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ju(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ey=typeof WeakMap=="function"?WeakMap:Map;function S0(t,e,n){n=pi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Cl||(Cl=!0,cd=i),Ju(t,e)},n}function M0(t,e,n){n=pi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ju(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ju(t,e),typeof i!="function"&&(Vi===null?Vi=new Set([this]):Vi.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Th(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new ey;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=py.bind(null,t,e,n),e.then(t,t))}function bh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ah(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=pi(-1,1),e.tag=2,Gi(n,e,1))),n.lanes|=1),t)}var ty=yi.ReactCurrentOwner,en=!1;function Wt(t,e,n,i){e.child=t===null?Zg(e,null,n,i):Po(e,t.child,n,i)}function Ch(t,e,n,i,r){n=n.render;var o=e.ref;return Eo(e,r),i=sf(t,e,n,i,o,r),n=af(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,_i(t,e,r)):(st&&n&&Yd(e),e.flags|=1,Wt(t,e,i,r),e.child)}function Rh(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!vf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,E0(t,e,o,i,r)):(t=sl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:As,n(s,i)&&t.ref===e.ref)return _i(t,e,r)}return e.flags|=1,t=ji(o,i),t.ref=e.ref,t.return=e,e.child=t}function E0(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(As(o,i)&&t.ref===e.ref)if(en=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(en=!0);else return e.lanes=t.lanes,_i(t,e,r)}return ed(t,e,n,i,r)}function w0(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},et(mo,pn),pn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,et(mo,pn),pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,et(mo,pn),pn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,et(mo,pn),pn|=i;return Wt(t,e,r,n),e.child}function T0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ed(t,e,n,i,r){var o=nn(n)?Lr:Ht.current;return o=Co(e,o),Eo(e,r),n=sf(t,e,n,i,o,r),i=af(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,_i(t,e,r)):(st&&i&&Yd(e),e.flags|=1,Wt(t,e,n,r),e.child)}function Ph(t,e,n,i,r){if(nn(n)){var o=!0;_l(e)}else o=!1;if(Eo(e,r),e.stateNode===null)il(t,e),y0(e,n,i),Qu(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Rn(c):(c=nn(n)?Lr:Ht.current,c=Co(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==c)&&wh(e,s,i,c),Pi=!1;var h=e.memoizedState;s.state=h,El(e,i,s,r),l=e.memoizedState,a!==i||h!==l||tn.current||Pi?(typeof d=="function"&&(Zu(e,n,d,i),l=e.memoizedState),(a=Pi||Eh(e,n,a,i,h,l,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=c,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,Jg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Nn(e.type,a),s.props=c,f=e.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Rn(l):(l=nn(n)?Lr:Ht.current,l=Co(e,l));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||h!==l)&&wh(e,s,i,l),Pi=!1,h=e.memoizedState,s.state=h,El(e,i,s,r);var _=e.memoizedState;a!==f||h!==_||tn.current||Pi?(typeof v=="function"&&(Zu(e,n,v,i),_=e.memoizedState),(c=Pi||Eh(e,n,c,i,h,_,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,_,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,_,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),s.props=i,s.state=_,s.context=l,i=c):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return td(t,e,n,i,o,r)}function td(t,e,n,i,r,o){T0(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&mh(e,n,!1),_i(t,e,o);i=e.stateNode,ty.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=Po(e,t.child,null,o),e.child=Po(e,null,a,o)):Wt(t,e,a,o),e.memoizedState=i.state,r&&mh(e,n,!0),e.child}function b0(t){var e=t.stateNode;e.pendingContext?ph(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ph(t,e.context,!1),tf(t,e.containerInfo)}function Lh(t,e,n,i,r){return Ro(),qd(r),e.flags|=256,Wt(t,e,n,i),e.child}var nd={dehydrated:null,treeContext:null,retryLane:0};function id(t){return{baseLanes:t,cachePool:null,transitions:null}}function A0(t,e,n){var i=e.pendingProps,r=lt.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),et(lt,r&1),t===null)return qu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=ql(s,i,0,null),t=br(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=id(n),e.memoizedState=nd,t):uf(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return ny(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ji(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=ji(a,o):(o=br(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?id(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=nd,i}return o=t.child,t=o.sibling,i=ji(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function uf(t,e){return e=ql({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ha(t,e,n,i){return i!==null&&qd(i),Po(e,t.child,null,n),t=uf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ny(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=Dc(Error(ie(422))),ha(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=ql({mode:"visible",children:i.children},r,0,null),o=br(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Po(e,t.child,null,s),e.child.memoizedState=id(s),e.memoizedState=nd,o);if(!(e.mode&1))return ha(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(ie(419)),i=Dc(o,i,void 0),ha(t,e,s,i)}if(a=(s&t.childLanes)!==0,en||a){if(i=At,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,vi(t,r),Hn(i,t,r,-1))}return gf(),i=Dc(Error(ie(421))),ha(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=my.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,mn=Hi(r.nextSibling),gn=e,st=!0,kn=null,t!==null&&(wn[Tn++]=ui,wn[Tn++]=di,wn[Tn++]=Dr,ui=t.id,di=t.overflow,Dr=e),e=uf(e,i.children),e.flags|=4096,e)}function Dh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ku(t.return,e,n)}function Ic(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function C0(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(Wt(t,e,i.children,n),i=lt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dh(t,n,e);else if(t.tag===19)Dh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(et(lt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&wl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ic(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&wl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ic(e,!0,n,null,o);break;case"together":Ic(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function il(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function _i(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ur|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=ji(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ji(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function iy(t,e,n){switch(e.tag){case 3:b0(e),Ro();break;case 5:e0(e);break;case 1:nn(e.type)&&_l(e);break;case 4:tf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;et(Sl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(et(lt,lt.current&1),e.flags|=128,null):n&e.child.childLanes?A0(t,e,n):(et(lt,lt.current&1),t=_i(t,e,n),t!==null?t.sibling:null);et(lt,lt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return C0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),et(lt,lt.current),i)break;return null;case 22:case 23:return e.lanes=0,w0(t,e,n)}return _i(t,e,n)}var R0,rd,P0,L0;R0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rd=function(){};P0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Er(Zn.current);var o=null;switch(n){case"input":r=bu(t,r),i=bu(t,i),o=[];break;case"select":r=ut({},r,{value:void 0}),i=ut({},i,{value:void 0}),o=[];break;case"textarea":r=Ru(t,r),i=Ru(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=gl)}Lu(n,i);var s;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ys.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ys.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&tt("scroll",t),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};L0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Zo(t,e){if(!st)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function ry(t,e,n){var i=e.pendingProps;switch($d(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(e),null;case 1:return nn(e.type)&&vl(),Ft(e),null;case 3:return i=e.stateNode,Lo(),it(tn),it(Ht),rf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(da(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,kn!==null&&(fd(kn),kn=null))),rd(t,e),Ft(e),null;case 5:nf(e);var r=Er(Ds.current);if(n=e.type,t!==null&&e.stateNode!=null)P0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Ft(e),null}if(t=Er(Zn.current),da(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[$n]=e,i[Ps]=o,t=(e.mode&1)!==0,n){case"dialog":tt("cancel",i),tt("close",i);break;case"iframe":case"object":case"embed":tt("load",i);break;case"video":case"audio":for(r=0;r<cs.length;r++)tt(cs[r],i);break;case"source":tt("error",i);break;case"img":case"image":case"link":tt("error",i),tt("load",i);break;case"details":tt("toggle",i);break;case"input":Hf(i,o),tt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},tt("invalid",i);break;case"textarea":Vf(i,o),tt("invalid",i)}Lu(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&ua(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ua(i.textContent,a,t),r=["children",""+a]):ys.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&tt("scroll",i)}switch(n){case"input":na(i),Gf(i,o,!0);break;case"textarea":na(i),Wf(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=gl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=og(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[$n]=e,t[Ps]=i,R0(t,e,!1,!1),e.stateNode=t;e:{switch(s=Du(n,i),n){case"dialog":tt("cancel",t),tt("close",t),r=i;break;case"iframe":case"object":case"embed":tt("load",t),r=i;break;case"video":case"audio":for(r=0;r<cs.length;r++)tt(cs[r],t);r=i;break;case"source":tt("error",t),r=i;break;case"img":case"image":case"link":tt("error",t),tt("load",t),r=i;break;case"details":tt("toggle",t),r=i;break;case"input":Hf(t,i),r=bu(t,i),tt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ut({},i,{value:void 0}),tt("invalid",t);break;case"textarea":Vf(t,i),r=Ru(t,i),tt("invalid",t);break;default:r=i}Lu(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?lg(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&sg(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ss(t,l):typeof l=="number"&&Ss(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ys.hasOwnProperty(o)?l!=null&&o==="onScroll"&&tt("scroll",t):l!=null&&Id(t,o,l,s))}switch(n){case"input":na(t),Gf(t,i,!1);break;case"textarea":na(t),Wf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+qi(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?xo(t,!!i.multiple,o,!1):i.defaultValue!=null&&xo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=gl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ft(e),null;case 6:if(t&&e.stateNode!=null)L0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=Er(Ds.current),Er(Zn.current),da(e)){if(i=e.stateNode,n=e.memoizedProps,i[$n]=e,(o=i.nodeValue!==n)&&(t=gn,t!==null))switch(t.tag){case 3:ua(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ua(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[$n]=e,e.stateNode=i}return Ft(e),null;case 13:if(it(lt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(st&&mn!==null&&e.mode&1&&!(e.flags&128))qg(),Ro(),e.flags|=98560,o=!1;else if(o=da(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(ie(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(ie(317));o[$n]=e}else Ro(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ft(e),o=!1}else kn!==null&&(fd(kn),kn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||lt.current&1?St===0&&(St=3):gf())),e.updateQueue!==null&&(e.flags|=4),Ft(e),null);case 4:return Lo(),rd(t,e),t===null&&Cs(e.stateNode.containerInfo),Ft(e),null;case 10:return Qd(e.type._context),Ft(e),null;case 17:return nn(e.type)&&vl(),Ft(e),null;case 19:if(it(lt),o=e.memoizedState,o===null)return Ft(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)Zo(o,!1);else{if(St!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=wl(t),s!==null){for(e.flags|=128,Zo(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return et(lt,lt.current&1|2),e.child}t=t.sibling}o.tail!==null&&pt()>Io&&(e.flags|=128,i=!0,Zo(o,!1),e.lanes=4194304)}else{if(!i)if(t=wl(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Zo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!st)return Ft(e),null}else 2*pt()-o.renderingStartTime>Io&&n!==1073741824&&(e.flags|=128,i=!0,Zo(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=pt(),e.sibling=null,n=lt.current,et(lt,i?n&1|2:n&1),e):(Ft(e),null);case 22:case 23:return mf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?pn&1073741824&&(Ft(e),e.subtreeFlags&6&&(e.flags|=8192)):Ft(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function oy(t,e){switch($d(e),e.tag){case 1:return nn(e.type)&&vl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Lo(),it(tn),it(Ht),rf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return nf(e),null;case 13:if(it(lt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));Ro()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return it(lt),null;case 4:return Lo(),null;case 10:return Qd(e.type._context),null;case 22:case 23:return mf(),null;case 24:return null;default:return null}}var pa=!1,Bt=!1,sy=typeof WeakSet=="function"?WeakSet:Set,pe=null;function po(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){dt(t,e,i)}else n.current=null}function od(t,e,n){try{n()}catch(i){dt(t,e,i)}}var Ih=!1;function ay(t,e){if(Gu=hl,t=Fg(),Xd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var v;f!==n||r!==0&&f.nodeType!==3||(a=s+r),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(v=f.firstChild)!==null;)h=f,f=v;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=s),h===o&&++d===i&&(l=s),(v=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vu={focusedElem:t,selectionRange:n},hl=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,p=_.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:Nn(e.type,y),p);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(x){dt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return _=Ih,Ih=!1,_}function gs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&od(e,n,o)}r=r.next}while(r!==i)}}function Yl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function sd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function D0(t){var e=t.alternate;e!==null&&(t.alternate=null,D0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$n],delete e[Ps],delete e[Xu],delete e[Vx],delete e[Wx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function I0(t){return t.tag===5||t.tag===3||t.tag===4}function Uh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||I0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ad(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=gl));else if(i!==4&&(t=t.child,t!==null))for(ad(t,e,n),t=t.sibling;t!==null;)ad(t,e,n),t=t.sibling}function ld(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ld(t,e,n),t=t.sibling;t!==null;)ld(t,e,n),t=t.sibling}var Pt=null,Fn=!1;function Mi(t,e,n){for(n=n.child;n!==null;)U0(t,e,n),n=n.sibling}function U0(t,e,n){if(Kn&&typeof Kn.onCommitFiberUnmount=="function")try{Kn.onCommitFiberUnmount(zl,n)}catch{}switch(n.tag){case 5:Bt||po(n,e);case 6:var i=Pt,r=Fn;Pt=null,Mi(t,e,n),Pt=i,Fn=r,Pt!==null&&(Fn?(t=Pt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Pt.removeChild(n.stateNode));break;case 18:Pt!==null&&(Fn?(t=Pt,n=n.stateNode,t.nodeType===8?bc(t.parentNode,n):t.nodeType===1&&bc(t,n),Ts(t)):bc(Pt,n.stateNode));break;case 4:i=Pt,r=Fn,Pt=n.stateNode.containerInfo,Fn=!0,Mi(t,e,n),Pt=i,Fn=r;break;case 0:case 11:case 14:case 15:if(!Bt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&od(n,e,s),r=r.next}while(r!==i)}Mi(t,e,n);break;case 1:if(!Bt&&(po(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){dt(n,e,a)}Mi(t,e,n);break;case 21:Mi(t,e,n);break;case 22:n.mode&1?(Bt=(i=Bt)||n.memoizedState!==null,Mi(t,e,n),Bt=i):Mi(t,e,n);break;default:Mi(t,e,n)}}function Nh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new sy),e.forEach(function(i){var r=gy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Ln(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Pt=a.stateNode,Fn=!1;break e;case 3:Pt=a.stateNode.containerInfo,Fn=!0;break e;case 4:Pt=a.stateNode.containerInfo,Fn=!0;break e}a=a.return}if(Pt===null)throw Error(ie(160));U0(o,s,r),Pt=null,Fn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){dt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)N0(e,t),e=e.sibling}function N0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ln(e,t),Wn(t),i&4){try{gs(3,t,t.return),Yl(3,t)}catch(y){dt(t,t.return,y)}try{gs(5,t,t.return)}catch(y){dt(t,t.return,y)}}break;case 1:Ln(e,t),Wn(t),i&512&&n!==null&&po(n,n.return);break;case 5:if(Ln(e,t),Wn(t),i&512&&n!==null&&po(n,n.return),t.flags&32){var r=t.stateNode;try{Ss(r,"")}catch(y){dt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&ig(r,o),Du(a,s);var c=Du(a,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d==="style"?lg(r,f):d==="dangerouslySetInnerHTML"?sg(r,f):d==="children"?Ss(r,f):Id(r,d,f,c)}switch(a){case"input":Au(r,o);break;case"textarea":rg(r,o);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?xo(r,!!o.multiple,v,!1):h!==!!o.multiple&&(o.defaultValue!=null?xo(r,!!o.multiple,o.defaultValue,!0):xo(r,!!o.multiple,o.multiple?[]:"",!1))}r[Ps]=o}catch(y){dt(t,t.return,y)}}break;case 6:if(Ln(e,t),Wn(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(y){dt(t,t.return,y)}}break;case 3:if(Ln(e,t),Wn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ts(e.containerInfo)}catch(y){dt(t,t.return,y)}break;case 4:Ln(e,t),Wn(t);break;case 13:Ln(e,t),Wn(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(hf=pt())),i&4&&Nh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Bt=(c=Bt)||d,Ln(e,t),Bt=c):Ln(e,t),Wn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(pe=t,d=t.child;d!==null;){for(f=pe=d;pe!==null;){switch(h=pe,v=h.child,h.tag){case 0:case 11:case 14:case 15:gs(4,h,h.return);break;case 1:po(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){dt(i,n,y)}}break;case 5:po(h,h.return);break;case 22:if(h.memoizedState!==null){kh(f);continue}}v!==null?(v.return=h,pe=v):kh(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ag("display",s))}catch(y){dt(t,t.return,y)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){dt(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ln(e,t),Wn(t),i&4&&Nh(t);break;case 21:break;default:Ln(e,t),Wn(t)}}function Wn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(I0(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ss(r,""),i.flags&=-33);var o=Uh(t);ld(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=Uh(t);ad(t,a,s);break;default:throw Error(ie(161))}}catch(l){dt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ly(t,e,n){pe=t,F0(t)}function F0(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||pa;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Bt;a=pa;var c=Bt;if(pa=s,(Bt=l)&&!c)for(pe=r;pe!==null;)s=pe,l=s.child,s.tag===22&&s.memoizedState!==null?Oh(r):l!==null?(l.return=s,pe=l):Oh(r);for(;o!==null;)pe=o,F0(o),o=o.sibling;pe=r,pa=a,Bt=c}Fh(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,pe=o):Fh(t)}}function Fh(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Bt||Yl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Bt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Nn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&yh(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}yh(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Ts(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}Bt||e.flags&512&&sd(e)}catch(h){dt(e,e.return,h)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function kh(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function Oh(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Yl(4,e)}catch(l){dt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){dt(e,r,l)}}var o=e.return;try{sd(e)}catch(l){dt(e,o,l)}break;case 5:var s=e.return;try{sd(e)}catch(l){dt(e,s,l)}}}catch(l){dt(e,e.return,l)}if(e===t){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var cy=Math.ceil,Al=yi.ReactCurrentDispatcher,df=yi.ReactCurrentOwner,Cn=yi.ReactCurrentBatchConfig,Ye=0,At=null,vt=null,Dt=0,pn=0,mo=er(0),St=0,Fs=null,Ur=0,$l=0,ff=0,vs=null,Qt=null,hf=0,Io=1/0,oi=null,Cl=!1,cd=null,Vi=null,ma=!1,Ni=null,Rl=0,_s=0,ud=null,rl=-1,ol=0;function Xt(){return Ye&6?pt():rl!==-1?rl:rl=pt()}function Wi(t){return t.mode&1?Ye&2&&Dt!==0?Dt&-Dt:Xx.transition!==null?(ol===0&&(ol=yg()),ol):(t=Ke,t!==0||(t=window.event,t=t===void 0?16:Ag(t.type)),t):1}function Hn(t,e,n,i){if(50<_s)throw _s=0,ud=null,Error(ie(185));Hs(t,n,i),(!(Ye&2)||t!==At)&&(t===At&&(!(Ye&2)&&($l|=n),St===4&&Di(t,Dt)),rn(t,i),n===1&&Ye===0&&!(e.mode&1)&&(Io=pt()+500,Wl&&tr()))}function rn(t,e){var n=t.callbackNode;X_(t,e);var i=fl(t,t===At?Dt:0);if(i===0)n!==null&&Yf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Yf(n),e===1)t.tag===0?jx(zh.bind(null,t)):Xg(zh.bind(null,t)),Hx(function(){!(Ye&6)&&tr()}),n=null;else{switch(Sg(i)){case 1:n=Od;break;case 4:n=_g;break;case 16:n=dl;break;case 536870912:n=xg;break;default:n=dl}n=W0(n,k0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function k0(t,e){if(rl=-1,ol=0,Ye&6)throw Error(ie(327));var n=t.callbackNode;if(wo()&&t.callbackNode!==n)return null;var i=fl(t,t===At?Dt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Pl(t,i);else{e=i;var r=Ye;Ye|=2;var o=z0();(At!==t||Dt!==e)&&(oi=null,Io=pt()+500,Tr(t,e));do try{fy();break}catch(a){O0(t,a)}while(!0);Zd(),Al.current=o,Ye=r,vt!==null?e=0:(At=null,Dt=0,e=St)}if(e!==0){if(e===2&&(r=ku(t),r!==0&&(i=r,e=dd(t,r))),e===1)throw n=Fs,Tr(t,0),Di(t,i),rn(t,pt()),n;if(e===6)Di(t,i);else{if(r=t.current.alternate,!(i&30)&&!uy(r)&&(e=Pl(t,i),e===2&&(o=ku(t),o!==0&&(i=o,e=dd(t,o))),e===1))throw n=Fs,Tr(t,0),Di(t,i),rn(t,pt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:hr(t,Qt,oi);break;case 3:if(Di(t,i),(i&130023424)===i&&(e=hf+500-pt(),10<e)){if(fl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Xt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ju(hr.bind(null,t,Qt,oi),e);break}hr(t,Qt,oi);break;case 4:if(Di(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-Bn(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*cy(i/1960))-i,10<i){t.timeoutHandle=ju(hr.bind(null,t,Qt,oi),i);break}hr(t,Qt,oi);break;case 5:hr(t,Qt,oi);break;default:throw Error(ie(329))}}}return rn(t,pt()),t.callbackNode===n?k0.bind(null,t):null}function dd(t,e){var n=vs;return t.current.memoizedState.isDehydrated&&(Tr(t,e).flags|=256),t=Pl(t,e),t!==2&&(e=Qt,Qt=n,e!==null&&fd(e)),t}function fd(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function uy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!Gn(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Di(t,e){for(e&=~ff,e&=~$l,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bn(e),i=1<<n;t[n]=-1,e&=~i}}function zh(t){if(Ye&6)throw Error(ie(327));wo();var e=fl(t,0);if(!(e&1))return rn(t,pt()),null;var n=Pl(t,e);if(t.tag!==0&&n===2){var i=ku(t);i!==0&&(e=i,n=dd(t,i))}if(n===1)throw n=Fs,Tr(t,0),Di(t,e),rn(t,pt()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,hr(t,Qt,oi),rn(t,pt()),null}function pf(t,e){var n=Ye;Ye|=1;try{return t(e)}finally{Ye=n,Ye===0&&(Io=pt()+500,Wl&&tr())}}function Nr(t){Ni!==null&&Ni.tag===0&&!(Ye&6)&&wo();var e=Ye;Ye|=1;var n=Cn.transition,i=Ke;try{if(Cn.transition=null,Ke=1,t)return t()}finally{Ke=i,Cn.transition=n,Ye=e,!(Ye&6)&&tr()}}function mf(){pn=mo.current,it(mo)}function Tr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Bx(n)),vt!==null)for(n=vt.return;n!==null;){var i=n;switch($d(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&vl();break;case 3:Lo(),it(tn),it(Ht),rf();break;case 5:nf(i);break;case 4:Lo();break;case 13:it(lt);break;case 19:it(lt);break;case 10:Qd(i.type._context);break;case 22:case 23:mf()}n=n.return}if(At=t,vt=t=ji(t.current,null),Dt=pn=e,St=0,Fs=null,ff=$l=Ur=0,Qt=vs=null,Mr!==null){for(e=0;e<Mr.length;e++)if(n=Mr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}Mr=null}return t}function O0(t,e){do{var n=vt;try{if(Zd(),tl.current=bl,Tl){for(var i=ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Tl=!1}if(Ir=0,bt=yt=ct=null,ms=!1,Is=0,df.current=null,n===null||n.return===null){St=1,Fs=e,vt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Dt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=bh(s);if(v!==null){v.flags&=-257,Ah(v,s,a,o,e),v.mode&1&&Th(o,c,e),e=v,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){Th(o,c,e),gf();break e}l=Error(ie(426))}}else if(st&&a.mode&1){var p=bh(s);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Ah(p,s,a,o,e),qd(Do(l,a));break e}}o=l=Do(l,a),St!==4&&(St=2),vs===null?vs=[o]:vs.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var u=S0(o,l,e);xh(o,u);break e;case 1:a=l;var g=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Vi===null||!Vi.has(m)))){o.flags|=65536,e&=-e,o.lanes|=e;var x=M0(o,a,e);xh(o,x);break e}}o=o.return}while(o!==null)}H0(n)}catch(A){e=A,vt===n&&n!==null&&(vt=n=n.return);continue}break}while(!0)}function z0(){var t=Al.current;return Al.current=bl,t===null?bl:t}function gf(){(St===0||St===3||St===2)&&(St=4),At===null||!(Ur&268435455)&&!($l&268435455)||Di(At,Dt)}function Pl(t,e){var n=Ye;Ye|=2;var i=z0();(At!==t||Dt!==e)&&(oi=null,Tr(t,e));do try{dy();break}catch(r){O0(t,r)}while(!0);if(Zd(),Ye=n,Al.current=i,vt!==null)throw Error(ie(261));return At=null,Dt=0,St}function dy(){for(;vt!==null;)B0(vt)}function fy(){for(;vt!==null&&!k_();)B0(vt)}function B0(t){var e=V0(t.alternate,t,pn);t.memoizedProps=t.pendingProps,e===null?H0(t):vt=e,df.current=null}function H0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=oy(n,e),n!==null){n.flags&=32767,vt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{St=6,vt=null;return}}else if(n=ry(n,e,pn),n!==null){vt=n;return}if(e=e.sibling,e!==null){vt=e;return}vt=e=t}while(e!==null);St===0&&(St=5)}function hr(t,e,n){var i=Ke,r=Cn.transition;try{Cn.transition=null,Ke=1,hy(t,e,n,i)}finally{Cn.transition=r,Ke=i}return null}function hy(t,e,n,i){do wo();while(Ni!==null);if(Ye&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(Y_(t,o),t===At&&(vt=At=null,Dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ma||(ma=!0,W0(dl,function(){return wo(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Cn.transition,Cn.transition=null;var s=Ke;Ke=1;var a=Ye;Ye|=4,df.current=null,ay(t,n),N0(n,t),Ix(Vu),hl=!!Gu,Vu=Gu=null,t.current=n,ly(n),O_(),Ye=a,Ke=s,Cn.transition=o}else t.current=n;if(ma&&(ma=!1,Ni=t,Rl=r),o=t.pendingLanes,o===0&&(Vi=null),H_(n.stateNode),rn(t,pt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Cl)throw Cl=!1,t=cd,cd=null,t;return Rl&1&&t.tag!==0&&wo(),o=t.pendingLanes,o&1?t===ud?_s++:(_s=0,ud=t):_s=0,tr(),null}function wo(){if(Ni!==null){var t=Sg(Rl),e=Cn.transition,n=Ke;try{if(Cn.transition=null,Ke=16>t?16:t,Ni===null)var i=!1;else{if(t=Ni,Ni=null,Rl=0,Ye&6)throw Error(ie(331));var r=Ye;for(Ye|=4,pe=t.current;pe!==null;){var o=pe,s=o.child;if(pe.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(pe=c;pe!==null;){var d=pe;switch(d.tag){case 0:case 11:case 15:gs(8,d,o)}var f=d.child;if(f!==null)f.return=d,pe=f;else for(;pe!==null;){d=pe;var h=d.sibling,v=d.return;if(D0(d),d===c){pe=null;break}if(h!==null){h.return=v,pe=h;break}pe=v}}}var _=o.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var p=y.sibling;y.sibling=null,y=p}while(y!==null)}}pe=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,pe=s;else e:for(;pe!==null;){if(o=pe,o.flags&2048)switch(o.tag){case 0:case 11:case 15:gs(9,o,o.return)}var u=o.sibling;if(u!==null){u.return=o.return,pe=u;break e}pe=o.return}}var g=t.current;for(pe=g;pe!==null;){s=pe;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,pe=m;else e:for(s=g;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Yl(9,a)}}catch(A){dt(a,a.return,A)}if(a===s){pe=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,pe=x;break e}pe=a.return}}if(Ye=r,tr(),Kn&&typeof Kn.onPostCommitFiberRoot=="function")try{Kn.onPostCommitFiberRoot(zl,t)}catch{}i=!0}return i}finally{Ke=n,Cn.transition=e}}return!1}function Bh(t,e,n){e=Do(n,e),e=S0(t,e,1),t=Gi(t,e,1),e=Xt(),t!==null&&(Hs(t,1,e),rn(t,e))}function dt(t,e,n){if(t.tag===3)Bh(t,t,n);else for(;e!==null;){if(e.tag===3){Bh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Vi===null||!Vi.has(i))){t=Do(n,t),t=M0(e,t,1),e=Gi(e,t,1),t=Xt(),e!==null&&(Hs(e,1,t),rn(e,t));break}}e=e.return}}function py(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Xt(),t.pingedLanes|=t.suspendedLanes&n,At===t&&(Dt&n)===n&&(St===4||St===3&&(Dt&130023424)===Dt&&500>pt()-hf?Tr(t,0):ff|=n),rn(t,e)}function G0(t,e){e===0&&(t.mode&1?(e=oa,oa<<=1,!(oa&130023424)&&(oa=4194304)):e=1);var n=Xt();t=vi(t,e),t!==null&&(Hs(t,e,n),rn(t,n))}function my(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),G0(t,n)}function gy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),G0(t,n)}var V0;V0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tn.current)en=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return en=!1,iy(t,e,n);en=!!(t.flags&131072)}else en=!1,st&&e.flags&1048576&&Yg(e,yl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;il(t,e),t=e.pendingProps;var r=Co(e,Ht.current);Eo(e,n),r=sf(null,e,i,t,r,n);var o=af();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nn(i)?(o=!0,_l(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ef(e),r.updater=Xl,e.stateNode=r,r._reactInternals=e,Qu(e,i,t,n),e=td(null,e,i,!0,o,n)):(e.tag=0,st&&o&&Yd(e),Wt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(il(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=_y(i),t=Nn(i,t),r){case 0:e=ed(null,e,i,t,n);break e;case 1:e=Ph(null,e,i,t,n);break e;case 11:e=Ch(null,e,i,t,n);break e;case 14:e=Rh(null,e,i,Nn(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),ed(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Ph(t,e,i,r,n);case 3:e:{if(b0(e),t===null)throw Error(ie(387));i=e.pendingProps,o=e.memoizedState,r=o.element,Jg(t,e),El(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=Do(Error(ie(423)),e),e=Lh(t,e,i,n,r);break e}else if(i!==r){r=Do(Error(ie(424)),e),e=Lh(t,e,i,n,r);break e}else for(mn=Hi(e.stateNode.containerInfo.firstChild),gn=e,st=!0,kn=null,n=Zg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ro(),i===r){e=_i(t,e,n);break e}Wt(t,e,i,n)}e=e.child}return e;case 5:return e0(e),t===null&&qu(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,Wu(i,r)?s=null:o!==null&&Wu(i,o)&&(e.flags|=32),T0(t,e),Wt(t,e,s,n),e.child;case 6:return t===null&&qu(e),null;case 13:return A0(t,e,n);case 4:return tf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Po(e,null,i,n):Wt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Ch(t,e,i,r,n);case 7:return Wt(t,e,e.pendingProps,n),e.child;case 8:return Wt(t,e,e.pendingProps.children,n),e.child;case 12:return Wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,et(Sl,i._currentValue),i._currentValue=s,o!==null)if(Gn(o.value,s)){if(o.children===r.children&&!tn.current){e=_i(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=pi(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ku(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(ie(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ku(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Wt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Eo(e,n),r=Rn(r),i=i(r),e.flags|=1,Wt(t,e,i,n),e.child;case 14:return i=e.type,r=Nn(i,e.pendingProps),r=Nn(i.type,r),Rh(t,e,i,r,n);case 15:return E0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),il(t,e),e.tag=1,nn(i)?(t=!0,_l(e)):t=!1,Eo(e,n),y0(e,i,r),Qu(e,i,r,n),td(null,e,i,!0,t,n);case 19:return C0(t,e,n);case 22:return w0(t,e,n)}throw Error(ie(156,e.tag))};function W0(t,e){return vg(t,e)}function vy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(t,e,n,i){return new vy(t,e,n,i)}function vf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _y(t){if(typeof t=="function")return vf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Nd)return 11;if(t===Fd)return 14}return 2}function ji(t,e){var n=t.alternate;return n===null?(n=An(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function sl(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")vf(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case ro:return br(n.children,r,o,e);case Ud:s=8,r|=8;break;case Mu:return t=An(12,n,e,r|2),t.elementType=Mu,t.lanes=o,t;case Eu:return t=An(13,n,e,r),t.elementType=Eu,t.lanes=o,t;case wu:return t=An(19,n,e,r),t.elementType=wu,t.lanes=o,t;case eg:return ql(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Qm:s=10;break e;case Jm:s=9;break e;case Nd:s=11;break e;case Fd:s=14;break e;case Ri:s=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=An(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function br(t,e,n,i){return t=An(7,t,i,e),t.lanes=n,t}function ql(t,e,n,i){return t=An(22,t,i,e),t.elementType=eg,t.lanes=n,t.stateNode={isHidden:!1},t}function Uc(t,e,n){return t=An(6,t,null,e),t.lanes=n,t}function Nc(t,e,n){return e=An(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function xy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mc(0),this.expirationTimes=mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function _f(t,e,n,i,r,o,s,a,l){return t=new xy(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=An(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ef(o),t}function yy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:io,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function j0(t){if(!t)return Ki;t=t._reactInternals;e:{if(Or(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(nn(n))return jg(t,n,e)}return e}function X0(t,e,n,i,r,o,s,a,l){return t=_f(n,i,!0,t,r,o,s,a,l),t.context=j0(null),n=t.current,i=Xt(),r=Wi(n),o=pi(i,r),o.callback=e??null,Gi(n,o,r),t.current.lanes=r,Hs(t,r,i),rn(t,i),t}function Kl(t,e,n,i){var r=e.current,o=Xt(),s=Wi(r);return n=j0(n),e.context===null?e.context=n:e.pendingContext=n,e=pi(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Gi(r,e,s),t!==null&&(Hn(t,r,s,o),el(t,r,s)),s}function Ll(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Hh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function xf(t,e){Hh(t,e),(t=t.alternate)&&Hh(t,e)}function Sy(){return null}var Y0=typeof reportError=="function"?reportError:function(t){console.error(t)};function yf(t){this._internalRoot=t}Zl.prototype.render=yf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));Kl(t,e,null,null)};Zl.prototype.unmount=yf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Nr(function(){Kl(null,t,null,null)}),e[gi]=null}};function Zl(t){this._internalRoot=t}Zl.prototype.unstable_scheduleHydration=function(t){if(t){var e=wg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Li.length&&e!==0&&e<Li[n].priority;n++);Li.splice(n,0,t),n===0&&bg(t)}};function Sf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ql(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Gh(){}function My(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var c=Ll(s);o.call(c)}}var s=X0(e,i,t,0,null,!1,!1,"",Gh);return t._reactRootContainer=s,t[gi]=s.current,Cs(t.nodeType===8?t.parentNode:t),Nr(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Ll(l);a.call(c)}}var l=_f(t,0,!1,null,null,!1,!1,"",Gh);return t._reactRootContainer=l,t[gi]=l.current,Cs(t.nodeType===8?t.parentNode:t),Nr(function(){Kl(e,l,n,i)}),l}function Jl(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=Ll(s);a.call(l)}}Kl(e,s,t,r)}else s=My(n,e,t,r,i);return Ll(s)}Mg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ls(e.pendingLanes);n!==0&&(zd(e,n|1),rn(e,pt()),!(Ye&6)&&(Io=pt()+500,tr()))}break;case 13:Nr(function(){var i=vi(t,1);if(i!==null){var r=Xt();Hn(i,t,1,r)}}),xf(t,1)}};Bd=function(t){if(t.tag===13){var e=vi(t,134217728);if(e!==null){var n=Xt();Hn(e,t,134217728,n)}xf(t,134217728)}};Eg=function(t){if(t.tag===13){var e=Wi(t),n=vi(t,e);if(n!==null){var i=Xt();Hn(n,t,e,i)}xf(t,e)}};wg=function(){return Ke};Tg=function(t,e){var n=Ke;try{return Ke=t,e()}finally{Ke=n}};Uu=function(t,e,n){switch(e){case"input":if(Au(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Vl(i);if(!r)throw Error(ie(90));ng(i),Au(i,r)}}}break;case"textarea":rg(t,n);break;case"select":e=n.value,e!=null&&xo(t,!!n.multiple,e,!1)}};dg=pf;fg=Nr;var Ey={usingClientEntryPoint:!1,Events:[Vs,lo,Vl,cg,ug,pf]},Qo={findFiberByHostInstance:Sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wy={bundleType:Qo.bundleType,version:Qo.version,rendererPackageName:Qo.rendererPackageName,rendererConfig:Qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=mg(t),t===null?null:t.stateNode},findFiberByHostInstance:Qo.findFiberByHostInstance||Sy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ga=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ga.isDisabled&&ga.supportsFiber)try{zl=ga.inject(wy),Kn=ga}catch{}}xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ey;xn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sf(e))throw Error(ie(200));return yy(t,e,null,n)};xn.createRoot=function(t,e){if(!Sf(t))throw Error(ie(299));var n=!1,i="",r=Y0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=_f(t,1,!1,null,null,n,!1,i,r),t[gi]=e.current,Cs(t.nodeType===8?t.parentNode:t),new yf(e)};xn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=mg(e),t=t===null?null:t.stateNode,t};xn.flushSync=function(t){return Nr(t)};xn.hydrate=function(t,e,n){if(!Ql(e))throw Error(ie(200));return Jl(null,t,e,!0,n)};xn.hydrateRoot=function(t,e,n){if(!Sf(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=Y0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=X0(e,null,t,1,n??null,r,!1,o,s),t[gi]=e.current,Cs(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Zl(e)};xn.render=function(t,e,n){if(!Ql(e))throw Error(ie(200));return Jl(null,t,e,!1,n)};xn.unmountComponentAtNode=function(t){if(!Ql(t))throw Error(ie(40));return t._reactRootContainer?(Nr(function(){Jl(null,null,t,!1,function(){t._reactRootContainer=null,t[gi]=null})}),!0):!1};xn.unstable_batchedUpdates=pf;xn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ql(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return Jl(t,e,n,!1,i)};xn.version="18.3.1-next-f1338f8080-20240426";function $0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($0)}catch(t){console.error(t)}}$0(),$m.exports=xn;var Ty=$m.exports,Vh=Ty;yu.createRoot=Vh.createRoot,yu.hydrateRoot=Vh.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ks(){return ks=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ks.apply(this,arguments)}var Fi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Fi||(Fi={}));const Wh="popstate";function by(t){t===void 0&&(t={});function e(i,r){let{pathname:o,search:s,hash:a}=i.location;return hd("",{pathname:o,search:s,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:q0(r)}return Cy(e,n,null,t)}function _t(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Mf(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Ay(){return Math.random().toString(36).substr(2,8)}function jh(t,e){return{usr:t.state,key:t.key,idx:e}}function hd(t,e,n,i){return n===void 0&&(n=null),ks({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ho(e):e,{state:n,key:e&&e.key||i||Ay()})}function q0(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Ho(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function Cy(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:o=!1}=i,s=r.history,a=Fi.Pop,l=null,c=d();c==null&&(c=0,s.replaceState(ks({},s.state,{idx:c}),""));function d(){return(s.state||{idx:null}).idx}function f(){a=Fi.Pop;let p=d(),u=p==null?null:p-c;c=p,l&&l({action:a,location:y.location,delta:u})}function h(p,u){a=Fi.Push;let g=hd(y.location,p,u);c=d()+1;let m=jh(g,c),x=y.createHref(g);try{s.pushState(m,"",x)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;r.location.assign(x)}o&&l&&l({action:a,location:y.location,delta:1})}function v(p,u){a=Fi.Replace;let g=hd(y.location,p,u);c=d();let m=jh(g,c),x=y.createHref(g);s.replaceState(m,"",x),o&&l&&l({action:a,location:y.location,delta:0})}function _(p){let u=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof p=="string"?p:q0(p);return g=g.replace(/ $/,"%20"),_t(u,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,u)}let y={get action(){return a},get location(){return t(r,s)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Wh,f),l=p,()=>{r.removeEventListener(Wh,f),l=null}},createHref(p){return e(r,p)},createURL:_,encodeLocation(p){let u=_(p);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:h,replace:v,go(p){return s.go(p)}};return y}var Xh;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Xh||(Xh={}));function Ry(t,e,n){return n===void 0&&(n="/"),Py(t,e,n)}function Py(t,e,n,i){let r=typeof e=="string"?Ho(e):e,o=Q0(r.pathname||"/",n);if(o==null)return null;let s=K0(t);Ly(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let c=Vy(o);a=By(s[l],c)}return a}function K0(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(_t(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Ar([i,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(_t(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),K0(o.children,e,d,c)),!(o.path==null&&!o.index)&&e.push({path:c,score:Oy(c,o.index),routesMeta:d})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))r(o,s);else for(let l of Z0(o.path))r(o,s,l)}),e}function Z0(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),o=n.replace(/\?$/,"");if(i.length===0)return r?[o,""]:[o];let s=Z0(i.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),r&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Ly(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:zy(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const Dy=/^:[\w-]+$/,Iy=3,Uy=2,Ny=1,Fy=10,ky=-2,Yh=t=>t==="*";function Oy(t,e){let n=t.split("/"),i=n.length;return n.some(Yh)&&(i+=ky),e&&(i+=Uy),n.filter(r=>!Yh(r)).reduce((r,o)=>r+(Dy.test(o)?Iy:o===""?Ny:Fy),i)}function zy(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function By(t,e,n){let{routesMeta:i}=t,r={},o="/",s=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,d=o==="/"?e:e.slice(o.length)||"/",f=Hy({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),h=l.route;if(!f)return null;Object.assign(r,f.params),s.push({params:r,pathname:Ar([o,f.pathname]),pathnameBase:$y(Ar([o,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(o=Ar([o,f.pathnameBase]))}return s}function Hy(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=Gy(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let o=r[0],s=o.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,d,f)=>{let{paramName:h,isOptional:v}=d;if(h==="*"){let y=a[f]||"";s=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}const _=a[f];return v&&!_?c[h]=void 0:c[h]=(_||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:t}}function Gy(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Mf(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function Vy(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Mf(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Q0(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const Wy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jy=t=>Wy.test(t);function Xy(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Ho(t):t,o;if(n)if(jy(n))o=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),Mf(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?o=$h(n.substring(1),"/"):o=$h(n,e)}else o=e;return{pathname:o,search:qy(i),hash:Ky(r)}}function $h(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Fc(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Yy(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function J0(t,e){let n=Yy(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function ev(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Ho(t):(r=ks({},t),_t(!r.pathname||!r.pathname.includes("?"),Fc("?","pathname","search",r)),_t(!r.pathname||!r.pathname.includes("#"),Fc("#","pathname","hash",r)),_t(!r.search||!r.search.includes("#"),Fc("#","search","hash",r)));let o=t===""||r.pathname==="",s=o?"/":r.pathname,a;if(s==null)a=n;else{let f=e.length-1;if(!i&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),f-=1;r.pathname=h.join("/")}a=f>=0?e[f]:"/"}let l=Xy(r,a),c=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const Ar=t=>t.join("/").replace(/\/\/+/g,"/"),$y=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),qy=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Ky=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Zy(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const tv=["post","put","patch","delete"];new Set(tv);const Qy=["get",...tv];new Set(Qy);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Os(){return Os=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Os.apply(this,arguments)}const Ef=U.createContext(null),Jy=U.createContext(null),js=U.createContext(null),ec=U.createContext(null),zr=U.createContext({outlet:null,matches:[],isDataRoute:!1}),nv=U.createContext(null);function Xs(){return U.useContext(ec)!=null}function wf(){return Xs()||_t(!1),U.useContext(ec).location}function iv(t){U.useContext(js).static||U.useLayoutEffect(t)}function ln(){let{isDataRoute:t}=U.useContext(zr);return t?fS():eS()}function eS(){Xs()||_t(!1);let t=U.useContext(Ef),{basename:e,future:n,navigator:i}=U.useContext(js),{matches:r}=U.useContext(zr),{pathname:o}=wf(),s=JSON.stringify(J0(r,n.v7_relativeSplatPath)),a=U.useRef(!1);return iv(()=>{a.current=!0}),U.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){i.go(c);return}let f=ev(c,JSON.parse(s),o,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Ar([e,f.pathname])),(d.replace?i.replace:i.push)(f,d.state,d)},[e,i,s,o,t])}function tS(t,e){return nS(t,e)}function nS(t,e,n,i){Xs()||_t(!1);let{navigator:r}=U.useContext(js),{matches:o}=U.useContext(zr),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let c=wf(),d;if(e){var f;let p=typeof e=="string"?Ho(e):e;l==="/"||(f=p.pathname)!=null&&f.startsWith(l)||_t(!1),d=p}else d=c;let h=d.pathname||"/",v=h;if(l!=="/"){let p=l.replace(/^\//,"").split("/");v="/"+h.replace(/^\//,"").split("/").slice(p.length).join("/")}let _=Ry(t,{pathname:v}),y=aS(_&&_.map(p=>Object.assign({},p,{params:Object.assign({},a,p.params),pathname:Ar([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:Ar([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),o,n,i);return e&&y?U.createElement(ec.Provider,{value:{location:Os({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Fi.Pop}},y):y}function iS(){let t=dS(),e=Zy(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},e),n?U.createElement("pre",{style:r},n):null,null)}const rS=U.createElement(iS,null);class oS extends U.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?U.createElement(zr.Provider,{value:this.props.routeContext},U.createElement(nv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function sS(t){let{routeContext:e,match:n,children:i}=t,r=U.useContext(Ef);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),U.createElement(zr.Provider,{value:e},i)}function aS(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var o;if(!n)return null;if(n.errors)t=n.matches;else if((o=i)!=null&&o.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let d=s.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||_t(!1),s=s.slice(0,Math.min(s.length,d+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let d=0;d<s.length;d++){let f=s[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:h,errors:v}=n,_=f.route.loader&&h[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||_){l=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((d,f,h)=>{let v,_=!1,y=null,p=null;n&&(v=a&&f.route.id?a[f.route.id]:void 0,y=f.route.errorElement||rS,l&&(c<0&&h===0?(hS("route-fallback"),_=!0,p=null):c===h&&(_=!0,p=f.route.hydrateFallbackElement||null)));let u=e.concat(s.slice(0,h+1)),g=()=>{let m;return v?m=y:_?m=p:f.route.Component?m=U.createElement(f.route.Component,null):f.route.element?m=f.route.element:m=d,U.createElement(sS,{match:f,routeContext:{outlet:d,matches:u,isDataRoute:n!=null},children:m})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?U.createElement(oS,{location:n.location,revalidation:n.revalidation,component:y,error:v,children:g(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):g()},null)}var rv=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(rv||{}),ov=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(ov||{});function lS(t){let e=U.useContext(Ef);return e||_t(!1),e}function cS(t){let e=U.useContext(Jy);return e||_t(!1),e}function uS(t){let e=U.useContext(zr);return e||_t(!1),e}function sv(t){let e=uS(),n=e.matches[e.matches.length-1];return n.route.id||_t(!1),n.route.id}function dS(){var t;let e=U.useContext(nv),n=cS(),i=sv();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function fS(){let{router:t}=lS(rv.UseNavigateStable),e=sv(ov.UseNavigateStable),n=U.useRef(!1);return iv(()=>{n.current=!0}),U.useCallback(function(r,o){o===void 0&&(o={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Os({fromRouteId:e},o)))},[t,e])}const qh={};function hS(t,e,n){qh[t]||(qh[t]=!0)}function pS(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function mS(t){let{to:e,replace:n,state:i,relative:r}=t;Xs()||_t(!1);let{future:o,static:s}=U.useContext(js),{matches:a}=U.useContext(zr),{pathname:l}=wf(),c=ln(),d=ev(e,J0(a,o.v7_relativeSplatPath),l,r==="path"),f=JSON.stringify(d);return U.useEffect(()=>c(JSON.parse(f),{replace:n,state:i,relative:r}),[c,f,r,n,i]),null}function zt(t){_t(!1)}function gS(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Fi.Pop,navigator:o,static:s=!1,future:a}=t;Xs()&&_t(!1);let l=e.replace(/^\/*/,"/"),c=U.useMemo(()=>({basename:l,navigator:o,static:s,future:Os({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof i=="string"&&(i=Ho(i));let{pathname:d="/",search:f="",hash:h="",state:v=null,key:_="default"}=i,y=U.useMemo(()=>{let p=Q0(d,l);return p==null?null:{location:{pathname:p,search:f,hash:h,state:v,key:_},navigationType:r}},[l,d,f,h,v,_,r]);return y==null?null:U.createElement(js.Provider,{value:c},U.createElement(ec.Provider,{children:n,value:y}))}function vS(t){let{children:e,location:n}=t;return tS(pd(e),n)}new Promise(()=>{});function pd(t,e){e===void 0&&(e=[]);let n=[];return U.Children.forEach(t,(i,r)=>{if(!U.isValidElement(i))return;let o=[...e,r];if(i.type===U.Fragment){n.push.apply(n,pd(i.props.children,o));return}i.type!==zt&&_t(!1),!i.props.index||!i.props.children||_t(!1);let s={id:i.props.id||o.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(s.children=pd(i.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const _S="6";try{window.__reactRouterVersion=_S}catch{}const xS="startTransition",Kh=p_[xS];function yS(t){let{basename:e,children:n,future:i,window:r}=t,o=U.useRef();o.current==null&&(o.current=by({window:r,v5Compat:!0}));let s=o.current,[a,l]=U.useState({action:s.action,location:s.location}),{v7_startTransition:c}=i||{},d=U.useCallback(f=>{c&&Kh?Kh(()=>l(f)):l(f)},[l,c]);return U.useLayoutEffect(()=>s.listen(d),[s,d]),U.useEffect(()=>pS(i),[i]),U.createElement(gS,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s,future:i})}var Zh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Zh||(Zh={}));var Qh;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Qh||(Qh={}));const av=U.createContext(null),lv=["lock","welcome","gesture","voice","memories","compat","memgame","arcade","jigsaw","soundtrack","wordsearch","meter","ask","finale"];function SS({children:t}){const[e,n]=U.useState(()=>{const o=localStorage.getItem("rithvik_progress");return o?parseInt(o):0}),i=o=>{const s=Math.max(e,o+1);n(s),localStorage.setItem("rithvik_progress",String(s))},r=()=>{n(0),localStorage.removeItem("rithvik_progress")};return M.jsx(av.Provider,{value:{unlockedUpTo:e,unlock:i,resetProgress:r,LEVELS:lv},children:t})}function cn(){return U.useContext(av)}function MS(){const t=U.useRef(null),e=U.useRef(null),n=U.useRef([]),i=U.useRef({x:-100,y:-100}),r=U.useRef(null);return U.useEffect(()=>{const o=t.current,s=e.current,a=s.getContext("2d"),l=()=>{s.width=window.innerWidth,s.height=window.innerHeight};l(),window.addEventListener("resize",l);const c=y=>{i.current={x:y.clientX,y:y.clientY},o.style.left=y.clientX+"px",o.style.top=y.clientY+"px",Math.random()>.55&&v(y.clientX,y.clientY)},d=y=>{(y.target.tagName==="BUTTON"||y.target.closest("button")||y.target.tagName==="A"||y.target.dataset.hoverable)&&o.classList.add("hovering")},f=()=>o.classList.remove("hovering");document.addEventListener("mousemove",c),document.addEventListener("mouseover",d),document.addEventListener("mouseout",f);const h=["#F5C518","#FFD700","#E8527A","#FFF6C0","#2DBDB1"];function v(y,p){n.current.push({x:y,y:p,vx:(Math.random()-.5)*2.5,vy:(Math.random()-.5)*2.5-.5,r:Math.random()*3+1.5,color:h[Math.floor(Math.random()*h.length)],life:1,decay:Math.random()*.025+.015})}function _(){a.clearRect(0,0,s.width,s.height);const y=n.current;for(let p=y.length-1;p>=0;p--){const u=y[p];if(u.x+=u.vx,u.y+=u.vy,u.vy+=.04,u.life-=u.decay,u.life<=0){y.splice(p,1);continue}a.globalAlpha=u.life*.8,a.fillStyle=u.color,a.beginPath(),a.arc(u.x,u.y,u.r,0,Math.PI*2),a.fill()}a.globalAlpha=1,r.current=requestAnimationFrame(_)}return _(),()=>{document.removeEventListener("mousemove",c),document.removeEventListener("mouseover",d),document.removeEventListener("mouseout",f),window.removeEventListener("resize",l),cancelAnimationFrame(r.current)}},[]),M.jsxs(M.Fragment,{children:[M.jsx("div",{id:"custom-cursor",ref:t}),M.jsx("canvas",{id:"particle-canvas",ref:e})]})}function ES(){const{unlockedUpTo:t}=cn(),e=Math.round(t/(lv.length-1)*100);return M.jsx("div",{id:"progress-bar",style:{width:`${e}%`}})}const cv="31102025",va=cv.length;function wS(){const t=document.getElementById("particle-canvas");if(!t)return;const e=t.getContext("2d"),n=t.width,i=t.height,r=["#F5C518","#FFD700","#E8527A","#FFF6C0","#2DBDB1","#ffffff"],o=[];for(let a=0;a<80;a++){const l=Math.random()*Math.PI*2,c=Math.random()*8+3;o.push({x:n/2,y:i/2,vx:Math.cos(l)*c,vy:Math.sin(l)*c-2,r:Math.random()*5+2,color:r[Math.floor(Math.random()*r.length)],life:1,decay:Math.random()*.02+.012})}function s(){for(let a=o.length-1;a>=0;a--){const l=o[a];if(l.x+=l.vx,l.y+=l.vy,l.vy+=.15,l.life-=l.decay,l.life<=0){o.splice(a,1);continue}e.globalAlpha=l.life,e.fillStyle=l.color,e.beginPath(),e.arc(l.x,l.y,l.r,0,Math.PI*2),e.fill()}e.globalAlpha=1,o.length&&requestAnimationFrame(s)}s()}function TS(){const t=ln(),{unlock:e}=cn(),[n,i]=U.useState(""),[r,o]=U.useState(!1),[s,a]=U.useState(""),[l,c]=U.useState(!1),d=U.useCallback(_=>{l||(i(y=>y.length>=va?y:y+_),a(""))},[l]),f=U.useCallback(()=>{l||(i(_=>_.slice(0,-1)),a(""))},[l]),h=U.useCallback(()=>{l||n.length===0||(n===cv?(c(!0),wS(),setTimeout(()=>{e(0),t("/welcome")},900)):(o(!0),a("Wrong. Try harder, bangaaram."),i(""),setTimeout(()=>o(!1),500)))},[n,e,t,l]);U.useEffect(()=>{if(n.length===va){const _=setTimeout(h,200);return()=>clearTimeout(_)}},[n,h]),U.useEffect(()=>{const _=y=>{y.key>="0"&&y.key<="9"?d(y.key):y.key==="Backspace"?f():y.key==="Enter"&&h()};return window.addEventListener("keydown",_),()=>window.removeEventListener("keydown",_)},[d,f,h]);const v=Array.from({length:va});return M.jsxs("div",{className:"level-screen",style:{background:"radial-gradient(ellipse at 50% 35%, #261800 0%, #0D0800 70%)"},children:[M.jsx(bS,{}),M.jsxs("div",{style:{position:"relative",zIndex:10,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",userSelect:"none",animation:"fadeUp 0.9s ease both"},children:[M.jsx("p",{style:{marginBottom:"0.75rem",fontSize:"0.8rem",letterSpacing:"0.18em",textTransform:"uppercase",color:"rgba(245,197,24,0.5)",fontFamily:"DM Sans"},children:"✦ private access ✦"}),M.jsx("h1",{style:{fontFamily:"Playfair Display",fontSize:"clamp(2rem, 6vw, 3.8rem)",color:"#F5C518",fontWeight:700,lineHeight:1.1,marginBottom:"0.25rem"},children:"Hey, you."}),M.jsx("p",{style:{fontFamily:"Caveat",fontSize:"1.3rem",color:"rgba(253,250,242,0.5)",marginBottom:"2.5rem"},children:"Enter the passcode to open this 💛"}),M.jsx("div",{className:r?"animate-shake":"",style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",gap:"10px",marginBottom:"0.6rem",alignItems:"center",justifyContent:"center"},children:v.map((_,y)=>M.jsx("div",{style:{width:14,height:14,borderRadius:"50%",border:"2px solid rgba(245,197,24,0.5)",background:y<n.length?"#F5C518":"transparent",transition:"background 0.15s, transform 0.15s",transform:y<n.length?"scale(1.15)":"scale(1)",boxShadow:y<n.length?"0 0 8px rgba(245,197,24,0.6)":"none"}},y))}),M.jsx("div",{style:{height:"1.6rem",marginBottom:"1.2rem"},children:s&&M.jsx("p",{style:{fontFamily:"Caveat",fontSize:"1.1rem",color:"#E8527A",animation:"fadeUp 0.3s ease both"},children:s})}),M.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 76px)",gap:"12px"},children:[["1","2","3","4","5","6","7","8","9"].map(_=>M.jsx(_a,{label:_,onClick:()=>d(_)},_)),M.jsx(_a,{label:"⌫",onClick:f,dim:!0}),M.jsx(_a,{label:"0",onClick:()=>d("0")}),M.jsx(_a,{label:l?"✓":"→",onClick:h,accent:!0,glow:n.length===va&&!l})]}),M.jsx("p",{style:{marginTop:"2rem",fontFamily:"Caveat",fontSize:"1rem",color:"rgba(245,197,24,0.35)",fontStyle:"italic"},children:"Hint: The day we first spoke 💛"})]})]})}function _a({label:t,onClick:e,dim:n,accent:i,glow:r}){return M.jsx("button",{onClick:e,style:{width:76,height:76,borderRadius:"50%",border:i?"1.5px solid rgba(245,197,24,0.7)":"1.5px solid rgba(245,197,24,0.2)",background:i?"rgba(245,197,24,0.12)":"rgba(245,197,24,0.04)",color:n?"rgba(253,250,242,0.35)":"#FDFAF2",fontSize:typeof t=="string"&&t.length===1&&t>="0"&&t<="9"?"1.6rem":"1.2rem",fontFamily:"Playfair Display",fontWeight:400,backdropFilter:"blur(6px)",transition:"all 0.15s",animation:r?"pulse-glow 1.5s ease-in-out infinite":"none",boxShadow:r?"0 0 20px rgba(245,197,24,0.4)":"none"},onMouseEnter:o=>{o.currentTarget.style.background="rgba(245,197,24,0.18)",o.currentTarget.style.borderColor="rgba(245,197,24,0.7)",o.currentTarget.style.transform="scale(1.06)"},onMouseLeave:o=>{o.currentTarget.style.background=i?"rgba(245,197,24,0.12)":"rgba(245,197,24,0.04)",o.currentTarget.style.borderColor=i?"rgba(245,197,24,0.7)":"rgba(245,197,24,0.2)",o.currentTarget.style.transform="scale(1)"},onMouseDown:o=>{o.currentTarget.style.transform="scale(0.94)"},onMouseUp:o=>{o.currentTarget.style.transform="scale(1.06)"},children:t})}function bS(){return M.jsx("div",{style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none"},children:Array.from({length:40}).map((t,e)=>M.jsx("div",{style:{position:"absolute",left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,width:Math.random()>.8?3:2,height:Math.random()>.8?3:2,borderRadius:"50%",background:"white",opacity:Math.random()*.5+.1,animation:`starTwinkle ${2+Math.random()*4}s ease-in-out infinite`,animationDelay:`${Math.random()*5}s`}},e))})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tf="162",AS=0,Jh=1,CS=2,uv=1,RS=2,ri=3,Zi=0,on=1,ai=2,Xi=0,To=1,ep=2,tp=3,np=4,PS=5,_r=100,LS=101,DS=102,ip=103,rp=104,IS=200,US=201,NS=202,FS=203,md=204,gd=205,kS=206,OS=207,zS=208,BS=209,HS=210,GS=211,VS=212,WS=213,jS=214,XS=0,YS=1,$S=2,Dl=3,qS=4,KS=5,ZS=6,QS=7,dv=0,JS=1,eM=2,Yi=0,tM=1,nM=2,iM=3,rM=4,oM=5,sM=6,aM=7,fv=300,Uo=301,No=302,vd=303,_d=304,tc=306,xd=1e3,On=1001,yd=1002,jt=1003,op=1004,Jo=1005,Zt=1006,kc=1007,wr=1008,$i=1009,lM=1010,cM=1011,bf=1012,hv=1013,ki=1014,li=1015,zs=1016,pv=1017,mv=1018,Cr=1020,uM=1021,zn=1023,dM=1024,fM=1025,Rr=1026,Fo=1027,hM=1028,gv=1029,pM=1030,vv=1031,_v=1033,Oc=33776,zc=33777,Bc=33778,Hc=33779,sp=35840,ap=35841,lp=35842,cp=35843,xv=36196,up=37492,dp=37496,fp=37808,hp=37809,pp=37810,mp=37811,gp=37812,vp=37813,_p=37814,xp=37815,yp=37816,Sp=37817,Mp=37818,Ep=37819,wp=37820,Tp=37821,Gc=36492,bp=36494,Ap=36495,mM=36283,Cp=36284,Rp=36285,Pp=36286,gM=3200,vM=3201,_M=0,xM=1,Ii="",Xn="srgb",nr="srgb-linear",Af="display-p3",nc="display-p3-linear",Il="linear",nt="srgb",Ul="rec709",Nl="p3",Hr=7680,Lp=519,yM=512,SM=513,MM=514,yv=515,EM=516,wM=517,TM=518,bM=519,Dp=35044,Ip="300 es",Sd=1035,fi=2e3,Fl=2001;class Go{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vc=Math.PI/180,Md=180/Math.PI;function Ys(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[t&255]+kt[t>>8&255]+kt[t>>16&255]+kt[t>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[n&63|128]+kt[n>>8&255]+"-"+kt[n>>16&255]+kt[n>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function Jt(t,e,n){return Math.max(e,Math.min(n,t))}function AM(t,e){return(t%e+e)%e}function Wc(t,e,n){return(1-n)*t+n*e}function Up(t){return(t&t-1)===0&&t!==0}function Ed(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function es(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class $e{constructor(e=0,n=0){$e.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,n,i,r,o,s,a,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,c)}set(e,n,i,r,o,s,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=o,d[5]=l,d[6]=i,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],v=i[5],_=i[8],y=r[0],p=r[3],u=r[6],g=r[1],m=r[4],x=r[7],A=r[2],E=r[5],b=r[8];return o[0]=s*y+a*g+l*A,o[3]=s*p+a*m+l*E,o[6]=s*u+a*x+l*b,o[1]=c*y+d*g+f*A,o[4]=c*p+d*m+f*E,o[7]=c*u+d*x+f*b,o[2]=h*y+v*g+_*A,o[5]=h*p+v*m+_*E,o[8]=h*u+v*x+_*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*s*d-n*a*c-i*o*d+i*a*l+r*o*c-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*s-a*c,h=a*l-d*o,v=c*o-s*l,_=n*f+i*h+r*v;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=f*y,e[1]=(r*c-d*i)*y,e[2]=(a*i-r*s)*y,e[3]=h*y,e[4]=(d*n-r*l)*y,e[5]=(r*o-a*n)*y,e[6]=v*y,e[7]=(i*l-c*n)*y,e[8]=(s*n-i*o)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(jc.makeScale(e,n)),this}rotate(e){return this.premultiply(jc.makeRotation(-e)),this}translate(e,n){return this.premultiply(jc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const jc=new Fe;function Sv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function kl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function CM(){const t=kl("canvas");return t.style.display="block",t}const Np={};function RM(t){t in Np||(Np[t]=!0,console.warn(t))}const Fp=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),kp=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xa={[nr]:{transfer:Il,primaries:Ul,toReference:t=>t,fromReference:t=>t},[Xn]:{transfer:nt,primaries:Ul,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[nc]:{transfer:Il,primaries:Nl,toReference:t=>t.applyMatrix3(kp),fromReference:t=>t.applyMatrix3(Fp)},[Af]:{transfer:nt,primaries:Nl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(kp),fromReference:t=>t.applyMatrix3(Fp).convertLinearToSRGB()}},PM=new Set([nr,nc]),Ze={enabled:!0,_workingColorSpace:nr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!PM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=xa[e].toReference,r=xa[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return xa[t].primaries},getTransfer:function(t){return t===Ii?Il:xa[t].transfer}};function bo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Xc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Gr;class Mv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Gr===void 0&&(Gr=kl("canvas")),Gr.width=e.width,Gr.height=e.height;const i=Gr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Gr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=kl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=bo(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(bo(n[i]/255)*255):n[i]=bo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let LM=0;class Ev{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=Ys(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Yc(r[s].image)):o.push(Yc(r[s]))}else o=Yc(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function Yc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Mv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let DM=0;class sn extends Go{constructor(e=sn.DEFAULT_IMAGE,n=sn.DEFAULT_MAPPING,i=On,r=On,o=Zt,s=wr,a=zn,l=$i,c=sn.DEFAULT_ANISOTROPY,d=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=Ys(),this.name="",this.source=new Ev(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xd:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case yd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xd:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case yd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=fv;sn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,n=0,i=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],v=l[5],_=l[9],y=l[2],p=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-y)<.01&&Math.abs(_-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+y)<.1&&Math.abs(_+p)<.1&&Math.abs(c+v+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const m=(c+1)/2,x=(v+1)/2,A=(u+1)/2,E=(d+h)/4,b=(f+y)/4,L=(_+p)/4;return m>x&&m>A?m<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(m),r=E/i,o=b/i):x>A?x<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(x),i=E/r,o=L/r):A<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(A),i=b/o,r=L/o),this.set(i,r,o,n),this}let g=Math.sqrt((p-_)*(p-_)+(f-y)*(f-y)+(h-d)*(h-d));return Math.abs(g)<.001&&(g=1),this.x=(p-_)/g,this.y=(f-y)/g,this.z=(h-d)/g,this.w=Math.acos((c+v+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class IM extends Go{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const o=new sn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Ev(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fr extends IM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class wv extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class UM extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $s{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=o[s+0],v=o[s+1],_=o[s+2],y=o[s+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=v,e[n+2]=_,e[n+3]=y;return}if(f!==y||l!==h||c!==v||d!==_){let p=1-a;const u=l*h+c*v+d*_+f*y,g=u>=0?1:-1,m=1-u*u;if(m>Number.EPSILON){const A=Math.sqrt(m),E=Math.atan2(A,u*g);p=Math.sin(p*E)/A,a=Math.sin(a*E)/A}const x=a*g;if(l=l*p+h*x,c=c*p+v*x,d=d*p+_*x,f=f*p+y*x,p===1-a){const A=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=A,c*=A,d*=A,f*=A}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=o[s],h=o[s+1],v=o[s+2],_=o[s+3];return e[n]=a*_+d*f+l*v-c*h,e[n+1]=l*_+d*h+c*f-a*v,e[n+2]=c*_+d*v+a*h-l*f,e[n+3]=d*_-a*f-l*h-c*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(o/2),h=l(i/2),v=l(r/2),_=l(o/2);switch(s){case"XYZ":this._x=h*d*f+c*v*_,this._y=c*v*f-h*d*_,this._z=c*d*_+h*v*f,this._w=c*d*f-h*v*_;break;case"YXZ":this._x=h*d*f+c*v*_,this._y=c*v*f-h*d*_,this._z=c*d*_-h*v*f,this._w=c*d*f+h*v*_;break;case"ZXY":this._x=h*d*f-c*v*_,this._y=c*v*f+h*d*_,this._z=c*d*_+h*v*f,this._w=c*d*f-h*v*_;break;case"ZYX":this._x=h*d*f-c*v*_,this._y=c*v*f+h*d*_,this._z=c*d*_-h*v*f,this._w=c*d*f+h*v*_;break;case"YZX":this._x=h*d*f+c*v*_,this._y=c*v*f+h*d*_,this._z=c*d*_-h*v*f,this._w=c*d*f-h*v*_;break;case"XZY":this._x=h*d*f-c*v*_,this._y=c*v*f-h*d*_,this._z=c*d*_+h*v*f,this._w=c*d*f+h*v*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+a+f;if(h>0){const v=.5/Math.sqrt(h+1);this._w=.25/v,this._x=(d-l)*v,this._y=(o-c)*v,this._z=(s-r)*v}else if(i>a&&i>f){const v=2*Math.sqrt(1+i-a-f);this._w=(d-l)/v,this._x=.25*v,this._y=(r+s)/v,this._z=(o+c)/v}else if(a>f){const v=2*Math.sqrt(1+a-i-f);this._w=(o-c)/v,this._x=(r+s)/v,this._y=.25*v,this._z=(l+d)/v}else{const v=2*Math.sqrt(1+f-i-a);this._w=(s-r)/v,this._x=(o+c)/v,this._y=(l+d)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+s*a+r*c-o*l,this._y=r*d+s*l+o*a-i*c,this._z=o*d+s*c+i*l-r*a,this._w=s*d-i*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const v=1-n;return this._w=v*s+n*this._w,this._x=v*i+n*this._x,this._y=v*r+n*this._y,this._z=v*o+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=s*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=o*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,n=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Op.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Op.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*i),d=2*(a*n-o*r),f=2*(o*i-s*n);return this.x=n+l*c+s*f-a*d,this.y=i+l*d+a*c-o*f,this.z=r+l*f+o*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $c.copy(this).projectOnVector(e),this.sub($c)}reflect(e){return this.sub($c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $c=new $,Op=new $s;class qs{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Dn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Dn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Dn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Dn):Dn.fromBufferAttribute(o,s),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ya.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ya.copy(i.boundingBox)),ya.applyMatrix4(e.matrixWorld),this.union(ya)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ts),Sa.subVectors(this.max,ts),Vr.subVectors(e.a,ts),Wr.subVectors(e.b,ts),jr.subVectors(e.c,ts),Ei.subVectors(Wr,Vr),wi.subVectors(jr,Wr),or.subVectors(Vr,jr);let n=[0,-Ei.z,Ei.y,0,-wi.z,wi.y,0,-or.z,or.y,Ei.z,0,-Ei.x,wi.z,0,-wi.x,or.z,0,-or.x,-Ei.y,Ei.x,0,-wi.y,wi.x,0,-or.y,or.x,0];return!qc(n,Vr,Wr,jr,Sa)||(n=[1,0,0,0,1,0,0,0,1],!qc(n,Vr,Wr,jr,Sa))?!1:(Ma.crossVectors(Ei,wi),n=[Ma.x,Ma.y,Ma.z],qc(n,Vr,Wr,jr,Sa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jn=[new $,new $,new $,new $,new $,new $,new $,new $],Dn=new $,ya=new qs,Vr=new $,Wr=new $,jr=new $,Ei=new $,wi=new $,or=new $,ts=new $,Sa=new $,Ma=new $,sr=new $;function qc(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){sr.fromArray(t,o);const a=r.x*Math.abs(sr.x)+r.y*Math.abs(sr.y)+r.z*Math.abs(sr.z),l=e.dot(sr),c=n.dot(sr),d=i.dot(sr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const NM=new qs,ns=new $,Kc=new $;class ic{constructor(e=new $,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):NM.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ns.subVectors(e,this.center);const n=ns.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ns,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ns.copy(e.center).add(Kc)),this.expandByPoint(ns.copy(e.center).sub(Kc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new $,Zc=new $,Ea=new $,Ti=new $,Qc=new $,wa=new $,Jc=new $;class Tv{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ei.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,n),ei.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Zc.copy(e).add(n).multiplyScalar(.5),Ea.copy(n).sub(e).normalize(),Ti.copy(this.origin).sub(Zc);const o=e.distanceTo(n)*.5,s=-this.direction.dot(Ea),a=Ti.dot(this.direction),l=-Ti.dot(Ea),c=Ti.lengthSq(),d=Math.abs(1-s*s);let f,h,v,_;if(d>0)if(f=s*l-a,h=s*a-l,_=o*d,f>=0)if(h>=-_)if(h<=_){const y=1/d;f*=y,h*=y,v=f*(f+s*h+2*a)+h*(s*f+h+2*l)+c}else h=o,f=Math.max(0,-(s*h+a)),v=-f*f+h*(h+2*l)+c;else h=-o,f=Math.max(0,-(s*h+a)),v=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-s*o+a)),h=f>0?-o:Math.min(Math.max(-o,-l),o),v=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-o,-l),o),v=h*(h+2*l)+c):(f=Math.max(0,-(s*o+a)),h=f>0?o:Math.min(Math.max(-o,-l),o),v=-f*f+h*(h+2*l)+c);else h=s>0?-o:o,f=Math.max(0,-(s*h+a)),v=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Zc).addScaledVector(Ea,h),v}intersectSphere(e,n){ei.subVectors(e.center,this.origin);const i=ei.dot(this.direction),r=ei.dot(ei)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(o=(e.min.y-h.y)*d,s=(e.max.y-h.y)*d):(o=(e.max.y-h.y)*d,s=(e.min.y-h.y)*d),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,n,i,r,o){Qc.subVectors(n,e),wa.subVectors(i,e),Jc.crossVectors(Qc,wa);let s=this.direction.dot(Jc),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Ti.subVectors(this.origin,e);const l=a*this.direction.dot(wa.crossVectors(Ti,wa));if(l<0)return null;const c=a*this.direction.dot(Qc.cross(Ti));if(c<0||l+c>s)return null;const d=-a*Ti.dot(Jc);return d<0?null:this.at(d/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,n,i,r,o,s,a,l,c,d,f,h,v,_,y,p){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,c,d,f,h,v,_,y,p)}set(e,n,i,r,o,s,a,l,c,d,f,h,v,_,y,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=o,u[5]=s,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=v,u[7]=_,u[11]=y,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Xr.setFromMatrixColumn(e,0).length(),o=1/Xr.setFromMatrixColumn(e,1).length(),s=1/Xr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){const h=s*d,v=s*f,_=a*d,y=a*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=v+_*c,n[5]=h-y*c,n[9]=-a*l,n[2]=y-h*c,n[6]=_+v*c,n[10]=s*l}else if(e.order==="YXZ"){const h=l*d,v=l*f,_=c*d,y=c*f;n[0]=h+y*a,n[4]=_*a-v,n[8]=s*c,n[1]=s*f,n[5]=s*d,n[9]=-a,n[2]=v*a-_,n[6]=y+h*a,n[10]=s*l}else if(e.order==="ZXY"){const h=l*d,v=l*f,_=c*d,y=c*f;n[0]=h-y*a,n[4]=-s*f,n[8]=_+v*a,n[1]=v+_*a,n[5]=s*d,n[9]=y-h*a,n[2]=-s*c,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const h=s*d,v=s*f,_=a*d,y=a*f;n[0]=l*d,n[4]=_*c-v,n[8]=h*c+y,n[1]=l*f,n[5]=y*c+h,n[9]=v*c-_,n[2]=-c,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const h=s*l,v=s*c,_=a*l,y=a*c;n[0]=l*d,n[4]=y-h*f,n[8]=_*f+v,n[1]=f,n[5]=s*d,n[9]=-a*d,n[2]=-c*d,n[6]=v*f+_,n[10]=h-y*f}else if(e.order==="XZY"){const h=s*l,v=s*c,_=a*l,y=a*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+y,n[5]=s*d,n[9]=v*f-_,n[2]=_*f-v,n[6]=a*d,n[10]=y*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(FM,e,kM)}lookAt(e,n,i){const r=this.elements;return dn.subVectors(e,n),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),bi.crossVectors(i,dn),bi.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),bi.crossVectors(i,dn)),bi.normalize(),Ta.crossVectors(dn,bi),r[0]=bi.x,r[4]=Ta.x,r[8]=dn.x,r[1]=bi.y,r[5]=Ta.y,r[9]=dn.y,r[2]=bi.z,r[6]=Ta.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],v=i[13],_=i[2],y=i[6],p=i[10],u=i[14],g=i[3],m=i[7],x=i[11],A=i[15],E=r[0],b=r[4],L=r[8],F=r[12],S=r[1],w=r[5],N=r[9],O=r[13],R=r[2],G=r[6],I=r[10],B=r[14],P=r[3],k=r[7],H=r[11],Z=r[15];return o[0]=s*E+a*S+l*R+c*P,o[4]=s*b+a*w+l*G+c*k,o[8]=s*L+a*N+l*I+c*H,o[12]=s*F+a*O+l*B+c*Z,o[1]=d*E+f*S+h*R+v*P,o[5]=d*b+f*w+h*G+v*k,o[9]=d*L+f*N+h*I+v*H,o[13]=d*F+f*O+h*B+v*Z,o[2]=_*E+y*S+p*R+u*P,o[6]=_*b+y*w+p*G+u*k,o[10]=_*L+y*N+p*I+u*H,o[14]=_*F+y*O+p*B+u*Z,o[3]=g*E+m*S+x*R+A*P,o[7]=g*b+m*w+x*G+A*k,o[11]=g*L+m*N+x*I+A*H,o[15]=g*F+m*O+x*B+A*Z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],v=e[14],_=e[3],y=e[7],p=e[11],u=e[15];return _*(+o*l*f-r*c*f-o*a*h+i*c*h+r*a*v-i*l*v)+y*(+n*l*v-n*c*h+o*s*h-r*s*v+r*c*d-o*l*d)+p*(+n*c*f-n*a*v-o*s*f+i*s*v+o*a*d-i*c*d)+u*(-r*a*d-n*l*f+n*a*h+r*s*f-i*s*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],v=e[11],_=e[12],y=e[13],p=e[14],u=e[15],g=f*p*c-y*h*c+y*l*v-a*p*v-f*l*u+a*h*u,m=_*h*c-d*p*c-_*l*v+s*p*v+d*l*u-s*h*u,x=d*y*c-_*f*c+_*a*v-s*y*v-d*a*u+s*f*u,A=_*f*l-d*y*l-_*a*h+s*y*h+d*a*p-s*f*p,E=n*g+i*m+r*x+o*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=g*b,e[1]=(y*h*o-f*p*o-y*r*v+i*p*v+f*r*u-i*h*u)*b,e[2]=(a*p*o-y*l*o+y*r*c-i*p*c-a*r*u+i*l*u)*b,e[3]=(f*l*o-a*h*o-f*r*c+i*h*c+a*r*v-i*l*v)*b,e[4]=m*b,e[5]=(d*p*o-_*h*o+_*r*v-n*p*v-d*r*u+n*h*u)*b,e[6]=(_*l*o-s*p*o-_*r*c+n*p*c+s*r*u-n*l*u)*b,e[7]=(s*h*o-d*l*o+d*r*c-n*h*c-s*r*v+n*l*v)*b,e[8]=x*b,e[9]=(_*f*o-d*y*o-_*i*v+n*y*v+d*i*u-n*f*u)*b,e[10]=(s*y*o-_*a*o+_*i*c-n*y*c-s*i*u+n*a*u)*b,e[11]=(d*a*o-s*f*o-d*i*c+n*f*c+s*i*v-n*a*v)*b,e[12]=A*b,e[13]=(d*y*r-_*f*r+_*i*h-n*y*h-d*i*p+n*f*p)*b,e[14]=(_*a*r-s*y*r-_*i*l+n*y*l+s*i*p-n*a*p)*b,e[15]=(s*f*r-d*a*r+d*i*l-n*f*l-s*i*h+n*a*h)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,c=o*s,d=o*a;return this.set(c*s+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*s,0,c*l-r*a,d*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,c=o+o,d=s+s,f=a+a,h=o*c,v=o*d,_=o*f,y=s*d,p=s*f,u=a*f,g=l*c,m=l*d,x=l*f,A=i.x,E=i.y,b=i.z;return r[0]=(1-(y+u))*A,r[1]=(v+x)*A,r[2]=(_-m)*A,r[3]=0,r[4]=(v-x)*E,r[5]=(1-(h+u))*E,r[6]=(p+g)*E,r[7]=0,r[8]=(_+m)*b,r[9]=(p-g)*b,r[10]=(1-(h+y))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=Xr.set(r[0],r[1],r[2]).length();const s=Xr.set(r[4],r[5],r[6]).length(),a=Xr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],In.copy(this);const c=1/o,d=1/s,f=1/a;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=d,In.elements[5]*=d,In.elements[6]*=d,In.elements[8]*=f,In.elements[9]*=f,In.elements[10]*=f,n.setFromRotationMatrix(In),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=fi){const l=this.elements,c=2*o/(n-e),d=2*o/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let v,_;if(a===fi)v=-(s+o)/(s-o),_=-2*s*o/(s-o);else if(a===Fl)v=-s/(s-o),_=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=fi){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(s-o),h=(n+e)*c,v=(i+r)*d;let _,y;if(a===fi)_=(s+o)*f,y=-2*f;else if(a===Fl)_=o*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-v,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Xr=new $,In=new xt,FM=new $(0,0,0),kM=new $(1,1,1),bi=new $,Ta=new $,dn=new $,zp=new xt,Bp=new $s;class xi{constructor(e=0,n=0,i=0,r=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],v=r[10];switch(n){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,v),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,v),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,v),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,v),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,v));break;case"XZY":this._z=Math.asin(-Jt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-d,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return zp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Bp.setFromEuler(this),this.setFromQuaternion(Bp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class bv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let OM=0;const Hp=new $,Yr=new $s,ti=new xt,ba=new $,is=new $,zM=new $,BM=new $s,Gp=new $(1,0,0),Vp=new $(0,1,0),Wp=new $(0,0,1),HM={type:"added"},GM={type:"removed"},eu={type:"childadded",child:null},tu={type:"childremoved",child:null};class an extends Go{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=Ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new $,n=new xi,i=new $s,r=new $(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new Fe}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Yr.setFromAxisAngle(e,n),this.quaternion.multiply(Yr),this}rotateOnWorldAxis(e,n){return Yr.setFromAxisAngle(e,n),this.quaternion.premultiply(Yr),this}rotateX(e){return this.rotateOnAxis(Gp,e)}rotateY(e){return this.rotateOnAxis(Vp,e)}rotateZ(e){return this.rotateOnAxis(Wp,e)}translateOnAxis(e,n){return Hp.copy(e).applyQuaternion(this.quaternion),this.position.add(Hp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Gp,e)}translateY(e){return this.translateOnAxis(Vp,e)}translateZ(e){return this.translateOnAxis(Wp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ba.copy(e):ba.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(is,ba,this.up):ti.lookAt(ba,is,this.up),this.quaternion.setFromRotationMatrix(ti),r&&(ti.extractRotation(r.matrixWorld),Yr.setFromRotationMatrix(ti),this.quaternion.premultiply(Yr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(HM),eu.child=e,this.dispatchEvent(eu),eu.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(GM),tu.child=e,this.dispatchEvent(tu),tu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,e,zM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,BM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];o(e.shapes,f)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),f=s(e.shapes),h=s(e.skeletons),v=s(e.animations),_=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),v.length>0&&(i.animations=v),_.length>0&&(i.nodes=_)}return i.object=r,i;function s(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}an.DEFAULT_UP=new $(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new $,ni=new $,nu=new $,ii=new $,$r=new $,qr=new $,jp=new $,iu=new $,ru=new $,ou=new $;class qn{constructor(e=new $,n=new $,i=new $){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Un.subVectors(e,n),r.cross(Un);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Un.subVectors(r,n),ni.subVectors(i,n),nu.subVectors(e,n);const s=Un.dot(Un),a=Un.dot(ni),l=Un.dot(nu),c=ni.dot(ni),d=ni.dot(nu),f=s*c-a*a;if(f===0)return o.set(0,0,0),null;const h=1/f,v=(c*l-a*d)*h,_=(s*d-a*l)*h;return o.set(1-v-_,_,v)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,ii.x),l.addScaledVector(s,ii.y),l.addScaledVector(a,ii.z),l)}static isFrontFacing(e,n,i,r){return Un.subVectors(i,n),ni.subVectors(e,n),Un.cross(ni).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Un.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return qn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;$r.subVectors(r,i),qr.subVectors(o,i),iu.subVectors(e,i);const l=$r.dot(iu),c=qr.dot(iu);if(l<=0&&c<=0)return n.copy(i);ru.subVectors(e,r);const d=$r.dot(ru),f=qr.dot(ru);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return s=l/(l-d),n.copy(i).addScaledVector($r,s);ou.subVectors(e,o);const v=$r.dot(ou),_=qr.dot(ou);if(_>=0&&v<=_)return n.copy(o);const y=v*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(qr,a);const p=d*_-v*f;if(p<=0&&f-d>=0&&v-_>=0)return jp.subVectors(o,r),a=(f-d)/(f-d+(v-_)),n.copy(r).addScaledVector(jp,a);const u=1/(p+y+h);return s=y*u,a=h*u,n.copy(i).addScaledVector($r,s).addScaledVector(qr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Av={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function su(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=AM(e,1),n=Jt(n,0,1),i=Jt(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=su(s,o,e+1/3),this.g=su(s,o,e),this.b=su(s,o,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,n=Xn){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Xn){const i=Av[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bo(e.r),this.g=bo(e.g),this.b=bo(e.b),this}copyLinearToSRGB(e){return this.r=Xc(e.r),this.g=Xc(e.g),this.b=Xc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xn){return Ze.fromWorkingColorSpace(Ot.copy(this),e),Math.round(Jt(Ot.r*255,0,255))*65536+Math.round(Jt(Ot.g*255,0,255))*256+Math.round(Jt(Ot.b*255,0,255))}getHexString(e=Xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Ot.copy(this),n);const i=Ot.r,r=Ot.g,o=Ot.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,c;const d=(a+s)/2;if(a===s)l=0,c=0;else{const f=s-a;switch(c=d<=.5?f/(s+a):f/(2-s-a),s){case i:l=(r-o)/f+(r<o?6:0);break;case r:l=(o-i)/f+2;break;case o:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Ot.copy(this),n),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Xn){Ze.fromWorkingColorSpace(Ot.copy(this),e);const n=Ot.r,i=Ot.g,r=Ot.b;return e!==Xn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+n,Ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ai),e.getHSL(Aa);const i=Wc(Ai.h,Aa.h,n),r=Wc(Ai.s,Aa.s,n),o=Wc(Ai.l,Aa.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Xe;Xe.NAMES=Av;let VM=0;class Ks extends Go{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=Ys(),this.name="",this.type="Material",this.blending=To,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=md,this.blendDst=gd,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Dl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hr,this.stencilZFail=Hr,this.stencilZPass=Hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==To&&(i.blending=this.blending),this.side!==Zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==md&&(i.blendSrc=this.blendSrc),this.blendDst!==gd&&(i.blendDst=this.blendDst),this.blendEquation!==_r&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Dl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Cv extends Ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=dv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new $,Ca=new $e;class vn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Dp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return RM("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ca.fromBufferAttribute(this,n),Ca.applyMatrix3(e),this.setXY(n,Ca.x,Ca.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.applyMatrix3(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.applyMatrix4(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.applyNormalMatrix(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.transformDirection(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=es(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=qt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=es(n,this.array)),n}setX(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=es(n,this.array)),n}setY(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=es(n,this.array)),n}setZ(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=es(n,this.array)),n}setW(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array),o=qt(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dp&&(e.usage=this.usage),e}}class Rv extends vn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Pv extends vn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Pr extends vn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let WM=0;const En=new xt,au=new an,Kr=new $,fn=new qs,rs=new qs,Tt=new $;class Si extends Go{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:WM++}),this.uuid=Ys(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sv(e)?Pv:Rv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Fe().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,n,i){return En.makeTranslation(e,n,i),this.applyMatrix4(En),this}scale(e,n,i){return En.makeScale(e,n,i),this.applyMatrix4(En),this}lookAt(e){return au.lookAt(e),au.updateMatrix(),this.applyMatrix4(au.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Pr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];fn.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ic);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];rs.setFromBufferAttribute(a),this.morphTargetsRelative?(Tt.addVectors(fn.min,rs.min),fn.expandByPoint(Tt),Tt.addVectors(fn.max,rs.max),fn.expandByPoint(Tt)):(fn.expandByPoint(rs.min),fn.expandByPoint(rs.max))}fn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Tt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Tt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Tt.fromBufferAttribute(a,c),l&&(Kr.fromBufferAttribute(e,c),Tt.add(Kr)),r=Math.max(r,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new $,l[L]=new $;const c=new $,d=new $,f=new $,h=new $e,v=new $e,_=new $e,y=new $,p=new $;function u(L,F,S){c.fromBufferAttribute(i,L),d.fromBufferAttribute(i,F),f.fromBufferAttribute(i,S),h.fromBufferAttribute(o,L),v.fromBufferAttribute(o,F),_.fromBufferAttribute(o,S),d.sub(c),f.sub(c),v.sub(h),_.sub(h);const w=1/(v.x*_.y-_.x*v.y);isFinite(w)&&(y.copy(d).multiplyScalar(_.y).addScaledVector(f,-v.y).multiplyScalar(w),p.copy(f).multiplyScalar(v.x).addScaledVector(d,-_.x).multiplyScalar(w),a[L].add(y),a[F].add(y),a[S].add(y),l[L].add(p),l[F].add(p),l[S].add(p))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let L=0,F=g.length;L<F;++L){const S=g[L],w=S.start,N=S.count;for(let O=w,R=w+N;O<R;O+=3)u(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const m=new $,x=new $,A=new $,E=new $;function b(L){A.fromBufferAttribute(r,L),E.copy(A);const F=a[L];m.copy(F),m.sub(A.multiplyScalar(A.dot(F))).normalize(),x.crossVectors(E,F);const w=x.dot(l[L])<0?-1:1;s.setXYZW(L,m.x,m.y,m.z,w)}for(let L=0,F=g.length;L<F;++L){const S=g[L],w=S.start,N=S.count;for(let O=w,R=w+N;O<R;O+=3)b(e.getX(O+0)),b(e.getX(O+1)),b(e.getX(O+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,v=i.count;h<v;h++)i.setXYZ(h,0,0,0);const r=new $,o=new $,s=new $,a=new $,l=new $,c=new $,d=new $,f=new $;if(e)for(let h=0,v=e.count;h<v;h+=3){const _=e.getX(h+0),y=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,y),s.fromBufferAttribute(n,p),d.subVectors(s,o),f.subVectors(r,o),d.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),a.add(d),l.add(d),c.add(d),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,v=n.count;h<v;h+=3)r.fromBufferAttribute(n,h+0),o.fromBufferAttribute(n,h+1),s.fromBufferAttribute(n,h+2),d.subVectors(s,o),f.subVectors(r,o),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Tt.fromBufferAttribute(e,n),Tt.normalize(),e.setXYZ(n,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,h=new c.constructor(l.length*d);let v=0,_=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?v=l[y]*a.data.stride+a.offset:v=l[y]*d;for(let u=0;u<d;u++)h[_++]=c[v++]}return new vn(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Si,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let d=0,f=c.length;d<f;d++){const h=c[d],v=e(h,i);l.push(v)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const v=c[f];d.push(v.toJSON(e.data))}d.length>0&&(r[l]=d,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const o=e.morphAttributes;for(const c in o){const d=[],f=o[c];for(let h=0,v=f.length;h<v;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xp=new xt,ar=new Tv,Ra=new ic,Yp=new $,Zr=new $,Qr=new $,Jr=new $,lu=new $,Pa=new $,La=new $e,Da=new $e,Ia=new $e,$p=new $,qp=new $,Kp=new $,Ua=new $,Na=new $;class hi extends an{constructor(e=new Si,n=new Cv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){Pa.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const d=a[l],f=o[l];d!==0&&(lu.fromBufferAttribute(f,e),s?Pa.addScaledVector(lu,d):Pa.addScaledVector(lu.sub(n),d))}n.add(Pa)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ra.copy(i.boundingSphere),Ra.applyMatrix4(o),ar.copy(e.ray).recast(e.near),!(Ra.containsPoint(ar.origin)===!1&&(ar.intersectSphere(Ra,Yp)===null||ar.origin.distanceToSquared(Yp)>(e.far-e.near)**2))&&(Xp.copy(o).invert(),ar.copy(e.ray).applyMatrix4(Xp),!(i.boundingBox!==null&&ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ar)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,d=o.attributes.uv1,f=o.attributes.normal,h=o.groups,v=o.drawRange;if(a!==null)if(Array.isArray(s))for(let _=0,y=h.length;_<y;_++){const p=h[_],u=s[p.materialIndex],g=Math.max(p.start,v.start),m=Math.min(a.count,Math.min(p.start+p.count,v.start+v.count));for(let x=g,A=m;x<A;x+=3){const E=a.getX(x),b=a.getX(x+1),L=a.getX(x+2);r=Fa(this,u,e,i,c,d,f,E,b,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,v.start),y=Math.min(a.count,v.start+v.count);for(let p=_,u=y;p<u;p+=3){const g=a.getX(p),m=a.getX(p+1),x=a.getX(p+2);r=Fa(this,s,e,i,c,d,f,g,m,x),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,y=h.length;_<y;_++){const p=h[_],u=s[p.materialIndex],g=Math.max(p.start,v.start),m=Math.min(l.count,Math.min(p.start+p.count,v.start+v.count));for(let x=g,A=m;x<A;x+=3){const E=x,b=x+1,L=x+2;r=Fa(this,u,e,i,c,d,f,E,b,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,v.start),y=Math.min(l.count,v.start+v.count);for(let p=_,u=y;p<u;p+=3){const g=p,m=p+1,x=p+2;r=Fa(this,s,e,i,c,d,f,g,m,x),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function jM(t,e,n,i,r,o,s,a){let l;if(e.side===on?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===Zi,a),l===null)return null;Na.copy(a),Na.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Na);return c<n.near||c>n.far?null:{distance:c,point:Na.clone(),object:t}}function Fa(t,e,n,i,r,o,s,a,l,c){t.getVertexPosition(a,Zr),t.getVertexPosition(l,Qr),t.getVertexPosition(c,Jr);const d=jM(t,e,n,i,Zr,Qr,Jr,Ua);if(d){r&&(La.fromBufferAttribute(r,a),Da.fromBufferAttribute(r,l),Ia.fromBufferAttribute(r,c),d.uv=qn.getInterpolation(Ua,Zr,Qr,Jr,La,Da,Ia,new $e)),o&&(La.fromBufferAttribute(o,a),Da.fromBufferAttribute(o,l),Ia.fromBufferAttribute(o,c),d.uv1=qn.getInterpolation(Ua,Zr,Qr,Jr,La,Da,Ia,new $e)),s&&($p.fromBufferAttribute(s,a),qp.fromBufferAttribute(s,l),Kp.fromBufferAttribute(s,c),d.normal=qn.getInterpolation(Ua,Zr,Qr,Jr,$p,qp,Kp,new $),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new $,materialIndex:0};qn.getNormal(Zr,Qr,Jr,f.normal),d.face=f}return d}class Zs extends Si{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],d=[],f=[];let h=0,v=0;_("z","y","x",-1,-1,i,n,e,s,o,0),_("z","y","x",1,-1,i,n,-e,s,o,1),_("x","z","y",1,1,e,i,n,r,s,2),_("x","z","y",1,-1,e,i,-n,r,s,3),_("x","y","z",1,-1,e,n,i,r,o,4),_("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new Pr(c,3)),this.setAttribute("normal",new Pr(d,3)),this.setAttribute("uv",new Pr(f,2));function _(y,p,u,g,m,x,A,E,b,L,F){const S=x/b,w=A/L,N=x/2,O=A/2,R=E/2,G=b+1,I=L+1;let B=0,P=0;const k=new $;for(let H=0;H<I;H++){const Z=H*w-O;for(let ee=0;ee<G;ee++){const ge=ee*S-N;k[y]=ge*g,k[p]=Z*m,k[u]=R,c.push(k.x,k.y,k.z),k[y]=0,k[p]=0,k[u]=E>0?1:-1,d.push(k.x,k.y,k.z),f.push(ee/b),f.push(1-H/L),B+=1}}for(let H=0;H<L;H++)for(let Z=0;Z<b;Z++){const ee=h+Z+G*H,ge=h+Z+G*(H+1),j=h+(Z+1)+G*(H+1),te=h+(Z+1)+G*H;l.push(ee,ge,te),l.push(ge,j,te),P+=6}a.addGroup(v,P,F),v+=P,h+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ko(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Vt(t){const e={};for(let n=0;n<t.length;n++){const i=ko(t[n]);for(const r in i)e[r]=i[r]}return e}function XM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Lv(t){return t.getRenderTarget()===null?t.outputColorSpace:Ze.workingColorSpace}const YM={clone:ko,merge:Vt};var $M=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qi extends Ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$M,this.fragmentShader=qM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ko(e.uniforms),this.uniformsGroups=XM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Dv extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=fi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ci=new $,Zp=new $e,Qp=new $e;class bn extends Dv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Md*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Md*2*Math.atan(Math.tan(Vc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z)}getViewSize(e,n){return this.getViewBounds(e,Zp,Qp),n.subVectors(Qp,Zp)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Vc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const eo=-90,to=1;class KM extends an{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bn(eo,to,e,n);r.layers=this.layers,this.add(r);const o=new bn(eo,to,e,n);o.layers=this.layers,this.add(o);const s=new bn(eo,to,e,n);s.layers=this.layers,this.add(s);const a=new bn(eo,to,e,n);a.layers=this.layers,this.add(a);const l=new bn(eo,to,e,n);l.layers=this.layers,this.add(l);const c=new bn(eo,to,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const c of n)this.remove(c);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,v),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Iv extends sn{constructor(e,n,i,r,o,s,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Uo,super(e,n,i,r,o,s,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ZM extends Fr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Iv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Zt}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Zs(5,5,5),o=new Qi({name:"CubemapFromEquirect",uniforms:ko(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Xi});o.uniforms.tEquirect.value=n;const s=new hi(r,o),a=n.minFilter;return n.minFilter===wr&&(n.minFilter=Zt),new KM(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const cu=new $,QM=new $,JM=new Fe;class pr{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=cu.subVectors(i,n).cross(QM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(cu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||JM.getNormalMatrix(e),r=this.coplanarPoint(cu).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new ic,ka=new $;class Uv{constructor(e=new pr,n=new pr,i=new pr,r=new pr,o=new pr,s=new pr){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=fi){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],c=r[4],d=r[5],f=r[6],h=r[7],v=r[8],_=r[9],y=r[10],p=r[11],u=r[12],g=r[13],m=r[14],x=r[15];if(i[0].setComponents(l-o,h-c,p-v,x-u).normalize(),i[1].setComponents(l+o,h+c,p+v,x+u).normalize(),i[2].setComponents(l+s,h+d,p+_,x+g).normalize(),i[3].setComponents(l-s,h-d,p-_,x-g).normalize(),i[4].setComponents(l-a,h-f,p-y,x-m).normalize(),n===fi)i[5].setComponents(l+a,h+f,p+y,x+m).normalize();else if(n===Fl)i[5].setComponents(a,f,y,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ka.x=r.normal.x>0?e.max.x:e.min.x,ka.y=r.normal.y>0?e.max.y:e.min.y,ka.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ka)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Nv(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function e1(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,d){const f=c.array,h=c.usage,v=f.byteLength,_=t.createBuffer();t.bindBuffer(d,_),t.bufferData(d,f,h),c.onUploadCallback();let y;if(f instanceof Float32Array)y=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=t.SHORT;else if(f instanceof Uint32Array)y=t.UNSIGNED_INT;else if(f instanceof Int32Array)y=t.INT;else if(f instanceof Int8Array)y=t.BYTE;else if(f instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:v}}function o(c,d,f){const h=d.array,v=d._updateRange,_=d.updateRanges;if(t.bindBuffer(f,c),v.count===-1&&_.length===0&&t.bufferSubData(f,0,h),_.length!==0){for(let y=0,p=_.length;y<p;y++){const u=_[y];n?t.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):t.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}v.count!==-1&&(n?t.bufferSubData(f,v.offset*h.BYTES_PER_ELEMENT,h,v.offset,v.count):t.bufferSubData(f,v.offset*h.BYTES_PER_ELEMENT,h.subarray(v.offset,v.offset+v.count)),v.count=-1),d.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(t.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,d));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(f.buffer,c,d),f.version=c.version}}return{get:s,remove:a,update:l}}class rc extends Si{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,h=n/l,v=[],_=[],y=[],p=[];for(let u=0;u<d;u++){const g=u*h-s;for(let m=0;m<c;m++){const x=m*f-o;_.push(x,-g,0),y.push(0,0,1),p.push(m/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<a;g++){const m=g+c*u,x=g+c*(u+1),A=g+1+c*(u+1),E=g+1+c*u;v.push(m,x,E),v.push(x,A,E)}this.setIndex(v),this.setAttribute("position",new Pr(_,3)),this.setAttribute("normal",new Pr(y,3)),this.setAttribute("uv",new Pr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rc(e.width,e.height,e.widthSegments,e.heightSegments)}}var t1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,n1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,i1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,r1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,s1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,a1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,l1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,c1=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,u1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,d1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,f1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,h1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,p1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,m1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,g1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,v1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,x1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,y1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,S1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,M1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,E1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,w1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,T1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,b1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,A1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,C1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,R1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,P1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,L1="gl_FragColor = linearToOutputTexel( gl_FragColor );",D1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,I1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,U1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,N1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,F1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,k1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,O1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,z1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,B1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,H1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,G1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,V1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,W1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,j1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,X1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Y1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,q1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,K1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Z1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Q1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,J1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,eE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,iE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,aE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,lE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,vE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,_E=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,xE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,SE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ME=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,TE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,AE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,CE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,PE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,LE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,DE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,UE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,NE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,FE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,OE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,BE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,HE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,VE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,WE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,XE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,YE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$E=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,KE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ZE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,QE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,JE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ew=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ow=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,cw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,uw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_w=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Mw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ew=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ww=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Aw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Pw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Iw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:t1,alphahash_pars_fragment:n1,alphamap_fragment:i1,alphamap_pars_fragment:r1,alphatest_fragment:o1,alphatest_pars_fragment:s1,aomap_fragment:a1,aomap_pars_fragment:l1,batching_pars_vertex:c1,batching_vertex:u1,begin_vertex:d1,beginnormal_vertex:f1,bsdfs:h1,iridescence_fragment:p1,bumpmap_pars_fragment:m1,clipping_planes_fragment:g1,clipping_planes_pars_fragment:v1,clipping_planes_pars_vertex:_1,clipping_planes_vertex:x1,color_fragment:y1,color_pars_fragment:S1,color_pars_vertex:M1,color_vertex:E1,common:w1,cube_uv_reflection_fragment:T1,defaultnormal_vertex:b1,displacementmap_pars_vertex:A1,displacementmap_vertex:C1,emissivemap_fragment:R1,emissivemap_pars_fragment:P1,colorspace_fragment:L1,colorspace_pars_fragment:D1,envmap_fragment:I1,envmap_common_pars_fragment:U1,envmap_pars_fragment:N1,envmap_pars_vertex:F1,envmap_physical_pars_fragment:$1,envmap_vertex:k1,fog_vertex:O1,fog_pars_vertex:z1,fog_fragment:B1,fog_pars_fragment:H1,gradientmap_pars_fragment:G1,lightmap_fragment:V1,lightmap_pars_fragment:W1,lights_lambert_fragment:j1,lights_lambert_pars_fragment:X1,lights_pars_begin:Y1,lights_toon_fragment:q1,lights_toon_pars_fragment:K1,lights_phong_fragment:Z1,lights_phong_pars_fragment:Q1,lights_physical_fragment:J1,lights_physical_pars_fragment:eE,lights_fragment_begin:tE,lights_fragment_maps:nE,lights_fragment_end:iE,logdepthbuf_fragment:rE,logdepthbuf_pars_fragment:oE,logdepthbuf_pars_vertex:sE,logdepthbuf_vertex:aE,map_fragment:lE,map_pars_fragment:cE,map_particle_fragment:uE,map_particle_pars_fragment:dE,metalnessmap_fragment:fE,metalnessmap_pars_fragment:hE,morphinstance_vertex:pE,morphcolor_vertex:mE,morphnormal_vertex:gE,morphtarget_pars_vertex:vE,morphtarget_vertex:_E,normal_fragment_begin:xE,normal_fragment_maps:yE,normal_pars_fragment:SE,normal_pars_vertex:ME,normal_vertex:EE,normalmap_pars_fragment:wE,clearcoat_normal_fragment_begin:TE,clearcoat_normal_fragment_maps:bE,clearcoat_pars_fragment:AE,iridescence_pars_fragment:CE,opaque_fragment:RE,packing:PE,premultiplied_alpha_fragment:LE,project_vertex:DE,dithering_fragment:IE,dithering_pars_fragment:UE,roughnessmap_fragment:NE,roughnessmap_pars_fragment:FE,shadowmap_pars_fragment:kE,shadowmap_pars_vertex:OE,shadowmap_vertex:zE,shadowmask_pars_fragment:BE,skinbase_vertex:HE,skinning_pars_vertex:GE,skinning_vertex:VE,skinnormal_vertex:WE,specularmap_fragment:jE,specularmap_pars_fragment:XE,tonemapping_fragment:YE,tonemapping_pars_fragment:$E,transmission_fragment:qE,transmission_pars_fragment:KE,uv_pars_fragment:ZE,uv_pars_vertex:QE,uv_vertex:JE,worldpos_vertex:ew,background_vert:tw,background_frag:nw,backgroundCube_vert:iw,backgroundCube_frag:rw,cube_vert:ow,cube_frag:sw,depth_vert:aw,depth_frag:lw,distanceRGBA_vert:cw,distanceRGBA_frag:uw,equirect_vert:dw,equirect_frag:fw,linedashed_vert:hw,linedashed_frag:pw,meshbasic_vert:mw,meshbasic_frag:gw,meshlambert_vert:vw,meshlambert_frag:_w,meshmatcap_vert:xw,meshmatcap_frag:yw,meshnormal_vert:Sw,meshnormal_frag:Mw,meshphong_vert:Ew,meshphong_frag:ww,meshphysical_vert:Tw,meshphysical_frag:bw,meshtoon_vert:Aw,meshtoon_frag:Cw,points_vert:Rw,points_frag:Pw,shadow_vert:Lw,shadow_frag:Dw,sprite_vert:Iw,sprite_frag:Uw},ae={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Yn={basic:{uniforms:Vt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Vt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Vt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Vt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Vt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Vt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Vt([ae.points,ae.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Vt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Vt([ae.common,ae.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Vt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Vt([ae.sprite,ae.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Vt([ae.common,ae.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Vt([ae.lights,ae.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Yn.physical={uniforms:Vt([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const Oa={r:0,b:0,g:0},cr=new xi,Nw=new xt;function Fw(t,e,n,i,r,o,s){const a=new Xe(0);let l=o===!0?0:1,c,d,f=null,h=0,v=null;function _(p,u){let g=!1,m=u.isScene===!0?u.background:null;m&&m.isTexture&&(m=(u.backgroundBlurriness>0?n:e).get(m)),m===null?y(a,l):m&&m.isColor&&(y(m,1),g=!0);const x=t.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,s):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),m&&(m.isCubeTexture||m.mapping===tc)?(d===void 0&&(d=new hi(new Zs(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:ko(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,E,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),cr.copy(u.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,m.isCubeTexture&&m.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),d.material.uniforms.envMap.value=m,d.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Nw.makeRotationFromEuler(cr)),d.material.toneMapped=Ze.getTransfer(m.colorSpace)!==nt,(f!==m||h!==m.version||v!==t.toneMapping)&&(d.material.needsUpdate=!0,f=m,h=m.version,v=t.toneMapping),d.layers.enableAll(),p.unshift(d,d.geometry,d.material,0,0,null)):m&&m.isTexture&&(c===void 0&&(c=new hi(new rc(2,2),new Qi({name:"BackgroundMaterial",uniforms:ko(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=m,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(m.colorSpace)!==nt,m.matrixAutoUpdate===!0&&m.updateMatrix(),c.material.uniforms.uvTransform.value.copy(m.matrix),(f!==m||h!==m.version||v!==t.toneMapping)&&(c.material.needsUpdate=!0,f=m,h=m.version,v=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function y(p,u){p.getRGB(Oa,Lv(t)),i.buffers.color.setClear(Oa.r,Oa.g,Oa.b,u,s)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,y(a,l)},render:_}}function kw(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},l=p(null);let c=l,d=!1;function f(R,G,I,B,P){let k=!1;if(s){const H=y(B,I,G);c!==H&&(c=H,v(c.object)),k=u(R,B,I,P),k&&g(R,B,I,P)}else{const H=G.wireframe===!0;(c.geometry!==B.id||c.program!==I.id||c.wireframe!==H)&&(c.geometry=B.id,c.program=I.id,c.wireframe=H,k=!0)}P!==null&&n.update(P,t.ELEMENT_ARRAY_BUFFER),(k||d)&&(d=!1,L(R,G,I,B),P!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(P).buffer))}function h(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function v(R){return i.isWebGL2?t.bindVertexArray(R):o.bindVertexArrayOES(R)}function _(R){return i.isWebGL2?t.deleteVertexArray(R):o.deleteVertexArrayOES(R)}function y(R,G,I){const B=I.wireframe===!0;let P=a[R.id];P===void 0&&(P={},a[R.id]=P);let k=P[G.id];k===void 0&&(k={},P[G.id]=k);let H=k[B];return H===void 0&&(H=p(h()),k[B]=H),H}function p(R){const G=[],I=[],B=[];for(let P=0;P<r;P++)G[P]=0,I[P]=0,B[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:I,attributeDivisors:B,object:R,attributes:{},index:null}}function u(R,G,I,B){const P=c.attributes,k=G.attributes;let H=0;const Z=I.getAttributes();for(const ee in Z)if(Z[ee].location>=0){const j=P[ee];let te=k[ee];if(te===void 0&&(ee==="instanceMatrix"&&R.instanceMatrix&&(te=R.instanceMatrix),ee==="instanceColor"&&R.instanceColor&&(te=R.instanceColor)),j===void 0||j.attribute!==te||te&&j.data!==te.data)return!0;H++}return c.attributesNum!==H||c.index!==B}function g(R,G,I,B){const P={},k=G.attributes;let H=0;const Z=I.getAttributes();for(const ee in Z)if(Z[ee].location>=0){let j=k[ee];j===void 0&&(ee==="instanceMatrix"&&R.instanceMatrix&&(j=R.instanceMatrix),ee==="instanceColor"&&R.instanceColor&&(j=R.instanceColor));const te={};te.attribute=j,j&&j.data&&(te.data=j.data),P[ee]=te,H++}c.attributes=P,c.attributesNum=H,c.index=B}function m(){const R=c.newAttributes;for(let G=0,I=R.length;G<I;G++)R[G]=0}function x(R){A(R,0)}function A(R,G){const I=c.newAttributes,B=c.enabledAttributes,P=c.attributeDivisors;I[R]=1,B[R]===0&&(t.enableVertexAttribArray(R),B[R]=1),P[R]!==G&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,G),P[R]=G)}function E(){const R=c.newAttributes,G=c.enabledAttributes;for(let I=0,B=G.length;I<B;I++)G[I]!==R[I]&&(t.disableVertexAttribArray(I),G[I]=0)}function b(R,G,I,B,P,k,H){H===!0?t.vertexAttribIPointer(R,G,I,P,k):t.vertexAttribPointer(R,G,I,B,P,k)}function L(R,G,I,B){if(i.isWebGL2===!1&&(R.isInstancedMesh||B.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const P=B.attributes,k=I.getAttributes(),H=G.defaultAttributeValues;for(const Z in k){const ee=k[Z];if(ee.location>=0){let ge=P[Z];if(ge===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(ge=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(ge=R.instanceColor)),ge!==void 0){const j=ge.normalized,te=ge.itemSize,ce=n.get(ge);if(ce===void 0)continue;const Ee=ce.buffer,ye=ce.type,me=ce.bytesPerElement,qe=i.isWebGL2===!0&&(ye===t.INT||ye===t.UNSIGNED_INT||ge.gpuType===hv);if(ge.isInterleavedBufferAttribute){const Ce=ge.data,W=Ce.stride,Ct=ge.offset;if(Ce.isInstancedInterleavedBuffer){for(let Me=0;Me<ee.locationSize;Me++)A(ee.location+Me,Ce.meshPerAttribute);R.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let Me=0;Me<ee.locationSize;Me++)x(ee.location+Me);t.bindBuffer(t.ARRAY_BUFFER,Ee);for(let Me=0;Me<ee.locationSize;Me++)b(ee.location+Me,te/ee.locationSize,ye,j,W*me,(Ct+te/ee.locationSize*Me)*me,qe)}else{if(ge.isInstancedBufferAttribute){for(let Ce=0;Ce<ee.locationSize;Ce++)A(ee.location+Ce,ge.meshPerAttribute);R.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Ce=0;Ce<ee.locationSize;Ce++)x(ee.location+Ce);t.bindBuffer(t.ARRAY_BUFFER,Ee);for(let Ce=0;Ce<ee.locationSize;Ce++)b(ee.location+Ce,te/ee.locationSize,ye,j,te*me,te/ee.locationSize*Ce*me,qe)}}else if(H!==void 0){const j=H[Z];if(j!==void 0)switch(j.length){case 2:t.vertexAttrib2fv(ee.location,j);break;case 3:t.vertexAttrib3fv(ee.location,j);break;case 4:t.vertexAttrib4fv(ee.location,j);break;default:t.vertexAttrib1fv(ee.location,j)}}}}E()}function F(){N();for(const R in a){const G=a[R];for(const I in G){const B=G[I];for(const P in B)_(B[P].object),delete B[P];delete G[I]}delete a[R]}}function S(R){if(a[R.id]===void 0)return;const G=a[R.id];for(const I in G){const B=G[I];for(const P in B)_(B[P].object),delete B[P];delete G[I]}delete a[R.id]}function w(R){for(const G in a){const I=a[G];if(I[R.id]===void 0)continue;const B=I[R.id];for(const P in B)_(B[P].object),delete B[P];delete I[R.id]}}function N(){O(),d=!0,c!==l&&(c=l,v(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:N,resetDefaultState:O,dispose:F,releaseStatesOfGeometry:S,releaseStatesOfProgram:w,initAttributes:m,enableAttribute:x,disableUnusedAttributes:E}}function Ow(t,e,n,i){const r=i.isWebGL2;let o;function s(d){o=d}function a(d,f){t.drawArrays(o,d,f),n.update(f,o,1)}function l(d,f,h){if(h===0)return;let v,_;if(r)v=t,_="drawArraysInstanced";else if(v=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[_](o,d,f,h),n.update(f,o,h)}function c(d,f,h){if(h===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<h;_++)this.render(d[_],f[_]);else{v.multiDrawArraysWEBGL(o,d,0,f,0,h);let _=0;for(let y=0;y<h;y++)_+=f[y];n.update(_,o,1)}}this.setMode=s,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function zw(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=o(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=s||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),m=h>0,x=s||e.has("OES_texture_float"),A=m&&x,E=s?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:h,maxTextureSize:v,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:g,vertexTextures:m,floatFragmentTextures:x,floatVertexTextures:A,maxSamples:E}}function Bw(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new pr,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const v=f.length!==0||h||i!==0||r;return r=h,i=f.length,v},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,v){const _=f.clippingPlanes,y=f.clipIntersection,p=f.clipShadows,u=t.get(f);if(!r||_===null||_.length===0||o&&!p)o?d(null):c();else{const g=o?0:i,m=g*4;let x=u.clippingState||null;l.value=x,x=d(_,h,m,v);for(let A=0;A!==m;++A)x[A]=n[A];u.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,v,_){const y=f!==null?f.length:0;let p=null;if(y!==0){if(p=l.value,_!==!0||p===null){const u=v+y*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(p===null||p.length<u)&&(p=new Float32Array(u));for(let m=0,x=v;m!==y;++m,x+=4)s.copy(f[m]).applyMatrix4(g,a),s.normal.toArray(p,x),p[x+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function Hw(t){let e=new WeakMap;function n(s,a){return a===vd?s.mapping=Uo:a===_d&&(s.mapping=No),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===vd||a===_d)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new ZM(l.height);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",r),n(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class Gw extends Dv{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const go=4,Jp=[.125,.215,.35,.446,.526,.582],xr=20,uu=new Gw,em=new Xe;let du=null,fu=0,hu=0;const mr=(1+Math.sqrt(5))/2,no=1/mr,tm=[new $(1,1,1),new $(-1,1,1),new $(1,1,-1),new $(-1,1,-1),new $(0,mr,no),new $(0,mr,-no),new $(no,0,mr),new $(-no,0,mr),new $(mr,no,0),new $(-mr,no,0)];class nm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){du=this._renderer.getRenderTarget(),fu=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=om(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(du,fu,hu),e.scissorTest=!1,za(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Uo||e.mapping===No?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),du=this._renderer.getRenderTarget(),fu=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:zs,format:zn,colorSpace:nr,depthBuffer:!1},r=im(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=im(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vw(o)),this._blurMaterial=Ww(o,e,n)}return r}_compileMaterial(e){const n=new hi(this._lodPlanes[0],e);this._renderer.compile(n,uu)}_sceneToCubeUV(e,n,i,r){const a=new bn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(em),d.toneMapping=Yi,d.autoClear=!1;const v=new Cv({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),_=new hi(new Zs,v);let y=!1;const p=e.background;p?p.isColor&&(v.color.copy(p),e.background=null,y=!0):(v.color.copy(em),y=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):g===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const m=this._cubeSize;za(r,g*m,u>2?m:0,m,m),d.setRenderTarget(r),y&&d.render(_,a),d.render(e,a)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Uo||e.mapping===No;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=om()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rm());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new hi(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;za(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,uu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=tm[(r-1)%tm.length];this._blur(e,r-1,r,o,s)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new hi(this._lodPlanes[r],c),h=c.uniforms,v=this._sizeLods[i]-1,_=isFinite(o)?Math.PI/(2*v):2*Math.PI/(2*xr-1),y=o/_,p=isFinite(o)?1+Math.floor(d*y):xr;p>xr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${xr}`);const u=[];let g=0;for(let b=0;b<xr;++b){const L=b/y,F=Math.exp(-L*L/2);u.push(F),b===0?g+=F:b<p&&(g+=2*F)}for(let b=0;b<u.length;b++)u[b]=u[b]/g;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:m}=this;h.dTheta.value=_,h.mipInt.value=m-i;const x=this._sizeLods[r],A=3*x*(r>m-go?r-m+go:0),E=4*(this._cubeSize-x);za(n,A,E,3*x,2*x),l.setRenderTarget(n),l.render(f,uu)}}function Vw(t){const e=[],n=[],i=[];let r=t;const o=t-go+1+Jp.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-go?l=Jp[s-t+go-1]:s===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],v=6,_=6,y=3,p=2,u=1,g=new Float32Array(y*_*v),m=new Float32Array(p*_*v),x=new Float32Array(u*_*v);for(let E=0;E<v;E++){const b=E%3*2/3-1,L=E>2?0:-1,F=[b,L,0,b+2/3,L,0,b+2/3,L+1,0,b,L,0,b+2/3,L+1,0,b,L+1,0];g.set(F,y*_*E),m.set(h,p*_*E);const S=[E,E,E,E,E,E];x.set(S,u*_*E)}const A=new Si;A.setAttribute("position",new vn(g,y)),A.setAttribute("uv",new vn(m,p)),A.setAttribute("faceIndex",new vn(x,u)),e.push(A),r>go&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function im(t,e,n){const i=new Fr(t,e,n);return i.texture.mapping=tc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function za(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Ww(t,e,n){const i=new Float32Array(xr),r=new $(0,1,0);return new Qi({name:"SphericalGaussianBlur",defines:{n:xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function rm(){return new Qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function om(){return new Qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Cf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===vd||l===_d,d=l===Uo||l===No;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new nm(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||d&&f&&r(f)){n===null&&(n=new nm(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",o),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function Xw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Yw(t,e,n,i){const r={},o=new WeakMap;function s(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const y=h.morphAttributes[_];for(let p=0,u=y.length;p<u;p++)e.remove(y[p])}h.removeEventListener("dispose",s),delete r[h.id];const v=o.get(h);v&&(e.remove(v),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const v=f.morphAttributes;for(const _ in v){const y=v[_];for(let p=0,u=y.length;p<u;p++)e.update(y[p],t.ARRAY_BUFFER)}}function c(f){const h=[],v=f.index,_=f.attributes.position;let y=0;if(v!==null){const g=v.array;y=v.version;for(let m=0,x=g.length;m<x;m+=3){const A=g[m+0],E=g[m+1],b=g[m+2];h.push(A,E,E,b,b,A)}}else if(_!==void 0){const g=_.array;y=_.version;for(let m=0,x=g.length/3-1;m<x;m+=3){const A=m+0,E=m+1,b=m+2;h.push(A,E,E,b,b,A)}}else return;const p=new(Sv(h)?Pv:Rv)(h,1);p.version=y;const u=o.get(f);u&&e.remove(u),o.set(f,p)}function d(f){const h=o.get(f);if(h){const v=f.index;v!==null&&h.version<v.version&&c(f)}else c(f);return o.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function $w(t,e,n,i){const r=i.isWebGL2;let o;function s(v){o=v}let a,l;function c(v){a=v.type,l=v.bytesPerElement}function d(v,_){t.drawElements(o,_,a,v*l),n.update(_,o,1)}function f(v,_,y){if(y===0)return;let p,u;if(r)p=t,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](o,_,a,v*l,y),n.update(_,o,y)}function h(v,_,y){if(y===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<y;u++)this.render(v[u]/l,_[u]);else{p.multiDrawElementsWEBGL(o,_,0,a,v,0,y);let u=0;for(let g=0;g<y;g++)u+=_[g];n.update(u,o,1)}}this.setMode=s,this.setIndex=c,this.render=d,this.renderInstances=f,this.renderMultiDraw=h}function qw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Kw(t,e){return t[0]-e[0]}function Zw(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Qw(t,e,n){const i={},r=new Float32Array(8),o=new WeakMap,s=new Lt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=_!==void 0?_.length:0;let p=o.get(d);if(p===void 0||p.count!==y){let O=function(){w.dispose(),o.delete(d),d.removeEventListener("dispose",O)};var v=O;p!==void 0&&p.texture.dispose();const u=d.morphAttributes.position!==void 0,g=d.morphAttributes.normal!==void 0,m=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],A=d.morphAttributes.normal||[],E=d.morphAttributes.color||[];let b=0;u===!0&&(b=1),g===!0&&(b=2),m===!0&&(b=3);let L=d.attributes.position.count*b,F=1;L>e.maxTextureSize&&(F=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const S=new Float32Array(L*F*4*y),w=new wv(S,L,F,y);w.type=li,w.needsUpdate=!0;const N=b*4;for(let R=0;R<y;R++){const G=x[R],I=A[R],B=E[R],P=L*F*4*R;for(let k=0;k<G.count;k++){const H=k*N;u===!0&&(s.fromBufferAttribute(G,k),S[P+H+0]=s.x,S[P+H+1]=s.y,S[P+H+2]=s.z,S[P+H+3]=0),g===!0&&(s.fromBufferAttribute(I,k),S[P+H+4]=s.x,S[P+H+5]=s.y,S[P+H+6]=s.z,S[P+H+7]=0),m===!0&&(s.fromBufferAttribute(B,k),S[P+H+8]=s.x,S[P+H+9]=s.y,S[P+H+10]=s.z,S[P+H+11]=B.itemSize===4?s.w:1)}}p={count:y,texture:w,size:new $e(L,F)},o.set(d,p),d.addEventListener("dispose",O)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(t,"morphTexture",c.morphTexture,n);else{let u=0;for(let m=0;m<h.length;m++)u+=h[m];const g=d.morphTargetsRelative?1:1-u;f.getUniforms().setValue(t,"morphTargetBaseInfluence",g),f.getUniforms().setValue(t,"morphTargetInfluences",h)}f.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const _=h===void 0?0:h.length;let y=i[d.id];if(y===void 0||y.length!==_){y=[];for(let x=0;x<_;x++)y[x]=[x,0];i[d.id]=y}for(let x=0;x<_;x++){const A=y[x];A[0]=x,A[1]=h[x]}y.sort(Zw);for(let x=0;x<8;x++)x<_&&y[x][1]?(a[x][0]=y[x][0],a[x][1]=y[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Kw);const p=d.morphAttributes.position,u=d.morphAttributes.normal;let g=0;for(let x=0;x<8;x++){const A=a[x],E=A[0],b=A[1];E!==Number.MAX_SAFE_INTEGER&&b?(p&&d.getAttribute("morphTarget"+x)!==p[E]&&d.setAttribute("morphTarget"+x,p[E]),u&&d.getAttribute("morphNormal"+x)!==u[E]&&d.setAttribute("morphNormal"+x,u[E]),r[x]=b,g+=b):(p&&d.hasAttribute("morphTarget"+x)===!0&&d.deleteAttribute("morphTarget"+x),u&&d.hasAttribute("morphNormal"+x)===!0&&d.deleteAttribute("morphNormal"+x),r[x]=0)}const m=d.morphTargetsRelative?1:1-g;f.getUniforms().setValue(t,"morphTargetBaseInfluence",m),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function Jw(t,e,n,i){let r=new WeakMap;function o(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function s(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:o,dispose:s}}class Fv extends sn{constructor(e,n,i,r,o,s,a,l,c,d){if(d=d!==void 0?d:Rr,d!==Rr&&d!==Fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Rr&&(i=ki),i===void 0&&d===Fo&&(i=Cr),super(null,r,o,s,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:jt,this.minFilter=l!==void 0?l:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const kv=new sn,Ov=new Fv(1,1);Ov.compareFunction=yv;const zv=new wv,Bv=new UM,Hv=new Iv,sm=[],am=[],lm=new Float32Array(16),cm=new Float32Array(9),um=new Float32Array(4);function Vo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=sm[r];if(o===void 0&&(o=new Float32Array(r),sm[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Mt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Et(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function oc(t,e){let n=am[e];n===void 0&&(n=new Int32Array(e),am[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function eT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function tT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2fv(this.addr,e),Et(n,e)}}function nT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Mt(n,e))return;t.uniform3fv(this.addr,e),Et(n,e)}}function iT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4fv(this.addr,e),Et(n,e)}}function rT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Et(n,e)}else{if(Mt(n,i))return;um.set(i),t.uniformMatrix2fv(this.addr,!1,um),Et(n,i)}}function oT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Et(n,e)}else{if(Mt(n,i))return;cm.set(i),t.uniformMatrix3fv(this.addr,!1,cm),Et(n,i)}}function sT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Et(n,e)}else{if(Mt(n,i))return;lm.set(i),t.uniformMatrix4fv(this.addr,!1,lm),Et(n,i)}}function aT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function lT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2iv(this.addr,e),Et(n,e)}}function cT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Mt(n,e))return;t.uniform3iv(this.addr,e),Et(n,e)}}function uT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4iv(this.addr,e),Et(n,e)}}function dT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function fT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2uiv(this.addr,e),Et(n,e)}}function hT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Mt(n,e))return;t.uniform3uiv(this.addr,e),Et(n,e)}}function pT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4uiv(this.addr,e),Et(n,e)}}function mT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const o=this.type===t.SAMPLER_2D_SHADOW?Ov:kv;n.setTexture2D(e||o,r)}function gT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Bv,r)}function vT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Hv,r)}function _T(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||zv,r)}function xT(t){switch(t){case 5126:return eT;case 35664:return tT;case 35665:return nT;case 35666:return iT;case 35674:return rT;case 35675:return oT;case 35676:return sT;case 5124:case 35670:return aT;case 35667:case 35671:return lT;case 35668:case 35672:return cT;case 35669:case 35673:return uT;case 5125:return dT;case 36294:return fT;case 36295:return hT;case 36296:return pT;case 35678:case 36198:case 36298:case 36306:case 35682:return mT;case 35679:case 36299:case 36307:return gT;case 35680:case 36300:case 36308:case 36293:return vT;case 36289:case 36303:case 36311:case 36292:return _T}}function yT(t,e){t.uniform1fv(this.addr,e)}function ST(t,e){const n=Vo(e,this.size,2);t.uniform2fv(this.addr,n)}function MT(t,e){const n=Vo(e,this.size,3);t.uniform3fv(this.addr,n)}function ET(t,e){const n=Vo(e,this.size,4);t.uniform4fv(this.addr,n)}function wT(t,e){const n=Vo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function TT(t,e){const n=Vo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function bT(t,e){const n=Vo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function AT(t,e){t.uniform1iv(this.addr,e)}function CT(t,e){t.uniform2iv(this.addr,e)}function RT(t,e){t.uniform3iv(this.addr,e)}function PT(t,e){t.uniform4iv(this.addr,e)}function LT(t,e){t.uniform1uiv(this.addr,e)}function DT(t,e){t.uniform2uiv(this.addr,e)}function IT(t,e){t.uniform3uiv(this.addr,e)}function UT(t,e){t.uniform4uiv(this.addr,e)}function NT(t,e,n){const i=this.cache,r=e.length,o=oc(n,r);Mt(i,o)||(t.uniform1iv(this.addr,o),Et(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||kv,o[s])}function FT(t,e,n){const i=this.cache,r=e.length,o=oc(n,r);Mt(i,o)||(t.uniform1iv(this.addr,o),Et(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||Bv,o[s])}function kT(t,e,n){const i=this.cache,r=e.length,o=oc(n,r);Mt(i,o)||(t.uniform1iv(this.addr,o),Et(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||Hv,o[s])}function OT(t,e,n){const i=this.cache,r=e.length,o=oc(n,r);Mt(i,o)||(t.uniform1iv(this.addr,o),Et(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||zv,o[s])}function zT(t){switch(t){case 5126:return yT;case 35664:return ST;case 35665:return MT;case 35666:return ET;case 35674:return wT;case 35675:return TT;case 35676:return bT;case 5124:case 35670:return AT;case 35667:case 35671:return CT;case 35668:case 35672:return RT;case 35669:case 35673:return PT;case 5125:return LT;case 36294:return DT;case 36295:return IT;case 36296:return UT;case 35678:case 36198:case 36298:case 36306:case 35682:return NT;case 35679:case 36299:case 36307:return FT;case 35680:case 36300:case 36308:case 36293:return kT;case 36289:case 36303:case 36311:case 36292:return OT}}class BT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=xT(n.type)}}class HT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=zT(n.type)}}class GT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const pu=/(\w+)(\])?(\[|\.)?/g;function dm(t,e){t.seq.push(e),t.map[e.id]=e}function VT(t,e,n){const i=t.name,r=i.length;for(pu.lastIndex=0;;){const o=pu.exec(i),s=pu.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){dm(n,c===void 0?new BT(a,t,e):new HT(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new GT(a),dm(n,f)),n=f}}}class al{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);VT(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function fm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const WT=37297;let jT=0;function XT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function YT(t){const e=Ze.getPrimaries(Ze.workingColorSpace),n=Ze.getPrimaries(t);let i;switch(e===n?i="":e===Nl&&n===Ul?i="LinearDisplayP3ToLinearSRGB":e===Ul&&n===Nl&&(i="LinearSRGBToLinearDisplayP3"),t){case nr:case nc:return[i,"LinearTransferOETF"];case Xn:case Af:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function hm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+XT(t.getShaderSource(e),s)}else return r}function $T(t,e){const n=YT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function qT(t,e){let n;switch(e){case tM:n="Linear";break;case nM:n="Reinhard";break;case iM:n="OptimizedCineon";break;case rM:n="ACESFilmic";break;case sM:n="AgX";break;case aM:n="Neutral";break;case oM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function KT(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vo).join(`
`)}function ZT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vo).join(`
`)}function QT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function JT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function vo(t){return t!==""}function pm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const e2=/^[ \t]*#include +<([\w\d./]+)>/gm;function wd(t){return t.replace(e2,n2)}const t2=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function n2(t,e){let n=Ne[e];if(n===void 0){const i=t2.get(e);if(i!==void 0)n=Ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return wd(n)}const i2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gm(t){return t.replace(i2,r2)}function r2(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function vm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	`;return t.isWebGL2&&(e+=`precision ${t.precision} sampler3D;
		precision ${t.precision} sampler2DArray;
		precision ${t.precision} sampler2DShadow;
		precision ${t.precision} samplerCubeShadow;
		precision ${t.precision} sampler2DArrayShadow;
		precision ${t.precision} isampler2D;
		precision ${t.precision} isampler3D;
		precision ${t.precision} isamplerCube;
		precision ${t.precision} isampler2DArray;
		precision ${t.precision} usampler2D;
		precision ${t.precision} usampler3D;
		precision ${t.precision} usamplerCube;
		precision ${t.precision} usampler2DArray;
		`),t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function o2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===uv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===RS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function s2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Uo:case No:e="ENVMAP_TYPE_CUBE";break;case tc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function a2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case No:e="ENVMAP_MODE_REFRACTION";break}return e}function l2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case dv:e="ENVMAP_BLENDING_MULTIPLY";break;case JS:e="ENVMAP_BLENDING_MIX";break;case eM:e="ENVMAP_BLENDING_ADD";break}return e}function c2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function u2(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=o2(n),c=s2(n),d=a2(n),f=l2(n),h=c2(n),v=n.isWebGL2?"":KT(n),_=ZT(n),y=QT(o),p=r.createProgram();let u,g,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(vo).join(`
`),u.length>0&&(u+=`
`),g=[v,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(vo).join(`
`),g.length>0&&(g+=`
`)):(u=[vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vo).join(`
`),g=[v,vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Yi?"#define TONE_MAPPING":"",n.toneMapping!==Yi?Ne.tonemapping_pars_fragment:"",n.toneMapping!==Yi?qT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,$T("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(vo).join(`
`)),s=wd(s),s=pm(s,n),s=mm(s,n),a=wd(a),a=pm(a,n),a=mm(a,n),s=gm(s),a=gm(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,g=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Ip?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ip?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=m+u+s,A=m+g+a,E=fm(r,r.VERTEX_SHADER,x),b=fm(r,r.FRAGMENT_SHADER,A);r.attachShader(p,E),r.attachShader(p,b),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function L(N){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(p).trim(),R=r.getShaderInfoLog(E).trim(),G=r.getShaderInfoLog(b).trim();let I=!0,B=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(I=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,E,b);else{const P=hm(r,E,"vertex"),k=hm(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+O+`
`+P+`
`+k)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(R===""||G==="")&&(B=!1);B&&(N.diagnostics={runnable:I,programLog:O,vertexShader:{log:R,prefix:u},fragmentShader:{log:G,prefix:g}})}r.deleteShader(E),r.deleteShader(b),F=new al(r,p),S=JT(r,p)}let F;this.getUniforms=function(){return F===void 0&&L(this),F};let S;this.getAttributes=function(){return S===void 0&&L(this),S};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(p,WT)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=jT++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=b,this}let d2=0;class f2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new h2(e),n.set(e,i)),i}}class h2{constructor(e){this.id=d2++,this.code=e,this.usedTimes=0}}function p2(t,e,n,i,r,o,s){const a=new bv,l=new f2,c=new Set,d=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,v=r.vertexTextures;let _=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(S){return c.add(S),S===0?"uv":`uv${S}`}function u(S,w,N,O,R){const G=O.fog,I=R.geometry,B=S.isMeshStandardMaterial?O.environment:null,P=(S.isMeshStandardMaterial?n:e).get(S.envMap||B),k=P&&P.mapping===tc?P.image.height:null,H=y[S.type];S.precision!==null&&(_=r.getMaxPrecision(S.precision),_!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",_,"instead."));const Z=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ee=Z!==void 0?Z.length:0;let ge=0;I.morphAttributes.position!==void 0&&(ge=1),I.morphAttributes.normal!==void 0&&(ge=2),I.morphAttributes.color!==void 0&&(ge=3);let j,te,ce,Ee;if(H){const Qe=Yn[H];j=Qe.vertexShader,te=Qe.fragmentShader}else j=S.vertexShader,te=S.fragmentShader,l.update(S),ce=l.getVertexShaderID(S),Ee=l.getFragmentShaderID(S);const ye=t.getRenderTarget(),me=R.isInstancedMesh===!0,qe=R.isBatchedMesh===!0,Ce=!!S.map,W=!!S.matcap,Ct=!!P,Me=!!S.aoMap,ze=!!S.lightMap,Te=!!S.bumpMap,We=!!S.normalMap,ke=!!S.displacementMap,Be=!!S.emissiveMap,ft=!!S.metalnessMap,D=!!S.roughnessMap,T=S.anisotropy>0,Q=S.clearcoat>0,J=S.iridescence>0,re=S.sheen>0,ne=S.transmission>0,De=T&&!!S.anisotropyMap,be=Q&&!!S.clearcoatMap,le=Q&&!!S.clearcoatNormalMap,de=Q&&!!S.clearcoatRoughnessMap,Ie=J&&!!S.iridescenceMap,oe=J&&!!S.iridescenceThicknessMap,mt=re&&!!S.sheenColorMap,He=re&&!!S.sheenRoughnessMap,Se=!!S.specularMap,ve=!!S.specularColorMap,_e=!!S.specularIntensityMap,je=ne&&!!S.transmissionMap,Pe=ne&&!!S.thicknessMap,rt=!!S.gradientMap,z=!!S.alphaMap,ue=S.alphaTest>0,Y=!!S.alphaHash,se=!!S.extensions;let fe=Yi;S.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(fe=t.toneMapping);const Ve={isWebGL2:f,shaderID:H,shaderType:S.type,shaderName:S.name,vertexShader:j,fragmentShader:te,defines:S.defines,customVertexShaderID:ce,customFragmentShaderID:Ee,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:_,batching:qe,instancing:me,instancingColor:me&&R.instanceColor!==null,instancingMorph:me&&R.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ye===null?t.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:nr,alphaToCoverage:!!S.alphaToCoverage,map:Ce,matcap:W,envMap:Ct,envMapMode:Ct&&P.mapping,envMapCubeUVHeight:k,aoMap:Me,lightMap:ze,bumpMap:Te,normalMap:We,displacementMap:v&&ke,emissiveMap:Be,normalMapObjectSpace:We&&S.normalMapType===xM,normalMapTangentSpace:We&&S.normalMapType===_M,metalnessMap:ft,roughnessMap:D,anisotropy:T,anisotropyMap:De,clearcoat:Q,clearcoatMap:be,clearcoatNormalMap:le,clearcoatRoughnessMap:de,iridescence:J,iridescenceMap:Ie,iridescenceThicknessMap:oe,sheen:re,sheenColorMap:mt,sheenRoughnessMap:He,specularMap:Se,specularColorMap:ve,specularIntensityMap:_e,transmission:ne,transmissionMap:je,thicknessMap:Pe,gradientMap:rt,opaque:S.transparent===!1&&S.blending===To&&S.alphaToCoverage===!1,alphaMap:z,alphaTest:ue,alphaHash:Y,combine:S.combine,mapUv:Ce&&p(S.map.channel),aoMapUv:Me&&p(S.aoMap.channel),lightMapUv:ze&&p(S.lightMap.channel),bumpMapUv:Te&&p(S.bumpMap.channel),normalMapUv:We&&p(S.normalMap.channel),displacementMapUv:ke&&p(S.displacementMap.channel),emissiveMapUv:Be&&p(S.emissiveMap.channel),metalnessMapUv:ft&&p(S.metalnessMap.channel),roughnessMapUv:D&&p(S.roughnessMap.channel),anisotropyMapUv:De&&p(S.anisotropyMap.channel),clearcoatMapUv:be&&p(S.clearcoatMap.channel),clearcoatNormalMapUv:le&&p(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&p(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&p(S.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&p(S.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&p(S.sheenColorMap.channel),sheenRoughnessMapUv:He&&p(S.sheenRoughnessMap.channel),specularMapUv:Se&&p(S.specularMap.channel),specularColorMapUv:ve&&p(S.specularColorMap.channel),specularIntensityMapUv:_e&&p(S.specularIntensityMap.channel),transmissionMapUv:je&&p(S.transmissionMap.channel),thicknessMapUv:Pe&&p(S.thicknessMap.channel),alphaMapUv:z&&p(S.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(We||T),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!I.attributes.uv&&(Ce||z),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:R.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ge,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:fe,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ce&&S.map.isVideoTexture===!0&&Ze.getTransfer(S.map.colorSpace)===nt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ai,flipSided:S.side===on,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:se&&S.extensions.derivatives===!0,extensionFragDepth:se&&S.extensions.fragDepth===!0,extensionDrawBuffers:se&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:se&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:se&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:se&&S.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ve.vertexUv1s=c.has(1),Ve.vertexUv2s=c.has(2),Ve.vertexUv3s=c.has(3),c.clear(),Ve}function g(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const N in S.defines)w.push(N),w.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(m(w,S),x(w,S),w.push(t.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function m(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function x(S,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.instancingMorph&&a.enable(4),w.matcap&&a.enable(5),w.envMap&&a.enable(6),w.normalMapObjectSpace&&a.enable(7),w.normalMapTangentSpace&&a.enable(8),w.clearcoat&&a.enable(9),w.iridescence&&a.enable(10),w.alphaTest&&a.enable(11),w.vertexColors&&a.enable(12),w.vertexAlphas&&a.enable(13),w.vertexUv1s&&a.enable(14),w.vertexUv2s&&a.enable(15),w.vertexUv3s&&a.enable(16),w.vertexTangents&&a.enable(17),w.anisotropy&&a.enable(18),w.alphaHash&&a.enable(19),w.batching&&a.enable(20),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),S.push(a.mask)}function A(S){const w=y[S.type];let N;if(w){const O=Yn[w];N=YM.clone(O.uniforms)}else N=S.uniforms;return N}function E(S,w){let N;for(let O=0,R=d.length;O<R;O++){const G=d[O];if(G.cacheKey===w){N=G,++N.usedTimes;break}}return N===void 0&&(N=new u2(t,w,S,o),d.push(N)),N}function b(S){if(--S.usedTimes===0){const w=d.indexOf(S);d[w]=d[d.length-1],d.pop(),S.destroy()}}function L(S){l.remove(S)}function F(){l.dispose()}return{getParameters:u,getProgramCacheKey:g,getUniforms:A,acquireProgram:E,releaseProgram:b,releaseShaderCache:L,programs:d,dispose:F}}function m2(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function g2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function _m(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function xm(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(f,h,v,_,y,p){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:v,groupOrder:_,renderOrder:f.renderOrder,z:y,group:p},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=v,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=y,u.group=p),e++,u}function a(f,h,v,_,y,p){const u=s(f,h,v,_,y,p);v.transmission>0?i.push(u):v.transparent===!0?r.push(u):n.push(u)}function l(f,h,v,_,y,p){const u=s(f,h,v,_,y,p);v.transmission>0?i.unshift(u):v.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||g2),i.length>1&&i.sort(h||_m),r.length>1&&r.sort(h||_m)}function d(){for(let f=e,h=t.length;f<h;f++){const v=t[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:d,sort:c}}function v2(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new xm,t.set(i,[s])):r>=o.length?(s=new xm,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function _2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new $,color:new Xe};break;case"SpotLight":n={position:new $,direction:new $,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new $,halfWidth:new $,halfHeight:new $};break}return t[e.id]=n,n}}}function x2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let y2=0;function S2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function M2(t,e){const n=new _2,i=x2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new $);const o=new $,s=new xt,a=new xt;function l(d,f){let h=0,v=0,_=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let y=0,p=0,u=0,g=0,m=0,x=0,A=0,E=0,b=0,L=0,F=0;d.sort(S2);const S=f===!0?Math.PI:1;for(let N=0,O=d.length;N<O;N++){const R=d[N],G=R.color,I=R.intensity,B=R.distance,P=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=G.r*I*S,v+=G.g*I*S,_+=G.b*I*S;else if(R.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(R.sh.coefficients[k],I);F++}else if(R.isDirectionalLight){const k=n.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity*S),R.castShadow){const H=R.shadow,Z=i.get(R);Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,r.directionalShadow[y]=Z,r.directionalShadowMap[y]=P,r.directionalShadowMatrix[y]=R.shadow.matrix,x++}r.directional[y]=k,y++}else if(R.isSpotLight){const k=n.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(G).multiplyScalar(I*S),k.distance=B,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,r.spot[u]=k;const H=R.shadow;if(R.map&&(r.spotLightMap[b]=R.map,b++,H.updateMatrices(R),R.castShadow&&L++),r.spotLightMatrix[u]=H.matrix,R.castShadow){const Z=i.get(R);Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,r.spotShadow[u]=Z,r.spotShadowMap[u]=P,E++}u++}else if(R.isRectAreaLight){const k=n.get(R);k.color.copy(G).multiplyScalar(I),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),r.rectArea[g]=k,g++}else if(R.isPointLight){const k=n.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity*S),k.distance=R.distance,k.decay=R.decay,R.castShadow){const H=R.shadow,Z=i.get(R);Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,Z.shadowCameraNear=H.camera.near,Z.shadowCameraFar=H.camera.far,r.pointShadow[p]=Z,r.pointShadowMap[p]=P,r.pointShadowMatrix[p]=R.shadow.matrix,A++}r.point[p]=k,p++}else if(R.isHemisphereLight){const k=n.get(R);k.skyColor.copy(R.color).multiplyScalar(I*S),k.groundColor.copy(R.groundColor).multiplyScalar(I*S),r.hemi[m]=k,m++}}g>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=v,r.ambient[2]=_;const w=r.hash;(w.directionalLength!==y||w.pointLength!==p||w.spotLength!==u||w.rectAreaLength!==g||w.hemiLength!==m||w.numDirectionalShadows!==x||w.numPointShadows!==A||w.numSpotShadows!==E||w.numSpotMaps!==b||w.numLightProbes!==F)&&(r.directional.length=y,r.spot.length=u,r.rectArea.length=g,r.point.length=p,r.hemi.length=m,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=E+b-L,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=F,w.directionalLength=y,w.pointLength=p,w.spotLength=u,w.rectAreaLength=g,w.hemiLength=m,w.numDirectionalShadows=x,w.numPointShadows=A,w.numSpotShadows=E,w.numSpotMaps=b,w.numLightProbes=F,r.version=y2++)}function c(d,f){let h=0,v=0,_=0,y=0,p=0;const u=f.matrixWorldInverse;for(let g=0,m=d.length;g<m;g++){const x=d[g];if(x.isDirectionalLight){const A=r.directional[h];A.direction.setFromMatrixPosition(x.matrixWorld),o.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(u),h++}else if(x.isSpotLight){const A=r.spot[_];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(u),A.direction.setFromMatrixPosition(x.matrixWorld),o.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(u),_++}else if(x.isRectAreaLight){const A=r.rectArea[y];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(u),a.identity(),s.copy(x.matrixWorld),s.premultiply(u),a.extractRotation(s),A.halfWidth.set(x.width*.5,0,0),A.halfHeight.set(0,x.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),y++}else if(x.isPointLight){const A=r.point[v];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(u),v++}else if(x.isHemisphereLight){const A=r.hemi[p];A.direction.setFromMatrixPosition(x.matrixWorld),A.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function ym(t,e){const n=new M2(t,e),i=[],r=[];function o(){i.length=0,r.length=0}function s(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function E2(t,e){let n=new WeakMap;function i(o,s=0){const a=n.get(o);let l;return a===void 0?(l=new ym(t,e),n.set(o,[l])):s>=a.length?(l=new ym(t,e),a.push(l)):l=a[s],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class w2 extends Ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class T2 extends Ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const b2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function C2(t,e,n){let i=new Uv;const r=new $e,o=new $e,s=new Lt,a=new w2({depthPacking:vM}),l=new T2,c={},d=n.maxTextureSize,f={[Zi]:on,[on]:Zi,[ai]:ai},h=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:b2,fragmentShader:A2}),v=h.clone();v.defines.HORIZONTAL_PASS=1;const _=new Si;_.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new hi(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uv;let u=this.type;this.render=function(E,b,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const F=t.getRenderTarget(),S=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),N=t.state;N.setBlending(Xi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const O=u!==ri&&this.type===ri,R=u===ri&&this.type!==ri;for(let G=0,I=E.length;G<I;G++){const B=E[G],P=B.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const k=P.getFrameExtents();if(r.multiply(k),o.copy(P.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(o.x=Math.floor(d/k.x),r.x=o.x*k.x,P.mapSize.x=o.x),r.y>d&&(o.y=Math.floor(d/k.y),r.y=o.y*k.y,P.mapSize.y=o.y)),P.map===null||O===!0||R===!0){const Z=this.type!==ri?{minFilter:jt,magFilter:jt}:{};P.map!==null&&P.map.dispose(),P.map=new Fr(r.x,r.y,Z),P.map.texture.name=B.name+".shadowMap",P.camera.updateProjectionMatrix()}t.setRenderTarget(P.map),t.clear();const H=P.getViewportCount();for(let Z=0;Z<H;Z++){const ee=P.getViewport(Z);s.set(o.x*ee.x,o.y*ee.y,o.x*ee.z,o.y*ee.w),N.viewport(s),P.updateMatrices(B,Z),i=P.getFrustum(),x(b,L,P.camera,B,this.type)}P.isPointLightShadow!==!0&&this.type===ri&&g(P,L),P.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(F,S,w)};function g(E,b){const L=e.update(y);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,v.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,v.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Fr(r.x,r.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(b,null,L,h,y,null),v.uniforms.shadow_pass.value=E.mapPass.texture,v.uniforms.resolution.value=E.mapSize,v.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(b,null,L,v,y,null)}function m(E,b,L,F){let S=null;const w=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(w!==void 0)S=w;else if(S=L.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const N=S.uuid,O=b.uuid;let R=c[N];R===void 0&&(R={},c[N]=R);let G=R[O];G===void 0&&(G=S.clone(),R[O]=G,b.addEventListener("dispose",A)),S=G}if(S.visible=b.visible,S.wireframe=b.wireframe,F===ri?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:f[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const N=t.properties.get(S);N.light=L}return S}function x(E,b,L,F,S){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===ri)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);const O=e.update(E),R=E.material;if(Array.isArray(R)){const G=O.groups;for(let I=0,B=G.length;I<B;I++){const P=G[I],k=R[P.materialIndex];if(k&&k.visible){const H=m(E,k,F,S);E.onBeforeShadow(t,E,b,L,O,H,P),t.renderBufferDirect(L,null,O,H,E,P),E.onAfterShadow(t,E,b,L,O,H,P)}}}else if(R.visible){const G=m(E,R,F,S);E.onBeforeShadow(t,E,b,L,O,G,null),t.renderBufferDirect(L,null,O,G,E,null),E.onAfterShadow(t,E,b,L,O,G,null)}}const N=E.children;for(let O=0,R=N.length;O<R;O++)x(N[O],b,L,F,S)}function A(E){E.target.removeEventListener("dispose",A);for(const L in c){const F=c[L],S=E.target.uuid;S in F&&(F[S].dispose(),delete F[S])}}}function R2(t,e,n){const i=n.isWebGL2;function r(){let z=!1;const ue=new Lt;let Y=null;const se=new Lt(0,0,0,0);return{setMask:function(fe){Y!==fe&&!z&&(t.colorMask(fe,fe,fe,fe),Y=fe)},setLocked:function(fe){z=fe},setClear:function(fe,Ve,Qe,Rt,Sn){Sn===!0&&(fe*=Rt,Ve*=Rt,Qe*=Rt),ue.set(fe,Ve,Qe,Rt),se.equals(ue)===!1&&(t.clearColor(fe,Ve,Qe,Rt),se.copy(ue))},reset:function(){z=!1,Y=null,se.set(-1,0,0,0)}}}function o(){let z=!1,ue=null,Y=null,se=null;return{setTest:function(fe){fe?me(t.DEPTH_TEST):qe(t.DEPTH_TEST)},setMask:function(fe){ue!==fe&&!z&&(t.depthMask(fe),ue=fe)},setFunc:function(fe){if(Y!==fe){switch(fe){case XS:t.depthFunc(t.NEVER);break;case YS:t.depthFunc(t.ALWAYS);break;case $S:t.depthFunc(t.LESS);break;case Dl:t.depthFunc(t.LEQUAL);break;case qS:t.depthFunc(t.EQUAL);break;case KS:t.depthFunc(t.GEQUAL);break;case ZS:t.depthFunc(t.GREATER);break;case QS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Y=fe}},setLocked:function(fe){z=fe},setClear:function(fe){se!==fe&&(t.clearDepth(fe),se=fe)},reset:function(){z=!1,ue=null,Y=null,se=null}}}function s(){let z=!1,ue=null,Y=null,se=null,fe=null,Ve=null,Qe=null,Rt=null,Sn=null;return{setTest:function(Je){z||(Je?me(t.STENCIL_TEST):qe(t.STENCIL_TEST))},setMask:function(Je){ue!==Je&&!z&&(t.stencilMask(Je),ue=Je)},setFunc:function(Je,Gt,Vn){(Y!==Je||se!==Gt||fe!==Vn)&&(t.stencilFunc(Je,Gt,Vn),Y=Je,se=Gt,fe=Vn)},setOp:function(Je,Gt,Vn){(Ve!==Je||Qe!==Gt||Rt!==Vn)&&(t.stencilOp(Je,Gt,Vn),Ve=Je,Qe=Gt,Rt=Vn)},setLocked:function(Je){z=Je},setClear:function(Je){Sn!==Je&&(t.clearStencil(Je),Sn=Je)},reset:function(){z=!1,ue=null,Y=null,se=null,fe=null,Ve=null,Qe=null,Rt=null,Sn=null}}}const a=new r,l=new o,c=new s,d=new WeakMap,f=new WeakMap;let h={},v={},_=new WeakMap,y=[],p=null,u=!1,g=null,m=null,x=null,A=null,E=null,b=null,L=null,F=new Xe(0,0,0),S=0,w=!1,N=null,O=null,R=null,G=null,I=null;const B=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,k=0;const H=t.getParameter(t.VERSION);H.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(H)[1]),P=k>=1):H.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),P=k>=2);let Z=null,ee={};const ge=t.getParameter(t.SCISSOR_BOX),j=t.getParameter(t.VIEWPORT),te=new Lt().fromArray(ge),ce=new Lt().fromArray(j);function Ee(z,ue,Y,se){const fe=new Uint8Array(4),Ve=t.createTexture();t.bindTexture(z,Ve),t.texParameteri(z,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(z,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Qe=0;Qe<Y;Qe++)i&&(z===t.TEXTURE_3D||z===t.TEXTURE_2D_ARRAY)?t.texImage3D(ue,0,t.RGBA,1,1,se,0,t.RGBA,t.UNSIGNED_BYTE,fe):t.texImage2D(ue+Qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,fe);return Ve}const ye={};ye[t.TEXTURE_2D]=Ee(t.TEXTURE_2D,t.TEXTURE_2D,1),ye[t.TEXTURE_CUBE_MAP]=Ee(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ye[t.TEXTURE_2D_ARRAY]=Ee(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ye[t.TEXTURE_3D]=Ee(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),me(t.DEPTH_TEST),l.setFunc(Dl),ke(!1),Be(Jh),me(t.CULL_FACE),Te(Xi);function me(z){h[z]!==!0&&(t.enable(z),h[z]=!0)}function qe(z){h[z]!==!1&&(t.disable(z),h[z]=!1)}function Ce(z,ue){return v[z]!==ue?(t.bindFramebuffer(z,ue),v[z]=ue,i&&(z===t.DRAW_FRAMEBUFFER&&(v[t.FRAMEBUFFER]=ue),z===t.FRAMEBUFFER&&(v[t.DRAW_FRAMEBUFFER]=ue)),!0):!1}function W(z,ue){let Y=y,se=!1;if(z){Y=_.get(ue),Y===void 0&&(Y=[],_.set(ue,Y));const fe=z.textures;if(Y.length!==fe.length||Y[0]!==t.COLOR_ATTACHMENT0){for(let Ve=0,Qe=fe.length;Ve<Qe;Ve++)Y[Ve]=t.COLOR_ATTACHMENT0+Ve;Y.length=fe.length,se=!0}}else Y[0]!==t.BACK&&(Y[0]=t.BACK,se=!0);if(se)if(n.isWebGL2)t.drawBuffers(Y);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Y);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Ct(z){return p!==z?(t.useProgram(z),p=z,!0):!1}const Me={[_r]:t.FUNC_ADD,[LS]:t.FUNC_SUBTRACT,[DS]:t.FUNC_REVERSE_SUBTRACT};if(i)Me[ip]=t.MIN,Me[rp]=t.MAX;else{const z=e.get("EXT_blend_minmax");z!==null&&(Me[ip]=z.MIN_EXT,Me[rp]=z.MAX_EXT)}const ze={[IS]:t.ZERO,[US]:t.ONE,[NS]:t.SRC_COLOR,[md]:t.SRC_ALPHA,[HS]:t.SRC_ALPHA_SATURATE,[zS]:t.DST_COLOR,[kS]:t.DST_ALPHA,[FS]:t.ONE_MINUS_SRC_COLOR,[gd]:t.ONE_MINUS_SRC_ALPHA,[BS]:t.ONE_MINUS_DST_COLOR,[OS]:t.ONE_MINUS_DST_ALPHA,[GS]:t.CONSTANT_COLOR,[VS]:t.ONE_MINUS_CONSTANT_COLOR,[WS]:t.CONSTANT_ALPHA,[jS]:t.ONE_MINUS_CONSTANT_ALPHA};function Te(z,ue,Y,se,fe,Ve,Qe,Rt,Sn,Je){if(z===Xi){u===!0&&(qe(t.BLEND),u=!1);return}if(u===!1&&(me(t.BLEND),u=!0),z!==PS){if(z!==g||Je!==w){if((m!==_r||E!==_r)&&(t.blendEquation(t.FUNC_ADD),m=_r,E=_r),Je)switch(z){case To:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ep:t.blendFunc(t.ONE,t.ONE);break;case tp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case np:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case To:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ep:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case tp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case np:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}x=null,A=null,b=null,L=null,F.set(0,0,0),S=0,g=z,w=Je}return}fe=fe||ue,Ve=Ve||Y,Qe=Qe||se,(ue!==m||fe!==E)&&(t.blendEquationSeparate(Me[ue],Me[fe]),m=ue,E=fe),(Y!==x||se!==A||Ve!==b||Qe!==L)&&(t.blendFuncSeparate(ze[Y],ze[se],ze[Ve],ze[Qe]),x=Y,A=se,b=Ve,L=Qe),(Rt.equals(F)===!1||Sn!==S)&&(t.blendColor(Rt.r,Rt.g,Rt.b,Sn),F.copy(Rt),S=Sn),g=z,w=!1}function We(z,ue){z.side===ai?qe(t.CULL_FACE):me(t.CULL_FACE);let Y=z.side===on;ue&&(Y=!Y),ke(Y),z.blending===To&&z.transparent===!1?Te(Xi):Te(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),l.setFunc(z.depthFunc),l.setTest(z.depthTest),l.setMask(z.depthWrite),a.setMask(z.colorWrite);const se=z.stencilWrite;c.setTest(se),se&&(c.setMask(z.stencilWriteMask),c.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),c.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),D(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?me(t.SAMPLE_ALPHA_TO_COVERAGE):qe(t.SAMPLE_ALPHA_TO_COVERAGE)}function ke(z){N!==z&&(z?t.frontFace(t.CW):t.frontFace(t.CCW),N=z)}function Be(z){z!==AS?(me(t.CULL_FACE),z!==O&&(z===Jh?t.cullFace(t.BACK):z===CS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):qe(t.CULL_FACE),O=z}function ft(z){z!==R&&(P&&t.lineWidth(z),R=z)}function D(z,ue,Y){z?(me(t.POLYGON_OFFSET_FILL),(G!==ue||I!==Y)&&(t.polygonOffset(ue,Y),G=ue,I=Y)):qe(t.POLYGON_OFFSET_FILL)}function T(z){z?me(t.SCISSOR_TEST):qe(t.SCISSOR_TEST)}function Q(z){z===void 0&&(z=t.TEXTURE0+B-1),Z!==z&&(t.activeTexture(z),Z=z)}function J(z,ue,Y){Y===void 0&&(Z===null?Y=t.TEXTURE0+B-1:Y=Z);let se=ee[Y];se===void 0&&(se={type:void 0,texture:void 0},ee[Y]=se),(se.type!==z||se.texture!==ue)&&(Z!==Y&&(t.activeTexture(Y),Z=Y),t.bindTexture(z,ue||ye[z]),se.type=z,se.texture=ue)}function re(){const z=ee[Z];z!==void 0&&z.type!==void 0&&(t.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ne(){try{t.compressedTexImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function De(){try{t.compressedTexImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function be(){try{t.texSubImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function le(){try{t.texSubImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function de(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ie(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function oe(){try{t.texStorage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function mt(){try{t.texStorage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function He(){try{t.texImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Se(){try{t.texImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ve(z){te.equals(z)===!1&&(t.scissor(z.x,z.y,z.z,z.w),te.copy(z))}function _e(z){ce.equals(z)===!1&&(t.viewport(z.x,z.y,z.z,z.w),ce.copy(z))}function je(z,ue){let Y=f.get(ue);Y===void 0&&(Y=new WeakMap,f.set(ue,Y));let se=Y.get(z);se===void 0&&(se=t.getUniformBlockIndex(ue,z.name),Y.set(z,se))}function Pe(z,ue){const se=f.get(ue).get(z);d.get(ue)!==se&&(t.uniformBlockBinding(ue,se,z.__bindingPointIndex),d.set(ue,se))}function rt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},Z=null,ee={},v={},_=new WeakMap,y=[],p=null,u=!1,g=null,m=null,x=null,A=null,E=null,b=null,L=null,F=new Xe(0,0,0),S=0,w=!1,N=null,O=null,R=null,G=null,I=null,te.set(0,0,t.canvas.width,t.canvas.height),ce.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:me,disable:qe,bindFramebuffer:Ce,drawBuffers:W,useProgram:Ct,setBlending:Te,setMaterial:We,setFlipSided:ke,setCullFace:Be,setLineWidth:ft,setPolygonOffset:D,setScissorTest:T,activeTexture:Q,bindTexture:J,unbindTexture:re,compressedTexImage2D:ne,compressedTexImage3D:De,texImage2D:He,texImage3D:Se,updateUBOMapping:je,uniformBlockBinding:Pe,texStorage2D:oe,texStorage3D:mt,texSubImage2D:be,texSubImage3D:le,compressedTexSubImage2D:de,compressedTexSubImage3D:Ie,scissor:ve,viewport:_e,reset:rt}}function P2(t,e,n,i,r,o,s){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new $e,f=new WeakMap;let h;const v=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(D,T){return _?new OffscreenCanvas(D,T):kl("canvas")}function p(D,T,Q,J){let re=1;const ne=ft(D);if((ne.width>J||ne.height>J)&&(re=J/Math.max(ne.width,ne.height)),re<1||T===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const De=T?Ed:Math.floor,be=De(re*ne.width),le=De(re*ne.height);h===void 0&&(h=y(be,le));const de=Q?y(be,le):h;return de.width=be,de.height=le,de.getContext("2d").drawImage(D,0,0,be,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+be+"x"+le+")."),de}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),D;return D}function u(D){const T=ft(D);return Up(T.width)&&Up(T.height)}function g(D){return a?!1:D.wrapS!==On||D.wrapT!==On||D.minFilter!==jt&&D.minFilter!==Zt}function m(D,T){return D.generateMipmaps&&T&&D.minFilter!==jt&&D.minFilter!==Zt}function x(D){t.generateMipmap(D)}function A(D,T,Q,J,re=!1){if(a===!1)return T;if(D!==null){if(t[D]!==void 0)return t[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ne=T;if(T===t.RED&&(Q===t.FLOAT&&(ne=t.R32F),Q===t.HALF_FLOAT&&(ne=t.R16F),Q===t.UNSIGNED_BYTE&&(ne=t.R8)),T===t.RED_INTEGER&&(Q===t.UNSIGNED_BYTE&&(ne=t.R8UI),Q===t.UNSIGNED_SHORT&&(ne=t.R16UI),Q===t.UNSIGNED_INT&&(ne=t.R32UI),Q===t.BYTE&&(ne=t.R8I),Q===t.SHORT&&(ne=t.R16I),Q===t.INT&&(ne=t.R32I)),T===t.RG&&(Q===t.FLOAT&&(ne=t.RG32F),Q===t.HALF_FLOAT&&(ne=t.RG16F),Q===t.UNSIGNED_BYTE&&(ne=t.RG8)),T===t.RG_INTEGER&&(Q===t.UNSIGNED_BYTE&&(ne=t.RG8UI),Q===t.UNSIGNED_SHORT&&(ne=t.RG16UI),Q===t.UNSIGNED_INT&&(ne=t.RG32UI),Q===t.BYTE&&(ne=t.RG8I),Q===t.SHORT&&(ne=t.RG16I),Q===t.INT&&(ne=t.RG32I)),T===t.RGBA){const De=re?Il:Ze.getTransfer(J);Q===t.FLOAT&&(ne=t.RGBA32F),Q===t.HALF_FLOAT&&(ne=t.RGBA16F),Q===t.UNSIGNED_BYTE&&(ne=De===nt?t.SRGB8_ALPHA8:t.RGBA8),Q===t.UNSIGNED_SHORT_4_4_4_4&&(ne=t.RGBA4),Q===t.UNSIGNED_SHORT_5_5_5_1&&(ne=t.RGB5_A1)}return(ne===t.R16F||ne===t.R32F||ne===t.RG16F||ne===t.RG32F||ne===t.RGBA16F||ne===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function E(D,T,Q){return m(D,Q)===!0||D.isFramebufferTexture&&D.minFilter!==jt&&D.minFilter!==Zt?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function b(D){return D===jt||D===op||D===Jo?t.NEAREST:t.LINEAR}function L(D){const T=D.target;T.removeEventListener("dispose",L),S(T),T.isVideoTexture&&f.delete(T)}function F(D){const T=D.target;T.removeEventListener("dispose",F),N(T)}function S(D){const T=i.get(D);if(T.__webglInit===void 0)return;const Q=D.source,J=v.get(Q);if(J){const re=J[T.__cacheKey];re.usedTimes--,re.usedTimes===0&&w(D),Object.keys(J).length===0&&v.delete(Q)}i.remove(D)}function w(D){const T=i.get(D);t.deleteTexture(T.__webglTexture);const Q=D.source,J=v.get(Q);delete J[T.__cacheKey],s.memory.textures--}function N(D){const T=i.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(T.__webglFramebuffer[J]))for(let re=0;re<T.__webglFramebuffer[J].length;re++)t.deleteFramebuffer(T.__webglFramebuffer[J][re]);else t.deleteFramebuffer(T.__webglFramebuffer[J]);T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer[J])}else{if(Array.isArray(T.__webglFramebuffer))for(let J=0;J<T.__webglFramebuffer.length;J++)t.deleteFramebuffer(T.__webglFramebuffer[J]);else t.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&t.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let J=0;J<T.__webglColorRenderbuffer.length;J++)T.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(T.__webglColorRenderbuffer[J]);T.__webglDepthRenderbuffer&&t.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Q=D.textures;for(let J=0,re=Q.length;J<re;J++){const ne=i.get(Q[J]);ne.__webglTexture&&(t.deleteTexture(ne.__webglTexture),s.memory.textures--),i.remove(Q[J])}i.remove(D)}let O=0;function R(){O=0}function G(){const D=O;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),O+=1,D}function I(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function B(D,T){const Q=i.get(D);if(D.isVideoTexture&&ke(D),D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){const J=D.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(Q,D,T);return}}n.bindTexture(t.TEXTURE_2D,Q.__webglTexture,t.TEXTURE0+T)}function P(D,T){const Q=i.get(D);if(D.version>0&&Q.__version!==D.version){ce(Q,D,T);return}n.bindTexture(t.TEXTURE_2D_ARRAY,Q.__webglTexture,t.TEXTURE0+T)}function k(D,T){const Q=i.get(D);if(D.version>0&&Q.__version!==D.version){ce(Q,D,T);return}n.bindTexture(t.TEXTURE_3D,Q.__webglTexture,t.TEXTURE0+T)}function H(D,T){const Q=i.get(D);if(D.version>0&&Q.__version!==D.version){Ee(Q,D,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture,t.TEXTURE0+T)}const Z={[xd]:t.REPEAT,[On]:t.CLAMP_TO_EDGE,[yd]:t.MIRRORED_REPEAT},ee={[jt]:t.NEAREST,[op]:t.NEAREST_MIPMAP_NEAREST,[Jo]:t.NEAREST_MIPMAP_LINEAR,[Zt]:t.LINEAR,[kc]:t.LINEAR_MIPMAP_NEAREST,[wr]:t.LINEAR_MIPMAP_LINEAR},ge={[yM]:t.NEVER,[bM]:t.ALWAYS,[SM]:t.LESS,[yv]:t.LEQUAL,[MM]:t.EQUAL,[TM]:t.GEQUAL,[EM]:t.GREATER,[wM]:t.NOTEQUAL};function j(D,T,Q){if(T.type===li&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Zt||T.magFilter===kc||T.magFilter===Jo||T.magFilter===wr||T.minFilter===Zt||T.minFilter===kc||T.minFilter===Jo||T.minFilter===wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),Q?(t.texParameteri(D,t.TEXTURE_WRAP_S,Z[T.wrapS]),t.texParameteri(D,t.TEXTURE_WRAP_T,Z[T.wrapT]),(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)&&t.texParameteri(D,t.TEXTURE_WRAP_R,Z[T.wrapR]),t.texParameteri(D,t.TEXTURE_MAG_FILTER,ee[T.magFilter]),t.texParameteri(D,t.TEXTURE_MIN_FILTER,ee[T.minFilter])):(t.texParameteri(D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)&&t.texParameteri(D,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(T.wrapS!==On||T.wrapT!==On)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(D,t.TEXTURE_MAG_FILTER,b(T.magFilter)),t.texParameteri(D,t.TEXTURE_MIN_FILTER,b(T.minFilter)),T.minFilter!==jt&&T.minFilter!==Zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(t.texParameteri(D,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(D,t.TEXTURE_COMPARE_FUNC,ge[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===jt||T.minFilter!==Jo&&T.minFilter!==wr||T.type===li&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===zs&&e.has("OES_texture_half_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");t.texParameterf(D,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function te(D,T){let Q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",L));const J=T.source;let re=v.get(J);re===void 0&&(re={},v.set(J,re));const ne=I(T);if(ne!==D.__cacheKey){re[ne]===void 0&&(re[ne]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,Q=!0),re[ne].usedTimes++;const De=re[D.__cacheKey];De!==void 0&&(re[D.__cacheKey].usedTimes--,De.usedTimes===0&&w(T)),D.__cacheKey=ne,D.__webglTexture=re[ne].texture}return Q}function ce(D,T,Q){let J=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(J=t.TEXTURE_3D);const re=te(D,T),ne=T.source;n.bindTexture(J,D.__webglTexture,t.TEXTURE0+Q);const De=i.get(ne);if(ne.version!==De.__version||re===!0){n.activeTexture(t.TEXTURE0+Q);const be=Ze.getPrimaries(Ze.workingColorSpace),le=T.colorSpace===Ii?null:Ze.getPrimaries(T.colorSpace),de=T.colorSpace===Ii||be===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Ie=g(T)&&u(T.image)===!1;let oe=p(T.image,Ie,!1,r.maxTextureSize);oe=Be(T,oe);const mt=u(oe)||a,He=o.convert(T.format,T.colorSpace);let Se=o.convert(T.type),ve=A(T.internalFormat,He,Se,T.colorSpace,T.isVideoTexture);j(J,T,mt);let _e;const je=T.mipmaps,Pe=a&&T.isVideoTexture!==!0&&ve!==xv,rt=De.__version===void 0||re===!0,z=ne.dataReady,ue=E(T,oe,mt);if(T.isDepthTexture)ve=t.DEPTH_COMPONENT,a?T.type===li?ve=t.DEPTH_COMPONENT32F:T.type===ki?ve=t.DEPTH_COMPONENT24:T.type===Cr?ve=t.DEPTH24_STENCIL8:ve=t.DEPTH_COMPONENT16:T.type===li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Rr&&ve===t.DEPTH_COMPONENT&&T.type!==bf&&T.type!==ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=ki,Se=o.convert(T.type)),T.format===Fo&&ve===t.DEPTH_COMPONENT&&(ve=t.DEPTH_STENCIL,T.type!==Cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Cr,Se=o.convert(T.type))),rt&&(Pe?n.texStorage2D(t.TEXTURE_2D,1,ve,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,ve,oe.width,oe.height,0,He,Se,null));else if(T.isDataTexture)if(je.length>0&&mt){Pe&&rt&&n.texStorage2D(t.TEXTURE_2D,ue,ve,je[0].width,je[0].height);for(let Y=0,se=je.length;Y<se;Y++)_e=je[Y],Pe?z&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,_e.width,_e.height,He,Se,_e.data):n.texImage2D(t.TEXTURE_2D,Y,ve,_e.width,_e.height,0,He,Se,_e.data);T.generateMipmaps=!1}else Pe?(rt&&n.texStorage2D(t.TEXTURE_2D,ue,ve,oe.width,oe.height),z&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,He,Se,oe.data)):n.texImage2D(t.TEXTURE_2D,0,ve,oe.width,oe.height,0,He,Se,oe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Pe&&rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,ve,je[0].width,je[0].height,oe.depth);for(let Y=0,se=je.length;Y<se;Y++)_e=je[Y],T.format!==zn?He!==null?Pe?z&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,_e.width,_e.height,oe.depth,He,_e.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,ve,_e.width,_e.height,oe.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?z&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,_e.width,_e.height,oe.depth,He,Se,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Y,ve,_e.width,_e.height,oe.depth,0,He,Se,_e.data)}else{Pe&&rt&&n.texStorage2D(t.TEXTURE_2D,ue,ve,je[0].width,je[0].height);for(let Y=0,se=je.length;Y<se;Y++)_e=je[Y],T.format!==zn?He!==null?Pe?z&&n.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,_e.width,_e.height,He,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,Y,ve,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?z&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,_e.width,_e.height,He,Se,_e.data):n.texImage2D(t.TEXTURE_2D,Y,ve,_e.width,_e.height,0,He,Se,_e.data)}else if(T.isDataArrayTexture)Pe?(rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,ve,oe.width,oe.height,oe.depth),z&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,He,Se,oe.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,ve,oe.width,oe.height,oe.depth,0,He,Se,oe.data);else if(T.isData3DTexture)Pe?(rt&&n.texStorage3D(t.TEXTURE_3D,ue,ve,oe.width,oe.height,oe.depth),z&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,He,Se,oe.data)):n.texImage3D(t.TEXTURE_3D,0,ve,oe.width,oe.height,oe.depth,0,He,Se,oe.data);else if(T.isFramebufferTexture){if(rt)if(Pe)n.texStorage2D(t.TEXTURE_2D,ue,ve,oe.width,oe.height);else{let Y=oe.width,se=oe.height;for(let fe=0;fe<ue;fe++)n.texImage2D(t.TEXTURE_2D,fe,ve,Y,se,0,He,Se,null),Y>>=1,se>>=1}}else if(je.length>0&&mt){if(Pe&&rt){const Y=ft(je[0]);n.texStorage2D(t.TEXTURE_2D,ue,ve,Y.width,Y.height)}for(let Y=0,se=je.length;Y<se;Y++)_e=je[Y],Pe?z&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,He,Se,_e):n.texImage2D(t.TEXTURE_2D,Y,ve,He,Se,_e);T.generateMipmaps=!1}else if(Pe){if(rt){const Y=ft(oe);n.texStorage2D(t.TEXTURE_2D,ue,ve,Y.width,Y.height)}z&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,He,Se,oe)}else n.texImage2D(t.TEXTURE_2D,0,ve,He,Se,oe);m(T,mt)&&x(J),De.__version=ne.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Ee(D,T,Q){if(T.image.length!==6)return;const J=te(D,T),re=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+Q);const ne=i.get(re);if(re.version!==ne.__version||J===!0){n.activeTexture(t.TEXTURE0+Q);const De=Ze.getPrimaries(Ze.workingColorSpace),be=T.colorSpace===Ii?null:Ze.getPrimaries(T.colorSpace),le=T.colorSpace===Ii||De===be?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const de=T.isCompressedTexture||T.image[0].isCompressedTexture,Ie=T.image[0]&&T.image[0].isDataTexture,oe=[];for(let Y=0;Y<6;Y++)!de&&!Ie?oe[Y]=p(T.image[Y],!1,!0,r.maxCubemapSize):oe[Y]=Ie?T.image[Y].image:T.image[Y],oe[Y]=Be(T,oe[Y]);const mt=oe[0],He=u(mt)||a,Se=o.convert(T.format,T.colorSpace),ve=o.convert(T.type),_e=A(T.internalFormat,Se,ve,T.colorSpace),je=a&&T.isVideoTexture!==!0,Pe=ne.__version===void 0||J===!0,rt=re.dataReady;let z=E(T,mt,He);j(t.TEXTURE_CUBE_MAP,T,He);let ue;if(de){je&&Pe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,z,_e,mt.width,mt.height);for(let Y=0;Y<6;Y++){ue=oe[Y].mipmaps;for(let se=0;se<ue.length;se++){const fe=ue[se];T.format!==zn?Se!==null?je?rt&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se,0,0,fe.width,fe.height,Se,fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se,_e,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?rt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se,0,0,fe.width,fe.height,Se,ve,fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se,_e,fe.width,fe.height,0,Se,ve,fe.data)}}}else{if(ue=T.mipmaps,je&&Pe){ue.length>0&&z++;const Y=ft(oe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,z,_e,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(Ie){je?rt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,oe[Y].width,oe[Y].height,Se,ve,oe[Y].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,_e,oe[Y].width,oe[Y].height,0,Se,ve,oe[Y].data);for(let se=0;se<ue.length;se++){const Ve=ue[se].image[Y].image;je?rt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se+1,0,0,Ve.width,Ve.height,Se,ve,Ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se+1,_e,Ve.width,Ve.height,0,Se,ve,Ve.data)}}else{je?rt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Se,ve,oe[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,_e,Se,ve,oe[Y]);for(let se=0;se<ue.length;se++){const fe=ue[se];je?rt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se+1,0,0,Se,ve,fe.image[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se+1,_e,Se,ve,fe.image[Y])}}}m(T,He)&&x(t.TEXTURE_CUBE_MAP),ne.__version=re.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function ye(D,T,Q,J,re,ne){const De=o.convert(Q.format,Q.colorSpace),be=o.convert(Q.type),le=A(Q.internalFormat,De,be,Q.colorSpace);if(!i.get(T).__hasExternalTextures){const Ie=Math.max(1,T.width>>ne),oe=Math.max(1,T.height>>ne);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,ne,le,Ie,oe,T.depth,0,De,be,null):n.texImage2D(re,ne,le,Ie,oe,0,De,be,null)}n.bindFramebuffer(t.FRAMEBUFFER,D),We(T)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,re,i.get(Q).__webglTexture,0,Te(T)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,re,i.get(Q).__webglTexture,ne),n.bindFramebuffer(t.FRAMEBUFFER,null)}function me(D,T,Q){if(t.bindRenderbuffer(t.RENDERBUFFER,D),T.depthBuffer&&!T.stencilBuffer){let J=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(Q||We(T)){const re=T.depthTexture;re&&re.isDepthTexture&&(re.type===li?J=t.DEPTH_COMPONENT32F:re.type===ki&&(J=t.DEPTH_COMPONENT24));const ne=Te(T);We(T)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne,J,T.width,T.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,J,T.width,T.height)}else t.renderbufferStorage(t.RENDERBUFFER,J,T.width,T.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,D)}else if(T.depthBuffer&&T.stencilBuffer){const J=Te(T);Q&&We(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,J,t.DEPTH24_STENCIL8,T.width,T.height):We(T)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,J,t.DEPTH24_STENCIL8,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,D)}else{const J=T.textures;for(let re=0;re<J.length;re++){const ne=J[re],De=o.convert(ne.format,ne.colorSpace),be=o.convert(ne.type),le=A(ne.internalFormat,De,be,ne.colorSpace),de=Te(T);Q&&We(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,de,le,T.width,T.height):We(T)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,le,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,le,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function qe(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),B(T.depthTexture,0);const J=i.get(T.depthTexture).__webglTexture,re=Te(T);if(T.depthTexture.format===Rr)We(T)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0);else if(T.depthTexture.format===Fo)We(T)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ce(D){const T=i.get(D),Q=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");qe(T.__webglFramebuffer,D)}else if(Q){T.__webglDepthbuffer=[];for(let J=0;J<6;J++)n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[J]),T.__webglDepthbuffer[J]=t.createRenderbuffer(),me(T.__webglDepthbuffer[J],D,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=t.createRenderbuffer(),me(T.__webglDepthbuffer,D,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function W(D,T,Q){const J=i.get(D);T!==void 0&&ye(J.__webglFramebuffer,D,D.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),Q!==void 0&&Ce(D)}function Ct(D){const T=D.texture,Q=i.get(D),J=i.get(T);D.addEventListener("dispose",F);const re=D.textures,ne=D.isWebGLCubeRenderTarget===!0,De=re.length>1,be=u(D)||a;if(De||(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=T.version,s.memory.textures++),ne){Q.__webglFramebuffer=[];for(let le=0;le<6;le++)if(a&&T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer[le]=[];for(let de=0;de<T.mipmaps.length;de++)Q.__webglFramebuffer[le][de]=t.createFramebuffer()}else Q.__webglFramebuffer[le]=t.createFramebuffer()}else{if(a&&T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer=[];for(let le=0;le<T.mipmaps.length;le++)Q.__webglFramebuffer[le]=t.createFramebuffer()}else Q.__webglFramebuffer=t.createFramebuffer();if(De)if(r.drawBuffers)for(let le=0,de=re.length;le<de;le++){const Ie=i.get(re[le]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=t.createTexture(),s.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&D.samples>0&&We(D)===!1){Q.__webglMultisampledFramebuffer=t.createFramebuffer(),Q.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let le=0;le<re.length;le++){const de=re[le];Q.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Q.__webglColorRenderbuffer[le]);const Ie=o.convert(de.format,de.colorSpace),oe=o.convert(de.type),mt=A(de.internalFormat,Ie,oe,de.colorSpace,D.isXRRenderTarget===!0),He=Te(D);t.renderbufferStorageMultisample(t.RENDERBUFFER,He,mt,D.width,D.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,Q.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),D.depthBuffer&&(Q.__webglDepthRenderbuffer=t.createRenderbuffer(),me(Q.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),j(t.TEXTURE_CUBE_MAP,T,be);for(let le=0;le<6;le++)if(a&&T.mipmaps&&T.mipmaps.length>0)for(let de=0;de<T.mipmaps.length;de++)ye(Q.__webglFramebuffer[le][de],D,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,de);else ye(Q.__webglFramebuffer[le],D,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(T,be)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(De){for(let le=0,de=re.length;le<de;le++){const Ie=re[le],oe=i.get(Ie);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),j(t.TEXTURE_2D,Ie,be),ye(Q.__webglFramebuffer,D,Ie,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,0),m(Ie,be)&&x(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(a?le=D.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(le,J.__webglTexture),j(le,T,be),a&&T.mipmaps&&T.mipmaps.length>0)for(let de=0;de<T.mipmaps.length;de++)ye(Q.__webglFramebuffer[de],D,T,t.COLOR_ATTACHMENT0,le,de);else ye(Q.__webglFramebuffer,D,T,t.COLOR_ATTACHMENT0,le,0);m(T,be)&&x(le),n.unbindTexture()}D.depthBuffer&&Ce(D)}function Me(D){const T=u(D)||a,Q=D.textures;for(let J=0,re=Q.length;J<re;J++){const ne=Q[J];if(m(ne,T)){const De=D.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,be=i.get(ne).__webglTexture;n.bindTexture(De,be),x(De),n.unbindTexture()}}}function ze(D){if(a&&D.samples>0&&We(D)===!1){const T=D.textures,Q=D.width,J=D.height;let re=t.COLOR_BUFFER_BIT;const ne=[],De=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,be=i.get(D),le=T.length>1;if(le)for(let de=0;de<T.length;de++)n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let de=0;de<T.length;de++){ne.push(t.COLOR_ATTACHMENT0+de),D.depthBuffer&&ne.push(De);const Ie=be.__ignoreDepthValues!==void 0?be.__ignoreDepthValues:!1;if(Ie===!1&&(D.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),D.stencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),le&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,be.__webglColorRenderbuffer[de]),Ie===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[De]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[De])),le){const oe=i.get(T[de]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,oe,0)}t.blitFramebuffer(0,0,Q,J,0,0,Q,J,re,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ne)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let de=0;de<T.length;de++){n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,be.__webglColorRenderbuffer[de]);const Ie=i.get(T[de]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,Ie,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}}function Te(D){return Math.min(r.maxSamples,D.samples)}function We(D){const T=i.get(D);return a&&D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ke(D){const T=s.render.frame;f.get(D)!==T&&(f.set(D,T),D.update())}function Be(D,T){const Q=D.colorSpace,J=D.format,re=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||D.format===Sd||Q!==nr&&Q!==Ii&&(Ze.getTransfer(Q)===nt?a===!1?e.has("EXT_sRGB")===!0&&J===zn?(D.format=Sd,D.minFilter=Zt,D.generateMipmaps=!1):T=Mv.sRGBToLinear(T):(J!==zn||re!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),T}function ft(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(d.width=D.naturalWidth||D.width,d.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(d.width=D.displayWidth,d.height=D.displayHeight):(d.width=D.width,d.height=D.height),d}this.allocateTextureUnit=G,this.resetTextureUnits=R,this.setTexture2D=B,this.setTexture2DArray=P,this.setTexture3D=k,this.setTextureCube=H,this.rebindTextures=W,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=We}function L2(t,e,n){const i=n.isWebGL2;function r(o,s=Ii){let a;const l=Ze.getTransfer(s);if(o===$i)return t.UNSIGNED_BYTE;if(o===pv)return t.UNSIGNED_SHORT_4_4_4_4;if(o===mv)return t.UNSIGNED_SHORT_5_5_5_1;if(o===lM)return t.BYTE;if(o===cM)return t.SHORT;if(o===bf)return t.UNSIGNED_SHORT;if(o===hv)return t.INT;if(o===ki)return t.UNSIGNED_INT;if(o===li)return t.FLOAT;if(o===zs)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===uM)return t.ALPHA;if(o===zn)return t.RGBA;if(o===dM)return t.LUMINANCE;if(o===fM)return t.LUMINANCE_ALPHA;if(o===Rr)return t.DEPTH_COMPONENT;if(o===Fo)return t.DEPTH_STENCIL;if(o===Sd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===hM)return t.RED;if(o===gv)return t.RED_INTEGER;if(o===pM)return t.RG;if(o===vv)return t.RG_INTEGER;if(o===_v)return t.RGBA_INTEGER;if(o===Oc||o===zc||o===Bc||o===Hc)if(l===nt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===Oc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===zc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Bc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Hc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===Oc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===zc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Bc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Hc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===sp||o===ap||o===lp||o===cp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===sp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===ap)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===lp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===cp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===xv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===up||o===dp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===up)return l===nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===dp)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===fp||o===hp||o===pp||o===mp||o===gp||o===vp||o===_p||o===xp||o===yp||o===Sp||o===Mp||o===Ep||o===wp||o===Tp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===fp)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===hp)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===pp)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===mp)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===gp)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===vp)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===_p)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===xp)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===yp)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Sp)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Mp)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Ep)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===wp)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Tp)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Gc||o===bp||o===Ap)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===Gc)return l===nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===bp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===Ap)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===mM||o===Cp||o===Rp||o===Pp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===Gc)return a.COMPRESSED_RED_RGTC1_EXT;if(o===Cp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Rp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Pp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Cr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:r}}class D2 extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ba extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const I2={type:"move"};class mu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ba,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ba,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ba,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const y of e.hand.values()){const p=n.getJointPose(y,i),u=this._getHandJoint(c,y);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),v=.02,_=.005;c.inputState.pinching&&h>v+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=v-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(I2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ba;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const U2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,N2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class F2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new sn,o=e.properties.get(r);o.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new Qi({extensions:{fragDepth:!0},vertexShader:U2,fragmentShader:N2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new hi(new rc(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class k2 extends Go{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,c=null,d=null,f=null,h=null,v=null,_=null;const y=new F2,p=n.getContextAttributes();let u=null,g=null;const m=[],x=[],A=new $e;let E=null;const b=new bn;b.layers.enable(1),b.viewport=new Lt;const L=new bn;L.layers.enable(2),L.viewport=new Lt;const F=[b,L],S=new D2;S.layers.enable(1),S.layers.enable(2);let w=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let te=m[j];return te===void 0&&(te=new mu,m[j]=te),te.getTargetRaySpace()},this.getControllerGrip=function(j){let te=m[j];return te===void 0&&(te=new mu,m[j]=te),te.getGripSpace()},this.getHand=function(j){let te=m[j];return te===void 0&&(te=new mu,m[j]=te),te.getHandSpace()};function O(j){const te=x.indexOf(j.inputSource);if(te===-1)return;const ce=m[te];ce!==void 0&&(ce.update(j.inputSource,j.frame,c||s),ce.dispatchEvent({type:j.type,data:j.inputSource}))}function R(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",R),r.removeEventListener("inputsourceschange",G);for(let j=0;j<m.length;j++){const te=x[j];te!==null&&(x[j]=null,m[j].disconnect(te))}w=null,N=null,y.reset(),e.setRenderTarget(u),v=null,h=null,f=null,r=null,g=null,ge.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:v},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",R),r.addEventListener("inputsourceschange",G),p.xrCompatible!==!0&&await n.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const te={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:o};v=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),g=new Fr(v.framebufferWidth,v.framebufferHeight,{format:zn,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let te=null,ce=null,Ee=null;p.depth&&(Ee=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=p.stencil?Fo:Rr,ce=p.stencil?Cr:ki);const ye={colorFormat:n.RGBA8,depthFormat:Ee,scaleFactor:o};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(ye),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),g=new Fr(h.textureWidth,h.textureHeight,{format:zn,type:$i,depthTexture:new Fv(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const me=e.properties.get(g);me.__ignoreDepthValues=h.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),ge.setContext(r),ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function G(j){for(let te=0;te<j.removed.length;te++){const ce=j.removed[te],Ee=x.indexOf(ce);Ee>=0&&(x[Ee]=null,m[Ee].disconnect(ce))}for(let te=0;te<j.added.length;te++){const ce=j.added[te];let Ee=x.indexOf(ce);if(Ee===-1){for(let me=0;me<m.length;me++)if(me>=x.length){x.push(ce),Ee=me;break}else if(x[me]===null){x[me]=ce,Ee=me;break}if(Ee===-1)break}const ye=m[Ee];ye&&ye.connect(ce)}}const I=new $,B=new $;function P(j,te,ce){I.setFromMatrixPosition(te.matrixWorld),B.setFromMatrixPosition(ce.matrixWorld);const Ee=I.distanceTo(B),ye=te.projectionMatrix.elements,me=ce.projectionMatrix.elements,qe=ye[14]/(ye[10]-1),Ce=ye[14]/(ye[10]+1),W=(ye[9]+1)/ye[5],Ct=(ye[9]-1)/ye[5],Me=(ye[8]-1)/ye[0],ze=(me[8]+1)/me[0],Te=qe*Me,We=qe*ze,ke=Ee/(-Me+ze),Be=ke*-Me;te.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Be),j.translateZ(ke),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const ft=qe+ke,D=Ce+ke,T=Te-Be,Q=We+(Ee-Be),J=W*Ce/D*ft,re=Ct*Ce/D*ft;j.projectionMatrix.makePerspective(T,Q,J,re,ft,D),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function k(j,te){te===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(te.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;y.texture!==null&&(j.near=y.depthNear,j.far=y.depthFar),S.near=L.near=b.near=j.near,S.far=L.far=b.far=j.far,(w!==S.near||N!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),w=S.near,N=S.far,b.near=w,b.far=N,L.near=w,L.far=N,b.updateProjectionMatrix(),L.updateProjectionMatrix(),j.updateProjectionMatrix());const te=j.parent,ce=S.cameras;k(S,te);for(let Ee=0;Ee<ce.length;Ee++)k(ce[Ee],te);ce.length===2?P(S,b,L):S.projectionMatrix.copy(b.projectionMatrix),H(j,S,te)};function H(j,te,ce){ce===null?j.matrix.copy(te.matrixWorld):(j.matrix.copy(ce.matrixWorld),j.matrix.invert(),j.matrix.multiply(te.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(te.projectionMatrix),j.projectionMatrixInverse.copy(te.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Md*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&v===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=j)},this.hasDepthSensing=function(){return y.texture!==null};let Z=null;function ee(j,te){if(d=te.getViewerPose(c||s),_=te,d!==null){const ce=d.views;v!==null&&(e.setRenderTargetFramebuffer(g,v.framebuffer),e.setRenderTarget(g));let Ee=!1;ce.length!==S.cameras.length&&(S.cameras.length=0,Ee=!0);for(let me=0;me<ce.length;me++){const qe=ce[me];let Ce=null;if(v!==null)Ce=v.getViewport(qe);else{const Ct=f.getViewSubImage(h,qe);Ce=Ct.viewport,me===0&&(e.setRenderTargetTextures(g,Ct.colorTexture,h.ignoreDepthValues?void 0:Ct.depthStencilTexture),e.setRenderTarget(g))}let W=F[me];W===void 0&&(W=new bn,W.layers.enable(me),W.viewport=new Lt,F[me]=W),W.matrix.fromArray(qe.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(qe.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),me===0&&(S.matrix.copy(W.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Ee===!0&&S.cameras.push(W)}const ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")){const me=f.getDepthInformation(ce[0]);me&&me.isValid&&me.texture&&y.init(e,me,r.renderState)}}for(let ce=0;ce<m.length;ce++){const Ee=x[ce],ye=m[ce];Ee!==null&&ye!==void 0&&ye.update(Ee,te,c||s)}y.render(e,S),Z&&Z(j,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),_=null}const ge=new Nv;ge.setAnimationLoop(ee),this.setAnimationLoop=function(j){Z=j},this.dispose=function(){}}}const ur=new xi,O2=new xt;function z2(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Lv(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,g,m,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?o(p,u):u.isMeshToonMaterial?(o(p,u),f(p,u)):u.isMeshPhongMaterial?(o(p,u),d(p,u)):u.isMeshStandardMaterial?(o(p,u),h(p,u),u.isMeshPhysicalMaterial&&v(p,u,x)):u.isMeshMatcapMaterial?(o(p,u),_(p,u)):u.isMeshDepthMaterial?o(p,u):u.isMeshDistanceMaterial?(o(p,u),y(p,u)):u.isMeshNormalMaterial?o(p,u):u.isLineBasicMaterial?(s(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,g,m):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function o(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===on&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===on&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const g=e.get(u),m=g.envMap,x=g.envMapRotation;if(m&&(p.envMap.value=m,ur.copy(x),ur.x*=-1,ur.y*=-1,ur.z*=-1,m.isCubeTexture&&m.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),p.envMapRotation.value.setFromMatrix4(O2.makeRotationFromEuler(ur)),p.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const A=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*A,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function s(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,g,m){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*g,p.scale.value=m*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function v(p,u,g){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===on&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function y(p,u){const g=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function B2(t,e,n,i){let r={},o={},s=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,m){const x=m.program;i.uniformBlockBinding(g,x)}function c(g,m){let x=r[g.id];x===void 0&&(_(g),x=d(g),r[g.id]=x,g.addEventListener("dispose",p));const A=m.program;i.updateUBOMapping(g,A);const E=e.render.frame;o[g.id]!==E&&(h(g),o[g.id]=E)}function d(g){const m=f();g.__bindingPointIndex=m;const x=t.createBuffer(),A=g.__size,E=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,A,E),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,m,x),x}function f(){for(let g=0;g<a;g++)if(s.indexOf(g)===-1)return s.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const m=r[g.id],x=g.uniforms,A=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,m);for(let E=0,b=x.length;E<b;E++){const L=Array.isArray(x[E])?x[E]:[x[E]];for(let F=0,S=L.length;F<S;F++){const w=L[F];if(v(w,E,F,A)===!0){const N=w.__offset,O=Array.isArray(w.value)?w.value:[w.value];let R=0;for(let G=0;G<O.length;G++){const I=O[G],B=y(I);typeof I=="number"||typeof I=="boolean"?(w.__data[0]=I,t.bufferSubData(t.UNIFORM_BUFFER,N+R,w.__data)):I.isMatrix3?(w.__data[0]=I.elements[0],w.__data[1]=I.elements[1],w.__data[2]=I.elements[2],w.__data[3]=0,w.__data[4]=I.elements[3],w.__data[5]=I.elements[4],w.__data[6]=I.elements[5],w.__data[7]=0,w.__data[8]=I.elements[6],w.__data[9]=I.elements[7],w.__data[10]=I.elements[8],w.__data[11]=0):(I.toArray(w.__data,R),R+=B.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,N,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function v(g,m,x,A){const E=g.value,b=m+"_"+x;if(A[b]===void 0)return typeof E=="number"||typeof E=="boolean"?A[b]=E:A[b]=E.clone(),!0;{const L=A[b];if(typeof E=="number"||typeof E=="boolean"){if(L!==E)return A[b]=E,!0}else if(L.equals(E)===!1)return L.copy(E),!0}return!1}function _(g){const m=g.uniforms;let x=0;const A=16;for(let b=0,L=m.length;b<L;b++){const F=Array.isArray(m[b])?m[b]:[m[b]];for(let S=0,w=F.length;S<w;S++){const N=F[S],O=Array.isArray(N.value)?N.value:[N.value];for(let R=0,G=O.length;R<G;R++){const I=O[R],B=y(I),P=x%A;P!==0&&A-P<B.boundary&&(x+=A-P),N.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=B.storage}}}const E=x%A;return E>0&&(x+=A-E),g.__size=x,g.__cache={},this}function y(g){const m={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(m.boundary=4,m.storage=4):g.isVector2?(m.boundary=8,m.storage=8):g.isVector3||g.isColor?(m.boundary=16,m.storage=12):g.isVector4?(m.boundary=16,m.storage=16):g.isMatrix3?(m.boundary=48,m.storage=48):g.isMatrix4?(m.boundary=64,m.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),m}function p(g){const m=g.target;m.removeEventListener("dispose",p);const x=s.indexOf(m.__bindingPointIndex);s.splice(x,1),t.deleteBuffer(r[m.id]),delete r[m.id],delete o[m.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);s=[],r={},o={}}return{bind:l,update:c,dispose:u}}class Gv{constructor(e={}){const{canvas:n=CM(),context:i=null,depth:r=!0,stencil:o=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=s;const v=new Uint32Array(4),_=new Int32Array(4);let y=null,p=null;const u=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xn,this._useLegacyLights=!1,this.toneMapping=Yi,this.toneMappingExposure=1;const m=this;let x=!1,A=0,E=0,b=null,L=-1,F=null;const S=new Lt,w=new Lt;let N=null;const O=new Xe(0);let R=0,G=n.width,I=n.height,B=1,P=null,k=null;const H=new Lt(0,0,G,I),Z=new Lt(0,0,G,I);let ee=!1;const ge=new Uv;let j=!1,te=!1,ce=null;const Ee=new xt,ye=new $e,me=new $,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ce(){return b===null?B:1}let W=i;function Ct(C,V){for(let q=0;q<C.length;q++){const K=C[q],X=n.getContext(K,V);if(X!==null)return X}return null}try{const C={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Tf}`),n.addEventListener("webglcontextlost",rt,!1),n.addEventListener("webglcontextrestored",z,!1),n.addEventListener("webglcontextcreationerror",ue,!1),W===null){const V=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&V.shift(),W=Ct(V,C),W===null)throw Ct(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Me,ze,Te,We,ke,Be,ft,D,T,Q,J,re,ne,De,be,le,de,Ie,oe,mt,He,Se,ve,_e;function je(){Me=new Xw(W),ze=new zw(W,Me,e),Me.init(ze),Se=new L2(W,Me,ze),Te=new R2(W,Me,ze),We=new qw(W),ke=new m2,Be=new P2(W,Me,Te,ke,ze,Se,We),ft=new Hw(m),D=new jw(m),T=new e1(W,ze),ve=new kw(W,Me,T,ze),Q=new Yw(W,T,We,ve),J=new Jw(W,Q,T,We),oe=new Qw(W,ze,Be),le=new Bw(ke),re=new p2(m,ft,D,Me,ze,ve,le),ne=new z2(m,ke),De=new v2,be=new E2(Me,ze),Ie=new Fw(m,ft,D,Te,J,h,l),de=new C2(m,J,ze),_e=new B2(W,We,ze,Te),mt=new Ow(W,Me,We,ze),He=new $w(W,Me,We,ze),We.programs=re.programs,m.capabilities=ze,m.extensions=Me,m.properties=ke,m.renderLists=De,m.shadowMap=de,m.state=Te,m.info=We}je();const Pe=new k2(m,W);this.xr=Pe,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const C=Me.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Me.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(C){C!==void 0&&(B=C,this.setSize(G,I,!1))},this.getSize=function(C){return C.set(G,I)},this.setSize=function(C,V,q=!0){if(Pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=C,I=V,n.width=Math.floor(C*B),n.height=Math.floor(V*B),q===!0&&(n.style.width=C+"px",n.style.height=V+"px"),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(G*B,I*B).floor()},this.setDrawingBufferSize=function(C,V,q){G=C,I=V,B=q,n.width=Math.floor(C*q),n.height=Math.floor(V*q),this.setViewport(0,0,C,V)},this.getCurrentViewport=function(C){return C.copy(S)},this.getViewport=function(C){return C.copy(H)},this.setViewport=function(C,V,q,K){C.isVector4?H.set(C.x,C.y,C.z,C.w):H.set(C,V,q,K),Te.viewport(S.copy(H).multiplyScalar(B).round())},this.getScissor=function(C){return C.copy(Z)},this.setScissor=function(C,V,q,K){C.isVector4?Z.set(C.x,C.y,C.z,C.w):Z.set(C,V,q,K),Te.scissor(w.copy(Z).multiplyScalar(B).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(C){Te.setScissorTest(ee=C)},this.setOpaqueSort=function(C){P=C},this.setTransparentSort=function(C){k=C},this.getClearColor=function(C){return C.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(C=!0,V=!0,q=!0){let K=0;if(C){let X=!1;if(b!==null){const he=b.texture.format;X=he===_v||he===vv||he===gv}if(X){const he=b.texture.type,xe=he===$i||he===ki||he===bf||he===Cr||he===pv||he===mv,we=Ie.getClearColor(),Ae=Ie.getClearAlpha(),Oe=we.r,Re=we.g,Le=we.b;xe?(v[0]=Oe,v[1]=Re,v[2]=Le,v[3]=Ae,W.clearBufferuiv(W.COLOR,0,v)):(_[0]=Oe,_[1]=Re,_[2]=Le,_[3]=Ae,W.clearBufferiv(W.COLOR,0,_))}else K|=W.COLOR_BUFFER_BIT}V&&(K|=W.DEPTH_BUFFER_BIT),q&&(K|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",rt,!1),n.removeEventListener("webglcontextrestored",z,!1),n.removeEventListener("webglcontextcreationerror",ue,!1),De.dispose(),be.dispose(),ke.dispose(),ft.dispose(),D.dispose(),J.dispose(),ve.dispose(),_e.dispose(),re.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",Sn),Pe.removeEventListener("sessionend",Je),ce&&(ce.dispose(),ce=null),Gt.stop()};function rt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const C=We.autoReset,V=de.enabled,q=de.autoUpdate,K=de.needsUpdate,X=de.type;je(),We.autoReset=C,de.enabled=V,de.autoUpdate=q,de.needsUpdate=K,de.type=X}function ue(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Y(C){const V=C.target;V.removeEventListener("dispose",Y),se(V)}function se(C){fe(C),ke.remove(C)}function fe(C){const V=ke.get(C).programs;V!==void 0&&(V.forEach(function(q){re.releaseProgram(q)}),C.isShaderMaterial&&re.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,q,K,X,he){V===null&&(V=qe);const xe=X.isMesh&&X.matrixWorld.determinant()<0,we=Yv(C,V,q,K,X);Te.setMaterial(K,xe);let Ae=q.index,Oe=1;if(K.wireframe===!0){if(Ae=Q.getWireframeAttribute(q),Ae===void 0)return;Oe=2}const Re=q.drawRange,Le=q.attributes.position;let ht=Re.start*Oe,un=(Re.start+Re.count)*Oe;he!==null&&(ht=Math.max(ht,he.start*Oe),un=Math.min(un,(he.start+he.count)*Oe)),Ae!==null?(ht=Math.max(ht,0),un=Math.min(un,Ae.count)):Le!=null&&(ht=Math.max(ht,0),un=Math.min(un,Le.count));const wt=un-ht;if(wt<0||wt===1/0)return;ve.setup(X,K,we,q,Ae);let Qn,at=mt;if(Ae!==null&&(Qn=T.get(Ae),at=He,at.setIndex(Qn)),X.isMesh)K.wireframe===!0?(Te.setLineWidth(K.wireframeLinewidth*Ce()),at.setMode(W.LINES)):at.setMode(W.TRIANGLES);else if(X.isLine){let Ue=K.linewidth;Ue===void 0&&(Ue=1),Te.setLineWidth(Ue*Ce()),X.isLineSegments?at.setMode(W.LINES):X.isLineLoop?at.setMode(W.LINE_LOOP):at.setMode(W.LINE_STRIP)}else X.isPoints?at.setMode(W.POINTS):X.isSprite&&at.setMode(W.TRIANGLES);if(X.isBatchedMesh)at.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)at.renderInstances(ht,wt,X.count);else if(q.isInstancedBufferGeometry){const Ue=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,sc=Math.min(q.instanceCount,Ue);at.renderInstances(ht,wt,sc)}else at.render(ht,wt)};function Ve(C,V,q){C.transparent===!0&&C.side===ai&&C.forceSinglePass===!1?(C.side=on,C.needsUpdate=!0,Js(C,V,q),C.side=Zi,C.needsUpdate=!0,Js(C,V,q),C.side=ai):Js(C,V,q)}this.compile=function(C,V,q=null){q===null&&(q=C),p=be.get(q),p.init(),g.push(p),q.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),C!==q&&C.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights(m._useLegacyLights);const K=new Set;return C.traverse(function(X){const he=X.material;if(he)if(Array.isArray(he))for(let xe=0;xe<he.length;xe++){const we=he[xe];Ve(we,q,X),K.add(we)}else Ve(he,q,X),K.add(he)}),g.pop(),p=null,K},this.compileAsync=function(C,V,q=null){const K=this.compile(C,V,q);return new Promise(X=>{function he(){if(K.forEach(function(xe){ke.get(xe).currentProgram.isReady()&&K.delete(xe)}),K.size===0){X(C);return}setTimeout(he,10)}Me.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Qe=null;function Rt(C){Qe&&Qe(C)}function Sn(){Gt.stop()}function Je(){Gt.start()}const Gt=new Nv;Gt.setAnimationLoop(Rt),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(C){Qe=C,Pe.setAnimationLoop(C),C===null?Gt.stop():Gt.start()},Pe.addEventListener("sessionstart",Sn),Pe.addEventListener("sessionend",Je),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(V),V=Pe.getCamera()),C.isScene===!0&&C.onBeforeRender(m,C,V,b),p=be.get(C,g.length),p.init(),g.push(p),Ee.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),ge.setFromProjectionMatrix(Ee),te=this.localClippingEnabled,j=le.init(this.clippingPlanes,te),y=De.get(C,u.length),y.init(),u.push(y),Vn(C,V,0,m.sortObjects),y.finish(),m.sortObjects===!0&&y.sort(P,k),this.info.render.frame++,j===!0&&le.beginShadows();const q=p.state.shadowsArray;if(de.render(q,C,V),j===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1)&&Ie.render(y,C),p.setupLights(m._useLegacyLights),V.isArrayCamera){const K=V.cameras;for(let X=0,he=K.length;X<he;X++){const xe=K[X];Rf(y,C,xe,xe.viewport)}}else Rf(y,C,V);b!==null&&(Be.updateMultisampleRenderTarget(b),Be.updateRenderTargetMipmap(b)),C.isScene===!0&&C.onAfterRender(m,C,V),ve.resetDefaultState(),L=-1,F=null,g.pop(),g.length>0?p=g[g.length-1]:p=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function Vn(C,V,q,K){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ge.intersectsSprite(C)){K&&me.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ee);const xe=J.update(C),we=C.material;we.visible&&y.push(C,xe,we,q,me.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ge.intersectsObject(C))){const xe=J.update(C),we=C.material;if(K&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),me.copy(C.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),me.copy(xe.boundingSphere.center)),me.applyMatrix4(C.matrixWorld).applyMatrix4(Ee)),Array.isArray(we)){const Ae=xe.groups;for(let Oe=0,Re=Ae.length;Oe<Re;Oe++){const Le=Ae[Oe],ht=we[Le.materialIndex];ht&&ht.visible&&y.push(C,xe,ht,q,me.z,Le)}}else we.visible&&y.push(C,xe,we,q,me.z,null)}}const he=C.children;for(let xe=0,we=he.length;xe<we;xe++)Vn(he[xe],V,q,K)}function Rf(C,V,q,K){const X=C.opaque,he=C.transmissive,xe=C.transparent;p.setupLightsView(q),j===!0&&le.setGlobalState(m.clippingPlanes,q),he.length>0&&Xv(X,he,V,q),K&&Te.viewport(S.copy(K)),X.length>0&&Qs(X,V,q),he.length>0&&Qs(he,V,q),xe.length>0&&Qs(xe,V,q),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Xv(C,V,q,K){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const he=ze.isWebGL2;ce===null&&(ce=new Fr(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?zs:$i,minFilter:wr,samples:he?4:0})),m.getDrawingBufferSize(ye),he?ce.setSize(ye.x,ye.y):ce.setSize(Ed(ye.x),Ed(ye.y));const xe=m.getRenderTarget();m.setRenderTarget(ce),m.getClearColor(O),R=m.getClearAlpha(),R<1&&m.setClearColor(16777215,.5),m.clear();const we=m.toneMapping;m.toneMapping=Yi,Qs(C,q,K),Be.updateMultisampleRenderTarget(ce),Be.updateRenderTargetMipmap(ce);let Ae=!1;for(let Oe=0,Re=V.length;Oe<Re;Oe++){const Le=V[Oe],ht=Le.object,un=Le.geometry,wt=Le.material,Qn=Le.group;if(wt.side===ai&&ht.layers.test(K.layers)){const at=wt.side;wt.side=on,wt.needsUpdate=!0,Pf(ht,q,K,un,wt,Qn),wt.side=at,wt.needsUpdate=!0,Ae=!0}}Ae===!0&&(Be.updateMultisampleRenderTarget(ce),Be.updateRenderTargetMipmap(ce)),m.setRenderTarget(xe),m.setClearColor(O,R),m.toneMapping=we}function Qs(C,V,q){const K=V.isScene===!0?V.overrideMaterial:null;for(let X=0,he=C.length;X<he;X++){const xe=C[X],we=xe.object,Ae=xe.geometry,Oe=K===null?xe.material:K,Re=xe.group;we.layers.test(q.layers)&&Pf(we,V,q,Ae,Oe,Re)}}function Pf(C,V,q,K,X,he){C.onBeforeRender(m,V,q,K,X,he),C.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),X.onBeforeRender(m,V,q,K,C,he),X.transparent===!0&&X.side===ai&&X.forceSinglePass===!1?(X.side=on,X.needsUpdate=!0,m.renderBufferDirect(q,V,K,X,C,he),X.side=Zi,X.needsUpdate=!0,m.renderBufferDirect(q,V,K,X,C,he),X.side=ai):m.renderBufferDirect(q,V,K,X,C,he),C.onAfterRender(m,V,q,K,X,he)}function Js(C,V,q){V.isScene!==!0&&(V=qe);const K=ke.get(C),X=p.state.lights,he=p.state.shadowsArray,xe=X.state.version,we=re.getParameters(C,X.state,he,V,q),Ae=re.getProgramCacheKey(we);let Oe=K.programs;K.environment=C.isMeshStandardMaterial?V.environment:null,K.fog=V.fog,K.envMap=(C.isMeshStandardMaterial?D:ft).get(C.envMap||K.environment),K.envMapRotation=K.environment!==null&&C.envMap===null?V.environmentRotation:C.envMapRotation,Oe===void 0&&(C.addEventListener("dispose",Y),Oe=new Map,K.programs=Oe);let Re=Oe.get(Ae);if(Re!==void 0){if(K.currentProgram===Re&&K.lightsStateVersion===xe)return Df(C,we),Re}else we.uniforms=re.getUniforms(C),C.onBuild(q,we,m),C.onBeforeCompile(we,m),Re=re.acquireProgram(we,Ae),Oe.set(Ae,Re),K.uniforms=we.uniforms;const Le=K.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Le.clippingPlanes=le.uniform),Df(C,we),K.needsLights=qv(C),K.lightsStateVersion=xe,K.needsLights&&(Le.ambientLightColor.value=X.state.ambient,Le.lightProbe.value=X.state.probe,Le.directionalLights.value=X.state.directional,Le.directionalLightShadows.value=X.state.directionalShadow,Le.spotLights.value=X.state.spot,Le.spotLightShadows.value=X.state.spotShadow,Le.rectAreaLights.value=X.state.rectArea,Le.ltc_1.value=X.state.rectAreaLTC1,Le.ltc_2.value=X.state.rectAreaLTC2,Le.pointLights.value=X.state.point,Le.pointLightShadows.value=X.state.pointShadow,Le.hemisphereLights.value=X.state.hemi,Le.directionalShadowMap.value=X.state.directionalShadowMap,Le.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Le.spotShadowMap.value=X.state.spotShadowMap,Le.spotLightMatrix.value=X.state.spotLightMatrix,Le.spotLightMap.value=X.state.spotLightMap,Le.pointShadowMap.value=X.state.pointShadowMap,Le.pointShadowMatrix.value=X.state.pointShadowMatrix),K.currentProgram=Re,K.uniformsList=null,Re}function Lf(C){if(C.uniformsList===null){const V=C.currentProgram.getUniforms();C.uniformsList=al.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function Df(C,V){const q=ke.get(C);q.outputColorSpace=V.outputColorSpace,q.batching=V.batching,q.instancing=V.instancing,q.instancingColor=V.instancingColor,q.instancingMorph=V.instancingMorph,q.skinning=V.skinning,q.morphTargets=V.morphTargets,q.morphNormals=V.morphNormals,q.morphColors=V.morphColors,q.morphTargetsCount=V.morphTargetsCount,q.numClippingPlanes=V.numClippingPlanes,q.numIntersection=V.numClipIntersection,q.vertexAlphas=V.vertexAlphas,q.vertexTangents=V.vertexTangents,q.toneMapping=V.toneMapping}function Yv(C,V,q,K,X){V.isScene!==!0&&(V=qe),Be.resetTextureUnits();const he=V.fog,xe=K.isMeshStandardMaterial?V.environment:null,we=b===null?m.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:nr,Ae=(K.isMeshStandardMaterial?D:ft).get(K.envMap||xe),Oe=K.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Re=!!q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Le=!!q.morphAttributes.position,ht=!!q.morphAttributes.normal,un=!!q.morphAttributes.color;let wt=Yi;K.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(wt=m.toneMapping);const Qn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,at=Qn!==void 0?Qn.length:0,Ue=ke.get(K),sc=p.state.lights;if(j===!0&&(te===!0||C!==F)){const Mn=C===F&&K.id===L;le.setState(K,C,Mn)}let ot=!1;K.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==sc.state.version||Ue.outputColorSpace!==we||X.isBatchedMesh&&Ue.batching===!1||!X.isBatchedMesh&&Ue.batching===!0||X.isInstancedMesh&&Ue.instancing===!1||!X.isInstancedMesh&&Ue.instancing===!0||X.isSkinnedMesh&&Ue.skinning===!1||!X.isSkinnedMesh&&Ue.skinning===!0||X.isInstancedMesh&&Ue.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ue.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ue.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ue.instancingMorph===!1&&X.morphTexture!==null||Ue.envMap!==Ae||K.fog===!0&&Ue.fog!==he||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==le.numPlanes||Ue.numIntersection!==le.numIntersection)||Ue.vertexAlphas!==Oe||Ue.vertexTangents!==Re||Ue.morphTargets!==Le||Ue.morphNormals!==ht||Ue.morphColors!==un||Ue.toneMapping!==wt||ze.isWebGL2===!0&&Ue.morphTargetsCount!==at)&&(ot=!0):(ot=!0,Ue.__version=K.version);let ir=Ue.currentProgram;ot===!0&&(ir=Js(K,V,X));let If=!1,Wo=!1,ac=!1;const Ut=ir.getUniforms(),rr=Ue.uniforms;if(Te.useProgram(ir.program)&&(If=!0,Wo=!0,ac=!0),K.id!==L&&(L=K.id,Wo=!0),If||F!==C){Ut.setValue(W,"projectionMatrix",C.projectionMatrix),Ut.setValue(W,"viewMatrix",C.matrixWorldInverse);const Mn=Ut.map.cameraPosition;Mn!==void 0&&Mn.setValue(W,me.setFromMatrixPosition(C.matrixWorld)),ze.logarithmicDepthBuffer&&Ut.setValue(W,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ut.setValue(W,"isOrthographic",C.isOrthographicCamera===!0),F!==C&&(F=C,Wo=!0,ac=!0)}if(X.isSkinnedMesh){Ut.setOptional(W,X,"bindMatrix"),Ut.setOptional(W,X,"bindMatrixInverse");const Mn=X.skeleton;Mn&&(ze.floatVertexTextures?(Mn.boneTexture===null&&Mn.computeBoneTexture(),Ut.setValue(W,"boneTexture",Mn.boneTexture,Be)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(Ut.setOptional(W,X,"batchingTexture"),Ut.setValue(W,"batchingTexture",X._matricesTexture,Be));const lc=q.morphAttributes;if((lc.position!==void 0||lc.normal!==void 0||lc.color!==void 0&&ze.isWebGL2===!0)&&oe.update(X,q,ir),(Wo||Ue.receiveShadow!==X.receiveShadow)&&(Ue.receiveShadow=X.receiveShadow,Ut.setValue(W,"receiveShadow",X.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(rr.envMap.value=Ae,rr.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),Wo&&(Ut.setValue(W,"toneMappingExposure",m.toneMappingExposure),Ue.needsLights&&$v(rr,ac),he&&K.fog===!0&&ne.refreshFogUniforms(rr,he),ne.refreshMaterialUniforms(rr,K,B,I,ce),al.upload(W,Lf(Ue),rr,Be)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(al.upload(W,Lf(Ue),rr,Be),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ut.setValue(W,"center",X.center),Ut.setValue(W,"modelViewMatrix",X.modelViewMatrix),Ut.setValue(W,"normalMatrix",X.normalMatrix),Ut.setValue(W,"modelMatrix",X.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Mn=K.uniformsGroups;for(let cc=0,Kv=Mn.length;cc<Kv;cc++)if(ze.isWebGL2){const Uf=Mn[cc];_e.update(Uf,ir),_e.bind(Uf,ir)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ir}function $v(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function qv(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(C,V,q){ke.get(C.texture).__webglTexture=V,ke.get(C.depthTexture).__webglTexture=q;const K=ke.get(C);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=q===void 0,K.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,V){const q=ke.get(C);q.__webglFramebuffer=V,q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,q=0){b=C,A=V,E=q;let K=!0,X=null,he=!1,xe=!1;if(C){const Ae=ke.get(C);Ae.__useDefaultFramebuffer!==void 0?(Te.bindFramebuffer(W.FRAMEBUFFER,null),K=!1):Ae.__webglFramebuffer===void 0?Be.setupRenderTarget(C):Ae.__hasExternalTextures&&Be.rebindTextures(C,ke.get(C.texture).__webglTexture,ke.get(C.depthTexture).__webglTexture);const Oe=C.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(xe=!0);const Re=ke.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Re[V])?X=Re[V][q]:X=Re[V],he=!0):ze.isWebGL2&&C.samples>0&&Be.useMultisampledRTT(C)===!1?X=ke.get(C).__webglMultisampledFramebuffer:Array.isArray(Re)?X=Re[q]:X=Re,S.copy(C.viewport),w.copy(C.scissor),N=C.scissorTest}else S.copy(H).multiplyScalar(B).floor(),w.copy(Z).multiplyScalar(B).floor(),N=ee;if(Te.bindFramebuffer(W.FRAMEBUFFER,X)&&ze.drawBuffers&&K&&Te.drawBuffers(C,X),Te.viewport(S),Te.scissor(w),Te.setScissorTest(N),he){const Ae=ke.get(C.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ae.__webglTexture,q)}else if(xe){const Ae=ke.get(C.texture),Oe=V||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ae.__webglTexture,q||0,Oe)}L=-1},this.readRenderTargetPixels=function(C,V,q,K,X,he,xe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=ke.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&xe!==void 0&&(we=we[xe]),we){Te.bindFramebuffer(W.FRAMEBUFFER,we);try{const Ae=C.texture,Oe=Ae.format,Re=Ae.type;if(Oe!==zn&&Se.convert(Oe)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=Re===zs&&(Me.has("EXT_color_buffer_half_float")||ze.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Re!==$i&&Se.convert(Re)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Re===li&&(ze.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-K&&q>=0&&q<=C.height-X&&W.readPixels(V,q,K,X,Se.convert(Oe),Se.convert(Re),he)}finally{const Ae=b!==null?ke.get(b).__webglFramebuffer:null;Te.bindFramebuffer(W.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(C,V,q=0){const K=Math.pow(2,-q),X=Math.floor(V.image.width*K),he=Math.floor(V.image.height*K);Be.setTexture2D(V,0),W.copyTexSubImage2D(W.TEXTURE_2D,q,0,0,C.x,C.y,X,he),Te.unbindTexture()},this.copyTextureToTexture=function(C,V,q,K=0){const X=V.image.width,he=V.image.height,xe=Se.convert(q.format),we=Se.convert(q.type);Be.setTexture2D(q,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,q.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,q.unpackAlignment),V.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,K,C.x,C.y,X,he,xe,we,V.image.data):V.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,K,C.x,C.y,V.mipmaps[0].width,V.mipmaps[0].height,xe,V.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,K,C.x,C.y,xe,we,V.image),K===0&&q.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(C,V,q,K,X=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=Math.round(C.max.x-C.min.x),xe=Math.round(C.max.y-C.min.y),we=C.max.z-C.min.z+1,Ae=Se.convert(K.format),Oe=Se.convert(K.type);let Re;if(K.isData3DTexture)Be.setTexture3D(K,0),Re=W.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)Be.setTexture2DArray(K,0),Re=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,K.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,K.unpackAlignment);const Le=W.getParameter(W.UNPACK_ROW_LENGTH),ht=W.getParameter(W.UNPACK_IMAGE_HEIGHT),un=W.getParameter(W.UNPACK_SKIP_PIXELS),wt=W.getParameter(W.UNPACK_SKIP_ROWS),Qn=W.getParameter(W.UNPACK_SKIP_IMAGES),at=q.isCompressedTexture?q.mipmaps[X]:q.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,at.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,at.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,C.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,C.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,C.min.z),q.isDataTexture||q.isData3DTexture?W.texSubImage3D(Re,X,V.x,V.y,V.z,he,xe,we,Ae,Oe,at.data):K.isCompressedArrayTexture?W.compressedTexSubImage3D(Re,X,V.x,V.y,V.z,he,xe,we,Ae,at.data):W.texSubImage3D(Re,X,V.x,V.y,V.z,he,xe,we,Ae,Oe,at),W.pixelStorei(W.UNPACK_ROW_LENGTH,Le),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,ht),W.pixelStorei(W.UNPACK_SKIP_PIXELS,un),W.pixelStorei(W.UNPACK_SKIP_ROWS,wt),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Qn),X===0&&K.generateMipmaps&&W.generateMipmap(Re),Te.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?Be.setTextureCube(C,0):C.isData3DTexture?Be.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Be.setTexture2DArray(C,0):Be.setTexture2D(C,0),Te.unbindTexture()},this.resetState=function(){A=0,E=0,b=null,Te.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Af?"display-p3":"srgb",n.unpackColorSpace=Ze.workingColorSpace===nc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class H2 extends Gv{}H2.prototype.isWebGL1Renderer=!0;class G2 extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Vv extends Ks{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Sm=new xt,Td=new Tv,Ha=new ic,Ga=new $;class V2 extends an{constructor(e=new Si,n=new Vv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ha.copy(i.boundingSphere),Ha.applyMatrix4(r),Ha.radius+=o,e.ray.intersectsSphere(Ha)===!1)return;Sm.copy(r).invert(),Td.copy(e.ray).applyMatrix4(Sm);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,s.start),v=Math.min(c.count,s.start+s.count);for(let _=h,y=v;_<y;_++){const p=c.getX(_);Ga.fromBufferAttribute(f,p),Mm(Ga,p,l,r,e,n,this)}}else{const h=Math.max(0,s.start),v=Math.min(f.count,s.start+s.count);for(let _=h,y=v;_<y;_++)Ga.fromBufferAttribute(f,_),Mm(Ga,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Mm(t,e,n,i,r,o,s){const a=Td.distanceSqToPoint(t);if(a<n){const l=new $;Td.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:s})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tf);const W2=new Date("2025-10-31T00:00:00");function Em(){return Math.floor((new Date-W2)/(1e3*60*60*24))}function j2(){const t=ln(),{unlock:e}=cn(),n=U.useRef(null),i=U.useRef(null),r=U.useRef(null),[o,s]=U.useState(!1),[a,l]=U.useState(Em());U.useEffect(()=>{const d=n.current;if(!d)return;const f=d.clientWidth||window.innerWidth,h=d.clientHeight||window.innerHeight,v=new G2,_=new bn(75,f/h,.1,2e3);_.position.z=0;const y=new Gv({antialias:!0,alpha:!0});y.setSize(f,h),y.setPixelRatio(Math.min(window.devicePixelRatio,2)),y.setClearColor(0,0),d.appendChild(y.domElement),i.current=y;const p=2200,u=new Float32Array(p*3),g=new Float32Array(p*3),m=new Float32Array(p),x=[new Xe("#F5C518"),new Xe("#ffffff"),new Xe("#FFF6C0"),new Xe("#E8527A"),new Xe("#2DBDB1")];for(let I=0;I<p;I++){const B=Math.random()*Math.PI*2,P=Math.random()*800;u[I*3]=Math.cos(B)*P,u[I*3+1]=Math.sin(B)*P,u[I*3+2]=(Math.random()-.5)*2e3;const k=x[Math.random()<.7?1:Math.floor(Math.random()*x.length)];g[I*3]=k.r,g[I*3+1]=k.g,g[I*3+2]=k.b,m[I]=Math.random()*2.5+.5}const A=new Si;A.setAttribute("position",new vn(u,3)),A.setAttribute("color",new vn(g,3)),A.setAttribute("size",new vn(m,1));const E=new Vv({size:1.8,vertexColors:!0,transparent:!0,opacity:.9,sizeAttenuation:!0}),b=new V2(A,E);v.add(b);const L={x:0,y:0},F=I=>{L.x=(I.clientX/window.innerWidth-.5)*2,L.y=(I.clientY/window.innerHeight-.5)*2};window.addEventListener("mousemove",F);const S=()=>{const I=d.clientWidth||window.innerWidth,B=d.clientHeight||window.innerHeight;_.aspect=I/B,_.updateProjectionMatrix(),y.setSize(I,B)};window.addEventListener("resize",S);let w=0;const N=3.2,O=A.attributes.position,R=()=>{r.current=requestAnimationFrame(R),w+=(N-w)*.012;for(let I=0;I<p;I++)if(O.array[I*3+2]+=w,O.array[I*3+2]>600){const B=Math.random()*Math.PI*2,P=Math.random()*800;O.array[I*3]=Math.cos(B)*P,O.array[I*3+1]=Math.sin(B)*P,O.array[I*3+2]=-1e3}O.needsUpdate=!0,b.rotation.x+=(L.y*.06-b.rotation.x)*.03,b.rotation.y+=(L.x*.06-b.rotation.y)*.03,y.render(v,_)};R();const G=setTimeout(()=>s(!0),400);return()=>{clearTimeout(G),cancelAnimationFrame(r.current),window.removeEventListener("mousemove",F),window.removeEventListener("resize",S),y.dispose(),d.contains(y.domElement)&&d.removeChild(y.domElement)}},[]),U.useEffect(()=>{const d=setInterval(()=>l(Em()),6e4);return()=>clearInterval(d)},[]);const c=()=>{e(1),t("/gesture")};return M.jsxs("div",{style:{position:"relative",width:"100%",minHeight:"100vh",background:"radial-gradient(ellipse at 50% 40%, #1C1000 0%, #080500 70%)",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"},children:[M.jsx("div",{ref:n,style:{position:"absolute",inset:0,zIndex:0}}),M.jsx("div",{style:{position:"absolute",inset:0,background:"radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(8,5,0,0.75) 100%)",zIndex:1,pointerEvents:"none"}}),M.jsxs("div",{style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",maxWidth:680,padding:"2rem",opacity:o?1:0,transform:o?"translateY(0)":"translateY(24px)",transition:"opacity 1.2s ease, transform 1.2s ease"},children:[M.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,marginBottom:"2rem",padding:"6px 20px",borderRadius:99,border:"1px solid rgba(245,197,24,0.25)",background:"rgba(245,197,24,0.06)",opacity:o?1:0,animation:o?"fadeUp 0.8s 0.2s ease both":"none"},children:[M.jsx("span",{style:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"rgba(245,197,24,0.5)",fontFamily:"DM Sans"},children:"✦"}),M.jsxs("span",{style:{fontFamily:"Caveat",fontSize:"1.05rem",color:"rgba(245,197,24,0.75)"},children:[a," days since we first spoke"]}),M.jsx("span",{style:{fontSize:11,color:"rgba(245,197,24,0.5)"},children:"✦"})]}),M.jsxs("h1",{style:{fontFamily:"Playfair Display",fontSize:"clamp(2.4rem, 6vw, 5rem)",fontWeight:700,lineHeight:1.1,color:"#F5C518",marginBottom:"1.2rem",animation:o?"fadeUp 0.9s 0.35s ease both":"none",opacity:o?1:0},children:["To, my favourite",M.jsx("br",{}),M.jsx("em",{style:{fontStyle:"italic",color:"#FFF6C0"},children:"plot twist."})," ",M.jsx("span",{style:{fontStyle:"normal"},children:"💛"})]}),M.jsx("div",{style:{width:48,height:1,background:"rgba(245,197,24,0.35)",marginBottom:"1.4rem",animation:o?"fadeIn 0.8s 0.55s ease both":"none",opacity:o?1:0}}),M.jsx("p",{style:{fontFamily:"DM Sans",fontSize:"clamp(1rem, 2.5vw, 1.2rem)",color:"rgba(253,250,242,0.6)",lineHeight:1.7,maxWidth:440,marginBottom:"2.8rem",animation:o?"fadeUp 0.9s 0.5s ease both":"none",opacity:o?1:0},children:"This is everything. Take your time →"}),M.jsx("button",{onClick:c,style:{padding:"15px 44px",borderRadius:99,background:"#F5C518",color:"#1A1209",border:"none",fontFamily:"DM Sans",fontWeight:500,fontSize:"1.05rem",letterSpacing:"0.03em",transition:"transform 0.2s, box-shadow 0.2s",animation:o?"fadeUp 0.9s 0.7s ease both, pulseGlow 2.5s 1.5s ease-in-out infinite":"none",opacity:o?1:0},onMouseEnter:d=>{d.currentTarget.style.transform="scale(1.07)",d.currentTarget.style.boxShadow="0 0 36px rgba(245,197,24,0.55)"},onMouseLeave:d=>{d.currentTarget.style.transform="scale(1)",d.currentTarget.style.boxShadow="none"},onMouseDown:d=>{d.currentTarget.style.transform="scale(0.97)"},onMouseUp:d=>{d.currentTarget.style.transform="scale(1.07)"},children:"Let's go ✦"}),M.jsx("p",{style:{marginTop:"2.5rem",fontFamily:"Caveat",fontSize:"0.95rem",color:"rgba(245,197,24,0.25)",animation:o?"fadeIn 1s 1.2s ease both":"none",opacity:o?1:0},children:"made with love, by Akanksha ✦"})]})]})}const wm=2e3;function X2(){const t=ln(),{unlock:e}=cn(),n=U.useRef(null),i=U.useRef(null),r=U.useRef(null),o=U.useRef(null),s=U.useRef(null),[a,l]=U.useState("loading"),[c,d]=U.useState(0),[f,h]=U.useState(""),[v,_]=U.useState(!1);U.useEffect(()=>{const g=["https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js","https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js","https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js"];let m=0;const x=()=>{m++,m===g.length&&_(!0)};g.forEach(A=>{if(document.querySelector(`script[src="${A}"]`)){x();return}const E=document.createElement("script");E.src=A,E.crossOrigin="anonymous",E.onload=x,E.onerror=()=>l("error"),document.head.appendChild(E)})},[]);const y=U.useCallback(g=>{if(!g.multiHandLandmarks||g.multiHandLandmarks.length===0)return!1;for(const m of g.multiHandLandmarks){const x=m[8],A=m[5],E=m[12],b=m[9],L=m[16],F=m[13],S=m[20],w=m[17],N=x.y<A.y-.08,O=E.y<b.y-.08,R=L.y>F.y-.02,G=S.y>w.y-.02;if(N&&O&&R&&G)return!0}return!1},[]),p=U.useCallback(g=>{var E,b;const m=i.current;if(!m||!g.multiHandLandmarks)return;const x=m.getContext("2d");m.width=((E=n.current)==null?void 0:E.videoWidth)||640,m.height=((b=n.current)==null?void 0:b.videoHeight)||480,x.clearRect(0,0,m.width,m.height);const A=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[0,9],[9,10],[10,11],[11,12],[0,13],[13,14],[14,15],[15,16],[0,17],[17,18],[18,19],[19,20],[5,9],[9,13],[13,17]];g.multiHandLandmarks.forEach(L=>{x.strokeStyle="rgba(245,197,24,0.6)",x.lineWidth=2,A.forEach(([F,S])=>{x.beginPath(),x.moveTo(L[F].x*m.width,L[F].y*m.height),x.lineTo(L[S].x*m.width,L[S].y*m.height),x.stroke()}),L.forEach(F=>{x.beginPath(),x.arc(F.x*m.width,F.y*m.height,4.5,0,Math.PI*2),x.fillStyle="#F5C518",x.shadowColor="#F5C518",x.shadowBlur=7,x.fill(),x.shadowBlur=0})})},[]);U.useEffect(()=>{if(!v)return;const g=window.Hands,m=window.Camera;if(!g||!m){l("error");return}const x=new g({locateFile:E=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${E}`});x.setOptions({maxNumHands:2,modelComplexity:1,minDetectionConfidence:.6,minTrackingConfidence:.5}),x.onResults(E=>{var L;if(p(E),y(E)){s.current||(s.current=Date.now());const F=Date.now()-s.current,S=Math.min(F/wm*100,100);d(S),l("holding"),h(""),F>=wm&&(l("success"),d(100),(L=o.current)==null||L.stop(),x.close(),setTimeout(()=>{e(2),t("/voice")},1400))}else s.current&&(h("Almost… try again, Chinnayya 😅"),s.current=null,d(0)),l("detecting")}),r.current=x;const A=new m(n.current,{onFrame:async()=>{r.current&&await r.current.send({image:n.current})},width:640,height:480});return A.start().then(()=>l("detecting")).catch(()=>l("error")),o.current=A,()=>{A.stop(),x.close()}},[v,y,p,e,t]);const u={loading:"Loading camera…",detecting:"Show me a ✌️ — hold it for 2 seconds",holding:"Hold it… ✌️",success:"life with you feels like victory and peace 💛",error:"Camera access needed — please allow it and refresh"};return M.jsxs("div",{style:{width:"100%",minHeight:"100vh",background:"radial-gradient(ellipse at 50% 40%, #001A10 0%, #060D08 70%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2rem",position:"relative",overflow:"hidden"},children:[M.jsx(Y2,{}),M.jsx("div",{style:{marginBottom:"1.2rem",animation:"fadeUp 0.7s ease both",position:"relative",zIndex:2},children:M.jsx("span",{className:"badge",children:"Level 2 — gesture unlock"})}),M.jsx("h2",{style:{fontFamily:"Playfair Display",fontSize:"clamp(1.6rem, 4vw, 2.8rem)",color:"#F5C518",marginBottom:"0.4rem",textAlign:"center",animation:"fadeUp 0.7s 0.1s ease both",position:"relative",zIndex:2},children:"Make a shape with your hands"}),M.jsx("div",{style:{background:"rgba(245,197,24,0.06)",border:"1px solid rgba(245,197,24,0.15)",borderRadius:10,padding:"10px 24px",marginBottom:"1.5rem",maxWidth:440,position:"relative",zIndex:2,animation:"fadeUp 0.7s 0.15s ease both",textAlign:"center"},children:M.jsxs("p",{style:{fontFamily:"Caveat",fontSize:"1.05rem",color:"rgba(245,197,24,0.75)",lineHeight:1.7},children:["✌️ Hold up a V sign / peace sign",M.jsx("br",{}),"Index + middle fingers up, others curled",M.jsx("br",{}),"Hold steady for 2 seconds"]})}),M.jsxs("div",{style:{position:"relative",width:"100%",maxWidth:500,aspectRatio:"4/3",borderRadius:16,overflow:"hidden",border:a==="holding"||a==="success"?"2px solid rgba(245,197,24,0.8)":"1.5px solid rgba(245,197,24,0.2)",boxShadow:a==="success"?"0 0 50px rgba(245,197,24,0.35)":a==="holding"?"0 0 30px rgba(245,197,24,0.2)":"none",transition:"border-color 0.3s, box-shadow 0.3s",animation:"fadeUp 0.8s 0.2s ease both",zIndex:2},children:[M.jsx("video",{ref:n,autoPlay:!0,playsInline:!0,muted:!0,style:{width:"100%",height:"100%",objectFit:"cover",transform:"scaleX(-1)",display:"block"}}),M.jsx("canvas",{ref:i,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",transform:"scaleX(-1)",pointerEvents:"none"}}),a==="loading"&&M.jsxs("div",{style:{position:"absolute",inset:0,background:"rgba(6,13,8,0.85)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:12},children:[M.jsx("div",{style:{width:36,height:36,border:"3px solid rgba(245,197,24,0.2)",borderTop:"3px solid #F5C518",borderRadius:"50%",animation:"spinSlow 0.8s linear infinite"}}),M.jsx("p",{style:{fontFamily:"DM Sans",fontSize:"0.9rem",color:"rgba(245,197,24,0.6)"},children:"Starting camera…"})]}),a==="success"&&M.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(245,197,24,0.1)",display:"flex",alignItems:"center",justifyContent:"center",animation:"fadeIn 0.4s ease"},children:M.jsx("span",{style:{fontSize:"4rem",animation:"scaleIn 0.4s ease"},children:"✌️"})})]}),M.jsx("div",{style:{width:"100%",maxWidth:500,marginTop:"0.75rem",height:5,borderRadius:99,background:"rgba(245,197,24,0.1)",overflow:"hidden",opacity:a==="holding"||a==="success"?1:0,transition:"opacity 0.3s",position:"relative",zIndex:2},children:M.jsx("div",{style:{height:"100%",borderRadius:99,background:"linear-gradient(90deg, #F5C518, #E8527A)",width:`${c}%`,transition:"width 0.1s linear",boxShadow:"0 0 12px rgba(245,197,24,0.5)"}})}),M.jsx("div",{style:{minHeight:"3rem",marginTop:"0.75rem",textAlign:"center",position:"relative",zIndex:2,maxWidth:460},children:M.jsx("p",{style:{fontFamily:a==="success"?"Playfair Display":"Caveat",fontStyle:a==="success"?"italic":"normal",fontSize:a==="success"?"1.15rem":"1.1rem",color:a==="success"||a==="holding"?"#F5C518":a==="error"?"#E8527A":"rgba(253,250,242,0.5)",lineHeight:1.5,textShadow:a==="success"?"0 0 20px rgba(245,197,24,0.4)":"none"},children:f||u[a]||""})})]})}function Y2(){return M.jsx("div",{style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",zIndex:0},children:Array.from({length:30}).map((t,e)=>M.jsx("div",{style:{position:"absolute",left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,width:2,height:2,borderRadius:"50%",background:"white",opacity:Math.random()*.4+.1,animation:`starTwinkle ${2+Math.random()*4}s ease-in-out infinite`,animationDelay:`${Math.random()*5}s`}},e))})}const $2="i love you akanksha",q2="i love you",K2=8;function Z2(t){return t.toLowerCase().replace(/[^a-z\s]/g,"").replace(/\s+/g," ").trim()}function Q2(t){const e=Z2(t);return e.includes($2)?"correct":e.includes(q2)?"partial":"wrong"}function J2(){const t=ln(),{unlock:e}=cn(),n=U.useRef(null),i=U.useRef(null),r=U.useRef(null),o=U.useRef(null),s=U.useRef(null),a=U.useRef(null),[l,c]=U.useState("idle"),[d,f]=U.useState(""),[h,v]=U.useState(0),[_,y]=U.useState(""),[p,u]=U.useState(!1),g=U.useCallback(async()=>{try{const F=await navigator.mediaDevices.getUserMedia({audio:!0});a.current=F;const S=new(window.AudioContext||window.webkitAudioContext),w=S.createMediaStreamSource(F),N=S.createAnalyser();N.fftSize=128,w.connect(N),o.current=S,r.current=N;const O=s.current;if(!O)return;const R=O.getContext("2d"),G=N.frequencyBinCount,I=new Uint8Array(G),B=()=>{i.current=requestAnimationFrame(B),N.getByteFrequencyData(I),R.clearRect(0,0,O.width,O.height);const P=O.width/G*2.2;let k=0;for(let H=0;H<G;H++){const Z=I[H]/255*O.height*.85,ee=.5+I[H]/255*.5;R.fillStyle=`rgba(245,197,24,${ee})`,R.fillRect(k,O.height-Z,P,Z),R.fillStyle=`rgba(232,82,122,${ee*.35})`,R.fillRect(k,0,P,Z*.3),k+=P+1}};B()}catch{}},[]),m=U.useCallback(()=>{var S,w;cancelAnimationFrame(i.current),(S=o.current)==null||S.close(),(w=a.current)==null||w.getTracks().forEach(N=>N.stop());const F=s.current;F&&F.getContext("2d").clearRect(0,0,F.width,F.height)},[]),x=U.useCallback(()=>{const F=window.SpeechRecognition||window.webkitSpeechRecognition;if(!F){c("unsupported");return}const S=new F;S.lang="en-IN",S.continuous=!1,S.interimResults=!0,S.maxAlternatives=3,S.onstart=()=>{c("listening"),u(!0),y(""),f(""),g()},S.onresult=w=>{let N="",O="";for(let R=w.resultIndex;R<w.results.length;R++){const G=w.results[R][0].transcript;w.results[R].isFinal?O+=G:N+=G}if(y(O||N),O){let R="wrong";for(let G=w.resultIndex;G<w.results.length;G++)if(w.results[G].isFinal)for(let I=0;I<w.results[G].length;I++){const B=Q2(w.results[G][I].transcript);if(B==="correct"){R="correct";break}B==="partial"&&R!=="correct"&&(R="partial")}R==="correct"?(c("success"),f("💛 There it is."),m(),setTimeout(()=>{e(3),t("/memories")},1400)):R==="partial"?(f("Hmm, don't I have a name? 🙄"),c("idle"),u(!1),m(),v(G=>G+1)):(v(G=>{const I=G+1;return I>=K2?f("Okay you're clearly not trying 😭 say: I love you, Akanksha"):f("That's not it, try again 💛"),I}),c("idle"),u(!1),m())}},S.onerror=w=>{w.error==="no-speech"?f("I didn't catch that — try again 💛"):w.error==="not-allowed"&&f("Microphone access needed 🎤"),c("idle"),u(!1),m()},S.onend=()=>{l!=="success"&&u(!1)},n.current=S,S.start()},[g,m,e,t,l]);U.useEffect(()=>()=>{var F;(F=n.current)==null||F.abort(),m()},[m]);const A=l==="success",E=l==="listening",b=l==="unsupported",L=F=>F===0?"":F===1?"Give it another go 💛":F===2?"You say it all the time — this should be easy 😌":F===3?"Three tries and still shy? 🥺":F===4?"Rithvik. You literally say this daily. Come on.":F===5?"I know you know this one 💛":"The words are: I love you, Akanksha. Simple.";return M.jsxs("div",{style:{position:"relative",width:"100%",minHeight:"100vh",background:"radial-gradient(ellipse at 50% 40%, #12001A 0%, #060008 70%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2rem",overflow:"hidden"},children:[M.jsx(eb,{}),M.jsx("div",{style:{marginBottom:"1.5rem",animation:"fadeUp 0.7s ease both",position:"relative",zIndex:2},children:M.jsx("span",{className:"badge",style:{color:"#E8527A",borderColor:"rgba(232,82,122,0.3)"},children:"Level 3 — voice unlock"})}),M.jsxs("h2",{style:{fontFamily:"Playfair Display",fontSize:"clamp(1.5rem, 3.5vw, 2.6rem)",color:"#FDFAF2",textAlign:"center",maxWidth:520,lineHeight:1.3,marginBottom:"0.6rem",animation:"fadeUp 0.7s 0.1s ease both",position:"relative",zIndex:2},children:["Say what you know I love hearing",M.jsx("br",{}),"from you the most"," ",M.jsx("span",{style:{color:"#F5C518"},children:"💛"})]}),M.jsx("p",{style:{fontFamily:"Caveat",fontSize:"1.05rem",color:"rgba(253,250,242,0.35)",marginBottom:"2.5rem",textAlign:"center",animation:"fadeUp 0.7s 0.2s ease both",position:"relative",zIndex:2},children:"speak clearly into your mic"}),M.jsxs("div",{style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column",alignItems:"center",gap:"1.5rem",animation:"fadeUp 0.8s 0.3s ease both",width:"100%",maxWidth:480},children:[M.jsx("div",{style:{width:"100%",height:72,borderRadius:12,background:"rgba(245,197,24,0.04)",border:"1px solid rgba(245,197,24,0.1)",overflow:"hidden",opacity:E?1:.3,transition:"opacity 0.4s"},children:M.jsx("canvas",{ref:s,width:480,height:72,style:{width:"100%",height:"100%"}})}),M.jsx("button",{onClick:!E&&!A?x:void 0,disabled:E||A||b,style:{width:88,height:88,borderRadius:"50%",background:A?"#F5C518":E?"rgba(232,82,122,0.2)":"rgba(245,197,24,0.1)",border:E?"2px solid #E8527A":A?"2px solid #F5C518":"2px solid rgba(245,197,24,0.35)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2.2rem",transition:"all 0.25s",animation:E?"pulseGlow 1s ease-in-out infinite":"none",boxShadow:E?"0 0 30px rgba(232,82,122,0.4)":A?"0 0 30px rgba(245,197,24,0.5)":"none"},onMouseEnter:F=>{!E&&!A&&(F.currentTarget.style.background="rgba(245,197,24,0.18)",F.currentTarget.style.transform="scale(1.06)")},onMouseLeave:F=>{F.currentTarget.style.background=E?"rgba(232,82,122,0.2)":"rgba(245,197,24,0.1)",F.currentTarget.style.transform="scale(1)"},children:A?"💛":E?"🎙️":"🎤"}),M.jsx("p",{style:{fontFamily:"DM Sans",fontSize:"0.85rem",color:"rgba(253,250,242,0.3)",letterSpacing:"0.06em"},children:E?"listening…":A?"unlocked ✦":"tap to speak"})]}),_&&!A&&M.jsxs("div",{style:{marginTop:"1.5rem",padding:"10px 20px",borderRadius:10,background:"rgba(245,197,24,0.06)",border:"1px solid rgba(245,197,24,0.15)",fontFamily:"Caveat",fontSize:"1.2rem",color:"rgba(253,250,242,0.6)",textAlign:"center",maxWidth:400,position:"relative",zIndex:2,animation:"fadeIn 0.3s ease"},children:['"',_,'"']}),M.jsxs("div",{style:{minHeight:"2.5rem",marginTop:"1rem",textAlign:"center",position:"relative",zIndex:2},children:[d&&M.jsx("p",{style:{fontFamily:"Caveat",fontSize:"1.2rem",color:A?"#F5C518":d.includes("name")?"#E8527A":"rgba(253,250,242,0.6)",animation:"fadeUp 0.4s ease both"},children:d}),!d&&h>0&&!E&&M.jsx("p",{style:{fontFamily:"Caveat",fontSize:"1.1rem",color:"rgba(253,250,242,0.35)",animation:"fadeIn 0.4s ease"},children:L(h)}),b&&M.jsx("p",{style:{fontFamily:"Caveat",fontSize:"1.1rem",color:"#E8527A"},children:"Voice recognition needs Chrome or Edge 🎤"})]})]})}function eb(){return M.jsx("div",{style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",zIndex:0},children:Array.from({length:35}).map((t,e)=>M.jsx("div",{style:{position:"absolute",left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,width:2,height:2,borderRadius:"50%",background:e%5===0?"#E8527A":"white",opacity:Math.random()*.4+.1,animation:`starTwinkle ${2+Math.random()*4}s ease-in-out infinite`,animationDelay:`${Math.random()*5}s`}},e))})}const tb=[{id:1,date:"31 · 10 · 2025",label:"Halloween",caption:`TEDx SNIST never happened but I don't regret working for it — because that's what made me meet you. Arts Club Room. You thought you were my year. You called us the "nerd best friends." On the last day of the month, I found my first forever.`,color:"#2A1900",accent:"#F5C518",emoji:"🎃",side:"left",media:"public/photos/halloween.jpg",mediaType:"image"},{id:2,date:"02 · 11 · 2025",label:"Cinematica Expo",caption:'More bonding and fun time. We clicked really cute pictures and made fun vlogs, calling ourselves the "nerd group." Triple riding. The first time we shared a vehicle. I still absolutely hate you for posting that picture of me on your page.',color:"#001A10",accent:"#2DBDB1",emoji:"🎬",side:"right",media:"public/photos/ce.jpg",mediaType:"image"},{id:3,date:"08 · 11 · 2025",label:"Write Club",caption:"We tried to write a story together for the first time — little did we know the universe had already written one for us. This was also the first time we clicked a picture with just the two of us. So adorably awkward we look in those. You, especially.",color:"#140A1A",accent:"#E8527A",emoji:"✍️",side:"left",media:"public/photos/wc.jpg",mediaType:"image"},{id:4,date:"22 · 11 · 2025",label:"Sreeotsav D2",caption:"The first time we danced together. People caught us in the back, hand in hand, and cheered for us. You (awkwardly) gave me my first side-hug. The song shifted from Rooba Rooba to Kala Chashma and you pretended to know Baby's lyrics. You knew absolutely nothing. Sreeotsav D2 will forever hold a very special place in my heart.",color:"#1A0A00",accent:"#F5C518",emoji:"🕺",side:"right",media:"public/photos/sdt.jpg",mediaType:"image"},{id:5,date:"24 · 12 · 2025",label:"Christmas Eve",caption:"I filmed you for the very first time. Trust me, there's more to come — and that's a promise. We had such a lovely time and a great learning experience together. Only God knows when that video will come out though.",color:"#001A14",accent:"#2DBDB1",emoji:"📷",side:"left",media:"public/photos/bff.jpg",mediaType:"image"},{id:6,date:"01 · 01 · 2026",label:"Undying Screening",caption:"I saw you on-screen for the very first time. I couldn't have been any more impressed or proud — you were incredibly wonderful and I couldn't take my eyes off you even for a second. You were busy with people but I was simply admiring you from a distance. I cheered for you the loudest then and I know I'll always be your biggest supporter and loudest cheerleader.",color:"#0A0A1A",accent:"#E8527A",emoji:"🧟",side:"right",media:"public/photos/undying.jpg",mediaType:"image"},{id:7,date:"21 · 01 · 2026",label:"Nari Nari Naduma Murari",caption:`An almost first date. An almost literal "Nari Nari Naduma Murari" situation that thankfully did not happen. My dear boy had other plans and someone else on his mind. Dumbass. You put your head on my shoulder and I ruffled your hair. You watched the movie. I watched you. [Along with the movie of course, don't get mad now.]`,color:"#1A0010",accent:"#F5C518",emoji:"🎥",side:"left",media:"public/photos/nnnm.jpg",mediaType:"image"},{id:8,date:"14 · 02 · 2026",label:"Valentine's Day",caption:"I got on your bike for the first time alone. It was when you properly confessed. You went from confusion to certainty within minutes. You made up your mind entirely that I am the one. You wished me Valentine's and cut the call exactly a minute before the date changed. This is it. We found our way to each other and stayed.",color:"#1A0008",accent:"#E8527A",emoji:"💌",side:"right",media:"public/photos/val.jpg",mediaType:"image"},{id:9,date:"20 · 02 · 2026",label:"Kundeti Kommu",caption:"Chinnayya on stage. I couldn't have been any more proud watching you perform. Every practice session, every late rehearsal — all of it led to this moment. I was in the audience, camera in hand, completely in my element. You were in yours.",color:"#001814",accent:"#2DBDB1",emoji:"🎭",side:"left",media:"public/photos/kk.jpg",mediaType:"image"},{id:10,date:"26 · 02 · 2026",label:"Couple Friendly",caption:"Our first actual date. If you ask me right now where I see myself in 10 years, I'd say watching a movie with you — I'll watch you, you enjoy the movie. We'll cuddle and fall asleep together in a place we'd call home. Spring feels like coming home after a bad day. You, my darling, are my spring.",color:"#1A1000",accent:"#F5C518",emoji:"🌼",side:"right",media:"public/photos/cf.jpg",mediaType:"image"}];function nb(){const t=ln(),{unlock:e}=cn(),n=()=>{e(4),t("/compat")};return M.jsxs("div",{style:{width:"100%",minHeight:"100vh",background:"radial-gradient(ellipse at 50% 0%, #1C0E00 0%, #080500 60%)",padding:"4rem 1.5rem 5rem",position:"relative",overflowX:"hidden"},children:[M.jsxs("div",{style:{textAlign:"center",marginBottom:"1rem",animation:"fadeUp 0.7s ease both"},children:[M.jsx("span",{className:"badge",children:"Level 4"}),M.jsx("h2",{style:{fontFamily:"Playfair Display",fontSize:"clamp(2rem, 5vw, 3.5rem)",color:"#F5C518",marginTop:"0.75rem",marginBottom:"0.4rem"},children:"Memory Lane 📸"}),M.jsx("p",{style:{fontFamily:"Caveat",fontSize:"1.1rem",color:"rgba(253,250,242,0.4)"},children:"hover over each one"})]}),M.jsxs("div",{style:{position:"relative",maxWidth:900,margin:"3rem auto 0"},children:[M.jsx("div",{style:{position:"absolute",left:"50%",top:0,bottom:0,width:1,background:"linear-gradient(to bottom, transparent, rgba(245,197,24,0.3) 8%, rgba(245,197,24,0.3) 92%, transparent)",transform:"translateX(-50%)",zIndex:0}}),tb.map((i,r)=>M.jsx(ib,{mem:i,index:r},i.id))]}),M.jsx("div",{style:{textAlign:"center",marginTop:"4rem",animation:"fadeUp 0.7s ease both"},children:M.jsx("button",{onClick:n,style:{padding:"15px 44px",borderRadius:99,background:"#F5C518",color:"#1A1209",border:"none",fontFamily:"DM Sans",fontWeight:500,fontSize:"1.05rem",transition:"transform 0.2s, box-shadow 0.2s"},onMouseEnter:i=>{i.currentTarget.style.transform="scale(1.06)",i.currentTarget.style.boxShadow="0 0 32px rgba(245,197,24,0.45)"},onMouseLeave:i=>{i.currentTarget.style.transform="scale(1)",i.currentTarget.style.boxShadow="none"},children:"Keep going ✦"})})]})}function ib({mem:t,index:e}){const n=t.side==="left",i=`${e*.08}s`;return M.jsxs("div",{style:{display:"flex",justifyContent:n?"flex-start":"flex-end",alignItems:"center",marginBottom:"3rem",position:"relative",zIndex:1,animation:`${n?"slideInLeft":"slideInRight"} 0.6s ${i} ease both`},children:[M.jsxs("div",{style:{width:"45%",display:"flex",flexDirection:"column",alignItems:n?"flex-end":"flex-start"},children:[M.jsxs("p",{style:{fontFamily:"Caveat",fontSize:"0.9rem",color:t.accent,marginBottom:"0.5rem",opacity:.7,paddingRight:n?4:0,paddingLeft:n?0:4},children:[t.date," — ",t.label]}),M.jsx(rb,{mem:t,isLeft:n})]}),M.jsx("div",{style:{position:"absolute",left:"50%",transform:"translateX(-50%)",width:14,height:14,borderRadius:"50%",background:t.accent,boxShadow:`0 0 12px ${t.accent}88`,border:`2px solid ${t.color}`,zIndex:2,flexShrink:0}})]})}function rb({mem:t,isLeft:e}){const n=e?"-1.5deg":"1.5deg";return M.jsxs("div",{style:{width:"100%",maxWidth:280,aspectRatio:"3/4",perspective:900},className:"polaroid-wrap",children:[M.jsx("style",{children:`
        .polaroid-wrap:hover .polaroid-inner {
          transform: rotateY(180deg);
        }
        .polaroid-inner {
          transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
          position: relative;
          width: 100%;
          height: 100%;
          transform: rotate(${n});
        }
        .polaroid-front, .polaroid-back {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 4px;
        }
        .polaroid-back {
          transform: rotateY(180deg);
        }
      `}),M.jsxs("div",{className:"polaroid-inner",children:[M.jsxs("div",{className:"polaroid-front",style:{background:"#fff",padding:"10px 10px 36px",boxShadow:"0 8px 32px rgba(0,0,0,0.5), 3px 3px 0 rgba(0,0,0,0.15)"},children:[M.jsx("div",{style:{width:"100%",aspectRatio:"1",background:t.color,border:`1px solid ${t.accent}22`,borderRadius:2,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:8,overflow:"hidden",position:"relative"},children:t.media?t.mediaType==="video"?M.jsx("video",{src:t.media,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,style:{width:"100%",height:"100%",objectFit:"cover"}}):M.jsx("img",{src:t.media,alt:t.label,style:{width:"100%",height:"100%",objectFit:"cover"}}):M.jsxs(M.Fragment,{children:[M.jsx("span",{style:{fontSize:"2.4rem"},children:t.emoji}),M.jsx("span",{style:{fontFamily:"Caveat",fontSize:"0.8rem",color:`${t.accent}88`,textAlign:"center",padding:"0 8px"},children:"add photo / video here"})]})}),M.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:26,marginTop:4},children:M.jsx("span",{style:{fontFamily:"Caveat",fontSize:"0.85rem",color:"#555",letterSpacing:"0.04em"},children:t.label})})]}),M.jsxs("div",{className:"polaroid-back",style:{background:"#fffef8",padding:"18px 16px",boxShadow:"0 8px 32px rgba(0,0,0,0.5)",display:"flex",flexDirection:"column",gap:10,overflowY:"auto"},children:[M.jsx("p",{style:{fontFamily:"Caveat",fontSize:"0.85rem",color:t.accent==="#F5C518"?"#A07800":t.accent,fontWeight:600,borderBottom:`1.5px solid ${t.accent}44`,paddingBottom:6},children:t.date}),M.jsx("p",{style:{fontFamily:"Caveat",fontSize:"0.95rem",color:"#2C1D0A",lineHeight:1.55,flex:1},children:t.caption}),M.jsx("p",{style:{textAlign:"right",fontSize:"1rem",color:"#E8527A"},children:"♡"})]})]})]})}const Va=[{label:"Analysing Rithvik Reddy data",duration:1400,value:94},{label:"Running Chinnayya charisma score",duration:1200,value:99},{label:"Cross-referencing Reddy database",duration:1e3,value:100},{label:"Measuring zombie film acting range",duration:1300,value:97},{label:"Calculating forgetfulness index",duration:900,value:98,note:"very high"},{label:"Checking innocence levels",duration:1100,value:100,note:"dangerously high"},{label:"Verifying patience with overthinkers",duration:1200,value:99},{label:"Computing Akanksha compatibility",duration:1800,value:100}],ob=[{label:"Written in the stars",pct:18,color:"#F5C518"},{label:"TEDx fate",pct:12,color:"#E8527A"},{label:"Nerd best friends → more",pct:14,color:"#2DBDB1"},{label:"Same Reddy energy",pct:11,color:"#FFD6E7"},{label:"Universe approved",pct:15,color:"#C49A00"},{label:"Inevitable honestly",pct:13,color:"#993556"},{label:"Just meant to be",pct:17,color:"#0F6E56"}];function sb(){try{const t=new(window.AudioContext||window.webkitAudioContext);[0,.15,.3].forEach((e,n)=>{const i=t.createOscillator(),r=t.createGain();i.connect(r),r.connect(t.destination),i.frequency.value=[880,1100,1320][n],i.type="sine",r.gain.setValueAtTime(.18,t.currentTime+e),r.gain.exponentialRampToValueAtTime(.001,t.currentTime+e+.5),i.start(t.currentTime+e),i.stop(t.currentTime+e+.6)})}catch{}}function ab({slices:t,visible:e}){let a=-Math.PI/2;const l=t.map(c=>{const d=c.pct/100*Math.PI*2,f=a,h=a+d;a=h;const v=d>Math.PI?1:0,_=Math.cos(f),y=Math.sin(f),p=Math.cos(h),u=Math.sin(h);return{d:`M ${100+42*_} ${100+42*y} L ${100+80*_} ${100+80*y} A 80 80 0 ${v} 1 ${100+80*p} ${100+80*u} L ${100+42*p} ${100+42*u} A 42 42 0 ${v} 0 ${100+42*_} ${100+42*y} Z`,color:c.color,label:c.label}});return M.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:20},children:[M.jsxs("svg",{width:200,height:200,viewBox:"0 0 200 200",style:{opacity:e?1:0,transform:e?"rotate(0deg) scale(1)":"rotate(-180deg) scale(0.4)",transition:"opacity 0.9s ease, transform 0.9s cubic-bezier(0.34,1.56,0.64,1)",filter:"drop-shadow(0 0 16px rgba(245,197,24,0.2))"},children:[l.map((c,d)=>M.jsx("path",{d:c.d,fill:c.color,stroke:"#0D0800",strokeWidth:"2.5",style:{opacity:e?1:0,transition:`opacity 0.3s ${d*.08}s ease`}},d)),M.jsx("text",{x:100,y:93,textAnchor:"middle",style:{fontFamily:"DM Sans",fontSize:12,fill:"#F5C518",fontWeight:500},children:"100%"}),M.jsx("text",{x:100,y:109,textAnchor:"middle",style:{fontFamily:"Caveat",fontSize:10,fill:"rgba(245,197,24,0.55)"},children:"compatible"})]}),M.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px 14px",justifyContent:"center",maxWidth:400,opacity:e?1:0,transform:e?"translateY(0)":"translateY(12px)",transition:"opacity 0.6s 0.6s ease, transform 0.6s 0.6s ease"},children:t.map((c,d)=>M.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[M.jsx("div",{style:{width:9,height:9,borderRadius:"50%",background:c.color,flexShrink:0}}),M.jsx("span",{style:{fontFamily:"DM Sans",fontSize:"0.72rem",color:"rgba(253,250,242,0.65)"},children:c.label})]},d))})]})}function lb(){const t=ln(),{unlock:e}=cn(),[n,i]=U.useState(-1),[r,o]=U.useState(Array(Va.length).fill(0)),[s,a]=U.useState([]),[l,c]=U.useState(0),[d,f]=U.useState(!1),[h,v]=U.useState(!1),[_,y]=U.useState(!1),p=U.useRef(null),u=g=>{if(g>=Va.length){i(-1);let b=0;const L=setInterval(()=>{b+=3,b>=100&&(b=100,clearInterval(L),setTimeout(()=>{f(!0),sb(),setTimeout(()=>v(!0),600)},400)),c(b)},28);return}i(g);const m=Va[g],x=m.duration/16;let A=0;const E=()=>{A++;const b=Math.min(A/x*m.value,m.value);o(L=>{const F=[...L];return F[g]=b,F}),A<x?p.current=setTimeout(E,16):(a(L=>[...L,g]),p.current=setTimeout(()=>u(g+1),120))};E()};return U.useEffect(()=>()=>clearTimeout(p.current),[]),M.jsxs("div",{style:{width:"100%",minHeight:"100vh",background:"radial-gradient(ellipse at 50% 0%, #1C1000 0%, #080500 60%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"3rem 1.5rem",position:"relative",overflow:"hidden"},children:[M.jsx("div",{style:{position:"absolute",inset:0,zIndex:0,pointerEvents:"none",backgroundImage:"linear-gradient(rgba(245,197,24,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(245,197,24,0.025) 1px, transparent 1px)",backgroundSize:"40px 40px"}}),M.jsxs("div",{style:{position:"relative",zIndex:2,width:"100%",maxWidth:560},children:[M.jsx("div",{style:{textAlign:"center",marginBottom:"1.2rem",animation:"fadeUp 0.6s ease both"},children:M.jsx("span",{className:"badge",children:"Level 5 — compatibility analysis"})}),M.jsx("h2",{style:{fontFamily:"Playfair Display",fontSize:"clamp(1.6rem, 4vw, 2.6rem)",color:"#F5C518",textAlign:"center",marginBottom:"0.4rem",animation:"fadeUp 0.6s 0.1s ease both",textShadow:"0 0 24px rgba(245,197,24,0.25)"},children:"Compatibility Calculator"}),M.jsx("p",{style:{fontFamily:"Caveat",fontSize:"1rem",color:"rgba(245,197,24,0.4)",textAlign:"center",marginBottom:"2rem",animation:"fadeUp 0.6s 0.2s ease both"},children:"initialising analysis protocol…"}),M.jsxs("div",{style:{background:"rgba(10,7,0,0.85)",border:"1px solid rgba(245,197,24,0.18)",borderRadius:12,padding:"1.5rem",marginBottom:"1.5rem",animation:"fadeUp 0.7s 0.3s ease both",boxShadow:"0 0 40px rgba(245,197,24,0.05), inset 0 0 40px rgba(0,0,0,0.4)"},children:[M.jsxs("div",{style:{display:"flex",gap:6,marginBottom:"1.2rem",alignItems:"center"},children:[["#E8527A","#F5C518","#2DBDB1"].map((g,m)=>M.jsx("div",{style:{width:10,height:10,borderRadius:"50%",background:g,opacity:.8}},m)),M.jsx("span",{style:{marginLeft:8,fontSize:"0.7rem",color:"rgba(245,197,24,0.3)",letterSpacing:"0.1em"},children:"compatibility_engine_v2.exe"})]}),!_&&M.jsxs("div",{style:{textAlign:"center",padding:"1rem 0"},children:[M.jsx("p",{style:{fontFamily:"Caveat",fontSize:"1.1rem",color:"rgba(245,197,24,0.55)",marginBottom:"1rem"},children:"> Ready to run analysis?"}),M.jsx("button",{onClick:()=>{y(!0),setTimeout(()=>u(0),400)},style:{padding:"11px 32px",borderRadius:8,background:"rgba(245,197,24,0.08)",border:"1px solid rgba(245,197,24,0.4)",color:"#F5C518",fontFamily:"DM Sans",fontSize:"0.95rem",fontWeight:500,letterSpacing:"0.05em",transition:"all 0.2s"},onMouseEnter:g=>{g.currentTarget.style.background="rgba(245,197,24,0.18)",g.currentTarget.style.boxShadow="0 0 20px rgba(245,197,24,0.25)"},onMouseLeave:g=>{g.currentTarget.style.background="rgba(245,197,24,0.08)",g.currentTarget.style.boxShadow="none"},children:"> run analysis"})]}),_&&Va.map((g,m)=>{const x=s.includes(m),A=n===m,E=x||A;return M.jsxs("div",{style:{marginBottom:"1rem",opacity:E?1:.18,transition:"opacity 0.3s"},children:[M.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:5},children:[M.jsxs("span",{style:{fontFamily:"DM Sans",fontSize:"0.8rem",color:x?"#F5C518":A?"#FFD060":"rgba(245,197,24,0.3)",display:"flex",alignItems:"center",gap:6},children:[M.jsx("span",{children:x?"✓":A?"›":"·"}),g.label,g.note&&x&&M.jsxs("span",{style:{fontSize:"0.7rem",color:"#E8527A",opacity:.85},children:["[",g.note,"]"]})]}),M.jsx("span",{style:{fontFamily:"DM Sans",fontSize:"0.75rem",color:x?"#F5C518":"rgba(245,197,24,0.4)",minWidth:36,textAlign:"right"},children:x?`${g.value}%`:A?`${Math.round(r[m])}%`:"—"})]}),M.jsx("div",{style:{height:4,borderRadius:99,background:"rgba(245,197,24,0.08)",overflow:"hidden"},children:M.jsx("div",{style:{height:"100%",borderRadius:99,background:x?"linear-gradient(90deg, #C49A00, #F5C518)":"linear-gradient(90deg, #A07800, #FFD060)",width:`${r[m]}%`,boxShadow:A?"0 0 8px rgba(245,197,24,0.5)":"none"}})})]},m)})]}),l>0&&M.jsx("div",{style:{textAlign:"center",marginBottom:"1.5rem",animation:"fadeUp 0.4s ease both"},children:M.jsxs("span",{style:{fontFamily:"Playfair Display",fontSize:"clamp(3rem, 10vw, 5.5rem)",fontWeight:700,color:"#F5C518",textShadow:"0 0 40px rgba(245,197,24,0.5)"},children:[l,"%"]})}),d&&M.jsx("div",{style:{textAlign:"center",marginBottom:"2rem",animation:"scaleIn 0.6s cubic-bezier(0.34,1.56,0.64,1) both"},children:M.jsxs("p",{style:{fontFamily:"Playfair Display",fontSize:"clamp(1.2rem, 3vw, 1.8rem)",color:"#F5C518",fontStyle:"italic",lineHeight:1.7,textShadow:"0 0 20px rgba(245,197,24,0.35)"},children:["100% Compatible ✦",M.jsx("br",{}),M.jsx("span",{style:{fontSize:"0.8em",color:"rgba(245,197,24,0.65)"},children:"Made for each other ✦ A match made in heaven"})]})}),h&&M.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"2rem"},children:[M.jsx("p",{style:{fontFamily:"Caveat",fontSize:"1rem",color:"rgba(245,197,24,0.4)",marginBottom:"1.2rem",animation:"fadeIn 0.5s ease both"},children:"breakdown of why:"}),M.jsx(ab,{slices:ob,visible:h})]}),h&&M.jsx("div",{style:{textAlign:"center",marginTop:"1rem",animation:"fadeUp 0.6s 0.8s ease both"},children:M.jsx("button",{onClick:()=>{e(5),t("/memgame")},style:{padding:"14px 44px",borderRadius:99,background:"#F5C518",color:"#1A1209",border:"none",fontFamily:"DM Sans",fontWeight:500,fontSize:"1rem",transition:"transform 0.2s, box-shadow 0.2s"},onMouseEnter:g=>{g.currentTarget.style.transform="scale(1.06)",g.currentTarget.style.boxShadow="0 0 32px rgba(245,197,24,0.45)"},onMouseLeave:g=>{g.currentTarget.style.transform="scale(1)",g.currentTarget.style.boxShadow="none"},children:"Continue ✦"})})]})]})}const bd=[{id:"mem1",photo:"public/photos/one.jpg",color:"#2A1900",label:"Memory 1"},{id:"mem2",photo:"public/photos/two.jpg",color:"#1A0008",label:"Memory 2"},{id:"mem3",photo:"public/photos/three.jpg",color:"#001A10",label:"Memory 3"},{id:"mem4",photo:"public/photos/four.jpg",color:"#0A001A",label:"Memory 4"},{id:"mem5",photo:"public/photos/five.jpg",color:"#001018",label:"Memory 5"},{id:"mem6",photo:"public/photos/six.jpg",color:"#1A0A00",label:"Memory 6"},{id:"mem7",photo:"public/photos/seven.jpg",color:"#0A1A00",label:"Memory 7"},{id:"mem8",photo:"public/photos/eight.jpg",color:"#1A0012",label:"Memory 8"}],Tm=["Not a match… you forget things IRL too, so this checks out 💛","Wrong! Even Chinnayya had better memory than this 😅","Nope! The forgetfulness index was clearly correct 😌","Not it! Try again, bangaaram 🌹","So close yet so far… just like your lyric knowledge at Sreeotasv 😂","Wrong pair! You watched the movie, I watched you — now focus! 📷","Nooo! You literally lived these memories, come on 😭","Not a match! Good thing you're cute 💛","Rithvik. RITHVIK. These are our memories 😤","Wrong! I believe in you (barely) 🥺"];function cb(t){const e=[...t];for(let n=e.length-1;n>0;n--){const i=Math.floor(Math.random()*(n+1));[e[n],e[i]]=[e[i],e[n]]}return e}function ub(){const t=[];return bd.forEach(e=>{t.push({...e,uid:`${e.id}-a`}),t.push({...e,uid:`${e.id}-b`})}),cb(t)}function db(){const t=ln(),{unlock:e}=cn(),[n]=U.useState(()=>ub()),[i,r]=U.useState([]),[o,s]=U.useState([]),[a,l]=U.useState(!1),[c,d]=U.useState(""),[f,h]=U.useState(0),[v,_]=U.useState([]),[y,p]=U.useState(0),[u,g]=U.useState(!1),[m,x]=U.useState(0),A=U.useCallback(E=>{if(a||i.includes(E)||o.includes(n[E].id))return;const b=[...i,E];if(r(b),b.length===2){l(!0),p(S=>S+1);const[L,F]=b;if(n[L].id===n[F].id){const S=[...o,n[L].id];s(S),r([]),l(!1),d(""),S.length===bd.length&&g(!0)}else{const S=Tm[m%Tm.length];d(S),h(w=>w+1),x(w=>w+1),_([L,F]),setTimeout(()=>{r([]),_([]),l(!1)},1200)}}},[a,i,o,n,m]);return M.jsxs("div",{style:{width:"100%",minHeight:"100vh",background:"radial-gradient(ellipse at 50% 0%, #1A0A00 0%, #080500 60%)",display:"flex",flexDirection:"column",alignItems:"center",padding:"3rem 1.5rem 4rem",position:"relative",overflow:"hidden"},children:[M.jsx(hb,{}),M.jsxs("div",{style:{textAlign:"center",marginBottom:"1rem",position:"relative",zIndex:2,animation:"fadeUp 0.6s ease both"},children:[M.jsx("span",{className:"badge",children:"Level 6 — memory game"}),M.jsx("h2",{style:{fontFamily:"Playfair Display",fontSize:"clamp(1.8rem, 4vw, 3rem)",color:"#F5C518",marginTop:"0.6rem",marginBottom:"0.3rem"},children:"Find the pairs 💛"}),M.jsx("p",{style:{fontFamily:"Caveat",fontSize:"1rem",color:"rgba(253,250,242,0.4)"},children:u?`Done in ${y} moves! 🎉`:`${o.length} / ${bd.length} matched · ${y} moves`})]}),M.jsxs("div",{style:{minHeight:"2rem",marginBottom:"0.75rem",textAlign:"center",position:"relative",zIndex:2},children:[c&&!u&&M.jsx("p",{style:{fontFamily:"Caveat",fontSize:"1.1rem",color:"#E8527A",animation:"fadeUp 0.3s ease both"},children:c},f),u&&M.jsx("p",{style:{fontFamily:"Caveat",fontSize:"1.2rem",color:"#F5C518",animation:"fadeUp 0.4s ease both"},children:"You remembered all of them 💛 just like I remember everything about you."})]}),M.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:12,width:"100%",maxWidth:560,position:"relative",zIndex:2,animation:"fadeUp 0.7s 0.2s ease both"},children:n.map((E,b)=>{const L=i.includes(b)||o.includes(E.id),F=o.includes(E.id),S=v.includes(b);return M.jsx(fb,{card:E,isFaceUp:L,isMatched:F,isShaking:S,onClick:()=>A(b)},E.uid)})}),u&&M.jsx("div",{style:{marginTop:"2.5rem",textAlign:"center",position:"relative",zIndex:2,animation:"fadeUp 0.6s ease both"},children:M.jsx("button",{onClick:()=>{e(6),t("/arcade")},style:{padding:"14px 44px",borderRadius:99,background:"#F5C518",color:"#1A1209",border:"none",fontFamily:"DM Sans",fontWeight:500,fontSize:"1rem",transition:"transform 0.2s, box-shadow 0.2s"},onMouseEnter:E=>{E.currentTarget.style.transform="scale(1.06)",E.currentTarget.style.boxShadow="0 0 32px rgba(245,197,24,0.45)"},onMouseLeave:E=>{E.currentTarget.style.transform="scale(1)",E.currentTarget.style.boxShadow="none"},children:"Continue ✦"})})]})}function fb({card:t,isFaceUp:e,isMatched:n,isShaking:i,onClick:r}){return M.jsxs("div",{onClick:e?void 0:r,style:{aspectRatio:"1",perspective:600,animation:i?"shake 0.4s ease":"none"},children:[M.jsx("style",{children:`
        .mem-inner-${t.uid.replace(/[^a-z0-9]/gi,"")} {
          transition: transform 0.45s cubic-bezier(0.4,0,0.2,1);
          transform-style: preserve-3d;
          position: relative;
          width: 100%;
          height: 100%;
          transform: ${e?"rotateY(180deg)":"rotateY(0deg)"};
        }
        .mem-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 10px;
          overflow: hidden;
        }
        .mem-back-face {
          transform: rotateY(180deg);
        }
      `}),M.jsxs("div",{className:`mem-inner-${t.uid.replace(/[^a-z0-9]/gi,"")}`,children:[M.jsx("div",{className:"mem-face",style:{background:"rgba(245,197,24,0.06)",border:"1.5px solid rgba(245,197,24,0.2)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"border-color 0.2s, background 0.2s"},onMouseEnter:o=>{e||(o.currentTarget.style.borderColor="rgba(245,197,24,0.5)",o.currentTarget.style.background="rgba(245,197,24,0.12)")},onMouseLeave:o=>{o.currentTarget.style.borderColor="rgba(245,197,24,0.2)",o.currentTarget.style.background="rgba(245,197,24,0.06)"},children:M.jsx("span",{style:{fontFamily:"Playfair Display",fontSize:"1.6rem",color:"rgba(245,197,24,0.3)",fontStyle:"italic"},children:"?"})}),M.jsxs("div",{className:"mem-face mem-back-face",style:{background:t.color,border:n?"2px solid rgba(245,197,24,0.7)":"1.5px solid rgba(245,197,24,0.3)",boxShadow:n?"0 0 16px rgba(245,197,24,0.3)":"none"},children:[t.photo?M.jsx("img",{src:t.photo,alt:t.label,style:{width:"100%",height:"100%",objectFit:"cover"}}):M.jsxs("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:4,padding:8},children:[M.jsx("span",{style:{fontSize:"1.4rem"},children:"📷"}),M.jsx("span",{style:{fontFamily:"Caveat",fontSize:"0.7rem",color:"rgba(245,197,24,0.35)",textAlign:"center"},children:t.label})]}),n&&M.jsx("div",{style:{position:"absolute",top:6,right:6,width:18,height:18,borderRadius:"50%",background:"#F5C518",display:"flex",alignItems:"center",justifyContent:"center"},children:M.jsx("span",{style:{fontSize:"0.6rem",color:"#1A1209",fontWeight:700},children:"✓"})})]})]})]})}function hb(){return M.jsx("div",{style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",zIndex:0},children:Array.from({length:30}).map((t,e)=>M.jsx("div",{style:{position:"absolute",left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,width:2,height:2,borderRadius:"50%",background:"white",opacity:Math.random()*.35+.05,animation:`starTwinkle ${2+Math.random()*4}s ease-in-out infinite`,animationDelay:`${Math.random()*5}s`}},e))})}const hn=560,gr=520,dr=90,gu=44,vu=gr-60,bm=7,_u=14,Am=["💛","💛","💛","💛","🌹","💌"],Cm=["💤","😤","😭","🥱"],Rm=["Caught a 💤 — classic Rithvik 😭","You caught your own exhaustion 😂","That was a sad movie ending 😭 dodge next time!","Caught irritated Rithvik 😤 careful!","💤 hits different when it's yours 😌","You literally caught yourself napping 😂"],Pm=["You caught all 14 of my feelings 💛","14 hearts. Every single one yours."];function Wa(t,e){return t+Math.random()*(e-t)}function pb(){const t=ln(),{unlock:e}=cn(),n=U.useRef(null),i=U.useRef({basketX:hn/2-dr/2,items:[],score:0,misses:0,keys:{},mouseX:null,spawnTimer:0,spawnInterval:90,frameCount:0,running:!1,badMsg:"",badMsgTimer:0}),r=U.useRef(null),[o,s]=U.useState(0),[a,l]=U.useState(!1),[c,d]=U.useState(!1),[f,h]=U.useState(""),v=U.useCallback(()=>{const m=Math.random()<.62;i.current.items.push({x:Wa(20,hn-40),y:-30,emoji:m?Am[Math.floor(Math.random()*Am.length)]:Cm[Math.floor(Math.random()*Cm.length)],isHeart:m,speed:Wa(2.8,5.2),size:Wa(24,34),wobble:Math.random()*Math.PI*2,wobbleSpeed:Wa(.03,.07)})},[]),_=U.useCallback(()=>{const m=n.current;if(!m)return;const x=m.getContext("2d"),A=i.current;x.clearRect(0,0,hn,gr),x.fillStyle="rgba(8,5,0,0.92)",x.fillRect(0,0,hn,gr),A.stars||(A.stars=Array.from({length:35},()=>({x:Math.random()*hn,y:Math.random()*gr,r:Math.random()*1.2+.3,a:Math.random()*.5+.1,speed:Math.random()*.015+.005,phase:Math.random()*Math.PI*2}))),A.stars.forEach(L=>{L.phase+=L.speed,x.globalAlpha=L.a*(.5+.5*Math.sin(L.phase)),x.fillStyle="#ffffff",x.beginPath(),x.arc(L.x,L.y,L.r,0,Math.PI*2),x.fill()}),x.globalAlpha=1,x.font="500 15px DM Sans, sans-serif",x.fillStyle="rgba(245,197,24,0.7)",x.textAlign="left",x.fillText(`${A.score} / ${_u} hearts caught`,16,28);const E=A.score/_u*(hn-32);x.fillStyle="rgba(245,197,24,0.12)",x.beginPath(),x.roundRect(16,36,hn-32,5,99),x.fill(),E>0&&(x.fillStyle="#F5C518",x.shadowColor="rgba(245,197,24,0.5)",x.shadowBlur=8,x.beginPath(),x.roundRect(16,36,E,5,99),x.fill(),x.shadowBlur=0),A.items.forEach(L=>{L.y+=L.speed,L.wobble+=L.wobbleSpeed;const F=L.x+Math.sin(L.wobble)*6;x.font=`${L.size}px serif`,x.textAlign="center",x.fillText(L.emoji,F,L.y)});const b=A.basketX;x.fillStyle="rgba(245,197,24,0.12)",x.strokeStyle="rgba(245,197,24,0.7)",x.lineWidth=2,x.shadowColor="rgba(245,197,24,0.4)",x.shadowBlur=12,x.beginPath(),x.roundRect(b,vu,dr,gu,10),x.fill(),x.stroke(),x.shadowBlur=0,x.font="500 12px Caveat, cursive",x.fillStyle="#F5C518",x.textAlign="center",x.fillText("Rithvik 💛",b+dr/2,vu+gu/2+5),A.badMsgTimer>0&&(A.badMsgTimer--,x.font="600 14px Caveat, cursive",x.fillStyle=`rgba(232,82,122,${Math.min(A.badMsgTimer/40,1)})`,x.textAlign="center",x.fillText(A.badMsg,hn/2,gr/2))},[]),y=U.useCallback(()=>{const m=i.current;if(!m.running)return;if(m.mouseX!==null){const A=m.mouseX-dr/2;m.basketX+=(A-m.basketX)*.18}else(m.keys.ArrowLeft||m.keys.a||m.keys.A)&&(m.basketX-=bm),(m.keys.ArrowRight||m.keys.d||m.keys.D)&&(m.basketX+=bm);m.basketX=Math.max(0,Math.min(hn-dr,m.basketX)),m.spawnTimer++,m.spawnTimer>=m.spawnInterval&&(v(),m.spawnTimer=0,m.spawnInterval=Math.max(48,m.spawnInterval-.4));const x={x:m.basketX,y:vu,w:dr,h:gu};m.items=m.items.filter(A=>{if(A.y>gr+40)return!1;const E=A.size,b=A.x+Math.sin(A.wobble)*6,L=A.y;return b+E/2>x.x&&b-E/2<x.x+x.w&&L>x.y&&L<x.y+x.h+E/2?(A.isHeart?(m.score++,s(m.score),m.score>=_u&&(m.running=!1,l(!0))):(m.badMsg=Rm[Math.floor(Math.random()*Rm.length)],m.badMsgTimer=90,h(m.badMsg),setTimeout(()=>h(""),2200)),!1):!0}),_(),r.current=requestAnimationFrame(y)},[v,_]),p=U.useCallback(()=>{const m=i.current;m.basketX=hn/2-dr/2,m.items=[],m.score=0,m.spawnTimer=0,m.spawnInterval=90,m.running=!0,m.badMsg="",m.badMsgTimer=0,s(0),l(!1),h(""),d(!0),cancelAnimationFrame(r.current),r.current=requestAnimationFrame(y)},[y]);U.useEffect(()=>{const m=A=>{i.current.keys[A.key]=!0},x=A=>{i.current.keys[A.key]=!1};return window.addEventListener("keydown",m),window.addEventListener("keyup",x),()=>{window.removeEventListener("keydown",m),window.removeEventListener("keyup",x)}},[]);const u=U.useCallback(m=>{var E;const x=(E=n.current)==null?void 0:E.getBoundingClientRect();if(!x)return;const A=hn/x.width;i.current.mouseX=(m.clientX-x.left)*A},[]),g=U.useCallback(()=>{i.current.mouseX=null},[]);return U.useEffect(()=>()=>cancelAnimationFrame(r.current),[]),M.jsxs("div",{style:{width:"100%",minHeight:"100vh",background:"radial-gradient(ellipse at 50% 0%, #1C1000 0%, #080500 70%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2rem 1.5rem",position:"relative"},children:[M.jsxs("div",{style:{textAlign:"center",marginBottom:"1.2rem",animation:"fadeUp 0.6s ease both"},children:[M.jsx("span",{className:"badge",children:"Level 7 — catch the feelings"}),M.jsx("h2",{style:{fontFamily:"Playfair Display",fontSize:"clamp(1.6rem, 4vw, 2.8rem)",color:"#F5C518",marginTop:"0.6rem",marginBottom:"0.2rem"},children:"Catch the falling hearts"}),M.jsx("p",{style:{fontFamily:"Caveat",fontSize:"1rem",color:"rgba(253,250,242,0.4)"},children:"catch 14 💛 to continue · dodge 💤 😤 😭"})]}),M.jsxs("div",{style:{position:"relative",width:"100%",maxWidth:hn,borderRadius:16,overflow:"hidden",border:"1.5px solid rgba(245,197,24,0.2)",boxShadow:"0 0 40px rgba(245,197,24,0.08)",animation:"fadeUp 0.7s 0.15s ease both"},children:[M.jsx("canvas",{ref:n,width:hn,height:gr,style:{display:"block",width:"100%"},onMouseMove:u,onMouseLeave:g}),!c&&M.jsxs("div",{style:{position:"absolute",inset:0,background:"rgba(8,5,0,0.82)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"1.2rem"},children:[M.jsx("p",{style:{fontFamily:"Playfair Display",fontSize:"2rem",color:"#F5C518",fontStyle:"italic"},children:"Ready?"}),M.jsxs("p",{style:{fontFamily:"Caveat",fontSize:"1.1rem",color:"rgba(253,250,242,0.5)",textAlign:"center",maxWidth:300},children:["Move with ← → keys or your mouse.",M.jsx("br",{}),"Catch 14 hearts. Dodge the rest."]}),M.jsx("button",{onClick:p,style:{padding:"13px 40px",borderRadius:99,background:"#F5C518",color:"#1A1209",border:"none",fontFamily:"DM Sans",fontWeight:500,fontSize:"1rem",transition:"transform 0.15s, box-shadow 0.15s"},onMouseEnter:m=>{m.currentTarget.style.transform="scale(1.06)",m.currentTarget.style.boxShadow="0 0 28px rgba(245,197,24,0.45)"},onMouseLeave:m=>{m.currentTarget.style.transform="scale(1)",m.currentTarget.style.boxShadow="none"},children:"Let's go ✦"})]}),a&&M.jsxs("div",{style:{position:"absolute",inset:0,background:"rgba(8,5,0,0.88)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"1rem",animation:"fadeIn 0.5s ease"},children:[M.jsx("p",{style:{fontSize:"3.5rem",animation:"scaleIn 0.5s ease"},children:"💛"}),M.jsx("p",{style:{fontFamily:"Playfair Display",fontSize:"clamp(1.3rem, 3vw, 2rem)",color:"#F5C518",fontStyle:"italic",textAlign:"center",maxWidth:340},children:Pm[Math.floor(Math.random()*Pm.length)]}),M.jsxs("p",{style:{fontFamily:"Caveat",fontSize:"1rem",color:"rgba(253,250,242,0.4)"},children:[o," hearts · well done, bangaaram"]}),M.jsxs("div",{style:{display:"flex",gap:12,marginTop:8},children:[M.jsx("button",{onClick:p,style:{padding:"10px 24px",borderRadius:99,background:"transparent",border:"1.5px solid rgba(245,197,24,0.3)",color:"rgba(245,197,24,0.6)",fontFamily:"DM Sans",fontSize:"0.9rem",transition:"all 0.15s"},onMouseEnter:m=>{m.currentTarget.style.borderColor="rgba(245,197,24,0.7)",m.currentTarget.style.color="#F5C518"},onMouseLeave:m=>{m.currentTarget.style.borderColor="rgba(245,197,24,0.3)",m.currentTarget.style.color="rgba(245,197,24,0.6)"},children:"Play again"}),M.jsx("button",{onClick:()=>{e(7),t("/jigsaw")},style:{padding:"10px 28px",borderRadius:99,background:"#F5C518",color:"#1A1209",border:"none",fontFamily:"DM Sans",fontWeight:500,fontSize:"0.9rem",transition:"transform 0.15s, box-shadow 0.15s"},onMouseEnter:m=>{m.currentTarget.style.transform="scale(1.05)",m.currentTarget.style.boxShadow="0 0 20px rgba(245,197,24,0.4)"},onMouseLeave:m=>{m.currentTarget.style.transform="scale(1)",m.currentTarget.style.boxShadow="none"},children:"Continue ✦"})]})]})]}),M.jsx("div",{style:{minHeight:"2rem",marginTop:"0.8rem",textAlign:"center"},children:f&&M.jsx("p",{style:{fontFamily:"Caveat",fontSize:"1.1rem",color:"#E8527A",animation:"fadeUp 0.3s ease both"},children:f})}),M.jsx("p",{style:{fontFamily:"Caveat",fontSize:"0.85rem",color:"rgba(253,250,242,0.2)",marginTop:"0.5rem"},children:"← → arrow keys or mouse to move"})]})}const mb="public/photos/jig.jpg",Kt=4,vr=5,os=Kt*vr,Lm=28,gb="Every piece in the right place — just like you and I. You walked into my life and somehow fit perfectly into every single part of it. This is us, put together. 💛";function vb(t){const e=[...t];for(let n=e.length-1;n>0;n--){const i=Math.floor(Math.random()*(n+1));[e[n],e[i]]=[e[i],e[n]]}return e}function _b(){const t=ln(),{unlock:e}=cn(),n=U.useRef(null),i=U.useRef(null),r=U.useRef(null),o=U.useRef({pieces:[],dragging:null,placed:new Set,boardW:0,boardH:0,pieceW:0,pieceH:0,trayW:0,trayH:0,trayLayout:[]}),[s,a]=U.useState(!1),[l,c]=U.useState(!1),[d,f]=U.useState(0),[h,v]=U.useState(!1),[_,y]=U.useState(!1);U.useEffect(()=>{const w=new Image;w.crossOrigin="anonymous",w.onload=()=>{r.current=w,a(!0)},w.onerror=()=>c(!0),w.src=mb},[]),U.useEffect(()=>{if(!s)return;const w=n.current,N=i.current;if(!w||!N)return;const O=o.current,R=w.offsetWidth||400,G=Math.round(R*(vr/Kt));w.width=R,w.height=G;const I=Math.floor(R/Kt),B=Math.floor(G/vr);O.boardW=R,O.boardH=G,O.pieceW=I,O.pieceH=B;const P=R;N.width=P,N.height=Math.ceil(os/Kt)*(B+8)+16,O.trayW=P,O.trayH=N.height;const k=vb(Array.from({length:os},(H,Z)=>Z));O.pieces=k.map((H,Z)=>{const ee=H%Kt,ge=Math.floor(H/Kt),j=Z%Kt,te=Math.floor(Z/Kt);return{origIdx:H,origCol:ee,origRow:ge,x:j*(I+4)+4,y:te*(B+8)+8,inTray:!0,targetX:ee*I,targetY:ge*B,placed:!1}}),O.placed=new Set,m()},[s]);const p=U.useCallback((w,N,O,R,G)=>{const I=o.current,B=r.current;if(!B)return;const{pieceW:P,pieceH:k,boardW:H,boardH:Z}=I;w.save();const ee=1;w.beginPath(),w.roundRect(O+ee,R+ee,P-ee*2,k-ee*2,3),w.clip();const ge=N.origCol*(B.naturalWidth/Kt),j=N.origRow*(B.naturalHeight/vr),te=B.naturalWidth/Kt,ce=B.naturalHeight/vr;w.drawImage(B,ge,j,te,ce,O,R,P,k),N.placed||(w.fillStyle="rgba(0,0,0,0.12)",w.fillRect(O,R,P,k)),w.restore(),w.strokeStyle=N.placed?"rgba(245,197,24,0.7)":G?"rgba(245,197,24,0.5)":"rgba(245,197,24,0.2)",w.lineWidth=N.placed?2:1,w.shadowColor=N.placed?"rgba(245,197,24,0.4)":"transparent",w.shadowBlur=N.placed?6:0,w.beginPath(),w.roundRect(O+1,R+1,P-2,k-2,3),w.stroke(),w.shadowBlur=0},[]),u=U.useCallback(()=>{const w=n.current;if(!w)return;const N=w.getContext("2d"),O=o.current,{boardW:R,boardH:G,pieceW:I,pieceH:B}=O;N.clearRect(0,0,R,G),N.fillStyle="rgba(245,197,24,0.03)",N.fillRect(0,0,R,G);for(let P=0;P<vr;P++)for(let k=0;k<Kt;k++)N.strokeStyle="rgba(245,197,24,0.1)",N.lineWidth=.5,N.strokeRect(k*I,P*B,I,B);if(O.pieces.forEach(P=>{!P.inTray&&P.placed?p(N,P,P.targetX,P.targetY,!1):!P.inTray&&!P.placed&&p(N,P,P.x,P.y,!1)}),O.dragging&&!O.dragging.fromTray){const P=O.pieces[O.dragging.pieceIdx];N.globalAlpha=.85,p(N,P,P.x,P.y,!0),N.globalAlpha=1}},[p]),g=U.useCallback(()=>{const w=i.current;if(!w)return;const N=w.getContext("2d"),O=o.current,{trayW:R,trayH:G,pieceW:I,pieceH:B}=O;if(N.clearRect(0,0,R,G),N.fillStyle="rgba(245,197,24,0.02)",N.fillRect(0,0,R,G),O.pieces.forEach(P=>{P.inTray&&p(N,P,P.x,P.y,!1)}),O.dragging&&O.dragging.fromTray){const P=O.pieces[O.dragging.pieceIdx];N.globalAlpha=.85,p(N,P,P.x,P.y,!0),N.globalAlpha=1}},[p]),m=U.useCallback(()=>{u(),g()},[u,g]),x=w=>{const N=n.current.getBoundingClientRect(),O=o.current.boardW/N.width,R=o.current.boardH/N.height;return{x:(w.clientX-N.left)*O,y:(w.clientY-N.top)*R}},A=w=>{const N=i.current.getBoundingClientRect(),O=o.current.trayW/N.width,R=o.current.trayH/N.height;return{x:(w.clientX-N.left)*O,y:(w.clientY-N.top)*R}},E=(w,N,O,R,G,I=!1,B=!1)=>{for(let P=w.length-1;P>=0;P--){const k=w[P];if(!(I&&!k.inTray)&&!(B&&k.inTray)&&!k.placed&&N>=k.x&&N<=k.x+R&&O>=k.y&&O<=k.y+G)return P}return-1},b=U.useCallback(w=>{const N=o.current,O=x(w),R=E(N.pieces,O.x,O.y,N.pieceW,N.pieceH,!1,!0);R!==-1&&(N.dragging={pieceIdx:R,offsetX:O.x-N.pieces[R].x,offsetY:O.y-N.pieces[R].y,fromTray:!1})},[]),L=U.useCallback(w=>{const N=o.current,O=A(w),R=E(N.pieces,O.x,O.y,N.pieceW,N.pieceH,!0);R!==-1&&(N.dragging={pieceIdx:R,offsetX:O.x-N.pieces[R].x,offsetY:O.y-N.pieces[R].y,fromTray:!0})},[]),F=U.useCallback(w=>{const N=o.current;if(!N.dragging)return;const O=N.pieces[N.dragging.pieceIdx];if(N.dragging.fromTray){const R=A(w);O.x=R.x-N.dragging.offsetX,O.y=R.y-N.dragging.offsetY}else{const R=x(w);O.x=R.x-N.dragging.offsetX,O.y=R.y-N.dragging.offsetY}m()},[m]),S=U.useCallback(w=>{const N=o.current;if(!N.dragging)return;const O=N.dragging,R=N.pieces[O.pieceIdx];if(O.fromTray){const G=n.current.getBoundingClientRect();if(w.clientX>=G.left&&w.clientX<=G.right&&w.clientY>=G.top&&w.clientY<=G.bottom){const B=N.boardW/G.width,P=N.boardH/G.height;R.x=(w.clientX-G.left)*B-O.offsetX,R.y=(w.clientY-G.top)*P-O.offsetY,R.inTray=!1}else{const B=O.pieceIdx%Kt,P=Math.floor(O.pieceIdx/Kt);R.x=B*(N.pieceW+4)+4,R.y=P*(N.pieceH+8)+8}}if(!R.inTray){const G=Math.abs(R.x-R.targetX),I=Math.abs(R.y-R.targetY);if(G<Lm&&I<Lm){R.x=R.targetX,R.y=R.targetY,R.placed=!0,N.placed.add(O.pieceIdx);const B=N.placed.size;f(B),B===os&&(v(!0),setTimeout(()=>y(!0),600))}}N.dragging=null,m()},[m]);return U.useEffect(()=>(window.addEventListener("mousemove",F),window.addEventListener("mouseup",S),()=>{window.removeEventListener("mousemove",F),window.removeEventListener("mouseup",S)}),[F,S]),M.jsxs("div",{style:{width:"100%",minHeight:"100vh",background:"radial-gradient(ellipse at 50% 0%, #1C1000 0%, #080500 60%)",display:"flex",flexDirection:"column",alignItems:"center",padding:"3rem 1.5rem 4rem",position:"relative"},children:[M.jsx(xb,{}),M.jsxs("div",{style:{textAlign:"center",marginBottom:"1.2rem",position:"relative",zIndex:2,animation:"fadeUp 0.6s ease both"},children:[M.jsx("span",{className:"badge",children:"Level 8 — put us together"}),M.jsx("h2",{style:{fontFamily:"Playfair Display",fontSize:"clamp(1.8rem, 4vw, 3rem)",color:"#F5C518",marginTop:"0.6rem",marginBottom:"0.3rem"},children:"Jigsaw"}),M.jsx("p",{style:{fontFamily:"Caveat",fontSize:"1rem",color:"rgba(253,250,242,0.4)"},children:h?"You did it 💛":`${d} / ${os} pieces placed · drag from below`})]}),M.jsxs("div",{style:{width:"100%",maxWidth:480,position:"relative",zIndex:2,animation:"fadeUp 0.7s 0.15s ease both"},children:[M.jsx("div",{style:{borderRadius:12,overflow:"hidden",border:h?"2px solid rgba(245,197,24,0.7)":"1.5px solid rgba(245,197,24,0.2)",boxShadow:h?"0 0 40px rgba(245,197,24,0.2)":"0 0 20px rgba(245,197,24,0.05)",transition:"border-color 0.4s, box-shadow 0.4s",marginBottom:"1rem"},children:l?M.jsxs("div",{style:{width:"100%",aspectRatio:"4/5",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"rgba(245,197,24,0.04)",gap:12},children:[M.jsx("span",{style:{fontSize:"2.5rem"},children:"📷"}),M.jsxs("p",{style:{fontFamily:"Caveat",fontSize:"1rem",color:"rgba(245,197,24,0.4)",textAlign:"center",padding:"0 1rem"},children:["Add your photo at",M.jsx("br",{}),"public/photos/jigsaw.jpg"]})]}):M.jsx("canvas",{ref:n,style:{display:"block",width:"100%",aspectRatio:`${Kt}/${vr}`},onMouseDown:b})}),M.jsx("div",{style:{height:4,borderRadius:99,background:"rgba(245,197,24,0.1)",marginBottom:"1.5rem",overflow:"hidden"},children:M.jsx("div",{style:{height:"100%",borderRadius:99,background:"linear-gradient(90deg, #C49A00, #F5C518)",width:`${d/os*100}%`,transition:"width 0.4s ease",boxShadow:"0 0 8px rgba(245,197,24,0.4)"}})}),!h&&M.jsx("p",{style:{fontFamily:"Caveat",fontSize:"0.9rem",color:"rgba(245,197,24,0.35)",marginBottom:"0.5rem",textAlign:"center"},children:"↑ drag pieces up to the board"}),!h&&M.jsx("div",{style:{borderRadius:12,overflow:"hidden",border:"1px solid rgba(245,197,24,0.1)",background:"rgba(245,197,24,0.02)"},children:M.jsx("canvas",{ref:i,style:{display:"block",width:"100%"},onMouseDown:L})}),_&&M.jsx("div",{style:{marginTop:"1.5rem",padding:"20px 24px",background:"rgba(245,197,24,0.06)",border:"1px solid rgba(245,197,24,0.2)",borderRadius:14,animation:"fadeUp 0.7s ease both"},children:M.jsx("p",{style:{fontFamily:"Caveat",fontSize:"1.15rem",color:"rgba(253,250,242,0.85)",lineHeight:1.7,textAlign:"center"},children:gb})}),h&&M.jsx("div",{style:{textAlign:"center",marginTop:"1.5rem",animation:"fadeUp 0.6s 0.4s ease both"},children:M.jsx("button",{onClick:()=>{e(8),t("/soundtrack")},style:{padding:"14px 44px",borderRadius:99,background:"#F5C518",color:"#1A1209",border:"none",fontFamily:"DM Sans",fontWeight:500,fontSize:"1rem",transition:"transform 0.2s, box-shadow 0.2s"},onMouseEnter:w=>{w.currentTarget.style.transform="scale(1.06)",w.currentTarget.style.boxShadow="0 0 32px rgba(245,197,24,0.45)"},onMouseLeave:w=>{w.currentTarget.style.transform="scale(1)",w.currentTarget.style.boxShadow="none"},children:"Continue ✦"})})]})]})}function xb(){return M.jsx("div",{style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",zIndex:0},children:Array.from({length:30}).map((t,e)=>M.jsx("div",{style:{position:"absolute",left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,width:2,height:2,borderRadius:"50%",background:"white",opacity:Math.random()*.35+.05,animation:`starTwinkle ${2+Math.random()*4}s ease-in-out infinite`,animationDelay:`${Math.random()*5}s`}},e))})}const ja=[{id:1,title:"Someone To You",artist:"BANNERS",spotifyId:"2f0pn9DkEJwAzXApnFh5cr"},{id:2,title:"I Like Me Better",artist:"Lauv",spotifyId:"4MagTPnkPiDuIa4P8GtW1b"},{id:3,title:"Daylight",artist:"Taylor Swift",spotifyId:"1fzAuUVbzlhZ1lJAx9PtY6"},{id:4,title:"What If (I Told You I Like You)",artist:"Johnny Orlando & Mackenzie Ziegler",spotifyId:"4v7DgEMw6EvYyuQ4eWFD9l"},{id:5,title:"You Belong With Me (Taylor's Version)",artist:"Taylor Swift",spotifyId:"1qrpoAMXodY6895hGKoUpA"},{id:6,title:"Make You Mine",artist:"PUBLIC",spotifyId:"5iFwAOB2TFkPJk8sMlxP8g"},{id:7,title:"double take",artist:"dhruv",spotifyId:"0QzuaeCEEOV40Pn7IvKEny"},{id:8,title:"Nenu Nenuga",artist:"S. P. Charan",spotifyId:"1GIX3Z78P6PJg8srUYAqjF"},{id:9,title:"Lavender Haze",artist:"Taylor Swift",spotifyId:"1BxfuPKGuaTgP7aM0Bbdwr"},{id:10,title:"Haareya",artist:"Sachin-Jigar, Arijit Singh, Priya Saraiya",spotifyId:"1VvGJIAjhGdB7InVP9NA7V"},{id:11,title:"So High School",artist:"Taylor Swift",spotifyId:"7Mts0OfPorF4iwOomvfqn1"},{id:12,title:"Dhooram",artist:"Nikhita Gandhi",spotifyId:"6iFZDaeMMYmVUJu7UljN1N"},{id:13,title:"They Don't Know About Us",artist:"One Direction",spotifyId:"6M31fPFCYB8Job3MCjjrDV"},{id:14,title:"Call It What You Want",artist:"Taylor Swift",spotifyId:"1GwMQaZz6Au3QLDbjbMdme"},{id:15,title:"Afeemi",artist:"Sachin-Jigar, Sanah Moidutty",spotifyId:"4jpibRkVyl2p8l0pqRbdMa"},{id:16,title:"Mari Mari",artist:"Gowthami",spotifyId:"5hT2Bw0BTUEHf2QUdRWPJz"},{id:17,title:"Hoyna Hoyna",artist:"Anirudh Ravichander, Inno Genga",spotifyId:"7hADNKBDHS8MblpUzLebLf"},{id:18,title:"Teenage Dream",artist:"Stephen Dawes",spotifyId:"3GWaFFi6TlPcZLYmCCHZ9O"},{id:19,title:"Mere Liye Tum Kaafi Ho",artist:"Ayushmann Khurrana, Tanishk-Vayu",spotifyId:"3qrdLVOClRU4yPkcXZ7c5u"},{id:20,title:"All Of The Girls You Loved Before",artist:"Taylor Swift",spotifyId:"4P9Q0GojKVXpRTJCaL3kyy"},{id:21,title:"Baby",artist:"Justin Bieber, Ludacris",spotifyId:"6epn3r7S14KUqlReYr77hA"},{id:22,title:"You & I",artist:"One Direction",spotifyId:"2afCBiru10AFckfOa49wIa"}],yb="Every song in this playlist was playing in my head when I thought of you. Someone To You was the beginning of a feeling I couldn't name. You & I is where I want us to end up. Everything in between? That's us. That's this. That's everything. 💛";function Dm(t){const e=[...t];for(let n=e.length-1;n>0;n--){const i=Math.floor(Math.random()*(n+1));[e[n],e[i]]=[e[i],e[n]]}return e}function Sb(){const t=ln(),{unlock:e}=cn(),[n,i]=U.useState(()=>Dm([...ja])),[r,o]=U.useState(null),[s,a]=U.useState(null),[l,c]=U.useState(!1),[d,f]=U.useState(null),[h,v]=U.useState(!1),[_,y]=U.useState(null),[p,u]=U.useState(0),g=U.useCallback((F,S)=>{o(S),F.dataTransfer.effectAllowed="move"},[]),m=U.useCallback((F,S)=>{F.preventDefault(),a(S)},[]),x=U.useCallback((F,S)=>{F.preventDefault();const w=r;if(w===null||w===S){o(null),a(null);return}const N=[...n],[O]=N.splice(w,1);N.splice(S,0,O),i(N),o(null),a(null),c(!1),f(null)},[r,n]),A=U.useCallback(()=>{o(null),a(null)},[]),E=U.useCallback(()=>{const F=[],S=[];n.forEach((w,N)=>{w.id===ja[N].id?F.push(N):S.push(N)}),c(!0),f({correct:F,wrong:S}),u(w=>w+1),S.length===0&&v(!0)},[n]),b=U.useCallback(()=>{i(Dm([...ja])),c(!1),f(null)},[]),L=n.filter((F,S)=>F.id===ja[S].id).length;return M.jsxs("div",{style:{width:"100%",minHeight:"100vh",background:"radial-gradient(ellipse at 50% 0%, #1C1000 0%, #080500 60%)",display:"flex",flexDirection:"column",alignItems:"center",padding:"3rem 1.5rem 5rem",position:"relative"},children:[M.jsx(Mb,{}),M.jsxs("div",{style:{textAlign:"center",marginBottom:"1.2rem",position:"relative",zIndex:2,animation:"fadeUp 0.6s ease both"},children:[M.jsx("span",{className:"badge",children:"Level 9 — AR Soundtrack"}),M.jsx("h2",{style:{fontFamily:"Playfair Display",fontSize:"clamp(1.8rem, 4vw, 3rem)",color:"#F5C518",marginTop:"0.6rem",marginBottom:"0.3rem"},children:"Put the playlist in order"}),M.jsx("p",{style:{fontFamily:"Caveat",fontSize:"1rem",color:"rgba(253,250,242,0.4)"},children:"drag to rearrange · click a song to preview it"})]}),!h&&M.jsx("div",{style:{position:"relative",zIndex:2,marginBottom:"1rem",padding:"10px 20px",borderRadius:10,background:L===22?"rgba(245,197,24,0.12)":"rgba(255,255,255,0.04)",border:L===22?"1px solid rgba(245,197,24,0.4)":"1px solid rgba(255,255,255,0.08)",textAlign:"center",transition:"all 0.3s"},children:M.jsx("p",{style:{fontFamily:"Caveat",fontSize:"1.1rem",color:L===22?"#F5C518":"rgba(253,250,242,0.55)"},children:L===22?"All 22 in the right place! Hit Check ✦":`${L} / 22 in the right position`})}),l&&!h&&M.jsx("div",{style:{position:"relative",zIndex:2,marginBottom:"0.5rem",padding:"8px 20px",borderRadius:10,background:"rgba(232,82,122,0.08)",border:"1px solid rgba(232,82,122,0.2)",animation:"fadeUp 0.4s ease both",textAlign:"center"},children:M.jsx("p",{style:{fontFamily:"Caveat",fontSize:"1rem",color:"#E8527A"},children:"Not quite — keep rearranging 💛"})}),M.jsx("div",{style:{width:"100%",maxWidth:640,position:"relative",zIndex:2,animation:"fadeUp 0.7s 0.1s ease both"},children:n.map((F,S)=>{const w=l&&(d==null?void 0:d.correct.includes(S)),N=l&&(d==null?void 0:d.wrong.includes(S)),O=r===S,R=s===S,G=_===F.id;return M.jsx("div",{draggable:!0,onDragStart:I=>g(I,S),onDragOver:I=>m(I,S),onDrop:I=>x(I,S),onDragEnd:A,style:{marginBottom:6,opacity:O?.4:1,transform:R?"translateY(-3px)":"translateY(0)",transition:"transform 0.15s, opacity 0.15s"},children:M.jsxs("div",{style:{background:w?"rgba(245,197,24,0.1)":N?"rgba(232,82,122,0.08)":"rgba(255,255,255,0.03)",border:w?"1px solid rgba(245,197,24,0.4)":N?"1px solid rgba(232,82,122,0.25)":"1px solid rgba(255,255,255,0.08)",borderRadius:10,overflow:"hidden"},children:[M.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"10px 14px",gap:12},children:[M.jsx("div",{style:{display:"flex",flexDirection:"column",gap:3,cursor:"grab",opacity:.35},children:[0,1,2].map(I=>M.jsx("div",{style:{width:16,height:1.5,background:"#FDFAF2",borderRadius:99}},I))}),M.jsx("span",{style:{fontFamily:"Playfair Display",fontStyle:"italic",fontSize:"1rem",color:w?"#F5C518":N?"#E8527A":"rgba(253,250,242,0.25)",minWidth:24,textAlign:"center"},children:S+1}),M.jsxs("div",{style:{flex:1,minWidth:0},children:[M.jsx("p",{style:{fontFamily:"DM Sans",fontWeight:500,fontSize:"0.9rem",color:"#FDFAF2",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:F.title}),M.jsx("p",{style:{fontFamily:"DM Sans",fontSize:"0.75rem",color:"rgba(253,250,242,0.4)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:F.artist})]}),w&&M.jsx("span",{children:"✓"}),N&&M.jsx("span",{style:{color:"#E8527A"},children:"✗"}),M.jsx("button",{onClick:()=>y(G?null:F.id),style:{background:"transparent",border:"none",color:"rgba(253,250,242,0.4)",fontSize:"0.75rem",cursor:"pointer"},children:G?"▲":"▼"})]}),G&&M.jsx("div",{style:{padding:"0 12px 12px",animation:"fadeIn 0.3s ease both"},children:M.jsx("iframe",{src:`https://open.spotify.com/embed/track/${F.spotifyId}?utm_source=generator&theme=0`,width:"100%",height:"80",frameBorder:"0",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy",style:{borderRadius:8},title:F.title})})]})},F.id)})}),!h&&M.jsxs("div",{style:{display:"flex",gap:12,marginTop:"1.5rem",position:"relative",zIndex:2},children:[M.jsx("button",{onClick:b,className:"btn-outline",style:{padding:"12px 24px"},children:"Shuffle again"}),M.jsx("button",{onClick:E,className:"btn-primary",style:{padding:"12px 36px"},children:"Check order ✦"})]}),h&&M.jsxs("div",{style:{width:"100%",maxWidth:580,marginTop:"2rem",position:"relative",zIndex:2,animation:"fadeUp 0.7s ease both",textAlign:"center"},children:[M.jsxs("div",{className:"card",style:{marginBottom:"1.5rem"},children:[M.jsx("p",{style:{fontSize:"2.5rem",marginBottom:"1rem"},children:"🎵"}),M.jsx("p",{className:"font-hand",style:{fontSize:"1.2rem",lineHeight:1.8},children:yb})]}),M.jsx("button",{onClick:()=>{e(9),t("/wordsearch")},className:"btn-primary",style:{padding:"14px 44px"},children:"Continue ✦"})]})]})}function Mb(){return M.jsx("div",{className:"stars-bg",children:Array.from({length:30}).map((t,e)=>M.jsx("div",{style:{position:"absolute",left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,width:2,height:2,borderRadius:"50%",background:e%6===0?"#F5C518":"white",opacity:Math.random()*.35+.05,animation:`starTwinkle ${2+Math.random()*4}s ease-in-out infinite`,animationDelay:`${Math.random()*5}s`}},e))})}const Wv=["AKANKSHA","RITHVIK","VALENTINES","ROSES","STAGE","CAMERA","LETTERS","AUTORIDES","BANGARAM","LOVE","KUNDETI KOMMU","NERD","REDDY","BABY","SREEOTSAV"],Eb=Wv.map(t=>t.replace(/\s/g,"")),jv="I FELL FIRST",ci=16,yr=15,wb=[0,1],Tb=[1,0];function bb(t){const e=Array.from({length:yr},()=>Array(ci).fill("")),n=[],i=(c,d,f,h,v)=>{for(let _=0;_<c.length;_++){const y=d+_*h,p=f+_*v;if(y<0||y>=yr||p<0||p>=ci||e[y][p]!==""&&e[y][p]!==c[_])return!1}return!0},r=(c,d=!1)=>{for(let f=0;f<300;f++){const h=d||Math.random()<.25,[v,_]=h?Tb:wb,y=Math.floor(Math.random()*yr),p=Math.floor(Math.random()*ci);if(!i(c,y,p,v,_))continue;const u=[];for(let g=0;g<c.length;g++){const m=y+g*v,x=p+g*_;e[m][x]=c[g],u.push({r:m,c:x})}return n.push({word:c,cells:u}),!0}return!1};[...t].sort((c,d)=>d.length-c.length).forEach((c,d)=>r(c,d%5===4));const s=jv.replace(/\s/g,"").split(""),a=[];for(let c=0;c<yr;c++)for(let d=0;d<ci;d++)e[c][d]===""&&a.push({r:c,c:d});a.sort(()=>Math.random()-.5),s.forEach((c,d)=>{d<a.length&&(e[a[d].r][a[d].c]=c)});const l="BCDFGHJKLMNPQRSTVWXZ";for(let c=0;c<yr;c++)for(let d=0;d<ci;d++)e[c][d]===""&&(e[c][d]=l[Math.floor(Math.random()*l.length)]);return{grid:e,placed:n}}const Xa=(t,e)=>`${t},${e}`;function Ab(){const t=ln(),{unlock:e}=cn(),[{grid:n,placed:i}]=U.useState(()=>bb(Eb)),[r,o]=U.useState(new Set),[s,a]=U.useState(new Set),[l,c]=U.useState(!1),[d,f]=U.useState(null),[h,v]=U.useState(null),[_,y]=U.useState(!1),[p,u]=U.useState(!1),[g,m]=U.useState(new Set),[x,A]=U.useState(0),E=U.useRef(null),b=U.useCallback((I,B)=>{if(!I||!B)return[];const P=Math.sign(B.r-I.r),k=Math.sign(B.c-I.c),H=Math.abs(B.r-I.r),Z=Math.abs(B.c-I.c);if(H!==0&&Z!==0)return[];const ee=Math.max(H,Z),ge=[];for(let j=0;j<=ee;j++)ge.push({r:I.r+j*P,c:I.c+j*k});return ge},[]),L=U.useCallback(I=>{if(I.length<2)return;const B=I.map(({r:H,c:Z})=>n[H][Z]).join(""),P=B.split("").reverse().join(""),k=i.find(H=>(H.word===B||H.word===P)&&!r.has(H.word));if(k){const H=new Set(r);H.add(k.word),o(H);const Z=new Set(s);k.cells.forEach(({r:ee,c:ge})=>Z.add(Xa(ee,ge))),a(Z),H.size===i.length&&(y(!0),setTimeout(()=>u(!0),800))}},[n,i,r,s]),F=U.useCallback((I,B)=>{const P=B.getBoundingClientRect(),k=P.width/ci,H=Math.floor((I.clientX-P.left)/k),Z=Math.floor((I.clientY-P.top)/k);return Z<0||Z>=yr||H<0||H>=ci?null:{r:Z,c:H}},[]),S=U.useCallback(I=>{const B=F(I,E.current);B&&(c(!0),f(B),v(B))},[F]),w=U.useCallback(I=>{if(!l)return;const B=F(I,E.current);B&&v(B)},[l,F]),N=U.useCallback(()=>{if(!l)return;const I=b(d,h);L(I),c(!1),f(null),v(null)},[l,d,h,b,L]),O=U.useCallback(()=>{const I=i.filter(H=>!r.has(H.word));if(!I.length)return;const P=I[x%I.length].cells[0],k=Xa(P.r,P.c);m(H=>new Set([...H,k])),A(H=>H+1)},[i,r,x]),R=new Set(b(d,h).map(({r:I,c:B})=>Xa(I,B))),G=Math.min(38,Math.floor(560/ci));return M.jsxs("div",{style:{width:"100%",minHeight:"100vh",background:"radial-gradient(ellipse at 50% 0%, #1C1000 0%, #080500 60%)",display:"flex",flexDirection:"column",alignItems:"center",padding:"3rem 1.5rem 5rem",position:"relative"},onMouseMove:w,onMouseUp:N,children:[M.jsx(Cb,{}),M.jsxs("div",{style:{textAlign:"center",marginBottom:"1.5rem",position:"relative",zIndex:2,animation:"fadeUp 0.6s ease both"},children:[M.jsx("span",{className:"badge",children:"Level 10 — word search"}),M.jsx("h2",{style:{fontFamily:"Playfair Display",fontSize:"clamp(1.8rem, 4vw, 3rem)",color:"#F5C518",marginTop:"0.6rem",marginBottom:"0.3rem"},children:"Find us in the grid"}),M.jsx("p",{style:{fontFamily:"Caveat",fontSize:"1rem",color:"rgba(253,250,242,0.4)"},children:_?"All found! 💛":`${r.size} / ${i.length} found · click and drag to highlight`})]}),M.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start",width:"100%",maxWidth:860,position:"relative",zIndex:2,flexWrap:"wrap",justifyContent:"center",animation:"fadeUp 0.7s 0.1s ease both"},children:[M.jsx("div",{ref:E,onMouseDown:S,style:{display:"grid",gridTemplateColumns:`repeat(${ci}, ${G}px)`,gridTemplateRows:`repeat(${yr}, ${G}px)`,border:"1px solid rgba(245,197,24,0.15)",borderRadius:10,overflow:"hidden",userSelect:"none",cursor:"crosshair",flexShrink:0},children:n.map((I,B)=>I.map((P,k)=>{const H=Xa(B,k),Z=R.has(H),ee=s.has(H),ge=g.has(H)&&!ee;return M.jsx("div",{style:{width:G,height:G,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"DM Sans",fontWeight:500,fontSize:Math.max(11,G*.44),color:ee||Z?"#1A1209":ge?"#F5C518":"rgba(253,250,242,0.65)",background:ee?"rgba(245,197,24,0.85)":Z?"rgba(245,197,24,0.5)":ge?"rgba(245,197,24,0.15)":(B+k)%2===0?"rgba(245,197,24,0.02)":"transparent",transition:"background 0.1s, color 0.1s",border:"0.5px solid rgba(245,197,24,0.06)"},children:P},H)}))}),M.jsxs("div",{style:{minWidth:180},children:[M.jsx("p",{style:{fontFamily:"Caveat",fontSize:"0.9rem",color:"rgba(245,197,24,0.4)",marginBottom:"0.75rem"},children:"Find these words:"}),M.jsx("div",{style:{display:"flex",flexDirection:"column",gap:5,marginBottom:"1.5rem"},children:Wv.map(I=>{const B=I.replace(/\s/g,""),P=r.has(B)||i.find(k=>k.word===B&&r.has(k.word));return M.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[M.jsx("span",{style:{fontSize:"0.65rem",color:P?"#F5C518":"rgba(245,197,24,0.3)"},children:P?"✓":"○"}),M.jsx("span",{style:{fontFamily:"DM Sans",fontSize:"0.82rem",color:P?"#F5C518":"rgba(253,250,242,0.5)",textDecoration:P?"line-through":"none",textDecorationColor:"rgba(245,197,24,0.4)",transition:"color 0.3s",letterSpacing:"0.04em"},children:I})]},I)})}),!_&&M.jsxs("button",{onClick:O,style:{padding:"8px 18px",borderRadius:99,background:"rgba(245,197,24,0.08)",border:"1px solid rgba(245,197,24,0.3)",color:"rgba(245,197,24,0.7)",fontFamily:"DM Sans",fontSize:"0.8rem",transition:"all 0.2s",width:"100%"},onMouseEnter:I=>{I.currentTarget.style.background="rgba(245,197,24,0.16)",I.currentTarget.style.color="#F5C518"},onMouseLeave:I=>{I.currentTarget.style.background="rgba(245,197,24,0.08)",I.currentTarget.style.color="rgba(245,197,24,0.7)"},children:["Hint 💛 (",x," used)"]}),M.jsx("button",{onClick:()=>{e(10),t("/meter")},style:{marginTop:8,padding:"6px 18px",borderRadius:99,background:"transparent",border:"1px solid rgba(255,255,255,0.08)",color:"rgba(255,255,255,0.2)",fontFamily:"DM Sans",fontSize:"0.72rem",width:"100%",transition:"color 0.15s"},onMouseEnter:I=>{I.currentTarget.style.color="rgba(255,255,255,0.5)"},onMouseLeave:I=>{I.currentTarget.style.color="rgba(255,255,255,0.2)"},children:"skip (dev only)"})]})]}),p&&M.jsxs("div",{style:{width:"100%",maxWidth:560,marginTop:"2rem",position:"relative",zIndex:2,animation:"scaleIn 0.6s cubic-bezier(0.34,1.56,0.64,1) both"},children:[M.jsxs("div",{style:{padding:"24px 28px",borderRadius:16,background:"rgba(245,197,24,0.07)",border:"1px solid rgba(245,197,24,0.3)",textAlign:"center"},children:[M.jsx("p",{style:{fontFamily:"Caveat",fontSize:"0.9rem",color:"rgba(245,197,24,0.45)",marginBottom:"0.75rem",letterSpacing:"0.1em",textTransform:"uppercase"},children:"hidden message ✦"}),M.jsx("p",{style:{fontFamily:"Playfair Display",fontSize:"clamp(1.8rem, 5vw, 3rem)",fontStyle:"italic",color:"#F5C518",textShadow:"0 0 30px rgba(245,197,24,0.4)",marginBottom:"0.5rem"},children:jv}),M.jsx("p",{style:{fontFamily:"Caveat",fontSize:"1rem",color:"rgba(253,250,242,0.45)"},children:"— and now you have proof too. 💛"})]}),M.jsx("div",{style:{textAlign:"center",marginTop:"1.5rem"},children:M.jsx("button",{onClick:()=>{e(10),t("/meter")},style:{padding:"14px 44px",borderRadius:99,background:"#F5C518",color:"#1A1209",border:"none",fontFamily:"DM Sans",fontWeight:500,fontSize:"1rem",transition:"transform 0.2s, box-shadow 0.2s"},onMouseEnter:I=>{I.currentTarget.style.transform="scale(1.06)",I.currentTarget.style.boxShadow="0 0 32px rgba(245,197,24,0.45)"},onMouseLeave:I=>{I.currentTarget.style.transform="scale(1)",I.currentTarget.style.boxShadow="none"},children:"Continue ✦"})})]})]})}function Cb(){return M.jsx("div",{style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",zIndex:0},children:Array.from({length:28}).map((t,e)=>M.jsx("div",{style:{position:"absolute",left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,width:2,height:2,borderRadius:"50%",background:"white",opacity:Math.random()*.3+.05,animation:`starTwinkle ${2+Math.random()*4}s ease-in-out infinite`,animationDelay:`${Math.random()*5}s`}},e))})}const Ya=[{pct:25,label:"More than the number of times you've forgotten something",sub:"(and that number is very, very high)",color:"#2DBDB1"},{pct:50,label:"More than all 22 songs on the AR Soundtrack combined",sub:"yes, even Lavender Haze",color:"#E8527A"},{pct:75,label:`More than every "I love you" we've said to each other`,sub:"and we say it a lot",color:"#F5C518"},{pct:100,label:"More than I can ever put into words",sub:"and I tried — 8 pages, remember?",color:"#F5C518"},{pct:1/0,label:"Beyond expression. Beyond measurement.",sub:"Just… you. Always you.",color:"#F5C518"}],Rb=3e3;function Im(t,e,n,i){const r=t.getContext("2d");if(!r)return;const o=Array.from({length:28},()=>({x:e,y:n,vx:(Math.random()-.5)*9,vy:(Math.random()-.5)*9-2,r:Math.random()*3+1,color:i,life:1,decay:Math.random()*.03+.02})),s=()=>{o.forEach(a=>{a.x+=a.vx,a.y+=a.vy,a.vy+=.2,a.life-=a.decay,!(a.life<=0)&&(r.globalAlpha=a.life,r.fillStyle=a.color,r.beginPath(),r.arc(a.x,a.y,a.r,0,Math.PI*2),r.fill())}),r.globalAlpha=1,o.some(a=>a.life>0)&&requestAnimationFrame(s)};s()}function Pb(){const t=ln(),{unlock:e}=cn(),n=U.useRef(null),i=U.useRef(null),r=U.useRef(!1),[o,s]=U.useState(!1),[a,l]=U.useState(null),[c,d]=U.useState(!1),[f,h]=U.useState(0),v=p=>{const u=n.current;if(!u)return;const g=u.getContext("2d"),m=u.width,x=u.height,A=m/2,E=x*.58,b=Math.min(m,x)*.38;g.clearRect(0,0,m,x);const L=Math.PI,F=2*Math.PI,S=Math.PI;g.beginPath(),g.arc(A,E,b,L,F),g.strokeStyle="rgba(245,197,24,0.1)",g.lineWidth=18,g.lineCap="round",g.stroke();const w=Math.min(p,100),N=L+w/100*S;if(w>0){const B=g.createLinearGradient(A-b,E,A+b,E);B.addColorStop(0,"#2DBDB1"),B.addColorStop(.5,"#E8527A"),B.addColorStop(1,"#F5C518"),g.beginPath(),g.arc(A,E,b,L,N),g.strokeStyle=B,g.lineWidth=18,g.lineCap="round",g.shadowColor="#F5C518",g.shadowBlur=p>80?18:8,g.stroke(),g.shadowBlur=0}Ya.filter(B=>B.pct!==1/0).forEach(B=>{const P=L+B.pct/100*S,k=A+(b-26)*Math.cos(P),H=E+(b-26)*Math.sin(P),Z=A+(b+4)*Math.cos(P),ee=E+(b+4)*Math.sin(P);g.beginPath(),g.moveTo(k,H),g.lineTo(Z,ee),g.strokeStyle=p>=B.pct?B.color:"rgba(245,197,24,0.2)",g.lineWidth=2,g.stroke()});const O=L+w/100*S,R=b-22,G=A+R*Math.cos(O),I=E+R*Math.sin(O);return g.beginPath(),g.moveTo(A,E),g.lineTo(G,I),g.strokeStyle=p>=100?"#F5C518":"#FDFAF2",g.lineWidth=3,g.lineCap="round",g.shadowColor=p>=100?"rgba(245,197,24,0.8)":"rgba(255,255,255,0.4)",g.shadowBlur=p>=100?20:6,g.stroke(),g.shadowBlur=0,g.beginPath(),g.arc(A,E,10,0,Math.PI*2),g.fillStyle="#F5C518",g.shadowColor="rgba(245,197,24,0.6)",g.shadowBlur=12,g.fill(),g.shadowBlur=0,g.font="500 12px DM Sans, sans-serif",g.fillStyle="rgba(245,197,24,0.35)",g.textAlign="left",g.fillText("0",A-b-8,E+20),g.textAlign="right",g.fillText(p>=100?"∞":"100",A+b+8,E+20),{cx:A,cy:E,nx:G,ny:I}},_=()=>{let p=0;const u=new Set,g=()=>{if(r.current){i.current=requestAnimationFrame(g);return}p=Math.min(p+.25,102);const x=v(p);if(h(Math.min(Math.round(p),100)),Ya.filter(A=>A.pct!==1/0).forEach(A=>{p>=A.pct&&!u.has(A.pct)&&(u.add(A.pct),l(A),x&&Im(n.current,x.nx,x.ny,A.color),r.current=!0,setTimeout(()=>{r.current=!1},Rb))}),p>=102){v(100),h("∞"),l(Ya[Ya.length-1]),x&&Im(n.current,x.cx,x.cy-20,"#F5C518"),setTimeout(()=>d(!0),1200);return}i.current=requestAnimationFrame(g)};i.current=requestAnimationFrame(g)},y=()=>{s(!0),setTimeout(_,400)};return U.useEffect(()=>(v(0),()=>cancelAnimationFrame(i.current)),[]),U.useEffect(()=>{var g;const p=n.current;if(!p)return;const u=Math.min(((g=p.parentElement)==null?void 0:g.offsetWidth)||460,460);p.width=u,p.height=u*.7,v(0)},[]),M.jsxs("div",{style:{width:"100%",minHeight:"100vh",background:"radial-gradient(ellipse at 50% 40%, #1A0A00 0%, #080500 70%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"3rem 1.5rem 4rem",position:"relative"},children:[M.jsx(Lb,{}),M.jsxs("div",{style:{textAlign:"center",marginBottom:"1.5rem",position:"relative",zIndex:2,animation:"fadeUp 0.6s ease both"},children:[M.jsx("span",{className:"badge",children:"Level 11 — the measure of it"}),M.jsx("h2",{style:{fontFamily:"Playfair Display",fontSize:"clamp(1.8rem, 4vw, 3rem)",color:"#F5C518",marginTop:"0.6rem",marginBottom:"0.3rem",fontStyle:"italic"},children:"How much do I love you?"}),M.jsx("p",{style:{fontFamily:"Caveat",fontSize:"1rem",color:"rgba(253,250,242,0.35)"},children:"let's find out"})]}),M.jsxs("div",{style:{width:"100%",maxWidth:460,position:"relative",zIndex:2,animation:"fadeUp 0.7s 0.1s ease both"},children:[M.jsx("canvas",{ref:n,style:{width:"100%",display:"block"}}),M.jsx("div",{style:{textAlign:"center",marginTop:"-0.5rem"},children:M.jsxs("span",{style:{fontFamily:"Playfair Display",fontSize:"clamp(3.5rem, 12vw, 6rem)",fontWeight:700,color:c?"#F5C518":"#FDFAF2",textShadow:c?"0 0 60px rgba(245,197,24,0.7), 0 0 120px rgba(245,197,24,0.3)":"none",transition:"color 0.4s, text-shadow 0.4s",lineHeight:1},children:[o?f:"0",f!=="∞"&&o&&M.jsx("span",{style:{fontSize:"0.5em",opacity:.6},children:"%"})]})})]}),M.jsx("div",{style:{width:"100%",maxWidth:480,minHeight:100,marginTop:"1.5rem",position:"relative",zIndex:2,textAlign:"center"},children:a&&M.jsxs("div",{style:{padding:"16px 24px",borderRadius:14,background:"rgba(245,197,24,0.06)",border:`1px solid ${a.color}44`,animation:"scaleIn 0.5s cubic-bezier(0.34,1.56,0.64,1) both"},children:[M.jsx("p",{style:{fontFamily:"Playfair Display",fontStyle:"italic",fontSize:"clamp(1rem, 2.5vw, 1.3rem)",color:a.color,marginBottom:"0.3rem",lineHeight:1.4},children:a.label}),M.jsx("p",{style:{fontFamily:"Caveat",fontSize:"0.95rem",color:"rgba(253,250,242,0.4)"},children:a.sub})]},a.pct)}),!o&&M.jsx("div",{style:{marginTop:"1.5rem",position:"relative",zIndex:2,animation:"fadeUp 0.6s 0.3s ease both"},children:M.jsx("button",{onClick:y,style:{padding:"14px 44px",borderRadius:99,background:"#F5C518",color:"#1A1209",border:"none",fontFamily:"DM Sans",fontWeight:500,fontSize:"1rem",transition:"transform 0.2s, box-shadow 0.2s",animation:"pulseGlow 2s ease-in-out infinite"},onMouseEnter:p=>{p.currentTarget.style.transform="scale(1.06)",p.currentTarget.style.boxShadow="0 0 32px rgba(245,197,24,0.5)"},onMouseLeave:p=>{p.currentTarget.style.transform="scale(1)",p.currentTarget.style.boxShadow="none"},children:"Find out ✦"})}),c&&M.jsx("div",{style:{marginTop:"2rem",position:"relative",zIndex:2,animation:"fadeUp 0.6s ease both"},children:M.jsx("button",{onClick:()=>{e(11),t("/ask")},style:{padding:"14px 44px",borderRadius:99,background:"#F5C518",color:"#1A1209",border:"none",fontFamily:"DM Sans",fontWeight:500,fontSize:"1rem",transition:"transform 0.2s, box-shadow 0.2s"},onMouseEnter:p=>{p.currentTarget.style.transform="scale(1.06)",p.currentTarget.style.boxShadow="0 0 32px rgba(245,197,24,0.45)"},onMouseLeave:p=>{p.currentTarget.style.transform="scale(1)",p.currentTarget.style.boxShadow="none"},children:"Continue ✦"})}),!o&&M.jsx("button",{onClick:()=>{e(11),t("/ask")},style:{marginTop:"1rem",background:"transparent",border:"1px solid rgba(255,255,255,0.08)",color:"rgba(255,255,255,0.2)",fontFamily:"DM Sans",fontSize:"0.72rem",padding:"5px 14px",borderRadius:99,position:"relative",zIndex:2},onMouseEnter:p=>{p.currentTarget.style.color="rgba(255,255,255,0.5)"},onMouseLeave:p=>{p.currentTarget.style.color="rgba(255,255,255,0.2)"},children:"skip (dev only)"})]})}function Lb(){return M.jsx("div",{style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",zIndex:0},children:Array.from({length:32}).map((t,e)=>M.jsx("div",{style:{position:"absolute",left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,width:Math.random()>.8?3:2,height:Math.random()>.8?3:2,borderRadius:"50%",background:e%5===0?"#F5C518":"white",opacity:Math.random()*.4+.05,animation:`starTwinkle ${2+Math.random()*4}s ease-in-out infinite`,animationDelay:`${Math.random()*5}s`}},e))})}const Um=["Not an option, darling 😘","Ask me again tomorrow","I can't have a sad ending 😭","I need to sleep","I forgot what the question was","My forgetfulness is acting up","Not now, I'm exhausted","Just make the better choice","Think better about it","I'm too busy being cute right now","Don't you dare touch me","Just make her yours instead","Can we discuss this after a nap","I said what I said on 14th Feb","My innocence won't allow it 😇","Hehe, I'm gonna disappear","No is not allowed","Say no to no!"];function Db(t){const e=t.getContext("2d"),n=t.width,i=t.height,r=["#F5C518","#E8527A","#2DBDB1","#FFD6E7","#FFF6C0","#ffffff","#FF8C42"],o=Array.from({length:160},()=>({x:Math.random()*n,y:-20-Math.random()*80,w:Math.random()*10+5,h:Math.random()*6+3,color:r[Math.floor(Math.random()*r.length)],vx:(Math.random()-.5)*5,vy:Math.random()*4+2,rot:Math.random()*360,rotV:(Math.random()-.5)*10,life:1})),s=()=>{e.clearRect(0,0,n,i);let a=!1;o.forEach(l=>{l.y>i+20||(a=!0,l.x+=l.vx,l.y+=l.vy,l.rot+=l.rotV,e.save(),e.translate(l.x,l.y),e.rotate(l.rot*Math.PI/180),e.fillStyle=l.color,e.fillRect(-l.w/2,-l.h/2,l.w,l.h),e.restore())}),a&&requestAnimationFrame(s)};s()}function Ib(){const t=ln(),{unlock:e}=cn(),n=U.useRef(null),i=U.useRef(null),r=U.useRef(null),[o,s]=U.useState(0),[a,l]=U.useState({x:null,y:null}),[c,d]=U.useState("No"),[f,h]=U.useState(!1),[v,_]=U.useState(!1);U.useEffect(()=>{setTimeout(()=>_(!0),600)},[]);const y=U.useCallback(()=>{var R;const g=i.current;if(!g)return{x:0,y:0};const m=g.getBoundingClientRect(),x=((R=r.current)==null?void 0:R.offsetWidth)||120,A=45,E=10,b=220,L=100,F=m.width/2,S=m.height/2;let w,N,O=0;do if(w=E+Math.random()*(m.width-x-E*2),N=E+Math.random()*(m.height-A-E*2),O++,!(w+x>F-b/2&&w<F+b/2&&N+A>S-L/2&&N<S+L/2)||O>20)break;while(!0);return{x:w,y:N}},[]),p=U.useCallback(()=>{const g=o+1;s(g),d(Um[g%Um.length]),setTimeout(()=>l(y()),0)},[o,y]),u=U.useCallback(()=>{h(!0),setTimeout(()=>{const g=n.current;g&&(g.width=window.innerWidth,g.height=window.innerHeight,Db(g))},50),setTimeout(()=>{e(12)},800)},[e]);return M.jsxs("div",{style:{width:"100%",minHeight:"100vh",background:"radial-gradient(ellipse at 50% 40%, #1A0010 0%, #080500 70%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2rem",position:"relative",overflow:"hidden"},children:[M.jsx(Ub,{}),M.jsx("canvas",{ref:n,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:10}}),f?M.jsxs("div",{style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",gap:"1rem",animation:"scaleIn 0.6s cubic-bezier(0.34,1.56,0.64,1) both"},children:[M.jsx("div",{style:{fontSize:"4rem",animation:"float 2s ease-in-out infinite"},children:"💛"}),M.jsx("h1",{style:{fontFamily:"Playfair Display",fontSize:"clamp(2.5rem, 8vw, 6rem)",color:"#F5C518",fontStyle:"italic",lineHeight:1.1,textShadow:"0 0 60px rgba(245,197,24,0.6), 0 0 120px rgba(245,197,24,0.3)",animation:"glowPulse 2s ease-in-out infinite"},children:"HE SAID YES"}),M.jsx("p",{style:{fontFamily:"Caveat",fontSize:"1.4rem",color:"rgba(253,250,242,0.7)"},children:"obviously 💛"}),M.jsx("button",{onClick:()=>t("/finale"),style:{marginTop:"1.5rem",padding:"14px 44px",borderRadius:99,background:"#F5C518",color:"#1A1209",border:"none",fontFamily:"DM Sans",fontWeight:500,fontSize:"1rem",transition:"transform 0.2s, box-shadow 0.2s"},onMouseEnter:g=>{g.currentTarget.style.transform="scale(1.06)",g.currentTarget.style.boxShadow="0 0 32px rgba(245,197,24,0.5)"},onMouseLeave:g=>{g.currentTarget.style.transform="scale(1)",g.currentTarget.style.boxShadow="none"},children:"One last thing ✦"})]}):M.jsxs(M.Fragment,{children:[M.jsx("div",{style:{marginBottom:"1.5rem",animation:"fadeUp 0.6s ease both",position:"relative",zIndex:2},children:M.jsx("span",{className:"badge",style:{color:"#E8527A",borderColor:"rgba(232,82,122,0.3)"},children:"Level 12 — the moment"})}),M.jsxs("h1",{style:{fontFamily:"Playfair Display",fontSize:"clamp(2.2rem, 7vw, 5rem)",color:"#FDFAF2",textAlign:"center",lineHeight:1.15,marginBottom:"0.6rem",animation:"fadeUp 0.7s 0.1s ease both",position:"relative",zIndex:2},children:["Will you be my"," ",M.jsx("em",{style:{color:"#F5C518",fontStyle:"italic"},children:"boyfriend"}),"?"]}),M.jsx("p",{style:{fontFamily:"Caveat",fontSize:"1.1rem",color:"rgba(253,250,242,0.4)",marginBottom:"3rem",textAlign:"center",animation:"fadeUp 0.7s 0.2s ease both",position:"relative",zIndex:2},children:o===0?"take your time 💛":o<3?"the No button seems scared 👀":o<6?"it keeps running away… suspicious 🤔":o<10?"Rithvik. RITHVIK. 😭":"just click the yellow one 💛"}),M.jsxs("div",{ref:i,style:{position:"relative",zIndex:2,width:"100%",maxWidth:600,height:300,display:"flex",alignItems:"center",justifyContent:"center"},children:[M.jsx("button",{onClick:u,style:{padding:"18px 60px",borderRadius:99,background:"#F5C518",color:"#1A1209",border:"none",fontFamily:"DM Sans",fontWeight:500,fontSize:"1.2rem",letterSpacing:"0.02em",opacity:v?1:0,transform:v?"scale(1)":"scale(0.8)",transition:"opacity 0.6s, transform 0.6s, box-shadow 0.2s",animation:v?"pulseGlow 2s ease-in-out infinite":"none",zIndex:3,pointerEvents:v?"auto":"none"},onMouseEnter:g=>{g.currentTarget.style.transform="scale(1.08)",g.currentTarget.style.boxShadow="0 0 40px rgba(245,197,24,0.6)"},onMouseLeave:g=>{g.currentTarget.style.transform="scale(1)",g.currentTarget.style.boxShadow="none"},children:"Yes, always 💛"}),M.jsx("button",{ref:r,onMouseEnter:p,onFocus:p,style:{position:"absolute",left:a.x??"auto",top:a.y??"auto",right:a.x===null?24:"auto",bottom:a.y===null?24:"auto",padding:"12px 28px",borderRadius:99,background:"rgba(255,255,255,0.05)",border:"1.5px solid rgba(255,255,255,0.15)",color:"rgba(255,255,255,0.4)",fontFamily:"DM Sans",fontSize:"0.85rem",transition:"left 0.2s cubic-bezier(0.34,1.56,0.64,1), top 0.2s cubic-bezier(0.34,1.56,0.64,1)",whiteSpace:"nowrap",zIndex:2,cursor:"pointer"},children:o===0?"No":c})]}),o>0&&M.jsxs("p",{style:{fontFamily:"Caveat",fontSize:"0.9rem",color:"rgba(255,255,255,0.2)",position:"relative",zIndex:2,marginTop:"0.5rem",animation:"fadeIn 0.3s ease"},children:["No button attempts: ",o," 😭"]})]}),!f&&M.jsx("button",{onClick:()=>{e(12),t("/finale")},style:{marginTop:"1rem",background:"transparent",border:"1px solid rgba(255,255,255,0.08)",color:"rgba(255,255,255,0.2)",fontFamily:"DM Sans",fontSize:"0.72rem",padding:"5px 14px",borderRadius:99,position:"relative",zIndex:2},onMouseEnter:g=>{g.currentTarget.style.color="rgba(255,255,255,0.5)"},onMouseLeave:g=>{g.currentTarget.style.color="rgba(255,255,255,0.2)"},children:"skip (dev only)"})]})}function Ub(){return M.jsx("div",{style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",zIndex:0},children:Array.from({length:40}).map((t,e)=>M.jsx("div",{style:{position:"absolute",left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,width:Math.random()>.8?3:2,height:Math.random()>.8?3:2,borderRadius:"50%",background:e%4===0?"#E8527A":e%7===0?"#F5C518":"white",opacity:Math.random()*.4+.05,animation:`starTwinkle ${2+Math.random()*4}s ease-in-out infinite`,animationDelay:`${Math.random()*5}s`}},e))})}const Nb=`And just like that — after everything — here we are.

You walked into my life on the last day of October and somehow became my first thought every morning and my last one every night.

I fell first. And I'd fall first a thousand times over.

Thank you for happening. Here's to more firsts and forevers.

I love you, Rithvik. Always and forever. 💛

— Akanksha`,_o=480,xs=18,Fb=72,$a=_o+xs*2,Nm=_o+xs+Fb,xu=280;function kb(){const t=U.useRef(null),e=U.useRef(null),n=U.useRef(null),[i,r]=U.useState(!1),[o,s]=U.useState(!1),[a,l]=U.useState(!1),[c,d]=U.useState(null),[f,h]=U.useState(!1),[v,_]=U.useState(!1);U.useEffect(()=>(setTimeout(()=>h(!0),200),()=>y()),[]);const y=()=>{n.current&&(n.current.getTracks().forEach(E=>E.stop()),n.current=null)},p=async()=>{s(!1);try{const E=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:640},height:{ideal:640},facingMode:"user"},audio:!1});n.current=E,r(!0),setTimeout(()=>{const b=t.current;b&&(b.srcObject=E,b.onloadedmetadata=()=>{b.play().then(()=>_(!0))})},100)}catch{s(!0)}},u=U.useCallback(()=>{const E=t.current,b=e.current;if(!E||!b||!v)return;const L=E.videoWidth,F=E.videoHeight;if(L===0||F===0)return;b.width=$a,b.height=Nm;const S=b.getContext("2d");S.fillStyle="#FFFEF8",S.fillRect(0,0,$a,Nm);const w=Math.min(L,F),N=(L-w)/2,O=(F-w)/2;S.save(),S.translate(xs+_o,xs),S.scale(-1,1),S.drawImage(E,N,O,w,w,0,0,_o,_o),S.restore();const R=_o+xs+35;S.font='italic 20px "Playfair Display", serif',S.fillStyle="#2C1D0A",S.textAlign="center",S.fillText("Rithvik — Taken by Akanksha 💛",$a/2,R);const G=new Date().toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"});S.font='14px "DM Sans", sans-serif',S.fillStyle="rgba(44,29,10,0.5)",S.fillText(G,$a/2,R+25);const I=b.toDataURL("image/png");d(I),l(!0),y()},[v]),g=()=>{l(!1),d(null),_(!1),p()},m=()=>{if(!c)return;const E=document.createElement("a");E.href=c,E.download="our-forever-moment.png",E.click()},x={padding:"12px 28px",borderRadius:99,background:"#F5C518",color:"#1A1209",border:"none",fontFamily:"DM Sans",fontWeight:500,fontSize:"0.95rem",cursor:"pointer",transition:"transform 0.2s, box-shadow 0.2s"},A={padding:"12px 28px",borderRadius:99,background:"transparent",border:"1.5px solid rgba(255,255,255,0.15)",color:"rgba(255,255,255,0.4)",fontFamily:"DM Sans",fontWeight:500,fontSize:"0.95rem",cursor:"pointer",transition:"all 0.2s ease"};return M.jsxs("div",{style:{width:"100%",minHeight:"100vh",background:"radial-gradient(ellipse at 50% 30%, #1C1000 0%, #080500 65%)",display:"flex",flexDirection:"column",alignItems:"center",padding:"4rem 1.5rem 5rem",position:"relative",overflow:"hidden"},children:[M.jsx(Ob,{}),M.jsxs("div",{style:{textAlign:"center",marginBottom:"3rem",zIndex:2,opacity:f?1:0,transform:f?"translateY(0)":"translateY(24px)",transition:"opacity 1s ease, transform 1s ease"},children:[M.jsx("h1",{style:{fontFamily:"Playfair Display",fontSize:"clamp(3rem, 9vw, 6.5rem)",color:"#F5C518",fontStyle:"italic"},children:"I love you."}),M.jsx("p",{style:{fontFamily:"Caveat",fontSize:"1.2rem",color:"rgba(253,250,242,0.45)"},children:"always, and without condition 💛"})]}),M.jsxs("div",{style:{display:"flex",gap:"3rem",width:"100%",maxWidth:900,zIndex:2,flexWrap:"wrap",justifyContent:"center"},children:[M.jsx("div",{style:{flex:"1 1 320px",maxWidth:420,background:"rgba(245,197,24,0.04)",border:"1px solid rgba(245,197,24,0.15)",borderRadius:16,padding:"28px"},children:M.jsx("p",{style:{fontFamily:"Caveat",fontSize:"1.1rem",color:"rgba(253,250,242,0.85)",lineHeight:2,whiteSpace:"pre-line"},children:Nb})}),M.jsxs("div",{style:{flex:"1 1 280px",maxWidth:340,display:"flex",flexDirection:"column",alignItems:"center",gap:"1.5rem"},children:[M.jsxs("div",{style:{background:"#FFFEF8",padding:"12px 12px 18px",boxShadow:"0 8px 32px rgba(0,0,0,0.55)",borderRadius:3,width:xu},children:[M.jsxs("div",{style:{width:xu-24,height:xu-24,background:"#1A1209",overflow:"hidden",position:"relative"},children:[i&&!a&&M.jsx("video",{ref:t,autoPlay:!0,playsInline:!0,muted:!0,style:{width:"100%",height:"100%",objectFit:"cover",transform:"scaleX(-1)"}}),a&&c&&M.jsx("img",{src:c,alt:"polaroid",style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top"}}),!i&&!a&&M.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:M.jsx("p",{style:{color:"rgba(245,197,24,0.4)",fontFamily:"Caveat"},children:"Ready for a photo?"})})]}),M.jsx("div",{style:{textAlign:"center",marginTop:12},children:M.jsx("p",{style:{fontFamily:"Georgia, serif",fontSize:"9px",color:"#2C1D0A",fontStyle:"italic"},children:"Rithvik — Taken by Akanksha 💛"})})]}),M.jsx("canvas",{ref:e,style:{display:"none"}}),M.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",justifyContent:"center"},children:[!i&&!a&&M.jsx("button",{onClick:p,style:x,onMouseEnter:E=>{E.currentTarget.style.transform="scale(1.05)",E.currentTarget.style.boxShadow="0 0 20px rgba(245,197,24,0.4)"},onMouseLeave:E=>{E.currentTarget.style.transform="scale(1)",E.currentTarget.style.boxShadow="none"},children:"Open Camera 📷"}),i&&!a&&M.jsx("button",{onClick:u,disabled:!v,style:{...x,opacity:v?1:.6},onMouseEnter:E=>{v&&(E.currentTarget.style.transform="scale(1.05)")},onMouseLeave:E=>{E.currentTarget.style.transform="scale(1)"},children:v?"📸 Capture":"Loading..."}),a&&M.jsxs(M.Fragment,{children:[M.jsx("button",{onClick:m,style:x,onMouseEnter:E=>{E.currentTarget.style.transform="scale(1.05)",E.currentTarget.style.boxShadow="0 0 20px rgba(245,197,24,0.4)"},onMouseLeave:E=>{E.currentTarget.style.transform="scale(1)",E.currentTarget.style.boxShadow="none"},children:"Save 💛"}),M.jsx("button",{onClick:g,style:A,onMouseEnter:E=>{E.currentTarget.style.color="#fff",E.currentTarget.style.borderColor="rgba(255,255,255,0.5)"},onMouseLeave:E=>{E.currentTarget.style.color="rgba(255,255,255,0.4)",E.currentTarget.style.borderColor="rgba(255,255,255,0.15)"},children:"Retake"})]})]})]})]})]})}function Ob(){return M.jsx("div",{style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",zIndex:0},children:Array.from({length:40}).map((t,e)=>M.jsx("div",{style:{position:"absolute",left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,width:2,height:2,borderRadius:"50%",background:"white",opacity:.2}},e))})}function zb(){return M.jsx(SS,{children:M.jsxs(yS,{basename:"/rithvik-website",children:[M.jsx(MS,{}),M.jsx(ES,{}),M.jsxs(vS,{children:[M.jsx(zt,{path:"/",element:M.jsx(TS,{})}),M.jsx(zt,{path:"/welcome",element:M.jsx(j2,{})}),M.jsx(zt,{path:"/gesture",element:M.jsx(X2,{})}),M.jsx(zt,{path:"/voice",element:M.jsx(J2,{})}),M.jsx(zt,{path:"/memories",element:M.jsx(nb,{})}),M.jsx(zt,{path:"/compat",element:M.jsx(lb,{})}),M.jsx(zt,{path:"/memgame",element:M.jsx(db,{})}),M.jsx(zt,{path:"/arcade",element:M.jsx(pb,{})}),M.jsx(zt,{path:"/jigsaw",element:M.jsx(_b,{})}),M.jsx(zt,{path:"/soundtrack",element:M.jsx(Sb,{})}),M.jsx(zt,{path:"/wordsearch",element:M.jsx(Ab,{})}),M.jsx(zt,{path:"/meter",element:M.jsx(Pb,{})}),M.jsx(zt,{path:"/ask",element:M.jsx(Ib,{})}),M.jsx(zt,{path:"/finale",element:M.jsx(kb,{})}),M.jsx(zt,{path:"*",element:M.jsx(mS,{to:"/",replace:!0})})]})]})})}yu.createRoot(document.getElementById("root")).render(M.jsx(Xm.StrictMode,{children:M.jsx(zb,{})}));
