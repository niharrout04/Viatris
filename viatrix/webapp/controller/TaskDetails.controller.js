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

        return Controller.extend("viatrix.controller.TaskDetails", {
            formatter: formatter,

            onInit: function () {
                // this.oComponent = this.getOwnerComponent();
                // this.router = this.getOwnerComponent().getRouter();
                var history= History.getInstance();
                // console.log("history- "+history);

                var oActivityLog = this.getOwnerComponent().getModel("oActivityLog");
                this.oActivityLog = oActivityLog;


                var testDataActivityLog = [
                    {
                        "title": "New Task Created",
                        "time": "20 Sep 2022  09:35",
                        "role": "Requester",
                        "name": "Peter Daemen",
                        "status": "",
                        "id": 0
                    },
                    {
                        "title": "First Level Approval",
                        "time": "24 Sep 2022  11:00",
                        "role": "Local Reviewer",
                        "name": "Luc Paredis",
                        "status": "",
                        "id": 1
                    },
                    {
                        "title": "Second Level Approval",
                        "time": "  Today  12:09",
                        "role": "GMDM Reviewer",
                        "name": "Eric Carl",
                        "status": "Pending",
                        "id":  2
                    }
                ];

                oActivityLog.setProperty("/testDataActivityLog",testDataActivityLog);


            },
            onTestNavigate: function(){
                // this.router.navTo("VendorDetails");
            }
        });
    });
