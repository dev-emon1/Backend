const express = require("express");
const router = express.Router();

router.get("/users", (req, res) => {
  res.json([
    {
      id: 1,
      firstName: "Rafsan",
      lastName: "Adib",
      age: 30,
      gender: "male",
      bloodGroup: "A-",
      height: 189,
      weight: 75.4,
      eyeColor: "Green",
      hair: {
        color: "Black",
        type: "Strands",
      },
      address: {
        address: "145/C Boro Moghbazar",
        city: "Dhaka",
        postalCode: "1219",
        country: "Bangladesh",
      },
    },
    {
      id: 2,
      firstName: "Amir",
      lastName: "Hamza",
      age: 25,
      gender: "male",
      bloodGroup: "O-",
      height: 174,
      weight: 77.8,
      eyeColor: "Black",
      hair: {
        color: "Black",
        type: "Strands",
      },
      address: {
        address: "141/A New Elephant Road",
        city: "Dhaka",
        postalCode: "1205",
        country: "Bangladesh",
      },
    },
    {
      id: 3,
      firstName: "Arifa",
      lastName: "Zaman",
      age: 28,
      gender: "female",
      bloodGroup: "O+",
      height: 154,
      weight: 57.8,
      eyeColor: "Black",
      hair: {
        color: "Black",
        type: "Strands",
      },
      address: {
        address: "107/A Central Road",
        city: "Dhaka",
        postalCode: "1205",
        country: "Bangladesh",
      },
    },
    {
      id: 4,
      firstName: "Milon",
      lastName: "Hasan",
      age: 28,
      gender: "male",
      bloodGroup: "B+",
      height: 164,
      weight: 77.1,
      eyeColor: "Black",
      hair: {
        color: "Black",
        type: "Strands",
      },
      address: {
        address: "37/D Chartola Goli",
        city: "Dhaka",
        postalCode: "1205",
        country: "Bangladesh",
      },
    },
    {
      id: 5,
      firstName: "Azmain",
      lastName: "Iktiad",
      age: 29,
      gender: "male",
      bloodGroup: "O+",
      height: 175,
      weight: 67.8,
      eyeColor: "Black",
      hair: {
        color: "Black",
        type: "Strands",
      },
      address: {
        address: "205/B Central Road",
        city: "Dhaka",
        postalCode: "1205",
        country: "Bangladesh",
      },
    },
  ]);
});

module.exports = router;
