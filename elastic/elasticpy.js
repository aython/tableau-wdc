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
        { id : "timestamp", alias : "timestamp", dataType : tableau.dataTypeEnum.string },
		{ id : "alertid", alias : "alertid", dataType : tableau.dataTypeEnum.string }
    ];

    var tableInfo = {
        id : "wonder",
        alias : "wonder",
        columns : cols
    };

    schemaCallback([tableInfo]);
};


    myConnector.getData = function(table, doneCallback) {
    $.getJSON("http://localhost:5555/about", function(resp) {
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
				"timestamp": feat[i].timestamp,
				"alertid": feat[i].alertid
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