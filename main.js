import { locationData } from "./module.js"

(function () {
    var x = locationData();

    document.getElementById("showData").innerHTML = `x.latitude: ${x.lat}<br>x.longitude: ${x.long}<br>x.city: ${x.city}<br>x.state: ${x.state}<br>x.zip: ${x.zip}<br>x.country: ${x.country}`;
})();