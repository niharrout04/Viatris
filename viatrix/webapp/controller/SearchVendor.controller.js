sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("viatrix.controller.SearchVendor", {
            onInit: function () {
                this.oComponent = this.getOwnerComponent();
                this.router = this.getOwnerComponent().getRouter();
                var oCommonModel = this.getOwnerComponent().getModel("oCommonModel");
            var data = [
                    {
                        "rosVendorNumber": "ROS001706",
                        "vendorName": "Kunal Mallick",
                        "eccVendorNumber": "",
                        "vendorType": "01",
                        "description": "Services",
                        "businessPartnerCode": "301356",
                        "email": "kunal.mallick@incture.com",
                        "street": "Electronic City",
                        "cityPostalCode": "560001",
                        "city": "BBSR",
                        "countryName": "India",
                        "purchasingOrg": "S72 Singapore",
                        "plantName": "Singapore SN SG",
                        "companyCode": "Singapore"
                    },
                    {
                        "rosVendorNumber": "ROS001707",
                        "vendorName": "Kunal Mallick",
                        "eccVendorNumber": "",
                        "vendorType": "01",
                        "description": "Services",
                        "businessPartnerCode": "301356",
                        "email": "kunal.mallick@incture.com",
                        "street": "Electronic City",
                        "cityPostalCode": "560001",
                        "city": "BBSR",
                        "countryName": "India",
                        "purchasingOrg": "Gaudalajara",
                        "plantName": "Mexico",
                        "companyCode": "Mexico"
                    },
                    {
                        "rosVendorNumber": "ROS001708",
                        "vendorName": "Kunal Mallick",
                        "eccVendorNumber": "",
                        "vendorType": "01",
                        "description": "Services",
                        "businessPartnerCode": "301356",
                        "email": "kunal.mallick@incture.com",
                        "street": "Gothapatna",
                        "cityPostalCode": "751003",
                        "city": "BBSR",
                        "countryName": "India",
                        "purchasingOrg": "Kwidzyn",
                        "plantName": "Poland",
                        "companyCode": "Poland"
                    }
                ];
                oCommonModel.setProperty("/Supplierinfo", data);

            },
            onCreatePOVendor(){
                this.router.navTo("VendorRegistrationForm");
            }
        });
    });
