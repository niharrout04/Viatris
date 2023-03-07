sap.ui.define([
    "sap/ui/core/mvc/Controller", 
    "viatrix/utils/formatter",
    "sap/ui/core/routing/History"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,formatter,History) {
        "use strict";

        return Controller.extend("viatrix.controller.VendorRegistrationForm", {
            formatter: formatter,

            onInit: function () {
                this.oComponent = this.getOwnerComponent();
                this.router = this.getOwnerComponent().getRouter();
                var history= History.getInstance();
                console.log("history- "+history.aHistory);
                var oActivityLog = this.getOwnerComponent().getModel("oActivityLog");
                this.oActivityLog = oActivityLog;
                oActivityLog.setProperty("/test","test");
                oActivityLog.setProperty("/word1","General");
                oActivityLog.setProperty("/word2","Information");
            },

            onTestNavigate: function(){
                this.router.navTo("TaskDetails");
            }
        });
    });
