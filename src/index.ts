import { AppDataSource } from "./infrastructure/typeorm.config";
import { ExpressConfig } from "./config/express.config";
import * as express from "express";

const main = async () => {
  try {
    const typeORM = await AppDataSource.initialize();
    const app = express();
    const Express = new ExpressConfig(app);
    if (typeORM.isInitialized) {
      console.log("Connected to database");
      await Express.init();
    }
  } catch (error) {}
};

main();
