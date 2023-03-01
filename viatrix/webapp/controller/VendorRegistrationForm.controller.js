sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,History) {
        "use strict";

        return Controller.extend("viatrix.controller.VendorRegistrationForm", {
            onInit: function () {
                this.oComponent = this.getOwnerComponent();
                this.router = this.getOwnerComponent().getRouter();
                var history= History.getInstance();
                console.log("history- "+history.aHistory);
            },
            onTestNavigate: function(){
                this.router.navTo("TaskDetails");
            }
        });
    });
