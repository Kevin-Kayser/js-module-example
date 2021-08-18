export function locationData(message) {
    return {
        type: 'LOCATION_DATA',
        lat: 0,
        long: 0
    }
}


export function sharedAlertFunction(message) {
    alert(message);
}

//check for null or undefined values
export function IsNullEmptyOrUndefined(data) {
    if (typeof data === "undefined" || data === null || data == undefined || data === '') {
        return true;
    }
    return false;
}