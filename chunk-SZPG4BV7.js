import{b as ue,c as _e,n as we}from"./chunk-ZL67F5YZ.js";import{A as L,Ba as me,C as O,D as M,Da as he,F as V,Fa as fe,Ga as v,L as Q,N as de,W as ce,b as re,d as oe,f as ae,i as se,la as A,wa as pe,x as le,xa as k,y as E}from"./chunk-DBNTJJ5Q.js";import{Ab as G,Bb as H,Bc as h,Cb as g,Cc as ie,Db as T,Hb as S,Ib as s,Jb as K,Kb as X,Lb as w,Mb as I,Na as d,Nb as p,Ob as m,S as B,T as z,Vb as Y,Wb as D,X as F,Xb as U,Yb as J,Za as j,_a as P,aa as b,ba as y,bb as q,bc as W,ca as Z,db as c,dc as ee,ec as te,fb as x,kc as ne,ma as C,nb as f,ob as R,pb as N,tb as o,ub as u,vb as _,wb as $}from"./chunk-QDV7XRN5.js";var be=`
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
`;var ve=["header"],xe=["footer"],ke=["content"],Ce=["closeicon"],Te=["headless"],Se=["container"],Ie=["closeButton"],De=["*"],Ee=(t,a)=>({transform:t,transition:a}),Le=t=>({value:"visible",params:t});function Oe(t,a){t&1&&g(0)}function Me(t,a){if(t&1&&c(0,Oe,1,0,"ng-container",4),t&2){let e=s(2);o("ngTemplateOutlet",e.headlessTemplate||e._headlessTemplate)}}function Ve(t,a){t&1&&g(0)}function Qe(t,a){if(t&1&&(u(0,"div"),U(1),_()),t&2){let e=s(3);D(e.cx("title")),d(),J(e.header)}}function Ae(t,a){t&1&&(Z(),$(0,"svg",11)),t&2&&f("data-pc-section","closeicon")}function Be(t,a){}function ze(t,a){t&1&&c(0,Be,0,0,"ng-template")}function Fe(t,a){if(t&1&&c(0,Ae,1,1,"svg",10)(1,ze,1,0,null,4),t&2){let e=s(4);o("ngIf",!e.closeIconTemplate&&!e._closeIconTemplate),d(),o("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function Ze(t,a){if(t&1){let e=T();u(0,"p-button",9),S("onClick",function(n){b(e);let r=s(3);return y(r.close(n))})("keydown.enter",function(n){b(e);let r=s(3);return y(r.close(n))}),c(1,Fe,2,2,"ng-template",null,1,ne),_()}if(t&2){let e=s(3);o("ngClass",e.cx("pcCloseButton"))("buttonProps",e.closeButtonProps)("ariaLabel",e.ariaCloseLabel),f("data-pc-section","closebutton")("data-pc-group-section","iconcontainer")}}function je(t,a){t&1&&g(0)}function Pe(t,a){t&1&&g(0)}function qe(t,a){if(t&1&&(G(0),u(1,"div",5),c(2,Pe,1,0,"ng-container",4),_(),H()),t&2){let e=s(3);d(),o("ngClass",e.cx("footer")),f("data-pc-section","footer"),d(),o("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}function Re(t,a){if(t&1&&(u(0,"div",5),c(1,Ve,1,0,"ng-container",4)(2,Qe,2,3,"div",6)(3,Ze,3,5,"p-button",7),_(),u(4,"div",5),X(5),c(6,je,1,0,"ng-container",4),_(),c(7,qe,3,3,"ng-container",8)),t&2){let e=s(2);o("ngClass",e.cx("header")),f("data-pc-section","header"),d(),o("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),d(),o("ngIf",e.header),d(),o("ngIf",e.showCloseIcon&&e.closable),d(),o("ngClass",e.cx("content")),f("data-pc-section","content"),d(2),o("ngTemplateOutlet",e.contentTemplate||e._contentTemplate),d(),o("ngIf",e.footerTemplate||e._footerTemplate)}}function Ne(t,a){if(t&1){let e=T();u(0,"div",3,0),S("@panelState.start",function(n){b(e);let r=s();return y(r.onAnimationStart(n))})("@panelState.done",function(n){b(e);let r=s();return y(r.onAnimationEnd(n))})("keydown",function(n){b(e);let r=s();return y(r.onKeyDown(n))}),R(2,Me,1,1,"ng-container")(3,Re,8,9),_()}if(t&2){let e=s();Y(e.style),D(e.cn(e.cx("root"),e.styleClass)),o("@panelState",ee(11,Le,te(8,Ee,e.transformOptions,e.transitionOptions))),f("data-pc-name","sidebar")("data-pc-section","root"),d(2),N(e.headlessTemplate||e._headlessTemplate?2:3)}}var $e=`
    ${be}

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
`,Ge={mask:({instance:t})=>["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter":t.modal},{"p-drawer-full":t.fullScreen}],root:({instance:t})=>["p-drawer p-component",{"p-drawer-full":t.fullScreen,"p-drawer-open":t.visible},`p-drawer-${t.position}`],header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},ye=(()=>{class t extends me{name="drawer";theme=$e;classes=Ge;static \u0275fac=(()=>{let e;return function(n){return(e||(e=C(t)))(n||t)}})();static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();var He=M([L({transform:"{{transform}}",opacity:0}),E("{{transition}}")]),Ke=M([E("{{transition}}",L({transform:"{{transform}}",opacity:0}))]),ge="translate3d(-100%, 0px, 0px)",Xe=(()=>{class t extends he{appendTo="body";blockScroll=!1;style;styleClass;ariaCloseLabel;autoZIndex=!0;baseZIndex=0;modal=!0;closeButtonProps={severity:"secondary",text:!0,rounded:!0};dismissible=!0;showCloseIcon=!0;closeOnEscape=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible??!1}set visible(e){this._visible=e}get position(){return this._position}set position(e){if(this._position=e,e==="full"){this.transformOptions="none";return}switch(e){case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break}}get fullScreen(){return this._fullScreen}set fullScreen(e){this._fullScreen=e,e===!0?this.transformOptions="none":this.transformOptions=ge}header;maskStyle;closable=!0;onShow=new x;onHide=new x;visibleChange=new x;containerViewChild;closeButtonViewChild;initialized;_visible;_position="left";_fullScreen=!1;container;transformOptions=ge;mask;maskClickListener;documentEscapeListener;animationEndListener;_componentStyle=F(ye);ngAfterViewInit(){super.ngAfterViewInit(),this.initialized=!0}headerTemplate;footerTemplate;contentTemplate;closeIconTemplate;headlessTemplate;_headerTemplate;_footerTemplate;_contentTemplate;_closeIconTemplate;_headlessTemplate;templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break;case"headless":this._headlessTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}onKeyDown(e){e.code==="Escape"&&this.hide(!1)}show(){this.container?.setAttribute(this.attrSelector,""),this.autoZIndex&&v.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(e=!0){e&&this.onHide.emit({}),this.modal&&this.disableModality()}close(e){this.hide(),this.visibleChange.emit(!1),e.preventDefault()}enableModality(){let e=this.document.querySelectorAll(".p-drawer-open"),i=e.length,n=i==1?String(parseInt(this.container.style.zIndex)-1):String(parseInt(e[i-1].style.zIndex)-1);this.mask||(this.mask=this.renderer.createElement("div"),this.mask&&(A(this.mask,"style",this.getMaskStyle()),A(this.mask,"style",`z-index: ${n}`),Q(this.mask,this.cx("mask"))),this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",r=>{this.dismissible&&this.close(r)})),this.renderer.appendChild(this.document.body,this.mask),this.blockScroll&&ue())}getMaskStyle(){return this.maskStyle?Object.entries(this.maskStyle).map(([e,i])=>`${e}: ${i}`).join("; "):""}disableModality(){this.mask&&(de(this.mask,"p-overlay-mask-enter"),Q(this.mask,"p-overlay-mask-leave"),this.animationEndListener=this.renderer.listen(this.mask,"animationend",this.destroyModal.bind(this)))}destroyModal(){this.unbindMaskClickListener(),this.mask&&this.renderer.removeChild(this.document.body,this.mask),this.blockScroll&&_e(),this.unbindAnimationEndListener(),this.mask=null}onAnimationStart(e){switch(e.toState){case"visible":this.container=e.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener();break}}onAnimationEnd(e){switch(e.toState){case"void":this.hide(!1),v.clear(this.container),this.unbindGlobalListeners();break}}appendContainer(){this.appendTo&&(this.appendTo==="body"&&this.container?this.renderer.appendChild(this.document.body,this.container):this.container&&ce(this.appendTo,this.container))}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(e,"keydown",i=>{i.which==27&&parseInt(this.container.style.zIndex)===v.get(this.container)&&this.close(i)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}ngOnDestroy(){this.initialized=!1,this.visible&&this.modal&&this.destroyModal(),this.appendTo&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex&&v.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=C(t)))(n||t)}})();static \u0275cmp=j({type:t,selectors:[["p-drawer"]],contentQueries:function(i,n,r){if(i&1&&(w(r,ve,4),w(r,xe,4),w(r,ke,4),w(r,Ce,4),w(r,Te,4),w(r,pe,4)),i&2){let l;p(l=m())&&(n.headerTemplate=l.first),p(l=m())&&(n.footerTemplate=l.first),p(l=m())&&(n.contentTemplate=l.first),p(l=m())&&(n.closeIconTemplate=l.first),p(l=m())&&(n.headlessTemplate=l.first),p(l=m())&&(n.templates=l)}},viewQuery:function(i,n){if(i&1&&(I(Se,5),I(Ie,5)),i&2){let r;p(r=m())&&(n.containerViewChild=r.first),p(r=m())&&(n.closeButtonViewChild=r.first)}},inputs:{appendTo:"appendTo",blockScroll:[2,"blockScroll","blockScroll",h],style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:[2,"autoZIndex","autoZIndex",h],baseZIndex:[2,"baseZIndex","baseZIndex",ie],modal:[2,"modal","modal",h],closeButtonProps:"closeButtonProps",dismissible:[2,"dismissible","dismissible",h],showCloseIcon:[2,"showCloseIcon","showCloseIcon",h],closeOnEscape:[2,"closeOnEscape","closeOnEscape",h],transitionOptions:"transitionOptions",visible:"visible",position:"position",fullScreen:"fullScreen",header:"header",maskStyle:"maskStyle",closable:[2,"closable","closable",h]},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},features:[W([ye]),q],ngContentSelectors:De,decls:1,vars:1,consts:[["container",""],["icon",""],["role","complementary",3,"class","style","keydown",4,"ngIf"],["role","complementary",3,"keydown"],[4,"ngTemplateOutlet"],[3,"ngClass"],[3,"class",4,"ngIf"],[3,"ngClass","buttonProps","ariaLabel","onClick","keydown.enter",4,"ngIf"],[4,"ngIf"],[3,"onClick","keydown.enter","ngClass","buttonProps","ariaLabel"],["data-p-icon","times",4,"ngIf"],["data-p-icon","times"]],template:function(i,n){i&1&&(K(),c(0,Ne,4,13,"div",2)),i&2&&o("ngIf",n.visible)},dependencies:[se,re,oe,ae,we,fe,k],encapsulation:2,data:{animation:[le("panelState",[O("void => visible",[V(He)]),O("visible => void",[V(Ke)])])]},changeDetection:0})}return t})(),vt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=P({type:t});static \u0275inj=z({imports:[Xe,k,k]})}return t})();export{Xe as a,vt as b};
