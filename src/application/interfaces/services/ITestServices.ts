import { Test } from "../@entities/Test";
import { IGenericServices } from "./IGenericServices";

export interface ITestServices extends IGenericServices<Test> {
  // Add custom methods here
}
