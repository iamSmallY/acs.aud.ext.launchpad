# acs.aud.ext.launchpad
Audit Management launchpad for custom development. Some technology you may want to know before starting:
- [UI5 tooling](https://sap.github.io/ui5-tooling/)
- [Setting up Visual Studio Code for UI5 development](https://blogs.sap.com/2021/02/03/setting-up-visual-studio-code-for-ui5-development/)
- [ui5-middleware-simpleproxy](https://github.com/ui5-community/ui5-ecosystem-showcase/tree/master/packages/ui5-middleware-simpleproxy)
- [ui5-middleware-servestatic](https://www.npmjs.com/package/ui5-middleware-servestatic)
- [ui5-task-nwabap-deployer](https://www.npmjs.com/package/ui5-task-nwabap-deployer)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) Versions v20.11.0, v22.0.0, or higher

### Setup

- Clone this project
    - [acs.aud.ext/webapp/index.html](https://github.com/iamSmallY/acs.aud.ext.launchpad/blob/master/webapp/index.html) is the lauchpad for testing. 
    - [acs.aud.ext/ext-apps](https://github.com/iamSmallY/acs.aud.ext.launchpad/tree/master/ext-apps) folder contains two sample apps.
    ```sh
    .
    └── acs.aud.ext.launchpad
        ├── webapp
        └── ext-apps
            ├── zaud.audit.initiate.cust
            ├── zaud.audit.initiate.custmf
            └── ...
    ```
- Adjust [.env](https://github.com/iamSmallY/acs.aud.ext.launchpad/blob/master/.env) file for proxy. For detailed configurations, check [ui5-middleware-simpleproxy](https://github.com/ui5-community/ui5-ecosystem-showcase/tree/master/packages/ui5-middleware-simpleproxy)
    ```properties
    UI5_MIDDLEWARE_SIMPLE_PROXY_BASEURI=<https://your.backend.host/sap>
    UI5_MIDDLEWARE_SIMPLE_PROXY_STRICT_SSL=false
    UI5_MIDDLEWARE_SIMPLE_PROXY_USERNAME=<User Name>
    UI5_MIDDLEWARE_SIMPLE_PROXY_PASSWORD=<Password>
    UI5_MIDDLEWARE_SIMPLE_PROXY_QUERY={"sap-client": <Your client>}
    ```
### Start Launchpad
```sh
cd acs.aud.ext.launchpad
npm install
npm start
```

## Advanced Topics

* You can refer the [Wiki](https://github.com/iamSmallY/acs.aud.ext.launchpad/wiki) for advanced topics.
