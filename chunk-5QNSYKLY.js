import{d as ce}from"./chunk-ZL67F5YZ.js";import{A as v,Aa as se,B as b,Ba as ae,C as P,Da as le,Ga as g,L as G,T as J,W as ee,_ as te,d as q,da as D,e as K,f as $,ha as ie,i as U,ia as oe,j as m,sa as ne,wa as re,x as X,xa as y,y as I}from"./chunk-DBNTJJ5Q.js";import{Bc as f,Cc as W,Db as M,Hb as u,Ib as r,Jb as j,Kb as N,Lb as T,Ma as z,Na as _,Nb as S,Ob as x,S as V,T as H,Wb as L,X as p,Za as E,_a as A,aa as l,ba as c,bb as F,bc as Q,db as d,dc as Y,ec as O,fb as w,gb as R,ma as C,nb as Z,tb as h,ub as k,vb as B}from"./chunk-QDV7XRN5.js";var de=["content"],he=["*"],ue=(i,s)=>({showTransitionParams:i,hideTransitionParams:s}),fe=(i,s)=>({value:i,params:s}),me=i=>({closeCallback:i});function ve(i,s){}function be(i,s){i&1&&d(0,ve,0,0,"ng-template")}function ye(i,s){if(i&1){let e=M();k(0,"div",1),u("click",function(o){l(e);let n=r();return c(n.onOverlayClick(o))})("@animation.start",function(o){l(e);let n=r();return c(n.onAnimationStart(o))})("@animation.done",function(o){l(e);let n=r();return c(n.onAnimationEnd(o))}),k(1,"div",2),u("click",function(o){l(e);let n=r();return c(n.onContentClick(o))})("mousedown",function(o){l(e);let n=r();return c(n.onContentClick(o))}),N(2),d(3,be,1,0,null,3),B()()}if(i&2){let e=r();L(e.cn(e.cx("root"),e.styleClass)),h("ngStyle",e.style)("@animation",O(14,fe,e.overlayVisible?"open":"close",O(11,ue,e.showTransitionOptions,e.hideTransitionOptions))),Z("aria-modal",e.overlayVisible)("aria-label",e.ariaLabel)("aria-labelledBy",e.ariaLabelledBy),_(),L(e.cx("content")),_(2),h("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",Y(17,me,e.onCloseClick.bind(e)))}}var ge=`
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

`,Ce={root:"p-popover p-component",content:"p-popover-content"},pe=(()=>{class i extends ae{name="popover";theme=ge;classes=Ce;static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(i)))(o||i)}})();static \u0275prov=V({token:i,factory:i.\u0275fac})}return i})(),_e=(()=>{class i extends le{ariaLabel;ariaLabelledBy;dismissable=!0;style;styleClass;appendTo="body";autoZIndex=!0;ariaCloseLabel;baseZIndex=0;focusOnShow=!0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";onShow=new w;onHide=new w;container;overlayVisible=!1;render=!1;isOverlayAnimationInProgress=!1;selfClick=!1;documentClickListener;target;willHide;scrollHandler;documentResizeListener;contentTemplate;templates;_contentTemplate;destroyCallback;overlayEventListener;overlaySubscription;_componentStyle=p(pe);zone=p(R);overlayService=p(ne);ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break}})}bindDocumentClickListener(){if(m(this.platformId)&&!this.documentClickListener){let e=ie()?"touchstart":"click",t=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentClickListener=this.renderer.listen(t,e,o=>{this.dismissable&&(!this.container?.contains(o.target)&&this.target!==o.target&&!this.target.contains(o.target)&&!this.selfClick&&this.hide(),this.selfClick=!1,this.cd.markForCheck())})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null,this.selfClick=!1)}toggle(e,t){this.isOverlayAnimationInProgress||(this.overlayVisible?(this.hasTargetChanged(e,t)&&(this.destroyCallback=()=>{this.show(null,t||e.currentTarget||e.target)}),this.hide()):this.show(e,t))}show(e,t){t&&e&&e.stopPropagation(),!this.isOverlayAnimationInProgress&&(this.target=t||e.currentTarget||e.target,this.overlayVisible=!0,this.render=!0,this.cd.markForCheck())}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.selfClick=!0}onContentClick(e){let t=e.target;this.selfClick=e.offsetX<t.clientWidth&&e.offsetY<t.clientHeight}hasTargetChanged(e,t){return this.target!=null&&this.target!==(t||e.currentTarget||e.target)}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):ee(this.appendTo,this.container))}restoreAppend(){this.container&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.container)}align(){this.autoZIndex&&g.set("overlay",this.container,this.baseZIndex+this.config.zIndex.overlay),J(this.container,this.target,!1);let e=D(this.container),t=D(this.target),o=this.document.defaultView?.getComputedStyle(this.container).getPropertyValue("border-radius"),n=0;e.left<t.left&&(n=t.left-e.left-parseFloat(o)*2),this.container?.style.setProperty(se("popover.arrow.left").name,`${n}px`),e.top<t.top&&(this.container?.setAttribute("data-p-popover-flipped","true"),G(this.container,"p-popover-flipped"))}onAnimationStart(e){e.toState==="open"&&(this.container=e.element,this.container?.setAttribute(this.attrSelector,""),this.appendContainer(),this.align(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),this.focusOnShow&&this.focus(),this.overlayEventListener=t=>{this.container&&this.container.contains(t.target)&&(this.selfClick=!0)},this.overlaySubscription=this.overlayService.clickObservable.subscribe(this.overlayEventListener),this.onShow.emit(null)),this.isOverlayAnimationInProgress=!0}onAnimationEnd(e){switch(e.toState){case"void":this.destroyCallback&&(this.destroyCallback(),this.destroyCallback=null),this.overlaySubscription&&this.overlaySubscription.unsubscribe();break;case"close":this.autoZIndex&&g.clear(this.container),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),this.onContainerDestroy(),this.onHide.emit({}),this.render=!1;break}this.isOverlayAnimationInProgress=!1}focus(){let e=te(this.container,"[autofocus]");e&&this.zone.runOutsideAngular(()=>{setTimeout(()=>e.focus(),5)})}hide(){this.overlayVisible=!1,this.cd.markForCheck()}onCloseClick(e){this.hide(),e.preventDefault()}onEscapeKeydown(e){this.hide()}onWindowResize(){this.overlayVisible&&!oe()&&this.hide()}bindDocumentResizeListener(){if(m(this.platformId)&&!this.documentResizeListener){let e=this.document.defaultView;this.documentResizeListener=this.renderer.listen(e,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){m(this.platformId)&&(this.scrollHandler||(this.scrollHandler=new ce(this.target,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener())}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}onContainerDestroy(){this.cd.destroyed||(this.target=null),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&g.clear(this.container),this.cd.destroyed||(this.target=null),this.destroyCallback=null,this.container&&(this.restoreAppend(),this.onContainerDestroy()),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(i)))(o||i)}})();static \u0275cmp=E({type:i,selectors:[["p-popover"]],contentQueries:function(t,o,n){if(t&1&&(T(n,de,4),T(n,re,4)),t&2){let a;S(a=x())&&(o.contentTemplate=a.first),S(a=x())&&(o.templates=a)}},hostBindings:function(t,o){t&1&&u("keydown.escape",function(a){return o.onEscapeKeydown(a)},z)},inputs:{ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",dismissable:[2,"dismissable","dismissable",f],style:"style",styleClass:"styleClass",appendTo:"appendTo",autoZIndex:[2,"autoZIndex","autoZIndex",f],ariaCloseLabel:"ariaCloseLabel",baseZIndex:[2,"baseZIndex","baseZIndex",W],focusOnShow:[2,"focusOnShow","focusOnShow",f],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onShow:"onShow",onHide:"onHide"},features:[Q([pe]),F],ngContentSelectors:he,decls:1,vars:1,consts:[["role","dialog",3,"class","ngStyle","click",4,"ngIf"],["role","dialog",3,"click","ngStyle"],[3,"click","mousedown"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,o){t&1&&(j(),d(0,ye,4,19,"div",0)),t&2&&h("ngIf",o.render)},dependencies:[U,q,$,K,y],encapsulation:2,data:{animation:[X("animation",[b("void",v({transform:"scaleY(0.8)",opacity:0})),b("close",v({opacity:0})),b("open",v({transform:"translateY(0)",opacity:1})),P("void => open",I("{{showTransitionParams}}")),P("open => close",I("{{hideTransitionParams}}"))])]},changeDetection:0})}return i})(),Qe=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=A({type:i});static \u0275inj=H({imports:[_e,y,y]})}return i})();export{_e as a,Qe as b};
