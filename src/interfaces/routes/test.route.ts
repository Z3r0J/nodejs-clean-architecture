import { Router } from "express";
import { TestController } from "../controllers/test.controller";

const testRoute = Router();

const testController = new TestController();
testRoute.get("/", testController.getAll);

export { testRoute };
