const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_KEY, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("Connected to MongoDB"));

const findLocation = (devices, statusCollection) => {
  devices.forEach(async (device) => {
    const statuses = await statusCollection
      .find({ id: device })
      .limit(50)
      .toArray();
    console.log(statuses);
  });
};

const getDeviceAndStatusData = async (req, res) => {
  const uri = req.body.uri;
  const collection1 = req.params.collection1;
  const collection2 = req.query.collection2;
  console.log(uri, collection1, collection2);

  let devices = [];

  try {
    const devicesCollection = db.collection("devices");
    const data = await devicesCollection
      .find()
      .sort({ createdAt: -1 })
      .limit(30)
      .toArray();
    data.forEach((device) => {
      devices.push(device.id);
    });

    console.log(data);

    const statusCollection = db.collection("status");
    const statusData = await statusCollection.find().limit(50).toArray();
    console.log(statusData);
    findLocation(devices, statusCollection);
    res.json({
      Name: "Siddharth Sarma",
      Email: "siddharthgsarma5@gmail.com",
      deviceIds: devices,
      Message:
        "No device ID in status collection relating ID in Device collection. View Device and Status data in Console. Inspect Page -> Go to Dev tools -> Console",
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = { getDeviceAndStatusData };
