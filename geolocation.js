
function getGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showGeolocation, showError);
    } else {
        document.getElementById('geolocation').innerHTML = "Geolocation is not supported by this browser.";
        //  let x = document.getElementById("geolocation");
        //  x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showGeolocation(position) {
    document.getElementById('geolocation').innerHTML = 
        "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById('geolocation').innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById('geolocation').innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            document.getElementById('geolocation').innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById('geolocation').innerHTML = "An unknown error occurred."
            break;
    }
}