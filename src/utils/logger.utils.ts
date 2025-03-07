import { commonConfig } from "../config";
import winston from "winston";

const logger = winston.createLogger(commonConfig.logger)

export default logger;
