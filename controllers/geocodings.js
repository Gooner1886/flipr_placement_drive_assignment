const axios = require("axios");

const getLatitudeLongitude = async (req, res) => {
  try {
    const answer = await Promise.all(
      req.body.map((address) => {
        return geocodingCall(address);
      })
    );

    res.json(answer);
    res.end();
    
  } catch (error) {
    res.status(500).send({ ErrorMessage: error });
  }
};

const geocodingCall = (address) => {
  const BASE_URL = "https://maps.googleapis.com/maps/api/geocode/json";
  const API_KEY = process.env.API_KEY;
  return new Promise((resolve) => {
    axios
      .get(BASE_URL, {
        params: {
          address: address,
          key: API_KEY,
        },
      })
      .then((response) => {
        let returnedAnswer = {
          add: response.data.results[0].formatted_address,
          location: [],
        };
        returnedAnswer.location.push(
          response.data.results[0].geometry.location.lat
        );
        returnedAnswer.location.push(
          response.data.results[0].geometry.location.lng
        );
        resolve(returnedAnswer);
      })
      .catch((error) => {
        console.error(error);
      });
  });
};

module.exports = { getLatitudeLongitude };
