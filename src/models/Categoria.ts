import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import Usuario from "./Usuario";

@Entity("CATEGORIAS")
export default class Categoria {
  @PrimaryGeneratedColumn('increment')
  id: number;
 
  @Column()
  descricao: string;
}