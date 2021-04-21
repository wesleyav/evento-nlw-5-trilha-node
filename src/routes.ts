import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";

const routes = Router();
const settingsController = new SettingsController();

routes.post("/settings", settingsController.create);

export { routes };


/**
 * Tipos de parâmetros
 * Routes Params => Parâmetros de rotas
 * http://localhost:333/settings/1
 * 
 * Query Params => Filtros e buscas
 * http://localhost:333/settings/1?search=algumacoisa&
 * 
 * Body Params => Passa objetos - Inserções, requisição via json {}
 */