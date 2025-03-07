import ExpressApp from "./server";
import { miscConfig } from "./config";
import logger from "./utils/logger.utils";
import middlewares from "./api/middlewares";
import routerMiddleware from "./api/middlewares/router.middleware";

const app = ExpressApp();
middlewares(app);
routerMiddleware(app);

app.listen(miscConfig.port, () => {
  logger.info(`Server started at ${miscConfig.port}`);
})
