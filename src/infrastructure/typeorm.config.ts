import "reflect-metadata";
import { DataSource } from "typeorm";
import { Test } from "@entities/Test";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: 3308,
  username: process.env.DB_USER || "root",
  password: "Jeanp",
  database: "test",
  synchronize: true,
  logging: false,
  entities: [Test],
  migrations: [],
  subscribers: [],
});
