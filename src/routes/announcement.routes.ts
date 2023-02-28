import { Router } from "express";
import announcementCreateController from "../controllers/announcements/announcementCreate.controller";
import announcementDeleteController from "../controllers/announcements/announcementDelete.controller";
import announcementListController from "../controllers/announcements/announcementList.controller";
import announcementRetrieveController from "../controllers/announcements/announcementRetrieve.controller";
import announcementUpdateController from "../controllers/announcements/announcementUpdate.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { ensureIdVerifyMiddleware } from "../middlewares/ensureIdVerify.middleware";

export const announcementRoutes = Router();

announcementRoutes.post("", ensureAuthMiddleware, announcementCreateController);

announcementRoutes.get("", announcementListController);

announcementRoutes.get("/:id", ensureAuthMiddleware, ensureIdVerifyMiddleware, announcementRetrieveController);

announcementRoutes.delete("/:id", ensureAuthMiddleware, ensureIdVerifyMiddleware, announcementDeleteController);

announcementRoutes.patch("/:id", ensureAuthMiddleware, ensureIdVerifyMiddleware, announcementUpdateController);
