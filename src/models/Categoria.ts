import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("CATEGORIAS")
export default class Categoria {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  descricao: string;
}