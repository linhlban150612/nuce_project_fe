import{r,V as q,b9 as kn,aU as Ut,X as _,ad as ge,ag as Oe,aj as K,U as D,aM as zt,_ as j,ak as $n,Y as he,aQ as Dn,aR as On,aS as An,aV as Ln,ao as Ht,al as Tn,ai as Fn,av as Vn}from"./index-5d1582d4.js";import{F as Ae}from"./Overflow-dad1924c.js";import{u as We}from"./useMergedState-a94f801d.js";import{i as Un,t as zn}from"./Compact-de17ca2f.js";import{K as ie}from"./useZIndex-412122f7.js";import{T as Hn}from"./index-8ab4410e.js";var jt=r.createContext(null);function Gt(t,e){return t===void 0?null:"".concat(t,"-").concat(e)}function Wt(t){var e=r.useContext(jt);return Gt(e,t)}var jn=["children","locked"],ee=r.createContext(null);function Gn(t,e){var a=_({},t);return Object.keys(e).forEach(function(o){var n=e[o];n!==void 0&&(a[o]=n)}),a}function Le(t){var e=t.children,a=t.locked,o=q(t,jn),n=r.useContext(ee),l=kn(function(){return Gn(n,o)},[n,o],function(i,u){return!a&&(i[0]!==u[0]||!Ut(i[1],u[1],!0))});return r.createElement(ee.Provider,{value:l},e)}var Wn=[],qt=r.createContext(null);function Xe(){return r.useContext(qt)}var Bt=r.createContext(Wn);function Te(t){var e=r.useContext(Bt);return r.useMemo(function(){return t!==void 0?[].concat(ge(e),[t]):e},[e,t])}var Yt=r.createContext(null),pt=r.createContext({});function At(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Un(t)){var a=t.nodeName.toLowerCase(),o=["input","select","textarea","button"].includes(a)||t.isContentEditable||a==="a"&&!!t.getAttribute("href"),n=t.getAttribute("tabindex"),l=Number(n),i=null;return n&&!Number.isNaN(l)?i=l:o&&i===null&&(i=0),o&&t.disabled&&(i=null),i!==null&&(i>=0||e&&i<0)}return!1}function qn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=ge(t.querySelectorAll("*")).filter(function(o){return At(o,e)});return At(t,e)&&a.unshift(t),a}var st=ie.LEFT,ct=ie.RIGHT,dt=ie.UP,qe=ie.DOWN,Be=ie.ENTER,Xt=ie.ESC,ke=ie.HOME,$e=ie.END,Lt=[dt,qe,st,ct];function Bn(t,e,a,o){var n,l,i,u,c="prev",s="next",h="children",d="parent";if(t==="inline"&&o===Be)return{inlineTrigger:!0};var p=(n={},K(n,dt,c),K(n,qe,s),n),R=(l={},K(l,st,a?s:c),K(l,ct,a?c:s),K(l,qe,h),K(l,Be,h),l),g=(i={},K(i,dt,c),K(i,qe,s),K(i,Be,h),K(i,Xt,d),K(i,st,a?h:d),K(i,ct,a?d:h),i),w={inline:p,horizontal:R,vertical:g,inlineSub:p,horizontalSub:g,verticalSub:g},S=(u=w["".concat(t).concat(e?"":"Sub")])===null||u===void 0?void 0:u[o];switch(S){case c:return{offset:-1,sibling:!0};case s:return{offset:1,sibling:!0};case d:return{offset:-1,sibling:!1};case h:return{offset:1,sibling:!1};default:return null}}function Yn(t){for(var e=t;e;){if(e.getAttribute("data-menu-list"))return e;e=e.parentElement}return null}function Xn(t,e){for(var a=t||document.activeElement;a;){if(e.has(a))return a;a=a.parentElement}return null}function gt(t,e){var a=qn(t,!0);return a.filter(function(o){return e.has(o)})}function Tt(t,e,a){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!t)return null;var n=gt(t,e),l=n.length,i=n.findIndex(function(u){return a===u});return o<0?i===-1?i=l-1:i-=1:o>0&&(i+=1),i=(i+l)%l,n[i]}var vt=function(e,a){var o=new Set,n=new Map,l=new Map;return e.forEach(function(i){var u=document.querySelector("[data-menu-id='".concat(Gt(a,i),"']"));u&&(o.add(u),l.set(u,i),n.set(i,u))}),{elements:o,key2element:n,element2key:l}};function Jn(t,e,a,o,n,l,i,u,c,s){var h=r.useRef(),d=r.useRef();d.current=e;var p=function(){Oe.cancel(h.current)};return r.useEffect(function(){return function(){p()}},[]),function(R){var g=R.which;if([].concat(Lt,[Be,Xt,ke,$e]).includes(g)){var w=l(),S=vt(w,o),b=S,x=b.elements,f=b.key2element,v=b.element2key,I=f.get(e),m=Xn(I,x),y=v.get(m),O=Bn(t,i(y,!0).length===1,a,g);if(!O&&g!==ke&&g!==$e)return;(Lt.includes(g)||[ke,$e].includes(g))&&R.preventDefault();var P=function(A){if(A){var B=A,Y=A.querySelector("a");Y!=null&&Y.getAttribute("href")&&(B=Y);var re=v.get(A);u(re),p(),h.current=Oe(function(){d.current===re&&B.focus()})}};if([ke,$e].includes(g)||O.sibling||!m){var T;!m||t==="inline"?T=n.current:T=Yn(m);var $,N=gt(T,x);g===ke?$=N[0]:g===$e?$=N[N.length-1]:$=Tt(T,x,m,O.offset),P($)}else if(O.inlineTrigger)c(y);else if(O.offset>0)c(y,!0),p(),h.current=Oe(function(){S=vt(w,o);var ne=m.getAttribute("aria-controls"),A=document.getElementById(ne),B=Tt(A,S.elements);P(B)},5);else if(O.offset<0){var G=i(y,!0),F=G[G.length-2],te=f.get(F);c(F,!1),P(te)}}s==null||s(R)}}function Zn(t){Promise.resolve().then(t)}var ht="__RC_UTIL_PATH_SPLIT__",Ft=function(e){return e.join(ht)},Qn=function(e){return e.split(ht)},ft="rc-menu-more";function er(){var t=r.useState({}),e=D(t,2),a=e[1],o=r.useRef(new Map),n=r.useRef(new Map),l=r.useState([]),i=D(l,2),u=i[0],c=i[1],s=r.useRef(0),h=r.useRef(!1),d=function(){h.current||a({})},p=r.useCallback(function(f,v){var I=Ft(v);n.current.set(I,f),o.current.set(f,I),s.current+=1;var m=s.current;Zn(function(){m===s.current&&d()})},[]),R=r.useCallback(function(f,v){var I=Ft(v);n.current.delete(I),o.current.delete(f)},[]),g=r.useCallback(function(f){c(f)},[]),w=r.useCallback(function(f,v){var I=o.current.get(f)||"",m=Qn(I);return v&&u.includes(m[0])&&m.unshift(ft),m},[u]),S=r.useCallback(function(f,v){return f.some(function(I){var m=w(I,!0);return m.includes(v)})},[w]),b=function(){var v=ge(o.current.keys());return u.length&&v.push(ft),v},x=r.useCallback(function(f){var v="".concat(o.current.get(f)).concat(ht),I=new Set;return ge(n.current.keys()).forEach(function(m){m.startsWith(v)&&I.add(n.current.get(m))}),I},[]);return r.useEffect(function(){return function(){h.current=!0}},[]),{registerPath:p,unregisterPath:R,refreshOverflowKeys:g,isSubPathKey:S,getKeyPath:w,getKeys:b,getSubPathKeys:x}}function De(t){var e=r.useRef(t);e.current=t;var a=r.useCallback(function(){for(var o,n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(o=e.current)===null||o===void 0?void 0:o.call.apply(o,[e].concat(l))},[]);return t?a:void 0}var tr=Math.random().toFixed(5).toString().slice(2),Vt=0;function nr(t){var e=We(t,{value:t}),a=D(e,2),o=a[0],n=a[1];return r.useEffect(function(){Vt+=1;var l="".concat(tr,"-").concat(Vt);n("rc-menu-uuid-".concat(l))},[]),o}function Jt(t,e,a,o){var n=r.useContext(ee),l=n.activeKey,i=n.onActive,u=n.onInactive,c={active:l===t};return e||(c.onMouseEnter=function(s){a==null||a({key:t,domEvent:s}),i(t)},c.onMouseLeave=function(s){o==null||o({key:t,domEvent:s}),u(t)}),c}function Zt(t){var e=r.useContext(ee),a=e.mode,o=e.rtl,n=e.inlineIndent;if(a!=="inline")return null;var l=t;return o?{paddingRight:l*n}:{paddingLeft:l*n}}function Qt(t){var e=t.icon,a=t.props,o=t.children,n;return e===null||e===!1?null:(typeof e=="function"?n=r.createElement(e,_({},a)):typeof e!="boolean"&&(n=e),n||o||null)}var rr=["item"];function Ye(t){var e=t.item,a=q(t,rr);return Object.defineProperty(a,"item",{get:function(){return zt(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),e}}),a}var ar=["title","attribute","elementRef"],ir=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],or=["active"],lr=function(t){Dn(a,t);var e=On(a);function a(){return An(this,a),e.apply(this,arguments)}return Ln(a,[{key:"render",value:function(){var n=this.props,l=n.title,i=n.attribute,u=n.elementRef,c=q(n,ar),s=Ht(c,["eventKey","popupClassName","popupOffset","onTitleClick"]);return zt(!i,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),r.createElement(Ae.Item,j({},i,{title:typeof l=="string"?l:void 0},s,{ref:u}))}}]),a}(r.Component),ur=r.forwardRef(function(t,e){var a,o=t.style,n=t.className,l=t.eventKey;t.warnKey;var i=t.disabled,u=t.itemIcon,c=t.children,s=t.role,h=t.onMouseEnter,d=t.onMouseLeave,p=t.onClick,R=t.onKeyDown,g=t.onFocus,w=q(t,ir),S=Wt(l),b=r.useContext(ee),x=b.prefixCls,f=b.onItemClick,v=b.disabled,I=b.overflowDisabled,m=b.itemIcon,y=b.selectedKeys,O=b.onActive,P=r.useContext(pt),T=P._internalRenderMenuItem,$="".concat(x,"-item"),N=r.useRef(),G=r.useRef(),F=v||i,te=$n(e,G),ne=Te(l),A=function(L){return{key:l,keyPath:ge(ne).reverse(),item:N.current,domEvent:L}},B=u||m,Y=Jt(l,F,h,d),re=Y.active,oe=q(Y,or),ae=y.includes(l),se=Zt(ne.length),ce=function(L){if(!F){var X=A(L);p==null||p(Ye(X)),f(X)}},V=function(L){if(R==null||R(L),L.which===ie.ENTER){var X=A(L);p==null||p(Ye(X)),f(X)}},U=function(L){O(l),g==null||g(L)},Ce={};t.role==="option"&&(Ce["aria-selected"]=ae);var de=r.createElement(lr,j({ref:N,elementRef:te,role:s===null?"none":s||"menuitem",tabIndex:i?null:-1,"data-menu-id":I&&S?null:S},w,oe,Ce,{component:"li","aria-disabled":i,style:_(_({},se),o),className:he($,(a={},K(a,"".concat($,"-active"),re),K(a,"".concat($,"-selected"),ae),K(a,"".concat($,"-disabled"),F),a),n),onClick:ce,onKeyDown:V,onFocus:U}),c,r.createElement(Qt,{props:_(_({},t),{},{isSelected:ae}),icon:B}));return T&&(de=T(de,t,{selected:ae})),de});function sr(t,e){var a=t.eventKey,o=Xe(),n=Te(a);return r.useEffect(function(){if(o)return o.registerPath(a,n),function(){o.unregisterPath(a,n)}},[n]),o?null:r.createElement(ur,j({},t,{ref:e}))}const Ct=r.forwardRef(sr);var cr=["className","children"],dr=function(e,a){var o=e.className,n=e.children,l=q(e,cr),i=r.useContext(ee),u=i.prefixCls,c=i.mode,s=i.rtl;return r.createElement("ul",j({className:he(u,s&&"".concat(u,"-rtl"),"".concat(u,"-sub"),"".concat(u,"-").concat(c==="inline"?"inline":"vertical"),o),role:"menu"},l,{"data-menu-list":!0,ref:a}),n)},bt=r.forwardRef(dr);bt.displayName="SubMenuList";function yt(t,e){return zn(t).map(function(a,o){if(r.isValidElement(a)){var n,l,i=a.key,u=(n=(l=a.props)===null||l===void 0?void 0:l.eventKey)!==null&&n!==void 0?n:i,c=u==null;c&&(u="tmp_key-".concat([].concat(ge(e),[o]).join("-")));var s={key:u,eventKey:u};return r.cloneElement(a,s)}return a})}var k={adjustX:1,adjustY:1},vr={topLeft:{points:["bl","tl"],overflow:k},topRight:{points:["br","tr"],overflow:k},bottomLeft:{points:["tl","bl"],overflow:k},bottomRight:{points:["tr","br"],overflow:k},leftTop:{points:["tr","tl"],overflow:k},leftBottom:{points:["br","bl"],overflow:k},rightTop:{points:["tl","tr"],overflow:k},rightBottom:{points:["bl","br"],overflow:k}},fr={topLeft:{points:["bl","tl"],overflow:k},topRight:{points:["br","tr"],overflow:k},bottomLeft:{points:["tl","bl"],overflow:k},bottomRight:{points:["tr","br"],overflow:k},rightTop:{points:["tr","tl"],overflow:k},rightBottom:{points:["br","bl"],overflow:k},leftTop:{points:["tl","tr"],overflow:k},leftBottom:{points:["bl","br"],overflow:k}};function en(t,e,a){if(e)return e;if(a)return a[t]||a.other}var mr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function pr(t){var e=t.prefixCls,a=t.visible,o=t.children,n=t.popup,l=t.popupStyle,i=t.popupClassName,u=t.popupOffset,c=t.disabled,s=t.mode,h=t.onVisibleChange,d=r.useContext(ee),p=d.getPopupContainer,R=d.rtl,g=d.subMenuOpenDelay,w=d.subMenuCloseDelay,S=d.builtinPlacements,b=d.triggerSubMenuAction,x=d.forceSubMenuRender,f=d.rootClassName,v=d.motion,I=d.defaultMotions,m=r.useState(!1),y=D(m,2),O=y[0],P=y[1],T=R?_(_({},fr),S):_(_({},vr),S),$=mr[s],N=en(s,v,I),G=r.useRef(N);s!=="inline"&&(G.current=N);var F=_(_({},G.current),{},{leavedClassName:"".concat(e,"-hidden"),removeOnLeave:!1,motionAppear:!0}),te=r.useRef();return r.useEffect(function(){return te.current=Oe(function(){P(a)}),function(){Oe.cancel(te.current)}},[a]),r.createElement(Hn,{prefixCls:e,popupClassName:he("".concat(e,"-popup"),K({},"".concat(e,"-rtl"),R),i,f),stretch:s==="horizontal"?"minWidth":null,getPopupContainer:p,builtinPlacements:T,popupPlacement:$,popupVisible:O,popup:n,popupStyle:l,popupAlign:u&&{offset:u},action:c?[]:[b],mouseEnterDelay:g,mouseLeaveDelay:w,onPopupVisibleChange:h,forceRender:x,popupMotion:F,fresh:!0},o)}function gr(t){var e=t.id,a=t.open,o=t.keyPath,n=t.children,l="inline",i=r.useContext(ee),u=i.prefixCls,c=i.forceSubMenuRender,s=i.motion,h=i.defaultMotions,d=i.mode,p=r.useRef(!1);p.current=d===l;var R=r.useState(!p.current),g=D(R,2),w=g[0],S=g[1],b=p.current?a:!1;r.useEffect(function(){p.current&&S(!1)},[d]);var x=_({},en(l,s,h));o.length>1&&(x.motionAppear=!1);var f=x.onVisibleChanged;return x.onVisibleChanged=function(v){return!p.current&&!v&&S(!0),f==null?void 0:f(v)},w?null:r.createElement(Le,{mode:l,locked:!p.current},r.createElement(Tn,j({visible:b},x,{forceRender:c,removeOnLeave:!1,leavedClassName:"".concat(u,"-hidden")}),function(v){var I=v.className,m=v.style;return r.createElement(bt,{id:e,className:I,style:m},n)}))}var hr=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","popupStyle","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],Cr=["active"],br=function(e){var a,o=e.style,n=e.className,l=e.title,i=e.eventKey;e.warnKey;var u=e.disabled,c=e.internalPopupClose,s=e.children,h=e.itemIcon,d=e.expandIcon,p=e.popupClassName,R=e.popupOffset,g=e.popupStyle,w=e.onClick,S=e.onMouseEnter,b=e.onMouseLeave,x=e.onTitleClick,f=e.onTitleMouseEnter,v=e.onTitleMouseLeave,I=q(e,hr),m=Wt(i),y=r.useContext(ee),O=y.prefixCls,P=y.mode,T=y.openKeys,$=y.disabled,N=y.overflowDisabled,G=y.activeKey,F=y.selectedKeys,te=y.itemIcon,ne=y.expandIcon,A=y.onItemClick,B=y.onOpenChange,Y=y.onActive,re=r.useContext(pt),oe=re._internalRenderSubMenuItem,ae=r.useContext(Yt),se=ae.isSubPathKey,ce=Te(),V="".concat(O,"-submenu"),U=$||u,Ce=r.useRef(),de=r.useRef(),ve=h??te,L=d??ne,X=T.includes(i),le=!N&&X,Fe=se(F,i),Ve=Jt(i,U,f,v),fe=Ve.active,Se=q(Ve,Cr),Ze=r.useState(!1),Re=D(Ze,2),xe=Re[0],Qe=Re[1],J=function(Q){U||Qe(Q)},et=function(Q){J(!0),S==null||S({key:i,domEvent:Q})},Ue=function(Q){J(!1),b==null||b({key:i,domEvent:Q})},Pe=r.useMemo(function(){return fe||(P!=="inline"?xe||se([G],i):!1)},[P,fe,G,xe,i,se]),tt=Zt(ce.length),be=function(Q){U||(x==null||x({key:i,domEvent:Q}),P==="inline"&&B(i,!X))},Ee=De(function(Z){w==null||w(Ye(Z)),A(Z)}),Ke=function(Q){P!=="inline"&&B(i,Q)},nt=function(){Y(i)},ye=m&&"".concat(m,"-popup"),W=r.createElement("div",j({role:"menuitem",style:tt,className:"".concat(V,"-title"),tabIndex:U?null:-1,ref:Ce,title:typeof l=="string"?l:null,"data-menu-id":N&&m?null:m,"aria-expanded":le,"aria-haspopup":!0,"aria-controls":ye,"aria-disabled":U,onClick:be,onFocus:nt},Se),l,r.createElement(Qt,{icon:P!=="horizontal"?L:void 0,props:_(_({},e),{},{isOpen:le,isSubMenu:!0})},r.createElement("i",{className:"".concat(V,"-arrow")}))),Ie=r.useRef(P);if(P!=="inline"&&ce.length>1?Ie.current="vertical":Ie.current=P,!N){var me=Ie.current;W=r.createElement(pr,{mode:me,prefixCls:V,visible:!c&&le&&P!=="inline",popupClassName:p,popupOffset:R,popupStyle:g,popup:r.createElement(Le,{mode:me==="horizontal"?"vertical":me},r.createElement(bt,{id:ye,ref:de},s)),disabled:U,onVisibleChange:Ke},W)}var we=r.createElement(Ae.Item,j({role:"none"},I,{component:"li",style:o,className:he(V,"".concat(V,"-").concat(P),n,(a={},K(a,"".concat(V,"-open"),le),K(a,"".concat(V,"-active"),Pe),K(a,"".concat(V,"-selected"),Fe),K(a,"".concat(V,"-disabled"),U),a)),onMouseEnter:et,onMouseLeave:Ue}),W,!N&&r.createElement(gr,{id:ye,open:le,keyPath:ce},s));return oe&&(we=oe(we,e,{selected:Fe,active:Pe,open:le,disabled:U})),r.createElement(Le,{onItemClick:Ee,mode:P==="horizontal"?"vertical":P,itemIcon:ve,expandIcon:L},we)};function It(t){var e=t.eventKey,a=t.children,o=Te(e),n=yt(a,o),l=Xe();r.useEffect(function(){if(l)return l.registerPath(e,o),function(){l.unregisterPath(e,o)}},[o]);var i;return l?i=n:i=r.createElement(br,t,n),r.createElement(Bt.Provider,{value:o},i)}var yr=["className","title","eventKey","children"],Ir=["children"],Mr=function(e){var a=e.className,o=e.title;e.eventKey;var n=e.children,l=q(e,yr),i=r.useContext(ee),u=i.prefixCls,c="".concat(u,"-item-group");return r.createElement("li",j({role:"presentation"},l,{onClick:function(h){return h.stopPropagation()},className:he(c,a)}),r.createElement("div",{role:"presentation",className:"".concat(c,"-title"),title:typeof o=="string"?o:void 0},o),r.createElement("ul",{role:"group",className:"".concat(c,"-list")},n))};function tn(t){var e=t.children,a=q(t,Ir),o=Te(a.eventKey),n=yt(e,o),l=Xe();return l?n:r.createElement(Mr,Ht(a,["warnKey"]),n)}function nn(t){var e=t.className,a=t.style,o=r.useContext(ee),n=o.prefixCls,l=Xe();return l?null:r.createElement("li",{role:"separator",className:he("".concat(n,"-item-divider"),e),style:a})}var Sr=["label","children","key","type"];function mt(t){return(t||[]).map(function(e,a){if(e&&Fn(e)==="object"){var o=e,n=o.label,l=o.children,i=o.key,u=o.type,c=q(o,Sr),s=i??"tmp-".concat(a);return l||u==="group"?u==="group"?r.createElement(tn,j({key:s},c,{title:n}),mt(l)):r.createElement(It,j({key:s},c,{title:n}),mt(l)):u==="divider"?r.createElement(nn,j({key:s},c)):r.createElement(Ct,j({key:s},c),n)}return null}).filter(function(e){return e})}function Rr(t,e,a){var o=t;return e&&(o=mt(e)),yt(o,a)}var xr=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem"],Me=[],Pr=r.forwardRef(function(t,e){var a,o,n=t,l=n.prefixCls,i=l===void 0?"rc-menu":l,u=n.rootClassName,c=n.style,s=n.className,h=n.tabIndex,d=h===void 0?0:h,p=n.items,R=n.children,g=n.direction,w=n.id,S=n.mode,b=S===void 0?"vertical":S,x=n.inlineCollapsed,f=n.disabled,v=n.disabledOverflow,I=n.subMenuOpenDelay,m=I===void 0?.1:I,y=n.subMenuCloseDelay,O=y===void 0?.1:y,P=n.forceSubMenuRender,T=n.defaultOpenKeys,$=n.openKeys,N=n.activeKey,G=n.defaultActiveFirst,F=n.selectable,te=F===void 0?!0:F,ne=n.multiple,A=ne===void 0?!1:ne,B=n.defaultSelectedKeys,Y=n.selectedKeys,re=n.onSelect,oe=n.onDeselect,ae=n.inlineIndent,se=ae===void 0?24:ae,ce=n.motion,V=n.defaultMotions,U=n.triggerSubMenuAction,Ce=U===void 0?"hover":U,de=n.builtinPlacements,ve=n.itemIcon,L=n.expandIcon,X=n.overflowedIndicator,le=X===void 0?"...":X,Fe=n.overflowedIndicatorPopupClassName,Ve=n.getPopupContainer,fe=n.onClick,Se=n.onOpenChange,Ze=n.onKeyDown;n.openAnimation,n.openTransitionName;var Re=n._internalRenderMenuItem,xe=n._internalRenderSubMenuItem,Qe=q(n,xr),J=r.useMemo(function(){return Rr(R,p,Me)},[R,p]),et=r.useState(!1),Ue=D(et,2),Pe=Ue[0],tt=Ue[1],be=r.useRef(),Ee=nr(w),Ke=g==="rtl",nt=We(T,{value:$,postState:function(C){return C||Me}}),ye=D(nt,2),W=ye[0],Ie=ye[1],me=function(C){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;function z(){Ie(C),Se==null||Se(C)}M?Vn.flushSync(z):z()},we=r.useState(W),Z=D(we,2),Q=Z[0],rn=Z[1],rt=r.useRef(!1),an=r.useMemo(function(){return(b==="inline"||b==="vertical")&&x?["vertical",x]:[b,!1]},[b,x]),Mt=D(an,2),ze=Mt[0],at=Mt[1],St=ze==="inline",on=r.useState(ze),Rt=D(on,2),ue=Rt[0],ln=Rt[1],un=r.useState(at),xt=D(un,2),sn=xt[0],cn=xt[1];r.useEffect(function(){ln(ze),cn(at),rt.current&&(St?Ie(Q):me(Me))},[ze,at]);var dn=r.useState(0),Pt=D(dn,2),He=Pt[0],vn=Pt[1],it=He>=J.length-1||ue!=="horizontal"||v;r.useEffect(function(){St&&rn(W)},[W]),r.useEffect(function(){return rt.current=!0,function(){rt.current=!1}},[]);var pe=er(),Et=pe.registerPath,Kt=pe.unregisterPath,fn=pe.refreshOverflowKeys,wt=pe.isSubPathKey,mn=pe.getKeyPath,Nt=pe.getKeys,pn=pe.getSubPathKeys,gn=r.useMemo(function(){return{registerPath:Et,unregisterPath:Kt}},[Et,Kt]),hn=r.useMemo(function(){return{isSubPathKey:wt}},[wt]);r.useEffect(function(){fn(it?Me:J.slice(He+1).map(function(E){return E.key}))},[He,it]);var Cn=We(N||G&&((a=J[0])===null||a===void 0?void 0:a.key),{value:N}),_t=D(Cn,2),Ne=_t[0],ot=_t[1],bn=De(function(E){ot(E)}),yn=De(function(){ot(void 0)});r.useImperativeHandle(e,function(){return{list:be.current,focus:function(C){var M,z=Nt(),H=vt(z,Ee),Ge=H.elements,lt=H.key2element,Nn=H.element2key,Dt=gt(be.current,Ge),Ot=Ne??(Dt[0]?Nn.get(Dt[0]):(M=J.find(function(_n){return!_n.props.disabled}))===null||M===void 0?void 0:M.key),_e=lt.get(Ot);if(Ot&&_e){var ut;_e==null||(ut=_e.focus)===null||ut===void 0||ut.call(_e,C)}}}});var In=We(B||[],{value:Y,postState:function(C){return Array.isArray(C)?C:C==null?Me:[C]}}),kt=D(In,2),je=kt[0],Mn=kt[1],Sn=function(C){if(te){var M=C.key,z=je.includes(M),H;A?z?H=je.filter(function(lt){return lt!==M}):H=[].concat(ge(je),[M]):H=[M],Mn(H);var Ge=_(_({},C),{},{selectedKeys:H});z?oe==null||oe(Ge):re==null||re(Ge)}!A&&W.length&&ue!=="inline"&&me(Me)},Rn=De(function(E){fe==null||fe(Ye(E)),Sn(E)}),$t=De(function(E,C){var M=W.filter(function(H){return H!==E});if(C)M.push(E);else if(ue!=="inline"){var z=pn(E);M=M.filter(function(H){return!z.has(H)})}Ut(W,M,!0)||me(M,!0)}),xn=function(C,M){var z=M??!W.includes(C);$t(C,z)},Pn=Jn(ue,Ne,Ke,Ee,be,Nt,mn,ot,xn,Ze);r.useEffect(function(){tt(!0)},[]);var En=r.useMemo(function(){return{_internalRenderMenuItem:Re,_internalRenderSubMenuItem:xe}},[Re,xe]),Kn=ue!=="horizontal"||v?J:J.map(function(E,C){return r.createElement(Le,{key:E.key,overflowDisabled:C>He},E)}),wn=r.createElement(Ae,j({id:w,ref:be,prefixCls:"".concat(i,"-overflow"),component:"ul",itemComponent:Ct,className:he(i,"".concat(i,"-root"),"".concat(i,"-").concat(ue),s,(o={},K(o,"".concat(i,"-inline-collapsed"),sn),K(o,"".concat(i,"-rtl"),Ke),o),u),dir:g,style:c,role:"menu",tabIndex:d,data:Kn,renderRawItem:function(C){return C},renderRawRest:function(C){var M=C.length,z=M?J.slice(-M):null;return r.createElement(It,{eventKey:ft,title:le,disabled:it,internalPopupClose:M===0,popupClassName:Fe},z)},maxCount:ue!=="horizontal"||v?Ae.INVALIDATE:Ae.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(C){vn(C)},onKeyDown:Pn},Qe));return r.createElement(pt.Provider,{value:En},r.createElement(jt.Provider,{value:Ee},r.createElement(Le,{prefixCls:i,rootClassName:u,mode:ue,openKeys:W,rtl:Ke,disabled:f,motion:Pe?ce:null,defaultMotions:Pe?V:null,activeKey:Ne,onActive:bn,onInactive:yn,selectedKeys:je,inlineIndent:se,subMenuOpenDelay:m,subMenuCloseDelay:O,forceSubMenuRender:P,builtinPlacements:de,triggerSubMenuAction:Ce,getPopupContainer:Ve,itemIcon:ve,expandIcon:L,onItemClick:Rn,onOpenChange:$t},r.createElement(Yt.Provider,{value:hn},wn),r.createElement("div",{style:{display:"none"},"aria-hidden":!0},r.createElement(qt.Provider,{value:gn},J)))))}),Je=Pr;Je.Item=Ct;Je.SubMenu=It;Je.ItemGroup=tn;Je.Divider=nn;export{nn as D,Je as E,Ct as M,It as S,tn as a,Te as u};