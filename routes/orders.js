const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const server = require("../server");
const e = require("express");
const connection = server.getPool();
// let connection = pool.getPool();

router.get("/id", (req, res) => {
  let id = req.params.id;
  let resposne = {
    status: true,
  };

  connection.query("select * from orders where id = " + id, (error, result) => {
    
    if (error) {
      resposne.status = false;
      resposne.message = error;
    }else{
      resposne.data = result;
    }
    res.send(resposne);
  });
});

//test

router.post("/create", async (req, res) => {
  let data = {
    status: true,
  };

  try {
    let reqData = req.body;

    const id = uuidv4();
    console.log("order id : " + id);

    let order_rec = [
      id,
      reqData.user_id,
      reqData.amount,
      reqData.sales_tax,
      reqData.shipping_address,
      reqData.status,
      reqData.transaction_id,
      reqData.order_date,
      reqData.delivery_date,
    ];

    var sql =
      "INSERT INTO orders (id, user_id, amount,sales_tax,shipping_address,status, transaction_id, order_date, delivery_date) VALUES(?)";
    connection.query(sql, [order_rec], function (err, result) {
      if (err) throw err;
      console.log("1 record inserted in orders ");
    });

    reqData.products.forEach((pr) => {
      console.log(pr);
      let item_order_id = uuidv4();

      console.log("order item id : " + item_order_id);
      let order_item_rec = [
        item_order_id,
        id,
        pr.id,
        pr.quantity,
        pr.discount,
        pr.price,
        reqData.order_date,
      ];
      var sql =
        "INSERT INTO order_items (order_item_id, order_id, product_id, product_count, product_discount,price, order_date) VALUES (?)";
      connection.query(sql, [order_item_rec], function (err, result) {
        if (err) throw err;
        console.log("1 record inserted in order_items ");
      });
    });
  } catch (error) {
    console.log(">> els33");
    console.log(error);

    data.status = false;
    data.message = error;
    res.send(data);
    return;
  }

  data.message = "Order created Successfully";
  res.send(data);
});

router.get("/:id", async (req, res) => {
  let id = req.params.id;

  console.log("id " + id);
  let resposne = {
    status: true,
  };

  let query  ="select * from order_items where order_id =(?)";
  console.log(query);

  connection.query(query, [id], (err, result) => {
    if (err) {
      resposne.status = false;
      resposne.message = err;
    } else {
      resposne.data = result;
      console.log("1 record inserted in order_items d ");
    }
    
  res.send(resposne);
  });

});

router.patch("/:id", (req, res) => {
  res.status(503);
  res.send({
    query: req.query,
    message: `Handling Patch request for /product ${req.params.id}`,
  });
});

module.exports = router;
