import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();
const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesControlller = new MessagesController();

routes.post("/settings", settingsController.create);
routes.get("/settings/:username", settingsController.findByUsername);
routes.put("/settings/:username", settingsController.update);
routes.post("/users", usersController.create);
routes.post("/messages", messagesControlller.create);
routes.get("/messages/:id", messagesControlller.showByUser);

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