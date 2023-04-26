import { Test } from "@entities/Test";
import { ITestRepository } from "../interfaces/repositories/ITestRepository";
import { ITestServices } from "../interfaces/services/ITestServices";
import { GenericServices } from "./GenericServices";

export class TestServices
  extends GenericServices<Test>
  implements ITestServices
{
  constructor(protected repository: ITestRepository) {
    super(repository);
  }
}
