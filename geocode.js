// Instructions: 
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

var geocoder = require('geocoder');

var findLocation = function (address) {

    return new Promise(function (resolve, reject) {

        var locObj;

        geocoder.geocode(address, function (err, data) {

            if (err) reject(err);

            //console.log(data.results[0]);
            var geoObj = data.results[0].address_components;

            geoObj.forEach(function (comp) {
                if (comp.types[0] == "postal_code") {
                    //console.log(comp.short_name);
                    locObj = comp.short_name;
                }
            })
            //console.log(locObj);

            resolve(locObj);
        });
    });

};



exports.findLocation = findLocation;
