import { Router } from "express";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import imageCreateController from "../controllers/images/imageCreate.controller";
import imageDeleteController from "../controllers/images/imagesDelete.controller";

const imageRoutes = Router();

imageRoutes.post("/:id", ensureAuthMiddleware, imageCreateController);
imageRoutes.delete("/:id", ensureAuthMiddleware, imageDeleteController);

export default imageRoutes;
