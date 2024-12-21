sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
  ],
  (Controller, MessageToast,JSONModel) => {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
        onInit() {
            // set data model on view
            const oData = {
               recipient : {
                  name : "UI5"
               }
            };
            const oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
         },
     
        onShowHello() {
       
        MessageToast.show("Hello there!");
      },
    });
  }
);
