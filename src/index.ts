import { AppDataSource } from "@typeorm-config";
import { ExpressConfig } from "@express-config";
import * as express from "express";
import { config } from "dotenv";

const main = async () => {
  const typeORM = await AppDataSource.initialize();
  const app = express();
  const Express = new ExpressConfig(app);
  if (typeORM.isInitialized) {
    console.log("Connected to database");
    await Express.init();
  }
};

config({ path: "src/.env", debug: true });
main();
