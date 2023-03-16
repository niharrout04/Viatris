sap.ui.define([
    "sap/m/Link",
    "sap/ui/core/Icon",
    "sap/m/HBox",
    "sap/ui/core/Control"
],
    function (Link, Icon, HBox, Control) {

        return Link.extend("viatrix.controls.CustomizedBreadcrumb", {

            metadata: {
                properties: {
                    "icon": {
                        type: "sap.ui.core.Icon",
                        multiple: false
                    }
                },
                events: {},
                aggregations: {
                    leftIcon: {
                        type: "sap.ui.core.Icon",
                        multiple: false
                    }
                },
                methods: {}
            },
            init: function () { },

            renderer: function (oRm, oControl) {
                // oRm.write('<a href="https://www.youtube.com/watch?v=uUlF6d47DY8&ab_channel=SAPDevelopers"><span id="__button0-img" data-sap-ui="__button0-img" data-sap-ui-render="" role="presentation" aria-hidden="true" data-sap-ui-icon-content="" class="sapUiIcon sapUiIconMirrorInRTL sapMBtnCustomIcon sapMBtnIcon sapMBtnIconLeft" style="font-family: SAP-icons;"></span></a>')

                oRm.write("<span>");
                oRm.renderControl(oControl.getAggregation("leftIcon"));
                
                oRm.write("<a href='https://www.youtube.com/watch?v=uUlF6d47DY8&ab_channel=SAPDevelopers'>");
                oRm.write(oControl.getText());
                oRm.write("</a>");
                oRm.write("</span>");

            },

            createTile: function () {
                const cicon = this.getIcon();
                return new HBox({
                    items: [
                        new Icon({
                            src: cicon
                        }),
                        new Link({
                            text: "testtest         "
                        })
                    ]
                })
            }
        })
    });