let request = require("request");

const getLatitudeLongitude = (req, res) => {
  const addresses = req.body.addresses;

  const API_KEY = process.env.API_KEY;

  let BASE_URL = "https://maps.googleapis.com/maps/api/geocode/json?address=";

  addresses.forEach((address) => {
    const each = address.split(" ");
    const formattedAddress = each.join("+");

    let url = BASE_URL + formattedAddress + "&key=" + API_KEY;
    const returnedAddresses = [];

    request(url, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        const parsedBody = JSON.parse(body);

        const latitude = parsedBody.results[0].geometry.location.lat;
        const longitude = parsedBody.results[0].geometry.location.lng;

        const combinedLocation = [];
        combinedLocation.push(latitude, longitude);

        const returnedObject = { add: address, location: combinedLocation };
        returnedAddresses.push(returnedObject);
        
        console.log(returnedAddresses);
      } else {
        res.status(500).json({ message: error });
      }
    });
  });
  res.end("Answer object in console. Open Dev tools -> Go to Console");
};

module.exports = { getLatitudeLongitude };
