// Google Map Api function
function myMap() {
    // Settings of the Map (Location and Zoom Magnification)
    var mapProp = {
        center: new google.maps.LatLng(-27.477254, 153.028064),
        zoom: 12,
    };
    //Identify the div Id to be executed with
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
//Source: Doesn't work externally. Investigation Required
src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyC_l2YWb5MNp1wgIe2XdbzLwyKH8vI5LhA&callback=myMap"
//Executes ratings drop-down
function openFunction() {
    document.getElementById("user_rating").style.display = "block";
}
function closeFunction() {
    document.getElementById("user_rating").style.display = "none";
}
function singleMap() {
    // Settings of the Map (Location and Zoom Magnification)
    var mapProp = {
        center: new google.maps.LatLng(-27.47561, 153.03005),
        zoom: 16,
    };
    //Identify the div Id to be executed with
    var map = new google.maps.Map(document.getElementById("resultMap"), mapProp);
}