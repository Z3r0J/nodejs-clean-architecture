import "reflect-metadata";
import { DataSource } from "typeorm";
import { Test } from "../domain/entities/Test";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3308,
  username: "root",
  password: "Jeanp",
  database: "test",
  synchronize: true,
  logging: false,
  entities: [Test],
  migrations: [],
  subscribers: [],
});
