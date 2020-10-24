import { Router } from "express";
import multer from "multer";
import uploadConfig from "./config/upload";
import UsuarioController from "./controllers/UsuarioController";

const routes = Router();
const upload = multer(uploadConfig);

//usuario
routes.get("/usuario/:id", UsuarioController.index);
routes.get("/usuario", UsuarioController.show);
routes.get("/login", UsuarioController.login);
routes.post("/usuario", upload.single('imagem'), UsuarioController.create)
export default routes;
