const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      id: "1",
      name: "Hossen",
      email: "hossen@gmail.com",
    },
    {
      id: "2",
      name: "Ali",
      email: "ali@gmail.com",
    },
    {
      id: "3",
      name: "Eushan",
      email: "eushan@gmail.com",
    },
    {
      id: "4",
      name: "Dimittri",
      email: "dimittri@gmail.com",
    },
    {
      id: "5",
      name: "Deledimir",
      email: "deledimir@gmail.com",
    },
  ]);
});

module.exports = router;
