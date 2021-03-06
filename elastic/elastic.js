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
        { id : "jtimestamp", alias : "jtimestamp", dataType : tableau.dataTypeEnum.string },
		{ id : "alertid", alias : "alertid", dataType : tableau.dataTypeEnum.string },
		{ id : "event_heading", alias : "event_heading", dataType : tableau.dataTypeEnum.string },
		{ id : "reporting_host", alias : "reporting_host", dataType : tableau.dataTypeEnum.string },
		{ id : "dst_ip", alias : "dst_ip", dataType : tableau.dataTypeEnum.string },
		{ id : "reporting_source", alias : "reporting_source", dataType : tableau.dataTypeEnum.string },
		{ id : "rule_id", alias : "rule_id", dataType : tableau.dataTypeEnum.string },
		{ id : "level", alias : "level", dataType : tableau.dataTypeEnum.string },
		{ id : "event_information", alias : "event_information", dataType : tableau.dataTypeEnum.string },
		{ id : "request_httpj", alias : "request_httpj", dataType : tableau.dataTypeEnum.string },
		{ id : "response_httpj", alias : "response_httpj", dataType : tableau.dataTypeEnum.string },
		{ id : "userj", alias : "userj", dataType : tableau.dataTypeEnum.string },
		{ id : "link", alias : "link", dataType : tableau.dataTypeEnum.string },
		{ id : "detailed_information", alias : "detailed_information", dataType : tableau.dataTypeEnum.string },
		{ id : "cat_name1", alias : "cat_name1", dataType : tableau.dataTypeEnum.string },
		{ id : "cat_name2", alias : "cat_name2", dataType : tableau.dataTypeEnum.string },
		{ id : "cat_name3", alias : "cat_name3", dataType : tableau.dataTypeEnum.string },
		{ id : "cat_name4", alias : "cat_name4", dataType : tableau.dataTypeEnum.string },
		{ id : "geoip_ip", alias : "geoip_ip", dataType : tableau.dataTypeEnum.string },
		{ id : "geoip_country_code2", alias : "geoip_country_code2", dataType : tableau.dataTypeEnum.string },
		{ id : "geoip_country_code3", alias : "geoip_country_code3", dataType : tableau.dataTypeEnum.string },
		{ id : "geoip_country_name", alias : "geoip_country_name", dataType : tableau.dataTypeEnum.string },
		{ id : "geoip_continent_code", alias : "geoip_continent_code", dataType : tableau.dataTypeEnum.string },
		{ id : "geoip_region_name", alias : "geoip_region_name", dataType : tableau.dataTypeEnum.string },
		{ id : "geoip_city_name", alias : "geoip_city_name", dataType : tableau.dataTypeEnum.string },
		{ id : "geoip_latitude", alias : "geoip_latitude", dataType : tableau.dataTypeEnum.string },
		{ id : "geoip_longitude", alias : "geoip_longitude", dataType : tableau.dataTypeEnum.string },
		{ id : "geoip_dma_code", alias : "geoip_dma_code", dataType : tableau.dataTypeEnum.string },
		{ id : "geoip_area_code", alias : "geoip_area_code", dataType : tableau.dataTypeEnum.string },
		{ id : "geoip_timezone", alias : "geoip_timezone", dataType : tableau.dataTypeEnum.string },
		{ id : "geoip_real_region_name", alias : "geoip_real_region_name", dataType : tableau.dataTypeEnum.string },
		{ id : "geoip_location1", alias : "geoip_location1", dataType : tableau.dataTypeEnum.string },
		{ id : "geoip_location2", alias : "geoip_location2", dataType : tableau.dataTypeEnum.string },
		{ id : "src_ip", alias : "src_ip", dataType : tableau.dataTypeEnum.string },
		{ id : "src_ip_multiple", alias : "src_ip_multiple", dataType : tableau.dataTypeEnum.string },
		{ id : "src_port", alias : "src_port", dataType : tableau.dataTypeEnum.string },
		{ id : "dst_port", alias : "dst_port", dataType : tableau.dataTypeEnum.string }
    ];

    var tableInfo = {
        id : "wonder",
        alias : "wonder",
        columns : cols
    };

    schemaCallback([tableInfo]);
};


    myConnector.getData = function(table, doneCallback) {
    $.getJSON("http://localhost:8786/tableauchec/elas-original-copy.php", function(resp) {
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
							 "jtimestamp": feat[i].jtimestamp,
				"alertid": feat[i].alertid,
				"event_heading": feat[i].event_heading,
				"reporting_host": feat[i].reporting_host,
				"dst_ip": feat[i].dst_ip,
				"reporting_source": feat[i].reporting_source,
				"rule_id": feat[i].rule_id,
				"level": feat[i].level,
				"event_information": feat[i].event_information,
				"request_httpj": feat[i].request_httpj,
				"response_httpj": feat[i].response_httpj,
				"userj": feat[i].userj,
				"link": feat[i].link,
				"detailed_information": feat[i].detailed_information,
				"cat_name1": feat[i].cat_name1,
				"cat_name2": feat[i].cat_name2,
				"cat_name3": feat[i].cat_name3,
				"cat_name4": feat[i].cat_name4,
				"geoip_ip": feat[i].geoip_ip,
				"geoip_country_code2": feat[i].geoip_country_code2,
				"geoip_country_code3": feat[i].geoip_country_code3,
				"geoip_country_name": feat[i].geoip_country_name,
				"geoip_continent_code": feat[i].geoip_continent_code,
				"geoip_region_name": feat[i].geoip_region_name,
				"geoip_city_name": feat[i].geoip_city_name,
				"geoip_latitude": feat[i].geoip_latitude,
				"geoip_longitude": feat[i].geoip_longitude,
				"geoip_dma_code": feat[i].geoip_dma_code,
				"geoip_area_code": feat[i].geoip_area_code,
				"geoip_timezone": feat[i].geoip_timezone,
				"geoip_real_region_name": feat[i].geoip_real_region_name,
				"geoip_location1": feat[i].geoip_location1,
				"geoip_location2": feat[i].geoip_location2,
			"src_ip": feat[i].src_ip,
				"src_ip_multiple": feat[i].src_ip_multiple,
				"src_port": feat[i].src_port,
				"dst_port": feat[i].dst_port
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