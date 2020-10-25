import { Router } from "express";
import multer from "multer";
import uploadConfig from "./config/upload";
import UsuarioController from "./controllers/UsuarioController";

const routes = Router();
const upload = multer(uploadConfig);

//user
routes.get("/usuario/:id", UsuarioController.index);
routes.get("/usuario", UsuarioController.show);
routes.get("/imagem/:name", UsuarioController.image);
routes.post("/search", UsuarioController.search)
routes.post("/login", UsuarioController.login);
routes.post("/usuario", upload.single('imagem'), UsuarioController.create)
export default routes;
