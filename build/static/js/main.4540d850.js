/*! For license information please see main.4540d850.js.LICENSE.txt */
!function(){"use strict";var e={374:function(e,t,r){var n=r(791),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function f(e,t,r){var n,u={},f=null,s=null;for(n in void 0!==r&&(f=""+r),void 0!==t.key&&(f=""+t.key),void 0!==t.ref&&(s=t.ref),t)c.call(t,n)&&!i.hasOwnProperty(n)&&(u[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===u[n]&&(u[n]=t[n]);return{$$typeof:o,type:e,key:f,ref:s,props:u,_owner:a.current}}t.jsx=f,t.jsxs=f},117:function(e,t){var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),i=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),y=Symbol.iterator;var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function h(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||d}function m(){}function b(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||d}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=h.prototype;var S=b.prototype=new m;S.constructor=b,_(S,h.prototype),S.isPureReactComponent=!0;var E=Array.isArray,k=Object.prototype.hasOwnProperty,R={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function $(e,t,n){var o,u={},c=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(c=""+t.key),t)k.call(t,o)&&!w.hasOwnProperty(o)&&(u[o]=t[o]);var i=arguments.length-2;if(1===i)u.children=n;else if(1<i){for(var f=Array(i),s=0;s<i;s++)f[s]=arguments[s+2];u.children=f}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===u[o]&&(u[o]=i[o]);return{$$typeof:r,type:e,key:c,ref:a,props:u,_owner:R.current}}function x(e){return"object"===typeof e&&null!==e&&e.$$typeof===r}var j=/\/+/g;function C(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,o,u,c){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var i=!1;if(null===e)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case r:case n:i=!0}}if(i)return c=c(i=e),e=""===u?"."+C(i,0):u,E(c)?(o="",null!=e&&(o=e.replace(j,"$&/")+"/"),O(c,t,o,"",(function(e){return e}))):null!=c&&(x(c)&&(c=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||i&&i.key===c.key?"":(""+c.key).replace(j,"$&/")+"/")+e)),t.push(c)),1;if(i=0,u=""===u?".":u+":",E(e))for(var f=0;f<e.length;f++){var s=u+C(a=e[f],f);i+=O(a,t,o,s,c)}else if(s=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=y&&e[y]||e["@@iterator"])?e:null}(e),"function"===typeof s)for(e=s.call(e),f=0;!(a=e.next()).done;)i+=O(a=a.value,t,o,s=u+C(a,f++),c);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function g(e,t,r){if(null==e)return e;var n=[],o=0;return O(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},T={transition:null},D={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:T,ReactCurrentOwner:R};t.Children={map:g,forEach:function(e,t,r){g(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return g(e,(function(){t++})),t},toArray:function(e){return g(e,(function(e){return e}))||[]},only:function(e){if(!x(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=h,t.Fragment=o,t.Profiler=c,t.PureComponent=b,t.StrictMode=u,t.Suspense=s,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=_({},e.props),u=e.key,c=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,a=R.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(f in t)k.call(t,f)&&!w.hasOwnProperty(f)&&(o[f]=void 0===t[f]&&void 0!==i?i[f]:t[f])}var f=arguments.length-2;if(1===f)o.children=n;else if(1<f){i=Array(f);for(var s=0;s<f;s++)i[s]=arguments[s+2];o.children=i}return{$$typeof:r,type:e.type,key:u,ref:c,props:o,_owner:a}},t.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=$,t.createFactory=function(e){var t=$.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:f,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=T.transition;T.transition={};try{e()}finally{T.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return I.current.useCallback(e,t)},t.useContext=function(e){return I.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return I.current.useDeferredValue(e)},t.useEffect=function(e,t){return I.current.useEffect(e,t)},t.useId=function(){return I.current.useId()},t.useImperativeHandle=function(e,t,r){return I.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return I.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return I.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return I.current.useMemo(e,t)},t.useReducer=function(e,t,r){return I.current.useReducer(e,t,r)},t.useRef=function(e){return I.current.useRef(e)},t.useState=function(e){return I.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return I.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return I.current.useTransition()},t.version="18.2.0"},791:function(e,t,r){e.exports=r(117)},184:function(e,t,r){e.exports=r(374)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var u=t[n]={exports:{}};return e[n](u,u.exports,r),u.exports}!function(){var e=r(791),t=r(184),n="Help text!",o=(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{children:n}),(0,t.jsx)("input",{placeholder:n,onClick:function(){return console.log("Clicked")},onMouseEnter:function(){return console.log("Mouse Over")}}),(0,t.jsx)("p",{children:"Yes"})]}),u=document.getElementById("app");e.render(o,u)}()}();
//# sourceMappingURL=main.4540d850.js.map