import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('CATADOR_CATEGORIAS')
export default class CatadorCategoria {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  catador_id: number;

  @Column()
  categoria_id: number;
}