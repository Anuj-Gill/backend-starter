import winston, { transports } from "winston";
import cors, { CorsOptions } from "cors";
import miscellaneousConfig from "./miscellaneous.config";

const commonConfig = {
  logger: {
    level: "info",
    format: winston.format.json(),
    transports: [new winston.transports.Console()],
  },
  corsOptions: <CorsOptions>{
    origin: [miscellaneousConfig(process.env).frontEndUrl, "*"],
    credentials: true,
  }
}

export default commonConfig;


