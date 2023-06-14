const express = require("express");
const config = require("./config");
const server = require("./server");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));
app.use(express.json())

const categoriesRoute = require("./routes/categories");
const productRoute = require("./routes/products");
const slidersRoute = require("./routes/sliders");
const ordersRoute = require("./routes/orders");

app.use("/ecomapi/categories", categoriesRoute);
app.use("/ecomapi/products", productRoute);
app.use("/ecomapi/sliders", slidersRoute);
app.use("/ecomapi/orders", ordersRoute);

const database = server.getPool();

// pool.c(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// app.get("/ecomapi/", (req, res) => {
//   database.query(
//     "select title, description, release_year from film",
//     function (err, result) {
//       if (err) throw err;
//       res.send(result);
//     }
//   );
// });

app.use((req, res, next) => {
  res.status(404).send({
    status: 404,
    error: "Not found",
  });
});

app.listen(config.port, () => {
  console.log(`Example app listening at ${config.db.host}:${config.port}`);
});
