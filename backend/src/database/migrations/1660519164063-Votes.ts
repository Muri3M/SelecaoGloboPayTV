import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Votes1660519164063 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "elimination",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "votes",
            type: "integer",
            default: 0,
          },
          {
            name: "votesPerHour",
            type: "json",
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("elimination");
  }
}
