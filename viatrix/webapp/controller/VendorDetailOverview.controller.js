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

        return Controller.extend("viatrix.controller.VendorDetailOverview", {
            formatter: formatter,

            onInit: function () {
                



            },
            onTestNavigate: function(){
                // this.router.navTo("VendorDetails");
            }
        });
    });
