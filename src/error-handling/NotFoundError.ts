import { CustomError } from "@error-custom/CustomError";

export class NotFoundError extends CustomError {
  constructor(message) {
    super(message, 404);
  }
  name: string = "NotFoundError";
}
