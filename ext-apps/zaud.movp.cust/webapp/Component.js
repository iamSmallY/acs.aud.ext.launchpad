// load sap.grc.acs.aud.audit.initiate explicitly because it's not a library
sap.ui.component.load({
	url: "/sap/bc/ui5_ui5/sap/grcaud_movp/",
	name: "sap.grc.acs.aud.movp"
  });

sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"sap/grc/acs/aud/movp/Component"
], function(UIComponent, Device, OverviewComponent) {
	"use strict";

	return OverviewComponent.extend("zaud.movp.cust.Component",{
		metadata: {
			manifest: "json"
		}
	});

});