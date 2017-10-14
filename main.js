var geocoder = require("./geocode");
var weather = require("./weather");
var inquirer = require("inquirer");

var nodeArgs = process.argv;

var address = "";

var account = process.argv[2];

if(account === "admin"){
   console.log("Print out all info that has been logged.");
   }
else if(account === "user") {
   console.log("Input new info to file.");
   }
else {
    console.log("Account type not recognized...");
}

for (var i = 3; i < nodeArgs.length; i++) {
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

