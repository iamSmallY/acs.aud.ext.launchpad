sap.ui.define(
	[
		"sap/grc/acs/aud/audit/block/controller/AuditScope.controller",
		"sap/grc/acs/lib/aud/extension/utils/FieldExtensibilityUtil",
		"sap/grc/acs/lib/aud/utils/MessageUtil",
		"sap/grc/acs/lib/aud/utils/ComponentUtil",
		"sap/ui/model/json/JSONModel"
	],
	function(AuditScopeController, FieldExtensibilityUtil, MessageUtil, ComponentUtil, JSONModel) {
		"use strict";

		return AuditScopeController.extend("zaud.audit.initiate.cust.controller.AuditScope", {

			onInit: function() {
				this.oViewModel = new JSONModel({
					bFormDisplay: true
				});
				this.getView().setModel(this.oViewModel, "auditScopeView");

				this._oComponent = ComponentUtil.getComponentById(this.getView().getId());
				this._oComponent.getModel().metadataLoaded().then(function() {
					this._createExtensionGroup();
				}.bind(this));
				sap.ui.getCore().getEventBus().subscribe("sap.grc.acs.aud.audit.EventBus", "resetBlockToDisplayMode", this.setSmartFormToDisplayMode, this);
			},

			onSaveBtnPress: function(){
				this.getView().byId("btnSave").setEnabled(false);
				var oDataModel = this.getView().getModel();
				oDataModel.setUseBatch(false);
				var sPath = this.getView().getBindingContext().getPath();
				this.oNewAuditData = {};
				var oSmartForm = this.getView().byId("smartForm");
				var oExtensionModelData = this.getView().getModel("extensionModel").getData();
				this.oNewAuditData = FieldExtensibilityUtil.saveSmartForm(oSmartForm, oExtensionModelData);
				if(this.getView().getModel("extensionModel").getData().Scope.editable){
					if (!this.oNewAuditData.Scope || this.oNewAuditData.Scope === "") {
						this.getView().byId("btnSave").setEnabled(true);
						MessageUtil.showMsg("msgTypeFailed", this.getView().getModel("i18n").getResourceBundle().getText("MSG_REQUIRED_SCOPE_FIELD"));
					}else{
						this.getView().setBusy(true);
						oDataModel.update(sPath,this.oNewAuditData,
		    				{
			                	merge:true,
			                	success:jQuery.proxy(function(){
			                		this.getView().byId("btnSave").setEnabled(true);
							        oDataModel.refresh();
									this.getView().setBusy(false);
									this.oViewModel.setProperty("/bFormDisplay", true);
									MessageUtil.showMsg("msgTypeSuccessful", this.getView().getModel("i18n").getResourceBundle().getText(
										"EDIT_AUDIT_SCOPE_SUCCESS"));
			                	},this),
			                	error:jQuery.proxy(function(){
			                		this.getView().byId("btnSave").setEnabled(true);
									MessageUtil.showMsg("msgTypeFailed", this.getView().getModel("i18n").getResourceBundle().getText(
									"EDIT_AUDIT_SCOPE_FAIL"));
									this.getView().setBusy(false);
			                	},this)
		    				}
		        		);
					}
				}
			},
			
			onCancelBtnPress: function(){
				this.getView().getModel().resetChanges();
				this.oViewModel.setProperty("/bFormDisplay", true);
			}
		});
	}

);