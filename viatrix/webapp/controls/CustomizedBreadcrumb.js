sap.ui.define([
    "sap/m/Link",
    "sap/ui/core/Icon",
    "sap/m/HBox",
    "sap/ui/core/Control"
],
    function (Link, Icon, HBox, Control) {

        return Link.extend("viatrix.controls.CustomizedBreadcrumb", {

            metadata: {
                properties: {},
                events: {},
                aggregations: {},
                methods: {}
            },
            init: function () { },

            renderer: function (oRm, oControl) {
                // oRm.write('<a href="https://www.youtube.com/watch?v=uUlF6d47DY8&ab_channel=SAPDevelopers"><span id="__icon0" data-sap-ui="__icon0" data-sap-ui-render="" role="presentation" aria-hidden="true" aria-label="home" data-sap-ui-icon-content="" class="sapUiIcon sapUiIconMirrorInRTL" style="font-family: SAP-icons;"></span></a>')
                oRm.icon("sap-icon://home");

            }
        })
    });