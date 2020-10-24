import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCatadores1603497567691 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "CATADORES",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            unsigned: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "nome",
            type: "varchar",
          },
          {
            name: "telefone",
            type: "integer",
          },
          {
            name: "email",
            type: "varchar",
          },
          {
            name: "descricao",
            type: "varchar",
          },
          {
            name: "termoDeServico",
            type: "boolean",
          },
          {
            name: "imagem",
            type: "varchar",
          },
          {
            name: "latitude",
            type: "number",
          },
          {
            name: "longitude",
            type: "number",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    console.log("porra vinicius vacilao");
    await queryRunner.dropTable("CATADORES");
  }
}
