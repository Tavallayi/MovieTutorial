import{e as f,f as d,g as l,h as a}from"../../../_chunks/chunk-PCOCEHJT.js";import{c as n,f as p,g as u,i as m}from"../../../_chunks/chunk-THKE7DQS.js";var g=p(m(),1);var i=p(m(),1);var c=p(m(),1);var r=class extends c.EntityDialog{constructor(){super(...arguments);this.form=new d(this.idPrefix)}getFormKey(){return d.formKey}getRowDefinition(){return l}getService(){return a.baseUrl}};n(r,"MovieDialog"),r=u([c.Decorators.panel(),c.Decorators.registerClass("MovieTutorial.MovieDB.MovieDialog")],r);var o=class extends i.EntityGrid{getColumnsKey(){return f.columnsKey}getDialogType(){return r}getRowDefinition(){return l}getService(){return a.baseUrl}constructor(e){super(e)}getQuickSearchFields(){let e=n(s=>(0,i.localText)(`Db.${l.localTextPrefix}.${s}`),"txt"),t=l.Fields;return[{name:"",title:"All"},{name:t.Description,title:e(t.Description)},{name:t.Storyline,title:e(t.Storyline)},{name:t.Year,title:e(t.Year)}]}getQuickFilters(){let e=super.getQuickFilters(),t=(0,i.first)(e,s=>s.field==l.Fields.GenreList);return t.handler=s=>{let v=s.request,y=s.widget.values;v.Genres=y.map(F=>parseInt(F,10)),s.handled=!0},e}};n(o,"MovieGrid"),o=u([i.Decorators.registerClass("MovieTutorial.MovieDB.MovieGrid")],o);function x(){(0,g.initFullHeightGridPage)(new o($("#GridDiv")).element)}n(x,"pageInit");export{x as default};
//# sourceMappingURL=MoviePage.js.map
