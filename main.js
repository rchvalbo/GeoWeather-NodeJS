var geocoder = require("./geocode");
var weather = require("./weather");

var nodeArgs = process.argv;

var address = "";

for (var i = 2; i < nodeArgs.length; i++) {
    //console.log(nodeArgs[i]);
    address += nodeArgs[i] + " ";
}

var location;

geocoder.findLocation(address).then(function(result){
    console.log(result);
    location = result;
    return location;
    
}).then(function(zipcode){
    weather.getWeather(zipcode).then(function(result){
        console.log(result[0].current);
        var temp = result[0].current.temperature;
        var feel = result[0].current.feelslike;
        console.log("Forecast For '" + zipcode + "':\nTemperature: " + temp + "\nFeels like: " + feel);
    });
});

