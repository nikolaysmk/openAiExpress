import bodyParser from "body-parser";
import express from "express";

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(product);
});

app.listen(PORT, () => {
  console.log(`Express with Typescript! http://localhost:${PORT}`);
});

// show dataset product in array
const product = [
  {
    title: "first",
    price: 1000,
  },
];
