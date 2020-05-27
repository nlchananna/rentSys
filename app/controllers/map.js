// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var estate = args.estate;

Alloy.Collections.estates.fetch();

function filterFunction(collection) { 
	console.log("estate: " + JSON.stringify(estate));
	return collection.filter(
		function(model) {
			return (model.get("Name") == estate);
		}
	)
}

function transformFunctionMap(model) {
    var transform = model.toJSON();

    $.now.latitude = transform.Latitude;
    $.now.longitude = transform.Longitude;
    $.now.title = transform.Name;

    return transform;

}