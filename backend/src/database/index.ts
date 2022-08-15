import { DataSource } from "typeorm";

const myDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "selecaoglobo",
  database: "voting",
  entities: ["src/models/*.ts"],
  migrations: ["src/database/migrations/*.ts"],
  logging: true,
  synchronize: true,
});

export default myDataSource;
