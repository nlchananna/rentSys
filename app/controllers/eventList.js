// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var room_id = args.room_id || {};
var rent_id = args.rent_id || {};
var room_name = args.room_name || {};

//$.win.title = room_id;

Alloy.Collections.webNews.fetch();

function filterFunction(collection) { 
	return collection.filter(
		function(model) {
			if(rent_id == "below") {
				if(room_id == "2room") {
					return (model.get("rent") <= 15000 && model.get("bedrooms") <= 2);
				} else if(room_id == "3room") {
					return (model.get("rent") <= 15000 && model.get("bedrooms") > 2);
				}
			} else if(rent_id == "above") {
				if(room_id == "2room") {
					return (model.get("rent") > 15000 && model.get("bedrooms") <= 2);
				} else if(room_id == "3room") {
					return (model.get("rent") > 15000 && model.get("bedrooms") > 2);
				}
			} else {
				return (model.get("estate") == room_name);
			}
			

			
		}
	)
}

function tab2Click(e) { 
    var viewController = Alloy.createController('eventView', {
        viewname : e.row.title
    });
    
    Alloy.Globals.tabgroup.activeTab.open(viewController.getView());
};