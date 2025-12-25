import{a as pe,b as at,c as De,d as Te,e as Se,g as st,h as lt,j as ut,n as dt,o as ct,p as ke,q as pt,s as mt}from"./chunk-57UU5I7T.js";import{e as ot,i as we,j as rt}from"./chunk-BZM4RP73.js";import{Ba as G,Da as tt,Ea as Ie,Fa as nt,Ha as it,Ia as X,b as Ye,d as Ze,e as Je,f as de,fa as et,i as J,oa as Ce,pa as fe,u as Xe,wa as ce,xa as N}from"./chunk-TICBVB54.js";import{$a as ae,Ab as le,Ac as b,Bb as ge,Bc as Z,Cb as F,Gb as k,Hb as l,Ib as Ue,Jb as Ge,Kb as O,Lb as Ke,Mb as E,Na as d,Nb as A,R as re,S as w,T as Q,Ta as ze,Vb as C,Wb as Y,X as _,Xb as qe,Yb as Qe,Za as M,_a as H,a as ee,aa as p,ac as U,b as xe,ba as m,bb as D,ca as $,cb as $e,cc as Ne,da as Oe,db as y,dc as He,f as te,fb as B,ja as ye,jc as We,la as Re,ma as v,nb as x,ob as j,p as ne,pb as P,pc as ue,qb as je,rb as Pe,sb as c,tb as T,tc as h,u as Ae,ub as S,vb as R,yb as ve,z as ie,zb as se}from"./chunk-AVM5YMMJ.js";var he=class i{id;lead;name;email;phone;company;createdAt;lastModifiedAt;constructor(o){this.id=o.id,this.name=o.name,this.email=o.email,this.phone=o.phone,this.company=o.company,this.createdAt=o.createdAt,this.lastModifiedAt=o.lastModifiedAt,"lead"in o?this.lead=o.lead:this.lead=null}getId(){return this.id}getLead(){return this.lead}setLead(o){this.lead=o}getName(){return this.name}setName(o){this.name=o}getEmail(){return this.email}setEmail(o){this.email=o}getPhone(){return this.phone}setPhone(o){this.phone=o}getCompany(){return this.company}setCompany(o){this.company=o}getCreatedAt(){return this.createdAt}setCreatedAt(o){this.createdAt=o}getLastModifiedAt(){return this.lastModifiedAt}setLastModifiedAt(o){this.lastModifiedAt=o}static toContactFromDao(o,e){let n=e?{id:o.id,lead:e,name:o.name,email:o.email,phone:o.phone,company:o.company,createdAt:o.createdAt,lastModifiedAt:o.lastModifiedAt}:{id:o.id,name:o.name,email:o.email,phone:o.phone,company:o.company,createdAt:o.createdAt,lastModifiedAt:o.lastModifiedAt};return new i(n)}static toDaoFromContact(o,e){if(o.getLead()===null&&!e)throw new Error("Cannot convert Contact to ContactDao without associated Lead");let n=o.getLead(),t=n?n.getId():e;return{id:o.getId(),leadId:t,name:o.getName(),email:o.getEmail(),phone:o.getPhone(),company:o.getCompany(),createdAt:o.getCreatedAt(),lastModifiedAt:o.getLastModifiedAt()}}};var oe=class i{id;title;stage;value;tags;notes;tasks;contact;createdAt;lastModifiedAt;constructor(o,e,n=[],t=[]){this.id=o.id,this.title=o.title,this.stage=o.stage,this.value=o.value,this.tags=o.tags,this.createdAt=o.createdAt,this.lastModifiedAt=o.lastModifiedAt,this.contact=e,this.notes=n,this.tasks=t}getId(){return this.id}getTitle(){return this.title}getStage(){return this.stage}getValue(){return this.value}getTags(){return this.tags}getNotes(){return this.notes}getTasks(){return this.tasks}getContact(){return this.contact}getCreatedAt(){return this.createdAt}getLastModifiedAt(){return this.lastModifiedAt}setId(o){this.id=o}setTitle(o){this.title=o}setStage(o){this.stage=o}setValue(o){this.value=o}setTags(o){this.tags=o}setNotes(o){this.notes=o}setTasks(o){this.tasks=o}setContact(o){this.contact=o}setCreatedAt(o){this.createdAt=o}setLastModifiedAt(o){this.lastModifiedAt=o}getShallowCopy(){return{id:this.id,title:this.title,stage:this.stage,value:this.value,tags:this.tags,createdAt:this.createdAt,lastModifiedAt:this.lastModifiedAt}}static toLeadFromDao(o){return new i({id:o.id,title:o.title,stage:o.stage,value:o.value,tags:o.tags,createdAt:o.createdAt,lastModifiedAt:o.lastModifiedAt})}static toDaoFromLead(o){return{id:o.getId(),title:o.getTitle(),stage:o.getStage(),value:o.getValue(),tags:o.getTags(),createdAt:o.getCreatedAt(),lastModifiedAt:o.getLastModifiedAt(),contactId:o.getContact()?.getId(),notes:o.getNotes()?.map(e=>e.getId()),tasks:o.getTasks()?.map(e=>e.getId())}}};var be=class i{id;lead;text;createdAt;constructor(o){this.id=o.id,this.text=o.text,this.createdAt=o.createdAt,this.lead="lead"in o?o.lead:null}getId(){return this.id}setId(o){this.id=o}getLead(){return this.lead}setLead(o){this.lead=o}getText(){return this.text}setText(o){this.text=o}getCreatedAt(){return this.createdAt}setCreatedAt(o){this.createdAt=o}static toNoteFromDao(o,e){let n=e?{id:o.id,text:o.text,createdAt:o.createdAt,lead:e}:{id:o.id,text:o.text,createdAt:o.createdAt};return new i(n)}static toDaoFromNote(o,e){let t=o.getLead()?.getId()??e;if(!t)throw new Error("Cannot convert Note to NoteDao without associated Lead");return{id:o.getId(),leadId:t,text:o.getText(),createdAt:o.getCreatedAt()}}};var _e=class i{id;lead;title;dueDate;status;reminder;createdAt;constructor(o){this.id=o.id,this.title=o.title,this.dueDate=o.dueDate,this.status=o.status,this.reminder=o.reminder,this.createdAt=o.createdAt,"lead"in o?this.lead=o.lead:this.lead=null}getId(){return this.id}setId(o){this.id=o}getLead(){return this.lead}setLead(o){this.lead=o}getTitle(){return this.title}setTitle(o){this.title=o}getDueDate(){return this.dueDate}setDueDate(o){this.dueDate=o}getStatus(){return this.status}setStatus(o){this.status=o}getReminder(){return this.reminder}setReminder(o){this.reminder=o}getCreatedAt(){return this.createdAt}setCreatedAt(o){this.createdAt=o}static toTaskFromDao(o,e){let n=e?{id:o.id,lead:e,title:o.title,dueDate:o.dueDate,status:o.status,reminder:o.reminder,createdAt:o.createdAt}:{id:o.id,title:o.title,dueDate:o.dueDate,status:o.status,reminder:o.reminder,createdAt:o.createdAt};return new i(n)}static toDaoFromTask(o,e){if(o.getLead()===null&&!e)throw new Error("Cannot convert Task to TaskDao without associated Lead");let n=o.getLead(),t=n?n.getId():e;return{id:o.getId(),leadId:t,title:o.getTitle(),dueDate:o.getDueDate(),status:o.getStatus(),reminder:o.getReminder(),createdAt:o.getCreatedAt()}}};var Le=class i{contactDb;constructor(){let o=_(X);this.contactDb=o.contacts}getContactDaosByIdsAsync(o){return this.contactDb.bulkGet(Array.from(o))}getContactDaoByIdAsync(o){return this.contactDb.get(o)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})};var Me=class i{noteDb;constructor(){let o=_(X);this.noteDb=o.notes}getNoteDaosByIdsAsync(o){return this.noteDb.bulkGet(Array.from(o))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})};var Be=class i{taskDb;constructor(){let o=_(X);this.taskDb=o.tasks}getTaskDaosByIdsAsync(o){return this.taskDb.bulkGet(Array.from(o))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})};var Ee=class i{leadDb;contactService;taskService;noteService;constructor(){let o=_(X);this.leadDb=o.leads,this.contactService=_(Le),this.taskService=_(Be),this.noteService=_(Me)}getLeads(o){return ie(()=>ne(this.getLeadsAsync(o)))}getLeadsAsync(o){return te(this,null,function*(){let e=new Set,n=new Set,t=new Set,r=new Map;return this.filterLeadsBasedOnCriteria(o).then(a=>this.processLeadDaoAndPopulateAndLoadContacts(a,r,e,n,t)).then(a=>this.hydrateLeadsWithContactsAndLoadTasks(a,r,n)).then(a=>this.hydrateLeadsWithTasksAndLoadNotes(a,r,t)).then(a=>this.hydrateLeadsWithNotes(a,r)).then(()=>Array.from(r.values()))})}filterLeadsBasedOnCriteria(o){return o.query.trim()===""&&o.sort==="asc"?this.leadDb.orderBy("createdAt").toArray():this.leadDb.where("title").startsWithIgnoreCase(o.query||"").sortBy("createdAt").then(e=>o.sort==="asc"?e:e.reverse())}processLeadDaoAndPopulateAndLoadContacts(o,e,n,t,r){return o.forEach(a=>{a.contactId&&n.add(a.contactId),a.tasks?.forEach(u=>t.add(u)),a.notes?.forEach(u=>r.add(u));let s=oe.toLeadFromDao(a);e.set(s.getId(),s)}),this.contactService.getContactDaosByIdsAsync(n)}hydrateLeadsWithContactsAndLoadTasks(o,e,n){return o.forEach(t=>{if(t){let r=he.toContactFromDao(t),a=t.leadId,s=e.get(a);s&&s.setContact(r)}}),this.taskService.getTaskDaosByIdsAsync(n)}hydrateLeadsWithTasksAndLoadNotes(o,e,n){return o.forEach(t=>{if(t){let r=_e.toTaskFromDao(t),a=t.leadId,s=e.get(a);s&&s.getTasks()?.push(r)}}),this.noteService.getNoteDaosByIdsAsync(n)}hydrateLeadsWithNotes(o,e){o.forEach(n=>{if(n){let t=be.toNoteFromDao(n),r=n.leadId;if(r){let a=e.get(r);a&&a.getNotes()?.push(t)}}})}createLead(o){return ie(()=>ne(this.createLeadAsync(o)))}createLeadAsync(o){return te(this,null,function*(){let e={id:it(),title:o.title,value:o.value,stage:"new",tags:[],createdAt:new Date,lastModifiedAt:new Date},n=new oe(e);return yield this.leadDb.add(oe.toDaoFromLead(n)),n})}updateLeadStage(o,e){return ie(()=>ne(this.updateLeadStageAsync(o,e))).pipe(Ae(n=>{console.log(`Updated ${n} record(s)`)}))}updateLeadStageAsync(o,e){return te(this,null,function*(){return this.leadDb.update(o,{stage:e,lastModifiedAt:new Date})})}deleteLead(o){return ie(()=>ne(this.deleteLeadAsync(o)))}deleteLeadAsync(o){return te(this,null,function*(){return this.leadDb.delete(o)})}getLeadById(o){return ie(()=>ne(this.getLeadByIdAsync(o)))}getLeadByIdAsync(o){return te(this,null,function*(){let e,n,t;return this.leadDb.get(o).then(r=>{if(!r)throw new Error(`Lead with id ${o} not found`);e=oe.toLeadFromDao(r),n=r.tasks||[],t=r.notes||[];let a=r.contactId;return a?this.contactService.getContactDaoByIdAsync(a):void 0}).then(r=>{if(r){let a=he.toContactFromDao(r);e.setContact(a)}return this.taskService.getTaskDaosByIdsAsync(new Set(n))}).then(r=>(r.forEach(a=>{if(a){let s=_e.toTaskFromDao(a);e.getTasks()?.push(s)}}),this.noteService.getNoteDaosByIdsAsync(new Set(t)))).then(r=>(r.forEach(a=>{if(a){let s=be.toNoteFromDao(a);e.getNotes()?.push(s)}}),e))})}updateLead(o,e){return ie(()=>ne(this.updateLeadAsync(o,e))).pipe(Ae(()=>{console.log(`Updated lead with id ${o}`)}))}updateLeadAsync(o,e){return te(this,null,function*(){let n=xe(ee(ee(ee(ee({},e.title!==void 0?{title:e.title}:{}),e.value!==void 0?{value:e.value}:{}),e.stage!==void 0?{stage:e.stage}:{}),e.tags!==void 0?{tags:e.tags}:{}),{lastModifiedAt:new Date});return this.leadDb.update(o,n)})}static \u0275fac=function(e){return new(e||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})};var gt=`
    .p-iftalabel {
        display: block;
        position: relative;
    }

    .p-iftalabel label {
        position: absolute;
        pointer-events: none;
        top: dt('iftalabel.top');
        transition-property: all;
        transition-timing-function: ease;
        line-height: 1;
        font-size: dt('iftalabel.font.size');
        font-weight: dt('iftalabel.font.weight');
        inset-inline-start: dt('iftalabel.position.x');
        color: dt('iftalabel.color');
        transition-duration: dt('iftalabel.transition.duration');
    }

    .p-iftalabel .p-inputtext,
    .p-iftalabel .p-textarea,
    .p-iftalabel .p-select-label,
    .p-iftalabel .p-multiselect-label,
    .p-iftalabel .p-multiselect-label:has(.p-chip),
    .p-iftalabel .p-autocomplete-input-multiple,
    .p-iftalabel .p-cascadeselect-label,
    .p-iftalabel .p-treeselect-label {
        padding-block-start: dt('iftalabel.input.padding.top');
        padding-block-end: dt('iftalabel.input.padding.bottom');
    }

    .p-iftalabel:has(.p-invalid) label {
        color: dt('iftalabel.invalid.color');
    }

    .p-iftalabel:has(input:focus) label,
    .p-iftalabel:has(input:-webkit-autofill) label,
    .p-iftalabel:has(textarea:focus) label,
    .p-iftalabel:has(.p-inputwrapper-focus) label {
        color: dt('iftalabel.focus.color');
    }

    .p-iftalabel .p-inputicon {
        top: dt('iftalabel.input.padding.top');
        transform: translateY(25%);
        margin-top: 0;
    }
`;var Ot=["*"],Rt=`
    ${gt}

    /* For PrimeNG */
    .p-iftalabel:has(.ng-invalid.ng-dirty) label {
        color: dt('iftalabel.invalid.color');
    }
`,zt={root:"p-iftalabel"},ft=(()=>{class i extends G{name="iftalabel";theme=Rt;classes=zt;static \u0275fac=(()=>{let e;return function(t){return(e||(e=v(i)))(t||i)}})();static \u0275prov=w({token:i,factory:i.\u0275fac})}return i})();var ht=(()=>{class i extends tt{_componentStyle=_(ft);static \u0275fac=(()=>{let e;return function(t){return(e||(e=v(i)))(t||i)}})();static \u0275cmp=M({type:i,selectors:[["p-iftalabel"],["p-iftaLabel"],["p-ifta-label"]],hostVars:2,hostBindings:function(n,t){n&2&&C(t.cx("root"))},features:[U([ft]),D],ngContentSelectors:Ot,decls:1,vars:0,template:function(n,t){n&1&&(Ue(),Ge(0))},encapsulation:2,changeDetection:0})}return i})(),bt=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=H({type:i});static \u0275inj=Q({imports:[J,N,Xe,N]})}return i})();var jt=["data-p-icon","angle-down"],_t=(()=>{class i extends Ie{static \u0275fac=(()=>{let e;return function(t){return(e||(e=v(i)))(t||i)}})();static \u0275cmp=M({type:i,selectors:[["","data-p-icon","angle-down"]],features:[D],attrs:jt,decls:1,vars:0,consts:[["d","M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z","fill","currentColor"]],template:function(n,t){n&1&&($(),ve(0,"path",0))},encapsulation:2})}return i})();var Pt=["data-p-icon","angle-up"],xt=(()=>{class i extends Ie{static \u0275fac=(()=>{let e;return function(t){return(e||(e=v(i)))(t||i)}})();static \u0275cmp=M({type:i,selectors:[["","data-p-icon","angle-up"]],features:[D],attrs:Pt,decls:1,vars:0,consts:[["d","M10.4134 9.49931C10.3148 9.49977 10.2172 9.48055 10.1262 9.44278C10.0352 9.405 9.95263 9.34942 9.88338 9.27931L6.88338 6.27931L3.88338 9.27931C3.73811 9.34946 3.57409 9.3709 3.41567 9.34044C3.25724 9.30999 3.11286 9.22926 3.00395 9.11025C2.89504 8.99124 2.82741 8.84028 2.8111 8.67978C2.79478 8.51928 2.83065 8.35781 2.91338 8.21931L6.41338 4.71931C6.55401 4.57886 6.74463 4.49997 6.94338 4.49997C7.14213 4.49997 7.33276 4.57886 7.47338 4.71931L10.9734 8.21931C11.1138 8.35994 11.1927 8.55056 11.1927 8.74931C11.1927 8.94806 11.1138 9.13868 10.9734 9.27931C10.9007 9.35315 10.8132 9.41089 10.7168 9.44879C10.6203 9.48669 10.5169 9.5039 10.4134 9.49931Z","fill","currentColor"]],template:function(n,t){n&1&&($(),ve(0,"path",0))},encapsulation:2})}return i})();var yt=`
    .p-textarea {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('textarea.color');
        background: dt('textarea.background');
        padding-block: dt('textarea.padding.y');
        padding-inline: dt('textarea.padding.x');
        border: 1px solid dt('textarea.border.color');
        transition:
            background dt('textarea.transition.duration'),
            color dt('textarea.transition.duration'),
            border-color dt('textarea.transition.duration'),
            outline-color dt('textarea.transition.duration'),
            box-shadow dt('textarea.transition.duration');
        appearance: none;
        border-radius: dt('textarea.border.radius');
        outline-color: transparent;
        box-shadow: dt('textarea.shadow');
    }

    .p-textarea:enabled:hover {
        border-color: dt('textarea.hover.border.color');
    }

    .p-textarea:enabled:focus {
        border-color: dt('textarea.focus.border.color');
        box-shadow: dt('textarea.focus.ring.shadow');
        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');
        outline-offset: dt('textarea.focus.ring.offset');
    }

    .p-textarea.p-invalid {
        border-color: dt('textarea.invalid.border.color');
    }

    .p-textarea.p-variant-filled {
        background: dt('textarea.filled.background');
    }

    .p-textarea.p-variant-filled:enabled:hover {
        background: dt('textarea.filled.hover.background');
    }

    .p-textarea.p-variant-filled:enabled:focus {
        background: dt('textarea.filled.focus.background');
    }

    .p-textarea:disabled {
        opacity: 1;
        background: dt('textarea.disabled.background');
        color: dt('textarea.disabled.color');
    }

    .p-textarea::placeholder {
        color: dt('textarea.placeholder.color');
    }

    .p-textarea.p-invalid::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }

    .p-textarea-fluid {
        width: 100%;
    }

    .p-textarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-textarea-sm {
        font-size: dt('textarea.sm.font.size');
        padding-block: dt('textarea.sm.padding.y');
        padding-inline: dt('textarea.sm.padding.x');
    }

    .p-textarea-lg {
        font-size: dt('textarea.lg.font.size');
        padding-block: dt('textarea.lg.padding.y');
        padding-inline: dt('textarea.lg.padding.x');
    }
`;var Ut=`
    ${yt}

    /* For PrimeNG */
    .p-textarea.ng-invalid.ng-dirty {
        border-color: dt('textarea.invalid.border.color');
    }
    .p-textarea.ng-invalid.ng-dirty::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }
`,Gt={root:({instance:i})=>["p-textarea p-component",{"p-filled":i.$filled(),"p-textarea-resizable ":i.autoResize,"p-variant-filled":i.$variant()==="filled","p-textarea-fluid":i.hasFluid,"p-inputfield-sm p-textarea-sm":i.pSize==="small","p-textarea-lg p-inputfield-lg":i.pSize==="large","p-invalid":i.invalid()}]},vt=(()=>{class i extends G{name="textarea";theme=Ut;classes=Gt;static \u0275fac=(()=>{let e;return function(t){return(e||(e=v(i)))(t||i)}})();static \u0275prov=w({token:i,factory:i.\u0275fac})}return i})();var Ct=(()=>{class i extends ke{autoResize;pSize;variant=h();fluid=h(void 0,{transform:b});invalid=h(void 0,{transform:b});$variant=ue(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onResize=new B;ngControlSubscription;_componentStyle=_(vt);ngControl=_(Te,{optional:!0,self:!0});pcFluid=_(we,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}ngOnInit(){super.ngOnInit(),this.ngControl&&(this.ngControlSubscription=this.ngControl.valueChanges.subscribe(()=>{this.updateState()}))}ngAfterViewInit(){super.ngAfterViewInit(),this.autoResize&&this.resize(),this.cd.detectChanges()}ngAfterViewChecked(){this.autoResize&&this.resize(),this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(e){this.writeModelValue(e.target?.value),this.updateState()}resize(e){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(e||{})}updateState(){this.autoResize&&this.resize()}ngOnDestroy(){this.ngControlSubscription&&this.ngControlSubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(t){return(e||(e=v(i)))(t||i)}})();static \u0275dir=ae({type:i,selectors:[["","pTextarea",""],["","pInputTextarea",""]],hostVars:2,hostBindings:function(n,t){n&1&&k("input",function(a){return t.onInput(a)}),n&2&&C(t.cx("root"))},inputs:{autoResize:[2,"autoResize","autoResize",b],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},outputs:{onResize:"onResize"},features:[U([vt]),D]})}return i})(),It=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=H({type:i});static \u0275inj=Q({})}return i})();function Qt(i,o){i&1&&Y(0," Lead title is required. ")}function Ht(i,o){i&1&&Y(0," Minimum 3 characters. ")}function Wt(i,o){i&1&&Y(0," Maximum 100 characters. ")}function Yt(i,o){if(i&1&&(T(0,"p-message",3),j(1,Qt,1,0)(2,Ht,1,0)(3,Wt,1,0),S()),i&2){let e=l(2);d(),P(e.leadFormControl.errors!=null&&e.leadFormControl.errors.required?1:e.leadFormControl.errors!=null&&e.leadFormControl.errors.minlength?2:e.leadFormControl.errors!=null&&e.leadFormControl.errors.maxlength?3:-1)}}function Zt(i,o){if(i&1){let e=F();T(0,"p-iftalabel")(1,"textarea",1),k("blur",function(){p(e);let t=l();return m(t.saveTitle())})("keydown.enter",function(){p(e);let t=l();return m(t.saveTitle())}),S(),T(2,"label",2),Y(3,"Lead"),S()(),j(4,Yt,4,1,"p-message",3)}if(i&2){let e=l();d(),c("formControl",e.leadFormControl),d(3),P(e.leadFormControl.invalid?4:-1)}}function Jt(i,o){if(i&1){let e=F();T(0,"p",4),k("dblclick",function(){p(e);let t=l();return m(t.toggleEditMode())}),Y(1),S()}if(i&2){let e=l();d(),Qe(" ",e.leadFormControl.value," ")}}var wt=class i{leadService=_(Ee);updateLeadSubscription;editMode=ye(!1);leadTitle=h.required();leadId=h.required();leadFormControl=new st("",[De.required,De.minLength(8),De.maxLength(100)]);ngOnInit(){this.leadFormControl.setValue(this.leadTitle())}toggleEditMode(){this.editMode.set(!this.editMode())}saveTitle(){this.leadService.updateLead(this.leadId(),{title:this.leadFormControl.value}).subscribe({next:()=>{this.editMode.set(!1)},error:o=>{console.error("Error updating lead title:",o)}})}ngOnDestroy(){this.updateLeadSubscription?.unsubscribe()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=M({type:i,selectors:[["app-lead-title"]],inputs:{leadTitle:[1,"leadTitle"],leadId:[1,"leadId"]},decls:2,vars:1,consts:[[1,"font-medium","text-base","h-24"],["id","lead-title-input","pInputTextarea","","pAutoFocus","true","rows","4",1,"w-full",3,"blur","keydown.enter","formControl"],["for","lead-title-input"],["severity","error","size","small","variant","simple"],[1,"font-medium","text-base","h-24",3,"dblclick"]],template:function(e,n){e&1&&j(0,Zt,5,2)(1,Jt,2,1,"p",0),e&2&&P(n.editMode()?0:1)},dependencies:[ct,at,Se,ut,It,Ct,bt,ht,mt],encapsulation:2})};var me=(()=>{class i extends ke{required=h(void 0,{transform:b});invalid=h(void 0,{transform:b});disabled=h(void 0,{transform:b});name=h();_disabled=ye(!1);$disabled=ue(()=>this.disabled()||this._disabled());onModelChange=()=>{};onModelTouched=()=>{};writeDisabledState(e){this._disabled.set(e)}writeControlValue(e,n){}writeValue(e){this.writeControlValue(e,this.writeModelValue.bind(this))}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.writeDisabledState(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(t){return(e||(e=v(i)))(t||i)}})();static \u0275dir=ae({type:i,inputs:{required:[1,"required"],invalid:[1,"invalid"],disabled:[1,"disabled"],name:[1,"name"]},features:[D]})}return i})();var Dt=(()=>{class i extends me{pcFluid=_(we,{optional:!0,host:!0,skipSelf:!0});fluid=h(void 0,{transform:b});variant=h();size=h();inputSize=h();pattern=h();min=h();max=h();step=h();minlength=h();maxlength=h();$variant=ue(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());get hasFluid(){return this.fluid()??!!this.pcFluid}static \u0275fac=(()=>{let e;return function(t){return(e||(e=v(i)))(t||i)}})();static \u0275dir=ae({type:i,inputs:{fluid:[1,"fluid"],variant:[1,"variant"],size:[1,"size"],inputSize:[1,"inputSize"],pattern:[1,"pattern"],min:[1,"min"],max:[1,"max"],step:[1,"step"],minlength:[1,"minlength"],maxlength:[1,"maxlength"]},features:[D]})}return i})();var Tt=`
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
`;var Xt=["clearicon"],en=["incrementbuttonicon"],tn=["decrementbuttonicon"],nn=["input"];function on(i,o){if(i&1){let e=F();$(),T(0,"svg",7),k("click",function(){p(e);let t=l(2);return m(t.clear())}),S()}if(i&2){let e=l(2);C(e.cx("clearIcon")),x("data-pc-section","clearIcon")}}function rn(i,o){}function an(i,o){i&1&&y(0,rn,0,0,"ng-template")}function sn(i,o){if(i&1){let e=F();T(0,"span",8),k("click",function(){p(e);let t=l(2);return m(t.clear())}),y(1,an,1,0,null,9),S()}if(i&2){let e=l(2);C(e.cx("clearIcon")),x("data-pc-section","clearIcon"),d(),c("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function ln(i,o){if(i&1&&(se(0),y(1,on,1,3,"svg",5)(2,sn,2,4,"span",6),le()),i&2){let e=l();d(),c("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),d(),c("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function un(i,o){if(i&1&&R(0,"span",12),i&2){let e=l(2);c("ngClass",e.incrementButtonIcon),x("data-pc-section","incrementbuttonicon")}}function dn(i,o){i&1&&($(),R(0,"svg",14)),i&2&&x("data-pc-section","incrementbuttonicon")}function cn(i,o){}function pn(i,o){i&1&&y(0,cn,0,0,"ng-template")}function mn(i,o){if(i&1&&(se(0),y(1,dn,1,1,"svg",13)(2,pn,1,0,null,9),le()),i&2){let e=l(2);d(),c("ngIf",!e.incrementButtonIconTemplate&&!e._incrementButtonIconTemplate),d(),c("ngTemplateOutlet",e.incrementButtonIconTemplate||e._incrementButtonIconTemplate)}}function gn(i,o){if(i&1&&R(0,"span",12),i&2){let e=l(2);c("ngClass",e.decrementButtonIcon),x("data-pc-section","decrementbuttonicon")}}function fn(i,o){i&1&&($(),R(0,"svg",16)),i&2&&x("data-pc-section","decrementbuttonicon")}function hn(i,o){}function bn(i,o){i&1&&y(0,hn,0,0,"ng-template")}function _n(i,o){if(i&1&&(se(0),y(1,fn,1,1,"svg",15)(2,bn,1,0,null,9),le()),i&2){let e=l(2);d(),c("ngIf",!e.decrementButtonIconTemplate&&!e._decrementButtonIconTemplate),d(),c("ngTemplateOutlet",e.decrementButtonIconTemplate||e._decrementButtonIconTemplate)}}function xn(i,o){if(i&1){let e=F();T(0,"span")(1,"button",10),k("mousedown",function(t){p(e);let r=l();return m(r.onUpButtonMouseDown(t))})("mouseup",function(){p(e);let t=l();return m(t.onUpButtonMouseUp())})("mouseleave",function(){p(e);let t=l();return m(t.onUpButtonMouseLeave())})("keydown",function(t){p(e);let r=l();return m(r.onUpButtonKeyDown(t))})("keyup",function(){p(e);let t=l();return m(t.onUpButtonKeyUp())}),y(2,un,1,2,"span",11)(3,mn,3,2,"ng-container",2),S(),T(4,"button",10),k("mousedown",function(t){p(e);let r=l();return m(r.onDownButtonMouseDown(t))})("mouseup",function(){p(e);let t=l();return m(t.onDownButtonMouseUp())})("mouseleave",function(){p(e);let t=l();return m(t.onDownButtonMouseLeave())})("keydown",function(t){p(e);let r=l();return m(r.onDownButtonKeyDown(t))})("keyup",function(){p(e);let t=l();return m(t.onDownButtonKeyUp())}),y(5,gn,1,2,"span",11)(6,_n,3,2,"ng-container",2),S()()}if(i&2){let e=l();C(e.cx("buttonGroup")),x("data-pc-section","buttonGroup"),d(),C(e.cn(e.cx("incrementButton"),e.incrementButtonClass)),x("disabled",e.$disabled()?"":void 0)("aria-hidden",!0)("data-pc-section","incrementbutton"),d(),c("ngIf",e.incrementButtonIcon),d(),c("ngIf",!e.incrementButtonIcon),d(),C(e.cn(e.cx("decrementButton"),e.decrementButtonClass)),x("disabled",e.$disabled()?"":void 0)("aria-hidden",!0)("data-pc-section","decrementbutton"),d(),c("ngIf",e.decrementButtonIcon),d(),c("ngIf",!e.decrementButtonIcon)}}function yn(i,o){if(i&1&&R(0,"span",12),i&2){let e=l(2);c("ngClass",e.incrementButtonIcon),x("data-pc-section","incrementbuttonicon")}}function vn(i,o){i&1&&($(),R(0,"svg",14)),i&2&&x("data-pc-section","incrementbuttonicon")}function Cn(i,o){}function In(i,o){i&1&&y(0,Cn,0,0,"ng-template")}function wn(i,o){if(i&1&&(se(0),y(1,vn,1,1,"svg",13)(2,In,1,0,null,9),le()),i&2){let e=l(2);d(),c("ngIf",!e.incrementButtonIconTemplate&&!e._incrementButtonIconTemplate),d(),c("ngTemplateOutlet",e.incrementButtonIconTemplate||e._incrementButtonIconTemplate)}}function Dn(i,o){if(i&1){let e=F();T(0,"button",10),k("mousedown",function(t){p(e);let r=l();return m(r.onUpButtonMouseDown(t))})("mouseup",function(){p(e);let t=l();return m(t.onUpButtonMouseUp())})("mouseleave",function(){p(e);let t=l();return m(t.onUpButtonMouseLeave())})("keydown",function(t){p(e);let r=l();return m(r.onUpButtonKeyDown(t))})("keyup",function(){p(e);let t=l();return m(t.onUpButtonKeyUp())}),y(1,yn,1,2,"span",11)(2,wn,3,2,"ng-container",2),S()}if(i&2){let e=l();C(e.cn(e.cx("incrementButton"),e.incrementButtonClass)),x("disabled",e.$disabled()?"":void 0)("aria-hidden",!0)("data-pc-section","incrementbutton"),d(),c("ngIf",e.incrementButtonIcon),d(),c("ngIf",!e.incrementButtonIcon)}}function Tn(i,o){if(i&1&&R(0,"span",12),i&2){let e=l(2);c("ngClass",e.decrementButtonIcon),x("data-pc-section","decrementbuttonicon")}}function Sn(i,o){i&1&&($(),R(0,"svg",16)),i&2&&x("data-pc-section","decrementbuttonicon")}function kn(i,o){}function Ln(i,o){i&1&&y(0,kn,0,0,"ng-template")}function Mn(i,o){if(i&1&&(se(0),y(1,Sn,1,1,"svg",15)(2,Ln,1,0,null,9),le()),i&2){let e=l(2);d(),c("ngIf",!e.decrementButtonIconTemplate&&!e._decrementButtonIconTemplate),d(),c("ngTemplateOutlet",e.decrementButtonIconTemplate||e._decrementButtonIconTemplate)}}function Bn(i,o){if(i&1){let e=F();T(0,"button",10),k("mousedown",function(t){p(e);let r=l();return m(r.onDownButtonMouseDown(t))})("mouseup",function(){p(e);let t=l();return m(t.onDownButtonMouseUp())})("mouseleave",function(){p(e);let t=l();return m(t.onDownButtonMouseLeave())})("keydown",function(t){p(e);let r=l();return m(r.onDownButtonKeyDown(t))})("keyup",function(){p(e);let t=l();return m(t.onDownButtonKeyUp())}),y(1,Tn,1,2,"span",11)(2,Mn,3,2,"ng-container",2),S()}if(i&2){let e=l();C(e.cn(e.cx("decrementButton"),e.decrementButtonClass)),x("disabled",e.$disabled()?"":void 0)("aria-hidden",!0)("data-pc-section","decrementbutton"),d(),c("ngIf",e.decrementButtonIcon),d(),c("ngIf",!e.decrementButtonIcon)}}var En=`
    ${Tt}

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
`,An={root:({instance:i})=>["p-inputnumber p-component p-inputwrapper",{"p-inputwrapper-filled":i.$filled()||i.allowEmpty===!1,"p-inputwrapper-focus":i.focused,"p-inputnumber-stacked":i.showButtons&&i.buttonLayout==="stacked","p-inputnumber-horizontal":i.showButtons&&i.buttonLayout==="horizontal","p-inputnumber-vertical":i.showButtons&&i.buttonLayout==="vertical","p-inputnumber-fluid":i.hasFluid,"p-invalid":i.invalid()}],pcInputText:"p-inputnumber-input",buttonGroup:"p-inputnumber-button-group",incrementButton:({instance:i})=>["p-inputnumber-button p-inputnumber-increment-button",{"p-disabled":i.showButtons&&i.max()!=null&&i.maxlength()}],decrementButton:({instance:i})=>["p-inputnumber-button p-inputnumber-decrement-button",{"p-disabled":i.showButtons&&i.min()!=null&&i.minlength()}],clearIcon:"p-inputnumber-clear-icon"},St=(()=>{class i extends G{name="inputnumber";theme=En;classes=An;static \u0275fac=(()=>{let e;return function(t){return(e||(e=v(i)))(t||i)}})();static \u0275prov=w({token:i,factory:i.\u0275fac})}return i})();var Nn={provide:pe,useExisting:re(()=>Lt),multi:!0},Lt=(()=>{class i extends Dt{injector;showButtons=!1;format=!0;buttonLayout="stacked";inputId;styleClass;placeholder;tabindex;title;ariaLabelledBy;ariaDescribedBy;ariaLabel;ariaRequired;autocomplete;incrementButtonClass;decrementButtonClass;incrementButtonIcon;decrementButtonIcon;readonly;allowEmpty=!0;locale;localeMatcher;mode="decimal";currency;currencyDisplay;useGrouping=!0;minFractionDigits;maxFractionDigits;prefix;suffix;inputStyle;inputStyleClass;showClear=!1;autofocus;onInput=new B;onFocus=new B;onBlur=new B;onKeyDown=new B;onClear=new B;clearIconTemplate;incrementButtonIconTemplate;decrementButtonIconTemplate;templates;input;_clearIconTemplate;_incrementButtonIconTemplate;_decrementButtonIconTemplate;value;focused;initialized;groupChar="";prefixChar="";suffixChar="";isSpecialChar;timer;lastValue;_numeral;numberFormat;_decimal;_decimalChar="";_group;_minusSign;_currency;_prefix;_suffix;_index;_componentStyle=_(St);ngControl=null;constructor(e){super(),this.injector=e}ngOnChanges(e){super.ngOnChanges(e),["locale","localeMatcher","mode","currency","currencyDisplay","useGrouping","minFractionDigits","maxFractionDigits","prefix","suffix"].some(t=>!!e[t])&&this.updateConstructParser()}ngOnInit(){super.ngOnInit(),this.ngControl=this.injector.get(Te,null,{optional:!0}),this.constructParser(),this.initialized=!0}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"clearicon":this._clearIconTemplate=e.template;break;case"incrementbuttonicon":this._incrementButtonIconTemplate=e.template;break;case"decrementbuttonicon":this._decrementButtonIconTemplate=e.template;break}})}getOptions(){let e=(a,s,u)=>{if(!(a==null||isNaN(a)||!isFinite(a)))return Math.max(s,Math.min(u,Math.floor(a)))},n=e(this.minFractionDigits,0,20),t=e(this.maxFractionDigits,0,100),r=n!=null&&t!=null&&n>t?t:n;return{localeMatcher:this.localeMatcher,style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:this.useGrouping,minimumFractionDigits:r,maximumFractionDigits:t}}constructParser(){let e=this.getOptions(),n=Object.fromEntries(Object.entries(e).filter(([a,s])=>s!==void 0));this.numberFormat=new Intl.NumberFormat(this.locale,n);let t=[...new Intl.NumberFormat(this.locale,{useGrouping:!1}).format(9876543210)].reverse(),r=new Map(t.map((a,s)=>[a,s]));this._numeral=new RegExp(`[${t.join("")}]`,"g"),this._group=this.getGroupingExpression(),this._minusSign=this.getMinusSignExpression(),this._currency=this.getCurrencyExpression(),this._decimal=this.getDecimalExpression(),this._decimalChar=this.getDecimalChar(),this._suffix=this.getSuffixExpression(),this._prefix=this.getPrefixExpression(),this._index=a=>r.get(a)}updateConstructParser(){this.initialized&&this.constructParser()}escapeRegExp(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}getDecimalExpression(){let e=this.getDecimalChar();return new RegExp(`[${e}]`,"g")}getDecimalChar(){return new Intl.NumberFormat(this.locale,xe(ee({},this.getOptions()),{useGrouping:!1})).format(1.1).replace(this._currency,"").trim().replace(this._numeral,"")}getGroupingExpression(){let e=new Intl.NumberFormat(this.locale,{useGrouping:!0});return this.groupChar=e.format(1e6).trim().replace(this._numeral,"").charAt(0),new RegExp(`[${this.groupChar}]`,"g")}getMinusSignExpression(){let e=new Intl.NumberFormat(this.locale,{useGrouping:!1});return new RegExp(`[${e.format(-1).trim().replace(this._numeral,"")}]`,"g")}getCurrencyExpression(){if(this.currency){let e=new Intl.NumberFormat(this.locale,{style:"currency",currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});return new RegExp(`[${e.format(1).replace(/\s/g,"").replace(this._numeral,"").replace(this._group,"")}]`,"g")}return new RegExp("[]","g")}getPrefixExpression(){if(this.prefix)this.prefixChar=this.prefix;else{let e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay});this.prefixChar=e.format(1).split("1")[0]}return new RegExp(`${this.escapeRegExp(this.prefixChar||"")}`,"g")}getSuffixExpression(){if(this.suffix)this.suffixChar=this.suffix;else{let e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});this.suffixChar=e.format(1).split("1")[1]}return new RegExp(`${this.escapeRegExp(this.suffixChar||"")}`,"g")}formatValue(e){if(e!=null){if(e==="-")return e;if(this.format){let t=new Intl.NumberFormat(this.locale,this.getOptions()).format(e);return this.prefix&&e!=this.prefix&&(t=this.prefix+t),this.suffix&&e!=this.suffix&&(t=t+this.suffix),t}return e.toString()}return""}parseValue(e){let n=this._suffix?new RegExp(this._suffix,""):/(?:)/,t=this._prefix?new RegExp(this._prefix,""):/(?:)/,r=this._currency?new RegExp(this._currency,""):/(?:)/,a=e.replace(n,"").replace(t,"").trim().replace(/\s/g,"").replace(r,"").replace(this._group,"").replace(this._minusSign,"-").replace(this._decimal,".").replace(this._numeral,this._index);if(a){if(a==="-")return a;let s=+a;return isNaN(s)?null:s}return null}repeat(e,n,t){if(this.readonly)return;let r=n||500;this.clearTimer(),this.timer=setTimeout(()=>{this.repeat(e,40,t)},r),this.spin(e,t)}spin(e,n){let t=(this.step()??1)*n,r=this.parseValue(this.input?.nativeElement.value)||0,a=this.validateValue(r+t),s=this.maxlength();s&&s<this.formatValue(a).length||(this.updateInput(a,null,"spin",null),this.updateModel(e,a),this.handleOnInput(e,r,a))}clear(){this.value=null,this.onModelChange(this.value),this.onClear.emit()}onUpButtonMouseDown(e){if(e.button===2){this.clearTimer();return}this.$disabled()||(this.input?.nativeElement.focus(),this.repeat(e,null,1),e.preventDefault())}onUpButtonMouseUp(){this.$disabled()||this.clearTimer()}onUpButtonMouseLeave(){this.$disabled()||this.clearTimer()}onUpButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,1)}onUpButtonKeyUp(){this.$disabled()||this.clearTimer()}onDownButtonMouseDown(e){if(e.button===2){this.clearTimer();return}this.$disabled()||(this.input?.nativeElement.focus(),this.repeat(e,null,-1),e.preventDefault())}onDownButtonMouseUp(){this.$disabled()||this.clearTimer()}onDownButtonMouseLeave(){this.$disabled()||this.clearTimer()}onDownButtonKeyUp(){this.$disabled()||this.clearTimer()}onDownButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,-1)}onUserInput(e){this.readonly||(this.isSpecialChar&&(e.target.value=this.lastValue),this.isSpecialChar=!1)}onInputKeyDown(e){if(this.readonly)return;if(this.lastValue=e.target.value,e.shiftKey||e.altKey){this.isSpecialChar=!0;return}let n=e.target.selectionStart,t=e.target.selectionEnd,r=e.target.value,a=null;switch(e.altKey&&e.preventDefault(),e.key){case"ArrowUp":this.spin(e,1),e.preventDefault();break;case"ArrowDown":this.spin(e,-1),e.preventDefault();break;case"ArrowLeft":for(let s=n;s<=r.length;s++){let u=s===0?0:s-1;if(this.isNumeralChar(r.charAt(u))){this.input.nativeElement.setSelectionRange(s,s);break}}break;case"ArrowRight":for(let s=t;s>=0;s--)if(this.isNumeralChar(r.charAt(s))){this.input.nativeElement.setSelectionRange(s,s);break}break;case"Tab":case"Enter":a=this.validateValue(this.parseValue(this.input.nativeElement.value)),this.input.nativeElement.value=this.formatValue(a),this.input.nativeElement.setAttribute("aria-valuenow",a),this.updateModel(e,a);break;case"Backspace":{if(e.preventDefault(),n===t){if(n==1&&this.prefix||n==r.length&&this.suffix)break;let s=r.charAt(n-1),{decimalCharIndex:u,decimalCharIndexWithoutPrefix:f}=this.getDecimalCharIndexes(r);if(this.isNumeralChar(s)){let g=this.getDecimalLength(r);if(this._group.test(s))this._group.lastIndex=0,a=r.slice(0,n-2)+r.slice(n-1);else if(this._decimal.test(s))this._decimal.lastIndex=0,g?this.input?.nativeElement.setSelectionRange(n-1,n-1):a=r.slice(0,n-1)+r.slice(n);else if(u>0&&n>u){let L=this.isDecimalMode()&&(this.minFractionDigits||0)<g?"":"0";a=r.slice(0,n-1)+L+r.slice(n)}else f===1?(a=r.slice(0,n-1)+"0"+r.slice(n),a=this.parseValue(a)>0?a:""):a=r.slice(0,n-1)+r.slice(n)}else this.mode==="currency"&&this._currency&&s.search(this._currency)!=-1&&(a=r.slice(1));this.updateValue(e,a,null,"delete-single")}else a=this.deleteRange(r,n,t),this.updateValue(e,a,null,"delete-range");break}case"Delete":if(e.preventDefault(),n===t){if(n==0&&this.prefix||n==r.length-1&&this.suffix)break;let s=r.charAt(n),{decimalCharIndex:u,decimalCharIndexWithoutPrefix:f}=this.getDecimalCharIndexes(r);if(this.isNumeralChar(s)){let g=this.getDecimalLength(r);if(this._group.test(s))this._group.lastIndex=0,a=r.slice(0,n)+r.slice(n+2);else if(this._decimal.test(s))this._decimal.lastIndex=0,g?this.input?.nativeElement.setSelectionRange(n+1,n+1):a=r.slice(0,n)+r.slice(n+1);else if(u>0&&n>u){let L=this.isDecimalMode()&&(this.minFractionDigits||0)<g?"":"0";a=r.slice(0,n)+L+r.slice(n+1)}else f===1?(a=r.slice(0,n)+"0"+r.slice(n+1),a=this.parseValue(a)>0?a:""):a=r.slice(0,n)+r.slice(n+1)}this.updateValue(e,a,null,"delete-back-single")}else a=this.deleteRange(r,n,t),this.updateValue(e,a,null,"delete-range");break;case"Home":this.min()&&(this.updateModel(e,this.min()),e.preventDefault());break;case"End":this.max()&&(this.updateModel(e,this.max()),e.preventDefault());break;default:break}this.onKeyDown.emit(e)}onInputKeyPress(e){if(this.readonly)return;let n=e.which||e.keyCode,t=String.fromCharCode(n),r=this.isDecimalSign(t),a=this.isMinusSign(t);n!=13&&e.preventDefault(),!r&&e.code==="NumpadDecimal"&&(r=!0,t=this._decimalChar,n=t.charCodeAt(0));let{value:s,selectionStart:u,selectionEnd:f}=this.input.nativeElement,g=this.parseValue(s+t),L=g!=null?g.toString():"",W=s.substring(u,f),I=this.parseValue(W),K=I!=null?I.toString():"";if(u!==f&&K.length>0){this.insert(e,t,{isDecimalSign:r,isMinusSign:a});return}let z=this.maxlength();z&&L.length>z||(48<=n&&n<=57||a||r)&&this.insert(e,t,{isDecimalSign:r,isMinusSign:a})}onPaste(e){if(!this.$disabled()&&!this.readonly){e.preventDefault();let n=(e.clipboardData||this.document.defaultView.clipboardData).getData("Text");if(this.inputId==="integeronly"&&/[^\d-]/.test(n))return;if(n){this.maxlength()&&(n=n.toString().substring(0,this.maxlength()));let t=this.parseValue(n);t!=null&&this.insert(e,t.toString())}}}allowMinusSign(){let e=this.min();return e==null||e<0}isMinusSign(e){return this._minusSign.test(e)||e==="-"?(this._minusSign.lastIndex=0,!0):!1}isDecimalSign(e){return this._decimal.test(e)?(this._decimal.lastIndex=0,!0):!1}isDecimalMode(){return this.mode==="decimal"}getDecimalCharIndexes(e){let n=e.search(this._decimal);this._decimal.lastIndex=0;let r=e.replace(this._prefix,"").trim().replace(/\s/g,"").replace(this._currency,"").search(this._decimal);return this._decimal.lastIndex=0,{decimalCharIndex:n,decimalCharIndexWithoutPrefix:r}}getCharIndexes(e){let n=e.search(this._decimal);this._decimal.lastIndex=0;let t=e.search(this._minusSign);this._minusSign.lastIndex=0;let r=e.search(this._suffix);this._suffix.lastIndex=0;let a=e.search(this._currency);return this._currency.lastIndex=0,{decimalCharIndex:n,minusCharIndex:t,suffixCharIndex:r,currencyCharIndex:a}}insert(e,n,t={isDecimalSign:!1,isMinusSign:!1}){let r=n.search(this._minusSign);if(this._minusSign.lastIndex=0,!this.allowMinusSign()&&r!==-1)return;let a=this.input?.nativeElement.selectionStart,s=this.input?.nativeElement.selectionEnd,u=this.input?.nativeElement.value.trim(),{decimalCharIndex:f,minusCharIndex:g,suffixCharIndex:L,currencyCharIndex:W}=this.getCharIndexes(u),I;if(t.isMinusSign)a===0&&(I=u,(g===-1||s!==0)&&(I=this.insertText(u,n,0,s)),this.updateValue(e,I,n,"insert"));else if(t.isDecimalSign)f>0&&a===f?this.updateValue(e,u,n,"insert"):f>a&&f<s?(I=this.insertText(u,n,a,s),this.updateValue(e,I,n,"insert")):f===-1&&this.maxFractionDigits&&(I=this.insertText(u,n,a,s),this.updateValue(e,I,n,"insert"));else{let K=this.numberFormat.resolvedOptions().maximumFractionDigits,z=a!==s?"range-insert":"insert";if(f>0&&a>f){if(a+n.length-(f+1)<=K){let q=W>=a?W-1:L>=a?L:u.length;I=u.slice(0,a)+n+u.slice(a+n.length,q)+u.slice(q),this.updateValue(e,I,n,z)}}else I=this.insertText(u,n,a,s),this.updateValue(e,I,n,z)}}insertText(e,n,t,r){if((n==="."?n:n.split(".")).length===2){let s=e.slice(t,r).search(this._decimal);return this._decimal.lastIndex=0,s>0?e.slice(0,t)+this.formatValue(n)+e.slice(r):e||this.formatValue(n)}else return r-t===e.length?this.formatValue(n):t===0?n+e.slice(r):r===e.length?e.slice(0,t)+n:e.slice(0,t)+n+e.slice(r)}deleteRange(e,n,t){let r;return t-n===e.length?r="":n===0?r=e.slice(t):t===e.length?r=e.slice(0,n):r=e.slice(0,n)+e.slice(t),r}initCursor(){let e=this.input?.nativeElement.selectionStart,n=this.input?.nativeElement.selectionEnd,t=this.input?.nativeElement.value,r=t.length,a=null,s=(this.prefixChar||"").length;t=t.replace(this._prefix,""),(e===n||e!==0||n<s)&&(e-=s);let u=t.charAt(e);if(this.isNumeralChar(u))return e+s;let f=e-1;for(;f>=0;)if(u=t.charAt(f),this.isNumeralChar(u)){a=f+s;break}else f--;if(a!==null)this.input?.nativeElement.setSelectionRange(a+1,a+1);else{for(f=e;f<r;)if(u=t.charAt(f),this.isNumeralChar(u)){a=f+s;break}else f++;a!==null&&this.input?.nativeElement.setSelectionRange(a,a)}return a||0}onInputClick(){let e=this.input?.nativeElement.value;!this.readonly&&e!==et()&&this.initCursor()}isNumeralChar(e){return e.length===1&&(this._numeral.test(e)||this._decimal.test(e)||this._group.test(e)||this._minusSign.test(e))?(this.resetRegex(),!0):!1}resetRegex(){this._numeral.lastIndex=0,this._decimal.lastIndex=0,this._group.lastIndex=0,this._minusSign.lastIndex=0}updateValue(e,n,t,r){let a=this.input?.nativeElement.value,s=null;n!=null&&(s=this.parseValue(n),s=!s&&!this.allowEmpty?0:s,this.updateInput(s,t,r,n),this.handleOnInput(e,a,s))}handleOnInput(e,n,t){this.isValueChanged(n,t)&&(this.input.nativeElement.value=this.formatValue(t),this.input?.nativeElement.setAttribute("aria-valuenow",t),this.updateModel(e,t),this.onInput.emit({originalEvent:e,value:t,formattedValue:n}))}isValueChanged(e,n){if(n===null&&e!==null)return!0;if(n!=null){let t=typeof e=="string"?this.parseValue(e):e;return n!==t}return!1}validateValue(e){if(e==="-"||e==null)return null;let n=this.min(),t=this.max();return n!=null&&e<n?this.min():t!=null&&e>t?t:e}updateInput(e,n,t,r){n=n||"";let a=this.input?.nativeElement.value,s=this.formatValue(e),u=a.length;if(s!==r&&(s=this.concatValues(s,r)),u===0){this.input.nativeElement.value=s,this.input.nativeElement.setSelectionRange(0,0);let g=this.initCursor()+n.length;this.input.nativeElement.setSelectionRange(g,g)}else{let f=this.input.nativeElement.selectionStart,g=this.input.nativeElement.selectionEnd,L=this.maxlength();if(L&&s.length>L&&(s=s.slice(0,L),f=Math.min(f,L),g=Math.min(g,L)),L&&L<s.length)return;this.input.nativeElement.value=s;let W=s.length;if(t==="range-insert"){let I=this.parseValue((a||"").slice(0,f)),z=(I!==null?I.toString():"").split("").join(`(${this.groupChar})?`),q=new RegExp(z,"g");q.test(s);let Ft=n.split("").join(`(${this.groupChar})?`),Fe=new RegExp(Ft,"g");Fe.test(s.slice(q.lastIndex)),g=q.lastIndex+Fe.lastIndex,this.input.nativeElement.setSelectionRange(g,g)}else if(W===u)t==="insert"||t==="delete-back-single"?this.input.nativeElement.setSelectionRange(g+1,g+1):t==="delete-single"?this.input.nativeElement.setSelectionRange(g-1,g-1):(t==="delete-range"||t==="spin")&&this.input.nativeElement.setSelectionRange(g,g);else if(t==="delete-back-single"){let I=a.charAt(g-1),K=a.charAt(g),z=u-W,q=this._group.test(K);q&&z===1?g+=1:!q&&this.isNumeralChar(I)&&(g+=-1*z+1),this._group.lastIndex=0,this.input.nativeElement.setSelectionRange(g,g)}else if(a==="-"&&t==="insert"){this.input.nativeElement.setSelectionRange(0,0);let K=this.initCursor()+n.length+1;this.input.nativeElement.setSelectionRange(K,K)}else g=g+(W-u),this.input.nativeElement.setSelectionRange(g,g)}this.input.nativeElement.setAttribute("aria-valuenow",e)}concatValues(e,n){if(e&&n){let t=n.search(this._decimal);return this._decimal.lastIndex=0,this.suffixChar?t!==-1?e.replace(this.suffixChar,"").split(this._decimal)[0]+n.replace(this.suffixChar,"").slice(t)+this.suffixChar:e:t!==-1?e.split(this._decimal)[0]+n.slice(t):e}return e}getDecimalLength(e){if(e){let n=e.split(this._decimal);if(n.length===2)return n[1].replace(this._suffix,"").trim().replace(/\s/g,"").replace(this._currency,"").length}return 0}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1;let n=this.validateValue(this.parseValue(this.input.nativeElement.value)),t=n?.toString();this.input.nativeElement.value=this.formatValue(t),this.input.nativeElement.setAttribute("aria-valuenow",t),this.updateModel(e,n),this.onModelTouched(),this.onBlur.emit(e)}formattedValue(){let e=!this.value&&!this.allowEmpty?0:this.value;return this.formatValue(e)}updateModel(e,n){let t=this.ngControl?.control?.updateOn==="blur";this.value!==n?(this.value=n,t&&this.focused||this.onModelChange(n)):t&&this.onModelChange(n)}writeControlValue(e,n){this.value=e&&Number(e),n(e),this.cd.markForCheck()}clearTimer(){this.timer&&clearInterval(this.timer)}static \u0275fac=function(n){return new(n||i)(ze(Oe))};static \u0275cmp=M({type:i,selectors:[["p-inputNumber"],["p-inputnumber"],["p-input-number"]],contentQueries:function(n,t,r){if(n&1&&(O(r,Xt,4),O(r,en,4),O(r,tn,4),O(r,ce,4)),n&2){let a;E(a=A())&&(t.clearIconTemplate=a.first),E(a=A())&&(t.incrementButtonIconTemplate=a.first),E(a=A())&&(t.decrementButtonIconTemplate=a.first),E(a=A())&&(t.templates=a)}},viewQuery:function(n,t){if(n&1&&Ke(nn,5),n&2){let r;E(r=A())&&(t.input=r.first)}},hostVars:4,hostBindings:function(n,t){n&2&&(x("data-pc-name","inputnumber")("data-pc-section","root"),C(t.cn(t.cx("root"),t.styleClass)))},inputs:{showButtons:[2,"showButtons","showButtons",b],format:[2,"format","format",b],buttonLayout:"buttonLayout",inputId:"inputId",styleClass:"styleClass",placeholder:"placeholder",tabindex:[2,"tabindex","tabindex",Z],title:"title",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",ariaLabel:"ariaLabel",ariaRequired:[2,"ariaRequired","ariaRequired",b],autocomplete:"autocomplete",incrementButtonClass:"incrementButtonClass",decrementButtonClass:"decrementButtonClass",incrementButtonIcon:"incrementButtonIcon",decrementButtonIcon:"decrementButtonIcon",readonly:[2,"readonly","readonly",b],allowEmpty:[2,"allowEmpty","allowEmpty",b],locale:"locale",localeMatcher:"localeMatcher",mode:"mode",currency:"currency",currencyDisplay:"currencyDisplay",useGrouping:[2,"useGrouping","useGrouping",b],minFractionDigits:[2,"minFractionDigits","minFractionDigits",e=>Z(e,void 0)],maxFractionDigits:[2,"maxFractionDigits","maxFractionDigits",e=>Z(e,void 0)],prefix:"prefix",suffix:"suffix",inputStyle:"inputStyle",inputStyleClass:"inputStyleClass",showClear:[2,"showClear","showClear",b],autofocus:[2,"autofocus","autofocus",b]},outputs:{onInput:"onInput",onFocus:"onFocus",onBlur:"onBlur",onKeyDown:"onKeyDown",onClear:"onClear"},features:[U([Nn,St]),D,Re],decls:6,vars:36,consts:[["input",""],["pInputText","","role","spinbutton","inputmode","decimal",3,"input","keydown","keypress","paste","click","focus","blur","value","ngStyle","variant","invalid","pSize","pAutoFocus","fluid"],[4,"ngIf"],[3,"class",4,"ngIf"],["type","button","tabindex","-1",3,"class","mousedown","mouseup","mouseleave","keydown","keyup",4,"ngIf"],["data-p-icon","times",3,"class","click",4,"ngIf"],[3,"class","click",4,"ngIf"],["data-p-icon","times",3,"click"],[3,"click"],[4,"ngTemplateOutlet"],["type","button","tabindex","-1",3,"mousedown","mouseup","mouseleave","keydown","keyup"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],["data-p-icon","angle-up",4,"ngIf"],["data-p-icon","angle-up"],["data-p-icon","angle-down",4,"ngIf"],["data-p-icon","angle-down"]],template:function(n,t){if(n&1){let r=F();T(0,"input",1,0),k("input",function(s){return p(r),m(t.onUserInput(s))})("keydown",function(s){return p(r),m(t.onInputKeyDown(s))})("keypress",function(s){return p(r),m(t.onInputKeyPress(s))})("paste",function(s){return p(r),m(t.onPaste(s))})("click",function(){return p(r),m(t.onInputClick())})("focus",function(s){return p(r),m(t.onInputFocus(s))})("blur",function(s){return p(r),m(t.onInputBlur(s))}),S(),y(2,ln,3,2,"ng-container",2)(3,xn,7,17,"span",3)(4,Dn,3,7,"button",4)(5,Bn,3,7,"button",4)}n&2&&(C(t.cn(t.cx("pcInputText"),t.inputStyleClass)),c("value",t.formattedValue())("ngStyle",t.inputStyle)("variant",t.$variant())("invalid",t.invalid())("pSize",t.size())("pAutoFocus",t.autofocus)("fluid",t.hasFluid),x("id",t.inputId)("aria-valuemin",t.min())("aria-valuemax",t.max())("aria-valuenow",t.value)("placeholder",t.placeholder)("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledBy)("aria-describedby",t.ariaDescribedBy)("title",t.title)("size",t.inputSize())("name",t.name())("autocomplete",t.autocomplete)("maxlength",t.maxlength())("minlength",t.minlength())("tabindex",t.tabindex)("aria-required",t.ariaRequired)("min",t.min())("max",t.max())("step",t.step()??1)("required",t.required()?"":void 0)("readonly",t.readonly?"":void 0)("disabled",t.$disabled()?"":void 0)("data-pc-section","input"),d(2),c("ngIf",t.buttonLayout!="vertical"&&t.showClear&&t.value),d(),c("ngIf",t.showButtons&&t.buttonLayout==="stacked"),d(),c("ngIf",t.showButtons&&t.buttonLayout!=="stacked"),d(),c("ngIf",t.showButtons&&t.buttonLayout!=="stacked"))},dependencies:[J,Ye,Ze,de,Je,pt,ot,nt,xt,_t,N],encapsulation:2,changeDetection:0})}return i})(),Wo=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=H({type:i});static \u0275inj=Q({imports:[Lt,N,N]})}return i})();var Mt=`
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
`;var Vn=["icon"],Fn=["content"],Et=i=>({$implicit:i});function On(i,o){i&1&&ge(0)}function Rn(i,o){if(i&1&&R(0,"span"),i&2){let e=l(3);C(e.cn(e.cx("icon"),e.checked?e.onIcon:e.offIcon,e.iconPos==="left"?e.cx("iconLeft"):e.cx("iconRight"))),x("data-pc-section","icon")}}function zn(i,o){if(i&1&&j(0,Rn,1,3,"span",1),i&2){let e=l(2);P(e.onIcon||e.offIcon?0:-1)}}function $n(i,o){i&1&&ge(0)}function jn(i,o){if(i&1&&y(0,$n,1,0,"ng-container",0),i&2){let e=l(2);c("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",Ne(2,Et,e.checked))}}function Pn(i,o){if(i&1&&(j(0,zn,1,1)(1,jn,1,4,"ng-container"),T(2,"span"),Y(3),S()),i&2){let e=l();P(e.iconTemplate?1:0),d(2),C(e.cx("label")),x("data-pc-section","label"),d(),qe(e.checked?e.hasOnLabel?e.onLabel:"\xA0":e.hasOffLabel?e.offLabel:"\xA0")}}var Un=`
    ${Mt}

    /* For PrimeNG (iconPos) */
    .p-togglebutton-icon-right {
        order: 1;
    }

    .p-togglebutton.ng-invalid.ng-dirty {
        border-color: dt('togglebutton.invalid.border.color');
    }
`,Gn={root:({instance:i})=>["p-togglebutton p-component",{"p-togglebutton-checked":i.checked,"p-invalid":i.invalid(),"p-disabled":i.$disabled(),"p-togglebutton-sm p-inputfield-sm":i.size==="small","p-togglebutton-lg p-inputfield-lg":i.size==="large","p-togglebutton-fluid":i.fluid()}],content:"p-togglebutton-content",icon:"p-togglebutton-icon",iconLeft:"p-togglebutton-icon-left",iconRight:"p-togglebutton-icon-right",label:"p-togglebutton-label"},Bt=(()=>{class i extends G{name="togglebutton";theme=Un;classes=Gn;static \u0275fac=(()=>{let e;return function(t){return(e||(e=v(i)))(t||i)}})();static \u0275prov=w({token:i,factory:i.\u0275fac})}return i})();var Kn={provide:pe,useExisting:re(()=>Ve),multi:!0},Ve=(()=>{class i extends me{onKeyDown(e){switch(e.code){case"Enter":this.toggle(e),e.preventDefault();break;case"Space":this.toggle(e),e.preventDefault();break}}toggle(e){!this.$disabled()&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.writeModelValue(this.checked),this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:e,checked:this.checked}),this.cd.markForCheck())}onLabel="Yes";offLabel="No";onIcon;offIcon;ariaLabel;ariaLabelledBy;styleClass;inputId;tabindex=0;iconPos="left";autofocus;size;allowEmpty;fluid=h(void 0,{transform:b});onChange=new B;iconTemplate;contentTemplate;templates;checked=!1;ngOnInit(){super.ngOnInit(),(this.checked===null||this.checked===void 0)&&(this.checked=!1)}_componentStyle=_(Bt);onBlur(){this.onModelTouched()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.offLabel&&this.offLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"icon":this._iconTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}writeControlValue(e,n){this.checked=e,n(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(t){return(e||(e=v(i)))(t||i)}})();static \u0275cmp=M({type:i,selectors:[["p-toggleButton"],["p-togglebutton"],["p-toggle-button"]],contentQueries:function(n,t,r){if(n&1&&(O(r,Vn,4),O(r,Fn,4),O(r,ce,4)),n&2){let a;E(a=A())&&(t.iconTemplate=a.first),E(a=A())&&(t.contentTemplate=a.first),E(a=A())&&(t.templates=a)}},hostVars:7,hostBindings:function(n,t){n&1&&k("keydown",function(a){return t.onKeyDown(a)})("click",function(a){return t.toggle(a)}),n&2&&(x("aria-labelledby",t.ariaLabelledBy)("aria-label",t.ariaLabel)("aria-pressed",t.checked?"true":"false")("role","button")("tabindex",t.tabindex!==void 0?t.tabindex:t.$disabled()?-1:0),C(t.cn(t.cx("root"),t.styleClass)))},inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",Z],iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",b],size:"size",allowEmpty:"allowEmpty",fluid:[1,"fluid"]},outputs:{onChange:"onChange"},features:[U([Kn,Bt]),$e([rt]),D],decls:3,vars:7,consts:[[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class"]],template:function(n,t){n&1&&(T(0,"span"),y(1,On,1,0,"ng-container",0),j(2,Pn,4,5),S()),n&2&&(C(t.cx("content")),d(),c("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)("ngTemplateOutletContext",Ne(5,Et,t.checked)),d(),P(t.contentTemplate?-1:2))},dependencies:[J,de,N],encapsulation:2,changeDetection:0})}return i})();var At=`
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
`;var qn=["item"],Qn=(i,o)=>({$implicit:i,index:o});function Hn(i,o){return this.getOptionLabel(o)}function Wn(i,o){i&1&&ge(0)}function Yn(i,o){if(i&1&&y(0,Wn,1,0,"ng-container",3),i&2){let e=l(2),n=e.$implicit,t=e.$index,r=l();c("ngTemplateOutlet",r.itemTemplate||r._itemTemplate)("ngTemplateOutletContext",He(2,Qn,n,t))}}function Zn(i,o){i&1&&y(0,Yn,1,5,"ng-template",null,0,We)}function Jn(i,o){if(i&1){let e=F();T(0,"p-togglebutton",2),k("onChange",function(t){let r=p(e),a=r.$implicit,s=r.$index,u=l();return m(u.onOptionSelect(t,a,s))}),j(1,Zn,2,0),S()}if(i&2){let e=o.$implicit,n=l();c("autofocus",n.autofocus)("styleClass",n.styleClass)("ngModel",n.isSelected(e))("onLabel",n.getOptionLabel(e))("offLabel",n.getOptionLabel(e))("disabled",n.$disabled()||n.isOptionDisabled(e))("allowEmpty",n.getAllowEmpty())("size",n.size())("fluid",n.fluid()),d(),P(n.itemTemplate||n._itemTemplate?1:-1)}}var Xn=`
    ${At}

    /* For PrimeNG */
    .p-selectbutton.ng-invalid.ng-dirty {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }
`,ei={root:({instance:i})=>["p-selectbutton p-component",{"p-invalid":i.invalid(),"p-selectbutton-fluid":i.fluid()}]},Nt=(()=>{class i extends G{name="selectbutton";theme=Xn;classes=ei;static \u0275fac=(()=>{let e;return function(t){return(e||(e=v(i)))(t||i)}})();static \u0275prov=w({token:i,factory:i.\u0275fac})}return i})();var ti={provide:pe,useExisting:re(()=>Vt),multi:!0},Vt=(()=>{class i extends me{options;optionLabel;optionValue;optionDisabled;get unselectable(){return this._unselectable}_unselectable=!1;set unselectable(e){this._unselectable=e,this.allowEmpty=!e}tabindex=0;multiple;allowEmpty=!0;styleClass;ariaLabelledBy;dataKey;autofocus;size=h();fluid=h(void 0,{transform:b});onOptionClick=new B;onChange=new B;itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;focusedIndex=0;_componentStyle=_(Nt);getAllowEmpty(){return this.multiple?this.allowEmpty||this.value?.length!==1:this.allowEmpty}getOptionLabel(e){return this.optionLabel?Ce(e,this.optionLabel):e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?Ce(e,this.optionValue):this.optionLabel||e.value===void 0?e:e.value}isOptionDisabled(e){return this.optionDisabled?Ce(e,this.optionDisabled):e.disabled!==void 0?e.disabled:!1}onOptionSelect(e,n,t){if(this.$disabled()||this.isOptionDisabled(n))return;let r=this.isSelected(n);if(r&&this.unselectable)return;let a=this.getOptionValue(n),s;if(this.multiple)r?s=this.value.filter(u=>!fe(u,a,this.equalityKey||void 0)):s=this.value?[...this.value,a]:[a];else{if(r&&!this.allowEmpty)return;s=r?null:a}this.focusedIndex=t,this.value=s,this.writeModelValue(this.value),this.onModelChange(this.value),this.onChange.emit({originalEvent:e,value:this.value}),this.onOptionClick.emit({originalEvent:e,option:n,index:t})}changeTabIndexes(e,n){let t,r;for(let a=0;a<=this.el.nativeElement.children.length-1;a++)this.el.nativeElement.children[a].getAttribute("tabindex")==="0"&&(t={elem:this.el.nativeElement.children[a],index:a});n==="prev"?t.index===0?r=this.el.nativeElement.children.length-1:r=t.index-1:t.index===this.el.nativeElement.children.length-1?r=0:r=t.index+1,this.focusedIndex=r,this.el.nativeElement.children[r].focus()}onFocus(e,n){this.focusedIndex=n}onBlur(){this.onModelTouched()}removeOption(e){this.value=this.value.filter(n=>!fe(n,this.getOptionValue(e),this.dataKey))}isSelected(e){let n=!1,t=this.getOptionValue(e);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let r of this.value)if(fe(r,t,this.dataKey)){n=!0;break}}}else n=fe(this.getOptionValue(e),this.value,this.equalityKey||void 0);return n}templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break}})}writeControlValue(e,n){this.value=e,n(this.value),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(t){return(e||(e=v(i)))(t||i)}})();static \u0275cmp=M({type:i,selectors:[["p-selectButton"],["p-selectbutton"],["p-select-button"]],contentQueries:function(n,t,r){if(n&1&&(O(r,qn,4),O(r,ce,4)),n&2){let a;E(a=A())&&(t.itemTemplate=a.first),E(a=A())&&(t.templates=a)}},hostVars:6,hostBindings:function(n,t){n&2&&(x("role","group")("aria-labelledby",t.ariaLabelledBy)("data-pc-section","root")("data-pc-name","selectbutton"),C(t.cx("root")))},inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",unselectable:[2,"unselectable","unselectable",b],tabindex:[2,"tabindex","tabindex",Z],multiple:[2,"multiple","multiple",b],allowEmpty:[2,"allowEmpty","allowEmpty",b],styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",dataKey:"dataKey",autofocus:[2,"autofocus","autofocus",b],size:[1,"size"],fluid:[1,"fluid"]},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[U([ti,Nt]),D],decls:2,vars:0,consts:[["content",""],[3,"autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size","fluid"],[3,"onChange","autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size","fluid"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,t){n&1&&je(0,Jn,2,10,"p-togglebutton",1,Hn,!0),n&2&&Pe(t.options)},dependencies:[Ve,dt,Se,lt,J,de,N],encapsulation:2,changeDetection:0})}return i})(),Fr=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=H({type:i});static \u0275inj=Q({imports:[Vt,N,N]})}return i})();export{Ee as a,Lt as b,Wo as c,Vt as d,Fr as e,ht as f,bt as g,wt as h};
