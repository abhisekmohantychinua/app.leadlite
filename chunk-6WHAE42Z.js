import{a as en,b as tn}from"./chunk-ZSCMS5IU.js";import{a as ce,b as Ee,c as Ce,d as qt,e as pe,f as Kt,g as Ve,h as Ht,i as Qt,j as Yt,k as Wt,l as Ae,m as Xt,n as Zt,o as me,p as Fe,q as Re,r as Jt}from"./chunk-HX7MSCY7.js";import{e as Be,i as Vt,j as At,k as Ft,l as Rt,m as Ot,n as Pt,o as Ut,q as zt,r as jt,s as Gt,t as $t}from"./chunk-FNDCS5VY.js";import{Aa as Q,Ca as ke,Da as Ne,Ea as Bt,Ga as Et,Ha as oe,b as St,d as Dt,e as Lt,ea as Nt,f as de,g as Tt,h as Mt,i as H,na as Me,oa as xe,q as kt,va as ue,wa as V}from"./chunk-W6KZRV7D.js";import{$a as te,$b as et,Ab as se,Ac as x,Bb as le,Bc as ie,Cb as ye,Db as A,Hb as b,Ib as u,Jb as De,Kb as Le,Lb as O,M as pt,Mb as _t,Na as l,Nb as F,Ob as R,Qb as yt,R as ae,Rb as vt,S as N,Sb as xt,T as X,Ta as gt,Wb as T,X as y,Xb as D,Yb as Te,Za as C,Zb as ne,_a as Z,_b as Je,a as dt,aa as f,ac as tt,b as ut,ba as g,bb as B,bc as K,ca as q,cb as ht,da as mt,db as I,dc as ve,ec as Ct,f as he,fb as U,gc as nt,ic as it,ja as ee,jc as wt,la as ft,ma as L,nb as w,ob as z,p as be,pb as j,pc as G,qb as bt,rb as we,sb as Ie,sc as P,tb as d,tc as v,u as ct,ub as c,uc as It,vb as p,wb as S,z as _e,zb as Se}from"./chunk-OHUCFFT6.js";var Oe=class o{id;lead;name;email;phone;company;createdAt;lastModifiedAt;constructor(i){this.id=i.id,this.name=i.name,this.email=i.email,this.phone=i.phone,this.company=i.company,this.createdAt=i.createdAt,this.lastModifiedAt=i.lastModifiedAt,"lead"in i?this.lead=i.lead:this.lead=null}getId(){return this.id}getLead(){return this.lead}setLead(i){this.lead=i}getName(){return this.name}setName(i){this.name=i}getEmail(){return this.email}setEmail(i){this.email=i}getPhone(){return this.phone}setPhone(i){this.phone=i}getCompany(){return this.company}setCompany(i){this.company=i}getCreatedAt(){return this.createdAt}setCreatedAt(i){this.createdAt=i}getLastModifiedAt(){return this.lastModifiedAt}setLastModifiedAt(i){this.lastModifiedAt=i}static toContactFromDao(i,e){let t=e?{id:i.id,lead:e,name:i.name,email:i.email,phone:i.phone,company:i.company,createdAt:i.createdAt,lastModifiedAt:i.lastModifiedAt}:{id:i.id,name:i.name,email:i.email,phone:i.phone,company:i.company,createdAt:i.createdAt,lastModifiedAt:i.lastModifiedAt};return new o(t)}static toDaoFromContact(i,e){if(i.getLead()===null&&!e)throw new Error("Cannot convert Contact to ContactDao without associated Lead");let t=i.getLead(),n=t?t.getId():e;return{id:i.getId(),leadId:n,name:i.getName(),email:i.getEmail(),phone:i.getPhone(),company:i.getCompany(),createdAt:i.getCreatedAt(),lastModifiedAt:i.getLastModifiedAt()}}};var fe=class o{id;title;stage;value;tags;notes;tasks;contact;createdAt;lastModifiedAt;constructor(i,e,t=[],n=[]){this.id=i.id,this.title=i.title,this.stage=i.stage,this.value=i.value,this.tags=i.tags,this.createdAt=i.createdAt,this.lastModifiedAt=i.lastModifiedAt,this.contact=e,this.notes=t,this.tasks=n}getId(){return this.id}getTitle(){return this.title}getStage(){return this.stage}getValue(){return this.value}getTags(){return this.tags}getNotes(){return this.notes}getTasks(){return this.tasks}getContact(){return this.contact}getCreatedAt(){return this.createdAt}getLastModifiedAt(){return this.lastModifiedAt}setId(i){this.id=i}setTitle(i){this.title=i}setStage(i){this.stage=i}setValue(i){this.value=i}setTags(i){this.tags=i}setNotes(i){this.notes=i}setTasks(i){this.tasks=i}setContact(i){this.contact=i}setCreatedAt(i){this.createdAt=i}setLastModifiedAt(i){this.lastModifiedAt=i}getShallowCopy(){return{id:this.id,title:this.title,stage:this.stage,value:this.value,tags:this.tags,createdAt:this.createdAt,lastModifiedAt:this.lastModifiedAt}}static toLeadFromDao(i){return new o({id:i.id,title:i.title,stage:i.stage,value:i.value,tags:i.tags,createdAt:i.createdAt,lastModifiedAt:i.lastModifiedAt})}static toDaoFromLead(i){return{id:i.getId(),title:i.getTitle(),stage:i.getStage(),value:i.getValue(),tags:i.getTags(),createdAt:i.getCreatedAt(),lastModifiedAt:i.getLastModifiedAt(),contactId:i.getContact()?.getId(),notes:i.getNotes()?.map(e=>e.getId()),tasks:i.getTasks()?.map(e=>e.getId())}}};var Pe=class o{id;lead;text;createdAt;constructor(i){this.id=i.id,this.text=i.text,this.createdAt=i.createdAt,this.lead="lead"in i?i.lead:null}getId(){return this.id}setId(i){this.id=i}getLead(){return this.lead}setLead(i){this.lead=i}getText(){return this.text}setText(i){this.text=i}getCreatedAt(){return this.createdAt}setCreatedAt(i){this.createdAt=i}static toNoteFromDao(i,e){let t=e?{id:i.id,text:i.text,createdAt:i.createdAt,lead:e}:{id:i.id,text:i.text,createdAt:i.createdAt};return new o(t)}static toDaoFromNote(i,e){let n=i.getLead()?.getId()??e;if(!n)throw new Error("Cannot convert Note to NoteDao without associated Lead");return{id:i.getId(),leadId:n,text:i.getText(),createdAt:i.getCreatedAt()}}};var Ue=class o{id;lead;title;dueDate;status;reminder;createdAt;constructor(i){this.id=i.id,this.title=i.title,this.dueDate=i.dueDate,this.status=i.status,this.reminder=i.reminder,this.createdAt=i.createdAt,"lead"in i?this.lead=i.lead:this.lead=null}getId(){return this.id}setId(i){this.id=i}getLead(){return this.lead}setLead(i){this.lead=i}getTitle(){return this.title}setTitle(i){this.title=i}getDueDate(){return this.dueDate}setDueDate(i){this.dueDate=i}getStatus(){return this.status}setStatus(i){this.status=i}getReminder(){return this.reminder}setReminder(i){this.reminder=i}getCreatedAt(){return this.createdAt}setCreatedAt(i){this.createdAt=i}static toTaskFromDao(i,e){let t=e?{id:i.id,lead:e,title:i.title,dueDate:i.dueDate,status:i.status,reminder:i.reminder,createdAt:i.createdAt}:{id:i.id,title:i.title,dueDate:i.dueDate,status:i.status,reminder:i.reminder,createdAt:i.createdAt};return new o(t)}static toDaoFromTask(i,e){if(i.getLead()===null&&!e)throw new Error("Cannot convert Task to TaskDao without associated Lead");let t=i.getLead(),n=t?t.getId():e;return{id:i.getId(),leadId:n,title:i.getTitle(),dueDate:i.getDueDate(),status:i.getStatus(),reminder:i.getReminder(),createdAt:i.getCreatedAt()}}};var ze=class o{contactDb;constructor(){let i=y(oe);this.contactDb=i.contacts}getContactDaosByIdsAsync(i){return this.contactDb.bulkGet(Array.from(i))}static \u0275fac=function(e){return new(e||o)};static \u0275prov=N({token:o,factory:o.\u0275fac,providedIn:"root"})};var je=class o{noteDb;constructor(){let i=y(oe);this.noteDb=i.notes}getNoteDaosByIdsAsync(i){return this.noteDb.bulkGet(Array.from(i))}static \u0275fac=function(e){return new(e||o)};static \u0275prov=N({token:o,factory:o.\u0275fac,providedIn:"root"})};var Ge=class o{taskDb;constructor(){let i=y(oe);this.taskDb=i.tasks}getTaskDaosByIdsAsync(i){return this.taskDb.bulkGet(Array.from(i))}static \u0275fac=function(e){return new(e||o)};static \u0275prov=N({token:o,factory:o.\u0275fac,providedIn:"root"})};var re=class o{leadDb;contactService;taskService;noteService;constructor(){let i=y(oe);this.leadDb=i.leads,this.contactService=y(ze),this.taskService=y(Ge),this.noteService=y(je)}getLeads(i){return _e(()=>be(this.getLeadsAsync(i)))}getLeadsAsync(i){return he(this,null,function*(){let e=new Set,t=new Set,n=new Set,r=new Map;return this.filterLeadsBasedOnCriteria(i).then(a=>this.processLeadDaoAndPopulateAndLoadContacts(a,r,e,t,n)).then(a=>this.hydrateLeadsWithContactsAndLoadTasks(a,r,t)).then(a=>this.hydrateLeadsWithTasksAndLoadNotes(a,r,n)).then(a=>this.hydrateLeadsWithNotes(a,r)).then(()=>Array.from(r.values()))})}filterLeadsBasedOnCriteria(i){return i.query.trim()===""&&i.sort==="asc"?this.leadDb.orderBy("createdAt").toArray():this.leadDb.where("title").startsWithIgnoreCase(i.query||"").sortBy("createdAt").then(e=>i.sort==="asc"?e:e.reverse())}processLeadDaoAndPopulateAndLoadContacts(i,e,t,n,r){return i.forEach(a=>{a.contactId&&t.add(a.contactId),a.tasks?.forEach(m=>n.add(m)),a.notes?.forEach(m=>r.add(m));let s=fe.toLeadFromDao(a);e.set(s.getId(),s)}),this.contactService.getContactDaosByIdsAsync(t)}hydrateLeadsWithContactsAndLoadTasks(i,e,t){return i.forEach(n=>{if(n){let r=Oe.toContactFromDao(n),a=n.leadId,s=e.get(a);s&&s.setContact(r)}}),this.taskService.getTaskDaosByIdsAsync(t)}hydrateLeadsWithTasksAndLoadNotes(i,e,t){return i.forEach(n=>{if(n){let r=Ue.toTaskFromDao(n),a=n.leadId,s=e.get(a);s&&s.getTasks()?.push(r)}}),this.noteService.getNoteDaosByIdsAsync(t)}hydrateLeadsWithNotes(i,e){i.forEach(t=>{if(t){let n=Pe.toNoteFromDao(t),r=t.leadId;if(r){let a=e.get(r);a&&a.getNotes()?.push(n)}}})}createLead(i){return _e(()=>be(this.createLeadAsync(i)))}createLeadAsync(i){return he(this,null,function*(){let e={id:Et(),title:i.title,value:i.value,stage:"new",tags:[],createdAt:new Date,lastModifiedAt:new Date},t=new fe(e);return yield this.leadDb.add(fe.toDaoFromLead(t)),t})}updateLeadStage(i,e){return _e(()=>be(this.updateLeadStageAsync(i,e))).pipe(ct(t=>{console.log(`Updated ${t} record(s)`)}))}updateLeadStageAsync(i,e){return he(this,null,function*(){return this.leadDb.update(i,{stage:e,lastModifiedAt:new Date})})}deleteLead(i){return _e(()=>be(this.deleteLeadAsync(i)))}deleteLeadAsync(i){return he(this,null,function*(){return this.leadDb.delete(i)})}static \u0275fac=function(e){return new(e||o)};static \u0275prov=N({token:o,factory:o.\u0275fac,providedIn:"root"})};var In=["data-p-icon","angle-down"],nn=(()=>{class o extends Ne{static \u0275fac=(()=>{let e;return function(n){return(e||(e=L(o)))(n||o)}})();static \u0275cmp=C({type:o,selectors:[["","data-p-icon","angle-down"]],features:[B],attrs:In,decls:1,vars:0,consts:[["d","M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z","fill","currentColor"]],template:function(t,n){t&1&&(q(),Se(0,"path",0))},encapsulation:2})}return o})();var Sn=["data-p-icon","angle-up"],on=(()=>{class o extends Ne{static \u0275fac=(()=>{let e;return function(n){return(e||(e=L(o)))(n||o)}})();static \u0275cmp=C({type:o,selectors:[["","data-p-icon","angle-up"]],features:[B],attrs:Sn,decls:1,vars:0,consts:[["d","M10.4134 9.49931C10.3148 9.49977 10.2172 9.48055 10.1262 9.44278C10.0352 9.405 9.95263 9.34942 9.88338 9.27931L6.88338 6.27931L3.88338 9.27931C3.73811 9.34946 3.57409 9.3709 3.41567 9.34044C3.25724 9.30999 3.11286 9.22926 3.00395 9.11025C2.89504 8.99124 2.82741 8.84028 2.8111 8.67978C2.79478 8.51928 2.83065 8.35781 2.91338 8.21931L6.41338 4.71931C6.55401 4.57886 6.74463 4.49997 6.94338 4.49997C7.14213 4.49997 7.33276 4.57886 7.47338 4.71931L10.9734 8.21931C11.1138 8.35994 11.1927 8.55056 11.1927 8.74931C11.1927 8.94806 11.1138 9.13868 10.9734 9.27931C10.9007 9.35315 10.8132 9.41089 10.7168 9.44879C10.6203 9.48669 10.5169 9.5039 10.4134 9.49931Z","fill","currentColor"]],template:function(t,n){t&1&&(q(),Se(0,"path",0))},encapsulation:2})}return o})();var ge=(()=>{class o extends Zt{required=v(void 0,{transform:x});invalid=v(void 0,{transform:x});disabled=v(void 0,{transform:x});name=v();_disabled=ee(!1);$disabled=G(()=>this.disabled()||this._disabled());onModelChange=()=>{};onModelTouched=()=>{};writeDisabledState(e){this._disabled.set(e)}writeControlValue(e,t){}writeValue(e){this.writeControlValue(e,this.writeModelValue.bind(this))}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.writeDisabledState(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=L(o)))(n||o)}})();static \u0275dir=te({type:o,inputs:{required:[1,"required"],invalid:[1,"invalid"],disabled:[1,"disabled"],name:[1,"name"]},features:[B]})}return o})();var rn=(()=>{class o extends ge{pcFluid=y(Vt,{optional:!0,host:!0,skipSelf:!0});fluid=v(void 0,{transform:x});variant=v();size=v();inputSize=v();pattern=v();min=v();max=v();step=v();minlength=v();maxlength=v();$variant=G(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());get hasFluid(){return this.fluid()??!!this.pcFluid}static \u0275fac=(()=>{let e;return function(n){return(e||(e=L(o)))(n||o)}})();static \u0275dir=te({type:o,inputs:{fluid:[1,"fluid"],variant:[1,"variant"],size:[1,"size"],inputSize:[1,"inputSize"],pattern:[1,"pattern"],min:[1,"min"],max:[1,"max"],step:[1,"step"],minlength:[1,"minlength"],maxlength:[1,"maxlength"]},features:[B]})}return o})();var an=`
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
`;var Dn=["clearicon"],Ln=["incrementbuttonicon"],Tn=["decrementbuttonicon"],Mn=["input"];function kn(o,i){if(o&1){let e=A();q(),c(0,"svg",7),b("click",function(){f(e);let n=u(2);return g(n.clear())}),p()}if(o&2){let e=u(2);T(e.cx("clearIcon")),w("data-pc-section","clearIcon")}}function Nn(o,i){}function Bn(o,i){o&1&&I(0,Nn,0,0,"ng-template")}function En(o,i){if(o&1){let e=A();c(0,"span",8),b("click",function(){f(e);let n=u(2);return g(n.clear())}),I(1,Bn,1,0,null,9),p()}if(o&2){let e=u(2);T(e.cx("clearIcon")),w("data-pc-section","clearIcon"),l(),d("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function Vn(o,i){if(o&1&&(se(0),I(1,kn,1,3,"svg",5)(2,En,2,4,"span",6),le()),o&2){let e=u();l(),d("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),l(),d("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function An(o,i){if(o&1&&S(0,"span",12),o&2){let e=u(2);d("ngClass",e.incrementButtonIcon),w("data-pc-section","incrementbuttonicon")}}function Fn(o,i){o&1&&(q(),S(0,"svg",14)),o&2&&w("data-pc-section","incrementbuttonicon")}function Rn(o,i){}function On(o,i){o&1&&I(0,Rn,0,0,"ng-template")}function Pn(o,i){if(o&1&&(se(0),I(1,Fn,1,1,"svg",13)(2,On,1,0,null,9),le()),o&2){let e=u(2);l(),d("ngIf",!e.incrementButtonIconTemplate&&!e._incrementButtonIconTemplate),l(),d("ngTemplateOutlet",e.incrementButtonIconTemplate||e._incrementButtonIconTemplate)}}function Un(o,i){if(o&1&&S(0,"span",12),o&2){let e=u(2);d("ngClass",e.decrementButtonIcon),w("data-pc-section","decrementbuttonicon")}}function zn(o,i){o&1&&(q(),S(0,"svg",16)),o&2&&w("data-pc-section","decrementbuttonicon")}function jn(o,i){}function Gn(o,i){o&1&&I(0,jn,0,0,"ng-template")}function $n(o,i){if(o&1&&(se(0),I(1,zn,1,1,"svg",15)(2,Gn,1,0,null,9),le()),o&2){let e=u(2);l(),d("ngIf",!e.decrementButtonIconTemplate&&!e._decrementButtonIconTemplate),l(),d("ngTemplateOutlet",e.decrementButtonIconTemplate||e._decrementButtonIconTemplate)}}function qn(o,i){if(o&1){let e=A();c(0,"span")(1,"button",10),b("mousedown",function(n){f(e);let r=u();return g(r.onUpButtonMouseDown(n))})("mouseup",function(){f(e);let n=u();return g(n.onUpButtonMouseUp())})("mouseleave",function(){f(e);let n=u();return g(n.onUpButtonMouseLeave())})("keydown",function(n){f(e);let r=u();return g(r.onUpButtonKeyDown(n))})("keyup",function(){f(e);let n=u();return g(n.onUpButtonKeyUp())}),I(2,An,1,2,"span",11)(3,Pn,3,2,"ng-container",2),p(),c(4,"button",10),b("mousedown",function(n){f(e);let r=u();return g(r.onDownButtonMouseDown(n))})("mouseup",function(){f(e);let n=u();return g(n.onDownButtonMouseUp())})("mouseleave",function(){f(e);let n=u();return g(n.onDownButtonMouseLeave())})("keydown",function(n){f(e);let r=u();return g(r.onDownButtonKeyDown(n))})("keyup",function(){f(e);let n=u();return g(n.onDownButtonKeyUp())}),I(5,Un,1,2,"span",11)(6,$n,3,2,"ng-container",2),p()()}if(o&2){let e=u();T(e.cx("buttonGroup")),w("data-pc-section","buttonGroup"),l(),T(e.cn(e.cx("incrementButton"),e.incrementButtonClass)),w("disabled",e.$disabled()?"":void 0)("aria-hidden",!0)("data-pc-section","incrementbutton"),l(),d("ngIf",e.incrementButtonIcon),l(),d("ngIf",!e.incrementButtonIcon),l(),T(e.cn(e.cx("decrementButton"),e.decrementButtonClass)),w("disabled",e.$disabled()?"":void 0)("aria-hidden",!0)("data-pc-section","decrementbutton"),l(),d("ngIf",e.decrementButtonIcon),l(),d("ngIf",!e.decrementButtonIcon)}}function Kn(o,i){if(o&1&&S(0,"span",12),o&2){let e=u(2);d("ngClass",e.incrementButtonIcon),w("data-pc-section","incrementbuttonicon")}}function Hn(o,i){o&1&&(q(),S(0,"svg",14)),o&2&&w("data-pc-section","incrementbuttonicon")}function Qn(o,i){}function Yn(o,i){o&1&&I(0,Qn,0,0,"ng-template")}function Wn(o,i){if(o&1&&(se(0),I(1,Hn,1,1,"svg",13)(2,Yn,1,0,null,9),le()),o&2){let e=u(2);l(),d("ngIf",!e.incrementButtonIconTemplate&&!e._incrementButtonIconTemplate),l(),d("ngTemplateOutlet",e.incrementButtonIconTemplate||e._incrementButtonIconTemplate)}}function Xn(o,i){if(o&1){let e=A();c(0,"button",10),b("mousedown",function(n){f(e);let r=u();return g(r.onUpButtonMouseDown(n))})("mouseup",function(){f(e);let n=u();return g(n.onUpButtonMouseUp())})("mouseleave",function(){f(e);let n=u();return g(n.onUpButtonMouseLeave())})("keydown",function(n){f(e);let r=u();return g(r.onUpButtonKeyDown(n))})("keyup",function(){f(e);let n=u();return g(n.onUpButtonKeyUp())}),I(1,Kn,1,2,"span",11)(2,Wn,3,2,"ng-container",2),p()}if(o&2){let e=u();T(e.cn(e.cx("incrementButton"),e.incrementButtonClass)),w("disabled",e.$disabled()?"":void 0)("aria-hidden",!0)("data-pc-section","incrementbutton"),l(),d("ngIf",e.incrementButtonIcon),l(),d("ngIf",!e.incrementButtonIcon)}}function Zn(o,i){if(o&1&&S(0,"span",12),o&2){let e=u(2);d("ngClass",e.decrementButtonIcon),w("data-pc-section","decrementbuttonicon")}}function Jn(o,i){o&1&&(q(),S(0,"svg",16)),o&2&&w("data-pc-section","decrementbuttonicon")}function ei(o,i){}function ti(o,i){o&1&&I(0,ei,0,0,"ng-template")}function ni(o,i){if(o&1&&(se(0),I(1,Jn,1,1,"svg",15)(2,ti,1,0,null,9),le()),o&2){let e=u(2);l(),d("ngIf",!e.decrementButtonIconTemplate&&!e._decrementButtonIconTemplate),l(),d("ngTemplateOutlet",e.decrementButtonIconTemplate||e._decrementButtonIconTemplate)}}function ii(o,i){if(o&1){let e=A();c(0,"button",10),b("mousedown",function(n){f(e);let r=u();return g(r.onDownButtonMouseDown(n))})("mouseup",function(){f(e);let n=u();return g(n.onDownButtonMouseUp())})("mouseleave",function(){f(e);let n=u();return g(n.onDownButtonMouseLeave())})("keydown",function(n){f(e);let r=u();return g(r.onDownButtonKeyDown(n))})("keyup",function(){f(e);let n=u();return g(n.onDownButtonKeyUp())}),I(1,Zn,1,2,"span",11)(2,ni,3,2,"ng-container",2),p()}if(o&2){let e=u();T(e.cn(e.cx("decrementButton"),e.decrementButtonClass)),w("disabled",e.$disabled()?"":void 0)("aria-hidden",!0)("data-pc-section","decrementbutton"),l(),d("ngIf",e.decrementButtonIcon),l(),d("ngIf",!e.decrementButtonIcon)}}var oi=`
    ${an}

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
`,ri={root:({instance:o})=>["p-inputnumber p-component p-inputwrapper",{"p-inputwrapper-filled":o.$filled()||o.allowEmpty===!1,"p-inputwrapper-focus":o.focused,"p-inputnumber-stacked":o.showButtons&&o.buttonLayout==="stacked","p-inputnumber-horizontal":o.showButtons&&o.buttonLayout==="horizontal","p-inputnumber-vertical":o.showButtons&&o.buttonLayout==="vertical","p-inputnumber-fluid":o.hasFluid,"p-invalid":o.invalid()}],pcInputText:"p-inputnumber-input",buttonGroup:"p-inputnumber-button-group",incrementButton:({instance:o})=>["p-inputnumber-button p-inputnumber-increment-button",{"p-disabled":o.showButtons&&o.max()!=null&&o.maxlength()}],decrementButton:({instance:o})=>["p-inputnumber-button p-inputnumber-decrement-button",{"p-disabled":o.showButtons&&o.min()!=null&&o.minlength()}],clearIcon:"p-inputnumber-clear-icon"},sn=(()=>{class o extends Q{name="inputnumber";theme=oi;classes=ri;static \u0275fac=(()=>{let e;return function(n){return(e||(e=L(o)))(n||o)}})();static \u0275prov=N({token:o,factory:o.\u0275fac})}return o})();var ai={provide:ce,useExisting:ae(()=>$e),multi:!0},$e=(()=>{class o extends rn{injector;showButtons=!1;format=!0;buttonLayout="stacked";inputId;styleClass;placeholder;tabindex;title;ariaLabelledBy;ariaDescribedBy;ariaLabel;ariaRequired;autocomplete;incrementButtonClass;decrementButtonClass;incrementButtonIcon;decrementButtonIcon;readonly;allowEmpty=!0;locale;localeMatcher;mode="decimal";currency;currencyDisplay;useGrouping=!0;minFractionDigits;maxFractionDigits;prefix;suffix;inputStyle;inputStyleClass;showClear=!1;autofocus;onInput=new U;onFocus=new U;onBlur=new U;onKeyDown=new U;onClear=new U;clearIconTemplate;incrementButtonIconTemplate;decrementButtonIconTemplate;templates;input;_clearIconTemplate;_incrementButtonIconTemplate;_decrementButtonIconTemplate;value;focused;initialized;groupChar="";prefixChar="";suffixChar="";isSpecialChar;timer;lastValue;_numeral;numberFormat;_decimal;_decimalChar="";_group;_minusSign;_currency;_prefix;_suffix;_index;_componentStyle=y(sn);ngControl=null;constructor(e){super(),this.injector=e}ngOnChanges(e){super.ngOnChanges(e),["locale","localeMatcher","mode","currency","currencyDisplay","useGrouping","minFractionDigits","maxFractionDigits","prefix","suffix"].some(n=>!!e[n])&&this.updateConstructParser()}ngOnInit(){super.ngOnInit(),this.ngControl=this.injector.get(qt,null,{optional:!0}),this.constructParser(),this.initialized=!0}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"clearicon":this._clearIconTemplate=e.template;break;case"incrementbuttonicon":this._incrementButtonIconTemplate=e.template;break;case"decrementbuttonicon":this._decrementButtonIconTemplate=e.template;break}})}getOptions(){let e=(a,s,m)=>{if(!(a==null||isNaN(a)||!isFinite(a)))return Math.max(s,Math.min(m,Math.floor(a)))},t=e(this.minFractionDigits,0,20),n=e(this.maxFractionDigits,0,100),r=t!=null&&n!=null&&t>n?n:t;return{localeMatcher:this.localeMatcher,style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:this.useGrouping,minimumFractionDigits:r,maximumFractionDigits:n}}constructParser(){let e=this.getOptions(),t=Object.fromEntries(Object.entries(e).filter(([a,s])=>s!==void 0));this.numberFormat=new Intl.NumberFormat(this.locale,t);let n=[...new Intl.NumberFormat(this.locale,{useGrouping:!1}).format(9876543210)].reverse(),r=new Map(n.map((a,s)=>[a,s]));this._numeral=new RegExp(`[${n.join("")}]`,"g"),this._group=this.getGroupingExpression(),this._minusSign=this.getMinusSignExpression(),this._currency=this.getCurrencyExpression(),this._decimal=this.getDecimalExpression(),this._decimalChar=this.getDecimalChar(),this._suffix=this.getSuffixExpression(),this._prefix=this.getPrefixExpression(),this._index=a=>r.get(a)}updateConstructParser(){this.initialized&&this.constructParser()}escapeRegExp(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}getDecimalExpression(){let e=this.getDecimalChar();return new RegExp(`[${e}]`,"g")}getDecimalChar(){return new Intl.NumberFormat(this.locale,ut(dt({},this.getOptions()),{useGrouping:!1})).format(1.1).replace(this._currency,"").trim().replace(this._numeral,"")}getGroupingExpression(){let e=new Intl.NumberFormat(this.locale,{useGrouping:!0});return this.groupChar=e.format(1e6).trim().replace(this._numeral,"").charAt(0),new RegExp(`[${this.groupChar}]`,"g")}getMinusSignExpression(){let e=new Intl.NumberFormat(this.locale,{useGrouping:!1});return new RegExp(`[${e.format(-1).trim().replace(this._numeral,"")}]`,"g")}getCurrencyExpression(){if(this.currency){let e=new Intl.NumberFormat(this.locale,{style:"currency",currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});return new RegExp(`[${e.format(1).replace(/\s/g,"").replace(this._numeral,"").replace(this._group,"")}]`,"g")}return new RegExp("[]","g")}getPrefixExpression(){if(this.prefix)this.prefixChar=this.prefix;else{let e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay});this.prefixChar=e.format(1).split("1")[0]}return new RegExp(`${this.escapeRegExp(this.prefixChar||"")}`,"g")}getSuffixExpression(){if(this.suffix)this.suffixChar=this.suffix;else{let e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});this.suffixChar=e.format(1).split("1")[1]}return new RegExp(`${this.escapeRegExp(this.suffixChar||"")}`,"g")}formatValue(e){if(e!=null){if(e==="-")return e;if(this.format){let n=new Intl.NumberFormat(this.locale,this.getOptions()).format(e);return this.prefix&&e!=this.prefix&&(n=this.prefix+n),this.suffix&&e!=this.suffix&&(n=n+this.suffix),n}return e.toString()}return""}parseValue(e){let t=this._suffix?new RegExp(this._suffix,""):/(?:)/,n=this._prefix?new RegExp(this._prefix,""):/(?:)/,r=this._currency?new RegExp(this._currency,""):/(?:)/,a=e.replace(t,"").replace(n,"").trim().replace(/\s/g,"").replace(r,"").replace(this._group,"").replace(this._minusSign,"-").replace(this._decimal,".").replace(this._numeral,this._index);if(a){if(a==="-")return a;let s=+a;return isNaN(s)?null:s}return null}repeat(e,t,n){if(this.readonly)return;let r=t||500;this.clearTimer(),this.timer=setTimeout(()=>{this.repeat(e,40,n)},r),this.spin(e,n)}spin(e,t){let n=(this.step()??1)*t,r=this.parseValue(this.input?.nativeElement.value)||0,a=this.validateValue(r+n),s=this.maxlength();s&&s<this.formatValue(a).length||(this.updateInput(a,null,"spin",null),this.updateModel(e,a),this.handleOnInput(e,r,a))}clear(){this.value=null,this.onModelChange(this.value),this.onClear.emit()}onUpButtonMouseDown(e){if(e.button===2){this.clearTimer();return}this.$disabled()||(this.input?.nativeElement.focus(),this.repeat(e,null,1),e.preventDefault())}onUpButtonMouseUp(){this.$disabled()||this.clearTimer()}onUpButtonMouseLeave(){this.$disabled()||this.clearTimer()}onUpButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,1)}onUpButtonKeyUp(){this.$disabled()||this.clearTimer()}onDownButtonMouseDown(e){if(e.button===2){this.clearTimer();return}this.$disabled()||(this.input?.nativeElement.focus(),this.repeat(e,null,-1),e.preventDefault())}onDownButtonMouseUp(){this.$disabled()||this.clearTimer()}onDownButtonMouseLeave(){this.$disabled()||this.clearTimer()}onDownButtonKeyUp(){this.$disabled()||this.clearTimer()}onDownButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,-1)}onUserInput(e){this.readonly||(this.isSpecialChar&&(e.target.value=this.lastValue),this.isSpecialChar=!1)}onInputKeyDown(e){if(this.readonly)return;if(this.lastValue=e.target.value,e.shiftKey||e.altKey){this.isSpecialChar=!0;return}let t=e.target.selectionStart,n=e.target.selectionEnd,r=e.target.value,a=null;switch(e.altKey&&e.preventDefault(),e.key){case"ArrowUp":this.spin(e,1),e.preventDefault();break;case"ArrowDown":this.spin(e,-1),e.preventDefault();break;case"ArrowLeft":for(let s=t;s<=r.length;s++){let m=s===0?0:s-1;if(this.isNumeralChar(r.charAt(m))){this.input.nativeElement.setSelectionRange(s,s);break}}break;case"ArrowRight":for(let s=n;s>=0;s--)if(this.isNumeralChar(r.charAt(s))){this.input.nativeElement.setSelectionRange(s,s);break}break;case"Tab":case"Enter":a=this.validateValue(this.parseValue(this.input.nativeElement.value)),this.input.nativeElement.value=this.formatValue(a),this.input.nativeElement.setAttribute("aria-valuenow",a),this.updateModel(e,a);break;case"Backspace":{if(e.preventDefault(),t===n){if(t==1&&this.prefix||t==r.length&&this.suffix)break;let s=r.charAt(t-1),{decimalCharIndex:m,decimalCharIndexWithoutPrefix:_}=this.getDecimalCharIndexes(r);if(this.isNumeralChar(s)){let h=this.getDecimalLength(r);if(this._group.test(s))this._group.lastIndex=0,a=r.slice(0,t-2)+r.slice(t-1);else if(this._decimal.test(s))this._decimal.lastIndex=0,h?this.input?.nativeElement.setSelectionRange(t-1,t-1):a=r.slice(0,t-1)+r.slice(t);else if(m>0&&t>m){let E=this.isDecimalMode()&&(this.minFractionDigits||0)<h?"":"0";a=r.slice(0,t-1)+E+r.slice(t)}else _===1?(a=r.slice(0,t-1)+"0"+r.slice(t),a=this.parseValue(a)>0?a:""):a=r.slice(0,t-1)+r.slice(t)}else this.mode==="currency"&&this._currency&&s.search(this._currency)!=-1&&(a=r.slice(1));this.updateValue(e,a,null,"delete-single")}else a=this.deleteRange(r,t,n),this.updateValue(e,a,null,"delete-range");break}case"Delete":if(e.preventDefault(),t===n){if(t==0&&this.prefix||t==r.length-1&&this.suffix)break;let s=r.charAt(t),{decimalCharIndex:m,decimalCharIndexWithoutPrefix:_}=this.getDecimalCharIndexes(r);if(this.isNumeralChar(s)){let h=this.getDecimalLength(r);if(this._group.test(s))this._group.lastIndex=0,a=r.slice(0,t)+r.slice(t+2);else if(this._decimal.test(s))this._decimal.lastIndex=0,h?this.input?.nativeElement.setSelectionRange(t+1,t+1):a=r.slice(0,t)+r.slice(t+1);else if(m>0&&t>m){let E=this.isDecimalMode()&&(this.minFractionDigits||0)<h?"":"0";a=r.slice(0,t)+E+r.slice(t+1)}else _===1?(a=r.slice(0,t)+"0"+r.slice(t+1),a=this.parseValue(a)>0?a:""):a=r.slice(0,t)+r.slice(t+1)}this.updateValue(e,a,null,"delete-back-single")}else a=this.deleteRange(r,t,n),this.updateValue(e,a,null,"delete-range");break;case"Home":this.min()&&(this.updateModel(e,this.min()),e.preventDefault());break;case"End":this.max()&&(this.updateModel(e,this.max()),e.preventDefault());break;default:break}this.onKeyDown.emit(e)}onInputKeyPress(e){if(this.readonly)return;let t=e.which||e.keyCode,n=String.fromCharCode(t),r=this.isDecimalSign(n),a=this.isMinusSign(n);t!=13&&e.preventDefault(),!r&&e.code==="NumpadDecimal"&&(r=!0,n=this._decimalChar,t=n.charCodeAt(0));let{value:s,selectionStart:m,selectionEnd:_}=this.input.nativeElement,h=this.parseValue(s+n),E=h!=null?h.toString():"",J=s.substring(m,_),M=this.parseValue(J),Y=M!=null?M.toString():"";if(m!==_&&Y.length>0){this.insert(e,n,{isDecimalSign:r,isMinusSign:a});return}let $=this.maxlength();$&&E.length>$||(48<=t&&t<=57||a||r)&&this.insert(e,n,{isDecimalSign:r,isMinusSign:a})}onPaste(e){if(!this.$disabled()&&!this.readonly){e.preventDefault();let t=(e.clipboardData||this.document.defaultView.clipboardData).getData("Text");if(this.inputId==="integeronly"&&/[^\d-]/.test(t))return;if(t){this.maxlength()&&(t=t.toString().substring(0,this.maxlength()));let n=this.parseValue(t);n!=null&&this.insert(e,n.toString())}}}allowMinusSign(){let e=this.min();return e==null||e<0}isMinusSign(e){return this._minusSign.test(e)||e==="-"?(this._minusSign.lastIndex=0,!0):!1}isDecimalSign(e){return this._decimal.test(e)?(this._decimal.lastIndex=0,!0):!1}isDecimalMode(){return this.mode==="decimal"}getDecimalCharIndexes(e){let t=e.search(this._decimal);this._decimal.lastIndex=0;let r=e.replace(this._prefix,"").trim().replace(/\s/g,"").replace(this._currency,"").search(this._decimal);return this._decimal.lastIndex=0,{decimalCharIndex:t,decimalCharIndexWithoutPrefix:r}}getCharIndexes(e){let t=e.search(this._decimal);this._decimal.lastIndex=0;let n=e.search(this._minusSign);this._minusSign.lastIndex=0;let r=e.search(this._suffix);this._suffix.lastIndex=0;let a=e.search(this._currency);return this._currency.lastIndex=0,{decimalCharIndex:t,minusCharIndex:n,suffixCharIndex:r,currencyCharIndex:a}}insert(e,t,n={isDecimalSign:!1,isMinusSign:!1}){let r=t.search(this._minusSign);if(this._minusSign.lastIndex=0,!this.allowMinusSign()&&r!==-1)return;let a=this.input?.nativeElement.selectionStart,s=this.input?.nativeElement.selectionEnd,m=this.input?.nativeElement.value.trim(),{decimalCharIndex:_,minusCharIndex:h,suffixCharIndex:E,currencyCharIndex:J}=this.getCharIndexes(m),M;if(n.isMinusSign)a===0&&(M=m,(h===-1||s!==0)&&(M=this.insertText(m,t,0,s)),this.updateValue(e,M,t,"insert"));else if(n.isDecimalSign)_>0&&a===_?this.updateValue(e,m,t,"insert"):_>a&&_<s?(M=this.insertText(m,t,a,s),this.updateValue(e,M,t,"insert")):_===-1&&this.maxFractionDigits&&(M=this.insertText(m,t,a,s),this.updateValue(e,M,t,"insert"));else{let Y=this.numberFormat.resolvedOptions().maximumFractionDigits,$=a!==s?"range-insert":"insert";if(_>0&&a>_){if(a+t.length-(_+1)<=Y){let W=J>=a?J-1:E>=a?E:m.length;M=m.slice(0,a)+t+m.slice(a+t.length,W)+m.slice(W),this.updateValue(e,M,t,$)}}else M=this.insertText(m,t,a,s),this.updateValue(e,M,t,$)}}insertText(e,t,n,r){if((t==="."?t:t.split(".")).length===2){let s=e.slice(n,r).search(this._decimal);return this._decimal.lastIndex=0,s>0?e.slice(0,n)+this.formatValue(t)+e.slice(r):e||this.formatValue(t)}else return r-n===e.length?this.formatValue(t):n===0?t+e.slice(r):r===e.length?e.slice(0,n)+t:e.slice(0,n)+t+e.slice(r)}deleteRange(e,t,n){let r;return n-t===e.length?r="":t===0?r=e.slice(n):n===e.length?r=e.slice(0,t):r=e.slice(0,t)+e.slice(n),r}initCursor(){let e=this.input?.nativeElement.selectionStart,t=this.input?.nativeElement.selectionEnd,n=this.input?.nativeElement.value,r=n.length,a=null,s=(this.prefixChar||"").length;n=n.replace(this._prefix,""),(e===t||e!==0||t<s)&&(e-=s);let m=n.charAt(e);if(this.isNumeralChar(m))return e+s;let _=e-1;for(;_>=0;)if(m=n.charAt(_),this.isNumeralChar(m)){a=_+s;break}else _--;if(a!==null)this.input?.nativeElement.setSelectionRange(a+1,a+1);else{for(_=e;_<r;)if(m=n.charAt(_),this.isNumeralChar(m)){a=_+s;break}else _++;a!==null&&this.input?.nativeElement.setSelectionRange(a,a)}return a||0}onInputClick(){let e=this.input?.nativeElement.value;!this.readonly&&e!==Nt()&&this.initCursor()}isNumeralChar(e){return e.length===1&&(this._numeral.test(e)||this._decimal.test(e)||this._group.test(e)||this._minusSign.test(e))?(this.resetRegex(),!0):!1}resetRegex(){this._numeral.lastIndex=0,this._decimal.lastIndex=0,this._group.lastIndex=0,this._minusSign.lastIndex=0}updateValue(e,t,n,r){let a=this.input?.nativeElement.value,s=null;t!=null&&(s=this.parseValue(t),s=!s&&!this.allowEmpty?0:s,this.updateInput(s,n,r,t),this.handleOnInput(e,a,s))}handleOnInput(e,t,n){this.isValueChanged(t,n)&&(this.input.nativeElement.value=this.formatValue(n),this.input?.nativeElement.setAttribute("aria-valuenow",n),this.updateModel(e,n),this.onInput.emit({originalEvent:e,value:n,formattedValue:t}))}isValueChanged(e,t){if(t===null&&e!==null)return!0;if(t!=null){let n=typeof e=="string"?this.parseValue(e):e;return t!==n}return!1}validateValue(e){if(e==="-"||e==null)return null;let t=this.min(),n=this.max();return t!=null&&e<t?this.min():n!=null&&e>n?n:e}updateInput(e,t,n,r){t=t||"";let a=this.input?.nativeElement.value,s=this.formatValue(e),m=a.length;if(s!==r&&(s=this.concatValues(s,r)),m===0){this.input.nativeElement.value=s,this.input.nativeElement.setSelectionRange(0,0);let h=this.initCursor()+t.length;this.input.nativeElement.setSelectionRange(h,h)}else{let _=this.input.nativeElement.selectionStart,h=this.input.nativeElement.selectionEnd,E=this.maxlength();if(E&&s.length>E&&(s=s.slice(0,E),_=Math.min(_,E),h=Math.min(h,E)),E&&E<s.length)return;this.input.nativeElement.value=s;let J=s.length;if(n==="range-insert"){let M=this.parseValue((a||"").slice(0,_)),$=(M!==null?M.toString():"").split("").join(`(${this.groupChar})?`),W=new RegExp($,"g");W.test(s);let wn=t.split("").join(`(${this.groupChar})?`),lt=new RegExp(wn,"g");lt.test(s.slice(W.lastIndex)),h=W.lastIndex+lt.lastIndex,this.input.nativeElement.setSelectionRange(h,h)}else if(J===m)n==="insert"||n==="delete-back-single"?this.input.nativeElement.setSelectionRange(h+1,h+1):n==="delete-single"?this.input.nativeElement.setSelectionRange(h-1,h-1):(n==="delete-range"||n==="spin")&&this.input.nativeElement.setSelectionRange(h,h);else if(n==="delete-back-single"){let M=a.charAt(h-1),Y=a.charAt(h),$=m-J,W=this._group.test(Y);W&&$===1?h+=1:!W&&this.isNumeralChar(M)&&(h+=-1*$+1),this._group.lastIndex=0,this.input.nativeElement.setSelectionRange(h,h)}else if(a==="-"&&n==="insert"){this.input.nativeElement.setSelectionRange(0,0);let Y=this.initCursor()+t.length+1;this.input.nativeElement.setSelectionRange(Y,Y)}else h=h+(J-m),this.input.nativeElement.setSelectionRange(h,h)}this.input.nativeElement.setAttribute("aria-valuenow",e)}concatValues(e,t){if(e&&t){let n=t.search(this._decimal);return this._decimal.lastIndex=0,this.suffixChar?n!==-1?e.replace(this.suffixChar,"").split(this._decimal)[0]+t.replace(this.suffixChar,"").slice(n)+this.suffixChar:e:n!==-1?e.split(this._decimal)[0]+t.slice(n):e}return e}getDecimalLength(e){if(e){let t=e.split(this._decimal);if(t.length===2)return t[1].replace(this._suffix,"").trim().replace(/\s/g,"").replace(this._currency,"").length}return 0}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1;let t=this.validateValue(this.parseValue(this.input.nativeElement.value)),n=t?.toString();this.input.nativeElement.value=this.formatValue(n),this.input.nativeElement.setAttribute("aria-valuenow",n),this.updateModel(e,t),this.onModelTouched(),this.onBlur.emit(e)}formattedValue(){let e=!this.value&&!this.allowEmpty?0:this.value;return this.formatValue(e)}updateModel(e,t){let n=this.ngControl?.control?.updateOn==="blur";this.value!==t?(this.value=t,n&&this.focused||this.onModelChange(t)):n&&this.onModelChange(t)}writeControlValue(e,t){this.value=e&&Number(e),t(e),this.cd.markForCheck()}clearTimer(){this.timer&&clearInterval(this.timer)}static \u0275fac=function(t){return new(t||o)(gt(mt))};static \u0275cmp=C({type:o,selectors:[["p-inputNumber"],["p-inputnumber"],["p-input-number"]],contentQueries:function(t,n,r){if(t&1&&(O(r,Dn,4),O(r,Ln,4),O(r,Tn,4),O(r,ue,4)),t&2){let a;F(a=R())&&(n.clearIconTemplate=a.first),F(a=R())&&(n.incrementButtonIconTemplate=a.first),F(a=R())&&(n.decrementButtonIconTemplate=a.first),F(a=R())&&(n.templates=a)}},viewQuery:function(t,n){if(t&1&&_t(Mn,5),t&2){let r;F(r=R())&&(n.input=r.first)}},hostVars:4,hostBindings:function(t,n){t&2&&(w("data-pc-name","inputnumber")("data-pc-section","root"),T(n.cn(n.cx("root"),n.styleClass)))},inputs:{showButtons:[2,"showButtons","showButtons",x],format:[2,"format","format",x],buttonLayout:"buttonLayout",inputId:"inputId",styleClass:"styleClass",placeholder:"placeholder",tabindex:[2,"tabindex","tabindex",ie],title:"title",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",ariaLabel:"ariaLabel",ariaRequired:[2,"ariaRequired","ariaRequired",x],autocomplete:"autocomplete",incrementButtonClass:"incrementButtonClass",decrementButtonClass:"decrementButtonClass",incrementButtonIcon:"incrementButtonIcon",decrementButtonIcon:"decrementButtonIcon",readonly:[2,"readonly","readonly",x],allowEmpty:[2,"allowEmpty","allowEmpty",x],locale:"locale",localeMatcher:"localeMatcher",mode:"mode",currency:"currency",currencyDisplay:"currencyDisplay",useGrouping:[2,"useGrouping","useGrouping",x],minFractionDigits:[2,"minFractionDigits","minFractionDigits",e=>ie(e,void 0)],maxFractionDigits:[2,"maxFractionDigits","maxFractionDigits",e=>ie(e,void 0)],prefix:"prefix",suffix:"suffix",inputStyle:"inputStyle",inputStyleClass:"inputStyleClass",showClear:[2,"showClear","showClear",x],autofocus:[2,"autofocus","autofocus",x]},outputs:{onInput:"onInput",onFocus:"onFocus",onBlur:"onBlur",onKeyDown:"onKeyDown",onClear:"onClear"},features:[K([ai,sn]),B,ft],decls:6,vars:36,consts:[["input",""],["pInputText","","role","spinbutton","inputmode","decimal",3,"input","keydown","keypress","paste","click","focus","blur","value","ngStyle","variant","invalid","pSize","pAutoFocus","fluid"],[4,"ngIf"],[3,"class",4,"ngIf"],["type","button","tabindex","-1",3,"class","mousedown","mouseup","mouseleave","keydown","keyup",4,"ngIf"],["data-p-icon","times",3,"class","click",4,"ngIf"],[3,"class","click",4,"ngIf"],["data-p-icon","times",3,"click"],[3,"click"],[4,"ngTemplateOutlet"],["type","button","tabindex","-1",3,"mousedown","mouseup","mouseleave","keydown","keyup"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],["data-p-icon","angle-up",4,"ngIf"],["data-p-icon","angle-up"],["data-p-icon","angle-down",4,"ngIf"],["data-p-icon","angle-down"]],template:function(t,n){if(t&1){let r=A();c(0,"input",1,0),b("input",function(s){return f(r),g(n.onUserInput(s))})("keydown",function(s){return f(r),g(n.onInputKeyDown(s))})("keypress",function(s){return f(r),g(n.onInputKeyPress(s))})("paste",function(s){return f(r),g(n.onPaste(s))})("click",function(){return f(r),g(n.onInputClick())})("focus",function(s){return f(r),g(n.onInputFocus(s))})("blur",function(s){return f(r),g(n.onInputBlur(s))}),p(),I(2,Vn,3,2,"ng-container",2)(3,qn,7,17,"span",3)(4,Xn,3,7,"button",4)(5,ii,3,7,"button",4)}t&2&&(T(n.cn(n.cx("pcInputText"),n.inputStyleClass)),d("value",n.formattedValue())("ngStyle",n.inputStyle)("variant",n.$variant())("invalid",n.invalid())("pSize",n.size())("pAutoFocus",n.autofocus)("fluid",n.hasFluid),w("id",n.inputId)("aria-valuemin",n.min())("aria-valuemax",n.max())("aria-valuenow",n.value)("placeholder",n.placeholder)("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledBy)("aria-describedby",n.ariaDescribedBy)("title",n.title)("size",n.inputSize())("name",n.name())("autocomplete",n.autocomplete)("maxlength",n.maxlength())("minlength",n.minlength())("tabindex",n.tabindex)("aria-required",n.ariaRequired)("min",n.min())("max",n.max())("step",n.step()??1)("required",n.required()?"":void 0)("readonly",n.readonly?"":void 0)("disabled",n.$disabled()?"":void 0)("data-pc-section","input"),l(2),d("ngIf",n.buttonLayout!="vertical"&&n.showClear&&n.value),l(),d("ngIf",n.showButtons&&n.buttonLayout==="stacked"),l(),d("ngIf",n.showButtons&&n.buttonLayout!=="stacked"),l(),d("ngIf",n.showButtons&&n.buttonLayout!=="stacked"))},dependencies:[H,St,Dt,de,Lt,me,Be,Bt,on,nn,V],encapsulation:2,changeDetection:0})}return o})(),dn=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=Z({type:o});static \u0275inj=X({imports:[$e,V,V]})}return o})();var di=["addLeadPopover"];function ui(o,i){o&1&&D(0," Lead name is required. ")}function ci(o,i){o&1&&D(0," Minimum 3 characters. ")}function pi(o,i){o&1&&D(0," Maximum 100 characters. ")}function mi(o,i){if(o&1&&(c(0,"p-message",8),z(1,ui,1,0)(2,ci,1,0)(3,pi,1,0),p()),o&2){let e,t=u();l(),j(!((e=t.newLeadForm.get("lead"))==null||e.errors==null)&&e.errors.required?1:!((e=t.newLeadForm.get("lead"))==null||e.errors==null)&&e.errors.minlength?2:!((e=t.newLeadForm.get("lead"))==null||e.errors==null)&&e.errors.maxlength?3:-1)}}function fi(o,i){o&1&&(c(0,"p-message",9),D(1," Enter the name of the lead. "),p())}function gi(o,i){o&1&&D(0," Value must be at least 0. ")}function hi(o,i){if(o&1&&(c(0,"p-message",8),z(1,gi,1,0),p()),o&2){let e,t=u();l(),j(!((e=t.newLeadForm.get("value"))==null||e.errors==null)&&e.errors.min?1:-1)}}function bi(o,i){o&1&&(c(0,"p-message",9),D(1," Enter the estimated value of the lead. "),p())}var qe=class o{leadService=y(re);fb=y(Wt);addLeadPopover=It.required("addLeadPopover");createLeadSubscription;newLeadForm=this.fb.group({lead:this.fb.nonNullable.control("",{validators:[Ce.required,Ce.minLength(8),Ce.maxLength(100)]}),value:this.fb.control(null,{validators:[Ce.min(0)]})});formSubmitted=ee(!1);loading=ee(!1);createdNewLead=P();isInvalid(i){let e=this.newLeadForm.get(i);return!!(e&&e.invalid&&(e.touched||this.formSubmitted()))}handleSubmit(){if(this.formSubmitted.set(!0),this.newLeadForm.invalid)return;this.loading.set(!0);let{lead:i,value:e}=this.newLeadForm.getRawValue(),t={title:i,value:e??void 0};this.createLeadSubscription=this.leadService.createLead(t).subscribe({next:n=>{this.resetForm(),this.createdNewLead.emit(n),this.addLeadPopover().hide()},error:n=>{console.error("Error creating lead:",n),this.loading.set(!1)},complete:()=>{this.loading.set(!1)}})}resetForm(){this.newLeadForm.reset({lead:"",value:null}),this.formSubmitted.set(!1),this.loading.set(!1)}ngOnDestroy(){this.createLeadSubscription?.unsubscribe()}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=C({type:o,selectors:[["app-new-lead"]],viewQuery:function(e,t){e&1&&yt(t.addLeadPopover,di,5),e&2&&vt()},outputs:{createdNewLead:"createdNewLead"},decls:20,vars:8,consts:[["addLeadPopover",""],["pButton","",3,"click"],["pButtonIcon","",1,"pi","pi-plus"],["pButtonLabel",""],[1,"flex","flex-col","gap-4","w-xs",3,"ngSubmit","formGroup"],[1,"flex","flex-col","gap-2"],["for","lead"],["pInputText","","id","lead","aria-describedby","lead-help","formControlName","lead",3,"pAutoFocus","ariaInvalid"],["severity","error","size","small","variant","simple"],["severity","secondary","size","small","variant","simple"],["for","value"],["mode","currency","currency","INR","currencyDisplay","code","locale","en-IN","id","value","aria-describedby","value-help","formControlName","value",3,"invalid"],["type","submit","label","Create",3,"loading","disabled"]],template:function(e,t){if(e&1){let n=A();c(0,"button",1),b("click",function(a){f(n);let s=xt(5);return g(s.toggle(a))}),S(1,"i",2),c(2,"span",3),D(3,"New Lead"),p()(),c(4,"p-popover",null,0)(6,"form",4),b("ngSubmit",function(){return f(n),g(t.handleSubmit())}),c(7,"div",5)(8,"label",6),D(9,"Lead"),p(),S(10,"input",7),z(11,mi,4,1,"p-message",8)(12,fi,2,0,"p-message",9),p(),c(13,"div",5)(14,"label",10),D(15,"Value"),p(),S(16,"p-inputnumber",11),z(17,hi,2,1,"p-message",8)(18,bi,2,0,"p-message",9),p(),S(19,"p-button",12),p()()}e&2&&(l(6),d("formGroup",t.newLeadForm),l(4),d("pAutoFocus",!0)("ariaInvalid",t.isInvalid("lead")),l(),j(t.isInvalid("lead")?11:12),l(5),d("invalid",t.isInvalid("value")),l(),j(t.isInvalid("value")?17:18),l(2),d("loading",t.loading())("disabled",t.loading()))},dependencies:[Ut,Ot,Pt,Ft,Rt,tn,en,Xt,Ht,Ee,pe,Kt,Qt,Yt,Fe,me,dn,$e,Be,Re],encapsulation:2})};var cn=`
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
`;var _i=["*"],yi={root:({instance:o})=>["p-iconfield",{"p-iconfield-left":o.iconPosition=="left","p-iconfield-right":o.iconPosition=="right"}]},pn=(()=>{class o extends Q{name="iconfield";theme=cn;classes=yi;static \u0275fac=(()=>{let e;return function(n){return(e||(e=L(o)))(n||o)}})();static \u0275prov=N({token:o,factory:o.\u0275fac})}return o})();var ot=(()=>{class o extends ke{iconPosition="left";styleClass;_componentStyle=y(pn);static \u0275fac=(()=>{let e;return function(n){return(e||(e=L(o)))(n||o)}})();static \u0275cmp=C({type:o,selectors:[["p-iconfield"],["p-iconField"],["p-icon-field"]],hostVars:2,hostBindings:function(t,n){t&2&&T(n.cn(n.cx("root"),n.styleClass))},inputs:{iconPosition:"iconPosition",styleClass:"styleClass"},features:[K([pn]),B],ngContentSelectors:_i,decls:1,vars:0,template:function(t,n){t&1&&(De(),Le(0))},dependencies:[H],encapsulation:2,changeDetection:0})}return o})(),mn=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=Z({type:o});static \u0275inj=X({imports:[ot]})}return o})();var xi=["*"],Ci={root:"p-inputicon"},fn=(()=>{class o extends Q{name="inputicon";classes=Ci;static \u0275fac=(()=>{let e;return function(n){return(e||(e=L(o)))(n||o)}})();static \u0275prov=N({token:o,factory:o.\u0275fac})}return o})(),rt=(()=>{class o extends ke{styleClass;_componentStyle=y(fn);static \u0275fac=(()=>{let e;return function(n){return(e||(e=L(o)))(n||o)}})();static \u0275cmp=C({type:o,selectors:[["p-inputicon"],["p-inputIcon"]],hostVars:2,hostBindings:function(t,n){t&2&&T(n.cn(n.cx("root"),n.styleClass))},inputs:{styleClass:"styleClass"},features:[K([fn]),B],ngContentSelectors:xi,decls:1,vars:0,template:function(t,n){t&1&&(De(),Le(0))},dependencies:[H,V],encapsulation:2,changeDetection:0})}return o})(),gn=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=Z({type:o});static \u0275inj=X({imports:[rt,V,V]})}return o})();var hn=`
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
`;var Ii=["icon"],Si=["content"],_n=o=>({$implicit:o});function Di(o,i){o&1&&ye(0)}function Li(o,i){if(o&1&&S(0,"span"),o&2){let e=u(3);T(e.cn(e.cx("icon"),e.checked?e.onIcon:e.offIcon,e.iconPos==="left"?e.cx("iconLeft"):e.cx("iconRight"))),w("data-pc-section","icon")}}function Ti(o,i){if(o&1&&z(0,Li,1,3,"span",1),o&2){let e=u(2);j(e.onIcon||e.offIcon?0:-1)}}function Mi(o,i){o&1&&ye(0)}function ki(o,i){if(o&1&&I(0,Mi,1,0,"ng-container",0),o&2){let e=u(2);d("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",ve(2,_n,e.checked))}}function Ni(o,i){if(o&1&&(z(0,Ti,1,1)(1,ki,1,4,"ng-container"),c(2,"span"),D(3),p()),o&2){let e=u();j(e.iconTemplate?1:0),l(2),T(e.cx("label")),w("data-pc-section","label"),l(),Te(e.checked?e.hasOnLabel?e.onLabel:"\xA0":e.hasOffLabel?e.offLabel:"\xA0")}}var Bi=`
    ${hn}

    /* For PrimeNG (iconPos) */
    .p-togglebutton-icon-right {
        order: 1;
    }

    .p-togglebutton.ng-invalid.ng-dirty {
        border-color: dt('togglebutton.invalid.border.color');
    }
`,Ei={root:({instance:o})=>["p-togglebutton p-component",{"p-togglebutton-checked":o.checked,"p-invalid":o.invalid(),"p-disabled":o.$disabled(),"p-togglebutton-sm p-inputfield-sm":o.size==="small","p-togglebutton-lg p-inputfield-lg":o.size==="large","p-togglebutton-fluid":o.fluid()}],content:"p-togglebutton-content",icon:"p-togglebutton-icon",iconLeft:"p-togglebutton-icon-left",iconRight:"p-togglebutton-icon-right",label:"p-togglebutton-label"},bn=(()=>{class o extends Q{name="togglebutton";theme=Bi;classes=Ei;static \u0275fac=(()=>{let e;return function(n){return(e||(e=L(o)))(n||o)}})();static \u0275prov=N({token:o,factory:o.\u0275fac})}return o})();var Vi={provide:ce,useExisting:ae(()=>at),multi:!0},at=(()=>{class o extends ge{onKeyDown(e){switch(e.code){case"Enter":this.toggle(e),e.preventDefault();break;case"Space":this.toggle(e),e.preventDefault();break}}toggle(e){!this.$disabled()&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.writeModelValue(this.checked),this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:e,checked:this.checked}),this.cd.markForCheck())}onLabel="Yes";offLabel="No";onIcon;offIcon;ariaLabel;ariaLabelledBy;styleClass;inputId;tabindex=0;iconPos="left";autofocus;size;allowEmpty;fluid=v(void 0,{transform:x});onChange=new U;iconTemplate;contentTemplate;templates;checked=!1;ngOnInit(){super.ngOnInit(),(this.checked===null||this.checked===void 0)&&(this.checked=!1)}_componentStyle=y(bn);onBlur(){this.onModelTouched()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.offLabel&&this.offLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"icon":this._iconTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}writeControlValue(e,t){this.checked=e,t(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=L(o)))(n||o)}})();static \u0275cmp=C({type:o,selectors:[["p-toggleButton"],["p-togglebutton"],["p-toggle-button"]],contentQueries:function(t,n,r){if(t&1&&(O(r,Ii,4),O(r,Si,4),O(r,ue,4)),t&2){let a;F(a=R())&&(n.iconTemplate=a.first),F(a=R())&&(n.contentTemplate=a.first),F(a=R())&&(n.templates=a)}},hostVars:7,hostBindings:function(t,n){t&1&&b("keydown",function(a){return n.onKeyDown(a)})("click",function(a){return n.toggle(a)}),t&2&&(w("aria-labelledby",n.ariaLabelledBy)("aria-label",n.ariaLabel)("aria-pressed",n.checked?"true":"false")("role","button")("tabindex",n.tabindex!==void 0?n.tabindex:n.$disabled()?-1:0),T(n.cn(n.cx("root"),n.styleClass)))},inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",ie],iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",x],size:"size",allowEmpty:"allowEmpty",fluid:[1,"fluid"]},outputs:{onChange:"onChange"},features:[K([Vi,bn]),ht([At]),B],decls:3,vars:7,consts:[[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class"]],template:function(t,n){t&1&&(c(0,"span"),I(1,Di,1,0,"ng-container",0),z(2,Ni,4,5),p()),t&2&&(T(n.cx("content")),l(),d("ngTemplateOutlet",n.contentTemplate||n._contentTemplate)("ngTemplateOutletContext",ve(5,_n,n.checked)),l(),j(n.contentTemplate?-1:2))},dependencies:[H,de,V],encapsulation:2,changeDetection:0})}return o})();var yn=`
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
`;var Ai=["item"],Fi=(o,i)=>({$implicit:o,index:i});function Ri(o,i){return this.getOptionLabel(i)}function Oi(o,i){o&1&&ye(0)}function Pi(o,i){if(o&1&&I(0,Oi,1,0,"ng-container",3),o&2){let e=u(2),t=e.$implicit,n=e.$index,r=u();d("ngTemplateOutlet",r.itemTemplate||r._itemTemplate)("ngTemplateOutletContext",Ct(2,Fi,t,n))}}function Ui(o,i){o&1&&I(0,Pi,1,5,"ng-template",null,0,wt)}function zi(o,i){if(o&1){let e=A();c(0,"p-togglebutton",2),b("onChange",function(n){let r=f(e),a=r.$implicit,s=r.$index,m=u();return g(m.onOptionSelect(n,a,s))}),z(1,Ui,2,0),p()}if(o&2){let e=i.$implicit,t=u();d("autofocus",t.autofocus)("styleClass",t.styleClass)("ngModel",t.isSelected(e))("onLabel",t.getOptionLabel(e))("offLabel",t.getOptionLabel(e))("disabled",t.$disabled()||t.isOptionDisabled(e))("allowEmpty",t.getAllowEmpty())("size",t.size())("fluid",t.fluid()),l(),j(t.itemTemplate||t._itemTemplate?1:-1)}}var ji=`
    ${yn}

    /* For PrimeNG */
    .p-selectbutton.ng-invalid.ng-dirty {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }
`,Gi={root:({instance:o})=>["p-selectbutton p-component",{"p-invalid":o.invalid(),"p-selectbutton-fluid":o.fluid()}]},vn=(()=>{class o extends Q{name="selectbutton";theme=ji;classes=Gi;static \u0275fac=(()=>{let e;return function(n){return(e||(e=L(o)))(n||o)}})();static \u0275prov=N({token:o,factory:o.\u0275fac})}return o})();var $i={provide:ce,useExisting:ae(()=>He),multi:!0},He=(()=>{class o extends ge{options;optionLabel;optionValue;optionDisabled;get unselectable(){return this._unselectable}_unselectable=!1;set unselectable(e){this._unselectable=e,this.allowEmpty=!e}tabindex=0;multiple;allowEmpty=!0;styleClass;ariaLabelledBy;dataKey;autofocus;size=v();fluid=v(void 0,{transform:x});onOptionClick=new U;onChange=new U;itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;focusedIndex=0;_componentStyle=y(vn);getAllowEmpty(){return this.multiple?this.allowEmpty||this.value?.length!==1:this.allowEmpty}getOptionLabel(e){return this.optionLabel?Me(e,this.optionLabel):e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?Me(e,this.optionValue):this.optionLabel||e.value===void 0?e:e.value}isOptionDisabled(e){return this.optionDisabled?Me(e,this.optionDisabled):e.disabled!==void 0?e.disabled:!1}onOptionSelect(e,t,n){if(this.$disabled()||this.isOptionDisabled(t))return;let r=this.isSelected(t);if(r&&this.unselectable)return;let a=this.getOptionValue(t),s;if(this.multiple)r?s=this.value.filter(m=>!xe(m,a,this.equalityKey||void 0)):s=this.value?[...this.value,a]:[a];else{if(r&&!this.allowEmpty)return;s=r?null:a}this.focusedIndex=n,this.value=s,this.writeModelValue(this.value),this.onModelChange(this.value),this.onChange.emit({originalEvent:e,value:this.value}),this.onOptionClick.emit({originalEvent:e,option:t,index:n})}changeTabIndexes(e,t){let n,r;for(let a=0;a<=this.el.nativeElement.children.length-1;a++)this.el.nativeElement.children[a].getAttribute("tabindex")==="0"&&(n={elem:this.el.nativeElement.children[a],index:a});t==="prev"?n.index===0?r=this.el.nativeElement.children.length-1:r=n.index-1:n.index===this.el.nativeElement.children.length-1?r=0:r=n.index+1,this.focusedIndex=r,this.el.nativeElement.children[r].focus()}onFocus(e,t){this.focusedIndex=t}onBlur(){this.onModelTouched()}removeOption(e){this.value=this.value.filter(t=>!xe(t,this.getOptionValue(e),this.dataKey))}isSelected(e){let t=!1,n=this.getOptionValue(e);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let r of this.value)if(xe(r,n,this.dataKey)){t=!0;break}}}else t=xe(this.getOptionValue(e),this.value,this.equalityKey||void 0);return t}templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break}})}writeControlValue(e,t){this.value=e,t(this.value),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=L(o)))(n||o)}})();static \u0275cmp=C({type:o,selectors:[["p-selectButton"],["p-selectbutton"],["p-select-button"]],contentQueries:function(t,n,r){if(t&1&&(O(r,Ai,4),O(r,ue,4)),t&2){let a;F(a=R())&&(n.itemTemplate=a.first),F(a=R())&&(n.templates=a)}},hostVars:6,hostBindings:function(t,n){t&2&&(w("role","group")("aria-labelledby",n.ariaLabelledBy)("data-pc-section","root")("data-pc-name","selectbutton"),T(n.cx("root")))},inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",unselectable:[2,"unselectable","unselectable",x],tabindex:[2,"tabindex","tabindex",ie],multiple:[2,"multiple","multiple",x],allowEmpty:[2,"allowEmpty","allowEmpty",x],styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",dataKey:"dataKey",autofocus:[2,"autofocus","autofocus",x],size:[1,"size"],fluid:[1,"fluid"]},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[K([$i,vn]),B],decls:2,vars:0,consts:[["content",""],[3,"autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size","fluid"],[3,"onChange","autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size","fluid"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,n){t&1&&we(0,zi,2,10,"p-togglebutton",1,Ri,!0),t&2&&Ie(n.options)},dependencies:[at,Ae,pe,Ve,H,de,V],encapsulation:2,changeDetection:0})}return o})(),xn=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=Z({type:o});static \u0275inj=X({imports:[He,V,V]})}return o})();var Cn=["asc","desc","relevance"];var Qe=class o{searchQuery="";searchSort="relevance";sortOptions=Cn.map(i=>({label:i,value:i}));searchCriteriaChanged=P();emitSearchCriteria(){this.searchCriteriaChanged.emit({query:this.searchQuery,sort:this.searchSort})}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=C({type:o,selectors:[["app-search"]],outputs:{searchCriteriaChanged:"searchCriteriaChanged"},decls:6,vars:3,consts:[[1,"w-fit","flex","items-center","justify-center","flex-wrap","gap-2","md:gap-4"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search...","name","searchQuery",3,"ngModelChange","ngModel"],["name","searchSort","multiple","false",3,"ngModelChange","options","ngModel"]],template:function(e,t){e&1&&(c(0,"div",0)(1,"p-icon-field"),S(2,"p-inputIcon",1),c(3,"input",2),tt("ngModelChange",function(r){return et(t.searchQuery,r)||(t.searchQuery=r),r}),b("ngModelChange",function(){return t.emitSearchCriteria()}),p()(),c(4,"p-icon-field")(5,"p-select-button",3),tt("ngModelChange",function(r){return et(t.searchSort,r)||(t.searchSort=r),r}),b("ngModelChange",function(){return t.emitSearchCriteria()}),p()()()),e&2&&(l(3),Je("ngModel",t.searchQuery),l(2),d("options",t.sortOptions),Je("ngModel",t.searchSort))},dependencies:[mn,ot,gn,rt,xn,He,Ae,Ee,pe,Ve,Fe,me],encapsulation:2})};var Ye=class o{startX=null;startY=null;minHorizontalDistance=60;maxVerticalDeviation=35;disableSwipe=v(!1,{transform:x});swipedRight=P();handlePointerDown(i){if(this.disableSwipe()){this.resetGesture();return}this.startX=i.clientX,this.startY=i.clientY}handlePointerUp(i){if(this.disableSwipe()||this.startX===null||this.startY===null){this.resetGesture();return}let e=i.clientX-this.startX;Math.abs(i.clientY-this.startY)<=this.maxVerticalDeviation&&e>=this.minHorizontalDistance&&this.swipedRight.emit(),this.resetGesture()}resetGesture(){this.startX=null,this.startY=null}static \u0275fac=function(e){return new(e||o)};static \u0275dir=te({type:o,selectors:[["","appSwipeRight",""]],hostBindings:function(e,t){e&1&&b("pointerdown",function(r){return t.handlePointerDown(r)})("pointerup",function(r){return t.handlePointerUp(r)})("pointercancel",function(){return t.resetGesture()})("pointerleave",function(){return t.resetGesture()})},inputs:{disableSwipe:[1,"disableSwipe"]},outputs:{swipedRight:"swipedRight"}})};var We=class o{startX=null;startY=null;minHorizontalDistance=60;maxVerticalDeviation=35;disableSwipe=v(!1,{transform:x});swipedLeft=P();handlePointerDown(i){if(this.disableSwipe()){this.resetGesture();return}this.startX=i.clientX,this.startY=i.clientY}handlePointerUp(i){if(this.disableSwipe()||this.startX===null||this.startY===null){this.resetGesture();return}let e=i.clientX-this.startX;Math.abs(i.clientY-this.startY)<=this.maxVerticalDeviation&&e<=-this.minHorizontalDistance&&this.swipedLeft.emit(),this.resetGesture()}resetGesture(){this.startX=null,this.startY=null}static \u0275fac=function(e){return new(e||o)};static \u0275dir=te({type:o,selectors:[["","appSwipeLeft",""]],hostBindings:function(e,t){e&1&&b("pointerdown",function(r){return t.handlePointerDown(r)})("pointerup",function(r){return t.handlePointerUp(r)})("pointercancel",function(){return t.resetGesture()})("pointerleave",function(){return t.resetGesture()})},inputs:{disableSwipe:[1,"disableSwipe"]},outputs:{swipedLeft:"swipedLeft"}})};var Ki=o=>["/leads",o],Xe=class o{lead=v.required();leadUpdated=P();leadService=y(re);updateStageSubscription;deleteLeadSubscription;updateStage(i){if(!i)switch(this.lead().getStage()){case"new":i="contacted";break;case"contacted":i="proposal";break;case"proposal":i="closed";break;case"closed":i="closed";break}this.updateStageSubscription=this.leadService.updateLeadStage(this.lead().getId(),i).subscribe(()=>{this.leadUpdated.emit()})}deleteLead(){this.leadService.deleteLead(this.lead().getId()).subscribe(()=>{this.leadUpdated.emit()})}ngOnDestroy(){this.updateStageSubscription?.unsubscribe(),this.deleteLeadSubscription?.unsubscribe()}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=C({type:o,selectors:[["app-lead-card"]],inputs:{lead:[1,"lead"]},outputs:{leadUpdated:"leadUpdated"},decls:26,vars:16,consts:[["appSwipeRight","","appSwipeLeft","","styleClass","group w-xs relative mb-7","tabindex","0",3,"swipedRight","swipedLeft"],[1,"h-24","mb-2"],[1,"flex","justify-between","items-start","max-h-0","overflow-hidden","group-focus-within:max-h-40","group-hover:max-h-40","transition-all","duration-300","ease-in"],[1,"w-3/5"],[1,"font-normal","text-sm","truncate"],[1,"font-light","text-sm","text-gray-500"],[1,"flex","flex-col","items-end","w-2/5"],[1,"mb-2"],[1,"pi","pi-wallet","text-primary"],[1,"pi","pi-file-edit","text-primary"],[1,"pi","pi-check-circle","text-primary"],[1,"text-end","text-xs","font-light","text-gray-500","block","max-h-10","group-hover:max-h-0","group-focus-within:max-h-0","overflow-hidden","transition-all","duration-300","ease-in-out"],[1,"flex","items-center","gap-2","absolute","group-focus-within:-bottom-6","right-0","-z-10","group-focus-within:z-10","text-sm","text-primary","hover:border-b","hover:border-primary","cursor-pointer","transition","duration-300","ease-in-out",3,"routerLink"],[1,"pi","pi-arrow-right"]],template:function(e,t){if(e&1&&(c(0,"p-card",0),b("swipedRight",function(){return t.updateStage()})("swipedLeft",function(){return t.deleteLead()}),c(1,"p",1),D(2),p(),c(3,"div",2)(4,"div",3)(5,"p",4),D(6),p(),c(7,"p",5),D(8),p()(),c(9,"div",6)(10,"span",7),D(11),nt(12,"currency"),S(13,"i",8),p(),c(14,"span",7),D(15),S(16,"i",9),p(),c(17,"span",7),D(18),S(19,"i",10),p()()(),c(20,"p",11),D(21),nt(22,"date"),p(),c(23,"a",12),D(24," Detailed View "),S(25,"i",13),p()()),e&2){let n,r,a,s;l(2),ne(" ",t.lead().getTitle()," "),l(4),ne(" ",((n=t.lead().getContact())==null?null:n.getName())||"No Contact"," "),l(2),ne(" ",((r=t.lead().getContact())==null?null:r.getEmail())||((r=t.lead().getContact())==null?null:r.getPhone())||"No Contact Info"," "),l(3),ne(" ",it(12,8,t.lead().getValue(),"INR")||"-"," "),l(4),ne(" ",((a=t.lead().getNotes())==null?null:a.length)||0," "),l(3),ne(" ",((s=t.lead().getTasks())==null?null:s.length)||0," "),l(3),ne(" ",it(22,11,t.lead().getCreatedAt(),"MMM dd, yyyy 'at' hh:mm a")," "),l(2),d("routerLink",ve(14,Ki,t.lead().getId()))}},dependencies:[$t,Gt,kt,Ye,We,Tt,Mt],encapsulation:2})};function Hi(o,i){if(o&1){let e=A();c(0,"app-lead-card",4),b("leadUpdated",function(){f(e);let n=u();return g(n.handleLeadUpdated())}),p()}if(o&2){let e=i.$implicit;d("lead",e)}}var Ze=class o{kanbanType=v.required();leadUpdated=P();kanbanTitle=G(()=>{switch(this.kanbanType()){case"new":return{title:"New Leads",description:"Leads that have just been added.",severity:"success",icon:"pi pi-inbox"};case"contacted":return{title:"Contacted Leads",description:"Leads that have been contacted.",severity:"info",icon:"pi pi-comments"};case"proposal":return{title:"Proposal Leads",description:"Leads that have received a proposal.",severity:"error",icon:"pi pi-file-edit"};case"closed":return{title:"Closed Leads",description:"Leads that have been closed.",severity:"secondary",icon:"pi pi-check-circle"}}});leads=v.required();handleLeadUpdated(){this.leadUpdated.emit()}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=C({type:o,selectors:[["app-lead-kanban"]],inputs:{kanbanType:[1,"kanbanType"],leads:[1,"leads"]},outputs:{leadUpdated:"leadUpdated"},decls:6,vars:3,consts:[[1,"w-fit","px-2","min-w-[350px]"],["styleClass","mb-4",3,"icon","severity"],[1,"flex","flex-col","items-center"],[3,"lead"],[3,"leadUpdated","lead"]],template:function(e,t){e&1&&(c(0,"div",0)(1,"p-message",1),D(2),p(),c(3,"div",2),we(4,Hi,1,1,"app-lead-card",3,bt),p()()),e&2&&(l(),d("icon",t.kanbanTitle().icon)("severity",t.kanbanTitle().severity),l(),Te(t.kanbanTitle().title),l(2),Ie(t.leads()))},dependencies:[Xe,Jt,Re],encapsulation:2})};var st=class o{searchCriteria=ee({query:"",sort:"relevance"});refresh=ee(Symbol());leadService=y(re);leads=jt(zt(this.refresh).pipe(pt(()=>this.leadService.getLeads(this.searchCriteria()))),{initialValue:[]});newLeads=G(()=>this.leads().filter(i=>i.getStage()==="new"));contactedLeads=G(()=>this.leads().filter(i=>i.getStage()==="contacted"));proposalLeads=G(()=>this.leads().filter(i=>i.getStage()==="proposal"));closedLeads=G(()=>this.leads().filter(i=>i.getStage()==="closed"));handleSearchCriteriaChanged(i){this.searchCriteria.set(i),this.refresh.set(Symbol())}handleCreatedNewLead(){this.refresh.set(Symbol())}handleUpdatedLead(){this.refresh.set(Symbol())}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=C({type:o,selectors:[["app-leads"]],decls:8,vars:8,consts:[[1,"w-full","flex","justify-between","flex-wrap","items-center","gap-2","mb-5"],[3,"searchCriteriaChanged"],[3,"createdNewLead"],[1,"flex","justify-between","items-start","gap-2","overflow-x-scroll","2xl:overflow-x-auto","leads__kanban-container"],[3,"leadUpdated","kanbanType","leads"]],template:function(e,t){e&1&&(c(0,"div",0)(1,"app-search",1),b("searchCriteriaChanged",function(r){return t.handleSearchCriteriaChanged(r)}),p(),c(2,"app-new-lead",2),b("createdNewLead",function(){return t.handleCreatedNewLead()}),p()(),c(3,"div",3)(4,"app-lead-kanban",4),b("leadUpdated",function(){return t.handleUpdatedLead()}),p(),c(5,"app-lead-kanban",4),b("leadUpdated",function(){return t.handleUpdatedLead()}),p(),c(6,"app-lead-kanban",4),b("leadUpdated",function(){return t.handleUpdatedLead()}),p(),c(7,"app-lead-kanban",4),b("leadUpdated",function(){return t.handleUpdatedLead()}),p()()),e&2&&(l(4),d("kanbanType","new")("leads",t.newLeads()),l(),d("kanbanType","contacted")("leads",t.contactedLeads()),l(),d("kanbanType","proposal")("leads",t.proposalLeads()),l(),d("kanbanType","closed")("leads",t.closedLeads()))},dependencies:[Qe,qe,Ze],styles:[".leads__kanban-container[_ngcontent-%COMP%]{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.leads__kanban-container[_ngcontent-%COMP%]::-webkit-scrollbar{width:0;height:0;display:none}"]})};export{st as default};
