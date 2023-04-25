import { Test } from "../../../domain/entities/Test";
import { IGenericRepository } from "./IGenericRepository";

export interface ITestRepository extends IGenericRepository<Test> {
  // Add custom methods here
}
