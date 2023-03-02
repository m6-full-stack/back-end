import { Router } from "express";
import addressUpdateController from "../controllers/address/addressUpdate.controller";
import userCreateController from "../controllers/users/userCreate.controller";
import userDeleteController from "../controllers/users/userDelete.controller";
import userListController from "../controllers/users/userList.controller";
import userRetrieveController from "../controllers/users/userRetrieve.controller";
import userUpdateController from "../controllers/users/userUpdate.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";

export const userRoutes = Router();

userRoutes.post("", userCreateController);

userRoutes.get("", ensureAuthMiddleware, userListController);

userRoutes.get("/:id", userRetrieveController);

userRoutes.delete("", ensureAuthMiddleware, userDeleteController);

userRoutes.patch("", ensureAuthMiddleware, userUpdateController);

userRoutes.patch("/address", ensureAuthMiddleware, addressUpdateController);
