sap.ui.define([
    "sap/m/FormattedText",
    "sap/ui/core/HTML"
],
function (FormattedText, HTML) {
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
        },
        activitylogColour: function(status){
            console.log("status: "+status);
            if(status==="Pending") return "#FF640D";
            return "#089B13";
        },
        activitylogLastConnectingBar: function(){
            
        },
        lineBreakWord: function(word1, word2){
            debugger;
            var s=word1+"\n"+word2;
            // return new FormattedText({htmlText: ""})
            return s;
        },
        setInputenbled:function(a,b){

        }
    };
});