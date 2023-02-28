import { Router } from "express";
import commentCreateController from "../controllers/comments/commentCreate.controller";
import commentDeleteController from "../controllers/comments/commentDelete.controller";
import commentUpdateController from "../controllers/comments/commentUpdate.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";

const commentRoutes = Router();

commentRoutes.post("/:id", ensureAuthMiddleware, commentCreateController);
commentRoutes.patch("/:id", ensureAuthMiddleware, commentUpdateController);
commentRoutes.delete("/:id", ensureAuthMiddleware, commentDeleteController);

export default commentRoutes;
