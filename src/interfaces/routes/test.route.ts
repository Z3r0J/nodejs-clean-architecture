import { Router } from "express";
import { TestController } from "@controllers/test.controller";
import { TestRepository } from "@repositories/TestRepository";
import { TestServices } from "@services/TestServices";

const testRoute = Router();
const testRepository = new TestRepository();
const testServices = new TestServices(testRepository);

const testController = new TestController(testServices);
testRoute.get("/", testController.getAll);
testRoute.get("/:id", testController.getById);
testRoute.post("/", testController.create);
testRoute.put("/:id", testController.update);

export { testRoute };
