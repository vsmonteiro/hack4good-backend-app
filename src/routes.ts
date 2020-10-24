import { Router } from "express";
import multer from "multer";
import uploadConfig from "./config/upload";
import CatadorController from "./controllers/CatadorController";

const routes = Router();
const upload = multer(uploadConfig);

routes.get("/catador", CatadorController.index);
routes.get("/catador/:id", CatadorController.show);
routes.post("/catador", CatadorController.create);

export default routes;
