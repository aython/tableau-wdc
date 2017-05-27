(function () {
    var myConnector = tableau.makeConnector();

myConnector.getSchema = function (schemaCallback) {
    var cols = [
        { id : "id", alias : "id", dataType : tableau.dataTypeEnum.string },
		{ id : "can_post", alias : "can_post", dataType : tableau.dataTypeEnum.string },
		{ id : "category", alias : "category", dataType : tableau.dataTypeEnum.string },
		{ id : "checkins", alias : "checkins", dataType : tableau.dataTypeEnum.string },
		{ id : "country_page_likes", alias : "country_page_likes", dataType : tableau.dataTypeEnum.string },
		{ id : "cover_id", alias : "cover_id", dataType : tableau.dataTypeEnum.string },
		{ id : "offset_x", alias : "offset_x", dataType : tableau.dataTypeEnum.string },
		{ id : "offset_y", alias : "offset_y", dataType : tableau.dataTypeEnum.string },
		{ id : "source", alias : "source", dataType : tableau.dataTypeEnum.string },
		{ id : "covernid", alias : "covernid", dataType : tableau.dataTypeEnum.string },
		{ id : "description", alias : "description", dataType : tableau.dataTypeEnum.string },
		{ id : "has_added_app", alias : "has_added_app", dataType : tableau.dataTypeEnum.string },
		{ id : "is_community_page", alias : "is_community_page", dataType : tableau.dataTypeEnum.string },
		{ id : "is_published", alias : "is_published", dataType : tableau.dataTypeEnum.string },
		{ id : "new_like_count", alias : "new_like_count", dataType : tableau.dataTypeEnum.string },
		{ id : "likes", alias : "likes", dataType : tableau.dataTypeEnum.string },
		{ id : "link", alias : "link", dataType : tableau.dataTypeEnum.string },
		{ id : "zip", alias : "zip", dataType : tableau.dataTypeEnum.string },
		{ id : "name", alias : "name", dataType : tableau.dataTypeEnum.string },
		{ id : "name_with_location_descriptor", alias : "name_with_location_descriptor", dataType : tableau.dataTypeEnum.string },
		{ id : "offer_eligible", alias : "offer_eligible", dataType : tableau.dataTypeEnum.string },
		{ id : "promotion_eligible", alias : "promotion_eligible", dataType : tableau.dataTypeEnum.string },
		{ id : "talking_about_count", alias : "talking_about_count", dataType : tableau.dataTypeEnum.string },
		{ id : "unread_message_count", alias : "unread_message_count", dataType : tableau.dataTypeEnum.string },
		{ id : "unread_notif_count", alias : "unread_notif_count", dataType : tableau.dataTypeEnum.string },
		{ id : "unseen_message_count", alias : "unseen_message_count", dataType : tableau.dataTypeEnum.string },
		{ id : "username", alias : "username", dataType : tableau.dataTypeEnum.string },
        { id : "were_here_count", alias : "were_here_count", dataType : tableau.dataTypeEnum.string }
    ];

    var tableInfo = {
        id : "wonder",
        alias : "wonder",
        columns : cols
    };

    schemaCallback([tableInfo]);
};


    myConnector.getData = function(table, doneCallback) {
    $.getJSON("http://localhost:8786/tableauchec/facebook.php", function(resp) {
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
			"can_post": feat[i].can_post,
			"category": feat[i].category,
			"checkins": feat[i].checkins,
			"country_page_likes": feat[i].country_page_likes,
			"cover_id": feat[i].cover_id,
			"offset_x": feat[i].offset_x,
			"offset_y": feat[i].offset_y,
			"source": feat[i].source,
			"covernid": feat[i].covernid,
			"description": feat[i].description,
			"has_added_app": feat[i].has_added_app,
			"is_community_page": feat[i].is_community_page,
			"is_published": feat[i].is_published,
			"new_like_count": feat[i].new_like_count,
			"likes": feat[i].likes,
			"link": feat[i].link,
			"zip": feat[i].zip,
			"name": feat[i].name,
			"name_with_location_descriptor": feat[i].name_with_location_descriptor,
			"offer_eligible": feat[i].offer_eligible,
			"promotion_eligible": feat[i].promotion_eligible,
			"talking_about_count": feat[i].talking_about_count,
			"unread_message_count": feat[i].unread_message_count,
			"unread_notif_count": feat[i].unread_notif_count,
			"unseen_message_count": feat[i].unseen_message_count,
			"username": feat[i].username,
			"were_here_count": feat[i].were_here_count
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