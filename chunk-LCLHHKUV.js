import{a as Ye,b as Ge}from"./chunk-HXFSVF4J.js";import{a as $e,b as le,c as Xe,d as Je,e as et,f as tt,g as it,h as nt,i as ot,j as rt,k as st,l as at,m as W,n as Q,o as Y,p as G,q as K,r as $,s as lt,t as pt,u as pe}from"./chunk-6GYVX5J4.js";import{b as H,f as je,g as Ze,h as qe,m as j,n as Z,p as q,q as U,t as Ue,v as We,w as Qe,x as Ke}from"./chunk-HXYWDJ5T.js";import{A as z,B as se,Ba as A,Ea as Ae,Fa as He,O as Oe,W as Ee,Z as Ie,ba as Ve,d as Te,e as Me,f as Le,g as M,ga as ae,h as R,j as De,ja as Re,ka as Fe,o as F,qa as Be,sa as N,ta as ze,w as Pe,x as re,xa as Ne,ya as C,z as B}from"./chunk-CRXDJZFB.js";import{$ as v,Ab as f,Bb as m,Cb as ye,Db as be,Eb as ee,Gb as te,Hb as ie,La as he,Lb as _e,Ma as s,Ob as x,Pb as a,Qb as Ce,R as L,Rb as ne,S as D,Sb as I,Ub as xe,Vb as oe,W as d,Ya as _,Za as P,Zb as Se,aa as y,ab as O,ba as fe,bb as k,bc as we,db as J,ea as ge,eb as ve,f as ue,ia as b,la as w,lb as T,lc as V,mb as g,mc as ke,nb as h,ob as c,pb as r,qb as l,rb as u,yb as E}from"./chunk-TBMMB432.js";var gt=["content"],ht=["*"],vt=(i,o)=>({showTransitionParams:i,hideTransitionParams:o}),yt=(i,o)=>({value:i,params:o}),bt=i=>({closeCallback:i});function _t(i,o){}function Ct(i,o){i&1&&k(0,_t,0,0,"ng-template")}function xt(i,o){if(i&1){let e=E();r(0,"div",1),f("click",function(n){v(e);let p=m();return y(p.onOverlayClick(n))})("@animation.start",function(n){v(e);let p=m();return y(p.onAnimationStart(n))})("@animation.done",function(n){v(e);let p=m();return y(p.onAnimationEnd(n))}),r(1,"div",2),f("click",function(n){v(e);let p=m();return y(p.onContentClick(n))})("mousedown",function(n){v(e);let p=m();return y(p.onContentClick(n))}),be(2),k(3,Ct,1,0,null,3),l()()}if(i&2){let e=m();x(e.cn(e.cx("root"),e.styleClass)),c("ngStyle",e.style)("@animation",oe(14,yt,e.overlayVisible?"open":"close",oe(11,vt,e.showTransitionOptions,e.hideTransitionOptions))),T("aria-modal",e.overlayVisible)("aria-label",e.ariaLabel)("aria-labelledBy",e.ariaLabelledBy),s(),x(e.cx("content")),s(2),c("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",xe(17,bt,e.onCloseClick.bind(e)))}}var St=`
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

`,wt={root:"p-popover p-component",content:"p-popover-content"},dt=(()=>{class i extends A{name="popover";theme=St;classes=wt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=w(i)))(n||i)}})();static \u0275prov=L({token:i,factory:i.\u0275fac})}return i})(),kt=(()=>{class i extends H{ariaLabel;ariaLabelledBy;dismissable=!0;style;styleClass;appendTo="body";autoZIndex=!0;ariaCloseLabel;baseZIndex=0;focusOnShow=!0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";onShow=new J;onHide=new J;container;overlayVisible=!1;render=!1;isOverlayAnimationInProgress=!1;selfClick=!1;documentClickListener;target;willHide;scrollHandler;documentResizeListener;contentTemplate;templates;_contentTemplate;destroyCallback;overlayEventListener;overlaySubscription;_componentStyle=d(dt);zone=d(ve);overlayService=d(ze);ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break}})}bindDocumentClickListener(){if(R(this.platformId)&&!this.documentClickListener){let e=Re()?"touchstart":"click",t=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentClickListener=this.renderer.listen(t,e,n=>{this.dismissable&&(!this.container?.contains(n.target)&&this.target!==n.target&&!this.target.contains(n.target)&&!this.selfClick&&this.hide(),this.selfClick=!1,this.cd.markForCheck())})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null,this.selfClick=!1)}toggle(e,t){this.isOverlayAnimationInProgress||(this.overlayVisible?(this.hasTargetChanged(e,t)&&(this.destroyCallback=()=>{this.show(null,t||e.currentTarget||e.target)}),this.hide()):this.show(e,t))}show(e,t){t&&e&&e.stopPropagation(),!this.isOverlayAnimationInProgress&&(this.target=t||e.currentTarget||e.target,this.overlayVisible=!0,this.render=!0,this.cd.markForCheck())}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.selfClick=!0}onContentClick(e){let t=e.target;this.selfClick=e.offsetX<t.clientWidth&&e.offsetY<t.clientHeight}hasTargetChanged(e,t){return this.target!=null&&this.target!==(t||e.currentTarget||e.target)}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):Ie(this.appendTo,this.container))}restoreAppend(){this.container&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.container)}align(){this.autoZIndex&&U.set("overlay",this.container,this.baseZIndex+this.config.zIndex.overlay),Ee(this.container,this.target,!1);let e=ae(this.container),t=ae(this.target),n=this.document.defaultView?.getComputedStyle(this.container).getPropertyValue("border-radius"),p=0;e.left<t.left&&(p=t.left-e.left-parseFloat(n)*2),this.container?.style.setProperty(Be("popover.arrow.left").name,`${p}px`),e.top<t.top&&(this.container?.setAttribute("data-p-popover-flipped","true"),Oe(this.container,"p-popover-flipped"))}onAnimationStart(e){e.toState==="open"&&(this.container=e.element,this.container?.setAttribute(this.attrSelector,""),this.appendContainer(),this.align(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),this.focusOnShow&&this.focus(),this.overlayEventListener=t=>{this.container&&this.container.contains(t.target)&&(this.selfClick=!0)},this.overlaySubscription=this.overlayService.clickObservable.subscribe(this.overlayEventListener),this.onShow.emit(null)),this.isOverlayAnimationInProgress=!0}onAnimationEnd(e){switch(e.toState){case"void":this.destroyCallback&&(this.destroyCallback(),this.destroyCallback=null),this.overlaySubscription&&this.overlaySubscription.unsubscribe();break;case"close":this.autoZIndex&&U.clear(this.container),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),this.onContainerDestroy(),this.onHide.emit({}),this.render=!1;break}this.isOverlayAnimationInProgress=!1}focus(){let e=Ve(this.container,"[autofocus]");e&&this.zone.runOutsideAngular(()=>{setTimeout(()=>e.focus(),5)})}hide(){this.overlayVisible=!1,this.cd.markForCheck()}onCloseClick(e){this.hide(),e.preventDefault()}onEscapeKeydown(e){this.hide()}onWindowResize(){this.overlayVisible&&!Fe()&&this.hide()}bindDocumentResizeListener(){if(R(this.platformId)&&!this.documentResizeListener){let e=this.document.defaultView;this.documentResizeListener=this.renderer.listen(e,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){R(this.platformId)&&(this.scrollHandler||(this.scrollHandler=new je(this.target,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener())}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}onContainerDestroy(){this.cd.destroyed||(this.target=null),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&U.clear(this.container),this.cd.destroyed||(this.target=null),this.destroyCallback=null,this.container&&(this.restoreAppend(),this.onContainerDestroy()),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=w(i)))(n||i)}})();static \u0275cmp=_({type:i,selectors:[["p-popover"]],contentQueries:function(t,n,p){if(t&1&&(ee(p,gt,4),ee(p,Ne,4)),t&2){let S;te(S=ie())&&(n.contentTemplate=S.first),te(S=ie())&&(n.templates=S)}},hostBindings:function(t,n){t&1&&f("keydown.escape",function(S){return n.onEscapeKeydown(S)},he)},inputs:{ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",dismissable:[2,"dismissable","dismissable",V],style:"style",styleClass:"styleClass",appendTo:"appendTo",autoZIndex:[2,"autoZIndex","autoZIndex",V],ariaCloseLabel:"ariaCloseLabel",baseZIndex:[2,"baseZIndex","baseZIndex",ke],focusOnShow:[2,"focusOnShow","focusOnShow",V],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onShow:"onShow",onHide:"onHide"},features:[I([dt]),O],ngContentSelectors:ht,decls:1,vars:1,consts:[["role","dialog",3,"class","ngStyle","click",4,"ngIf"],["role","dialog",3,"click","ngStyle"],[3,"click","mousedown"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,n){t&1&&(ye(),k(0,xt,4,19,"div",0)),t&2&&c("ngIf",n.render)},dependencies:[M,Te,Le,Me,C],encapsulation:2,data:{animation:[Pe("animation",[z("void",B({transform:"scaleY(0.8)",opacity:0})),z("close",B({opacity:0})),z("open",B({transform:"translateY(0)",opacity:1})),se("void => open",re("{{showTransitionParams}}")),se("open => close",re("{{hideTransitionParams}}"))])]},changeDetection:0})}return i})(),ct=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=D({imports:[kt,C,C]})}return i})();var mt=`
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
`;var Tt={root:()=>["p-progressspinner"],spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},ut=(()=>{class i extends A{name="progressspinner";theme=mt;classes=Tt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=w(i)))(n||i)}})();static \u0275prov=L({token:i,factory:i.\u0275fac})}return i})();var ce=(()=>{class i extends H{styleClass;strokeWidth="2";fill="none";animationDuration="2s";ariaLabel;_componentStyle=d(ut);static \u0275fac=(()=>{let e;return function(n){return(e||(e=w(i)))(n||i)}})();static \u0275cmp=_({type:i,selectors:[["p-progressSpinner"],["p-progress-spinner"],["p-progressspinner"]],hostVars:7,hostBindings:function(t,n){t&2&&(T("aria-label",n.ariaLabel)("role","progressbar")("data-pc-name","progressspinner")("data-pc-section","root")("aria-busy",!0),x(n.cn(n.cx("root"),n.styleClass)))},inputs:{styleClass:"styleClass",strokeWidth:"strokeWidth",fill:"fill",animationDuration:"animationDuration",ariaLabel:"ariaLabel"},features:[I([ut]),O],decls:2,vars:9,consts:[["viewBox","25 25 50 50"],["cx","50","cy","50","r","20","stroke-miterlimit","10"]],template:function(t,n){t&1&&(fe(),r(0,"svg",0),u(1,"circle",1),l()),t&2&&(x(n.cx("spin")),_e("animation-duration",n.animationDuration),T("data-pc-section","root"),s(),x(n.cx("circle")),T("fill",n.fill)("stroke-width",n.strokeWidth))},dependencies:[M,C],encapsulation:2,changeDetection:0})}return i})(),ft=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=D({imports:[ce,C,C]})}return i})();function It(i,o){if(i&1&&(r(0,"p-message",8),a(1),l()),i&2){let e=m();s(),ne(" ",e.dialogError()," ")}}function Vt(i,o){i&1&&(r(0,"div",9),u(1,"p-progressSpinner",13),r(2,"span"),a(3,"Resetting everything..."),l()())}var X=class i{dexieRepository=d(Ae);router=d(F);messageService=d(N);confirmationPhrase="reset-entirely";dialogVisible=b(!1);confirmationValue=b("");isConfirming=b(!1);dialogError=b(null);canConfirm=we(()=>this.confirmationValue().trim()===this.confirmationPhrase);openDialog(){this.dialogVisible.set(!0),this.confirmationValue.set(""),this.dialogError.set(null)}handleInput(o){this.confirmationValue.set(o)}cancel(){this.isConfirming()||(this.dialogVisible.set(!1),this.confirmationValue.set(""),this.dialogError.set(null))}confirmReset(){return ue(this,null,function*(){if(!(!this.canConfirm()||this.isConfirming())){this.isConfirming.set(!0),this.dialogError.set(null);try{yield this.dexieRepository.resetAllData(),sessionStorage.clear(),this.messageService.add({severity:"success",summary:"Reset complete",detail:"All local data has been removed. Redirecting to signup."}),this.dialogVisible.set(!1),this.router.navigateByUrl("/signup")}catch(o){let e=o instanceof Error?o.message:"Failed to reset application data.";this.dialogError.set(e),this.messageService.add({severity:"error",summary:"Reset failed",detail:e})}finally{this.isConfirming.set(!1),this.confirmationValue.set("")}}})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=_({type:i,selectors:[["app-reset-entirely"]],hostAttrs:[1,"reset-entirely"],decls:20,vars:14,consts:[["pButton","","type","button","severity","danger",1,"reset-entirely__trigger",3,"click"],["pButtonLabel",""],["position","top-center"],["header","Reset Everything",2,"width","min(90vw, 480px)",3,"visible","modal","closable","dismissableMask","closeOnEscape","draggable","resizable"],[1,"reset-entirely__dialog"],[1,"reset-entirely__copy"],["for","reset-confirmation",1,"reset-entirely__label"],["pInputText","","id","reset-confirmation","type","text","autocomplete","off","spellcheck","false","placeholder","reset-entirely",3,"input","value","disabled"],["data-testid","reset-error","severity","error","variant","simple","size","small","aria-live","assertive"],["aria-live","polite",1,"reset-entirely__loader"],[1,"reset-entirely__actions"],["pButton","","type","button","severity","secondary",3,"click","disabled"],["pButton","","type","button","severity","danger","data-testid","reset-confirm",3,"click","disabled"],["styleClass","reset-entirely__spinner"]],template:function(e,t){e&1&&(r(0,"button",0),f("click",function(){return t.openDialog()}),r(1,"span",1),a(2,"Reset Entirely"),l()(),u(3,"p-toast",2),r(4,"p-dialog",3)(5,"div",4)(6,"p",5),a(7," This action will reset all the data stored or used by this application entirely. You might not revert them back. "),l(),r(8,"label",6),a(9),l(),r(10,"input",7),f("input",function(p){return t.handleInput(p.target.value)}),l(),g(11,It,2,1,"p-message",8),g(12,Vt,4,0,"div",9),r(13,"div",10)(14,"button",11),f("click",function(){return t.cancel()}),r(15,"span",1),a(16,"Cancel"),l()(),r(17,"button",12),f("click",function(){return t.confirmReset()}),r(18,"span",1),a(19,"Confirm Reset"),l()()()()()),e&2&&(s(4),c("visible",t.dialogVisible())("modal",!0)("closable",!1)("dismissableMask",!1)("closeOnEscape",!1)("draggable",!1)("resizable",!1),s(5),ne(' Type "',t.confirmationPhrase,'" to confirm your action. '),s(),c("value",t.confirmationValue())("disabled",t.isConfirming()),s(),h(t.dialogError()?11:-1),s(),h(t.isConfirming()?12:-1),s(2),c("disabled",t.isConfirming()),s(3),c("disabled",!t.canConfirm()||t.isConfirming()))},dependencies:[M,q,Z,j,pt,lt,Q,W,G,Y,ft,ce,$,K],styles:[".reset-entirely[_nghost-%COMP%]{display:inline-flex;flex-direction:column;gap:.75rem;width:100%}.reset-entirely__trigger[_ngcontent-%COMP%]{width:100%}.reset-entirely__dialog[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.reset-entirely__copy[_ngcontent-%COMP%]{font-size:.95rem;line-height:1.4}.reset-entirely__label[_ngcontent-%COMP%]{font-weight:600}.reset-entirely__actions[_ngcontent-%COMP%]{margin-top:.5rem;display:flex;justify-content:flex-end;gap:.75rem}.reset-entirely__loader[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;font-size:.9rem}.reset-entirely__spinner[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem}.reset-entirely__status[_ngcontent-%COMP%]{align-self:flex-start}"],changeDetection:0})};function Rt(i,o){i&1&&a(0,"Login")}function Ft(i,o){i&1&&a(0," Username is required. ")}function Bt(i,o){i&1&&a(0," Spaces are not allowed. ")}function zt(i,o){i&1&&a(0," Only letters, numbers, _ allowed. ")}function Nt(i,o){i&1&&a(0," Minimum 4 characters. ")}function At(i,o){i&1&&a(0," Maximum 20 characters. ")}function Ht(i,o){if(i&1&&(r(0,"p-message",12),g(1,Ft,1,0)(2,Bt,1,0)(3,zt,1,0)(4,Nt,1,0)(5,At,1,0),l()),i&2){let e,t=m();s(),h(!((e=t.form.get("username"))==null||e.errors==null)&&e.errors.required?1:!((e=t.form.get("username"))==null||e.errors==null)&&e.errors.spaceNotAllowed?2:!((e=t.form.get("username"))==null||e.errors==null)&&e.errors.invalidChars?3:!((e=t.form.get("username"))==null||e.errors==null)&&e.errors.minlength?4:!((e=t.form.get("username"))==null||e.errors==null)&&e.errors.maxlength?5:-1)}}function jt(i,o){i&1&&a(0," Password is required. ")}function Zt(i,o){i&1&&a(0," Spaces are not allowed. ")}function qt(i,o){i&1&&a(0," Must include a number. ")}function Ut(i,o){i&1&&a(0," Minimum 6 characters. ")}function Wt(i,o){i&1&&a(0," Maximum 12 characters. ")}function Qt(i,o){if(i&1&&(r(0,"p-message",12),g(1,jt,1,0),g(2,Zt,1,0)(3,qt,1,0)(4,Ut,1,0)(5,Wt,1,0),l()),i&2){let e,t,n=m();s(),h(!((e=n.form.get("password"))==null||e.errors==null)&&e.errors.required?1:-1),s(),h(!((t=n.form.get("password"))==null||t.errors==null)&&t.errors.spaceNotAllowed?2:!((t=n.form.get("password"))==null||t.errors==null)&&t.errors.numberRequired?3:!((t=n.form.get("password"))==null||t.errors==null)&&t.errors.minlength?4:!((t=n.form.get("password"))==null||t.errors==null)&&t.errors.maxlength?5:-1)}}var me=class i{fb=d(nt);userService=d(He);router=d(F);messageService=d(N);destroyRef=d(ge);form=this.fb.group({username:["",[le.required,pe.username()]],password:["",[le.required,pe.password()]]});formSubmitted=b(!1);isSubmitting=b(!1);handleLoginFormSubmit(){if(this.formSubmitted.set(!0),this.form.invalid){this.form.markAllAsTouched();return}let{username:o,password:e}=this.form.getRawValue();!o||!e||(this.isSubmitting.set(!0),this.userService.loginUser(o,e).pipe(Ue(this.destroyRef)).subscribe({next:()=>{this.isSubmitting.set(!1),this.messageService.add({severity:"success",summary:"Login successful",detail:"Redirecting you now."}),this.router.navigateByUrl("/")},error:t=>{this.isSubmitting.set(!1),this.messageService.add({severity:"error",summary:"Login failed",detail:t?.message??"Please verify your credentials and try again."})}}))}isInvalid(o){let e=this.form.get(o);return e?.invalid&&(e.touched||this.formSubmitted())}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=_({type:i,selectors:[["app-login"]],decls:29,vars:9,consts:[["title",""],[1,"h-screen","w-full","flex","flex-col","lg:flex-row","justify-center","lg:justify-around","items-center","p-4","gap-8","lg:gap-4","bg-surface-50","dark:bg-surface-950"],[1,"fixed","top-4","right-4","lg:right-16"],["position","top-right"],[1,"lg:max-w-sm","xl:max-w-md","lg:w-full","relative"],["ngSrc","Lead Lite Large Square.svg","alt","Lead Lite","height","120","width","120","priority","",1,"aspect-square","w-full","z-0"],[1,"absolute","top-1/2","left-1/2","translate-1/2","-z-10","invisible"],[1,"w-full","max-w-lg","px-2","py-4","text-center"],["pFocusTrap","",1,"flex","flex-col","gap-6","w-full","max-w-sm","mx-auto","mt-10",3,"ngSubmit","formGroup"],["variant","in"],["pInputText","","id","username","name","username","type","text","formControlName","username","autocomplete","off","fluid","","pSize","small",3,"pAutoFocus","invalid"],["for","username"],["severity","error","size","small","variant","simple",1,"-mt-5"],["pInputText","","id","password","name","password","type","password","formControlName","password","autocomplete","off","fluid","","pSize","small",3,"invalid"],["for","password"],["pButton","","type","submit",1,"login-submit-button",3,"disabled","loading"],["pButtonLabel",""],["align","center",1,"login-reset-divider"],[1,"login-reset-divider__label"],[1,"login-reset-action"]],template:function(e,t){if(e&1){let n=E();r(0,"section",1),u(1,"app-theme-toggle",2)(2,"p-toast",3),r(3,"figure",4),u(4,"img",5),r(5,"figcaption",6),a(6," Lead Lite - Only What You Need "),l()(),r(7,"p-card",7),k(8,Rt,1,0,"ng-template",null,0,Se),r(10,"form",8),f("ngSubmit",function(){return v(n),y(t.handleLoginFormSubmit())}),r(11,"p-floatLabel",9),u(12,"input",10),r(13,"label",11),a(14,"Username"),l()(),g(15,Ht,6,1,"p-message",12),r(16,"p-floatLabel",9),u(17,"input",13),r(18,"label",14),a(19,"Password"),l()(),g(20,Qt,6,2,"p-message",12),r(21,"button",15)(22,"span",16),a(23),l()()(),r(24,"p-divider",17)(25,"span",18),a(26,"Danger zone"),l()(),r(27,"div",19),u(28,"app-reset-entirely"),l()()()}e&2&&(s(10),c("formGroup",t.form),s(2),c("pAutoFocus",!0)("invalid",t.isInvalid("username")),s(3),h(t.isInvalid("username")?15:-1),s(2),c("invalid",t.isInvalid("password")),s(3),h(t.isInvalid("password")?20:-1),s(),c("disabled",t.isSubmitting())("loading",t.isSubmitting()),s(2),Ce(t.isSubmitting()?"Signing in...":"Submit"))},dependencies:[Qe,We,ot,et,$e,Xe,Je,tt,it,Q,W,rt,q,Z,j,G,Y,qe,Ze,at,st,ct,Ge,Ye,Ke,X,$,K,De],styles:["[_nghost-%COMP%]   .login-submit-button[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .login-reset-divider[_ngcontent-%COMP%]{width:min(320px,100%);margin:2rem auto 1.25rem}[_nghost-%COMP%]   .login-reset-divider__label[_ngcontent-%COMP%]{font-size:.75rem;font-weight:600;text-transform:uppercase;letter-spacing:.05em;color:color-mix(in srgb,var(--p-red-500) 85%,black)}[_nghost-%COMP%]   .login-reset-action[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%;max-width:24rem;margin:0 auto}[_nghost-%COMP%]   .login-reset-action[_ngcontent-%COMP%]   app-reset-entirely[_ngcontent-%COMP%]{display:inline-flex;width:100%}"],changeDetection:0})};export{me as default};
