sap.ui.define([],
function () {
    "use strict";
    return {
        wbSetProcessFlowAuditConnectingBar: function(auditId,lastAuditId){
            console.log("inside formatter");
            return true;
        },
        wbSetProcessFlowAuditStatus: function(status){
            if(status===""){
                return false;
            }
            return true;
        },
        abc: function(jhjh){
            console.log("formatter");
            return "1";
        }
    };
});