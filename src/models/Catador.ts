import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import Categoria from "./Categoria";

@Entity("CATADORES")
export default class Catador {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  nome: string;

  @Column()
  telefone: number;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  descricao: string;

  @Column()
  termoDeServico: boolean;

  @Column()
  imagem: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  // @ManyToMany(() => Categoria, (categoria) => categoria.catadores)
  // categorias: Categoria[];

  @ManyToMany(type => Categoria)
  @JoinTable()
  categorias: Categoria[];
}
