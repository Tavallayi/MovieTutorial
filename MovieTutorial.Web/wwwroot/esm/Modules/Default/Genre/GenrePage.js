import{c as e,f as s,g as f,i}from"../../../_chunks/chunk-THKE7DQS.js";var q=s(i(),1);var R=s(i(),1);var m=class m extends R.ColumnsBase{};e(m,"GenreColumns"),m.columnsKey="Default.Genre",m.Fields=(0,R.fieldsProxy)();var y=m;var p=s(i(),1);var n=class n extends p.PrefixedContext{constructor(l){if(super(l),!n.init){n.init=!0;var a=p.StringEditor;(0,p.initFormType)(n,["Name",a])}}};e(n,"GenreForm"),n.formKey="Default.Genre";var d=n;var S=s(i(),1);var t=class t{};e(t,"GenreRow"),t.idProperty="GenreId",t.nameProperty="Name",t.localTextPrefix="Default.Genre",t.deletePermission="{",t.insertPermission="{",t.readPermission="{",t.updatePermission="{",t.Fields=(0,S.fieldsProxy)();var c=t;var g=s(i(),1),u;(a=>(a.baseUrl="Default/Genre",a.Methods={Create:"Default/Genre/Create",Update:"Default/Genre/Update",Delete:"Default/Genre/Delete",Retrieve:"Default/Genre/Retrieve",List:"Default/Genre/List"},["Create","Update","Delete","Retrieve","List"].forEach(D=>{a[D]=function(C,w,L){return(0,g.serviceRequest)(a.baseUrl+"/"+D,C,w,L)}})))(u||(u={}));var x=s(i(),1);var v=s(i(),1);var r=class extends v.EntityDialog{constructor(){super(...arguments);this.form=new d(this.idPrefix)}getFormKey(){return d.formKey}getRowDefinition(){return c}getService(){return u.baseUrl}};e(r,"GenreDialog"),r=f([v.Decorators.registerClass("MovieTutorial.Default.GenreDialog")],r);var o=class extends x.EntityGrid{getColumnsKey(){return y.columnsKey}getDialogType(){return r}getRowDefinition(){return c}getService(){return u.baseUrl}constructor(l){super(l)}};e(o,"GenreGrid"),o=f([x.Decorators.registerClass("MovieTutorial.Default.GenreGrid")],o);function G(){(0,q.initFullHeightGridPage)(new o($("#GridDiv")).element)}e(G,"pageInit");export{G as default};
//# sourceMappingURL=GenrePage.js.map
