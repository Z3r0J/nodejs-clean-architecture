import { NextFunction, Request, Response } from "express";
import { CustomError } from "../../error-handling/CustomError";
import { NotFoundError } from "../../error-handling/NotFoundError";
import { BadRequestError } from "../../error-handling/BadRequestError";

export const ErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  if (err instanceof NotFoundError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  if (err instanceof BadRequestError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  return res.status(500).json({
    message: "Something went wrong",
  });
};
