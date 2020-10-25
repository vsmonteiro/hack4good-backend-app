import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Usuario from "../models/Usuario";
import CatadorCategoria from "../models/CatadorCategoria";
import Categoria from "../models/Categoria";
import path from "path";

export default {
  async show(req: Request, res: Response) {
    const usuarioRepo = getRepository(Usuario)
    const usuario = await usuarioRepo.find()
    return res.json(usuario)
  },

  async index(req: Request, res: Response) {
    const usuarioRepo = getRepository(Usuario)
    const usuario = await usuarioRepo.findOne(req.params.id)
    return res.json(usuario)
  },

  async login(req: Request, res: Response) {
    const usuarioRepo = getRepository(Usuario)
    const usuarios = await usuarioRepo.find()
    var user: any
    let flag: boolean = false
    usuarios.forEach(async (usuario: any) => {
      if (usuario.username === req.body.username && usuario.senha === req.body.senha) {
        flag = true
        user = await usuarioRepo.findOne(usuario.id)
        return res.json(user)
      }
    })
    if (!flag) {
      return res.json("USER NOT FOUND")
    }
  },

  async search(req: Request, res: Response) {
    const categoriaRepo = getRepository(Categoria)
    const catadorCategoriaRepo = getRepository(CatadorCategoria)
    const usuarioRepo = getRepository(Usuario)

    const { descricoes } = req.body
    let descricoesId: any = []
    let catadoresId: any = []
    let categoriasId: any = []
    let catadoresComCategorias: any = []

    for (let descricao of descricoes) {
      let id = await categoriaRepo.findOne({ select: ["id"], where: { descricao: descricao } })
      descricoesId.push(id?.id)
    }

    for (let descricaoId of descricoesId) {
      let catadorId = await catadorCategoriaRepo.findOne({ select: ["catador_id"], where: { categoria_id: descricaoId } })
      if (!catadoresId.includes(catadorId)) {
        catadoresId.push(catadorId?.catador_id);
      }
    }
    let catadores = await usuarioRepo.findByIds(catadoresId);
    
    for(let catador of catadores){
      const abc = await catadorCategoriaRepo.find({ select: ["categoria_id"], where: { catador_id: catador.id}})
      abc.forEach(ab => {
        categoriasId.push(ab.categoria_id)
      })
      catador.categorias = await categoriaRepo.findByIds(categoriasId)
       catadoresComCategorias.push(catador)
    }
    return res.send(catadoresComCategorias);
  },


  async image(req: Request, res: Response) {
    return res.sendFile(path.join(__dirname, "..", "..", `uploads/${req.params.name}`))
  },

  async create(req: Request, res: Response) {
    const catadorCategoriaRepo = getRepository(CatadorCategoria)
    const usuarioRepo = getRepository(Usuario)
    const { username, senha, nome, isCatador, termoDeServico, telefone, email,
      descricao, latitude, longitude, categorias } = req.body;
    const catadorCategorias: any = []
    const usuario = usuarioRepo.create({
      username,
      senha,
      nome,
      pontos: 100,
      isCatador,
      termoDeServico,
      telefone,
      email,
      imagem: req.file.filename,
      descricao,
      latitude,
      longitude
    })

    await usuarioRepo.save(usuario)

    categorias?.map((categoria: any) => {
      const catadorCategoria = catadorCategoriaRepo.create({
        catador_id: usuario.id,
        categoria_id: categoria.id
      })
      catadorCategorias.push(catadorCategoria)
    })

    await catadorCategoriaRepo.save(catadorCategorias)
    return res.json({ usuario })
  }
};
