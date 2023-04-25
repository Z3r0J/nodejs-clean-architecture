import { EntityTarget } from "typeorm";
import { Test } from "../../domain/entities/Test";
import { GenericRepository } from "./GenericRepository";
import { ITestRepository } from "../../application/interfaces/repositories/ITestRepository";

export class TestRepository
  extends GenericRepository<Test>
  implements ITestRepository
{
  protected Entity: EntityTarget<Test>;

  constructor() {
    TestRepository.prototype.Entity = Test;
    super();
  }
}
