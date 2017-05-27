(function () {
    var myConnector = tableau.makeConnector();

myConnector.getSchema = function (schemaCallback) {
    var cols = [
        { id : "id", alias : "id", dataType : tableau.dataTypeEnum.int },
        { id : "value", alias : "value", dataType : tableau.dataTypeEnum.string },
        { id : "sourceNote", alias : "sourceNote", dataType : tableau.dataTypeEnum.string }
    ];

    var tableInfo = {
        id : "earthquakeFeed",
        alias : "Earthquakes with magnitude greater than 4.5 in the last seven days",
        columns : cols
    };

    schemaCallback([tableInfo]);
};


    myConnector.getData = function(table, doneCallback) {
    $.getJSON("http://localhost:8888/test.html", function(resp) {
		var feat = resp.features,
            tableData = [];

        // Iterate over the JSON object
        for (var i = 0, len = feat.length; i < len; i++) {
            tableData.push({
                "id": feat[i].id,
                "value": feat[i].properties.value,
                "sourceNote": feat[i].properties.sourceNote
            });
        }

        table.appendRows(tableData);
        doneCallback();
    });
};


    tableau.registerConnector(myConnector);
	$(document).ready(function () {
    $("#submitButton").click(function () {
        tableau.connectionName = "USGS Earthquake Feed";
        tableau.submit();
    });
});
})();