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
        // Iterate over the JSON object
        for (var i = 0, len = 1; i < len; i++) {
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