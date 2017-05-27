(function () {
    var myConnector = tableau.makeConnector();

myConnector.getSchema = function (schemaCallback) {
    var cols = [
        { id : "_index", alias : "_index", dataType : tableau.dataTypeEnum.string },
        { id : "build_hash", alias : "build_hash", dataType : tableau.dataTypeEnum.string }
    ];

    var tableInfo = {
        id : "wonder",
        alias : "wonder",
        columns : cols
    };

    schemaCallback([tableInfo]);
};


    myConnector.getData = function(table, doneCallback) {
    $.getJSON("http://localhost:9200/javeed/_search?size=1&from=0", function(resp) {
        var feat = resp.hits,
            tableData = [];
			//var el1 = {name:'ronaldo', team: 'europe/spain/realmadrid'}
//var el2 = {name:'messi', team: 'europe/spain/barcelona'}
//var el3 = {name:'gerald', team: 'europe/england/liverpool'}
//var el4 = {name:'unknown english', team: 'europe/england'}

//data = [el1,el2,el3,el4]
        // Iterate over the JSON object
        for (var i = 0, len = 1; i < len; i++) {
            tableData.push({
               
                
                "_index": feat[i]._index
			
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