import{a as I}from"../../../_chunks/chunk-GRQ6CEAP.js";import{a as f}from"../../../_chunks/chunk-5J746WC3.js";import{h as x,k as C,l as y,m as g,n as e,o as h}from"../../../_chunks/chunk-YJXLW3ZO.js";import{c as m,e as n,f as c,h as l}from"../../../_chunks/chunk-CFICWFWM.js";var b=n(l(),1);var v=n(l(),1),U=n(l(),1);var R=n(l(),1),t=n(l(),1);var w=class w extends R.TemplatedDialog{constructor(r){super(r);this.permissions=new I(this.byId("Permissions"),{showRevoke:!0}),g.List({UserID:this.options.userID,Module:null,Submodule:null},s=>{this.permissions.value=s.Entities}),g.ListRolePermissions({UserID:this.options.userID,Module:null,Submodule:null},s=>{this.permissions.rolePermissions=s.Entities}),this.permissions.implicitPermissions=(0,t.getRemoteData)("Administration.ImplicitPermissions"),this.dialogTitle=(0,t.format)((0,t.localText)("Site.UserPermissionDialog.DialogTitle"),this.options.username)}getDialogButtons(){return[{text:(0,t.localText)("Dialogs.OkButton"),cssClass:"btn btn-primary",click:r=>{g.Update({UserID:this.options.userID,Permissions:this.permissions.value,Module:null,Submodule:null},s=>{this.dialogClose(),window.setTimeout(()=>(0,t.notifySuccess)((0,t.localText)("Site.UserPermissionDialog.SaveSuccess")),0)})}},{text:(0,t.localText)("Dialogs.CancelButton"),click:()=>this.dialogClose()}]}getTemplate(){return'<div id="~_Permissions"></div>'}};m(w,"UserPermissionDialog");var P=w;var d=n(l(),1),u=n(l(),1);var o=class extends d.EntityDialog{constructor(){super();this.form=new y(this.idPrefix);this.form.Password.change(()=>{d.EditorUtils.setRequired(this.form.PasswordConfirm,this.form.Password.value.length>0)}),this.form.Password.addValidationRule(this.uniqueName,r=>{if(this.form.Password.value.length<6)return(0,u.format)((0,u.localText)(f.Validation.MinRequiredPasswordLength),6)}),this.form.PasswordConfirm.addValidationRule(this.uniqueName,r=>{if(this.form.Password.value!=this.form.PasswordConfirm.value)return(0,u.localText)(f.Validation.PasswordConfirmMismatch)})}getFormKey(){return y.formKey}getIdProperty(){return e.idProperty}getIsActiveProperty(){return e.isActiveProperty}getLocalTextPrefix(){return e.localTextPrefix}getNameProperty(){return e.nameProperty}getService(){return h.baseUrl}getToolbarButtons(){let r=super.getToolbarButtons();return r.push({title:(0,u.localText)(f.Site.UserDialog.EditPermissionsButton),cssClass:"edit-permissions-button",icon:"fa-lock text-green",onClick:()=>{new P({userID:this.entity.UserId,username:this.entity.Username}).dialogOpen()}}),r}updateInterface(){super.updateInterface(),this.toolbar.findButton("edit-permissions-button").toggleClass("disabled",this.isNewOrDeleted())}afterLoadEntity(){super.afterLoadEntity(),this.form.Password.element.toggleClass("required",this.isNew()).closest(".field").find("sup").toggle(this.isNew()),this.form.PasswordConfirm.element.toggleClass("required",this.isNew()).closest(".field").find("sup").toggle(this.isNew())}};m(o,"UserDialog"),o=c([d.Decorators.registerClass()],o);var i=class extends v.EntityGrid{getColumnsKey(){return C.columnsKey}getDialogType(){return o}getIdProperty(){return e.idProperty}getIsActiveProperty(){return e.isActiveProperty}getLocalTextPrefix(){return e.localTextPrefix}getService(){return h.baseUrl}constructor(a){super(a)}getDefaultSortBy(){return[e.Fields.Username]}createIncludeDeletedButton(){}getColumns(){var a=super.getColumns(),r=(0,U.tryFirst)(a,p=>p.field==e.Fields.Roles);if(r){var s;x.getLookupAsync().then(p=>{s=p,this.slickGrid.invalidate()}),r.format=p=>{if(!s)return'<i class="fa fa-spinner"></i>';var D=(p.value||[]).map(S=>(s.itemById[S]||{}).RoleName||"");return D.sort(),D.join(", ")}}return a}};m(i,"UserGrid"),i=c([v.Decorators.registerClass()],i);$(function(){(0,b.initFullHeightGridPage)(new i($("#GridDiv")).element)});
//# sourceMappingURL=UserPage.js.map
