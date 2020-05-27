$.index.open();
Alloy.Globals.tabgroup = $.index;

Alloy.Collections.webNews.fetch();
Alloy.Collections.estates.fetch();


//tab1 function transform
function transformFunction(model) { 
    var transform = model.toJSON(); 
    
    if (transform.image == null || transform.image == "") 
        transform.image = "http://gemstatepatriot.com/blog/wp-content/uploads/2015/11/default.jpg";     // a default picture

    return transform; 
}

function tab1Click(e) { 
    var viewController = Alloy.createController('eventView', {
        viewname : e.row.house_id
    });
    
    $.index.activeTab.open(viewController.getView());
};

function tab2Click(e) { 

    console.log("table is clicked... ", JSON.stringify(e));

    var listController = Alloy.createController('eventList', {
        room_id : e.row.room_id, rent_id : e.section.rent_id
    });
    
    $.index.activeTab.open(listController.getView());
};

function tab3Click(e) { 
    var listController = Alloy.createController('eventList', {
        room_name : e.row.title
    });
    
    $.index.activeTab.open(listController.getView());
};



function mapClick(e) {
    console.log("map is clicked... ", JSON.stringify(e));
    
    if (e.clicksource == 'rightButton') { 
        var listController = Alloy.createController('eventList', {
            room_name : e.annotation.title
        });
        $.index.activeTab.open(listController.getView());
    } 
}

var previous = null;

//tab3 
function transformFunctionDistrict(model) {
    var transform = model.toJSON();

    if (previous == transform.District) 
        transform.section = "";
    else
        transform.section = transform.District;

    previous = transform.District;

    return transform;

}

//tab4 - map
function transformFunctionMap(model) {
    var transform = model.toJSON();

    transform.title = transform.Name;
    transform.rightButton = Titanium.UI.iOS.SystemButton.DISCLOSURE;

    return transform;

}

