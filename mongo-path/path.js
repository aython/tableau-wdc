(function () {
    var myConnector = tableau.makeConnector();
	 // myConnector.init = function(initCallback) {
      //tableau.authType = tableau.authTypeEnum.basic;  
       // tableau.username = "ajaveed";
	  //tableau.password = "ajaveed";
	//	initCallback();   
	  
  //}
myConnector.getSchema = function (schemaCallback) {
    var cols = [
        { id : "partner_ngo_details", alias : "partner_ngo_details", dataType : tableau.dataTypeEnum.string },
		{ id : "screening_platform", alias : "screening_platform", dataType : tableau.dataTypeEnum.string },
		{ id : "date_of_dissemination", alias : "date_of_dissemination", dataType : tableau.dataTypeEnum.string },
		{ id : "month_of_dissemination", alias : "month_of_dissemination", dataType : tableau.dataTypeEnum.string },
		{ id : "name_of_the_video", alias : "name_of_the_video", dataType : tableau.dataTypeEnum.string },
		{ id : "dissemination_master_id", alias : "dissemination_master_id", dataType : tableau.dataTypeEnum.string },
		{ id : "sync_num", alias : "sync_num", dataType : tableau.dataTypeEnum.string },
		{ id : "node1", alias : "node1", dataType : tableau.dataTypeEnum.string },
		{ id : "created_by", alias : "created_by", dataType : tableau.dataTypeEnum.string },
		{ id : "node4", alias : "node4", dataType : tableau.dataTypeEnum.string },
		{ id : "visit_supervisor", alias : "visit_supervisor", dataType : tableau.dataTypeEnum.string },
		{ id : "visit_chief_functionary", alias : "visit_chief_functionary", dataType : tableau.dataTypeEnum.string },
		{ id : "node5", alias : "node5", dataType : tableau.dataTypeEnum.string },
		{ id : "node2", alias : "node2", dataType : tableau.dataTypeEnum.string },
		{ id : "node3", alias : "node3", dataType : tableau.dataTypeEnum.string },
		{ id : "visit_project_anchor", alias : "visit_project_anchor", dataType : tableau.dataTypeEnum.string },
		{ id : "node6", alias : "node6", dataType : tableau.dataTypeEnum.string },
		{ id : "sync_status", alias : "sync_status", dataType : tableau.dataTypeEnum.string },
		{ id : "created_date", alias : "created_date", dataType : tableau.dataTypeEnum.string },
		{ id : "supervisor", alias : "supervisor", dataType : tableau.dataTypeEnum.string },
		{ id : "status", alias : "status", dataType : tableau.dataTypeEnum.string }
	
    ];

    var tableInfo = {
        id : "dissemination_plan",
        alias : "dissemination_plan",
        columns : cols
    };

    schemaCallback([tableInfo]);
};


    myConnector.getData = function(table, doneCallback) {
    $.getJSON("http://localhost:8786/tableauchec/mongo-a.php", function(resp) {
        var feat = resp.user1,
            tableData = [];
			//var el1 = {name:'ronaldo', team: 'europe/spain/realmadrid'}
//var el2 = {name:'messi', team: 'europe/spain/barcelona'}
//var el3 = {name:'gerald', team: 'europe/england/liverpool'}
//var el4 = {name:'unknown english', team: 'europe/england'}

//data = [el1,el2,el3,el4]
        // Iterate over the JSON object
        for (var i = 0, len = feat.length; i < len; i++) {
            tableData.push({
							 "partner_ngo_details": feat[i].partner_ngo_details,
				"screening_platform": feat[i].screening_platform,
				"date_of_dissemination": feat[i].date_of_dissemination,
				"month_of_dissemination": feat[i].month_of_dissemination,
				"name_of_the_video": feat[i].name_of_the_video,
				"dissemination_master_id": feat[i].dissemination_master_id,
				"sync_num": feat[i].sync_num,
				"created_by": feat[i].created_by,
				"node1": feat[i].node1,
				"node4": feat[i].node4,
				"visit_supervisor": feat[i].visit_supervisor,
				"visit_chief_functionary": feat[i].visit_chief_functionary,
				"node5": feat[i].node5,
				"node2": feat[i].node2,
				"node3": feat[i].node3,
				"visit_project_anchor": feat[i].visit_project_anchor,
				"node6": feat[i].node6,
				"sync_status": feat[i].sync_status,
				"created_date": feat[i].created_date,
				"supervisor": feat[i].supervisor,
				"status": feat[i].status
				
            });
        }

        table.appendRows(tableData);
        doneCallback();
    });
};


    tableau.registerConnector(myConnector);
	$(document).ready(function () {
    $("#submitButton").click(function () {
        tableau.connectionName = "dissemination_plan";
        tableau.submit();
    });
});
})();