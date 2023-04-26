import { Router } from "express";
import { TestController } from "@controllers/test.controller";

const testRoute = Router();

const testController = new TestController();
testRoute.get("/", testController.getAll);
testRoute.get("/:id", testController.getById);
testRoute.post("/", testController.create);
testRoute.put("/:id", testController.update);

export { testRoute };
