sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("viatrix.controller.VendorRegistration", {
            onInit: function () {
                this.oComponent = this.getOwnerComponent();
                this.router = this.getOwnerComponent().getRouter();
            },
            onCreatePOVendor(){
                this.router.navTo("VendorRegistrationForm");
            }
        });
    });
