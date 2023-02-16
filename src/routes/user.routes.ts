import { Router } from "express";
import userCreateController from "../controllers/users/userCreate.controller";
import userDeleteController from "../controllers/users/userDelete.controller";
import userListController from "../controllers/users/userList.controller";
import userUpdateController from "../controllers/users/userUpdate.controller";

export const userRoutes = Router();

userRoutes.post("", userCreateController);

userRoutes.get("", userListController);

userRoutes.delete("/:id", userDeleteController);

userRoutes.patch("/:id", userUpdateController);
