const express = require("express"); 

const http = require("http");

const app = express();
const server = http.createServer(app); server.listen(5000);
const express = require("express");
const bodyParser = require("body-parser");
const shopRoutes = require("./routes/shop.routes.js");
const productRoutes = require("./routes/product.routes.js");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/product", productRoutes); app.use(shopRoutes);
app.listen(5000);
