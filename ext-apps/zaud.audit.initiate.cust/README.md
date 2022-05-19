# zaud.audit.initiate.cust

* This document is about what customizing extensions the project has done and how to do them.

### UI Sections visibility

1. The `visible` property of `workProgramSection` and `findingSection` in `sap.grc.acs.aud.audit.initiate` are configurable, this project uses [`sectionConfig`](https://github.com/iamSmallY/acs.aud.ext.launchpad/blob/a52947020319b6dad374f4606e380c91f8f95add/ext-apps/zaud.audit.initiate.cust/webapp/Component.js#L29-L36) to config them.
2. For the `dimensionSection`, its `visible` property is not configurable. But in this project, we still want to hide this section, so we use [viewModifications](https://github.com/iamSmallY/acs.aud.ext.launchpad/blob/a52947020319b6dad374f4606e380c91f8f95add/ext-apps/zaud.audit.initiate.cust/webapp/Component.js#L47-L53) to achieve it.

### Customize Field Labels

* In this project, we want to replace the label of `othersGroupTitle` in `sap.grc.acs.aud.audit.initiate`, the label of `labelActivityAUDITCREATE_ROOT` in `sap.grc.acs.lib` and other base label such as the title of the app. Since this is just a simple example, we put the replacement of labels for different projects in the same [file](https://github.com/iamSmallY/acs.aud.ext.launchpad/blob/a52947020319b6dad374f4606e380c91f8f95add/ext-apps/zaud.audit.initiate.cust/webapp/i18n/i18n.properties).
* In order for the replacement to take effect, we need to declare the new i18n file and source i18n file in [Component.js](https://github.com/iamSmallY/acs.aud.ext.launchpad/blob/a52947020319b6dad374f4606e380c91f8f95add/ext-apps/zaud.audit.initiate.cust/webapp/Component.js#L40-L43).
* In the configuration, the path to the new file is the absolute url of the file on the cloud. To test the replacement locally, we have added a proxy in [ui5.yaml](https://github.com/iamSmallY/acs.aud.ext.launchpad/blob/a52947020319b6dad374f4606e380c91f8f95add/ui5.yaml#L28-L33) of the launchpad project.

### View and Controller replacements

* In this project, we want to replace the `SmartField` of Scope Section with the `RichTextEditor`.
1. Copy the [AuditScope.view.xml](https://github.com/iamSmallY/acs.aud.ext.launchpad/blob/a52947020319b6dad374f4606e380c91f8f95add/ui5.yaml#L28-L33) from `sap.grc.acs.aud.audit.initiate`.
2. Replace the `SmartField` with the `RichTextEditor`.
3. Create file [AuditScope.controller.js](https://github.com/iamSmallY/acs.aud.ext.launchpad/blob/a52947020319b6dad374f4606e380c91f8f95add/ext-apps/zaud.audit.initiate.cust/webapp/controller/AuditScope.controller.js), inheriting from the `AuditScope.controller.js` in `sap.grc.acs.aud.audit.initiate`, and adapt to the `RichTextEditor`.
4. Config the mapping in [Component.js](https://github.com/iamSmallY/acs.aud.ext.launchpad/blob/a52947020319b6dad374f4606e380c91f8f95add/ext-apps/zaud.audit.initiate.cust/webapp/Component.js#L54-L62).