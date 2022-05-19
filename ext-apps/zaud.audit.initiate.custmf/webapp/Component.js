sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"sap/grc/acs/aud/audit/initiate/Component"
], function(UIComponent, Device, AuditComponent) {
	"use strict";

	return AuditComponent.extend("zaud.audit.initiate.custmf.Component",
		{
			metadata: { 
				manifest: "json"
			}
		}
	);

});