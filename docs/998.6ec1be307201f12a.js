"use strict";(self.webpackChunkcountryApp=self.webpackChunkcountryApp||[]).push([[998],{3998:(et,f,s)=>{s.r(f),s.d(f,{CountriesModule:()=>W});var c=s(6814),h=s(601),t=s(4946),Z=s(6306),C=s(2096),A=s(7398),u=s(9397),q=s(9862);let g=(()=>{class n{constructor(e){this.http=e,this.apiUrl="https://restcountries.com/v3.1",this.CacheStore={byCapital:{term:"",countries:[]},byCountries:{term:"",countries:[]},byRegion:{region:"",countries:[]}},this.loadFormLocalStore()}saveToLocalStore(){localStorage.setItem("CacheStore",JSON.stringify(this.CacheStore))}loadFormLocalStore(){localStorage.getItem("CacheStore")&&(this.CacheStore=JSON.parse(localStorage.getItem("CacheStore")))}getCountriesRequest(e){return this.http.get(e).pipe((0,Z.K)(()=>(0,C.of)([])))}searchCountryByAlphaCode(e){return this.http.get(`${this.apiUrl}/alpha/${e}`).pipe((0,A.U)(r=>r.length>0?r[0]:null),(0,Z.K)(()=>(0,C.of)(null)))}searchCapital(e){return this.getCountriesRequest(`${this.apiUrl}/capital/${e}`).pipe((0,u.b)(r=>this.CacheStore.byCapital={term:e,countries:r}),(0,u.b)(()=>this.saveToLocalStore()))}searchCountry(e){return this.getCountriesRequest(`${this.apiUrl}/name/${e}`).pipe((0,u.b)(r=>this.CacheStore.byCountries={term:e,countries:r}),(0,u.b)(()=>this.saveToLocalStore()))}searchRegion(e){return this.getCountriesRequest(`${this.apiUrl}/region/${e}`).pipe((0,u.b)(r=>this.CacheStore.byRegion={region:e,countries:r}),(0,u.b)(()=>this.saveToLocalStore()))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(q.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var _=s(8645),U=s(7394);class S extends U.w0{constructor(o,e){super()}schedule(o,e=0){return this}}const m={setInterval(n,o,...e){const{delegate:i}=m;return i?.setInterval?i.setInterval(n,o,...e):setInterval(n,o,...e)},clearInterval(n){const{delegate:o}=m;return(o?.clearInterval||clearInterval)(n)},delegate:void 0};var O=s(9039);const v={now:()=>(v.delegate||Date).now(),delegate:void 0};class d{constructor(o,e=d.now){this.schedulerActionCtor=o,this.now=e}schedule(o,e=0,i){return new this.schedulerActionCtor(this,o).schedule(i,e)}}d.now=v.now;const P=new class B extends d{constructor(o,e=d.now){super(o,e),this.actions=[],this._active=!1}flush(o){const{actions:e}=this;if(this._active)return void e.push(o);let i;this._active=!0;do{if(i=o.execute(o.state,o.delay))break}while(o=e.shift());if(this._active=!1,i){for(;o=e.shift();)o.unsubscribe();throw i}}}(class w extends S{constructor(o,e){super(o,e),this.scheduler=o,this.work=e,this.pending=!1}schedule(o,e=0){var i;if(this.closed)return this;this.state=o;const r=this.id,a=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(a,r,e)),this.pending=!0,this.delay=e,this.id=null!==(i=this.id)&&void 0!==i?i:this.requestAsyncId(a,this.id,e),this}requestAsyncId(o,e,i=0){return m.setInterval(o.flush.bind(o,this),i)}recycleAsyncId(o,e,i=0){if(null!=i&&this.delay===i&&!1===this.pending)return e;null!=e&&m.clearInterval(e)}execute(o,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const i=this._execute(o,e);if(i)return i;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(o,e){let r,i=!1;try{this.work(o)}catch(a){i=!0,r=a||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){const{id:o,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,(0,O.P)(i,this),null!=o&&(this.id=this.recycleAsyncId(e,o,null)),this.delay=null,super.unsubscribe()}}});var I=s(9360),R=s(8251);let b=(()=>{class n{constructor(){this.dbouncer=new _.x,this.placeholder="",this.initialValue="",this.onValue=new t.vpe,this.onDebounce=new t.vpe}ngOnInit(){this.dbouncerSuscription=this.dbouncer.pipe(function J(n,o=P){return(0,I.e)((e,i)=>{let r=null,a=null,l=null;const x=()=>{if(r){r.unsubscribe(),r=null;const p=a;a=null,i.next(p)}};function tt(){const p=l+n,T=o.now();if(T<p)return r=this.schedule(void 0,p-T),void i.add(r);x()}e.subscribe((0,R.x)(i,p=>{a=p,l=o.now(),r||(r=o.schedule(tt,n),i.add(r))},()=>{x(),i.complete()},void 0,()=>{a=r=null}))})}(300)).subscribe(e=>{this.onDebounce.emit(e)})}ngOnDestroy(){this.dbouncerSuscription?.unsubscribe()}emitValue(e){this.onValue.emit(e)}onKeyPress(e){this.dbouncer.next(e)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["shared-search-box"]],inputs:{placeholder:"placeholder",initialValue:"initialValue"},outputs:{onValue:"onValue",onDebounce:"onDebounce"},decls:2,vars:2,consts:[["type","text",1,"form-control",3,"placeholder","value","keyup"],["txtInput",""]],template:function(e,i){if(1&e){const r=t.EpF();t.TgZ(0,"input",0,1),t.NdJ("keyup",function(){t.CHM(r);const l=t.MAs(1);return t.KtG(i.onKeyPress(l.value))}),t.qZA()}2&e&&t.Q6J("placeholder",i.placeholder)("value",i.initialValue)},encapsulation:2}),n})(),M=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["shared-loading-spinner"]],decls:15,vars:0,consts:[[1,"spinner-cointainer","bg-dark"],["width","45","height","45","viewBox","0 0 45 45","xmlns","http://www.w3.org/2000/svg","stroke","#fff"],["fill","none","fill-rule","evenodd","transform","translate(1 1)","stroke-width","2"],["cx","22","cy","22","r","6","stroke-opacity","0"],["attributeName","r","begin","1.5s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","1.5s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","1.5s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["attributeName","r","begin","3s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","3s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","3s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["cx","22","cy","22","r","8"],["attributeName","r","begin","0s","dur","1.5s","values","6;1;2;3;4;5;6","calcMode","linear","repeatCount","indefinite"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"span"),t._uU(2,"Buscando"),t.qZA(),t.O4$(),t.TgZ(3,"svg",1)(4,"g",2)(5,"circle",3),t._UZ(6,"animate",4)(7,"animate",5)(8,"animate",6),t.qZA(),t.TgZ(9,"circle",3),t._UZ(10,"animate",7)(11,"animate",8)(12,"animate",9),t.qZA(),t.TgZ(13,"circle",10),t._UZ(14,"animate",11),t.qZA()()()())},styles:[".spinner-cointainer[_ngcontent-%COMP%]{position:fixed;bottom:15px;right:15px;background-color:#000;color:#fff;padding:5px 10px;border-radius:20px;display:flex;align-items:center;box-shadow:0 0 5px #00000080}span[_ngcontent-%COMP%]{margin-left:5px}"]}),n})();function N(n,o){1&n&&(t.TgZ(0,"div",2),t._uU(1," No hay paises que mostrar\n"),t.qZA())}const V=function(n){return["/countries/by",n]};function F(n,o){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._UZ(6,"img",5),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.ALo(13,"number"),t.qZA(),t.TgZ(14,"td")(15,"a",6),t._uU(16,"Info"),t.qZA()()()),2&n){const e=o.$implicit,i=o.index;t.xp6(2),t.Oqu(i+1),t.xp6(2),t.hij(" ",e.flag," "),t.xp6(2),t.Q6J("src",e.flags.svg,t.LSH)("alt",e.name.common),t.xp6(2),t.Oqu(e.name.common),t.xp6(2),t.Oqu(e.capital),t.xp6(2),t.Oqu(t.lcZ(13,8,e.population)),t.xp6(3),t.Q6J("routerLink",t.VKq(10,V,e.cca3))}}function L(n,o){if(1&n&&(t.TgZ(0,"table",3)(1,"thead")(2,"tr")(3,"th"),t._uU(4,"#"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Siglas"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Bandera"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Nombre"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Capital"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Poblacion"),t.qZA(),t._UZ(15,"th"),t.qZA()(),t.TgZ(16,"tbody"),t.YNc(17,F,17,12,"tr",4),t.qZA()()),2&n){const e=t.oxw();t.xp6(17),t.Q6J("ngForOf",e.countries)}}let y=(()=>{class n{constructor(){this.countries=[]}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["country-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],["table",""],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"src","alt"],[3,"routerLink"]],template:function(e,i){if(1&e&&(t.YNc(0,N,2,0,"div",0),t.YNc(1,L,18,1,"ng-template",null,1,t.W1O)),2&e){const r=t.MAs(2);t.Q6J("ngIf",0===i.countries.length)("ngIfElse",r)}},dependencies:[c.sg,c.O5,h.rH,c.JJ],styles:["img[_ngcontent-%COMP%]{width:25px}"]}),n})();function k(n,o){1&n&&t._UZ(0,"shared-loading-spinner")}let Q=(()=>{class n{constructor(e){this.countriesService=e,this.countries=[],this.isLoandig=!1,this.initialValue=""}ngOnInit(){this.countries=this.countriesService.CacheStore.byCapital.countries,this.initialValue=this.countriesService.CacheStore.byCapital.term}searchByCapital(e){this.isLoandig=!0,this.countriesService.searchCapital(e).subscribe(i=>{this.countries=i,this.isLoandig=!1})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-by-capital-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por capital",3,"initialValue","onDebounce"],[4,"ngIf"],[3,"countries"]],template:function(e,i){1&e&&(t.TgZ(0,"h2"),t._uU(1,"Por capital"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),t.NdJ("onDebounce",function(a){return i.searchByCapital(a)}),t.qZA()()(),t.TgZ(6,"div",0)(7,"div",1),t._UZ(8,"hr"),t.YNc(9,k,1,0,"shared-loading-spinner",3),t._UZ(10,"country-table",4),t.qZA()()),2&e&&(t.xp6(5),t.Q6J("initialValue",i.initialValue),t.xp6(4),t.Q6J("ngIf",i.isLoandig),t.xp6(1),t.Q6J("countries",i.countries))},dependencies:[c.O5,b,M,y],encapsulation:2}),n})(),Y=(()=>{class n{constructor(e){this.countriesService=e,this.countries=[],this.initialValue=""}ngOnInit(){this.countries=this.countriesService.CacheStore.byCountries.countries,this.initialValue=this.countriesService.CacheStore.byCountries.term}searchByCountry(e){this.countriesService.searchCountry(e).subscribe(i=>{this.countries=i})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-by-country-page"]],decls:10,vars:2,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por pais",3,"initialValue","onDebounce"],[3,"countries"]],template:function(e,i){1&e&&(t.TgZ(0,"h2"),t._uU(1,"Por Pais"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),t.NdJ("onDebounce",function(a){return i.searchByCountry(a)}),t.qZA()()(),t.TgZ(6,"div",0)(7,"div",1),t._UZ(8,"hr")(9,"country-table",3),t.qZA()()),2&e&&(t.xp6(5),t.Q6J("initialValue",i.initialValue),t.xp6(4),t.Q6J("countries",i.countries))},dependencies:[b,y],encapsulation:2}),n})();const D=function(n){return{"btn-outline-primary":n}};function $(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"button",5),t.NdJ("click",function(){const a=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.searchByRegion(a))}),t._uU(1),t.qZA()}if(2&n){const e=o.$implicit,i=t.oxw();t.Q6J("ngClass",t.VKq(2,D,i.selectedRegion===e)),t.xp6(1),t.hij(" ",e," ")}}let E=(()=>{class n{constructor(e){this.countriesService=e,this.countries=[],this.regions=["Africa","Americas","Asia","Europe","Oceania"]}ngOnInit(){this.countries=this.countriesService.CacheStore.byRegion.countries,this.selectedRegion=this.countriesService.CacheStore.byRegion.region}searchByRegion(e){this.selectedRegion=e,this.countriesService.searchRegion(e).subscribe(i=>{this.countries=i})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-by-region-page"]],decls:10,vars:2,consts:[[1,"row"],[1,"col","text-center"],["class","btn mx-2 ",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col"],[3,"countries"],[1,"btn","mx-2",3,"ngClass","click"]],template:function(e,i){1&e&&(t.TgZ(0,"h2"),t._uU(1,"Por Region"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1),t.YNc(5,$,2,4,"button",2),t.qZA()(),t.TgZ(6,"div",0)(7,"div",3),t._UZ(8,"hr")(9,"country-table",4),t.qZA()()),2&e&&(t.xp6(5),t.Q6J("ngForOf",i.regions),t.xp6(4),t.Q6J("countries",i.countries))},dependencies:[c.mk,c.sg,y],encapsulation:2}),n})();var j=s(4664);function K(n,o){1&n&&(t.TgZ(0,"div",2),t._uU(1," Espere por favor "),t.qZA())}function X(n,o){if(1&n&&(t.TgZ(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),t._uU(4,"Pais: "),t.TgZ(5,"strong"),t._uU(6),t.qZA()()()(),t.TgZ(7,"div",3)(8,"div",5)(9,"h3"),t._uU(10,"Bandera"),t.qZA(),t._UZ(11,"img",6),t.qZA(),t.TgZ(12,"div",7)(13,"h3"),t._uU(14,"Informacion"),t.qZA(),t.TgZ(15,"ul",8)(16,"li",9)(17,"strong"),t._uU(18,"Poblacion:"),t.qZA(),t._uU(19),t.ALo(20,"number"),t.qZA(),t.TgZ(21,"li",9)(22,"strong"),t._uU(23,"Codigo:"),t.qZA(),t._uU(24),t.qZA()()()(),t.TgZ(25,"div",10)(26,"div",7)(27,"h3"),t._uU(28,"Traducciones"),t.qZA(),t.TgZ(29,"div",11)(30,"span",12),t._uU(31),t.qZA(),t.TgZ(32,"span",12),t._uU(33),t.qZA(),t.TgZ(34,"span",12),t._uU(35),t.qZA(),t.TgZ(36,"span",12),t._uU(37),t.qZA(),t.TgZ(38,"span",12),t._uU(39),t.qZA(),t.TgZ(40,"span",12),t._uU(41),t.qZA(),t.TgZ(42,"span",12),t._uU(43),t.qZA(),t.TgZ(44,"span",12),t._uU(45),t.qZA(),t.TgZ(46,"span",12),t._uU(47),t.qZA(),t.TgZ(48,"span",12),t._uU(49),t.qZA(),t.TgZ(50,"span",12),t._uU(51),t.qZA(),t.TgZ(52,"span",12),t._uU(53),t.qZA(),t.TgZ(54,"span",12),t._uU(55),t.qZA(),t.TgZ(56,"span",12),t._uU(57),t.qZA(),t.TgZ(58,"span",12),t._uU(59),t.qZA(),t.TgZ(60,"span",12),t._uU(61),t.qZA(),t.TgZ(62,"span",12),t._uU(63),t.qZA(),t.TgZ(64,"span",12),t._uU(65),t.qZA(),t.TgZ(66,"span",12),t._uU(67),t.qZA(),t.TgZ(68,"span",12),t._uU(69),t.qZA(),t.TgZ(70,"span",12),t._uU(71),t.qZA(),t.TgZ(72,"span",12),t._uU(73),t.qZA(),t.TgZ(74,"span",12),t._uU(75),t.qZA(),t.TgZ(76,"span",12),t._uU(77),t.qZA(),t.TgZ(78,"span",12),t._uU(79),t.qZA()()()()()),2&n){const e=t.oxw();t.xp6(6),t.Oqu(e.country.name.common),t.xp6(5),t.Q6J("src",e.country.flags.svg,t.LSH)("alt",e.country.name.common),t.xp6(8),t.hij(" ",t.lcZ(20,30,e.country.population)," "),t.xp6(5),t.hij(" ",e.country.cca3," "),t.xp6(7),t.Oqu(e.country.translations.ara.common),t.xp6(2),t.Oqu(e.country.translations.bre.common),t.xp6(2),t.Oqu(e.country.translations.ces.common),t.xp6(2),t.Oqu(e.country.translations.cym.common),t.xp6(2),t.Oqu(e.country.translations.deu.common),t.xp6(2),t.Oqu(e.country.translations.est.common),t.xp6(2),t.Oqu(e.country.translations.fin.common),t.xp6(2),t.Oqu(e.country.translations.fra.common),t.xp6(2),t.Oqu(e.country.translations.hrv.common),t.xp6(2),t.Oqu(e.country.translations.hun.common),t.xp6(2),t.Oqu(e.country.translations.ita.common),t.xp6(2),t.Oqu(e.country.translations.jpn.common),t.xp6(2),t.Oqu(e.country.translations.kor.common),t.xp6(2),t.Oqu(e.country.translations.nld.common),t.xp6(2),t.Oqu(e.country.translations.per.common),t.xp6(2),t.Oqu(e.country.translations.pol.common),t.xp6(2),t.Oqu(e.country.translations.por.common),t.xp6(2),t.Oqu(e.country.translations.rus.common),t.xp6(2),t.Oqu(e.country.translations.slk.common),t.xp6(2),t.Oqu(e.country.translations.spa.common),t.xp6(2),t.Oqu(e.country.translations.srp.common),t.xp6(2),t.Oqu(e.country.translations.swe.common),t.xp6(2),t.Oqu(e.country.translations.tur.common),t.xp6(2),t.Oqu(e.country.translations.urd.common),t.xp6(2),t.Oqu(e.country.translations.zho.common)}}const z=[{path:"by-capital",component:Q},{path:"by-country",component:Y},{path:"by-region",component:E},{path:"by/:id",component:(()=>{class n{constructor(e,i,r){this.activatedRoute=e,this.countriesService=i,this.router=r}ngOnInit(){this.activatedRoute.params.pipe((0,j.w)(({id:e})=>this.countriesService.searchCountryByAlphaCode(e))).subscribe(e=>e?this.country=e:this.router.navigateByUrl(""))}searchCountry(e){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.gz),t.Y36(g),t.Y36(h.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(e,i){if(1&e&&(t.YNc(0,K,2,0,"ng-template",null,0,t.W1O),t.YNc(2,X,80,32,"div",1)),2&e){const r=t.MAs(1);t.xp6(2),t.Q6J("ngIf",i.country)("ngIfElse",r)}},dependencies:[c.O5,c.JJ],encapsulation:2}),n})()},{path:"**",redirectTo:"by-capital"}];let H=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[h.Bz.forChild(z),h.Bz]}),n})();var G=s(6208);let W=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.ez,H,G.m]}),n})()}}]);