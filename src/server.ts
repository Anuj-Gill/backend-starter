import express, { Application, Request, Response } from "express";
import { metricsMiddleware } from "./api/middlewares/metrics.middleware";
import client from "prom-client";

export default function ExpressApp(): Application {
  const app = express();
  app.use(express.json());

  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ message: "Server is up!" });
  });

  app.get("/metrics", async (req, res) => {
    const metrics = await client.register.metrics();
    res.set('Content-Type', client.register.contentType);
    res.end(metrics);
  })

  return app;
}
