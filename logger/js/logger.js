function urlParams(url){
    var urlParts = url.split("?");

    /*
     * If we have anything after the question mark, parse it
     */
    if (urlParts.length > 1)
    {
        var rightSide = urlParts[1];
        var outerParts = rightSide.split("&");
        var paramsJson = new Object();

        for (var outer = 0; outer < outerParts.length; outer++)
        {
            var innerParts = outerParts[outer].split("=");
            var key = innerParts[0];
            var value = (innerParts.length > 1) ? innerParts[1] : "";

            /*
             * Do something with the key/value information
             * here. Add what you need.
             */
            //paramsJson = '"' + paramsJson+key + '":"' + value + '",';
            paramsJson[key] = value;
        }
       // paramsJson = paramsJson+"}";
    }
    return paramsJson;
}

function isoDate(){
    da = new Date(document.lastModified) 	// Create a Date Object set to the last modifed date
    dy = da.getFullYear() 	// Get full year (as opposed to last two digits only)
    dm = da.getMonth() + 1 	// Get month and correct it (getMonth() returns 0 to 11)
    dd = da.getDate() 	        // Get date within month
    if ( dy < 1970 ) dy = dy + 100; 	// We still have to fix the millennium bug
    ys = new String(dy) 	// Convert year, month and date to strings
    ms = new String(dm)
    ds = new String(dd)
    if ( ms.length == 1 ) ms = "0" + ms; 	// Add leading zeros to month and date if required
    if ( ds.length == 1 ) ds = "0" + ds;
    ys = ys+ms+ds 	// Combine year, month and date in ISO format
    return ys;
}

function isoTime(){
    da = new Date(document.lastModified)
    hr = da.getHours()
    mn = da.getMinutes()
    hr = new String(hr)
    mn = new String(mn)
    if ( hr.length == 1 ) hr = "0" + hr; 
    if ( mn.length == 1 ) mn = "0" + mn;
    tm = hr+mn
    return tm;
}

function logger(val){

  var location = { "latitude": navigator.geolocation.getCurrentPosition.latitude,
           "longitude": navigator.geolocation.getCurrentPosition.longitude,
           "altitude": navigator.geolocation.getCurrentPosition.altitude,
           "accuracy": navigator.geolocation.getCurrentPosition.accuracy,
           "altitudeAccuracy": navigator.geolocation.getCurrentPosition.altitudeAccuracy,
           "heading": navigator.geolocation.getCurrentPosition.heading,
           "position": navigator.geolocation.getCurrentPosition.position
       };

   var json = {
       "instance": val,
       "date": isoDate(),
       "time": isoTime(),
       "url": window.location.href,
       "host": window.location.host,
       "urlParams": urlParams(window.location.href),
       "referrer": document.referrer,
       "referrerParams":  urlParams(document.referrer),
       "location": location,
       "appCodeName": navigator.appCodeName,
       "appVersion": navigator.appVersion,
       "cookieEnable": navigator.cookieEnable,
       "language": navigator.language,
       "platform": navigator.platform,
       "product": navigator.product,
       "userAgent": navigator.userAgent,
       "vendor": navigator.vendor,
       "vendorSub": navigator.vendorSub
   };

   $.ajax({
      type: "GET",
      url: "http://vm.analytics.scielo.org/logger/php/logger.php",
      data: json
    });

}