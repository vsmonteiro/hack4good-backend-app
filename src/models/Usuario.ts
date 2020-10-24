import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import Categoria from "./Categoria";

@Entity("USUARIOS")
export default class Usuario {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  username: string;

  @Column()
  senha: string;

  @Column()
  nome: string;

  @Column()
  pontos: number;
  
  @Column()
  isCatador: boolean;
  
  @Column()
  termoDeServico: boolean;
  
  @Column({ nullable: true })
  telefone: number;
  
  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  imagem: string;
  
  @Column({ nullable: true })
  descricao: string;

  @Column({ nullable: true })
  latitude: number;

  @Column({ nullable: true })
  longitude: number;

  @ManyToMany(type => Categoria)
  @JoinTable()
  categorias: Categoria[];
}
