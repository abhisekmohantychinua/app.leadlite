import{a as tt,b as it}from"./chunk-YJCPWK24.js";import{a as Xe,b as Je,c as nt}from"./chunk-NET37SCA.js";import{b as qe}from"./chunk-VZH4IBBN.js";import{b as $e,c as Ze,e as Ge,j as Ye,n as G,o as Y,r as We,t as et}from"./chunk-GV2MA5HC.js";import{Aa as $,B as _e,C as be,Ca as Z,E as ve,Ea as He,Fa as X,K as ye,M as Qe,V as Ke,b as ie,d as U,f as ne,i as H,k as Ne,ka as xe,o as Pe,p as re,q as Fe,qa as Ue,r as je,va as q,w as Re,wa as O,x as ge,z as he}from"./chunk-RA4NEXBO.js";import{$a as Ee,Ab as Ie,Bb as Ae,C as Se,Cb as E,Db as z,Hb as x,Ib as c,Jb as F,Ka as De,Kb as j,Lb as w,Mb as ue,Na as a,Nb as b,Ob as v,Rb as fe,S as B,T as J,Ub as Oe,Vb as y,Wb as u,X as _,Xb as L,Yb as R,Za as h,_a as W,aa as C,ac as Q,ba as S,bb as N,ca as ke,cc as Ve,db as d,dc as ze,ea as Te,fb as P,ic as I,ja as M,ma as D,nb as f,ob as k,oc as K,pb as T,pc as ee,q as Ce,sc as te,tb as o,ub as l,vb as s,wb as g,xb as Le,yb as Me,yc as A,zc as Be}from"./chunk-54YYSUBJ.js";var rt=`
    .p-toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: dt('toolbar.padding');
        background: dt('toolbar.background');
        border: 1px solid dt('toolbar.border.color');
        color: dt('toolbar.color');
        border-radius: dt('toolbar.border.radius');
        gap: dt('toolbar.gap');
    }

    .p-toolbar-start,
    .p-toolbar-center,
    .p-toolbar-end {
        display: flex;
        align-items: center;
    }
`;var gt=["start"],ht=["end"],_t=["center"],bt=["*"];function vt(t,i){t&1&&E(0)}function yt(t,i){if(t&1&&(l(0,"div"),d(1,vt,1,0,"ng-container",1),s()),t&2){let e=c();y(e.cx("start")),f("data-pc-section","start"),a(),o("ngTemplateOutlet",e.startTemplate||e._startTemplate)}}function xt(t,i){t&1&&E(0)}function wt(t,i){if(t&1&&(l(0,"div"),d(1,xt,1,0,"ng-container",1),s()),t&2){let e=c();y(e.cx("center")),f("data-pc-section","center"),a(),o("ngTemplateOutlet",e.centerTemplate||e._centerTemplate)}}function Ct(t,i){t&1&&E(0)}function St(t,i){if(t&1&&(l(0,"div"),d(1,Ct,1,0,"ng-container",1),s()),t&2){let e=c();y(e.cx("end")),f("data-pc-section","end"),a(),o("ngTemplateOutlet",e.endTemplate||e._endTemplate)}}var kt={root:()=>["p-toolbar p-component"],start:"p-toolbar-start",center:"p-toolbar-center",end:"p-toolbar-end"},at=(()=>{class t extends ${name="toolbar";theme=rt;classes=kt;static \u0275fac=(()=>{let e;return function(r){return(e||(e=D(t)))(r||t)}})();static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();var we=(()=>{class t extends Z{styleClass;ariaLabelledBy;_componentStyle=_(at);getBlockableElement(){return this.el.nativeElement.children[0]}startTemplate;endTemplate;centerTemplate;templates;_startTemplate;_endTemplate;_centerTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"start":case"left":this._startTemplate=e.template;break;case"end":case"right":this._endTemplate=e.template;break;case"center":this._centerTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=D(t)))(r||t)}})();static \u0275cmp=h({type:t,selectors:[["p-toolbar"]],contentQueries:function(n,r,p){if(n&1&&(w(p,gt,4),w(p,ht,4),w(p,_t,4),w(p,q,4)),n&2){let m;b(m=v())&&(r.startTemplate=m.first),b(m=v())&&(r.endTemplate=m.first),b(m=v())&&(r.centerTemplate=m.first),b(m=v())&&(r.templates=m)}},hostAttrs:["data-pc-section","root","data-pc-name","toolbar","role","toolbar"],hostVars:3,hostBindings:function(n,r){n&2&&(f("aria-labelledby",r.ariaLabelledBy),y(r.cn(r.cx("root"),r.styleClass)))},inputs:{styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy"},features:[Q([at]),N],ngContentSelectors:bt,decls:4,vars:3,consts:[[3,"class",4,"ngIf"],[4,"ngTemplateOutlet"]],template:function(n,r){n&1&&(F(),j(0),d(1,yt,2,4,"div",0)(2,wt,2,4,"div",0)(3,St,2,4,"div",0)),n&2&&(a(),o("ngIf",r.startTemplate||r._startTemplate),a(),o("ngIf",r.centerTemplate||r._centerTemplate),a(),o("ngIf",r.endTemplate||r._endTemplate))},dependencies:[H,U,ne,O],encapsulation:2,changeDetection:0})}return t})(),lt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=W({type:t});static \u0275inj=J({imports:[we,O,O]})}return t})();var st=`
    .p-drawer {
        display: flex;
        flex-direction: column;
        transform: translate3d(0px, 0px, 0px);
        position: relative;
        transition: transform 0.3s;
        background: dt('drawer.background');
        color: dt('drawer.color');
        border: 1px solid dt('drawer.border.color');
        box-shadow: dt('drawer.shadow');
    }

    .p-drawer-content {
        overflow-y: auto;
        flex-grow: 1;
        padding: dt('drawer.content.padding');
    }

    .p-drawer-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        padding: dt('drawer.header.padding');
    }

    .p-drawer-footer {
        padding: dt('drawer.footer.padding');
    }

    .p-drawer-title {
        font-weight: dt('drawer.title.font.weight');
        font-size: dt('drawer.title.font.size');
    }

    .p-drawer-full .p-drawer {
        transition: none;
        transform: none;
        width: 100vw !important;
        height: 100vh !important;
        max-height: 100%;
        top: 0px !important;
        left: 0px !important;
        border-width: 1px;
    }

    .p-drawer-left .p-drawer-enter-from,
    .p-drawer-left .p-drawer-leave-to {
        transform: translateX(-100%);
    }

    .p-drawer-right .p-drawer-enter-from,
    .p-drawer-right .p-drawer-leave-to {
        transform: translateX(100%);
    }

    .p-drawer-top .p-drawer-enter-from,
    .p-drawer-top .p-drawer-leave-to {
        transform: translateY(-100%);
    }

    .p-drawer-bottom .p-drawer-enter-from,
    .p-drawer-bottom .p-drawer-leave-to {
        transform: translateY(100%);
    }

    .p-drawer-full .p-drawer-enter-from,
    .p-drawer-full .p-drawer-leave-to {
        opacity: 0;
    }

    .p-drawer-full .p-drawer-enter-active,
    .p-drawer-full .p-drawer-leave-active {
        transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .p-drawer-left .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-end-width: 1px;
    }

    .p-drawer-right .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-start-width: 1px;
    }

    .p-drawer-top .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-end-width: 1px;
    }

    .p-drawer-bottom .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-start-width: 1px;
    }

    .p-drawer-left .p-drawer-content,
    .p-drawer-right .p-drawer-content,
    .p-drawer-top .p-drawer-content,
    .p-drawer-bottom .p-drawer-content {
        width: 100%;
        height: 100%;
    }

    .p-drawer-open {
        display: flex;
    }

    .p-drawer-mask:dir(rtl) {
        flex-direction: row-reverse;
    }
`;var Dt=["header"],Et=["footer"],Lt=["content"],Mt=["closeicon"],It=["headless"],At=["container"],Ot=["closeButton"],Vt=["*"],zt=(t,i)=>({transform:t,transition:i}),Bt=t=>({value:"visible",params:t});function Nt(t,i){t&1&&E(0)}function Pt(t,i){if(t&1&&d(0,Nt,1,0,"ng-container",4),t&2){let e=c(2);o("ngTemplateOutlet",e.headlessTemplate||e._headlessTemplate)}}function Ft(t,i){t&1&&E(0)}function jt(t,i){if(t&1&&(l(0,"div"),u(1),s()),t&2){let e=c(3);y(e.cx("title")),a(),L(e.header)}}function Rt(t,i){t&1&&(ke(),g(0,"svg",11)),t&2&&f("data-pc-section","closeicon")}function Qt(t,i){}function Kt(t,i){t&1&&d(0,Qt,0,0,"ng-template")}function Ut(t,i){if(t&1&&d(0,Rt,1,1,"svg",10)(1,Kt,1,0,null,4),t&2){let e=c(4);o("ngIf",!e.closeIconTemplate&&!e._closeIconTemplate),a(),o("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function Ht(t,i){if(t&1){let e=z();l(0,"p-button",9),x("onClick",function(r){C(e);let p=c(3);return S(p.close(r))})("keydown.enter",function(r){C(e);let p=c(3);return S(p.close(r))}),d(1,Ut,2,2,"ng-template",null,1,I),s()}if(t&2){let e=c(3);o("ngClass",e.cx("pcCloseButton"))("buttonProps",e.closeButtonProps)("ariaLabel",e.ariaCloseLabel),f("data-pc-section","closebutton")("data-pc-group-section","iconcontainer")}}function qt(t,i){t&1&&E(0)}function $t(t,i){t&1&&E(0)}function Zt(t,i){if(t&1&&(Ie(0),l(1,"div",5),d(2,$t,1,0,"ng-container",4),s(),Ae()),t&2){let e=c(3);a(),o("ngClass",e.cx("footer")),f("data-pc-section","footer"),a(),o("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}function Gt(t,i){if(t&1&&(l(0,"div",5),d(1,Ft,1,0,"ng-container",4)(2,jt,2,3,"div",6)(3,Ht,3,5,"p-button",7),s(),l(4,"div",5),j(5),d(6,qt,1,0,"ng-container",4),s(),d(7,Zt,3,3,"ng-container",8)),t&2){let e=c(2);o("ngClass",e.cx("header")),f("data-pc-section","header"),a(),o("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),a(),o("ngIf",e.header),a(),o("ngIf",e.showCloseIcon&&e.closable),a(),o("ngClass",e.cx("content")),f("data-pc-section","content"),a(2),o("ngTemplateOutlet",e.contentTemplate||e._contentTemplate),a(),o("ngIf",e.footerTemplate||e._footerTemplate)}}function Yt(t,i){if(t&1){let e=z();l(0,"div",3,0),x("@panelState.start",function(r){C(e);let p=c();return S(p.onAnimationStart(r))})("@panelState.done",function(r){C(e);let p=c();return S(p.onAnimationEnd(r))})("keydown",function(r){C(e);let p=c();return S(p.onKeyDown(r))}),k(2,Pt,1,1,"ng-container")(3,Gt,8,9),s()}if(t&2){let e=c();Oe(e.style),y(e.cn(e.cx("root"),e.styleClass)),o("@panelState",Ve(11,Bt,ze(8,zt,e.transformOptions,e.transitionOptions))),f("data-pc-name","sidebar")("data-pc-section","root"),a(2),T(e.headlessTemplate||e._headlessTemplate?2:3)}}var Xt=`
    ${st}

    /** For PrimeNG **/
    .p-drawer {
        position: fixed;
        display: flex;
        flex-direction: column;
    }

    .p-drawer-left {
        top: 0;
        left: 0;
        width: 20rem;
        height: 100%;
    }

    .p-drawer-right {
        top: 0;
        right: 0;
        width: 20rem;
        height: 100%;
    }

    .p-drawer-top {
        top: 0;
        left: 0;
        width: 100%;
        height: 10rem;
    }

    .p-drawer-bottom {
        bottom: 0;
        left: 0;
        width: 100%;
        height: 10rem;
    }

    .p-drawer-full {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        -webkit-transition: none;
        transition: none;
    }

    .p-overlay-mask-enter {
        animation: p-overlay-mask-enter-animation 150ms forwards;
    }

    .p-overlay-mask-leave {
        animation: p-overlay-mask-leave-animation 150ms forwards;
    }

    @keyframes p-overlay-mask-enter-animation {
        from {
            background-color: transparent;
        }
        to {
            background-color: rgba(0, 0, 0, 0.4);
        }
    }
    @keyframes p-overlay-mask-leave-animation {
        from {
            background-color: rgba(0, 0, 0, 0.4);
        }
        to {
            background-color: transparent;
        }
    }
`,Jt={mask:({instance:t})=>["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter":t.modal},{"p-drawer-full":t.fullScreen}],root:({instance:t})=>["p-drawer p-component",{"p-drawer-full":t.fullScreen,"p-drawer-open":t.visible},`p-drawer-${t.position}`],header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},pt=(()=>{class t extends ${name="drawer";theme=Xt;classes=Jt;static \u0275fac=(()=>{let e;return function(r){return(e||(e=D(t)))(r||t)}})();static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();var Wt=be([he({transform:"{{transform}}",opacity:0}),ge("{{transition}}")]),ei=be([ge("{{transition}}",he({transform:"{{transform}}",opacity:0}))]),ct="translate3d(-100%, 0px, 0px)",ae=(()=>{class t extends Z{appendTo="body";blockScroll=!1;style;styleClass;ariaCloseLabel;autoZIndex=!0;baseZIndex=0;modal=!0;closeButtonProps={severity:"secondary",text:!0,rounded:!0};dismissible=!0;showCloseIcon=!0;closeOnEscape=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible??!1}set visible(e){this._visible=e}get position(){return this._position}set position(e){if(this._position=e,e==="full"){this.transformOptions="none";return}switch(e){case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break}}get fullScreen(){return this._fullScreen}set fullScreen(e){this._fullScreen=e,e===!0?this.transformOptions="none":this.transformOptions=ct}header;maskStyle;closable=!0;onShow=new P;onHide=new P;visibleChange=new P;containerViewChild;closeButtonViewChild;initialized;_visible;_position="left";_fullScreen=!1;container;transformOptions=ct;mask;maskClickListener;documentEscapeListener;animationEndListener;_componentStyle=_(pt);ngAfterViewInit(){super.ngAfterViewInit(),this.initialized=!0}headerTemplate;footerTemplate;contentTemplate;closeIconTemplate;headlessTemplate;_headerTemplate;_footerTemplate;_contentTemplate;_closeIconTemplate;_headlessTemplate;templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break;case"headless":this._headlessTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}onKeyDown(e){e.code==="Escape"&&this.hide(!1)}show(){this.container?.setAttribute(this.attrSelector,""),this.autoZIndex&&X.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(e=!0){e&&this.onHide.emit({}),this.modal&&this.disableModality()}close(e){this.hide(),this.visibleChange.emit(!1),e.preventDefault()}enableModality(){let e=this.document.querySelectorAll(".p-drawer-open"),n=e.length,r=n==1?String(parseInt(this.container.style.zIndex)-1):String(parseInt(e[n-1].style.zIndex)-1);this.mask||(this.mask=this.renderer.createElement("div"),this.mask&&(xe(this.mask,"style",this.getMaskStyle()),xe(this.mask,"style",`z-index: ${r}`),ye(this.mask,this.cx("mask"))),this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",p=>{this.dismissible&&this.close(p)})),this.renderer.appendChild(this.document.body,this.mask),this.blockScroll&&$e())}getMaskStyle(){return this.maskStyle?Object.entries(this.maskStyle).map(([e,n])=>`${e}: ${n}`).join("; "):""}disableModality(){this.mask&&(Qe(this.mask,"p-overlay-mask-enter"),ye(this.mask,"p-overlay-mask-leave"),this.animationEndListener=this.renderer.listen(this.mask,"animationend",this.destroyModal.bind(this)))}destroyModal(){this.unbindMaskClickListener(),this.mask&&this.renderer.removeChild(this.document.body,this.mask),this.blockScroll&&Ze(),this.unbindAnimationEndListener(),this.mask=null}onAnimationStart(e){switch(e.toState){case"visible":this.container=e.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener();break}}onAnimationEnd(e){switch(e.toState){case"void":this.hide(!1),X.clear(this.container),this.unbindGlobalListeners();break}}appendContainer(){this.appendTo&&(this.appendTo==="body"&&this.container?this.renderer.appendChild(this.document.body,this.container):this.container&&Ke(this.appendTo,this.container))}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(e,"keydown",n=>{n.which==27&&parseInt(this.container.style.zIndex)===X.get(this.container)&&this.close(n)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}ngOnDestroy(){this.initialized=!1,this.visible&&this.modal&&this.destroyModal(),this.appendTo&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex&&X.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=D(t)))(r||t)}})();static \u0275cmp=h({type:t,selectors:[["p-drawer"]],contentQueries:function(n,r,p){if(n&1&&(w(p,Dt,4),w(p,Et,4),w(p,Lt,4),w(p,Mt,4),w(p,It,4),w(p,q,4)),n&2){let m;b(m=v())&&(r.headerTemplate=m.first),b(m=v())&&(r.footerTemplate=m.first),b(m=v())&&(r.contentTemplate=m.first),b(m=v())&&(r.closeIconTemplate=m.first),b(m=v())&&(r.headlessTemplate=m.first),b(m=v())&&(r.templates=m)}},viewQuery:function(n,r){if(n&1&&(ue(At,5),ue(Ot,5)),n&2){let p;b(p=v())&&(r.containerViewChild=p.first),b(p=v())&&(r.closeButtonViewChild=p.first)}},inputs:{appendTo:"appendTo",blockScroll:[2,"blockScroll","blockScroll",A],style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:[2,"autoZIndex","autoZIndex",A],baseZIndex:[2,"baseZIndex","baseZIndex",Be],modal:[2,"modal","modal",A],closeButtonProps:"closeButtonProps",dismissible:[2,"dismissible","dismissible",A],showCloseIcon:[2,"showCloseIcon","showCloseIcon",A],closeOnEscape:[2,"closeOnEscape","closeOnEscape",A],transitionOptions:"transitionOptions",visible:"visible",position:"position",fullScreen:"fullScreen",header:"header",maskStyle:"maskStyle",closable:[2,"closable","closable",A]},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},features:[Q([pt]),N],ngContentSelectors:Vt,decls:1,vars:1,consts:[["container",""],["icon",""],["role","complementary",3,"class","style","keydown",4,"ngIf"],["role","complementary",3,"keydown"],[4,"ngTemplateOutlet"],[3,"ngClass"],[3,"class",4,"ngIf"],[3,"ngClass","buttonProps","ariaLabel","onClick","keydown.enter",4,"ngIf"],[4,"ngIf"],[3,"onClick","keydown.enter","ngClass","buttonProps","ariaLabel"],["data-p-icon","times",4,"ngIf"],["data-p-icon","times"]],template:function(n,r){n&1&&(F(),d(0,Yt,4,13,"div",2)),n&2&&o("ngIf",r.visible)},dependencies:[H,ie,U,ne,G,He,O],encapsulation:2,data:{animation:[Re("panelState",[_e("void => visible",[ve(Wt)]),_e("visible => void",[ve(ei)])])]},changeDetection:0})}return t})();var oe=class t{static validCodePattern=/^Key[A-Z]$/;static validDigitPattern=/^Digit[0-9]$/;static namedCodes=new Set(["Enter","Escape","Space","Backspace","Tab","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"]);static editableInputTypes=new Set(["text","email","password","search","tel","url","number"]);key=te.required({alias:"appKeyListener"});action=te.required({alias:"appKeyListenerAction"});disabled=te(!1,{alias:"appKeyListenerDisabled"});doc=_(Te,{optional:!0})??(typeof document<"u"?document:null);shortcutCode=K(()=>this.normalizeShortcut(this.key()));validateShortcutEffect=ee(()=>{this.shortcutCode()});globalHandler=i=>{if(this.disabled()||this.isEditableContextActive())return;let e=this.shortcutCode();i.code===e&&(i.preventDefault(),this.action()())};ngOnInit(){this.doc?.addEventListener("keydown",this.globalHandler)}ngOnDestroy(){this.doc?.removeEventListener("keydown",this.globalHandler)}normalizeShortcut(i){let e=i?.trim();if(!e)throw new Error("appKeyListener requires a non-empty shortcut value.");if(t.validCodePattern.test(e)||t.validDigitPattern.test(e)||t.namedCodes.has(e))return e;let n=e.toUpperCase();if(/^[A-Z]$/.test(n))return`Key${n}`;if(/^[0-9]$/.test(e))return`Digit${e}`;throw new Error(`Unsupported shortcut "${i}". Provide a valid KeyboardEvent.code (e.g., "KeyH", "Digit5", "Enter").`)}isEditableContextActive(){let i=this.doc?.activeElement??null;if(!i)return!1;let e=i.closest("[contenteditable]");if(e&&e.getAttribute("contenteditable")!=="false"||i instanceof HTMLTextAreaElement||i instanceof HTMLSelectElement)return!0;if(i instanceof HTMLInputElement){let n=i.type?.toLowerCase()??"text";return t.editableInputTypes.has(n)}return i.getAttribute("role")==="textbox"}static \u0275fac=function(e){return new(e||t)};static \u0275dir=Ee({type:t,selectors:[["","appKeyListener",""]],hostAttrs:["tabindex","0"],inputs:{key:[1,"appKeyListener","key"],action:[1,"appKeyListenerAction","action"],disabled:[1,"appKeyListenerDisabled","disabled"]}})};function ii(t,i){if(t&1&&(l(0,"span",7),u(1),s()),t&2){let e=c().$implicit;a(),L(e.shortcut)}}function ni(t,i){if(t&1){let e=z();l(0,"a",5),x("click",function(){C(e);let r=c();return S(r.closeDrawer())}),g(1,"span"),l(2,"span",6),u(3),s(),k(4,ii,2,1,"span",7),s()}if(t&2){let e=i.$implicit;o("appKeyListener",e.shortcut)("appKeyListenerAction",e.shortcutAction)("routerLink",e.routerLink)("routerLinkActiveOptions",e.routerLinkActiveOptions),a(),y(e.icon),a(2),L(e.label),a(),T(e.shortcut?4:-1)}}var le=class t{drawerVisible=M(!0);router=_(re);menuItems=[{label:"Home",icon:"pi pi-home",routerLink:["/"],shortcut:"H",routerLinkActiveOptions:{exact:!0},shortcutAction:()=>{this.router.navigate(["/"])}},{label:"Leads",icon:"pi pi-inbox",routerLink:["/leads"],shortcut:"L",routerLinkActiveOptions:{exact:!0},shortcutAction:()=>{this.router.navigate(["/leads"])}},{label:"Clients",icon:"pi pi-users",routerLink:["/clients"],shortcut:"C",routerLinkActiveOptions:{exact:!0},shortcutAction:()=>{this.router.navigate(["/clients"])}},{label:"Projects",icon:"pi pi-briefcase",routerLink:["/projects"],shortcut:"P",routerLinkActiveOptions:{exact:!0},shortcutAction:()=>{this.router.navigate(["/projects"])}}];openDrawer(){this.drawerVisible.set(!0)}closeDrawer(){this.drawerVisible.set(!1)}handleVisibilityChange(i){this.drawerVisible.set(i)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=h({type:t,selectors:[["app-menu"]],decls:5,vars:8,consts:[[1,"menu-shell","flex","items-center"],["type","button","icon","pi pi-bars","severity","secondary","variant","outlined","rounded","","size","small","styleClass","menu__trigger","aria-haspopup","dialog","aria-label","Open menu",3,"click"],["header","Menu","position","left",3,"visibleChange","visible","modal","dismissible","blockScroll","closeOnEscape"],["styleClass","menu__list border-0",3,"model","pAutoFocus"],["pTemplate","item"],["pRipple","","routerLinkActive","p-menuitem-link-active",1,"menu__item","group","flex","items-center","p-menu-item-link",3,"click","appKeyListener","appKeyListenerAction","routerLink","routerLinkActiveOptions"],[1,"ml-2"],[1,"menu__shortcut","ml-auto","border","border-surface","rounded","bg-emphasis","text-muted-color","text-xs","p-1","hidden","xl:inline-block"]],template:function(e,n){e&1&&(l(0,"section",0)(1,"p-button",1),x("click",function(){return n.openDrawer()}),s(),l(2,"p-drawer",2),x("visibleChange",function(p){return n.handleVisibilityChange(p)}),l(3,"p-menu",3),d(4,ni,5,8,"ng-template",4),s()()()),e&2&&(a(),f("aria-expanded",n.drawerVisible()),a(),o("visible",n.drawerVisible())("modal",!0)("dismissible",!0)("blockScroll",!0)("closeOnEscape",!0),a(),o("model",n.menuItems)("pAutoFocus",!0))},dependencies:[Y,G,q,ae,Je,Xe,Ye,Ge,Fe,je,oe],styles:[".menu__item.p-menuitem-link-active[_ngcontent-%COMP%]{color:var(--p-primary-color);font-weight:600}.menu__item.p-menuitem-link-active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{color:inherit}"],changeDetection:0})};var dt=`
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: dt('avatar.width');
        height: dt('avatar.height');
        font-size: dt('avatar.font.size');
        background: dt('avatar.background');
        color: dt('avatar.color');
        border-radius: dt('avatar.border.radius');
    }

    .p-avatar-image {
        background: transparent;
    }

    .p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar-icon {
        font-size: dt('avatar.icon.size');
        width: dt('avatar.icon.size');
        height: dt('avatar.icon.size');
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }

    .p-avatar-lg {
        width: dt('avatar.lg.width');
        height: dt('avatar.lg.width');
        font-size: dt('avatar.lg.font.size');
    }

    .p-avatar-lg .p-avatar-icon {
        font-size: dt('avatar.lg.icon.size');
        width: dt('avatar.lg.icon.size');
        height: dt('avatar.lg.icon.size');
    }

    .p-avatar-xl {
        width: dt('avatar.xl.width');
        height: dt('avatar.xl.width');
        font-size: dt('avatar.xl.font.size');
    }

    .p-avatar-xl .p-avatar-icon {
        font-size: dt('avatar.xl.icon.size');
        width: dt('avatar.xl.icon.size');
        height: dt('avatar.xl.icon.size');
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }

    .p-avatar-group .p-avatar + .p-avatar {
        margin-inline-start: dt('avatar.group.offset');
    }

    .p-avatar-group .p-avatar {
        border: 2px solid dt('avatar.group.border.color');
    }

    .p-avatar-group .p-avatar-lg + .p-avatar-lg {
        margin-inline-start: dt('avatar.lg.group.offset');
    }

    .p-avatar-group .p-avatar-xl + .p-avatar-xl {
        margin-inline-start: dt('avatar.xl.group.offset');
    }
`;var ri=["*"];function ai(t,i){if(t&1&&(l(0,"span"),u(1),s()),t&2){let e=c();y(e.cx("label")),a(),L(e.label)}}function oi(t,i){if(t&1&&g(0,"span",4),t&2){let e=c(2);y(e.icon),o("ngClass",e.cx("icon"))}}function li(t,i){if(t&1&&d(0,oi,1,3,"span",3),t&2){let e=c(),n=fe(5);o("ngIf",e.icon)("ngIfElse",n)}}function si(t,i){if(t&1){let e=z();l(0,"img",6),x("error",function(r){C(e);let p=c(2);return S(p.imageError(r))}),s()}if(t&2){let e=c(2);o("src",e.image,De),f("aria-label",e.ariaLabel)}}function pi(t,i){if(t&1&&d(0,si,1,2,"img",5),t&2){let e=c();o("ngIf",e.image)}}var ci={root:({instance:t})=>["p-avatar p-component",{"p-avatar-image":t.image!=null,"p-avatar-circle":t.shape==="circle","p-avatar-lg":t.size==="large","p-avatar-xl":t.size==="xlarge"}],label:"p-avatar-label",icon:"p-avatar-icon"},mt=(()=>{class t extends ${name="avatar";theme=dt;classes=ci;static \u0275fac=(()=>{let e;return function(r){return(e||(e=D(t)))(r||t)}})();static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();var ut=(()=>{class t extends Z{label;icon;image;size="normal";shape="square";styleClass;ariaLabel;ariaLabelledBy;onImageError=new P;_componentStyle=_(mt);imageError(e){this.onImageError.emit(e)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=D(t)))(r||t)}})();static \u0275cmp=h({type:t,selectors:[["p-avatar"]],hostVars:5,hostBindings:function(n,r){n&2&&(f("data-pc-name","avatar")("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledBy),y(r.cn(r.cx("root"),r.styleClass)))},inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onImageError:"onImageError"},features:[Q([mt]),N],ngContentSelectors:ri,decls:6,vars:2,consts:[["iconTemplate",""],["imageTemplate",""],[3,"class",4,"ngIf","ngIfElse"],[3,"class","ngClass",4,"ngIf","ngIfElse"],[3,"ngClass"],[3,"src","error",4,"ngIf"],[3,"error","src"]],template:function(n,r){if(n&1&&(F(),j(0),d(1,ai,2,3,"span",2)(2,li,1,2,"ng-template",null,0,I)(4,pi,1,1,"ng-template",null,1,I)),n&2){let p=fe(3);a(),o("ngIf",r.label)("ngIfElse",p)}},dependencies:[H,ie,U,O],encapsulation:2,changeDetection:0})}return t})();function di(t,i){if(t&1&&g(0,"p-avatar",2),t&2){let e=c();o("image",e.avatarSrcSig())}}function mi(t,i){if(t&1&&g(0,"p-avatar",3),t&2){let e=c();o("label",e.initialsSig())}}function ui(t,i){if(t&1&&(l(0,"p",4),u(1),s()),t&2){let e=c();a(),L(e.errorSig())}}function fi(t,i){if(t&1&&g(0,"p-avatar",8),t&2){let e=c();o("image",e.avatarSrcSig())}}function gi(t,i){if(t&1&&g(0,"p-avatar",9),t&2){let e=c();o("label",e.initialsSig())}}function hi(t,i){if(t&1&&(l(0,"div",15)(1,"p",20),u(2," Activity "),s(),l(3,"div",21)(4,"div",22)(5,"span",23),u(6,"Created"),s(),l(7,"span",24),u(8),s()(),l(9,"div",25)(10,"span",23),u(11,"Updated"),s(),l(12,"span",24),u(13),s()()()()),t&2){let e,n,r=c();a(8),R(" ",(e=r.profileMetaSig())==null?null:e.createdAtLabel," "),a(5),R(" ",((n=r.profileMetaSig())==null?null:n.updatedAtLabel)||"-"," ")}}function _i(t,i){if(t&1&&(l(0,"p",19),u(1),s()),t&2){let e=c();a(),R(" ",e.logoutErrorSig()," ")}}var ft=new Intl.DateTimeFormat(void 0,{dateStyle:"medium",timeStyle:"short"}),pe=class t{userService=_(qe);messageService=_(Ue);logoutSubscription=null;sidebarVisible=M(!1);errorSig=M(null);logoutErrorSig=M(null);avatarSrcSig=M(null);isLoggingOut=M(!1);router=_(re);userSig=We(this.userService.getUser().pipe(Se(i=>{let e=i instanceof Error?i.message:"Failed to load profile.";return this.errorSig.set(e),Ce(null)})),{initialValue:null});initialsSig=K(()=>{let i=this.userSig();if(!i)return"?";let e=i.name.split(" ").filter(Boolean).map(n=>n.charAt(0).toUpperCase()).filter(Boolean).slice(0,2).join("");return e||i.username.charAt(0).toUpperCase()||"?"});triggerLabelSig=K(()=>{let i=this.userSig();return i?`Open profile for ${i.name}`:"Open profile panel"});profileMetaSig=K(()=>{let i=this.userSig();return i?{createdAtLabel:ft.format(i.createdAt),updatedAtLabel:i.lastModifiedAt?ft.format(i.lastModifiedAt):null}:null});constructor(){ee(()=>{let i=this.userSig();if(!i?.profile){this.avatarSrcSig.set(null);return}let e=URL.createObjectURL(i.profile);return this.avatarSrcSig.set(e),()=>URL.revokeObjectURL(e)})}ngOnDestroy(){this.logoutSubscription?.unsubscribe(),this.logoutSubscription=null}openSidebar(){this.errorSig()||this.sidebarVisible.set(!0)}closeSidebar(){this.sidebarVisible.set(!1)}handleVisibilityChange(i){this.sidebarVisible.set(i)}handleLogout(){this.logoutSubscription?.unsubscribe(),this.logoutSubscription=null,this.logoutErrorSig.set(null),this.isLoggingOut.set(!0),this.logoutSubscription=this.userService.logoutUser().subscribe({next:()=>{this.isLoggingOut.set(!1),this.closeSidebar(),this.messageService.add({key:"app-toast",severity:"success",summary:"Logged out",detail:"Your session has ended.",life:3e3}),this.router.navigate(["/login"])},error:i=>{let e=i instanceof Error?i.message:"Failed to log out.";this.isLoggingOut.set(!1),this.logoutErrorSig.set(e),this.messageService.add({key:"app-toast",severity:"error",summary:"Logout failed",detail:e})},complete:()=>{this.logoutSubscription=null}})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=h({type:t,selectors:[["app-profile"]],hostAttrs:[1,"profile-component"],decls:23,vars:16,consts:[[1,"profile-shell"],["type","button","severity","secondary","rounded","","size","small","variant","outlined","styleClass","profile-shell__trigger p-1","aria-haspopup","dialog",3,"click","disabled"],["shape","circle","size","normal","aria-hidden","true",3,"image"],["shape","circle","size","large","aria-hidden","true",3,"label"],["role","status",1,"profile-shell__error","text-xs","text-rose-400"],["header","Profile","position","right","styleClass","",3,"visibleChange","visible","modal","dismissible","blockScroll","closeOnEscape"],[1,"flex","flex-col","items-center","gap-3","sm:gap-4"],[1,"profile-drawer__avatar-wrapper","flex","w-full","justify-center"],["shape","circle","size","xlarge","styleClass","w-40 h-40 text-4xl font-semibold border-4 border-primary-600","aria-label","User profile image",3,"image"],["shape","circle","size","xlarge","styleClass","w-40 h-40 text-4xl font-semibold border-4 border-primary-600","aria-label","User profile initials",3,"label"],[1,"flex","flex-col","items-center","gap-0.5","text-center"],[1,"profile-drawer__name","text-xl","font-semibold","tracking-tight","text-primary-600"],[1,"profile-drawer__username","text-sm","text-primary-200","flex","items-center","gap-1"],["aria-hidden","true",1,"text-primary-400"],[1,"profile-drawer__username-text","text-primary-300"],[1,"w-full","rounded-2xl","border","border-slate-200/70","px-4","py-4","text-xs","shadow-sm","shadow-slate-200/60","ring-1","ring-white/70","backdrop-blur","dark:border-slate-700/70","dark:shadow-slate-950/60","dark:ring-white/10"],[1,"w-full"],[1,"flex","w-full","flex-col","gap-2"],["type","button","icon","pi pi-sign-out","label","Log out","severity","danger","styleClass","profile-drawer__logout-button w-full",3,"click","loading"],["role","status",1,"profile-drawer__logout-error","text-sm","text-rose-500"],[1,"mb-3","text-[0.65rem]","uppercase","tracking-[0.2em]","text-slate-500","dark:text-slate-400"],[1,"flex","flex-col","divide-y","divide-slate-200/60","dark:divide-slate-700/60"],[1,"flex","items-center","justify-between","gap-4","py-2","first:pt-0"],[1,"text-[0.65rem]","uppercase","tracking-[0.12em]","text-slate-500","dark:text-slate-400"],[1,"font-semibold","text-slate-600","dark:text-slate-50"],[1,"flex","items-center","justify-between","gap-4","py-2"]],template:function(e,n){if(e&1&&(l(0,"section",0)(1,"p-button",1),x("click",function(){return n.openSidebar()}),k(2,di,1,1,"p-avatar",2)(3,mi,1,1,"p-avatar",3),s(),k(4,ui,2,1,"p",4),s(),l(5,"p-drawer",5),x("visibleChange",function(p){return n.handleVisibilityChange(p)}),l(6,"section",6)(7,"div",7),k(8,fi,1,1,"p-avatar",8)(9,gi,1,1,"p-avatar",9),s(),l(10,"div",10)(11,"p",11),u(12),s(),l(13,"p",12)(14,"span",13),u(15,"@"),s(),l(16,"span",14),u(17),s()()(),k(18,hi,14,2,"div",15),g(19,"p-divider",16),l(20,"div",17)(21,"p-button",18),x("click",function(){return n.handleLogout()}),s(),k(22,_i,2,1,"p",19),s()()()),e&2){let r,p;a(),o("disabled",!!n.errorSig()),f("aria-label",n.triggerLabelSig())("aria-expanded",n.sidebarVisible()),a(),T(n.avatarSrcSig()?2:3),a(2),T(n.errorSig()?4:-1),a(),o("visible",n.sidebarVisible())("modal",!0)("dismissible",!0)("blockScroll",!0)("closeOnEscape",!0),a(3),T(n.avatarSrcSig()?8:9),a(4),R(" ",(r=n.userSig())==null?null:r.name," "),a(5),R(" ",(p=n.userSig())==null?null:p.username," "),a(),T(n.profileMetaSig()?18:-1),a(3),o("loading",n.isLoggingOut()),a(),T(n.logoutErrorSig()?22:-1)}},dependencies:[Y,G,ut,ae,et,it,tt],encapsulation:2,changeDetection:0})};function bi(t,i){t&1&&(l(0,"div",2),g(1,"app-menu",3),l(2,"a",4),g(3,"img",5),s()())}function vi(t,i){t&1&&(l(0,"div",2),g(1,"app-theme-toggle",6)(2,"app-profile",7),s())}var ce=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=h({type:t,selectors:[["app-navbar"]],decls:5,vars:0,consts:[["start",""],["end",""],[1,"flex","items-center","justify-start","gap-2","md:gap-4"],[1,"navbar__drawer"],["href","/","aria-label","Go to LeadLite home","title","LeadLite",1,"w-32","h-8"],["ngSrc","Lead Lite Large Rectangle.svg","width","160","height","40","priority","","alt","LeadLite",1,""],[1,"navbar__toggle"],[1,"navbar__profile"]],template:function(e,n){e&1&&(l(0,"p-toolbar"),d(1,bi,4,0,"ng-template",null,0,I)(3,vi,3,0,"ng-template",null,1,I),s())},dependencies:[Y,Ne,nt,pe,lt,we,le],encapsulation:2,changeDetection:0})};var de=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=h({type:t,selectors:[["app-dashboard"]],decls:2,vars:0,template:function(e,n){e&1&&g(0,"app-navbar")(1,"router-outlet")},dependencies:[Pe,ce],encapsulation:2})};var me=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=h({type:t,selectors:[["app-home"]],decls:2,vars:0,template:function(e,n){e&1&&(Le(0,"p"),u(1,"home works!"),Me())},encapsulation:2})};var yi=[{path:"",component:de,children:[{path:"",component:me},{path:"home",redirectTo:"",pathMatch:"full"},{path:"leads",loadComponent:()=>import("./chunk-YISDODWV.js")},{path:"clients",loadComponent:()=>import("./chunk-JDELH42F.js")},{path:"projects",loadComponent:()=>import("./chunk-XO7PAZF2.js")}]}],ur=yi;export{ur as default};
