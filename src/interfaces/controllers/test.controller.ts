import { NextFunction, Request, Response } from "express";
import { ITestServices } from "../../application/interfaces/services/ITestServices";
import { TestServices } from "../../application/services/TestServices";
import { TestRepository } from "../../infrastructure/repositories/TestRepository";
import { NotFoundError } from "../../error-handling/NotFoundError";

export class TestController {
  private readonly _testServices: ITestServices = new TestServices(
    new TestRepository()
  );

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await this._testServices.GetAll();

      if (response.length === 0) {
        throw new NotFoundError("No data found");
      }

      return res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };
}
