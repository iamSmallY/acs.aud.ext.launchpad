# zaud.movp.cust

This document illustrates how to add customizing cards in Audit Management Overview app, including below 2 cases:
1. Create a custom card using existing odata service entity
    * Card: Overdue Audits by Audit Group
    * Chart: Column Chart Card
2. Create a custom card using custom CDS views
    * Ongoing Audits by Organization
    * Chart: Bar Chart Card

## Case 1: Create a custom card using existing odata service entity
### Overdue Audits by Audit Group

1. Firstly, create a new Metadata Extension [`ZGRCAUD_CV_AUDITNAN`](https://github.tools.sap/GRC-Audit-Management/acs.aud.ext.launchpad/blob/main/ext-apps/zaud.movp.cust/CDS/ZGRCAUD_CV_AUDITANA.txt) in Eclipse to annotate CDS view `GRCAUD_CV_AuditAna`. 
    * **Note**: According to the document [ABAP CDS - Evaluation of Metadata Extensions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_meta_data_extension_eval.htm), the metadata extension in `#CUSTOMER` layer will overite the annocations defined in `#CORE` layer, so you have to copy the whole `@UI.chart` annotation from standard one and append your custom ones in it.
2. Then add a new custom card `custom01` in [manifest.json](https://github.tools.sap/GRC-Audit-Management/acs.aud.ext.launchpad/blob/main/ext-apps/zaud.movp.cust/webapp/manifest.json), consuming the chart added in `@UI.chart` annotation.
3. The screenshot of this case:

![Screenshot](https://github.tools.sap/GRC-Audit-Management/acs.aud.ext.launchpad/blob/main/ext-apps/zaud.movp.cust/Screenshots/Case01.png)

## Case 2: Create a custom card using custom CDS views
### Ongoing Audits by Organization

1. Firstly, create a new CDS view [`ZGRCAUD_CV_AuditByOrgAna`](https://github.tools.sap/GRC-Audit-Management/acs.aud.ext.launchpad/blob/main/ext-apps/zaud.movp.cust/CDS/ZGRCAUD_CV_AuditByOrgAna.txt) in Eclipse, the annotations for analytics has been added in this CDS view.
2. Go to transaction code `SEGW` and create a custom project named `ZGRCAUD_MOVP`.
3. Execute `Data Model` -> `Redefine` -> `OData Service(SAP GW)` to redefine OData Service `GRCAUD_MOVP`.
4. Add CDS view `ZGRCAUD_CV_AuditByOrgAna` in OData Model and generate the cutom project.
    * **Note:** According to the blog [How to redefine RDS based OData services](https://community.sap.com/t5/technology-blogs-by-sap/how-to-redefine-rds-based-odata-services/ba-p/13527155), the `DPC_EXT` and `MPC_EXT` classed will not be updated when generate redefined project, please refer to the sample code projected in this blog to update these 2 classes manually.
5. Then add a new custom card `custom02` in [manifest.json](https://github.tools.sap/GRC-Audit-Management/acs.aud.ext.launchpad/blob/main/ext-apps/zaud.movp.cust/webapp/manifest.json), consuming the chart added in `@UI.chart` annotation.
6. The screenshot of this case:

![Screenshot](https://github.tools.sap/GRC-Audit-Management/acs.aud.ext.launchpad/blob/main/ext-apps/zaud.movp.cust/Screenshots/Case02.png)