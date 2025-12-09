import{A as $,B as X,C as J,D as at,E as lt,F as dt,G as me,a as Ze,b as qe,c as ce,d as Ue,e as We,f as Qe,g as Ye,h as Ge,i as Ke,j as $e,k as F,l as Je,m as et,n as tt,o as q,p as U,q as W,r as it,s as nt,t as ot,u as rt,v as st,w as Q,x as Y,y as G,z as K}from"./chunk-FANFJPM4.js";import{$ as Ae,B as Ve,F as ze,K as pe,N as Re,O as Be,W as Z,X as Ne,aa as v,c as Ee,ca as je,d as le,da as He,f as j,g as H,ga as Xe,h as de,ja as O,q as Oe,y as Fe}from"./chunk-NNAIPGCP.js";import{$ as ie,$a as Te,A as ve,D as ye,Da as Ce,F as S,Fa as xe,Ga as h,H as y,Ha as a,Ia as Se,Ja as se,Ka as E,Ma as we,N as be,Na as ae,O as s,Ra as ke,Ua as Me,V as g,W as L,Z as I,_ as P,_a as B,aa as _e,da as w,db as De,ea as b,eb as Le,f as he,fa as _,fb as Ie,ga as c,gb as k,ha as r,hb as N,ia as l,ja as u,jb as Pe,ob as A,qa as V,s as T,sa as f,t as D,ta as m,ua as z,va as R,w as p,wa as ne,y as C,ya as oe,z as x,za as re}from"./chunk-EOY5GODJ.js";var pt=`
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
        margin: dt('divider.horizontal.margin');
        padding: dt('divider.horizontal.padding');
    }

    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        inset-block-start: 50%;
        inset-inline-start: 0;
        width: 100%;
        content: '';
        border-block-start: 1px solid dt('divider.border.color');
    }

    .p-divider-horizontal .p-divider-content {
        padding: dt('divider.horizontal.content.padding');
    }

    .p-divider-vertical {
        min-height: 100%;
        display: flex;
        position: relative;
        justify-content: center;
        margin: dt('divider.vertical.margin');
        padding: dt('divider.vertical.padding');
    }

    .p-divider-vertical:before {
        position: absolute;
        display: block;
        inset-block-start: 0;
        inset-inline-start: 50%;
        height: 100%;
        content: '';
        border-inline-start: 1px solid dt('divider.border.color');
    }

    .p-divider.p-divider-vertical .p-divider-content {
        padding: dt('divider.vertical.content.padding');
    }

    .p-divider-content {
        z-index: 1;
        background: dt('divider.content.background');
        color: dt('divider.content.color');
    }

    .p-divider-solid.p-divider-horizontal:before {
        border-block-start-style: solid;
    }

    .p-divider-solid.p-divider-vertical:before {
        border-inline-start-style: solid;
    }

    .p-divider-dashed.p-divider-horizontal:before {
        border-block-start-style: dashed;
    }

    .p-divider-dashed.p-divider-vertical:before {
        border-inline-start-style: dashed;
    }

    .p-divider-dotted.p-divider-horizontal:before {
        border-block-start-style: dotted;
    }

    .p-divider-dotted.p-divider-vertical:before {
        border-inline-start-style: dotted;
    }

    .p-divider-left:dir(rtl),
    .p-divider-right:dir(rtl) {
        flex-direction: row-reverse;
    }
`;var yt=["*"],bt={root:({instance:e})=>({justifyContent:e.layout==="horizontal"?e.align==="center"||e.align==null?"center":e.align==="left"?"flex-start":e.align==="right"?"flex-end":null:null,alignItems:e.layout==="vertical"?e.align==="center"||e.align==null?"center":e.align==="top"?"flex-start":e.align==="bottom"?"flex-end":null:null})},_t={root:({instance:e})=>["p-divider p-component","p-divider-"+e.layout,"p-divider-"+e.type,{"p-divider-left":e.layout==="horizontal"&&(!e.align||e.align==="left")},{"p-divider-center":e.layout==="horizontal"&&e.align==="center"},{"p-divider-right":e.layout==="horizontal"&&e.align==="right"},{"p-divider-top":e.layout==="vertical"&&e.align==="top"},{"p-divider-center":e.layout==="vertical"&&(!e.align||e.align==="center")},{"p-divider-bottom":e.layout==="vertical"&&e.align==="bottom"}],content:"p-divider-content"},ct=(()=>{class e extends O{name="divider";theme=pt;classes=_t;inlineStyles=bt;static \u0275fac=(()=>{let t;return function(n){return(t||(t=y(e)))(n||e)}})();static \u0275prov=T({token:e,factory:e.\u0275fac})}return e})();var ue=(()=>{class e extends F{styleClass;layout="horizontal";type="solid";align;_componentStyle=p(ct);static \u0275fac=(()=>{let t;return function(n){return(t||(t=y(e)))(n||e)}})();static \u0275cmp=g({type:e,selectors:[["p-divider"]],hostAttrs:["data-pc-name","divider","role","separator"],hostVars:5,hostBindings:function(i,n){i&2&&(w("aria-orientation",n.layout),xe(n.sx("root")),h(n.cn(n.cx("root"),n.styleClass)))},inputs:{styleClass:"styleClass",layout:"layout",type:"type",align:"align"},features:[E([ct]),I],ngContentSelectors:yt,decls:2,vars:2,template:function(i,n){i&1&&(z(),r(0,"div"),R(1),l()),i&2&&h(n.cx("content"))},dependencies:[k,v],encapsulation:2,changeDetection:0})}return e})(),mt=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=L({type:e});static \u0275inj=D({imports:[ue]})}return e})();var xt=["content"],St=["*"],wt=(e,o)=>({showTransitionParams:e,hideTransitionParams:o}),kt=(e,o)=>({value:e,params:o}),Mt=e=>({closeCallback:e});function Tt(e,o){}function Dt(e,o){e&1&&P(0,Tt,0,0,"ng-template")}function Lt(e,o){if(e&1){let t=V();r(0,"div",1),f("click",function(n){C(t);let d=m();return x(d.onOverlayClick(n))})("@animation.start",function(n){C(t);let d=m();return x(d.onAnimationStart(n))})("@animation.done",function(n){C(t);let d=m();return x(d.onAnimationEnd(n))}),r(1,"div",2),f("click",function(n){C(t);let d=m();return x(d.onContentClick(n))})("mousedown",function(n){C(t);let d=m();return x(d.onContentClick(n))}),R(2),P(3,Dt,1,0,null,3),l()()}if(e&2){let t=m();h(t.cn(t.cx("root"),t.styleClass)),c("ngStyle",t.style)("@animation",ae(14,kt,t.overlayVisible?"open":"close",ae(11,wt,t.showTransitionOptions,t.hideTransitionOptions))),w("aria-modal",t.overlayVisible)("aria-label",t.ariaLabel)("aria-labelledBy",t.ariaLabelledBy),s(),h(t.cx("content")),s(2),c("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)("ngTemplateOutletContext",we(17,Mt,t.onCloseClick.bind(t)))}}var It=`
.p-popover {
    margin-top: dt('popover.gutter');
    background: dt('popover.background');
    color: dt('popover.color');
    border: 1px solid dt('popover.border.color');
    border-radius: dt('popover.border.radius');
    box-shadow: dt('popover.shadow');
    position: absolute
}

.p-popover-content {
    padding: dt('popover.content.padding');
}

.p-popover-flipped {
    margin-top: calc(dt('popover.gutter') * -1);
    margin-bottom: dt('popover.gutter');
}

.p-popover-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-popover-leave-to {
    opacity: 0;
}

.p-popover-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-popover-leave-active {
    transition: opacity 0.1s linear;
}

.p-popover:after,
.p-popover:before {
    bottom: 100%;
    left: calc(dt('popover.arrow.offset') + dt('popover.arrow.left'));
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.p-popover:after {
    border-width: calc(dt('popover.gutter') - 2px);
    margin-left: calc(-1 * (dt('popover.gutter') - 2px));
    border-style: solid;
    border-color: transparent;
    border-bottom-color: dt('popover.background');
}

.p-popover:before {
    border-width: dt('popover.gutter');
    margin-left: calc(-1 * dt('popover.gutter'));
    border-style: solid;
    border-color: transparent;
    border-bottom-color: dt('popover.border.color');
}

.p-popover-flipped:after,
.p-popover-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-popover.p-popover-flipped:after {
    border-bottom-color: transparent;
    border-top-color: dt('popover.background');
}

.p-popover.p-popover-flipped:before {
    border-bottom-color: transparent;
    border-top-color: dt('popover.border.color');
}

`,Pt={root:"p-popover p-component",content:"p-popover-content"},ut=(()=>{class e extends O{name="popover";theme=It;classes=Pt;static \u0275fac=(()=>{let t;return function(n){return(t||(t=y(e)))(n||e)}})();static \u0275prov=T({token:e,factory:e.\u0275fac})}return e})(),Et=(()=>{class e extends F{ariaLabel;ariaLabelledBy;dismissable=!0;style;styleClass;appendTo="body";autoZIndex=!0;ariaCloseLabel;baseZIndex=0;focusOnShow=!0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";onShow=new ie;onHide=new ie;container;overlayVisible=!1;render=!1;isOverlayAnimationInProgress=!1;selfClick=!1;documentClickListener;target;willHide;scrollHandler;documentResizeListener;contentTemplate;templates;_contentTemplate;destroyCallback;overlayEventListener;overlaySubscription;_componentStyle=p(ut);zone=p(_e);overlayService=p(Ne);ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break}})}bindDocumentClickListener(){if(N(this.platformId)&&!this.documentClickListener){let t=Re()?"touchstart":"click",i=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentClickListener=this.renderer.listen(i,t,n=>{this.dismissable&&(!this.container?.contains(n.target)&&this.target!==n.target&&!this.target.contains(n.target)&&!this.selfClick&&this.hide(),this.selfClick=!1,this.cd.markForCheck())})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null,this.selfClick=!1)}toggle(t,i){this.isOverlayAnimationInProgress||(this.overlayVisible?(this.hasTargetChanged(t,i)&&(this.destroyCallback=()=>{this.show(null,i||t.currentTarget||t.target)}),this.hide()):this.show(t,i))}show(t,i){i&&t&&t.stopPropagation(),!this.isOverlayAnimationInProgress&&(this.target=i||t.currentTarget||t.target,this.overlayVisible=!0,this.render=!0,this.cd.markForCheck())}onOverlayClick(t){this.overlayService.add({originalEvent:t,target:this.el.nativeElement}),this.selfClick=!0}onContentClick(t){let i=t.target;this.selfClick=t.offsetX<i.clientWidth&&t.offsetY<i.clientHeight}hasTargetChanged(t,i){return this.target!=null&&this.target!==(i||t.currentTarget||t.target)}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):Ve(this.appendTo,this.container))}restoreAppend(){this.container&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.container)}align(){this.autoZIndex&&$.set("overlay",this.container,this.baseZIndex+this.config.zIndex.overlay),Fe(this.container,this.target,!1);let t=pe(this.container),i=pe(this.target),n=this.document.defaultView?.getComputedStyle(this.container).getPropertyValue("border-radius"),d=0;t.left<i.left&&(d=i.left-t.left-parseFloat(n)*2),this.container?.style.setProperty(Xe("popover.arrow.left").name,`${d}px`),t.top<i.top&&(this.container?.setAttribute("data-p-popover-flipped","true"),Oe(this.container,"p-popover-flipped"))}onAnimationStart(t){t.toState==="open"&&(this.container=t.element,this.container?.setAttribute(this.attrSelector,""),this.appendContainer(),this.align(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),this.focusOnShow&&this.focus(),this.overlayEventListener=i=>{this.container&&this.container.contains(i.target)&&(this.selfClick=!0)},this.overlaySubscription=this.overlayService.clickObservable.subscribe(this.overlayEventListener),this.onShow.emit(null)),this.isOverlayAnimationInProgress=!0}onAnimationEnd(t){switch(t.toState){case"void":this.destroyCallback&&(this.destroyCallback(),this.destroyCallback=null),this.overlaySubscription&&this.overlaySubscription.unsubscribe();break;case"close":this.autoZIndex&&$.clear(this.container),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),this.onContainerDestroy(),this.onHide.emit({}),this.render=!1;break}this.isOverlayAnimationInProgress=!1}focus(){let t=ze(this.container,"[autofocus]");t&&this.zone.runOutsideAngular(()=>{setTimeout(()=>t.focus(),5)})}hide(){this.overlayVisible=!1,this.cd.markForCheck()}onCloseClick(t){this.hide(),t.preventDefault()}onEscapeKeydown(t){this.hide()}onWindowResize(){this.overlayVisible&&!Be()&&this.hide()}bindDocumentResizeListener(){if(N(this.platformId)&&!this.documentResizeListener){let t=this.document.defaultView;this.documentResizeListener=this.renderer.listen(t,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){N(this.platformId)&&(this.scrollHandler||(this.scrollHandler=new Je(this.target,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener())}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}onContainerDestroy(){this.cd.destroyed||(this.target=null),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&$.clear(this.container),this.cd.destroyed||(this.target=null),this.destroyCallback=null,this.container&&(this.restoreAppend(),this.onContainerDestroy()),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let t;return function(n){return(t||(t=y(e)))(n||e)}})();static \u0275cmp=g({type:e,selectors:[["p-popover"]],contentQueries:function(i,n,d){if(i&1&&(ne(d,xt,4),ne(d,Ae,4)),i&2){let M;oe(M=re())&&(n.contentTemplate=M.first),oe(M=re())&&(n.templates=M)}},hostBindings:function(i,n){i&1&&f("keydown.escape",function(M){return n.onEscapeKeydown(M)},be)},inputs:{ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",dismissable:[2,"dismissable","dismissable",B],style:"style",styleClass:"styleClass",appendTo:"appendTo",autoZIndex:[2,"autoZIndex","autoZIndex",B],ariaCloseLabel:"ariaCloseLabel",baseZIndex:[2,"baseZIndex","baseZIndex",Te],focusOnShow:[2,"focusOnShow","focusOnShow",B],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onShow:"onShow",onHide:"onHide"},features:[E([ut]),I],ngContentSelectors:St,decls:1,vars:1,consts:[["role","dialog",3,"class","ngStyle","click",4,"ngIf"],["role","dialog",3,"click","ngStyle"],[3,"click","mousedown"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,n){i&1&&(z(),P(0,Lt,4,19,"div",0)),i&2&&c("ngIf",n.render)},dependencies:[k,De,Ie,Le,v],encapsulation:2,data:{animation:[Ee("animation",[H("void",j({transform:"scaleY(0.8)",opacity:0})),H("close",j({opacity:0})),H("open",j({transform:"translateY(0)",opacity:1})),de("void => open",le("{{showTransitionParams}}")),de("open => close",le("{{hideTransitionParams}}"))])]},changeDetection:0})}return e})(),ft=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=L({type:e});static \u0275inj=D({imports:[Et,v,v]})}return e})();var gt=`
    .p-progressspinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }

    .p-progressspinner::before {
        content: '';
        display: block;
        padding-top: 100%;
    }

    .p-progressspinner-spin {
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        animation: p-progressspinner-rotate 2s linear infinite;
    }

    .p-progressspinner-circle {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: 0;
        stroke: dt('progressspinner.colorOne');
        animation:
            p-progressspinner-dash 1.5s ease-in-out infinite,
            p-progressspinner-color 6s ease-in-out infinite;
        stroke-linecap: round;
    }

    @keyframes p-progressspinner-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes p-progressspinner-dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35px;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124px;
        }
    }
    @keyframes p-progressspinner-color {
        100%,
        0% {
            stroke: dt('progressspinner.color.one');
        }
        40% {
            stroke: dt('progressspinner.color.two');
        }
        66% {
            stroke: dt('progressspinner.color.three');
        }
        80%,
        90% {
            stroke: dt('progressspinner.color.four');
        }
    }
`;var Ot={root:()=>["p-progressspinner"],spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},ht=(()=>{class e extends O{name="progressspinner";theme=gt;classes=Ot;static \u0275fac=(()=>{let t;return function(n){return(t||(t=y(e)))(n||e)}})();static \u0275prov=T({token:e,factory:e.\u0275fac})}return e})();var fe=(()=>{class e extends F{styleClass;strokeWidth="2";fill="none";animationDuration="2s";ariaLabel;_componentStyle=p(ht);static \u0275fac=(()=>{let t;return function(n){return(t||(t=y(e)))(n||e)}})();static \u0275cmp=g({type:e,selectors:[["p-progressSpinner"],["p-progress-spinner"],["p-progressspinner"]],hostVars:7,hostBindings:function(i,n){i&2&&(w("aria-label",n.ariaLabel)("role","progressbar")("data-pc-name","progressspinner")("data-pc-section","root")("aria-busy",!0),h(n.cn(n.cx("root"),n.styleClass)))},inputs:{styleClass:"styleClass",strokeWidth:"strokeWidth",fill:"fill",animationDuration:"animationDuration",ariaLabel:"ariaLabel"},features:[E([ht]),I],decls:2,vars:9,consts:[["viewBox","25 25 50 50"],["cx","50","cy","50","r","20","stroke-miterlimit","10"]],template:function(i,n){i&1&&(ve(),r(0,"svg",0),u(1,"circle",1),l()),i&2&&(h(n.cx("spin")),Ce("animation-duration",n.animationDuration),w("data-pc-section","root"),s(),h(n.cx("circle")),w("fill",n.fill)("stroke-width",n.strokeWidth))},dependencies:[k,v],encapsulation:2,changeDetection:0})}return e})(),vt=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=L({type:e});static \u0275inj=D({imports:[fe,v,v]})}return e})();function At(e,o){if(e&1&&(r(0,"p-message",8),a(1),l()),e&2){let t=m();s(),se(" ",t.dialogError()," ")}}function jt(e,o){e&1&&(r(0,"div",9),u(1,"p-progressSpinner",13),r(2,"span"),a(3,"Resetting everything..."),l()())}var te=class e{dexieRepository=p(je);router=p(A);messageService=p(Z);confirmationPhrase="reset-entirely";dialogVisible=S(!1);confirmationValue=S("");isConfirming=S(!1);dialogError=S(null);canConfirm=Me(()=>this.confirmationValue().trim()===this.confirmationPhrase);openDialog(){this.dialogVisible.set(!0),this.confirmationValue.set(""),this.dialogError.set(null)}handleInput(o){this.confirmationValue.set(o)}cancel(){this.isConfirming()||(this.dialogVisible.set(!1),this.confirmationValue.set(""),this.dialogError.set(null))}confirmReset(){return he(this,null,function*(){if(!(!this.canConfirm()||this.isConfirming())){this.isConfirming.set(!0),this.dialogError.set(null);try{yield this.dexieRepository.resetAllData(),sessionStorage.clear(),this.messageService.add({severity:"success",summary:"Reset complete",detail:"All local data has been removed. Redirecting to signup."}),this.dialogVisible.set(!1),this.router.navigateByUrl("/signup")}catch(o){let t=o instanceof Error?o.message:"Failed to reset application data.";this.dialogError.set(t),this.messageService.add({severity:"error",summary:"Reset failed",detail:t})}finally{this.isConfirming.set(!1),this.confirmationValue.set("")}}})}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=g({type:e,selectors:[["app-reset-entirely"]],hostAttrs:[1,"reset-entirely"],decls:20,vars:14,consts:[["pButton","","type","button","severity","danger",1,"reset-entirely__trigger",3,"click"],["pButtonLabel",""],["position","top-center"],["header","Reset Everything",2,"width","min(90vw, 480px)",3,"visible","modal","closable","dismissableMask","closeOnEscape","draggable","resizable"],[1,"reset-entirely__dialog"],[1,"reset-entirely__copy"],["for","reset-confirmation",1,"reset-entirely__label"],["pInputText","","id","reset-confirmation","type","text","autocomplete","off","spellcheck","false","placeholder","reset-entirely",3,"input","value","disabled"],["data-testid","reset-error","severity","error","variant","simple","size","small","aria-live","assertive"],["aria-live","polite",1,"reset-entirely__loader"],[1,"reset-entirely__actions"],["pButton","","type","button","severity","secondary",3,"click","disabled"],["pButton","","type","button","severity","danger","data-testid","reset-confirm",3,"click","disabled"],["styleClass","reset-entirely__spinner"]],template:function(t,i){t&1&&(r(0,"button",0),f("click",function(){return i.openDialog()}),r(1,"span",1),a(2,"Reset Entirely"),l()(),u(3,"p-toast",2),r(4,"p-dialog",3)(5,"div",4)(6,"p",5),a(7," This action will reset all the data stored or used by this application entirely. You might not revert them back. "),l(),r(8,"label",6),a(9),l(),r(10,"input",7),f("input",function(d){return i.handleInput(d.target.value)}),l(),b(11,At,2,1,"p-message",8),b(12,jt,4,0,"div",9),r(13,"div",10)(14,"button",11),f("click",function(){return i.cancel()}),r(15,"span",1),a(16,"Cancel"),l()(),r(17,"button",12),f("click",function(){return i.confirmReset()}),r(18,"span",1),a(19,"Confirm Reset"),l()()()()()),t&2&&(s(4),c("visible",i.dialogVisible())("modal",!0)("closable",!1)("dismissableMask",!1)("closeOnEscape",!1)("draggable",!1)("resizable",!1),s(5),se(' Type "',i.confirmationPhrase,'" to confirm your action. '),s(),c("value",i.confirmationValue())("disabled",i.isConfirming()),s(),_(i.dialogError()?11:-1),s(),_(i.isConfirming()?12:-1),s(2),c("disabled",i.isConfirming()),s(3),c("disabled",!i.canConfirm()||i.isConfirming()))},dependencies:[k,W,U,q,lt,at,Y,Q,K,G,vt,fe,J,X],styles:[".reset-entirely[_nghost-%COMP%]{display:inline-flex;flex-direction:column;gap:.75rem;width:100%}.reset-entirely__trigger[_ngcontent-%COMP%]{width:100%}.reset-entirely__dialog[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.reset-entirely__copy[_ngcontent-%COMP%]{font-size:.95rem;line-height:1.4}.reset-entirely__label[_ngcontent-%COMP%]{font-weight:600}.reset-entirely__actions[_ngcontent-%COMP%]{margin-top:.5rem;display:flex;justify-content:flex-end;gap:.75rem}.reset-entirely__loader[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;font-size:.9rem}.reset-entirely__spinner[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem}.reset-entirely__status[_ngcontent-%COMP%]{align-self:flex-start}"],changeDetection:0})};function Ht(e,o){e&1&&a(0,"Login")}function Zt(e,o){e&1&&a(0," Username is required. ")}function qt(e,o){e&1&&a(0," Spaces are not allowed. ")}function Ut(e,o){e&1&&a(0," Only letters, numbers, _ allowed. ")}function Wt(e,o){e&1&&a(0," Minimum 4 characters. ")}function Qt(e,o){e&1&&a(0," Maximum 20 characters. ")}function Yt(e,o){if(e&1&&(r(0,"p-message",12),b(1,Zt,1,0)(2,qt,1,0)(3,Ut,1,0)(4,Wt,1,0)(5,Qt,1,0),l()),e&2){let t,i=m();s(),_(!((t=i.form.get("username"))==null||t.errors==null)&&t.errors.required?1:!((t=i.form.get("username"))==null||t.errors==null)&&t.errors.spaceNotAllowed?2:!((t=i.form.get("username"))==null||t.errors==null)&&t.errors.invalidChars?3:!((t=i.form.get("username"))==null||t.errors==null)&&t.errors.minlength?4:!((t=i.form.get("username"))==null||t.errors==null)&&t.errors.maxlength?5:-1)}}function Gt(e,o){e&1&&a(0," Password is required. ")}function Kt(e,o){e&1&&a(0," Spaces are not allowed. ")}function $t(e,o){e&1&&a(0," Must include a number. ")}function Xt(e,o){e&1&&a(0," Minimum 6 characters. ")}function Jt(e,o){e&1&&a(0," Maximum 12 characters. ")}function ei(e,o){if(e&1&&(r(0,"p-message",12),b(1,Gt,1,0),b(2,Kt,1,0)(3,$t,1,0)(4,Xt,1,0)(5,Jt,1,0),l()),e&2){let t,i,n=m();s(),_(!((t=n.form.get("password"))==null||t.errors==null)&&t.errors.required?1:-1),s(),_(!((i=n.form.get("password"))==null||i.errors==null)&&i.errors.spaceNotAllowed?2:!((i=n.form.get("password"))==null||i.errors==null)&&i.errors.numberRequired?3:!((i=n.form.get("password"))==null||i.errors==null)&&i.errors.minlength?4:!((i=n.form.get("password"))==null||i.errors==null)&&i.errors.maxlength?5:-1)}}var ge=class e{fb=p(Ke);userService=p(He);router=p(A);messageService=p(Z);destroyRef=p(ye);form=this.fb.group({username:["",[ce.required,me.username()]],password:["",[ce.required,me.password()]]});formSubmitted=S(!1);isSubmitting=S(!1);handleLoginFormSubmit(){if(this.formSubmitted.set(!0),this.form.invalid){this.form.markAllAsTouched();return}let{username:o,password:t}=this.form.getRawValue();!o||!t||(this.isSubmitting.set(!0),this.userService.loginUser(o,t).pipe(Ze(this.destroyRef)).subscribe({next:()=>{this.isSubmitting.set(!1),this.messageService.add({severity:"success",summary:"Login successful",detail:"Redirecting you now."}),this.router.navigateByUrl("/")},error:i=>{this.isSubmitting.set(!1),this.messageService.add({severity:"error",summary:"Login failed",detail:i?.message??"Please verify your credentials and try again."})}}))}isInvalid(o){let t=this.form.get(o);return t?.invalid&&(t.touched||this.formSubmitted())}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=g({type:e,selectors:[["app-login"]],decls:29,vars:9,consts:[["title",""],[1,"h-screen","w-full","flex","flex-col","lg:flex-row","justify-center","lg:justify-around","items-center","p-4","gap-8","lg:gap-4","bg-surface-50","dark:bg-surface-950"],[1,"fixed","top-4","right-4","lg:right-16"],["position","top-right"],[1,"lg:max-w-sm","xl:max-w-md","lg:w-full","relative"],["ngSrc","Lead Lite Large Square.svg","alt","Lead Lite","height","120","width","120","priority","",1,"aspect-square","w-full","z-0"],[1,"absolute","top-1/2","left-1/2","translate-1/2","-z-10","invisible"],[1,"w-full","max-w-lg","px-2","py-4","text-center"],["pFocusTrap","",1,"flex","flex-col","gap-6","w-full","max-w-sm","mx-auto","mt-10",3,"ngSubmit","formGroup"],["variant","in"],["pInputText","","id","username","name","username","type","text","formControlName","username","autocomplete","off","fluid","","pSize","small",3,"pAutoFocus","invalid"],["for","username"],["severity","error","size","small","variant","simple",1,"-mt-5"],["pInputText","","id","password","name","password","type","password","formControlName","password","autocomplete","off","fluid","","pSize","small",3,"invalid"],["for","password"],["pButton","","type","submit",1,"login-submit-button",3,"disabled","loading"],["pButtonLabel",""],["align","center",1,"login-reset-divider"],[1,"login-reset-divider__label"],[1,"login-reset-action"]],template:function(t,i){if(t&1){let n=V();r(0,"section",1),u(1,"app-theme-toggle",2)(2,"p-toast",3),r(3,"figure",4),u(4,"img",5),r(5,"figcaption",6),a(6," Lead Lite - Only What You Need "),l()(),r(7,"p-card",7),P(8,Ht,1,0,"ng-template",null,0,ke),r(10,"form",8),f("ngSubmit",function(){return C(n),x(i.handleLoginFormSubmit())}),r(11,"p-floatLabel",9),u(12,"input",10),r(13,"label",11),a(14,"Username"),l()(),b(15,Yt,6,1,"p-message",12),r(16,"p-floatLabel",9),u(17,"input",13),r(18,"label",14),a(19,"Password"),l()(),b(20,ei,6,2,"p-message",12),r(21,"button",15)(22,"span",16),a(23),l()()(),r(24,"p-divider",17)(25,"span",18),a(26,"Danger zone"),l()(),r(27,"div",19),u(28,"app-reset-entirely"),l()()()}t&2&&(s(10),c("formGroup",i.form),s(2),c("pAutoFocus",!0)("invalid",i.isInvalid("username")),s(3),_(i.isInvalid("username")?15:-1),s(2),c("invalid",i.isInvalid("password")),s(3),_(i.isInvalid("password")?20:-1),s(),c("disabled",i.isSubmitting())("loading",i.isSubmitting()),s(2),Se(i.isSubmitting()?"Signing in...":"Submit"))},dependencies:[nt,it,$e,Qe,qe,Ue,We,Ye,Ge,Y,Q,ot,W,U,q,K,G,tt,et,st,rt,ft,mt,ue,dt,te,J,X,Pe],styles:["[_nghost-%COMP%]   .login-submit-button[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .login-reset-divider[_ngcontent-%COMP%]{width:min(320px,100%);margin:2rem auto 1.25rem}[_nghost-%COMP%]   .login-reset-divider__label[_ngcontent-%COMP%]{font-size:.75rem;font-weight:600;text-transform:uppercase;letter-spacing:.05em;color:color-mix(in srgb,var(--p-red-500) 85%,black)}[_nghost-%COMP%]   .login-reset-action[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%;max-width:24rem;margin:0 auto}[_nghost-%COMP%]   .login-reset-action[_ngcontent-%COMP%]   app-reset-entirely[_ngcontent-%COMP%]{display:inline-flex;width:100%}"],changeDetection:0})};export{ge as default};
