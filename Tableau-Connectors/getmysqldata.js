(function () {
    var myConnector = tableau.makeConnector();

myConnector.getSchema = function (schemaCallback) {
    var cols = [
        { id : "id", alias : "id", dataType : tableau.dataTypeEnum.string },
		{ id : "EventRowID", alias : "EventRowID", dataType : tableau.dataTypeEnum.string },
		{ id : "EventType", alias : "EventType", dataType : tableau.dataTypeEnum.string },
		{ id : "EventTypeDisplayName", alias : "EventTypeDisplayName", dataType : tableau.dataTypeEnum.string },
		{ id : "UTCTime", alias : "UTCTime", dataType : tableau.dataTypeEnum.string },
		{ id : "Focus", alias : "Focus", dataType : tableau.dataTypeEnum.string },
		{ id : "FocusDisplay", alias : "FocusDisplay", dataType : tableau.dataTypeEnum.string },
		{ id : "ProcessInfo_FileName", alias : "FocusDisplay", dataType : tableau.dataTypeEnum.string }

        
    ];

    var tableInfo = {
        id : "wonder",
        alias : "wonder",
        columns : cols
    };

    schemaCallback([tableInfo]);
};


    myConnector.getData = function(table, doneCallback) {
    $.getJSON("http://localhost:8786/tableauchec/index.php", function(resp) {
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
               
						   "id": feat[i].id,
			"EventRowID": feat[i].EventRowID,
			"EventType": feat[i].EventType,
			"EventTypeDisplayName": feat[i].EventTypeDisplayName,
			"UTCTime": feat[i].UTCTime,
			"Focus": feat[i].Focus,
			"FocusDisplay": feat[i].FocusDisplay,
			"ProcessInfo_FileName": feat[i].ProcessInfo_FileName
            });
        }

        table.appendRows(tableData);
        doneCallback();
    });
};


    tableau.registerConnector(myConnector);
	$(document).ready(function () {
    $("#submitButton").click(function () {
        tableau.connectionName = "Wonder";
        tableau.submit();
    });
});
})();