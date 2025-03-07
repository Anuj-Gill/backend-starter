import cors, { CorsOptions } from "cors";
import express, { Application } from "express";
import { miscConfig } from "../../config";
import { commonConfig } from "../../config";
import { metricsMiddleware } from "./metrics.middleware";
var cookieParser = require("cookie-parser");

export default function (app: Application) {
  app.use(cors(commonConfig.corsOptions));
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: true }));
  app.use(metricsMiddleware);
}
