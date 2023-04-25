import { CustomError } from "./CustomError";

export class BadRequestError extends CustomError {
  constructor(message) {
    super(message, 400);
  }
  name: string = "BadRequestError";
}
