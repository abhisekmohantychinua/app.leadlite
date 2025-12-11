import{Ba as ct,Ca as Xe,H as wt,I as yt,J as Fe,K as Tt,L as Pe,M as Be,N as He,O as ze,P as Ae,Q as Ve,R as W,S as Re,T as de,V as Ne,W as kt,X as A,Y as St,_ as ce,aa as je,ba as ot,c as Ee,ca as ue,d as ft,e as jt,ea as $e,f as gt,fa as We,g as $,ga as Qe,h as Y,ia as Et,ja as qe,ka as Ze,l as Oe,la as vt,na as Ue,o as Me,oa as Ot,p as De,pa as Ke,qa as Ge,r as re,ra as Ct,sa as O,u as Le,v as se,va as pe,wa as V,x as ae,ya as C,z as le,za as Ye}from"./chunk-COSYQRMZ.js";import{$ as R,$a as Ce,Ab as J,Bb as d,Cb as xt,Db as lt,Eb as T,Fb as Jt,Gb as v,Hb as _,Ia as Kt,Ib as te,Ja as we,Jb as ke,Kb as ht,Lb as Se,M as ye,Ma as l,Mb as At,Nb as dt,O as Zt,Ob as b,Pb as tt,Q as ve,Qb as et,R as F,S as P,Sa as at,Sb as S,Tb as Vt,Ua as Te,Ub as nt,Vb as Rt,W as m,Xb as ee,Ya as D,Yb as ne,Za as B,Zb as Nt,_a as Z,a as _t,aa as N,ab as x,ba as Pt,bb as p,bc as j,cc as oe,da as _e,db as X,ea as Bt,eb as zt,fc as z,gc as ie,i as ge,ia as st,ka as Ut,la as f,lb as w,lc as h,mc as G,na as xe,ob as a,pb as g,qb as y,ra as Ht,rb as L,sb as Gt,tb as Yt,ub as Xt,vb as U,wb as K,xb as H,yb as mt,zb as Ie}from"./chunk-TBMMB432.js";var Mt=(()=>{class e{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,n){t&&n&&(t.classList?t.classList.add(n):t.className+=" "+n)}static addMultipleClasses(t,n){if(t&&n)if(t.classList){let o=n.trim().split(" ");for(let i=0;i<o.length;i++)t.classList.add(o[i])}else{let o=n.split(" ");for(let i=0;i<o.length;i++)t.className+=" "+o[i]}}static removeClass(t,n){t&&n&&(t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,n){t&&n&&[n].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(i=>this.removeClass(t,i)))}static hasClass(t,n){return t&&n?t.classList?t.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(n){return n!==t})}static find(t,n){return Array.from(t.querySelectorAll(n))}static findSingle(t,n){return this.isElement(t)?t.querySelector(n):null}static index(t){let n=t.parentNode.childNodes,o=0;for(var i=0;i<n.length;i++){if(n[i]==t)return o;n[i].nodeType==1&&o++}return-1}static indexWithinGroup(t,n){let o=t.parentNode?t.parentNode.childNodes:[],i=0;for(var r=0;r<o.length;r++){if(o[r]==t)return i;o[r].attributes&&o[r].attributes[n]&&o[r].nodeType==1&&i++}return-1}static appendOverlay(t,n,o="self"){o!=="self"&&t&&n&&this.appendChild(t,n)}static alignOverlay(t,n,o="self",i=!0){t&&n&&(i&&(t.style.minWidth=`${e.getOuterWidth(n)}px`),o==="self"?this.relativePosition(t,n):this.absolutePosition(t,n))}static relativePosition(t,n,o=!0){let i=bt=>{if(bt)return getComputedStyle(bt).getPropertyValue("position")==="relative"?bt:i(bt.parentElement)},r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),c=n.offsetHeight,u=n.getBoundingClientRect(),k=this.getWindowScrollTop(),I=this.getWindowScrollLeft(),E=this.getViewport(),M=i(t)?.getBoundingClientRect()||{top:-1*k,left:-1*I},q,rt,Ft="top";u.top+c+r.height>E.height?(q=u.top-M.top-r.height,Ft="bottom",u.top+q<0&&(q=-1*u.top)):(q=c+u.top-M.top,Ft="top");let fe=u.left+r.width-E.width,Tn=u.left-M.left;if(r.width>E.width?rt=(u.left-M.left)*-1:fe>0?rt=Tn-fe:rt=u.left-M.left,t.style.top=q+"px",t.style.left=rt+"px",t.style.transformOrigin=Ft,o){let bt=Be(/-anchor-gutter$/)?.value;t.style.marginTop=Ft==="bottom"?`calc(${bt??"2px"} * -1)`:bt??""}}static absolutePosition(t,n,o=!0){let i=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),r=i.height,c=i.width,u=n.offsetHeight,k=n.offsetWidth,I=n.getBoundingClientRect(),E=this.getWindowScrollTop(),Q=this.getWindowScrollLeft(),M=this.getViewport(),q,rt;I.top+u+r>M.height?(q=I.top+E-r,t.style.transformOrigin="bottom",q<0&&(q=E)):(q=u+I.top+E,t.style.transformOrigin="top"),I.left+c>M.width?rt=Math.max(0,I.left+Q+k-c):rt=I.left+Q,t.style.top=q+"px",t.style.left=rt+"px",o&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,n=[]){return t.parentNode===null?n:this.getParents(t.parentNode,n.concat([t.parentNode]))}static getScrollableParents(t){let n=[];if(t){let o=this.getParents(t),i=/(auto|scroll)/,r=c=>{let u=window.getComputedStyle(c,null);return i.test(u.getPropertyValue("overflow"))||i.test(u.getPropertyValue("overflowX"))||i.test(u.getPropertyValue("overflowY"))};for(let c of o){let u=c.nodeType===1&&c.dataset.scrollselectors;if(u){let k=u.split(",");for(let I of k){let E=this.findSingle(c,I);E&&r(E)&&n.push(E)}}c.nodeType!==9&&r(c)&&n.push(c)}}return n}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementDimensions(t){let n={};return t.style.visibility="hidden",t.style.display="block",n.width=t.offsetWidth,n.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",n}static scrollInView(t,n){let o=getComputedStyle(t).getPropertyValue("borderTopWidth"),i=o?parseFloat(o):0,r=getComputedStyle(t).getPropertyValue("paddingTop"),c=r?parseFloat(r):0,u=t.getBoundingClientRect(),I=n.getBoundingClientRect().top+document.body.scrollTop-(u.top+document.body.scrollTop)-i-c,E=t.scrollTop,Q=t.clientHeight,M=this.getOuterHeight(n);I<0?t.scrollTop=E+I:I+M>Q&&(t.scrollTop=E+I-Q+M)}static fadeIn(t,n){t.style.opacity=0;let o=+new Date,i=0,r=function(){i=+t.style.opacity.replace(",",".")+(new Date().getTime()-o)/n,t.style.opacity=i,o=+new Date,+i<1&&(window.requestAnimationFrame?window.requestAnimationFrame(r):setTimeout(r,16))};r()}static fadeOut(t,n){var o=1,i=50,r=n,c=i/r;let u=setInterval(()=>{o=o-c,o<=0&&(o=0,clearInterval(u)),t.style.opacity=o},i)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,n){var o=Element.prototype,i=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(r){return[].indexOf.call(document.querySelectorAll(r),this)!==-1};return i.call(t,n)}static getOuterWidth(t,n){let o=t.offsetWidth;if(n){let i=getComputedStyle(t);o+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return o}static getHorizontalPadding(t){let n=getComputedStyle(t);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(t){let n=getComputedStyle(t);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(t){let n=t.offsetWidth,o=getComputedStyle(t);return n+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static width(t){let n=t.offsetWidth,o=getComputedStyle(t);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static getInnerHeight(t){let n=t.offsetHeight,o=getComputedStyle(t);return n+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),n}static getOuterHeight(t,n){let o=t.offsetHeight;if(n){let i=getComputedStyle(t);o+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return o}static getHeight(t){let n=t.offsetHeight,o=getComputedStyle(t);return n-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),n}static getWidth(t){let n=t.offsetWidth,o=getComputedStyle(t);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),n}static getViewport(){let t=window,n=document,o=n.documentElement,i=n.getElementsByTagName("body")[0],r=t.innerWidth||o.clientWidth||i.clientWidth,c=t.innerHeight||o.clientHeight||i.clientHeight;return{width:r,height:c}}static getOffset(t){var n=t.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,n){let o=t.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(n,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,n=t.indexOf("MSIE ");if(n>0)return!0;var o=t.indexOf("Trident/");if(o>0){var i=t.indexOf("rv:");return!0}var r=t.indexOf("Edge/");return r>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,n){if(this.isElement(n))n.appendChild(t);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(t);else throw"Cannot append "+n+" to "+t}static removeChild(t,n){if(this.isElement(n))n.removeChild(t);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+n}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode?.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let n=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let o=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let n=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(t,n,o){t[n].apply(t,o)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,n){t&&document.activeElement!==t&&t.focus(n)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,n=""){let o=this.find(t,this.getFocusableSelectorString(n)),i=[];for(let r of o){let c=getComputedStyle(r);this.isVisible(r)&&c.display!="none"&&c.visibility!="hidden"&&i.push(r)}return i}static getFocusableElement(t,n=""){let o=this.findSingle(t,this.getFocusableSelectorString(n));if(o){let i=getComputedStyle(o);if(this.isVisible(o)&&i.display!="none"&&i.visibility!="hidden")return o}return null}static getFirstFocusableElement(t,n=""){let o=this.getFocusableElements(t,n);return o.length>0?o[0]:null}static getLastFocusableElement(t,n){let o=this.getFocusableElements(t,n);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(t,n=!1){let o=e.getFocusableElements(t),i=0;if(o&&o.length>0){let r=o.indexOf(o[0].ownerDocument.activeElement);n?r==-1||r===0?i=o.length-1:i=r-1:r!=-1&&r!==o.length-1&&(i=r+1)}return o[i]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,n){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement?.parentElement;default:let o=typeof t;if(o==="string")return document.querySelector(t);if(o==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let r=(c=>!!(c&&c.constructor&&c.call&&c.apply))(t)?t():t;return r&&r.nodeType===9||this.isExist(r)?r:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,n){if(t){let o=t.getAttribute(n);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,n={},...o){if(t){let i=document.createElement(t);return this.setAttributes(i,n),i.append(...o),i}}static setAttribute(t,n="",o){this.isElement(t)&&o!==null&&o!==void 0&&t.setAttribute(n,o)}static setAttributes(t,n={}){if(this.isElement(t)){let o=(i,r)=>{let c=t?.$attrs?.[i]?[t?.$attrs?.[i]]:[];return[r].flat().reduce((u,k)=>{if(k!=null){let I=typeof k;if(I==="string"||I==="number")u.push(k);else if(I==="object"){let E=Array.isArray(k)?o(i,k):Object.entries(k).map(([Q,M])=>i==="style"&&(M||M===0)?`${Q.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${M}`:M?Q:void 0);u=E.length?u.concat(E.filter(Q=>!!Q)):u}}return u},c)};Object.entries(n).forEach(([i,r])=>{if(r!=null){let c=i.match(/^on(.+)/);c?t.addEventListener(c[1].toLowerCase(),r):i==="pBind"?this.setAttributes(t,r):(r=i==="class"?[...new Set(o("class",r))].join(" ").trim():i==="style"?o("style",r).join(";").trim():r,(t.$attrs=t.$attrs||{})&&(t.$attrs[i]=r),t.setAttribute(i,r))}})}}static isFocusableElement(t,n=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return e})();function vi(){Fe({variableName:pe("scrollbar.width").name})}function _i(){Pe({variableName:pe("scrollbar.width").name})}var It=class{element;listener;scrollableParents;constructor(s,t=()=>{}){this.element=s,this.listener=t}bindScrollListener(){this.scrollableParents=Mt.getScrollableParents(this.element);for(let s=0;s<this.scrollableParents.length;s++)this.scrollableParents[s].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let s=0;s<this.scrollableParents.length;s++)this.scrollableParents[s].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var Je=(()=>{class e extends C{autofocus=!1;focused=!1;platformId=m(Ht);document=m(_e);host=m(xe);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){Y(this.platformId)&&this.autofocus&&setTimeout(()=>{let t=Mt.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=f(e)))(o||e)}})();static \u0275dir=Z({type:e,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[x]})}return e})(),Oi=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=B({type:e});static \u0275inj=P({})}return e})();var tn=`
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
`;var Cn=`
    ${tn}

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
`,In={root:({instance:e})=>["p-badge p-component",{"p-badge-circle":qe(e.value())&&String(e.value()).length===1,"p-badge-dot":Et(e.value()),"p-badge-sm":e.size()==="small"||e.badgeSize()==="small","p-badge-lg":e.size()==="large"||e.badgeSize()==="large","p-badge-xl":e.size()==="xlarge"||e.badgeSize()==="xlarge","p-badge-info":e.severity()==="info","p-badge-success":e.severity()==="success","p-badge-warn":e.severity()==="warn","p-badge-danger":e.severity()==="danger","p-badge-secondary":e.severity()==="secondary","p-badge-contrast":e.severity()==="contrast"}]},en=(()=>{class e extends V{name="badge";theme=Cn;classes=In;static \u0275fac=(()=>{let t;return function(o){return(t||(t=f(e)))(o||e)}})();static \u0275prov=F({token:e,factory:e.\u0275fac})}return e})();var Dt=(()=>{class e extends C{styleClass=z();badgeSize=z();size=z();severity=z();value=z();badgeDisabled=z(!1,{transform:h});_componentStyle=m(en);static \u0275fac=(()=>{let t;return function(o){return(t||(t=f(e)))(o||e)}})();static \u0275cmp=D({type:e,selectors:[["p-badge"]],hostVars:4,hostBindings:function(n,o){n&2&&(b(o.cn(o.cx("root"),o.styleClass())),Se("display",o.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[S([en]),x],decls:1,vars:1,template:function(n,o){n&1&&tt(0),n&2&&et(o.value())},dependencies:[$,O],encapsulation:2,changeDetection:0})}return e})(),Lt=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=B({type:e});static \u0275inj=P({imports:[Dt,O,O]})}return e})();var kn=["*"],Sn={root:"p-fluid"},on=(()=>{class e extends V{name="fluid";classes=Sn;static \u0275fac=(()=>{let t;return function(o){return(t||(t=f(e)))(o||e)}})();static \u0275prov=F({token:e,factory:e.\u0275fac})}return e})();var be=(()=>{class e extends C{_componentStyle=m(on);static \u0275fac=(()=>{let t;return function(o){return(t||(t=f(e)))(o||e)}})();static \u0275cmp=D({type:e,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,o){n&2&&b(o.cx("root"))},features:[S([on]),x],ngContentSelectors:kn,decls:1,vars:0,template:function(n,o){n&1&&(xt(),lt(0))},dependencies:[$],encapsulation:2,changeDetection:0})}return e})();var En=["data-p-icon","spinner"],rn=(()=>{class e extends Ye{pathId;ngOnInit(){super.ngOnInit(),this.pathId="url(#"+vt()+")"}static \u0275fac=(()=>{let t;return function(o){return(t||(t=f(e)))(o||e)}})();static \u0275cmp=D({type:e,selectors:[["","data-p-icon","spinner"]],features:[x],attrs:En,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(Pt(),Gt(0,"g"),Xt(1,"path",0),Yt(),Gt(2,"defs")(3,"clipPath",1),Xt(4,"rect",2),Yt()()),n&2&&(w("clip-path",o.pathId),l(3),Ie("id",o.pathId))},encapsulation:2})}return e})();var sn=`
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
`;var On=`
    ${sn}
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
`,Mn={root:"p-ink"},an=(()=>{class e extends V{name="ripple";theme=On;classes=Mn;static \u0275fac=(()=>{let t;return function(o){return(t||(t=f(e)))(o||e)}})();static \u0275prov=F({token:e,factory:e.\u0275fac})}return e})();var $t=(()=>{class e extends C{zone=m(zt);_componentStyle=m(an);animationListener;mouseDownListener;timeout;constructor(){super(),oe(()=>{Y(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(t){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(Tt(n,"p-ink-active"),!ce(n)&&!ue(n)){let c=Math.max(W(this.el.nativeElement),ot(this.el.nativeElement));n.style.height=c+"px",n.style.width=c+"px"}let o=je(this.el.nativeElement),i=t.pageX-o.left+this.document.body.scrollTop-ue(n)/2,r=t.pageY-o.top+this.document.body.scrollLeft-ce(n)/2;this.renderer.setStyle(n,"top",r+"px"),this.renderer.setStyle(n,"left",i+"px"),yt(n,"p-ink-active"),this.timeout=setTimeout(()=>{let c=this.getInk();c&&Tt(c,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let n=0;n<t.length;n++)if(typeof t[n].className=="string"&&t[n].className.indexOf("p-ink")!==-1)return t[n];return null}resetInk(){let t=this.getInk();t&&Tt(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),Tt(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,We(t))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||e)};static \u0275dir=Z({type:e,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[S([an]),x]})}return e})();var ln=`
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
`;var Dn=["content"],Ln=["loadingicon"],Fn=["icon"],Pn=["*"],pn=e=>({class:e});function Bn(e,s){e&1&&H(0)}function Hn(e,s){if(e&1&&L(0,"span"),e&2){let t=d(3);b(t.cn(t.cx("loadingIcon"),"pi-spin",t.loadingIcon)),w("aria-hidden",!0)("data-pc-section","loadingicon")}}function zn(e,s){if(e&1&&(Pt(),L(0,"svg",7)),e&2){let t=d(3);b(t.cn(t.cx("loadingIcon"),t.spinnerIconClass())),a("spin",!0),w("aria-hidden",!0)("data-pc-section","loadingicon")}}function An(e,s){if(e&1&&(U(0),p(1,Hn,1,4,"span",3)(2,zn,1,5,"svg",6),K()),e&2){let t=d(2);l(),a("ngIf",t.loadingIcon),l(),a("ngIf",!t.loadingIcon)}}function Vn(e,s){}function Rn(e,s){if(e&1&&p(0,Vn,0,0,"ng-template",8),e&2){let t=d(2);a("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function Nn(e,s){if(e&1&&(U(0),p(1,An,3,2,"ng-container",2)(2,Rn,1,1,null,5),K()),e&2){let t=d();l(),a("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),l(),a("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",nt(3,pn,t.cx("loadingIcon")))}}function jn(e,s){if(e&1&&L(0,"span"),e&2){let t=d(2);b(t.cn("icon",t.iconClass())),w("data-pc-section","icon")}}function $n(e,s){}function Wn(e,s){if(e&1&&p(0,$n,0,0,"ng-template",8),e&2){let t=d(2);a("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function Qn(e,s){if(e&1&&(U(0),p(1,jn,1,3,"span",3)(2,Wn,1,1,null,5),K()),e&2){let t=d();l(),a("ngIf",t.icon&&!t.iconTemplate&&!t._iconTemplate),l(),a("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",nt(3,pn,t.cx("icon")))}}function qn(e,s){if(e&1&&(g(0,"span"),tt(1),y()),e&2){let t=d();b(t.cx("label")),w("aria-hidden",t.icon&&!t.label)("data-pc-section","label"),l(),et(t.label)}}function Zn(e,s){if(e&1&&L(0,"p-badge",9),e&2){let t=d();a("value",t.badge)("severity",t.badgeSeverity)}}var Un={root:({instance:e})=>["p-button p-component",{"p-button-icon-only":(e.icon||e.buttonProps?.icon||e.iconTemplate||e._iconTemplate||e.loadingIcon||e.loadingIconTemplate||e._loadingIconTemplate)&&!e.label&&!e.buttonProps?.label,"p-button-vertical":(e.iconPos==="top"||e.iconPos==="bottom")&&e.label,"p-button-loading":e.loading||e.buttonProps?.loading,"p-button-link":e.link||e.buttonProps?.link,[`p-button-${e.severity||e.buttonProps?.severity}`]:e.severity||e.buttonProps?.severity,"p-button-raised":e.raised||e.buttonProps?.raised,"p-button-rounded":e.rounded||e.buttonProps?.rounded,"p-button-text":e.text||e.variant==="text"||e.buttonProps?.text||e.buttonProps?.variant==="text","p-button-outlined":e.outlined||e.variant==="outlined"||e.buttonProps?.outlined||e.buttonProps?.variant==="outlined","p-button-sm":e.size==="small"||e.buttonProps?.size==="small","p-button-lg":e.size==="large"||e.buttonProps?.size==="large","p-button-plain":e.plain||e.buttonProps?.plain,"p-button-fluid":e.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos||e.buttonProps?.iconPos}`]:e.label||e.buttonProps?.label,"p-button-icon-left":(e.iconPos==="left"||e.buttonProps?.iconPos==="left")&&e.label||e.buttonProps?.label,"p-button-icon-right":(e.iconPos==="right"||e.buttonProps?.iconPos==="right")&&e.label||e.buttonProps?.label},e.icon,e.buttonProps?.icon],spinnerIcon:({instance:e})=>Object.entries(e.iconClass()).filter(([,s])=>!!s).reduce((s,[t])=>s+` ${t}`,"p-button-loading-icon"),label:"p-button-label"},pt=(()=>{class e extends V{name="button";theme=ln;classes=Un;static \u0275fac=(()=>{let t;return function(o){return(t||(t=f(e)))(o||e)}})();static \u0275prov=F({token:e,factory:e.\u0275fac})}return e})();var ut={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},dn=(()=>{class e extends C{_componentStyle=m(pt);static \u0275fac=(()=>{let t;return function(o){return(t||(t=f(e)))(o||e)}})();static \u0275dir=Z({type:e,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(n,o){n&2&&At("p-button-label",!0)},features:[S([pt]),x]})}return e})(),cn=(()=>{class e extends C{_componentStyle=m(pt);static \u0275fac=(()=>{let t;return function(o){return(t||(t=f(e)))(o||e)}})();static \u0275dir=Z({type:e,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(n,o){n&2&&At("p-button-icon",!0)},features:[S([pt]),x]})}return e})(),Vr=(()=>{class e extends C{iconPos="left";loadingIcon;set label(t){this._label=t,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}set icon(t){this._icon=t,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(t){this._loading=t,this.initialized&&(this.updateIcon(),this.setStyleClass())}_buttonProps;iconSignal=ie(cn);labelSignal=ie(dn);isIconOnly=j(()=>!!(!this.labelSignal()&&this.iconSignal()));set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([n,o])=>this[`_${n}`]!==o&&(this[`_${n}`]=o))}_severity;get severity(){return this._severity}set severity(t){this._severity=t,this.initialized&&this.setStyleClass()}raised=!1;rounded=!1;text=!1;outlined=!1;size=null;plain=!1;fluid=z(void 0,{transform:h});_label;_icon;_loading=!1;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(ut);pcFluid=m(be,{optional:!0,host:!0,skipSelf:!0});isTextButton=j(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}get icon(){return this._icon}get buttonProps(){return this._buttonProps}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
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
    </svg>`;_componentStyle=m(pt);ngAfterViewInit(){super.ngAfterViewInit(),yt(this.htmlElement,this.getStyleClass().join(" ")),this.createIcon(),this.createLabel(),this.initialized=!0}getStyleClass(){let t=[ut.button,ut.component];return this.icon&&!this.label&&Et(this.htmlElement.textContent)&&t.push(ut.iconOnly),this.loading&&(t.push(ut.disabled,ut.loading),!this.icon&&this.label&&t.push(ut.labelOnly),this.icon&&!this.label&&!Et(this.htmlElement.textContent)&&t.push(ut.iconOnly)),this.text&&t.push("p-button-text"),this.severity&&t.push(`p-button-${this.severity}`),this.plain&&t.push("p-button-plain"),this.raised&&t.push("p-button-raised"),this.size&&t.push(`p-button-${this.size}`),this.outlined&&t.push("p-button-outlined"),this.rounded&&t.push("p-button-rounded"),this.size==="small"&&t.push("p-button-sm"),this.size==="large"&&t.push("p-button-lg"),this.hasFluid&&t.push("p-button-fluid"),t}get hasFluid(){return this.fluid()??!!this.pcFluid}setStyleClass(){let t=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...t)}removeExistingSeverityClass(){let t=["success","info","warn","danger","help","primary","secondary","contrast"],n=this.htmlElement.classList.value.split(" ").find(o=>t.some(i=>o===`p-button-${i}`));n&&this.htmlElement.classList.remove(n)}createLabel(){if(!A(this.htmlElement,".p-button-label")&&this.label){let n=this.document.createElement("span");this.icon&&!this.label&&n.setAttribute("aria-hidden","true"),n.className="p-button-label",n.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(n)}}createIcon(){if(!A(this.htmlElement,".p-button-icon")&&(this.icon||this.loading)){let n=this.document.createElement("span");n.className="p-button-icon",n.setAttribute("aria-hidden","true");let o=this.label?"p-button-icon-"+this.iconPos:null;o&&yt(n,o);let i=this.getIconClass();i&&yt(n,i),!this.loadingIcon&&this.loading&&(n.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(n,this.htmlElement.firstChild)}}updateLabel(){let t=A(this.htmlElement,".p-button-label");if(!this.label){t&&this.htmlElement.removeChild(t);return}t?t.textContent=this.label:this.createLabel()}updateIcon(){let t=A(this.htmlElement,".p-button-icon"),n=A(this.htmlElement,".p-button-label");this.loading&&!this.loadingIcon&&t?t.innerHTML=this.spinnerIcon:t?.innerHTML&&(t.innerHTML=""),t?this.iconPos?t.className="p-button-icon "+(n?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():t.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}ngOnDestroy(){this.initialized=!1,super.ngOnDestroy()}static \u0275fac=(()=>{let t;return function(o){return(t||(t=f(e)))(o||e)}})();static \u0275dir=Z({type:e,selectors:[["","pButton",""]],contentQueries:function(n,o,i){n&1&&(te(i,o.iconSignal,cn,5),te(i,o.labelSignal,dn,5)),n&2&&ke(2)},hostVars:4,hostBindings:function(n,o){n&2&&At("p-button-icon-only",o.isIconOnly())("p-button-text",o.isTextButton())},inputs:{iconPos:"iconPos",loadingIcon:"loadingIcon",loading:"loading",severity:"severity",raised:[2,"raised","raised",h],rounded:[2,"rounded","rounded",h],text:[2,"text","text",h],outlined:[2,"outlined","outlined",h],size:"size",plain:[2,"plain","plain",h],fluid:[1,"fluid"],label:"label",icon:"icon",buttonProps:"buttonProps"},features:[S([pt]),x]})}return e})(),me=(()=>{class e extends C{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;buttonProps;autofocus;fluid=z(void 0,{transform:h});onClick=new X;onFocus=new X;onBlur=new X;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=m(be,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}_componentStyle=m(pt);_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"loadingicon":this._loadingIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,t])=>!!t).reduce((t,[n])=>t+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,[this.icon]:!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}static \u0275fac=(()=>{let t;return function(o){return(t||(t=f(e)))(o||e)}})();static \u0275cmp=D({type:e,selectors:[["p-button"]],contentQueries:function(n,o,i){if(n&1&&(T(i,Dn,5),T(i,Ln,5),T(i,Fn,5),T(i,Ct,4)),n&2){let r;v(r=_())&&(o.contentTemplate=r.first),v(r=_())&&(o.loadingIconTemplate=r.first),v(r=_())&&(o.iconTemplate=r.first),v(r=_())&&(o.templates=r)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",h],loading:[2,"loading","loading",h],loadingIcon:"loadingIcon",raised:[2,"raised","raised",h],rounded:[2,"rounded","rounded",h],text:[2,"text","text",h],plain:[2,"plain","plain",h],severity:"severity",outlined:[2,"outlined","outlined",h],link:[2,"link","link",h],tabindex:[2,"tabindex","tabindex",G],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",buttonProps:"buttonProps",autofocus:[2,"autofocus","autofocus",h],fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[S([pt]),x],ngContentSelectors:Pn,decls:7,vars:15,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","spin",4,"ngIf"],["data-p-icon","spinner",3,"spin"],[3,"ngIf"],[3,"value","severity"]],template:function(n,o){n&1&&(xt(),g(0,"button",0),J("click",function(r){return o.onClick.emit(r)})("focus",function(r){return o.onFocus.emit(r)})("blur",function(r){return o.onBlur.emit(r)}),lt(1),p(2,Bn,1,0,"ng-container",1)(3,Nn,3,5,"ng-container",2)(4,Qn,3,5,"ng-container",2)(5,qn,2,5,"span",3)(6,Zn,1,2,"p-badge",4),y()),n&2&&(b(o.cn(o.cx("root"),o.styleClass,o.buttonProps==null?null:o.buttonProps.styleClass)),a("ngStyle",o.style||(o.buttonProps==null?null:o.buttonProps.style))("disabled",o.disabled||o.loading||(o.buttonProps==null?null:o.buttonProps.disabled))("pAutoFocus",o.autofocus||(o.buttonProps==null?null:o.buttonProps.autofocus)),w("type",o.type||(o.buttonProps==null?null:o.buttonProps.type))("aria-label",o.ariaLabel||(o.buttonProps==null?null:o.buttonProps.ariaLabel))("data-pc-name","button")("data-pc-section","root")("tabindex",o.tabindex||(o.buttonProps==null?null:o.buttonProps.tabindex)),l(2),a("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),l(),a("ngIf",o.loading),l(),a("ngIf",!o.loading),l(),a("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.label),l(),a("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.badge))},dependencies:[$,ft,gt,jt,$t,Je,rn,Lt,Dt,O],encapsulation:2,changeDetection:0})}return e})(),bn=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=B({type:e});static \u0275inj=P({imports:[$,me,O,O]})}return e})();function ts(e){e||(e=m(Bt));let s=new ge(t=>{if(e.destroyed){t.next();return}return e.onDestroy(t.next.bind(t))});return t=>t.pipe(ye(s))}function es(e,s){let n=!s?.manualCleanup?s?.injector?.get(Bt)??m(Bt):null,o=Gn(s?.equal),i;s?.requireSync?i=st({kind:0},{equal:o}):i=st({kind:1,value:s?.initialValue},{equal:o});let r,c=e.subscribe({next:u=>i.set({kind:1,value:u}),error:u=>{i.set({kind:2,error:u}),r?.()},complete:()=>{r?.()}});if(s?.requireSync&&i().kind===0)throw new Zt(601,!1);return r=n?.onDestroy(c.unsubscribe.bind(c)),j(()=>{let u=i();switch(u.kind){case 1:return u.value;case 2:throw u.error;case 0:throw new Zt(601,!1)}},{equal:s?.equal})}function Gn(e=Object.is){return(s,t)=>s.kind===1&&t.kind===1&&e(s.value,t.value)}var mn=`
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
`;var Yn=["header"],Xn=["title"],Jn=["subtitle"],to=["content"],eo=["footer"],no=["*",[["p-header"]],[["p-footer"]]],oo=["*","p-header","p-footer"];function io(e,s){e&1&&H(0)}function ro(e,s){if(e&1&&(g(0,"div"),lt(1,1),p(2,io,1,0,"ng-container",1),y()),e&2){let t=d();b(t.cx("header")),l(2),a("ngTemplateOutlet",t.headerTemplate||t._headerTemplate)}}function so(e,s){if(e&1&&(U(0),tt(1),K()),e&2){let t=d(2);l(),et(t.header)}}function ao(e,s){e&1&&H(0)}function lo(e,s){if(e&1&&(g(0,"div"),p(1,so,2,1,"ng-container",2)(2,ao,1,0,"ng-container",1),y()),e&2){let t=d();b(t.cx("title")),l(),a("ngIf",t.header&&!t._titleTemplate&&!t.titleTemplate),l(),a("ngTemplateOutlet",t.titleTemplate||t._titleTemplate)}}function co(e,s){if(e&1&&(U(0),tt(1),K()),e&2){let t=d(2);l(),et(t.subheader)}}function uo(e,s){e&1&&H(0)}function po(e,s){if(e&1&&(g(0,"div"),p(1,co,2,1,"ng-container",2)(2,uo,1,0,"ng-container",1),y()),e&2){let t=d();b(t.cx("subtitle")),l(),a("ngIf",t.subheader&&!t._subtitleTemplate&&!t.subtitleTemplate),l(),a("ngTemplateOutlet",t.subtitleTemplate||t._subtitleTemplate)}}function bo(e,s){e&1&&H(0)}function mo(e,s){e&1&&H(0)}function ho(e,s){if(e&1&&(g(0,"div"),lt(1,2),p(2,mo,1,0,"ng-container",1),y()),e&2){let t=d();b(t.cx("footer")),l(2),a("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var fo=`
    ${mn}

    .p-card {
        display: block;
    }
`,go={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},hn=(()=>{class e extends V{name="card";theme=fo;classes=go;static \u0275fac=(()=>{let t;return function(o){return(t||(t=f(e)))(o||e)}})();static \u0275prov=F({token:e,factory:e.\u0275fac})}return e})();var yo=(()=>{class e extends C{header;subheader;set style(t){Ze(this._style(),t)||this._style.set(t)}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=st(null);_componentStyle=m(hn);getBlockableElement(){return this.el.nativeElement.children[0]}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"title":this._titleTemplate=t.template;break;case"subtitle":this._subtitleTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=f(e)))(o||e)}})();static \u0275cmp=D({type:e,selectors:[["p-card"]],contentQueries:function(n,o,i){if(n&1&&(T(i,Ke,5),T(i,Ge,5),T(i,Yn,4),T(i,Xn,4),T(i,Jn,4),T(i,to,4),T(i,eo,4),T(i,Ct,4)),n&2){let r;v(r=_())&&(o.headerFacet=r.first),v(r=_())&&(o.footerFacet=r.first),v(r=_())&&(o.headerTemplate=r.first),v(r=_())&&(o.titleTemplate=r.first),v(r=_())&&(o.subtitleTemplate=r.first),v(r=_())&&(o.contentTemplate=r.first),v(r=_())&&(o.footerTemplate=r.first),v(r=_())&&(o.templates=r)}},hostVars:5,hostBindings:function(n,o){n&2&&(w("data-pc-name","card"),dt(o._style()),b(o.cn(o.cx("root"),o.styleClass)))},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[S([hn]),x],ngContentSelectors:oo,decls:8,vars:9,consts:[[3,"class",4,"ngIf"],[4,"ngTemplateOutlet"],[4,"ngIf"]],template:function(n,o){n&1&&(xt(no),p(0,ro,3,3,"div",0),g(1,"div"),p(2,lo,3,4,"div",0)(3,po,3,4,"div",0),g(4,"div"),lt(5),p(6,bo,1,0,"ng-container",1),y(),p(7,ho,3,3,"div",0),y()),n&2&&(a("ngIf",o.headerFacet||o.headerTemplate||o._headerTemplate),l(),b(o.cx("body")),l(),a("ngIf",o.header||o.titleTemplate||o._titleTemplate),l(),a("ngIf",o.subheader||o.subtitleTemplate||o._subtitleTemplate),l(),b(o.cx("content")),l(2),a("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),l(),a("ngIf",o.footerFacet||o.footerTemplate||o._footerTemplate))},dependencies:[$,ft,gt,O],encapsulation:2,changeDetection:0})}return e})(),_s=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=B({type:e});static \u0275inj=P({imports:[yo,O,O]})}return e})();var fn=`
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
`;var vo={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},gn=(()=>{class e extends V{name="tooltip";theme=fn;classes=vo;static \u0275fac=(()=>{let t;return function(o){return(t||(t=f(e)))(o||e)}})();static \u0275prov=F({token:e,factory:e.\u0275fac})}return e})();var yn=(()=>{class e extends C{zone;viewContainer;tooltipPosition;tooltipEvent="hover";positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this.deactivate()}tooltipOptions;appendTo=z(void 0);$appendTo=j(()=>this.appendTo()||this.config.overlayAppendTo());_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:vt("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=m(gn);interactionInProgress=!1;constructor(t,n){super(),this.zone=t,this.viewContainer=n}ngAfterViewInit(){super.ngAfterViewInit(),Y(this.platformId)&&this.zone.runOutsideAngular(()=>{let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),t==="focus"||t==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.addEventListener("focus",this.focusListener),n.addEventListener("blur",this.blurListener)}})}ngOnChanges(t){super.ngOnChanges(t),t.tooltipPosition&&this.setOption({tooltipPosition:t.tooltipPosition.currentValue}),t.tooltipEvent&&this.setOption({tooltipEvent:t.tooltipEvent.currentValue}),t.appendTo&&this.setOption({appendTo:t.appendTo.currentValue}),t.positionStyle&&this.setOption({positionStyle:t.positionStyle.currentValue}),t.tooltipStyleClass&&this.setOption({tooltipStyleClass:t.tooltipStyleClass.currentValue}),t.tooltipZIndex&&this.setOption({tooltipZIndex:t.tooltipZIndex.currentValue}),t.escape&&this.setOption({escape:t.escape.currentValue}),t.showDelay&&this.setOption({showDelay:t.showDelay.currentValue}),t.hideDelay&&this.setOption({hideDelay:t.hideDelay.currentValue}),t.life&&this.setOption({life:t.life.currentValue}),t.positionTop&&this.setOption({positionTop:t.positionTop.currentValue}),t.positionLeft&&this.setOption({positionLeft:t.positionLeft.currentValue}),t.disabled&&this.setOption({disabled:t.disabled.currentValue}),t.content&&(this.setOption({tooltipLabel:t.content.currentValue}),this.active&&(t.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),t.autoHide&&this.setOption({autoHide:t.autoHide.currentValue}),t.id&&this.setOption({id:t.id.currentValue}),t.tooltipOptions&&(this._tooltipOptions=_t(_t({},this._tooltipOptions),t.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(t){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(t){this.isAutoHide()?this.deactivate():!(wt(t.relatedTarget,"p-tooltip")||wt(t.relatedTarget,"p-tooltip-text")||wt(t.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(t){this.activate()}onBlur(t){this.deactivate()}onInputClick(t){this.deactivate()}activate(){if(!this.interactionInProgress){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let t=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},t)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener?.()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div"),this.container.setAttribute("id",this.getOption("id")),this.container.setAttribute("role","tooltip");let t=document.createElement("div");t.className="p-tooltip-arrow",t.setAttribute("data-pc-section","arrow"),this.container.appendChild(t),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?de(this.container,this.el.nativeElement):de(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let t=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(t,"mouseleave",n=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),Ne(this.container,250),this.getOption("tooltipZIndex")==="auto"?ct.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&ct.clear(this.container),this.remove()}updateText(){let t=this.getOption("tooltipLabel");if(t&&typeof t.createEmbeddedView=="function"){let n=this.viewContainer.createEmbeddedView(t);n.detectChanges(),n.rootNodes.forEach(o=>this.tooltipText.appendChild(o))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(t))):this.tooltipText.innerHTML=t}align(){let t=this.getOption("tooltipPosition"),o={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]}[t]||[];for(let[i,r]of o.entries())if(i===0)r.call(this);else if(this.isOutOfBounds())r.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let t=this.el.nativeElement.getBoundingClientRect(),n=t.left+ze(),o=t.top+Ae();return{left:n,top:o}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.startsWith("P-")?A(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let t=this.activeElement,n=W(t),o=(ot(t)-ot(this.container))/2;this.alignTooltip(n,o);let i=this.getArrowElement();i.style.top="50%",i.style.right=null,i.style.bottom=null,i.style.left="0"}alignLeft(){this.preAlign("left");let t=this.getArrowElement(),n=W(this.container),o=(ot(this.el.nativeElement)-ot(this.container))/2;this.alignTooltip(-n,o),t.style.top="50%",t.style.right="0",t.style.bottom=null,t.style.left=null}alignTop(){this.preAlign("top");let t=this.getArrowElement(),n=this.getHostOffset(),o=W(this.container),i=(W(this.el.nativeElement)-W(this.container))/2,r=ot(this.container);this.alignTooltip(i,-r);let c=n.left-this.getHostOffset().left+o/2;t.style.top=null,t.style.right=null,t.style.bottom="0",t.style.left=c+"px"}getArrowElement(){return A(this.container,'[data-pc-section="arrow"]')}alignBottom(){this.preAlign("bottom");let t=this.getArrowElement(),n=W(this.container),o=this.getHostOffset(),i=(W(this.el.nativeElement)-W(this.container))/2,r=ot(this.el.nativeElement);this.alignTooltip(i,r);let c=o.left-this.getHostOffset().left+n/2;t.style.top="0",t.style.right=null,t.style.bottom=null,t.style.left=c+"px"}alignTooltip(t,n){let o=this.getHostOffset(),i=o.left+t,r=o.top+n;this.container.style.left=i+this.getOption("positionLeft")+"px",this.container.style.top=r+this.getOption("positionTop")+"px"}setOption(t){this._tooltipOptions=_t(_t({},this._tooltipOptions),t)}getOption(t){return this._tooltipOptions[t]}getTarget(t){return wt(t,"p-inputwrapper")?A(t,"input"):t}preAlign(t){this.container.style.left="-999px",this.container.style.top="-999px";let n="p-tooltip p-component p-tooltip-"+t;this.container.className=this.getOption("tooltipStyleClass")?n+" "+this.getOption("tooltipStyleClass"):n}isOutOfBounds(){let t=this.container.getBoundingClientRect(),n=t.top,o=t.left,i=W(this.container),r=ot(this.container),c=He();return o+i>c.width||o<0||n<0||n+r>c.height}onWindowResize(t){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new It(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),t==="focus"||t==="both"){let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.removeEventListener("focus",this.focusListener),n.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):Qe(this.getOption("appendTo"),this.container)),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),super.ngOnDestroy(),this.container&&ct.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(n){return new(n||e)(at(zt),at(Te))};static \u0275dir=Z({type:e,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",h],showDelay:[2,"showDelay","showDelay",G],hideDelay:[2,"hideDelay","hideDelay",G],life:[2,"life","life",G],positionTop:[2,"positionTop","positionTop",G],positionLeft:[2,"positionLeft","positionLeft",G],autoHide:[2,"autoHide","autoHide",h],fitContent:[2,"fitContent","fitContent",h],hideOnEscape:[2,"hideOnEscape","hideOnEscape",h],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions",appendTo:[1,"appendTo"]},features:[S([gn]),x,Ut]})}return e})(),he=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=B({type:e});static \u0275inj=P({})}return e})();var vn=`
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
`;var xo=["pMenuItemContent",""],Qt=e=>({$implicit:e}),wo=()=>({exact:!1}),To=e=>({item:e});function Co(e,s){e&1&&H(0)}function Io(e,s){if(e&1&&(g(0,"a",6),p(1,Co,1,0,"ng-container",7),y()),e&2){let t=d(2),n=ht(4);b(t.cx("itemLink")),a("target",t.item.target),w("title",t.item.title)("href",t.item.url||null,we)("data-automationid",t.item.automationId)("tabindex",-1)("data-pc-section","action"),l(),a("ngTemplateOutlet",n)("ngTemplateOutletContext",nt(10,Qt,t.item))}}function ko(e,s){e&1&&H(0)}function So(e,s){if(e&1&&(g(0,"a",8),p(1,ko,1,0,"ng-container",7),y()),e&2){let t=d(2),n=ht(4);b(t.cx("itemLink")),a("routerLink",t.item.routerLink)("queryParams",t.item.queryParams)("routerLinkActiveOptions",t.item.routerLinkActiveOptions||Vt(18,wo))("target",t.item.target)("fragment",t.item.fragment)("queryParamsHandling",t.item.queryParamsHandling)("preserveFragment",t.item.preserveFragment)("skipLocationChange",t.item.skipLocationChange)("replaceUrl",t.item.replaceUrl)("state",t.item.state),w("data-automationid",t.item.automationId)("tabindex",-1)("data-pc-section","action")("title",t.item.title),l(),a("ngTemplateOutlet",n)("ngTemplateOutletContext",nt(19,Qt,t.item))}}function Eo(e,s){if(e&1&&(U(0),p(1,Io,2,12,"a",4)(2,So,2,21,"a",5),K()),e&2){let t=d();l(),a("ngIf",!(t.item!=null&&t.item.routerLink)),l(),a("ngIf",t.item==null?null:t.item.routerLink)}}function Oo(e,s){}function Mo(e,s){e&1&&p(0,Oo,0,0,"ng-template")}function Do(e,s){if(e&1&&(U(0),p(1,Mo,1,0,null,7),K()),e&2){let t=d();l(),a("ngTemplateOutlet",t.itemTemplate)("ngTemplateOutletContext",nt(2,Qt,t.item))}}function Lo(e,s){if(e&1&&L(0,"span"),e&2){let t=d(2);dt(t.item.iconStyle),b(t.cx("itemIcon",nt(4,To,t.item)))}}function Fo(e,s){if(e&1&&(g(0,"span"),tt(1),y()),e&2){let t=d(2);b(t.cx("itemLabel")),l(),et(t.item.label)}}function Po(e,s){if(e&1&&(L(0,"span",12),ee(1,"safeHtml")),e&2){let t=d(2);a("innerHTML",ne(1,1,t.item.label),Kt)}}function Bo(e,s){if(e&1&&L(0,"p-badge",13),e&2){let t=d(2);a("styleClass",t.item.badgeStyleClass)("value",t.item.badge)}}function Ho(e,s){if(e&1&&p(0,Lo,1,6,"span",9)(1,Fo,2,3,"span",10)(2,Po,2,3,"ng-template",null,1,Nt)(4,Bo,1,2,"p-badge",11),e&2){let t=ht(3),n=d();a("ngIf",n.item.icon),l(),a("ngIf",n.item.escape!==!1)("ngIfElse",t),l(3),a("ngIf",n.item.badge)}}var zo=["start"],Ao=["end"],Vo=["header"],Ro=["item"],No=["submenuheader"],jo=["list"],$o=["container"],Wo=(e,s)=>({showTransitionParams:e,hideTransitionParams:s}),Qo=e=>({value:"visible",params:e}),_n=(e,s)=>({item:e,id:s});function qo(e,s){e&1&&H(0)}function Zo(e,s){if(e&1&&(g(0,"div"),p(1,qo,1,0,"ng-container",8),y()),e&2){let t=d(2);b(t.cx("start")),w("data-pc-section","start"),l(),a("ngTemplateOutlet",t.startTemplate??t._startTemplate)}}function Uo(e,s){if(e&1&&L(0,"li",12),e&2){let t=d(4);b(t.cx("separator"))}}function Ko(e,s){if(e&1&&(g(0,"span"),tt(1),y()),e&2){let t=d(3).$implicit;l(),et(t.label)}}function Go(e,s){if(e&1&&(L(0,"span",16),ee(1,"safeHtml")),e&2){let t=d(3).$implicit;a("innerHTML",ne(1,1,t.label),Kt)}}function Yo(e,s){if(e&1&&(U(0),p(1,Ko,2,1,"span",15)(2,Go,2,3,"ng-template",null,2,Nt),K()),e&2){let t=ht(3),n=d(2).$implicit;l(),a("ngIf",n.escape!==!1)("ngIfElse",t)}}function Xo(e,s){e&1&&H(0)}function Jo(e,s){if(e&1&&(g(0,"li",13),p(1,Yo,4,2,"ng-container",7)(2,Xo,1,0,"ng-container",14),y()),e&2){let t=d(),n=t.$implicit,o=t.index,i=d(3);b(i.cx("submenuLabel")),a("tooltipOptions",n.tooltipOptions),w("data-automationid",n.automationId)("id",i.menuitemId(n,i.id,o)),l(),a("ngIf",!i.submenuHeaderTemplate&&!i._submenuHeaderTemplate),l(),a("ngTemplateOutlet",i.submenuHeaderTemplate??i._submenuHeaderTemplate)("ngTemplateOutletContext",nt(8,Qt,n))}}function ti(e,s){if(e&1&&L(0,"li",12),e&2){let t=d(5);b(t.cx("separator"))}}function ei(e,s){if(e&1){let t=mt();g(0,"li",18),J("onMenuItemClick",function(o){R(t);let i=d(),r=i.$implicit,c=i.index,u=d().index,k=d(3);return N(k.itemClick(o,k.menuitemId(r,k.id,u,c)))}),y()}if(e&2){let t=d(),n=t.$implicit,o=t.index,i=d().index,r=d(3);dt(n.style),b(r.cn(r.cx("item",Rt(13,_n,n,r.menuitemId(n,r.id,i,o))),n==null?null:n.styleClass)),a("pMenuItemContent",n)("itemTemplate",r.itemTemplate??r._itemTemplate)("tooltipOptions",n.tooltipOptions),w("data-pc-section","menuitem")("aria-label",r.label(n.label))("data-p-focused",r.isItemFocused(r.menuitemId(n,r.id,i,o)))("data-p-disabled",r.disabled(n.disabled))("aria-disabled",r.disabled(n.disabled))("id",r.menuitemId(n,r.id,i,o))}}function ni(e,s){if(e&1&&p(0,ti,1,2,"li",10)(1,ei,1,16,"li",17),e&2){let t=s.$implicit,n=d().$implicit;a("ngIf",t.separator&&(t.visible!==!1||n.visible!==!1)),l(),a("ngIf",!t.separator&&t.visible!==!1&&(t.visible!==void 0||n.visible!==!1))}}function oi(e,s){if(e&1&&p(0,Uo,1,2,"li",10)(1,Jo,3,10,"li",11)(2,ni,2,2,"ng-template",9),e&2){let t=s.$implicit;a("ngIf",t.separator&&t.visible!==!1),l(),a("ngIf",!t.separator),l(),a("ngForOf",t.items)}}function ii(e,s){if(e&1&&p(0,oi,3,3,"ng-template",9),e&2){let t=d(2);a("ngForOf",t.model)}}function ri(e,s){if(e&1&&L(0,"li",12),e&2){let t=d(4);b(t.cx("separator"))}}function si(e,s){if(e&1){let t=mt();g(0,"li",20),J("onMenuItemClick",function(o){R(t);let i=d(),r=i.$implicit,c=i.index,u=d(3);return N(u.itemClick(o,u.menuitemId(r,u.id,c)))}),y()}if(e&2){let t=d(),n=t.$implicit,o=t.index,i=d(3);b(i.cn(i.cx("item",Rt(12,_n,n,i.menuitemId(n,i.id,o))),n==null?null:n.styleClass)),a("pMenuItemContent",n)("itemTemplate",i.itemTemplate??i._itemTemplate)("ngStyle",n.style)("tooltipOptions",n.tooltipOptions),w("data-pc-section","menuitem")("aria-label",i.label(n.label))("data-p-focused",i.isItemFocused(i.menuitemId(n,i.id,o)))("data-p-disabled",i.disabled(n.disabled))("aria-disabled",i.disabled(n.disabled))("id",i.menuitemId(n,i.id,o))}}function ai(e,s){if(e&1&&p(0,ri,1,2,"li",10)(1,si,1,15,"li",19),e&2){let t=s.$implicit;a("ngIf",t.separator&&t.visible!==!1),l(),a("ngIf",!t.separator&&t.visible!==!1)}}function li(e,s){if(e&1&&p(0,ai,2,2,"ng-template",9),e&2){let t=d(2);a("ngForOf",t.model)}}function di(e,s){e&1&&H(0)}function ci(e,s){if(e&1&&(g(0,"div"),p(1,di,1,0,"ng-container",8),y()),e&2){let t=d(2);b(t.cx("end")),w("data-pc-section","end"),l(),a("ngTemplateOutlet",t.endTemplate??t._endTemplate)}}function ui(e,s){if(e&1){let t=mt();g(0,"div",4,0),J("click",function(o){R(t);let i=d();return N(i.onOverlayClick(o))})("@overlayAnimation.start",function(o){R(t);let i=d();return N(i.onOverlayAnimationStart(o))})("@overlayAnimation.done",function(o){R(t);let i=d();return N(i.onOverlayAnimationEnd(o))}),p(2,Zo,2,4,"div",5),g(3,"ul",6,1),J("focus",function(o){R(t);let i=d();return N(i.onListFocus(o))})("blur",function(o){R(t);let i=d();return N(i.onListBlur(o))})("keydown",function(o){R(t);let i=d();return N(i.onListKeyDown(o))}),p(5,ii,1,1,null,7)(6,li,1,1,null,7),y(),p(7,ci,2,4,"div",5),y()}if(e&2){let t=d();dt(t.sx("root")),b(t.cn(t.cx("root"),t.styleClass)),a("ngStyle",t.style)("@overlayAnimation",nt(24,Qo,Rt(21,Wo,t.showTransitionOptions,t.hideTransitionOptions)))("@.disabled",t.popup!==!0),w("data-pc-name","menu")("id",t.id),l(2),a("ngIf",t.startTemplate??t._startTemplate),l(),b(t.cx("list")),w("id",t.id+"_list")("tabindex",t.getTabIndexValue())("data-pc-section","menu")("aria-activedescendant",t.activedescendant())("aria-label",t.ariaLabel)("aria-labelledBy",t.ariaLabelledBy),l(2),a("ngIf",t.hasSubMenu()),l(),a("ngIf",!t.hasSubMenu()),l(),a("ngIf",t.endTemplate??t._endTemplate)}}var pi={root:({instance:e})=>({position:e.popup?"absolute":"relative"})},bi={root:({instance:e})=>["p-menu p-component",{"p-menu-overlay":e.popup}],start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:({instance:e,item:s,id:t})=>["p-menu-item",{"p-focus":e.focusedOptionId()&&t===e.focusedOptionId(),"p-disabled":e.disabled(s.disabled)},s.styleClass],itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:({item:e})=>["p-menu-item-icon",e.icon,e.iconClass],itemLabel:"p-menu-item-label"},Wt=(()=>{class e extends V{name="menu";theme=vn;classes=bi;inlineStyles=pi;static \u0275fac=(()=>{let t;return function(o){return(t||(t=f(e)))(o||e)}})();static \u0275prov=F({token:e,factory:e.\u0275fac})}return e})();var xn=(()=>{class e{platformId;sanitizer;constructor(t,n){this.platformId=t,this.sanitizer=n}transform(t){return!t||!Y(this.platformId)?t:this.sanitizer.bypassSecurityTrustHtml(t)}static \u0275fac=function(n){return new(n||e)(at(Ht,16),at(Oe,16))};static \u0275pipe=Ce({name:"safeHtml",type:e,pure:!0})}return e})(),mi=(()=>{class e extends C{item;itemTemplate;onMenuItemClick=new X;menu;_componentStyle=m(Wt);constructor(t){super(),this.menu=t}onItemClick(t,n){this.onMenuItemClick.emit({originalEvent:t,item:n})}static \u0275fac=function(n){return new(n||e)(at(ve(()=>qt)))};static \u0275cmp=D({type:e,selectors:[["","pMenuItemContent",""]],inputs:{item:[0,"pMenuItemContent","item"],itemTemplate:"itemTemplate"},outputs:{onMenuItemClick:"onMenuItemClick"},features:[S([Wt]),x],attrs:xo,decls:5,vars:5,consts:[["itemContent",""],["htmlLabel",""],[3,"click"],[4,"ngIf"],["pRipple","",3,"class","target",4,"ngIf"],["routerLinkActive","p-menu-item-link-active","pRipple","",3,"routerLink","queryParams","routerLinkActiveOptions","class","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],["pRipple","",3,"target"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["routerLinkActive","p-menu-item-link-active","pRipple","",3,"routerLink","queryParams","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],[3,"class","style",4,"ngIf"],[3,"class",4,"ngIf","ngIfElse"],[3,"styleClass","value",4,"ngIf"],[1,"p-menu-item-label",3,"innerHTML"],[3,"styleClass","value"]],template:function(n,o){if(n&1){let i=mt();g(0,"div",2),J("click",function(c){return R(i),N(o.onItemClick(c,o.item))}),p(1,Eo,3,2,"ng-container",3)(2,Do,2,4,"ng-container",3)(3,Ho,5,4,"ng-template",null,0,Nt),y()}n&2&&(b(o.cx("itemContent")),w("data-pc-section","content"),l(),a("ngIf",!o.itemTemplate),l(),a("ngIf",o.itemTemplate))},dependencies:[$,ft,gt,re,Me,De,$t,he,Lt,Dt,O,xn],encapsulation:2})}return e})(),qt=(()=>{class e extends C{overlayService;model;popup;style;styleClass;autoZIndex=!0;baseZIndex=0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";ariaLabel;ariaLabelledBy;id;tabindex=0;appendTo=z(void 0);onShow=new X;onHide=new X;onBlur=new X;onFocus=new X;listViewChild;containerViewChild;$appendTo=j(()=>this.appendTo()||this.config.overlayAppendTo());container;scrollHandler;documentClickListener;documentResizeListener;preventDocumentDefault;target;visible;focusedOptionId=j(()=>this.focusedOptionIndex()!==-1?this.focusedOptionIndex():null);focusedOptionIndex=st(-1);selectedOptionIndex=st(-1);focused=!1;overlayVisible=!1;relativeAlign;_componentStyle=m(Wt);constructor(t){super(),this.overlayService=t,this.id=this.id||vt("pn_id_")}toggle(t){this.visible?this.hide():this.show(t),this.preventDocumentDefault=!0}show(t){this.target=t.currentTarget,this.relativeAlign=t.relativeAlign,this.visible=!0,this.preventDocumentDefault=!0,this.overlayVisible=!0,this.cd.markForCheck()}ngOnInit(){super.ngOnInit(),this.popup||this.bindDocumentClickListener()}startTemplate;_startTemplate;endTemplate;_endTemplate;headerTemplate;_headerTemplate;itemTemplate;_itemTemplate;submenuHeaderTemplate;_submenuHeaderTemplate;templates;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"start":this._startTemplate=t.template;break;case"end":this._endTemplate=t.template;break;case"item":this._itemTemplate=t.template;break;case"submenuheader":this._submenuHeaderTemplate=t.template;break;default:this._itemTemplate=t.template;break}})}getTabIndexValue(){return this.tabindex!==void 0?this.tabindex.toString():null}onOverlayAnimationStart(t){switch(t.toState){case"visible":this.popup&&(this.container=t.element,this.moveOnTop(),this.onShow.emit({}),this.attrSelector&&this.container?.setAttribute(this.attrSelector,""),this.appendOverlay(),this.alignOverlay(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),St(this.listViewChild?.nativeElement));break;case"void":this.onOverlayHide(),this.onHide.emit({});break}}onOverlayAnimationEnd(t){switch(t.toState){case"void":this.autoZIndex&&ct.clear(t.element);break}}alignOverlay(){this.relativeAlign?Re(this.container,this.target):Ve(this.container,this.target)}appendOverlay(){Mt.appendOverlay(this.container,this.$appendTo()==="body"?this.document.body:this.$appendTo(),this.$appendTo())}restoreOverlayAppend(){this.container&&this.$appendTo()!=="self"&&this.renderer.appendChild(this.el.nativeElement,this.container)}moveOnTop(){this.autoZIndex&&ct.set("menu",this.container,this.baseZIndex+this.config.zIndex.menu)}hide(){this.visible=!1,this.relativeAlign=!1,this.cd.markForCheck()}onWindowResize(){this.visible&&!$e()&&this.hide()}menuitemId(t,n,o,i){return t?.id??`${n}_${o}${i!==void 0?"_"+i:""}`}isItemFocused(t){return this.focusedOptionId()===t}label(t){return typeof t=="function"?t():t}disabled(t){return typeof t=="function"?t():typeof t>"u"?!1:t}activedescendant(){return this.focused?this.focusedOptionId():void 0}onListFocus(t){this.focused||(this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.onFocus.emit(t))}onListBlur(t){this.focused&&(this.focused=!1,this.changeFocusedOptionIndex(-1),this.selectedOptionIndex.set(-1),this.focusedOptionIndex.set(-1),this.onBlur.emit(t))}onListKeyDown(t){switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"Enter":this.onEnterKey(t);break;case"NumpadEnter":this.onEnterKey(t);break;case"Space":this.onSpaceKey(t);break;case"Escape":case"Tab":this.popup&&(St(this.target),this.hide()),this.overlayVisible&&this.hide();break;default:break}}onArrowDownKey(t){let n=this.findNextOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(n),t.preventDefault()}onArrowUpKey(t){if(t.altKey&&this.popup)St(this.target),this.hide(),t.preventDefault();else{let n=this.findPrevOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(n),t.preventDefault()}}onHomeKey(t){this.changeFocusedOptionIndex(0),t.preventDefault()}onEndKey(t){this.changeFocusedOptionIndex(kt(this.containerViewChild?.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]').length-1),t.preventDefault()}onEnterKey(t){let n=A(this.containerViewChild?.nativeElement,`li[id="${`${this.focusedOptionIndex()}`}"]`),o=n&&(A(n,'[data-pc-section="action"]')||A(n,"a,button"));this.popup&&St(this.target),o?o.click():n&&n.click(),t.preventDefault()}onSpaceKey(t){this.onEnterKey(t)}findNextOptionIndex(t){let o=[...kt(this.containerViewChild?.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(i=>i.id===t);return o>-1?o+1:0}findPrevOptionIndex(t){let o=[...kt(this.containerViewChild?.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(i=>i.id===t);return o>-1?o-1:0}changeFocusedOptionIndex(t){let n=kt(this.containerViewChild?.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]');if(n.length>0){let o=t>=n.length?n.length-1:t<0?0:t;o>-1&&this.focusedOptionIndex.set(n[o].getAttribute("id"))}}itemClick(t,n){let{originalEvent:o,item:i}=t;if(this.focused||(this.focused=!0,this.onFocus.emit()),i.disabled){o.preventDefault();return}!i.url&&!i.routerLink&&o.preventDefault(),i.command&&i.command({originalEvent:o,item:i}),this.popup&&this.hide(),!this.popup&&this.focusedOptionIndex()!==n&&this.focusedOptionIndex.set(n)}onOverlayClick(t){this.popup&&this.overlayService.add({originalEvent:t,target:this.el.nativeElement}),this.preventDocumentDefault=!0}bindDocumentClickListener(){if(!this.documentClickListener&&Y(this.platformId)){let t=this.el?this.el.nativeElement.ownerDocument:"document";this.documentClickListener=this.renderer.listen(t,"click",n=>{let o=this.containerViewChild?.nativeElement&&!this.containerViewChild?.nativeElement.contains(n.target),i=!(this.target&&(this.target===n.target||this.target.contains(n.target)));!this.popup&&o&&i&&this.onListBlur(n),this.preventDocumentDefault&&this.overlayVisible&&o&&i&&(this.hide(),this.preventDocumentDefault=!1)})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){if(!this.documentResizeListener&&Y(this.platformId)){let t=this.document.defaultView;this.documentResizeListener=this.renderer.listen(t,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){!this.scrollHandler&&Y(this.platformId)&&(this.scrollHandler=new It(this.target,()=>{this.visible&&this.hide()})),this.scrollHandler?.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&(this.scrollHandler.unbindScrollListener(),this.scrollHandler=null)}onOverlayHide(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.preventDocumentDefault=!1,this.cd.destroyed||(this.target=null)}ngOnDestroy(){this.popup&&(this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&ct.clear(this.container),this.restoreOverlayAppend(),this.onOverlayHide()),this.popup||this.unbindDocumentClickListener(),super.ngOnDestroy()}hasSubMenu(){return this.model?.some(t=>t.items)??!1}isItemHidden(t){return t.separator?t.visible===!1||t.items&&t.items.some(n=>n.visible!==!1):t.visible===!1}static \u0275fac=function(n){return new(n||e)(at(Ue))};static \u0275cmp=D({type:e,selectors:[["p-menu"]],contentQueries:function(n,o,i){if(n&1&&(T(i,zo,4),T(i,Ao,4),T(i,Vo,4),T(i,Ro,4),T(i,No,4),T(i,Ct,4)),n&2){let r;v(r=_())&&(o.startTemplate=r.first),v(r=_())&&(o.endTemplate=r.first),v(r=_())&&(o.headerTemplate=r.first),v(r=_())&&(o.itemTemplate=r.first),v(r=_())&&(o.submenuHeaderTemplate=r.first),v(r=_())&&(o.templates=r)}},viewQuery:function(n,o){if(n&1&&(Jt(jo,5),Jt($o,5)),n&2){let i;v(i=_())&&(o.listViewChild=i.first),v(i=_())&&(o.containerViewChild=i.first)}},inputs:{model:"model",popup:[2,"popup","popup",h],style:"style",styleClass:"styleClass",autoZIndex:[2,"autoZIndex","autoZIndex",h],baseZIndex:[2,"baseZIndex","baseZIndex",G],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",id:"id",tabindex:[2,"tabindex","tabindex",G],appendTo:[1,"appendTo"]},outputs:{onShow:"onShow",onHide:"onHide",onBlur:"onBlur",onFocus:"onFocus"},features:[S([Wt]),x],decls:1,vars:1,consts:[["container",""],["list",""],["htmlSubmenuLabel",""],[3,"class","style","ngStyle","click",4,"ngIf"],[3,"click","ngStyle"],[3,"class",4,"ngIf"],["role","menu",3,"focus","blur","keydown"],[4,"ngIf"],[4,"ngTemplateOutlet"],["ngFor","",3,"ngForOf"],["role","separator",3,"class",4,"ngIf"],["pTooltip","","role","none",3,"class","tooltipOptions",4,"ngIf"],["role","separator"],["pTooltip","","role","none",3,"tooltipOptions"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"innerHTML"],["pTooltip","","role","menuitem",3,"class","pMenuItemContent","itemTemplate","style","tooltipOptions","onMenuItemClick",4,"ngIf"],["pTooltip","","role","menuitem",3,"onMenuItemClick","pMenuItemContent","itemTemplate","tooltipOptions"],["pTooltip","","role","menuitem",3,"class","pMenuItemContent","itemTemplate","ngStyle","tooltipOptions","onMenuItemClick",4,"ngIf"],["pTooltip","","role","menuitem",3,"onMenuItemClick","pMenuItemContent","itemTemplate","ngStyle","tooltipOptions"]],template:function(n,o){n&1&&p(0,ui,8,26,"div",3),n&2&&a("ngIf",!o.popup||o.visible)},dependencies:[$,Ee,ft,gt,jt,re,mi,he,yn,Lt,O,xn],encapsulation:2,data:{animation:[Le("overlayAnimation",[le(":enter",[ae({opacity:0,transform:"scaleY(0.8)"}),se("{{showTransitionParams}}")]),le(":leave",[se("{{hideTransitionParams}}",ae({opacity:0}))])])]},changeDetection:0})}return e})(),pa=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=B({type:e});static \u0275inj=P({imports:[qt,O,O]})}return e})();var hi=()=>({right:"0",top:"3rem",maxWidth:"fit-content"}),wn=class e{themeService=m(Xe);currentThemeSig=this.themeService.getCurrentTheme();selectedMenuSig=j(()=>this.menuItems.filter(s=>s.label?.toLowerCase()===this.currentThemeSig())[0]||this.menuItems[0]);menuItems=[{label:"Light",icon:Ot.SUN,command:()=>this.themeService.setTheme("light")},{label:"Dark",icon:Ot.MOON,command:()=>this.themeService.setTheme("dark")},{label:"System",icon:Ot.DESKTOP,command:()=>this.themeService.setTheme("system")},{label:"Auto",icon:Ot.COG,command:()=>this.themeService.setTheme("auto")}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=D({type:e,selectors:[["app-theme-toggle"]],decls:3,vars:7,consts:[["themeToggle",""],["variant","outlined","severity","secondary",3,"click","label","icon"],["baseZIndex","10","appendTo","body",3,"popup","model"]],template:function(t,n){if(t&1){let o=mt();g(0,"p-button",1),J("click",function(r){R(o);let c=ht(2);return N(c.toggle(r))}),y(),L(1,"p-menu",2,0)}t&2&&(a("label",n.selectedMenuSig().label)("icon",n.selectedMenuSig().icon),l(),dt(Vt(6,hi)),a("popup",!0)("model",n.menuItems))},dependencies:[qt,bn,me],encapsulation:2})};export{Mt as a,vi as b,_i as c,It as d,Je as e,Oi as f,be as g,$t as h,dn as i,Vr as j,me as k,bn as l,qt as m,pa as n,ts as o,es as p,yo as q,_s as r,wn as s};
