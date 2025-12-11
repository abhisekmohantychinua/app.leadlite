import{b as Xe}from"./chunk-HXFSVF4J.js";import{b as R,d as Qe,e as Re,g as qe,k as Ue,l as He,o as Y,p as J,q as ee,r as Ze,s as $e,u as Ge,w as Ke,x as Ye}from"./chunk-HXYWDJ5T.js";import{B as ge,Ba as Q,C as he,E as _e,Fa as Pe,O as be,Q as je,Z as Ne,b as G,d as N,f as K,g as P,j as Ae,n as Ve,na as ve,p as Be,q as Fe,w as ze,x as ue,xa as X,ya as k,z as fe}from"./chunk-CRXDJZFB.js";import{$ as x,Ab as T,B as Ce,Bb as p,Cb as F,Db as z,Eb as y,Fb as de,Gb as b,Hb as v,Ja as ke,Kb as me,Ma as r,Nb as Ie,Ob as h,Pb as u,Qb as S,R as A,Rb as W,S as U,Sb as j,Ub as De,Vb as Ee,W as M,Ya as _,Za as Z,Zb as I,aa as w,ab as V,ba as Te,bb as m,bc as ie,cc as Le,db as $,ia as H,la as C,lb as f,lc as D,mb as E,mc as Oe,nb as L,ob as o,p as we,pb as s,qb as c,rb as g,sb as Se,tb as Me,vb as te,wb as ne,xb as O,yb as B}from"./chunk-TBMMB432.js";var Je=`
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
`;var dt=["start"],mt=["end"],ut=["center"],ft=["*"];function gt(t,a){t&1&&O(0)}function ht(t,a){if(t&1&&(s(0,"div"),m(1,gt,1,0,"ng-container",1),c()),t&2){let e=p();h(e.cx("start")),f("data-pc-section","start"),r(),o("ngTemplateOutlet",e.startTemplate||e._startTemplate)}}function _t(t,a){t&1&&O(0)}function bt(t,a){if(t&1&&(s(0,"div"),m(1,_t,1,0,"ng-container",1),c()),t&2){let e=p();h(e.cx("center")),f("data-pc-section","center"),r(),o("ngTemplateOutlet",e.centerTemplate||e._centerTemplate)}}function vt(t,a){t&1&&O(0)}function yt(t,a){if(t&1&&(s(0,"div"),m(1,vt,1,0,"ng-container",1),c()),t&2){let e=p();h(e.cx("end")),f("data-pc-section","end"),r(),o("ngTemplateOutlet",e.endTemplate||e._endTemplate)}}var xt={root:()=>["p-toolbar p-component"],start:"p-toolbar-start",center:"p-toolbar-center",end:"p-toolbar-end"},We=(()=>{class t extends Q{name="toolbar";theme=Je;classes=xt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=C(t)))(n||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var xe=(()=>{class t extends R{styleClass;ariaLabelledBy;_componentStyle=M(We);getBlockableElement(){return this.el.nativeElement.children[0]}startTemplate;endTemplate;centerTemplate;templates;_startTemplate;_endTemplate;_centerTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"start":case"left":this._startTemplate=e.template;break;case"end":case"right":this._endTemplate=e.template;break;case"center":this._centerTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=C(t)))(n||t)}})();static \u0275cmp=_({type:t,selectors:[["p-toolbar"]],contentQueries:function(i,n,l){if(i&1&&(y(l,dt,4),y(l,mt,4),y(l,ut,4),y(l,X,4)),i&2){let d;b(d=v())&&(n.startTemplate=d.first),b(d=v())&&(n.endTemplate=d.first),b(d=v())&&(n.centerTemplate=d.first),b(d=v())&&(n.templates=d)}},hostAttrs:["data-pc-section","root","data-pc-name","toolbar","role","toolbar"],hostVars:3,hostBindings:function(i,n){i&2&&(f("aria-labelledby",n.ariaLabelledBy),h(n.cn(n.cx("root"),n.styleClass)))},inputs:{styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy"},features:[j([We]),V],ngContentSelectors:ft,decls:4,vars:3,consts:[[3,"class",4,"ngIf"],[4,"ngTemplateOutlet"]],template:function(i,n){i&1&&(F(),z(0),m(1,ht,2,4,"div",0)(2,bt,2,4,"div",0)(3,yt,2,4,"div",0)),i&2&&(r(),o("ngIf",n.startTemplate||n._startTemplate),r(),o("ngIf",n.centerTemplate||n._centerTemplate),r(),o("ngIf",n.endTemplate||n._endTemplate))},dependencies:[P,N,K,k],encapsulation:2,changeDetection:0})}return t})(),et=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Z({type:t});static \u0275inj=U({imports:[xe,k,k]})}return t})();var tt=`
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
`;var Ct=["header"],Tt=["footer"],kt=["content"],St=["closeicon"],Mt=["headless"],It=["container"],Dt=["closeButton"],Et=["*"],Lt=(t,a)=>({transform:t,transition:a}),Ot=t=>({value:"visible",params:t});function At(t,a){t&1&&O(0)}function Vt(t,a){if(t&1&&m(0,At,1,0,"ng-container",4),t&2){let e=p(2);o("ngTemplateOutlet",e.headlessTemplate||e._headlessTemplate)}}function Bt(t,a){t&1&&O(0)}function Ft(t,a){if(t&1&&(s(0,"div"),u(1),c()),t&2){let e=p(3);h(e.cx("title")),r(),S(e.header)}}function zt(t,a){t&1&&(Te(),g(0,"svg",11)),t&2&&f("data-pc-section","closeicon")}function jt(t,a){}function Nt(t,a){t&1&&m(0,jt,0,0,"ng-template")}function Pt(t,a){if(t&1&&m(0,zt,1,1,"svg",10)(1,Nt,1,0,null,4),t&2){let e=p(4);o("ngIf",!e.closeIconTemplate&&!e._closeIconTemplate),r(),o("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function Qt(t,a){if(t&1){let e=B();s(0,"p-button",9),T("onClick",function(n){x(e);let l=p(3);return w(l.close(n))})("keydown.enter",function(n){x(e);let l=p(3);return w(l.close(n))}),m(1,Pt,2,2,"ng-template",null,1,I),c()}if(t&2){let e=p(3);o("ngClass",e.cx("pcCloseButton"))("buttonProps",e.closeButtonProps)("ariaLabel",e.ariaCloseLabel),f("data-pc-section","closebutton")("data-pc-group-section","iconcontainer")}}function Rt(t,a){t&1&&O(0)}function qt(t,a){t&1&&O(0)}function Ut(t,a){if(t&1&&(te(0),s(1,"div",5),m(2,qt,1,0,"ng-container",4),c(),ne()),t&2){let e=p(3);r(),o("ngClass",e.cx("footer")),f("data-pc-section","footer"),r(),o("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}function Ht(t,a){if(t&1&&(s(0,"div",5),m(1,Bt,1,0,"ng-container",4)(2,Ft,2,3,"div",6)(3,Qt,3,5,"p-button",7),c(),s(4,"div",5),z(5),m(6,Rt,1,0,"ng-container",4),c(),m(7,Ut,3,3,"ng-container",8)),t&2){let e=p(2);o("ngClass",e.cx("header")),f("data-pc-section","header"),r(),o("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),r(),o("ngIf",e.header),r(),o("ngIf",e.showCloseIcon&&e.closable),r(),o("ngClass",e.cx("content")),f("data-pc-section","content"),r(2),o("ngTemplateOutlet",e.contentTemplate||e._contentTemplate),r(),o("ngIf",e.footerTemplate||e._footerTemplate)}}function Zt(t,a){if(t&1){let e=B();s(0,"div",3,0),T("@panelState.start",function(n){x(e);let l=p();return w(l.onAnimationStart(n))})("@panelState.done",function(n){x(e);let l=p();return w(l.onAnimationEnd(n))})("keydown",function(n){x(e);let l=p();return w(l.onKeyDown(n))}),E(2,Vt,1,1,"ng-container")(3,Ht,8,9),c()}if(t&2){let e=p();Ie(e.style),h(e.cn(e.cx("root"),e.styleClass)),o("@panelState",De(11,Ot,Ee(8,Lt,e.transformOptions,e.transitionOptions))),f("data-pc-name","sidebar")("data-pc-section","root"),r(2),L(e.headlessTemplate||e._headlessTemplate?2:3)}}var $t=`
    ${tt}

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
`,Gt={mask:({instance:t})=>["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter":t.modal},{"p-drawer-full":t.fullScreen}],root:({instance:t})=>["p-drawer p-component",{"p-drawer-full":t.fullScreen,"p-drawer-open":t.visible},`p-drawer-${t.position}`],header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},nt=(()=>{class t extends Q{name="drawer";theme=$t;classes=Gt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=C(t)))(n||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var Kt=he([fe({transform:"{{transform}}",opacity:0}),ue("{{transition}}")]),Xt=he([ue("{{transition}}",fe({transform:"{{transform}}",opacity:0}))]),it="translate3d(-100%, 0px, 0px)",ae=(()=>{class t extends R{appendTo="body";blockScroll=!1;style;styleClass;ariaCloseLabel;autoZIndex=!0;baseZIndex=0;modal=!0;closeButtonProps={severity:"secondary",text:!0,rounded:!0};dismissible=!0;showCloseIcon=!0;closeOnEscape=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible??!1}set visible(e){this._visible=e}get position(){return this._position}set position(e){if(this._position=e,e==="full"){this.transformOptions="none";return}switch(e){case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break}}get fullScreen(){return this._fullScreen}set fullScreen(e){this._fullScreen=e,e===!0?this.transformOptions="none":this.transformOptions=it}header;maskStyle;closable=!0;onShow=new $;onHide=new $;visibleChange=new $;containerViewChild;closeButtonViewChild;initialized;_visible;_position="left";_fullScreen=!1;container;transformOptions=it;mask;maskClickListener;documentEscapeListener;animationEndListener;_componentStyle=M(nt);ngAfterViewInit(){super.ngAfterViewInit(),this.initialized=!0}headerTemplate;footerTemplate;contentTemplate;closeIconTemplate;headlessTemplate;_headerTemplate;_footerTemplate;_contentTemplate;_closeIconTemplate;_headlessTemplate;templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break;case"headless":this._headlessTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}onKeyDown(e){e.code==="Escape"&&this.hide(!1)}show(){this.container?.setAttribute(this.attrSelector,""),this.autoZIndex&&ee.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(e=!0){e&&this.onHide.emit({}),this.modal&&this.disableModality()}close(e){this.hide(),this.visibleChange.emit(!1),e.preventDefault()}enableModality(){let e=this.document.querySelectorAll(".p-drawer-open"),i=e.length,n=i==1?String(parseInt(this.container.style.zIndex)-1):String(parseInt(e[i-1].style.zIndex)-1);this.mask||(this.mask=this.renderer.createElement("div"),this.mask&&(ve(this.mask,"style",this.getMaskStyle()),ve(this.mask,"style",`z-index: ${n}`),be(this.mask,this.cx("mask"))),this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",l=>{this.dismissible&&this.close(l)})),this.renderer.appendChild(this.document.body,this.mask),this.blockScroll&&Qe())}getMaskStyle(){return this.maskStyle?Object.entries(this.maskStyle).map(([e,i])=>`${e}: ${i}`).join("; "):""}disableModality(){this.mask&&(je(this.mask,"p-overlay-mask-enter"),be(this.mask,"p-overlay-mask-leave"),this.animationEndListener=this.renderer.listen(this.mask,"animationend",this.destroyModal.bind(this)))}destroyModal(){this.unbindMaskClickListener(),this.mask&&this.renderer.removeChild(this.document.body,this.mask),this.blockScroll&&Re(),this.unbindAnimationEndListener(),this.mask=null}onAnimationStart(e){switch(e.toState){case"visible":this.container=e.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener();break}}onAnimationEnd(e){switch(e.toState){case"void":this.hide(!1),ee.clear(this.container),this.unbindGlobalListeners();break}}appendContainer(){this.appendTo&&(this.appendTo==="body"&&this.container?this.renderer.appendChild(this.document.body,this.container):this.container&&Ne(this.appendTo,this.container))}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(e,"keydown",i=>{i.which==27&&parseInt(this.container.style.zIndex)===ee.get(this.container)&&this.close(i)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}ngOnDestroy(){this.initialized=!1,this.visible&&this.modal&&this.destroyModal(),this.appendTo&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex&&ee.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=C(t)))(n||t)}})();static \u0275cmp=_({type:t,selectors:[["p-drawer"]],contentQueries:function(i,n,l){if(i&1&&(y(l,Ct,4),y(l,Tt,4),y(l,kt,4),y(l,St,4),y(l,Mt,4),y(l,X,4)),i&2){let d;b(d=v())&&(n.headerTemplate=d.first),b(d=v())&&(n.footerTemplate=d.first),b(d=v())&&(n.contentTemplate=d.first),b(d=v())&&(n.closeIconTemplate=d.first),b(d=v())&&(n.headlessTemplate=d.first),b(d=v())&&(n.templates=d)}},viewQuery:function(i,n){if(i&1&&(de(It,5),de(Dt,5)),i&2){let l;b(l=v())&&(n.containerViewChild=l.first),b(l=v())&&(n.closeButtonViewChild=l.first)}},inputs:{appendTo:"appendTo",blockScroll:[2,"blockScroll","blockScroll",D],style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:[2,"autoZIndex","autoZIndex",D],baseZIndex:[2,"baseZIndex","baseZIndex",Oe],modal:[2,"modal","modal",D],closeButtonProps:"closeButtonProps",dismissible:[2,"dismissible","dismissible",D],showCloseIcon:[2,"showCloseIcon","showCloseIcon",D],closeOnEscape:[2,"closeOnEscape","closeOnEscape",D],transitionOptions:"transitionOptions",visible:"visible",position:"position",fullScreen:"fullScreen",header:"header",maskStyle:"maskStyle",closable:[2,"closable","closable",D]},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},features:[j([nt]),V],ngContentSelectors:Et,decls:1,vars:1,consts:[["container",""],["icon",""],["role","complementary",3,"class","style","keydown",4,"ngIf"],["role","complementary",3,"keydown"],[4,"ngTemplateOutlet"],[3,"ngClass"],[3,"class",4,"ngIf"],[3,"ngClass","buttonProps","ariaLabel","onClick","keydown.enter",4,"ngIf"],[4,"ngIf"],[3,"onClick","keydown.enter","ngClass","buttonProps","ariaLabel"],["data-p-icon","times",4,"ngIf"],["data-p-icon","times"]],template:function(i,n){i&1&&(F(),m(0,Zt,4,13,"div",2)),i&2&&o("ngIf",n.visible)},dependencies:[P,G,N,K,Y,Ue,k],encapsulation:2,data:{animation:[ze("panelState",[ge("void => visible",[_e(Kt)]),ge("visible => void",[_e(Xt)])])]},changeDetection:0})}return t})();function Jt(t,a){if(t&1&&(s(0,"span",7),u(1),c()),t&2){let e=p().$implicit;r(),S(e.shortcut)}}function Wt(t,a){if(t&1){let e=B();s(0,"a",5),T("click",function(){x(e);let n=p();return w(n.closeDrawer())}),g(1,"span"),s(2,"span",6),u(3),c(),E(4,Jt,2,1,"span",7),c()}if(t&2){let e=a.$implicit;o("routerLink",e.routerLink)("routerLinkActiveOptions",e.routerLinkActiveOptions),r(),h(e.icon),r(2),S(e.label),r(),L(e.shortcut?4:-1)}}var re=class t{drawerVisible=H(!0);menuItems=[{label:"Home",icon:"pi pi-home",routerLink:["/"],shortcut:"H",routerLinkActiveOptions:{exact:!0}},{label:"Leads",icon:"pi pi-inbox",routerLink:["/leads"],shortcut:"L",routerLinkActiveOptions:{exact:!0}},{label:"Clients",icon:"pi pi-users",routerLink:["/clients"],shortcut:"C",routerLinkActiveOptions:{exact:!0}},{label:"Projects",icon:"pi pi-briefcase",routerLink:["/projects"],shortcut:"P",routerLinkActiveOptions:{exact:!0}}];openDrawer(){this.drawerVisible.set(!0)}closeDrawer(){this.drawerVisible.set(!1)}handleVisibilityChange(a){this.drawerVisible.set(a)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=_({type:t,selectors:[["app-menu"]],decls:6,vars:8,consts:[["item",""],[1,"menu-shell","flex","items-center"],["type","button","icon","pi pi-bars","severity","secondary","variant","outlined","rounded","","size","small","styleClass","menu__trigger","aria-haspopup","dialog","aria-label","Open menu",3,"click"],["header","Menu","position","left",3,"visibleChange","visible","modal","dismissible","blockScroll","closeOnEscape"],["styleClass","menu__list border-0",3,"model","pAutoFocus"],["pRipple","","routerLinkActive","p-menuitem-link-active",1,"menu__item","group","flex","items-center","p-menu-item-link",3,"click","routerLink","routerLinkActiveOptions"],[1,"ml-2"],[1,"menu__shortcut","ml-auto","border","border-surface","rounded","bg-emphasis","text-muted-color","text-xs","p-1"]],template:function(e,i){if(e&1){let n=B();s(0,"section",1)(1,"p-button",2),T("click",function(){return x(n),w(i.openDrawer())}),c(),s(2,"p-drawer",3),T("visibleChange",function(d){return x(n),w(i.handleVisibilityChange(d))}),s(3,"p-menu",4),m(4,Wt,5,6,"ng-template",null,0,I),c()()()}e&2&&(r(),f("aria-expanded",i.drawerVisible()),r(),o("visible",i.drawerVisible())("modal",!0)("dismissible",!0)("blockScroll",!0)("closeOnEscape",!0),r(),o("model",i.menuItems)("pAutoFocus",!0))},dependencies:[J,Y,ae,$e,Ze,He,qe,Be,Fe],styles:[".menu__item.p-menuitem-link-active[_ngcontent-%COMP%]{color:var(--p-primary-color);font-weight:600}.menu__item.p-menuitem-link-active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{color:inherit}"],changeDetection:0})};var at=`
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
`;var en=["*"];function tn(t,a){if(t&1&&(s(0,"span"),u(1),c()),t&2){let e=p();h(e.cx("label")),r(),S(e.label)}}function nn(t,a){if(t&1&&g(0,"span",4),t&2){let e=p(2);h(e.icon),o("ngClass",e.cx("icon"))}}function an(t,a){if(t&1&&m(0,nn,1,3,"span",3),t&2){let e=p(),i=me(5);o("ngIf",e.icon)("ngIfElse",i)}}function rn(t,a){if(t&1){let e=B();s(0,"img",6),T("error",function(n){x(e);let l=p(2);return w(l.imageError(n))}),c()}if(t&2){let e=p(2);o("src",e.image,ke),f("aria-label",e.ariaLabel)}}function on(t,a){if(t&1&&m(0,rn,1,2,"img",5),t&2){let e=p();o("ngIf",e.image)}}var ln={root:({instance:t})=>["p-avatar p-component",{"p-avatar-image":t.image!=null,"p-avatar-circle":t.shape==="circle","p-avatar-lg":t.size==="large","p-avatar-xl":t.size==="xlarge"}],label:"p-avatar-label",icon:"p-avatar-icon"},rt=(()=>{class t extends Q{name="avatar";theme=at;classes=ln;static \u0275fac=(()=>{let e;return function(n){return(e||(e=C(t)))(n||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var ot=(()=>{class t extends R{label;icon;image;size="normal";shape="square";styleClass;ariaLabel;ariaLabelledBy;onImageError=new $;_componentStyle=M(rt);imageError(e){this.onImageError.emit(e)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=C(t)))(n||t)}})();static \u0275cmp=_({type:t,selectors:[["p-avatar"]],hostVars:5,hostBindings:function(i,n){i&2&&(f("data-pc-name","avatar")("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledBy),h(n.cn(n.cx("root"),n.styleClass)))},inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onImageError:"onImageError"},features:[j([rt]),V],ngContentSelectors:en,decls:6,vars:2,consts:[["iconTemplate",""],["imageTemplate",""],[3,"class",4,"ngIf","ngIfElse"],[3,"class","ngClass",4,"ngIf","ngIfElse"],[3,"ngClass"],[3,"src","error",4,"ngIf"],[3,"error","src"]],template:function(i,n){if(i&1&&(F(),z(0),m(1,tn,2,3,"span",2)(2,an,1,2,"ng-template",null,0,I)(4,on,1,1,"ng-template",null,1,I)),i&2){let l=me(3);r(),o("ngIf",n.label)("ngIfElse",l)}},dependencies:[P,G,N,k],encapsulation:2,changeDetection:0})}return t})();var lt=`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`;var sn=["icon"],cn=["*"];function pn(t,a){if(t&1&&g(0,"span",3),t&2){let e=p(2);h(e.cx("icon")),o("ngClass",e.icon)}}function dn(t,a){if(t&1&&(te(0),m(1,pn,1,3,"span",2),ne()),t&2){let e=p();r(),o("ngIf",e.icon)}}function mn(t,a){}function un(t,a){t&1&&m(0,mn,0,0,"ng-template")}function fn(t,a){if(t&1&&(s(0,"span"),m(1,un,1,0,null,4),c()),t&2){let e=p();h(e.cx("icon")),r(),o("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)}}var gn={root:({instance:t})=>["p-tag p-component",{"p-tag-info":t.severity==="info","p-tag-success":t.severity==="success","p-tag-warn":t.severity==="warn","p-tag-danger":t.severity==="danger","p-tag-secondary":t.severity==="secondary","p-tag-contrast":t.severity==="contrast","p-tag-rounded":t.rounded}],icon:"p-tag-icon",label:"p-tag-label"},st=(()=>{class t extends Q{name="tag";theme=lt;classes=gn;static \u0275fac=(()=>{let e;return function(n){return(e||(e=C(t)))(n||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var hn=(()=>{class t extends R{styleClass;severity;value;icon;rounded;iconTemplate;templates;_iconTemplate;_componentStyle=M(st);ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"icon":this._iconTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=C(t)))(n||t)}})();static \u0275cmp=_({type:t,selectors:[["p-tag"]],contentQueries:function(i,n,l){if(i&1&&(y(l,sn,4),y(l,X,4)),i&2){let d;b(d=v())&&(n.iconTemplate=d.first),b(d=v())&&(n.templates=d)}},hostVars:2,hostBindings:function(i,n){i&2&&h(n.cn(n.cx("root"),n.styleClass))},inputs:{styleClass:"styleClass",severity:"severity",value:"value",icon:"icon",rounded:[2,"rounded","rounded",D]},features:[j([st]),V],ngContentSelectors:cn,decls:5,vars:5,consts:[[4,"ngIf"],[3,"class",4,"ngIf"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],[4,"ngTemplateOutlet"]],template:function(i,n){i&1&&(F(),z(0),m(1,dn,2,1,"ng-container",0)(2,fn,2,3,"span",1),s(3,"span"),u(4),c()),i&2&&(r(),o("ngIf",!n.iconTemplate&&!n._iconTemplate),r(),o("ngIf",n.iconTemplate||n._iconTemplate),r(),h(n.cx("label")),r(),S(n.value))},dependencies:[P,G,N,K,k],encapsulation:2,changeDetection:0})}return t})(),ct=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Z({type:t});static \u0275inj=U({imports:[hn,k,k]})}return t})();function _n(t,a){if(t&1&&g(0,"p-avatar",2),t&2){let e=p();o("image",e.avatarSrcSig())}}function bn(t,a){if(t&1&&g(0,"p-avatar",3),t&2){let e=p();o("label",e.initialsSig())}}function vn(t,a){if(t&1&&(s(0,"p",4),u(1),c()),t&2){let e=p();r(),S(e.errorSig())}}function yn(t,a){if(t&1&&g(0,"p-avatar",8),t&2){let e=p();o("image",e.avatarSrcSig())}}function xn(t,a){if(t&1&&g(0,"p-avatar",9),t&2){let e=p();o("label",e.initialsSig())}}function wn(t,a){if(t&1&&(s(0,"div",15)(1,"p",16),u(2," Activity "),c(),s(3,"div",17)(4,"div",18)(5,"span",19),u(6,"Created"),c(),s(7,"span",20),u(8),c()(),s(9,"div",21)(10,"span",19),u(11,"Updated"),c(),s(12,"span",20),u(13),c()()()()),t&2){let e,i,n=p();r(8),W(" ",(e=n.profileMetaSig())==null?null:e.createdAtLabel," "),r(5),W(" ",((i=n.profileMetaSig())==null?null:i.updatedAtLabel)||"-"," ")}}var pt=new Intl.DateTimeFormat(void 0,{dateStyle:"medium",timeStyle:"short"}),le=class t{userService=M(Pe);sidebarVisible=H(!1);errorSig=H(null);avatarSrcSig=H(null);userSig=Ge(this.userService.getUser().pipe(Ce(a=>{let e=a instanceof Error?a.message:"Failed to load profile.";return this.errorSig.set(e),we(null)})),{initialValue:null});initialsSig=ie(()=>{let a=this.userSig();if(!a)return"?";let e=a.name.split(" ").filter(Boolean).map(i=>i.charAt(0).toUpperCase()).filter(Boolean).slice(0,2).join("");return e||a.username.charAt(0).toUpperCase()||"?"});triggerLabelSig=ie(()=>{let a=this.userSig();return a?`Open profile for ${a.name}`:"Open profile panel"});profileMetaSig=ie(()=>{let a=this.userSig();return a?{createdAtLabel:pt.format(a.createdAt),updatedAtLabel:a.lastModifiedAt?pt.format(a.lastModifiedAt):null}:null});constructor(){Le(()=>{let a=this.userSig();if(!a?.profile){this.avatarSrcSig.set(null);return}let e=URL.createObjectURL(a.profile);return this.avatarSrcSig.set(e),()=>URL.revokeObjectURL(e)})}openSidebar(){this.errorSig()||this.sidebarVisible.set(!0)}closeSidebar(){this.sidebarVisible.set(!1)}handleVisibilityChange(a){this.sidebarVisible.set(a)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=_({type:t,selectors:[["app-profile"]],hostAttrs:[1,"profile-component"],decls:19,vars:14,consts:[[1,"profile-shell"],["type","button","severity","secondary","rounded","","size","small","variant","outlined","styleClass","profile-shell__trigger p-1","aria-haspopup","dialog",3,"click","disabled"],["shape","circle","size","normal","aria-hidden","true",3,"image"],["shape","circle","size","large","aria-hidden","true",3,"label"],["role","status",1,"profile-shell__error","text-xs","text-rose-400"],["header","Profile","position","right","styleClass","",3,"visibleChange","visible","modal","dismissible","blockScroll","closeOnEscape"],[1,"flex","flex-col","items-center","gap-3","sm:gap-4"],[1,"profile-drawer__avatar-wrapper","flex","w-full","justify-center"],["shape","circle","size","xlarge","styleClass","w-40 h-40 text-4xl font-semibold border-4 border-primary-600","aria-label","User profile image",3,"image"],["shape","circle","size","xlarge","styleClass","w-40 h-40 text-4xl font-semibold border-4 border-primary-600","aria-label","User profile initials",3,"label"],[1,"flex","flex-col","items-center","gap-0.5","text-center"],[1,"profile-drawer__name","text-xl","font-semibold","tracking-tight","text-primary-600"],[1,"profile-drawer__username","text-sm","text-primary-200","flex","items-center","gap-1"],["aria-hidden","true",1,"text-primary-400"],[1,"profile-drawer__username-text","text-primary-300"],[1,"w-full","rounded-2xl","border","border-slate-200/70","px-4","py-4","text-xs","shadow-sm","shadow-slate-200/60","ring-1","ring-white/70","backdrop-blur","dark:border-slate-700/70","dark:shadow-slate-950/60","dark:ring-white/10"],[1,"mb-3","text-[0.65rem]","uppercase","tracking-[0.2em]","text-slate-500","dark:text-slate-400"],[1,"flex","flex-col","divide-y","divide-slate-200/60","dark:divide-slate-700/60"],[1,"flex","items-center","justify-between","gap-4","py-2","first:pt-0"],[1,"text-[0.65rem]","uppercase","tracking-[0.12em]","text-slate-500","dark:text-slate-400"],[1,"font-semibold","text-slate-600","dark:text-slate-50"],[1,"flex","items-center","justify-between","gap-4","py-2"]],template:function(e,i){if(e&1&&(s(0,"section",0)(1,"p-button",1),T("click",function(){return i.openSidebar()}),E(2,_n,1,1,"p-avatar",2)(3,bn,1,1,"p-avatar",3),c(),E(4,vn,2,1,"p",4),c(),s(5,"p-drawer",5),T("visibleChange",function(l){return i.handleVisibilityChange(l)}),s(6,"section",6)(7,"div",7),E(8,yn,1,1,"p-avatar",8)(9,xn,1,1,"p-avatar",9),c(),s(10,"div",10)(11,"p",11),u(12),c(),s(13,"p",12)(14,"span",13),u(15,"@"),c(),s(16,"span",14),u(17),c()()(),E(18,wn,14,2,"div",15),c()()),e&2){let n,l;r(),o("disabled",!!i.errorSig()),f("aria-label",i.triggerLabelSig())("aria-expanded",i.sidebarVisible()),r(),L(i.avatarSrcSig()?2:3),r(2),L(i.errorSig()?4:-1),r(),o("visible",i.sidebarVisible())("modal",!0)("dismissible",!0)("blockScroll",!0)("closeOnEscape",!0),r(3),L(i.avatarSrcSig()?8:9),r(4),W(" ",(n=i.userSig())==null?null:n.name," "),r(5),W(" ",(l=i.userSig())==null?null:l.username," "),r(),L(i.profileMetaSig()?18:-1)}},dependencies:[J,Y,ot,ae,Ke,Xe,ct],encapsulation:2,changeDetection:0})};function Cn(t,a){if(t&1&&(s(0,"div",2),g(1,"app-menu",3),s(2,"a",4),g(3,"img",5),c()()),t&2){let e=p();r(3),o("ngSrc",e.logoSrc)}}function Tn(t,a){t&1&&(s(0,"div",2),g(1,"app-theme-toggle",6)(2,"app-profile",7),c())}var se=class t{logoSrc="/Lead Lite Large Rectangle.svg";menuLabel="Open navigation menu";static \u0275fac=function(e){return new(e||t)};static \u0275cmp=_({type:t,selectors:[["app-navbar"]],hostAttrs:[1,"navbar-host","block","w-full"],decls:5,vars:0,consts:[["start",""],["end",""],[1,"flex","items-center","justify-start","gap-2","md:gap-4"],[1,"navbar__drawer"],["href","/","aria-label","Go to LeadLite home","title","LeadLite",1,"w-32","h-8"],["width","160","height","40","priority","","alt","LeadLite",1,"",3,"ngSrc"],[1,"navbar__toggle"],[1,"navbar__profile"]],template:function(e,i){e&1&&(s(0,"p-toolbar"),m(1,Cn,4,1,"ng-template",null,0,I)(3,Tn,3,0,"ng-template",null,1,I),c())},dependencies:[J,Ae,Ye,le,et,xe,re],encapsulation:2,changeDetection:0})};var ce=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=_({type:t,selectors:[["app-dashboard"]],decls:2,vars:0,template:function(e,i){e&1&&g(0,"app-navbar")(1,"router-outlet")},dependencies:[Ve,se],encapsulation:2})};var pe=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=_({type:t,selectors:[["app-home"]],decls:2,vars:0,template:function(e,i){e&1&&(Se(0,"p"),u(1,"home works!"),Me())},encapsulation:2})};var kn=[{path:"",component:ce,children:[{path:"",component:pe},{path:"home",redirectTo:"",pathMatch:"full"},{path:"leads",loadComponent:()=>import("./chunk-TDFNDZG5.js")},{path:"clients",loadComponent:()=>import("./chunk-KLOPRIRL.js")},{path:"projects",loadComponent:()=>import("./chunk-QBJSO4IG.js")}]}],ka=kn;export{ka as default};
