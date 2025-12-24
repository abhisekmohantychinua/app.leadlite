import{b as Me}from"./chunk-5QNSYKLY.js";import{a as ce,b as ge}from"./chunk-4TW7DZPH.js";import{a as we,b as De,c as ke,d as Ee,e as Te,f as V}from"./chunk-BEVADV2V.js";import{a as oe,b as M}from"./chunk-HHWAHJZO.js";import{b as ye,c as F,e as _e,f as he,i as ve,k as be,l as Ce,m as xe,o as Se,q as E,r as T,s as L,t as P}from"./chunk-TV2VNHIC.js";import{c as fe}from"./chunk-37VKWKSC.js";import{b as ae}from"./chunk-MK2PK45H.js";import{a as de,b as ue}from"./chunk-M3EKECSN.js";import"./chunk-LCPDGZUE.js";import{e as le,f as me,k as w,m as D,o as k,p as pe}from"./chunk-ZL67F5YZ.js";import{Ba as ne,Da as re,Ia as se,i as b,k as ie,q as C,ra as x,xa as S}from"./chunk-DBNTJJ5Q.js";import{Db as Q,Hb as f,Ib as _,Na as a,S as A,T as U,Tb as X,Wb as v,X as m,Xb as s,Yb as Z,Za as y,Zb as I,_a as H,aa as q,ba as G,bb as J,bc as $,ca as W,db as K,f as j,fa as Y,ja as g,kc as ee,ma as O,nb as h,ob as u,pb as c,qc as te,tb as d,ub as n,vb as l,wb as p}from"./chunk-QDV7XRN5.js";var Le=`
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
`;var Ie={root:()=>["p-progressspinner"],spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},Pe=(()=>{class e extends ne{name="progressspinner";theme=Le;classes=Ie;static \u0275fac=(()=>{let i;return function(o){return(i||(i=O(e)))(o||e)}})();static \u0275prov=A({token:e,factory:e.\u0275fac})}return e})();var N=(()=>{class e extends re{styleClass;strokeWidth="2";fill="none";animationDuration="2s";ariaLabel;_componentStyle=m(Pe);static \u0275fac=(()=>{let i;return function(o){return(i||(i=O(e)))(o||e)}})();static \u0275cmp=y({type:e,selectors:[["p-progressSpinner"],["p-progress-spinner"],["p-progressspinner"]],hostVars:7,hostBindings:function(t,o){t&2&&(h("aria-label",o.ariaLabel)("role","progressbar")("data-pc-name","progressspinner")("data-pc-section","root")("aria-busy",!0),v(o.cn(o.cx("root"),o.styleClass)))},inputs:{styleClass:"styleClass",strokeWidth:"strokeWidth",fill:"fill",animationDuration:"animationDuration",ariaLabel:"ariaLabel"},features:[$([Pe]),J],decls:2,vars:9,consts:[["viewBox","25 25 50 50"],["cx","50","cy","50","r","20","stroke-miterlimit","10"]],template:function(t,o){t&1&&(W(),n(0,"svg",0),p(1,"circle",1),l()),t&2&&(v(o.cx("spin")),X("animation-duration",o.animationDuration),h("data-pc-section","root"),a(),v(o.cx("circle")),h("fill",o.fill)("stroke-width",o.strokeWidth))},dependencies:[b,S],encapsulation:2,changeDetection:0})}return e})(),Oe=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=H({type:e});static \u0275inj=U({imports:[N,S,S]})}return e})();function je(e,r){if(e&1&&(n(0,"p-message",8),s(1),l()),e&2){let i=_();a(),I(" ",i.dialogError()," ")}}function Ae(e,r){e&1&&(n(0,"div",9),p(1,"p-progressSpinner",13),n(2,"span"),s(3,"Resetting everything..."),l()())}var R=class e{dexieRepository=m(se);router=m(C);messageService=m(x);confirmationPhrase="reset-entirely";dialogVisible=g(!1);confirmationValue=g("");isConfirming=g(!1);dialogError=g(null);canConfirm=te(()=>this.confirmationValue().trim()===this.confirmationPhrase);openDialog(){this.dialogVisible.set(!0),this.confirmationValue.set(""),this.dialogError.set(null)}handleInput(r){this.confirmationValue.set(r)}cancel(){this.isConfirming()||(this.dialogVisible.set(!1),this.confirmationValue.set(""),this.dialogError.set(null))}confirmReset(){return j(this,null,function*(){if(!(!this.canConfirm()||this.isConfirming())){this.isConfirming.set(!0),this.dialogError.set(null);try{yield this.dexieRepository.resetAllData(),sessionStorage.clear(),this.messageService.add({severity:"success",summary:"Reset complete",detail:"All local data has been removed. Redirecting to signup."}),this.dialogVisible.set(!1),this.router.navigateByUrl("/signup")}catch(r){let i=r instanceof Error?r.message:"Failed to reset application data.";this.dialogError.set(i),this.messageService.add({severity:"error",summary:"Reset failed",detail:i})}finally{this.isConfirming.set(!1),this.confirmationValue.set("")}}})}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=y({type:e,selectors:[["app-reset-entirely"]],hostAttrs:[1,"reset-entirely"],decls:20,vars:14,consts:[["pButton","","type","button","severity","danger",1,"reset-entirely__trigger",3,"click"],["pButtonLabel",""],["position","top-center"],["header","Reset Everything",2,"width","min(90vw, 480px)",3,"visible","modal","closable","dismissableMask","closeOnEscape","draggable","resizable"],[1,"reset-entirely__dialog"],[1,"reset-entirely__copy"],["for","reset-confirmation",1,"reset-entirely__label"],["pInputText","","id","reset-confirmation","type","text","autocomplete","off","spellcheck","false","placeholder","reset-entirely",3,"input","value","disabled"],["data-testid","reset-error","severity","error","variant","simple","size","small","aria-live","assertive"],["aria-live","polite",1,"reset-entirely__loader"],[1,"reset-entirely__actions"],["pButton","","type","button","severity","secondary",3,"click","disabled"],["pButton","","type","button","severity","danger","data-testid","reset-confirm",3,"click","disabled"],["styleClass","reset-entirely__spinner"]],template:function(i,t){i&1&&(n(0,"button",0),f("click",function(){return t.openDialog()}),n(1,"span",1),s(2,"Reset Entirely"),l()(),p(3,"p-toast",2),n(4,"p-dialog",3)(5,"div",4)(6,"p",5),s(7," This action will reset all the data stored or used by this application entirely. You might not revert them back. "),l(),n(8,"label",6),s(9),l(),n(10,"input",7),f("input",function(z){return t.handleInput(z.target.value)}),l(),u(11,je,2,1,"p-message",8),u(12,Ae,4,0,"div",9),n(13,"div",10)(14,"button",11),f("click",function(){return t.cancel()}),n(15,"span",1),s(16,"Cancel"),l()(),n(17,"button",12),f("click",function(){return t.confirmReset()}),n(18,"span",1),s(19,"Confirm Reset"),l()()()()()),i&2&&(a(4),d("visible",t.dialogVisible())("modal",!0)("closable",!1)("dismissableMask",!1)("closeOnEscape",!1)("draggable",!1)("resizable",!1),a(5),I(' Type "',t.confirmationPhrase,'" to confirm your action. '),a(),d("value",t.confirmationValue())("disabled",t.isConfirming()),a(),c(t.dialogError()?11:-1),a(),c(t.isConfirming()?12:-1),a(2),d("disabled",t.isConfirming()),a(3),d("disabled",!t.canConfirm()||t.isConfirming()))},dependencies:[b,k,D,w,Te,Ee,T,E,P,L,Oe,N,M,oe],styles:[".reset-entirely[_nghost-%COMP%]{display:inline-flex;flex-direction:column;gap:.75rem;width:100%}.reset-entirely__trigger[_ngcontent-%COMP%]{width:100%}.reset-entirely__dialog[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.reset-entirely__copy[_ngcontent-%COMP%]{font-size:.95rem;line-height:1.4}.reset-entirely__label[_ngcontent-%COMP%]{font-weight:600}.reset-entirely__actions[_ngcontent-%COMP%]{margin-top:.5rem;display:flex;justify-content:flex-end;gap:.75rem}.reset-entirely__loader[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;font-size:.9rem}.reset-entirely__spinner[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem}.reset-entirely__status[_ngcontent-%COMP%]{align-self:flex-start}"],changeDetection:0})};function Ue(e,r){e&1&&s(0,"Login")}function qe(e,r){e&1&&s(0," Username is required. ")}function Ge(e,r){e&1&&s(0," Spaces are not allowed. ")}function We(e,r){e&1&&s(0," Only letters, numbers, _ allowed. ")}function Ye(e,r){e&1&&s(0," Minimum 4 characters. ")}function He(e,r){e&1&&s(0," Maximum 20 characters. ")}function Je(e,r){if(e&1&&(n(0,"p-message",11),u(1,qe,1,0)(2,Ge,1,0)(3,We,1,0)(4,Ye,1,0)(5,He,1,0),l()),e&2){let i,t=_();a(),c(!((i=t.form.get("username"))==null||i.errors==null)&&i.errors.required?1:!((i=t.form.get("username"))==null||i.errors==null)&&i.errors.spaceNotAllowed?2:!((i=t.form.get("username"))==null||i.errors==null)&&i.errors.invalidChars?3:!((i=t.form.get("username"))==null||i.errors==null)&&i.errors.minlength?4:!((i=t.form.get("username"))==null||i.errors==null)&&i.errors.maxlength?5:-1)}}function Ke(e,r){e&1&&s(0," Password is required. ")}function Qe(e,r){e&1&&s(0," Spaces are not allowed. ")}function Xe(e,r){e&1&&s(0," Must include a number. ")}function Ze(e,r){e&1&&s(0," Minimum 6 characters. ")}function $e(e,r){e&1&&s(0," Maximum 12 characters. ")}function et(e,r){if(e&1&&(n(0,"p-message",11),u(1,Ke,1,0),u(2,Qe,1,0)(3,Xe,1,0)(4,Ze,1,0)(5,$e,1,0),l()),e&2){let i,t,o=_();a(),c(!((i=o.form.get("password"))==null||i.errors==null)&&i.errors.required?1:-1),a(),c(!((t=o.form.get("password"))==null||t.errors==null)&&t.errors.spaceNotAllowed?2:!((t=o.form.get("password"))==null||t.errors==null)&&t.errors.numberRequired?3:!((t=o.form.get("password"))==null||t.errors==null)&&t.errors.minlength?4:!((t=o.form.get("password"))==null||t.errors==null)&&t.errors.maxlength?5:-1)}}var B=class e{fb=m(xe);userService=m(ae);router=m(C);messageService=m(x);destroyRef=m(Y);loginUserSubscription;form=this.fb.group({username:["",[F.required,V.username()]],password:["",[F.required,V.password()]]});formSubmitted=g(!1);isSubmitting=g(!1);handleLoginFormSubmit(){if(this.formSubmitted.set(!0),this.form.invalid){this.form.markAllAsTouched();return}let{username:r,password:i}=this.form.getRawValue();!r||!i||(this.isSubmitting.set(!0),this.loginUserSubscription=this.userService.loginUser(r,i).pipe(pe(this.destroyRef)).subscribe({next:()=>{this.isSubmitting.set(!1),this.messageService.add({key:"app-toast",severity:"success",summary:"Login successful",detail:"Redirecting you now."}),this.router.navigateByUrl("/")},error:t=>{this.isSubmitting.set(!1),this.messageService.add({key:"app-toast",severity:"error",summary:"Login failed",detail:t?.message??"Please verify your credentials and try again."})}}))}isInvalid(r){let i=this.form.get(r);return i?.invalid&&(i.touched||this.formSubmitted())}ngOnDestroy(){this.loginUserSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=y({type:e,selectors:[["app-login"]],decls:28,vars:9,consts:[["title",""],[1,"h-screen","w-full","flex","flex-col","lg:flex-row","justify-center","lg:justify-around","items-center","p-4","gap-8","lg:gap-4","bg-surface-50","dark:bg-surface-950"],[1,"fixed","top-4","right-4","lg:right-16"],[1,"lg:max-w-sm","xl:max-w-md","lg:w-full","relative"],["ngSrc","Lead Lite Large Square.svg","alt","Lead Lite","height","120","width","120","priority","",1,"aspect-square","w-full","z-0"],[1,"absolute","top-1/2","left-1/2","translate-1/2","-z-10","invisible"],[1,"w-full","max-w-lg","px-2","py-4","text-center"],["pFocusTrap","",1,"flex","flex-col","gap-6","w-full","max-w-sm","mx-auto","mt-10",3,"ngSubmit","formGroup"],["variant","in"],["pInputText","","id","username","name","username","type","text","formControlName","username","autocomplete","off","fluid","","pSize","small",3,"pAutoFocus","invalid"],["for","username"],["severity","error","size","small","variant","simple",1,"-mt-5"],["pInputText","","id","password","name","password","type","password","formControlName","password","autocomplete","off","fluid","","pSize","small",3,"invalid"],["for","password"],["pButton","","type","submit",1,"login-submit-button",3,"disabled","loading"],["pButtonLabel",""],["align","center",1,"login-reset-divider"],[1,"login-reset-divider__label"],[1,"login-reset-action"]],template:function(i,t){if(i&1){let o=Q();n(0,"section",1),p(1,"app-theme-toggle",2),n(2,"figure",3),p(3,"img",4),n(4,"figcaption",5),s(5," Lead Lite - Only What You Need "),l()(),n(6,"p-card",6),K(7,Ue,1,0,"ng-template",null,0,ee),n(9,"form",7),f("ngSubmit",function(){return q(o),G(t.handleLoginFormSubmit())}),n(10,"p-floatLabel",8),p(11,"input",9),n(12,"label",10),s(13,"Username"),l()(),u(14,Je,6,1,"p-message",11),n(15,"p-floatLabel",8),p(16,"input",12),n(17,"label",13),s(18,"Password"),l()(),u(19,et,6,2,"p-message",11),n(20,"button",14)(21,"span",15),s(22),l()()(),n(23,"p-divider",16)(24,"span",17),s(25,"Danger zone"),l()(),n(26,"div",18),p(27,"app-reset-entirely"),l()()()}i&2&&(a(9),d("formGroup",t.form),a(2),d("pAutoFocus",!0)("invalid",t.isInvalid("username")),a(3),c(t.isInvalid("username")?14:-1),a(2),d("invalid",t.isInvalid("password")),a(3),c(t.isInvalid("password")?19:-1),a(),d("disabled",t.isSubmitting())("loading",t.isSubmitting()),a(2),Z(t.isSubmitting()?"Signing in...":"Submit"))},dependencies:[ue,de,Se,ve,ye,_e,he,be,Ce,T,E,we,k,D,w,P,L,me,le,ke,De,Me,ge,ce,fe,R,M,ie],styles:["[_nghost-%COMP%]   .login-submit-button[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .login-reset-divider[_ngcontent-%COMP%]{width:min(320px,100%);margin:2rem auto 1.25rem}[_nghost-%COMP%]   .login-reset-divider__label[_ngcontent-%COMP%]{font-size:.75rem;font-weight:600;text-transform:uppercase;letter-spacing:.05em;color:color-mix(in srgb,var(--p-red-500) 85%,black)}[_nghost-%COMP%]   .login-reset-action[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%;max-width:24rem;margin:0 auto}[_nghost-%COMP%]   .login-reset-action[_ngcontent-%COMP%]   app-reset-entirely[_ngcontent-%COMP%]{display:inline-flex;width:100%}"],changeDetection:0})};export{B as default};
