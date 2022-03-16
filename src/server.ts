import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser from "body-parser";
import orderRoutes from "./handlers/order";
import productRoutes from "./handlers/product";
import userRoutes from "./handlers/user";
import orderProductsRoutes from "./handlers/order-products";
import cors from 'cors';


const app: express.Application = express();
const port = 3000;

app.use(cors())
app.use(bodyParser.json());

orderRoutes(app);
productRoutes(app);
userRoutes(app);
orderProductsRoutes(app);

app.listen(3000, function () {
  console.log(`starting app on: ${port}`);
});

export default app;
