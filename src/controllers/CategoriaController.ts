import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Categoria from "../models/Categoria";

export default {
  async index(req: Request, res: Response) {
    console.log('Categoria')
  },

  async show(req: Request, res: Response) {
  },

  async create(req: Request, res: Response) {
    const categoriaRepo = getRepository(Categoria)
    const { descricao } = req.body;
    const categoria = categoriaRepo.create({
        descricao
    })

    await categoriaRepo.save(categoria)

    return res.json({ categoria })
  },
};
