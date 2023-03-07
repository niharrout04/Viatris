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
            // console.log("word1= "+word1);
            var s=word1+"&#10;"+word2;
             return s;
            // return new FormattedText({htmlText: "General\nInformation"});
        },
        setInputenbled:function(a,b){

        }
    };
});