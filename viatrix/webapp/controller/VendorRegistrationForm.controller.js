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


                this.sResolvedURI = this.getOwnerComponent().getManifestObject().resolveUri("");
                this.sResolvedURI = this.sResolvedURI === "./" ? "" : this.sResolvedURI;


                var history= History.getInstance();
                console.log("history- "+history.aHistory);


                var oActivityLog = this.getOwnerComponent().getModel("oActivityLog");
                this.oActivityLog = oActivityLog;
                var oButtonmodel = this.getOwnerComponent().getModel("oButtonmodel");
                this.oButtonmodel = oButtonmodel;
                var oVendorDetailModel = this.getOwnerComponent().getModel("oVendorDetailModel");
                this.oVendorDetailModel = oVendorDetailModel;



                oActivityLog.setProperty("/test","test");
                oActivityLog.setProperty("/word1","General");
                oActivityLog.setProperty("/word2","Information");


                console.log(sap.ui.core.Element.getMetadata());

                this._oWizard = this.byId("vendorRegistrationFormWizard");
                this._iSelectedStepIndex = 0;
                this._oSelectedStep = this._oWizard.getSteps()[this._iSelectedStepIndex];
                this.handleButtonsVisibility();
                this.getVendorDetail();
            },

            onTestNavigate: function(){
                this.router.navTo("TaskDetails");
            },
            handleButtonsVisibility: function(){
                var oButtonmodel = this.oButtonmodel;
                if(this._iSelectedStepIndex===0){
                    oButtonmodel.setProperty("/cancelButtonVisible", true);
                    oButtonmodel.setProperty("/backButtonVisible", false);
                    oButtonmodel.setProperty("/saveButtonVisible", true);
                    oButtonmodel.setProperty("/nextButtonVisible", true);
                    oButtonmodel.setProperty("/previewButtonVisible", false);
                    oButtonmodel.setProperty("/submitButtonVisible", false);

                }else if (this._iSelectedStepIndex===5){
                    oButtonmodel.setProperty("/cancelButtonVisible", false);
                    oButtonmodel.setProperty("/backButtonVisible", true);
                    oButtonmodel.setProperty("/saveButtonVisible", true);
                    oButtonmodel.setProperty("/nextButtonVisible", false);
                    oButtonmodel.setProperty("/previewButtonVisible", true);
                    oButtonmodel.setProperty("/submitButtonVisible", true);
                }else{
                    oButtonmodel.setProperty("/cancelButtonVisible", false);
                    oButtonmodel.setProperty("/backButtonVisible", true);
                    oButtonmodel.setProperty("/saveButtonVisible", true);
                    oButtonmodel.setProperty("/nextButtonVisible", true);
                    oButtonmodel.setProperty("/previewButtonVisible", false);
                    oButtonmodel.setProperty("/submitButtonVisible", false);
                }

            },
            handleNavigationChange: function (oEvent) {
                this._oSelectedStep = oEvent.getParameter("step");
                this._iSelectedStepIndex = this._oWizard.getSteps().indexOf(this._oSelectedStep);
                this.handleButtonsVisibility();
            },
            onDialogNextButton: function () {
                this._iSelectedStepIndex = this._oWizard.getSteps().indexOf(this._oSelectedStep);
                // if (this._iSelectedStepIndex === 0) {
                //     var oNextStep = this._oWizard.getSteps()[this._iSelectedStepIndex + 1];
                //     var companyInfomandCheck = this.companyInfomandCheck();
                //     if (!companyInfomandCheck) {
                //         if (this._oSelectedStep && !this._oSelectedStep.bLast) {
                //             this._oWizard.goToStep(oNextStep, true);
                //         } else {
                //             this._oWizard.nextStep();
                //         }
                //         this._iSelectedStepIndex++;
                //         this._oSelectedStep = oNextStep;

                //         this.handleButtonsVisibility();
                //     }
                // } else if (this._iSelectedStepIndex === 1) {
                //     var oNextStep = this._oWizard.getSteps()[this._iSelectedStepIndex + 1];
                //     var banktaxInfomandCheck = this.banktaxInfomandCheck();
                //     if (!banktaxInfomandCheck) {
                //         if (this._oSelectedStep && !this._oSelectedStep.bLast) {
                //             this._oWizard.goToStep(oNextStep, true);
                //         } else {
                //             this._oWizard.nextStep();
                //         }
                //         this._iSelectedStepIndex++;
                //         this._oSelectedStep = oNextStep;

                //         this.handleButtonsVisibility();
                //     }
                // } else {
                    var oNextStep = this._oWizard.getSteps()[this._iSelectedStepIndex + 1];
                    if (this._oSelectedStep && !this._oSelectedStep.bLast) {
                        this._oWizard.goToStep(oNextStep, true);
                    } else {
                        this._oWizard.nextStep();
                    }
                    this._iSelectedStepIndex++;
                    this._oSelectedStep = oNextStep;

                    this.handleButtonsVisibility();
                // }


            },
            onDialogBackButton: function () {
                this._iSelectedStepIndex = this._oWizard.getSteps().indexOf(this._oSelectedStep);
                var oPreviousStep = this._oWizard.getSteps()[this._iSelectedStepIndex - 1];

                if (this._oSelectedStep) {
                    this._oWizard.goToStep(oPreviousStep, true);
                } else {
                    this._oWizard.previousStep();
                }

                this._iSelectedStepIndex--;
                this._oSelectedStep = oPreviousStep;

                this.handleButtonsVisibility();
            },
            onClickAddSectionCompanyCodeInformation: function(oEvent){
                var companyCodeInformationVbox = this.getView().byId("companyCodeInformationVbox");
                var vbox1= new sap.m.VBox().addItem(new sap.m.Label({
                    text: "Company Code",
                    required: true
                })).addItem(new sap.m.Input().addStyleClass("voInputText"));
                var vbox2= new sap.m.VBox().addItem(new sap.m.Label({
                    text: "Reconciliation Account",
                    required: true
                })).addItem(new sap.m.Input().addStyleClass("voInputText"));

                var lGrid = new sap.ui.layout.Grid({
                    defaultSpan: "XL3 L3 M6 S12",
                    hSpacing: 2
                }).addContent(vbox1).addContent(vbox2);
                var mVbox= new sap.m.VBox().addItem(lGrid);
                var mPanel = new sap.m.Panel({
                    expandable: true,
                    expanded: true,
                    headerText: "test successful!"
                }).addStyleClass("vendorRegistrationFormPanel").addContent(mVbox);

                companyCodeInformationVbox.addItem(mPanel);

            },
            getVendorDetail: function(){
                var oVendorDetailModel = this.oVendorDetailModel;

                var sUrl = "/vendorDetails/getVendorDetails/VM000001" ;
                // var url = that.sResolvedURI + "Viatris_Vendor_Onboarding" + sUrl;
                jQuery.ajax({
                    url: sUrl,
                    type: "GET",
                    success: function (data) {
                        
                        oVendorDetailModel.setProperty("/", data.data);
                        console.log("success "+oVendorDetailModel.getProperty("/name1"));

                    },
                    error: function (oResp) {
                        MessageBox.error("Error" + oResp.responseText);
                    }
                })
            }
        });
    });
