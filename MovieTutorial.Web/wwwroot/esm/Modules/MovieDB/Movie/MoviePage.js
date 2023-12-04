import{c as o,e as s,f,h as a}from"../../../_chunks/chunk-CFICWFWM.js";var w=s(a(),1);var D=s(a(),1);var T=s(a(),1),y=(e=>(e[e.Film=1]="Film",e[e.TvSeries=2]="TvSeries",e[e.MiniSeries=3]="MiniSeries",e))(y||{});T.Decorators.registerEnumType(y,"MovieTutorial.MovieDB.MovieKind","MovieDB.MovieKind");var d=class d extends D.ColumnsBase{};o(d,"MovieColumns"),d.columnsKey="MovieDB.Movie",d.Fields=(0,D.fieldsProxy)();var x=d;var t=s(a(),1);var m=class m extends t.PrefixedContext{constructor(n){if(super(n),!m.init){m.init=!0;var r=t.StringEditor,e=t.TextAreaEditor,R=t.IntegerEditor,g=t.DateEditor,E=t.EnumEditor;(0,t.initFormType)(m,["Title",r,"Description",e,"Storyline",e,"Year",R,"ReleaseDate",g,"Runtime",R,"Kind",E])}}};o(m,"MovieForm"),m.formKey="MovieDB.Movie";var v=m;var C=s(a(),1);var i=class i{};o(i,"MovieRow"),i.idProperty="MovieId",i.nameProperty="Title",i.localTextPrefix="MovieDB.Movie",i.deletePermission="Administration:General",i.insertPermission="Administration:General",i.readPermission="Administration:General",i.updatePermission="Administration:General",i.Fields=(0,C.fieldsProxy)();var p=i;var q=s(a(),1),u;(r=>(r.baseUrl="MovieDB/Movie",r.Methods={Create:"MovieDB/Movie/Create",Update:"MovieDB/Movie/Update",Delete:"MovieDB/Movie/Delete",Retrieve:"MovieDB/Movie/Retrieve",List:"MovieDB/Movie/List"},["Create","Update","Delete","Retrieve","List"].forEach(e=>{r[e]=function(R,g,E){return(0,q.serviceRequest)(r.baseUrl+"/"+e,R,g,E)}})))(u||(u={}));var S=s(a(),1);var M=s(a(),1);var l=class extends M.EntityDialog{constructor(){super(...arguments);this.form=new v(this.idPrefix)}getFormKey(){return v.formKey}getRowDefinition(){return p}getService(){return u.baseUrl}};o(l,"MovieDialog"),l=f([M.Decorators.registerClass("MovieTutorial.MovieDB.MovieDialog")],l);var B=s(a(),1);var c=class extends S.EntityGrid{getColumnsKey(){return x.columnsKey}getDialogType(){return l}getRowDefinition(){return p}getService(){return u.baseUrl}constructor(n){super(n)}getQuickSearchFields(){let n=o(e=>(0,B.localText)(`Db.${p.localTextPrefix}.${e}`),"txt"),r=p.Fields;return[{name:"",title:"All"},{name:r.Description,title:n(r.Description)},{name:r.Storyline,title:n(r.Storyline)},{name:r.Year,title:n(r.Year)}]}};o(c,"MovieGrid"),c=f([S.Decorators.registerClass("MovieTutorial.MovieDB.MovieGrid")],c);function K(){(0,w.initFullHeightGridPage)(new c($("#GridDiv")).element)}o(K,"pageInit");export{K as default};
//# sourceMappingURL=MoviePage.js.map
