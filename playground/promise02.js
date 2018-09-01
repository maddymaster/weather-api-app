const request = require('request');

var geocodeAddress = (address) => {
    return new Promise ((resolve, reject) =>{
        var encodedAddress = encodeURIComponent(address);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
}, (error, response, body) => {
    if (error) {
        reject('Unable to connect to Google Servers');
    } else if (body.status === 'ZERO_RESULTS') {
        reject('Unable to find that address');
    } else if (body.status === 'OK') {
        resolve ({
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng
        });   
    }   
});
    });
};

geocodeAddress('Prestige Casabella Electronics City Phase 1 Bangalore').then((location) =>{
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage)=> {
    console.log(errorMessage);
    
});