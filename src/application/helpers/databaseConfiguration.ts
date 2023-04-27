const DB_TYPE:
  | "mysql"
  | "mariadb"
  | "postgres"
  | "mssql"
  | "oracle"
  | "sqlite" = "mysql";

export const DB_CONFIG = {
  type: DB_TYPE,
  host: "localhost",
  port: 3308,
  username: "root",
  password: "Jeanp",
  database: "test",
};
