let request = require("request");

const getLatitudeLongitude = (req, res) => {
  const addresses = req.body.addresses;
  /* console.log(addresses); */
  const API_KEY = process.env.API_KEY;
  console.log(typeof API_KEY);
  const returnedAddresses = [];
  let BASE_URL = "https://maps.googleapis.com/maps/api/geocode/json?address=";
  addresses.forEach((address) => {
    const each = address.split(" ");
    const formattedAddress = each.join("+");
    console.log(formattedAddress);
    let url = BASE_URL + formattedAddress + "&key=" + API_KEY;
    console.log(url);
    request(url, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        console.log(body);
        /* returnedAddresses.push({
            add: address,
            location: 
        }) */
      } else {
        res.status(500).json({ message: error });
      }
    });
    res.end()
  });
};

module.exports = { getLatitudeLongitude };
