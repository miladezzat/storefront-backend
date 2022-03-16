import express from "express";
import authenticate from "../middlewares/authenticate";
import { Order_Products, Order_ProductsStore } from "../models/order-products";
const store = new Order_ProductsStore();

const GetOrder = async (req: express.Request, res: express.Response) => {
  try {
    const id: number = parseInt(req.params.id);
    const order_products = await store.GetOrder(id);
    res.json(order_products);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const addProduct = async (req: express.Request, res: express.Response) => {
  try {
    // @ts-ignore
    const newProductOrder: Order_Products = {
      order_id: Number(req.body.order_id),
      product_id: Number(req.body.product_id),
      quantity: Number(req.body.quantity),
    };
    const order_products = await store.addProduct(newProductOrder);
    return res.status(200).json(order_products);
  } catch (error) {    
    return res.status(400).json(error);
  }
};

const orderProductsRoutes = (app: express.Application) => {
  app.get("/orders/get-order/:id", authenticate, GetOrder);
  app.post("/orders/new-product", authenticate, addProduct);
};

export default orderProductsRoutes;
