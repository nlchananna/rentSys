// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var viewname = args.viewname || {};

Alloy.Collections.webNews.fetch();

function filterFunction(collection) { 
	return collection.filter(
		function(model) {
			console.log("here is the eventView.... ", JSON.stringify(model));
			return model.get("name") == viewname;
		}
	)
}

function addressClick(e) { 
	console.log("address is clicked... " + JSON.stringify(e));
	var mappageController = Alloy.createController('map', {
        estate : e.source.title
    });
    
    Alloy.Globals.tabgroup.activeTab.open(mappageController.getView());
}

function likeClick(e) { 
	console.log("I like/dislike it !!!");
	
}