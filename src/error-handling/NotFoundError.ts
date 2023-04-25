import { CustomError } from "./CustomError";

export class NotFoundError extends CustomError {
  constructor(message) {
    super(message, 404);
  }
  name: string = "NotFoundError";
}
