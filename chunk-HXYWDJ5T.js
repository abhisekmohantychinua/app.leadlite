import{$ as en,Aa as Et,B as Xt,Ba as S,Ca as cn,J as Ft,K as We,L as qe,M as Qe,N as It,O as xt,P as Ze,Q as St,R as Ue,S as Ke,T as Ge,U as Ye,V as Xe,W as Je,X as Q,Y as tn,Z as ye,aa as Pt,ba as V,c as ze,ca as Bt,d as vt,e as Kt,ea as ve,f as _t,g as q,ga as nn,h as J,ha as st,i as Ne,ia as _e,ka as on,la as rn,m as Ve,ma as sn,p as Re,pa as xe,q as $e,qa as Ce,ra as Ct,s as be,t as je,ta as an,ua as At,va as ln,w as ge,wa as dn,x as Gt,xa as kt,ya as F,z as Yt}from"./chunk-CRXDJZFB.js";import{$,$a as Fe,Ab as et,Bb as c,Cb as ut,Db as nt,Eb as I,Fb as ce,Gb as _,Hb as x,Ia as ae,Ib as ue,Ja as Me,Jb as Be,Kb as yt,Lb as Ae,M as Ee,Ma as d,Mb as qt,Nb as pt,O as re,Ob as h,Pb as it,Q as Oe,Qb as ot,R as D,Ra as De,S as A,Sa as ct,Sb as C,Tb as Qt,Ua as Le,Ub as rt,Vb as Zt,W as p,Xb as pe,Ya as E,Yb as me,Za as H,Zb as Ut,_a as R,a as M,aa as j,ab as g,ba as wt,bb as m,bc as W,ca as se,cc as he,da as Rt,db as tt,ea as $t,eb as Wt,fc as N,gc as fe,hc as He,i as ke,ia as dt,ka as Dt,la as f,lb as T,lc as b,mc as X,na as jt,ob as a,pb as y,qb as v,ra as Tt,rb as B,sb as le,tb as de,ub as Lt,vb as G,wb as Y,xb as z,yb as gt,zb as Pe}from"./chunk-TBMMB432.js";function Ot(...e){if(e){let s=[];for(let t=0;t<e.length;t++){let n=e[t];if(!n)continue;let i=typeof n;if(i==="string"||i==="number")s.push(n);else if(i==="object"){let o=Array.isArray(n)?[Ot(...n)]:Object.entries(n).map(([r,l])=>l?r:void 0);s=o.length?s.concat(o.filter(r=>!!r)):s}}return s.join(" ").trim()}}var Jt={};function at(e="pui_id_"){return Object.hasOwn(Jt,e)||(Jt[e]=0),Jt[e]++,`${e}${Jt[e]}`}var un=(()=>{class e extends S{name="common";static \u0275fac=(()=>{let t;return function(i){return(t||(t=f(e)))(i||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),w=(()=>{class e{document=p(Rt);platformId=p(Tt);el=p(jt);injector=p(se);cd=p(He);renderer=p(De);config=p(cn);baseComponentStyle=p(un);baseStyle=p(S);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=at("pc");themeChangeListeners=[];_getHostInstance(t){if(t)return t?this.hostName?t.name===this.hostName?t:this._getHostInstance(t.parentInstance):t.parentInstance:void 0}_getOptionValue(t,n="",i={}){return Qe(t,n,i)}ngOnInit(){this.document&&(this._loadCoreStyles(),this._loadStyles())}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(t){if(this.document&&!Ne(this.platformId)){let{dt:n}=t;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(t=>xe.off("theme:change",t))}_loadStyles(){let t=()=>{Et.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),Et.setLoadedStyleName("base")),this._loadThemeStyles()};t(),this._themeChangeListener(()=>t())}_loadCoreStyles(){!Et.isStyleNameLoaded("base")&&this.componentStyle?.name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),Et.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!Ct.isStyleNameLoaded("common")){let{primitive:t,semantic:n,global:i,style:o}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,M({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,M({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(i?.css,M({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(M({name:"global-style"},this.styleOptions),o),Ct.setLoadedStyleName("common")}if(!Ct.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:t,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(t,M({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(M({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),Ct.setLoadedStyleName(this.componentStyle?.name)}if(!Ct.isStyleNameLoaded("layer-order")){let t=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,M({name:"layer-order",first:!0},this.styleOptions)),Ct.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(t){let{css:n}=this.componentStyle?.getPresetTheme?.(t,`[${this.attrSelector}]`)||{},i=this.componentStyle?.load(n,M({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=i?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(t=()=>{}){Et.clearLoadedStyleNames(),xe.on("theme:change",t),this.themeChangeListeners.push(t)}cx(t,n={}){return Ot(this._getOptionValue(this.$style?.classes,t,M({instance:this},n)))}sx(t="",n=!0,i={}){if(n)return this._getOptionValue(this.$style?.inlineStyles,t,M({instance:this},i))}get parent(){return this.parentInstance}get $style(){return this.parent?this.parent.componentStyle:this.componentStyle}cn=Ot;static \u0275fac=function(n){return new(n||e)};static \u0275dir=R({type:e,inputs:{dt:"dt"},features:[C([un,S]),Dt]})}return e})();var Ht=(()=>{class e{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,n){t&&n&&(t.classList?t.classList.add(n):t.className+=" "+n)}static addMultipleClasses(t,n){if(t&&n)if(t.classList){let i=n.trim().split(" ");for(let o=0;o<i.length;o++)t.classList.add(i[o])}else{let i=n.split(" ");for(let o=0;o<i.length;o++)t.className+=" "+i[o]}}static removeClass(t,n){t&&n&&(t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,n){t&&n&&[n].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(o=>this.removeClass(t,o)))}static hasClass(t,n){return t&&n?t.classList?t.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(n){return n!==t})}static find(t,n){return Array.from(t.querySelectorAll(n))}static findSingle(t,n){return this.isElement(t)?t.querySelector(n):null}static index(t){let n=t.parentNode.childNodes,i=0;for(var o=0;o<n.length;o++){if(n[o]==t)return i;n[o].nodeType==1&&i++}return-1}static indexWithinGroup(t,n){let i=t.parentNode?t.parentNode.childNodes:[],o=0;for(var r=0;r<i.length;r++){if(i[r]==t)return o;i[r].attributes&&i[r].attributes[n]&&i[r].nodeType==1&&o++}return-1}static appendOverlay(t,n,i="self"){i!=="self"&&t&&n&&this.appendChild(t,n)}static alignOverlay(t,n,i="self",o=!0){t&&n&&(o&&(t.style.minWidth=`${e.getOuterWidth(n)}px`),i==="self"?this.relativePosition(t,n):this.absolutePosition(t,n))}static relativePosition(t,n,i=!0){let o=bt=>{if(bt)return getComputedStyle(bt).getPropertyValue("position")==="relative"?bt:o(bt.parentElement)},r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),l=n.offsetHeight,u=n.getBoundingClientRect(),O=this.getWindowScrollTop(),k=this.getWindowScrollLeft(),L=this.getViewport(),P=o(t)?.getBoundingClientRect()||{top:-1*O,left:-1*k},K,lt,Vt="top";u.top+l+r.height>L.height?(K=u.top-P.top-r.height,Vt="bottom",u.top+K<0&&(K=-1*u.top)):(K=l+u.top-P.top,Vt="top");let Se=u.left+r.width-L.width,An=u.left-P.left;if(r.width>L.width?lt=(u.left-P.left)*-1:Se>0?lt=An-Se:lt=u.left-P.left,t.style.top=K+"px",t.style.left=lt+"px",t.style.transformOrigin=Vt,i){let bt=Ke(/-anchor-gutter$/)?.value;t.style.marginTop=Vt==="bottom"?`calc(${bt??"2px"} * -1)`:bt??""}}static absolutePosition(t,n,i=!0){let o=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),r=o.height,l=o.width,u=n.offsetHeight,O=n.offsetWidth,k=n.getBoundingClientRect(),L=this.getWindowScrollTop(),U=this.getWindowScrollLeft(),P=this.getViewport(),K,lt;k.top+u+r>P.height?(K=k.top+L-r,t.style.transformOrigin="bottom",K<0&&(K=L)):(K=u+k.top+L,t.style.transformOrigin="top"),k.left+l>P.width?lt=Math.max(0,k.left+U+O-l):lt=k.left+U,t.style.top=K+"px",t.style.left=lt+"px",i&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,n=[]){return t.parentNode===null?n:this.getParents(t.parentNode,n.concat([t.parentNode]))}static getScrollableParents(t){let n=[];if(t){let i=this.getParents(t),o=/(auto|scroll)/,r=l=>{let u=window.getComputedStyle(l,null);return o.test(u.getPropertyValue("overflow"))||o.test(u.getPropertyValue("overflowX"))||o.test(u.getPropertyValue("overflowY"))};for(let l of i){let u=l.nodeType===1&&l.dataset.scrollselectors;if(u){let O=u.split(",");for(let k of O){let L=this.findSingle(l,k);L&&r(L)&&n.push(L)}}l.nodeType!==9&&r(l)&&n.push(l)}}return n}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementDimensions(t){let n={};return t.style.visibility="hidden",t.style.display="block",n.width=t.offsetWidth,n.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",n}static scrollInView(t,n){let i=getComputedStyle(t).getPropertyValue("borderTopWidth"),o=i?parseFloat(i):0,r=getComputedStyle(t).getPropertyValue("paddingTop"),l=r?parseFloat(r):0,u=t.getBoundingClientRect(),k=n.getBoundingClientRect().top+document.body.scrollTop-(u.top+document.body.scrollTop)-o-l,L=t.scrollTop,U=t.clientHeight,P=this.getOuterHeight(n);k<0?t.scrollTop=L+k:k+P>U&&(t.scrollTop=L+k-U+P)}static fadeIn(t,n){t.style.opacity=0;let i=+new Date,o=0,r=function(){o=+t.style.opacity.replace(",",".")+(new Date().getTime()-i)/n,t.style.opacity=o,i=+new Date,+o<1&&(window.requestAnimationFrame?window.requestAnimationFrame(r):setTimeout(r,16))};r()}static fadeOut(t,n){var i=1,o=50,r=n,l=o/r;let u=setInterval(()=>{i=i-l,i<=0&&(i=0,clearInterval(u)),t.style.opacity=i},o)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,n){var i=Element.prototype,o=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(r){return[].indexOf.call(document.querySelectorAll(r),this)!==-1};return o.call(t,n)}static getOuterWidth(t,n){let i=t.offsetWidth;if(n){let o=getComputedStyle(t);i+=parseFloat(o.marginLeft)+parseFloat(o.marginRight)}return i}static getHorizontalPadding(t){let n=getComputedStyle(t);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(t){let n=getComputedStyle(t);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(t){let n=t.offsetWidth,i=getComputedStyle(t);return n+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static width(t){let n=t.offsetWidth,i=getComputedStyle(t);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static getInnerHeight(t){let n=t.offsetHeight,i=getComputedStyle(t);return n+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),n}static getOuterHeight(t,n){let i=t.offsetHeight;if(n){let o=getComputedStyle(t);i+=parseFloat(o.marginTop)+parseFloat(o.marginBottom)}return i}static getHeight(t){let n=t.offsetHeight,i=getComputedStyle(t);return n-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),n}static getWidth(t){let n=t.offsetWidth,i=getComputedStyle(t);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),n}static getViewport(){let t=window,n=document,i=n.documentElement,o=n.getElementsByTagName("body")[0],r=t.innerWidth||i.clientWidth||o.clientWidth,l=t.innerHeight||i.clientHeight||o.clientHeight;return{width:r,height:l}}static getOffset(t){var n=t.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,n){let i=t.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(n,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,n=t.indexOf("MSIE ");if(n>0)return!0;var i=t.indexOf("Trident/");if(i>0){var o=t.indexOf("rv:");return!0}var r=t.indexOf("Edge/");return r>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,n){if(this.isElement(n))n.appendChild(t);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(t);else throw"Cannot append "+n+" to "+t}static removeChild(t,n){if(this.isElement(n))n.removeChild(t);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+n}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode?.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let n=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let i=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let n=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(t,n,i){t[n].apply(t,i)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,n){t&&document.activeElement!==t&&t.focus(n)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,n=""){let i=this.find(t,this.getFocusableSelectorString(n)),o=[];for(let r of i){let l=getComputedStyle(r);this.isVisible(r)&&l.display!="none"&&l.visibility!="hidden"&&o.push(r)}return o}static getFocusableElement(t,n=""){let i=this.findSingle(t,this.getFocusableSelectorString(n));if(i){let o=getComputedStyle(i);if(this.isVisible(i)&&o.display!="none"&&o.visibility!="hidden")return i}return null}static getFirstFocusableElement(t,n=""){let i=this.getFocusableElements(t,n);return i.length>0?i[0]:null}static getLastFocusableElement(t,n){let i=this.getFocusableElements(t,n);return i.length>0?i[i.length-1]:null}static getNextFocusableElement(t,n=!1){let i=e.getFocusableElements(t),o=0;if(i&&i.length>0){let r=i.indexOf(i[0].ownerDocument.activeElement);n?r==-1||r===0?o=i.length-1:o=r-1:r!=-1&&r!==i.length-1&&(o=r+1)}return i[o]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,n){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement?.parentElement;default:let i=typeof t;if(i==="string")return document.querySelector(t);if(i==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let r=(l=>!!(l&&l.constructor&&l.call&&l.apply))(t)?t():t;return r&&r.nodeType===9||this.isExist(r)?r:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,n){if(t){let i=t.getAttribute(n);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,n={},...i){if(t){let o=document.createElement(t);return this.setAttributes(o,n),o.append(...i),o}}static setAttribute(t,n="",i){this.isElement(t)&&i!==null&&i!==void 0&&t.setAttribute(n,i)}static setAttributes(t,n={}){if(this.isElement(t)){let i=(o,r)=>{let l=t?.$attrs?.[o]?[t?.$attrs?.[o]]:[];return[r].flat().reduce((u,O)=>{if(O!=null){let k=typeof O;if(k==="string"||k==="number")u.push(O);else if(k==="object"){let L=Array.isArray(O)?i(o,O):Object.entries(O).map(([U,P])=>o==="style"&&(P||P===0)?`${U.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${P}`:P?U:void 0);u=L.length?u.concat(L.filter(U=>!!U)):u}}return u},l)};Object.entries(n).forEach(([o,r])=>{if(r!=null){let l=o.match(/^on(.+)/);l?t.addEventListener(l[1].toLowerCase(),r):o==="pBind"?this.setAttributes(t,r):(r=o==="class"?[...new Set(i("class",r))].join(" ").trim():o==="style"?i("style",r).join(";").trim():r,(t.$attrs=t.$attrs||{})&&(t.$attrs[o]=r),t.setAttribute(o,r))}})}}static isFocusableElement(t,n=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return e})();function Ko(){Ze({variableName:Ce("scrollbar.width").name})}function Go(){Ue({variableName:Ce("scrollbar.width").name})}var Mt=class{element;listener;scrollableParents;constructor(s,t=()=>{}){this.element=s,this.listener=t}bindScrollListener(){this.scrollableParents=Ht.getScrollableParents(this.element);for(let s=0;s<this.scrollableParents.length;s++)this.scrollableParents[s].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let s=0;s<this.scrollableParents.length;s++)this.scrollableParents[s].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var pn=(()=>{class e extends w{autofocus=!1;focused=!1;platformId=p(Tt);document=p(Rt);host=p(jt);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){J(this.platformId)&&this.autofocus&&setTimeout(()=>{let t=Ht.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=f(e)))(i||e)}})();static \u0275dir=R({type:e,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[g]})}return e})(),rr=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=H({type:e});static \u0275inj=A({})}return e})();var mn=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var Hn=`
    ${mn}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,zn={root:({instance:e})=>["p-badge p-component",{"p-badge-circle":We(e.value())&&String(e.value()).length===1,"p-badge-dot":Ft(e.value()),"p-badge-sm":e.size()==="small"||e.badgeSize()==="small","p-badge-lg":e.size()==="large"||e.badgeSize()==="large","p-badge-xl":e.size()==="xlarge"||e.badgeSize()==="xlarge","p-badge-info":e.severity()==="info","p-badge-success":e.severity()==="success","p-badge-warn":e.severity()==="warn","p-badge-danger":e.severity()==="danger","p-badge-secondary":e.severity()==="secondary","p-badge-contrast":e.severity()==="contrast"}]},hn=(()=>{class e extends S{name="badge";theme=Hn;classes=zn;static \u0275fac=(()=>{let t;return function(i){return(t||(t=f(e)))(i||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})();var zt=(()=>{class e extends w{styleClass=N();badgeSize=N();size=N();severity=N();value=N();badgeDisabled=N(!1,{transform:b});_componentStyle=p(hn);static \u0275fac=(()=>{let t;return function(i){return(t||(t=f(e)))(i||e)}})();static \u0275cmp=E({type:e,selectors:[["p-badge"]],hostVars:4,hostBindings:function(n,i){n&2&&(h(i.cn(i.cx("root"),i.styleClass())),Ae("display",i.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[C([hn]),g],decls:1,vars:1,template:function(n,i){n&1&&it(0),n&2&&ot(i.value())},dependencies:[q,F],encapsulation:2,changeDetection:0})}return e})(),Nt=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=H({type:e});static \u0275inj=A({imports:[zt,F,F]})}return e})();var Nn=["*"],Vn={root:"p-fluid"},bn=(()=>{class e extends S{name="fluid";classes=Vn;static \u0275fac=(()=>{let t;return function(i){return(t||(t=f(e)))(i||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})();var we=(()=>{class e extends w{_componentStyle=p(bn);static \u0275fac=(()=>{let t;return function(i){return(t||(t=f(e)))(i||e)}})();static \u0275cmp=E({type:e,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,i){n&2&&h(i.cx("root"))},features:[C([bn]),g],ngContentSelectors:Nn,decls:1,vars:0,template:function(n,i){n&1&&(ut(),nt(0))},dependencies:[q],encapsulation:2,changeDetection:0})}return e})();var Rn=["*"],$n=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,gn=(()=>{class e extends S{name="baseicon";css=$n;static \u0275fac=(()=>{let t;return function(i){return(t||(t=f(e)))(i||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var te=(()=>{class e extends w{spin=!1;_componentStyle=p(gn);getClassNames(){return Ot("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=f(e)))(i||e)}})();static \u0275cmp=E({type:e,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,i){n&2&&h(i.getClassNames())},inputs:{spin:[2,"spin","spin",b]},features:[C([gn]),g],ngContentSelectors:Rn,decls:1,vars:0,template:function(n,i){n&1&&(ut(),nt(0))},encapsulation:2,changeDetection:0})}return e})();var jn=["data-p-icon","spinner"],yn=(()=>{class e extends te{pathId;ngOnInit(){super.ngOnInit(),this.pathId="url(#"+at()+")"}static \u0275fac=(()=>{let t;return function(i){return(t||(t=f(e)))(i||e)}})();static \u0275cmp=E({type:e,selectors:[["","data-p-icon","spinner"]],features:[g],attrs:jn,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(wt(),le(0,"g"),Lt(1,"path",0),de(),le(2,"defs")(3,"clipPath",1),Lt(4,"rect",2),de()()),n&2&&(T("clip-path",i.pathId),d(3),Pe("id",i.pathId))},encapsulation:2})}return e})();var Wn=["data-p-icon","times"],Qr=(()=>{class e extends te{static \u0275fac=(()=>{let t;return function(i){return(t||(t=f(e)))(i||e)}})();static \u0275cmp=E({type:e,selectors:[["","data-p-icon","times"]],features:[g],attrs:Wn,decls:1,vars:0,consts:[["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(n,i){n&1&&(wt(),Lt(0,"path",0))},encapsulation:2})}return e})();var vn=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var qn=`
    ${vn}
    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,Qn={root:"p-ink"},_n=(()=>{class e extends S{name="ripple";theme=qn;classes=Qn;static \u0275fac=(()=>{let t;return function(i){return(t||(t=f(e)))(i||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})();var ee=(()=>{class e extends w{zone=p(Wt);_componentStyle=p(_n);animationListener;mouseDownListener;timeout;constructor(){super(),he(()=>{J(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(t){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(St(n,"p-ink-active"),!ve(n)&&!_e(n)){let l=Math.max(Q(this.el.nativeElement),st(this.el.nativeElement));n.style.height=l+"px",n.style.width=l+"px"}let i=nn(this.el.nativeElement),o=t.pageX-i.left+this.document.body.scrollTop-_e(n)/2,r=t.pageY-i.top+this.document.body.scrollLeft-ve(n)/2;this.renderer.setStyle(n,"top",r+"px"),this.renderer.setStyle(n,"left",o+"px"),xt(n,"p-ink-active"),this.timeout=setTimeout(()=>{let l=this.getInk();l&&St(l,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let n=0;n<t.length;n++)if(typeof t[n].className=="string"&&t[n].className.indexOf("p-ink")!==-1)return t[n];return null}resetInk(){let t=this.getInk();t&&St(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),St(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,rn(t))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||e)};static \u0275dir=R({type:e,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[C([_n]),g]})}return e})();var xn=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var Zn=["content"],Un=["loadingicon"],Kn=["icon"],Gn=["*"],In=e=>({class:e});function Yn(e,s){e&1&&z(0)}function Xn(e,s){if(e&1&&B(0,"span"),e&2){let t=c(3);h(t.cn(t.cx("loadingIcon"),"pi-spin",t.loadingIcon)),T("aria-hidden",!0)("data-pc-section","loadingicon")}}function Jn(e,s){if(e&1&&(wt(),B(0,"svg",7)),e&2){let t=c(3);h(t.cn(t.cx("loadingIcon"),t.spinnerIconClass())),a("spin",!0),T("aria-hidden",!0)("data-pc-section","loadingicon")}}function ti(e,s){if(e&1&&(G(0),m(1,Xn,1,4,"span",3)(2,Jn,1,5,"svg",6),Y()),e&2){let t=c(2);d(),a("ngIf",t.loadingIcon),d(),a("ngIf",!t.loadingIcon)}}function ei(e,s){}function ni(e,s){if(e&1&&m(0,ei,0,0,"ng-template",8),e&2){let t=c(2);a("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function ii(e,s){if(e&1&&(G(0),m(1,ti,3,2,"ng-container",2)(2,ni,1,1,null,5),Y()),e&2){let t=c();d(),a("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),d(),a("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",rt(3,In,t.cx("loadingIcon")))}}function oi(e,s){if(e&1&&B(0,"span"),e&2){let t=c(2);h(t.cn("icon",t.iconClass())),T("data-pc-section","icon")}}function ri(e,s){}function si(e,s){if(e&1&&m(0,ri,0,0,"ng-template",8),e&2){let t=c(2);a("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function ai(e,s){if(e&1&&(G(0),m(1,oi,1,3,"span",3)(2,si,1,1,null,5),Y()),e&2){let t=c();d(),a("ngIf",t.icon&&!t.iconTemplate&&!t._iconTemplate),d(),a("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",rt(3,In,t.cx("icon")))}}function li(e,s){if(e&1&&(y(0,"span"),it(1),v()),e&2){let t=c();h(t.cx("label")),T("aria-hidden",t.icon&&!t.label)("data-pc-section","label"),d(),ot(t.label)}}function di(e,s){if(e&1&&B(0,"p-badge",9),e&2){let t=c();a("value",t.badge)("severity",t.badgeSeverity)}}var ci={root:({instance:e})=>["p-button p-component",{"p-button-icon-only":(e.icon||e.buttonProps?.icon||e.iconTemplate||e._iconTemplate||e.loadingIcon||e.loadingIconTemplate||e._loadingIconTemplate)&&!e.label&&!e.buttonProps?.label,"p-button-vertical":(e.iconPos==="top"||e.iconPos==="bottom")&&e.label,"p-button-loading":e.loading||e.buttonProps?.loading,"p-button-link":e.link||e.buttonProps?.link,[`p-button-${e.severity||e.buttonProps?.severity}`]:e.severity||e.buttonProps?.severity,"p-button-raised":e.raised||e.buttonProps?.raised,"p-button-rounded":e.rounded||e.buttonProps?.rounded,"p-button-text":e.text||e.variant==="text"||e.buttonProps?.text||e.buttonProps?.variant==="text","p-button-outlined":e.outlined||e.variant==="outlined"||e.buttonProps?.outlined||e.buttonProps?.variant==="outlined","p-button-sm":e.size==="small"||e.buttonProps?.size==="small","p-button-lg":e.size==="large"||e.buttonProps?.size==="large","p-button-plain":e.plain||e.buttonProps?.plain,"p-button-fluid":e.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos||e.buttonProps?.iconPos}`]:e.label||e.buttonProps?.label,"p-button-icon-left":(e.iconPos==="left"||e.buttonProps?.iconPos==="left")&&e.label||e.buttonProps?.label,"p-button-icon-right":(e.iconPos==="right"||e.buttonProps?.iconPos==="right")&&e.label||e.buttonProps?.label},e.icon,e.buttonProps?.icon],spinnerIcon:({instance:e})=>Object.entries(e.iconClass()).filter(([,s])=>!!s).reduce((s,[t])=>s+` ${t}`,"p-button-loading-icon"),label:"p-button-label"},ht=(()=>{class e extends S{name="button";theme=xn;classes=ci;static \u0275fac=(()=>{let t;return function(i){return(t||(t=f(e)))(i||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})();var mt={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},Cn=(()=>{class e extends w{_componentStyle=p(ht);static \u0275fac=(()=>{let t;return function(i){return(t||(t=f(e)))(i||e)}})();static \u0275dir=R({type:e,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(n,i){n&2&&qt("p-button-label",!0)},features:[C([ht]),g]})}return e})(),wn=(()=>{class e extends w{_componentStyle=p(ht);static \u0275fac=(()=>{let t;return function(i){return(t||(t=f(e)))(i||e)}})();static \u0275dir=R({type:e,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(n,i){n&2&&qt("p-button-icon",!0)},features:[C([ht]),g]})}return e})(),Es=(()=>{class e extends w{iconPos="left";loadingIcon;set label(t){this._label=t,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}set icon(t){this._icon=t,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(t){this._loading=t,this.initialized&&(this.updateIcon(),this.setStyleClass())}_buttonProps;iconSignal=fe(wn);labelSignal=fe(Cn);isIconOnly=W(()=>!!(!this.labelSignal()&&this.iconSignal()));set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([n,i])=>this[`_${n}`]!==i&&(this[`_${n}`]=i))}_severity;get severity(){return this._severity}set severity(t){this._severity=t,this.initialized&&this.setStyleClass()}raised=!1;rounded=!1;text=!1;outlined=!1;size=null;plain=!1;fluid=N(void 0,{transform:b});_label;_icon;_loading=!1;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(mt);pcFluid=p(we,{optional:!0,host:!0,skipSelf:!0});isTextButton=W(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}get icon(){return this._icon}get buttonProps(){return this._buttonProps}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;_componentStyle=p(ht);ngAfterViewInit(){super.ngAfterViewInit(),xt(this.htmlElement,this.getStyleClass().join(" ")),this.createIcon(),this.createLabel(),this.initialized=!0}getStyleClass(){let t=[mt.button,mt.component];return this.icon&&!this.label&&Ft(this.htmlElement.textContent)&&t.push(mt.iconOnly),this.loading&&(t.push(mt.disabled,mt.loading),!this.icon&&this.label&&t.push(mt.labelOnly),this.icon&&!this.label&&!Ft(this.htmlElement.textContent)&&t.push(mt.iconOnly)),this.text&&t.push("p-button-text"),this.severity&&t.push(`p-button-${this.severity}`),this.plain&&t.push("p-button-plain"),this.raised&&t.push("p-button-raised"),this.size&&t.push(`p-button-${this.size}`),this.outlined&&t.push("p-button-outlined"),this.rounded&&t.push("p-button-rounded"),this.size==="small"&&t.push("p-button-sm"),this.size==="large"&&t.push("p-button-lg"),this.hasFluid&&t.push("p-button-fluid"),t}get hasFluid(){return this.fluid()??!!this.pcFluid}setStyleClass(){let t=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...t)}removeExistingSeverityClass(){let t=["success","info","warn","danger","help","primary","secondary","contrast"],n=this.htmlElement.classList.value.split(" ").find(i=>t.some(o=>i===`p-button-${o}`));n&&this.htmlElement.classList.remove(n)}createLabel(){if(!V(this.htmlElement,".p-button-label")&&this.label){let n=this.document.createElement("span");this.icon&&!this.label&&n.setAttribute("aria-hidden","true"),n.className="p-button-label",n.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(n)}}createIcon(){if(!V(this.htmlElement,".p-button-icon")&&(this.icon||this.loading)){let n=this.document.createElement("span");n.className="p-button-icon",n.setAttribute("aria-hidden","true");let i=this.label?"p-button-icon-"+this.iconPos:null;i&&xt(n,i);let o=this.getIconClass();o&&xt(n,o),!this.loadingIcon&&this.loading&&(n.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(n,this.htmlElement.firstChild)}}updateLabel(){let t=V(this.htmlElement,".p-button-label");if(!this.label){t&&this.htmlElement.removeChild(t);return}t?t.textContent=this.label:this.createLabel()}updateIcon(){let t=V(this.htmlElement,".p-button-icon"),n=V(this.htmlElement,".p-button-label");this.loading&&!this.loadingIcon&&t?t.innerHTML=this.spinnerIcon:t?.innerHTML&&(t.innerHTML=""),t?this.iconPos?t.className="p-button-icon "+(n?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():t.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}ngOnDestroy(){this.initialized=!1,super.ngOnDestroy()}static \u0275fac=(()=>{let t;return function(i){return(t||(t=f(e)))(i||e)}})();static \u0275dir=R({type:e,selectors:[["","pButton",""]],contentQueries:function(n,i,o){n&1&&(ue(o,i.iconSignal,wn,5),ue(o,i.labelSignal,Cn,5)),n&2&&Be(2)},hostVars:4,hostBindings:function(n,i){n&2&&qt("p-button-icon-only",i.isIconOnly())("p-button-text",i.isTextButton())},inputs:{iconPos:"iconPos",loadingIcon:"loadingIcon",loading:"loading",severity:"severity",raised:[2,"raised","raised",b],rounded:[2,"rounded","rounded",b],text:[2,"text","text",b],outlined:[2,"outlined","outlined",b],size:"size",plain:[2,"plain","plain",b],fluid:[1,"fluid"],label:"label",icon:"icon",buttonProps:"buttonProps"},features:[C([ht]),g]})}return e})(),Te=(()=>{class e extends w{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;buttonProps;autofocus;fluid=N(void 0,{transform:b});onClick=new tt;onFocus=new tt;onBlur=new tt;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=p(we,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}_componentStyle=p(ht);_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"loadingicon":this._loadingIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,t])=>!!t).reduce((t,[n])=>t+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,[this.icon]:!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}static \u0275fac=(()=>{let t;return function(i){return(t||(t=f(e)))(i||e)}})();static \u0275cmp=E({type:e,selectors:[["p-button"]],contentQueries:function(n,i,o){if(n&1&&(I(o,Zn,5),I(o,Un,5),I(o,Kn,5),I(o,kt,4)),n&2){let r;_(r=x())&&(i.contentTemplate=r.first),_(r=x())&&(i.loadingIconTemplate=r.first),_(r=x())&&(i.iconTemplate=r.first),_(r=x())&&(i.templates=r)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",b],loading:[2,"loading","loading",b],loadingIcon:"loadingIcon",raised:[2,"raised","raised",b],rounded:[2,"rounded","rounded",b],text:[2,"text","text",b],plain:[2,"plain","plain",b],severity:"severity",outlined:[2,"outlined","outlined",b],link:[2,"link","link",b],tabindex:[2,"tabindex","tabindex",X],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",buttonProps:"buttonProps",autofocus:[2,"autofocus","autofocus",b],fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[C([ht]),g],ngContentSelectors:Gn,decls:7,vars:15,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","spin",4,"ngIf"],["data-p-icon","spinner",3,"spin"],[3,"ngIf"],[3,"value","severity"]],template:function(n,i){n&1&&(ut(),y(0,"button",0),et("click",function(r){return i.onClick.emit(r)})("focus",function(r){return i.onFocus.emit(r)})("blur",function(r){return i.onBlur.emit(r)}),nt(1),m(2,Yn,1,0,"ng-container",1)(3,ii,3,5,"ng-container",2)(4,ai,3,5,"ng-container",2)(5,li,2,5,"span",3)(6,di,1,2,"p-badge",4),v()),n&2&&(h(i.cn(i.cx("root"),i.styleClass,i.buttonProps==null?null:i.buttonProps.styleClass)),a("ngStyle",i.style||(i.buttonProps==null?null:i.buttonProps.style))("disabled",i.disabled||i.loading||(i.buttonProps==null?null:i.buttonProps.disabled))("pAutoFocus",i.autofocus||(i.buttonProps==null?null:i.buttonProps.autofocus)),T("type",i.type||(i.buttonProps==null?null:i.buttonProps.type))("aria-label",i.ariaLabel||(i.buttonProps==null?null:i.buttonProps.ariaLabel))("data-pc-name","button")("data-pc-section","root")("tabindex",i.tabindex||(i.buttonProps==null?null:i.buttonProps.tabindex)),d(2),a("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),d(),a("ngIf",i.loading),d(),a("ngIf",!i.loading),d(),a("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.label),d(),a("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.badge))},dependencies:[q,vt,_t,Kt,ee,pn,yn,Nt,zt,F],encapsulation:2,changeDetection:0})}return e})(),Sn=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=H({type:e});static \u0275inj=A({imports:[q,Te,F,F]})}return e})();function $s(e){e||(e=p($t));let s=new ke(t=>{if(e.destroyed){t.next();return}return e.onDestroy(t.next.bind(t))});return t=>t.pipe(Ee(s))}function js(e,s){let n=!s?.manualCleanup?s?.injector?.get($t)??p($t):null,i=pi(s?.equal),o;s?.requireSync?o=dt({kind:0},{equal:i}):o=dt({kind:1,value:s?.initialValue},{equal:i});let r,l=e.subscribe({next:u=>o.set({kind:1,value:u}),error:u=>{o.set({kind:2,error:u}),r?.()},complete:()=>{r?.()}});if(s?.requireSync&&o().kind===0)throw new re(601,!1);return r=n?.onDestroy(l.unsubscribe.bind(l)),W(()=>{let u=o();switch(u.kind){case 1:return u.value;case 2:throw u.error;case 0:throw new re(601,!1)}},{equal:s?.equal})}function pi(e=Object.is){return(s,t)=>s.kind===1&&t.kind===1&&e(s.value,t.value)}var kn=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`;var mi=["header"],hi=["title"],fi=["subtitle"],bi=["content"],gi=["footer"],yi=["*",[["p-header"]],[["p-footer"]]],vi=["*","p-header","p-footer"];function _i(e,s){e&1&&z(0)}function xi(e,s){if(e&1&&(y(0,"div"),nt(1,1),m(2,_i,1,0,"ng-container",1),v()),e&2){let t=c();h(t.cx("header")),d(2),a("ngTemplateOutlet",t.headerTemplate||t._headerTemplate)}}function Ci(e,s){if(e&1&&(G(0),it(1),Y()),e&2){let t=c(2);d(),ot(t.header)}}function wi(e,s){e&1&&z(0)}function Ti(e,s){if(e&1&&(y(0,"div"),m(1,Ci,2,1,"ng-container",2)(2,wi,1,0,"ng-container",1),v()),e&2){let t=c();h(t.cx("title")),d(),a("ngIf",t.header&&!t._titleTemplate&&!t.titleTemplate),d(),a("ngTemplateOutlet",t.titleTemplate||t._titleTemplate)}}function Ii(e,s){if(e&1&&(G(0),it(1),Y()),e&2){let t=c(2);d(),ot(t.subheader)}}function Si(e,s){e&1&&z(0)}function ki(e,s){if(e&1&&(y(0,"div"),m(1,Ii,2,1,"ng-container",2)(2,Si,1,0,"ng-container",1),v()),e&2){let t=c();h(t.cx("subtitle")),d(),a("ngIf",t.subheader&&!t._subtitleTemplate&&!t.subtitleTemplate),d(),a("ngTemplateOutlet",t.subtitleTemplate||t._subtitleTemplate)}}function Ei(e,s){e&1&&z(0)}function Oi(e,s){e&1&&z(0)}function Mi(e,s){if(e&1&&(y(0,"div"),nt(1,2),m(2,Oi,1,0,"ng-container",1),v()),e&2){let t=c();h(t.cx("footer")),d(2),a("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var Di=`
    ${kn}

    .p-card {
        display: block;
    }
`,Li={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},En=(()=>{class e extends S{name="card";theme=Di;classes=Li;static \u0275fac=(()=>{let t;return function(i){return(t||(t=f(e)))(i||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})();var Fi=(()=>{class e extends w{header;subheader;set style(t){qe(this._style(),t)||this._style.set(t)}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=dt(null);_componentStyle=p(En);getBlockableElement(){return this.el.nativeElement.children[0]}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"title":this._titleTemplate=t.template;break;case"subtitle":this._subtitleTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=f(e)))(i||e)}})();static \u0275cmp=E({type:e,selectors:[["p-card"]],contentQueries:function(n,i,o){if(n&1&&(I(o,ln,5),I(o,dn,5),I(o,mi,4),I(o,hi,4),I(o,fi,4),I(o,bi,4),I(o,gi,4),I(o,kt,4)),n&2){let r;_(r=x())&&(i.headerFacet=r.first),_(r=x())&&(i.footerFacet=r.first),_(r=x())&&(i.headerTemplate=r.first),_(r=x())&&(i.titleTemplate=r.first),_(r=x())&&(i.subtitleTemplate=r.first),_(r=x())&&(i.contentTemplate=r.first),_(r=x())&&(i.footerTemplate=r.first),_(r=x())&&(i.templates=r)}},hostVars:5,hostBindings:function(n,i){n&2&&(T("data-pc-name","card"),pt(i._style()),h(i.cn(i.cx("root"),i.styleClass)))},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[C([En]),g],ngContentSelectors:vi,decls:8,vars:9,consts:[[3,"class",4,"ngIf"],[4,"ngTemplateOutlet"],[4,"ngIf"]],template:function(n,i){n&1&&(ut(yi),m(0,xi,3,3,"div",0),y(1,"div"),m(2,Ti,3,4,"div",0)(3,ki,3,4,"div",0),y(4,"div"),nt(5),m(6,Ei,1,0,"ng-container",1),v(),m(7,Mi,3,3,"div",0),v()),n&2&&(a("ngIf",i.headerFacet||i.headerTemplate||i._headerTemplate),d(),h(i.cx("body")),d(),a("ngIf",i.header||i.titleTemplate||i._titleTemplate),d(),a("ngIf",i.subheader||i.subtitleTemplate||i._subtitleTemplate),d(),h(i.cx("content")),d(2),a("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),d(),a("ngIf",i.footerFacet||i.footerTemplate||i._footerTemplate))},dependencies:[q,vt,_t,F],encapsulation:2,changeDetection:0})}return e})(),la=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=H({type:e});static \u0275inj=A({imports:[Fi,F,F]})}return e})();function Pi(){let e=[],s=(o,r)=>{let l=e.length>0?e[e.length-1]:{key:o,value:r},u=l.value+(l.key===o?0:r)+2;return e.push({key:o,value:u}),u},t=o=>{e=e.filter(r=>r.value!==o)},n=()=>e.length>0?e[e.length-1].value:0,i=o=>o&&parseInt(o.style.zIndex,10)||0;return{get:i,set:(o,r,l)=>{r&&(r.style.zIndex=String(s(o,l)))},clear:o=>{o&&(t(i(o)),o.style.zIndex="")},getCurrent:()=>n(),generateZIndex:s,revertZIndex:t}}var ft=Pi();var On=`
    .p-tooltip {
        position: absolute;
        display: none;
        max-width: dt('tooltip.max.width');
    }

    .p-tooltip-right,
    .p-tooltip-left {
        padding: 0 dt('tooltip.gutter');
    }

    .p-tooltip-top,
    .p-tooltip-bottom {
        padding: dt('tooltip.gutter') 0;
    }

    .p-tooltip-text {
        white-space: pre-line;
        word-break: break-word;
        background: dt('tooltip.background');
        color: dt('tooltip.color');
        padding: dt('tooltip.padding');
        box-shadow: dt('tooltip.shadow');
        border-radius: dt('tooltip.border.radius');
    }

    .p-tooltip-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }

    .p-tooltip-right .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter') 0;
        border-right-color: dt('tooltip.background');
    }

    .p-tooltip-left .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') 0 dt('tooltip.gutter') dt('tooltip.gutter');
        border-left-color: dt('tooltip.background');
    }

    .p-tooltip-top .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') 0 dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }

    .p-tooltip-bottom .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: 0 dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }
`;var Bi={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},Mn=(()=>{class e extends S{name="tooltip";theme=On;classes=Bi;static \u0275fac=(()=>{let t;return function(i){return(t||(t=f(e)))(i||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})();var Dn=(()=>{class e extends w{zone;viewContainer;tooltipPosition;tooltipEvent="hover";positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this.deactivate()}tooltipOptions;appendTo=N(void 0);$appendTo=W(()=>this.appendTo()||this.config.overlayAppendTo());_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:at("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=p(Mn);interactionInProgress=!1;constructor(t,n){super(),this.zone=t,this.viewContainer=n}ngAfterViewInit(){super.ngAfterViewInit(),J(this.platformId)&&this.zone.runOutsideAngular(()=>{let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),t==="focus"||t==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.addEventListener("focus",this.focusListener),n.addEventListener("blur",this.blurListener)}})}ngOnChanges(t){super.ngOnChanges(t),t.tooltipPosition&&this.setOption({tooltipPosition:t.tooltipPosition.currentValue}),t.tooltipEvent&&this.setOption({tooltipEvent:t.tooltipEvent.currentValue}),t.appendTo&&this.setOption({appendTo:t.appendTo.currentValue}),t.positionStyle&&this.setOption({positionStyle:t.positionStyle.currentValue}),t.tooltipStyleClass&&this.setOption({tooltipStyleClass:t.tooltipStyleClass.currentValue}),t.tooltipZIndex&&this.setOption({tooltipZIndex:t.tooltipZIndex.currentValue}),t.escape&&this.setOption({escape:t.escape.currentValue}),t.showDelay&&this.setOption({showDelay:t.showDelay.currentValue}),t.hideDelay&&this.setOption({hideDelay:t.hideDelay.currentValue}),t.life&&this.setOption({life:t.life.currentValue}),t.positionTop&&this.setOption({positionTop:t.positionTop.currentValue}),t.positionLeft&&this.setOption({positionLeft:t.positionLeft.currentValue}),t.disabled&&this.setOption({disabled:t.disabled.currentValue}),t.content&&(this.setOption({tooltipLabel:t.content.currentValue}),this.active&&(t.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),t.autoHide&&this.setOption({autoHide:t.autoHide.currentValue}),t.id&&this.setOption({id:t.id.currentValue}),t.tooltipOptions&&(this._tooltipOptions=M(M({},this._tooltipOptions),t.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(t){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(t){this.isAutoHide()?this.deactivate():!(It(t.relatedTarget,"p-tooltip")||It(t.relatedTarget,"p-tooltip-text")||It(t.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(t){this.activate()}onBlur(t){this.deactivate()}onInputClick(t){this.deactivate()}activate(){if(!this.interactionInProgress){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let t=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},t)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener?.()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div"),this.container.setAttribute("id",this.getOption("id")),this.container.setAttribute("role","tooltip");let t=document.createElement("div");t.className="p-tooltip-arrow",t.setAttribute("data-pc-section","arrow"),this.container.appendChild(t),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?ye(this.container,this.el.nativeElement):ye(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let t=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(t,"mouseleave",n=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),en(this.container,250),this.getOption("tooltipZIndex")==="auto"?ft.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&ft.clear(this.container),this.remove()}updateText(){let t=this.getOption("tooltipLabel");if(t&&typeof t.createEmbeddedView=="function"){let n=this.viewContainer.createEmbeddedView(t);n.detectChanges(),n.rootNodes.forEach(i=>this.tooltipText.appendChild(i))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(t))):this.tooltipText.innerHTML=t}align(){let t=this.getOption("tooltipPosition"),i={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]}[t]||[];for(let[o,r]of i.entries())if(o===0)r.call(this);else if(this.isOutOfBounds())r.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let t=this.el.nativeElement.getBoundingClientRect(),n=t.left+Ye(),i=t.top+Xe();return{left:n,top:i}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.startsWith("P-")?V(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let t=this.activeElement,n=Q(t),i=(st(t)-st(this.container))/2;this.alignTooltip(n,i);let o=this.getArrowElement();o.style.top="50%",o.style.right=null,o.style.bottom=null,o.style.left="0"}alignLeft(){this.preAlign("left");let t=this.getArrowElement(),n=Q(this.container),i=(st(this.el.nativeElement)-st(this.container))/2;this.alignTooltip(-n,i),t.style.top="50%",t.style.right="0",t.style.bottom=null,t.style.left=null}alignTop(){this.preAlign("top");let t=this.getArrowElement(),n=this.getHostOffset(),i=Q(this.container),o=(Q(this.el.nativeElement)-Q(this.container))/2,r=st(this.container);this.alignTooltip(o,-r);let l=n.left-this.getHostOffset().left+i/2;t.style.top=null,t.style.right=null,t.style.bottom="0",t.style.left=l+"px"}getArrowElement(){return V(this.container,'[data-pc-section="arrow"]')}alignBottom(){this.preAlign("bottom");let t=this.getArrowElement(),n=Q(this.container),i=this.getHostOffset(),o=(Q(this.el.nativeElement)-Q(this.container))/2,r=st(this.el.nativeElement);this.alignTooltip(o,r);let l=i.left-this.getHostOffset().left+n/2;t.style.top="0",t.style.right=null,t.style.bottom=null,t.style.left=l+"px"}alignTooltip(t,n){let i=this.getHostOffset(),o=i.left+t,r=i.top+n;this.container.style.left=o+this.getOption("positionLeft")+"px",this.container.style.top=r+this.getOption("positionTop")+"px"}setOption(t){this._tooltipOptions=M(M({},this._tooltipOptions),t)}getOption(t){return this._tooltipOptions[t]}getTarget(t){return It(t,"p-inputwrapper")?V(t,"input"):t}preAlign(t){this.container.style.left="-999px",this.container.style.top="-999px";let n="p-tooltip p-component p-tooltip-"+t;this.container.className=this.getOption("tooltipStyleClass")?n+" "+this.getOption("tooltipStyleClass"):n}isOutOfBounds(){let t=this.container.getBoundingClientRect(),n=t.top,i=t.left,o=Q(this.container),r=st(this.container),l=Ge();return i+o>l.width||i<0||n<0||n+r>l.height}onWindowResize(t){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new Mt(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),t==="focus"||t==="both"){let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.removeEventListener("focus",this.focusListener),n.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):sn(this.getOption("appendTo"),this.container)),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),super.ngOnDestroy(),this.container&&ft.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(n){return new(n||e)(ct(Wt),ct(Le))};static \u0275dir=R({type:e,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",b],showDelay:[2,"showDelay","showDelay",X],hideDelay:[2,"hideDelay","hideDelay",X],life:[2,"life","life",X],positionTop:[2,"positionTop","positionTop",X],positionLeft:[2,"positionLeft","positionLeft",X],autoHide:[2,"autoHide","autoHide",b],fitContent:[2,"fitContent","fitContent",b],hideOnEscape:[2,"hideOnEscape","hideOnEscape",b],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions",appendTo:[1,"appendTo"]},features:[C([Mn]),g,Dt]})}return e})(),Ie=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=H({type:e});static \u0275inj=A({})}return e})();var Ln=`
    .p-menu {
        background: dt('menu.background');
        color: dt('menu.color');
        border: 1px solid dt('menu.border.color');
        border-radius: dt('menu.border.radius');
        min-width: 12.5rem;
    }

    .p-menu-list {
        margin: 0;
        padding: dt('menu.list.padding');
        outline: 0 none;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: dt('menu.list.gap');
    }

    .p-menu-item-content {
        transition:
            background dt('menu.transition.duration'),
            color dt('menu.transition.duration');
        border-radius: dt('menu.item.border.radius');
        color: dt('menu.item.color');
        overflow: hidden;
    }

    .p-menu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menu.item.padding');
        gap: dt('menu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menu-item-label {
        line-height: 1;
    }

    .p-menu-item-icon {
        color: dt('menu.item.icon.color');
    }

    .p-menu-item.p-focus .p-menu-item-content {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item.p-focus .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-overlay {
        box-shadow: dt('menu.shadow');
    }

    .p-menu-submenu-label {
        background: dt('menu.submenu.label.background');
        padding: dt('menu.submenu.label.padding');
        color: dt('menu.submenu.label.color');
        font-weight: dt('menu.submenu.label.font.weight');
    }

    .p-menu-separator {
        border-block-start: 1px solid dt('menu.separator.border.color');
    }
`;var Hi=["pMenuItemContent",""],ie=e=>({$implicit:e}),zi=()=>({exact:!1}),Ni=e=>({item:e});function Vi(e,s){e&1&&z(0)}function Ri(e,s){if(e&1&&(y(0,"a",6),m(1,Vi,1,0,"ng-container",7),v()),e&2){let t=c(2),n=yt(4);h(t.cx("itemLink")),a("target",t.item.target),T("title",t.item.title)("href",t.item.url||null,Me)("data-automationid",t.item.automationId)("tabindex",-1)("data-pc-section","action"),d(),a("ngTemplateOutlet",n)("ngTemplateOutletContext",rt(10,ie,t.item))}}function $i(e,s){e&1&&z(0)}function ji(e,s){if(e&1&&(y(0,"a",8),m(1,$i,1,0,"ng-container",7),v()),e&2){let t=c(2),n=yt(4);h(t.cx("itemLink")),a("routerLink",t.item.routerLink)("queryParams",t.item.queryParams)("routerLinkActiveOptions",t.item.routerLinkActiveOptions||Qt(18,zi))("target",t.item.target)("fragment",t.item.fragment)("queryParamsHandling",t.item.queryParamsHandling)("preserveFragment",t.item.preserveFragment)("skipLocationChange",t.item.skipLocationChange)("replaceUrl",t.item.replaceUrl)("state",t.item.state),T("data-automationid",t.item.automationId)("tabindex",-1)("data-pc-section","action")("title",t.item.title),d(),a("ngTemplateOutlet",n)("ngTemplateOutletContext",rt(19,ie,t.item))}}function Wi(e,s){if(e&1&&(G(0),m(1,Ri,2,12,"a",4)(2,ji,2,21,"a",5),Y()),e&2){let t=c();d(),a("ngIf",!(t.item!=null&&t.item.routerLink)),d(),a("ngIf",t.item==null?null:t.item.routerLink)}}function qi(e,s){}function Qi(e,s){e&1&&m(0,qi,0,0,"ng-template")}function Zi(e,s){if(e&1&&(G(0),m(1,Qi,1,0,null,7),Y()),e&2){let t=c();d(),a("ngTemplateOutlet",t.itemTemplate)("ngTemplateOutletContext",rt(2,ie,t.item))}}function Ui(e,s){if(e&1&&B(0,"span"),e&2){let t=c(2);pt(t.item.iconStyle),h(t.cx("itemIcon",rt(4,Ni,t.item)))}}function Ki(e,s){if(e&1&&(y(0,"span"),it(1),v()),e&2){let t=c(2);h(t.cx("itemLabel")),d(),ot(t.item.label)}}function Gi(e,s){if(e&1&&(B(0,"span",12),pe(1,"safeHtml")),e&2){let t=c(2);a("innerHTML",me(1,1,t.item.label),ae)}}function Yi(e,s){if(e&1&&B(0,"p-badge",13),e&2){let t=c(2);a("styleClass",t.item.badgeStyleClass)("value",t.item.badge)}}function Xi(e,s){if(e&1&&m(0,Ui,1,6,"span",9)(1,Ki,2,3,"span",10)(2,Gi,2,3,"ng-template",null,1,Ut)(4,Yi,1,2,"p-badge",11),e&2){let t=yt(3),n=c();a("ngIf",n.item.icon),d(),a("ngIf",n.item.escape!==!1)("ngIfElse",t),d(3),a("ngIf",n.item.badge)}}var Ji=["start"],to=["end"],eo=["header"],no=["item"],io=["submenuheader"],oo=["list"],ro=["container"],so=(e,s)=>({showTransitionParams:e,hideTransitionParams:s}),ao=e=>({value:"visible",params:e}),Fn=(e,s)=>({item:e,id:s});function lo(e,s){e&1&&z(0)}function co(e,s){if(e&1&&(y(0,"div"),m(1,lo,1,0,"ng-container",8),v()),e&2){let t=c(2);h(t.cx("start")),T("data-pc-section","start"),d(),a("ngTemplateOutlet",t.startTemplate??t._startTemplate)}}function uo(e,s){if(e&1&&B(0,"li",12),e&2){let t=c(4);h(t.cx("separator"))}}function po(e,s){if(e&1&&(y(0,"span"),it(1),v()),e&2){let t=c(3).$implicit;d(),ot(t.label)}}function mo(e,s){if(e&1&&(B(0,"span",16),pe(1,"safeHtml")),e&2){let t=c(3).$implicit;a("innerHTML",me(1,1,t.label),ae)}}function ho(e,s){if(e&1&&(G(0),m(1,po,2,1,"span",15)(2,mo,2,3,"ng-template",null,2,Ut),Y()),e&2){let t=yt(3),n=c(2).$implicit;d(),a("ngIf",n.escape!==!1)("ngIfElse",t)}}function fo(e,s){e&1&&z(0)}function bo(e,s){if(e&1&&(y(0,"li",13),m(1,ho,4,2,"ng-container",7)(2,fo,1,0,"ng-container",14),v()),e&2){let t=c(),n=t.$implicit,i=t.index,o=c(3);h(o.cx("submenuLabel")),a("tooltipOptions",n.tooltipOptions),T("data-automationid",n.automationId)("id",o.menuitemId(n,o.id,i)),d(),a("ngIf",!o.submenuHeaderTemplate&&!o._submenuHeaderTemplate),d(),a("ngTemplateOutlet",o.submenuHeaderTemplate??o._submenuHeaderTemplate)("ngTemplateOutletContext",rt(8,ie,n))}}function go(e,s){if(e&1&&B(0,"li",12),e&2){let t=c(5);h(t.cx("separator"))}}function yo(e,s){if(e&1){let t=gt();y(0,"li",18),et("onMenuItemClick",function(i){$(t);let o=c(),r=o.$implicit,l=o.index,u=c().index,O=c(3);return j(O.itemClick(i,O.menuitemId(r,O.id,u,l)))}),v()}if(e&2){let t=c(),n=t.$implicit,i=t.index,o=c().index,r=c(3);pt(n.style),h(r.cn(r.cx("item",Zt(13,Fn,n,r.menuitemId(n,r.id,o,i))),n==null?null:n.styleClass)),a("pMenuItemContent",n)("itemTemplate",r.itemTemplate??r._itemTemplate)("tooltipOptions",n.tooltipOptions),T("data-pc-section","menuitem")("aria-label",r.label(n.label))("data-p-focused",r.isItemFocused(r.menuitemId(n,r.id,o,i)))("data-p-disabled",r.disabled(n.disabled))("aria-disabled",r.disabled(n.disabled))("id",r.menuitemId(n,r.id,o,i))}}function vo(e,s){if(e&1&&m(0,go,1,2,"li",10)(1,yo,1,16,"li",17),e&2){let t=s.$implicit,n=c().$implicit;a("ngIf",t.separator&&(t.visible!==!1||n.visible!==!1)),d(),a("ngIf",!t.separator&&t.visible!==!1&&(t.visible!==void 0||n.visible!==!1))}}function _o(e,s){if(e&1&&m(0,uo,1,2,"li",10)(1,bo,3,10,"li",11)(2,vo,2,2,"ng-template",9),e&2){let t=s.$implicit;a("ngIf",t.separator&&t.visible!==!1),d(),a("ngIf",!t.separator),d(),a("ngForOf",t.items)}}function xo(e,s){if(e&1&&m(0,_o,3,3,"ng-template",9),e&2){let t=c(2);a("ngForOf",t.model)}}function Co(e,s){if(e&1&&B(0,"li",12),e&2){let t=c(4);h(t.cx("separator"))}}function wo(e,s){if(e&1){let t=gt();y(0,"li",20),et("onMenuItemClick",function(i){$(t);let o=c(),r=o.$implicit,l=o.index,u=c(3);return j(u.itemClick(i,u.menuitemId(r,u.id,l)))}),v()}if(e&2){let t=c(),n=t.$implicit,i=t.index,o=c(3);h(o.cn(o.cx("item",Zt(12,Fn,n,o.menuitemId(n,o.id,i))),n==null?null:n.styleClass)),a("pMenuItemContent",n)("itemTemplate",o.itemTemplate??o._itemTemplate)("ngStyle",n.style)("tooltipOptions",n.tooltipOptions),T("data-pc-section","menuitem")("aria-label",o.label(n.label))("data-p-focused",o.isItemFocused(o.menuitemId(n,o.id,i)))("data-p-disabled",o.disabled(n.disabled))("aria-disabled",o.disabled(n.disabled))("id",o.menuitemId(n,o.id,i))}}function To(e,s){if(e&1&&m(0,Co,1,2,"li",10)(1,wo,1,15,"li",19),e&2){let t=s.$implicit;a("ngIf",t.separator&&t.visible!==!1),d(),a("ngIf",!t.separator&&t.visible!==!1)}}function Io(e,s){if(e&1&&m(0,To,2,2,"ng-template",9),e&2){let t=c(2);a("ngForOf",t.model)}}function So(e,s){e&1&&z(0)}function ko(e,s){if(e&1&&(y(0,"div"),m(1,So,1,0,"ng-container",8),v()),e&2){let t=c(2);h(t.cx("end")),T("data-pc-section","end"),d(),a("ngTemplateOutlet",t.endTemplate??t._endTemplate)}}function Eo(e,s){if(e&1){let t=gt();y(0,"div",4,0),et("click",function(i){$(t);let o=c();return j(o.onOverlayClick(i))})("@overlayAnimation.start",function(i){$(t);let o=c();return j(o.onOverlayAnimationStart(i))})("@overlayAnimation.done",function(i){$(t);let o=c();return j(o.onOverlayAnimationEnd(i))}),m(2,co,2,4,"div",5),y(3,"ul",6,1),et("focus",function(i){$(t);let o=c();return j(o.onListFocus(i))})("blur",function(i){$(t);let o=c();return j(o.onListBlur(i))})("keydown",function(i){$(t);let o=c();return j(o.onListKeyDown(i))}),m(5,xo,1,1,null,7)(6,Io,1,1,null,7),v(),m(7,ko,2,4,"div",5),v()}if(e&2){let t=c();pt(t.sx("root")),h(t.cn(t.cx("root"),t.styleClass)),a("ngStyle",t.style)("@overlayAnimation",rt(24,ao,Zt(21,so,t.showTransitionOptions,t.hideTransitionOptions)))("@.disabled",t.popup!==!0),T("data-pc-name","menu")("id",t.id),d(2),a("ngIf",t.startTemplate??t._startTemplate),d(),h(t.cx("list")),T("id",t.id+"_list")("tabindex",t.getTabIndexValue())("data-pc-section","menu")("aria-activedescendant",t.activedescendant())("aria-label",t.ariaLabel)("aria-labelledBy",t.ariaLabelledBy),d(2),a("ngIf",t.hasSubMenu()),d(),a("ngIf",!t.hasSubMenu()),d(),a("ngIf",t.endTemplate??t._endTemplate)}}var Oo={root:({instance:e})=>({position:e.popup?"absolute":"relative"})},Mo={root:({instance:e})=>["p-menu p-component",{"p-menu-overlay":e.popup}],start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:({instance:e,item:s,id:t})=>["p-menu-item",{"p-focus":e.focusedOptionId()&&t===e.focusedOptionId(),"p-disabled":e.disabled(s.disabled)},s.styleClass],itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:({item:e})=>["p-menu-item-icon",e.icon,e.iconClass],itemLabel:"p-menu-item-label"},ne=(()=>{class e extends S{name="menu";theme=Ln;classes=Mo;inlineStyles=Oo;static \u0275fac=(()=>{let t;return function(i){return(t||(t=f(e)))(i||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})();var Pn=(()=>{class e{platformId;sanitizer;constructor(t,n){this.platformId=t,this.sanitizer=n}transform(t){return!t||!J(this.platformId)?t:this.sanitizer.bypassSecurityTrustHtml(t)}static \u0275fac=function(n){return new(n||e)(ct(Tt,16),ct(Ve,16))};static \u0275pipe=Fe({name:"safeHtml",type:e,pure:!0})}return e})(),Do=(()=>{class e extends w{item;itemTemplate;onMenuItemClick=new tt;menu;_componentStyle=p(ne);constructor(t){super(),this.menu=t}onItemClick(t,n){this.onMenuItemClick.emit({originalEvent:t,item:n})}static \u0275fac=function(n){return new(n||e)(ct(Oe(()=>oe)))};static \u0275cmp=E({type:e,selectors:[["","pMenuItemContent",""]],inputs:{item:[0,"pMenuItemContent","item"],itemTemplate:"itemTemplate"},outputs:{onMenuItemClick:"onMenuItemClick"},features:[C([ne]),g],attrs:Hi,decls:5,vars:5,consts:[["itemContent",""],["htmlLabel",""],[3,"click"],[4,"ngIf"],["pRipple","",3,"class","target",4,"ngIf"],["routerLinkActive","p-menu-item-link-active","pRipple","",3,"routerLink","queryParams","routerLinkActiveOptions","class","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],["pRipple","",3,"target"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["routerLinkActive","p-menu-item-link-active","pRipple","",3,"routerLink","queryParams","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],[3,"class","style",4,"ngIf"],[3,"class",4,"ngIf","ngIfElse"],[3,"styleClass","value",4,"ngIf"],[1,"p-menu-item-label",3,"innerHTML"],[3,"styleClass","value"]],template:function(n,i){if(n&1){let o=gt();y(0,"div",2),et("click",function(l){return $(o),j(i.onItemClick(l,i.item))}),m(1,Wi,3,2,"ng-container",3)(2,Zi,2,4,"ng-container",3)(3,Xi,5,4,"ng-template",null,0,Ut),v()}n&2&&(h(i.cx("itemContent")),T("data-pc-section","content"),d(),a("ngIf",!i.itemTemplate),d(),a("ngIf",i.itemTemplate))},dependencies:[q,vt,_t,be,Re,$e,ee,Ie,Nt,zt,F,Pn],encapsulation:2})}return e})(),oe=(()=>{class e extends w{overlayService;model;popup;style;styleClass;autoZIndex=!0;baseZIndex=0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";ariaLabel;ariaLabelledBy;id;tabindex=0;appendTo=N(void 0);onShow=new tt;onHide=new tt;onBlur=new tt;onFocus=new tt;listViewChild;containerViewChild;$appendTo=W(()=>this.appendTo()||this.config.overlayAppendTo());container;scrollHandler;documentClickListener;documentResizeListener;preventDocumentDefault;target;visible;focusedOptionId=W(()=>this.focusedOptionIndex()!==-1?this.focusedOptionIndex():null);focusedOptionIndex=dt(-1);selectedOptionIndex=dt(-1);focused=!1;overlayVisible=!1;relativeAlign;_componentStyle=p(ne);constructor(t){super(),this.overlayService=t,this.id=this.id||at("pn_id_")}toggle(t){this.visible?this.hide():this.show(t),this.preventDocumentDefault=!0}show(t){this.target=t.currentTarget,this.relativeAlign=t.relativeAlign,this.visible=!0,this.preventDocumentDefault=!0,this.overlayVisible=!0,this.cd.markForCheck()}ngOnInit(){super.ngOnInit(),this.popup||this.bindDocumentClickListener()}startTemplate;_startTemplate;endTemplate;_endTemplate;headerTemplate;_headerTemplate;itemTemplate;_itemTemplate;submenuHeaderTemplate;_submenuHeaderTemplate;templates;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"start":this._startTemplate=t.template;break;case"end":this._endTemplate=t.template;break;case"item":this._itemTemplate=t.template;break;case"submenuheader":this._submenuHeaderTemplate=t.template;break;default:this._itemTemplate=t.template;break}})}getTabIndexValue(){return this.tabindex!==void 0?this.tabindex.toString():null}onOverlayAnimationStart(t){switch(t.toState){case"visible":this.popup&&(this.container=t.element,this.moveOnTop(),this.onShow.emit({}),this.attrSelector&&this.container?.setAttribute(this.attrSelector,""),this.appendOverlay(),this.alignOverlay(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),Bt(this.listViewChild?.nativeElement));break;case"void":this.onOverlayHide(),this.onHide.emit({});break}}onOverlayAnimationEnd(t){switch(t.toState){case"void":this.autoZIndex&&ft.clear(t.element);break}}alignOverlay(){this.relativeAlign?tn(this.container,this.target):Je(this.container,this.target)}appendOverlay(){Ht.appendOverlay(this.container,this.$appendTo()==="body"?this.document.body:this.$appendTo(),this.$appendTo())}restoreOverlayAppend(){this.container&&this.$appendTo()!=="self"&&this.renderer.appendChild(this.el.nativeElement,this.container)}moveOnTop(){this.autoZIndex&&ft.set("menu",this.container,this.baseZIndex+this.config.zIndex.menu)}hide(){this.visible=!1,this.relativeAlign=!1,this.cd.markForCheck()}onWindowResize(){this.visible&&!on()&&this.hide()}menuitemId(t,n,i,o){return t?.id??`${n}_${i}${o!==void 0?"_"+o:""}`}isItemFocused(t){return this.focusedOptionId()===t}label(t){return typeof t=="function"?t():t}disabled(t){return typeof t=="function"?t():typeof t>"u"?!1:t}activedescendant(){return this.focused?this.focusedOptionId():void 0}onListFocus(t){this.focused||(this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.onFocus.emit(t))}onListBlur(t){this.focused&&(this.focused=!1,this.changeFocusedOptionIndex(-1),this.selectedOptionIndex.set(-1),this.focusedOptionIndex.set(-1),this.onBlur.emit(t))}onListKeyDown(t){switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"Enter":this.onEnterKey(t);break;case"NumpadEnter":this.onEnterKey(t);break;case"Space":this.onSpaceKey(t);break;case"Escape":case"Tab":this.popup&&(Bt(this.target),this.hide()),this.overlayVisible&&this.hide();break;default:break}}onArrowDownKey(t){let n=this.findNextOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(n),t.preventDefault()}onArrowUpKey(t){if(t.altKey&&this.popup)Bt(this.target),this.hide(),t.preventDefault();else{let n=this.findPrevOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(n),t.preventDefault()}}onHomeKey(t){this.changeFocusedOptionIndex(0),t.preventDefault()}onEndKey(t){this.changeFocusedOptionIndex(Pt(this.containerViewChild?.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]').length-1),t.preventDefault()}onEnterKey(t){let n=V(this.containerViewChild?.nativeElement,`li[id="${`${this.focusedOptionIndex()}`}"]`),i=n&&(V(n,'[data-pc-section="action"]')||V(n,"a,button"));this.popup&&Bt(this.target),i?i.click():n&&n.click(),t.preventDefault()}onSpaceKey(t){this.onEnterKey(t)}findNextOptionIndex(t){let i=[...Pt(this.containerViewChild?.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(o=>o.id===t);return i>-1?i+1:0}findPrevOptionIndex(t){let i=[...Pt(this.containerViewChild?.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(o=>o.id===t);return i>-1?i-1:0}changeFocusedOptionIndex(t){let n=Pt(this.containerViewChild?.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]');if(n.length>0){let i=t>=n.length?n.length-1:t<0?0:t;i>-1&&this.focusedOptionIndex.set(n[i].getAttribute("id"))}}itemClick(t,n){let{originalEvent:i,item:o}=t;if(this.focused||(this.focused=!0,this.onFocus.emit()),o.disabled){i.preventDefault();return}!o.url&&!o.routerLink&&i.preventDefault(),o.command&&o.command({originalEvent:i,item:o}),this.popup&&this.hide(),!this.popup&&this.focusedOptionIndex()!==n&&this.focusedOptionIndex.set(n)}onOverlayClick(t){this.popup&&this.overlayService.add({originalEvent:t,target:this.el.nativeElement}),this.preventDocumentDefault=!0}bindDocumentClickListener(){if(!this.documentClickListener&&J(this.platformId)){let t=this.el?this.el.nativeElement.ownerDocument:"document";this.documentClickListener=this.renderer.listen(t,"click",n=>{let i=this.containerViewChild?.nativeElement&&!this.containerViewChild?.nativeElement.contains(n.target),o=!(this.target&&(this.target===n.target||this.target.contains(n.target)));!this.popup&&i&&o&&this.onListBlur(n),this.preventDocumentDefault&&this.overlayVisible&&i&&o&&(this.hide(),this.preventDocumentDefault=!1)})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){if(!this.documentResizeListener&&J(this.platformId)){let t=this.document.defaultView;this.documentResizeListener=this.renderer.listen(t,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){!this.scrollHandler&&J(this.platformId)&&(this.scrollHandler=new Mt(this.target,()=>{this.visible&&this.hide()})),this.scrollHandler?.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&(this.scrollHandler.unbindScrollListener(),this.scrollHandler=null)}onOverlayHide(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.preventDocumentDefault=!1,this.cd.destroyed||(this.target=null)}ngOnDestroy(){this.popup&&(this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&ft.clear(this.container),this.restoreOverlayAppend(),this.onOverlayHide()),this.popup||this.unbindDocumentClickListener(),super.ngOnDestroy()}hasSubMenu(){return this.model?.some(t=>t.items)??!1}isItemHidden(t){return t.separator?t.visible===!1||t.items&&t.items.some(n=>n.visible!==!1):t.visible===!1}static \u0275fac=function(n){return new(n||e)(ct(an))};static \u0275cmp=E({type:e,selectors:[["p-menu"]],contentQueries:function(n,i,o){if(n&1&&(I(o,Ji,4),I(o,to,4),I(o,eo,4),I(o,no,4),I(o,io,4),I(o,kt,4)),n&2){let r;_(r=x())&&(i.startTemplate=r.first),_(r=x())&&(i.endTemplate=r.first),_(r=x())&&(i.headerTemplate=r.first),_(r=x())&&(i.itemTemplate=r.first),_(r=x())&&(i.submenuHeaderTemplate=r.first),_(r=x())&&(i.templates=r)}},viewQuery:function(n,i){if(n&1&&(ce(oo,5),ce(ro,5)),n&2){let o;_(o=x())&&(i.listViewChild=o.first),_(o=x())&&(i.containerViewChild=o.first)}},inputs:{model:"model",popup:[2,"popup","popup",b],style:"style",styleClass:"styleClass",autoZIndex:[2,"autoZIndex","autoZIndex",b],baseZIndex:[2,"baseZIndex","baseZIndex",X],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",id:"id",tabindex:[2,"tabindex","tabindex",X],appendTo:[1,"appendTo"]},outputs:{onShow:"onShow",onHide:"onHide",onBlur:"onBlur",onFocus:"onFocus"},features:[C([ne]),g],decls:1,vars:1,consts:[["container",""],["list",""],["htmlSubmenuLabel",""],[3,"class","style","ngStyle","click",4,"ngIf"],[3,"click","ngStyle"],[3,"class",4,"ngIf"],["role","menu",3,"focus","blur","keydown"],[4,"ngIf"],[4,"ngTemplateOutlet"],["ngFor","",3,"ngForOf"],["role","separator",3,"class",4,"ngIf"],["pTooltip","","role","none",3,"class","tooltipOptions",4,"ngIf"],["role","separator"],["pTooltip","","role","none",3,"tooltipOptions"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"innerHTML"],["pTooltip","","role","menuitem",3,"class","pMenuItemContent","itemTemplate","style","tooltipOptions","onMenuItemClick",4,"ngIf"],["pTooltip","","role","menuitem",3,"onMenuItemClick","pMenuItemContent","itemTemplate","tooltipOptions"],["pTooltip","","role","menuitem",3,"class","pMenuItemContent","itemTemplate","ngStyle","tooltipOptions","onMenuItemClick",4,"ngIf"],["pTooltip","","role","menuitem",3,"onMenuItemClick","pMenuItemContent","itemTemplate","ngStyle","tooltipOptions"]],template:function(n,i){n&1&&m(0,Eo,8,26,"div",3),n&2&&a("ngIf",!i.popup||i.visible)},dependencies:[q,ze,vt,_t,Kt,be,Do,Ie,Dn,Nt,F,Pn],encapsulation:2,data:{animation:[ge("overlayAnimation",[Xt(":enter",[Yt({opacity:0,transform:"scaleY(0.8)"}),Gt("{{showTransitionParams}}")]),Xt(":leave",[Gt("{{hideTransitionParams}}",Yt({opacity:0}))])])]},changeDetection:0})}return e})(),gl=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=H({type:e});static \u0275inj=A({imports:[oe,F,F]})}return e})();var Lo=()=>({right:"0",top:"3rem",maxWidth:"fit-content"}),Bn=class e{themeService=p(je);currentThemeSig=this.themeService.getCurrentTheme();selectedMenuSig=W(()=>this.menuItems.filter(s=>s.label?.toLowerCase()===this.currentThemeSig())[0]||this.menuItems[0]);menuItems=[{label:"Light",icon:At.SUN,command:()=>this.themeService.setTheme("light")},{label:"Dark",icon:At.MOON,command:()=>this.themeService.setTheme("dark")},{label:"System",icon:At.DESKTOP,command:()=>this.themeService.setTheme("system")},{label:"Auto",icon:At.COG,command:()=>this.themeService.setTheme("auto")}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=E({type:e,selectors:[["app-theme-toggle"]],decls:3,vars:7,consts:[["themeToggle",""],["variant","outlined","severity","secondary",3,"click","label","icon"],["baseZIndex","10","appendTo","body",3,"popup","model"]],template:function(t,n){if(t&1){let i=gt();y(0,"p-button",1),et("click",function(r){$(i);let l=yt(2);return j(l.toggle(r))}),v(),B(1,"p-menu",2,0)}t&2&&(a("label",n.selectedMenuSig().label)("icon",n.selectedMenuSig().icon),d(),pt(Qt(6,Lo)),a("popup",!0)("model",n.menuItems))},dependencies:[oe,Sn,Te],encapsulation:2})};export{at as a,w as b,Ht as c,Ko as d,Go as e,Mt as f,pn as g,rr as h,we as i,te as j,Qr as k,ee as l,Cn as m,Es as n,Te as o,Sn as p,ft as q,oe as r,gl as s,$s as t,js as u,Fi as v,la as w,Bn as x};
