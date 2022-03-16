import express from "express";
import { Order, OrdersStore } from "../models/order";
import authenticate from "../middlewares/authenticate";

const store = new OrdersStore();

const index = async (req: express.Request, res: express.Response) => {
  try {
    const Orders = await store.index();
    res.json(Orders);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const show = async (req: express.Request, res: express.Response) => {
  try {
    const userId: number = parseInt(req.params.id);
    const orders = await store.show(userId);
    res.json(orders);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const showByUser = async (req: express.Request, res: express.Response) => {
  try {
    const userId: number = parseInt(req.params.id);
    const orders = await store.showByUser(userId);
    res.json(orders);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const create = async (req: express.Request, res: express.Response) => {
  try {
    const neworder = await store.create(req.body);
    res.json(neworder);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const updateOrder = async (req: express.Request, res: express.Response) => {
  try {
    // @ts-ignore
    const updatedOrder = await store.updateOrder(req.params.id, req.body);
    res.json(updatedOrder);
  } catch (err) {
    res.status(400);
  }
};

const deleteOrder = async (req: express.Request, res: express.Response) => {
  try {
    // @ts-ignore
    const deletedOrder = await store.deleteOrder(req.params.id);
    res.json(deletedOrder);
  } catch (err) {
    res.status(400);
  }
};

const orderRoutes = (app: express.Application) => {
  app.get("/orders", authenticate, index);
  app.get("/orders/:id", authenticate, show);
  app.get("/orders/:user_id", authenticate, showByUser);
  app.post("/orders", authenticate, create);
  app.put("/orders/:id", authenticate, updateOrder);
  app.delete("/orders/:id", authenticate, deleteOrder);
};

export default orderRoutes;
