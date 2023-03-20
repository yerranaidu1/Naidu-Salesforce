({
	toastMsg : function(component, event, helper) {
        var tstMsg=$A.get("e.force:showToast");
        tstMsg.setParams({title:'Info',
                          message:'naidu yerra'
                          });
        tstMsg.fire();
        
	}
})