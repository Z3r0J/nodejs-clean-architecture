import { Test } from "@entities/Test";
import { IGenericServices } from "@interfaces/services/IGenericServices";

export interface ITestServices extends IGenericServices<Test> {
  // Add custom methods here
}
