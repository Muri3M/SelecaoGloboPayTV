import { DataSource } from "typeorm";

const myDataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "postgres",
  password: "selecaoglobo",
  database: "postgres",
  entities: ["src/models/*.ts"],
  migrations: ["src/database/migrations/*.ts"],
  logging: true,
  synchronize: true,
});

export default myDataSource;
