import { EntityTarget } from "typeorm";
import { Test } from "@entities/Test";
import { GenericRepository } from "@repositories/GenericRepository";
import { ITestRepository } from "@interfaces/repositories/ITestRepository";

export class TestRepository
  extends GenericRepository<Test>
  implements ITestRepository
{
  constructor() {
    const Entity = Test;
    super(Entity);
  }
}
