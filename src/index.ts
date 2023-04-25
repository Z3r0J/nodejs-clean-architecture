import { AppDataSource } from "./infrastructure/typeorm.config";

const main = async () => {
  try {
    const typeORM = await AppDataSource.initialize();

    if (typeORM.isInitialized) {
      console.log("Connected to database");
    }
  } catch (error) {}
};

main();
