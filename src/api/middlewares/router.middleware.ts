import { Application } from "express";
import indexRouter from "../routes/index";

export default function (app: Application) {
  app.use("/api", indexRouter);
}
