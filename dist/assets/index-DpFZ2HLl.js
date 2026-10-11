var E_=Object.defineProperty;var w_=(t,e,n)=>e in t?E_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Kp=(t,e,n)=>w_(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function T_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ug={exports:{}},Jc={},dg={exports:{}},xt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Go=Symbol.for("react.element"),A_=Symbol.for("react.portal"),C_=Symbol.for("react.fragment"),R_=Symbol.for("react.strict_mode"),b_=Symbol.for("react.profiler"),N_=Symbol.for("react.provider"),P_=Symbol.for("react.context"),I_=Symbol.for("react.forward_ref"),L_=Symbol.for("react.suspense"),D_=Symbol.for("react.memo"),U_=Symbol.for("react.lazy"),Jp=Symbol.iterator;function O_(t){return t===null||typeof t!="object"?null:(t=Jp&&t[Jp]||t["@@iterator"],typeof t=="function"?t:null)}var fg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hg=Object.assign,pg={};function Ca(t,e,n){this.props=t,this.context=e,this.refs=pg,this.updater=n||fg}Ca.prototype.isReactComponent={};Ca.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ca.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function mg(){}mg.prototype=Ca.prototype;function _h(t,e,n){this.props=t,this.context=e,this.refs=pg,this.updater=n||fg}var yh=_h.prototype=new mg;yh.constructor=_h;hg(yh,Ca.prototype);yh.isPureReactComponent=!0;var Zp=Array.isArray,gg=Object.prototype.hasOwnProperty,Sh={current:null},vg={key:!0,ref:!0,__self:!0,__source:!0};function xg(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)gg.call(e,i)&&!vg.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Go,type:t,key:s,ref:a,props:r,_owner:Sh.current}}function F_(t,e){return{$$typeof:Go,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Mh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Go}function k_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Qp=/\/+/g;function Tu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?k_(""+t.key):e.toString(36)}function Jl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Go:case A_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Tu(a,0):i,Zp(r)?(n="",t!=null&&(n=t.replace(Qp,"$&/")+"/"),Jl(r,e,n,"",function(c){return c})):r!=null&&(Mh(r)&&(r=F_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Qp,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Zp(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Tu(s,o);a+=Jl(s,e,n,l,r)}else if(l=O_(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Tu(s,o++),a+=Jl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function ol(t,e,n){if(t==null)return t;var i=[],r=0;return Jl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function B_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var jn={current:null},Zl={transition:null},z_={ReactCurrentDispatcher:jn,ReactCurrentBatchConfig:Zl,ReactCurrentOwner:Sh};function _g(){throw Error("act(...) is not supported in production builds of React.")}xt.Children={map:ol,forEach:function(t,e,n){ol(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ol(t,function(){e++}),e},toArray:function(t){return ol(t,function(e){return e})||[]},only:function(t){if(!Mh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};xt.Component=Ca;xt.Fragment=C_;xt.Profiler=b_;xt.PureComponent=_h;xt.StrictMode=R_;xt.Suspense=L_;xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z_;xt.act=_g;xt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=hg({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Sh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)gg.call(e,l)&&!vg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Go,type:t.type,key:r,ref:s,props:i,_owner:a}};xt.createContext=function(t){return t={$$typeof:P_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:N_,_context:t},t.Consumer=t};xt.createElement=xg;xt.createFactory=function(t){var e=xg.bind(null,t);return e.type=t,e};xt.createRef=function(){return{current:null}};xt.forwardRef=function(t){return{$$typeof:I_,render:t}};xt.isValidElement=Mh;xt.lazy=function(t){return{$$typeof:U_,_payload:{_status:-1,_result:t},_init:B_}};xt.memo=function(t,e){return{$$typeof:D_,type:t,compare:e===void 0?null:e}};xt.startTransition=function(t){var e=Zl.transition;Zl.transition={};try{t()}finally{Zl.transition=e}};xt.unstable_act=_g;xt.useCallback=function(t,e){return jn.current.useCallback(t,e)};xt.useContext=function(t){return jn.current.useContext(t)};xt.useDebugValue=function(){};xt.useDeferredValue=function(t){return jn.current.useDeferredValue(t)};xt.useEffect=function(t,e){return jn.current.useEffect(t,e)};xt.useId=function(){return jn.current.useId()};xt.useImperativeHandle=function(t,e,n){return jn.current.useImperativeHandle(t,e,n)};xt.useInsertionEffect=function(t,e){return jn.current.useInsertionEffect(t,e)};xt.useLayoutEffect=function(t,e){return jn.current.useLayoutEffect(t,e)};xt.useMemo=function(t,e){return jn.current.useMemo(t,e)};xt.useReducer=function(t,e,n){return jn.current.useReducer(t,e,n)};xt.useRef=function(t){return jn.current.useRef(t)};xt.useState=function(t){return jn.current.useState(t)};xt.useSyncExternalStore=function(t,e,n){return jn.current.useSyncExternalStore(t,e,n)};xt.useTransition=function(){return jn.current.useTransition()};xt.version="18.3.1";dg.exports=xt;var ie=dg.exports;const G_=T_(ie);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H_=ie,V_=Symbol.for("react.element"),W_=Symbol.for("react.fragment"),j_=Object.prototype.hasOwnProperty,X_=H_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Y_={key:!0,ref:!0,__self:!0,__source:!0};function yg(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)j_.call(e,i)&&!Y_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:V_,type:t,key:s,ref:a,props:r,_owner:X_.current}}Jc.Fragment=W_;Jc.jsx=yg;Jc.jsxs=yg;ug.exports=Jc;var p=ug.exports,Ld={},Sg={exports:{}},fi={},Mg={exports:{}},Eg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(V,H){var P=V.length;V.push(H);e:for(;0<P;){var b=P-1>>>1,ne=V[b];if(0<r(ne,H))V[b]=H,V[P]=ne,P=b;else break e}}function n(V){return V.length===0?null:V[0]}function i(V){if(V.length===0)return null;var H=V[0],P=V.pop();if(P!==H){V[0]=P;e:for(var b=0,ne=V.length,le=ne>>>1;b<le;){var Me=2*(b+1)-1,xe=V[Me],me=Me+1,B=V[me];if(0>r(xe,P))me<ne&&0>r(B,xe)?(V[b]=B,V[me]=P,b=me):(V[b]=xe,V[Me]=P,b=Me);else if(me<ne&&0>r(B,P))V[b]=B,V[me]=P,b=me;else break e}}return H}function r(V,H){var P=V.sortIndex-H.sortIndex;return P!==0?P:V.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],f=1,h=null,u=3,m=!1,x=!1,S=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(V){for(var H=n(c);H!==null;){if(H.callback===null)i(c);else if(H.startTime<=V)i(c),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(c)}}function M(V){if(S=!1,E(V),!x)if(n(l)!==null)x=!0,te(T);else{var H=n(c);H!==null&&j(M,H.startTime-V)}}function T(V,H){x=!1,S&&(S=!1,d(_),_=-1),m=!0;var P=u;try{for(E(H),h=n(l);h!==null&&(!(h.expirationTime>H)||V&&!U());){var b=h.callback;if(typeof b=="function"){h.callback=null,u=h.priorityLevel;var ne=b(h.expirationTime<=H);H=t.unstable_now(),typeof ne=="function"?h.callback=ne:h===n(l)&&i(l),E(H)}else i(l);h=n(l)}if(h!==null)var le=!0;else{var Me=n(c);Me!==null&&j(M,Me.startTime-H),le=!1}return le}finally{h=null,u=P,m=!1}}var w=!1,R=null,_=-1,C=5,I=-1;function U(){return!(t.unstable_now()-I<C)}function O(){if(R!==null){var V=t.unstable_now();I=V;var H=!0;try{H=R(!0,V)}finally{H?F():(w=!1,R=null)}}else w=!1}var F;if(typeof v=="function")F=function(){v(O)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,G=L.port2;L.port1.onmessage=O,F=function(){G.postMessage(null)}}else F=function(){g(O,0)};function te(V){R=V,w||(w=!0,F())}function j(V,H){_=g(function(){V(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(V){V.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,te(T))},t.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<V?Math.floor(1e3/V):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(V){switch(u){case 1:case 2:case 3:var H=3;break;default:H=u}var P=u;u=H;try{return V()}finally{u=P}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(V,H){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var P=u;u=V;try{return H()}finally{u=P}},t.unstable_scheduleCallback=function(V,H,P){var b=t.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?b+P:b):P=b,V){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=P+ne,V={id:f++,callback:H,priorityLevel:V,startTime:P,expirationTime:ne,sortIndex:-1},P>b?(V.sortIndex=P,e(c,V),n(l)===null&&V===n(c)&&(S?(d(_),_=-1):S=!0,j(M,P-b))):(V.sortIndex=ne,e(l,V),x||m||(x=!0,te(T))),V},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(V){var H=u;return function(){var P=u;u=H;try{return V.apply(this,arguments)}finally{u=P}}}})(Eg);Mg.exports=Eg;var q_=Mg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $_=ie,di=q_;function ge(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wg=new Set,vo={};function Ts(t,e){va(t,e),va(t+"Capture",e)}function va(t,e){for(vo[t]=e,t=0;t<e.length;t++)wg.add(e[t])}var gr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Dd=Object.prototype.hasOwnProperty,K_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,em={},tm={};function J_(t){return Dd.call(tm,t)?!0:Dd.call(em,t)?!1:K_.test(t)?tm[t]=!0:(em[t]=!0,!1)}function Z_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Q_(t,e,n,i){if(e===null||typeof e>"u"||Z_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Xn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Rn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Rn[t]=new Xn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Rn[e]=new Xn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Rn[t]=new Xn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Rn[t]=new Xn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Rn[t]=new Xn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Rn[t]=new Xn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Rn[t]=new Xn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Rn[t]=new Xn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Rn[t]=new Xn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Eh=/[\-:]([a-z])/g;function wh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Eh,wh);Rn[e]=new Xn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Eh,wh);Rn[e]=new Xn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Eh,wh);Rn[e]=new Xn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Rn[t]=new Xn(t,1,!1,t.toLowerCase(),null,!1,!1)});Rn.xlinkHref=new Xn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Rn[t]=new Xn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Th(t,e,n,i){var r=Rn.hasOwnProperty(e)?Rn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Q_(e,n,r,i)&&(n=null),i||r===null?J_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Sr=$_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ll=Symbol.for("react.element"),Ks=Symbol.for("react.portal"),Js=Symbol.for("react.fragment"),Ah=Symbol.for("react.strict_mode"),Ud=Symbol.for("react.profiler"),Tg=Symbol.for("react.provider"),Ag=Symbol.for("react.context"),Ch=Symbol.for("react.forward_ref"),Od=Symbol.for("react.suspense"),Fd=Symbol.for("react.suspense_list"),Rh=Symbol.for("react.memo"),Nr=Symbol.for("react.lazy"),Cg=Symbol.for("react.offscreen"),nm=Symbol.iterator;function Ua(t){return t===null||typeof t!="object"?null:(t=nm&&t[nm]||t["@@iterator"],typeof t=="function"?t:null)}var Qt=Object.assign,Au;function Ka(t){if(Au===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Au=e&&e[1]||""}return`
`+Au+t}var Cu=!1;function Ru(t,e){if(!t||Cu)return"";Cu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Cu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ka(t):""}function ey(t){switch(t.tag){case 5:return Ka(t.type);case 16:return Ka("Lazy");case 13:return Ka("Suspense");case 19:return Ka("SuspenseList");case 0:case 2:case 15:return t=Ru(t.type,!1),t;case 11:return t=Ru(t.type.render,!1),t;case 1:return t=Ru(t.type,!0),t;default:return""}}function kd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Js:return"Fragment";case Ks:return"Portal";case Ud:return"Profiler";case Ah:return"StrictMode";case Od:return"Suspense";case Fd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ag:return(t.displayName||"Context")+".Consumer";case Tg:return(t._context.displayName||"Context")+".Provider";case Ch:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Rh:return e=t.displayName||null,e!==null?e:kd(t.type)||"Memo";case Nr:e=t._payload,t=t._init;try{return kd(t(e))}catch{}}return null}function ty(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return kd(e);case 8:return e===Ah?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function $r(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Rg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ny(t){var e=Rg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function cl(t){t._valueTracker||(t._valueTracker=ny(t))}function bg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Rg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function xc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bd(t,e){var n=e.checked;return Qt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function im(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=$r(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ng(t,e){e=e.checked,e!=null&&Th(t,"checked",e,!1)}function zd(t,e){Ng(t,e);var n=$r(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Gd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Gd(t,e.type,$r(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function rm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Gd(t,e,n){(e!=="number"||xc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ja=Array.isArray;function ca(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+$r(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Hd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ge(91));return Qt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function sm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ge(92));if(Ja(n)){if(1<n.length)throw Error(ge(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:$r(n)}}function Pg(t,e){var n=$r(e.value),i=$r(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function am(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ig(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ig(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ul,Lg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ul=ul||document.createElement("div"),ul.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ul.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function xo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var io={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},iy=["Webkit","ms","Moz","O"];Object.keys(io).forEach(function(t){iy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),io[e]=io[t]})});function Dg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||io.hasOwnProperty(t)&&io[t]?(""+e).trim():e+"px"}function Ug(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Dg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var ry=Qt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wd(t,e){if(e){if(ry[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ge(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ge(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ge(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ge(62))}}function jd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xd=null;function bh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yd=null,ua=null,da=null;function om(t){if(t=Wo(t)){if(typeof Yd!="function")throw Error(ge(280));var e=t.stateNode;e&&(e=nu(e),Yd(t.stateNode,t.type,e))}}function Og(t){ua?da?da.push(t):da=[t]:ua=t}function Fg(){if(ua){var t=ua,e=da;if(da=ua=null,om(t),e)for(t=0;t<e.length;t++)om(e[t])}}function kg(t,e){return t(e)}function Bg(){}var bu=!1;function zg(t,e,n){if(bu)return t(e,n);bu=!0;try{return kg(t,e,n)}finally{bu=!1,(ua!==null||da!==null)&&(Bg(),Fg())}}function _o(t,e){var n=t.stateNode;if(n===null)return null;var i=nu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ge(231,e,typeof n));return n}var qd=!1;if(gr)try{var Oa={};Object.defineProperty(Oa,"passive",{get:function(){qd=!0}}),window.addEventListener("test",Oa,Oa),window.removeEventListener("test",Oa,Oa)}catch{qd=!1}function sy(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var ro=!1,_c=null,yc=!1,$d=null,ay={onError:function(t){ro=!0,_c=t}};function oy(t,e,n,i,r,s,a,o,l){ro=!1,_c=null,sy.apply(ay,arguments)}function ly(t,e,n,i,r,s,a,o,l){if(oy.apply(this,arguments),ro){if(ro){var c=_c;ro=!1,_c=null}else throw Error(ge(198));yc||(yc=!0,$d=c)}}function As(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Gg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function lm(t){if(As(t)!==t)throw Error(ge(188))}function cy(t){var e=t.alternate;if(!e){if(e=As(t),e===null)throw Error(ge(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return lm(r),t;if(s===i)return lm(r),e;s=s.sibling}throw Error(ge(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ge(189))}}if(n.alternate!==i)throw Error(ge(190))}if(n.tag!==3)throw Error(ge(188));return n.stateNode.current===n?t:e}function Hg(t){return t=cy(t),t!==null?Vg(t):null}function Vg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Vg(t);if(e!==null)return e;t=t.sibling}return null}var Wg=di.unstable_scheduleCallback,cm=di.unstable_cancelCallback,uy=di.unstable_shouldYield,dy=di.unstable_requestPaint,sn=di.unstable_now,fy=di.unstable_getCurrentPriorityLevel,Nh=di.unstable_ImmediatePriority,jg=di.unstable_UserBlockingPriority,Sc=di.unstable_NormalPriority,hy=di.unstable_LowPriority,Xg=di.unstable_IdlePriority,Zc=null,qi=null;function py(t){if(qi&&typeof qi.onCommitFiberRoot=="function")try{qi.onCommitFiberRoot(Zc,t,void 0,(t.current.flags&128)===128)}catch{}}var Ui=Math.clz32?Math.clz32:vy,my=Math.log,gy=Math.LN2;function vy(t){return t>>>=0,t===0?32:31-(my(t)/gy|0)|0}var dl=64,fl=4194304;function Za(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Mc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Za(o):(s&=a,s!==0&&(i=Za(s)))}else a=n&~r,a!==0?i=Za(a):s!==0&&(i=Za(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Ui(e),r=1<<n,i|=t[n],e&=~r;return i}function xy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _y(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Ui(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=xy(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Kd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Yg(){var t=dl;return dl<<=1,!(dl&4194240)&&(dl=64),t}function Nu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ho(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ui(e),t[e]=n}function yy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Ui(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Ph(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Ui(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ot=0;function qg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var $g,Ih,Kg,Jg,Zg,Jd=!1,hl=[],Gr=null,Hr=null,Vr=null,yo=new Map,So=new Map,Dr=[],Sy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function um(t,e){switch(t){case"focusin":case"focusout":Gr=null;break;case"dragenter":case"dragleave":Hr=null;break;case"mouseover":case"mouseout":Vr=null;break;case"pointerover":case"pointerout":yo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(e.pointerId)}}function Fa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Wo(e),e!==null&&Ih(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function My(t,e,n,i,r){switch(e){case"focusin":return Gr=Fa(Gr,t,e,n,i,r),!0;case"dragenter":return Hr=Fa(Hr,t,e,n,i,r),!0;case"mouseover":return Vr=Fa(Vr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return yo.set(s,Fa(yo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,So.set(s,Fa(So.get(s)||null,t,e,n,i,r)),!0}return!1}function Qg(t){var e=us(t.target);if(e!==null){var n=As(e);if(n!==null){if(e=n.tag,e===13){if(e=Gg(n),e!==null){t.blockedOn=e,Zg(t.priority,function(){Kg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ql(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Zd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Xd=i,n.target.dispatchEvent(i),Xd=null}else return e=Wo(n),e!==null&&Ih(e),t.blockedOn=n,!1;e.shift()}return!0}function dm(t,e,n){Ql(t)&&n.delete(e)}function Ey(){Jd=!1,Gr!==null&&Ql(Gr)&&(Gr=null),Hr!==null&&Ql(Hr)&&(Hr=null),Vr!==null&&Ql(Vr)&&(Vr=null),yo.forEach(dm),So.forEach(dm)}function ka(t,e){t.blockedOn===e&&(t.blockedOn=null,Jd||(Jd=!0,di.unstable_scheduleCallback(di.unstable_NormalPriority,Ey)))}function Mo(t){function e(r){return ka(r,t)}if(0<hl.length){ka(hl[0],t);for(var n=1;n<hl.length;n++){var i=hl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Gr!==null&&ka(Gr,t),Hr!==null&&ka(Hr,t),Vr!==null&&ka(Vr,t),yo.forEach(e),So.forEach(e),n=0;n<Dr.length;n++)i=Dr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Dr.length&&(n=Dr[0],n.blockedOn===null);)Qg(n),n.blockedOn===null&&Dr.shift()}var fa=Sr.ReactCurrentBatchConfig,Ec=!0;function wy(t,e,n,i){var r=Ot,s=fa.transition;fa.transition=null;try{Ot=1,Lh(t,e,n,i)}finally{Ot=r,fa.transition=s}}function Ty(t,e,n,i){var r=Ot,s=fa.transition;fa.transition=null;try{Ot=4,Lh(t,e,n,i)}finally{Ot=r,fa.transition=s}}function Lh(t,e,n,i){if(Ec){var r=Zd(t,e,n,i);if(r===null)zu(t,e,i,wc,n),um(t,i);else if(My(r,t,e,n,i))i.stopPropagation();else if(um(t,i),e&4&&-1<Sy.indexOf(t)){for(;r!==null;){var s=Wo(r);if(s!==null&&$g(s),s=Zd(t,e,n,i),s===null&&zu(t,e,i,wc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else zu(t,e,i,null,n)}}var wc=null;function Zd(t,e,n,i){if(wc=null,t=bh(i),t=us(t),t!==null)if(e=As(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Gg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return wc=t,null}function ev(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fy()){case Nh:return 1;case jg:return 4;case Sc:case hy:return 16;case Xg:return 536870912;default:return 16}default:return 16}}var Br=null,Dh=null,ec=null;function tv(){if(ec)return ec;var t,e=Dh,n=e.length,i,r="value"in Br?Br.value:Br.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return ec=r.slice(t,1<i?1-i:void 0)}function tc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function pl(){return!0}function fm(){return!1}function hi(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?pl:fm,this.isPropagationStopped=fm,this}return Qt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),e}var Ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uh=hi(Ra),Vo=Qt({},Ra,{view:0,detail:0}),Ay=hi(Vo),Pu,Iu,Ba,Qc=Qt({},Vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ba&&(Ba&&t.type==="mousemove"?(Pu=t.screenX-Ba.screenX,Iu=t.screenY-Ba.screenY):Iu=Pu=0,Ba=t),Pu)},movementY:function(t){return"movementY"in t?t.movementY:Iu}}),hm=hi(Qc),Cy=Qt({},Qc,{dataTransfer:0}),Ry=hi(Cy),by=Qt({},Vo,{relatedTarget:0}),Lu=hi(by),Ny=Qt({},Ra,{animationName:0,elapsedTime:0,pseudoElement:0}),Py=hi(Ny),Iy=Qt({},Ra,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ly=hi(Iy),Dy=Qt({},Ra,{data:0}),pm=hi(Dy),Uy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Oy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ky(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Fy[t])?!!e[t]:!1}function Oh(){return ky}var By=Qt({},Vo,{key:function(t){if(t.key){var e=Uy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=tc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Oy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oh,charCode:function(t){return t.type==="keypress"?tc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?tc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zy=hi(By),Gy=Qt({},Qc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mm=hi(Gy),Hy=Qt({},Vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oh}),Vy=hi(Hy),Wy=Qt({},Ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),jy=hi(Wy),Xy=Qt({},Qc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Yy=hi(Xy),qy=[9,13,27,32],Fh=gr&&"CompositionEvent"in window,so=null;gr&&"documentMode"in document&&(so=document.documentMode);var $y=gr&&"TextEvent"in window&&!so,nv=gr&&(!Fh||so&&8<so&&11>=so),gm=" ",vm=!1;function iv(t,e){switch(t){case"keyup":return qy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zs=!1;function Ky(t,e){switch(t){case"compositionend":return rv(e);case"keypress":return e.which!==32?null:(vm=!0,gm);case"textInput":return t=e.data,t===gm&&vm?null:t;default:return null}}function Jy(t,e){if(Zs)return t==="compositionend"||!Fh&&iv(t,e)?(t=tv(),ec=Dh=Br=null,Zs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return nv&&e.locale!=="ko"?null:e.data;default:return null}}var Zy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Zy[t.type]:e==="textarea"}function sv(t,e,n,i){Og(i),e=Tc(e,"onChange"),0<e.length&&(n=new Uh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ao=null,Eo=null;function Qy(t){gv(t,0)}function eu(t){var e=ta(t);if(bg(e))return t}function eS(t,e){if(t==="change")return e}var av=!1;if(gr){var Du;if(gr){var Uu="oninput"in document;if(!Uu){var _m=document.createElement("div");_m.setAttribute("oninput","return;"),Uu=typeof _m.oninput=="function"}Du=Uu}else Du=!1;av=Du&&(!document.documentMode||9<document.documentMode)}function ym(){ao&&(ao.detachEvent("onpropertychange",ov),Eo=ao=null)}function ov(t){if(t.propertyName==="value"&&eu(Eo)){var e=[];sv(e,Eo,t,bh(t)),zg(Qy,e)}}function tS(t,e,n){t==="focusin"?(ym(),ao=e,Eo=n,ao.attachEvent("onpropertychange",ov)):t==="focusout"&&ym()}function nS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return eu(Eo)}function iS(t,e){if(t==="click")return eu(e)}function rS(t,e){if(t==="input"||t==="change")return eu(e)}function sS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ki=typeof Object.is=="function"?Object.is:sS;function wo(t,e){if(ki(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Dd.call(e,r)||!ki(t[r],e[r]))return!1}return!0}function Sm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mm(t,e){var n=Sm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sm(n)}}function lv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?lv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function cv(){for(var t=window,e=xc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=xc(t.document)}return e}function kh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function aS(t){var e=cv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&lv(n.ownerDocument.documentElement,n)){if(i!==null&&kh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Mm(n,s);var a=Mm(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var oS=gr&&"documentMode"in document&&11>=document.documentMode,Qs=null,Qd=null,oo=null,ef=!1;function Em(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ef||Qs==null||Qs!==xc(i)||(i=Qs,"selectionStart"in i&&kh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),oo&&wo(oo,i)||(oo=i,i=Tc(Qd,"onSelect"),0<i.length&&(e=new Uh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Qs)))}function ml(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ea={animationend:ml("Animation","AnimationEnd"),animationiteration:ml("Animation","AnimationIteration"),animationstart:ml("Animation","AnimationStart"),transitionend:ml("Transition","TransitionEnd")},Ou={},uv={};gr&&(uv=document.createElement("div").style,"AnimationEvent"in window||(delete ea.animationend.animation,delete ea.animationiteration.animation,delete ea.animationstart.animation),"TransitionEvent"in window||delete ea.transitionend.transition);function tu(t){if(Ou[t])return Ou[t];if(!ea[t])return t;var e=ea[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in uv)return Ou[t]=e[n];return t}var dv=tu("animationend"),fv=tu("animationiteration"),hv=tu("animationstart"),pv=tu("transitionend"),mv=new Map,wm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qr(t,e){mv.set(t,e),Ts(e,[t])}for(var Fu=0;Fu<wm.length;Fu++){var ku=wm[Fu],lS=ku.toLowerCase(),cS=ku[0].toUpperCase()+ku.slice(1);Qr(lS,"on"+cS)}Qr(dv,"onAnimationEnd");Qr(fv,"onAnimationIteration");Qr(hv,"onAnimationStart");Qr("dblclick","onDoubleClick");Qr("focusin","onFocus");Qr("focusout","onBlur");Qr(pv,"onTransitionEnd");va("onMouseEnter",["mouseout","mouseover"]);va("onMouseLeave",["mouseout","mouseover"]);va("onPointerEnter",["pointerout","pointerover"]);va("onPointerLeave",["pointerout","pointerover"]);Ts("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ts("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ts("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ts("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ts("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ts("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qa));function Tm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,ly(i,e,void 0,t),t.currentTarget=null}function gv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Tm(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Tm(r,o,c),s=l}}}if(yc)throw t=$d,yc=!1,$d=null,t}function Vt(t,e){var n=e[af];n===void 0&&(n=e[af]=new Set);var i=t+"__bubble";n.has(i)||(vv(e,t,2,!1),n.add(i))}function Bu(t,e,n){var i=0;e&&(i|=4),vv(n,t,i,e)}var gl="_reactListening"+Math.random().toString(36).slice(2);function To(t){if(!t[gl]){t[gl]=!0,wg.forEach(function(n){n!=="selectionchange"&&(uS.has(n)||Bu(n,!1,t),Bu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[gl]||(e[gl]=!0,Bu("selectionchange",!1,e))}}function vv(t,e,n,i){switch(ev(e)){case 1:var r=wy;break;case 4:r=Ty;break;default:r=Lh}n=r.bind(null,e,n,t),r=void 0,!qd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function zu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=us(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}zg(function(){var c=s,f=bh(n),h=[];e:{var u=mv.get(t);if(u!==void 0){var m=Uh,x=t;switch(t){case"keypress":if(tc(n)===0)break e;case"keydown":case"keyup":m=zy;break;case"focusin":x="focus",m=Lu;break;case"focusout":x="blur",m=Lu;break;case"beforeblur":case"afterblur":m=Lu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=hm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Ry;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Vy;break;case dv:case fv:case hv:m=Py;break;case pv:m=jy;break;case"scroll":m=Ay;break;case"wheel":m=Yy;break;case"copy":case"cut":case"paste":m=Ly;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=mm}var S=(e&4)!==0,g=!S&&t==="scroll",d=S?u!==null?u+"Capture":null:u;S=[];for(var v=c,E;v!==null;){E=v;var M=E.stateNode;if(E.tag===5&&M!==null&&(E=M,d!==null&&(M=_o(v,d),M!=null&&S.push(Ao(v,M,E)))),g)break;v=v.return}0<S.length&&(u=new m(u,x,null,n,f),h.push({event:u,listeners:S}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",u&&n!==Xd&&(x=n.relatedTarget||n.fromElement)&&(us(x)||x[vr]))break e;if((m||u)&&(u=f.window===f?f:(u=f.ownerDocument)?u.defaultView||u.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=c,x=x?us(x):null,x!==null&&(g=As(x),x!==g||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=c),m!==x)){if(S=hm,M="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(S=mm,M="onPointerLeave",d="onPointerEnter",v="pointer"),g=m==null?u:ta(m),E=x==null?u:ta(x),u=new S(M,v+"leave",m,n,f),u.target=g,u.relatedTarget=E,M=null,us(f)===c&&(S=new S(d,v+"enter",x,n,f),S.target=E,S.relatedTarget=g,M=S),g=M,m&&x)t:{for(S=m,d=x,v=0,E=S;E;E=Ls(E))v++;for(E=0,M=d;M;M=Ls(M))E++;for(;0<v-E;)S=Ls(S),v--;for(;0<E-v;)d=Ls(d),E--;for(;v--;){if(S===d||d!==null&&S===d.alternate)break t;S=Ls(S),d=Ls(d)}S=null}else S=null;m!==null&&Am(h,u,m,S,!1),x!==null&&g!==null&&Am(h,g,x,S,!0)}}e:{if(u=c?ta(c):window,m=u.nodeName&&u.nodeName.toLowerCase(),m==="select"||m==="input"&&u.type==="file")var T=eS;else if(xm(u))if(av)T=rS;else{T=nS;var w=tS}else(m=u.nodeName)&&m.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(T=iS);if(T&&(T=T(t,c))){sv(h,T,n,f);break e}w&&w(t,u,c),t==="focusout"&&(w=u._wrapperState)&&w.controlled&&u.type==="number"&&Gd(u,"number",u.value)}switch(w=c?ta(c):window,t){case"focusin":(xm(w)||w.contentEditable==="true")&&(Qs=w,Qd=c,oo=null);break;case"focusout":oo=Qd=Qs=null;break;case"mousedown":ef=!0;break;case"contextmenu":case"mouseup":case"dragend":ef=!1,Em(h,n,f);break;case"selectionchange":if(oS)break;case"keydown":case"keyup":Em(h,n,f)}var R;if(Fh)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Zs?iv(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(nv&&n.locale!=="ko"&&(Zs||_!=="onCompositionStart"?_==="onCompositionEnd"&&Zs&&(R=tv()):(Br=f,Dh="value"in Br?Br.value:Br.textContent,Zs=!0)),w=Tc(c,_),0<w.length&&(_=new pm(_,t,null,n,f),h.push({event:_,listeners:w}),R?_.data=R:(R=rv(n),R!==null&&(_.data=R)))),(R=$y?Ky(t,n):Jy(t,n))&&(c=Tc(c,"onBeforeInput"),0<c.length&&(f=new pm("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=R))}gv(h,e)})}function Ao(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Tc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=_o(t,n),s!=null&&i.unshift(Ao(t,s,r)),s=_o(t,e),s!=null&&i.push(Ao(t,s,r))),t=t.return}return i}function Ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Am(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=_o(n,s),l!=null&&a.unshift(Ao(n,l,o))):r||(l=_o(n,s),l!=null&&a.push(Ao(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var dS=/\r\n?/g,fS=/\u0000|\uFFFD/g;function Cm(t){return(typeof t=="string"?t:""+t).replace(dS,`
`).replace(fS,"")}function vl(t,e,n){if(e=Cm(e),Cm(t)!==e&&n)throw Error(ge(425))}function Ac(){}var tf=null,nf=null;function rf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sf=typeof setTimeout=="function"?setTimeout:void 0,hS=typeof clearTimeout=="function"?clearTimeout:void 0,Rm=typeof Promise=="function"?Promise:void 0,pS=typeof queueMicrotask=="function"?queueMicrotask:typeof Rm<"u"?function(t){return Rm.resolve(null).then(t).catch(mS)}:sf;function mS(t){setTimeout(function(){throw t})}function Gu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Mo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Mo(e)}function Wr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function bm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ba=Math.random().toString(36).slice(2),ji="__reactFiber$"+ba,Co="__reactProps$"+ba,vr="__reactContainer$"+ba,af="__reactEvents$"+ba,gS="__reactListeners$"+ba,vS="__reactHandles$"+ba;function us(t){var e=t[ji];if(e)return e;for(var n=t.parentNode;n;){if(e=n[vr]||n[ji]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=bm(t);t!==null;){if(n=t[ji])return n;t=bm(t)}return e}t=n,n=t.parentNode}return null}function Wo(t){return t=t[ji]||t[vr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ta(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ge(33))}function nu(t){return t[Co]||null}var of=[],na=-1;function es(t){return{current:t}}function jt(t){0>na||(t.current=of[na],of[na]=null,na--)}function zt(t,e){na++,of[na]=t.current,t.current=e}var Kr={},kn=es(Kr),Jn=es(!1),vs=Kr;function xa(t,e){var n=t.type.contextTypes;if(!n)return Kr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Zn(t){return t=t.childContextTypes,t!=null}function Cc(){jt(Jn),jt(kn)}function Nm(t,e,n){if(kn.current!==Kr)throw Error(ge(168));zt(kn,e),zt(Jn,n)}function xv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ge(108,ty(t)||"Unknown",r));return Qt({},n,i)}function Rc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Kr,vs=kn.current,zt(kn,t),zt(Jn,Jn.current),!0}function Pm(t,e,n){var i=t.stateNode;if(!i)throw Error(ge(169));n?(t=xv(t,e,vs),i.__reactInternalMemoizedMergedChildContext=t,jt(Jn),jt(kn),zt(kn,t)):jt(Jn),zt(Jn,n)}var cr=null,iu=!1,Hu=!1;function _v(t){cr===null?cr=[t]:cr.push(t)}function xS(t){iu=!0,_v(t)}function ts(){if(!Hu&&cr!==null){Hu=!0;var t=0,e=Ot;try{var n=cr;for(Ot=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}cr=null,iu=!1}catch(r){throw cr!==null&&(cr=cr.slice(t+1)),Wg(Nh,ts),r}finally{Ot=e,Hu=!1}}return null}var ia=[],ra=0,bc=null,Nc=0,xi=[],_i=0,xs=null,ur=1,dr="";function ls(t,e){ia[ra++]=Nc,ia[ra++]=bc,bc=t,Nc=e}function yv(t,e,n){xi[_i++]=ur,xi[_i++]=dr,xi[_i++]=xs,xs=t;var i=ur;t=dr;var r=32-Ui(i)-1;i&=~(1<<r),n+=1;var s=32-Ui(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,ur=1<<32-Ui(e)+r|n<<r|i,dr=s+t}else ur=1<<s|n<<r|i,dr=t}function Bh(t){t.return!==null&&(ls(t,1),yv(t,1,0))}function zh(t){for(;t===bc;)bc=ia[--ra],ia[ra]=null,Nc=ia[--ra],ia[ra]=null;for(;t===xs;)xs=xi[--_i],xi[_i]=null,dr=xi[--_i],xi[_i]=null,ur=xi[--_i],xi[_i]=null}var ui=null,ci=null,Yt=!1,Ii=null;function Sv(t,e){var n=yi(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Im(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ui=t,ci=Wr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ui=t,ci=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=xs!==null?{id:ur,overflow:dr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=yi(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ui=t,ci=null,!0):!1;default:return!1}}function lf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function cf(t){if(Yt){var e=ci;if(e){var n=e;if(!Im(t,e)){if(lf(t))throw Error(ge(418));e=Wr(n.nextSibling);var i=ui;e&&Im(t,e)?Sv(i,n):(t.flags=t.flags&-4097|2,Yt=!1,ui=t)}}else{if(lf(t))throw Error(ge(418));t.flags=t.flags&-4097|2,Yt=!1,ui=t}}}function Lm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ui=t}function xl(t){if(t!==ui)return!1;if(!Yt)return Lm(t),Yt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!rf(t.type,t.memoizedProps)),e&&(e=ci)){if(lf(t))throw Mv(),Error(ge(418));for(;e;)Sv(t,e),e=Wr(e.nextSibling)}if(Lm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ge(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ci=Wr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ci=null}}else ci=ui?Wr(t.stateNode.nextSibling):null;return!0}function Mv(){for(var t=ci;t;)t=Wr(t.nextSibling)}function _a(){ci=ui=null,Yt=!1}function Gh(t){Ii===null?Ii=[t]:Ii.push(t)}var _S=Sr.ReactCurrentBatchConfig;function za(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ge(309));var i=n.stateNode}if(!i)throw Error(ge(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ge(284));if(!n._owner)throw Error(ge(290,t))}return t}function _l(t,e){throw t=Object.prototype.toString.call(e),Error(ge(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Dm(t){var e=t._init;return e(t._payload)}function Ev(t){function e(d,v){if(t){var E=d.deletions;E===null?(d.deletions=[v],d.flags|=16):E.push(v)}}function n(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=qr(d,v),d.index=0,d.sibling=null,d}function s(d,v,E){return d.index=E,t?(E=d.alternate,E!==null?(E=E.index,E<v?(d.flags|=2,v):E):(d.flags|=2,v)):(d.flags|=1048576,v)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,v,E,M){return v===null||v.tag!==6?(v=$u(E,d.mode,M),v.return=d,v):(v=r(v,E),v.return=d,v)}function l(d,v,E,M){var T=E.type;return T===Js?f(d,v,E.props.children,M,E.key):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Nr&&Dm(T)===v.type)?(M=r(v,E.props),M.ref=za(d,v,E),M.return=d,M):(M=lc(E.type,E.key,E.props,null,d.mode,M),M.ref=za(d,v,E),M.return=d,M)}function c(d,v,E,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==E.containerInfo||v.stateNode.implementation!==E.implementation?(v=Ku(E,d.mode,M),v.return=d,v):(v=r(v,E.children||[]),v.return=d,v)}function f(d,v,E,M,T){return v===null||v.tag!==7?(v=gs(E,d.mode,M,T),v.return=d,v):(v=r(v,E),v.return=d,v)}function h(d,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return v=$u(""+v,d.mode,E),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ll:return E=lc(v.type,v.key,v.props,null,d.mode,E),E.ref=za(d,null,v),E.return=d,E;case Ks:return v=Ku(v,d.mode,E),v.return=d,v;case Nr:var M=v._init;return h(d,M(v._payload),E)}if(Ja(v)||Ua(v))return v=gs(v,d.mode,E,null),v.return=d,v;_l(d,v)}return null}function u(d,v,E,M){var T=v!==null?v.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return T!==null?null:o(d,v,""+E,M);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ll:return E.key===T?l(d,v,E,M):null;case Ks:return E.key===T?c(d,v,E,M):null;case Nr:return T=E._init,u(d,v,T(E._payload),M)}if(Ja(E)||Ua(E))return T!==null?null:f(d,v,E,M,null);_l(d,E)}return null}function m(d,v,E,M,T){if(typeof M=="string"&&M!==""||typeof M=="number")return d=d.get(E)||null,o(v,d,""+M,T);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ll:return d=d.get(M.key===null?E:M.key)||null,l(v,d,M,T);case Ks:return d=d.get(M.key===null?E:M.key)||null,c(v,d,M,T);case Nr:var w=M._init;return m(d,v,E,w(M._payload),T)}if(Ja(M)||Ua(M))return d=d.get(E)||null,f(v,d,M,T,null);_l(v,M)}return null}function x(d,v,E,M){for(var T=null,w=null,R=v,_=v=0,C=null;R!==null&&_<E.length;_++){R.index>_?(C=R,R=null):C=R.sibling;var I=u(d,R,E[_],M);if(I===null){R===null&&(R=C);break}t&&R&&I.alternate===null&&e(d,R),v=s(I,v,_),w===null?T=I:w.sibling=I,w=I,R=C}if(_===E.length)return n(d,R),Yt&&ls(d,_),T;if(R===null){for(;_<E.length;_++)R=h(d,E[_],M),R!==null&&(v=s(R,v,_),w===null?T=R:w.sibling=R,w=R);return Yt&&ls(d,_),T}for(R=i(d,R);_<E.length;_++)C=m(R,d,_,E[_],M),C!==null&&(t&&C.alternate!==null&&R.delete(C.key===null?_:C.key),v=s(C,v,_),w===null?T=C:w.sibling=C,w=C);return t&&R.forEach(function(U){return e(d,U)}),Yt&&ls(d,_),T}function S(d,v,E,M){var T=Ua(E);if(typeof T!="function")throw Error(ge(150));if(E=T.call(E),E==null)throw Error(ge(151));for(var w=T=null,R=v,_=v=0,C=null,I=E.next();R!==null&&!I.done;_++,I=E.next()){R.index>_?(C=R,R=null):C=R.sibling;var U=u(d,R,I.value,M);if(U===null){R===null&&(R=C);break}t&&R&&U.alternate===null&&e(d,R),v=s(U,v,_),w===null?T=U:w.sibling=U,w=U,R=C}if(I.done)return n(d,R),Yt&&ls(d,_),T;if(R===null){for(;!I.done;_++,I=E.next())I=h(d,I.value,M),I!==null&&(v=s(I,v,_),w===null?T=I:w.sibling=I,w=I);return Yt&&ls(d,_),T}for(R=i(d,R);!I.done;_++,I=E.next())I=m(R,d,_,I.value,M),I!==null&&(t&&I.alternate!==null&&R.delete(I.key===null?_:I.key),v=s(I,v,_),w===null?T=I:w.sibling=I,w=I);return t&&R.forEach(function(O){return e(d,O)}),Yt&&ls(d,_),T}function g(d,v,E,M){if(typeof E=="object"&&E!==null&&E.type===Js&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case ll:e:{for(var T=E.key,w=v;w!==null;){if(w.key===T){if(T=E.type,T===Js){if(w.tag===7){n(d,w.sibling),v=r(w,E.props.children),v.return=d,d=v;break e}}else if(w.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Nr&&Dm(T)===w.type){n(d,w.sibling),v=r(w,E.props),v.ref=za(d,w,E),v.return=d,d=v;break e}n(d,w);break}else e(d,w);w=w.sibling}E.type===Js?(v=gs(E.props.children,d.mode,M,E.key),v.return=d,d=v):(M=lc(E.type,E.key,E.props,null,d.mode,M),M.ref=za(d,v,E),M.return=d,d=M)}return a(d);case Ks:e:{for(w=E.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===E.containerInfo&&v.stateNode.implementation===E.implementation){n(d,v.sibling),v=r(v,E.children||[]),v.return=d,d=v;break e}else{n(d,v);break}else e(d,v);v=v.sibling}v=Ku(E,d.mode,M),v.return=d,d=v}return a(d);case Nr:return w=E._init,g(d,v,w(E._payload),M)}if(Ja(E))return x(d,v,E,M);if(Ua(E))return S(d,v,E,M);_l(d,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,v!==null&&v.tag===6?(n(d,v.sibling),v=r(v,E),v.return=d,d=v):(n(d,v),v=$u(E,d.mode,M),v.return=d,d=v),a(d)):n(d,v)}return g}var ya=Ev(!0),wv=Ev(!1),Pc=es(null),Ic=null,sa=null,Hh=null;function Vh(){Hh=sa=Ic=null}function Wh(t){var e=Pc.current;jt(Pc),t._currentValue=e}function uf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ha(t,e){Ic=t,Hh=sa=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Kn=!0),t.firstContext=null)}function Mi(t){var e=t._currentValue;if(Hh!==t)if(t={context:t,memoizedValue:e,next:null},sa===null){if(Ic===null)throw Error(ge(308));sa=t,Ic.dependencies={lanes:0,firstContext:t}}else sa=sa.next=t;return e}var ds=null;function jh(t){ds===null?ds=[t]:ds.push(t)}function Tv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,jh(e)):(n.next=r.next,r.next=n),e.interleaved=n,xr(t,i)}function xr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Pr=!1;function Xh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Av(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function jr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ct&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,xr(t,n)}return r=i.interleaved,r===null?(e.next=e,jh(i)):(e.next=r.next,r.next=e),i.interleaved=e,xr(t,n)}function nc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ph(t,n)}}function Um(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Lc(t,e,n,i){var r=t.updateQueue;Pr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,f=c=l=null,o=s;do{var u=o.lane,m=o.eventTime;if((i&u)===u){f!==null&&(f=f.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=t,S=o;switch(u=e,m=n,S.tag){case 1:if(x=S.payload,typeof x=="function"){h=x.call(m,h,u);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=S.payload,u=typeof x=="function"?x.call(m,h,u):x,u==null)break e;h=Qt({},h,u);break e;case 2:Pr=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[o]:u.push(o))}else m={eventTime:m,lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=m,l=h):f=f.next=m,a|=u;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;u=o,o=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ys|=a,t.lanes=a,t.memoizedState=h}}function Om(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ge(191,r));r.call(i)}}}var jo={},$i=es(jo),Ro=es(jo),bo=es(jo);function fs(t){if(t===jo)throw Error(ge(174));return t}function Yh(t,e){switch(zt(bo,e),zt(Ro,t),zt($i,jo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Vd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Vd(e,t)}jt($i),zt($i,e)}function Sa(){jt($i),jt(Ro),jt(bo)}function Cv(t){fs(bo.current);var e=fs($i.current),n=Vd(e,t.type);e!==n&&(zt(Ro,t),zt($i,n))}function qh(t){Ro.current===t&&(jt($i),jt(Ro))}var Kt=es(0);function Dc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Vu=[];function $h(){for(var t=0;t<Vu.length;t++)Vu[t]._workInProgressVersionPrimary=null;Vu.length=0}var ic=Sr.ReactCurrentDispatcher,Wu=Sr.ReactCurrentBatchConfig,_s=0,Zt=null,un=null,vn=null,Uc=!1,lo=!1,No=0,yS=0;function Nn(){throw Error(ge(321))}function Kh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ki(t[n],e[n]))return!1;return!0}function Jh(t,e,n,i,r,s){if(_s=s,Zt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ic.current=t===null||t.memoizedState===null?wS:TS,t=n(i,r),lo){s=0;do{if(lo=!1,No=0,25<=s)throw Error(ge(301));s+=1,vn=un=null,e.updateQueue=null,ic.current=AS,t=n(i,r)}while(lo)}if(ic.current=Oc,e=un!==null&&un.next!==null,_s=0,vn=un=Zt=null,Uc=!1,e)throw Error(ge(300));return t}function Zh(){var t=No!==0;return No=0,t}function Vi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?Zt.memoizedState=vn=t:vn=vn.next=t,vn}function Ei(){if(un===null){var t=Zt.alternate;t=t!==null?t.memoizedState:null}else t=un.next;var e=vn===null?Zt.memoizedState:vn.next;if(e!==null)vn=e,un=t;else{if(t===null)throw Error(ge(310));un=t,t={memoizedState:un.memoizedState,baseState:un.baseState,baseQueue:un.baseQueue,queue:un.queue,next:null},vn===null?Zt.memoizedState=vn=t:vn=vn.next=t}return vn}function Po(t,e){return typeof e=="function"?e(t):e}function ju(t){var e=Ei(),n=e.queue;if(n===null)throw Error(ge(311));n.lastRenderedReducer=t;var i=un,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var f=c.lane;if((_s&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,Zt.lanes|=f,ys|=f}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,ki(i,e.memoizedState)||(Kn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Zt.lanes|=s,ys|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Xu(t){var e=Ei(),n=e.queue;if(n===null)throw Error(ge(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);ki(s,e.memoizedState)||(Kn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Rv(){}function bv(t,e){var n=Zt,i=Ei(),r=e(),s=!ki(i.memoizedState,r);if(s&&(i.memoizedState=r,Kn=!0),i=i.queue,Qh(Iv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||vn!==null&&vn.memoizedState.tag&1){if(n.flags|=2048,Io(9,Pv.bind(null,n,i,r,e),void 0,null),_n===null)throw Error(ge(349));_s&30||Nv(n,e,r)}return r}function Nv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Zt.updateQueue,e===null?(e={lastEffect:null,stores:null},Zt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Pv(t,e,n,i){e.value=n,e.getSnapshot=i,Lv(e)&&Dv(t)}function Iv(t,e,n){return n(function(){Lv(e)&&Dv(t)})}function Lv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ki(t,n)}catch{return!0}}function Dv(t){var e=xr(t,1);e!==null&&Oi(e,t,1,-1)}function Fm(t){var e=Vi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:t},e.queue=t,t=t.dispatch=ES.bind(null,Zt,t),[e.memoizedState,t]}function Io(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Zt.updateQueue,e===null?(e={lastEffect:null,stores:null},Zt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Uv(){return Ei().memoizedState}function rc(t,e,n,i){var r=Vi();Zt.flags|=t,r.memoizedState=Io(1|e,n,void 0,i===void 0?null:i)}function ru(t,e,n,i){var r=Ei();i=i===void 0?null:i;var s=void 0;if(un!==null){var a=un.memoizedState;if(s=a.destroy,i!==null&&Kh(i,a.deps)){r.memoizedState=Io(e,n,s,i);return}}Zt.flags|=t,r.memoizedState=Io(1|e,n,s,i)}function km(t,e){return rc(8390656,8,t,e)}function Qh(t,e){return ru(2048,8,t,e)}function Ov(t,e){return ru(4,2,t,e)}function Fv(t,e){return ru(4,4,t,e)}function kv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Bv(t,e,n){return n=n!=null?n.concat([t]):null,ru(4,4,kv.bind(null,e,t),n)}function ep(){}function zv(t,e){var n=Ei();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Kh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Gv(t,e){var n=Ei();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Kh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Hv(t,e,n){return _s&21?(ki(n,e)||(n=Yg(),Zt.lanes|=n,ys|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Kn=!0),t.memoizedState=n)}function SS(t,e){var n=Ot;Ot=n!==0&&4>n?n:4,t(!0);var i=Wu.transition;Wu.transition={};try{t(!1),e()}finally{Ot=n,Wu.transition=i}}function Vv(){return Ei().memoizedState}function MS(t,e,n){var i=Yr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Wv(t))jv(e,n);else if(n=Tv(t,e,n,i),n!==null){var r=Wn();Oi(n,t,i,r),Xv(n,e,i)}}function ES(t,e,n){var i=Yr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wv(t))jv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,ki(o,a)){var l=e.interleaved;l===null?(r.next=r,jh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Tv(t,e,r,i),n!==null&&(r=Wn(),Oi(n,t,i,r),Xv(n,e,i))}}function Wv(t){var e=t.alternate;return t===Zt||e!==null&&e===Zt}function jv(t,e){lo=Uc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Xv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ph(t,n)}}var Oc={readContext:Mi,useCallback:Nn,useContext:Nn,useEffect:Nn,useImperativeHandle:Nn,useInsertionEffect:Nn,useLayoutEffect:Nn,useMemo:Nn,useReducer:Nn,useRef:Nn,useState:Nn,useDebugValue:Nn,useDeferredValue:Nn,useTransition:Nn,useMutableSource:Nn,useSyncExternalStore:Nn,useId:Nn,unstable_isNewReconciler:!1},wS={readContext:Mi,useCallback:function(t,e){return Vi().memoizedState=[t,e===void 0?null:e],t},useContext:Mi,useEffect:km,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,rc(4194308,4,kv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return rc(4194308,4,t,e)},useInsertionEffect:function(t,e){return rc(4,2,t,e)},useMemo:function(t,e){var n=Vi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Vi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=MS.bind(null,Zt,t),[i.memoizedState,t]},useRef:function(t){var e=Vi();return t={current:t},e.memoizedState=t},useState:Fm,useDebugValue:ep,useDeferredValue:function(t){return Vi().memoizedState=t},useTransition:function(){var t=Fm(!1),e=t[0];return t=SS.bind(null,t[1]),Vi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Zt,r=Vi();if(Yt){if(n===void 0)throw Error(ge(407));n=n()}else{if(n=e(),_n===null)throw Error(ge(349));_s&30||Nv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,km(Iv.bind(null,i,s,t),[t]),i.flags|=2048,Io(9,Pv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Vi(),e=_n.identifierPrefix;if(Yt){var n=dr,i=ur;n=(i&~(1<<32-Ui(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=No++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=yS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},TS={readContext:Mi,useCallback:zv,useContext:Mi,useEffect:Qh,useImperativeHandle:Bv,useInsertionEffect:Ov,useLayoutEffect:Fv,useMemo:Gv,useReducer:ju,useRef:Uv,useState:function(){return ju(Po)},useDebugValue:ep,useDeferredValue:function(t){var e=Ei();return Hv(e,un.memoizedState,t)},useTransition:function(){var t=ju(Po)[0],e=Ei().memoizedState;return[t,e]},useMutableSource:Rv,useSyncExternalStore:bv,useId:Vv,unstable_isNewReconciler:!1},AS={readContext:Mi,useCallback:zv,useContext:Mi,useEffect:Qh,useImperativeHandle:Bv,useInsertionEffect:Ov,useLayoutEffect:Fv,useMemo:Gv,useReducer:Xu,useRef:Uv,useState:function(){return Xu(Po)},useDebugValue:ep,useDeferredValue:function(t){var e=Ei();return un===null?e.memoizedState=t:Hv(e,un.memoizedState,t)},useTransition:function(){var t=Xu(Po)[0],e=Ei().memoizedState;return[t,e]},useMutableSource:Rv,useSyncExternalStore:bv,useId:Vv,unstable_isNewReconciler:!1};function Ni(t,e){if(t&&t.defaultProps){e=Qt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function df(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Qt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var su={isMounted:function(t){return(t=t._reactInternals)?As(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Wn(),r=Yr(t),s=hr(i,r);s.payload=e,n!=null&&(s.callback=n),e=jr(t,s,r),e!==null&&(Oi(e,t,r,i),nc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Wn(),r=Yr(t),s=hr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=jr(t,s,r),e!==null&&(Oi(e,t,r,i),nc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Wn(),i=Yr(t),r=hr(n,i);r.tag=2,e!=null&&(r.callback=e),e=jr(t,r,i),e!==null&&(Oi(e,t,i,n),nc(e,t,i))}};function Bm(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!wo(n,i)||!wo(r,s):!0}function Yv(t,e,n){var i=!1,r=Kr,s=e.contextType;return typeof s=="object"&&s!==null?s=Mi(s):(r=Zn(e)?vs:kn.current,i=e.contextTypes,s=(i=i!=null)?xa(t,r):Kr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=su,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function zm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&su.enqueueReplaceState(e,e.state,null)}function ff(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Xh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Mi(s):(s=Zn(e)?vs:kn.current,r.context=xa(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(df(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&su.enqueueReplaceState(r,r.state,null),Lc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ma(t,e){try{var n="",i=e;do n+=ey(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Yu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function hf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var CS=typeof WeakMap=="function"?WeakMap:Map;function qv(t,e,n){n=hr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){kc||(kc=!0,Ef=i),hf(t,e)},n}function $v(t,e,n){n=hr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){hf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){hf(t,e),typeof i!="function"&&(Xr===null?Xr=new Set([this]):Xr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Gm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new CS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=GS.bind(null,t,e,n),e.then(t,t))}function Hm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Vm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hr(-1,1),e.tag=2,jr(n,e,1))),n.lanes|=1),t)}var RS=Sr.ReactCurrentOwner,Kn=!1;function Vn(t,e,n,i){e.child=t===null?wv(e,null,n,i):ya(e,t.child,n,i)}function Wm(t,e,n,i,r){n=n.render;var s=e.ref;return ha(e,r),i=Jh(t,e,n,i,s,r),n=Zh(),t!==null&&!Kn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,_r(t,e,r)):(Yt&&n&&Bh(e),e.flags|=1,Vn(t,e,i,r),e.child)}function jm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!lp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Kv(t,e,s,i,r)):(t=lc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:wo,n(a,i)&&t.ref===e.ref)return _r(t,e,r)}return e.flags|=1,t=qr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Kv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(wo(s,i)&&t.ref===e.ref)if(Kn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Kn=!0);else return e.lanes=t.lanes,_r(t,e,r)}return pf(t,e,n,i,r)}function Jv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},zt(oa,si),si|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,zt(oa,si),si|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,zt(oa,si),si|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,zt(oa,si),si|=i;return Vn(t,e,r,n),e.child}function Zv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function pf(t,e,n,i,r){var s=Zn(n)?vs:kn.current;return s=xa(e,s),ha(e,r),n=Jh(t,e,n,i,s,r),i=Zh(),t!==null&&!Kn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,_r(t,e,r)):(Yt&&i&&Bh(e),e.flags|=1,Vn(t,e,n,r),e.child)}function Xm(t,e,n,i,r){if(Zn(n)){var s=!0;Rc(e)}else s=!1;if(ha(e,r),e.stateNode===null)sc(t,e),Yv(e,n,i),ff(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Mi(c):(c=Zn(n)?vs:kn.current,c=xa(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&zm(e,a,i,c),Pr=!1;var u=e.memoizedState;a.state=u,Lc(e,i,a,r),l=e.memoizedState,o!==i||u!==l||Jn.current||Pr?(typeof f=="function"&&(df(e,n,f,i),l=e.memoizedState),(o=Pr||Bm(e,n,o,i,u,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Av(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Ni(e.type,o),a.props=c,h=e.pendingProps,u=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Mi(l):(l=Zn(n)?vs:kn.current,l=xa(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||u!==l)&&zm(e,a,i,l),Pr=!1,u=e.memoizedState,a.state=u,Lc(e,i,a,r);var x=e.memoizedState;o!==h||u!==x||Jn.current||Pr?(typeof m=="function"&&(df(e,n,m,i),x=e.memoizedState),(c=Pr||Bm(e,n,c,i,u,x,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,x,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),a.props=i,a.state=x,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return mf(t,e,n,i,s,r)}function mf(t,e,n,i,r,s){Zv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Pm(e,n,!1),_r(t,e,s);i=e.stateNode,RS.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=ya(e,t.child,null,s),e.child=ya(e,null,o,s)):Vn(t,e,o,s),e.memoizedState=i.state,r&&Pm(e,n,!0),e.child}function Qv(t){var e=t.stateNode;e.pendingContext?Nm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Nm(t,e.context,!1),Yh(t,e.containerInfo)}function Ym(t,e,n,i,r){return _a(),Gh(r),e.flags|=256,Vn(t,e,n,i),e.child}var gf={dehydrated:null,treeContext:null,retryLane:0};function vf(t){return{baseLanes:t,cachePool:null,transitions:null}}function ex(t,e,n){var i=e.pendingProps,r=Kt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),zt(Kt,r&1),t===null)return cf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=lu(a,i,0,null),t=gs(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=vf(n),e.memoizedState=gf,t):tp(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return bS(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=qr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=qr(o,s):(s=gs(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?vf(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=gf,i}return s=t.child,t=s.sibling,i=qr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function tp(t,e){return e=lu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function yl(t,e,n,i){return i!==null&&Gh(i),ya(e,t.child,null,n),t=tp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function bS(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Yu(Error(ge(422))),yl(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=lu({mode:"visible",children:i.children},r,0,null),s=gs(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ya(e,t.child,null,a),e.child.memoizedState=vf(a),e.memoizedState=gf,s);if(!(e.mode&1))return yl(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ge(419)),i=Yu(s,i,void 0),yl(t,e,a,i)}if(o=(a&t.childLanes)!==0,Kn||o){if(i=_n,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,xr(t,r),Oi(i,t,r,-1))}return op(),i=Yu(Error(ge(421))),yl(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=HS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,ci=Wr(r.nextSibling),ui=e,Yt=!0,Ii=null,t!==null&&(xi[_i++]=ur,xi[_i++]=dr,xi[_i++]=xs,ur=t.id,dr=t.overflow,xs=e),e=tp(e,i.children),e.flags|=4096,e)}function qm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),uf(t.return,e,n)}function qu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function tx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Vn(t,e,i.children,n),i=Kt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qm(t,n,e);else if(t.tag===19)qm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(zt(Kt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Dc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),qu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Dc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}qu(e,!0,n,null,s);break;case"together":qu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function sc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function _r(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ys|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ge(153));if(e.child!==null){for(t=e.child,n=qr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=qr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function NS(t,e,n){switch(e.tag){case 3:Qv(e),_a();break;case 5:Cv(e);break;case 1:Zn(e.type)&&Rc(e);break;case 4:Yh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;zt(Pc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(zt(Kt,Kt.current&1),e.flags|=128,null):n&e.child.childLanes?ex(t,e,n):(zt(Kt,Kt.current&1),t=_r(t,e,n),t!==null?t.sibling:null);zt(Kt,Kt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return tx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),zt(Kt,Kt.current),i)break;return null;case 22:case 23:return e.lanes=0,Jv(t,e,n)}return _r(t,e,n)}var nx,xf,ix,rx;nx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xf=function(){};ix=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,fs($i.current);var s=null;switch(n){case"input":r=Bd(t,r),i=Bd(t,i),s=[];break;case"select":r=Qt({},r,{value:void 0}),i=Qt({},i,{value:void 0}),s=[];break;case"textarea":r=Hd(t,r),i=Hd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ac)}Wd(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(vo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(vo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Vt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};rx=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ga(t,e){if(!Yt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Pn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function PS(t,e,n){var i=e.pendingProps;switch(zh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pn(e),null;case 1:return Zn(e.type)&&Cc(),Pn(e),null;case 3:return i=e.stateNode,Sa(),jt(Jn),jt(kn),$h(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(xl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ii!==null&&(Af(Ii),Ii=null))),xf(t,e),Pn(e),null;case 5:qh(e);var r=fs(bo.current);if(n=e.type,t!==null&&e.stateNode!=null)ix(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ge(166));return Pn(e),null}if(t=fs($i.current),xl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ji]=e,i[Co]=s,t=(e.mode&1)!==0,n){case"dialog":Vt("cancel",i),Vt("close",i);break;case"iframe":case"object":case"embed":Vt("load",i);break;case"video":case"audio":for(r=0;r<Qa.length;r++)Vt(Qa[r],i);break;case"source":Vt("error",i);break;case"img":case"image":case"link":Vt("error",i),Vt("load",i);break;case"details":Vt("toggle",i);break;case"input":im(i,s),Vt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Vt("invalid",i);break;case"textarea":sm(i,s),Vt("invalid",i)}Wd(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&vl(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&vl(i.textContent,o,t),r=["children",""+o]):vo.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&Vt("scroll",i)}switch(n){case"input":cl(i),rm(i,s,!0);break;case"textarea":cl(i),am(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ac)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ig(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ji]=e,t[Co]=i,nx(t,e,!1,!1),e.stateNode=t;e:{switch(a=jd(n,i),n){case"dialog":Vt("cancel",t),Vt("close",t),r=i;break;case"iframe":case"object":case"embed":Vt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Qa.length;r++)Vt(Qa[r],t);r=i;break;case"source":Vt("error",t),r=i;break;case"img":case"image":case"link":Vt("error",t),Vt("load",t),r=i;break;case"details":Vt("toggle",t),r=i;break;case"input":im(t,i),r=Bd(t,i),Vt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Qt({},i,{value:void 0}),Vt("invalid",t);break;case"textarea":sm(t,i),r=Hd(t,i),Vt("invalid",t);break;default:r=i}Wd(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Ug(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Lg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&xo(t,l):typeof l=="number"&&xo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(vo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Vt("scroll",t):l!=null&&Th(t,s,l,a))}switch(n){case"input":cl(t),rm(t,i,!1);break;case"textarea":cl(t),am(t);break;case"option":i.value!=null&&t.setAttribute("value",""+$r(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ca(t,!!i.multiple,s,!1):i.defaultValue!=null&&ca(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ac)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Pn(e),null;case 6:if(t&&e.stateNode!=null)rx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ge(166));if(n=fs(bo.current),fs($i.current),xl(e)){if(i=e.stateNode,n=e.memoizedProps,i[ji]=e,(s=i.nodeValue!==n)&&(t=ui,t!==null))switch(t.tag){case 3:vl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&vl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ji]=e,e.stateNode=i}return Pn(e),null;case 13:if(jt(Kt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Yt&&ci!==null&&e.mode&1&&!(e.flags&128))Mv(),_a(),e.flags|=98560,s=!1;else if(s=xl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ge(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ge(317));s[ji]=e}else _a(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Pn(e),s=!1}else Ii!==null&&(Af(Ii),Ii=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Kt.current&1?dn===0&&(dn=3):op())),e.updateQueue!==null&&(e.flags|=4),Pn(e),null);case 4:return Sa(),xf(t,e),t===null&&To(e.stateNode.containerInfo),Pn(e),null;case 10:return Wh(e.type._context),Pn(e),null;case 17:return Zn(e.type)&&Cc(),Pn(e),null;case 19:if(jt(Kt),s=e.memoizedState,s===null)return Pn(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Ga(s,!1);else{if(dn!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Dc(t),a!==null){for(e.flags|=128,Ga(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return zt(Kt,Kt.current&1|2),e.child}t=t.sibling}s.tail!==null&&sn()>Ea&&(e.flags|=128,i=!0,Ga(s,!1),e.lanes=4194304)}else{if(!i)if(t=Dc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ga(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Yt)return Pn(e),null}else 2*sn()-s.renderingStartTime>Ea&&n!==1073741824&&(e.flags|=128,i=!0,Ga(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=sn(),e.sibling=null,n=Kt.current,zt(Kt,i?n&1|2:n&1),e):(Pn(e),null);case 22:case 23:return ap(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?si&1073741824&&(Pn(e),e.subtreeFlags&6&&(e.flags|=8192)):Pn(e),null;case 24:return null;case 25:return null}throw Error(ge(156,e.tag))}function IS(t,e){switch(zh(e),e.tag){case 1:return Zn(e.type)&&Cc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Sa(),jt(Jn),jt(kn),$h(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return qh(e),null;case 13:if(jt(Kt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ge(340));_a()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return jt(Kt),null;case 4:return Sa(),null;case 10:return Wh(e.type._context),null;case 22:case 23:return ap(),null;case 24:return null;default:return null}}var Sl=!1,On=!1,LS=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function aa(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){tn(t,e,i)}else n.current=null}function _f(t,e,n){try{n()}catch(i){tn(t,e,i)}}var $m=!1;function DS(t,e){if(tf=Ec,t=cv(),kh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,f=0,h=t,u=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(m=h.firstChild)!==null;)u=h,h=m;for(;;){if(h===t)break t;if(u===n&&++c===r&&(o=a),u===s&&++f===i&&(l=a),(m=h.nextSibling)!==null)break;h=u,u=h.parentNode}h=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(nf={focusedElem:t,selectionRange:n},Ec=!1,Ge=e;Ge!==null;)if(e=Ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ge=t;else for(;Ge!==null;){e=Ge;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var S=x.memoizedProps,g=x.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?S:Ni(e.type,S),g);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ge(163))}}catch(M){tn(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Ge=t;break}Ge=e.return}return x=$m,$m=!1,x}function co(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&_f(e,n,s)}r=r.next}while(r!==i)}}function au(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function yf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function sx(t){var e=t.alternate;e!==null&&(t.alternate=null,sx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ji],delete e[Co],delete e[af],delete e[gS],delete e[vS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ax(t){return t.tag===5||t.tag===3||t.tag===4}function Km(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ax(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ac));else if(i!==4&&(t=t.child,t!==null))for(Sf(t,e,n),t=t.sibling;t!==null;)Sf(t,e,n),t=t.sibling}function Mf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Mf(t,e,n),t=t.sibling;t!==null;)Mf(t,e,n),t=t.sibling}var Tn=null,Pi=!1;function wr(t,e,n){for(n=n.child;n!==null;)ox(t,e,n),n=n.sibling}function ox(t,e,n){if(qi&&typeof qi.onCommitFiberUnmount=="function")try{qi.onCommitFiberUnmount(Zc,n)}catch{}switch(n.tag){case 5:On||aa(n,e);case 6:var i=Tn,r=Pi;Tn=null,wr(t,e,n),Tn=i,Pi=r,Tn!==null&&(Pi?(t=Tn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Tn.removeChild(n.stateNode));break;case 18:Tn!==null&&(Pi?(t=Tn,n=n.stateNode,t.nodeType===8?Gu(t.parentNode,n):t.nodeType===1&&Gu(t,n),Mo(t)):Gu(Tn,n.stateNode));break;case 4:i=Tn,r=Pi,Tn=n.stateNode.containerInfo,Pi=!0,wr(t,e,n),Tn=i,Pi=r;break;case 0:case 11:case 14:case 15:if(!On&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&_f(n,e,a),r=r.next}while(r!==i)}wr(t,e,n);break;case 1:if(!On&&(aa(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){tn(n,e,o)}wr(t,e,n);break;case 21:wr(t,e,n);break;case 22:n.mode&1?(On=(i=On)||n.memoizedState!==null,wr(t,e,n),On=i):wr(t,e,n);break;default:wr(t,e,n)}}function Jm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new LS),e.forEach(function(i){var r=VS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Ai(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Tn=o.stateNode,Pi=!1;break e;case 3:Tn=o.stateNode.containerInfo,Pi=!0;break e;case 4:Tn=o.stateNode.containerInfo,Pi=!0;break e}o=o.return}if(Tn===null)throw Error(ge(160));ox(s,a,r),Tn=null,Pi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){tn(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)lx(e,t),e=e.sibling}function lx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ai(e,t),zi(t),i&4){try{co(3,t,t.return),au(3,t)}catch(S){tn(t,t.return,S)}try{co(5,t,t.return)}catch(S){tn(t,t.return,S)}}break;case 1:Ai(e,t),zi(t),i&512&&n!==null&&aa(n,n.return);break;case 5:if(Ai(e,t),zi(t),i&512&&n!==null&&aa(n,n.return),t.flags&32){var r=t.stateNode;try{xo(r,"")}catch(S){tn(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Ng(r,s),jd(o,a);var c=jd(o,s);for(a=0;a<l.length;a+=2){var f=l[a],h=l[a+1];f==="style"?Ug(r,h):f==="dangerouslySetInnerHTML"?Lg(r,h):f==="children"?xo(r,h):Th(r,f,h,c)}switch(o){case"input":zd(r,s);break;case"textarea":Pg(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ca(r,!!s.multiple,m,!1):u!==!!s.multiple&&(s.defaultValue!=null?ca(r,!!s.multiple,s.defaultValue,!0):ca(r,!!s.multiple,s.multiple?[]:"",!1))}r[Co]=s}catch(S){tn(t,t.return,S)}}break;case 6:if(Ai(e,t),zi(t),i&4){if(t.stateNode===null)throw Error(ge(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){tn(t,t.return,S)}}break;case 3:if(Ai(e,t),zi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Mo(e.containerInfo)}catch(S){tn(t,t.return,S)}break;case 4:Ai(e,t),zi(t);break;case 13:Ai(e,t),zi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(rp=sn())),i&4&&Jm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(On=(c=On)||f,Ai(e,t),On=c):Ai(e,t),zi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Ge=t,f=t.child;f!==null;){for(h=Ge=f;Ge!==null;){switch(u=Ge,m=u.child,u.tag){case 0:case 11:case 14:case 15:co(4,u,u.return);break;case 1:aa(u,u.return);var x=u.stateNode;if(typeof x.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(S){tn(i,n,S)}}break;case 5:aa(u,u.return);break;case 22:if(u.memoizedState!==null){Qm(h);continue}}m!==null?(m.return=u,Ge=m):Qm(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Dg("display",a))}catch(S){tn(t,t.return,S)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(S){tn(t,t.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ai(e,t),zi(t),i&4&&Jm(t);break;case 21:break;default:Ai(e,t),zi(t)}}function zi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ax(n)){var i=n;break e}n=n.return}throw Error(ge(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(xo(r,""),i.flags&=-33);var s=Km(t);Mf(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Km(t);Sf(t,o,a);break;default:throw Error(ge(161))}}catch(l){tn(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function US(t,e,n){Ge=t,cx(t)}function cx(t,e,n){for(var i=(t.mode&1)!==0;Ge!==null;){var r=Ge,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Sl;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||On;o=Sl;var c=On;if(Sl=a,(On=l)&&!c)for(Ge=r;Ge!==null;)a=Ge,l=a.child,a.tag===22&&a.memoizedState!==null?e0(r):l!==null?(l.return=a,Ge=l):e0(r);for(;s!==null;)Ge=s,cx(s),s=s.sibling;Ge=r,Sl=o,On=c}Zm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ge=s):Zm(t)}}function Zm(t){for(;Ge!==null;){var e=Ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:On||au(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!On)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Ni(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Om(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Om(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Mo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ge(163))}On||e.flags&512&&yf(e)}catch(u){tn(e,e.return,u)}}if(e===t){Ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ge=n;break}Ge=e.return}}function Qm(t){for(;Ge!==null;){var e=Ge;if(e===t){Ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ge=n;break}Ge=e.return}}function e0(t){for(;Ge!==null;){var e=Ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{au(4,e)}catch(l){tn(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){tn(e,r,l)}}var s=e.return;try{yf(e)}catch(l){tn(e,s,l)}break;case 5:var a=e.return;try{yf(e)}catch(l){tn(e,a,l)}}}catch(l){tn(e,e.return,l)}if(e===t){Ge=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Ge=o;break}Ge=e.return}}var OS=Math.ceil,Fc=Sr.ReactCurrentDispatcher,np=Sr.ReactCurrentOwner,Si=Sr.ReactCurrentBatchConfig,Ct=0,_n=null,ln=null,Cn=0,si=0,oa=es(0),dn=0,Lo=null,ys=0,ou=0,ip=0,uo=null,qn=null,rp=0,Ea=1/0,lr=null,kc=!1,Ef=null,Xr=null,Ml=!1,zr=null,Bc=0,fo=0,wf=null,ac=-1,oc=0;function Wn(){return Ct&6?sn():ac!==-1?ac:ac=sn()}function Yr(t){return t.mode&1?Ct&2&&Cn!==0?Cn&-Cn:_S.transition!==null?(oc===0&&(oc=Yg()),oc):(t=Ot,t!==0||(t=window.event,t=t===void 0?16:ev(t.type)),t):1}function Oi(t,e,n,i){if(50<fo)throw fo=0,wf=null,Error(ge(185));Ho(t,n,i),(!(Ct&2)||t!==_n)&&(t===_n&&(!(Ct&2)&&(ou|=n),dn===4&&Ur(t,Cn)),Qn(t,i),n===1&&Ct===0&&!(e.mode&1)&&(Ea=sn()+500,iu&&ts()))}function Qn(t,e){var n=t.callbackNode;_y(t,e);var i=Mc(t,t===_n?Cn:0);if(i===0)n!==null&&cm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&cm(n),e===1)t.tag===0?xS(t0.bind(null,t)):_v(t0.bind(null,t)),pS(function(){!(Ct&6)&&ts()}),n=null;else{switch(qg(i)){case 1:n=Nh;break;case 4:n=jg;break;case 16:n=Sc;break;case 536870912:n=Xg;break;default:n=Sc}n=vx(n,ux.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ux(t,e){if(ac=-1,oc=0,Ct&6)throw Error(ge(327));var n=t.callbackNode;if(pa()&&t.callbackNode!==n)return null;var i=Mc(t,t===_n?Cn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=zc(t,i);else{e=i;var r=Ct;Ct|=2;var s=fx();(_n!==t||Cn!==e)&&(lr=null,Ea=sn()+500,ms(t,e));do try{BS();break}catch(o){dx(t,o)}while(!0);Vh(),Fc.current=s,Ct=r,ln!==null?e=0:(_n=null,Cn=0,e=dn)}if(e!==0){if(e===2&&(r=Kd(t),r!==0&&(i=r,e=Tf(t,r))),e===1)throw n=Lo,ms(t,0),Ur(t,i),Qn(t,sn()),n;if(e===6)Ur(t,i);else{if(r=t.current.alternate,!(i&30)&&!FS(r)&&(e=zc(t,i),e===2&&(s=Kd(t),s!==0&&(i=s,e=Tf(t,s))),e===1))throw n=Lo,ms(t,0),Ur(t,i),Qn(t,sn()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ge(345));case 2:cs(t,qn,lr);break;case 3:if(Ur(t,i),(i&130023424)===i&&(e=rp+500-sn(),10<e)){if(Mc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Wn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=sf(cs.bind(null,t,qn,lr),e);break}cs(t,qn,lr);break;case 4:if(Ur(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Ui(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=sn()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*OS(i/1960))-i,10<i){t.timeoutHandle=sf(cs.bind(null,t,qn,lr),i);break}cs(t,qn,lr);break;case 5:cs(t,qn,lr);break;default:throw Error(ge(329))}}}return Qn(t,sn()),t.callbackNode===n?ux.bind(null,t):null}function Tf(t,e){var n=uo;return t.current.memoizedState.isDehydrated&&(ms(t,e).flags|=256),t=zc(t,e),t!==2&&(e=qn,qn=n,e!==null&&Af(e)),t}function Af(t){qn===null?qn=t:qn.push.apply(qn,t)}function FS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ki(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ur(t,e){for(e&=~ip,e&=~ou,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ui(e),i=1<<n;t[n]=-1,e&=~i}}function t0(t){if(Ct&6)throw Error(ge(327));pa();var e=Mc(t,0);if(!(e&1))return Qn(t,sn()),null;var n=zc(t,e);if(t.tag!==0&&n===2){var i=Kd(t);i!==0&&(e=i,n=Tf(t,i))}if(n===1)throw n=Lo,ms(t,0),Ur(t,e),Qn(t,sn()),n;if(n===6)throw Error(ge(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,cs(t,qn,lr),Qn(t,sn()),null}function sp(t,e){var n=Ct;Ct|=1;try{return t(e)}finally{Ct=n,Ct===0&&(Ea=sn()+500,iu&&ts())}}function Ss(t){zr!==null&&zr.tag===0&&!(Ct&6)&&pa();var e=Ct;Ct|=1;var n=Si.transition,i=Ot;try{if(Si.transition=null,Ot=1,t)return t()}finally{Ot=i,Si.transition=n,Ct=e,!(Ct&6)&&ts()}}function ap(){si=oa.current,jt(oa)}function ms(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,hS(n)),ln!==null)for(n=ln.return;n!==null;){var i=n;switch(zh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Cc();break;case 3:Sa(),jt(Jn),jt(kn),$h();break;case 5:qh(i);break;case 4:Sa();break;case 13:jt(Kt);break;case 19:jt(Kt);break;case 10:Wh(i.type._context);break;case 22:case 23:ap()}n=n.return}if(_n=t,ln=t=qr(t.current,null),Cn=si=e,dn=0,Lo=null,ip=ou=ys=0,qn=uo=null,ds!==null){for(e=0;e<ds.length;e++)if(n=ds[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}ds=null}return t}function dx(t,e){do{var n=ln;try{if(Vh(),ic.current=Oc,Uc){for(var i=Zt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Uc=!1}if(_s=0,vn=un=Zt=null,lo=!1,No=0,np.current=null,n===null||n.return===null){dn=1,Lo=e,ln=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Cn,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=o,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var u=f.alternate;u?(f.updateQueue=u.updateQueue,f.memoizedState=u.memoizedState,f.lanes=u.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=Hm(a);if(m!==null){m.flags&=-257,Vm(m,a,o,s,e),m.mode&1&&Gm(s,c,e),e=m,l=c;var x=e.updateQueue;if(x===null){var S=new Set;S.add(l),e.updateQueue=S}else x.add(l);break e}else{if(!(e&1)){Gm(s,c,e),op();break e}l=Error(ge(426))}}else if(Yt&&o.mode&1){var g=Hm(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Vm(g,a,o,s,e),Gh(Ma(l,o));break e}}s=l=Ma(l,o),dn!==4&&(dn=2),uo===null?uo=[s]:uo.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=qv(s,l,e);Um(s,d);break e;case 1:o=l;var v=s.type,E=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(Xr===null||!Xr.has(E)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=$v(s,o,e);Um(s,M);break e}}s=s.return}while(s!==null)}px(n)}catch(T){e=T,ln===n&&n!==null&&(ln=n=n.return);continue}break}while(!0)}function fx(){var t=Fc.current;return Fc.current=Oc,t===null?Oc:t}function op(){(dn===0||dn===3||dn===2)&&(dn=4),_n===null||!(ys&268435455)&&!(ou&268435455)||Ur(_n,Cn)}function zc(t,e){var n=Ct;Ct|=2;var i=fx();(_n!==t||Cn!==e)&&(lr=null,ms(t,e));do try{kS();break}catch(r){dx(t,r)}while(!0);if(Vh(),Ct=n,Fc.current=i,ln!==null)throw Error(ge(261));return _n=null,Cn=0,dn}function kS(){for(;ln!==null;)hx(ln)}function BS(){for(;ln!==null&&!uy();)hx(ln)}function hx(t){var e=gx(t.alternate,t,si);t.memoizedProps=t.pendingProps,e===null?px(t):ln=e,np.current=null}function px(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=IS(n,e),n!==null){n.flags&=32767,ln=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{dn=6,ln=null;return}}else if(n=PS(n,e,si),n!==null){ln=n;return}if(e=e.sibling,e!==null){ln=e;return}ln=e=t}while(e!==null);dn===0&&(dn=5)}function cs(t,e,n){var i=Ot,r=Si.transition;try{Si.transition=null,Ot=1,zS(t,e,n,i)}finally{Si.transition=r,Ot=i}return null}function zS(t,e,n,i){do pa();while(zr!==null);if(Ct&6)throw Error(ge(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ge(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(yy(t,s),t===_n&&(ln=_n=null,Cn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ml||(Ml=!0,vx(Sc,function(){return pa(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Si.transition,Si.transition=null;var a=Ot;Ot=1;var o=Ct;Ct|=4,np.current=null,DS(t,n),lx(n,t),aS(nf),Ec=!!tf,nf=tf=null,t.current=n,US(n),dy(),Ct=o,Ot=a,Si.transition=s}else t.current=n;if(Ml&&(Ml=!1,zr=t,Bc=r),s=t.pendingLanes,s===0&&(Xr=null),py(n.stateNode),Qn(t,sn()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(kc)throw kc=!1,t=Ef,Ef=null,t;return Bc&1&&t.tag!==0&&pa(),s=t.pendingLanes,s&1?t===wf?fo++:(fo=0,wf=t):fo=0,ts(),null}function pa(){if(zr!==null){var t=qg(Bc),e=Si.transition,n=Ot;try{if(Si.transition=null,Ot=16>t?16:t,zr===null)var i=!1;else{if(t=zr,zr=null,Bc=0,Ct&6)throw Error(ge(331));var r=Ct;for(Ct|=4,Ge=t.current;Ge!==null;){var s=Ge,a=s.child;if(Ge.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Ge=c;Ge!==null;){var f=Ge;switch(f.tag){case 0:case 11:case 15:co(8,f,s)}var h=f.child;if(h!==null)h.return=f,Ge=h;else for(;Ge!==null;){f=Ge;var u=f.sibling,m=f.return;if(sx(f),f===c){Ge=null;break}if(u!==null){u.return=m,Ge=u;break}Ge=m}}}var x=s.alternate;if(x!==null){var S=x.child;if(S!==null){x.child=null;do{var g=S.sibling;S.sibling=null,S=g}while(S!==null)}}Ge=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Ge=a;else e:for(;Ge!==null;){if(s=Ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:co(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Ge=d;break e}Ge=s.return}}var v=t.current;for(Ge=v;Ge!==null;){a=Ge;var E=a.child;if(a.subtreeFlags&2064&&E!==null)E.return=a,Ge=E;else e:for(a=v;Ge!==null;){if(o=Ge,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:au(9,o)}}catch(T){tn(o,o.return,T)}if(o===a){Ge=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,Ge=M;break e}Ge=o.return}}if(Ct=r,ts(),qi&&typeof qi.onPostCommitFiberRoot=="function")try{qi.onPostCommitFiberRoot(Zc,t)}catch{}i=!0}return i}finally{Ot=n,Si.transition=e}}return!1}function n0(t,e,n){e=Ma(n,e),e=qv(t,e,1),t=jr(t,e,1),e=Wn(),t!==null&&(Ho(t,1,e),Qn(t,e))}function tn(t,e,n){if(t.tag===3)n0(t,t,n);else for(;e!==null;){if(e.tag===3){n0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Xr===null||!Xr.has(i))){t=Ma(n,t),t=$v(e,t,1),e=jr(e,t,1),t=Wn(),e!==null&&(Ho(e,1,t),Qn(e,t));break}}e=e.return}}function GS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Wn(),t.pingedLanes|=t.suspendedLanes&n,_n===t&&(Cn&n)===n&&(dn===4||dn===3&&(Cn&130023424)===Cn&&500>sn()-rp?ms(t,0):ip|=n),Qn(t,e)}function mx(t,e){e===0&&(t.mode&1?(e=fl,fl<<=1,!(fl&130023424)&&(fl=4194304)):e=1);var n=Wn();t=xr(t,e),t!==null&&(Ho(t,e,n),Qn(t,n))}function HS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),mx(t,n)}function VS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ge(314))}i!==null&&i.delete(e),mx(t,n)}var gx;gx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Jn.current)Kn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Kn=!1,NS(t,e,n);Kn=!!(t.flags&131072)}else Kn=!1,Yt&&e.flags&1048576&&yv(e,Nc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;sc(t,e),t=e.pendingProps;var r=xa(e,kn.current);ha(e,n),r=Jh(null,e,i,t,r,n);var s=Zh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Zn(i)?(s=!0,Rc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Xh(e),r.updater=su,e.stateNode=r,r._reactInternals=e,ff(e,i,t,n),e=mf(null,e,i,!0,s,n)):(e.tag=0,Yt&&s&&Bh(e),Vn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(sc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=jS(i),t=Ni(i,t),r){case 0:e=pf(null,e,i,t,n);break e;case 1:e=Xm(null,e,i,t,n);break e;case 11:e=Wm(null,e,i,t,n);break e;case 14:e=jm(null,e,i,Ni(i.type,t),n);break e}throw Error(ge(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ni(i,r),pf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ni(i,r),Xm(t,e,i,r,n);case 3:e:{if(Qv(e),t===null)throw Error(ge(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Av(t,e),Lc(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ma(Error(ge(423)),e),e=Ym(t,e,i,n,r);break e}else if(i!==r){r=Ma(Error(ge(424)),e),e=Ym(t,e,i,n,r);break e}else for(ci=Wr(e.stateNode.containerInfo.firstChild),ui=e,Yt=!0,Ii=null,n=wv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_a(),i===r){e=_r(t,e,n);break e}Vn(t,e,i,n)}e=e.child}return e;case 5:return Cv(e),t===null&&cf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,rf(i,r)?a=null:s!==null&&rf(i,s)&&(e.flags|=32),Zv(t,e),Vn(t,e,a,n),e.child;case 6:return t===null&&cf(e),null;case 13:return ex(t,e,n);case 4:return Yh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ya(e,null,i,n):Vn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ni(i,r),Wm(t,e,i,r,n);case 7:return Vn(t,e,e.pendingProps,n),e.child;case 8:return Vn(t,e,e.pendingProps.children,n),e.child;case 12:return Vn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,zt(Pc,i._currentValue),i._currentValue=a,s!==null)if(ki(s.value,a)){if(s.children===r.children&&!Jn.current){e=_r(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=hr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),uf(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ge(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),uf(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Vn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ha(e,n),r=Mi(r),i=i(r),e.flags|=1,Vn(t,e,i,n),e.child;case 14:return i=e.type,r=Ni(i,e.pendingProps),r=Ni(i.type,r),jm(t,e,i,r,n);case 15:return Kv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ni(i,r),sc(t,e),e.tag=1,Zn(i)?(t=!0,Rc(e)):t=!1,ha(e,n),Yv(e,i,r),ff(e,i,r,n),mf(null,e,i,!0,t,n);case 19:return tx(t,e,n);case 22:return Jv(t,e,n)}throw Error(ge(156,e.tag))};function vx(t,e){return Wg(t,e)}function WS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yi(t,e,n,i){return new WS(t,e,n,i)}function lp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function jS(t){if(typeof t=="function")return lp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ch)return 11;if(t===Rh)return 14}return 2}function qr(t,e){var n=t.alternate;return n===null?(n=yi(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function lc(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")lp(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Js:return gs(n.children,r,s,e);case Ah:a=8,r|=8;break;case Ud:return t=yi(12,n,e,r|2),t.elementType=Ud,t.lanes=s,t;case Od:return t=yi(13,n,e,r),t.elementType=Od,t.lanes=s,t;case Fd:return t=yi(19,n,e,r),t.elementType=Fd,t.lanes=s,t;case Cg:return lu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Tg:a=10;break e;case Ag:a=9;break e;case Ch:a=11;break e;case Rh:a=14;break e;case Nr:a=16,i=null;break e}throw Error(ge(130,t==null?t:typeof t,""))}return e=yi(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function gs(t,e,n,i){return t=yi(7,t,i,e),t.lanes=n,t}function lu(t,e,n,i){return t=yi(22,t,i,e),t.elementType=Cg,t.lanes=n,t.stateNode={isHidden:!1},t}function $u(t,e,n){return t=yi(6,t,null,e),t.lanes=n,t}function Ku(t,e,n){return e=yi(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function XS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nu(0),this.expirationTimes=Nu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function cp(t,e,n,i,r,s,a,o,l){return t=new XS(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=yi(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xh(s),t}function YS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ks,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function xx(t){if(!t)return Kr;t=t._reactInternals;e:{if(As(t)!==t||t.tag!==1)throw Error(ge(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Zn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ge(171))}if(t.tag===1){var n=t.type;if(Zn(n))return xv(t,n,e)}return e}function _x(t,e,n,i,r,s,a,o,l){return t=cp(n,i,!0,t,r,s,a,o,l),t.context=xx(null),n=t.current,i=Wn(),r=Yr(n),s=hr(i,r),s.callback=e??null,jr(n,s,r),t.current.lanes=r,Ho(t,r,i),Qn(t,i),t}function cu(t,e,n,i){var r=e.current,s=Wn(),a=Yr(r);return n=xx(n),e.context===null?e.context=n:e.pendingContext=n,e=hr(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=jr(r,e,a),t!==null&&(Oi(t,r,a,s),nc(t,r,a)),a}function Gc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function i0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function up(t,e){i0(t,e),(t=t.alternate)&&i0(t,e)}function qS(){return null}var yx=typeof reportError=="function"?reportError:function(t){console.error(t)};function dp(t){this._internalRoot=t}uu.prototype.render=dp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ge(409));cu(t,e,null,null)};uu.prototype.unmount=dp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ss(function(){cu(null,t,null,null)}),e[vr]=null}};function uu(t){this._internalRoot=t}uu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Jg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Dr.length&&e!==0&&e<Dr[n].priority;n++);Dr.splice(n,0,t),n===0&&Qg(t)}};function fp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function du(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function r0(){}function $S(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Gc(a);s.call(c)}}var a=_x(e,i,t,0,null,!1,!1,"",r0);return t._reactRootContainer=a,t[vr]=a.current,To(t.nodeType===8?t.parentNode:t),Ss(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Gc(l);o.call(c)}}var l=cp(t,0,!1,null,null,!1,!1,"",r0);return t._reactRootContainer=l,t[vr]=l.current,To(t.nodeType===8?t.parentNode:t),Ss(function(){cu(e,l,n,i)}),l}function fu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Gc(a);o.call(l)}}cu(e,a,t,r)}else a=$S(n,e,t,r,i);return Gc(a)}$g=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Za(e.pendingLanes);n!==0&&(Ph(e,n|1),Qn(e,sn()),!(Ct&6)&&(Ea=sn()+500,ts()))}break;case 13:Ss(function(){var i=xr(t,1);if(i!==null){var r=Wn();Oi(i,t,1,r)}}),up(t,1)}};Ih=function(t){if(t.tag===13){var e=xr(t,134217728);if(e!==null){var n=Wn();Oi(e,t,134217728,n)}up(t,134217728)}};Kg=function(t){if(t.tag===13){var e=Yr(t),n=xr(t,e);if(n!==null){var i=Wn();Oi(n,t,e,i)}up(t,e)}};Jg=function(){return Ot};Zg=function(t,e){var n=Ot;try{return Ot=t,e()}finally{Ot=n}};Yd=function(t,e,n){switch(e){case"input":if(zd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=nu(i);if(!r)throw Error(ge(90));bg(i),zd(i,r)}}}break;case"textarea":Pg(t,n);break;case"select":e=n.value,e!=null&&ca(t,!!n.multiple,e,!1)}};kg=sp;Bg=Ss;var KS={usingClientEntryPoint:!1,Events:[Wo,ta,nu,Og,Fg,sp]},Ha={findFiberByHostInstance:us,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},JS={bundleType:Ha.bundleType,version:Ha.version,rendererPackageName:Ha.rendererPackageName,rendererConfig:Ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Sr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Hg(t),t===null?null:t.stateNode},findFiberByHostInstance:Ha.findFiberByHostInstance||qS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var El=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!El.isDisabled&&El.supportsFiber)try{Zc=El.inject(JS),qi=El}catch{}}fi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KS;fi.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fp(e))throw Error(ge(200));return YS(t,e,null,n)};fi.createRoot=function(t,e){if(!fp(t))throw Error(ge(299));var n=!1,i="",r=yx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=cp(t,1,!1,null,null,n,!1,i,r),t[vr]=e.current,To(t.nodeType===8?t.parentNode:t),new dp(e)};fi.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ge(188)):(t=Object.keys(t).join(","),Error(ge(268,t)));return t=Hg(e),t=t===null?null:t.stateNode,t};fi.flushSync=function(t){return Ss(t)};fi.hydrate=function(t,e,n){if(!du(e))throw Error(ge(200));return fu(null,t,e,!0,n)};fi.hydrateRoot=function(t,e,n){if(!fp(t))throw Error(ge(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=yx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=_x(e,null,t,1,n??null,r,!1,s,a),t[vr]=e.current,To(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new uu(e)};fi.render=function(t,e,n){if(!du(e))throw Error(ge(200));return fu(null,t,e,!1,n)};fi.unmountComponentAtNode=function(t){if(!du(t))throw Error(ge(40));return t._reactRootContainer?(Ss(function(){fu(null,null,t,!1,function(){t._reactRootContainer=null,t[vr]=null})}),!0):!1};fi.unstable_batchedUpdates=sp;fi.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!du(n))throw Error(ge(200));if(t==null||t._reactInternals===void 0)throw Error(ge(38));return fu(t,e,n,!1,i)};fi.version="18.3.1-next-f1338f8080-20240426";function Sx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sx)}catch(t){console.error(t)}}Sx(),Sg.exports=fi;var ZS=Sg.exports,s0=ZS;Ld.createRoot=s0.createRoot,Ld.hydrateRoot=s0.hydrateRoot;/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Mx=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var eM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tM=ie.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>ie.createElement("svg",{ref:l,...eM,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:Mx("lucide",r),...o},[...a.map(([c,f])=>ie.createElement(c,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=(t,e)=>{const n=ie.forwardRef(({className:i,...r},s)=>ie.createElement(tM,{ref:s,iconNode:e,className:Mx(`lucide-${QS(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=Mt("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=Mt("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nM=Mt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=Mt("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=Mt("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=Mt("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=Mt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=Mt("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=Mt("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=Mt("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sM=Mt("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=Mt("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aM=Mt("Gem",[["path",{d:"M6 3h12l4 6-10 13L2 9Z",key:"1pcd5k"}],["path",{d:"M11 3 8 9l4 13 4-13-3-6",key:"1fcu3u"}],["path",{d:"M2 9h20",key:"16fsjt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=Mt("Hand",[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oM=Mt("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lM=Mt("OctagonAlert",[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=Mt("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=Mt("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=Mt("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju=Mt("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=Mt("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=Mt("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uM=Mt("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=Mt("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=Mt("Skull",[["path",{d:"m12.5 17-.5-1-.5 1h1z",key:"3me087"}],["path",{d:"M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z",key:"1o5pge"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jr=Mt("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=Mt("Swords",[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5",key:"hbey2j"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18",key:"1hf58s"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20",key:"pidxm4"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21",key:"1pehsh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=Mt("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=Mt("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fM=Mt("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hM=Mt("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=Mt("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=Mt("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=Mt("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=Mt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cs=Mt("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),mM=()=>{const t=ie.useRef(null);return ie.useEffect(()=>{const e=t.current;if(!e)return;const n=e.getContext("2d");let i;const r=()=>{var h,u;e.width=((h=e.parentElement)==null?void 0:h.clientWidth)||window.innerWidth,e.height=((u=e.parentElement)==null?void 0:u.clientHeight)||window.innerHeight};r(),window.addEventListener("resize",r);const s=60,a=[];for(let h=0;h<s;h++)a.push({x:Math.random()*(e.width||1024),y:Math.random()*(e.height||576),vx:(Math.random()-.5)*.8,vy:-.3-Math.random()*.9,size:1+Math.random()*2.5,color:Math.random()>.6?"#00f3ff":Math.random()>.4?"#fbbf24":"#f43f5e",opacity:.3+Math.random()*.7,pulseSpeed:.02+Math.random()*.04});let o=0,l=0,c=0;const f=()=>{n.clearRect(0,0,e.width,e.height),c+=.02,o++,o>180&&Math.random()>.95&&(l=.3,o=0),l>0&&(n.fillStyle=`rgba(0, 243, 255, ${l})`,n.fillRect(0,0,e.width,e.height),l-=.03),a.forEach(h=>{h.x+=h.vx,h.y+=h.vy,h.y<-10&&(h.y=e.height+10,h.x=Math.random()*e.width),h.x<-10&&(h.x=e.width+10),h.x>e.width+10&&(h.x=-10),n.save(),n.beginPath(),n.arc(h.x,h.y,h.size,0,Math.PI*2),n.fillStyle=h.color,n.shadowColor=h.color,n.shadowBlur=8,n.globalAlpha=Math.abs(Math.sin(c+h.x))*h.opacity,n.fill(),n.restore()}),i=requestAnimationFrame(f)};return f(),()=>{window.removeEventListener("resize",r),cancelAnimationFrame(i)}},[]),p.jsx("canvas",{ref:t,className:"rs-portal-canvas-overlay"})};class gM{constructor(){this.ctx=null,this.muted=!1}init(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.muted=!this.muted,this.muted}playHover(){if(!this.muted)try{if(this.init(),!this.ctx)return;const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(800,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(1400,this.ctx.currentTime+.05),n.gain.setValueAtTime(.04,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.05),e.connect(n),n.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.05)}catch{}}playClick(){if(!this.muted)try{if(this.init(),!this.ctx)return;const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(1200,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(400,this.ctx.currentTime+.08),n.gain.setValueAtTime(.12,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.08),e.connect(n),n.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.08)}catch{}}playPortalWarp(){if(!this.muted)try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(60,e),n.frequency.exponentialRampToValueAtTime(220,e+.5),n.frequency.exponentialRampToValueAtTime(30,e+1.2),i.gain.setValueAtTime(.25,e),i.gain.exponentialRampToValueAtTime(.001,e+1.2),n.connect(i),i.connect(this.ctx.destination),n.start(),n.stop(e+1.2);const r=this.ctx.createOscillator(),s=this.ctx.createGain();r.type="sawtooth",r.frequency.setValueAtTime(300,e),r.frequency.exponentialRampToValueAtTime(2400,e+.35),r.frequency.exponentialRampToValueAtTime(800,e+.8),s.gain.setValueAtTime(.12,e),s.gain.exponentialRampToValueAtTime(.001,e+.8),r.connect(s),s.connect(this.ctx.destination),r.start(),s.gain.exponentialRampToValueAtTime(.001,e+.8),r.stop(e+.8)}catch{}}playModal(){if(!this.muted)try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime;[440,660,880].forEach((n,i)=>{const r=this.ctx.createOscillator(),s=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(n,e+i*.04),s.gain.setValueAtTime(.06,e+i*.04),s.gain.exponentialRampToValueAtTime(.001,e+i*.04+.15),r.connect(s),s.connect(this.ctx.destination),r.start(e+i*.04),r.stop(e+i*.04+.15)})}catch{}}playPunch(){if(!this.muted)try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(180,e),n.frequency.exponentialRampToValueAtTime(45,e+.12),i.gain.setValueAtTime(.3,e),i.gain.exponentialRampToValueAtTime(.001,e+.12),n.connect(i),i.connect(this.ctx.destination),n.start(e),n.stop(e+.12)}catch{}}playLaserBeam(e=!1){if(!this.muted)try{if(this.init(),!this.ctx)return;const n=this.ctx.currentTime,i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sawtooth";const s=e?1200:850,a=e?180:320,o=e?.45:.22;i.frequency.setValueAtTime(s,n),i.frequency.exponentialRampToValueAtTime(a,n+o),r.gain.setValueAtTime(e?.35:.22,n),r.gain.exponentialRampToValueAtTime(.001,n+o),i.connect(r),r.connect(this.ctx.destination),i.start(n),i.stop(n+o)}catch{}}playThunder(){if(!this.muted)try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(95,e),n.frequency.exponentialRampToValueAtTime(25,e+.65),i.gain.setValueAtTime(.4,e),i.gain.exponentialRampToValueAtTime(.001,e+.65),n.connect(i),i.connect(this.ctx.destination),n.start(e),n.stop(e+.65);const r=this.ctx.createOscillator(),s=this.ctx.createGain();r.type="sawtooth",r.frequency.setValueAtTime(3200,e),r.frequency.exponentialRampToValueAtTime(300,e+.25),s.gain.setValueAtTime(.18,e),s.gain.exponentialRampToValueAtTime(.001,e+.25),r.connect(s),s.connect(this.ctx.destination),r.start(e),r.stop(e+.25)}catch{}}playWebSling(){if(!this.muted)try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(2200,e),n.frequency.exponentialRampToValueAtTime(350,e+.14),i.gain.setValueAtTime(.2,e),i.gain.exponentialRampToValueAtTime(.001,e+.14),n.connect(i),i.connect(this.ctx.destination),n.start(e),n.stop(e+.14)}catch{}}playShieldBlock(){if(!this.muted)try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(1400,e),n.frequency.exponentialRampToValueAtTime(650,e+.25),i.gain.setValueAtTime(.3,e),i.gain.exponentialRampToValueAtTime(.001,e+.25),n.connect(i),i.connect(this.ctx.destination),n.start(e),n.stop(e+.25)}catch{}}playMysticCast(){if(!this.muted)try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((n,i)=>{const r=this.ctx.createOscillator(),s=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(n,e+i*.03),s.gain.setValueAtTime(.12,e+i*.03),s.gain.exponentialRampToValueAtTime(.001,e+i*.03+.3),r.connect(s),s.connect(this.ctx.destination),r.start(e+i*.03),r.stop(e+i*.03+.3)})}catch{}}playExplosion(){if(!this.muted)try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(150,e),n.frequency.exponentialRampToValueAtTime(30,e+.45),i.gain.setValueAtTime(.38,e),i.gain.exponentialRampToValueAtTime(.001,e+.45),n.connect(i),i.connect(this.ctx.destination),n.start(e),n.stop(e+.45)}catch{}}}const Se=new gM,vM=({isOpen:t,onClose:e})=>{if(!t)return null;const n=[{id:"defend",name:"OPEN PALM",action:"= DEFEND",color:"#00f3ff",icon:hp,desc:"Deploy an impenetrable kinetic hardlight shield to deflect incoming enemy attacks."},{id:"charge",name:"CLOSED FIST",action:"= CHARGE",color:"#f97316",icon:Cs,desc:"Channel cosmic bio-electricity into your suit to charge energy for special abilities."},{id:"attack",name:"POINT FORWARD",action:"= ATTACK",color:"#f43f5e",icon:Vc,desc:"Fire laser projectiles or execute high-speed nano-dash strikes against the villain."},{id:"special",name:"TWO HANDS RAISED",action:"= SPECIAL",color:"#a855f7",icon:Jr,desc:"Unleash your hero’s catastrophic ultimate finishing move upon reaching 100% power."}];return p.jsx("div",{className:"rs-modal-overlay",onClick:e,children:p.jsxs("div",{className:"rs-modal-container",onClick:i=>i.stopPropagation(),children:[p.jsxs("div",{className:"rs-modal-header",children:[p.jsxs("div",{className:"rs-modal-title-box",children:[p.jsx(wx,{size:20,className:"rs-modal-title-icon"}),p.jsx("h3",{className:"rs-modal-title",children:"HOW TO PLAY — GESTURE SYSTEM"})]}),p.jsx("button",{className:"rs-modal-close",onClick:()=>{Se.playClick(),e()},children:p.jsx(mp,{size:18})})]}),p.jsxs("div",{className:"rs-modal-body",children:[p.jsxs("div",{className:"rs-quick-steps-bar",children:[p.jsxs("div",{className:"rs-qstep",children:[p.jsx("span",{className:"rs-qnum",children:"1"}),p.jsx(Hc,{size:16}),p.jsx("span",{children:"ALLOW WEBCAM"})]}),p.jsx("div",{className:"rs-qarrow",children:"➔"}),p.jsxs("div",{className:"rs-qstep",children:[p.jsx("span",{className:"rs-qnum",children:"2"}),p.jsx(Cx,{size:16}),p.jsx("span",{children:"POSITION HANDS"})]}),p.jsx("div",{className:"rs-qarrow",children:"➔"}),p.jsxs("div",{className:"rs-qstep",children:[p.jsx("span",{className:"rs-qnum",children:"3"}),p.jsx(pp,{size:16}),p.jsx("span",{children:"FIGHT WITH GESTURES"})]})]}),p.jsx("p",{className:"rs-modal-desc",children:"Use physical hand gestures in front of your laptop webcam. The AI Vision Engine tracks your movements and commands your superhero in real-time."}),p.jsx("div",{className:"rs-gesture-modal-grid",children:n.map(i=>{const r=i.icon;return p.jsxs("div",{className:"rs-gcard-modal",style:{"--accent":i.color},children:[p.jsxs("div",{className:"rs-gcard-top",children:[p.jsx("div",{className:"rs-gcard-icon-box",children:p.jsx(r,{size:20})}),p.jsxs("div",{children:[p.jsx("h4",{className:"rs-gcard-name",children:i.name}),p.jsx("span",{className:"rs-gcard-action",style:{color:i.color},children:i.action})]})]}),p.jsx("p",{className:"rs-gcard-text",children:i.desc})]},i.id)})})]}),p.jsx("div",{className:"rs-modal-footer",children:p.jsx("button",{className:"rs-btn-confirm",onClick:()=>{Se.playClick(),e()},children:"GOT IT, STEP INTO ARENA"})})]})})},xM=({isOpen:t,onClose:e,isMuted:n,onToggleMute:i})=>{if(!t)return null;const[r,s]=ie.useState(8),[a,o]=ie.useState("ultra"),[l,c]=ie.useState(!0);return p.jsx("div",{className:"rs-modal-overlay",onClick:e,children:p.jsxs("div",{className:"rs-modal-container",onClick:f=>f.stopPropagation(),children:[p.jsxs("div",{className:"rs-modal-header",children:[p.jsxs("div",{className:"rs-modal-title-box",children:[p.jsx(bx,{size:20,className:"rs-modal-title-icon"}),p.jsx("h3",{className:"rs-modal-title",children:"SYSTEM SETTINGS"})]}),p.jsx("button",{className:"rs-modal-close",onClick:()=>{Se.playClick(),e()},children:p.jsx(mp,{size:18})})]}),p.jsxs("div",{className:"rs-modal-body",children:[p.jsxs("div",{className:"rs-setting-group",children:[p.jsxs("div",{className:"rs-group-title",children:[p.jsx(bf,{size:16})," AUDIO & CYBER SFX"]}),p.jsxs("div",{className:"rs-setting-item",children:[p.jsx("span",{children:"Synthesizer Sound Effects"}),p.jsx("button",{className:`rs-toggle-btn ${n?"":"active"}`,onClick:i,children:n?p.jsxs(p.Fragment,{children:[p.jsx(Ix,{size:15})," MUTED"]}):p.jsxs(p.Fragment,{children:[p.jsx(bf,{size:15})," ENABLED"]})})]})]}),p.jsxs("div",{className:"rs-setting-group",children:[p.jsxs("div",{className:"rs-group-title",children:[p.jsx(Hc,{size:16})," WEBCAM & VISION AI"]}),p.jsxs("div",{className:"rs-setting-item",children:[p.jsx("span",{children:"Webcam Resolution"}),p.jsxs("select",{className:"rs-select-box",defaultValue:"1080p",children:[p.jsx("option",{value:"720p",children:"720p HD (High Performance)"}),p.jsx("option",{value:"1080p",children:"1080p Full HD (Recommended)"}),p.jsx("option",{value:"4k",children:"4K Ultra (Studio)"})]})]}),p.jsxs("div",{className:"rs-setting-item",children:[p.jsxs("span",{children:["Hand Tracking Sensitivity: ",r,"/10"]}),p.jsx("input",{type:"range",min:"1",max:"10",value:r,onChange:f=>s(Number(f.target.value)),className:"rs-slider"})]})]}),p.jsxs("div",{className:"rs-setting-group",children:[p.jsxs("div",{className:"rs-group-title",children:[p.jsx(Jr,{size:16})," HOLOGRAPHIC GRAPHICS"]}),p.jsxs("div",{className:"rs-setting-item",children:[p.jsx("span",{children:"Visual Preset"}),p.jsx("div",{className:"rs-btn-pills",children:["low","high","ultra"].map(f=>p.jsx("button",{className:`rs-pill ${a===f?"selected":""}`,onClick:()=>{Se.playClick(),o(f)},children:f.toUpperCase()},f))})]}),p.jsxs("div",{className:"rs-setting-item",children:[p.jsx("span",{children:"Neon Bloom & Energy Glow"}),p.jsx("input",{type:"checkbox",checked:l,onChange:f=>c(f.target.checked),className:"rs-checkbox"})]})]})]}),p.jsx("div",{className:"rs-modal-footer",children:p.jsx("button",{className:"rs-btn-confirm",onClick:()=>{Se.playClick(),e()},children:"SAVE PREFERENCES"})})]})})},_M=({isOpen:t,onClose:e,onConfirm:n})=>t?p.jsx("div",{className:"rs-modal-overlay",onClick:e,children:p.jsxs("div",{className:"rs-modal-container compact",onClick:i=>i.stopPropagation(),children:[p.jsxs("div",{className:"rs-modal-header danger",children:[p.jsxs("div",{className:"rs-modal-title-box",children:[p.jsx(Rx,{size:20,className:"rs-danger-icon"}),p.jsx("h3",{className:"rs-modal-title",children:"EXIT ARENA?"})]}),p.jsx("button",{className:"rs-modal-close",onClick:()=>{Se.playClick(),e()},children:p.jsx(mp,{size:18})})]}),p.jsx("div",{className:"rs-modal-body",children:p.jsxs("div",{className:"rs-danger-box",children:[p.jsx(Px,{size:32,className:"rs-danger-warn-icon"}),p.jsxs("p",{children:["Are you sure you want to disconnect from ",p.jsx("strong",{children:"Reality Shift: Gesture Arena"}),"? Your battle state and gesture telemetry will be saved."]})]})}),p.jsxs("div",{className:"rs-modal-footer",children:[p.jsx("button",{className:"rs-btn-cancel",onClick:()=>{Se.playClick(),e()},children:"CANCEL"}),p.jsx("button",{className:"rs-btn-danger",onClick:()=>{Se.playClick(),n()},children:"DISCONNECT"})]})]})}):null,cc=[{id:"spiderman",heroCode:"web-ninja",name:"WEB NINJA",alias:"Spider-Man / Peter Parker",title:"THE WEB-SLINGER",tagline:"Agile • Web Traps • Aerial Dash",role:"Acrobatic Combatant",accentColor:"#ff2a5f",secondaryColor:"#00f3ff",bgGradient:"radial-gradient(circle at 50% 30%, rgba(255, 42, 95, 0.4), rgba(5, 10, 25, 0.95))",borderColor:"rgba(255, 42, 95, 0.7)",glowColor:"rgba(255, 42, 95, 0.85)",image:"/assets/hero_spiderman.jpg",badgeType:"spider",weaponName:"Quantum Web-Gauntlets",weaponType:"web",weaponDesc:"Fast energy-web projectiles, web traps that slow the villain, and high-speed aerial strikes.",stats:{power:88,defense:76,speed:99},special:"Quantum Nano-Web Burst",description:"Hyper-agile spider ninja wielding synthetic energy webs, kinetic web-traps, and predictive combat reflexes."},{id:"thor",heroCode:"storm-guardian",name:"STORM GUARDIAN",alias:"Thor / Odinson",title:"GOD OF THUNDER",tagline:"Thunder • Hammer • Shockwave",role:"Thunder Vanguard",accentColor:"#00f3ff",secondaryColor:"#38bdf8",bgGradient:"radial-gradient(circle at 50% 30%, rgba(0, 243, 255, 0.4), rgba(10, 20, 45, 0.95))",borderColor:"rgba(0, 243, 255, 0.7)",glowColor:"rgba(0, 243, 255, 0.85)",image:"/assets/hero_thor.jpg",badgeType:"thunder",weaponName:"Magnetic Storm Hammer",weaponType:"hammer",weaponDesc:"A massive magnetic energy hammer, lightning-charged hammer swings, ground shockwaves, and returning hammer animation.",stats:{power:98,defense:88,speed:82},special:"Mjolnir Storm Cataclysm",description:"Thunder sovereign commanding magnetic plasma currents, summoning ground-splitting lightning and returning hammer strikes."},{id:"captain-america",heroCode:"shield-sentinel",name:"SHIELD SENTINEL",alias:"Captain America / Steve Rogers",title:"THE FIRST AVENGER",tagline:"Kinetic Shield • Counter • Bastion",role:"Titan Defender",accentColor:"#fbbf24",secondaryColor:"#00f3ff",bgGradient:"radial-gradient(circle at 50% 30%, rgba(251, 191, 36, 0.4), rgba(15, 25, 40, 0.95))",borderColor:"rgba(251, 191, 36, 0.7)",glowColor:"rgba(251, 191, 36, 0.85)",image:"/assets/hero_captain_america.jpg",badgeType:"shield",weaponName:"Vibranium Kinetic Shield",weaponType:"shield",weaponDesc:"Glowing defensive shield, spinning energy-disc projectile, perfect-block effects, and devastating counterattacks.",stats:{power:86,defense:99,speed:78},special:"Vibranium Kinetic Bastion",description:"Indomitable vanguard equipped with a kinetic vibranium shield capable of perfect deflection and sonic ricochets."},{id:"ironman",heroCode:"plasma-ranger",name:"PLASMA RANGER",alias:"Iron Man / Tony Stark",title:"ARMORED AVENGER",tagline:"Dual Repulsors • Plasma Beams • Jet Dash",role:"Heavy Striker",accentColor:"#f43f5e",secondaryColor:"#facc15",bgGradient:"radial-gradient(circle at 50% 30%, rgba(244, 63, 94, 0.4), rgba(25, 10, 20, 0.95))",borderColor:"rgba(244, 63, 94, 0.7)",glowColor:"rgba(244, 63, 94, 0.85)",image:"/assets/hero_ironman.jpg",badgeType:"energy",weaponName:"Dual Arc Plasma Repulsors",weaponType:"repulsor",weaponDesc:"Dual energy repulsors, charged plasma beams, high-speed aerial dash, and explosive energy burst.",stats:{power:96,defense:94,speed:88},special:"Arc Reactor Unibeam Overdrive",description:"High-tech powered exo-warrior armed with dual plasma cannons, flight booster jets, and chest unibeam lasers."},{id:"doctor-strange",heroCode:"arcane-sorcerer",name:"ARCANE SORCERER",alias:"Doctor Strange / Stephen Strange",title:"SORCERER SUPREME",tagline:"Mystic Rings • Portals • Barrier",role:"Mystic Arcanist",accentColor:"#a855f7",secondaryColor:"#f97316",bgGradient:"radial-gradient(circle at 50% 30%, rgba(168, 85, 247, 0.4), rgba(20, 10, 35, 0.95))",borderColor:"rgba(168, 85, 247, 0.7)",glowColor:"rgba(168, 85, 247, 0.85)",image:"/assets/hero_dr_strange.jpg",badgeType:"magic",weaponName:"Eldritch Mandala Rings",weaponType:"mandala",weaponDesc:"Floating magical energy rings, portal-based projectiles, temporary defensive barrier, and a large-area special attack.",stats:{power:99,defense:75,speed:85},special:"Astral Mirror Dimension Shift",description:"Master arcanist projecting floating Eldritch energy geometry, interdimensional vortex projectiles, and astral wards."}];var gp={};(function t(e,n,i,r){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=function(){if(!e.OffscreenCanvas)return!1;try{var P=new OffscreenCanvas(1,1),b=P.getContext("2d");b.fillRect(0,0,1,1);var ne=P.transferToImageBitmap();b.createPattern(ne,"no-repeat")}catch{return!1}return!0}();function l(){}function c(P){var b=n.exports.Promise,ne=b!==void 0?b:e.Promise;return typeof ne=="function"?new ne(P):(P(l,l),null)}var f=function(P,b){return{transform:function(ne){if(P)return ne;if(b.has(ne))return b.get(ne);var le=new OffscreenCanvas(ne.width,ne.height),Me=le.getContext("2d");return Me.drawImage(ne,0,0),b.set(ne,le),le},clear:function(){b.clear()}}}(o,new Map),h=function(){var P=Math.floor(16.666666666666668),b,ne,le={},Me=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(b=function(xe){var me=Math.random();return le[me]=requestAnimationFrame(function B(J){Me===J||Me+P-1<J?(Me=J,delete le[me],xe()):le[me]=requestAnimationFrame(B)}),me},ne=function(xe){le[xe]&&cancelAnimationFrame(le[xe])}):(b=function(xe){return setTimeout(xe,P)},ne=function(xe){return clearTimeout(xe)}),{frame:b,cancel:ne}}(),u=function(){var P,b,ne={};function le(Me){function xe(me,B){Me.postMessage({options:me||{},callback:B})}Me.init=function(B){var J=B.transferControlToOffscreen();Me.postMessage({canvas:J},[J])},Me.fire=function(B,J,Q){if(b)return xe(B,null),b;var _e=Math.random().toString(36).slice(2);return b=c(function(de){function De(Qe){Qe.data.callback===_e&&(delete ne[_e],Me.removeEventListener("message",De),b=null,f.clear(),Q(),de())}Me.addEventListener("message",De),xe(B,_e),ne[_e]=De.bind(null,{data:{callback:_e}})}),b},Me.reset=function(){Me.postMessage({reset:!0});for(var B in ne)ne[B](),delete ne[B]}}return function(){if(P)return P;if(!i&&s){var Me=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{P=new Worker(URL.createObjectURL(new Blob([Me])))}catch(xe){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",xe),null}le(P)}return P}}(),m={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function x(P,b){return b?b(P):P}function S(P){return P!=null}function g(P,b,ne){return x(P&&S(P[b])?P[b]:m[b],ne)}function d(P){return P<0?0:Math.floor(P)}function v(P,b){return Math.floor(Math.random()*(b-P))+P}function E(P){return parseInt(P,16)}function M(P){return P.map(T)}function T(P){var b=String(P).replace(/[^0-9a-f]/gi,"");return b.length<6&&(b=b[0]+b[0]+b[1]+b[1]+b[2]+b[2]),{r:E(b.substring(0,2)),g:E(b.substring(2,4)),b:E(b.substring(4,6))}}function w(P){var b=g(P,"origin",Object);return b.x=g(b,"x",Number),b.y=g(b,"y",Number),b}function R(P){P.width=document.documentElement.clientWidth,P.height=document.documentElement.clientHeight}function _(P){var b=P.getBoundingClientRect();P.width=b.width,P.height=b.height}function C(P){var b=document.createElement("canvas");return b.style.position="fixed",b.style.top="0px",b.style.left="0px",b.style.pointerEvents="none",b.style.zIndex=P,b}function I(P,b,ne,le,Me,xe,me,B,J){P.save(),P.translate(b,ne),P.rotate(xe),P.scale(le,Me),P.arc(0,0,1,me,B,J),P.restore()}function U(P){var b=P.angle*(Math.PI/180),ne=P.spread*(Math.PI/180);return{x:P.x,y:P.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:P.startVelocity*.5+Math.random()*P.startVelocity,angle2D:-b+(.5*ne-Math.random()*ne),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:P.color,shape:P.shape,tick:0,totalTicks:P.ticks,decay:P.decay,drift:P.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:P.gravity*3,ovalScalar:.6,scalar:P.scalar,flat:P.flat}}function O(P,b){b.x+=Math.cos(b.angle2D)*b.velocity+b.drift,b.y+=Math.sin(b.angle2D)*b.velocity+b.gravity,b.velocity*=b.decay,b.flat?(b.wobble=0,b.wobbleX=b.x+10*b.scalar,b.wobbleY=b.y+10*b.scalar,b.tiltSin=0,b.tiltCos=0,b.random=1):(b.wobble+=b.wobbleSpeed,b.wobbleX=b.x+10*b.scalar*Math.cos(b.wobble),b.wobbleY=b.y+10*b.scalar*Math.sin(b.wobble),b.tiltAngle+=.1,b.tiltSin=Math.sin(b.tiltAngle),b.tiltCos=Math.cos(b.tiltAngle),b.random=Math.random()+2);var ne=b.tick++/b.totalTicks,le=b.x+b.random*b.tiltCos,Me=b.y+b.random*b.tiltSin,xe=b.wobbleX+b.random*b.tiltCos,me=b.wobbleY+b.random*b.tiltSin;if(P.fillStyle="rgba("+b.color.r+", "+b.color.g+", "+b.color.b+", "+(1-ne)+")",P.beginPath(),a&&b.shape.type==="path"&&typeof b.shape.path=="string"&&Array.isArray(b.shape.matrix))P.fill(j(b.shape.path,b.shape.matrix,b.x,b.y,Math.abs(xe-le)*.1,Math.abs(me-Me)*.1,Math.PI/10*b.wobble));else if(b.shape.type==="bitmap"){var B=Math.PI/10*b.wobble,J=Math.abs(xe-le)*.1,Q=Math.abs(me-Me)*.1,_e=b.shape.bitmap.width*b.scalar,de=b.shape.bitmap.height*b.scalar,De=new DOMMatrix([Math.cos(B)*J,Math.sin(B)*J,-Math.sin(B)*Q,Math.cos(B)*Q,b.x,b.y]);De.multiplySelf(new DOMMatrix(b.shape.matrix));var Qe=P.createPattern(f.transform(b.shape.bitmap),"no-repeat");Qe.setTransform(De),P.globalAlpha=1-ne,P.fillStyle=Qe,P.fillRect(b.x-_e/2,b.y-de/2,_e,de),P.globalAlpha=1}else if(b.shape==="circle")P.ellipse?P.ellipse(b.x,b.y,Math.abs(xe-le)*b.ovalScalar,Math.abs(me-Me)*b.ovalScalar,Math.PI/10*b.wobble,0,2*Math.PI):I(P,b.x,b.y,Math.abs(xe-le)*b.ovalScalar,Math.abs(me-Me)*b.ovalScalar,Math.PI/10*b.wobble,0,2*Math.PI);else if(b.shape==="star")for(var ve=Math.PI/2*3,Ye=4*b.scalar,Je=8*b.scalar,je=b.x,st=b.y,lt=5,dt=Math.PI/lt;lt--;)je=b.x+Math.cos(ve)*Je,st=b.y+Math.sin(ve)*Je,P.lineTo(je,st),ve+=dt,je=b.x+Math.cos(ve)*Ye,st=b.y+Math.sin(ve)*Ye,P.lineTo(je,st),ve+=dt;else P.moveTo(Math.floor(b.x),Math.floor(b.y)),P.lineTo(Math.floor(b.wobbleX),Math.floor(Me)),P.lineTo(Math.floor(xe),Math.floor(me)),P.lineTo(Math.floor(le),Math.floor(b.wobbleY));return P.closePath(),P.fill(),b.tick<b.totalTicks}function F(P,b,ne,le,Me){var xe=b.slice(),me=P.getContext("2d"),B,J,Q=c(function(_e){function de(){B=J=null,me.clearRect(0,0,le.width,le.height),f.clear(),Me(),_e()}function De(){i&&!(le.width===r.width&&le.height===r.height)&&(le.width=P.width=r.width,le.height=P.height=r.height),!le.width&&!le.height&&(ne(P),le.width=P.width,le.height=P.height),me.clearRect(0,0,le.width,le.height),xe=xe.filter(function(Qe){return O(me,Qe)}),xe.length?B=h.frame(De):de()}B=h.frame(De),J=de});return{addFettis:function(_e){return xe=xe.concat(_e),Q},canvas:P,promise:Q,reset:function(){B&&h.cancel(B),J&&J()}}}function L(P,b){var ne=!P,le=!!g(b||{},"resize"),Me=!1,xe=g(b,"disableForReducedMotion",Boolean),me=s&&!!g(b||{},"useWorker"),B=me?u():null,J=ne?R:_,Q=P&&B?!!P.__confetti_initialized:!1,_e=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,de;function De(ve,Ye,Je){for(var je=g(ve,"particleCount",d),st=g(ve,"angle",Number),lt=g(ve,"spread",Number),dt=g(ve,"startVelocity",Number),ae=g(ve,"decay",Number),ye=g(ve,"gravity",Number),D=g(ve,"drift",Number),Ue=g(ve,"colors",M),Pe=g(ve,"ticks",Number),N=g(ve,"shapes"),y=g(ve,"scalar"),W=!!g(ve,"flat"),X=w(ve),$=je,he=[],pe=P.width*X.x,Z=P.height*X.y;$--;)he.push(U({x:pe,y:Z,angle:st,spread:lt,startVelocity:dt,color:Ue[$%Ue.length],shape:N[v(0,N.length)],ticks:Pe,decay:ae,gravity:ye,drift:D,scalar:y,flat:W}));return de?de.addFettis(he):(de=F(P,he,J,Ye,Je),de.promise)}function Qe(ve){var Ye=xe||g(ve,"disableForReducedMotion",Boolean),Je=g(ve,"zIndex",Number);if(Ye&&_e)return c(function(dt){dt()});ne&&de?P=de.canvas:ne&&!P&&(P=C(Je),document.body.appendChild(P)),le&&!Q&&J(P);var je={width:P.width,height:P.height};B&&!Q&&B.init(P),Q=!0,B&&(P.__confetti_initialized=!0);function st(){if(B){var dt={getBoundingClientRect:function(){if(!ne)return P.getBoundingClientRect()}};J(dt),B.postMessage({resize:{width:dt.width,height:dt.height}});return}je.width=je.height=null}function lt(){de=null,le&&(Me=!1,e.removeEventListener("resize",st)),ne&&P&&(document.body.contains(P)&&document.body.removeChild(P),P=null,Q=!1)}return le&&!Me&&(Me=!0,e.addEventListener("resize",st,!1)),B?B.fire(ve,je,lt):De(ve,je,lt)}return Qe.reset=function(){B&&B.reset(),de&&de.reset()},Qe}var G;function te(){return G||(G=L(null,{useWorker:!0,resize:!0})),G}function j(P,b,ne,le,Me,xe,me){var B=new Path2D(P),J=new Path2D;J.addPath(B,new DOMMatrix(b));var Q=new Path2D;return Q.addPath(J,new DOMMatrix([Math.cos(me)*Me,Math.sin(me)*Me,-Math.sin(me)*xe,Math.cos(me)*xe,ne,le])),Q}function V(P){if(!a)throw new Error("path confetti are not supported in this browser");var b,ne;typeof P=="string"?b=P:(b=P.path,ne=P.matrix);var le=new Path2D(b),Me=document.createElement("canvas"),xe=Me.getContext("2d");if(!ne){for(var me=1e3,B=me,J=me,Q=0,_e=0,de,De,Qe=0;Qe<me;Qe+=2)for(var ve=0;ve<me;ve+=2)xe.isPointInPath(le,Qe,ve,"nonzero")&&(B=Math.min(B,Qe),J=Math.min(J,ve),Q=Math.max(Q,Qe),_e=Math.max(_e,ve));de=Q-B,De=_e-J;var Ye=10,Je=Math.min(Ye/de,Ye/De);ne=[Je,0,0,Je,-Math.round(de/2+B)*Je,-Math.round(De/2+J)*Je]}return{type:"path",path:b,matrix:ne}}function H(P){var b,ne=1,le="#000000",Me='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof P=="string"?b=P:(b=P.text,ne="scalar"in P?P.scalar:ne,Me="fontFamily"in P?P.fontFamily:Me,le="color"in P?P.color:le);var xe=10*ne,me=""+xe+"px "+Me,B=new OffscreenCanvas(xe,xe),J=B.getContext("2d");J.font=me;var Q=J.measureText(b),_e=Math.ceil(Q.actualBoundingBoxRight+Q.actualBoundingBoxLeft),de=Math.ceil(Q.actualBoundingBoxAscent+Q.actualBoundingBoxDescent),De=2,Qe=Q.actualBoundingBoxLeft+De,ve=Q.actualBoundingBoxAscent+De;_e+=De+De,de+=De+De,B=new OffscreenCanvas(_e,de),J=B.getContext("2d"),J.font=me,J.fillStyle=le,J.fillText(b,Qe,ve);var Ye=1/ne;return{type:"bitmap",bitmap:B.transferToImageBitmap(),matrix:[Ye,0,0,Ye,-_e*Ye/2,-de*Ye/2]}}n.exports=function(){return te().apply(this,arguments)},n.exports.reset=function(){te().reset()},n.exports.create=L,n.exports.shapeFromPath=V,n.exports.shapeFromText=H})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),gp,!1);const Lx=gp.exports;gp.exports.create;const yM=({onBackToHome:t,onConfirmHero:e})=>{const[n,i]=ie.useState("spiderman"),[r,s]=ie.useState(!1),a=cc.find(f=>f.id===n)||cc[0],o=f=>{Se.playHover(),i(f.id)},l=()=>{Se.playClick(),Se.playPortalWarp(),s(!0);try{Lx({particleCount:70,spread:80,origin:{y:.6,x:.5},colors:[a.accentColor,a.secondaryColor,"#ffffff"]})}catch{}setTimeout(()=>{s(!1),e&&e(a)},1800)},c=f=>{switch(f){case"spider":return p.jsx(Vc,{size:15});case"thunder":return p.jsx(Cs,{size:15});case"shield":return p.jsx(hp,{size:15});case"energy":return p.jsx(hu,{size:15});case"magic":return p.jsx(Jr,{size:15});default:return p.jsx(Jr,{size:15})}};return p.jsx("div",{className:"rs-hero-select-screen",children:p.jsxs("div",{className:"rs-select-stage-container",children:[p.jsx("img",{src:"/assets/choose_hero_bg.jpg",alt:"Choose Your Hero Arena",className:"rs-select-bg-img"}),p.jsx("div",{className:"rs-select-ambient-pulse"}),p.jsx("header",{className:"rs-select-header",children:p.jsxs("div",{className:"rs-select-header-brand",children:[p.jsxs("div",{className:"rs-select-logo-badge",onClick:t,children:[p.jsx("span",{className:"rs-select-logo-main",children:"REALITY SHIFT"}),p.jsx("span",{className:"rs-select-logo-sub",children:"GESTURE ARENA"})]}),p.jsx("h2",{className:"rs-select-page-title",children:"CHOOSE YOUR HERO"})]})}),p.jsx("div",{className:"rs-heroes-cards-row",children:cc.map((f,h)=>{const u=f.id===n;return p.jsxs("div",{className:`rs-marvel-hero-card ${u?"selected":""}`,style:{"--hero-accent":f.accentColor,"--hero-glow":f.glowColor,"--hero-border":f.borderColor,animationDelay:`${.08+h*.08}s`},onClick:()=>o(f),onMouseEnter:()=>Se.playHover(),children:[u&&p.jsx("div",{className:"rs-hero-card-halo"}),p.jsxs("div",{className:"rs-hero-image-wrap",children:[p.jsx("img",{src:f.image,alt:f.name,className:"rs-hero-portrait-img"}),p.jsx("div",{className:"rs-hero-image-overlay"})]}),p.jsxs("div",{className:"rs-hero-card-meta",children:[p.jsx("h3",{className:"rs-hero-card-name",children:f.name}),p.jsx("p",{className:"rs-hero-card-tagline",children:f.tagline}),p.jsx("div",{className:"rs-hero-badge-circle",style:{borderColor:f.accentColor,color:f.accentColor},children:c(f.badgeType)})]})]},f.id)})}),p.jsxs("footer",{className:"rs-select-bottom-bar",children:[p.jsxs("button",{className:"rs-btn-back-home",onClick:()=>{Se.playClick(),t()},children:[p.jsx(ho,{size:16}),p.jsx("span",{children:"BACK TO HOME"})]}),p.jsxs("div",{className:"rs-select-footer-center",children:[p.jsx("span",{children:"»»"}),p.jsx("span",{children:"REALITY SHIFT: GESTURE ARENA"}),p.jsx("span",{children:"««"})]}),p.jsx("button",{className:`rs-btn-select-confirm ${r?"confirmed":""}`,onClick:l,children:r?p.jsxs(p.Fragment,{children:[p.jsx(Tx,{size:18}),p.jsxs("span",{children:[a.name," SELECTED!"]})]}):p.jsxs(p.Fragment,{children:[p.jsx(fM,{size:18}),p.jsx("span",{children:"SELECT HERO"})]})})]}),r&&p.jsxs("div",{className:"rs-hero-confirm-toast",children:[p.jsxs("span",{className:"rs-toast-title",children:[a.name," READY!"]}),p.jsxs("span",{className:"rs-toast-sub",children:[a.special," ACTIVATED"]})]})]})})},uc=[{id:"void-titan",name:"VOID TITAN",alias:"Original AI Sovereign",title:"HARBINGER OF THE ABYSS",tagline:"Dark Energy • Void Core • Cataclysm",role:"Cosmic Armored Colossus",accentColor:"#8b5cf6",secondaryColor:"#c084fc",bgGradient:"radial-gradient(circle at 50% 30%, rgba(139, 92, 246, 0.45), rgba(15, 8, 30, 0.98))",borderColor:"rgba(192, 132, 252, 0.85)",glowColor:"rgba(139, 92, 246, 0.95)",image:"/assets/villain_thanos.jpg",badgeType:"gauntlet",stats:{power:100,defense:98,speed:85},special:"Abyssal Void Cataclysm Overdrive",description:"Original AI colossus encased in obsidian cyber-armor, pulsing with a volatile violet dark-matter core and dual anti-matter gauntlets."},{id:"thanos",name:"THANOS",alias:"The Mad Titan",title:"INFINITY CONQUEROR",tagline:"Gauntlet • Power • Inevitable",role:"Cosmic Titan",accentColor:"#d946ef",secondaryColor:"#f97316",bgGradient:"radial-gradient(circle at 50% 30%, rgba(217, 70, 239, 0.4), rgba(20, 5, 25, 0.95))",borderColor:"rgba(217, 70, 239, 0.75)",glowColor:"rgba(217, 70, 239, 0.85)",image:"/assets/villain_thanos.jpg",badgeType:"gauntlet",stats:{power:99,defense:96,speed:75},special:"Infinity Stones Cosmic Cataclysm",description:"Ruthless galactic warlord wielding the Infinity Gauntlet, channeling raw cosmic obliteration with unyielding strength."},{id:"green-goblin",name:"GREEN GOBLIN",alias:"Norman Osborn",title:"GLIDER MENACE",tagline:"Glider • Bombs • Chaos",role:"Chaos Bombardier",accentColor:"#22c55e",secondaryColor:"#a855f7",bgGradient:"radial-gradient(circle at 50% 30%, rgba(34, 197, 94, 0.4), rgba(5, 20, 10, 0.95))",borderColor:"rgba(34, 197, 94, 0.75)",glowColor:"rgba(34, 197, 94, 0.85)",image:"/assets/villain_green_goblin.jpg",badgeType:"bomb",stats:{power:90,defense:78,speed:96},special:"Cyber Pumpkin Bomb Barrage",description:"Insane industrialist soaring on a hyper-speed razor glider, hurling volatile pumpkin explosives and razor bats."},{id:"magneto",name:"MAGNETO",alias:"Max Eisenhardt",title:"MASTER OF MAGNETISM",tagline:"Magnetic • Metallic • Dominance",role:"Gravitational Warlord",accentColor:"#ef4444",secondaryColor:"#94a3b8",bgGradient:"radial-gradient(circle at 50% 30%, rgba(239, 68, 68, 0.4), rgba(25, 10, 15, 0.95))",borderColor:"rgba(239, 68, 68, 0.75)",glowColor:"rgba(239, 68, 68, 0.85)",image:"/assets/villain_magneto.jpg",badgeType:"magnet",stats:{power:97,defense:92,speed:84},special:"Electromagnetic Polar Storm",description:"Supreme mutant sovereign commanding planetary magnetic spectrums to rip alloy structures and crush all opposition."},{id:"doctor-doom",name:"DOCTOR DOOM",alias:"Victor Von Doom",title:"SOVEREIGN OF LATVERIA",tagline:"Sorcery • Tech • Absolute",role:"Techno-Mystic Tyrant",accentColor:"#10b981",secondaryColor:"#e2e8f0",bgGradient:"radial-gradient(circle at 50% 30%, rgba(16, 185, 129, 0.4), rgba(5, 25, 15, 0.95))",borderColor:"rgba(16, 185, 129, 0.75)",glowColor:"rgba(16, 185, 129, 0.85)",image:"/assets/villain_doctor_doom.jpg",badgeType:"crown",stats:{power:98,defense:96,speed:82},special:"Doombot Orbital Disintegration Ray",description:"Monarch combining master sorcery with cybernetic titanium armor, bending arcane magic and quantum physics to his will."},{id:"loki",name:"LOKI",alias:"Loki Laufeyson",title:"GOD OF MISCHIEF",tagline:"Illusions • Trickery • Temporal",role:"Trickster Sovereign",accentColor:"#84cc16",secondaryColor:"#eab308",bgGradient:"radial-gradient(circle at 50% 30%, rgba(132, 204, 22, 0.4), rgba(10, 25, 5, 0.95))",borderColor:"rgba(132, 204, 22, 0.75)",glowColor:"rgba(132, 204, 22, 0.85)",image:"/assets/villain_loki.jpg",badgeType:"horns",stats:{power:94,defense:80,speed:95},special:"Yggdrasil Timeline Illusion Fracture",description:"Master of temporal deception and mystical illusion magic, bending reality with golden scepters and astral duplicates."}],SM=({selectedHero:t,onBackToHeroSelect:e,onStartBattle:n})=>{const[i,r]=ie.useState("green-goblin"),[s,a]=ie.useState(!1),o=uc.find(h=>h.id===i)||uc[0],l=h=>{Se.playHover(),r(h.id)},c=()=>{Se.playClick(),Se.playPortalWarp(),a(!0);try{Lx({particleCount:80,spread:90,origin:{y:.6,x:.5},colors:[o.accentColor,o.secondaryColor,"#ffffff"]})}catch{}setTimeout(()=>{a(!1),n&&n(t,o)},2e3)},f=h=>{switch(h){case"bomb":return p.jsx(hu,{size:15});case"gauntlet":return p.jsx(Jr,{size:15});case"magnet":return p.jsx(Cs,{size:15});case"crown":return p.jsx(sM,{size:15});case"horns":return p.jsx(Rf,{size:15});default:return p.jsx(Rf,{size:15})}};return p.jsx("div",{className:"rs-hero-select-screen villain-theme",children:p.jsxs("div",{className:"rs-select-stage-container",children:[p.jsx("img",{src:"/assets/villain_arena_bg.jpg",alt:"Villain Selection Arena",className:"rs-select-bg-img"}),p.jsx("div",{className:"rs-select-ambient-pulse villain-pulse"}),p.jsxs("header",{className:"rs-select-header villain-header",children:[p.jsxs("div",{className:"rs-select-header-brand",children:[p.jsxs("div",{className:"rs-select-logo-badge villain-badge",onClick:e,children:[p.jsx("span",{className:"rs-select-logo-main",children:"REALITY SHIFT"}),p.jsx("span",{className:"rs-select-logo-sub",children:"GESTURE ARENA"})]}),p.jsx("h2",{className:"rs-select-page-title villain-title",children:"SELECT YOUR OPPONENT"})]}),t&&p.jsxs("div",{className:"rs-challenger-hero-pill",children:[p.jsx("span",{className:"rs-challenger-label",children:"CHALLENGER"}),p.jsxs("div",{className:"rs-challenger-hero-box",style:{borderColor:t.accentColor},children:[p.jsx("img",{src:t.image,alt:t.name,className:"rs-challenger-avatar"}),p.jsxs("div",{className:"rs-challenger-info",children:[p.jsx("span",{className:"rs-challenger-name",children:t.name}),p.jsx("span",{className:"rs-challenger-role",children:t.role})]})]})]})]}),p.jsx("div",{className:"rs-heroes-cards-row",children:uc.map((h,u)=>{const m=h.id===i;return p.jsxs("div",{className:`rs-marvel-hero-card rs-villain-card ${m?"selected":""}`,style:{"--hero-accent":h.accentColor,"--hero-glow":h.glowColor,"--hero-border":h.borderColor,animationDelay:`${.08+u*.08}s`},onClick:()=>l(h),onMouseEnter:()=>Se.playHover(),children:[m&&p.jsx("div",{className:"rs-hero-card-halo villain-halo"}),p.jsxs("div",{className:"rs-hero-image-wrap",children:[p.jsx("img",{src:h.image,alt:h.name,className:"rs-hero-portrait-img"}),p.jsx("div",{className:"rs-hero-image-overlay villain-overlay"})]}),p.jsxs("div",{className:"rs-hero-card-meta",children:[p.jsx("h3",{className:"rs-hero-card-name villain-name",children:h.name}),p.jsx("p",{className:"rs-hero-card-tagline",children:h.tagline}),p.jsx("div",{className:"rs-hero-badge-circle",style:{borderColor:h.accentColor,color:h.accentColor},children:f(h.badgeType)})]})]},h.id)})}),p.jsxs("footer",{className:"rs-select-bottom-bar",children:[p.jsxs("button",{className:"rs-btn-back-home villain-back-btn",onClick:()=>{Se.playClick(),e()},children:[p.jsx(ho,{size:16}),p.jsx("span",{children:"BACK TO HEROES"})]}),p.jsxs("div",{className:"rs-select-footer-center villain-ticker",children:[p.jsx("span",{children:"»»"}),p.jsx("span",{children:"REALITY SHIFT: ARENA CLASH"}),p.jsx("span",{children:"««"})]}),p.jsx("button",{className:`rs-btn-select-confirm villain-battle-btn ${s?"confirmed":""}`,onClick:c,children:s?p.jsxs(p.Fragment,{children:[p.jsx(Tx,{size:18}),p.jsx("span",{children:"BATTLE STARTING!"})]}):p.jsxs(p.Fragment,{children:[p.jsx(pp,{size:18}),p.jsx("span",{children:"START BATTLE"})]})})]}),s&&p.jsxs("div",{className:"rs-hero-confirm-toast villain-clash-toast",children:[p.jsxs("div",{className:"rs-clash-badge",children:[p.jsx(Nx,{size:28,className:"rs-clash-icon"}),p.jsx("span",{className:"rs-clash-vs-text",children:"ARENA DUEL INITIATED"})]}),p.jsxs("span",{className:"rs-toast-title",children:[(t==null?void 0:t.name)||"HERO"," ",p.jsx("span",{className:"rs-vs-highlight",children:"VS"})," ",o.name]}),p.jsxs("span",{className:"rs-toast-sub",children:[o.special," INCOMING!"]})]})]})})};class Dx{constructor(e,n,i){Kp(this,"loop",e=>{this.isRunning&&(this.video&&this.video.readyState>=2&&!this.video.paused&&(!this.lastProcessTime||e-this.lastProcessTime>40?(this.lastProcessTime=e,this.processFrame()):this.drawHudOverlay(this.lastBbox,this.lastCentroid,this.lastGesture,this.lastConfidence,this.landmarks)),this.animationId=requestAnimationFrame(this.loop))});this.video=e,this.canvas=n,this.onGestureDetected=i,this.isRunning=!1,this.animationId=null,this.offscreenCanvas=document.createElement("canvas"),this.offscreenCanvas.width=160,this.offscreenCanvas.height=120,this.offscreenCtx=this.offscreenCanvas.getContext("2d",{willReadFrequently:!0}),this.prevCentroid=null,this.prevArea=0,this.prevTime=performance.now(),this.lastProcessTime=0,this.gestureHistory=[],this.lastTriggeredGesture=null,this.lastTriggerTime=0,this.lastBbox=null,this.lastCentroid=null,this.lastGesture="none",this.lastConfidence=0,this.landmarks=null,this.cooldowns={palm:400,fist:450,point:500,forward:450,both_hands:900,swipe:550}}start(){this.isRunning||(this.isRunning=!0,this.loop())}stop(){if(this.isRunning=!1,this.animationId&&(cancelAnimationFrame(this.animationId),this.animationId=null),this.canvas){const e=this.canvas.getContext("2d");e&&e.clearRect(0,0,this.canvas.width,this.canvas.height)}}processFrame(){const e=this.offscreenCanvas.width,n=this.offscreenCanvas.height;this.offscreenCtx.drawImage(this.video,0,0,e,n);const r=this.offscreenCtx.getImageData(0,0,e,n).data;let s=e,a=0,o=n,l=0,c=0,f=0,h=0,u=0,m=0;const x=e/2;for(let T=0;T<n;T++)for(let w=0;w<e;w++){const R=(T*e+w)*4,_=r[R],C=r[R+1],I=r[R+2];_>65&&C>35&&I>18&&_>C&&_>I&&_-C>=10&&Math.abs(_-C)>8&&_-I>12&&_-Math.min(C,I)>12&&(h++,c+=w,f+=T,w<s&&(s=w),w>a&&(a=w),T<o&&(o=T),T>l&&(l=T),w<x?u++:m++)}const S=performance.now();let g="none",d=0,v=null,E=null,M=null;if(h>160&&s<a&&o<l){const T=a-s,w=l-o,R=T*w,_=h/Math.max(1,R),C=T/Math.max(1,w),I=c/h,U=f/h;E={x:I/e,y:U/n},v={x:s/e,y:o/n,w:T/e,h:w/n};const O=Math.max(.001,(S-this.prevTime)/1e3);if(u>120&&m>120&&T>e*.45&&E.y<.58&&(g="both_hands",d=.94),g==="none"&&this.prevArea>0&&R/this.prevArea>1.28&&O<.25&&(g="forward",d=.92),g==="none"&&this.prevCentroid){const L=(E.x-this.prevCentroid.x)/O;Math.abs(L)>1.5&&(g="swipe",d=.91)}if(g==="none"){if(_>.6&&C>=.65&&C<=1.45)g="fist",d=Math.min(.98,_*1.35);else if(C<.62&&w>28)g="point",d=.93;else if(_>=.18&&_<.58&&(T>22||w>22)){let L=0,G=!1;const te=Math.floor(o+w*.25);for(let j=s;j<=a;j++){const V=(te*e+j)*4,H=r[V],P=r[V+1],b=r[V+2],ne=H>P&&H>b&&H-P>10;ne&&!G?(L++,G=!0):!ne&&G&&(G=!1)}L===2?(g="both_hands",d=.9):L===1&&w>T*1.3?(g="point",d=.88):(g="palm",d=.95)}}M=this.synthesizeHandLandmarks(v,E,g),this.prevCentroid=E,this.prevArea=R,this.prevTime=S}else this.prevCentroid=null,this.prevArea=0;if(g!=="none"){this.gestureHistory.push(g),this.gestureHistory.length>5&&this.gestureHistory.shift();const T={};for(const _ of this.gestureHistory)T[_]=(T[_]||0)+1;let w=g;for(const[_,C]of Object.entries(T))C>=2&&(w=_);const R=this.cooldowns[w]||500;S-this.lastTriggerTime>R&&(this.lastTriggerTime=S,this.lastTriggeredGesture=w,this.onGestureDetected&&this.onGestureDetected({gesture:w,confidence:d||.92,bbox:v,centroid:E}))}this.lastBbox=v,this.lastCentroid=E,this.lastGesture=g,this.lastConfidence=d,this.landmarks=M,this.drawHudOverlay(v,E,g,d,M)}synthesizeHandLandmarks(e,n,i){if(!e||!n)return null;const r={x:n.x,y:e.y+e.h*.9},s={x:n.x,y:e.y+e.h*.6},a=[];if(i==="fist")for(let o=0;o<5;o++){const l=(o-2)*(e.w*.16);a.push({x:n.x+l,y:n.y-e.h*.1})}else if(i==="point")a.push({x:n.x,y:e.y+e.h*.05});else for(let o=0;o<5;o++){const l=(o-2)*(e.w*.22);a.push({x:n.x+l,y:e.y+Math.abs(o-2)*(e.h*.08)})}return{wrist:r,palmCenter:s,fingerTips:a}}drawHudOverlay(e,n,i,r,s){if(!this.canvas)return;const a=this.canvas.getContext("2d");if(!a)return;const o=this.canvas.width,l=this.canvas.height;if(a.clearRect(0,0,o,l),!e){a.strokeStyle="rgba(0, 243, 255, 0.35)",a.lineWidth=1,a.setLineDash([4,4]),a.strokeRect(o*.15,l*.15,o*.7,l*.7),a.setLineDash([]),a.font="bold 9px Rajdhani, monospace",a.fillStyle="rgba(0, 243, 255, 0.6)",a.fillText("STANDBY // SCANNING HAND...",o*.2,l*.5);return}const c=(1-(e.x+e.w))*o,f=e.y*l,h=e.w*o,u=e.h*l;let m="#00f3ff",x="SEARCHING GESTURE";if(i==="palm"?(m="#00f3ff",x="🖐️ OPEN PALM // ENERGY SHIELD"):i==="fist"?(m="#f59e0b",x="✊ CLOSED FIST // WEAPON CHARGE"):i==="point"?(m="#38bdf8",x="☝️ POINTING // TARGET AIM BEAM"):i==="forward"?(m="#ef4444",x="🥊 FORWARD PUSH // KINETIC STRIKE"):i==="both_hands"?(m="#c084fc",x="🙌 BOTH HANDS // SPECIAL ABILITY"):i==="swipe"&&(m="#10b981",x="↔️ SIDEWAYS // WARP DODGE"),s&&s.fingerTips){const d=(1-s.wrist.x)*o,v=s.wrist.y*l,E=(1-s.palmCenter.x)*o,M=s.palmCenter.y*l;a.strokeStyle=m,a.lineWidth=2,a.beginPath(),a.moveTo(d,v),a.lineTo(E,M),a.stroke(),s.fingerTips.forEach(T=>{const w=(1-T.x)*o,R=T.y*l;a.strokeStyle="rgba(255, 255, 255, 0.75)",a.lineWidth=1.5,a.beginPath(),a.moveTo(E,M),a.lineTo(w,R),a.stroke(),a.fillStyle=m,a.shadowColor=m,a.shadowBlur=8,a.beginPath(),a.arc(w,R,3.5,0,Math.PI*2),a.fill(),a.shadowBlur=0})}a.strokeStyle=m,a.lineWidth=2.5,a.shadowColor=m,a.shadowBlur=10;const S=Math.min(18,h*.3);if(a.beginPath(),a.moveTo(c,f+S),a.lineTo(c,f),a.lineTo(c+S,f),a.stroke(),a.beginPath(),a.moveTo(c+h-S,f),a.lineTo(c+h,f),a.lineTo(c+h,f+S),a.stroke(),a.beginPath(),a.moveTo(c,f+u-S),a.lineTo(c,f+u),a.lineTo(c+S,f+u),a.stroke(),a.beginPath(),a.moveTo(c+h-S,f+u),a.lineTo(c+h,f+u),a.lineTo(c+h,f+u-S),a.stroke(),n){const d=(1-n.x)*o,v=n.y*l;a.fillStyle=m,a.beginPath(),a.arc(d,v,4,0,Math.PI*2),a.fill()}a.font="bold 10px Rajdhani, monospace",a.fillStyle=m;const g=r?` [${Math.round(r*100)}%]`:"";a.fillText(`${x}${g}`,c,Math.max(12,f-6))}}const MM=({isOpen:t,onAccessGranted:e,onClose:n})=>{const[i,r]=ie.useState("prompt"),[s,a]=ie.useState(""),[o,l]=ie.useState("Position hand in frame..."),[c,f]=ie.useState(!1),[h,u]=ie.useState(!1),m=ie.useRef(null),x=ie.useRef(null),S=ie.useRef(null),g=ie.useRef(null);ie.useEffect(()=>()=>{d()},[]);const d=()=>{g.current&&(g.current.stop(),g.current=null),S.current&&(S.current.getTracks().forEach(w=>w.stop()),S.current=null)},v=w=>{m.current&&(m.current.srcObject=w,m.current.onloadedmetadata=()=>{m.current.play().catch(()=>{}),x.current&&(x.current.width=m.current.videoWidth||320,x.current.height=m.current.videoHeight||240,g.current=new Dx(m.current,x.current,R=>{R.gesture==="palm"?l("🖐️ OPEN PALM (SHIELD READY)"):R.gesture==="fist"?l("✊ CLOSED FIST (PUNCH READY)"):R.gesture==="vsign"?l("✌️ V-SIGN (ULTIMATE READY)"):R.gesture==="swipe"&&l("👈👉 SWIPE (DODGE READY)")}),g.current.start())})},E=async()=>{Se.playClick(),r("requesting"),a(""),u(!1);try{if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)throw new Error("Your browser does not support WebRTC Camera API. Try Google Chrome.");const w=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:640},height:{ideal:480},facingMode:"user"},audio:!1});S.current=w,r("granted"),f(!1),Se.playModal(),setTimeout(()=>{v(w)},100)}catch(w){console.warn("Camera access failure:",w);let R="Camera permission was dismissed or blocked by browser.";w.name==="NotAllowedError"||w.name==="PermissionDeniedError"?R="Permission denied. Please click the Camera icon in your Chrome URL address bar to Allow.":w.name==="NotFoundError"||w.name==="DevicesNotFoundError"?R="No webcam hardware detected on this device.":(w.name==="NotReadableError"||w.name==="TrackStartError")&&(R="Webcam is currently in use by another app (Zoom, Teams, or another tab)."),a(R),r("denied"),u(!0)}},M=()=>{Se.playClick(),d(),f(!0),r("granted"),l("VIRTUAL SENSOR ACTIVE")},T=()=>{Se.playClick(),Se.playPortalWarp(),e&&e({stream:S.current,isSimulated:c})};return t?p.jsx("div",{className:"camera-modal-backdrop",children:p.jsxs("div",{className:"rs-camera-modal-card",children:[p.jsx("div",{className:"rs-camera-modal-glow-line"}),p.jsxs("div",{className:"rs-camera-modal-header",children:[p.jsxs("div",{className:"rs-camera-badge",children:[p.jsx(Hc,{size:20,className:"rs-camera-icon-glow"}),p.jsx("span",{className:"rs-camera-badge-tag",children:"COMPUTER VISION GESTURE ENGINE"})]}),p.jsx("h2",{className:"rs-camera-modal-title",children:"CALIBRATE GESTURE SENSOR"}),p.jsx("p",{className:"rs-camera-modal-subtitle",children:"Allow camera access so the optical computer vision engine can track your hand combat moves in real-time."})]}),p.jsxs("div",{className:"rs-camera-preview-container",children:[p.jsx("video",{ref:m,autoPlay:!0,playsInline:!0,muted:!0,className:`rs-camera-live-feed ${i==="granted"&&!c?"visible":"hidden"}`}),p.jsx("canvas",{ref:x,className:`rs-camera-hud-canvas ${i==="granted"&&!c?"visible":"hidden"}`}),i!=="granted"&&p.jsxs("div",{className:"rs-camera-placeholder-box",children:[p.jsx("div",{className:"rs-camera-radar-pulse"}),p.jsx(pM,{size:48,className:"rs-cam-ph-icon"}),p.jsx("span",{className:"rs-cam-ph-text",children:"Webcam Optical Sensor Standby"}),p.jsx("span",{className:"rs-cam-ph-sub",children:"Click the button below to allow camera access"})]}),c&&p.jsxs("div",{className:"rs-camera-simulated-box",children:[p.jsx(uM,{size:48,className:"rs-sim-icon"}),p.jsx("span",{className:"rs-sim-title",children:"VIRTUAL GESTURE SENSOR READY"}),p.jsx("p",{className:"rs-sim-sub",children:"Computer vision emulated via on-screen triggers & hotkeys."})]}),i==="granted"&&p.jsxs("div",{className:"rs-camera-hud-tracking-pill",children:[p.jsx("span",{className:"tracking-dot"}),p.jsx("span",{children:o})]})]}),i==="denied"&&p.jsxs("div",{className:"rs-camera-error-banner",children:[p.jsx(Px,{size:18,className:"text-amber-400 flex-shrink-0"}),p.jsxs("div",{className:"rs-camera-error-text-block",children:[p.jsx("strong",{children:"Camera Access Notice:"})," ",s]})]}),i==="requesting"&&p.jsxs("div",{className:"rs-camera-help-banner",children:[p.jsx(Jr,{size:16,className:"text-cyan-400 animate-spin"}),p.jsxs("span",{children:["Look at your browser's address bar and click ",p.jsx("strong",{children:'"Allow"'})," when prompted."]})]}),p.jsxs("div",{className:"rs-camera-modal-footer",children:[i==="granted"?p.jsxs("div",{className:"rs-camera-granted-actions",children:[p.jsxs("div",{className:"rs-camera-status-pill",children:[p.jsx(rM,{size:18,className:"text-emerald-400"}),p.jsx("span",{children:"VISION ENGINE ONLINE"})]}),p.jsx("button",{className:"rs-btn-camera-proceed",onClick:T,children:"PROCEED TO BATTLE CONDITIONS »"})]}):p.jsxs("div",{className:"rs-camera-request-actions",children:[p.jsx("button",{className:"rs-btn-camera-activate",onClick:E,disabled:i==="requesting",children:i==="requesting"?p.jsxs(p.Fragment,{children:[p.jsx(cM,{size:18,className:"animate-spin"}),p.jsx("span",{children:"WAITING FOR CAMERA PERMISSION..."})]}):p.jsxs(p.Fragment,{children:[p.jsx(Hc,{size:18}),p.jsx("span",{children:"ENABLE LAPTOP CAMERA NOW"})]})}),p.jsx("button",{className:"rs-btn-camera-simulate",onClick:M,children:"CONTINUE WITH VIRTUAL GESTURE EMULATOR"})]}),h&&p.jsxs("div",{className:"rs-camera-troubleshoot-tips",children:[p.jsx("span",{className:"tip-title",children:"Quick Fix Tips:"}),p.jsx("p",{children:"1. Check if another browser tab or app (Zoom/Teams) is using the webcam."}),p.jsxs("p",{children:["2. In Chrome, click the Lock/Camera icon next to ",p.jsx("code",{children:"localhost:3000"}),' in the address bar and switch Camera to "Allow".']}),p.jsx("p",{children:"3. If using an external webcam, ensure it is firmly connected."})]})]})]})}):null},EM=({isOpen:t,selectedHero:e,selectedVillain:n,onEnterGate:i})=>{if(!t)return null;const r=()=>{Se.playClick(),Se.playPortalWarp(),i&&i()};return p.jsx("div",{className:"rs-modal-backdrop rules-modal-backdrop",children:p.jsxs("div",{className:"rs-rules-modal-card",children:[p.jsxs("div",{className:"rs-redgate-warning-bar",children:[p.jsx(Nx,{size:20,className:"rs-redgate-warning-icon"}),p.jsx("span",{className:"rs-redgate-warning-text",children:"SYSTEM ALERT: S-RANK RED GATE ANOMALY DETECTED"})]}),p.jsxs("div",{className:"rs-rules-header",children:[p.jsx("h2",{className:"rs-rules-title",children:"RED GATE BATTLE CONDITIONS"}),p.jsx("p",{className:"rs-rules-subtitle",children:"The dimensional boundary has solidified. You cannot leave until the Dungeon Boss falls."})]}),p.jsxs("div",{className:"rs-rules-matchup-strip",children:[p.jsxs("div",{className:"rs-matchup-side hero",children:[p.jsx("img",{src:(e==null?void 0:e.image)||"/assets/hero_spiderman.jpg",alt:e==null?void 0:e.name,className:"rs-matchup-avatar"}),p.jsxs("div",{className:"rs-matchup-meta",children:[p.jsx("span",{className:"rs-matchup-tag",children:"CHALLENGER"}),p.jsx("span",{className:"rs-matchup-name",children:(e==null?void 0:e.name)||"HERO"})]})]}),p.jsxs("div",{className:"rs-matchup-vs-badge",children:[p.jsx(pp,{size:22}),p.jsx("span",{children:"VS"})]}),p.jsxs("div",{className:"rs-matchup-side villain",children:[p.jsx("img",{src:(n==null?void 0:n.image)||"/assets/villain_thanos.jpg",alt:n==null?void 0:n.name,className:"rs-matchup-avatar villain"}),p.jsxs("div",{className:"rs-matchup-meta right",children:[p.jsx("span",{className:"rs-matchup-tag villain",children:"DUNGEON BOSS"}),p.jsx("span",{className:"rs-matchup-name villain",children:(n==null?void 0:n.name)||"VILLAIN"})]})]})]}),p.jsxs("div",{className:"rs-gesture-mechanics-grid",children:[p.jsxs("div",{className:"rs-gesture-rule-card",children:[p.jsx("div",{className:"rs-gesture-icon-wrap palm",children:p.jsx(Cx,{size:24})}),p.jsxs("div",{className:"rs-gesture-info",children:[p.jsx("span",{className:"rs-gesture-name",children:"OPEN PALM"}),p.jsx("span",{className:"rs-gesture-action",children:"ENERGY DEFENSE BARRIER"}),p.jsx("p",{className:"rs-gesture-desc",children:"Raise your flat palm to deploy an invulnerable energy shield and counter incoming strikes."})]})]}),p.jsxs("div",{className:"rs-gesture-rule-card",children:[p.jsx("div",{className:"rs-gesture-icon-wrap fist",children:p.jsx(hu,{size:24})}),p.jsxs("div",{className:"rs-gesture-info",children:[p.jsx("span",{className:"rs-gesture-name",children:"CLOSED FIST"}),p.jsx("span",{className:"rs-gesture-action",children:"HEAVY KINETIC STRIKE"}),p.jsx("p",{className:"rs-gesture-desc",children:"Clench your fist towards the camera to unleash a crushing 250% critical physical blow."})]})]}),p.jsxs("div",{className:"rs-gesture-rule-card",children:[p.jsx("div",{className:"rs-gesture-icon-wrap special",children:p.jsx(Jr,{size:24})}),p.jsxs("div",{className:"rs-gesture-info",children:[p.jsx("span",{className:"rs-gesture-name",children:"V-SIGN / TWO FINGERS"}),p.jsx("span",{className:"rs-gesture-action",children:"ELEMENTAL ULTIMATE"}),p.jsx("p",{className:"rs-gesture-desc",children:"Cast two fingers forward to trigger your hero's signature dimensional ultimate power."})]})]}),p.jsxs("div",{className:"rs-gesture-rule-card",children:[p.jsx("div",{className:"rs-gesture-icon-wrap swipe",children:p.jsx(Cs,{size:24})}),p.jsxs("div",{className:"rs-gesture-info",children:[p.jsx("span",{className:"rs-gesture-name",children:"SIDE SWIPE"}),p.jsx("span",{className:"rs-gesture-action",children:"QUANTUM REALITY DODGE"}),p.jsx("p",{className:"rs-gesture-desc",children:"Swipe your hand rapidly left or right to warp out of lethal boss area-of-effect attacks."})]})]})]}),p.jsxs("div",{className:"rs-redgate-conditions-list",children:[p.jsxs("div",{className:"rs-condition-item",children:[p.jsx("span",{className:"rs-cond-num",children:"01."}),p.jsx("span",{children:"Real-time optical gestures translate immediately into hero battle abilities."})]}),p.jsxs("div",{className:"rs-condition-item",children:[p.jsx("span",{className:"rs-cond-num",children:"02."}),p.jsx("span",{children:"Maintain clear hand visibility within your camera frame for minimum latency."})]}),p.jsxs("div",{className:"rs-condition-item",children:[p.jsx("span",{className:"rs-cond-num",children:"03."}),p.jsx("span",{children:"Defeat the S-Rank Dungeon Boss to break the Red Gate and claim victory!"})]})]}),p.jsx("div",{className:"rs-rules-modal-footer",children:p.jsxs("button",{className:"rs-btn-enter-redgate",onClick:r,children:[p.jsx(Rf,{size:20}),p.jsx("span",{children:"ENTER THE RED GATE"}),p.jsx(nM,{size:20})]})})]})})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vp="186",wM=0,a0=1,TM=2,dc=1,AM=2,eo=3,Ms=0,ei=1,Wt=2,pr=0,po=1,Un=2,o0=3,l0=4,CM=5,qs=100,RM=101,bM=102,NM=103,PM=104,IM=200,LM=201,DM=202,UM=203,Ux=204,Ox=205,OM=206,FM=207,kM=208,BM=209,zM=210,GM=211,HM=212,VM=213,WM=214,Nf=0,Pf=1,If=2,Do=3,Lf=4,Df=5,Uf=6,Of=7,Fx=0,jM=1,XM=2,Ki=0,kx=1,Bx=2,zx=3,xp=4,Gx=5,Hx=6,Vx=7,Wx=300,Es=301,wa=302,Zu=303,Qu=304,pu=306,Ff=1e3,fr=1001,kf=1002,An=1003,YM=1004,wl=1005,xn=1006,ed=1007,hs=1008,li=1009,jx=1010,Xx=1011,Uo=1012,_p=1013,Ji=1014,Xi=1015,Zi=1016,yp=1017,Sp=1018,Oo=1020,Yx=35902,qx=35899,$x=1021,Kx=1022,Di=1023,yr=1026,ps=1027,Jx=1028,Mp=1029,ws=1030,Ep=1031,wp=1033,fc=33776,hc=33777,pc=33778,mc=33779,Bf=35840,zf=35841,Gf=35842,Hf=35843,Vf=36196,Wf=37492,jf=37496,Xf=37488,Yf=37489,Wc=37490,qf=37491,$f=37808,Kf=37809,Jf=37810,Zf=37811,Qf=37812,eh=37813,th=37814,nh=37815,ih=37816,rh=37817,sh=37818,ah=37819,oh=37820,lh=37821,ch=36492,uh=36494,dh=36495,fh=36283,hh=36284,jc=36285,ph=36286,qM=3200,mh=0,$M=1,Or="",ai="srgb",Xc="srgb-linear",Yc="linear",Ut="srgb",td=7680,KM=519,JM=512,ZM=513,QM=514,Tp=515,e1=516,t1=517,Ap=518,n1=519,i1=35044,c0="300 es",Yi=2e3,Fo=2001;function r1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ko(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function s1(){const t=ko("canvas");return t.style.display="block",t}const u0={};function d0(...t){const e="THREE."+t.shift();console.log(e,...t)}function Zx(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function et(...t){t=Zx(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Nt(...t){t=Zx(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function ma(...t){const e=t.join(" ");e in u0||(u0[e]=!0,et(...t))}function a1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const o1={[Nf]:Pf,[If]:Uf,[Lf]:Of,[Do]:Df,[Pf]:Nf,[Uf]:If,[Of]:Lf,[Df]:Do};class Rs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let f0=1234567;const mo=Math.PI/180,Bo=180/Math.PI;function Na(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(In[t&255]+In[t>>8&255]+In[t>>16&255]+In[t>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[n&63|128]+In[n>>8&255]+"-"+In[n>>16&255]+In[n>>24&255]+In[i&255]+In[i>>8&255]+In[i>>16&255]+In[i>>24&255]).toLowerCase()}function yt(t,e,n){return Math.max(e,Math.min(n,t))}function Cp(t,e){return(t%e+e)%e}function l1(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function c1(t,e,n){return t!==e?(n-t)/(e-t):0}function go(t,e,n){return(1-n)*t+n*e}function u1(t,e,n,i){return go(t,e,1-Math.exp(-n*i))}function d1(t,e=1){return e-Math.abs(Cp(t,e*2)-e)}function f1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function h1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function p1(t,e){return t+Math.floor(Math.random()*(e-t+1))}function m1(t,e){return t+Math.random()*(e-t)}function g1(t){return t*(.5-Math.random())}function v1(t){t!==void 0&&(f0=t);let e=f0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function x1(t){return t*mo}function _1(t){return t*Bo}function y1(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function S1(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function M1(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function E1(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),f=a((e+i)/2),h=s((e-i)/2),u=a((e-i)/2),m=s((i-e)/2),x=a((i-e)/2);switch(r){case"XYX":t.set(o*f,l*h,l*u,o*c);break;case"YZY":t.set(l*u,o*f,l*h,o*c);break;case"ZXZ":t.set(l*h,l*u,o*f,o*c);break;case"XZX":t.set(o*f,l*x,l*m,o*c);break;case"YXY":t.set(l*m,o*f,l*x,o*c);break;case"ZYZ":t.set(l*x,l*m,o*f,o*c);break;default:et("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function $s(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Gn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const wn={DEG2RAD:mo,RAD2DEG:Bo,generateUUID:Na,clamp:yt,euclideanModulo:Cp,mapLinear:l1,inverseLerp:c1,lerp:go,damp:u1,pingpong:d1,smoothstep:f1,smootherstep:h1,randInt:p1,randFloat:m1,randFloatSpread:g1,seededRandom:v1,degToRad:x1,radToDeg:_1,isPowerOfTwo:y1,ceilPowerOfTwo:S1,floorPowerOfTwo:M1,setQuaternionFromProperEuler:E1,normalize:Gn,denormalize:$s},Fp=class Fp{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Fp.prototype.isVector2=!0;let mt=Fp;class Pa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3],u=s[a+0],m=s[a+1],x=s[a+2],S=s[a+3];if(h!==S||l!==u||c!==m||f!==x){let g=l*u+c*m+f*x+h*S;g<0&&(u=-u,m=-m,x=-x,S=-S,g=-g);let d=1-o;if(g<.9995){const v=Math.acos(g),E=Math.sin(v);d=Math.sin(d*v)/E,o=Math.sin(o*v)/E,l=l*d+u*o,c=c*d+m*o,f=f*d+x*o,h=h*d+S*o}else{l=l*d+u*o,c=c*d+m*o,f=f*d+x*o,h=h*d+S*o;const v=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=v,c*=v,f*=v,h*=v}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[a],u=s[a+1],m=s[a+2],x=s[a+3];return e[n]=o*x+f*h+l*m-c*u,e[n+1]=l*x+f*u+c*h-o*m,e[n+2]=c*x+f*m+o*u-l*h,e[n+3]=f*x-o*h-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),h=o(s/2),u=l(i/2),m=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=u*f*h+c*m*x,this._y=c*m*h-u*f*x,this._z=c*f*x+u*m*h,this._w=c*f*h-u*m*x;break;case"YXZ":this._x=u*f*h+c*m*x,this._y=c*m*h-u*f*x,this._z=c*f*x-u*m*h,this._w=c*f*h+u*m*x;break;case"ZXY":this._x=u*f*h-c*m*x,this._y=c*m*h+u*f*x,this._z=c*f*x+u*m*h,this._w=c*f*h-u*m*x;break;case"ZYX":this._x=u*f*h-c*m*x,this._y=c*m*h+u*f*x,this._z=c*f*x-u*m*h,this._w=c*f*h+u*m*x;break;case"YZX":this._x=u*f*h+c*m*x,this._y=c*m*h+u*f*x,this._z=c*f*x-u*m*h,this._w=c*f*h-u*m*x;break;case"XZY":this._x=u*f*h-c*m*x,this._y=c*m*h-u*f*x,this._z=c*f*x+u*m*h,this._w=c*f*h+u*m*x;break;default:et("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],f=n[6],h=n[10],u=i+o+h;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(f-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const kp=class kp{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(h0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(h0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),f=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*f,this.y=i+l*f+o*c-s*h,this.z=r+l*h+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this.z=yt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this.z=yt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return nd.copy(this).projectOnVector(e),this.sub(nd)}reflect(e){return this.sub(nd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};kp.prototype.isVector3=!0;let q=kp;const nd=new q,h0=new Pa,Bp=class Bp{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],h=i[7],u=i[2],m=i[5],x=i[8],S=r[0],g=r[3],d=r[6],v=r[1],E=r[4],M=r[7],T=r[2],w=r[5],R=r[8];return s[0]=a*S+o*v+l*T,s[3]=a*g+o*E+l*w,s[6]=a*d+o*M+l*R,s[1]=c*S+f*v+h*T,s[4]=c*g+f*E+h*w,s[7]=c*d+f*M+h*R,s[2]=u*S+m*v+x*T,s[5]=u*g+m*E+x*w,s[8]=u*d+m*M+x*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return n*a*f-n*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=f*a-o*c,u=o*l-f*s,m=c*s-a*l,x=n*h+i*u+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return e[0]=h*S,e[1]=(r*c-f*i)*S,e[2]=(o*i-r*a)*S,e[3]=u*S,e[4]=(f*n-r*l)*S,e[5]=(r*s-o*n)*S,e[6]=m*S,e[7]=(i*l-c*n)*S,e[8]=(a*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return ma("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(id.makeScale(e,n)),this}rotate(e){return ma("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(id.makeRotation(-e)),this}translate(e,n){return ma("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(id.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Bp.prototype.isMatrix3=!0;let ot=Bp;const id=new ot,p0=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),m0=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function w1(){const t={enabled:!0,workingColorSpace:Xc,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Ut&&(r.r=mr(r.r),r.g=mr(r.g),r.b=mr(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ut&&(r.r=ga(r.r),r.g=ga(r.g),r.b=ga(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Or?Yc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ma("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ma("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Xc]:{primaries:e,whitePoint:i,transfer:Yc,toXYZ:p0,fromXYZ:m0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:e,whitePoint:i,transfer:Ut,toXYZ:p0,fromXYZ:m0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),t}const wt=w1();function mr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ga(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ds;class T1{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ds===void 0&&(Ds=ko("canvas")),Ds.width=e.width,Ds.height=e.height;const r=Ds.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ds}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ko("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=mr(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(mr(n[i]/255)*255):n[i]=mr(n[i]);return{data:n,width:e.width,height:e.height}}else return et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let A1=0;class Rp{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:A1++}),this.uuid=Na(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(rd(r[a].image)):s.push(rd(r[a]))}else s=rd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function rd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?T1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(et("Texture: Unable to serialize Texture."),{})}let C1=0;const sd=new q;class Fn extends Rs{constructor(e=Fn.DEFAULT_IMAGE,n=Fn.DEFAULT_MAPPING,i=fr,r=fr,s=xn,a=hs,o=Di,l=li,c=Fn.DEFAULT_ANISOTROPY,f=Or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C1++}),this.uuid=Na(),this.name="",this.source=new Rp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(sd).x}get height(){return this.source.getSize(sd).y}get depth(){return this.source.getSize(sd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){et(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){et(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ff:e.x=e.x-Math.floor(e.x);break;case fr:e.x=e.x<0?0:1;break;case kf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ff:e.y=e.y-Math.floor(e.y);break;case fr:e.y=e.y<0?0:1;break;case kf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=Wx;Fn.DEFAULT_ANISOTROPY=1;const zp=class zp{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],u=l[1],m=l[5],x=l[9],S=l[2],g=l[6],d=l[10];if(Math.abs(f-u)<.01&&Math.abs(h-S)<.01&&Math.abs(x-g)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+S)<.1&&Math.abs(x+g)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(c+1)/2,M=(m+1)/2,T=(d+1)/2,w=(f+u)/4,R=(h+S)/4,_=(x+g)/4;return E>M&&E>T?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=w/i,s=R/i):M>T?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=w/r,s=_/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=R/s,r=_/s),this.set(i,r,s,n),this}let v=Math.sqrt((g-x)*(g-x)+(h-S)*(h-S)+(u-f)*(u-f));return Math.abs(v)<.001&&(v=1),this.x=(g-x)/v,this.y=(h-S)/v,this.z=(u-f)/v,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this.z=yt(this.z,e.z,n.z),this.w=yt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this.z=yt(this.z,e,n),this.w=yt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};zp.prototype.isVector4=!0;let Jt=zp;class R1 extends Rs{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Jt(0,0,e,n),this.scissorTest=!1,this.viewport=new Jt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new Fn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Rp(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends R1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Qx extends Fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=An,this.minFilter=An,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class b1 extends Fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=An,this.minFilter=An,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Kc=class Kc{constructor(e,n,i,r,s,a,o,l,c,f,h,u,m,x,S,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,f,h,u,m,x,S,g)}set(e,n,i,r,s,a,o,l,c,f,h,u,m,x,S,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=f,d[10]=h,d[14]=u,d[3]=m,d[7]=x,d[11]=S,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Us.setFromMatrixColumn(e,0).length(),s=1/Us.setFromMatrixColumn(e,1).length(),a=1/Us.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=a*f,m=a*h,x=o*f,S=o*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=m+x*c,n[5]=u-S*c,n[9]=-o*l,n[2]=S-u*c,n[6]=x+m*c,n[10]=a*l}else if(e.order==="YXZ"){const u=l*f,m=l*h,x=c*f,S=c*h;n[0]=u+S*o,n[4]=x*o-m,n[8]=a*c,n[1]=a*h,n[5]=a*f,n[9]=-o,n[2]=m*o-x,n[6]=S+u*o,n[10]=a*l}else if(e.order==="ZXY"){const u=l*f,m=l*h,x=c*f,S=c*h;n[0]=u-S*o,n[4]=-a*h,n[8]=x+m*o,n[1]=m+x*o,n[5]=a*f,n[9]=S-u*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const u=a*f,m=a*h,x=o*f,S=o*h;n[0]=l*f,n[4]=x*c-m,n[8]=u*c+S,n[1]=l*h,n[5]=S*c+u,n[9]=m*c-x,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const u=a*l,m=a*c,x=o*l,S=o*c;n[0]=l*f,n[4]=S-u*h,n[8]=x*h+m,n[1]=h,n[5]=a*f,n[9]=-o*f,n[2]=-c*f,n[6]=m*h+x,n[10]=u-S*h}else if(e.order==="XZY"){const u=a*l,m=a*c,x=o*l,S=o*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=u*h+S,n[5]=a*f,n[9]=m*h-x,n[2]=x*h-m,n[6]=o*f,n[10]=S*h+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(N1,e,P1)}lookAt(e,n,i){const r=this.elements;return ii.subVectors(e,n),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Tr.crossVectors(i,ii),Tr.lengthSq()===0&&(Math.abs(i.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Tr.crossVectors(i,ii)),Tr.normalize(),Tl.crossVectors(ii,Tr),r[0]=Tr.x,r[4]=Tl.x,r[8]=ii.x,r[1]=Tr.y,r[5]=Tl.y,r[9]=ii.y,r[2]=Tr.z,r[6]=Tl.z,r[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],h=i[5],u=i[9],m=i[13],x=i[2],S=i[6],g=i[10],d=i[14],v=i[3],E=i[7],M=i[11],T=i[15],w=r[0],R=r[4],_=r[8],C=r[12],I=r[1],U=r[5],O=r[9],F=r[13],L=r[2],G=r[6],te=r[10],j=r[14],V=r[3],H=r[7],P=r[11],b=r[15];return s[0]=a*w+o*I+l*L+c*V,s[4]=a*R+o*U+l*G+c*H,s[8]=a*_+o*O+l*te+c*P,s[12]=a*C+o*F+l*j+c*b,s[1]=f*w+h*I+u*L+m*V,s[5]=f*R+h*U+u*G+m*H,s[9]=f*_+h*O+u*te+m*P,s[13]=f*C+h*F+u*j+m*b,s[2]=x*w+S*I+g*L+d*V,s[6]=x*R+S*U+g*G+d*H,s[10]=x*_+S*O+g*te+d*P,s[14]=x*C+S*F+g*j+d*b,s[3]=v*w+E*I+M*L+T*V,s[7]=v*R+E*U+M*G+T*H,s[11]=v*_+E*O+M*te+T*P,s[15]=v*C+E*F+M*j+T*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],h=e[6],u=e[10],m=e[14],x=e[3],S=e[7],g=e[11],d=e[15],v=l*m-c*u,E=o*m-c*h,M=o*u-l*h,T=a*m-c*f,w=a*u-l*f,R=a*h-o*f;return n*(S*v-g*E+d*M)-i*(x*v-g*T+d*w)+r*(x*E-S*T+d*R)-s*(x*M-S*w+g*R)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],f=e[10];return n*(a*f-o*c)-i*(s*f-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=e[9],u=e[10],m=e[11],x=e[12],S=e[13],g=e[14],d=e[15],v=n*o-i*a,E=n*l-r*a,M=n*c-s*a,T=i*l-r*o,w=i*c-s*o,R=r*c-s*l,_=f*S-h*x,C=f*g-u*x,I=f*d-m*x,U=h*g-u*S,O=h*d-m*S,F=u*d-m*g,L=v*F-E*O+M*U+T*I-w*C+R*_;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/L;return e[0]=(o*F-l*O+c*U)*G,e[1]=(r*O-i*F-s*U)*G,e[2]=(S*R-g*w+d*T)*G,e[3]=(u*w-h*R-m*T)*G,e[4]=(l*I-a*F-c*C)*G,e[5]=(n*F-r*I+s*C)*G,e[6]=(g*M-x*R-d*E)*G,e[7]=(f*R-u*M+m*E)*G,e[8]=(a*O-o*I+c*_)*G,e[9]=(i*I-n*O-s*_)*G,e[10]=(x*w-S*M+d*v)*G,e[11]=(h*M-f*w-m*v)*G,e[12]=(o*C-a*U-l*_)*G,e[13]=(n*U-i*C+r*_)*G,e[14]=(S*E-x*T-g*v)*G,e[15]=(f*T-h*E+u*v)*G,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,f=a+a,h=o+o,u=s*c,m=s*f,x=s*h,S=a*f,g=a*h,d=o*h,v=l*c,E=l*f,M=l*h,T=i.x,w=i.y,R=i.z;return r[0]=(1-(S+d))*T,r[1]=(m+M)*T,r[2]=(x-E)*T,r[3]=0,r[4]=(m-M)*w,r[5]=(1-(u+d))*w,r[6]=(g+v)*w,r[7]=0,r[8]=(x+E)*R,r[9]=(g-v)*R,r[10]=(1-(u+S))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Us.set(r[0],r[1],r[2]).length();const o=Us.set(r[4],r[5],r[6]).length(),l=Us.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Ci.copy(this);const c=1/a,f=1/o,h=1/l;return Ci.elements[0]*=c,Ci.elements[1]*=c,Ci.elements[2]*=c,Ci.elements[4]*=f,Ci.elements[5]*=f,Ci.elements[6]*=f,Ci.elements[8]*=h,Ci.elements[9]*=h,Ci.elements[10]*=h,n.setFromRotationMatrix(Ci),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=Yi,l=!1){const c=this.elements,f=2*s/(n-e),h=2*s/(i-r),u=(n+e)/(n-e),m=(i+r)/(i-r);let x,S;if(l)x=s/(a-s),S=a*s/(a-s);else if(o===Yi)x=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===Fo)x=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Yi,l=!1){const c=this.elements,f=2/(n-e),h=2/(i-r),u=-(n+e)/(n-e),m=-(i+r)/(i-r);let x,S;if(l)x=1/(a-s),S=a/(a-s);else if(o===Yi)x=-2/(a-s),S=-(a+s)/(a-s);else if(o===Fo)x=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Kc.prototype.isMatrix4=!0;let qt=Kc;const Us=new q,Ci=new qt,N1=new q(0,0,0),P1=new q(1,1,1),Tr=new q,Tl=new q,ii=new q,g0=new qt,v0=new Pa;class Zr{constructor(e=0,n=0,i=0,r=Zr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],h=r[2],u=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:et("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return g0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(g0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return v0.setFromEuler(this),this.setFromQuaternion(v0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zr.DEFAULT_ORDER="XYZ";class e_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let I1=0;const x0=new q,Os=new Pa,ir=new qt,Al=new q,Va=new q,L1=new q,D1=new Pa,_0=new q(1,0,0),y0=new q(0,1,0),S0=new q(0,0,1),M0={type:"added"},U1={type:"removed"},Fs={type:"childadded",child:null},ad={type:"childremoved",child:null};class yn extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:I1++}),this.uuid=Na(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const e=new q,n=new Zr,i=new Pa,r=new q(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new qt},normalMatrix:{value:new ot}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new e_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Os.setFromAxisAngle(e,n),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,n){return Os.setFromAxisAngle(e,n),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(_0,e)}rotateY(e){return this.rotateOnAxis(y0,e)}rotateZ(e){return this.rotateOnAxis(S0,e)}translateOnAxis(e,n){return x0.copy(e).applyQuaternion(this.quaternion),this.position.add(x0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(_0,e)}translateY(e){return this.translateOnAxis(y0,e)}translateZ(e){return this.translateOnAxis(S0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ir.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Al.copy(e):Al.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ir.lookAt(Va,Al,this.up):ir.lookAt(Al,Va,this.up),this.quaternion.setFromRotationMatrix(ir),r&&(ir.extractRotation(r.matrixWorld),Os.setFromRotationMatrix(ir),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(M0),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(U1),ad.child=e,this.dispatchEvent(ad),ad.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ir.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ir.multiply(e.parent.matrixWorld)),e.applyMatrix4(ir),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(M0),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,e,L1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,D1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),h=a(e.shapes),u=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}yn.DEFAULT_UP=new q(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class vt extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const O1={type:"move"};class od{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const g=n.getJointPose(S,i),d=this._getHandJoint(c,S);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=f.position.distanceTo(h.position),m=.02,x=.005;c.inputState.pinching&&u>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(O1)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new vt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const t_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ar={h:0,s:0,l:0},Cl={h:0,s:0,l:0};function ld(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class St{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=wt.workingColorSpace){return this.r=e,this.g=n,this.b=i,wt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=wt.workingColorSpace){if(e=Cp(e,1),n=yt(n,0,1),i=yt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=ld(a,s,e+1/3),this.g=ld(a,s,e),this.b=ld(a,s,e-1/3)}return wt.colorSpaceToWorking(this,r),this}setStyle(e,n=ai){function i(s){s!==void 0&&parseFloat(s)<1&&et("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:et("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);et("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ai){const i=t_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):et("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}copyLinearToSRGB(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return wt.workingToColorSpace(Ln.copy(this),e),Math.round(yt(Ln.r*255,0,255))*65536+Math.round(yt(Ln.g*255,0,255))*256+Math.round(yt(Ln.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=wt.workingColorSpace){wt.workingToColorSpace(Ln.copy(this),n);const i=Ln.r,r=Ln.g,s=Ln.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=f<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=wt.workingColorSpace){return wt.workingToColorSpace(Ln.copy(this),n),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=ai){wt.workingToColorSpace(Ln.copy(this),e);const n=Ln.r,i=Ln.g,r=Ln.b;return e!==ai?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ar),this.setHSL(Ar.h+e,Ar.s+n,Ar.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ar),e.getHSL(Cl);const i=go(Ar.h,Cl.h,n),r=go(Ar.s,Cl.s,n),s=go(Ar.l,Cl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new St;St.NAMES=t_;class bp{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new St(e),this.density=n}clone(){return new bp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class F1 extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zr,this.environmentIntensity=1,this.environmentRotation=new Zr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ri=new q,rr=new q,cd=new q,sr=new q,ks=new q,Bs=new q,E0=new q,ud=new q,dd=new q,fd=new q,hd=new Jt,pd=new Jt,md=new Jt;class Li{constructor(e=new q,n=new q,i=new q){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Ri.subVectors(e,n),r.cross(Ri);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Ri.subVectors(r,n),rr.subVectors(i,n),cd.subVectors(e,n);const a=Ri.dot(Ri),o=Ri.dot(rr),l=Ri.dot(cd),c=rr.dot(rr),f=rr.dot(cd),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const u=1/h,m=(c*l-o*f)*u,x=(a*f-o*l)*u;return s.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,sr)===null?!1:sr.x>=0&&sr.y>=0&&sr.x+sr.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,sr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,sr.x),l.addScaledVector(a,sr.y),l.addScaledVector(o,sr.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return hd.setScalar(0),pd.setScalar(0),md.setScalar(0),hd.fromBufferAttribute(e,n),pd.fromBufferAttribute(e,i),md.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(hd,s.x),a.addScaledVector(pd,s.y),a.addScaledVector(md,s.z),a}static isFrontFacing(e,n,i,r){return Ri.subVectors(i,n),rr.subVectors(e,n),Ri.cross(rr).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),rr.subVectors(this.a,this.b),Ri.cross(rr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Li.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Li.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;ks.subVectors(r,i),Bs.subVectors(s,i),ud.subVectors(e,i);const l=ks.dot(ud),c=Bs.dot(ud);if(l<=0&&c<=0)return n.copy(i);dd.subVectors(e,r);const f=ks.dot(dd),h=Bs.dot(dd);if(f>=0&&h<=f)return n.copy(r);const u=l*h-f*c;if(u<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector(ks,a);fd.subVectors(e,s);const m=ks.dot(fd),x=Bs.dot(fd);if(x>=0&&m<=x)return n.copy(s);const S=m*c-l*x;if(S<=0&&c>=0&&x<=0)return o=c/(c-x),n.copy(i).addScaledVector(Bs,o);const g=f*x-m*h;if(g<=0&&h-f>=0&&m-x>=0)return E0.subVectors(s,r),o=(h-f)/(h-f+(m-x)),n.copy(r).addScaledVector(E0,o);const d=1/(g+S+u);return a=S*d,o=u*d,n.copy(i).addScaledVector(ks,a).addScaledVector(Bs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Xo{constructor(e=new q(1/0,1/0,1/0),n=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(bi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(bi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=bi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,bi):bi.fromBufferAttribute(s,a),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rl.copy(i.boundingBox)),Rl.applyMatrix4(e.matrixWorld),this.union(Rl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wa),bl.subVectors(this.max,Wa),zs.subVectors(e.a,Wa),Gs.subVectors(e.b,Wa),Hs.subVectors(e.c,Wa),Cr.subVectors(Gs,zs),Rr.subVectors(Hs,Gs),is.subVectors(zs,Hs);let n=[0,-Cr.z,Cr.y,0,-Rr.z,Rr.y,0,-is.z,is.y,Cr.z,0,-Cr.x,Rr.z,0,-Rr.x,is.z,0,-is.x,-Cr.y,Cr.x,0,-Rr.y,Rr.x,0,-is.y,is.x,0];return!gd(n,zs,Gs,Hs,bl)||(n=[1,0,0,0,1,0,0,0,1],!gd(n,zs,Gs,Hs,bl))?!1:(Nl.crossVectors(Cr,Rr),n=[Nl.x,Nl.y,Nl.z],gd(n,zs,Gs,Hs,bl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ar),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ar=[new q,new q,new q,new q,new q,new q,new q,new q],bi=new q,Rl=new Xo,zs=new q,Gs=new q,Hs=new q,Cr=new q,Rr=new q,is=new q,Wa=new q,bl=new q,Nl=new q,rs=new q;function gd(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){rs.fromArray(t,s);const o=r.x*Math.abs(rs.x)+r.y*Math.abs(rs.y)+r.z*Math.abs(rs.z),l=e.dot(rs),c=n.dot(rs),f=i.dot(rs);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const on=new q,Pl=new mt;let k1=0;class $n extends Rs{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:k1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=i1,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Pl.fromBufferAttribute(this,n),Pl.applyMatrix3(e),this.setXY(n,Pl.x,Pl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)on.fromBufferAttribute(this,n),on.applyMatrix3(e),this.setXYZ(n,on.x,on.y,on.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)on.fromBufferAttribute(this,n),on.applyMatrix4(e),this.setXYZ(n,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)on.fromBufferAttribute(this,n),on.applyNormalMatrix(e),this.setXYZ(n,on.x,on.y,on.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)on.fromBufferAttribute(this,n),on.transformDirection(e),this.setXYZ(n,on.x,on.y,on.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=$s(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=$s(n,this.array)),n}setX(e,n){return this.normalized&&(n=Gn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=$s(n,this.array)),n}setY(e,n){return this.normalized&&(n=Gn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=$s(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Gn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=$s(n,this.array)),n}setW(e,n){return this.normalized&&(n=Gn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Gn(n,this.array),i=Gn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Gn(n,this.array),i=Gn(i,this.array),r=Gn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Gn(n,this.array),i=Gn(i,this.array),r=Gn(r,this.array),s=Gn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class n_ extends $n{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class i_ extends $n{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Bt extends $n{constructor(e,n,i){super(new Float32Array(e),n,i)}}const B1=new Xo,ja=new q,vd=new q;class Yo{constructor(e=new q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):B1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ja.subVectors(e,this.center);const n=ja.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ja,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ja.copy(e.center).add(vd)),this.expandByPoint(ja.copy(e.center).sub(vd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let z1=0;const gi=new qt,xd=new yn,Vs=new q,ri=new Xo,Xa=new Xo,mn=new q;class nn extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:z1++}),this.uuid=Na(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(r1(e)?i_:n_)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ot().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return gi.makeRotationFromQuaternion(e),this.applyMatrix4(gi),this}rotateX(e){return gi.makeRotationX(e),this.applyMatrix4(gi),this}rotateY(e){return gi.makeRotationY(e),this.applyMatrix4(gi),this}rotateZ(e){return gi.makeRotationZ(e),this.applyMatrix4(gi),this}translate(e,n,i){return gi.makeTranslation(e,n,i),this.applyMatrix4(gi),this}scale(e,n,i){return gi.makeScale(e,n,i),this.applyMatrix4(gi),this}lookAt(e){return xd.lookAt(e),xd.updateMatrix(),this.applyMatrix4(xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Bt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&et("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];ri.setFromBufferAttribute(s),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Xa.setFromBufferAttribute(o),this.morphTargetsRelative?(mn.addVectors(ri.min,Xa.min),ri.expandByPoint(mn),mn.addVectors(ri.max,Xa.max),ri.expandByPoint(mn)):(ri.expandByPoint(Xa.min),ri.expandByPoint(Xa.max))}ri.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)mn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(mn));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)mn.fromBufferAttribute(o,c),l&&(Vs.fromBufferAttribute(e,c),mn.add(Vs)),r=Math.max(r,i.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new $n(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new q,l[_]=new q;const c=new q,f=new q,h=new q,u=new mt,m=new mt,x=new mt,S=new q,g=new q;function d(_,C,I){c.fromBufferAttribute(i,_),f.fromBufferAttribute(i,C),h.fromBufferAttribute(i,I),u.fromBufferAttribute(s,_),m.fromBufferAttribute(s,C),x.fromBufferAttribute(s,I),f.sub(c),h.sub(c),m.sub(u),x.sub(u);const U=1/(m.x*x.y-x.x*m.y);isFinite(U)&&(S.copy(f).multiplyScalar(x.y).addScaledVector(h,-m.y).multiplyScalar(U),g.copy(h).multiplyScalar(m.x).addScaledVector(f,-x.x).multiplyScalar(U),o[_].add(S),o[C].add(S),o[I].add(S),l[_].add(g),l[C].add(g),l[I].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let _=0,C=v.length;_<C;++_){const I=v[_],U=I.start,O=I.count;for(let F=U,L=U+O;F<L;F+=3)d(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const E=new q,M=new q,T=new q,w=new q;function R(_){T.fromBufferAttribute(r,_),w.copy(T);const C=o[_];E.copy(C),E.sub(T.multiplyScalar(T.dot(C))).normalize(),M.crossVectors(w,C);const U=M.dot(l[_])<0?-1:1;a.setXYZW(_,E.x,E.y,E.z,U)}for(let _=0,C=v.length;_<C;++_){const I=v[_],U=I.start,O=I.count;for(let F=U,L=U+O;F<L;F+=3)R(e.getX(F+0)),R(e.getX(F+1)),R(e.getX(F+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new $n(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);const r=new q,s=new q,a=new q,o=new q,l=new q,c=new q,f=new q,h=new q;if(e)for(let u=0,m=e.count;u<m;u+=3){const x=e.getX(u+0),S=e.getX(u+1),g=e.getX(u+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,S),a.fromBufferAttribute(n,g),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,g),o.add(f),l.add(f),c.add(f),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,m=n.count;u<m;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),a.fromBufferAttribute(n,u+2),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)mn.fromBufferAttribute(e,n),mn.normalize(),e.setXYZ(n,mn.x,mn.y,mn.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,h=o.normalized,u=new c.constructor(l.length*f);let m=0,x=0;for(let S=0,g=l.length;S<g;S++){o.isInterleavedBufferAttribute?m=l[S]*o.data.stride+o.offset:m=l[S]*f;for(let d=0;d<f;d++)u[x++]=c[m++]}return new $n(u,f,h)}if(this.index===null)return et("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new nn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,h=c.length;f<h;f++){const u=c[f],m=e(u,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,u=c.length;h<u;h++){const m=c[h];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let u=0,m=h.length;u<m;u++)f.push(h[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _d=new q,G1=new q,H1=new ot;class Ir{constructor(e=new q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=_d.subVectors(i,n).cross(G1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(_d),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||H1.getNormalMatrix(e),r=this.coplanarPoint(_d).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let V1=0;class bs extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:V1++}),this.uuid=Na(),this.name="",this.type="Material",this.blending=po,this.side=Ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ux,this.blendDst=Ox,this.blendEquation=qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=Do,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=KM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=td,this.stencilZFail=td,this.stencilZPass=td,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){et(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){et(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new St().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Ir().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new mt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new mt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const or=new q,yd=new q,Il=new q,Ll=new q;class Np{constructor(e=new q,n=new q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,or)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=or.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(or.copy(this.origin).addScaledVector(this.direction,n),or.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){yd.copy(e).add(n).multiplyScalar(.5),Il.copy(n).sub(e).normalize(),Ll.copy(this.origin).sub(yd);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Il),o=Ll.dot(this.direction),l=-Ll.dot(Il),c=Ll.lengthSq(),f=Math.abs(1-a*a);let h,u,m,x;if(f>0)if(h=a*l-o,u=a*o-l,x=s*f,h>=0)if(u>=-x)if(u<=x){const S=1/f;h*=S,u*=S,m=h*(h+a*u+2*o)+u*(a*h+u+2*l)+c}else u=s,h=Math.max(0,-(a*u+o)),m=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(a*u+o)),m=-h*h+u*(u+2*l)+c;else u<=-x?(h=Math.max(0,-(-a*s+o)),u=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+u*(u+2*l)+c):u<=x?(h=0,u=Math.min(Math.max(-s,-l),s),m=u*(u+2*l)+c):(h=Math.max(0,-(a*s+o)),u=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+u*(u+2*l)+c);else u=a>0?-s:s,h=Math.max(0,-(a*u+o)),m=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(yd).addScaledVector(Il,u),m}intersectSphere(e,n){if(e.radius<0)return null;or.subVectors(e.center,this.origin);const i=or.dot(this.direction),r=or.dot(or)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),f>=0?(s=(e.min.y-u.y)*f,a=(e.max.y-u.y)*f):(s=(e.max.y-u.y)*f,a=(e.min.y-u.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,or)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,f=o.z,h=e.x-a.x,u=e.y-a.y,m=e.z-a.z,x=n.x-a.x,S=n.y-a.y,g=n.z-a.z,d=i.x-a.x,v=i.y-a.y,E=i.z-a.z,M=Math.abs(l),T=Math.abs(c),w=Math.abs(f);let R,_,C,I,U,O,F,L,G,te,j,V;if(M>=T&&M>=w?(C=l,O=h,G=x,V=d,l>=0?(R=c,_=f,I=u,U=m,F=S,L=g,te=v,j=E):(R=f,_=c,I=m,U=u,F=g,L=S,te=E,j=v)):T>=w?(C=c,O=u,G=S,V=v,c>=0?(R=f,_=l,I=m,U=h,F=g,L=x,te=E,j=d):(R=l,_=f,I=h,U=m,F=x,L=g,te=d,j=E)):(C=f,O=m,G=g,V=E,f>=0?(R=l,_=c,I=h,U=u,F=x,L=S,te=d,j=v):(R=c,_=l,I=u,U=h,F=S,L=x,te=v,j=d)),C===0)return null;const H=R/C,P=_/C,b=1/C,ne=I-H*O,le=U-P*O,Me=F-H*G,xe=L-P*G,me=te-H*V,B=j-P*V,J=me*xe-B*Me,Q=ne*B-le*me,_e=Me*le-xe*ne;if(r){if(J<0||Q<0||_e<0)return null}else if((J<0||Q<0||_e<0)&&(J>0||Q>0||_e>0))return null;const de=J+Q+_e;if(de===0)return null;const De=b*(J*O+Q*G+_e*V);return(de>0?De<0:De>0)?null:this.at(De/de,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt extends bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zr,this.combine=Fx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const w0=new qt,ss=new Np,Dl=new Yo,T0=new q,Ul=new q,Ol=new q,Fl=new q,Sd=new q,kl=new q,A0=new q,Bl=new q;class oe extends yn{constructor(e=new nn,n=new rt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){kl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],h=s[l];f!==0&&(Sd.fromBufferAttribute(h,e),a?kl.addScaledVector(Sd,f):kl.addScaledVector(Sd.sub(n),f))}n.add(kl)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Dl.copy(i.boundingSphere),Dl.applyMatrix4(s),ss.copy(e.ray).recast(e.near),!(Dl.containsPoint(ss.origin)===!1&&(ss.intersectSphere(Dl,T0)===null||ss.origin.distanceToSquared(T0)>(e.far-e.near)**2))&&(w0.copy(s).invert(),ss.copy(e.ray).applyMatrix4(w0),!(i.boundingBox!==null&&ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ss)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,u=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,S=u.length;x<S;x++){const g=u[x],d=a[g.materialIndex],v=Math.max(g.start,m.start),E=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let M=v,T=E;M<T;M+=3){const w=o.getX(M),R=o.getX(M+1),_=o.getX(M+2);r=zl(this,d,e,i,c,f,h,w,R,_),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let g=x,d=S;g<d;g+=3){const v=o.getX(g),E=o.getX(g+1),M=o.getX(g+2);r=zl(this,a,e,i,c,f,h,v,E,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,S=u.length;x<S;x++){const g=u[x],d=a[g.materialIndex],v=Math.max(g.start,m.start),E=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let M=v,T=E;M<T;M+=3){const w=M,R=M+1,_=M+2;r=zl(this,d,e,i,c,f,h,w,R,_),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let g=x,d=S;g<d;g+=3){const v=g,E=g+1,M=g+2;r=zl(this,a,e,i,c,f,h,v,E,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function W1(t,e,n,i,r,s,a,o){let l;if(e.side===ei?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Ms,o),l===null)return null;Bl.copy(o),Bl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Bl);return c<n.near||c>n.far?null:{distance:c,point:Bl.clone(),object:t}}function zl(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Ul),t.getVertexPosition(l,Ol),t.getVertexPosition(c,Fl);const f=W1(t,e,n,i,Ul,Ol,Fl,A0);if(f){const h=new q;Li.getBarycoord(A0,Ul,Ol,Fl,h),r&&(f.uv=Li.getInterpolatedAttribute(r,o,l,c,h,new mt)),s&&(f.uv1=Li.getInterpolatedAttribute(s,o,l,c,h,new mt)),a&&(f.normal=Li.getInterpolatedAttribute(a,o,l,c,h,new q),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new q,materialIndex:0};Li.getNormal(Ul,Ol,Fl,u.normal),f.face=u,f.barycoord=h}return f}class j1 extends Fn{constructor(e=null,n=1,i=1,r,s,a,o,l,c=An,f=An,h,u){super(null,a,o,l,c,f,r,s,h,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const as=new Yo,X1=new mt(.5,.5),Gl=new q;class Pp{constructor(e=new Ir,n=new Ir,i=new Ir,r=new Ir,s=new Ir,a=new Ir){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Yi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],f=s[4],h=s[5],u=s[6],m=s[7],x=s[8],S=s[9],g=s[10],d=s[11],v=s[12],E=s[13],M=s[14],T=s[15];if(r[0].setComponents(c-a,m-f,d-x,T-v).normalize(),r[1].setComponents(c+a,m+f,d+x,T+v).normalize(),r[2].setComponents(c+o,m+h,d+S,T+E).normalize(),r[3].setComponents(c-o,m-h,d-S,T-E).normalize(),i)r[4].setComponents(l,u,g,M).normalize(),r[5].setComponents(c-l,m-u,d-g,T-M).normalize();else if(r[4].setComponents(c-l,m-u,d-g,T-M).normalize(),n===Yi)r[5].setComponents(c+l,m+u,d+g,T+M).normalize();else if(n===Fo)r[5].setComponents(l,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){as.center.set(0,0,0);const n=X1.distanceTo(e.center);return as.radius=.7071067811865476+n,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Gl.x=r.normal.x>0?e.max.x:e.min.x,Gl.y=r.normal.y>0?e.max.y:e.min.y,Gl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Gl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class to extends bs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const qc=new q,$c=new q,C0=new qt,Ya=new Np,Hl=new Yo,Md=new q,R0=new q;class Vl extends yn{constructor(e=new nn,n=new to){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)qc.fromBufferAttribute(n,r-1),$c.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=qc.distanceTo($c);e.setAttribute("lineDistance",new Bt(i,1))}else et("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Hl.copy(i.boundingSphere),Hl.applyMatrix4(r),Hl.radius+=s,e.ray.intersectsSphere(Hl)===!1)return;C0.copy(r).invert(),Ya.copy(e.ray).applyMatrix4(C0);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=i.index,u=i.attributes.position;if(f!==null){const m=Math.max(0,a.start),x=Math.min(f.count,a.start+a.count);for(let S=m,g=x-1;S<g;S+=c){const d=f.getX(S),v=f.getX(S+1),E=Wl(this,e,Ya,l,d,v,S);E&&n.push(E)}if(this.isLineLoop){const S=f.getX(x-1),g=f.getX(m),d=Wl(this,e,Ya,l,S,g,x-1);d&&n.push(d)}}else{const m=Math.max(0,a.start),x=Math.min(u.count,a.start+a.count);for(let S=m,g=x-1;S<g;S+=c){const d=Wl(this,e,Ya,l,S,S+1,S);d&&n.push(d)}if(this.isLineLoop){const S=Wl(this,e,Ya,l,x-1,m,x-1);S&&n.push(S)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Wl(t,e,n,i,r,s,a){const o=t.geometry.attributes.position;if(qc.fromBufferAttribute(o,r),$c.fromBufferAttribute(o,s),n.distanceSqToSegment(qc,$c,Md,R0)>i)return;Md.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Md);if(!(c<e.near||c>e.far))return{distance:c,point:R0.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}class r_ extends bs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new St(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const b0=new qt,gh=new Np,jl=new Yo,Xl=new q;class Y1 extends yn{constructor(e=new nn,n=new r_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),jl.copy(i.boundingSphere),jl.applyMatrix4(r),jl.radius+=s,e.ray.intersectsSphere(jl)===!1)return;b0.copy(r).invert(),gh.copy(e.ray).applyMatrix4(b0);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const u=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let x=u,S=m;x<S;x++){const g=c.getX(x);Xl.fromBufferAttribute(h,g),N0(Xl,g,l,r,e,n,this)}}else{const u=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let x=u,S=m;x<S;x++)Xl.fromBufferAttribute(h,x),N0(Xl,x,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function N0(t,e,n,i,r,s,a){const o=gh.distanceSqToPoint(t);if(o<n){const l=new q;gh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class s_ extends Fn{constructor(e=[],n=Es,i,r,s,a,o,l,c,f){super(e,n,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zo extends Fn{constructor(e,n,i=Ji,r,s,a,o=An,l=An,c,f=yr,h=1){if(f!==yr&&f!==ps)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:h};super(u,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class q1 extends zo{constructor(e,n=Ji,i=Es,r,s,a=An,o=An,l,c=yr){const f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,n,i,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class a_ extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class It extends nn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],h=[];let u=0,m=0;x("z","y","x",-1,-1,i,n,e,a,s,0),x("z","y","x",1,-1,i,n,-e,a,s,1),x("x","z","y",1,1,e,i,n,r,a,2),x("x","z","y",1,-1,e,i,-n,r,a,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(f,3)),this.setAttribute("uv",new Bt(h,2));function x(S,g,d,v,E,M,T,w,R,_,C){const I=M/R,U=T/_,O=M/2,F=T/2,L=w/2,G=R+1,te=_+1;let j=0,V=0;const H=new q;for(let P=0;P<te;P++){const b=P*U-F;for(let ne=0;ne<G;ne++){const le=ne*I-O;H[S]=le*v,H[g]=b*E,H[d]=L,c.push(H.x,H.y,H.z),H[S]=0,H[g]=0,H[d]=w>0?1:-1,f.push(H.x,H.y,H.z),h.push(ne/R),h.push(1-P/_),j+=1}}for(let P=0;P<_;P++)for(let b=0;b<R;b++){const ne=u+b+G*P,le=u+b+G*(P+1),Me=u+(b+1)+G*(P+1),xe=u+(b+1)+G*P;l.push(ne,le,xe),l.push(le,Me,xe),V+=6}o.addGroup(m,V,C),m+=V,u+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new It(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Fr extends nn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],a=[],o=[],l=[],c=new q,f=new mt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,u=3;h<=n;h++,u+=3){const m=i+h/n*r;c.x=e*Math.cos(m),c.y=e*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),f.x=(a[u]/e+1)/2,f.y=(a[u+1]/e+1)/2,l.push(f.x,f.y)}for(let h=1;h<=n;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Bt(a,3)),this.setAttribute("normal",new Bt(o,3)),this.setAttribute("uv",new Bt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class kt extends nn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],h=[],u=[],m=[];let x=0;const S=[],g=i/2;let d=0;v(),a===!1&&(e>0&&E(!0),n>0&&E(!1)),this.setIndex(f),this.setAttribute("position",new Bt(h,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(m,2));function v(){const M=new q,T=new q;let w=0;const R=(n-e)/i;for(let _=0;_<=s;_++){const C=[],I=_/s,U=I*(n-e)+e;for(let O=0;O<=r;O++){const F=O/r,L=F*l+o,G=Math.sin(L),te=Math.cos(L);T.x=U*G,T.y=-I*i+g,T.z=U*te,h.push(T.x,T.y,T.z),M.set(G,R,te).normalize(),u.push(M.x,M.y,M.z),m.push(F,1-I),C.push(x++)}S.push(C)}for(let _=0;_<r;_++)for(let C=0;C<s;C++){const I=S[C][_],U=S[C+1][_],O=S[C+1][_+1],F=S[C][_+1];(e>0||C!==0)&&(f.push(I,U,F),w+=3),(n>0||C!==s-1)&&(f.push(U,O,F),w+=3)}c.addGroup(d,w,0),d+=w}function E(M){const T=x,w=new mt,R=new q;let _=0;const C=M===!0?e:n,I=M===!0?1:-1;for(let O=1;O<=r;O++)h.push(0,g*I,0),u.push(0,I,0),m.push(.5,.5),x++;const U=x;for(let O=0;O<=r;O++){const L=O/r*l+o,G=Math.cos(L),te=Math.sin(L);R.x=C*te,R.y=g*I,R.z=C*G,h.push(R.x,R.y,R.z),u.push(0,I,0),w.x=G*.5+.5,w.y=te*.5*I+.5,m.push(w.x,w.y),x++}for(let O=0;O<r;O++){const F=T+O,L=U+O;M===!0?f.push(L,L+1,F):f.push(L+1,L,F),_+=3}c.addGroup(d,_,M===!0?1:2),d+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class kr extends kt{constructor(e=1,n=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,n,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new kr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ip extends nn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),c(i),f(),this.setAttribute("position",new Bt(s,3)),this.setAttribute("normal",new Bt(s.slice(),3)),this.setAttribute("uv",new Bt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const E=new q,M=new q,T=new q;for(let w=0;w<n.length;w+=3)m(n[w+0],E),m(n[w+1],M),m(n[w+2],T),l(E,M,T,v)}function l(v,E,M,T){const w=T+1,R=[];for(let _=0;_<=w;_++){R[_]=[];const C=v.clone().lerp(M,_/w),I=E.clone().lerp(M,_/w),U=w-_;for(let O=0;O<=U;O++)O===0&&_===w?R[_][O]=C:R[_][O]=C.clone().lerp(I,O/U)}for(let _=0;_<w;_++)for(let C=0;C<2*(w-_)-1;C++){const I=Math.floor(C/2);C%2===0?(u(R[_][I+1]),u(R[_+1][I]),u(R[_][I])):(u(R[_][I+1]),u(R[_+1][I+1]),u(R[_+1][I]))}}function c(v){const E=new q;for(let M=0;M<s.length;M+=3)E.x=s[M+0],E.y=s[M+1],E.z=s[M+2],E.normalize().multiplyScalar(v),s[M+0]=E.x,s[M+1]=E.y,s[M+2]=E.z}function f(){const v=new q;for(let E=0;E<s.length;E+=3){v.x=s[E+0],v.y=s[E+1],v.z=s[E+2];const M=g(v)/2/Math.PI+.5,T=d(v)/Math.PI+.5;a.push(M,1-T)}x(),h()}function h(){for(let v=0;v<a.length;v+=6){const E=a[v+0],M=a[v+2],T=a[v+4],w=Math.max(E,M,T),R=Math.min(E,M,T);w>.9&&R<.1&&(E<.2&&(a[v+0]+=1),M<.2&&(a[v+2]+=1),T<.2&&(a[v+4]+=1))}}function u(v){s.push(v.x,v.y,v.z)}function m(v,E){const M=v*3;E.x=e[M+0],E.y=e[M+1],E.z=e[M+2]}function x(){const v=new q,E=new q,M=new q,T=new q,w=new mt,R=new mt,_=new mt;for(let C=0,I=0;C<s.length;C+=9,I+=6){v.set(s[C+0],s[C+1],s[C+2]),E.set(s[C+3],s[C+4],s[C+5]),M.set(s[C+6],s[C+7],s[C+8]),w.set(a[I+0],a[I+1]),R.set(a[I+2],a[I+3]),_.set(a[I+4],a[I+5]),T.copy(v).add(E).add(M).divideScalar(3);const U=g(T);S(w,I+0,v,U),S(R,I+2,E,U),S(_,I+4,M,U)}}function S(v,E,M,T){T<0&&v.x===1&&(a[E]=v.x-1),M.x===0&&M.z===0&&(a[E]=T/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ip(e.vertices,e.indices,e.radius,e.detail)}}class Lp extends Ip{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Lp(e.radius,e.detail)}}class Ta extends nn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,h=e/o,u=n/l,m=[],x=[],S=[],g=[];for(let d=0;d<f;d++){const v=d*u-a;for(let E=0;E<c;E++){const M=E*h-s;x.push(M,-v,0),S.push(0,0,1),g.push(E/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<o;v++){const E=v+c*d,M=v+c*(d+1),T=v+1+c*(d+1),w=v+1+c*d;m.push(E,M,w),m.push(M,T,w)}this.setIndex(m),this.setAttribute("position",new Bt(x,3)),this.setAttribute("normal",new Bt(S,3)),this.setAttribute("uv",new Bt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.width,e.height,e.widthSegments,e.heightSegments)}}class gn extends nn{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],f=[];let h=e;const u=(n-e)/r,m=new q,x=new mt;for(let S=0;S<=r;S++){for(let g=0;g<=i;g++){const d=s+g/i*a;m.x=h*Math.cos(d),m.y=h*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),x.x=(m.x/n+1)/2,x.y=(m.y/n+1)/2,f.push(x.x,x.y)}h+=u}for(let S=0;S<r;S++){const g=S*(i+1);for(let d=0;d<i;d++){const v=d+g,E=v,M=v+i+1,T=v+i+2,w=v+1;o.push(E,M,w),o.push(M,T,w)}}this.setIndex(o),this.setAttribute("position",new Bt(l,3)),this.setAttribute("normal",new Bt(c,3)),this.setAttribute("uv",new Bt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gn(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Yn extends nn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const f=[],h=new q,u=new q,m=[],x=[],S=[],g=[];for(let d=0;d<=i;d++){const v=[],E=d/i,M=a+E*o,T=e*Math.cos(M),w=Math.sqrt(e*e-T*T);let R=0;d===0&&a===0?R=.5/n:d===i&&l===Math.PI&&(R=-.5/n);for(let _=0;_<=n;_++){const C=_/n,I=r+C*s;h.x=-w*Math.cos(I),h.y=T,h.z=w*Math.sin(I),x.push(h.x,h.y,h.z),u.copy(h).normalize(),S.push(u.x,u.y,u.z),g.push(C+R,1-E),v.push(c++)}f.push(v)}for(let d=0;d<i;d++)for(let v=0;v<n;v++){const E=f[d][v+1],M=f[d][v],T=f[d+1][v],w=f[d+1][v+1];(d!==0||a>0)&&m.push(E,M,w),(d!==i-1||l<Math.PI)&&m.push(M,T,w)}this.setIndex(m),this.setAttribute("position",new Bt(x,3)),this.setAttribute("normal",new Bt(S,3)),this.setAttribute("uv",new Bt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Lr extends nn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],f=[],h=[],u=new q,m=new q,x=new q;for(let S=0;S<=i;S++){const g=a+S/i*o;for(let d=0;d<=r;d++){const v=d/r*s;m.x=(e+n*Math.cos(g))*Math.cos(v),m.y=(e+n*Math.cos(g))*Math.sin(v),m.z=n*Math.sin(g),c.push(m.x,m.y,m.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),x.subVectors(m,u).normalize(),f.push(x.x,x.y,x.z),h.push(d/r),h.push(S/i)}}for(let S=1;S<=i;S++)for(let g=1;g<=r;g++){const d=(r+1)*S+g-1,v=(r+1)*(S-1)+g-1,E=(r+1)*(S-1)+g,M=(r+1)*S+g;l.push(d,v,M),l.push(v,E,M)}this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(f,3)),this.setAttribute("uv",new Bt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Aa(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(P0(r))r.isRenderTargetTexture?(et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(P0(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function Hn(t){const e={};for(let n=0;n<t.length;n++){const i=Aa(t[n]);for(const r in i)e[r]=i[r]}return e}function P0(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function $1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function o_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const K1={clone:Aa,merge:Hn};var J1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Z1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qi extends bs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=J1,this.fragmentShader=Z1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Aa(e.uniforms),this.uniformsGroups=$1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new St().setHex(r.value);break;case"v2":this.uniforms[i].value=new mt().fromArray(r.value);break;case"v3":this.uniforms[i].value=new q().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Jt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new ot().fromArray(r.value);break;case"m4":this.uniforms[i].value=new qt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Q1 extends Qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vi extends bs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mh,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class eE extends bs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tE extends bs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ed={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(I0(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!I0(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function I0(t){try{const e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class nE{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(f){o++,s===!1&&r.onStart!==void 0&&r.onStart(f,a,o),s=!0},this.itemEnd=function(f){a++,r.onProgress!==void 0&&r.onProgress(f,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,h){return c.push(f,h),this},this.removeHandler=function(f){const h=c.indexOf(f);return h!==-1&&c.splice(h,2),this},this.getHandler=function(f){for(let h=0,u=c.length;h<u;h+=2){const m=c[h],x=c[h+1];if(m.global&&(m.lastIndex=0),m.test(f))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const iE=new nE;class Dp{constructor(e){this.manager=e!==void 0?e:iE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Dp.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ws=new WeakMap;class rE extends Dp{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ed.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0);else{let h=Ws.get(a);h===void 0&&(h=[],Ws.set(a,h)),h.push({onLoad:n,onError:r})}return a}const o=ko("img");function l(){f(),n&&n(this);const h=Ws.get(this)||[];for(let u=0;u<h.length;u++){const m=h[u];m.onLoad&&m.onLoad(this)}Ws.delete(this),s.manager.itemEnd(e)}function c(h){f(),r&&r(h),Ed.remove(`image:${e}`);const u=Ws.get(this)||[];for(let m=0;m<u.length;m++){const x=u[m];x.onError&&x.onError(h)}Ws.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ed.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class sE extends Dp{constructor(e){super(e)}load(e,n,i,r){const s=new Fn,a=new rE(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Up extends yn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const wd=new qt,L0=new q,D0=new q;class l_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pp,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;L0.setFromMatrixPosition(e.matrixWorld),n.position.copy(L0),D0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(D0),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){wd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(wd,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===Fo||e.reversedDepth?n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),n.multiply(wd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Yl=new q,ql=new Pa,Gi=new q;class c_ extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Yl,ql,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yl,ql,Gi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Yl,ql,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yl,ql,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const br=new q,U0=new mt,O0=new mt;class oi extends c_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Bo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bo*2*Math.atan(Math.tan(mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(br.x,br.y).multiplyScalar(-e/br.z),br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(br.x,br.y).multiplyScalar(-e/br.z)}getViewSize(e,n){return this.getViewBounds(e,U0,O0),n.subVectors(O0,U0)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(mo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class aE extends l_{constructor(){super(new oi(90,1,.5,500)),this.isPointLightShadow=!0}}class gc extends Up{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new aE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Op extends c_{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class oE extends l_{constructor(){super(new Op(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class F0 extends Up{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new oE}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class lE extends Up{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const js=-90,Xs=1;class cE extends yn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new oi(js,Xs,e,n);r.layers=this.layers,this.add(r);const s=new oi(js,Xs,e,n);s.layers=this.layers,this.add(s);const a=new oi(js,Xs,e,n);a.layers=this.layers,this.add(a);const o=new oi(js,Xs,e,n);o.layers=this.layers,this.add(o);const l=new oi(js,Xs,e,n);l.layers=this.layers,this.add(l);const c=new oi(js,Xs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===Yi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(h,u,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class uE extends oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class dE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,et("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const Gp=class Gp{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Gp.prototype.isMatrix2=!0;let k0=Gp;function B0(t,e,n,i){const r=fE(i);switch(n){case $x:return t*e;case Jx:return t*e/r.components*r.byteLength;case Mp:return t*e/r.components*r.byteLength;case ws:return t*e*2/r.components*r.byteLength;case Ep:return t*e*2/r.components*r.byteLength;case Kx:return t*e*3/r.components*r.byteLength;case Di:return t*e*4/r.components*r.byteLength;case wp:return t*e*4/r.components*r.byteLength;case fc:case hc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case pc:case mc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case zf:case Hf:return Math.max(t,16)*Math.max(e,8)/4;case Bf:case Gf:return Math.max(t,8)*Math.max(e,8)/2;case Vf:case Wf:case Xf:case Yf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case jf:case Wc:case qf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $f:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Kf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Jf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Zf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Qf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case eh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case th:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case nh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ih:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case rh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case sh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ah:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case oh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case lh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ch:case uh:case dh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case fh:case hh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case jc:case ph:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function fE(t){switch(t){case li:case jx:return{byteLength:1,components:1};case Uo:case Xx:case Zi:return{byteLength:2,components:1};case yp:case Sp:return{byteLength:2,components:4};case Ji:case _p:case Xi:return{byteLength:4,components:1};case Yx:case qx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vp}}));typeof window<"u"&&(window.__THREE__?et("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function u_(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function hE(t){const e=new WeakMap;function n(o,l){const c=o.array,f=o.usage,h=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,f),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const f=l.array,h=l.updateRanges;if(t.bindBuffer(c,o),h.length===0)t.bufferSubData(c,0,f);else{h.sort((m,x)=>m.start-x.start);let u=0;for(let m=1;m<h.length;m++){const x=h[u],S=h[m];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++u,h[u]=S)}h.length=u+1;for(let m=0,x=h.length;m<x;m++){const S=h[m];t.bufferSubData(c,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var pE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mE=`#ifdef USE_ALPHAHASH
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
#endif`,gE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_E=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yE=`#ifdef USE_AOMAP
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
#endif`,SE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ME=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,EE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,TE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,AE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,CE=`#ifdef USE_IRIDESCENCE
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
#endif`,RE=`#ifdef USE_BUMPMAP
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
#endif`,bE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,NE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,IE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,DE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,UE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,OE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,FE=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,kE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,BE=`vec3 transformedNormal = objectNormal;
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
#endif`,zE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,GE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,HE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,VE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,WE="gl_FragColor = linearToOutputTexel( gl_FragColor );",jE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,XE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,YE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,qE=`#ifdef USE_ENVMAP
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
#endif`,$E=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,KE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,JE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ew=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tw=`#ifdef USE_GRADIENTMAP
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
}`,nw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sw=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,aw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ow=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,fw=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hw=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gw=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,vw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_w=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ew=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ww=`#if defined( USE_POINTS_UV )
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
#endif`,Tw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Aw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,Pw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Lw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ow=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Fw=`#ifdef USE_NORMALMAP
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
#endif`,kw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ww=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$w=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Jw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Qw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,eT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tT=`#ifdef USE_SKINNING
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
#endif`,nT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iT=`#ifdef USE_SKINNING
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
#endif`,rT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oT=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lT=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cT=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mT=`uniform sampler2D t2D;
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
}`,gT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_T=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yT=`#include <common>
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
}`,ST=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,MT=`#define DISTANCE
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
}`,ET=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,wT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,TT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AT=`uniform float scale;
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
}`,CT=`uniform vec3 diffuse;
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
}`,RT=`#include <common>
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
}`,bT=`uniform vec3 diffuse;
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
}`,NT=`#define LAMBERT
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
}`,PT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,IT=`#define MATCAP
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
}`,LT=`#define MATCAP
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
}`,DT=`#define NORMAL
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
}`,UT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,OT=`#define PHONG
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
}`,FT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,kT=`#define STANDARD
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
}`,BT=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,zT=`#define TOON
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
}`,GT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,HT=`uniform float size;
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
}`,VT=`uniform vec3 diffuse;
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
}`,WT=`#include <common>
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
}`,jT=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,XT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,YT=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:pE,alphahash_pars_fragment:mE,alphamap_fragment:gE,alphamap_pars_fragment:vE,alphatest_fragment:xE,alphatest_pars_fragment:_E,aomap_fragment:yE,aomap_pars_fragment:SE,batching_pars_vertex:ME,batching_vertex:EE,begin_vertex:wE,beginnormal_vertex:TE,bsdfs:AE,iridescence_fragment:CE,bumpmap_pars_fragment:RE,clipping_planes_fragment:bE,clipping_planes_pars_fragment:NE,clipping_planes_pars_vertex:PE,clipping_planes_vertex:IE,color_fragment:LE,color_pars_fragment:DE,color_pars_vertex:UE,color_vertex:OE,common:FE,cube_uv_reflection_fragment:kE,defaultnormal_vertex:BE,displacementmap_pars_vertex:zE,displacementmap_vertex:GE,emissivemap_fragment:HE,emissivemap_pars_fragment:VE,colorspace_fragment:WE,colorspace_pars_fragment:jE,envmap_fragment:XE,envmap_common_pars_fragment:YE,envmap_pars_fragment:qE,envmap_pars_vertex:$E,envmap_physical_pars_fragment:aw,envmap_vertex:KE,fog_vertex:JE,fog_pars_vertex:ZE,fog_fragment:QE,fog_pars_fragment:ew,gradientmap_pars_fragment:tw,lightmap_pars_fragment:nw,lights_lambert_fragment:iw,lights_lambert_pars_fragment:rw,lights_pars_begin:sw,lights_toon_fragment:ow,lights_toon_pars_fragment:lw,lights_phong_fragment:cw,lights_phong_pars_fragment:uw,lights_physical_fragment:dw,lights_physical_pars_fragment:fw,lights_fragment_begin:hw,lights_fragment_maps:pw,lights_fragment_end:mw,lightprobes_pars_fragment:gw,logdepthbuf_fragment:vw,logdepthbuf_pars_fragment:xw,logdepthbuf_pars_vertex:_w,logdepthbuf_vertex:yw,map_fragment:Sw,map_pars_fragment:Mw,map_particle_fragment:Ew,map_particle_pars_fragment:ww,metalnessmap_fragment:Tw,metalnessmap_pars_fragment:Aw,morphinstance_vertex:Cw,morphcolor_vertex:Rw,morphnormal_vertex:bw,morphtarget_pars_vertex:Nw,morphtarget_vertex:Pw,normal_fragment_begin:Iw,normal_fragment_maps:Lw,normal_pars_fragment:Dw,normal_pars_vertex:Uw,normal_vertex:Ow,normalmap_pars_fragment:Fw,clearcoat_normal_fragment_begin:kw,clearcoat_normal_fragment_maps:Bw,clearcoat_pars_fragment:zw,iridescence_pars_fragment:Gw,opaque_fragment:Hw,packing:Vw,premultiplied_alpha_fragment:Ww,project_vertex:jw,dithering_fragment:Xw,dithering_pars_fragment:Yw,roughnessmap_fragment:qw,roughnessmap_pars_fragment:$w,shadowmap_pars_fragment:Kw,shadowmap_pars_vertex:Jw,shadowmap_vertex:Zw,shadowmask_pars_fragment:Qw,skinbase_vertex:eT,skinning_pars_vertex:tT,skinning_vertex:nT,skinnormal_vertex:iT,specularmap_fragment:rT,specularmap_pars_fragment:sT,tonemapping_fragment:aT,tonemapping_pars_fragment:oT,transmission_fragment:lT,transmission_pars_fragment:cT,uv_pars_fragment:uT,uv_pars_vertex:dT,uv_vertex:fT,worldpos_vertex:hT,background_vert:pT,background_frag:mT,backgroundCube_vert:gT,backgroundCube_frag:vT,cube_vert:xT,cube_frag:_T,depth_vert:yT,depth_frag:ST,distance_vert:MT,distance_frag:ET,equirect_vert:wT,equirect_frag:TT,linedashed_vert:AT,linedashed_frag:CT,meshbasic_vert:RT,meshbasic_frag:bT,meshlambert_vert:NT,meshlambert_frag:PT,meshmatcap_vert:IT,meshmatcap_frag:LT,meshnormal_vert:DT,meshnormal_frag:UT,meshphong_vert:OT,meshphong_frag:FT,meshphysical_vert:kT,meshphysical_frag:BT,meshtoon_vert:zT,meshtoon_frag:GT,points_vert:HT,points_frag:VT,shadow_vert:WT,shadow_frag:jT,sprite_vert:XT,sprite_frag:YT},Ie={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Wi={basic:{uniforms:Hn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Hn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new St(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Hn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Hn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Hn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new St(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Hn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Hn([Ie.points,Ie.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Hn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Hn([Ie.common,Ie.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Hn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Hn([Ie.sprite,Ie.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Hn([Ie.common,Ie.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Hn([Ie.lights,Ie.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Wi.physical={uniforms:Hn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const $l={r:0,b:0,g:0},qT=new qt,d_=new ot;d_.set(-1,0,0,0,1,0,0,0,1);function $T(t,e,n,i,r,s){const a=new St(0);let o=r===!0?0:1,l,c,f=null,h=0,u=null;function m(v){let E=v.isScene===!0?v.background:null;if(E&&E.isTexture){const M=v.backgroundBlurriness>0;E=e.get(E,M)}return E}function x(v){let E=!1;const M=m(v);M===null?g(a,o):M&&M.isColor&&(g(M,1),E=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function S(v,E){const M=m(E);M&&(M.isCubeTexture||M.mapping===pu)?(c===void 0&&(c=new oe(new It(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:Aa(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(qT.makeRotationFromEuler(E.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(d_),c.material.toneMapped=wt.getTransfer(M.colorSpace)!==Ut,(f!==M||h!==M.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,f=M,h=M.version,u=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new oe(new Ta(2,2),new Qi({name:"BackgroundMaterial",uniforms:Aa(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:Ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=wt.getTransfer(M.colorSpace)!==Ut,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,f=M,h=M.version,u=t.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,E){v.getRGB($l,o_(t)),n.buffers.color.setClear($l.r,$l.g,$l.b,E,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,E=1){a.set(v),o=E,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:x,addToRenderList:S,dispose:d}}function KT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(U,O,F,L,G){let te=!1;const j=h(U,L,F,O);s!==j&&(s=j,c(s.object)),te=m(U,L,F,G),te&&x(U,L,F,G),G!==null&&e.update(G,t.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,M(U,O,F,L),G!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return t.createVertexArray()}function c(U){return t.bindVertexArray(U)}function f(U){return t.deleteVertexArray(U)}function h(U,O,F,L){const G=L.wireframe===!0;let te=i[O.id];te===void 0&&(te={},i[O.id]=te);const j=U.isInstancedMesh===!0?U.id:0;let V=te[j];V===void 0&&(V={},te[j]=V);let H=V[F.id];H===void 0&&(H={},V[F.id]=H);let P=H[G];return P===void 0&&(P=u(l()),H[G]=P),P}function u(U){const O=[],F=[],L=[];for(let G=0;G<n;G++)O[G]=0,F[G]=0,L[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:F,attributeDivisors:L,object:U,attributes:{},index:null}}function m(U,O,F,L){const G=s.attributes,te=O.attributes;let j=0;const V=F.getAttributes();for(const H in V)if(V[H].location>=0){const b=G[H];let ne=te[H];if(ne===void 0&&(H==="instanceMatrix"&&U.instanceMatrix&&(ne=U.instanceMatrix),H==="instanceColor"&&U.instanceColor&&(ne=U.instanceColor)),b===void 0||b.attribute!==ne||ne&&b.data!==ne.data)return!0;j++}return s.attributesNum!==j||s.index!==L}function x(U,O,F,L){const G={},te=O.attributes;let j=0;const V=F.getAttributes();for(const H in V)if(V[H].location>=0){let b=te[H];b===void 0&&(H==="instanceMatrix"&&U.instanceMatrix&&(b=U.instanceMatrix),H==="instanceColor"&&U.instanceColor&&(b=U.instanceColor));const ne={};ne.attribute=b,b&&b.data&&(ne.data=b.data),G[H]=ne,j++}s.attributes=G,s.attributesNum=j,s.index=L}function S(){const U=s.newAttributes;for(let O=0,F=U.length;O<F;O++)U[O]=0}function g(U){d(U,0)}function d(U,O){const F=s.newAttributes,L=s.enabledAttributes,G=s.attributeDivisors;F[U]=1,L[U]===0&&(t.enableVertexAttribArray(U),L[U]=1),G[U]!==O&&(t.vertexAttribDivisor(U,O),G[U]=O)}function v(){const U=s.newAttributes,O=s.enabledAttributes;for(let F=0,L=O.length;F<L;F++)O[F]!==U[F]&&(t.disableVertexAttribArray(F),O[F]=0)}function E(U,O,F,L,G,te,j){j===!0?t.vertexAttribIPointer(U,O,F,G,te):t.vertexAttribPointer(U,O,F,L,G,te)}function M(U,O,F,L){S();const G=L.attributes,te=F.getAttributes(),j=O.defaultAttributeValues;for(const V in te){const H=te[V];if(H.location>=0){let P=G[V];if(P===void 0&&(V==="instanceMatrix"&&U.instanceMatrix&&(P=U.instanceMatrix),V==="instanceColor"&&U.instanceColor&&(P=U.instanceColor)),P!==void 0){const b=P.normalized,ne=P.itemSize,le=e.get(P);if(le===void 0)continue;const Me=le.buffer,xe=le.type,me=le.bytesPerElement,B=xe===t.INT||xe===t.UNSIGNED_INT||P.gpuType===_p;if(P.isInterleavedBufferAttribute){const J=P.data,Q=J.stride,_e=P.offset;if(J.isInstancedInterleavedBuffer){for(let de=0;de<H.locationSize;de++)d(H.location+de,J.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let de=0;de<H.locationSize;de++)g(H.location+de);t.bindBuffer(t.ARRAY_BUFFER,Me);for(let de=0;de<H.locationSize;de++)E(H.location+de,ne/H.locationSize,xe,b,Q*me,(_e+ne/H.locationSize*de)*me,B)}else{if(P.isInstancedBufferAttribute){for(let J=0;J<H.locationSize;J++)d(H.location+J,P.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let J=0;J<H.locationSize;J++)g(H.location+J);t.bindBuffer(t.ARRAY_BUFFER,Me);for(let J=0;J<H.locationSize;J++)E(H.location+J,ne/H.locationSize,xe,b,ne*me,ne/H.locationSize*J*me,B)}}else if(j!==void 0){const b=j[V];if(b!==void 0)switch(b.length){case 2:t.vertexAttrib2fv(H.location,b);break;case 3:t.vertexAttrib3fv(H.location,b);break;case 4:t.vertexAttrib4fv(H.location,b);break;default:t.vertexAttrib1fv(H.location,b)}}}}v()}function T(){C();for(const U in i){const O=i[U];for(const F in O){const L=O[F];for(const G in L){const te=L[G];for(const j in te)f(te[j].object),delete te[j];delete L[G]}}delete i[U]}}function w(U){if(i[U.id]===void 0)return;const O=i[U.id];for(const F in O){const L=O[F];for(const G in L){const te=L[G];for(const j in te)f(te[j].object),delete te[j];delete L[G]}}delete i[U.id]}function R(U){for(const O in i){const F=i[O];for(const L in F){const G=F[L];if(G[U.id]===void 0)continue;const te=G[U.id];for(const j in te)f(te[j].object),delete te[j];delete G[U.id]}}}function _(U){for(const O in i){const F=i[O],L=U.isInstancedMesh===!0?U.id:0,G=F[L];if(G!==void 0){for(const te in G){const j=G[te];for(const V in j)f(j[V].object),delete j[V];delete G[te]}delete F[L],Object.keys(F).length===0&&delete i[O]}}}function C(){I(),a=!0,s!==r&&(s=r,c(s.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:I,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:g,disableUnusedAttributes:v}}function JT(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,f){f!==0&&(t.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function o(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let u=0;for(let m=0;m<f;m++)u+=c[m];n.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function ZT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==Di&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const _=R===Zi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==li&&R!==Xi&&!_&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(et("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&et("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:M,maxSamples:T,samples:w}}function QT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Ir,o=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const m=h.length!==0||u||i!==0||r;return r=u,i=h.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){n=f(h,u,0)},this.setState=function(h,u,m){const x=h.clippingPlanes,S=h.clipIntersection,g=h.clipShadows,d=t.get(h);if(!r||x===null||x.length===0||s&&!g)s?f(null):c();else{const v=s?0:i,E=v*4;let M=d.clippingState||null;l.value=M,M=f(x,u,E,m);for(let T=0;T!==E;++T)M[T]=n[T];d.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,u,m,x){const S=h!==null?h.length:0;let g=null;if(S!==0){if(g=l.value,x!==!0||g===null){const d=m+S*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<d)&&(g=new Float32Array(d));for(let E=0,M=m;E!==S;++E,M+=4)a.copy(h[E]).applyMatrix4(v,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}const la=4,e2=6,t2=20,n2=256,qa=new Op,z0=new St;let Td=null,Ad=0,Cd=0,Rd=!1;const i2=new q,os=new q;class G0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=i2}=s;Td=this._renderer.getRenderTarget(),Ad=this._renderer.getActiveCubeFace(),Cd=this._renderer.getActiveMipmapLevel(),Rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=W0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=V0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Td,Ad,Cd),this._renderer.xr.enabled=Rd,e.scissorTest=!1,Ys(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Es||e.mapping===wa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Td=this._renderer.getRenderTarget(),Ad=this._renderer.getActiveCubeFace(),Cd=this._renderer.getActiveMipmapLevel(),Rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:Zi,format:Di,colorSpace:Xc,depthBuffer:!1},r=H0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=H0(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=r2(s)),this._blurMaterial=a2(s,e,n),this._ggxMaterial=s2(s,e,n)}return r}_compileMaterial(e){const n=new oe(new nn,e);this._renderer.compile(n,qa)}_sceneToCubeUV(e,n,i,r,s){const l=new oi(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,m=h.toneMapping;h.getClearColor(z0),h.toneMapping=Ki,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new oe(new It,new rt({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,g=S.material;let d=!1;const v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,d=!0):(g.color.copy(z0),d=!0);for(let E=0;E<6;E++){const M=E%3;M===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[E],s.y,s.z)):M===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[E]));const T=this._cubeSize;Ys(r,M*T,E>2?T:0,T,T),h.setRenderTarget(r),d&&h.render(S,l),h.render(e,l)}h.toneMapping=m,h.autoClear=u,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Es||e.mapping===wa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=W0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=V0());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ys(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,qa)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),u=c*1.25,m=h*u,{_lodMax:x}=this,S=this._sizeLods[i],g=3*S*(i>x-la?i-x+la:0),d=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=x-n,Ys(s,g,d,3*S,2*S),r.setRenderTarget(s),r.render(o,qa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-i,Ys(e,g,d,3*S,2*S),r.setRenderTarget(e),r.render(o,qa)}_blur(e,n,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,n,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,n,i,r,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const f=this._sizeLods[r],h=3*f*(r>this._lodMax-la?r-this._lodMax+la:0),u=4*(this._cubeSize-f);Ys(n,h,u,3*f,2*f),a.setRenderTarget(n),a.render(l,qa)}}function r2(t){const e=[],n=[];let i=t;const r=t-la+1+e2;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),l=-o,c=1+o,f=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,u=6,m=3,x=new Float32Array(m*u*h),S=new Float32Array(m*u*h);for(let d=0;d<h;d++){const v=d%3*2/3-1,E=d>2?0:-1,M=[v,E,0,v+2/3,E,0,v+2/3,E+1,0,v,E,0,v+2/3,E+1,0,v,E+1,0];x.set(M,m*u*d);for(let T=0;T<u;T++){const w=f[T*2]*2-1,R=f[T*2+1]*2-1;d===0?os.set(1,R,w):d===1?os.set(-w,1,-R):d===2?os.set(-w,R,1):d===3?os.set(-1,R,-w):d===4?os.set(-w,-1,R):os.set(w,R,-1),os.toArray(S,(d*u+T)*m)}}const g=new nn;g.setAttribute("position",new $n(x,m)),g.setAttribute("outputDirection",new $n(S,m)),n.push(new oe(g,null)),i>la&&i--}return{lodMeshes:n,sizeLods:e}}function H0(t,e,n){const i=new Fi(t,e,n);return i.texture.mapping=pu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ys(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function s2(t,e,n){return new Qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:n2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function a2(t,e,n){return new Qi({name:"SphericalGaussianBlur",defines:{SAMPLES:t2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:mu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function V0(){return new Qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mu(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function W0(){return new Qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function mu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class f_ extends Fi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new s_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new It(5,5,5),s=new Qi({name:"CubemapFromEquirect",uniforms:Aa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ei,blending:pr});s.uniforms.tEquirect.value=n;const a=new oe(r,s),o=n.minFilter;return n.minFilter===hs&&(n.minFilter=xn),new cE(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function o2(t){let e=new WeakMap,n=new WeakMap,i=null;function r(u,m=!1){return u==null?null:m?a(u):s(u)}function s(u){if(u&&u.isTexture){const m=u.mapping;if(m===Zu||m===Qu)if(e.has(u)){const x=e.get(u).texture;return o(x,u.mapping)}else{const x=u.image;if(x&&x.height>0){const S=new f_(x.height);return S.fromEquirectangularTexture(t,u),e.set(u,S),u.addEventListener("dispose",c),o(S.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const m=u.mapping,x=m===Zu||m===Qu,S=m===Es||m===wa;if(x||S){let g=n.get(u);const d=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return i===null&&(i=new G0(t)),g=x?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{const v=u.image;return x&&v&&v.height>0||S&&v&&l(v)?(i===null&&(i=new G0(t)),g=x?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",f),g.texture):null}}}return u}function o(u,m){return m===Zu?u.mapping=Es:m===Qu&&(u.mapping=wa),u}function l(u){let m=0;const x=6;for(let S=0;S<x;S++)u[S]!==void 0&&m++;return m===x}function c(u){const m=u.target;m.removeEventListener("dispose",c);const x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function f(u){const m=u.target;m.removeEventListener("dispose",f);const x=n.get(m);x!==void 0&&(n.delete(m),x.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function l2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ma("WebGLRenderer: "+i+" extension not supported."),r}}}function c2(t,e,n,i){const r={},s=new WeakMap;function a(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const x in u.attributes)e.remove(u.attributes[x]);u.removeEventListener("dispose",a),delete r[u.id];const m=s.get(u);m&&(e.remove(m),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(h,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,n.memory.geometries++),u}function l(h){const u=h.attributes;for(const m in u)e.update(u[m],t.ARRAY_BUFFER)}function c(h){const u=[],m=h.index,x=h.attributes.position;let S=0;if(x===void 0)return;if(m!==null){const v=m.array;S=m.version;for(let E=0,M=v.length;E<M;E+=3){const T=v[E+0],w=v[E+1],R=v[E+2];u.push(T,w,w,R,R,T)}}else{const v=x.array;S=x.version;for(let E=0,M=v.length/3-1;E<M;E+=3){const T=E+0,w=E+1,R=E+2;u.push(T,w,w,R,R,T)}}const g=new(x.count>=65535?i_:n_)(u,1);g.version=S;const d=s.get(h);d&&e.remove(d),s.set(h,g)}function f(h){const u=s.get(h);if(u){const m=h.index;m!==null&&u.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:f}}function u2(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,u){t.drawElements(i,u,s,h*a),n.update(u,i,1)}function c(h,u,m){m!==0&&(t.drawElementsInstanced(i,u,s,h*a,m),n.update(u,i,m))}function f(h,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,h,0,m);let S=0;for(let g=0;g<m;g++)S+=u[g];n.update(S,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function d2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:Nt("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function f2(t,e,n){const i=new WeakMap,r=new Jt;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0;let u=i.get(o);if(u===void 0||u.count!==h){let I=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",I)};var m=I;u!==void 0&&u.texture.dispose();const x=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let M=0;x===!0&&(M=1),S===!0&&(M=2),g===!0&&(M=3);let T=o.attributes.position.count*M,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const R=new Float32Array(T*w*4*h),_=new Qx(R,T,w,h);_.type=Xi,_.needsUpdate=!0;const C=M*4;for(let U=0;U<h;U++){const O=d[U],F=v[U],L=E[U],G=T*w*4*U;for(let te=0;te<O.count;te++){const j=te*C;x===!0&&(r.fromBufferAttribute(O,te),R[G+j+0]=r.x,R[G+j+1]=r.y,R[G+j+2]=r.z,R[G+j+3]=0),S===!0&&(r.fromBufferAttribute(F,te),R[G+j+4]=r.x,R[G+j+5]=r.y,R[G+j+6]=r.z,R[G+j+7]=0),g===!0&&(r.fromBufferAttribute(L,te),R[G+j+8]=r.x,R[G+j+9]=r.y,R[G+j+10]=r.z,R[G+j+11]=L.itemSize===4?r.w:1)}}u={count:h,texture:_,size:new mt(T,w)},i.set(o,u),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let x=0;for(let g=0;g<c.length;g++)x+=c[g];const S=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function h2(t,e,n,i,r){let s=new WeakMap;function a(c){const f=r.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==f&&(e.update(u),s.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==f&&(m.update(),s.set(m,f))}return u}function o(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:a,dispose:o}}const p2={[kx]:"LINEAR_TONE_MAPPING",[Bx]:"REINHARD_TONE_MAPPING",[zx]:"CINEON_TONE_MAPPING",[xp]:"ACES_FILMIC_TONE_MAPPING",[Hx]:"AGX_TONE_MAPPING",[Vx]:"NEUTRAL_TONE_MAPPING",[Gx]:"CUSTOM_TONE_MAPPING"};function m2(t,e,n,i,r,s){const a=new Fi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new nn;c.setAttribute("position",new Bt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Bt([0,2,0,0,2,0],2));const f=new Q1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new oe(c,f),u=new Op(-1,1,1,-1,0,1);let m=null,x=null,S=!1,g,d=null,v=[],E=!1;this.setSize=function(M,T){a.setSize(M,T),o!==null&&o.setSize(M,T),l!==null&&l.setSize(M,T);for(let w=0;w<v.length;w++){const R=v[w];R.setSize&&R.setSize(M,T)}},this.setEffects=function(M){v=M,E=v.length>0&&v[0].isRenderPass===!0;const T=a.width,w=a.height;v.length>0&&o===null&&(o=new Fi(T,w,{type:Zi,depthBuffer:!1,stencilBuffer:!1}),l=new Fi(T,w,{type:Zi,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<v.length;R++){const _=v[R];_.setSize&&_.setSize(T,w)}},this.begin=function(M,T){if(S||M.toneMapping===Ki&&v.length===0)return!1;if(d=T,T!==null){const w=T.width,R=T.height;(a.width!==w||a.height!==R)&&this.setSize(w,R)}return E===!1&&M.setRenderTarget(a),g=M.toneMapping,M.toneMapping=Ki,!0},this.hasRenderPass=function(){return E},this.end=function(M,T){M.toneMapping=g,S=!0;let w=a,R=o;for(let _=0;_<v.length;_++){const C=v[_];C.enabled!==!1&&(C.render(M,R,w,T),C.needsSwap!==!1&&(w=R,R=R===o?l:o))}if(m!==M.outputColorSpace||x!==M.toneMapping){m=M.outputColorSpace,x=M.toneMapping,f.defines={},wt.getTransfer(m)===Ut&&(f.defines.SRGB_TRANSFER="");const _=p2[x];_&&(f.defines[_]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=w.texture,M.setRenderTarget(d),M.render(h,u),d=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}const h_=new Fn,vh=new zo(1,1),p_=new Qx,m_=new b1,g_=new s_,j0=[],X0=[],Y0=new Float32Array(16),q0=new Float32Array(9),$0=new Float32Array(4);function Ia(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=j0[r];if(s===void 0&&(s=new Float32Array(r),j0[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function fn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function hn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function gu(t,e){let n=X0[e];n===void 0&&(n=new Int32Array(e),X0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function g2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function v2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(fn(n,e))return;t.uniform2fv(this.addr,e),hn(n,e)}}function x2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(fn(n,e))return;t.uniform3fv(this.addr,e),hn(n,e)}}function _2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(fn(n,e))return;t.uniform4fv(this.addr,e),hn(n,e)}}function y2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(fn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),hn(n,e)}else{if(fn(n,i))return;$0.set(i),t.uniformMatrix2fv(this.addr,!1,$0),hn(n,i)}}function S2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(fn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),hn(n,e)}else{if(fn(n,i))return;q0.set(i),t.uniformMatrix3fv(this.addr,!1,q0),hn(n,i)}}function M2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(fn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),hn(n,e)}else{if(fn(n,i))return;Y0.set(i),t.uniformMatrix4fv(this.addr,!1,Y0),hn(n,i)}}function E2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function w2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(fn(n,e))return;t.uniform2iv(this.addr,e),hn(n,e)}}function T2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(fn(n,e))return;t.uniform3iv(this.addr,e),hn(n,e)}}function A2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(fn(n,e))return;t.uniform4iv(this.addr,e),hn(n,e)}}function C2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function R2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(fn(n,e))return;t.uniform2uiv(this.addr,e),hn(n,e)}}function b2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(fn(n,e))return;t.uniform3uiv(this.addr,e),hn(n,e)}}function N2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(fn(n,e))return;t.uniform4uiv(this.addr,e),hn(n,e)}}function P2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(vh.compareFunction=n.isReversedDepthBuffer()?Ap:Tp,s=vh):s=h_,n.setTexture2D(e||s,r)}function I2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||m_,r)}function L2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||g_,r)}function D2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||p_,r)}function U2(t){switch(t){case 5126:return g2;case 35664:return v2;case 35665:return x2;case 35666:return _2;case 35674:return y2;case 35675:return S2;case 35676:return M2;case 5124:case 35670:return E2;case 35667:case 35671:return w2;case 35668:case 35672:return T2;case 35669:case 35673:return A2;case 5125:return C2;case 36294:return R2;case 36295:return b2;case 36296:return N2;case 35678:case 36198:case 36298:case 36306:case 35682:return P2;case 35679:case 36299:case 36307:return I2;case 35680:case 36300:case 36308:case 36293:return L2;case 36289:case 36303:case 36311:case 36292:return D2}}function O2(t,e){t.uniform1fv(this.addr,e)}function F2(t,e){const n=Ia(e,this.size,2);t.uniform2fv(this.addr,n)}function k2(t,e){const n=Ia(e,this.size,3);t.uniform3fv(this.addr,n)}function B2(t,e){const n=Ia(e,this.size,4);t.uniform4fv(this.addr,n)}function z2(t,e){const n=Ia(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function G2(t,e){const n=Ia(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function H2(t,e){const n=Ia(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function V2(t,e){t.uniform1iv(this.addr,e)}function W2(t,e){t.uniform2iv(this.addr,e)}function j2(t,e){t.uniform3iv(this.addr,e)}function X2(t,e){t.uniform4iv(this.addr,e)}function Y2(t,e){t.uniform1uiv(this.addr,e)}function q2(t,e){t.uniform2uiv(this.addr,e)}function $2(t,e){t.uniform3uiv(this.addr,e)}function K2(t,e){t.uniform4uiv(this.addr,e)}function J2(t,e,n){const i=this.cache,r=e.length,s=gu(n,r);fn(i,s)||(t.uniform1iv(this.addr,s),hn(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=vh:a=h_;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function Z2(t,e,n){const i=this.cache,r=e.length,s=gu(n,r);fn(i,s)||(t.uniform1iv(this.addr,s),hn(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||m_,s[a])}function Q2(t,e,n){const i=this.cache,r=e.length,s=gu(n,r);fn(i,s)||(t.uniform1iv(this.addr,s),hn(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||g_,s[a])}function eA(t,e,n){const i=this.cache,r=e.length,s=gu(n,r);fn(i,s)||(t.uniform1iv(this.addr,s),hn(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||p_,s[a])}function tA(t){switch(t){case 5126:return O2;case 35664:return F2;case 35665:return k2;case 35666:return B2;case 35674:return z2;case 35675:return G2;case 35676:return H2;case 5124:case 35670:return V2;case 35667:case 35671:return W2;case 35668:case 35672:return j2;case 35669:case 35673:return X2;case 5125:return Y2;case 36294:return q2;case 36295:return $2;case 36296:return K2;case 35678:case 36198:case 36298:case 36306:case 35682:return J2;case 35679:case 36299:case 36307:return Z2;case 35680:case 36300:case 36308:case 36293:return Q2;case 36289:case 36303:case 36311:case 36292:return eA}}class nA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=U2(n.type)}}class iA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=tA(n.type)}}class rA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const bd=/(\w+)(\])?(\[|\.)?/g;function K0(t,e){t.seq.push(e),t.map[e.id]=e}function sA(t,e,n){const i=t.name,r=i.length;for(bd.lastIndex=0;;){const s=bd.exec(i),a=bd.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){K0(n,c===void 0?new nA(o,t,e):new iA(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new rA(o),K0(n,h)),n=h}}}class vc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);sA(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function J0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const aA=37297;let oA=0;function lA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Z0=new ot;function cA(t){wt._getMatrix(Z0,wt.workingColorSpace,t);const e=`mat3( ${Z0.elements.map(n=>n.toFixed(4))} )`;switch(wt.getTransfer(t)){case Yc:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return et("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Q0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+lA(t.getShaderSource(e),o)}else return s}function uA(t,e){const n=cA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const dA={[kx]:"Linear",[Bx]:"Reinhard",[zx]:"Cineon",[xp]:"ACESFilmic",[Hx]:"AgX",[Vx]:"Neutral",[Gx]:"Custom"};function fA(t,e){const n=dA[e];return n===void 0?(et("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Kl=new q;function hA(){wt.getLuminanceCoefficients(Kl);const t=Kl.x.toFixed(4),e=Kl.y.toFixed(4),n=Kl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(no).join(`
`)}function mA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function gA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function no(t){return t!==""}function eg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vA=/^[ \t]*#include +<([\w\d./]+)>/gm;function xh(t){return t.replace(vA,_A)}const xA=new Map;function _A(t,e){let n=pt[e];if(n===void 0){const i=xA.get(e);if(i!==void 0)n=pt[i],et('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return xh(n)}const yA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ng(t){return t.replace(yA,SA)}function SA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ig(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
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
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const MA={[dc]:"SHADOWMAP_TYPE_PCF",[eo]:"SHADOWMAP_TYPE_VSM"};function EA(t){return MA[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const wA={[Es]:"ENVMAP_TYPE_CUBE",[wa]:"ENVMAP_TYPE_CUBE",[pu]:"ENVMAP_TYPE_CUBE_UV"};function TA(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":wA[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const AA={[wa]:"ENVMAP_MODE_REFRACTION"};function CA(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":AA[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const RA={[Fx]:"ENVMAP_BLENDING_MULTIPLY",[jM]:"ENVMAP_BLENDING_MIX",[XM]:"ENVMAP_BLENDING_ADD"};function bA(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":RA[t.combine]||"ENVMAP_BLENDING_NONE"}function NA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function PA(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=EA(n),c=TA(n),f=CA(n),h=bA(n),u=NA(n),m=pA(n),x=mA(s),S=r.createProgram();let g,d,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(no).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(no).join(`
`),d.length>0&&(d+=`
`)):(g=[ig(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(no).join(`
`),d=[ig(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ki?"#define TONE_MAPPING":"",n.toneMapping!==Ki?pt.tonemapping_pars_fragment:"",n.toneMapping!==Ki?fA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,uA("linearToOutputTexel",n.outputColorSpace),hA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(no).join(`
`)),a=xh(a),a=eg(a,n),a=tg(a,n),o=xh(o),o=eg(o,n),o=tg(o,n),a=ng(a),o=ng(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",n.glslVersion===c0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===c0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=v+g+a,M=v+d+o,T=J0(r,r.VERTEX_SHADER,E),w=J0(r,r.FRAGMENT_SHADER,M);r.attachShader(S,T),r.attachShader(S,w),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function R(U){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(S)||"",F=r.getShaderInfoLog(T)||"",L=r.getShaderInfoLog(w)||"",G=O.trim(),te=F.trim(),j=L.trim();let V=!0,H=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,T,w);else{const P=Q0(r,T,"vertex"),b=Q0(r,w,"fragment");Nt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+G+`
`+P+`
`+b)}else G!==""?et("WebGLProgram: Program Info Log:",G):(te===""||j==="")&&(H=!1);H&&(U.diagnostics={runnable:V,programLog:G,vertexShader:{log:te,prefix:g},fragmentShader:{log:j,prefix:d}})}r.deleteShader(T),r.deleteShader(w),_=new vc(r,S),C=gA(r,S)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let C;this.getAttributes=function(){return C===void 0&&R(this),C};let I=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(S,aA)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=oA++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=T,this.fragmentShader=w,this}let IA=0;class LA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new DA(e),n.set(e,i)),i}}class DA{constructor(e){this.id=IA++,this.code=e,this.usedTimes=0}}function UA(t){return t===ws||t===Wc||t===jc}function OA(t,e,n,i,r,s){const a=new e_,o=new LA,l=new Set,c=[],f=new Map,h=i.logarithmicDepthBuffer;let u=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function S(_,C,I,U,O,F){const L=U.fog,G=O.geometry,te=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?U.environment:null,j=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,V=e.get(_.envMap||te,j),H=V&&V.mapping===pu?V.image.height:null,P=m[_.type];_.precision!==null&&(u=i.getMaxPrecision(_.precision),u!==_.precision&&et("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const b=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ne=b!==void 0?b.length:0;let le=0;G.morphAttributes.position!==void 0&&(le=1),G.morphAttributes.normal!==void 0&&(le=2),G.morphAttributes.color!==void 0&&(le=3);let Me,xe,me,B;if(P){const Et=Wi[P];Me=Et.vertexShader,xe=Et.fragmentShader}else{Me=_.vertexShader,xe=_.fragmentShader;const Et=o.getVertexShaderStage(_),Tt=o.getFragmentShaderStage(_);o.update(_,Et,Tt),me=Et.id,B=Tt.id}const J=t.getRenderTarget(),Q=t.state.buffers.depth.getReversed(),_e=O.isInstancedMesh===!0,de=O.isBatchedMesh===!0,De=!!_.map,Qe=!!_.matcap,ve=!!V,Ye=!!_.aoMap,Je=!!_.lightMap,je=!!_.bumpMap&&_.wireframe===!1,st=!!_.normalMap,lt=!!_.displacementMap,dt=!!_.emissiveMap,ae=!!_.metalnessMap,ye=!!_.roughnessMap,D=_.anisotropy>0,Ue=_.clearcoat>0,Pe=_.dispersion>0,N=_.retroreflectivity>0,y=_.iridescence>0,W=_.sheen>0,X=_.transmission>0,$=D&&!!_.anisotropyMap,he=Ue&&!!_.clearcoatMap,pe=Ue&&!!_.clearcoatNormalMap,Z=Ue&&!!_.clearcoatRoughnessMap,se=y&&!!_.iridescenceMap,fe=y&&!!_.iridescenceThicknessMap,qe=W&&!!_.sheenColorMap,Te=W&&!!_.sheenRoughnessMap,Ee=!!_.specularMap,$e=!!_.specularColorMap,Fe=!!_.specularIntensityMap,ze=X&&!!_.transmissionMap,k=X&&!!_.thicknessMap,Ae=!!_.gradientMap,re=!!_.alphaMap,we=_.alphaTest>0,be=!!_.alphaHash,ce=!!_.extensions;let Xe=Ki;_.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Xe=t.toneMapping);const ke={shaderID:P,shaderType:_.type,shaderName:_.name,vertexShader:Me,fragmentShader:xe,defines:_.defines,customVertexShaderID:me,customFragmentShaderID:B,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:de,batchingColor:de&&O._colorsTexture!==null,instancing:_e,instancingColor:_e&&O.instanceColor!==null,instancingMorph:_e&&O.morphTexture!==null,outputColorSpace:J===null?t.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:wt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:De,matcap:Qe,envMap:ve,envMapMode:ve&&V.mapping,envMapCubeUVHeight:H,aoMap:Ye,lightMap:Je,bumpMap:je,normalMap:st,displacementMap:lt,emissiveMap:dt,normalMapObjectSpace:st&&_.normalMapType===$M,normalMapTangentSpace:st&&_.normalMapType===mh,packedNormalMap:st&&_.normalMapType===mh&&UA(_.normalMap.format),metalnessMap:ae,roughnessMap:ye,anisotropy:D,anisotropyMap:$,clearcoat:Ue,clearcoatMap:he,clearcoatNormalMap:pe,clearcoatRoughnessMap:Z,dispersion:Pe,retroreflection:N,iridescence:y,iridescenceMap:se,iridescenceThicknessMap:fe,sheen:W,sheenColorMap:qe,sheenRoughnessMap:Te,specularMap:Ee,specularColorMap:$e,specularIntensityMap:Fe,transmission:X,transmissionMap:ze,thicknessMap:k,gradientMap:Ae,opaque:_.transparent===!1&&_.blending===po&&_.alphaToCoverage===!1,alphaMap:re,alphaTest:we,alphaHash:be,combine:_.combine,mapUv:De&&x(_.map.channel),aoMapUv:Ye&&x(_.aoMap.channel),lightMapUv:Je&&x(_.lightMap.channel),bumpMapUv:je&&x(_.bumpMap.channel),normalMapUv:st&&x(_.normalMap.channel),displacementMapUv:lt&&x(_.displacementMap.channel),emissiveMapUv:dt&&x(_.emissiveMap.channel),metalnessMapUv:ae&&x(_.metalnessMap.channel),roughnessMapUv:ye&&x(_.roughnessMap.channel),anisotropyMapUv:$&&x(_.anisotropyMap.channel),clearcoatMapUv:he&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:pe&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Te&&x(_.sheenRoughnessMap.channel),specularMapUv:Ee&&x(_.specularMap.channel),specularColorMapUv:$e&&x(_.specularColorMap.channel),specularIntensityMapUv:Fe&&x(_.specularIntensityMap.channel),transmissionMapUv:ze&&x(_.transmissionMap.channel),thicknessMapUv:k&&x(_.thicknessMap.channel),alphaMapUv:re&&x(_.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(st||D),vertexNormals:!!G.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!G.attributes.uv&&(De||re),fog:!!L,useFog:_.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||G.attributes.normal===void 0&&st===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Q,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:le,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:Xe,decodeVideoTexture:De&&_.map.isVideoTexture===!0&&wt.getTransfer(_.map.colorSpace)===Ut,decodeVideoTextureEmissive:dt&&_.emissiveMap.isVideoTexture===!0&&wt.getTransfer(_.emissiveMap.colorSpace)===Ut,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Wt,flipSided:_.side===ei,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ce&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&_.extensions.multiDraw===!0||de)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ke.vertexUv1s=l.has(1),ke.vertexUv2s=l.has(2),ke.vertexUv3s=l.has(3),l.clear(),ke}function g(_){const C=[];if(_.shaderID?C.push(_.shaderID):(C.push(_.customVertexShaderID),C.push(_.customFragmentShaderID)),_.defines!==void 0)for(const I in _.defines)C.push(I),C.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(d(C,_),v(C,_),C.push(t.outputColorSpace)),C.push(_.customProgramCacheKey),C.join()}function d(_,C){_.push(C.precision),_.push(C.outputColorSpace),_.push(C.envMapMode),_.push(C.envMapCubeUVHeight),_.push(C.mapUv),_.push(C.alphaMapUv),_.push(C.lightMapUv),_.push(C.aoMapUv),_.push(C.bumpMapUv),_.push(C.normalMapUv),_.push(C.displacementMapUv),_.push(C.emissiveMapUv),_.push(C.metalnessMapUv),_.push(C.roughnessMapUv),_.push(C.anisotropyMapUv),_.push(C.clearcoatMapUv),_.push(C.clearcoatNormalMapUv),_.push(C.clearcoatRoughnessMapUv),_.push(C.iridescenceMapUv),_.push(C.iridescenceThicknessMapUv),_.push(C.sheenColorMapUv),_.push(C.sheenRoughnessMapUv),_.push(C.specularMapUv),_.push(C.specularColorMapUv),_.push(C.specularIntensityMapUv),_.push(C.transmissionMapUv),_.push(C.thicknessMapUv),_.push(C.combine),_.push(C.fogExp2),_.push(C.sizeAttenuation),_.push(C.morphTargetsCount),_.push(C.morphAttributeCount),_.push(C.numSunLights),_.push(C.numDirLights),_.push(C.numPointLights),_.push(C.numSpotLights),_.push(C.numSpotLightMaps),_.push(C.numHemiLights),_.push(C.numRectAreaLights),_.push(C.numSunLightShadows),_.push(C.numDirLightShadows),_.push(C.numPointLightShadows),_.push(C.numSpotLightShadows),_.push(C.numSpotLightShadowsWithMaps),_.push(C.numLightProbes),_.push(C.shadowMapType),_.push(C.toneMapping),_.push(C.numClippingPlanes),_.push(C.numClipIntersection),_.push(C.depthPacking)}function v(_,C){a.disableAll(),C.instancing&&a.enable(0),C.instancingColor&&a.enable(1),C.instancingMorph&&a.enable(2),C.matcap&&a.enable(3),C.envMap&&a.enable(4),C.normalMapObjectSpace&&a.enable(5),C.normalMapTangentSpace&&a.enable(6),C.clearcoat&&a.enable(7),C.iridescence&&a.enable(8),C.alphaTest&&a.enable(9),C.vertexColors&&a.enable(10),C.vertexAlphas&&a.enable(11),C.vertexUv1s&&a.enable(12),C.vertexUv2s&&a.enable(13),C.vertexUv3s&&a.enable(14),C.vertexTangents&&a.enable(15),C.anisotropy&&a.enable(16),C.alphaHash&&a.enable(17),C.batching&&a.enable(18),C.dispersion&&a.enable(19),C.retroreflection&&a.enable(24),C.batchingColor&&a.enable(20),C.gradientMap&&a.enable(21),C.packedNormalMap&&a.enable(22),C.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),C.numLightProbeGrids>0&&a.enable(22),C.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function E(_){const C=m[_.type];let I;if(C){const U=Wi[C];I=K1.clone(U.uniforms)}else I=_.uniforms;return I}function M(_,C){let I=f.get(C);return I!==void 0?++I.usedTimes:(I=new PA(t,C,_,r),c.push(I),f.set(C,I)),I}function T(_){if(--_.usedTimes===0){const C=c.indexOf(_);c[C]=c[c.length-1],c.pop(),f.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function R(){o.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:E,acquireProgram:M,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:R}}function FA(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function kA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function rg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function sg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,x,S,g,d){let v=t[e];return v===void 0?(v={id:u.id,object:u,geometry:m,material:x,materialVariant:a(u),groupOrder:S,renderOrder:u.renderOrder,z:g,group:d},t[e]=v):(v.id=u.id,v.object=u,v.geometry=m,v.material=x,v.materialVariant=a(u),v.groupOrder=S,v.renderOrder=u.renderOrder,v.z=g,v.group=d),e++,v}function l(u,m,x,S,g,d,v){v.reversedDepth===!0&&(g=-g);const E=o(u,m,x,S,g,d);x.transmission>0?i.push(E):x.transparent===!0?r.push(E):n.push(E)}function c(u,m,x,S,g,d){const v=o(u,m,x,S,g,d);x.transmission>0?i.unshift(v):x.transparent===!0?r.unshift(v):n.unshift(v)}function f(u,m){n.length>1&&n.sort(u||kA),i.length>1&&i.sort(m||rg),r.length>1&&r.sort(m||rg)}function h(){for(let u=e,m=t.length;u<m;u++){const x=t[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:f}}function BA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new sg,t.set(i,[a])):r>=s.length?(a=new sg,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function zA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new q,color:new St};break;case"SpotLight":n={position:new q,direction:new q,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new q,color:new St,distance:0,decay:0};break;case"HemisphereLight":n={direction:new q,skyColor:new St,groundColor:new St};break;case"RectAreaLight":n={color:new St,position:new q,halfWidth:new q,halfHeight:new q};break}return t[e.id]=n,n}}}function GA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let HA=0;function VA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function WA(t){const e=new zA,n=GA(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new q);const r=new q,s=new qt,a=new qt;function o(c){let f=0,h=0,u=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let m=0,x=0,S=0,g=0,d=0,v=0,E=0,M=0,T=0,w=0,R=0,_=0,C=0,I=0;c.sort(VA);for(let O=0,F=c.length;O<F;O++){const L=c[O],G=L.color,te=L.intensity,j=L.distance;let V=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ws?V=L.shadow.map.texture:V=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)f+=G.r*te,h+=G.g*te,u+=G.b*te;else if(L.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(L.sh.coefficients[H],te);I++}else if(L.isSunLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const P=L.shadow,b=n.get(L);b.shadowIntensity=P.intensity,b.shadowBias=P.bias,b.shadowNormalBias=P.normalBias,b.shadowRadius=P.radius,b.shadowMapSize.copy(P.mapSize).multiply(P.getFrameExtents()),i.sunShadow[x]=b,i.sunShadowMap[x]=V;const ne=P.getViewportCount();for(let le=0;le<ne;le++)i.sunShadowMatrix[S+le]=P.getMatrix(le),i.sunShadowCascade[S+le]=P._cascadeData[le];S+=ne,x++}i.sun[m]=H,m++}else if(L.isDirectionalLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const P=L.shadow,b=n.get(L);b.shadowIntensity=P.intensity,b.shadowBias=P.bias,b.shadowNormalBias=P.normalBias,b.shadowRadius=P.radius,b.shadowMapSize=P.mapSize,i.directionalShadow[g]=b,i.directionalShadowMap[g]=V,i.directionalShadowMatrix[g]=L.shadow.matrix,T++}i.directional[g]=H,g++}else if(L.isSpotLight){const H=e.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(G).multiplyScalar(te),H.distance=j,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,i.spot[v]=H;const P=L.shadow;if(L.map&&(i.spotLightMap[_]=L.map,_++,P.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[v]=P.matrix,L.castShadow){const b=n.get(L);b.shadowIntensity=P.intensity,b.shadowBias=P.bias,b.shadowNormalBias=P.normalBias,b.shadowRadius=P.radius,b.shadowMapSize=P.mapSize,i.spotShadow[v]=b,i.spotShadowMap[v]=V,R++}v++}else if(L.isRectAreaLight){const H=e.get(L);H.color.copy(G).multiplyScalar(te),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),i.rectArea[E]=H,E++}else if(L.isPointLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){const P=L.shadow,b=n.get(L);b.shadowIntensity=P.intensity,b.shadowBias=P.bias,b.shadowNormalBias=P.normalBias,b.shadowRadius=P.radius,b.shadowMapSize=P.mapSize,b.shadowCameraNear=P.camera.near,b.shadowCameraFar=P.camera.far,i.pointShadow[d]=b,i.pointShadowMap[d]=V,i.pointShadowMatrix[d]=L.shadow.matrix,w++}i.point[d]=H,d++}else if(L.isHemisphereLight){const H=e.get(L);H.skyColor.copy(L.color).multiplyScalar(te),H.groundColor.copy(L.groundColor).multiplyScalar(te),i.hemi[M]=H,M++}}E>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ie.LTC_FLOAT_1,i.rectAreaLTC2=Ie.LTC_FLOAT_2):(i.rectAreaLTC1=Ie.LTC_HALF_1,i.rectAreaLTC2=Ie.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=u;const U=i.hash;(U.sunLength!==m||U.directionalLength!==g||U.pointLength!==d||U.spotLength!==v||U.rectAreaLength!==E||U.hemiLength!==M||U.numSunShadows!==x||U.numDirectionalShadows!==T||U.numPointShadows!==w||U.numSpotShadows!==R||U.numSpotMaps!==_||U.numLightProbes!==I)&&(i.sun.length=m,i.directional.length=g,i.spot.length=v,i.rectArea.length=E,i.point.length=d,i.hemi.length=M,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+_-C,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=I,U.sunLength=m,U.directionalLength=g,U.pointLength=d,U.spotLength=v,U.rectAreaLength=E,U.hemiLength=M,U.numSunShadows=x,U.numDirectionalShadows=T,U.numPointShadows=w,U.numSpotShadows=R,U.numSpotMaps=_,U.numLightProbes=I,i.version=HA++)}function l(c,f){let h=0,u=0,m=0,x=0,S=0,g=0;const d=f.matrixWorldInverse;for(let v=0,E=c.length;v<E;v++){const M=c[v];if(M.isSunLight){const T=i.sun[h];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(d),h++}else if(M.isDirectionalLight){const T=i.directional[u];T.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(d),u++}else if(M.isSpotLight){const T=i.spot[x];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(d),x++}else if(M.isRectAreaLight){const T=i.rectArea[S];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(d),a.identity(),s.copy(M.matrixWorld),s.premultiply(d),a.extractRotation(s),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),S++}else if(M.isPointLight){const T=i.point[m];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(d),m++}else if(M.isHemisphereLight){const T=i.hemi[g];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(d),g++}}}return{setup:o,setupView:l,state:i}}function ag(t){const e=new WA(t),n=[],i=[],r=[];function s(u){h.camera=u,n.length=0,i.length=0,r.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){r.push(u)}function c(){e.setup(n)}function f(u){e.setupView(n,u)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function jA(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new ag(t),e.set(r,[o])):s>=a.length?(o=new ag(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const XA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,qA=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],$A=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],og=new qt,$a=new q,Nd=new q;function KA(t,e,n){let i=new Pp;const r=new mt,s=new mt,a=new Jt,o=new eE,l=new tE,c={},f=n.maxTextureSize,h={[Ms]:ei,[ei]:Ms,[Wt]:Wt},u=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:XA,fragmentShader:YA}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const x=new nn;x.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new oe(x,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dc;let d=this.type;this.render=function(w,R,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===AM&&(et("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=dc);const C=t.getRenderTarget(),I=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),O=t.state;O.setBlending(pr),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const F=d!==this.type;F&&R.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(G=>G.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,G=w.length;L<G;L++){const te=w[L],j=te.shadow;if(j===void 0){et("WebGLShadowMap:",te,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const V=j.getFrameExtents();r.multiply(V),s.copy(j.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/V.x),r.x=s.x*V.x,j.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/V.y),r.y=s.y*V.y,j.mapSize.y=s.y));const H=t.state.buffers.depth.getReversed();if(j.camera._reversedDepth=H,j.map===null||F===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===eo){if(te.isPointLight){et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new Fi(r.x,r.y,{format:ws,type:Zi,minFilter:xn,magFilter:xn,generateMipmaps:!1}),j.map.texture.name=te.name+".shadowMap",j.map.depthTexture=new zo(r.x,r.y,Xi),j.map.depthTexture.name=te.name+".shadowMapDepth",j.map.depthTexture.format=yr,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=An,j.map.depthTexture.magFilter=An}else te.isPointLight?(j.map=new f_(r.x),j.map.depthTexture=new q1(r.x,Ji)):(j.map=new Fi(r.x,r.y),j.map.depthTexture=new zo(r.x,r.y,Ji)),j.map.depthTexture.name=te.name+".shadowMap",j.map.depthTexture.format=yr,this.type===dc?(j.map.depthTexture.compareFunction=H?Ap:Tp,j.map.depthTexture.minFilter=xn,j.map.depthTexture.magFilter=xn):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=An,j.map.depthTexture.magFilter=An);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==r.x||j.map.height!==r.y)&&j.map.setSize(r.x,r.y);const P=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();te.isPointLight!==!0&&j.updateMatrices(te,_);for(let b=0;b<P;b++){const ne=j.getCamera(b);if(te.isPointLight){const le=j.camera,Me=j.matrix,xe=te.distance||le.far;xe!==le.far&&(le.far=xe,le.updateProjectionMatrix()),$a.setFromMatrixPosition(te.matrixWorld),le.position.copy($a),Nd.copy(le.position),Nd.add(qA[b]),le.up.copy($A[b]),le.lookAt(Nd),le.updateMatrixWorld(),Me.makeTranslation(-$a.x,-$a.y,-$a.z),og.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),j._frustum.setFromProjectionMatrix(og,le.coordinateSystem,le.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)t.setRenderTarget(j.map,b),t.clear();else{b===0&&(t.setRenderTarget(j.map),t.clear());const le=j.getViewport(b);a.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),O.viewport(a)}i=j.getFrustum(b),M(R,_,ne,te,this.type)}j.isPointLightShadow!==!0&&this.type===eo&&v(j,_),j.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(C,I,U)};function v(w,R){const _=e.update(S);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null?w.mapPass=new Fi(r.x,r.y,{format:ws,type:Zi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(R,null,_,u,S,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value.set(w.map.width,w.map.height),m.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(R,null,_,m,S,null)}function E(w,R,_,C){let I=null;const U=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)I=U;else if(I=_.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const O=I.uuid,F=R.uuid;let L=c[O];L===void 0&&(L={},c[O]=L);let G=L[F];G===void 0&&(G=I.clone(),L[F]=G,R.addEventListener("dispose",T)),I=G}if(I.visible=R.visible,I.wireframe=R.wireframe,C===eo?I.side=R.shadowSide!==null?R.shadowSide:R.side:I.side=R.shadowSide!==null?R.shadowSide:h[R.side],I.alphaMap=R.alphaMap,I.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,I.map=R.map,I.clipShadows=R.clipShadows,I.clippingPlanes=R.clippingPlanes,I.clipIntersection=R.clipIntersection,I.displacementMap=R.displacementMap,I.displacementScale=R.displacementScale,I.displacementBias=R.displacementBias,I.wireframeLinewidth=R.wireframeLinewidth,I.linewidth=R.linewidth,_.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const O=t.properties.get(I);O.light=_}return I}function M(w,R,_,C,I){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&I===eo)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);const F=e.update(w),L=w.material;if(Array.isArray(L)){const G=F.groups;for(let te=0,j=G.length;te<j;te++){const V=G[te],H=L[V.materialIndex];if(H&&H.visible){const P=E(w,H,C,I);w.onBeforeShadow(t,w,R,_,F,P,V),t.renderBufferDirect(_,null,F,P,w,V),w.onAfterShadow(t,w,R,_,F,P,V)}}}else if(L.visible){const G=E(w,L,C,I);w.onBeforeShadow(t,w,R,_,F,G,null),t.renderBufferDirect(_,null,F,G,w,null),w.onAfterShadow(t,w,R,_,F,G,null)}}const O=w.children;for(let F=0,L=O.length;F<L;F++)M(O[F],R,_,C,I)}function T(w){w.target.removeEventListener("dispose",T);for(const _ in c){const C=c[_],I=w.target.uuid;I in C&&(C[I].dispose(),delete C[I])}}}function JA(t,e){function n(){let k=!1;const Ae=new Jt;let re=null;const we=new Jt(0,0,0,0);return{setMask:function(be){re!==be&&!k&&(t.colorMask(be,be,be,be),re=be)},setLocked:function(be){k=be},setClear:function(be,ce,Xe,ke,Et){Et===!0&&(be*=ke,ce*=ke,Xe*=ke),Ae.set(be,ce,Xe,ke),we.equals(Ae)===!1&&(t.clearColor(be,ce,Xe,ke),we.copy(Ae))},reset:function(){k=!1,re=null,we.set(-1,0,0,0)}}}function i(){let k=!1,Ae=!1,re=null,we=null,be=null;return{setReversed:function(ce){if(Ae!==ce){const Xe=e.get("EXT_clip_control");ce?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),Ae=ce;const ke=be;be=null,this.setClear(ke)}},getReversed:function(){return Ae},setTest:function(ce){ce?J(t.DEPTH_TEST):Q(t.DEPTH_TEST)},setMask:function(ce){re!==ce&&!k&&(t.depthMask(ce),re=ce)},setFunc:function(ce){if(Ae&&(ce=o1[ce]),we!==ce){switch(ce){case Nf:t.depthFunc(t.NEVER);break;case Pf:t.depthFunc(t.ALWAYS);break;case If:t.depthFunc(t.LESS);break;case Do:t.depthFunc(t.LEQUAL);break;case Lf:t.depthFunc(t.EQUAL);break;case Df:t.depthFunc(t.GEQUAL);break;case Uf:t.depthFunc(t.GREATER);break;case Of:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}we=ce}},setLocked:function(ce){k=ce},setClear:function(ce){be!==ce&&(be=ce,Ae&&(ce=1-ce),t.clearDepth(ce))},reset:function(){k=!1,re=null,we=null,be=null,Ae=!1}}}function r(){let k=!1,Ae=null,re=null,we=null,be=null,ce=null,Xe=null,ke=null,Et=null;return{setTest:function(Tt){k||(Tt?J(t.STENCIL_TEST):Q(t.STENCIL_TEST))},setMask:function(Tt){Ae!==Tt&&!k&&(t.stencilMask(Tt),Ae=Tt)},setFunc:function(Tt,Sn,Bn){(re!==Tt||we!==Sn||be!==Bn)&&(t.stencilFunc(Tt,Sn,Bn),re=Tt,we=Sn,be=Bn)},setOp:function(Tt,Sn,Bn){(ce!==Tt||Xe!==Sn||ke!==Bn)&&(t.stencilOp(Tt,Sn,Bn),ce=Tt,Xe=Sn,ke=Bn)},setLocked:function(Tt){k=Tt},setClear:function(Tt){Et!==Tt&&(t.clearStencil(Tt),Et=Tt)},reset:function(){k=!1,Ae=null,re=null,we=null,be=null,ce=null,Xe=null,ke=null,Et=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let f={},h={},u={},m=new WeakMap,x=[],S=null,g=!1,d=null,v=null,E=null,M=null,T=null,w=null,R=null,_=new St(0,0,0),C=0,I=!1,U=null,O=null,F=null,L=null,G=null;const te=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,V=0;const H=t.getParameter(t.VERSION);H.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(H)[1]),j=V>=1):H.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),j=V>=2);let P=null,b={};const ne=t.getParameter(t.SCISSOR_BOX),le=t.getParameter(t.VIEWPORT),Me=new Jt().fromArray(ne),xe=new Jt().fromArray(le);function me(k,Ae,re,we){const be=new Uint8Array(4),ce=t.createTexture();t.bindTexture(k,ce),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Xe=0;Xe<re;Xe++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(Ae,0,t.RGBA,1,1,we,0,t.RGBA,t.UNSIGNED_BYTE,be):t.texImage2D(Ae+Xe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,be);return ce}const B={};B[t.TEXTURE_2D]=me(t.TEXTURE_2D,t.TEXTURE_2D,1),B[t.TEXTURE_CUBE_MAP]=me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[t.TEXTURE_2D_ARRAY]=me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),B[t.TEXTURE_3D]=me(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(t.DEPTH_TEST),a.setFunc(Do),je(!1),st(a0),J(t.CULL_FACE),Ye(pr);function J(k){f[k]!==!0&&(t.enable(k),f[k]=!0)}function Q(k){f[k]!==!1&&(t.disable(k),f[k]=!1)}function _e(k,Ae){return u[k]!==Ae?(t.bindFramebuffer(k,Ae),u[k]=Ae,k===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=Ae),k===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=Ae),!0):!1}function de(k,Ae){let re=x,we=!1;if(k){re=m.get(Ae),re===void 0&&(re=[],m.set(Ae,re));const be=k.textures;if(re.length!==be.length||re[0]!==t.COLOR_ATTACHMENT0){for(let ce=0,Xe=be.length;ce<Xe;ce++)re[ce]=t.COLOR_ATTACHMENT0+ce;re.length=be.length,we=!0}}else re[0]!==t.BACK&&(re[0]=t.BACK,we=!0);we&&t.drawBuffers(re)}function De(k){return S!==k?(t.useProgram(k),S=k,!0):!1}const Qe={[qs]:t.FUNC_ADD,[RM]:t.FUNC_SUBTRACT,[bM]:t.FUNC_REVERSE_SUBTRACT};Qe[NM]=t.MIN,Qe[PM]=t.MAX;const ve={[IM]:t.ZERO,[LM]:t.ONE,[DM]:t.SRC_COLOR,[Ux]:t.SRC_ALPHA,[zM]:t.SRC_ALPHA_SATURATE,[kM]:t.DST_COLOR,[OM]:t.DST_ALPHA,[UM]:t.ONE_MINUS_SRC_COLOR,[Ox]:t.ONE_MINUS_SRC_ALPHA,[BM]:t.ONE_MINUS_DST_COLOR,[FM]:t.ONE_MINUS_DST_ALPHA,[GM]:t.CONSTANT_COLOR,[HM]:t.ONE_MINUS_CONSTANT_COLOR,[VM]:t.CONSTANT_ALPHA,[WM]:t.ONE_MINUS_CONSTANT_ALPHA};function Ye(k,Ae,re,we,be,ce,Xe,ke,Et,Tt){if(k===pr){g===!0&&(Q(t.BLEND),g=!1);return}if(g===!1&&(J(t.BLEND),g=!0),k!==CM){if(k!==d||Tt!==I){if((v!==qs||T!==qs)&&(t.blendEquation(t.FUNC_ADD),v=qs,T=qs),Tt)switch(k){case po:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Un:t.blendFunc(t.ONE,t.ONE);break;case o0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case l0:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Nt("WebGLState: Invalid blending: ",k);break}else switch(k){case po:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Un:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case o0:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case l0:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",k);break}E=null,M=null,w=null,R=null,_.set(0,0,0),C=0,d=k,I=Tt}return}be=be||Ae,ce=ce||re,Xe=Xe||we,(Ae!==v||be!==T)&&(t.blendEquationSeparate(Qe[Ae],Qe[be]),v=Ae,T=be),(re!==E||we!==M||ce!==w||Xe!==R)&&(t.blendFuncSeparate(ve[re],ve[we],ve[ce],ve[Xe]),E=re,M=we,w=ce,R=Xe),(ke.equals(_)===!1||Et!==C)&&(t.blendColor(ke.r,ke.g,ke.b,Et),_.copy(ke),C=Et),d=k,I=!1}function Je(k,Ae){k.side===Wt?Q(t.CULL_FACE):J(t.CULL_FACE);let re=k.side===ei;Ae&&(re=!re),je(re),k.blending===po&&k.transparent===!1?Ye(pr):Ye(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),s.setMask(k.colorWrite);const we=k.stencilWrite;o.setTest(we),we&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),dt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?J(t.SAMPLE_ALPHA_TO_COVERAGE):Q(t.SAMPLE_ALPHA_TO_COVERAGE)}function je(k){U!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),U=k)}function st(k){k!==wM?(J(t.CULL_FACE),k!==O&&(k===a0?t.cullFace(t.BACK):k===TM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Q(t.CULL_FACE),O=k}function lt(k){k!==F&&(j&&t.lineWidth(k),F=k)}function dt(k,Ae,re){k?(J(t.POLYGON_OFFSET_FILL),(L!==Ae||G!==re)&&(L=Ae,G=re,a.getReversed()&&(Ae=-Ae),t.polygonOffset(Ae,re))):Q(t.POLYGON_OFFSET_FILL)}function ae(k){k?J(t.SCISSOR_TEST):Q(t.SCISSOR_TEST)}function ye(k){k===void 0&&(k=t.TEXTURE0+te-1),P!==k&&(t.activeTexture(k),P=k)}function D(k,Ae,re){re===void 0&&(P===null?re=t.TEXTURE0+te-1:re=P);let we=b[re];we===void 0&&(we={type:void 0,texture:void 0},b[re]=we),(we.type!==k||we.texture!==Ae)&&(P!==re&&(t.activeTexture(re),P=re),t.bindTexture(k,Ae||B[k]),we.type=k,we.texture=Ae)}function Ue(){const k=b[P];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Pe(){try{t.compressedTexImage2D(...arguments)}catch(k){Nt("WebGLState:",k)}}function N(){try{t.compressedTexImage3D(...arguments)}catch(k){Nt("WebGLState:",k)}}function y(){try{t.texSubImage2D(...arguments)}catch(k){Nt("WebGLState:",k)}}function W(){try{t.texSubImage3D(...arguments)}catch(k){Nt("WebGLState:",k)}}function X(){try{t.compressedTexSubImage2D(...arguments)}catch(k){Nt("WebGLState:",k)}}function $(){try{t.compressedTexSubImage3D(...arguments)}catch(k){Nt("WebGLState:",k)}}function he(){try{t.texStorage2D(...arguments)}catch(k){Nt("WebGLState:",k)}}function pe(){try{t.texStorage3D(...arguments)}catch(k){Nt("WebGLState:",k)}}function Z(){try{t.texImage2D(...arguments)}catch(k){Nt("WebGLState:",k)}}function se(){try{t.texImage3D(...arguments)}catch(k){Nt("WebGLState:",k)}}function fe(k){return h[k]!==void 0?h[k]:t.getParameter(k)}function qe(k,Ae){h[k]!==Ae&&(t.pixelStorei(k,Ae),h[k]=Ae)}function Te(k){Me.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),Me.copy(k))}function Ee(k){xe.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),xe.copy(k))}function $e(k,Ae){let re=c.get(Ae);re===void 0&&(re=new WeakMap,c.set(Ae,re));let we=re.get(k);we===void 0&&(we=t.getUniformBlockIndex(Ae,k.name),re.set(k,we))}function Fe(k,Ae){const we=c.get(Ae).get(k);l.get(Ae)!==we&&(t.uniformBlockBinding(Ae,we,k.__bindingPointIndex),l.set(Ae,we))}function ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},h={},P=null,b={},u={},m=new WeakMap,x=[],S=null,g=!1,d=null,v=null,E=null,M=null,T=null,w=null,R=null,_=new St(0,0,0),C=0,I=!1,U=null,O=null,F=null,L=null,G=null,Me.set(0,0,t.canvas.width,t.canvas.height),xe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:J,disable:Q,bindFramebuffer:_e,drawBuffers:de,useProgram:De,setBlending:Ye,setMaterial:Je,setFlipSided:je,setCullFace:st,setLineWidth:lt,setPolygonOffset:dt,setScissorTest:ae,activeTexture:ye,bindTexture:D,unbindTexture:Ue,compressedTexImage2D:Pe,compressedTexImage3D:N,texImage2D:Z,texImage3D:se,pixelStorei:qe,getParameter:fe,updateUBOMapping:$e,uniformBlockBinding:Fe,texStorage2D:he,texStorage3D:pe,texSubImage2D:y,texSubImage3D:W,compressedTexSubImage2D:X,compressedTexSubImage3D:$,scissor:Te,viewport:Ee,reset:ze}}function ZA(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,f=new WeakMap,h=new Set;let u;const m=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(N,y){return x?new OffscreenCanvas(N,y):ko("canvas")}function g(N,y,W){let X=1;const $=Pe(N);if(($.width>W||$.height>W)&&(X=W/Math.max($.width,$.height)),X<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const he=Math.floor(X*$.width),pe=Math.floor(X*$.height);u===void 0&&(u=S(he,pe));const Z=y?S(he,pe):u;return Z.width=he,Z.height=pe,Z.getContext("2d").drawImage(N,0,0,he,pe),et("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+he+"x"+pe+")."),Z}else return"data"in N&&et("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),N;return N}function d(N){return N.generateMipmaps}function v(N){t.generateMipmap(N)}function E(N){return N.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?t.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(N,y,W,X,$,he=!1){if(N!==null){if(t[N]!==void 0)return t[N];et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let pe;X&&(pe=e.get("EXT_texture_norm16"),pe||et("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=y;if(y===t.RED&&(W===t.FLOAT&&(Z=t.R32F),W===t.HALF_FLOAT&&(Z=t.R16F),W===t.UNSIGNED_BYTE&&(Z=t.R8),W===t.UNSIGNED_SHORT&&pe&&(Z=pe.R16_EXT),W===t.SHORT&&pe&&(Z=pe.R16_SNORM_EXT)),y===t.RED_INTEGER&&(W===t.UNSIGNED_BYTE&&(Z=t.R8UI),W===t.UNSIGNED_SHORT&&(Z=t.R16UI),W===t.UNSIGNED_INT&&(Z=t.R32UI),W===t.BYTE&&(Z=t.R8I),W===t.SHORT&&(Z=t.R16I),W===t.INT&&(Z=t.R32I)),y===t.RG&&(W===t.FLOAT&&(Z=t.RG32F),W===t.HALF_FLOAT&&(Z=t.RG16F),W===t.UNSIGNED_BYTE&&(Z=t.RG8),W===t.UNSIGNED_SHORT&&pe&&(Z=pe.RG16_EXT),W===t.SHORT&&pe&&(Z=pe.RG16_SNORM_EXT)),y===t.RG_INTEGER&&(W===t.UNSIGNED_BYTE&&(Z=t.RG8UI),W===t.UNSIGNED_SHORT&&(Z=t.RG16UI),W===t.UNSIGNED_INT&&(Z=t.RG32UI),W===t.BYTE&&(Z=t.RG8I),W===t.SHORT&&(Z=t.RG16I),W===t.INT&&(Z=t.RG32I)),y===t.RGB_INTEGER&&(W===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),W===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),W===t.UNSIGNED_INT&&(Z=t.RGB32UI),W===t.BYTE&&(Z=t.RGB8I),W===t.SHORT&&(Z=t.RGB16I),W===t.INT&&(Z=t.RGB32I)),y===t.RGBA_INTEGER&&(W===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),W===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),W===t.UNSIGNED_INT&&(Z=t.RGBA32UI),W===t.BYTE&&(Z=t.RGBA8I),W===t.SHORT&&(Z=t.RGBA16I),W===t.INT&&(Z=t.RGBA32I)),y===t.RGB&&(W===t.UNSIGNED_SHORT&&pe&&(Z=pe.RGB16_EXT),W===t.SHORT&&pe&&(Z=pe.RGB16_SNORM_EXT),W===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),W===t.UNSIGNED_INT_10F_11F_11F_REV&&(Z=t.R11F_G11F_B10F)),y===t.RGBA){const se=he?Yc:wt.getTransfer($);W===t.FLOAT&&(Z=t.RGBA32F),W===t.HALF_FLOAT&&(Z=t.RGBA16F),W===t.UNSIGNED_BYTE&&(Z=se===Ut?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT&&pe&&(Z=pe.RGBA16_EXT),W===t.SHORT&&pe&&(Z=pe.RGBA16_SNORM_EXT),W===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function T(N,y){let W;return N?y===null||y===Ji||y===Oo?W=t.DEPTH24_STENCIL8:y===Xi?W=t.DEPTH32F_STENCIL8:y===Uo&&(W=t.DEPTH24_STENCIL8,et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ji||y===Oo?W=t.DEPTH_COMPONENT24:y===Xi?W=t.DEPTH_COMPONENT32F:y===Uo&&(W=t.DEPTH_COMPONENT16),W}function w(N,y){return d(N)===!0||N.isFramebufferTexture&&N.minFilter!==An&&N.minFilter!==xn?Math.log2(Math.max(y.width,y.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?y.mipmaps.length:1}function R(N){const y=N.target;y.removeEventListener("dispose",R),C(y),y.isVideoTexture&&f.delete(y),y.isHTMLTexture&&h.delete(y)}function _(N){const y=N.target;y.removeEventListener("dispose",_),U(y)}function C(N){const y=i.get(N);if(y.__webglInit===void 0)return;const W=N.source,X=m.get(W);if(X){const $=X[y.__cacheKey];$.usedTimes--,$.usedTimes===0&&I(N),Object.keys(X).length===0&&m.delete(W)}i.remove(N)}function I(N){const y=i.get(N);t.deleteTexture(y.__webglTexture);const W=N.source,X=m.get(W);delete X[y.__cacheKey],a.memory.textures--}function U(N){const y=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(y.__webglFramebuffer[X]))for(let $=0;$<y.__webglFramebuffer[X].length;$++)t.deleteFramebuffer(y.__webglFramebuffer[X][$]);else t.deleteFramebuffer(y.__webglFramebuffer[X]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[X])}else{if(Array.isArray(y.__webglFramebuffer))for(let X=0;X<y.__webglFramebuffer.length;X++)t.deleteFramebuffer(y.__webglFramebuffer[X]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let X=0;X<y.__webglColorRenderbuffer.length;X++)y.__webglColorRenderbuffer[X]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[X]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const W=N.textures;for(let X=0,$=W.length;X<$;X++){const he=i.get(W[X]);he.__webglTexture&&(t.deleteTexture(he.__webglTexture),a.memory.textures--),i.remove(W[X])}i.remove(N)}let O=0;function F(){O=0}function L(){return O}function G(N){O=N}function te(){const N=O;return N>=r.maxTextures&&et("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+r.maxTextures),O+=1,N}function j(N){const y=[];return y.push(N.wrapS),y.push(N.wrapT),y.push(N.wrapR||0),y.push(N.magFilter),y.push(N.minFilter),y.push(N.anisotropy),y.push(N.internalFormat),y.push(N.format),y.push(N.type),y.push(N.generateMipmaps),y.push(N.premultiplyAlpha),y.push(N.flipY),y.push(N.unpackAlignment),y.push(N.colorSpace),y.join()}function V(N,y){const W=i.get(N);if(N.isVideoTexture&&D(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&W.__version!==N.version){const X=N.image;if(X===null)et("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)et("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(W,N,y);return}}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+y)}function H(N,y){const W=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){Q(W,N,y);return}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+y)}function P(N,y){const W=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){Q(W,N,y);return}n.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+y)}function b(N,y){const W=i.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&W.__version!==N.version){_e(W,N,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+y)}const ne={[Ff]:t.REPEAT,[fr]:t.CLAMP_TO_EDGE,[kf]:t.MIRRORED_REPEAT},le={[An]:t.NEAREST,[YM]:t.NEAREST_MIPMAP_NEAREST,[wl]:t.NEAREST_MIPMAP_LINEAR,[xn]:t.LINEAR,[ed]:t.LINEAR_MIPMAP_NEAREST,[hs]:t.LINEAR_MIPMAP_LINEAR},Me={[JM]:t.NEVER,[n1]:t.ALWAYS,[ZM]:t.LESS,[Tp]:t.LEQUAL,[QM]:t.EQUAL,[Ap]:t.GEQUAL,[e1]:t.GREATER,[t1]:t.NOTEQUAL};function xe(N,y){if(y.type===Xi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===xn||y.magFilter===ed||y.magFilter===wl||y.magFilter===hs||y.minFilter===xn||y.minFilter===ed||y.minFilter===wl||y.minFilter===hs)&&et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(N,t.TEXTURE_WRAP_S,ne[y.wrapS]),t.texParameteri(N,t.TEXTURE_WRAP_T,ne[y.wrapT]),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,ne[y.wrapR]),t.texParameteri(N,t.TEXTURE_MAG_FILTER,le[y.magFilter]),t.texParameteri(N,t.TEXTURE_MIN_FILTER,le[y.minFilter]),y.compareFunction&&(t.texParameteri(N,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(N,t.TEXTURE_COMPARE_FUNC,Me[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===An||y.minFilter!==wl&&y.minFilter!==hs||y.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");t.texParameterf(N,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function me(N,y){let W=!1;N.__webglInit===void 0&&(N.__webglInit=!0,y.addEventListener("dispose",R));const X=y.source;let $=m.get(X);$===void 0&&($={},m.set(X,$));const he=j(y);if(he!==N.__cacheKey){$[he]===void 0&&($[he]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,W=!0),$[he].usedTimes++;const pe=$[N.__cacheKey];pe!==void 0&&($[N.__cacheKey].usedTimes--,pe.usedTimes===0&&I(y)),N.__cacheKey=he,N.__webglTexture=$[he].texture}return W}function B(N,y,W){return Math.floor(Math.floor(N/W)/y)}function J(N,y,W,X){const he=N.updateRanges;if(he.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,y.width,y.height,W,X,y.data);else{he.sort((qe,Te)=>qe.start-Te.start);let pe=0;for(let qe=1;qe<he.length;qe++){const Te=he[pe],Ee=he[qe],$e=Te.start+Te.count,Fe=B(Ee.start,y.width,4),ze=B(Te.start,y.width,4);Ee.start<=$e+1&&Fe===ze&&B(Ee.start+Ee.count-1,y.width,4)===Fe?Te.count=Math.max(Te.count,Ee.start+Ee.count-Te.start):(++pe,he[pe]=Ee)}he.length=pe+1;const Z=n.getParameter(t.UNPACK_ROW_LENGTH),se=n.getParameter(t.UNPACK_SKIP_PIXELS),fe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,y.width);for(let qe=0,Te=he.length;qe<Te;qe++){const Ee=he[qe],$e=Math.floor(Ee.start/4),Fe=Math.ceil(Ee.count/4),ze=$e%y.width,k=Math.floor($e/y.width),Ae=Fe,re=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,ze),n.pixelStorei(t.UNPACK_SKIP_ROWS,k),n.texSubImage2D(t.TEXTURE_2D,0,ze,k,Ae,re,W,X,y.data)}N.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Z),n.pixelStorei(t.UNPACK_SKIP_PIXELS,se),n.pixelStorei(t.UNPACK_SKIP_ROWS,fe)}}function Q(N,y,W){let X=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(X=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(X=t.TEXTURE_3D);const $=me(N,y),he=y.source;n.bindTexture(X,N.__webglTexture,t.TEXTURE0+W);const pe=i.get(he);if(he.version!==pe.__version||$===!0){if(n.activeTexture(t.TEXTURE0+W),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const re=wt.getPrimaries(wt.workingColorSpace),we=y.colorSpace===Or?null:wt.getPrimaries(y.colorSpace),be=y.colorSpace===Or||re===we?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment);let se=g(y.image,!1,r.maxTextureSize);se=Ue(y,se);const fe=s.convert(y.format,y.colorSpace),qe=s.convert(y.type);let Te=M(y.internalFormat,fe,qe,y.normalized,y.colorSpace,y.isVideoTexture);xe(X,y);let Ee;const $e=y.mipmaps,Fe=y.isVideoTexture!==!0,ze=pe.__version===void 0||$===!0,k=he.dataReady,Ae=w(y,se);if(y.isDepthTexture)Te=T(y.format===ps,y.type),ze&&(Fe?n.texStorage2D(t.TEXTURE_2D,1,Te,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,Te,se.width,se.height,0,fe,qe,null));else if(y.isDataTexture)if($e.length>0){Fe&&ze&&n.texStorage2D(t.TEXTURE_2D,Ae,Te,$e[0].width,$e[0].height);for(let re=0,we=$e.length;re<we;re++)Ee=$e[re],Fe?k&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,Ee.width,Ee.height,fe,qe,Ee.data):n.texImage2D(t.TEXTURE_2D,re,Te,Ee.width,Ee.height,0,fe,qe,Ee.data);y.generateMipmaps=!1}else Fe?(ze&&n.texStorage2D(t.TEXTURE_2D,Ae,Te,se.width,se.height),k&&J(y,se,fe,qe)):n.texImage2D(t.TEXTURE_2D,0,Te,se.width,se.height,0,fe,qe,se.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Fe&&ze&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ae,Te,$e[0].width,$e[0].height,se.depth);for(let re=0,we=$e.length;re<we;re++)if(Ee=$e[re],y.format!==Di)if(fe!==null)if(Fe){if(k)if(y.layerUpdates.size>0){const be=B0(Ee.width,Ee.height,y.format,y.type);for(const ce of y.layerUpdates){const Xe=Ee.data.subarray(ce*be/Ee.data.BYTES_PER_ELEMENT,(ce+1)*be/Ee.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,ce,Ee.width,Ee.height,1,fe,Xe)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,Ee.width,Ee.height,se.depth,fe,Ee.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,re,Te,Ee.width,Ee.height,se.depth,0,Ee.data,0,0);else et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?k&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,Ee.width,Ee.height,se.depth,fe,qe,Ee.data):n.texImage3D(t.TEXTURE_2D_ARRAY,re,Te,Ee.width,Ee.height,se.depth,0,fe,qe,Ee.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Fe&&ze&&n.texStorage2D(t.TEXTURE_2D,Ae,Te,$e[0].width,$e[0].height);for(let re=0,we=$e.length;re<we;re++)Ee=$e[re],y.format!==Di?fe!==null?Fe?k&&n.compressedTexSubImage2D(t.TEXTURE_2D,re,0,0,Ee.width,Ee.height,fe,Ee.data):n.compressedTexImage2D(t.TEXTURE_2D,re,Te,Ee.width,Ee.height,0,Ee.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?k&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,Ee.width,Ee.height,fe,qe,Ee.data):n.texImage2D(t.TEXTURE_2D,re,Te,Ee.width,Ee.height,0,fe,qe,Ee.data)}else if(y.isDataArrayTexture)if(Fe){if(ze&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ae,Te,se.width,se.height,se.depth),k)if(y.layerUpdates.size>0){const re=B0(se.width,se.height,y.format,y.type);for(const we of y.layerUpdates){const be=se.data.subarray(we*re/se.data.BYTES_PER_ELEMENT,(we+1)*re/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,we,se.width,se.height,1,fe,qe,be)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,fe,qe,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Te,se.width,se.height,se.depth,0,fe,qe,se.data);else if(y.isData3DTexture)Fe?(ze&&n.texStorage3D(t.TEXTURE_3D,Ae,Te,se.width,se.height,se.depth),k&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,fe,qe,se.data)):n.texImage3D(t.TEXTURE_3D,0,Te,se.width,se.height,se.depth,0,fe,qe,se.data);else if(y.isFramebufferTexture){if(ze)if(Fe)n.texStorage2D(t.TEXTURE_2D,Ae,Te,se.width,se.height);else{let re=se.width,we=se.height;for(let be=0;be<Ae;be++)n.texImage2D(t.TEXTURE_2D,be,Te,re,we,0,fe,qe,null),re>>=1,we>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in t){const re=t.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),se.parentNode!==re){re.appendChild(se),h.add(y),re.onpaint=we=>{const be=we.changedElements;for(const ce of h)be.includes(ce.image)&&(ce.needsUpdate=!0)},re.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,se);else{const be=t.RGBA,ce=t.RGBA,Xe=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,be,ce,Xe,se)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if($e.length>0){if(Fe&&ze){const re=Pe($e[0]);n.texStorage2D(t.TEXTURE_2D,Ae,Te,re.width,re.height)}for(let re=0,we=$e.length;re<we;re++)Ee=$e[re],Fe?k&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,fe,qe,Ee):n.texImage2D(t.TEXTURE_2D,re,Te,fe,qe,Ee);y.generateMipmaps=!1}else if(Fe){if(ze){const re=Pe(se);n.texStorage2D(t.TEXTURE_2D,Ae,Te,re.width,re.height)}k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe,qe,se)}else n.texImage2D(t.TEXTURE_2D,0,Te,fe,qe,se);d(y)&&v(X),pe.__version=he.version,y.onUpdate&&y.onUpdate(y)}N.__version=y.version}function _e(N,y,W){if(y.image.length!==6)return;const X=me(N,y),$=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+W);const he=i.get($);if($.version!==he.__version||X===!0){n.activeTexture(t.TEXTURE0+W);const pe=wt.getPrimaries(wt.workingColorSpace),Z=y.colorSpace===Or?null:wt.getPrimaries(y.colorSpace),se=y.colorSpace===Or||pe===Z?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const fe=y.isCompressedTexture||y.image[0].isCompressedTexture,qe=y.image[0]&&y.image[0].isDataTexture,Te=[];for(let ce=0;ce<6;ce++)!fe&&!qe?Te[ce]=g(y.image[ce],!0,r.maxCubemapSize):Te[ce]=qe?y.image[ce].image:y.image[ce],Te[ce]=Ue(y,Te[ce]);const Ee=Te[0],$e=s.convert(y.format,y.colorSpace),Fe=s.convert(y.type),ze=M(y.internalFormat,$e,Fe,y.normalized,y.colorSpace),k=y.isVideoTexture!==!0,Ae=he.__version===void 0||X===!0,re=$.dataReady;let we=w(y,Ee);xe(t.TEXTURE_CUBE_MAP,y);let be;if(fe){k&&Ae&&n.texStorage2D(t.TEXTURE_CUBE_MAP,we,ze,Ee.width,Ee.height);for(let ce=0;ce<6;ce++){be=Te[ce].mipmaps;for(let Xe=0;Xe<be.length;Xe++){const ke=be[Xe];y.format!==Di?$e!==null?k?re&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Xe,0,0,ke.width,ke.height,$e,ke.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Xe,ze,ke.width,ke.height,0,ke.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Xe,0,0,ke.width,ke.height,$e,Fe,ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Xe,ze,ke.width,ke.height,0,$e,Fe,ke.data)}}}else{if(be=y.mipmaps,k&&Ae){be.length>0&&we++;const ce=Pe(Te[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,we,ze,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(qe){k?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Te[ce].width,Te[ce].height,$e,Fe,Te[ce].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ze,Te[ce].width,Te[ce].height,0,$e,Fe,Te[ce].data);for(let Xe=0;Xe<be.length;Xe++){const Et=be[Xe].image[ce].image;k?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Xe+1,0,0,Et.width,Et.height,$e,Fe,Et.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Xe+1,ze,Et.width,Et.height,0,$e,Fe,Et.data)}}else{k?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,$e,Fe,Te[ce]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ze,$e,Fe,Te[ce]);for(let Xe=0;Xe<be.length;Xe++){const ke=be[Xe];k?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Xe+1,0,0,$e,Fe,ke.image[ce]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Xe+1,ze,$e,Fe,ke.image[ce])}}}d(y)&&v(t.TEXTURE_CUBE_MAP),he.__version=$.version,y.onUpdate&&y.onUpdate(y)}N.__version=y.version}function de(N,y,W,X,$,he){const pe=s.convert(W.format,W.colorSpace),Z=s.convert(W.type),se=M(W.internalFormat,pe,Z,W.normalized,W.colorSpace),fe=i.get(y),qe=i.get(W);if(qe.__renderTarget=y,!fe.__hasExternalTextures){const Te=Math.max(1,y.width>>he),Ee=Math.max(1,y.height>>he);$===t.TEXTURE_3D||$===t.TEXTURE_2D_ARRAY?n.texImage3D($,he,se,Te,Ee,y.depth,0,pe,Z,null):n.texImage2D($,he,se,Te,Ee,0,pe,Z,null)}n.bindFramebuffer(t.FRAMEBUFFER,N),ye(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,X,$,qe.__webglTexture,0,ae(y)):($===t.TEXTURE_2D||$>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,X,$,qe.__webglTexture,he),n.bindFramebuffer(t.FRAMEBUFFER,null)}function De(N,y,W){if(t.bindRenderbuffer(t.RENDERBUFFER,N),y.depthBuffer){const X=y.depthTexture,$=X&&X.isDepthTexture?X.type:null,he=T(y.stencilBuffer,$),pe=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;ye(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae(y),he,y.width,y.height):W?t.renderbufferStorageMultisample(t.RENDERBUFFER,ae(y),he,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,he,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,pe,t.RENDERBUFFER,N)}else{const X=y.textures;for(let $=0;$<X.length;$++){const he=X[$],pe=s.convert(he.format,he.colorSpace),Z=s.convert(he.type),se=M(he.internalFormat,pe,Z,he.normalized,he.colorSpace);ye(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae(y),se,y.width,y.height):W?t.renderbufferStorageMultisample(t.RENDERBUFFER,ae(y),se,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,se,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Qe(N,y,W){const X=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,N),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=i.get(y.depthTexture);if($.__renderTarget=y,(!$.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X){if($.__webglInit===void 0&&($.__webglInit=!0,y.depthTexture.addEventListener("dispose",R)),$.__webglTexture===void 0){$.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),xe(t.TEXTURE_CUBE_MAP,y.depthTexture);const fe=s.convert(y.depthTexture.format),qe=s.convert(y.depthTexture.type);let Te;y.depthTexture.format===yr?Te=t.DEPTH_COMPONENT24:y.depthTexture.format===ps&&(Te=t.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Te,y.width,y.height,0,fe,qe,null)}}else V(y.depthTexture,0);const he=$.__webglTexture,pe=ae(y),Z=X?t.TEXTURE_CUBE_MAP_POSITIVE_X+W:t.TEXTURE_2D,se=y.depthTexture.format===ps?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(y.depthTexture.format===yr)ye(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,Z,he,0,pe):t.framebufferTexture2D(t.FRAMEBUFFER,se,Z,he,0);else if(y.depthTexture.format===ps)ye(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,Z,he,0,pe):t.framebufferTexture2D(t.FRAMEBUFFER,se,Z,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ve(N){const y=i.get(N),W=N.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==N.depthTexture){const X=N.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),X){const $=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,X.removeEventListener("dispose",$)};X.addEventListener("dispose",$),y.__depthDisposeCallback=$}y.__boundDepthTexture=X}if(N.depthTexture&&!y.__autoAllocateDepthBuffer)if(W)for(let X=0;X<6;X++)Qe(y.__webglFramebuffer[X],N,X);else{const X=N.texture.mipmaps;X&&X.length>0?Qe(y.__webglFramebuffer[0],N,0):Qe(y.__webglFramebuffer,N,0)}else if(W){y.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[X]),y.__webglDepthbuffer[X]===void 0)y.__webglDepthbuffer[X]=t.createRenderbuffer(),De(y.__webglDepthbuffer[X],N,!1);else{const $=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=y.__webglDepthbuffer[X];t.bindRenderbuffer(t.RENDERBUFFER,he),t.framebufferRenderbuffer(t.FRAMEBUFFER,$,t.RENDERBUFFER,he)}}else{const X=N.texture.mipmaps;if(X&&X.length>0?n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),De(y.__webglDepthbuffer,N,!1);else{const $=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,he),t.framebufferRenderbuffer(t.FRAMEBUFFER,$,t.RENDERBUFFER,he)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ye(N,y,W){const X=i.get(N);y!==void 0&&de(X.__webglFramebuffer,N,N.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),W!==void 0&&ve(N)}function Je(N){const y=N.texture,W=i.get(N),X=i.get(y);N.addEventListener("dispose",_);const $=N.textures,he=N.isWebGLCubeRenderTarget===!0,pe=$.length>1;if(pe||(X.__webglTexture===void 0&&(X.__webglTexture=t.createTexture()),X.__version=y.version,a.memory.textures++),he){W.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer[Z]=[];for(let se=0;se<y.mipmaps.length;se++)W.__webglFramebuffer[Z][se]=t.createFramebuffer()}else W.__webglFramebuffer[Z]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer=[];for(let Z=0;Z<y.mipmaps.length;Z++)W.__webglFramebuffer[Z]=t.createFramebuffer()}else W.__webglFramebuffer=t.createFramebuffer();if(pe)for(let Z=0,se=$.length;Z<se;Z++){const fe=i.get($[Z]);fe.__webglTexture===void 0&&(fe.__webglTexture=t.createTexture(),a.memory.textures++)}if(N.samples>0&&ye(N)===!1){W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Z=0;Z<$.length;Z++){const se=$[Z];W.__webglColorRenderbuffer[Z]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[Z]);const fe=s.convert(se.format,se.colorSpace),qe=s.convert(se.type),Te=M(se.internalFormat,fe,qe,se.normalized,se.colorSpace,N.isXRRenderTarget===!0),Ee=ae(N);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ee,Te,N.width,N.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Z,t.RENDERBUFFER,W.__webglColorRenderbuffer[Z])}t.bindRenderbuffer(t.RENDERBUFFER,null),N.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),De(W.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(he){n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture),xe(t.TEXTURE_CUBE_MAP,y);for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0)for(let se=0;se<y.mipmaps.length;se++)de(W.__webglFramebuffer[Z][se],N,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se);else de(W.__webglFramebuffer[Z],N,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);d(y)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(pe){for(let Z=0,se=$.length;Z<se;Z++){const fe=$[Z],qe=i.get(fe);let Te=t.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Te=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Te,qe.__webglTexture),xe(Te,fe),de(W.__webglFramebuffer,N,fe,t.COLOR_ATTACHMENT0+Z,Te,0),d(fe)&&v(Te)}n.unbindTexture()}else{let Z=t.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Z=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Z,X.__webglTexture),xe(Z,y),y.mipmaps&&y.mipmaps.length>0)for(let se=0;se<y.mipmaps.length;se++)de(W.__webglFramebuffer[se],N,y,t.COLOR_ATTACHMENT0,Z,se);else de(W.__webglFramebuffer,N,y,t.COLOR_ATTACHMENT0,Z,0);d(y)&&v(Z),n.unbindTexture()}N.depthBuffer&&ve(N)}function je(N){const y=N.textures;for(let W=0,X=y.length;W<X;W++){const $=y[W];if(d($)){const he=E(N),pe=i.get($).__webglTexture;n.bindTexture(he,pe),v(he),n.unbindTexture()}}}const st=[],lt=[];function dt(N){if(N.samples>0){if(ye(N)===!1){const y=N.textures,W=N.width,X=N.height;let $=t.COLOR_BUFFER_BIT;const he=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=i.get(N),Z=y.length>1;if(Z)for(let fe=0;fe<y.length;fe++)n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const se=N.texture.mipmaps;se&&se.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let fe=0;fe<y.length;fe++){if(N.resolveDepthBuffer&&(N.depthBuffer&&($|=t.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&($|=t.STENCIL_BUFFER_BIT)),Z){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,pe.__webglColorRenderbuffer[fe]);const qe=i.get(y[fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,qe,0)}t.blitFramebuffer(0,0,W,X,0,0,W,X,$,t.NEAREST),l===!0&&(st.length=0,lt.length=0,st.push(t.COLOR_ATTACHMENT0+fe),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(st.push(he),lt.push(he),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,lt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,st))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Z)for(let fe=0;fe<y.length;fe++){n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,pe.__webglColorRenderbuffer[fe]);const qe=i.get(y[fe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,qe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){const y=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function ae(N){return Math.min(r.maxSamples,N.samples)}function ye(N){const y=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function D(N){const y=a.render.frame;f.get(N)!==y&&(f.set(N,y),N.update())}function Ue(N,y){const W=N.colorSpace,X=N.format,$=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||W!==Xc&&W!==Or&&(wt.getTransfer(W)===Ut?(X!==Di||$!==li)&&et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",W)),y}function Pe(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=te,this.resetTextureUnits=F,this.getTextureUnits=L,this.setTextureUnits=G,this.setTexture2D=V,this.setTexture2DArray=H,this.setTexture3D=P,this.setTextureCube=b,this.rebindTextures=Ye,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ye,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function QA(t,e){function n(i,r=Or){let s;const a=wt.getTransfer(r);if(i===li)return t.UNSIGNED_BYTE;if(i===yp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Sp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Yx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===qx)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===jx)return t.BYTE;if(i===Xx)return t.SHORT;if(i===Uo)return t.UNSIGNED_SHORT;if(i===_p)return t.INT;if(i===Ji)return t.UNSIGNED_INT;if(i===Xi)return t.FLOAT;if(i===Zi)return t.HALF_FLOAT;if(i===$x)return t.ALPHA;if(i===Kx)return t.RGB;if(i===Di)return t.RGBA;if(i===yr)return t.DEPTH_COMPONENT;if(i===ps)return t.DEPTH_STENCIL;if(i===Jx)return t.RED;if(i===Mp)return t.RED_INTEGER;if(i===ws)return t.RG;if(i===Ep)return t.RG_INTEGER;if(i===wp)return t.RGBA_INTEGER;if(i===fc||i===hc||i===pc||i===mc)if(a===Ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===fc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===hc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===mc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===fc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===hc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===mc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bf||i===zf||i===Gf||i===Hf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Bf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Gf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vf||i===Wf||i===jf||i===Xf||i===Yf||i===Wc||i===qf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Vf||i===Wf)return a===Ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===jf)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Xf)return s.COMPRESSED_R11_EAC;if(i===Yf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Wc)return s.COMPRESSED_RG11_EAC;if(i===qf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===$f||i===Kf||i===Jf||i===Zf||i===Qf||i===eh||i===th||i===nh||i===ih||i===rh||i===sh||i===ah||i===oh||i===lh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===$f)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kf)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Jf)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zf)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qf)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===eh)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===th)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nh)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ih)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rh)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sh)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ah)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===oh)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lh)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ch||i===uh||i===dh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ch)return a===Ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===uh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===dh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fh||i===hh||i===jc||i===ph)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===fh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===hh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ph)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Oo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const eC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class nC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new a_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Qi({vertexShader:eC,fragmentShader:tC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new oe(new Ta(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iC extends Rs{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,h=null,u=null,m=null,x=null;const S=typeof XRWebGLBinding<"u",g=new nC,d={},v=n.getContextAttributes();let E=null,M=null;const T=[],w=[],R=new mt;let _=null,C=null;const I=new oi;I.viewport=new Jt;const U=new oi;U.viewport=new Jt;const O=[I,U],F=new uE;let L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let J=T[B];return J===void 0&&(J=new od,T[B]=J),J.getTargetRaySpace()},this.getControllerGrip=function(B){let J=T[B];return J===void 0&&(J=new od,T[B]=J),J.getGripSpace()},this.getHand=function(B){let J=T[B];return J===void 0&&(J=new od,T[B]=J),J.getHandSpace()};function te(B){const J=w.indexOf(B.inputSource);if(J===-1)return;const Q=T[J];Q!==void 0&&(Q.update(B.inputSource,B.frame,c||a),Q.dispatchEvent({type:B.type,data:B.inputSource}))}function j(){r.removeEventListener("select",te),r.removeEventListener("selectstart",te),r.removeEventListener("selectend",te),r.removeEventListener("squeeze",te),r.removeEventListener("squeezestart",te),r.removeEventListener("squeezeend",te),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",V);for(let B=0;B<T.length;B++){const J=w[B];J!==null&&(w[B]=null,T[B].disconnect(J))}L=null,G=null,g.reset();for(const B in d)delete d[B];if(e.setRenderTarget(E),m=null,u=null,h=null,r=null,M=null,me.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),C!==null){const B=C.camera;B.fov=C.fov,B.zoom=C.zoom,B.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,i.isPresenting===!0&&et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return h===null&&S&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",te),r.addEventListener("selectstart",te),r.addEventListener("selectend",te),r.addEventListener("squeeze",te),r.addEventListener("squeezestart",te),r.addEventListener("squeezeend",te),r.addEventListener("end",j),r.addEventListener("inputsourceschange",V),v.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,_e=null,de=null;v.depth&&(de=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Q=v.stencil?ps:yr,_e=v.stencil?Oo:Ji);const De={colorFormat:n.RGBA8,depthFormat:de,scaleFactor:s};h=this.getBinding(),u=h.createProjectionLayer(De),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new Fi(u.textureWidth,u.textureHeight,{format:Di,type:li,depthTexture:new zo(u.textureWidth,u.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const Q={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,Q),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new Fi(m.framebufferWidth,m.framebufferHeight,{format:Di,type:li,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),me.setContext(r),me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V(B){for(let J=0;J<B.removed.length;J++){const Q=B.removed[J],_e=w.indexOf(Q);_e>=0&&(w[_e]=null,T[_e].disconnect(Q))}for(let J=0;J<B.added.length;J++){const Q=B.added[J];let _e=w.indexOf(Q);if(_e===-1){for(let De=0;De<T.length;De++)if(De>=w.length){w.push(Q),_e=De;break}else if(w[De]===null){w[De]=Q,_e=De;break}if(_e===-1)break}const de=T[_e];de&&de.connect(Q)}}const H=new q,P=new q;function b(B,J,Q){H.setFromMatrixPosition(J.matrixWorld),P.setFromMatrixPosition(Q.matrixWorld);const _e=H.distanceTo(P),de=J.projectionMatrix.elements,De=Q.projectionMatrix.elements,Qe=de[14]/(de[10]-1),ve=de[14]/(de[10]+1),Ye=(de[9]+1)/de[5],Je=(de[9]-1)/de[5],je=(de[8]-1)/de[0],st=(De[8]+1)/De[0],lt=Qe*je,dt=Qe*st,ae=_e/(-je+st),ye=ae*-je;if(J.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(ye),B.translateZ(ae),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),de[10]===-1)B.projectionMatrix.copy(J.projectionMatrix),B.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const D=Qe+ae,Ue=ve+ae,Pe=lt-ye,N=dt+(_e-ye),y=Ye*ve/Ue*D,W=Je*ve/Ue*D;B.projectionMatrix.makePerspective(Pe,N,y,W,D,Ue),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function ne(B,J){J===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(J.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;let J=B.near,Q=B.far;g.texture!==null&&(g.depthNear>0&&(J=g.depthNear),g.depthFar>0&&(Q=g.depthFar)),F.near=U.near=I.near=J,F.far=U.far=I.far=Q,(L!==F.near||G!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),L=F.near,G=F.far),F.layers.mask=B.layers.mask|6,I.layers.mask=F.layers.mask&-5,U.layers.mask=F.layers.mask&-3;const _e=B.parent,de=F.cameras;ne(F,_e);for(let De=0;De<de.length;De++)ne(de[De],_e);de.length===2?b(F,I,U):F.projectionMatrix.copy(I.projectionMatrix),C===null&&B.isPerspectiveCamera&&(C={camera:B,fov:B.fov,zoom:B.zoom}),le(B,F,_e)};function le(B,J,Q){Q===null?B.matrix.copy(J.matrixWorld):(B.matrix.copy(Q.matrixWorld),B.matrix.invert(),B.matrix.multiply(J.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(J.projectionMatrix),B.projectionMatrixInverse.copy(J.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Bo*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(B){l=B,u!==null&&(u.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(B){return d[B]};let Me=null;function xe(B,J){if(f=J.getViewerPose(c||a),x=J,f!==null){const Q=f.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let _e=!1;Q.length!==F.cameras.length&&(F.cameras.length=0,_e=!0);for(let ve=0;ve<Q.length;ve++){const Ye=Q[ve];let Je=null;if(m!==null)Je=m.getViewport(Ye);else{const st=h.getViewSubImage(u,Ye);Je=st.viewport,ve===0&&(e.setRenderTargetTextures(M,st.colorTexture,st.depthStencilTexture),e.setRenderTarget(M))}let je=O[ve];je===void 0&&(je=new oi,je.layers.enable(ve),je.viewport=new Jt,O[ve]=je),je.matrix.fromArray(Ye.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Ye.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(Je.x,Je.y,Je.width,Je.height),ve===0&&(F.matrix.copy(je.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),_e===!0&&F.cameras.push(je)}const de=r.enabledFeatures;if(de&&de.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){h=i.getBinding();const ve=h.getDepthInformation(Q[0]);ve&&ve.isValid&&ve.texture&&g.init(ve,r.renderState)}if(de&&de.includes("camera-access")&&S){e.state.unbindTexture(),h=i.getBinding();for(let ve=0;ve<Q.length;ve++){const Ye=Q[ve].camera;if(Ye){let Je=d[Ye];Je||(Je=new a_,d[Ye]=Je);const je=h.getCameraImage(Ye);Je.sourceTexture=je}}}}for(let Q=0;Q<T.length;Q++){const _e=w[Q],de=T[Q];_e!==null&&de!==void 0&&de.update(_e,J,c||a)}Me&&Me(B,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),x=null}const me=new u_;me.setAnimationLoop(xe),this.setAnimationLoop=function(B){Me=B},this.dispose=function(){}}}const rC=new qt,v_=new ot;v_.set(-1,0,0,0,1,0,0,0,1);function sC(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,o_(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,v,E,M){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(g,d):d.isMeshLambertMaterial?(s(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(g,d),h(g,d)):d.isMeshPhongMaterial?(s(g,d),f(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(g,d),u(g,d),d.isMeshPhysicalMaterial&&m(g,d,M)):d.isMeshMatcapMaterial?(s(g,d),x(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),S(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,v,E):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===ei&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===ei&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const v=e.get(d),E=v.envMap,M=v.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(rC.makeRotationFromEuler(M)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(v_),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,v,E){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*v,g.scale.value=E*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function f(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function h(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function u(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,v){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ei&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.retroreflectivity>0&&(g.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,d){d.matcap&&(g.matcap.value=d.matcap)}function S(g,d){const v=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function aC(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,T){const w=T.program;i.uniformBlockBinding(M,w)}function c(M,T){let w=r[M.id];w===void 0&&(g(M),w=f(M),r[M.id]=w,M.addEventListener("dispose",v));const R=T.program;i.updateUBOMapping(M,R);const _=e.render.frame;s[M.id]!==_&&(u(M),s[M.id]=_)}function f(M){const T=h();M.__bindingPointIndex=T;const w=t.createBuffer(),R=M.__size,_=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,R,_),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,w),w}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const T=r[M.id],w=M.uniforms,R=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let _=0,C=w.length;_<C;_++){const I=w[_];if(Array.isArray(I))for(let U=0,O=I.length;U<O;U++)m(I[U],_,U,R);else m(I,_,0,R)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(M,T,w,R){if(S(M,T,w,R)===!0){const _=M.__offset,C=M.value;if(Array.isArray(C)){let I=0;for(let U=0;U<C.length;U++){const O=C[U],F=d(O);x(O,M.__data,I),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(I+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(C,M.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,_,M.__data)}}function x(M,T,w){typeof M=="number"||typeof M=="boolean"?T[0]=M:M.isMatrix3?(T[0]=M.elements[0],T[1]=M.elements[1],T[2]=M.elements[2],T[3]=0,T[4]=M.elements[3],T[5]=M.elements[4],T[6]=M.elements[5],T[7]=0,T[8]=M.elements[6],T[9]=M.elements[7],T[10]=M.elements[8],T[11]=0):ArrayBuffer.isView(M)?T.set(new M.constructor(M.buffer,M.byteOffset,T.length)):M.toArray(T,w)}function S(M,T,w,R){const _=M.value,C=T+"_"+w;if(R[C]===void 0)return typeof _=="number"||typeof _=="boolean"?R[C]=_:ArrayBuffer.isView(_)?R[C]=_.slice():R[C]=_.clone(),!0;{const I=R[C];if(typeof _=="number"||typeof _=="boolean"){if(I!==_)return R[C]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(I.equals(_)===!1)return I.copy(_),!0}}return!1}function g(M){const T=M.uniforms;let w=0;const R=16;for(let C=0,I=T.length;C<I;C++){const U=Array.isArray(T[C])?T[C]:[T[C]];for(let O=0,F=U.length;O<F;O++){const L=U[O],G=Array.isArray(L.value)?L.value:[L.value];for(let te=0,j=G.length;te<j;te++){const V=G[te],H=d(V),P=w%R,b=P%H.boundary,ne=P+b;w+=b,ne!==0&&R-ne<H.storage&&(w+=R-ne),L.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=w,w+=H.storage}}}const _=w%R;return _>0&&(w+=R-_),M.__size=w,M.__cache={},this}function d(M){const T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=48,T.storage=48):M.isMatrix4?(T.boundary=64,T.storage=64):M.isTexture?et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(T.boundary=16,T.storage=M.byteLength):et("WebGLRenderer: Unsupported uniform value type.",M),T}function v(M){const T=M.target;T.removeEventListener("dispose",v);const w=a.indexOf(T.__bindingPointIndex);a.splice(w,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function E(){for(const M in r)t.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:c,dispose:E}}const oC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hi=null;function lC(){return Hi===null&&(Hi=new j1(oC,16,16,ws,Zi),Hi.name="DFG_LUT",Hi.minFilter=xn,Hi.magFilter=xn,Hi.wrapS=fr,Hi.wrapT=fr,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}class cC{constructor(e={}){const{canvas:n=s1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:m=li}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;const S=m,g=new Set([wp,Ep,Mp]),d=new Set([li,Ji,Uo,Oo,yp,Sp]),v=new Uint32Array(4),E=new Int32Array(4),M=new q;let T=null,w=null;const R=[],_=[];let C=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let U=!1,O=null,F=null,L=null,G=null;this._outputColorSpace=ai;let te=0,j=0,V=null,H=-1,P=null;const b=new Jt,ne=new Jt;let le=null;const Me=new St(0);let xe=0,me=n.width,B=n.height,J=1,Q=null,_e=null;const de=new Jt(0,0,me,B),De=new Jt(0,0,me,B);let Qe=!1;const ve=new Pp;let Ye=!1,Je=!1;const je=new qt,st=new q,lt=new Jt,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function ye(){return V===null?J:1}let D=i;function Ue(A,z){return n.getContext(A,z)}let Pe,N,y,W,X,$,he,pe,Z,se,fe,qe,Te,Ee,$e,Fe,ze,k,Ae,re,we,be,ce;try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${vp}`),n.addEventListener("webglcontextlost",Et,!1),n.addEventListener("webglcontextrestored",Tt,!1),n.addEventListener("webglcontextcreationerror",Sn,!1),D===null){const z="webgl2";if(D=Ue(z,A),D===null)throw Ue(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xe()}catch(A){throw n.removeEventListener("webglcontextlost",Et,!1),n.removeEventListener("webglcontextrestored",Tt,!1),n.removeEventListener("webglcontextcreationerror",Sn,!1),Nt("WebGLRenderer: "+A.message),A}function Xe(){Pe=new l2(D),Pe.init(),we=new QA(D,Pe),N=new ZT(D,Pe,e,we),y=new JA(D,Pe),N.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),F=D.createFramebuffer(),L=D.createFramebuffer(),G=D.createFramebuffer(),W=new d2(D),X=new FA,$=new ZA(D,Pe,y,X,N,we,W),he=new o2(I),pe=new hE(D),be=new KT(D,pe),Z=new c2(D,pe,W,be),se=new h2(D,Z,pe,be,W),k=new f2(D,N,$),$e=new QT(X),fe=new OA(I,he,Pe,N,be,$e),qe=new sC(I,X),Te=new BA,Ee=new jA(Pe),ze=new $T(I,he,y,se,x,l),Fe=new KA(I,se,N),ce=new aC(D,W,N,y),Ae=new JT(D,Pe,W),re=new u2(D,Pe,W),W.programs=fe.programs,I.capabilities=N,I.extensions=Pe,I.properties=X,I.renderLists=Te,I.shadowMap=Fe,I.state=y,I.info=W}S!==li&&(C=new m2(S,n.width,n.height,o,r,s));const ke=new iC(I,D);this.xr=ke,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=Pe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Pe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(A){A!==void 0&&(J=A,this.setSize(me,B,!1))},this.getSize=function(A){return A.set(me,B)},this.setSize=function(A,z,ee=!0){if(ke.isPresenting){et("WebGLRenderer: Can't change size while VR device is presenting.");return}me=A,B=z,n.width=Math.floor(A*J),n.height=Math.floor(z*J),ee===!0&&(n.style.width=A+"px",n.style.height=z+"px"),C!==null&&C.setSize(n.width,n.height),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(me*J,B*J).floor()},this.setDrawingBufferSize=function(A,z,ee){me=A,B=z,J=ee,n.width=Math.floor(A*ee),n.height=Math.floor(z*ee),this.setViewport(0,0,A,z)},this.setEffects=function(A){if(S===li){Nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let z=0;z<A.length;z++)if(A[z].isOutputPass===!0){et("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(b)},this.getViewport=function(A){return A.copy(de)},this.setViewport=function(A,z,ee,K){A.isVector4?de.set(A.x,A.y,A.z,A.w):de.set(A,z,ee,K),y.viewport(b.copy(de).multiplyScalar(J).round())},this.getScissor=function(A){return A.copy(De)},this.setScissor=function(A,z,ee,K){A.isVector4?De.set(A.x,A.y,A.z,A.w):De.set(A,z,ee,K),y.scissor(ne.copy(De).multiplyScalar(J).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(A){y.setScissorTest(Qe=A)},this.setOpaqueSort=function(A){Q=A},this.setTransparentSort=function(A){_e=A},this.getClearColor=function(A){return A.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,ee=!0){let K=0;if(A){let Y=!1;if(V!==null){const Ne=V.texture.format;Y=g.has(Ne)}if(Y){const Ne=V.texture.type,Be=d.has(Ne),Ce=ze.getClearColor(),He=ze.getClearAlpha(),Ke=Ce.r,ut=Ce.g,ht=Ce.b;Be?(v[0]=Ke,v[1]=ut,v[2]=ht,v[3]=He,D.clearBufferuiv(D.COLOR,0,v)):(E[0]=Ke,E[1]=ut,E[2]=ht,E[3]=He,D.clearBufferiv(D.COLOR,0,E))}else K|=D.COLOR_BUFFER_BIT}z&&(K|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ee&&(K|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&D.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),O=A},this.dispose=function(){n.removeEventListener("webglcontextlost",Et,!1),n.removeEventListener("webglcontextrestored",Tt,!1),n.removeEventListener("webglcontextcreationerror",Sn,!1),ze.dispose(),Te.dispose(),Ee.dispose(),X.dispose(),he.dispose(),se.dispose(),be.dispose(),ce.dispose(),fe.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",pn),ke.removeEventListener("sessionend",gt),At.stop()};function Et(A){A.preventDefault(),d0("WebGLRenderer: Context Lost."),U=!0}function Tt(){d0("WebGLRenderer: Context Restored."),U=!1;const A=W.autoReset,z=Fe.enabled,ee=Fe.autoUpdate,K=Fe.needsUpdate,Y=Fe.type;Xe(),W.autoReset=A,Fe.enabled=z,Fe.autoUpdate=ee,Fe.needsUpdate=K,Fe.type=Y}function Sn(A){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Bn(A){const z=A.target;z.removeEventListener("dispose",Bn),La(z)}function La(A){Ns(A),X.remove(A)}function Ns(A){const z=X.get(A).programs;z!==void 0&&(z.forEach(function(ee){fe.releaseProgram(ee)}),A.isShaderMaterial&&fe.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,ee,K,Y,Ne){z===null&&(z=dt);const Be=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Ce=nr(A,z,ee,K,Y);y.setMaterial(K,Be);let He=ee.index,Ke=1;if(K.wireframe===!0){if(He=Z.getWireframeAttribute(ee),He===void 0)return;Ke=2}const ut=ee.drawRange,ht=ee.attributes.position;let Ve=ut.start*Ke,Rt=(ut.start+ut.count)*Ke;Ne!==null&&(Ve=Math.max(Ve,Ne.start*Ke),Rt=Math.min(Rt,(Ne.start+Ne.count)*Ke)),He!==null?(Ve=Math.max(Ve,0),Rt=Math.min(Rt,He.count)):ht!=null&&(Ve=Math.max(Ve,0),Rt=Math.min(Rt,ht.count));const $t=Rt-Ve;if($t<0||$t===1/0)return;be.setup(Y,K,Ce,ee,He);let Pt,Dt=Ae;if(He!==null&&(Pt=pe.get(He),Dt=re,Dt.setIndex(Pt)),Y.isMesh)K.wireframe===!0?(y.setLineWidth(K.wireframeLinewidth*ye()),Dt.setMode(D.LINES)):Dt.setMode(D.TRIANGLES);else if(Y.isLine){let cn=K.linewidth;cn===void 0&&(cn=1),y.setLineWidth(cn*ye()),Y.isLineSegments?Dt.setMode(D.LINES):Y.isLineLoop?Dt.setMode(D.LINE_LOOP):Dt.setMode(D.LINE_STRIP)}else Y.isPoints?Dt.setMode(D.POINTS):Y.isSprite&&Dt.setMode(D.TRIANGLES);if(Y.isBatchedMesh)if(Pe.get("WEBGL_multi_draw"))Dt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const cn=Y._multiDrawStarts,Oe=Y._multiDrawCounts,En=Y._multiDrawCount,_t=He?pe.get(He).bytesPerElement:1,bn=X.get(K).currentProgram.getUniforms();for(let pi=0;pi<En;pi++)bn.setValue(D,"_gl_DrawID",pi),Dt.render(cn[pi]/_t,Oe[pi])}else if(Y.isInstancedMesh)Dt.renderInstances(Ve,$t,Y.count);else if(ee.isInstancedBufferGeometry){const cn=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Oe=Math.min(ee.instanceCount,cn);Dt.renderInstances(Ve,$t,Oe)}else Dt.render(Ve,$t)};function Ps(A,z,ee,K){O!==null&&A.isNodeMaterial&&O.setObject(K,A),Ye===!0&&$e.setState(A,ee,!1),A.transparent===!0&&A.side===Wt&&A.forceSinglePass===!1?(A.side=ei,A.needsUpdate=!0,tr(A,z,K),A.side=Ms,A.needsUpdate=!0,tr(A,z,K),A.side=Wt):tr(A,z,K)}this.compile=function(A,z,ee=null){ee===null&&(ee=A),O!==null&&O.renderStart(A,z,ee),w=Ee.get(ee),w.init(z),_.push(w),ee.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(w.pushLight(Y),Y.castShadow&&w.pushShadow(Y))}),A!==ee&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(w.pushLight(Y),Y.castShadow&&w.pushShadow(Y))}),w.setupLights(),O!==null&&O.updateLights(w.state.lightsArray),Je=this.localClippingEnabled,Ye=$e.init(this.clippingPlanes,Je),Ye===!0&&$e.setGlobalState(this.clippingPlanes,z),O!==null&&Fe.render(w.state.shadowsArray,ee,z);const K=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Ne=Y.material;if(Ne)if(Array.isArray(Ne))for(let Be=0;Be<Ne.length;Be++){const Ce=Ne[Be];Ps(Ce,ee,z,Y),K.add(Ce)}else Ps(Ne,ee,z,Y),K.add(Ne)}),w=_.pop(),O!==null&&O.renderEnd(),K},this.compileAsync=function(A,z,ee=null){const K=this.compile(A,z,ee);return new Promise(Y=>{function Ne(){if(K.forEach(function(Be){const He=X.get(Be).currentProgram;(He===void 0||He.isReady())&&K.delete(Be)}),K.size===0){Y(A);return}setTimeout(Ne,10)}Pe.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let at=null;function ct(A){at&&at(A)}function pn(){At.stop()}function gt(){At.start()}const At=new u_;At.setAnimationLoop(ct),typeof self<"u"&&At.setContext(self),this.setAnimationLoop=function(A){at=A,ke.setAnimationLoop(A),A===null?At.stop():At.start()},ke.addEventListener("sessionstart",pn),ke.addEventListener("sessionend",gt),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;O!==null&&O.renderStart(A,z);const ee=ke.enabled===!0&&ke.isPresenting===!0,K=C!==null&&(V===null||ee)&&C.begin(I,V);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(z),z=ke.getCamera()),A.isScene===!0&&A.onBeforeRender(I,A,z,V),w=Ee.get(A,_.length),w.init(z),w.state.textureUnits=$.getTextureUnits(),_.push(w),je.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ve.setFromProjectionMatrix(je,Yi,z.reversedDepth),Je=this.localClippingEnabled,Ye=$e.init(this.clippingPlanes,Je),T=Te.get(A,R.length),T.init(),R.push(T),ke.enabled===!0&&ke.isPresenting===!0){const Be=I.xr.getDepthSensingMesh();Be!==null&&Gt(Be,z,-1/0,I.sortObjects)}Gt(A,z,0,I.sortObjects),T.finish(),O!==null&&O.updateLights(w.state.lightsArray),I.sortObjects===!0&&T.sort(Q,_e),ae=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,ae&&ze.addToRenderList(T,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ye===!0&&$e.beginShadows();const Y=w.state.shadowsArray;if(Fe.render(Y,A,z),Ye===!0&&$e.endShadows(),(K&&C.hasRenderPass())===!1){const Be=T.opaque,Ce=T.transmissive;if(w.setupLights(),z.isArrayCamera){const He=z.cameras;if(Ce.length>0)for(let Ke=0,ut=He.length;Ke<ut;Ke++){const ht=He[Ke];an(Be,Ce,A,ht)}ae&&ze.render(A);for(let Ke=0,ut=He.length;Ke<ut;Ke++){const ht=He[Ke];Mn(T,A,ht,ht.viewport)}}else Ce.length>0&&an(Be,Ce,A,z),ae&&ze.render(A),Mn(T,A,z)}V!==null&&j===0&&($.updateMultisampleRenderTarget(V),$.updateRenderTargetMipmap(V)),K&&C.end(I),A.isScene===!0&&A.onAfterRender(I,A,z),be.resetDefaultState(),H=-1,P=null,_.pop(),_.length>0?(w=_[_.length-1],$.setTextureUnits(w.state.textureUnits),Ye===!0&&$e.setGlobalState(I.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?T=R[R.length-1]:T=null,O!==null&&O.renderEnd()};function Gt(A,z,ee,K){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)ee=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLightProbeGrid)w.pushLightProbeGrid(A);else if(A.isLight)w.pushLight(A),A.castShadow&&w.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(ve)){K&&lt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(je);const Be=se.update(A),Ce=A.material;Ce.visible&&T.push(A,Be,Ce,ee,lt.z,null,z)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(ve))){const Be=se.update(A),Ce=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),lt.copy(A.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),lt.copy(Be.boundingSphere.center)),lt.applyMatrix4(A.matrixWorld).applyMatrix4(je)),Array.isArray(Ce)){const He=Be.groups;for(let Ke=0,ut=He.length;Ke<ut;Ke++){const ht=He[Ke],Ve=Ce[ht.materialIndex];Ve&&Ve.visible&&T.push(A,Be,Ve,ee,lt.z,ht,z)}}else Ce.visible&&T.push(A,Be,Ce,ee,lt.z,null,z)}}const Ne=A.children;for(let Be=0,Ce=Ne.length;Be<Ce;Be++)Gt(Ne[Be],z,ee,K)}function Mn(A,z,ee,K){const{opaque:Y,transmissive:Ne,transparent:Be}=A;w.setupLightsView(ee),Ye===!0&&$e.setGlobalState(I.clippingPlanes,ee),K&&y.viewport(b.copy(K)),Y.length>0&&er(Y,z,ee),Ne.length>0&&er(Ne,z,ee),Be.length>0&&er(Be,z,ee),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function an(A,z,ee,K){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[K.id]===void 0){const Ve=Pe.has("EXT_color_buffer_half_float")||Pe.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[K.id]=new Fi(1,1,{generateMipmaps:!0,type:Ve?Zi:li,minFilter:hs,samples:Math.max(4,N.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:wt.workingColorSpace})}const Ne=w.state.transmissionRenderTarget[K.id],Be=K.viewport||b;Ne.setSize(Be.z*I.transmissionResolutionScale,Be.w*I.transmissionResolutionScale);const Ce=I.getRenderTarget(),He=I.getActiveCubeFace(),Ke=I.getActiveMipmapLevel();I.setRenderTarget(Ne),I.getClearColor(Me),xe=I.getClearAlpha(),xe<1&&I.setClearColor(16777215,.5),I.clear(),ae&&ze.render(ee);const ut=I.toneMapping;I.toneMapping=Ki;const ht=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),w.setupLightsView(K),Ye===!0&&$e.setGlobalState(I.clippingPlanes,K),er(A,ee,K),$.updateMultisampleRenderTarget(Ne),$.updateRenderTargetMipmap(Ne),Pe.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Rt=0,$t=z.length;Rt<$t;Rt++){const Pt=z[Rt],{object:Dt,geometry:cn,material:Oe,group:En}=Pt;if(Oe.side===Wt&&Dt.layers.test(K.layers)){const _t=Oe.side;Oe.side=ei,Oe.needsUpdate=!0,qo(Dt,ee,K,cn,Oe,En),Oe.side=_t,Oe.needsUpdate=!0,Ve=!0}}Ve===!0&&($.updateMultisampleRenderTarget(Ne),$.updateRenderTargetMipmap(Ne))}I.setRenderTarget(Ce,He,Ke),I.setClearColor(Me,xe),ht!==void 0&&(K.viewport=ht),I.toneMapping=ut}function er(A,z,ee){const K=z.isScene===!0?z.overrideMaterial:null;for(let Y=0,Ne=A.length;Y<Ne;Y++){const Be=A[Y],{object:Ce,geometry:He,group:Ke}=Be;let ut=Be.material;ut.allowOverride===!0&&K!==null&&(ut=K),Ce.layers.test(ee.layers)&&qo(Ce,z,ee,He,ut,Ke)}}function qo(A,z,ee,K,Y,Ne){O!==null&&Y.isNodeMaterial&&O.setObject(A,Y),A.onBeforeRender(I,z,ee,K,Y,Ne),A.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(I,z,ee,K,A,Ne),Y.transparent===!0&&Y.side===Wt&&Y.forceSinglePass===!1?(Y.side=ei,Y.needsUpdate=!0,I.renderBufferDirect(ee,z,K,Y,A,Ne),Y.side=Ms,Y.needsUpdate=!0,I.renderBufferDirect(ee,z,K,Y,A,Ne),Y.side=Wt):I.renderBufferDirect(ee,z,K,Y,A,Ne),A.onAfterRender(I,z,ee,K,Y,Ne)}function tr(A,z,ee){z.isScene!==!0&&(z=dt);const K=X.get(A),Y=w.state.lights,Ne=w.state.shadowsArray,Be=Y.state.version,Ce=fe.getParameters(A,Y.state,Ne,z,ee,w.state.lightProbeGridArray),He=fe.getProgramCacheKey(Ce);let Ke=K.programs;K.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,K.fog=z.fog;const ut=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;K.envMap=he.get(A.envMap||K.environment,ut),K.envMapRotation=K.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Ke===void 0&&(A.addEventListener("dispose",Bn),Ke=new Map,K.programs=Ke);let ht=Ke.get(He);if(ht!==void 0){if(K.currentProgram===ht&&K.lightsStateVersion===Be)return Mr(A,Ce),ht}else Ce.uniforms=fe.getUniforms(A),O!==null&&A.isNodeMaterial&&O.build(A,ee,Ce),A.onBeforeCompile(Ce,I),ht=fe.acquireProgram(Ce,He),Ke.set(He,ht),K.uniforms=Ce.uniforms;const Ve=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ve.clippingPlanes=$e.uniform),Mr(A,Ce),K.needsLights=vu(A),K.lightsStateVersion=Be,K.needsLights&&(Ve.ambientLightColor.value=Y.state.ambient,Ve.lightProbe.value=Y.state.probe,Ve.sunLights.value=Y.state.sun,Ve.sunLightShadows.value=Y.state.sunShadow,Ve.directionalLights.value=Y.state.directional,Ve.directionalLightShadows.value=Y.state.directionalShadow,Ve.spotLights.value=Y.state.spot,Ve.spotLightShadows.value=Y.state.spotShadow,Ve.rectAreaLights.value=Y.state.rectArea,Ve.ltc_1.value=Y.state.rectAreaLTC1,Ve.ltc_2.value=Y.state.rectAreaLTC2,Ve.pointLights.value=Y.state.point,Ve.pointLightShadows.value=Y.state.pointShadow,Ve.hemisphereLights.value=Y.state.hemi,Ve.sunShadowMatrix.value=Y.state.sunShadowMatrix,Ve.sunShadowCascade.value=Y.state.sunShadowCascade,Ve.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ve.spotLightMatrix.value=Y.state.spotLightMatrix,Ve.spotLightMap.value=Y.state.spotLightMap,Ve.pointShadowMatrix.value=Y.state.pointShadowMatrix),K.lightProbeGrid=w.state.lightProbeGridArray.length>0,K.currentProgram=ht,K.uniformsList=null,ht}function Da(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=vc.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Mr(A,z){const ee=X.get(A);ee.outputColorSpace=z.outputColorSpace,ee.batching=z.batching,ee.batchingColor=z.batchingColor,ee.instancing=z.instancing,ee.instancingColor=z.instancingColor,ee.instancingMorph=z.instancingMorph,ee.skinning=z.skinning,ee.morphTargets=z.morphTargets,ee.morphNormals=z.morphNormals,ee.morphColors=z.morphColors,ee.morphTargetsCount=z.morphTargetsCount,ee.numClippingPlanes=z.numClippingPlanes,ee.numIntersection=z.numClipIntersection,ee.vertexAlphas=z.vertexAlphas,ee.vertexTangents=z.vertexTangents,ee.toneMapping=z.toneMapping}function $o(A,z){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;M.setFromMatrixPosition(z.matrixWorld);for(let ee=0,K=A.length;ee<K;ee++){const Y=A[ee];if(Y.texture!==null&&Y.boundingBox.containsPoint(M))return Y}return null}function nr(A,z,ee,K,Y){z.isScene!==!0&&(z=dt),$.resetTextureUnits();const Ne=z.fog,Be=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?z.environment:null,Ce=V===null?I.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:wt.workingColorSpace,He=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Ke=he.get(K.envMap||Be,He),ut=K.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,ht=!!ee.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ve=!!ee.morphAttributes.position,Rt=!!ee.morphAttributes.normal,$t=!!ee.morphAttributes.color;let Pt=Ki;K.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Pt=I.toneMapping);const Dt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,cn=Dt!==void 0?Dt.length:0,Oe=X.get(K),En=w.state.lights;if(Ye===!0&&(Je===!0||A!==P)){const bt=A===P&&K.id===H;$e.setState(K,A,bt)}let _t=!1;K.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==En.state.version||Oe.outputColorSpace!==Ce||Y.isBatchedMesh&&Oe.batching===!1||!Y.isBatchedMesh&&Oe.batching===!0||Y.isBatchedMesh&&Oe.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Oe.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Oe.instancing===!1||!Y.isInstancedMesh&&Oe.instancing===!0||Y.isSkinnedMesh&&Oe.skinning===!1||!Y.isSkinnedMesh&&Oe.skinning===!0||Y.isInstancedMesh&&Oe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Oe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Oe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Oe.instancingMorph===!1&&Y.morphTexture!==null||Oe.envMap!==Ke||K.fog===!0&&Oe.fog!==Ne||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==$e.numPlanes||Oe.numIntersection!==$e.numIntersection)||Oe.vertexAlphas!==ut||Oe.vertexTangents!==ht||Oe.morphTargets!==Ve||Oe.morphNormals!==Rt||Oe.morphColors!==$t||Oe.toneMapping!==Pt||Oe.morphTargetsCount!==cn||!!Oe.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(_t=!0):(_t=!0,Oe.__version=K.version);let bn=Oe.currentProgram;_t===!0&&(bn=tr(K,z,Y),O&&K.isNodeMaterial&&O.onUpdateProgram(K,bn,Oe));let pi=!1,ti=!1,mi=!1;const Lt=bn.getUniforms(),Ht=Oe.uniforms;if(y.useProgram(bn.program)&&(pi=!0,ti=!0,mi=!0),K.id!==H&&(H=K.id,ti=!0),Oe.needsLights){const bt=$o(w.state.lightProbeGridArray,Y);Oe.lightProbeGrid!==bt&&(Oe.lightProbeGrid=bt,ti=!0)}if(pi||P!==A){y.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Lt.setValue(D,"projectionMatrix",A.projectionMatrix),Lt.setValue(D,"viewMatrix",A.matrixWorldInverse);const Bi=Lt.map.cameraPosition;Bi!==void 0&&Bi.setValue(D,st.setFromMatrixPosition(A.matrixWorld)),N.logarithmicDepthBuffer&&Lt.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Lt.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),P!==A&&(P=A,ti=!0,mi=!0)}if(Oe.needsLights&&(En.state.sunShadowMap.length>0&&Lt.setValue(D,"sunShadowMap",En.state.sunShadowMap,$),En.state.directionalShadowMap.length>0&&Lt.setValue(D,"directionalShadowMap",En.state.directionalShadowMap,$),En.state.spotShadowMap.length>0&&Lt.setValue(D,"spotShadowMap",En.state.spotShadowMap,$),En.state.pointShadowMap.length>0&&Lt.setValue(D,"pointShadowMap",En.state.pointShadowMap,$)),Y.isSkinnedMesh){Lt.setOptional(D,Y,"bindMatrix"),Lt.setOptional(D,Y,"bindMatrixInverse");const bt=Y.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),Lt.setValue(D,"boneTexture",bt.boneTexture,$))}Y.isBatchedMesh&&(Lt.setOptional(D,Y,"batchingTexture"),Lt.setValue(D,"batchingTexture",Y._matricesTexture,$),Lt.setOptional(D,Y,"batchingIdTexture"),Lt.setValue(D,"batchingIdTexture",Y._indirectTexture,$),Lt.setOptional(D,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Lt.setValue(D,"batchingColorTexture",Y._colorsTexture,$));const ni=ee.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&k.update(Y,ee,bn),(ti||Oe.receiveShadow!==Y.receiveShadow)&&(Oe.receiveShadow=Y.receiveShadow,Lt.setValue(D,"receiveShadow",Y.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&z.environment!==null&&(Ht.envMapIntensity.value=z.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=lC()),ti){if(Lt.setValue(D,"toneMappingExposure",I.toneMappingExposure),Oe.needsLights&&ns(Ht,mi),Ne&&K.fog===!0&&qe.refreshFogUniforms(Ht,Ne),qe.refreshMaterialUniforms(Ht,K,J,B,w.state.transmissionRenderTarget[A.id]),Oe.needsLights&&Oe.lightProbeGrid){const bt=Oe.lightProbeGrid;Ht.probesSH.value=bt.texture,Ht.probesMin.value.copy(bt.boundingBox.min),Ht.probesMax.value.copy(bt.boundingBox.max),Ht.probesResolution.value.copy(bt.resolution)}vc.upload(D,Da(Oe),Ht,$)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(vc.upload(D,Da(Oe),Ht,$),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Lt.setValue(D,"center",Y.center),Lt.setValue(D,"modelViewMatrix",Y.modelViewMatrix),Lt.setValue(D,"normalMatrix",Y.normalMatrix),Lt.setValue(D,"modelMatrix",Y.matrixWorld),K.uniformsGroups!==void 0){const bt=K.uniformsGroups;for(let Bi=0,Er=bt.length;Bi<Er;Bi++){const Is=bt[Bi];ce.update(Is,bn),ce.bind(Is,bn)}}return bn}function ns(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.sunLights.needsUpdate=z,A.sunLightShadows.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function vu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(A,z,ee){const K=X.get(A);K.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),X.get(A.texture).__webglTexture=z,X.get(A.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:ee,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){const ee=X.get(A);ee.__webglFramebuffer=z,ee.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,ee=0){V=A,te=z,j=ee;let K=null,Y=!1,Ne=!1;if(A){const Ce=X.get(A);if(Ce.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(D.FRAMEBUFFER,Ce.__webglFramebuffer),b.copy(A.viewport),ne.copy(A.scissor),le=A.scissorTest,y.viewport(b),y.scissor(ne),y.setScissorTest(le),H=-1;return}else if(Ce.__webglFramebuffer===void 0)$.setupRenderTarget(A);else if(Ce.__hasExternalTextures)$.rebindTextures(A,X.get(A.texture).__webglTexture,X.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ut=A.depthTexture;if(Ce.__boundDepthTexture!==ut){if(ut!==null&&X.has(ut)&&(A.width!==ut.image.width||A.height!==ut.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(A)}}const He=A.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Ne=!0);const Ke=X.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ke[z])?K=Ke[z][ee]:K=Ke[z],Y=!0):A.samples>0&&$.useMultisampledRTT(A)===!1?K=X.get(A).__webglMultisampledFramebuffer:Array.isArray(Ke)?K=Ke[ee]:K=Ke,b.copy(A.viewport),ne.copy(A.scissor),le=A.scissorTest}else b.copy(de).multiplyScalar(J).floor(),ne.copy(De).multiplyScalar(J).floor(),le=Qe;if(ee!==0&&(K=F),y.bindFramebuffer(D.FRAMEBUFFER,K)&&y.drawBuffers(A,K),y.viewport(b),y.scissor(ne),y.setScissorTest(le),Y){const Ce=X.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ce.__webglTexture,ee)}else if(Ne){const Ce=z;for(let He=0;He<A.textures.length;He++){const Ke=X.get(A.textures[He]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+He,Ke.__webglTexture,ee,Ce)}}else if(A!==null&&ee!==0){const Ce=X.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ce.__webglTexture,ee)}H=-1};function Ko(A){const z=X.get(A);return(z.__readFormat!==A.format||z.__readType!==A.type)&&(z.__readFormat=A.format,z.__readType=A.type,z.__formatReadable=N.textureFormatReadable(A.format),z.__typeReadable=N.textureTypeReadable(A.type)),z}this.readRenderTargetPixels=function(A,z,ee,K,Y,Ne,Be,Ce=0){if(!(A&&A.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=X.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Be!==void 0&&(He=He[Be]),He){y.bindFramebuffer(D.FRAMEBUFFER,He);try{const Ke=A.textures[Ce],ut=Ke.format,ht=Ke.type;A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ce);const Ve=Ko(Ke);if(Ve.__formatReadable===!1){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ve.__typeReadable===!1){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-K&&ee>=0&&ee<=A.height-Y&&D.readPixels(z,ee,K,Y,we.convert(ut),we.convert(ht),Ne)}finally{const Ke=V!==null?X.get(V).__webglFramebuffer:null;y.bindFramebuffer(D.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(A,z,ee,K,Y,Ne,Be,Ce=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=X.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Be!==void 0&&(He=He[Be]),He)if(z>=0&&z<=A.width-K&&ee>=0&&ee<=A.height-Y){y.bindFramebuffer(D.FRAMEBUFFER,He);const Ke=A.textures[Ce],ut=Ke.format,ht=Ke.type;A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ce);const Ve=Ko(Ke);if(Ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Rt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Rt),D.bufferData(D.PIXEL_PACK_BUFFER,Ne.byteLength,D.STREAM_READ),D.readPixels(z,ee,K,Y,we.convert(ut),we.convert(ht),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const $t=V!==null?X.get(V).__webglFramebuffer:null;y.bindFramebuffer(D.FRAMEBUFFER,$t);const Pt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await a1(D,Pt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Rt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Ne),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(Rt),D.deleteSync(Pt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,ee=0){const K=Math.pow(2,-ee),Y=Math.floor(A.image.width*K),Ne=Math.floor(A.image.height*K),Be=z!==null?z.x:0,Ce=z!==null?z.y:0;$.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,ee,0,0,Be,Ce,Y,Ne),y.unbindTexture()},this.copyTextureToTexture=function(A,z,ee=null,K=null,Y=0,Ne=0){let Be,Ce,He,Ke,ut,ht,Ve,Rt,$t;const Pt=A.isCompressedTexture?A.mipmaps[Ne]:A.image;if(ee!==null)Be=ee.max.x-ee.min.x,Ce=ee.max.y-ee.min.y,He=ee.isBox3?ee.max.z-ee.min.z:1,Ke=ee.min.x,ut=ee.min.y,ht=ee.isBox3?ee.min.z:0;else{const Ht=Math.pow(2,-Y);Be=Math.floor(Pt.width*Ht),Ce=Math.floor(Pt.height*Ht),A.isDataArrayTexture?He=Pt.depth:A.isData3DTexture?He=Math.floor(Pt.depth*Ht):He=1,Ke=0,ut=0,ht=0}K!==null?(Ve=K.x,Rt=K.y,$t=K.z):(Ve=0,Rt=0,$t=0);const Dt=we.convert(z.format),cn=we.convert(z.type);let Oe;z.isData3DTexture?($.setTexture3D(z,0),Oe=D.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?($.setTexture2DArray(z,0),Oe=D.TEXTURE_2D_ARRAY):($.setTexture2D(z,0),Oe=D.TEXTURE_2D),y.activeTexture(D.TEXTURE0),y.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),y.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),y.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);const En=y.getParameter(D.UNPACK_ROW_LENGTH),_t=y.getParameter(D.UNPACK_IMAGE_HEIGHT),bn=y.getParameter(D.UNPACK_SKIP_PIXELS),pi=y.getParameter(D.UNPACK_SKIP_ROWS),ti=y.getParameter(D.UNPACK_SKIP_IMAGES);y.pixelStorei(D.UNPACK_ROW_LENGTH,Pt.width),y.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Pt.height),y.pixelStorei(D.UNPACK_SKIP_PIXELS,Ke),y.pixelStorei(D.UNPACK_SKIP_ROWS,ut),y.pixelStorei(D.UNPACK_SKIP_IMAGES,ht);const mi=A.isDataArrayTexture||A.isData3DTexture,Lt=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){const Ht=X.get(A),ni=X.get(z),bt=X.get(Ht.__renderTarget),Bi=X.get(ni.__renderTarget);y.bindFramebuffer(D.READ_FRAMEBUFFER,bt.__webglFramebuffer),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let Er=0;Er<He;Er++)mi&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,X.get(A).__webglTexture,Y,ht+Er),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,X.get(z).__webglTexture,Ne,$t+Er)),D.blitFramebuffer(Ke,ut,Be,Ce,Ve,Rt,Be,Ce,D.DEPTH_BUFFER_BIT,D.NEAREST);y.bindFramebuffer(D.READ_FRAMEBUFFER,null),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||X.has(A)){const Ht=X.get(A),ni=X.get(z);y.bindFramebuffer(D.READ_FRAMEBUFFER,L),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,G);for(let bt=0;bt<He;bt++)mi?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ht.__webglTexture,Y,ht+bt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ht.__webglTexture,Y),Lt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ni.__webglTexture,Ne,$t+bt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ni.__webglTexture,Ne),Y!==0?D.blitFramebuffer(Ke,ut,Be,Ce,Ve,Rt,Be,Ce,D.COLOR_BUFFER_BIT,D.NEAREST):Lt?D.copyTexSubImage3D(Oe,Ne,Ve,Rt,$t+bt,Ke,ut,Be,Ce):D.copyTexSubImage2D(Oe,Ne,Ve,Rt,Ke,ut,Be,Ce);y.bindFramebuffer(D.READ_FRAMEBUFFER,null),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Lt?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(Oe,Ne,Ve,Rt,$t,Be,Ce,He,Dt,cn,Pt.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(Oe,Ne,Ve,Rt,$t,Be,Ce,He,Dt,Pt.data):D.texSubImage3D(Oe,Ne,Ve,Rt,$t,Be,Ce,He,Dt,cn,Pt):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Ne,Ve,Rt,Be,Ce,Dt,cn,Pt.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Ne,Ve,Rt,Pt.width,Pt.height,Dt,Pt.data):D.texSubImage2D(D.TEXTURE_2D,Ne,Ve,Rt,Be,Ce,Dt,cn,Pt);y.pixelStorei(D.UNPACK_ROW_LENGTH,En),y.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_t),y.pixelStorei(D.UNPACK_SKIP_PIXELS,bn),y.pixelStorei(D.UNPACK_SKIP_ROWS,pi),y.pixelStorei(D.UNPACK_SKIP_IMAGES,ti),Ne===0&&z.generateMipmaps&&D.generateMipmap(Oe),y.unbindTexture()},this.initRenderTarget=function(A){X.get(A).__webglFramebuffer===void 0&&$.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?$.setTextureCube(A,0):A.isData3DTexture?$.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?$.setTexture2DArray(A,0):$.setTexture2D(A,0),y.unbindTexture()},this.resetState=function(){te=0,j=0,V=null,y.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),n.unpackColorSpace=wt._getUnpackColorSpace()}}const Pd={ironman:{id:"ironman",name:"IRON MAN",imagePath:"/assets/fighter_hero_ironman.png",primaryColor:12131356,secondaryColor:15381256,glowColor:62463,accentColor:"#00f3ff",metalness:.88,roughness:.22,scale:1.04,hasReactor:!0,hasRepulsors:!0,hasHelmet:"ironman"},spiderman:{id:"spiderman",name:"SPIDER-MAN",imagePath:"/assets/fighter_hero_spiderman.png",primaryColor:14427686,secondaryColor:1981066,glowColor:3718648,accentColor:"#ff2a5f",metalness:.35,roughness:.45,scale:1,hasWebshooters:!0,hasHelmet:"spiderman"},thor:{id:"thor",name:"THOR",imagePath:"/assets/fighter_hero_thor.png",primaryColor:3359061,secondaryColor:9741240,glowColor:3718648,accentColor:"#00f3ff",metalness:.82,roughness:.25,scale:1.08,hasCape:!0,capeColor:10033947,hasHammer:!0,hasHelmet:"thor"},"captain-america":{id:"captain-america",name:"CAPTAIN AMERICA",imagePath:"/assets/fighter_hero_captain_america.png",primaryColor:1920728,secondaryColor:12131356,accentColor:"#fbbf24",glowColor:3718648,metalness:.5,roughness:.35,scale:1.04,hasShield:!0,hasHelmet:"captain-america"},"doctor-strange":{id:"doctor-strange",name:"DOCTOR STRANGE",imagePath:"/assets/fighter_hero_dr_strange.png",primaryColor:1976635,secondaryColor:1013358,glowColor:16096779,accentColor:"#a855f7",metalness:.3,roughness:.55,scale:1.04,hasCloak:!0,capeColor:8917815,hasEyeOfAgamotto:!0,hasMandalas:!0,hasHelmet:"doctor-strange"}},lg={"void-titan":{id:"void-titan",name:"VOID TITAN",imagePath:"/assets/villain_thanos.jpg",primaryColor:988970,secondaryColor:3359061,glowColor:11032055,accentColor:"#8b5cf6",metalness:.92,roughness:.18,scale:1.34,hasVoidCore:!0,hasGauntlet:!0,hasVoidCracks:!0,hasHelmet:"void-titan"},"green-goblin":{id:"green-goblin",name:"GREEN GOBLIN",imagePath:"/assets/fighter_villain_green_goblin.png",primaryColor:1483594,secondaryColor:8141549,glowColor:16347926,accentColor:"#22c55e",metalness:.75,roughness:.28,scale:1.08,hasGlider:!0,hasPumpkin:!0,hasHelmet:"green-goblin"},thanos:{id:"thanos",name:"THANOS",imagePath:"/assets/fighter_villain_thanos.png",primaryColor:7020968,secondaryColor:14251782,glowColor:14239471,accentColor:"#d946ef",metalness:.85,roughness:.25,scale:1.28,hasGauntlet:!0,hasHelmet:"thanos"},magneto:{id:"magneto",name:"MAGNETO",imagePath:"/assets/fighter_villain_magneto.png",primaryColor:10033947,secondaryColor:4988309,glowColor:15680580,accentColor:"#ef4444",metalness:.72,roughness:.28,scale:1.06,hasCape:!0,capeColor:3868516,hasMagneticOrbs:!0,hasHelmet:"magneto"},"doctor-doom":{id:"doctor-doom",name:"DOCTOR DOOM",imagePath:"/assets/fighter_villain_doctor_doom.png",primaryColor:9741240,secondaryColor:413243,glowColor:1096065,accentColor:"#10b981",metalness:.92,roughness:.18,scale:1.06,hasCloak:!0,capeColor:413243,hasDoomMask:!0,hasHelmet:"doctor-doom"},loki:{id:"loki",name:"LOKI",imagePath:"/assets/fighter_villain_loki.png",primaryColor:292951,secondaryColor:14251782,glowColor:8702998,accentColor:"#84cc16",metalness:.82,roughness:.24,scale:1.05,hasCape:!0,capeColor:142370,hasScepter:!0,hasHelmet:"loki"}},uC=new sE;function Dn(t,e=.7,n=.3,i=0){return new vi({color:t,metalness:e,roughness:n,emissive:i,emissiveIntensity:i!==0?.35:0})}function cg(t,e=!1){const n=t==null?void 0:t.id,i=e?lg[n]||lg.thanos:Pd[n]||(n==="dr-strange"?Pd["doctor-strange"]:Pd.spiderman),r=i.scale||1,s=new vt,a=uC.load(i.imagePath);a.colorSpace=ai,a.minFilter=xn,a.magFilter=xn;const o=Dn(i.primaryColor,i.metalness,i.roughness),l=Dn(i.secondaryColor,.85,.22),c=Dn(988970,.4,.5),f=new rt({color:i.glowColor}),h=new Fr(1.1*r,32),u=new rt({color:0,transparent:!0,opacity:.8}),m=new oe(h,u);m.rotation.x=-Math.PI/2,m.position.y=.02,s.add(m);const x=new gn(1.05*r,1.18*r,32),S=new rt({color:i.glowColor,transparent:!0,opacity:.75,side:Wt}),g=new oe(x,S);g.rotation.x=-Math.PI/2,g.position.y=.03,s.add(g);const d=new vt;s.add(d);const v=new vt;v.position.y=1.85*r,d.add(v);const E=new kt(.36*r,.3*r,.32*r,16),M=new oe(E,l);v.add(M);const T=new kt(.38*r,.38*r,.1*r,16),w=new oe(T,o);w.position.y=.1*r,v.add(w);const R=new It(.14*r,.12*r,.08*r),_=new oe(R,l);_.position.set(0,.1*r,.38*r),v.add(_);const C=new vt;C.position.set(-.24*r,-.15*r,0),v.add(C);const I=new vt;I.position.set(.24*r,-.15*r,0),v.add(I);function U(ae,ye){const D=new kt(.18*r,.14*r,.65*r,14),Ue=new oe(D,o);Ue.position.y=-.32*r,ae.add(Ue);const Pe=new It(.06*r,.45*r,.16*r),N=new oe(Pe,l);N.position.set(ye?-.16*r:.16*r,-.32*r,0),ae.add(N);const y=new vt;y.position.y=-.65*r,ae.add(y);const W=new It(.14*r,.16*r,.12*r),X=new oe(W,l);X.position.z=.1*r,y.add(X);const $=new kt(.13*r,.11*r,.65*r,14),he=new oe($,o);he.position.y=-.35*r,y.add(he);const pe=new It(.18*r,.22*r,.38*r),Z=new oe(pe,l);return Z.position.set(0,-.72*r,.08*r),y.add(Z),{kneeJoint:y,bootMesh:Z}}const O=U(C,!0),F=U(I,!1);C.rotation.x=.08,C.rotation.z=.04,I.rotation.x=-.06,I.rotation.z=-.04;const L=new vt;L.position.y=.22*r,v.add(L);const G=new kt(.38*r,.34*r,.42*r,16),te=new oe(G,o);te.position.y=.2*r,L.add(te);const j=new vt;j.position.y=.45*r,L.add(j);const V=new It(.95*r,.62*r,.48*r),H=new oe(V,o);H.position.y=.28*r,j.add(H);const P=new It(.38*r,.28*r,.1*r),b=new oe(P,l);b.position.set(-.22*r,.34*r,.26*r),j.add(b);const ne=new oe(P,l);ne.position.set(.22*r,.34*r,.26*r),j.add(ne);const le=new Ta(.72*r,.52*r),Me=new vi({map:a,transparent:!0,alphaTest:.15,metalness:.6,roughness:.3,side:Wt}),xe=new oe(le,Me);if(xe.position.set(0,.28*r,.29*r),j.add(xe),i.hasReactor){const ae=new vt,ye=new oe(new kt(.12*r,.12*r,.05*r,16),l);ye.rotation.x=Math.PI/2,ae.add(ye);const D=new oe(new Fr(.09*r,16),f);D.position.z=.03*r,ae.add(D),ae.position.set(0,.32*r,.32*r),j.add(ae)}if(i.hasEyeOfAgamotto){const ae=new oe(new kt(.11*r,.11*r,.04*r,16),l);ae.rotation.x=Math.PI/2,ae.position.set(0,.52*r,.28*r),j.add(ae);const ye=new oe(new Yn(.05*r,10,10),new rt({color:2278750}));ye.position.set(0,.52*r,.31*r),j.add(ye)}if(i.hasVoidCore){const ae=new vt,ye=new oe(new kt(.18*r,.18*r,.06*r,18),Dn(1973067,.9,.2));ye.rotation.x=Math.PI/2,ae.add(ye);const D=new oe(new Yn(.12*r,16,16),new rt({color:11032055}));D.position.z=.03*r,ae.add(D);const Ue=new gc(11032055,2.8,4*r);Ue.position.set(0,0,.2*r),ae.add(Ue),ae.position.set(0,.32*r,.32*r),j.add(ae)}const me=new vt;me.position.set(0,.62*r,0),j.add(me);const B=new kt(.14*r,.16*r,.16*r,12),J=new oe(B,c);J.position.y=.06*r,me.add(J);const Q=new vt;Q.position.y=.22*r,me.add(Q);const _e=new It(.38*r,.44*r,.4*r),de=new oe(_e,o);if(Q.add(de),i.hasHelmet==="ironman"){const ae=new It(.32*r,.36*r,.08*r),ye=new oe(ae,l);ye.position.set(0,-.02*r,.21*r),Q.add(ye);const D=new It(.09*r,.03*r,.02*r),Ue=new oe(D,f);Ue.position.set(-.08*r,.04*r,.26*r),Q.add(Ue);const Pe=new oe(D,f);Pe.position.set(.08*r,.04*r,.26*r),Q.add(Pe)}else if(i.hasHelmet==="spiderman"){const ae=new It(.11*r,.07*r,.02*r),ye=new rt({color:16777215}),D=new oe(ae,ye);D.position.set(-.09*r,.03*r,.21*r),D.rotation.z=-.22,Q.add(D);const Ue=new oe(ae,ye);Ue.position.set(.09*r,.03*r,.21*r),Ue.rotation.z=.22,Q.add(Ue)}else if(i.hasHelmet==="thor"){const ae=new kr(.08*r,.35*r,4),ye=new oe(ae,l);ye.position.set(-.24*r,.16*r,0),ye.rotation.z=.6,Q.add(ye);const D=new oe(ae,l);D.position.set(.24*r,.16*r,0),D.rotation.z=-.6,Q.add(D);const Ue=new Yn(.03*r,8,8),Pe=new oe(Ue,f);Pe.position.set(-.08*r,.03*r,.21*r),Q.add(Pe);const N=new oe(Ue,f);N.position.set(.08*r,.03*r,.21*r),Q.add(N)}else if(i.hasHelmet==="captain-america"){const ae=new Fr(.06*r,5),ye=new oe(ae,new rt({color:16777215}));ye.position.set(0,.12*r,.21*r),Q.add(ye);const D=new It(.26*r,.14*r,.18*r),Ue=new oe(D,Dn(14857370,.1,.6));Ue.position.set(0,-.16*r,.14*r),Q.add(Ue)}else if(i.hasHelmet==="thanos"){const ae=new oe(new It(.46*r,.18*r,.44*r),l);ae.position.y=.18*r,Q.add(ae);const ye=new It(.36*r,.18*r,.3*r),D=new oe(ye,o);D.position.set(0,-.22*r,.14*r),Q.add(D);const Ue=new Yn(.04*r,8,8),Pe=new oe(Ue,f);Pe.position.set(-.1*r,.02*r,.22*r),Q.add(Pe);const N=new oe(Ue,f);N.position.set(.1*r,.02*r,.22*r),Q.add(N)}else if(i.hasHelmet==="green-goblin"){const ae=new kr(.08*r,.32*r,4),ye=new oe(ae,o);ye.position.set(-.26*r,.05*r,-.05*r),ye.rotation.z=1.2,Q.add(ye);const D=new oe(ae,o);D.position.set(.26*r,.05*r,-.05*r),D.rotation.z=-1.2,Q.add(D);const Ue=new Yn(.04*r,8,8),Pe=new oe(Ue,f);Pe.position.set(-.09*r,.03*r,.21*r),Q.add(Pe);const N=new oe(Ue,f);N.position.set(.09*r,.03*r,.21*r),Q.add(N)}else if(i.hasHelmet==="doctor-doom"){const ae=new It(.34*r,.38*r,.06*r),ye=new oe(ae,l);ye.position.set(0,-.02*r,.21*r),Q.add(ye);const D=new It(.08*r,.03*r,.02*r),Ue=new rt({color:328965}),Pe=new oe(D,Ue);Pe.position.set(-.08*r,.04*r,.25*r),Q.add(Pe);const N=new oe(D,Ue);N.position.set(.08*r,.04*r,.25*r),Q.add(N)}else if(i.hasHelmet==="loki"){const ae=new kt(.03*r,.07*r,.55*r,10),ye=new oe(ae,l);ye.position.set(-.16*r,.35*r,.08*r),ye.rotation.set(-.35,0,-.45),Q.add(ye);const D=new oe(ae,l);D.position.set(.16*r,.35*r,.08*r),D.rotation.set(-.35,0,.45),Q.add(D)}else if(i.hasHelmet==="void-titan"){const ae=new It(.48*r,.22*r,.44*r),ye=new oe(ae,Dn(988970,.95,.15));ye.position.y=.22*r,Q.add(ye);const D=new It(.32*r,.05*r,.08*r),Ue=new oe(D,f);Ue.position.set(0,.04*r,.22*r),Q.add(Ue);const Pe=new It(.4*r,.2*r,.32*r),N=new oe(Pe,Dn(1976635,.85,.25));N.position.set(0,-.22*r,.14*r),Q.add(N)}const De=new vt;De.position.set(-.56*r,.42*r,0),j.add(De);const Qe=new vt;Qe.position.set(.56*r,.42*r,0),j.add(Qe);function ve(ae,ye){const D=new Yn(.24*r,14,12,0,Math.PI*2,0,Math.PI*.6),Ue=new oe(D,l);Ue.position.y=.05*r,ae.add(Ue);const Pe=new kt(.14*r,.12*r,.48*r,14),N=new oe(Pe,o);N.position.y=-.28*r,ae.add(N);const y=new vt;y.position.y=-.52*r,ae.add(y);const W=new kt(.13*r,.11*r,.46*r,14),X=new oe(W,l);X.position.y=-.24*r,y.add(X);const $=new vt;$.position.y=-.48*r,y.add($);const he=new It(.15*r,.16*r,.18*r),pe=new oe(he,o);return $.add(pe),{elbowJoint:y,handJoint:$,forearmMesh:X}}const Ye=ve(De),Je=ve(Qe);De.rotation.x=.35,De.rotation.z=-.15,Ye.elbowJoint.rotation.x=-.55,Qe.rotation.x=.15,Qe.rotation.z=.15,Je.elbowJoint.rotation.x=-.45;let je=null,st=null;if(i.hasShield){const ae=new vt,ye=.65*r,D=new oe(new gn(ye*.75,ye,32),Dn(12131356,.9,.15)),Ue=new oe(new gn(ye*.52,ye*.75,32),Dn(16317180,.95,.12)),Pe=new oe(new gn(ye*.32,ye*.52,32),Dn(12131356,.9,.15)),N=new oe(new Fr(ye*.32,32),Dn(1920728,.85,.2)),y=new oe(new Fr(ye*.18,5),Dn(16317180,.95,.1));y.position.z=.02*r,ae.add(D),ae.add(Ue),ae.add(Pe),ae.add(N),ae.add(y),ae.position.set(-.12*r,0,.18*r),ae.rotation.set(.1,-Math.PI/2,0),Ye.handJoint.add(ae),je=ae}if(i.hasHammer){const ae=new vt,ye=new It(.42*r,.28*r,.28*r),D=new oe(ye,Dn(9741240,.95,.15));D.position.y=.45*r,ae.add(D);const Ue=new kt(.035*r,.035*r,.6*r,10),Pe=new oe(Ue,Dn(2696484,.3,.7));Pe.position.y=.15*r,ae.add(Pe),ae.rotation.set(Math.PI/3,0,.2),ae.position.set(0,-.15*r,.1*r),Je.handJoint.add(ae),je=ae}if(i.hasGauntlet){const ae=new vt,ye=new oe(new kt(.24*r,.18*r,.55*r,14),l);ae.add(ye),[9647082,2450411,14427686,16347926,1483594,15381256].forEach((Ue,Pe)=>{const N=new oe(new Yn(.055*r,10,10),new rt({color:Ue})),y=Pe/5*Math.PI-Math.PI/2;N.position.set(Math.cos(y)*.18*r,-.22*r,.16*r),ae.add(N)}),Ye.handJoint.add(ae),je=ae}if(i.hasPumpkin){const ae=new Yn(.18*r,14,12),ye=new vi({color:16347926,emissive:15357964,emissiveIntensity:.8,metalness:.6,roughness:.3}),D=new oe(ae,ye);D.position.set(0,-.1*r,.15*r),Je.handJoint.add(D),je=D}if(i.hasScepter){const ae=new vt,ye=new kt(.025*r,.03*r,1.4*r,10),D=new oe(ye,l);ae.add(D);const Ue=new kr(.1*r,.45*r,4),Pe=new oe(Ue,l);Pe.position.y=.8*r,ae.add(Pe);const N=new oe(new Yn(.06*r,10,10),new rt({color:3718648}));N.position.y=.65*r,ae.add(N),ae.rotation.x=Math.PI/4,Je.handJoint.add(ae),je=ae}if(i.hasMandalas){const ae=new oe(new gn(.25*r,.32*r,32),new rt({color:16096779,side:Wt}));ae.position.set(0,-.15*r,.12*r),Je.handJoint.add(ae),st=ae}let lt=null;if(i.hasCape||i.hasCloak){const ae=new Ta(.95*r,1.8*r,16,16),ye=new vi({color:i.capeColor||10033947,roughness:.6,metalness:.1,side:Wt});lt=new oe(ae,ye),lt.position.set(0,-.4*r,-.28*r),lt.rotation.x=.15,j.add(lt)}let dt=null;if(i.hasGlider){dt=new vt,dt.position.y=.1*r;const ae=new kt(.2*r,.25*r,1.6*r,12);ae.rotateX(Math.PI/2);const ye=new oe(ae,Dn(4674921,.9,.2));dt.add(ye);const D=new It(3.2*r,.08*r,.95*r),Ue=new oe(D,Dn(1409085,.85,.25));Ue.position.set(0,.05*r,-.1*r),dt.add(Ue);const Pe=new rt({color:16347926}),N=new oe(new kr(.12*r,.5*r,8),Pe);N.rotation.x=-Math.PI/2,N.position.set(-.35*r,-.05*r,-1.1*r),dt.add(N);const y=new oe(new kr(.12*r,.5*r,8),Pe);y.rotation.x=-Math.PI/2,y.position.set(.35*r,-.05*r,-1.1*r),dt.add(y),d.add(dt)}return{group:s,shadow:m,footRing:g,rootJoint:d,pelvisJoint:v,spineJoint:L,chestJoint:j,neckJoint:me,headJoint:Q,leftShoulder:De,rightShoulder:Qe,leftArm:Ye,rightArm:Je,leftLegJoint:C,rightLegJoint:I,leftLegParts:O,rightLegParts:F,capeMesh:lt,gliderGroup:dt,weaponMesh:je,secondaryWeaponMesh:st,scaleMultiplier:r,config:i,characterId:n}}function Id(t,e,n,i,r,s=!0,a=""){if(!t)return;const{rootJoint:o,pelvisJoint:l,spineJoint:c,chestJoint:f,headJoint:h,leftShoulder:u,rightShoulder:m,leftArm:x,rightArm:S,leftLegJoint:g,rightLegJoint:d,leftLegParts:v,rightLegParts:E,capeMesh:M,gliderGroup:T,weaponMesh:w,secondaryWeaponMesh:R,config:_,characterId:C}=t,I=s?1:-1,U=t.scaleMultiplier,O=C||(_==null?void 0:_.id);if(e==="idle"){const F=Math.sin(r*3.2),L=Math.sin(r*2);if(l&&(O==="spiderman"?l.position.y=(1.52+F*.03)*U:O==="ironman"||O==="magneto"||O==="doctor-strange"?l.position.y=(1.92+Math.sin(r*2.4)*.06)*U:l.position.y=(1.85+F*.035)*U,l.rotation.y=L*.04*I),v!=null&&v.kneeJoint&&(E!=null&&E.kneeJoint)&&(O==="spiderman"?(v.kneeJoint.rotation.x=.55+F*.04,E.kneeJoint.rotation.x=.65-F*.04,g&&(g.rotation.z=.16),d&&(d.rotation.z=-.16)):(v.kneeJoint.rotation.x=.14+F*.04,E.kneeJoint.rotation.x=.12-F*.04,g&&(g.rotation.x=.08+F*.02),d&&(d.rotation.x=-.06-F*.02))),c&&(O==="spiderman"?c.rotation.x=.28+L*.03:c.rotation.x=L*.025,c.rotation.y=Math.sin(r*1.6)*.04*I),f&&f.scale.set(1+L*.025,1+L*.025,1+L*.035),h&&(h.rotation.y=Math.sin(r*1.4)*.05*I,h.rotation.x=Math.sin(r*2)*.025),u&&m&&(O==="captain-america"?(u.rotation.x=.72+F*.03,u.rotation.z=-.32,x!=null&&x.elbowJoint&&(x.elbowJoint.rotation.x=-.9),m.rotation.x=.38+F*.03,S!=null&&S.elbowJoint&&(S.elbowJoint.rotation.x=-.65)):O==="thor"?(u.rotation.x=.35+F*.03,m.rotation.x=.28+F*.03,S!=null&&S.elbowJoint&&(S.elbowJoint.rotation.x=-.45),w&&(w.rotation.z=Math.sin(r*2)*.06)):O==="ironman"?(u.rotation.x=.48+F*.03,m.rotation.x=.48+F*.03,x!=null&&x.elbowJoint&&(x.elbowJoint.rotation.x=-.35),S!=null&&S.elbowJoint&&(S.elbowJoint.rotation.x=-.35)):O==="spiderman"?(u.rotation.x=.25+F*.04,m.rotation.x=.25+F*.04,x!=null&&x.elbowJoint&&(x.elbowJoint.rotation.x=-.7),S!=null&&S.elbowJoint&&(S.elbowJoint.rotation.x=-.7)):O==="thanos"?(u.rotation.x=.45+L*.03,m.rotation.x=.25+L*.03,x!=null&&x.elbowJoint&&(x.elbowJoint.rotation.x=-.6)):(u.rotation.x=.45+F*.04,m.rotation.x=.32+Math.cos(r*3.2)*.04,x!=null&&x.elbowJoint&&(x.elbowJoint.rotation.x=-.65),S!=null&&S.elbowJoint&&(S.elbowJoint.rotation.x=-.55))),M){const G=M.geometry.attributes.position.array;for(let te=0;te<G.length;te+=3){const j=G[te+1]/(1.8*U);G[te+2]=Math.sin(r*5.5+j*4.5)*.16*Math.abs(j)}M.geometry.attributes.position.needsUpdate=!0,M.rotation.x=.15+Math.sin(r*3.2)*.05}T&&(T.position.y=.1*U+Math.sin(r*2.5)*.08*U,T.rotation.z=Math.sin(r*2)*.09,T.rotation.x=Math.sin(r*2.8)*.05),R&&(R.rotation.z+=i*3.5)}else if(e==="punch"||e==="attack"){const F=Math.min(1,n/.44);if(F<.32){const L=F/.32;l&&(l.rotation.y=-.35*L*I),c&&(c.rotation.y=-.52*L*I,c.rotation.x=-.18*L),g&&(g.rotation.x=.25*L),E!=null&&E.kneeJoint&&(E.kneeJoint.rotation.x=.3*L),O==="thor"?(m&&(m.rotation.x=-1.2*L),S!=null&&S.elbowJoint&&(S.elbowJoint.rotation.x=-1*L),w&&(w.rotation.z=-1.5*L)):O==="captain-america"?(u&&(u.rotation.x=.8*L),m&&(m.rotation.x=-.6*L)):O==="ironman"?(u&&(u.rotation.x=-.4*L),m&&(m.rotation.x=-.4*L)):O==="spiderman"?(l&&(l.position.y=(1.35-L*.2)*U),c&&(c.rotation.x=.5*L)):(m&&(m.rotation.x=-.65*L),S!=null&&S.elbowJoint&&(S.elbowJoint.rotation.x=-1.1*L),u&&(u.rotation.x=.75*L))}else if(F<.68){const L=(F-.32)/.36;l&&(l.rotation.y=(-.35+L*.8)*I),c&&(c.rotation.y=(-.52+L*1.25)*I,c.rotation.x=.28*L),v!=null&&v.kneeJoint&&(v.kneeJoint.rotation.x=.35*L),O==="thor"?(m&&(m.rotation.x=-1.2+L*2.8),S!=null&&S.elbowJoint&&(S.elbowJoint.rotation.x=-1+L*1),w&&(w.rotation.z=-1.5+L*3.2)):O==="captain-america"?(u&&(u.rotation.x=.8-L*1.2),m&&(m.rotation.x=-.6+L*2.1),S!=null&&S.elbowJoint&&(S.elbowJoint.rotation.x=-.1)):O==="ironman"?(u&&(u.rotation.x=-.4+L*1.9),m&&(m.rotation.x=-.4+L*1.9),x!=null&&x.elbowJoint&&(x.elbowJoint.rotation.x=.05),S!=null&&S.elbowJoint&&(S.elbowJoint.rotation.x=.05)):O==="spiderman"?(l&&(l.position.y=(1.35+L*.6)*U),g&&(g.rotation.x=1.2*L),d&&(d.rotation.x=1.3*L),c&&(c.rotation.x=-.4*L)):O==="green-goblin"?(m&&(m.rotation.x=-.6+L*2.2),T&&(T.rotation.x=-.25*L)):O==="thanos"?(u&&(u.rotation.x=-.5+L*2.2),x!=null&&x.elbowJoint&&(x.elbowJoint.rotation.x=.05),w&&(w.rotation.z+=i*15)):(m&&(m.rotation.x=-.65+L*2.15),S!=null&&S.elbowJoint&&(S.elbowJoint.rotation.x=.05))}else{const L=(F-.68)/.32,G=Math.sin(L*(Math.PI/2));l&&(l.rotation.y=.45*(1-G)*I,l.position.y=1.85*U),c&&(c.rotation.y=.73*(1-G)*I,c.rotation.x=.28*(1-G)),m&&(m.rotation.x=1.5*(1-G)+.32*G),u&&(u.rotation.x=.75*(1-G)+.45*G),g&&d&&(g.rotation.x=.08,d.rotation.x=-.06)}}else if(s&&a&&a.toUpperCase().includes("SHIELD"))l&&(l.position.y=1.68*U),v!=null&&v.kneeJoint&&(v.kneeJoint.rotation.x=.32),E!=null&&E.kneeJoint&&(E.kneeJoint.rotation.x=.35),c&&(c.rotation.x=.22,c.rotation.y=.42*I),u&&(u.rotation.x=1.15,u.rotation.z=-.45),x!=null&&x.elbowJoint&&(x.elbowJoint.rotation.x=-.85),m&&(m.rotation.x=.55);else if(e==="ultimate"){const F=Math.min(1,n/.55);if(F<.45){const L=Math.sin(F/.45*(Math.PI/2));l&&(l.position.y=(1.85+L*2.8)*U),u&&(u.rotation.x=2.4*L),m&&(m.rotation.x=2.4*L),c&&(c.rotation.x=-.35*L),w&&(w.rotation.z+=i*25)}else{const L=(F-.45)/.55,G=L*L;l&&(l.position.y=(1.85+(1-G)*2.8)*U),u&&(u.rotation.x=2.4*(1-L)+.35*L),m&&(m.rotation.x=2.4*(1-L)+.15*L),c&&(c.rotation.x=.5*(1-L)),w&&(w.rotation.z+=i*30)}}else if(e==="dodge"){const F=Math.min(1,n/.4);o&&(o.position.y=Math.sin(F*Math.PI)*.7*U,o.rotation.y=F*Math.PI*2*I,o.rotation.z=Math.sin(F*Math.PI)*.3*I)}else e==="staggered"&&(l&&(l.position.y=1.45*U),v!=null&&v.kneeJoint&&(E!=null&&E.kneeJoint)&&(v.kneeJoint.rotation.x=.58,E.kneeJoint.rotation.x=.62),c&&(c.rotation.x=.35,c.rotation.z=Math.sin(r*5)*.08),h&&(h.rotation.x=.45,h.rotation.y=Math.sin(r*4)*.15),u&&m&&(u.rotation.x=.1,m.rotation.x=.1,x!=null&&x.elbowJoint&&(x.elbowJoint.rotation.x=-.15),S!=null&&S.elbowJoint&&(S.elbowJoint.rotation.x=-.15)))}const dC=({selectedHero:t,selectedVillain:e,introPhase:n="active",heroHp:i=1e3,bossHp:r=25e4,isBossStaggered:s=!1,bossPhase:a=1,heroSuperEnergy:o=0,activeGesture:l="",onHeroDamaged:c,incomingAttackWarning:f,setIncomingAttackWarning:h,heroActionTrigger:u,isVictory:m=!1,isDefeated:x=!1,onTelemetryUpdate:S})=>{const g=ie.useRef(null),d=ie.useRef(null),v=ie.useRef(null),E=ie.useRef(null),M=ie.useRef(null),T=ie.useRef(null),w=ie.useRef(null),R=ie.useRef(null),_=ie.useRef(null),C=ie.useRef(null),I=ie.useRef(null),U=ie.useRef(null),O=ie.useRef(null),F=ie.useRef([]),L=ie.useRef(null),G=ie.useRef([]),te=ie.useRef(null),j=ie.useRef(null),V=ie.useRef([]),H=ie.useRef(null),P=ie.useRef(null),b=ie.useRef(null),ne=ie.useRef(null),le=ie.useRef(null),Me=ie.useRef(null),xe=ie.useRef(null),me=ie.useRef(null),B=ie.useRef(null),J=ie.useRef(null),Q=ie.useRef(null),_e=ie.useRef(null),de=ie.useRef(null),De=ie.useRef([]),Qe=ie.useRef(null),ve=ie.useRef(null),Ye=ie.useRef(null),Je=ie.useRef(null),je=ie.useRef(null),st=ie.useRef(null),lt=ie.useRef(null),dt=ie.useRef(null),ae=ie.useRef(null),ye=ie.useRef(null),D=ie.useRef({heroAttackType:null,heroVfxTime:0,villainAttackActive:!1,villainVfxTime:0}),Ue=ie.useRef({state:"idle",time:0,recoiling:!1,recoilTime:0}),Pe=ie.useRef({state:"idle",time:0,recoiling:!1,recoilTime:0,hasDamaged:!1}),N=ie.useRef(0),y=ie.useRef(-2),W=ie.useRef({emergeProgress:0,heroEntranceProgress:0}),X=ie.useRef("IDLE");return ie.useEffect(()=>{x||(y.current=-2,h&&h(!1))},[x,h]),ie.useEffect(()=>{const $=g.current;if(!$)return;const he=$.clientWidth||window.innerWidth,pe=$.clientHeight||window.innerHeight,Z=new F1;Z.fog=new bp(329752,.038),d.current=Z;const se=new oi(46,he/pe,.1,1e3);se.position.set(0,2.3,8.4),se.lookAt(0,1.5,0),E.current=se;const fe=new cC({alpha:!0,antialias:!0,powerPreference:"high-performance"});fe.setSize(he,pe),fe.setPixelRatio(Math.min(window.devicePixelRatio,2)),fe.toneMapping=xp,fe.toneMappingExposure=1.35,v.current=fe,$.appendChild(fe.domElement);const qe=new lE(16777215,1.25);Z.add(qe);const Te=new F0(16777215,3);Te.position.set(0,3.2,8.5),Z.add(Te);const Ee=new F0(16777215,2);Ee.position.set(2,6,5),Z.add(Ee);const $e=new gc(62463,2.8,15);$e.position.set(-3.5,3.2,3),Z.add($e);const Fe=new gc(11032055,3,15);Fe.position.set(3.5,3.2,3),Z.add(Fe);const ze=new gc(9133302,5,28);ze.position.set(0,2.5,-4.5),Z.add(ze);const k=new vt;Z.add(k),O.current=k;const Ae=new vi({color:395799,metalness:.9,roughness:.25}),re=new rt({color:62463}),we=new rt({color:11032055}),be=new rt({color:16498468});[{x:-16,z:-20,w:4,d:4,h:22},{x:-11,z:-17,w:3.5,d:3.5,h:17},{x:-7,z:-24,w:4.5,d:4.5,h:26},{x:-4,z:-18,w:3,d:3,h:15},{x:4,z:-19,w:3.2,d:3.2,h:16},{x:8,z:-23,w:4.2,d:4.2,h:25},{x:12,z:-16,w:3.8,d:3.8,h:18},{x:17,z:-21,w:4.5,d:4.5,h:24}].forEach((Re,it)=>{const wi=new It(Re.w,Re.h,Re.d),Xt=new oe(wi,Ae);Xt.position.set(Re.x,Re.h/2-2,Re.z),k.add(Xt);const Ti=new kt(.06,.08,3.5,6),ue=new oe(Ti,it%2===0?re:we);ue.position.set(Re.x,Re.h-1,Re.z),k.add(ue);const Le=new It(Re.w+.1,.25,Re.d+.1),We=new oe(Le,it%3===0?be:it%2===0?re:we);We.position.set(Re.x,Re.h*.75,Re.z),k.add(We)});const Xe=[],ke=[62463,11032055,16347926,3718648,15680580,1096065];for(let Re=0;Re<6;Re++){const it=new vt,wi=new oe(new It(.8,.18,.35),new rt({color:ke[Re%ke.length]}));it.add(wi);const Xt=new oe(new It(1.4,.08,.12),new rt({color:ke[Re%ke.length],transparent:!0,opacity:.7}));Xt.position.x=Re%2===0?-.8:.8,it.add(Xt);const Ti=4.5+Re*1.4,ue=-13-Re*2.2,Le=(Re%2===0?1:-1)*(5.5+Re*1.2);it.position.set((Math.random()-.5)*30,Ti,ue),k.add(it),Xe.push({group:it,speed:Le,zPos:ue})}F.current=Xe;const Et=new vt;Et.position.set(0,2.4,-4.2),Z.add(Et);const Tt=new oe(new Lr(3.4,.09,16,64),new rt({color:9133302,transparent:!0,opacity:.9}));Et.add(Tt);const Sn=new oe(new Lr(2.6,.06,16,64),new rt({color:62463,transparent:!0,opacity:.85}));Et.add(Sn),G.current=[Tt,Sn];const Bn=new gn(.2,3.2,32),La=new rt({color:3018853,transparent:!0,opacity:.75,side:Wt}),Ns=new oe(Bn,La);Et.add(Ns),L.current=Ns;const Ps=new kt(5.6,6,.35,48),at=new vi({color:329745,metalness:.92,roughness:.18}),ct=new oe(Ps,at);ct.position.y=-.18,Z.add(ct);const pn=new Lr(5.5,.06,16,64),gt=new rt({color:9133302}),At=new oe(pn,gt);At.rotation.x=Math.PI/2,At.position.y=.02,Z.add(At);const Gt=new Lr(3.6,.03,16,64),Mn=new rt({color:62463,transparent:!0,opacity:.7}),an=new oe(Gt,Mn);an.rotation.x=Math.PI/2,an.position.y=.02,Z.add(an);const er=new gn(.1,2.2,32),qo=new rt({color:16711731,transparent:!0,opacity:0,side:Wt,depthWrite:!1}),tr=new oe(er,qo);tr.rotation.x=-Math.PI/2,tr.position.set(-1,.03,.5),Z.add(tr),I.current=tr;const Da=cg(t,!1),Mr=Da.group;Mr.position.set(-2.2,0,.5),Mr.rotation.y=Math.PI/3.4,Z.add(Mr),M.current=Mr,w.current=Da;const $o=cg(e,!0),nr=$o.group;n==="opening"?(nr.position.set(0,.5,-4.5),nr.scale.set(.1,.1,.1)):(nr.position.set(2.2,0,.5),nr.scale.set(1,1,1)),nr.rotation.y=-Math.PI/3.4,Z.add(nr),T.current=nr,R.current=$o;const ns=new vt,vu=new Fr(1.6,6),Ko=new rt({color:62463,transparent:!0,opacity:0,side:Wt,depthWrite:!1}),A=new oe(vu,Ko);ns.add(A);const z=new gn(1.55,1.65,6),ee=new rt({color:16777215,transparent:!0,opacity:0,side:Wt,depthWrite:!1}),K=new oe(z,ee);ns.add(K),ns.position.set(.6,2,.5),ns.rotation.y=Math.PI/4,Mr.add(ns),_.current=A,C.current=K;const Y=new vt;Z.add(Y),te.current=Y;const Ne=new kt(.24,.24,4.8,16);Ne.rotateZ(Math.PI/2),Ne.translate(2.4,0,0);const Be=new rt({color:62463,transparent:!0,opacity:0,blending:Un,depthWrite:!1}),Ce=new oe(Ne,Be);Ce.position.set(-1.8,2.1,.5),Ce.visible=!1,Y.add(Ce),j.current=Ce;const He=[];for(let Re=0;Re<3;Re++){const it=new oe(new Lr(.5,.04,8,24),new rt({color:62463,transparent:!0,opacity:0,blending:Un}));it.rotation.y=Math.PI/2,it.visible=!1,Y.add(it),He.push(it)}V.current=He;const Ke=new nn,ut=new Float32Array(30*3);Ke.setAttribute("position",new $n(ut,3));const ht=new Vl(Ke,new to({color:3718648,transparent:!0,opacity:0,linewidth:3,blending:Un}));Y.add(ht),H.current=ht;const Ve=new nn,Rt=new Float32Array(18*3);Ve.setAttribute("position",new $n(Rt,3));const $t=new Vl(Ve,new to({color:16777215,transparent:!0,opacity:0,blending:Un}));Y.add($t),P.current=$t;const Pt=new vt,Dt=new oe(new It(.45,.35,.3),new vi({color:9741240,metalness:.9})),cn=new oe(new kt(.04,.04,.65),new vi({color:4674921}));cn.position.y=-.35,Pt.add(Dt),Pt.add(cn),Pt.visible=!1,Y.add(Pt),b.current=Pt;const Oe=new nn,En=new Float32Array(6);Oe.setAttribute("position",new $n(En,3));const _t=new Vl(Oe,new to({color:16777215,transparent:!0,opacity:0,linewidth:2}));Y.add(_t),ne.current=_t;const bn=new vt;for(let Re=0;Re<10;Re++){const it=new nn;it.setAttribute("position",new $n(new Float32Array(6),3));const wi=new Vl(it,new to({color:62463,transparent:!0,opacity:0,blending:Un}));bn.add(wi)}Y.add(bn),le.current=bn;const pi=new gn(.2,1.4,16),ti=new oe(pi,new rt({color:16777215,transparent:!0,opacity:0,side:Wt}));ti.rotation.x=-Math.PI/2,ti.position.set(2.2,.04,.5),Y.add(ti),Me.current=ti;const mi=new vt,Lt=new oe(new kt(.55,.55,.08,32),new vi({color:1920728,metalness:.95,roughness:.15}));mi.add(Lt);const Ht=new oe(new gn(.42,.55,32),new rt({color:12131356,side:Wt}));Ht.position.y=.045,Ht.rotation.x=-Math.PI/2,mi.add(Ht),mi.visible=!1,Y.add(mi),xe.current=mi;const ni=new oe(new gn(.2,.45,32),new rt({color:16498468,transparent:!0,opacity:0,side:Wt,depthWrite:!1}));ni.rotation.x=-Math.PI/2,ni.position.set(0,.03,.5),Y.add(ni),me.current=ni;const bt=new vt,Bi=new oe(new gn(.5,.56,32),new rt({color:16096779,side:Wt,blending:Un})),Er=new oe(new gn(.75,.82,6),new rt({color:16347926,side:Wt,blending:Un}));bt.add(Bi),bt.add(Er),bt.visible=!1,Y.add(bt),B.current=bt;const Is=new vt;for(let Re=0;Re<8;Re++){const it=new oe(new Lp(.35+Math.random()*.25),new vi({color:11032055,metalness:.9,roughness:.1,transparent:!0,opacity:0,blending:Un}));it.position.set(1.5+(Math.random()-.5)*1.5,2+(Math.random()-.5)*1.2,.5+(Math.random()-.5)*1),Is.add(it)}Y.add(Is),J.current=Is;const zn=new vt;Z.add(zn),Q.current=zn;const xu=new kt(.38,.38,5,16);xu.rotateZ(Math.PI/2),xu.translate(-2.5,0,0);const Jo=new oe(xu,new rt({color:11032055,transparent:!0,opacity:0,blending:Un}));Jo.position.set(1.8,2.3,.5),Jo.visible=!1,zn.add(Jo),_e.current=Jo;const Zo=new oe(new gn(.2,.55,32),new rt({color:9133302,transparent:!0,opacity:0,side:Wt}));Zo.rotation.x=-Math.PI/2,Zo.position.set(-.5,.04,.5),zn.add(Zo),de.current=Zo;const Hp=[];for(let Re=0;Re<3;Re++){const it=new oe(new Yn(.18,12,12),new rt({color:11032055,transparent:!0,opacity:0}));zn.add(it),Hp.push(it)}De.current=Hp;const _u=new oe(new Yn(.24,16,14),new vi({color:16347926,emissive:15357964,metalness:.7,roughness:.2}));_u.visible=!1,zn.add(_u),Qe.current=_u;const yu=new oe(new Yn(1.2,16,16),new rt({color:16347926,transparent:!0,opacity:0,blending:Un}));yu.visible=!1,zn.add(yu),ve.current=yu;const Qo=new kt(.32,.32,4.8,16);Qo.rotateZ(Math.PI/2),Qo.translate(-2.4,0,0);const el=new oe(Qo,new rt({color:14239471,transparent:!0,opacity:0,blending:Un}));el.position.set(1.8,2.4,.5),el.visible=!1,zn.add(el),Ye.current=el;const tl=new oe(new gn(.2,.45,32),new rt({color:15680580,transparent:!0,opacity:0,side:Wt}));tl.rotation.x=-Math.PI/2,tl.position.set(-.5,.04,.5),zn.add(tl),Je.current=tl;const nl=new vt;for(let Re=0;Re<5;Re++){const it=new kr(.12,.65,4);it.rotateZ(Math.PI/2);const wi=new oe(it,new vi({color:9741240,metalness:.95,roughness:.15}));nl.add(wi)}nl.visible=!1,zn.add(nl),je.current=nl;const Su=new oe(new Lr(1.4,.05,12,32),new rt({color:15680580,transparent:!0,opacity:0,blending:Un}));Su.position.set(2.2,2.2,.5),zn.add(Su),st.current=Su;const x_=new kt(.42,.42,8,20),il=new oe(x_,new rt({color:1096065,transparent:!0,opacity:0,blending:Un}));il.position.set(-2,4,.5),il.visible=!1,zn.add(il),lt.current=il;const rl=new oe(new gn(.2,.5,32),new rt({color:1096065,transparent:!0,opacity:0,side:Wt}));rl.rotation.x=-Math.PI/2,rl.position.set(-2,.04,.5),zn.add(rl),dt.current=rl;const sl=new oe(Qo,new rt({color:8702998,transparent:!0,opacity:0,blending:Un}));sl.position.set(1.8,2.2,.5),sl.visible=!1,zn.add(sl),ae.current=sl;const Mu=new vt;for(let Re=0;Re<2;Re++){const it=new oe(new kt(.4,.35,3.8,16),new rt({color:8702998,transparent:!0,opacity:0,wireframe:!0}));it.position.set(Re===0?1:3.4,1.9,.5),Mu.add(it)}zn.add(Mu),ye.current=Mu;const Vp=90,Wp=new nn,al=new Float32Array(Vp*3);for(let Re=0;Re<Vp*3;Re+=3)al[Re]=(Math.random()-.5)*12,al[Re+1]=Math.random()*6,al[Re+2]=(Math.random()-.5)*10;Wp.setAttribute("position",new $n(al,3));const __=new r_({color:11032055,size:.09,transparent:!0,opacity:.85,depthWrite:!1}),jp=new Y1(Wp,__);Z.add(jp),U.current=jp;const Xp=()=>{if(!$||!fe||!se)return;const Re=$.clientWidth||window.innerWidth,it=$.clientHeight||window.innerHeight;se.aspect=Re/it,se.updateProjectionMatrix(),fe.setSize(Re,it)};window.addEventListener("resize",Xp);let Yp=new dE,qp,Eu=0,wu=performance.now();const $p=()=>{qp=requestAnimationFrame($p);const Re=Math.min(Yp.getDelta(),.1),it=Yp.getElapsedTime();Eu++;const wi=performance.now();if(wi-wu>=500){const ue=Math.round(Eu*1e3/(wi-wu));Eu=0,wu=wi,S&&S({fps:ue,aiState:X.current,distance:T.current?Math.abs(T.current.position.x- -2.2).toFixed(1):"3.8"})}if(G.current.length>=2&&(G.current[0].rotation.z+=Re*.85,G.current[1].rotation.z-=Re*1.25),L.current&&(L.current.rotation.z+=Re*1.6),F.current&&F.current.forEach(ue=>{ue.group.position.x+=ue.speed*Re,ue.group.position.x>26?ue.group.position.x=-26:ue.group.position.x<-26&&(ue.group.position.x=26)}),N.current>.001?(se.position.x=(Math.random()-.5)*N.current,se.position.y=2.3+(Math.random()-.5)*N.current,N.current*=.86):(se.position.x=Math.sin(it*.8)*.05,se.position.y=2.3+Math.sin(it*1.2)*.03),U.current){const ue=U.current.geometry.attributes.position.array;for(let Le=1;Le<ue.length;Le+=3)ue[Le]+=Re*.9,ue[Le]>6&&(ue[Le]=0);U.current.geometry.attributes.position.needsUpdate=!0}if(n==="emerging"||n==="boss-title"){if(T.current){const ue=T.current;W.current.emergeProgress=Math.min(1,W.current.emergeProgress+Re*.7);const Le=W.current.emergeProgress;ue.position.x=wn.lerp(0,2.2,Le),ue.position.z=wn.lerp(-4.5,.5,Le),ue.position.y=Math.sin(Le*Math.PI)*.4;const We=wn.lerp(.2,1,Le);ue.scale.set(We,We,We)}R.current&&Id(R.current,"idle",0,Re,it,!1,"")}else n==="active"&&T.current&&W.current.emergeProgress<1&&(W.current.emergeProgress=1,T.current.position.set(2.2,0,.5),T.current.scale.set(1,1,1));if(M.current){const ue=M.current,Le=Ue.current;if(Le.state==="idle")ue.position.y=Math.sin(it*2.2)*.025,ue.rotation.z=Math.sin(it*1.8)*.01,ue.position.x=-2.2,ue.position.z=.5;else if(Le.state==="punch"){Le.time+=Re;const We=Le.time/.44;if(We<.38){const nt=Math.sin(We/.38*(Math.PI/2));ue.position.x=-2.2+nt*1.5,ue.position.y=Math.sin(We/.38*Math.PI)*.12,ue.rotation.z=-.06*nt}else if(We<.56)ue.position.x=-.7,ue.position.y=0,ue.rotation.z=-.06;else if(We<1){const nt=(We-.56)/.44,ft=Math.sin(nt*(Math.PI/2));ue.position.x=-.7-ft*1.5,ue.position.y=0,ue.rotation.z=-.06*(1-ft)}else ue.position.set(-2.2,0,.5),ue.rotation.z=0,Le.state="idle"}else if(Le.state==="ultimate"){Le.time+=Re;const We=Le.time/.55;if(We<.45){const nt=Math.sin(We/.45*(Math.PI/2));ue.position.y=nt*2.8,ue.position.x=-2.2+nt*1.5,ue.rotation.z=nt*Math.PI*2}else if(We<.65){const nt=(We-.45)/.2;ue.position.y=(1-nt)*2.8,ue.position.x=-.7,ue.rotation.z=0}else if(We<1){const nt=(We-.65)/.35,ft=Math.sin(nt*(Math.PI/2));ue.position.x=-.7-ft*1.5,ue.position.y=0}else ue.position.set(-2.2,0,.5),ue.rotation.z=0,Le.state="idle"}else if(Le.state==="dodge"){Le.time+=Re;const We=Le.time/.38;if(We<.5){const nt=Math.sin(We/.5*(Math.PI/2));ue.position.x=-2.2-nt*.9,ue.position.z=.5-nt*1}else if(We<1){const nt=(We-.5)/.5,ft=Math.sin(nt*(Math.PI/2));ue.position.x=-3.1+ft*.9,ue.position.z=-.5+ft*1}else ue.position.set(-2.2,0,.5),Le.state="idle"}if(Le.recoiling){Le.recoilTime=(Le.recoilTime||0)+Re;const We=Math.min(1,Le.recoilTime/.28);ue.position.x=-2.2-Math.sin(We*Math.PI)*.48,ue.rotation.z=-Math.sin(We*Math.PI)*.12,We>=1&&(Le.recoiling=!1,Le.recoilTime=0,ue.position.x=-2.2,ue.rotation.z=0)}w.current&&Id(w.current,Le.state,Le.time,Re,it,!0,l)}const Xt=D.current,Ti=t==null?void 0:t.id;if(Xt.heroAttackType){Xt.heroVfxTime+=Re;const ue=Xt.heroVfxTime,Le=Xt.heroAttackType==="vsign";if(Ti==="ironman"&&j.current){const We=j.current;We.visible=!0;const nt=Le?.65:.35;We.material.opacity=Math.max(0,1-ue/nt),We.scale.set(Le?3:1.2,1,Le?3:1.2),V.current&&V.current.forEach((ft,rn)=>{ft.visible=Le;const Ft=(ue*3.5+rn*.3)%1;ft.position.set(wn.lerp(-1.8,2,Ft),2.1,.5),ft.scale.set(1+Ft*1.5,1+Ft*1.5,1),ft.material.opacity=(1-Ft)*.8}),ue>nt&&(We.visible=!1,V.current&&V.current.forEach(ft=>ft.visible=!1),Xt.heroAttackType=null)}else if(Ti==="thor"&&H.current){const We=Le?.7:.4,nt=Math.max(0,1-ue/We);if(H.current.material.opacity=nt,b.current){const Ft=b.current;Ft.visible=!0,Ft.rotation.x+=Re*25;const tt=ue/We;if(tt<.5){const Ze=tt/.5;Ft.position.set(wn.lerp(-1.8,2,Ze),2.1+Math.sin(Ze*Math.PI)*.8,.5)}else{const Ze=(tt-.5)/.5;Ft.position.set(wn.lerp(2,-1.8,Ze),2.1+Math.sin(Ze*Math.PI)*.4,.5)}}const ft=H.current.geometry.attributes.position.array,rn=ft.length/3;for(let Ft=0;Ft<rn;Ft++){const tt=Ft/(rn-1);ft[Ft*3]=wn.lerp(-1.6,2,tt),ft[Ft*3+1]=wn.lerp(2.2,2,tt)+(Math.random()-.5)*(Le?1.2:.6),ft[Ft*3+2]=.5+(Math.random()-.5)*.8}if(H.current.geometry.attributes.position.needsUpdate=!0,P.current){P.current.material.opacity=Le?nt:0;const Ft=P.current.geometry.attributes.position.array,tt=Ft.length/3;for(let Ze=0;Ze<tt;Ze++){const en=Ze/(tt-1);Ft[Ze*3]=-1.6+(Math.random()-.5)*.4,Ft[Ze*3+1]=wn.lerp(6,2.4,en),Ft[Ze*3+2]=.5+(Math.random()-.5)*.4}P.current.geometry.attributes.position.needsUpdate=!0}ue>We&&(b.current&&(b.current.visible=!1),Xt.heroAttackType=null)}else if((Ti==="spiderman"||!Ti)&&ne.current){const We=Le?.65:.35,nt=Math.max(0,1-ue/We);if(Le){if(le.current){const ft=le.current,rn=Math.min(1,ue/.2);ft.children.forEach((Ft,tt)=>{Ft.material.opacity=nt;const Ze=Ft.geometry.attributes.position.array;Ze[0]=-1.5,Ze[1]=2.1,Ze[2]=.6;const en=tt/10*Math.PI*2;Ze[3]=wn.lerp(-1.5,1.8,rn),Ze[4]=wn.lerp(2.1,2+Math.sin(en)*1.4,rn),Ze[5]=wn.lerp(.6,.5+Math.cos(en)*1.4,rn),Ft.geometry.attributes.position.needsUpdate=!0})}}else{ne.current.material.opacity=nt;const ft=ne.current.geometry.attributes.position.array;if(ft[0]=-1.5,ft[1]=2.1,ft[2]=.6,ft[3]=1.8,ft[4]=2,ft[5]=.5,ne.current.geometry.attributes.position.needsUpdate=!0,Me.current){Me.current.material.opacity=Math.max(0,.85-ue/.5);const rn=1+ue*2.5;Me.current.scale.set(rn,rn,1)}}ue>We&&(Xt.heroAttackType=null)}else if(Ti==="captain-america"&&xe.current){const We=xe.current,nt=Le?.65:.5;if(Le){if(me.current){const ft=me.current,rn=1+ue*9;ft.scale.set(rn,rn,1),ft.material.opacity=Math.max(0,.95-ue/.65),ue>nt&&(ft.material.opacity=0,Xt.heroAttackType=null)}}else{We.visible=!0,We.rotation.y+=Re*30;const ft=ue/.5;if(ft<.5){const rn=ft/.5;We.position.x=wn.lerp(-2,1.8,rn),We.position.y=1.8+Math.sin(rn*Math.PI)*.8}else if(ft<1){const rn=(ft-.5)/.5;We.position.x=wn.lerp(1.8,-2,rn),We.position.y=1.8+Math.sin(rn*Math.PI)*.4}else We.visible=!1,Xt.heroAttackType=null}}else if((Ti==="doctor-strange"||Ti==="dr-strange")&&B.current){const We=Le?.7:.45;if(Le)J.current&&(J.current.children.forEach(nt=>{nt.material.opacity=Math.max(0,.9-ue/.7),nt.rotation.x+=Re*6,nt.rotation.y+=Re*8}),ue>We&&(J.current.children.forEach(nt=>nt.material.opacity=0),Xt.heroAttackType=null));else{const nt=B.current;nt.visible=!0,nt.rotation.z+=Re*12,nt.position.x=wn.lerp(-1.8,1.8,ue/.45),nt.position.y=2.1,ue>We&&(nt.visible=!1,Xt.heroAttackType=null)}}else Xt.heroAttackType=null}if(T.current&&n==="active"&&!m&&r>0){const ue=T.current,Le=Pe.current,We=(e==null?void 0:e.id)||"void-titan";y.current+=Re;const nt=a>=2,ft=a===3?2.4:nt?3:4,Ft=ft-(a===3?.95:nt?1.1:1.2);if(s)X.current="STUNNED",y.current=0,h&&h(!1),I.current&&(I.current.material.opacity=0),Le.state="staggered",ue.position.set(2.2,0,.5),ue.rotation.z=0;else{if(y.current>Ft&&y.current<ft){if(X.current="APPROACH",h&&h(!0),I.current){const tt=nt?11032055:16711731;I.current.material.color.setHex(tt),I.current.material.opacity=.65+Math.sin(it*16)*.35,I.current.scale.set(1+Math.sin(it*12)*.14,1+Math.sin(it*12)*.14,1)}ue.position.x=2.2+(Math.random()-.5)*.08}else y.current<Ft&&(X.current=nt?"ENRAGED":"IDLE",I.current&&(I.current.material.opacity=0));y.current>=ft&&(Le.state==="idle"||Le.state==="staggered")&&(X.current="ATTACK",Le.state="attack",Le.time=0,y.current=0,h&&h(!1),I.current&&(I.current.material.opacity=0),Xt.villainAttackActive=!0,Xt.villainVfxTime=0,We==="void-titan"?(Se.playLaserBeam(!0),Se.playPortalWarp()):We==="green-goblin"?Se.playExplosion():We==="thanos"?Se.playLaserBeam(!0):We==="magneto"?Se.playShieldBlock():We==="doctor-doom"?Se.playLaserBeam(!0):We==="loki"?Se.playMysticCast():Se.playPunch())}if(De.current.length>0&&De.current.forEach((tt,Ze)=>{tt.material.opacity=nt?.85:0;const en=it*3+Ze*(Math.PI*2/3);tt.position.set(ue.position.x+Math.cos(en)*1.5,2.2+Math.sin(en*1.5)*.5,.5+Math.sin(en)*1)}),Le.state==="idle")ue.position.y=Math.sin(it*2+1.2)*.04,ue.position.x=2.2,ue.position.z=.5;else if(Le.state==="attack"){Le.time+=Re;const tt=Le.time/.48;if(tt<.38){const Ze=Math.sin(tt/.38*(Math.PI/2));ue.position.x=2.2-Ze*2,ue.position.y=Math.sin(tt/.38*Math.PI)*.12,ue.rotation.z=-.07*Ze}else if(tt<.54){if(ue.position.x=.2,ue.position.y=0,ue.rotation.z=-.07,!Le.hasDamaged){Le.hasDamaged=!0;const Ze=l&&(l.toUpperCase().includes("SHIELD")||l.toUpperCase().includes("PALM"));c&&c(Ze),N.current=Ze?.08:.26,Ze?Se.playShieldBlock():(Se.playPunch(),Ue.current&&(Ue.current.recoiling=!0))}}else if(tt<1){const Ze=(tt-.54)/.46,en=Math.sin(Ze*(Math.PI/2));ue.position.x=.2+en*2,ue.position.y=0,ue.rotation.z=-.07*(1-en)}else ue.position.set(2.2,0,.5),ue.rotation.z=0,Le.state="idle",Le.hasDamaged=!1}if(Xt.villainAttackActive){Xt.villainVfxTime+=Re;const tt=Xt.villainVfxTime;if(We==="void-titan"){if(_e.current&&(_e.current.visible=!0,_e.current.material.opacity=Math.max(0,1-tt/.48),_e.current.scale.set(2.6,1,2.6)),de.current){const Ze=1+tt*10;de.current.scale.set(Ze,Ze,1),de.current.material.opacity=Math.max(0,.9-tt/.48)}}else if(We==="green-goblin"){if(Qe.current){const Ze=Qe.current;Ze.visible=tt<.25;const en=tt/.25;Ze.position.x=wn.lerp(2.2,-2,en),Ze.position.y=2+Math.sin(en*Math.PI)*1.2,Ze.rotation.x+=Re*15}if(ve.current){const Ze=ve.current;if(tt>=.2&&tt<.5){Ze.visible=!0;const en=(tt-.2)*8;Ze.position.set(-2,1.8,.5),Ze.scale.set(en,en,en),Ze.material.opacity=1-(tt-.2)/.3}else Ze.visible=!1}}else if(We==="thanos"){if(Ye.current&&(Ye.current.visible=!0,Ye.current.material.opacity=Math.max(0,1-tt/.45),Ye.current.scale.set(2.4,1,2.4)),Je.current){const Ze=1+tt*9;Je.current.scale.set(Ze,Ze,1),Je.current.material.opacity=Math.max(0,.9-tt/.45)}}else if(We==="magneto"){if(st.current&&(st.current.material.opacity=Math.max(0,.85-tt/.45),st.current.rotation.z+=Re*12),je.current){const Ze=je.current;Ze.visible=!0;const en=Math.min(1,tt/.3);Ze.children.forEach((y_,S_)=>{const M_=(S_-2)*.35;y_.position.set(wn.lerp(2.2,-2,en),2.2+M_,.5)})}}else if(We==="doctor-doom"){if(lt.current&&(lt.current.visible=!0,lt.current.material.opacity=Math.max(0,1-tt/.45),lt.current.scale.set(1.6,1,1.6)),dt.current){const Ze=1+tt*8;dt.current.scale.set(Ze,Ze,1),dt.current.material.opacity=Math.max(0,.85-tt/.45)}}else if(We==="loki"&&(ae.current&&(ae.current.visible=!0,ae.current.material.opacity=Math.max(0,1-tt/.45)),ye.current)){const Ze=Math.sin(tt*18)>0?.75:.2;ye.current.children.forEach(en=>en.material.opacity=Ze)}tt>.48&&(Xt.villainAttackActive=!1,_e.current&&(_e.current.visible=!1),Ye.current&&(Ye.current.visible=!1),lt.current&&(lt.current.visible=!1),ae.current&&(ae.current.visible=!1),je.current&&(je.current.visible=!1),Qe.current&&(Qe.current.visible=!1),ve.current&&(ve.current.visible=!1))}if(Le.recoiling){Le.recoilTime=(Le.recoilTime||0)+Re;const tt=Math.min(1,Le.recoilTime/.28);ue.position.x=2.2+Math.sin(tt*Math.PI)*.48,ue.rotation.z=Math.sin(tt*Math.PI)*.1,tt>=1&&(Le.recoiling=!1,Le.recoilTime=0,ue.position.x=2.2,ue.rotation.z=0)}R.current&&Id(R.current,Le.state,Le.time,Re,it,!1,"")}else m&&(X.current="DEFEATED");if(_.current){const ue=l&&(l.toUpperCase().includes("SHIELD")||l.toUpperCase().includes("PALM")),Le=ue?.85:0;_.current.material.opacity+=(Le-_.current.material.opacity)*.25,C.current&&(C.current.material.opacity=_.current.material.opacity),ue&&(_.current.rotation.z+=Re*2.5)}fe.render(Z,se)};return $p(),()=>{cancelAnimationFrame(qp),window.removeEventListener("resize",Xp),fe.domElement&&$.contains(fe.domElement)&&$.removeChild(fe.domElement),fe.dispose()}},[t,e,n]),ie.useEffect(()=>{if(!u)return;const $=t==null?void 0:t.id;u.type==="fist"||u.type==="forward"?(Ue.current={state:"punch",time:0,recoiling:!1,recoilTime:0},D.current.heroAttackType="fist",D.current.heroVfxTime=0,N.current=.16,Pe.current&&(Pe.current.recoiling=!0,Pe.current.recoilTime=0),$==="ironman"?Se.playLaserBeam(!1):$==="thor"?Se.playThunder():$==="spiderman"?Se.playWebSling():$==="captain-america"?Se.playShieldBlock():$==="doctor-strange"||$==="dr-strange"?Se.playMysticCast():Se.playPunch()):u.type==="vsign"||u.type==="both_hands"?(Ue.current={state:"ultimate",time:0,recoiling:!1,recoilTime:0},D.current.heroAttackType="vsign",D.current.heroVfxTime=0,N.current=.35,Pe.current&&(Pe.current.recoiling=!0,Pe.current.recoilTime=0),$==="ironman"?Se.playLaserBeam(!0):$==="thor"?Se.playThunder():$==="spiderman"?Se.playWebSling():$==="captain-america"?Se.playShieldBlock():$==="doctor-strange"||$==="dr-strange"?Se.playMysticCast():Se.playPunch()):u.type==="swipe"&&(Ue.current={state:"dodge",time:0,recoiling:!1},Se.playWebSling())},[u,t]),p.jsx("div",{className:"rs-three-battle-canvas-wrapper",ref:g})},fC=({selectedHero:t,selectedVillain:e,cameraStream:n,isSimulatedCamera:i,onExitArena:r})=>{const[s,a]=ie.useState("city-pan"),[o,l]=ie.useState(3),[c,f]=ie.useState(!0),[h,u]=ie.useState(!1),m=1e3,x=25e4,S=3e4,[g,d]=ie.useState(25e4),[v,E]=ie.useState(25e4),[M,T]=ie.useState(3e4),[w,R]=ie.useState(!1),[_,C]=ie.useState(1),[I,U]=ie.useState(1e3),[O,F]=ie.useState(0),[L,G]=ie.useState(!1),[te,j]=ie.useState(!1),[V,H]=ie.useState(60),[P,b]=ie.useState(0),[ne,le]=ie.useState(0),[Me,xe]=ie.useState(0),[me,B]=ie.useState("Standby (Show Hand)"),[J,Q]=ie.useState(null),[_e,de]=ie.useState(null),[De,Qe]=ie.useState([]),[ve,Ye]=ie.useState(!1),[Je,je]=ie.useState(!1),[st,lt]=ie.useState(0),[dt,ae]=ie.useState(!1),[ye,D]=ie.useState(!1),[Ue,Pe]=ie.useState([]),[N,y]=ie.useState(!1),[W,X]=ie.useState(null),[$,he]=ie.useState({fps:60,aiState:"APPROACH",distance:"3.8"}),pe=ie.useRef(null),Z=ie.useRef(null),se=ie.useRef(null),fe=ie.useRef(null),qe=ie.useRef(null),Te=ie.useRef(null),Ee=ie.useRef(null),$e=ie.useRef(0),Fe=(at,ct="normal")=>{de({text:at,type:ct}),Ee.current&&clearTimeout(Ee.current),Ee.current=setTimeout(()=>{de(null)},2200)},ze=at=>{Qe(ct=>[at,...ct.slice(0,4)])},k=(at,ct)=>{ae(!0),D(!0);const pn={id:Date.now()+Math.random(),text:`-${at.toLocaleString()}${ct?" CRIT!":""}`,isCrit:ct,x:(Math.random()-.5)*80,y:(Math.random()-.5)*60};Pe(gt=>[...gt.slice(-3),pn]),setTimeout(()=>D(!1),140),setTimeout(()=>ae(!1),240),setTimeout(()=>{Pe(gt=>gt.filter(At=>At.id!==pn.id))},850)};ie.useEffect(()=>{Se.playPortalWarp();const at=setTimeout(()=>{a("hero-entrance"),Se.playLaserBeam(!1)},1400),ct=setTimeout(()=>{a("boss-entrance"),Se.playPortalWarp()},3e3),pn=setTimeout(()=>{a("cinematic-banner"),Se.playModal()},4600),gt=setTimeout(()=>{a("countdown"),l(3),Se.playClick()},6200),At=setTimeout(()=>{l(2),Se.playClick()},7e3),Gt=setTimeout(()=>{l(1),Se.playClick()},7800),Mn=setTimeout(()=>{l("FIGHT!"),Se.playThunder()},8600),an=setTimeout(()=>{a("active"),ze(`[SYSTEM] Battle active! S-Rank Boss ${(e==null?void 0:e.name)||"VOID TITAN"} engaged!`),ze("[TUTORIAL] Strike [2] or Push Forward. Shield [1] Parries attacks. Ultimate [4] at 100%!")},9200);return()=>{clearTimeout(at),clearTimeout(ct),clearTimeout(pn),clearTimeout(gt),clearTimeout(At),clearTimeout(Gt),clearTimeout(Mn),clearTimeout(an)}},[e]);const Ae=()=>{a("active"),Se.playClick(),ze("[SYSTEM] Intro bypassed. Battle active!")};ie.useEffect(()=>{if(s!=="active"||ve||Je)return;const at=setInterval(()=>{H(ct=>ct<=1?(I>0&&g>0&&(I>m*.35?Xe():ke()),0):ct-1)},1e3);return()=>clearInterval(at)},[s,ve,Je,I,g]),ie.useEffect(()=>{const at=setTimeout(()=>{E(g)},350);return()=>clearTimeout(at)},[g]),ie.useEffect(()=>(n&&pe.current&&(pe.current.srcObject=n,pe.current.onloadedmetadata=()=>{pe.current.play().catch(()=>{}),Z.current&&(Z.current.width=pe.current.videoWidth||320,Z.current.height=pe.current.videoHeight||240,se.current=new Dx(pe.current,Z.current,at=>{lt(Math.round(at.confidence*100)),s==="active"&&!ve&&!Je&&re(at.gesture,!0)}),se.current.start())}),()=>{se.current&&(se.current.stop(),se.current=null)}),[n,s,ve,Je]),ie.useEffect(()=>{const at=ct=>{s!=="active"||ve||Je||(ct.key==="1"&&re("palm",!1),ct.key==="2"&&re("fist",!1),(ct.key==="3"||ct.key.toLowerCase()==="e")&&re("point",!1),(ct.key===" "||ct.key.toLowerCase()==="f")&&re("forward",!1),(ct.key==="4"||ct.key.toLowerCase()==="r")&&re("both_hands",!1),(ct.key.toLowerCase()==="a"||ct.key.toLowerCase()==="d"||ct.key.toLowerCase()==="w")&&re("swipe",!1))};return window.addEventListener("keydown",at),()=>window.removeEventListener("keydown",at)},[s,ve,Je,O,N,w]);const re=(at,ct=!1)=>{const pn=Date.now();if(!(pn-$e.current<260))if($e.current=pn,Q(at),fe.current&&clearTimeout(fe.current),at==="palm")N?(G(!0),B("🛡️ PERFECT PARRY! 100% DEFLECTED"),Se.playShieldBlock(),X({type:"palm",id:Date.now()}),T(gt=>{const At=Math.max(0,gt-9500);return At===0&&!w&&we(),At}),F(gt=>Math.min(100,gt+28)),Fe("🛡️ PERFECT PARRY! +28% SUPER ENERGY!","parry"),ze(`${ct?"[CV VISION]":"[INPUT]"} 🛡️ PERFECT PARRY! Deflected attack with 0 damage & gained +28% Energy!`),setTimeout(()=>G(!1),900)):(B("🖐️ ENERGY SHIELD BRACED"),Se.playHover(),X({type:"palm",id:Date.now()}),ze(`${ct?"[CV VISION]":"[INPUT]"} 🛡️ Raised Energy Shield Guard!`)),fe.current=setTimeout(()=>{B("Standby (Show Hand)"),Q(null)},2400);else if(at==="fist")B("✊ WEAPON ENERGY CHARGING"),j(!0),Se.playLaserBeam(!1),F(gt=>Math.min(100,gt+15)),Fe("⚡ WEAPON CHARGED! (+15% ENERGY)","ready"),ze(`${ct?"[CV VISION]":"[INPUT]"} ✊ Channeled kinetic plasma into weapon! Next strike empowered!`),fe.current=setTimeout(()=>{B("Standby (Show Hand)"),Q(null)},1600);else if(at==="point"){B(`☝️ TARGETED CORE AIM // ${(t==null?void 0:t.weaponName)||"BEAM"}`),Se.playLaserBeam(!0);const gt=te?6500:4200;j(!1),d(At=>{const Gt=Math.max(0,At-gt);return be(Gt),Gt===0&&Xe(),Gt}),k(gt,!0),X({type:"point",id:Date.now()}),Fe(`🎯 DIRECT HIT! -${gt.toLocaleString()} DMG!`,"info"),ze(`${ct?"[CV VISION]":"[INPUT]"} 🎯 Pointing aim beam penetrated ${e==null?void 0:e.name}'s core for ${gt.toLocaleString()} DMG!`),fe.current=setTimeout(()=>{B("Standby (Show Hand)"),Q(null)},1400)}else if(at==="forward"){B("🥊 KINETIC COMBO STRIKE"),b(Mn=>{const an=Mn+1;return an>ne&&le(an),qe.current&&clearTimeout(qe.current),qe.current=setTimeout(()=>b(0),2800),an});let gt=Math.floor(Math.random()*800)+3200;te&&(gt+=2400,j(!1));const At=1+Math.min(.35,P*.035);w&&(gt*=1.85);const Gt=Math.round(gt*At);xe(Mn=>Mn+Gt),d(Mn=>{const an=Math.max(0,Mn-Gt);return be(an),an===0&&Xe(),an}),w||T(Mn=>{const an=Math.max(0,Mn-4800);return an===0&&we(),an}),F(Mn=>{const er=Math.min(100,Mn+(w?18:12));return er===100&&Mn<100&&Fe("⚡ SPECIAL ABILITY READY! (RAISE BOTH HANDS / 4)","ready"),er}),k(Gt,w),X({type:"forward",id:Date.now()}),ze(`${ct?"[CV VISION]":"[INPUT]"} 💥 Strike struck ${e==null?void 0:e.name} for ${Gt.toLocaleString()} DMG!`),fe.current=setTimeout(()=>{B("Standby (Show Hand)"),Q(null)},1200)}else if(at==="both_hands"||at==="vsign"){if(O<100){Se.playHover(),Fe(`⚠️ SPECIAL CHARGING: ${O}% / 100%`,"warning"),ze(`⚠️ Super Gauge at ${O}%. Land Strikes or Parries to reach 100%!`);return}F(0),B(`🙌 ${(t==null?void 0:t.special)||"CATACLYSM SPECIAL ATTACK"}`);let gt=Math.floor(Math.random()*6e3)+42e3;w&&(gt=Math.round(gt*1.85)),xe(At=>At+gt),d(At=>{const Gt=Math.max(0,At-gt);return be(Gt),Gt===0&&Xe(),Gt}),k(gt,!0),Se.playPortalWarp(),X({type:"both_hands",id:Date.now()}),Fe(`🔥 SPECIAL CATACLYSM! -${gt.toLocaleString()} DMG!`,"ult"),ze(`${ct?"[CV VISION]":"[INPUT]"} ⚡ ${t==null?void 0:t.name} unleashed ${t==null?void 0:t.special} for ${gt.toLocaleString()} DMG!`),fe.current=setTimeout(()=>{B("Standby (Show Hand)"),Q(null)},2e3)}else at==="swipe"&&(B("↔️ QUANTUM WARP DODGE"),Se.playHover(),X({type:"swipe",id:Date.now()}),N&&(F(gt=>Math.min(100,gt+14)),Fe("🌀 PERFECT DODGE! +14% ENERGY!","dodge")),ze(`${ct?"[CV VISION]":"[INPUT]"} 🌀 ${t==null?void 0:t.name} phased through attack zone!`),fe.current=setTimeout(()=>{B("Standby (Show Hand)"),Q(null)},1200))},we=()=>{R(!0),Se.playPortalWarp(),Fe("⚡ STAGGER BREAK! 1.85x CRIT WINDOW!","stagger"),ze(`⚡ GUARD BROKEN! ${e==null?void 0:e.name} is STAGGERED! Unleash all attacks!`),Te.current&&clearTimeout(Te.current),Te.current=setTimeout(()=>{R(!1),T(S),ze(`🛡️ ${e==null?void 0:e.name} recovered their Guard Shield!`)},4200)},be=at=>{const ct=at/x;ct<=.25&&_<3?(C(3),Se.playThunder(),Fe("⚡ BOSS OVERDRIVE! APOCALYPTIC PHASE!","phase"),ze(`🚨 WARNING: ${e==null?void 0:e.name} entered DESPERATION OVERDRIVE! Attacks every 2.4s!`)):ct<=.6&&_<2&&(C(2),Se.playLaserBeam(!0),Fe("🔥 BOSS ENRAGED! ATTACK SPEED INCREASED!","phase"),ze(`🔥 WARNING: ${e==null?void 0:e.name} is ENRAGED! Damage and fury elevated!`))},ce=at=>{if(at){ze("🛡️ Hero Shield absorbed 100% of the kinetic blow! No damage taken!");return}const pn=(_===3?180:_===2?140:110)+Math.floor(Math.random()*30);U(gt=>{const At=Math.max(0,gt-pn);return At===0&&ke(),At}),ae(!0),setTimeout(()=>ae(!1),260),Fe(`⚠️ IMPACT TAKEN! -${pn} HP!`,"warning"),ze(`💥 ${e==null?void 0:e.name} slammed ${t==null?void 0:t.name} for ${pn} DMG!`)},Xe=()=>{Ye(!0),Se.playVictoryFanfare(),Fe("🏆 VICTORY! TITAN DEFEATED!","victory"),ze(`🏆 GLORY! ${e==null?void 0:e.name} collapsed! S-Rank Gate successfully sealed!`)},ke=()=>{je(!0),Se.playDefeatSound(),Fe("💀 DEFEAT! GATE COLLAPSED!","defeat"),ze(`💀 DEFEATED: ${t==null?void 0:t.name} fell in combat.`)},Et=()=>{d(x),E(x),T(S),R(!1),C(1),U(m),F(0),b(0),H(c?60:99),je(!1),Ye(!1),y(!1),X(null),a("active"),ze("[SYSTEM] Battle reset. S-Rank Gate reopened. Engage!")},Sn=(()=>{const at=V*1200,ct=ne*4500,pn=I*80,At=(Me>0?Me:25e4)+at+ct+pn;let Gt="A WARRIOR";return At>32e4?Gt="SSS TITAN SLAYER":At>28e4?Gt="SS S-RANK HERO":At>24e4&&(Gt="S GUARDIAN"),{totalScore:Math.round(At),rank:Gt}})(),Bn=Math.max(0,I/m*100),La=Math.max(0,g/x*100),Ns=Math.max(0,v/x*100),Ps=Math.max(0,M/S*100);return p.jsxs("div",{className:`rs-redgate-arena-screen phase-${s} ${dt?"screen-shake":""}`,children:[p.jsx("video",{className:"rs-redgate-portal-video-bg",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:"/assets/red_gate_portal.mp4"}),p.jsx("div",{className:"rs-redgate-blood-fog"}),p.jsx("div",{className:"rs-redgate-vignette-overlay"}),p.jsx(dC,{selectedHero:t,selectedVillain:e,introPhase:s,heroHp:I,bossHp:g,isBossStaggered:w,bossPhase:_,heroSuperEnergy:O,activeGesture:me,onHeroDamaged:ce,incomingAttackWarning:N,setIncomingAttackWarning:y,heroActionTrigger:W,isVictory:ve,isDefeated:Je,onTelemetryUpdate:he}),s!=="active"&&!ve&&!Je&&p.jsxs("div",{className:"rs-cinematic-intro-overlay",children:[p.jsxs("button",{className:"rs-skip-intro-btn",onClick:Ae,children:[p.jsx("span",{children:"SKIP INTRO"}),p.jsx(Cf,{size:12})]}),s==="cinematic-banner"&&p.jsxs("div",{className:"rs-cinematic-quote-banner",children:[p.jsx("span",{className:"rs-quote-sub",children:"VISION WARRIORS // AI ARENA"}),p.jsx("h1",{className:"rs-quote-main",children:"CHOOSE YOUR POWER. DEFEND YOUR WORLD."}),p.jsx("p",{className:"rs-quote-desc",children:"A S-Rank Void Anomaly has manifested in Neo-City. Engage with hand gesture controls!"})]}),s==="hero-entrance"&&p.jsxs("div",{className:"rs-cinematic-weapon-popup",children:[p.jsx("span",{className:"rs-weapon-pop-tag",children:"WEAPON PROTOCOL ENGAGED"}),p.jsx("h2",{className:"rs-weapon-pop-title",children:(t==null?void 0:t.weaponName)||"QUANTUM WEAPON"}),p.jsx("p",{className:"rs-weapon-pop-desc",children:t==null?void 0:t.weaponDesc})]}),s==="boss-entrance"&&p.jsxs("div",{className:"rs-cinematic-boss-popup",children:[p.jsx("span",{className:"rs-boss-pop-tag",children:"ORIGINAL AI BOSS MANIFESTED"}),p.jsx("h2",{className:"rs-boss-pop-title",children:(e==null?void 0:e.name)||"VOID TITAN"}),p.jsx("p",{className:"rs-boss-pop-desc",children:(e==null?void 0:e.title)||"HARBINGER OF THE ABYSS"})]}),s==="countdown"&&p.jsx("div",{className:"rs-cinematic-countdown-box",children:p.jsx("span",{className:`rs-countdown-number ${o==="FIGHT!"?"fight":""}`,children:o})})]}),p.jsxs("header",{className:"rs-fight-master-hud",children:[p.jsxs("div",{className:"rs-hud-left-actions",children:[p.jsxs("button",{className:"rs-fight-exit-btn",onClick:()=>{Se.playClick(),r&&r()},title:"Exit Gate",children:[p.jsx(ho,{size:14}),p.jsx("span",{children:"EXIT"})]}),p.jsxs("button",{className:"rs-hud-expo-btn",onClick:()=>{Se.playClick(),u(!0)},title:"View Gesture Controls & Calibration Tutorial",children:[p.jsx(Vc,{size:14}),p.jsx("span",{children:"GESTURE GUIDE"})]})]}),p.jsxs("div",{className:"rs-hud-fighter-card hero",children:[p.jsxs("div",{className:"rs-hud-avatar-frame hero",children:[p.jsx("img",{src:(t==null?void 0:t.image)||"/assets/hero_spiderman.jpg",alt:t==null?void 0:t.name,className:"rs-hud-avatar-img"}),p.jsx("div",{className:"rs-hud-role-pill hero",children:"HERO"})]}),p.jsxs("div",{className:"rs-hud-gauge-group",children:[p.jsxs("div",{className:"rs-hud-name-row",children:[p.jsxs("div",{className:"rs-hud-name-col",children:[p.jsx("span",{className:"rs-hud-name hero",children:t==null?void 0:t.name}),p.jsxs("span",{className:"rs-hud-weapon-tag",children:["⚡ ",t==null?void 0:t.weaponName]})]}),p.jsxs("span",{className:"rs-hud-hp-digits",children:[I," / ",m," HP"]})]}),p.jsx("div",{className:"rs-hud-hp-track",children:p.jsx("div",{className:`rs-hud-hp-fill hero ${Bn<25?"crit":""}`,style:{width:`${Bn}%`}})}),p.jsxs("div",{className:"rs-hud-ex-gauge-row",children:[p.jsx("span",{className:"rs-hud-ex-label",children:"EX SUPER GAUGE"}),p.jsx("div",{className:"rs-hud-ex-track",children:p.jsx("div",{className:`rs-hud-ex-fill ${O>=100?"ready":""}`,style:{width:`${O}%`}})}),p.jsx("span",{className:`rs-hud-ex-val ${O>=100?"blaze":""}`,children:O>=100?"⚡ SPECIAL READY":`${O}%`})]})]})]}),p.jsxs("div",{className:"rs-hud-center-clock-badge",children:[p.jsx("div",{className:`rs-hud-phase-tag phase-${_}`,children:_===3?"⚡ OVERDRIVE":_===2?"🔥 ENRAGED":c?"EXPO BLITZ":"GATE S-RANK"}),p.jsx("div",{className:"rs-hud-timer-num",children:V}),p.jsx("div",{className:"rs-hud-vs-sub",children:"VS"})]}),p.jsxs("div",{className:"rs-hud-fighter-card villain",children:[p.jsxs("div",{className:"rs-hud-gauge-group villain",children:[p.jsxs("div",{className:"rs-hud-name-row villain",children:[p.jsxs("span",{className:"rs-hud-hp-digits villain",children:[g.toLocaleString()," / ",x.toLocaleString()," HP"]}),p.jsxs("div",{className:"rs-hud-name-col right",children:[p.jsx("span",{className:"rs-hud-name villain",children:(e==null?void 0:e.name)||"VOID TITAN"}),p.jsx("span",{className:"rs-hud-weapon-tag villain",children:"🌌 DARK VOID GAUNTLETS"})]})]}),p.jsxs("div",{className:"rs-hud-hp-track boss",children:[p.jsx("div",{className:"rs-hud-hp-ghost",style:{width:`${Ns}%`}}),p.jsx("div",{className:`rs-hud-hp-fill boss phase-${_}`,style:{width:`${La}%`}}),p.jsxs("div",{className:"rs-hud-hp-notches",children:[p.jsx("span",{}),p.jsx("span",{}),p.jsx("span",{}),p.jsx("span",{})]})]}),p.jsxs("div",{className:"rs-hud-stagger-row",children:[p.jsx("span",{className:"rs-hud-stagger-val",children:w?"⚡ STAGGERED (1.85x CRIT)":"STAGGER SHIELD"}),p.jsx("div",{className:"rs-hud-stagger-track",children:p.jsx("div",{className:`rs-hud-stagger-fill ${w?"broken":""}`,style:{width:`${w?100:Ps}%`}})})]})]}),p.jsxs("div",{className:"rs-hud-avatar-frame villain",children:[p.jsx("img",{src:(e==null?void 0:e.image)||"/assets/villain_thanos.jpg",alt:e==null?void 0:e.name,className:"rs-hud-avatar-img"}),p.jsx("div",{className:`rs-hud-role-pill villain phase-${_}`,children:_===3?"OVERDRIVE":_===2?"ENRAGED":"AI BOSS"})]})]})]}),p.jsxs("div",{className:"rs-hud-telemetry-panel",children:[p.jsxs("div",{className:"rs-telem-row",children:[p.jsx("span",{className:"rs-telem-dot green"}),p.jsxs("span",{className:"rs-telem-text",children:[$.fps," FPS // 60HZ"]})]}),p.jsxs("div",{className:"rs-telem-row",children:[p.jsx(Ax,{size:11,className:"text-cyan-400"}),p.jsxs("span",{className:"rs-telem-text",children:["AI FSM: ",$.aiState]})]}),p.jsxs("div",{className:"rs-telem-row",children:[p.jsx(Ex,{size:11,className:"text-violet-400"}),p.jsx("span",{className:"rs-telem-text",children:"CV LATENCY: 12ms"})]})]}),P>1&&p.jsxs("div",{className:"rs-active-combo-badge",children:[p.jsx("span",{className:"rs-combo-hits",children:P}),p.jsx("span",{className:"rs-combo-label",children:"COMBO!"}),p.jsxs("span",{className:"rs-combo-bonus",children:["+",Math.min(35,P*3.5),"% DMG BONUS"]})]}),_e&&p.jsx("div",{className:`rs-combat-event-banner banner-${_e.type}`,children:p.jsx("span",{children:_e.text})}),p.jsxs("footer",{className:"rs-tactical-ability-bar",children:[p.jsxs("button",{className:`rs-ability-slot ${L?"active":""}`,onClick:()=>re("palm"),title:"Parry Shield (Key 1 or Open Palm)",children:[p.jsx("span",{className:"rs-key-tag",children:"[1]"}),p.jsx(hp,{size:16}),p.jsxs("div",{className:"rs-slot-info",children:[p.jsx("span",{className:"rs-slot-title",children:"PARRY"}),p.jsx("span",{className:"rs-slot-desc",children:"OPEN PALM"})]})]}),p.jsxs("button",{className:`rs-ability-slot charge ${te?"active":""}`,onClick:()=>re("fist"),title:"Weapon Charge (Key 2 or Closed Fist)",children:[p.jsx("span",{className:"rs-key-tag",children:"[2]"}),p.jsx(hu,{size:16}),p.jsxs("div",{className:"rs-slot-info",children:[p.jsx("span",{className:"rs-slot-title",children:"CHARGE"}),p.jsx("span",{className:"rs-slot-desc",children:"CLOSED FIST"})]})]}),p.jsxs("button",{className:"rs-ability-slot aim",onClick:()=>re("point"),title:"Target Aim Beam (Key 3 / E or Point Index Finger)",children:[p.jsx("span",{className:"rs-key-tag",children:"[3]"}),p.jsx(dM,{size:16}),p.jsxs("div",{className:"rs-slot-info",children:[p.jsx("span",{className:"rs-slot-title",children:"AIM BEAM"}),p.jsx("span",{className:"rs-slot-desc",children:"POINT INDEX"})]})]}),p.jsxs("button",{className:"rs-ability-slot strike",onClick:()=>re("forward"),title:"Kinetic Strike (Space / F or Forward Hand Push)",children:[p.jsx("span",{className:"rs-key-tag",children:"[SPACE]"}),p.jsx(Jr,{size:16}),p.jsxs("div",{className:"rs-slot-info",children:[p.jsx("span",{className:"rs-slot-title",children:"STRIKE"}),p.jsx("span",{className:"rs-slot-desc",children:"FORWARD PUSH"})]})]}),p.jsxs("button",{className:`rs-ability-slot ultimate ${O>=100?"ready":"charging"}`,onClick:()=>re("both_hands"),title:"Special Ability Cataclysm (Key 4 / R or Raise Both Hands)",children:[p.jsx("span",{className:"rs-key-tag",children:"[4]"}),p.jsx(Cs,{size:16}),p.jsxs("div",{className:"rs-slot-info",children:[p.jsx("span",{className:"rs-slot-title",children:"SPECIAL"}),p.jsx("span",{className:"rs-slot-desc",children:O>=100?"READY!":`${O}%`})]})]}),p.jsxs("button",{className:"rs-ability-slot dodge",onClick:()=>re("swipe"),title:"Warp Dodge (Key A/D/W or Swipe Sideways)",children:[p.jsx("span",{className:"rs-key-tag",children:"[DODGE]"}),p.jsx(Ju,{size:16}),p.jsxs("div",{className:"rs-slot-info",children:[p.jsx("span",{className:"rs-slot-title",children:"DODGE"}),p.jsx("span",{className:"rs-slot-desc",children:"SWIPE HAND"})]})]})]}),p.jsxs("div",{className:"rs-cv-battle-pip-box",children:[p.jsxs("div",{className:"rs-cv-battle-header",children:[p.jsxs("div",{className:"rs-cv-status-live",children:[p.jsx("span",{className:"rs-cv-status-dot"}),p.jsx("span",{children:"CV SENSOR LIVE"})]}),p.jsxs("span",{className:"rs-cv-conf-badge",children:[st,"% ACC"]})]}),p.jsxs("div",{className:"rs-cv-video-frame",children:[p.jsx("video",{ref:pe,autoPlay:!0,playsInline:!0,muted:!0,className:"rs-cv-video-element"}),p.jsx("canvas",{ref:Z,className:"rs-cv-canvas-element"})]}),p.jsx("div",{className:"rs-cv-active-gesture-tag",children:p.jsx("span",{className:"rs-cv-gesture-name",children:me&&!me.includes("Standby")?me:"STANDBY (SHOW GESTURE)"})})]}),p.jsx("div",{className:"rs-damage-popups-container",children:Ue.map(at=>p.jsx("div",{className:`rs-damage-popup ${at.isCrit?"crit":""}`,style:{transform:`translate(${at.x+90}px, ${at.y}px)`},children:at.text},at.id))}),h&&p.jsx("div",{className:"rs-defeat-modal-overlay",children:p.jsxs("div",{className:"rs-defeat-modal-card expo-calibration-card",children:[p.jsx("div",{className:"rs-defeat-skull-glow victory-glow",children:p.jsx(Vc,{size:42,className:"text-cyan-400 animate-pulse"})}),p.jsx("h2",{className:"rs-defeat-title text-cyan-400",children:"VISION WARRIORS // GESTURE CONTROLS"}),p.jsx("p",{className:"rs-defeat-subtitle",children:"Test your webcam hand gestures in real-time before entering the arena:"}),p.jsxs("div",{className:"rs-calib-grid",children:[p.jsxs("div",{className:"rs-calib-item",children:[p.jsx("span",{className:"rs-calib-icon",children:"🖐️"}),p.jsxs("div",{className:"rs-calib-details",children:[p.jsx("span",{className:"rs-calib-name",children:"OPEN PALM"}),p.jsx("span",{className:"rs-calib-action",children:"Energy Shield & Parry [1]"})]})]}),p.jsxs("div",{className:"rs-calib-item",children:[p.jsx("span",{className:"rs-calib-icon",children:"✊"}),p.jsxs("div",{className:"rs-calib-details",children:[p.jsx("span",{className:"rs-calib-name",children:"CLOSED FIST"}),p.jsx("span",{className:"rs-calib-action",children:"Charge Weapon Energy [2]"})]})]}),p.jsxs("div",{className:"rs-calib-item",children:[p.jsx("span",{className:"rs-calib-icon",children:"☝️"}),p.jsxs("div",{className:"rs-calib-details",children:[p.jsx("span",{className:"rs-calib-name",children:"POINT INDEX"}),p.jsx("span",{className:"rs-calib-action",children:"Targeted Core Beam [3]"})]})]}),p.jsxs("div",{className:"rs-calib-item",children:[p.jsx("span",{className:"rs-calib-icon",children:"🥊"}),p.jsxs("div",{className:"rs-calib-details",children:[p.jsx("span",{className:"rs-calib-name",children:"FORWARD PUSH"}),p.jsx("span",{className:"rs-calib-action",children:"Kinetic Combo Strike [SPACE]"})]})]}),p.jsxs("div",{className:"rs-calib-item",children:[p.jsx("span",{className:"rs-calib-icon",children:"🙌"}),p.jsxs("div",{className:"rs-calib-details",children:[p.jsx("span",{className:"rs-calib-name",children:"BOTH HANDS"}),p.jsx("span",{className:"rs-calib-action",children:"Special Cataclysm [4]"})]})]}),p.jsxs("div",{className:"rs-calib-item",children:[p.jsx("span",{className:"rs-calib-icon",children:"↔️"}),p.jsxs("div",{className:"rs-calib-details",children:[p.jsx("span",{className:"rs-calib-name",children:"SIDEWAYS SWIPE"}),p.jsx("span",{className:"rs-calib-action",children:"Warp Dodge [A/D]"})]})]})]}),p.jsxs("div",{className:"rs-calib-current-readout",children:[p.jsx("span",{children:"CURRENT SENSOR DETECTION: "}),p.jsx("strong",{className:"text-cyan-400",children:me})]}),p.jsx("div",{className:"rs-defeat-actions-row",children:p.jsxs("button",{className:"rs-btn-defeat-retry victory-replay",onClick:()=>u(!1),children:[p.jsx(Cf,{size:16}),p.jsx("span",{children:"START COMBAT NOW"})]})})]})}),Je&&p.jsx("div",{className:"rs-defeat-modal-overlay",children:p.jsxs("div",{className:"rs-defeat-modal-card",children:[p.jsx("div",{className:"rs-defeat-skull-glow",children:p.jsx(lM,{size:48,className:"text-red-500 animate-bounce"})}),p.jsx("h2",{className:"rs-defeat-title",children:"MISSION FAILED!"}),p.jsxs("p",{className:"rs-defeat-subtitle",children:[t==null?void 0:t.name," was overwhelmed by ",e==null?void 0:e.name,"'s dark matter onslaught."]}),p.jsx("div",{className:"rs-defeat-tip",children:p.jsx("span",{children:"💡 TIP: Raise Open Palm (or press 1) immediately when the DANGER WARNING flashes to execute a PERFECT PARRY and take 0 damage!"})}),p.jsxs("div",{className:"rs-defeat-actions-row",children:[p.jsxs("button",{className:"rs-btn-defeat-retry",onClick:Et,children:[p.jsx(Ju,{size:16}),p.jsx("span",{children:"RETRY BATTLE"})]}),p.jsxs("button",{className:"rs-btn-defeat-exit",onClick:r,children:[p.jsx(ho,{size:16}),p.jsx("span",{children:"NEXT VISITOR"})]})]})]})}),ve&&p.jsx("div",{className:"rs-defeat-modal-overlay victory-mode",children:p.jsxs("div",{className:"rs-defeat-modal-card victory-card",children:[p.jsx("div",{className:"rs-defeat-skull-glow victory-glow",children:p.jsx(iM,{size:52,className:"text-cyan-400 animate-pulse"})}),p.jsx("h2",{className:"rs-defeat-title text-cyan-400",children:"VOID TITAN OBLITERATED!"}),p.jsxs("p",{className:"rs-defeat-subtitle",children:["Tactical mastery achieved! S-Rank Void Gate successfully sealed with ",t==null?void 0:t.name,"."]}),p.jsxs("div",{className:"rs-victory-stats-row",children:[p.jsxs("div",{className:"rs-vic-stat",children:[p.jsx("span",{className:"rs-vic-stat-label",children:"COMBAT SCORE"}),p.jsxs("span",{className:"rs-vic-stat-val text-yellow-400",children:[Sn.totalScore.toLocaleString()," PTS"]})]}),p.jsxs("div",{className:"rs-vic-stat",children:[p.jsx("span",{className:"rs-vic-stat-label",children:"MAX COMBO"}),p.jsxs("span",{className:"rs-vic-stat-val text-green-400",children:[ne>0?ne:P," HITS"]})]}),p.jsxs("div",{className:"rs-vic-stat",children:[p.jsx("span",{className:"rs-vic-stat-label",children:"EXPO RANK"}),p.jsx("span",{className:"rs-vic-stat-val text-cyan-400",children:Sn.rank})]})]}),p.jsxs("div",{className:"rs-defeat-actions-row",children:[p.jsxs("button",{className:"rs-btn-defeat-retry victory-replay",onClick:Et,children:[p.jsx(Ju,{size:16}),p.jsx("span",{children:"PLAY AGAIN"})]}),p.jsxs("button",{className:"rs-btn-defeat-exit",onClick:r,children:[p.jsx(ho,{size:16}),p.jsx("span",{children:"NEXT EXPO VISITOR"})]})]})]})})]})},hC=({isTransitioning:t,targetTitle:e,onMidpoint:n})=>{const[i,r]=ie.useState("idle");return ie.useEffect(()=>{if(!t){r("idle");return}r("charging");const s=setTimeout(()=>{r("flash"),n&&n()},160),a=setTimeout(()=>{r("warp-out")},280);return()=>{clearTimeout(s),clearTimeout(a)}},[t]),!t&&i==="idle"?null:p.jsxs("div",{className:`rs-quantum-warp-overlay phase-${i}`,children:[p.jsxs("div",{className:"rs-warp-hyperspace-core",children:[p.jsx("div",{className:"rs-warp-speed-ring ring-1"}),p.jsx("div",{className:"rs-warp-speed-ring ring-2"}),p.jsx("div",{className:"rs-warp-speed-ring ring-3"}),p.jsx("div",{className:"rs-warp-laser-portal"})]}),p.jsx("div",{className:"rs-warp-scanline"}),p.jsx("div",{className:"rs-warp-hex-grid"}),p.jsxs("div",{className:"rs-warp-hud-center",children:[p.jsx("div",{className:"rs-warp-hud-icon-box",children:p.jsx(Cs,{size:28,className:"rs-warp-zap-icon"})}),p.jsxs("div",{className:"rs-warp-hud-text-group",children:[p.jsx("span",{className:"rs-warp-sub-protocol",children:"DIMENSIONAL REALITY SHIFT"}),p.jsx("h2",{className:"rs-warp-destination-title",children:e?`WARPING TO ${e}`:"SHIFTING ARENA..."}),p.jsx("div",{className:"rs-warp-loading-bar-wrap",children:p.jsx("div",{className:"rs-warp-loading-bar-fill"})})]})]}),p.jsxs("div",{className:"rs-warp-peripheral-hud top-left",children:[p.jsx(Ex,{size:12}),p.jsx("span",{children:"ARENA_LATENCY: 0.02ms // ENERGETIC MATRIX LOCKED"})]}),p.jsxs("div",{className:"rs-warp-peripheral-hud bottom-right",children:[p.jsx(Ax,{size:12}),p.jsx("span",{children:"GESTURE_NEURAL_LINK: SYNCED 100%"})]}),p.jsx("div",{className:"rs-warp-flash-screen"})]})};function pC(){const[t,e]=ie.useState("home"),[n,i]=ie.useState(cc[0]),[r,s]=ie.useState(uc[1]),[a,o]=ie.useState(!1),[l,c]=ie.useState(null),[f,h]=ie.useState(""),[u,m]=ie.useState(!1),[x,S]=ie.useState(!1),[g,d]=ie.useState(!1),[v,E]=ie.useState(!1),[M,T]=ie.useState(!1),[w,R]=ie.useState(null),[_,C]=ie.useState(!1),[I,U]=ie.useState(!1),[O,F]=ie.useState(1250),[L,G]=ie.useState(320),te=Q=>{Q.stopPropagation();const _e=Se.toggleMute();U(_e)},j=Q=>{Q.stopPropagation(),Se.playClick(),document.fullscreenElement?document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})},V=(Q,_e)=>{Se.playClick(),Se.playPortalWarp(),c(Q),h(_e),o(!0)},H=()=>{l&&(e(l),c(null)),setTimeout(()=>{o(!1)},200)},P=()=>{V("hero-select","HERO SELECTION")},b=Q=>{i(Q),V("villain-select","OPPONENT MATRIX")},ne=(Q,_e)=>{s(_e),E(!0)},le=({stream:Q,isSimulated:_e})=>{R(Q),C(_e),E(!1),T(!0)},Me=()=>{T(!1),V("red-gate-battle","THE RED GATE")},xe=()=>{Se.playClick(),Se.playModal(),m(!0)},me=()=>{Se.playClick(),Se.playModal(),S(!0)},B=()=>{Se.playClick(),Se.playModal(),d(!0)},J=()=>{d(!1),alert("Session safely terminated. Standby mode active.")};return p.jsxs("div",{className:"rs-main-app-root",children:[t==="home"&&p.jsx("div",{className:"rs-screen-viewport",children:p.jsxs("div",{className:"rs-stage-container",children:[p.jsx("img",{src:"/assets/marvel_heroes_bg.jpg",alt:"Reality Shift Gesture Arena",className:"rs-stage-background-img"}),p.jsx("div",{className:"rs-stage-vignette-overlay"}),p.jsx("div",{className:"rs-stage-ambient-pulse"}),p.jsx(mM,{}),p.jsxs("div",{className:"rs-stage-logo-container",onClick:()=>Se.playHover(),children:[p.jsx("div",{className:"rs-logo-glow-aura"}),p.jsx("h1",{className:"rs-main-title",children:"REALITY SHIFT"}),p.jsx("div",{className:"rs-sub-title-badge",children:p.jsx("span",{className:"rs-sub-title-text",children:"GESTURE ARENA"})})]}),p.jsxs("div",{className:"rs-stage-top-hud",children:[p.jsxs("div",{className:"rs-hud-profile-badge",children:[p.jsx("div",{className:"rs-hud-avatar-icon",children:p.jsx(hM,{size:13})}),p.jsxs("div",{className:"rs-hud-profile-info",children:[p.jsx("span",{className:"rs-hud-user-name",children:"Hero_001"}),p.jsx("span",{className:"rs-hud-user-lvl",children:"Lv. 5"})]}),p.jsx("div",{className:"rs-hud-progress-track",children:p.jsx("div",{className:"rs-hud-progress-bar",style:{width:"65%"}})})]}),p.jsxs("div",{className:"rs-hud-currency-pill energy",onClick:()=>{Se.playClick(),F(Q=>Q+50)},title:"Click to recharge +50 Energy",children:[p.jsx(Cs,{size:14,className:"rs-hud-curr-icon energy-icon"}),p.jsx("span",{className:"rs-hud-curr-amount",children:O.toLocaleString()}),p.jsx("span",{className:"rs-hud-curr-plus",children:"+"})]}),p.jsxs("div",{className:"rs-hud-currency-pill gems",onClick:()=>{Se.playClick(),G(Q=>Q+10)},title:"Click to add +10 Crystals",children:[p.jsx(aM,{size:14,className:"rs-hud-curr-icon gems-icon"}),p.jsx("span",{className:"rs-hud-curr-amount",children:L.toLocaleString()}),p.jsx("span",{className:"rs-hud-curr-plus",children:"+"})]}),p.jsx("button",{className:"rs-hud-icon-btn",onClick:te,title:I?"Unmute Sound":"Mute Sound",children:I?p.jsx(Ix,{size:15}):p.jsx(bf,{size:15})}),p.jsx("button",{className:"rs-hud-icon-btn",onClick:j,title:"Toggle Fullscreen",children:p.jsx(oM,{size:14})})]}),p.jsxs("div",{className:"rs-stage-menu-group",children:[p.jsxs("button",{className:"rs-stage-btn play chamfered",onClick:P,onMouseEnter:()=>Se.playHover(),children:[p.jsx("div",{className:"rs-btn-neon-sweep"}),p.jsx(Cf,{size:30,fill:"currentColor",className:"rs-play-icon"}),p.jsx("span",{className:"rs-btn-text-play",children:"PLAY"})]}),p.jsxs("button",{className:"rs-stage-btn nav chamfered",onClick:xe,onMouseEnter:()=>Se.playHover(),children:[p.jsx(wx,{size:19,className:"rs-nav-icon"}),p.jsx("span",{className:"rs-nav-text",children:"HOW TO PLAY"})]}),p.jsxs("button",{className:"rs-stage-btn nav chamfered",onClick:me,onMouseEnter:()=>Se.playHover(),children:[p.jsx(bx,{size:19,className:"rs-nav-icon"}),p.jsx("span",{className:"rs-nav-text",children:"SETTINGS"})]}),p.jsxs("button",{className:"rs-stage-btn nav chamfered quit",onClick:B,onMouseEnter:()=>Se.playHover(),children:[p.jsx(Rx,{size:19,className:"rs-nav-icon quit-icon"}),p.jsx("span",{className:"rs-nav-text",children:"QUIT"})]})]}),p.jsxs("div",{className:"rs-home-destiny-caption",children:[p.jsx("div",{className:"rs-destiny-accent-bracket"}),p.jsxs("div",{className:"rs-destiny-text-block",children:[p.jsx("p",{className:"rs-destiny-line line-1",children:"Step into the arena."}),p.jsx("p",{className:"rs-destiny-line line-2",children:"Choose your hero."}),p.jsx("p",{className:"rs-destiny-line line-3",children:"Face your destiny."})]})]})]})}),t==="hero-select"&&p.jsx(yM,{onBackToHome:()=>V("home","MAIN MENU"),onConfirmHero:b}),t==="villain-select"&&p.jsx(SM,{selectedHero:n,onBackToHeroSelect:()=>V("hero-select","HERO SELECTION"),onStartBattle:ne}),t==="red-gate-battle"&&p.jsx(fC,{selectedHero:n,selectedVillain:r,cameraStream:w,isSimulatedCamera:_,onExitArena:()=>V("home","MAIN MENU")}),p.jsx(hC,{isTransitioning:a,targetTitle:f,onMidpoint:H}),p.jsx(MM,{isOpen:v,onAccessGranted:le,onClose:()=>E(!1)}),p.jsx(EM,{isOpen:M,selectedHero:n,selectedVillain:r,onEnterGate:Me}),p.jsx(vM,{isOpen:u,onClose:()=>m(!1)}),p.jsx(xM,{isOpen:x,onClose:()=>S(!1),isMuted:I,onToggleMute:te}),p.jsx(_M,{isOpen:g,onClose:()=>d(!1),onConfirm:J})]})}Ld.createRoot(document.getElementById("root")).render(p.jsx(G_.StrictMode,{children:p.jsx(pC,{})}));
