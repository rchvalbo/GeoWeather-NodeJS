var weather = require('weather-js');

var getWeather = function (zipcode) {


    return new Promise(function (resolve, reject) {
        
        weather.find({
            search: zipcode,
            degreeType: 'F'
        }, function (err, result) {
            
            if (err) reject(err);
            
            //console.log(result);
            
            resolve(result);
        });
        
    });
}

exports.getWeather = getWeather;
