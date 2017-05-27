(function () {
    var myConnector = tableau.makeConnector();

myConnector.getSchema = function (schemaCallback) {
    var cols = [
        { id : "title", alias : "title", dataType : tableau.dataTypeEnum.string },
		{ id : "description", alias : "description", dataType : tableau.dataTypeEnum.string },
		{ id : "by", alias : "by", dataType : tableau.dataTypeEnum.string },
		{ id : "url", alias : "url", dataType : tableau.dataTypeEnum.string },
		{ id : "likes", alias : "likes", dataType : tableau.dataTypeEnum.string }
    ];

    var tableInfo = {
        id : "wonder",
        alias : "wonder",
        columns : cols
    };

    schemaCallback([tableInfo]);
};


    myConnector.getData = function(table, doneCallback) {
    $.getJSON("http://localhost:8786/tableauchec/mongo.php", function(resp) {
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
             "title": feat[i].title,
			 "description": feat[i].description,
			 "by": feat[i].by,
			 "url": feat[i].url,
			 "likes": feat[i].likes
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