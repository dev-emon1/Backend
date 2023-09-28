const express = require("express");
const chalk = require("chalk");
const cors = require("cors");
const useRouter = require("./controlers/userRouter");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", useRouter);

app.listen(8000, (req, res) => {
  console.log(chalk.red.bgGreen("Server is running on PORT 8000"));
});
