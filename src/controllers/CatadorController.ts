import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Catador from "../models/Catador";
import CatadorCategoria from "../models/CatadorCategoria";

export default {
  async index(req: Request, res: Response) {
    const catadorRepo = getRepository(Catador)
    const catador = await catadorRepo.find()
    return res.json(catador)
  },

  async show(req: Request, res: Response) {
  },

  async create(req: Request, res: Response) {
    const catadorCategoriaRepo = getRepository(CatadorCategoria)
    const catadorRepo = getRepository(Catador)
    const { nome, telefone, email, descricao, termoDeServico, categorias,
     imagem, latitude, longitude } = req.body;
     const catadorCategorias: any = []
     
    const catador = catadorRepo.create({
      nome,
      telefone,
      email,
      descricao,
      termoDeServico,
      imagem,
      latitude,
      longitude
    })

    await catadorRepo.save(catador)

    categorias.map((categoria: any) => {
     const catadorCategoria = catadorCategoriaRepo.create({
        catador_id: catador.id,
        categoria_id: categoria.id
      })

      catadorCategorias.push(catadorCategoria)
    })

    await catadorCategoriaRepo.save(catadorCategorias)
    return res.json({ catador })
  },
};
