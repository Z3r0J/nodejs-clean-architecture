import { NextFunction, Request, Response } from "express";
import { ITestServices } from "../../application/interfaces/services/ITestServices";
import { TestServices } from "../../application/services/TestServices";
import { TestRepository } from "../../infrastructure/repositories/TestRepository";
import { NotFoundError } from "../../error-handling/NotFoundError";
import { CreateTestDTO } from "../../application/dtos/createTestDTO";
import { validate } from "class-validator";
import { Test } from "../../domain/entities/Test";

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

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const response = await this._testServices.GetById(parseInt(id));

      if (!response) {
        throw new NotFoundError("No data found");
      }

      return res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const test = new CreateTestDTO(req.body);

      const validationError = await validate(test);

      if (validationError.length > 0) {
        res.status(400).json(
          validationError.map((error) => {
            return {
              [error.property]: Object.values(error.constraints),
            };
          })
        );
      }

      const response = await this._testServices.Create(new Test(req.body));
      return res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const test = new CreateTestDTO(req.body);

      const validationError = await validate(test);

      if (validationError.length > 0) {
        res.status(400).json(
          validationError.map((error) => {
            return {
              [error.property]: Object.values(error.constraints),
            };
          })
        );
      }

      const response = await this._testServices.Update(
        parseInt(id),
        new Test(req.body)
      );

      if (!response) {
        throw new NotFoundError("No data found");
      }

      return res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };
}
