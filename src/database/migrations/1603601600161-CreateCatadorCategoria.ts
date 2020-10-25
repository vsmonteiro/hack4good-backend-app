import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCatadorCategoria1603601600161 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'CATADOR_CATEGORIAS',
            columns: [{
                name: 'id',
                type: 'integer',
                isPrimary: true,
                unsigned: true,
                isGenerated: true,
                generationStrategy: "increment",
            }, {
                name: 'catador_id',
                type: 'integer'
            }, {
                name: 'categoria_id',
                type: 'integer'
            }]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('CATADOR_CATEGORIAS')
    }
}