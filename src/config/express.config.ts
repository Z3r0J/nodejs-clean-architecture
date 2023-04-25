import { Express } from "express";
import * as bodyParser from "body-parser";
import { testRoute } from "../interfaces/routes/test.route";
import { ErrorHandler } from "../interfaces/middlewares/error.handler.middleware";

export class ExpressConfig {
  private app: Express;
  private port = process.env.PORT || 3000;

  constructor(express: Express) {
    this.app = express;
  }

  public async init(): Promise<void> {
    try {
      this.app.use(bodyParser.json());
      this.app.use(bodyParser.urlencoded({ extended: false }));
      this.app.use(testRoute);
      this.app.use(ErrorHandler);
      this.app.listen(this.port, () => {
        console.log(`Server is running on port ${this.port}`);
      });
    } catch (error) {}
  }
}
