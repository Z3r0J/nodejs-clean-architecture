import { NextFunction, Request, Response } from "express";
import { ITestServices } from "@interfaces/services/ITestServices";
import { NotFoundError } from "@error-custom//NotFoundError";
import { CreateTestDTO } from "@dtos/createTestDTO";
import { validate } from "class-validator";
import { Test } from "@entities/Test";

export class TestController {
  constructor(private _testServices: ITestServices) {}

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await this._testServices.GetAll();

      if (response.length === 0) {
        throw new NotFoundError("No data found");
      }

      return res.status(200).json(response);
    } catch (error) {
      return next(error);
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
      return next(error);
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
      return next(error);
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
      return next(error);
    }
  };
}
