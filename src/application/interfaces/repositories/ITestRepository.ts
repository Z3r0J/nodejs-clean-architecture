import { Test } from "@entities/Test";
import { IGenericRepository } from "@interfaces/repositories/IGenericRepository";

export interface ITestRepository extends IGenericRepository<Test> {
  // Add custom methods here
}
