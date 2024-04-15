import{r as g,a9 as k,aa as A,ab as F,ac as M}from"./index-5d1582d4.js";function P(){if(console&&console.warn){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];typeof e[0]=="string"&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e)}}const S={};function C(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];typeof e[0]=="string"&&S[e[0]]||(typeof e[0]=="string"&&(S[e[0]]=new Date),P(...e))}const z=(t,e)=>()=>{if(t.isInitialized)e();else{const n=()=>{setTimeout(()=>{t.off("initialized",n)},0),e()};t.on("initialized",n)}};function R(t,e,n){t.loadNamespaces(e,z(t,n))}function v(t,e,n,o){typeof n=="string"&&(n=[n]),n.forEach(i=>{t.options.ns.indexOf(i)<0&&t.options.ns.push(i)}),t.loadLanguages(e,z(t,o))}function j(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const o=e.languages[0],i=e.options?e.options.fallbackLng:!1,s=e.languages[e.languages.length-1];if(o.toLowerCase()==="cimode")return!0;const c=(w,m)=>{const a=e.services.backendConnector.state[`${w}|${m}`];return a===-1||a===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!c(e.isLanguageChangingTo,t)?!1:!!(e.hasResourceBundle(o,t)||!e.services.backendConnector.backend||e.options.resources&&!e.options.partialBundledLanguages||c(o,t)&&(!i||c(s,t)))}function B(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!e.languages||!e.languages.length?(C("i18n.languages were undefined or empty",e.languages),!0):e.options.ignoreJSONStructure!==void 0?e.hasLoadedNamespace(t,{lng:n.lng,precheck:(i,s)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!s(i.isLanguageChangingTo,t))return!1}}):j(t,e,n)}const J=(t,e)=>{const n=g.useRef();return g.useEffect(()=>{n.current=e?n.current:t},[t,e]),n.current};function E(t,e,n,o){return t.getFixedT(e,n,o)}function O(t,e,n,o){return g.useCallback(E(t,e,n,o),[t,e,n,o])}function G(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:n}=e,{i18n:o,defaultNS:i}=g.useContext(k)||{},s=n||o||M();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new A),!s){C("You will need to pass in an i18next instance by using initReactI18next");const r=(l,u)=>typeof u=="string"?u:u&&typeof u=="object"&&typeof u.defaultValue=="string"?u.defaultValue:Array.isArray(l)?l[l.length-1]:l,f=[r,{},!1];return f.t=r,f.i18n={},f.ready=!1,f}s.options.react&&s.options.react.wait!==void 0&&C("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const c={...F(),...s.options.react,...e},{useSuspense:w,keyPrefix:m}=c;let a=t||i||s.options&&s.options.defaultNS;a=typeof a=="string"?[a]:a||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(a);const p=(s.isInitialized||s.initializedStoreOnce)&&a.every(r=>B(r,s,c)),$=O(s,e.lng||null,c.nsMode==="fallback"?a:a[0],m),x=()=>$,y=()=>E(s,e.lng||null,c.nsMode==="fallback"?a:a[0],m),[I,h]=g.useState(x);let N=a.join();e.lng&&(N=`${e.lng}${N}`);const L=J(N),d=g.useRef(!0);g.useEffect(()=>{const{bindI18n:r,bindI18nStore:f}=c;d.current=!0,!p&&!w&&(e.lng?v(s,e.lng,a,()=>{d.current&&h(y)}):R(s,a,()=>{d.current&&h(y)})),p&&L&&L!==N&&d.current&&h(y);function l(){d.current&&h(y)}return r&&s&&s.on(r,l),f&&s&&s.store.on(f,l),()=>{d.current=!1,r&&s&&r.split(" ").forEach(u=>s.off(u,l)),f&&s&&f.split(" ").forEach(u=>s.store.off(u,l))}},[s,N]);const T=g.useRef(!0);g.useEffect(()=>{d.current&&!T.current&&h(x),T.current=!1},[s,m]);const b=[I,s,p];if(b.t=I,b.i18n=s,b.ready=p,p||!p&&!w)return b;throw new Promise(r=>{e.lng?v(s,e.lng,a,()=>r()):R(s,a,()=>r())})}export{G as u};
