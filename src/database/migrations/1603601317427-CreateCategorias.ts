import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCategorias1603601317427 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: "CATEGORIAS",
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
                name: "descricao",
                type: "varchar",
              },
            ],
          })
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("CATEGORIAS");
      }
    }