
// By importing location data from module.js we can use it in the main.js file
import { locationData, sharedAlertFunction, IsNullEmptyOrUndefined } from "./module.js"

(function () {
    var x = locationData();

    document.getElementById("showData").innerHTML = `x.latitude: ${x.lat}<br>x.longitude: ${x.long}<br>x.city: ${x.city}<br>x.state: ${x.state}<br>x.zip: ${x.zip}<br>x.country: ${x.country}`;

    sharedAlertFunction(`x is null, undefined or empty?: ${IsNullEmptyOrUndefined(x)}`);
    sharedAlertFunction(`x.shouldBeUndefined is null, undefined or empty?: ${IsNullEmptyOrUndefined(x.shouldBeUndefined)}`);

})();