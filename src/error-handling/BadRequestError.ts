import { CustomError } from "@error-custom/CustomError";

export class BadRequestError extends CustomError {
  constructor(message) {
    super(message, 400);
  }
  name: string = "BadRequestError";
}
