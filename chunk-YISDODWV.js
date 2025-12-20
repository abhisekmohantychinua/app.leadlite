import{a as Gt,b as Kt}from"./chunk-OEQWKYT5.js";import{a as le,b as Me,c as be,d as Ft,e as ue,f as Ot,g as Ne,h as Rt,i as zt,j as Pt,k as jt,l as ke,m as Ut,n as $t,o as de,p as Be,q as qt}from"./chunk-7N2BHEZO.js";import{e as Le,i as Dt,j as St,k as Tt,l as Lt,m as Mt,n as Nt,o as kt,q as Bt,r as Et,s as Vt,t as At}from"./chunk-GV2MA5HC.js";import{Aa as K,Ca as Se,Da as Te,Ea as wt,Ga as It,Ha as ne,b as ht,d as bt,e as _t,ea as Ct,f as ae,g as yt,h as xt,i as G,na as De,oa as he,q as vt,va as se,wa as V}from"./chunk-RA4NEXBO.js";import{$a as _e,$b as He,Ab as oe,Bb as re,Cb as fe,Db as j,Hb as S,Ib as u,Jb as Ce,Kb as we,Lb as O,M as rt,Mb as ct,Na as l,Nb as A,Ob as F,R as ie,Rb as pt,S as N,T as W,Ta as lt,Vb as T,Wb as L,X as _,Xb as mt,Yb as ee,Za as D,Zb as Ke,_a as Z,_b as Qe,a as it,aa as g,ac as q,b as ot,ba as h,bb as k,ca as $,cb as ut,cc as ge,da as at,db as C,dc as ft,f as qe,fb as R,fc as We,hc as Ze,ic as gt,ja as X,la as st,ma as I,nb as x,ob as z,oc as Y,pb as P,qb as dt,rb as ye,rc as Ie,sb as xe,sc as w,tb as d,ub as p,vb as m,wb as y,yc as v,z as Ge,zb as ve,zc as te}from"./chunk-54YYSUBJ.js";var Ee=class i{id;lead;name;email;phone;company;createdAt;lastModifiedAt;constructor(o){this.id=o.id,this.name=o.name,this.email=o.email,this.phone=o.phone,this.company=o.company,this.createdAt=o.createdAt,this.lastModifiedAt=o.lastModifiedAt,"lead"in o?this.lead=o.lead:this.lead=null}getId(){return this.id}getLead(){return this.lead}setLead(o){this.lead=o}getName(){return this.name}setName(o){this.name=o}getEmail(){return this.email}setEmail(o){this.email=o}getPhone(){return this.phone}setPhone(o){this.phone=o}getCompany(){return this.company}setCompany(o){this.company=o}getCreatedAt(){return this.createdAt}setCreatedAt(o){this.createdAt=o}getLastModifiedAt(){return this.lastModifiedAt}setLastModifiedAt(o){this.lastModifiedAt=o}static toContactFromDao(o,e){let t=e?{id:o.id,lead:e,name:o.name,email:o.email,phone:o.phone,company:o.company,createdAt:o.createdAt,lastModifiedAt:o.lastModifiedAt}:{id:o.id,name:o.name,email:o.email,phone:o.phone,company:o.company,createdAt:o.createdAt,lastModifiedAt:o.lastModifiedAt};return new i(t)}static toDaoFromContact(o,e){if(o.getLead()===null&&!e)throw new Error("Cannot convert Contact to ContactDao without associated Lead");let t=o.getLead(),n=t?t.getId():e;return{id:o.getId(),leadId:n,name:o.getName(),email:o.getEmail(),phone:o.getPhone(),company:o.getCompany(),createdAt:o.getCreatedAt(),lastModifiedAt:o.getLastModifiedAt()}}};var ce=class i{id;title;stage;value;tags;notes;tasks;contact;createdAt;lastModifiedAt;constructor(o,e,t=[],n=[]){this.id=o.id,this.title=o.title,this.stage=o.stage,this.value=o.value,this.tags=o.tags,this.createdAt=o.createdAt,this.lastModifiedAt=o.lastModifiedAt,this.contact=e,this.notes=t,this.tasks=n}getId(){return this.id}getTitle(){return this.title}getStage(){return this.stage}getValue(){return this.value}getTags(){return this.tags}getNotes(){return this.notes}getTasks(){return this.tasks}getContact(){return this.contact}getCreatedAt(){return this.createdAt}getLastModifiedAt(){return this.lastModifiedAt}setId(o){this.id=o}setTitle(o){this.title=o}setStage(o){this.stage=o}setValue(o){this.value=o}setTags(o){this.tags=o}setNotes(o){this.notes=o}setTasks(o){this.tasks=o}setContact(o){this.contact=o}setCreatedAt(o){this.createdAt=o}setLastModifiedAt(o){this.lastModifiedAt=o}getShallowCopy(){return{id:this.id,title:this.title,stage:this.stage,value:this.value,tags:this.tags,createdAt:this.createdAt,lastModifiedAt:this.lastModifiedAt}}static toLeadFromDao(o){return new i({id:o.id,title:o.title,stage:o.stage,value:o.value,tags:o.tags,createdAt:o.createdAt,lastModifiedAt:o.lastModifiedAt})}static toDaoFromLead(o){return{id:o.getId(),title:o.getTitle(),stage:o.getStage(),value:o.getValue(),tags:o.getTags(),createdAt:o.getCreatedAt(),lastModifiedAt:o.getLastModifiedAt(),contactId:o.getContact()?.getId(),notes:o.getNotes()?.map(e=>e.getId()),tasks:o.getTasks()?.map(e=>e.getId())}}};var Ve=class i{id;lead;text;createdAt;constructor(o){this.id=o.id,this.text=o.text,this.createdAt=o.createdAt,this.lead="lead"in o?o.lead:null}getId(){return this.id}setId(o){this.id=o}getLead(){return this.lead}setLead(o){this.lead=o}getText(){return this.text}setText(o){this.text=o}getCreatedAt(){return this.createdAt}setCreatedAt(o){this.createdAt=o}static toNoteFromDao(o,e){let t=e?{id:o.id,text:o.text,createdAt:o.createdAt,lead:e}:{id:o.id,text:o.text,createdAt:o.createdAt};return new i(t)}static toDaoFromNote(o,e){let n=o.getLead()?.getId()??e;if(!n)throw new Error("Cannot convert Note to NoteDao without associated Lead");return{id:o.getId(),leadId:n,text:o.getText(),createdAt:o.getCreatedAt()}}};var Ae=class i{id;lead;title;dueDate;status;reminder;createdAt;constructor(o){this.id=o.id,this.title=o.title,this.dueDate=o.dueDate,this.status=o.status,this.reminder=o.reminder,this.createdAt=o.createdAt,"lead"in o?this.lead=o.lead:this.lead=null}getId(){return this.id}setId(o){this.id=o}getLead(){return this.lead}setLead(o){this.lead=o}getTitle(){return this.title}setTitle(o){this.title=o}getDueDate(){return this.dueDate}setDueDate(o){this.dueDate=o}getStatus(){return this.status}setStatus(o){this.status=o}getReminder(){return this.reminder}setReminder(o){this.reminder=o}getCreatedAt(){return this.createdAt}setCreatedAt(o){this.createdAt=o}static toTaskFromDao(o,e){let t=e?{id:o.id,lead:e,title:o.title,dueDate:o.dueDate,status:o.status,reminder:o.reminder,createdAt:o.createdAt}:{id:o.id,title:o.title,dueDate:o.dueDate,status:o.status,reminder:o.reminder,createdAt:o.createdAt};return new i(t)}static toDaoFromTask(o,e){if(o.getLead()===null&&!e)throw new Error("Cannot convert Task to TaskDao without associated Lead");let t=o.getLead(),n=t?t.getId():e;return{id:o.getId(),leadId:n,title:o.getTitle(),dueDate:o.getDueDate(),status:o.getStatus(),reminder:o.getReminder(),createdAt:o.getCreatedAt()}}};var Fe=class i{contactDb;constructor(){let o=_(ne);this.contactDb=o.contacts}getContactDaosByIdsAsync(o){return this.contactDb.bulkGet(Array.from(o))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=N({token:i,factory:i.\u0275fac,providedIn:"root"})};var Oe=class i{noteDb;constructor(){let o=_(ne);this.noteDb=o.notes}getNoteDaosByIdsAsync(o){return this.noteDb.bulkGet(Array.from(o))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=N({token:i,factory:i.\u0275fac,providedIn:"root"})};var Re=class i{taskDb;constructor(){let o=_(ne);this.taskDb=o.tasks}getTaskDaosByIdsAsync(o){return this.taskDb.bulkGet(Array.from(o))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=N({token:i,factory:i.\u0275fac,providedIn:"root"})};var pe=class i{leadDb;contactService;taskService;noteService;constructor(){let o=_(ne);this.leadDb=o.leads,this.contactService=_(Fe),this.taskService=_(Re),this.noteService=_(Oe)}getLeads(o){return Ge(()=>this.getLeadsAsync(o))}getLeadsAsync(o){return qe(this,null,function*(){let e=new Set,t=new Set,n=new Set,r=new Map;return this.filterLeadsBasedOnCriteria(o).then(a=>this.processLeadDaoAndPopulateAndLoadContacts(a,r,e,t,n)).then(a=>this.hydrateLeadsWithContactsAndLoadTasks(a,r,t)).then(a=>this.hydrateLeadsWithTasksAndLoadNotes(a,r,n)).then(a=>this.hydrateLeadsWithNotes(a,r)).then(()=>Array.from(r.values()))})}filterLeadsBasedOnCriteria(o){return o.query.trim()===""&&o.sort==="asc"?this.leadDb.orderBy("createdAt").toArray():this.leadDb.where("title").startsWithIgnoreCase(o.query||"").sortBy("createdAt").then(e=>o.sort==="asc"?e:e.reverse())}processLeadDaoAndPopulateAndLoadContacts(o,e,t,n,r){return o.forEach(a=>{a.contactId&&t.add(a.contactId),a.tasks?.forEach(c=>n.add(c)),a.notes?.forEach(c=>r.add(c));let s=ce.toLeadFromDao(a);e.set(s.getId(),s)}),this.contactService.getContactDaosByIdsAsync(t)}hydrateLeadsWithContactsAndLoadTasks(o,e,t){return o.forEach(n=>{if(n){let r=Ee.toContactFromDao(n),a=n.leadId,s=e.get(a);s&&s.setContact(r)}}),this.taskService.getTaskDaosByIdsAsync(t)}hydrateLeadsWithTasksAndLoadNotes(o,e,t){return o.forEach(n=>{if(n){let r=Ae.toTaskFromDao(n),a=n.leadId,s=e.get(a);s&&s.getTasks()?.push(r)}}),this.noteService.getNoteDaosByIdsAsync(t)}hydrateLeadsWithNotes(o,e){o.forEach(t=>{if(t){let n=Ve.toNoteFromDao(t),r=t.leadId;if(r){let a=e.get(r);a&&a.getNotes()?.push(n)}}})}createLead(o){return Ge(()=>this.createLeadAsync(o))}createLeadAsync(o){return qe(this,null,function*(){let e={id:It(),title:o.title,value:o.value,stage:"new",tags:[],createdAt:new Date,lastModifiedAt:new Date},t=new ce(e);return this.leadDb.add(ce.toDaoFromLead(t)),t})}static \u0275fac=function(e){return new(e||i)};static \u0275prov=N({token:i,factory:i.\u0275fac,providedIn:"root"})};var gn=["data-p-icon","angle-down"],Qt=(()=>{class i extends Te{static \u0275fac=(()=>{let e;return function(n){return(e||(e=I(i)))(n||i)}})();static \u0275cmp=D({type:i,selectors:[["","data-p-icon","angle-down"]],features:[k],attrs:gn,decls:1,vars:0,consts:[["d","M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z","fill","currentColor"]],template:function(t,n){t&1&&($(),ve(0,"path",0))},encapsulation:2})}return i})();var hn=["data-p-icon","angle-up"],Ht=(()=>{class i extends Te{static \u0275fac=(()=>{let e;return function(n){return(e||(e=I(i)))(n||i)}})();static \u0275cmp=D({type:i,selectors:[["","data-p-icon","angle-up"]],features:[k],attrs:hn,decls:1,vars:0,consts:[["d","M10.4134 9.49931C10.3148 9.49977 10.2172 9.48055 10.1262 9.44278C10.0352 9.405 9.95263 9.34942 9.88338 9.27931L6.88338 6.27931L3.88338 9.27931C3.73811 9.34946 3.57409 9.3709 3.41567 9.34044C3.25724 9.30999 3.11286 9.22926 3.00395 9.11025C2.89504 8.99124 2.82741 8.84028 2.8111 8.67978C2.79478 8.51928 2.83065 8.35781 2.91338 8.21931L6.41338 4.71931C6.55401 4.57886 6.74463 4.49997 6.94338 4.49997C7.14213 4.49997 7.33276 4.57886 7.47338 4.71931L10.9734 8.21931C11.1138 8.35994 11.1927 8.55056 11.1927 8.74931C11.1927 8.94806 11.1138 9.13868 10.9734 9.27931C10.9007 9.35315 10.8132 9.41089 10.7168 9.44879C10.6203 9.48669 10.5169 9.5039 10.4134 9.49931Z","fill","currentColor"]],template:function(t,n){t&1&&($(),ve(0,"path",0))},encapsulation:2})}return i})();var me=(()=>{class i extends $t{required=w(void 0,{transform:v});invalid=w(void 0,{transform:v});disabled=w(void 0,{transform:v});name=w();_disabled=X(!1);$disabled=Y(()=>this.disabled()||this._disabled());onModelChange=()=>{};onModelTouched=()=>{};writeDisabledState(e){this._disabled.set(e)}writeControlValue(e,t){}writeValue(e){this.writeControlValue(e,this.writeModelValue.bind(this))}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.writeDisabledState(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=I(i)))(n||i)}})();static \u0275dir=_e({type:i,inputs:{required:[1,"required"],invalid:[1,"invalid"],disabled:[1,"disabled"],name:[1,"name"]},features:[k]})}return i})();var Wt=(()=>{class i extends me{pcFluid=_(Dt,{optional:!0,host:!0,skipSelf:!0});fluid=w(void 0,{transform:v});variant=w();size=w();inputSize=w();pattern=w();min=w();max=w();step=w();minlength=w();maxlength=w();$variant=Y(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());get hasFluid(){return this.fluid()??!!this.pcFluid}static \u0275fac=(()=>{let e;return function(n){return(e||(e=I(i)))(n||i)}})();static \u0275dir=_e({type:i,inputs:{fluid:[1,"fluid"],variant:[1,"variant"],size:[1,"size"],inputSize:[1,"inputSize"],pattern:[1,"pattern"],min:[1,"min"],max:[1,"max"],step:[1,"step"],minlength:[1,"minlength"],maxlength:[1,"maxlength"]},features:[k]})}return i})();var Zt=`
    .p-inputnumber {
        display: inline-flex;
        position: relative;
    }

    .p-inputnumber-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
        cursor: pointer;
        background: dt('inputnumber.button.background');
        color: dt('inputnumber.button.color');
        width: dt('inputnumber.button.width');
        transition:
            background dt('inputnumber.transition.duration'),
            color dt('inputnumber.transition.duration'),
            border-color dt('inputnumber.transition.duration'),
            outline-color dt('inputnumber.transition.duration');
    }

    .p-inputnumber-button:disabled {
        cursor: auto;
    }

    .p-inputnumber-button:not(:disabled):hover {
        background: dt('inputnumber.button.hover.background');
        color: dt('inputnumber.button.hover.color');
    }

    .p-inputnumber-button:not(:disabled):active {
        background: dt('inputnumber.button.active.background');
        color: dt('inputnumber.button.active.color');
    }

    .p-inputnumber-stacked .p-inputnumber-button {
        position: relative;
        flex: 1 1 auto;
        border: 0 none;
    }

    .p-inputnumber-stacked .p-inputnumber-button-group {
        display: flex;
        flex-direction: column;
        position: absolute;
        inset-block-start: 1px;
        inset-inline-end: 1px;
        height: calc(100% - 2px);
        z-index: 1;
    }

    .p-inputnumber-stacked .p-inputnumber-increment-button {
        padding: 0;
        border-start-end-radius: calc(dt('inputnumber.button.border.radius') - 1px);
    }

    .p-inputnumber-stacked .p-inputnumber-decrement-button {
        padding: 0;
        border-end-end-radius: calc(dt('inputnumber.button.border.radius') - 1px);
    }

    .p-inputnumber-stacked .p-inputnumber-input {
        padding-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));
    }

    .p-inputnumber-horizontal .p-inputnumber-button {
        border: 1px solid dt('inputnumber.button.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-button:hover {
        border-color: dt('inputnumber.button.hover.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-button:active {
        border-color: dt('inputnumber.button.active.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-increment-button {
        order: 3;
        border-start-end-radius: dt('inputnumber.button.border.radius');
        border-end-end-radius: dt('inputnumber.button.border.radius');
        border-inline-start: 0 none;
    }

    .p-inputnumber-horizontal .p-inputnumber-input {
        order: 2;
        border-radius: 0;
    }

    .p-inputnumber-horizontal .p-inputnumber-decrement-button {
        order: 1;
        border-start-start-radius: dt('inputnumber.button.border.radius');
        border-end-start-radius: dt('inputnumber.button.border.radius');
        border-inline-end: 0 none;
    }

    .p-floatlabel:has(.p-inputnumber-horizontal) label {
        margin-inline-start: dt('inputnumber.button.width');
    }

    .p-inputnumber-vertical {
        flex-direction: column;
    }

    .p-inputnumber-vertical .p-inputnumber-button {
        border: 1px solid dt('inputnumber.button.border.color');
        padding: dt('inputnumber.button.vertical.padding');
    }

    .p-inputnumber-vertical .p-inputnumber-button:hover {
        border-color: dt('inputnumber.button.hover.border.color');
    }

    .p-inputnumber-vertical .p-inputnumber-button:active {
        border-color: dt('inputnumber.button.active.border.color');
    }

    .p-inputnumber-vertical .p-inputnumber-increment-button {
        order: 1;
        border-start-start-radius: dt('inputnumber.button.border.radius');
        border-start-end-radius: dt('inputnumber.button.border.radius');
        width: 100%;
        border-block-end: 0 none;
    }

    .p-inputnumber-vertical .p-inputnumber-input {
        order: 2;
        border-radius: 0;
        text-align: center;
    }

    .p-inputnumber-vertical .p-inputnumber-decrement-button {
        order: 3;
        border-end-start-radius: dt('inputnumber.button.border.radius');
        border-end-end-radius: dt('inputnumber.button.border.radius');
        width: 100%;
        border-block-start: 0 none;
    }

    .p-inputnumber-input {
        flex: 1 1 auto;
    }

    .p-inputnumber-fluid {
        width: 100%;
    }

    .p-inputnumber-fluid .p-inputnumber-input {
        width: 1%;
    }

    .p-inputnumber-fluid.p-inputnumber-vertical .p-inputnumber-input {
        width: 100%;
    }

    .p-inputnumber:has(.p-inputtext-sm) .p-inputnumber-button .p-icon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
    }

    .p-inputnumber:has(.p-inputtext-lg) .p-inputnumber-button .p-icon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
    }

    .p-inputnumber-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        cursor: pointer;
        inset-inline-end: dt('form.field.padding.x');
        color: dt('form.field.icon.color');
    }

    .p-inputnumber:has(.p-inputnumber-clear-icon) .p-inputnumber-input {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-inputnumber-stacked .p-inputnumber-clear-icon {
        inset-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));
    }

    .p-inputnumber-stacked:has(.p-inputnumber-clear-icon) .p-inputnumber-input {
        padding-inline-end: calc(dt('inputnumber.button.width') + (dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-inputnumber-horizontal .p-inputnumber-clear-icon {
        inset-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));
    }
`;var bn=["clearicon"],_n=["incrementbuttonicon"],yn=["decrementbuttonicon"],xn=["input"];function vn(i,o){if(i&1){let e=j();$(),p(0,"svg",7),S("click",function(){g(e);let n=u(2);return h(n.clear())}),m()}if(i&2){let e=u(2);T(e.cx("clearIcon")),x("data-pc-section","clearIcon")}}function Cn(i,o){}function wn(i,o){i&1&&C(0,Cn,0,0,"ng-template")}function In(i,o){if(i&1){let e=j();p(0,"span",8),S("click",function(){g(e);let n=u(2);return h(n.clear())}),C(1,wn,1,0,null,9),m()}if(i&2){let e=u(2);T(e.cx("clearIcon")),x("data-pc-section","clearIcon"),l(),d("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function Dn(i,o){if(i&1&&(oe(0),C(1,vn,1,3,"svg",5)(2,In,2,4,"span",6),re()),i&2){let e=u();l(),d("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),l(),d("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function Sn(i,o){if(i&1&&y(0,"span",12),i&2){let e=u(2);d("ngClass",e.incrementButtonIcon),x("data-pc-section","incrementbuttonicon")}}function Tn(i,o){i&1&&($(),y(0,"svg",14)),i&2&&x("data-pc-section","incrementbuttonicon")}function Ln(i,o){}function Mn(i,o){i&1&&C(0,Ln,0,0,"ng-template")}function Nn(i,o){if(i&1&&(oe(0),C(1,Tn,1,1,"svg",13)(2,Mn,1,0,null,9),re()),i&2){let e=u(2);l(),d("ngIf",!e.incrementButtonIconTemplate&&!e._incrementButtonIconTemplate),l(),d("ngTemplateOutlet",e.incrementButtonIconTemplate||e._incrementButtonIconTemplate)}}function kn(i,o){if(i&1&&y(0,"span",12),i&2){let e=u(2);d("ngClass",e.decrementButtonIcon),x("data-pc-section","decrementbuttonicon")}}function Bn(i,o){i&1&&($(),y(0,"svg",16)),i&2&&x("data-pc-section","decrementbuttonicon")}function En(i,o){}function Vn(i,o){i&1&&C(0,En,0,0,"ng-template")}function An(i,o){if(i&1&&(oe(0),C(1,Bn,1,1,"svg",15)(2,Vn,1,0,null,9),re()),i&2){let e=u(2);l(),d("ngIf",!e.decrementButtonIconTemplate&&!e._decrementButtonIconTemplate),l(),d("ngTemplateOutlet",e.decrementButtonIconTemplate||e._decrementButtonIconTemplate)}}function Fn(i,o){if(i&1){let e=j();p(0,"span")(1,"button",10),S("mousedown",function(n){g(e);let r=u();return h(r.onUpButtonMouseDown(n))})("mouseup",function(){g(e);let n=u();return h(n.onUpButtonMouseUp())})("mouseleave",function(){g(e);let n=u();return h(n.onUpButtonMouseLeave())})("keydown",function(n){g(e);let r=u();return h(r.onUpButtonKeyDown(n))})("keyup",function(){g(e);let n=u();return h(n.onUpButtonKeyUp())}),C(2,Sn,1,2,"span",11)(3,Nn,3,2,"ng-container",2),m(),p(4,"button",10),S("mousedown",function(n){g(e);let r=u();return h(r.onDownButtonMouseDown(n))})("mouseup",function(){g(e);let n=u();return h(n.onDownButtonMouseUp())})("mouseleave",function(){g(e);let n=u();return h(n.onDownButtonMouseLeave())})("keydown",function(n){g(e);let r=u();return h(r.onDownButtonKeyDown(n))})("keyup",function(){g(e);let n=u();return h(n.onDownButtonKeyUp())}),C(5,kn,1,2,"span",11)(6,An,3,2,"ng-container",2),m()()}if(i&2){let e=u();T(e.cx("buttonGroup")),x("data-pc-section","buttonGroup"),l(),T(e.cn(e.cx("incrementButton"),e.incrementButtonClass)),x("disabled",e.$disabled()?"":void 0)("aria-hidden",!0)("data-pc-section","incrementbutton"),l(),d("ngIf",e.incrementButtonIcon),l(),d("ngIf",!e.incrementButtonIcon),l(),T(e.cn(e.cx("decrementButton"),e.decrementButtonClass)),x("disabled",e.$disabled()?"":void 0)("aria-hidden",!0)("data-pc-section","decrementbutton"),l(),d("ngIf",e.decrementButtonIcon),l(),d("ngIf",!e.decrementButtonIcon)}}function On(i,o){if(i&1&&y(0,"span",12),i&2){let e=u(2);d("ngClass",e.incrementButtonIcon),x("data-pc-section","incrementbuttonicon")}}function Rn(i,o){i&1&&($(),y(0,"svg",14)),i&2&&x("data-pc-section","incrementbuttonicon")}function zn(i,o){}function Pn(i,o){i&1&&C(0,zn,0,0,"ng-template")}function jn(i,o){if(i&1&&(oe(0),C(1,Rn,1,1,"svg",13)(2,Pn,1,0,null,9),re()),i&2){let e=u(2);l(),d("ngIf",!e.incrementButtonIconTemplate&&!e._incrementButtonIconTemplate),l(),d("ngTemplateOutlet",e.incrementButtonIconTemplate||e._incrementButtonIconTemplate)}}function Un(i,o){if(i&1){let e=j();p(0,"button",10),S("mousedown",function(n){g(e);let r=u();return h(r.onUpButtonMouseDown(n))})("mouseup",function(){g(e);let n=u();return h(n.onUpButtonMouseUp())})("mouseleave",function(){g(e);let n=u();return h(n.onUpButtonMouseLeave())})("keydown",function(n){g(e);let r=u();return h(r.onUpButtonKeyDown(n))})("keyup",function(){g(e);let n=u();return h(n.onUpButtonKeyUp())}),C(1,On,1,2,"span",11)(2,jn,3,2,"ng-container",2),m()}if(i&2){let e=u();T(e.cn(e.cx("incrementButton"),e.incrementButtonClass)),x("disabled",e.$disabled()?"":void 0)("aria-hidden",!0)("data-pc-section","incrementbutton"),l(),d("ngIf",e.incrementButtonIcon),l(),d("ngIf",!e.incrementButtonIcon)}}function $n(i,o){if(i&1&&y(0,"span",12),i&2){let e=u(2);d("ngClass",e.decrementButtonIcon),x("data-pc-section","decrementbuttonicon")}}function qn(i,o){i&1&&($(),y(0,"svg",16)),i&2&&x("data-pc-section","decrementbuttonicon")}function Gn(i,o){}function Kn(i,o){i&1&&C(0,Gn,0,0,"ng-template")}function Qn(i,o){if(i&1&&(oe(0),C(1,qn,1,1,"svg",15)(2,Kn,1,0,null,9),re()),i&2){let e=u(2);l(),d("ngIf",!e.decrementButtonIconTemplate&&!e._decrementButtonIconTemplate),l(),d("ngTemplateOutlet",e.decrementButtonIconTemplate||e._decrementButtonIconTemplate)}}function Hn(i,o){if(i&1){let e=j();p(0,"button",10),S("mousedown",function(n){g(e);let r=u();return h(r.onDownButtonMouseDown(n))})("mouseup",function(){g(e);let n=u();return h(n.onDownButtonMouseUp())})("mouseleave",function(){g(e);let n=u();return h(n.onDownButtonMouseLeave())})("keydown",function(n){g(e);let r=u();return h(r.onDownButtonKeyDown(n))})("keyup",function(){g(e);let n=u();return h(n.onDownButtonKeyUp())}),C(1,$n,1,2,"span",11)(2,Qn,3,2,"ng-container",2),m()}if(i&2){let e=u();T(e.cn(e.cx("decrementButton"),e.decrementButtonClass)),x("disabled",e.$disabled()?"":void 0)("aria-hidden",!0)("data-pc-section","decrementbutton"),l(),d("ngIf",e.decrementButtonIcon),l(),d("ngIf",!e.decrementButtonIcon)}}var Wn=`
    ${Zt}

    /* For PrimeNG */
    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext {
        border-color: dt('inputtext.invalid.border.color');
    }

    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext:enabled:focus,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext:enabled:focus,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
    }

    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext::placeholder,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext::placeholder,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,Zn={root:({instance:i})=>["p-inputnumber p-component p-inputwrapper",{"p-inputwrapper-filled":i.$filled()||i.allowEmpty===!1,"p-inputwrapper-focus":i.focused,"p-inputnumber-stacked":i.showButtons&&i.buttonLayout==="stacked","p-inputnumber-horizontal":i.showButtons&&i.buttonLayout==="horizontal","p-inputnumber-vertical":i.showButtons&&i.buttonLayout==="vertical","p-inputnumber-fluid":i.hasFluid,"p-invalid":i.invalid()}],pcInputText:"p-inputnumber-input",buttonGroup:"p-inputnumber-button-group",incrementButton:({instance:i})=>["p-inputnumber-button p-inputnumber-increment-button",{"p-disabled":i.showButtons&&i.max()!=null&&i.maxlength()}],decrementButton:({instance:i})=>["p-inputnumber-button p-inputnumber-decrement-button",{"p-disabled":i.showButtons&&i.min()!=null&&i.minlength()}],clearIcon:"p-inputnumber-clear-icon"},Yt=(()=>{class i extends K{name="inputnumber";theme=Wn;classes=Zn;static \u0275fac=(()=>{let e;return function(n){return(e||(e=I(i)))(n||i)}})();static \u0275prov=N({token:i,factory:i.\u0275fac})}return i})();var Yn={provide:le,useExisting:ie(()=>ze),multi:!0},ze=(()=>{class i extends Wt{injector;showButtons=!1;format=!0;buttonLayout="stacked";inputId;styleClass;placeholder;tabindex;title;ariaLabelledBy;ariaDescribedBy;ariaLabel;ariaRequired;autocomplete;incrementButtonClass;decrementButtonClass;incrementButtonIcon;decrementButtonIcon;readonly;allowEmpty=!0;locale;localeMatcher;mode="decimal";currency;currencyDisplay;useGrouping=!0;minFractionDigits;maxFractionDigits;prefix;suffix;inputStyle;inputStyleClass;showClear=!1;autofocus;onInput=new R;onFocus=new R;onBlur=new R;onKeyDown=new R;onClear=new R;clearIconTemplate;incrementButtonIconTemplate;decrementButtonIconTemplate;templates;input;_clearIconTemplate;_incrementButtonIconTemplate;_decrementButtonIconTemplate;value;focused;initialized;groupChar="";prefixChar="";suffixChar="";isSpecialChar;timer;lastValue;_numeral;numberFormat;_decimal;_decimalChar="";_group;_minusSign;_currency;_prefix;_suffix;_index;_componentStyle=_(Yt);ngControl=null;constructor(e){super(),this.injector=e}ngOnChanges(e){super.ngOnChanges(e),["locale","localeMatcher","mode","currency","currencyDisplay","useGrouping","minFractionDigits","maxFractionDigits","prefix","suffix"].some(n=>!!e[n])&&this.updateConstructParser()}ngOnInit(){super.ngOnInit(),this.ngControl=this.injector.get(Ft,null,{optional:!0}),this.constructParser(),this.initialized=!0}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"clearicon":this._clearIconTemplate=e.template;break;case"incrementbuttonicon":this._incrementButtonIconTemplate=e.template;break;case"decrementbuttonicon":this._decrementButtonIconTemplate=e.template;break}})}getOptions(){let e=(a,s,c)=>{if(!(a==null||isNaN(a)||!isFinite(a)))return Math.max(s,Math.min(c,Math.floor(a)))},t=e(this.minFractionDigits,0,20),n=e(this.maxFractionDigits,0,100),r=t!=null&&n!=null&&t>n?n:t;return{localeMatcher:this.localeMatcher,style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:this.useGrouping,minimumFractionDigits:r,maximumFractionDigits:n}}constructParser(){let e=this.getOptions(),t=Object.fromEntries(Object.entries(e).filter(([a,s])=>s!==void 0));this.numberFormat=new Intl.NumberFormat(this.locale,t);let n=[...new Intl.NumberFormat(this.locale,{useGrouping:!1}).format(9876543210)].reverse(),r=new Map(n.map((a,s)=>[a,s]));this._numeral=new RegExp(`[${n.join("")}]`,"g"),this._group=this.getGroupingExpression(),this._minusSign=this.getMinusSignExpression(),this._currency=this.getCurrencyExpression(),this._decimal=this.getDecimalExpression(),this._decimalChar=this.getDecimalChar(),this._suffix=this.getSuffixExpression(),this._prefix=this.getPrefixExpression(),this._index=a=>r.get(a)}updateConstructParser(){this.initialized&&this.constructParser()}escapeRegExp(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}getDecimalExpression(){let e=this.getDecimalChar();return new RegExp(`[${e}]`,"g")}getDecimalChar(){return new Intl.NumberFormat(this.locale,ot(it({},this.getOptions()),{useGrouping:!1})).format(1.1).replace(this._currency,"").trim().replace(this._numeral,"")}getGroupingExpression(){let e=new Intl.NumberFormat(this.locale,{useGrouping:!0});return this.groupChar=e.format(1e6).trim().replace(this._numeral,"").charAt(0),new RegExp(`[${this.groupChar}]`,"g")}getMinusSignExpression(){let e=new Intl.NumberFormat(this.locale,{useGrouping:!1});return new RegExp(`[${e.format(-1).trim().replace(this._numeral,"")}]`,"g")}getCurrencyExpression(){if(this.currency){let e=new Intl.NumberFormat(this.locale,{style:"currency",currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});return new RegExp(`[${e.format(1).replace(/\s/g,"").replace(this._numeral,"").replace(this._group,"")}]`,"g")}return new RegExp("[]","g")}getPrefixExpression(){if(this.prefix)this.prefixChar=this.prefix;else{let e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay});this.prefixChar=e.format(1).split("1")[0]}return new RegExp(`${this.escapeRegExp(this.prefixChar||"")}`,"g")}getSuffixExpression(){if(this.suffix)this.suffixChar=this.suffix;else{let e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});this.suffixChar=e.format(1).split("1")[1]}return new RegExp(`${this.escapeRegExp(this.suffixChar||"")}`,"g")}formatValue(e){if(e!=null){if(e==="-")return e;if(this.format){let n=new Intl.NumberFormat(this.locale,this.getOptions()).format(e);return this.prefix&&e!=this.prefix&&(n=this.prefix+n),this.suffix&&e!=this.suffix&&(n=n+this.suffix),n}return e.toString()}return""}parseValue(e){let t=this._suffix?new RegExp(this._suffix,""):/(?:)/,n=this._prefix?new RegExp(this._prefix,""):/(?:)/,r=this._currency?new RegExp(this._currency,""):/(?:)/,a=e.replace(t,"").replace(n,"").trim().replace(/\s/g,"").replace(r,"").replace(this._group,"").replace(this._minusSign,"-").replace(this._decimal,".").replace(this._numeral,this._index);if(a){if(a==="-")return a;let s=+a;return isNaN(s)?null:s}return null}repeat(e,t,n){if(this.readonly)return;let r=t||500;this.clearTimer(),this.timer=setTimeout(()=>{this.repeat(e,40,n)},r),this.spin(e,n)}spin(e,t){let n=(this.step()??1)*t,r=this.parseValue(this.input?.nativeElement.value)||0,a=this.validateValue(r+n),s=this.maxlength();s&&s<this.formatValue(a).length||(this.updateInput(a,null,"spin",null),this.updateModel(e,a),this.handleOnInput(e,r,a))}clear(){this.value=null,this.onModelChange(this.value),this.onClear.emit()}onUpButtonMouseDown(e){if(e.button===2){this.clearTimer();return}this.$disabled()||(this.input?.nativeElement.focus(),this.repeat(e,null,1),e.preventDefault())}onUpButtonMouseUp(){this.$disabled()||this.clearTimer()}onUpButtonMouseLeave(){this.$disabled()||this.clearTimer()}onUpButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,1)}onUpButtonKeyUp(){this.$disabled()||this.clearTimer()}onDownButtonMouseDown(e){if(e.button===2){this.clearTimer();return}this.$disabled()||(this.input?.nativeElement.focus(),this.repeat(e,null,-1),e.preventDefault())}onDownButtonMouseUp(){this.$disabled()||this.clearTimer()}onDownButtonMouseLeave(){this.$disabled()||this.clearTimer()}onDownButtonKeyUp(){this.$disabled()||this.clearTimer()}onDownButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,-1)}onUserInput(e){this.readonly||(this.isSpecialChar&&(e.target.value=this.lastValue),this.isSpecialChar=!1)}onInputKeyDown(e){if(this.readonly)return;if(this.lastValue=e.target.value,e.shiftKey||e.altKey){this.isSpecialChar=!0;return}let t=e.target.selectionStart,n=e.target.selectionEnd,r=e.target.value,a=null;switch(e.altKey&&e.preventDefault(),e.key){case"ArrowUp":this.spin(e,1),e.preventDefault();break;case"ArrowDown":this.spin(e,-1),e.preventDefault();break;case"ArrowLeft":for(let s=t;s<=r.length;s++){let c=s===0?0:s-1;if(this.isNumeralChar(r.charAt(c))){this.input.nativeElement.setSelectionRange(s,s);break}}break;case"ArrowRight":for(let s=n;s>=0;s--)if(this.isNumeralChar(r.charAt(s))){this.input.nativeElement.setSelectionRange(s,s);break}break;case"Tab":case"Enter":a=this.validateValue(this.parseValue(this.input.nativeElement.value)),this.input.nativeElement.value=this.formatValue(a),this.input.nativeElement.setAttribute("aria-valuenow",a),this.updateModel(e,a);break;case"Backspace":{if(e.preventDefault(),t===n){if(t==1&&this.prefix||t==r.length&&this.suffix)break;let s=r.charAt(t-1),{decimalCharIndex:c,decimalCharIndexWithoutPrefix:b}=this.getDecimalCharIndexes(r);if(this.isNumeralChar(s)){let f=this.getDecimalLength(r);if(this._group.test(s))this._group.lastIndex=0,a=r.slice(0,t-2)+r.slice(t-1);else if(this._decimal.test(s))this._decimal.lastIndex=0,f?this.input?.nativeElement.setSelectionRange(t-1,t-1):a=r.slice(0,t-1)+r.slice(t);else if(c>0&&t>c){let B=this.isDecimalMode()&&(this.minFractionDigits||0)<f?"":"0";a=r.slice(0,t-1)+B+r.slice(t)}else b===1?(a=r.slice(0,t-1)+"0"+r.slice(t),a=this.parseValue(a)>0?a:""):a=r.slice(0,t-1)+r.slice(t)}else this.mode==="currency"&&this._currency&&s.search(this._currency)!=-1&&(a=r.slice(1));this.updateValue(e,a,null,"delete-single")}else a=this.deleteRange(r,t,n),this.updateValue(e,a,null,"delete-range");break}case"Delete":if(e.preventDefault(),t===n){if(t==0&&this.prefix||t==r.length-1&&this.suffix)break;let s=r.charAt(t),{decimalCharIndex:c,decimalCharIndexWithoutPrefix:b}=this.getDecimalCharIndexes(r);if(this.isNumeralChar(s)){let f=this.getDecimalLength(r);if(this._group.test(s))this._group.lastIndex=0,a=r.slice(0,t)+r.slice(t+2);else if(this._decimal.test(s))this._decimal.lastIndex=0,f?this.input?.nativeElement.setSelectionRange(t+1,t+1):a=r.slice(0,t)+r.slice(t+1);else if(c>0&&t>c){let B=this.isDecimalMode()&&(this.minFractionDigits||0)<f?"":"0";a=r.slice(0,t)+B+r.slice(t+1)}else b===1?(a=r.slice(0,t)+"0"+r.slice(t+1),a=this.parseValue(a)>0?a:""):a=r.slice(0,t)+r.slice(t+1)}this.updateValue(e,a,null,"delete-back-single")}else a=this.deleteRange(r,t,n),this.updateValue(e,a,null,"delete-range");break;case"Home":this.min()&&(this.updateModel(e,this.min()),e.preventDefault());break;case"End":this.max()&&(this.updateModel(e,this.max()),e.preventDefault());break;default:break}this.onKeyDown.emit(e)}onInputKeyPress(e){if(this.readonly)return;let t=e.which||e.keyCode,n=String.fromCharCode(t),r=this.isDecimalSign(n),a=this.isMinusSign(n);t!=13&&e.preventDefault(),!r&&e.code==="NumpadDecimal"&&(r=!0,n=this._decimalChar,t=n.charCodeAt(0));let{value:s,selectionStart:c,selectionEnd:b}=this.input.nativeElement,f=this.parseValue(s+n),B=f!=null?f.toString():"",J=s.substring(c,b),M=this.parseValue(J),Q=M!=null?M.toString():"";if(c!==b&&Q.length>0){this.insert(e,n,{isDecimalSign:r,isMinusSign:a});return}let U=this.maxlength();U&&B.length>U||(48<=t&&t<=57||a||r)&&this.insert(e,n,{isDecimalSign:r,isMinusSign:a})}onPaste(e){if(!this.$disabled()&&!this.readonly){e.preventDefault();let t=(e.clipboardData||this.document.defaultView.clipboardData).getData("Text");if(this.inputId==="integeronly"&&/[^\d-]/.test(t))return;if(t){this.maxlength()&&(t=t.toString().substring(0,this.maxlength()));let n=this.parseValue(t);n!=null&&this.insert(e,n.toString())}}}allowMinusSign(){let e=this.min();return e==null||e<0}isMinusSign(e){return this._minusSign.test(e)||e==="-"?(this._minusSign.lastIndex=0,!0):!1}isDecimalSign(e){return this._decimal.test(e)?(this._decimal.lastIndex=0,!0):!1}isDecimalMode(){return this.mode==="decimal"}getDecimalCharIndexes(e){let t=e.search(this._decimal);this._decimal.lastIndex=0;let r=e.replace(this._prefix,"").trim().replace(/\s/g,"").replace(this._currency,"").search(this._decimal);return this._decimal.lastIndex=0,{decimalCharIndex:t,decimalCharIndexWithoutPrefix:r}}getCharIndexes(e){let t=e.search(this._decimal);this._decimal.lastIndex=0;let n=e.search(this._minusSign);this._minusSign.lastIndex=0;let r=e.search(this._suffix);this._suffix.lastIndex=0;let a=e.search(this._currency);return this._currency.lastIndex=0,{decimalCharIndex:t,minusCharIndex:n,suffixCharIndex:r,currencyCharIndex:a}}insert(e,t,n={isDecimalSign:!1,isMinusSign:!1}){let r=t.search(this._minusSign);if(this._minusSign.lastIndex=0,!this.allowMinusSign()&&r!==-1)return;let a=this.input?.nativeElement.selectionStart,s=this.input?.nativeElement.selectionEnd,c=this.input?.nativeElement.value.trim(),{decimalCharIndex:b,minusCharIndex:f,suffixCharIndex:B,currencyCharIndex:J}=this.getCharIndexes(c),M;if(n.isMinusSign)a===0&&(M=c,(f===-1||s!==0)&&(M=this.insertText(c,t,0,s)),this.updateValue(e,M,t,"insert"));else if(n.isDecimalSign)b>0&&a===b?this.updateValue(e,c,t,"insert"):b>a&&b<s?(M=this.insertText(c,t,a,s),this.updateValue(e,M,t,"insert")):b===-1&&this.maxFractionDigits&&(M=this.insertText(c,t,a,s),this.updateValue(e,M,t,"insert"));else{let Q=this.numberFormat.resolvedOptions().maximumFractionDigits,U=a!==s?"range-insert":"insert";if(b>0&&a>b){if(a+t.length-(b+1)<=Q){let H=J>=a?J-1:B>=a?B:c.length;M=c.slice(0,a)+t+c.slice(a+t.length,H)+c.slice(H),this.updateValue(e,M,t,U)}}else M=this.insertText(c,t,a,s),this.updateValue(e,M,t,U)}}insertText(e,t,n,r){if((t==="."?t:t.split(".")).length===2){let s=e.slice(n,r).search(this._decimal);return this._decimal.lastIndex=0,s>0?e.slice(0,n)+this.formatValue(t)+e.slice(r):e||this.formatValue(t)}else return r-n===e.length?this.formatValue(t):n===0?t+e.slice(r):r===e.length?e.slice(0,n)+t:e.slice(0,n)+t+e.slice(r)}deleteRange(e,t,n){let r;return n-t===e.length?r="":t===0?r=e.slice(n):n===e.length?r=e.slice(0,t):r=e.slice(0,t)+e.slice(n),r}initCursor(){let e=this.input?.nativeElement.selectionStart,t=this.input?.nativeElement.selectionEnd,n=this.input?.nativeElement.value,r=n.length,a=null,s=(this.prefixChar||"").length;n=n.replace(this._prefix,""),(e===t||e!==0||t<s)&&(e-=s);let c=n.charAt(e);if(this.isNumeralChar(c))return e+s;let b=e-1;for(;b>=0;)if(c=n.charAt(b),this.isNumeralChar(c)){a=b+s;break}else b--;if(a!==null)this.input?.nativeElement.setSelectionRange(a+1,a+1);else{for(b=e;b<r;)if(c=n.charAt(b),this.isNumeralChar(c)){a=b+s;break}else b++;a!==null&&this.input?.nativeElement.setSelectionRange(a,a)}return a||0}onInputClick(){let e=this.input?.nativeElement.value;!this.readonly&&e!==Ct()&&this.initCursor()}isNumeralChar(e){return e.length===1&&(this._numeral.test(e)||this._decimal.test(e)||this._group.test(e)||this._minusSign.test(e))?(this.resetRegex(),!0):!1}resetRegex(){this._numeral.lastIndex=0,this._decimal.lastIndex=0,this._group.lastIndex=0,this._minusSign.lastIndex=0}updateValue(e,t,n,r){let a=this.input?.nativeElement.value,s=null;t!=null&&(s=this.parseValue(t),s=!s&&!this.allowEmpty?0:s,this.updateInput(s,n,r,t),this.handleOnInput(e,a,s))}handleOnInput(e,t,n){this.isValueChanged(t,n)&&(this.input.nativeElement.value=this.formatValue(n),this.input?.nativeElement.setAttribute("aria-valuenow",n),this.updateModel(e,n),this.onInput.emit({originalEvent:e,value:n,formattedValue:t}))}isValueChanged(e,t){if(t===null&&e!==null)return!0;if(t!=null){let n=typeof e=="string"?this.parseValue(e):e;return t!==n}return!1}validateValue(e){if(e==="-"||e==null)return null;let t=this.min(),n=this.max();return t!=null&&e<t?this.min():n!=null&&e>n?n:e}updateInput(e,t,n,r){t=t||"";let a=this.input?.nativeElement.value,s=this.formatValue(e),c=a.length;if(s!==r&&(s=this.concatValues(s,r)),c===0){this.input.nativeElement.value=s,this.input.nativeElement.setSelectionRange(0,0);let f=this.initCursor()+t.length;this.input.nativeElement.setSelectionRange(f,f)}else{let b=this.input.nativeElement.selectionStart,f=this.input.nativeElement.selectionEnd,B=this.maxlength();if(B&&s.length>B&&(s=s.slice(0,B),b=Math.min(b,B),f=Math.min(f,B)),B&&B<s.length)return;this.input.nativeElement.value=s;let J=s.length;if(n==="range-insert"){let M=this.parseValue((a||"").slice(0,b)),U=(M!==null?M.toString():"").split("").join(`(${this.groupChar})?`),H=new RegExp(U,"g");H.test(s);let fn=t.split("").join(`(${this.groupChar})?`),nt=new RegExp(fn,"g");nt.test(s.slice(H.lastIndex)),f=H.lastIndex+nt.lastIndex,this.input.nativeElement.setSelectionRange(f,f)}else if(J===c)n==="insert"||n==="delete-back-single"?this.input.nativeElement.setSelectionRange(f+1,f+1):n==="delete-single"?this.input.nativeElement.setSelectionRange(f-1,f-1):(n==="delete-range"||n==="spin")&&this.input.nativeElement.setSelectionRange(f,f);else if(n==="delete-back-single"){let M=a.charAt(f-1),Q=a.charAt(f),U=c-J,H=this._group.test(Q);H&&U===1?f+=1:!H&&this.isNumeralChar(M)&&(f+=-1*U+1),this._group.lastIndex=0,this.input.nativeElement.setSelectionRange(f,f)}else if(a==="-"&&n==="insert"){this.input.nativeElement.setSelectionRange(0,0);let Q=this.initCursor()+t.length+1;this.input.nativeElement.setSelectionRange(Q,Q)}else f=f+(J-c),this.input.nativeElement.setSelectionRange(f,f)}this.input.nativeElement.setAttribute("aria-valuenow",e)}concatValues(e,t){if(e&&t){let n=t.search(this._decimal);return this._decimal.lastIndex=0,this.suffixChar?n!==-1?e.replace(this.suffixChar,"").split(this._decimal)[0]+t.replace(this.suffixChar,"").slice(n)+this.suffixChar:e:n!==-1?e.split(this._decimal)[0]+t.slice(n):e}return e}getDecimalLength(e){if(e){let t=e.split(this._decimal);if(t.length===2)return t[1].replace(this._suffix,"").trim().replace(/\s/g,"").replace(this._currency,"").length}return 0}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1;let t=this.validateValue(this.parseValue(this.input.nativeElement.value)),n=t?.toString();this.input.nativeElement.value=this.formatValue(n),this.input.nativeElement.setAttribute("aria-valuenow",n),this.updateModel(e,t),this.onModelTouched(),this.onBlur.emit(e)}formattedValue(){let e=!this.value&&!this.allowEmpty?0:this.value;return this.formatValue(e)}updateModel(e,t){let n=this.ngControl?.control?.updateOn==="blur";this.value!==t?(this.value=t,n&&this.focused||this.onModelChange(t)):n&&this.onModelChange(t)}writeControlValue(e,t){this.value=e&&Number(e),t(e),this.cd.markForCheck()}clearTimer(){this.timer&&clearInterval(this.timer)}static \u0275fac=function(t){return new(t||i)(lt(at))};static \u0275cmp=D({type:i,selectors:[["p-inputNumber"],["p-inputnumber"],["p-input-number"]],contentQueries:function(t,n,r){if(t&1&&(O(r,bn,4),O(r,_n,4),O(r,yn,4),O(r,se,4)),t&2){let a;A(a=F())&&(n.clearIconTemplate=a.first),A(a=F())&&(n.incrementButtonIconTemplate=a.first),A(a=F())&&(n.decrementButtonIconTemplate=a.first),A(a=F())&&(n.templates=a)}},viewQuery:function(t,n){if(t&1&&ct(xn,5),t&2){let r;A(r=F())&&(n.input=r.first)}},hostVars:4,hostBindings:function(t,n){t&2&&(x("data-pc-name","inputnumber")("data-pc-section","root"),T(n.cn(n.cx("root"),n.styleClass)))},inputs:{showButtons:[2,"showButtons","showButtons",v],format:[2,"format","format",v],buttonLayout:"buttonLayout",inputId:"inputId",styleClass:"styleClass",placeholder:"placeholder",tabindex:[2,"tabindex","tabindex",te],title:"title",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",ariaLabel:"ariaLabel",ariaRequired:[2,"ariaRequired","ariaRequired",v],autocomplete:"autocomplete",incrementButtonClass:"incrementButtonClass",decrementButtonClass:"decrementButtonClass",incrementButtonIcon:"incrementButtonIcon",decrementButtonIcon:"decrementButtonIcon",readonly:[2,"readonly","readonly",v],allowEmpty:[2,"allowEmpty","allowEmpty",v],locale:"locale",localeMatcher:"localeMatcher",mode:"mode",currency:"currency",currencyDisplay:"currencyDisplay",useGrouping:[2,"useGrouping","useGrouping",v],minFractionDigits:[2,"minFractionDigits","minFractionDigits",e=>te(e,void 0)],maxFractionDigits:[2,"maxFractionDigits","maxFractionDigits",e=>te(e,void 0)],prefix:"prefix",suffix:"suffix",inputStyle:"inputStyle",inputStyleClass:"inputStyleClass",showClear:[2,"showClear","showClear",v],autofocus:[2,"autofocus","autofocus",v]},outputs:{onInput:"onInput",onFocus:"onFocus",onBlur:"onBlur",onKeyDown:"onKeyDown",onClear:"onClear"},features:[q([Yn,Yt]),k,st],decls:6,vars:36,consts:[["input",""],["pInputText","","role","spinbutton","inputmode","decimal",3,"input","keydown","keypress","paste","click","focus","blur","value","ngStyle","variant","invalid","pSize","pAutoFocus","fluid"],[4,"ngIf"],[3,"class",4,"ngIf"],["type","button","tabindex","-1",3,"class","mousedown","mouseup","mouseleave","keydown","keyup",4,"ngIf"],["data-p-icon","times",3,"class","click",4,"ngIf"],[3,"class","click",4,"ngIf"],["data-p-icon","times",3,"click"],[3,"click"],[4,"ngTemplateOutlet"],["type","button","tabindex","-1",3,"mousedown","mouseup","mouseleave","keydown","keyup"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],["data-p-icon","angle-up",4,"ngIf"],["data-p-icon","angle-up"],["data-p-icon","angle-down",4,"ngIf"],["data-p-icon","angle-down"]],template:function(t,n){if(t&1){let r=j();p(0,"input",1,0),S("input",function(s){return g(r),h(n.onUserInput(s))})("keydown",function(s){return g(r),h(n.onInputKeyDown(s))})("keypress",function(s){return g(r),h(n.onInputKeyPress(s))})("paste",function(s){return g(r),h(n.onPaste(s))})("click",function(){return g(r),h(n.onInputClick())})("focus",function(s){return g(r),h(n.onInputFocus(s))})("blur",function(s){return g(r),h(n.onInputBlur(s))}),m(),C(2,Dn,3,2,"ng-container",2)(3,Fn,7,17,"span",3)(4,Un,3,7,"button",4)(5,Hn,3,7,"button",4)}t&2&&(T(n.cn(n.cx("pcInputText"),n.inputStyleClass)),d("value",n.formattedValue())("ngStyle",n.inputStyle)("variant",n.$variant())("invalid",n.invalid())("pSize",n.size())("pAutoFocus",n.autofocus)("fluid",n.hasFluid),x("id",n.inputId)("aria-valuemin",n.min())("aria-valuemax",n.max())("aria-valuenow",n.value)("placeholder",n.placeholder)("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledBy)("aria-describedby",n.ariaDescribedBy)("title",n.title)("size",n.inputSize())("name",n.name())("autocomplete",n.autocomplete)("maxlength",n.maxlength())("minlength",n.minlength())("tabindex",n.tabindex)("aria-required",n.ariaRequired)("min",n.min())("max",n.max())("step",n.step()??1)("required",n.required()?"":void 0)("readonly",n.readonly?"":void 0)("disabled",n.$disabled()?"":void 0)("data-pc-section","input"),l(2),d("ngIf",n.buttonLayout!="vertical"&&n.showClear&&n.value),l(),d("ngIf",n.showButtons&&n.buttonLayout==="stacked"),l(),d("ngIf",n.showButtons&&n.buttonLayout!=="stacked"),l(),d("ngIf",n.showButtons&&n.buttonLayout!=="stacked"))},dependencies:[G,ht,bt,ae,_t,de,Le,wt,Ht,Qt,V],encapsulation:2,changeDetection:0})}return i})(),Xt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Z({type:i});static \u0275inj=W({imports:[ze,V,V]})}return i})();function ei(i,o){i&1&&L(0," Lead name is required. ")}function ti(i,o){i&1&&L(0," Minimum 3 characters. ")}function ni(i,o){i&1&&L(0," Maximum 100 characters. ")}function ii(i,o){if(i&1&&(p(0,"p-message",8),z(1,ei,1,0)(2,ti,1,0)(3,ni,1,0),m()),i&2){let e,t=u();l(),P(!((e=t.newLeadForm.get("lead"))==null||e.errors==null)&&e.errors.required?1:!((e=t.newLeadForm.get("lead"))==null||e.errors==null)&&e.errors.minlength?2:!((e=t.newLeadForm.get("lead"))==null||e.errors==null)&&e.errors.maxlength?3:-1)}}function oi(i,o){i&1&&(p(0,"p-message",9),L(1," Enter the name of the lead. "),m())}function ri(i,o){i&1&&L(0," Value must be at least 0. ")}function ai(i,o){if(i&1&&(p(0,"p-message",8),z(1,ri,1,0),m()),i&2){let e,t=u();l(),P(!((e=t.newLeadForm.get("value"))==null||e.errors==null)&&e.errors.min?1:-1)}}function si(i,o){i&1&&(p(0,"p-message",9),L(1," Enter the estimated value of the lead. "),m())}var Pe=class i{leadService=_(pe);fb=_(jt);createLeadSubscription;newLeadForm=this.fb.group({lead:["",[be.required,be.minLength(8),be.maxLength(100)]],value:[void 0,[be.min(0)]]});formSubmitted=X(!1);loading=X(!1);createdNewLead=Ie();isInvalid(o){let e=this.newLeadForm.get(o);return!!(e&&e.invalid&&(e.touched||this.formSubmitted()))}handleSubmit(){if(this.formSubmitted.set(!0),this.newLeadForm.invalid)return;this.loading.set(!0);let o={title:this.newLeadForm.value.lead,value:this.newLeadForm.value.value};this.createLeadSubscription=this.leadService.createLead(o).subscribe({next:e=>{this.resetForm(),this.createdNewLead.emit(e)},error:e=>{console.error("Error creating lead:",e),this.loading.set(!1)},complete:()=>{this.loading.set(!1)}})}resetForm(){this.newLeadForm.reset(),this.formSubmitted.set(!1),this.loading.set(!1)}ngOnDestroy(){this.createLeadSubscription?.unsubscribe()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=D({type:i,selectors:[["app-new-lead"]],outputs:{createdNewLead:"createdNewLead"},decls:20,vars:8,consts:[["addLeadPopover",""],["pButton","",3,"click"],["pButtonIcon","",1,"pi","pi-plus"],["pButtonLabel",""],[1,"flex","flex-col","gap-4","w-sm",3,"ngSubmit","formGroup"],[1,"flex","flex-col","gap-2"],["for","lead"],["pInputText","","id","lead","aria-describedby","lead-help","formControlName","lead",3,"pAutoFocus","ariaInvalid"],["severity","error","size","small","variant","simple"],["severity","secondary","size","small","variant","simple"],["for","value"],["mode","currency","currency","INR","currencyDisplay","code","locale","en-IN","id","value","aria-describedby","value-help","formControlName","value",3,"invalid"],["type","submit","label","Create",3,"loading","disabled"]],template:function(e,t){if(e&1){let n=j();p(0,"button",1),S("click",function(a){g(n);let s=pt(5);return h(s.toggle(a))}),y(1,"i",2),p(2,"span",3),L(3,"New Lead"),m()(),p(4,"p-popover",null,0)(6,"form",4),S("ngSubmit",function(){return g(n),h(t.handleSubmit())}),p(7,"div",5)(8,"label",6),L(9,"Lead"),m(),y(10,"input",7),z(11,ii,4,1,"p-message",8)(12,oi,2,0,"p-message",9),m(),p(13,"div",5)(14,"label",10),L(15,"Value"),m(),y(16,"p-inputnumber",11),z(17,ai,2,1,"p-message",8)(18,si,2,0,"p-message",9),m(),y(19,"p-button",12),m()()}e&2&&(l(6),d("formGroup",t.newLeadForm),l(4),d("pAutoFocus",!0)("ariaInvalid",t.isInvalid("lead")),l(),P(t.isInvalid("lead")?11:12),l(5),d("invalid",t.isInvalid("value")),l(),P(t.isInvalid("value")?17:18),l(2),d("loading",t.loading())("disabled",t.loading()))},dependencies:[kt,Mt,Nt,Tt,Lt,Kt,Gt,Ut,Rt,Me,ue,Ot,zt,Pt,Be,de,Xt,ze,Le,qt],encapsulation:2})};var tn=`
    .p-iconfield {
        position: relative;
        display: block;
    }

    .p-inputicon {
        position: absolute;
        top: 50%;
        margin-top: calc(-1 * (dt('icon.size') / 2));
        color: dt('iconfield.icon.color');
        line-height: 1;
        z-index: 1;
    }

    .p-iconfield .p-inputicon:first-child {
        inset-inline-start: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputicon:last-child {
        inset-inline-end: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputtext:not(:first-child),
    .p-iconfield .p-inputwrapper:not(:first-child) .p-inputtext {
        padding-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield .p-inputtext:not(:last-child) {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield:has(.p-inputfield-sm) .p-inputicon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
        margin-top: calc(-1 * (dt('form.field.sm.font.size') / 2));
    }

    .p-iconfield:has(.p-inputfield-lg) .p-inputicon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
        margin-top: calc(-1 * (dt('form.field.lg.font.size') / 2));
    }
`;var li=["*"],ui={root:({instance:i})=>["p-iconfield",{"p-iconfield-left":i.iconPosition=="left","p-iconfield-right":i.iconPosition=="right"}]},nn=(()=>{class i extends K{name="iconfield";theme=tn;classes=ui;static \u0275fac=(()=>{let e;return function(n){return(e||(e=I(i)))(n||i)}})();static \u0275prov=N({token:i,factory:i.\u0275fac})}return i})();var Je=(()=>{class i extends Se{iconPosition="left";styleClass;_componentStyle=_(nn);static \u0275fac=(()=>{let e;return function(n){return(e||(e=I(i)))(n||i)}})();static \u0275cmp=D({type:i,selectors:[["p-iconfield"],["p-iconField"],["p-icon-field"]],hostVars:2,hostBindings:function(t,n){t&2&&T(n.cn(n.cx("root"),n.styleClass))},inputs:{iconPosition:"iconPosition",styleClass:"styleClass"},features:[q([nn]),k],ngContentSelectors:li,decls:1,vars:0,template:function(t,n){t&1&&(Ce(),we(0))},dependencies:[G],encapsulation:2,changeDetection:0})}return i})(),on=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Z({type:i});static \u0275inj=W({imports:[Je]})}return i})();var ci=["*"],pi={root:"p-inputicon"},rn=(()=>{class i extends K{name="inputicon";classes=pi;static \u0275fac=(()=>{let e;return function(n){return(e||(e=I(i)))(n||i)}})();static \u0275prov=N({token:i,factory:i.\u0275fac})}return i})(),Xe=(()=>{class i extends Se{styleClass;_componentStyle=_(rn);static \u0275fac=(()=>{let e;return function(n){return(e||(e=I(i)))(n||i)}})();static \u0275cmp=D({type:i,selectors:[["p-inputicon"],["p-inputIcon"]],hostVars:2,hostBindings:function(t,n){t&2&&T(n.cn(n.cx("root"),n.styleClass))},inputs:{styleClass:"styleClass"},features:[q([rn]),k],ngContentSelectors:ci,decls:1,vars:0,template:function(t,n){t&1&&(Ce(),we(0))},dependencies:[G,V],encapsulation:2,changeDetection:0})}return i})(),an=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Z({type:i});static \u0275inj=W({imports:[Xe,V,V]})}return i})();var sn=`
    .p-togglebutton {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        color: dt('togglebutton.color');
        background: dt('togglebutton.background');
        border: 1px solid dt('togglebutton.border.color');
        padding: dt('togglebutton.padding');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
        border-radius: dt('togglebutton.border.radius');
        outline-color: transparent;
        font-weight: dt('togglebutton.font.weight');
    }

    .p-togglebutton-content {
        display: inline-flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        gap: dt('togglebutton.gap');
        padding: dt('togglebutton.content.padding');
        background: transparent;
        border-radius: dt('togglebutton.content.border.radius');
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
        background: dt('togglebutton.hover.background');
        color: dt('togglebutton.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked {
        background: dt('togglebutton.checked.background');
        border-color: dt('togglebutton.checked.border.color');
        color: dt('togglebutton.checked.color');
    }

    .p-togglebutton-checked .p-togglebutton-content {
        background: dt('togglebutton.content.checked.background');
        box-shadow: dt('togglebutton.content.checked.shadow');
    }

    .p-togglebutton:focus-visible {
        box-shadow: dt('togglebutton.focus.ring.shadow');
        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');
        outline-offset: dt('togglebutton.focus.ring.offset');
    }

    .p-togglebutton.p-invalid {
        border-color: dt('togglebutton.invalid.border.color');
    }

    .p-togglebutton:disabled {
        opacity: 1;
        cursor: default;
        background: dt('togglebutton.disabled.background');
        border-color: dt('togglebutton.disabled.border.color');
        color: dt('togglebutton.disabled.color');
    }

    .p-togglebutton-label,
    .p-togglebutton-icon {
        position: relative;
        transition: none;
    }

    .p-togglebutton-icon {
        color: dt('togglebutton.icon.color');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
        color: dt('togglebutton.icon.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
        color: dt('togglebutton.icon.checked.color');
    }

    .p-togglebutton:disabled .p-togglebutton-icon {
        color: dt('togglebutton.icon.disabled.color');
    }

    .p-togglebutton-sm {
        padding: dt('togglebutton.sm.padding');
        font-size: dt('togglebutton.sm.font.size');
    }

    .p-togglebutton-sm .p-togglebutton-content {
        padding: dt('togglebutton.content.sm.padding');
    }

    .p-togglebutton-lg {
        padding: dt('togglebutton.lg.padding');
        font-size: dt('togglebutton.lg.font.size');
    }

    .p-togglebutton-lg .p-togglebutton-content {
        padding: dt('togglebutton.content.lg.padding');
    }

    .p-togglebutton-fluid {
        width: 100%;
    }
`;var fi=["icon"],gi=["content"],un=i=>({$implicit:i});function hi(i,o){i&1&&fe(0)}function bi(i,o){if(i&1&&y(0,"span"),i&2){let e=u(3);T(e.cn(e.cx("icon"),e.checked?e.onIcon:e.offIcon,e.iconPos==="left"?e.cx("iconLeft"):e.cx("iconRight"))),x("data-pc-section","icon")}}function _i(i,o){if(i&1&&z(0,bi,1,3,"span",1),i&2){let e=u(2);P(e.onIcon||e.offIcon?0:-1)}}function yi(i,o){i&1&&fe(0)}function xi(i,o){if(i&1&&C(0,yi,1,0,"ng-container",0),i&2){let e=u(2);d("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",ge(2,un,e.checked))}}function vi(i,o){if(i&1&&(z(0,_i,1,1)(1,xi,1,4,"ng-container"),p(2,"span"),L(3),m()),i&2){let e=u();P(e.iconTemplate?1:0),l(2),T(e.cx("label")),x("data-pc-section","label"),l(),mt(e.checked?e.hasOnLabel?e.onLabel:"\xA0":e.hasOffLabel?e.offLabel:"\xA0")}}var Ci=`
    ${sn}

    /* For PrimeNG (iconPos) */
    .p-togglebutton-icon-right {
        order: 1;
    }

    .p-togglebutton.ng-invalid.ng-dirty {
        border-color: dt('togglebutton.invalid.border.color');
    }
`,wi={root:({instance:i})=>["p-togglebutton p-component",{"p-togglebutton-checked":i.checked,"p-invalid":i.invalid(),"p-disabled":i.$disabled(),"p-togglebutton-sm p-inputfield-sm":i.size==="small","p-togglebutton-lg p-inputfield-lg":i.size==="large","p-togglebutton-fluid":i.fluid()}],content:"p-togglebutton-content",icon:"p-togglebutton-icon",iconLeft:"p-togglebutton-icon-left",iconRight:"p-togglebutton-icon-right",label:"p-togglebutton-label"},ln=(()=>{class i extends K{name="togglebutton";theme=Ci;classes=wi;static \u0275fac=(()=>{let e;return function(n){return(e||(e=I(i)))(n||i)}})();static \u0275prov=N({token:i,factory:i.\u0275fac})}return i})();var Ii={provide:le,useExisting:ie(()=>et),multi:!0},et=(()=>{class i extends me{onKeyDown(e){switch(e.code){case"Enter":this.toggle(e),e.preventDefault();break;case"Space":this.toggle(e),e.preventDefault();break}}toggle(e){!this.$disabled()&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.writeModelValue(this.checked),this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:e,checked:this.checked}),this.cd.markForCheck())}onLabel="Yes";offLabel="No";onIcon;offIcon;ariaLabel;ariaLabelledBy;styleClass;inputId;tabindex=0;iconPos="left";autofocus;size;allowEmpty;fluid=w(void 0,{transform:v});onChange=new R;iconTemplate;contentTemplate;templates;checked=!1;ngOnInit(){super.ngOnInit(),(this.checked===null||this.checked===void 0)&&(this.checked=!1)}_componentStyle=_(ln);onBlur(){this.onModelTouched()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.offLabel&&this.offLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"icon":this._iconTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}writeControlValue(e,t){this.checked=e,t(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=I(i)))(n||i)}})();static \u0275cmp=D({type:i,selectors:[["p-toggleButton"],["p-togglebutton"],["p-toggle-button"]],contentQueries:function(t,n,r){if(t&1&&(O(r,fi,4),O(r,gi,4),O(r,se,4)),t&2){let a;A(a=F())&&(n.iconTemplate=a.first),A(a=F())&&(n.contentTemplate=a.first),A(a=F())&&(n.templates=a)}},hostVars:7,hostBindings:function(t,n){t&1&&S("keydown",function(a){return n.onKeyDown(a)})("click",function(a){return n.toggle(a)}),t&2&&(x("aria-labelledby",n.ariaLabelledBy)("aria-label",n.ariaLabel)("aria-pressed",n.checked?"true":"false")("role","button")("tabindex",n.tabindex!==void 0?n.tabindex:n.$disabled()?-1:0),T(n.cn(n.cx("root"),n.styleClass)))},inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",te],iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",v],size:"size",allowEmpty:"allowEmpty",fluid:[1,"fluid"]},outputs:{onChange:"onChange"},features:[q([Ii,ln]),ut([St]),k],decls:3,vars:7,consts:[[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class"]],template:function(t,n){t&1&&(p(0,"span"),C(1,hi,1,0,"ng-container",0),z(2,vi,4,5),m()),t&2&&(T(n.cx("content")),l(),d("ngTemplateOutlet",n.contentTemplate||n._contentTemplate)("ngTemplateOutletContext",ge(5,un,n.checked)),l(),P(n.contentTemplate?-1:2))},dependencies:[G,ae,V],encapsulation:2,changeDetection:0})}return i})();var dn=`
    .p-selectbutton {
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        outline-color: transparent;
        border-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton {
        border-radius: 0;
        border-width: 1px 1px 1px 0;
    }

    .p-selectbutton .p-togglebutton:focus-visible {
        position: relative;
        z-index: 1;
    }

    .p-selectbutton .p-togglebutton:first-child {
        border-inline-start-width: 1px;
        border-start-start-radius: dt('selectbutton.border.radius');
        border-end-start-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton:last-child {
        border-start-end-radius: dt('selectbutton.border.radius');
        border-end-end-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton.p-invalid {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }

    .p-selectbutton-fluid {
        width: 100%;
    }
    
    .p-selectbutton-fluid .p-togglebutton {
        flex: 1 1 0;
    }
`;var Di=["item"],Si=(i,o)=>({$implicit:i,index:o});function Ti(i,o){return this.getOptionLabel(o)}function Li(i,o){i&1&&fe(0)}function Mi(i,o){if(i&1&&C(0,Li,1,0,"ng-container",3),i&2){let e=u(2),t=e.$implicit,n=e.$index,r=u();d("ngTemplateOutlet",r.itemTemplate||r._itemTemplate)("ngTemplateOutletContext",ft(2,Si,t,n))}}function Ni(i,o){i&1&&C(0,Mi,1,5,"ng-template",null,0,gt)}function ki(i,o){if(i&1){let e=j();p(0,"p-togglebutton",2),S("onChange",function(n){let r=g(e),a=r.$implicit,s=r.$index,c=u();return h(c.onOptionSelect(n,a,s))}),z(1,Ni,2,0),m()}if(i&2){let e=o.$implicit,t=u();d("autofocus",t.autofocus)("styleClass",t.styleClass)("ngModel",t.isSelected(e))("onLabel",t.getOptionLabel(e))("offLabel",t.getOptionLabel(e))("disabled",t.$disabled()||t.isOptionDisabled(e))("allowEmpty",t.getAllowEmpty())("size",t.size())("fluid",t.fluid()),l(),P(t.itemTemplate||t._itemTemplate?1:-1)}}var Bi=`
    ${dn}

    /* For PrimeNG */
    .p-selectbutton.ng-invalid.ng-dirty {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }
`,Ei={root:({instance:i})=>["p-selectbutton p-component",{"p-invalid":i.invalid(),"p-selectbutton-fluid":i.fluid()}]},cn=(()=>{class i extends K{name="selectbutton";theme=Bi;classes=Ei;static \u0275fac=(()=>{let e;return function(n){return(e||(e=I(i)))(n||i)}})();static \u0275prov=N({token:i,factory:i.\u0275fac})}return i})();var Vi={provide:le,useExisting:ie(()=>je),multi:!0},je=(()=>{class i extends me{options;optionLabel;optionValue;optionDisabled;get unselectable(){return this._unselectable}_unselectable=!1;set unselectable(e){this._unselectable=e,this.allowEmpty=!e}tabindex=0;multiple;allowEmpty=!0;styleClass;ariaLabelledBy;dataKey;autofocus;size=w();fluid=w(void 0,{transform:v});onOptionClick=new R;onChange=new R;itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;focusedIndex=0;_componentStyle=_(cn);getAllowEmpty(){return this.multiple?this.allowEmpty||this.value?.length!==1:this.allowEmpty}getOptionLabel(e){return this.optionLabel?De(e,this.optionLabel):e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?De(e,this.optionValue):this.optionLabel||e.value===void 0?e:e.value}isOptionDisabled(e){return this.optionDisabled?De(e,this.optionDisabled):e.disabled!==void 0?e.disabled:!1}onOptionSelect(e,t,n){if(this.$disabled()||this.isOptionDisabled(t))return;let r=this.isSelected(t);if(r&&this.unselectable)return;let a=this.getOptionValue(t),s;if(this.multiple)r?s=this.value.filter(c=>!he(c,a,this.equalityKey||void 0)):s=this.value?[...this.value,a]:[a];else{if(r&&!this.allowEmpty)return;s=r?null:a}this.focusedIndex=n,this.value=s,this.writeModelValue(this.value),this.onModelChange(this.value),this.onChange.emit({originalEvent:e,value:this.value}),this.onOptionClick.emit({originalEvent:e,option:t,index:n})}changeTabIndexes(e,t){let n,r;for(let a=0;a<=this.el.nativeElement.children.length-1;a++)this.el.nativeElement.children[a].getAttribute("tabindex")==="0"&&(n={elem:this.el.nativeElement.children[a],index:a});t==="prev"?n.index===0?r=this.el.nativeElement.children.length-1:r=n.index-1:n.index===this.el.nativeElement.children.length-1?r=0:r=n.index+1,this.focusedIndex=r,this.el.nativeElement.children[r].focus()}onFocus(e,t){this.focusedIndex=t}onBlur(){this.onModelTouched()}removeOption(e){this.value=this.value.filter(t=>!he(t,this.getOptionValue(e),this.dataKey))}isSelected(e){let t=!1,n=this.getOptionValue(e);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let r of this.value)if(he(r,n,this.dataKey)){t=!0;break}}}else t=he(this.getOptionValue(e),this.value,this.equalityKey||void 0);return t}templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break}})}writeControlValue(e,t){this.value=e,t(this.value),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=I(i)))(n||i)}})();static \u0275cmp=D({type:i,selectors:[["p-selectButton"],["p-selectbutton"],["p-select-button"]],contentQueries:function(t,n,r){if(t&1&&(O(r,Di,4),O(r,se,4)),t&2){let a;A(a=F())&&(n.itemTemplate=a.first),A(a=F())&&(n.templates=a)}},hostVars:6,hostBindings:function(t,n){t&2&&(x("role","group")("aria-labelledby",n.ariaLabelledBy)("data-pc-section","root")("data-pc-name","selectbutton"),T(n.cx("root")))},inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",unselectable:[2,"unselectable","unselectable",v],tabindex:[2,"tabindex","tabindex",te],multiple:[2,"multiple","multiple",v],allowEmpty:[2,"allowEmpty","allowEmpty",v],styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",dataKey:"dataKey",autofocus:[2,"autofocus","autofocus",v],size:[1,"size"],fluid:[1,"fluid"]},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[q([Vi,cn]),k],decls:2,vars:0,consts:[["content",""],[3,"autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size","fluid"],[3,"onChange","autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size","fluid"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,n){t&1&&ye(0,ki,2,10,"p-togglebutton",1,Ti,!0),t&2&&xe(n.options)},dependencies:[et,ke,ue,Ne,G,ae,V],encapsulation:2,changeDetection:0})}return i})(),pn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Z({type:i});static \u0275inj=W({imports:[je,V,V]})}return i})();var mn=["asc","desc","relevance"];var Ue=class i{searchQuery="";searchSort="relevance";sortOptions=mn.map(o=>({label:o,value:o}));searchCriteriaChanged=Ie();emitSearchCriteria(){this.searchCriteriaChanged.emit({query:this.searchQuery,sort:this.searchSort})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=D({type:i,selectors:[["app-search"]],outputs:{searchCriteriaChanged:"searchCriteriaChanged"},decls:6,vars:3,consts:[[1,"w-fit","flex","items-center","justify-center","flex-wrap","gap-2","md:gap-4"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search...","name","searchQuery",3,"ngModelChange","ngModel"],["name","searchSort","multiple","false",3,"ngModelChange","options","ngModel"]],template:function(e,t){e&1&&(p(0,"div",0)(1,"p-icon-field"),y(2,"p-inputIcon",1),p(3,"input",2),He("ngModelChange",function(r){return Qe(t.searchQuery,r)||(t.searchQuery=r),r}),S("ngModelChange",function(){return t.emitSearchCriteria()}),m()(),p(4,"p-icon-field")(5,"p-select-button",3),He("ngModelChange",function(r){return Qe(t.searchSort,r)||(t.searchSort=r),r}),S("ngModelChange",function(){return t.emitSearchCriteria()}),m()()()),e&2&&(l(3),Ke("ngModel",t.searchQuery),l(2),d("options",t.sortOptions),Ke("ngModel",t.searchSort))},dependencies:[on,Je,an,Xe,pn,je,ke,Me,ue,Ne,Be,de],encapsulation:2})};var Fi=i=>["/leads",i],$e=class i{lead=w.required();static \u0275fac=function(e){return new(e||i)};static \u0275cmp=D({type:i,selectors:[["app-lead-card"]],inputs:{lead:[1,"lead"]},decls:26,vars:16,consts:[["styleClass","group w-sm relative mb-7","tabindex","0"],[1,"h-20","mb-2"],[1,"flex","justify-between","items-start","max-h-0","overflow-hidden","group-focus-within:max-h-40","group-hover:max-h-40","transition-all","duration-300","ease-in"],[1,"w-3/5"],[1,"font-normal","text-sm","truncate"],[1,"font-light","text-sm","text-gray-600"],[1,"flex","flex-col","items-end","w-2/5"],[1,"mb-2"],[1,"pi","pi-wallet","text-primary"],[1,"pi","pi-file-edit","text-primary"],[1,"pi","pi-check-circle","text-primary"],[1,"text-end","text-xs","font-light","text-gray-500","block","max-h-10","group-hover:max-h-0","group-focus-within:max-h-0","overflow-hidden","transition-all","duration-300","ease-in-out"],[1,"flex","items-center","gap-2","absolute","group-focus-within:-bottom-6","right-0","-z-10","group-focus-within:z-10","text-sm","text-primary","hover:border-b","hover:border-primary","cursor-pointer","transition","duration-300","ease-in-out",3,"routerLink"],[1,"pi","pi-arrow-right"]],template:function(e,t){if(e&1&&(p(0,"p-card",0)(1,"p",1),L(2),m(),p(3,"div",2)(4,"div",3)(5,"p",4),L(6),m(),p(7,"p",5),L(8),m()(),p(9,"div",6)(10,"span",7),L(11),We(12,"currency"),y(13,"i",8),m(),p(14,"span",7),L(15),y(16,"i",9),m(),p(17,"span",7),L(18),y(19,"i",10),m()()(),p(20,"p",11),L(21),We(22,"date"),m(),p(23,"a",12),L(24," Detailed View "),y(25,"i",13),m()()),e&2){let n,r,a,s;l(2),ee(" ",t.lead().getTitle()," "),l(4),ee(" ",((n=t.lead().getContact())==null?null:n.getName())||"No Contact"," "),l(2),ee(" ",((r=t.lead().getContact())==null?null:r.getEmail())||((r=t.lead().getContact())==null?null:r.getPhone())||"No Contact Info"," "),l(3),ee(" ",Ze(12,8,t.lead().getValue(),"INR")||"-"," "),l(4),ee(" ",((a=t.lead().getNotes())==null?null:a.length)||0," "),l(3),ee(" ",((s=t.lead().getTasks())==null?null:s.length)||0," "),l(3),ee(" ",Ze(22,11,t.lead().getCreatedAt(),"mediumDate")," "),l(2),d("routerLink",ge(14,Fi,t.lead().getId()))}},dependencies:[At,Vt,vt,yt,xt],encapsulation:2})};function Oi(i,o){if(i&1&&y(0,"app-lead-card",3),i&2){let e=o.$implicit;d("lead",e)}}var tt=class i{searchCriteria=X({query:"",sort:"relevance"});refresh=X(Symbol());leadService=_(pe);leads=Et(Bt(this.refresh).pipe(rt(()=>this.leadService.getLeads(this.searchCriteria()))),{initialValue:[]});newLeads=Y(()=>this.leads().filter(o=>o.getStage()==="new"));contactedLeads=Y(()=>this.leads().filter(o=>o.getStage()==="contacted"));proposalLeads=Y(()=>this.leads().filter(o=>o.getStage()==="proposal"));closedLeads=Y(()=>this.leads().filter(o=>o.getStage()==="closed"));handleSearchCriteriaChanged(o){this.searchCriteria.set(o),this.refresh.set(Symbol())}handleCreatedNewLead(){this.refresh.set(Symbol())}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=D({type:i,selectors:[["app-leads"]],decls:5,vars:0,consts:[[1,"w-full","flex","justify-between","flex-wrap","items-center","gap-2","px-4","py-2"],[3,"searchCriteriaChanged"],[3,"createdNewLead"],[3,"lead"]],template:function(e,t){e&1&&(p(0,"div",0)(1,"app-search",1),S("searchCriteriaChanged",function(r){return t.handleSearchCriteriaChanged(r)}),m(),p(2,"app-new-lead",2),S("createdNewLead",function(){return t.handleCreatedNewLead()}),m()(),ye(3,Oi,1,1,"app-lead-card",3,dt)),e&2&&(l(3),xe(t.newLeads()))},dependencies:[Ue,Pe,$e],encapsulation:2})};export{tt as default};
