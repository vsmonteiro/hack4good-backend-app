import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsuarios1603559708722 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "USUARIOS",
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
                        name: "username",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "senha",
                        type: "varchar",
                    },                    
                    {
                        name: "nome",
                        type: "varchar",
                    },                    
                    {
                        name: "pontos",
                        type: "number",
                    },  
                    {
                        name: "isCatador",
                        type: "boolean",
                    },
                    {
                        name: "termoDeServico",
                        type: "boolean",
                    },
                    {
                        name: "telefone",
                        type: "number",                        
                        isNullable: true,
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isNullable: true,
                    },                                                  
                    {
                        name: "imagem",
                        type: "varchar",
                        isNullable: true,
                    },                    
                    {
                        name: "descricao",
                        type: "varchar",
                        isNullable: true,
                    },                    
                    {
                        name: "latitude",
                        type: "number",                        
                        isNullable: true,
                    },
                    {
                        name: "longitude",
                        type: "number",
                        isNullable: true,
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        console.log("porra vinicius vacilao");
        await queryRunner.dropTable("USUARIOS");
    }
}