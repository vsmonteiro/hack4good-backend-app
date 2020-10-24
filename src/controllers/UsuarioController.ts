import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Usuario from "../models/Usuario";
import CatadorCategoria from "../models/CatadorCategoria";

export default {
  async show(req: Request, res: Response) {
    const usuarioRepo = getRepository(Usuario)
    const usuario = await usuarioRepo.find()
    return res.json(usuario)
  },

  async index(req: Request, res: Response) {
    const usuarioRepo = getRepository(Usuario)
    const usuario = await usuarioRepo.findOne(req.body.id)
    return res.json(usuario)
  },

  async login(req: Request, res: Response){
    const usuarioRepo = getRepository(Usuario)
    const usuarios = await usuarioRepo.find()
    var k: any
    let bo: boolean = false
    usuarios.forEach(async(usuario: any)=>{
      if(usuario.username===req.body.username && usuario.senha===req.body.senha)
      {
        bo=true
        k = await usuarioRepo.findOne(usuario.id)
        return res.json(k)
      }
    })  
    if(!bo)
      {
        return res.json("User not found.")
      }
  },

  async create(req: Request, res: Response) {
    const catadorCategoriaRepo = getRepository(CatadorCategoria)
    const usuarioRepo = getRepository(Usuario)
    const { username, senha, nome, isCatador, termoDeServico, telefone, email,
       descricao, latitude, longitude, categorias } = req.body;
       const catadorCategorias: any = []
      console.log()
    const usuario = usuarioRepo.create({
      username,
      senha,
      nome,
      pontos: 100,
      isCatador,
      termoDeServico,
      telefone,
      email,
      imagem: req.file.path,
      descricao,
      latitude,
      longitude
    })

    await usuarioRepo.save(usuario)

    categorias.map((categoria: any) => {
     const catadorCategoria = catadorCategoriaRepo.create({
        catador_id: usuario.id,
        categoria_id: categoria.id
      })

      catadorCategorias.push(catadorCategoria)
    })

    await catadorCategoriaRepo.save(catadorCategorias)
    return res.json({ usuario })
  },     
};
