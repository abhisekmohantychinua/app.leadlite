import{a as Xe,b as Je}from"./chunk-LCK2ENWQ.js";import{b as Ue,c as qe,e as He,h as Ze,k as $,l as G,m as $e,n as Ge,p as Ye,r as Ke,s as We}from"./chunk-THZMSQ6T.js";import{A as fe,Aa as Re,Ba as Y,C as ge,Ea as Qe,I as he,K as Ne,T as Pe,b as W,d as U,f as ee,g as q,ha as _e,i as Oe,m as Ve,ma as je,n as Ae,o as Be,p as ze,ra as te,sa as A,u as Fe,v as de,wa as H,x as me,ya as Z,z as ue}from"./chunk-COSYQRMZ.js";import{$ as x,Ab as y,B as ye,Bb as c,Cb as P,Db as j,Eb as C,Fb as pe,Gb as _,Hb as b,Ja as we,Kb as ce,Ma as r,Nb as Ee,Ob as v,Pb as u,Qb as I,R as z,Rb as R,S as K,Sb as Q,Ub as Me,Vb as De,W as S,Ya as h,Za as X,Zb as E,aa as w,ab as F,ba as xe,bb as m,bc as J,cc as Ie,db as N,ia as L,la as M,lb as f,lc as V,mb as k,mc as Le,nb as T,ob as o,p as ve,pb as l,qb as s,rb as g,sb as Ce,tb as Se,vb as ke,wb as Te,xb as D,yb as O}from"./chunk-TBMMB432.js";var et=`
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
`;var dt=["start"],mt=["end"],ut=["center"],ft=["*"];function gt(t,a){t&1&&D(0)}function ht(t,a){if(t&1&&(l(0,"div"),m(1,gt,1,0,"ng-container",1),s()),t&2){let e=c();v(e.cx("start")),f("data-pc-section","start"),r(),o("ngTemplateOutlet",e.startTemplate||e._startTemplate)}}function _t(t,a){t&1&&D(0)}function bt(t,a){if(t&1&&(l(0,"div"),m(1,_t,1,0,"ng-container",1),s()),t&2){let e=c();v(e.cx("center")),f("data-pc-section","center"),r(),o("ngTemplateOutlet",e.centerTemplate||e._centerTemplate)}}function vt(t,a){t&1&&D(0)}function yt(t,a){if(t&1&&(l(0,"div"),m(1,vt,1,0,"ng-container",1),s()),t&2){let e=c();v(e.cx("end")),f("data-pc-section","end"),r(),o("ngTemplateOutlet",e.endTemplate||e._endTemplate)}}var xt={root:()=>["p-toolbar p-component"],start:"p-toolbar-start",center:"p-toolbar-center",end:"p-toolbar-end"},tt=(()=>{class t extends H{name="toolbar";theme=et;classes=xt;static \u0275fac=(()=>{let e;return function(i){return(e||(e=M(t)))(i||t)}})();static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})();var be=(()=>{class t extends Z{styleClass;ariaLabelledBy;_componentStyle=S(tt);getBlockableElement(){return this.el.nativeElement.children[0]}startTemplate;endTemplate;centerTemplate;templates;_startTemplate;_endTemplate;_centerTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"start":case"left":this._startTemplate=e.template;break;case"end":case"right":this._endTemplate=e.template;break;case"center":this._centerTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=M(t)))(i||t)}})();static \u0275cmp=h({type:t,selectors:[["p-toolbar"]],contentQueries:function(n,i,p){if(n&1&&(C(p,dt,4),C(p,mt,4),C(p,ut,4),C(p,te,4)),n&2){let d;_(d=b())&&(i.startTemplate=d.first),_(d=b())&&(i.endTemplate=d.first),_(d=b())&&(i.centerTemplate=d.first),_(d=b())&&(i.templates=d)}},hostAttrs:["data-pc-section","root","data-pc-name","toolbar","role","toolbar"],hostVars:3,hostBindings:function(n,i){n&2&&(f("aria-labelledby",i.ariaLabelledBy),v(i.cn(i.cx("root"),i.styleClass)))},inputs:{styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy"},features:[Q([tt]),F],ngContentSelectors:ft,decls:4,vars:3,consts:[[3,"class",4,"ngIf"],[4,"ngTemplateOutlet"]],template:function(n,i){n&1&&(P(),j(0),m(1,ht,2,4,"div",0)(2,bt,2,4,"div",0)(3,yt,2,4,"div",0)),n&2&&(r(),o("ngIf",i.startTemplate||i._startTemplate),r(),o("ngIf",i.centerTemplate||i._centerTemplate),r(),o("ngIf",i.endTemplate||i._endTemplate))},dependencies:[q,U,ee,A],encapsulation:2,changeDetection:0})}return t})(),it=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=X({type:t});static \u0275inj=K({imports:[be,A,A]})}return t})();var at=`
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
`;var Ct=["header"],St=["footer"],kt=["content"],Tt=["closeicon"],Et=["headless"],Mt=["container"],Dt=["closeButton"],It=["*"],Lt=(t,a)=>({transform:t,transition:a}),Ot=t=>({value:"visible",params:t});function Vt(t,a){t&1&&D(0)}function At(t,a){if(t&1&&m(0,Vt,1,0,"ng-container",4),t&2){let e=c(2);o("ngTemplateOutlet",e.headlessTemplate||e._headlessTemplate)}}function Bt(t,a){t&1&&D(0)}function zt(t,a){if(t&1&&(l(0,"div"),u(1),s()),t&2){let e=c(3);v(e.cx("title")),r(),I(e.header)}}function Ft(t,a){t&1&&(xe(),g(0,"svg",11)),t&2&&f("data-pc-section","closeicon")}function Nt(t,a){}function Pt(t,a){t&1&&m(0,Nt,0,0,"ng-template")}function jt(t,a){if(t&1&&m(0,Ft,1,1,"svg",10)(1,Pt,1,0,null,4),t&2){let e=c(4);o("ngIf",!e.closeIconTemplate&&!e._closeIconTemplate),r(),o("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function Rt(t,a){if(t&1){let e=O();l(0,"p-button",9),y("onClick",function(i){x(e);let p=c(3);return w(p.close(i))})("keydown.enter",function(i){x(e);let p=c(3);return w(p.close(i))}),m(1,jt,2,2,"ng-template",null,1,E),s()}if(t&2){let e=c(3);o("ngClass",e.cx("pcCloseButton"))("buttonProps",e.closeButtonProps)("ariaLabel",e.ariaCloseLabel),f("data-pc-section","closebutton")("data-pc-group-section","iconcontainer")}}function Qt(t,a){t&1&&D(0)}function Ut(t,a){t&1&&D(0)}function qt(t,a){if(t&1&&(ke(0),l(1,"div",5),m(2,Ut,1,0,"ng-container",4),s(),Te()),t&2){let e=c(3);r(),o("ngClass",e.cx("footer")),f("data-pc-section","footer"),r(),o("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}function Ht(t,a){if(t&1&&(l(0,"div",5),m(1,Bt,1,0,"ng-container",4)(2,zt,2,3,"div",6)(3,Rt,3,5,"p-button",7),s(),l(4,"div",5),j(5),m(6,Qt,1,0,"ng-container",4),s(),m(7,qt,3,3,"ng-container",8)),t&2){let e=c(2);o("ngClass",e.cx("header")),f("data-pc-section","header"),r(),o("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),r(),o("ngIf",e.header),r(),o("ngIf",e.showCloseIcon&&e.closable),r(),o("ngClass",e.cx("content")),f("data-pc-section","content"),r(2),o("ngTemplateOutlet",e.contentTemplate||e._contentTemplate),r(),o("ngIf",e.footerTemplate||e._footerTemplate)}}function Zt(t,a){if(t&1){let e=O();l(0,"div",3,0),y("@panelState.start",function(i){x(e);let p=c();return w(p.onAnimationStart(i))})("@panelState.done",function(i){x(e);let p=c();return w(p.onAnimationEnd(i))})("keydown",function(i){x(e);let p=c();return w(p.onKeyDown(i))}),k(2,At,1,1,"ng-container")(3,Ht,8,9),s()}if(t&2){let e=c();Ee(e.style),v(e.cn(e.cx("root"),e.styleClass)),o("@panelState",Me(11,Ot,De(8,Lt,e.transformOptions,e.transitionOptions))),f("data-pc-name","sidebar")("data-pc-section","root"),r(2),T(e.headlessTemplate||e._headlessTemplate?2:3)}}var $t=`
    ${at}

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
`,Gt={mask:({instance:t})=>["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter":t.modal},{"p-drawer-full":t.fullScreen}],root:({instance:t})=>["p-drawer p-component",{"p-drawer-full":t.fullScreen,"p-drawer-open":t.visible},`p-drawer-${t.position}`],header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},rt=(()=>{class t extends H{name="drawer";theme=$t;classes=Gt;static \u0275fac=(()=>{let e;return function(i){return(e||(e=M(t)))(i||t)}})();static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})();var Yt=fe([me({transform:"{{transform}}",opacity:0}),de("{{transition}}")]),Kt=fe([de("{{transition}}",me({transform:"{{transform}}",opacity:0}))]),ot="translate3d(-100%, 0px, 0px)",ne=(()=>{class t extends Z{appendTo="body";blockScroll=!1;style;styleClass;ariaCloseLabel;autoZIndex=!0;baseZIndex=0;modal=!0;closeButtonProps={severity:"secondary",text:!0,rounded:!0};dismissible=!0;showCloseIcon=!0;closeOnEscape=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible??!1}set visible(e){this._visible=e}get position(){return this._position}set position(e){if(this._position=e,e==="full"){this.transformOptions="none";return}switch(e){case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break}}get fullScreen(){return this._fullScreen}set fullScreen(e){this._fullScreen=e,e===!0?this.transformOptions="none":this.transformOptions=ot}header;maskStyle;closable=!0;onShow=new N;onHide=new N;visibleChange=new N;containerViewChild;closeButtonViewChild;initialized;_visible;_position="left";_fullScreen=!1;container;transformOptions=ot;mask;maskClickListener;documentEscapeListener;animationEndListener;_componentStyle=S(rt);ngAfterViewInit(){super.ngAfterViewInit(),this.initialized=!0}headerTemplate;footerTemplate;contentTemplate;closeIconTemplate;headlessTemplate;_headerTemplate;_footerTemplate;_contentTemplate;_closeIconTemplate;_headlessTemplate;templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break;case"headless":this._headlessTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}onKeyDown(e){e.code==="Escape"&&this.hide(!1)}show(){this.container?.setAttribute(this.attrSelector,""),this.autoZIndex&&Y.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(e=!0){e&&this.onHide.emit({}),this.modal&&this.disableModality()}close(e){this.hide(),this.visibleChange.emit(!1),e.preventDefault()}enableModality(){let e=this.document.querySelectorAll(".p-drawer-open"),n=e.length,i=n==1?String(parseInt(this.container.style.zIndex)-1):String(parseInt(e[n-1].style.zIndex)-1);this.mask||(this.mask=this.renderer.createElement("div"),this.mask&&(_e(this.mask,"style",this.getMaskStyle()),_e(this.mask,"style",`z-index: ${i}`),he(this.mask,this.cx("mask"))),this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",p=>{this.dismissible&&this.close(p)})),this.renderer.appendChild(this.document.body,this.mask),this.blockScroll&&Ue())}getMaskStyle(){return this.maskStyle?Object.entries(this.maskStyle).map(([e,n])=>`${e}: ${n}`).join("; "):""}disableModality(){this.mask&&(Ne(this.mask,"p-overlay-mask-enter"),he(this.mask,"p-overlay-mask-leave"),this.animationEndListener=this.renderer.listen(this.mask,"animationend",this.destroyModal.bind(this)))}destroyModal(){this.unbindMaskClickListener(),this.mask&&this.renderer.removeChild(this.document.body,this.mask),this.blockScroll&&qe(),this.unbindAnimationEndListener(),this.mask=null}onAnimationStart(e){switch(e.toState){case"visible":this.container=e.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener();break}}onAnimationEnd(e){switch(e.toState){case"void":this.hide(!1),Y.clear(this.container),this.unbindGlobalListeners();break}}appendContainer(){this.appendTo&&(this.appendTo==="body"&&this.container?this.renderer.appendChild(this.document.body,this.container):this.container&&Pe(this.appendTo,this.container))}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(e,"keydown",n=>{n.which==27&&parseInt(this.container.style.zIndex)===Y.get(this.container)&&this.close(n)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}ngOnDestroy(){this.initialized=!1,this.visible&&this.modal&&this.destroyModal(),this.appendTo&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex&&Y.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=M(t)))(i||t)}})();static \u0275cmp=h({type:t,selectors:[["p-drawer"]],contentQueries:function(n,i,p){if(n&1&&(C(p,Ct,4),C(p,St,4),C(p,kt,4),C(p,Tt,4),C(p,Et,4),C(p,te,4)),n&2){let d;_(d=b())&&(i.headerTemplate=d.first),_(d=b())&&(i.footerTemplate=d.first),_(d=b())&&(i.contentTemplate=d.first),_(d=b())&&(i.closeIconTemplate=d.first),_(d=b())&&(i.headlessTemplate=d.first),_(d=b())&&(i.templates=d)}},viewQuery:function(n,i){if(n&1&&(pe(Mt,5),pe(Dt,5)),n&2){let p;_(p=b())&&(i.containerViewChild=p.first),_(p=b())&&(i.closeButtonViewChild=p.first)}},inputs:{appendTo:"appendTo",blockScroll:[2,"blockScroll","blockScroll",V],style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:[2,"autoZIndex","autoZIndex",V],baseZIndex:[2,"baseZIndex","baseZIndex",Le],modal:[2,"modal","modal",V],closeButtonProps:"closeButtonProps",dismissible:[2,"dismissible","dismissible",V],showCloseIcon:[2,"showCloseIcon","showCloseIcon",V],closeOnEscape:[2,"closeOnEscape","closeOnEscape",V],transitionOptions:"transitionOptions",visible:"visible",position:"position",fullScreen:"fullScreen",header:"header",maskStyle:"maskStyle",closable:[2,"closable","closable",V]},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},features:[Q([rt]),F],ngContentSelectors:It,decls:1,vars:1,consts:[["container",""],["icon",""],["role","complementary",3,"class","style","keydown",4,"ngIf"],["role","complementary",3,"keydown"],[4,"ngTemplateOutlet"],[3,"ngClass"],[3,"class",4,"ngIf"],[3,"ngClass","buttonProps","ariaLabel","onClick","keydown.enter",4,"ngIf"],[4,"ngIf"],[3,"onClick","keydown.enter","ngClass","buttonProps","ariaLabel"],["data-p-icon","times",4,"ngIf"],["data-p-icon","times"]],template:function(n,i){n&1&&(P(),m(0,Zt,4,13,"div",2)),n&2&&o("ngIf",i.visible)},dependencies:[q,W,U,ee,$,Re,A],encapsulation:2,data:{animation:[Fe("panelState",[ue("void => visible",[ge(Yt)]),ue("visible => void",[ge(Kt)])])]},changeDetection:0})}return t})();function Jt(t,a){if(t&1&&(l(0,"span",7),u(1),s()),t&2){let e=c().$implicit;r(),I(e.shortcut)}}function Wt(t,a){if(t&1){let e=O();l(0,"a",5),y("click",function(){x(e);let i=c();return w(i.closeDrawer())}),g(1,"span"),l(2,"span",6),u(3),s(),k(4,Jt,2,1,"span",7),s()}if(t&2){let e=a.$implicit;o("routerLink",e.routerLink)("routerLinkActiveOptions",e.routerLinkActiveOptions),r(),v(e.icon),r(2),I(e.label),r(),T(e.shortcut?4:-1)}}var ie=class t{drawerVisible=L(!0);menuItems=[{label:"Home",icon:"pi pi-home",routerLink:["/"],shortcut:"H",routerLinkActiveOptions:{exact:!0}},{label:"Leads",icon:"pi pi-inbox",routerLink:["/leads"],shortcut:"L",routerLinkActiveOptions:{exact:!0}},{label:"Clients",icon:"pi pi-users",routerLink:["/clients"],shortcut:"C",routerLinkActiveOptions:{exact:!0}},{label:"Projects",icon:"pi pi-briefcase",routerLink:["/projects"],shortcut:"P",routerLinkActiveOptions:{exact:!0}}];openDrawer(){this.drawerVisible.set(!0)}closeDrawer(){this.drawerVisible.set(!1)}handleVisibilityChange(a){this.drawerVisible.set(a)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=h({type:t,selectors:[["app-menu"]],decls:6,vars:8,consts:[["item",""],[1,"menu-shell","flex","items-center"],["type","button","icon","pi pi-bars","severity","secondary","variant","outlined","rounded","","size","small","styleClass","menu__trigger","aria-haspopup","dialog","aria-label","Open menu",3,"click"],["header","Menu","position","left",3,"visibleChange","visible","modal","dismissible","blockScroll","closeOnEscape"],["styleClass","menu__list border-0",3,"model","pAutoFocus"],["pRipple","","routerLinkActive","p-menuitem-link-active",1,"menu__item","group","flex","items-center","p-menu-item-link",3,"click","routerLink","routerLinkActiveOptions"],[1,"ml-2"],[1,"menu__shortcut","ml-auto","border","border-surface","rounded","bg-emphasis","text-muted-color","text-xs","p-1","hidden","xl:inline-block"]],template:function(e,n){if(e&1){let i=O();l(0,"section",1)(1,"p-button",2),y("click",function(){return x(i),w(n.openDrawer())}),s(),l(2,"p-drawer",3),y("visibleChange",function(d){return x(i),w(n.handleVisibilityChange(d))}),l(3,"p-menu",4),m(4,Wt,5,6,"ng-template",null,0,E),s()()()}e&2&&(r(),f("aria-expanded",n.drawerVisible()),r(),o("visible",n.drawerVisible())("modal",!0)("dismissible",!0)("blockScroll",!0)("closeOnEscape",!0),r(),o("model",n.menuItems)("pAutoFocus",!0))},dependencies:[G,$,ne,Ge,$e,Ze,He,Be,ze],styles:[".menu__item.p-menuitem-link-active[_ngcontent-%COMP%]{color:var(--p-primary-color);font-weight:600}.menu__item.p-menuitem-link-active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{color:inherit}"],changeDetection:0})};var lt=`
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
`;var en=["*"];function tn(t,a){if(t&1&&(l(0,"span"),u(1),s()),t&2){let e=c();v(e.cx("label")),r(),I(e.label)}}function nn(t,a){if(t&1&&g(0,"span",4),t&2){let e=c(2);v(e.icon),o("ngClass",e.cx("icon"))}}function an(t,a){if(t&1&&m(0,nn,1,3,"span",3),t&2){let e=c(),n=ce(5);o("ngIf",e.icon)("ngIfElse",n)}}function rn(t,a){if(t&1){let e=O();l(0,"img",6),y("error",function(i){x(e);let p=c(2);return w(p.imageError(i))}),s()}if(t&2){let e=c(2);o("src",e.image,we),f("aria-label",e.ariaLabel)}}function on(t,a){if(t&1&&m(0,rn,1,2,"img",5),t&2){let e=c();o("ngIf",e.image)}}var ln={root:({instance:t})=>["p-avatar p-component",{"p-avatar-image":t.image!=null,"p-avatar-circle":t.shape==="circle","p-avatar-lg":t.size==="large","p-avatar-xl":t.size==="xlarge"}],label:"p-avatar-label",icon:"p-avatar-icon"},st=(()=>{class t extends H{name="avatar";theme=lt;classes=ln;static \u0275fac=(()=>{let e;return function(i){return(e||(e=M(t)))(i||t)}})();static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})();var pt=(()=>{class t extends Z{label;icon;image;size="normal";shape="square";styleClass;ariaLabel;ariaLabelledBy;onImageError=new N;_componentStyle=S(st);imageError(e){this.onImageError.emit(e)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=M(t)))(i||t)}})();static \u0275cmp=h({type:t,selectors:[["p-avatar"]],hostVars:5,hostBindings:function(n,i){n&2&&(f("data-pc-name","avatar")("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledBy),v(i.cn(i.cx("root"),i.styleClass)))},inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onImageError:"onImageError"},features:[Q([st]),F],ngContentSelectors:en,decls:6,vars:2,consts:[["iconTemplate",""],["imageTemplate",""],[3,"class",4,"ngIf","ngIfElse"],[3,"class","ngClass",4,"ngIf","ngIfElse"],[3,"ngClass"],[3,"src","error",4,"ngIf"],[3,"error","src"]],template:function(n,i){if(n&1&&(P(),j(0),m(1,tn,2,3,"span",2)(2,an,1,2,"ng-template",null,0,E)(4,on,1,1,"ng-template",null,1,E)),n&2){let p=ce(3);r(),o("ngIf",i.label)("ngIfElse",p)}},dependencies:[q,W,U,A],encapsulation:2,changeDetection:0})}return t})();function sn(t,a){if(t&1&&g(0,"p-avatar",2),t&2){let e=c();o("image",e.avatarSrcSig())}}function pn(t,a){if(t&1&&g(0,"p-avatar",3),t&2){let e=c();o("label",e.initialsSig())}}function cn(t,a){if(t&1&&(l(0,"p",4),u(1),s()),t&2){let e=c();r(),I(e.errorSig())}}function dn(t,a){if(t&1&&g(0,"p-avatar",8),t&2){let e=c();o("image",e.avatarSrcSig())}}function mn(t,a){if(t&1&&g(0,"p-avatar",9),t&2){let e=c();o("label",e.initialsSig())}}function un(t,a){if(t&1&&(l(0,"div",15)(1,"p",20),u(2," Activity "),s(),l(3,"div",21)(4,"div",22)(5,"span",23),u(6,"Created"),s(),l(7,"span",24),u(8),s()(),l(9,"div",25)(10,"span",23),u(11,"Updated"),s(),l(12,"span",24),u(13),s()()()()),t&2){let e,n,i=c();r(8),R(" ",(e=i.profileMetaSig())==null?null:e.createdAtLabel," "),r(5),R(" ",((n=i.profileMetaSig())==null?null:n.updatedAtLabel)||"-"," ")}}function fn(t,a){if(t&1&&(l(0,"p",19),u(1),s()),t&2){let e=c();r(),R(" ",e.logoutErrorSig()," ")}}var ct=new Intl.DateTimeFormat(void 0,{dateStyle:"medium",timeStyle:"short"}),re=class t{userService=S(Qe);messageService=S(je);logoutSubscription=null;sidebarVisible=L(!1);errorSig=L(null);logoutErrorSig=L(null);avatarSrcSig=L(null);isLoggingOut=L(!1);router=S(Ae);userSig=Ye(this.userService.getUser().pipe(ye(a=>{let e=a instanceof Error?a.message:"Failed to load profile.";return this.errorSig.set(e),ve(null)})),{initialValue:null});initialsSig=J(()=>{let a=this.userSig();if(!a)return"?";let e=a.name.split(" ").filter(Boolean).map(n=>n.charAt(0).toUpperCase()).filter(Boolean).slice(0,2).join("");return e||a.username.charAt(0).toUpperCase()||"?"});triggerLabelSig=J(()=>{let a=this.userSig();return a?`Open profile for ${a.name}`:"Open profile panel"});profileMetaSig=J(()=>{let a=this.userSig();return a?{createdAtLabel:ct.format(a.createdAt),updatedAtLabel:a.lastModifiedAt?ct.format(a.lastModifiedAt):null}:null});constructor(){Ie(()=>{let a=this.userSig();if(!a?.profile){this.avatarSrcSig.set(null);return}let e=URL.createObjectURL(a.profile);return this.avatarSrcSig.set(e),()=>URL.revokeObjectURL(e)})}ngOnDestroy(){this.logoutSubscription?.unsubscribe(),this.logoutSubscription=null}openSidebar(){this.errorSig()||this.sidebarVisible.set(!0)}closeSidebar(){this.sidebarVisible.set(!1)}handleVisibilityChange(a){this.sidebarVisible.set(a)}handleLogout(){this.logoutSubscription?.unsubscribe(),this.logoutSubscription=null,this.logoutErrorSig.set(null),this.isLoggingOut.set(!0),this.logoutSubscription=this.userService.logoutUser().subscribe({next:()=>{this.isLoggingOut.set(!1),this.closeSidebar(),this.messageService.add({key:"app-toast",severity:"success",summary:"Logged out",detail:"Your session has ended.",life:3e3}),this.router.navigate(["/login"])},error:a=>{let e=a instanceof Error?a.message:"Failed to log out.";this.isLoggingOut.set(!1),this.logoutErrorSig.set(e),this.messageService.add({key:"app-toast",severity:"error",summary:"Logout failed",detail:e})},complete:()=>{this.logoutSubscription=null}})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=h({type:t,selectors:[["app-profile"]],hostAttrs:[1,"profile-component"],decls:23,vars:16,consts:[[1,"profile-shell"],["type","button","severity","secondary","rounded","","size","small","variant","outlined","styleClass","profile-shell__trigger p-1","aria-haspopup","dialog",3,"click","disabled"],["shape","circle","size","normal","aria-hidden","true",3,"image"],["shape","circle","size","large","aria-hidden","true",3,"label"],["role","status",1,"profile-shell__error","text-xs","text-rose-400"],["header","Profile","position","right","styleClass","",3,"visibleChange","visible","modal","dismissible","blockScroll","closeOnEscape"],[1,"flex","flex-col","items-center","gap-3","sm:gap-4"],[1,"profile-drawer__avatar-wrapper","flex","w-full","justify-center"],["shape","circle","size","xlarge","styleClass","w-40 h-40 text-4xl font-semibold border-4 border-primary-600","aria-label","User profile image",3,"image"],["shape","circle","size","xlarge","styleClass","w-40 h-40 text-4xl font-semibold border-4 border-primary-600","aria-label","User profile initials",3,"label"],[1,"flex","flex-col","items-center","gap-0.5","text-center"],[1,"profile-drawer__name","text-xl","font-semibold","tracking-tight","text-primary-600"],[1,"profile-drawer__username","text-sm","text-primary-200","flex","items-center","gap-1"],["aria-hidden","true",1,"text-primary-400"],[1,"profile-drawer__username-text","text-primary-300"],[1,"w-full","rounded-2xl","border","border-slate-200/70","px-4","py-4","text-xs","shadow-sm","shadow-slate-200/60","ring-1","ring-white/70","backdrop-blur","dark:border-slate-700/70","dark:shadow-slate-950/60","dark:ring-white/10"],[1,"w-full"],[1,"flex","w-full","flex-col","gap-2"],["type","button","icon","pi pi-sign-out","label","Log out","severity","danger","styleClass","profile-drawer__logout-button w-full",3,"click","loading"],["role","status",1,"profile-drawer__logout-error","text-sm","text-rose-500"],[1,"mb-3","text-[0.65rem]","uppercase","tracking-[0.2em]","text-slate-500","dark:text-slate-400"],[1,"flex","flex-col","divide-y","divide-slate-200/60","dark:divide-slate-700/60"],[1,"flex","items-center","justify-between","gap-4","py-2","first:pt-0"],[1,"text-[0.65rem]","uppercase","tracking-[0.12em]","text-slate-500","dark:text-slate-400"],[1,"font-semibold","text-slate-600","dark:text-slate-50"],[1,"flex","items-center","justify-between","gap-4","py-2"]],template:function(e,n){if(e&1&&(l(0,"section",0)(1,"p-button",1),y("click",function(){return n.openSidebar()}),k(2,sn,1,1,"p-avatar",2)(3,pn,1,1,"p-avatar",3),s(),k(4,cn,2,1,"p",4),s(),l(5,"p-drawer",5),y("visibleChange",function(p){return n.handleVisibilityChange(p)}),l(6,"section",6)(7,"div",7),k(8,dn,1,1,"p-avatar",8)(9,mn,1,1,"p-avatar",9),s(),l(10,"div",10)(11,"p",11),u(12),s(),l(13,"p",12)(14,"span",13),u(15,"@"),s(),l(16,"span",14),u(17),s()()(),k(18,un,14,2,"div",15),g(19,"p-divider",16),l(20,"div",17)(21,"p-button",18),y("click",function(){return n.handleLogout()}),s(),k(22,fn,2,1,"p",19),s()()()),e&2){let i,p;r(),o("disabled",!!n.errorSig()),f("aria-label",n.triggerLabelSig())("aria-expanded",n.sidebarVisible()),r(),T(n.avatarSrcSig()?2:3),r(2),T(n.errorSig()?4:-1),r(),o("visible",n.sidebarVisible())("modal",!0)("dismissible",!0)("blockScroll",!0)("closeOnEscape",!0),r(3),T(n.avatarSrcSig()?8:9),r(4),R(" ",(i=n.userSig())==null?null:i.name," "),r(5),R(" ",(p=n.userSig())==null?null:p.username," "),r(),T(n.profileMetaSig()?18:-1),r(3),o("loading",n.isLoggingOut()),r(),T(n.logoutErrorSig()?22:-1)}},dependencies:[G,$,pt,ne,Ke,Je,Xe],encapsulation:2,changeDetection:0})};function gn(t,a){t&1&&(l(0,"div",2),g(1,"app-menu",3),l(2,"a",4),g(3,"img",5),s()())}function hn(t,a){t&1&&(l(0,"div",2),g(1,"app-theme-toggle",6)(2,"app-profile",7),s())}var oe=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=h({type:t,selectors:[["app-navbar"]],decls:5,vars:0,consts:[["start",""],["end",""],[1,"flex","items-center","justify-start","gap-2","md:gap-4"],[1,"navbar__drawer"],["href","/","aria-label","Go to LeadLite home","title","LeadLite",1,"w-32","h-8"],["ngSrc","Lead Lite Large Rectangle.svg","width","160","height","40","priority","","alt","LeadLite",1,""],[1,"navbar__toggle"],[1,"navbar__profile"]],template:function(e,n){e&1&&(l(0,"p-toolbar"),m(1,gn,4,0,"ng-template",null,0,E)(3,hn,3,0,"ng-template",null,1,E),s())},dependencies:[G,Oe,We,re,it,be,ie],encapsulation:2,changeDetection:0})};var le=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=h({type:t,selectors:[["app-dashboard"]],decls:2,vars:0,template:function(e,n){e&1&&g(0,"app-navbar")(1,"router-outlet")},dependencies:[Ve,oe],encapsulation:2})};var se=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=h({type:t,selectors:[["app-home"]],decls:2,vars:0,template:function(e,n){e&1&&(Ce(0,"p"),u(1,"home works!"),Se())},encapsulation:2})};var _n=[{path:"",component:le,children:[{path:"",component:se},{path:"home",redirectTo:"",pathMatch:"full"},{path:"leads",loadComponent:()=>import("./chunk-TDFNDZG5.js")},{path:"clients",loadComponent:()=>import("./chunk-KLOPRIRL.js")},{path:"projects",loadComponent:()=>import("./chunk-QBJSO4IG.js")}]}],ia=_n;export{ia as default};
