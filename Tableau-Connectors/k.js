(function () {
    var myConnector = tableau.makeConnector();

myConnector.getSchema = function (schemaCallback) {
    var cols = [
        { id : "name", alias : "name", dataType : tableau.dataTypeEnum.string },
        { id : "age", alias : "age", dataType : tableau.dataTypeEnum.float },
        { id : "city", alias : "city", dataType : tableau.dataTypeEnum.string }
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
        var feat = resp.city,
            tableData = [];
			//var el1 = {name:'ronaldo', team: 'europe/spain/realmadrid'}
//var el2 = {name:'messi', team: 'europe/spain/barcelona'}
//var el3 = {name:'gerald', team: 'europe/england/liverpool'}
//var el4 = {name:'unknown english', team: 'europe/england'}

//data = [el1,el2,el3,el4]
        // Iterate over the JSON object
        for (var i = 0, len = 4; i < len; i++) {
            tableData.push({
               
                "name": feat[i].name,
                "age": feat[i].age,
				"city": feat[i].city
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