// load sap.grc.acs.aud.audit.initiate explicitly because it's not a library
sap.ui.component.load({
	url: "/sap/bc/ui5_ui5/sap/grcaud_audinit/",
	name: "sap.grc.acs.aud.audit.initiate"
  });

sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"sap/grc/acs/aud/audit/initiate/Component"
], function(UIComponent, Device, InitiateAuditComponent) {
	"use strict";

	return InitiateAuditComponent.extend("zaud.audit.initiate.cust.Component",
		{
			metadata: {
				"_version": "1.1.0",
				"sap.app": {
					"_version": "1.3.0",
					"id": "zaud.audit.initiate.cust",
					"type": "application",
					"title": "{{appTitle}}",
					"description": "{{appDescription}}",
					"resources": "resources.json"
				},
				config: {
					"intents": {
						"AuditEngagement-initiate":{
							"sectionConfig":{
								"workProgramSection":{
									"visible": true
								},
								"findingSection": {
									"visible": true
								}
							}
						}
					},
					"appConfig": {
						"i18nEnhancementConfig": {
							"acsLibAudI18n": "/sap/bc/ui5_ui5/sap/ZGRCAUD_EXTINIT/i18n/i18n.properties",
							"i18n": "/sap/bc/ui5_ui5/sap/ZGRCAUD_EXTINIT/i18n/i18n.properties"
						}
					}
				},
				customizing: {
					"sap.ui.viewModifications": {
						"sap.grc.acs.aud.audit.view.Object": {
							"dimensionSection": {
								 "visible": false
							}
						}
					},
					"sap.ui.viewReplacements":{
						"sap.grc.acs.aud.audit.block.view.AuditScope": {
							viewName: "zaud.audit.initiate.cust.view.AuditScope",
							type: "XML"
						}
					},
					"sap.ui.controllerReplacements": {
						"sap.grc.acs.aud.audit.block.controller.AuditScope": "zaud.audit.initiate.cust.controller.AuditScope"
					}
				}
			}
		}
	);

});