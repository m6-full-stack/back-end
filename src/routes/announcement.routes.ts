import { Router } from "express";
import announcementCreateController from "../controllers/announcements/announcementCreate.controller";
import announcementDeleteController from "../controllers/announcements/announcementDelete.controller";
import announcementRetrieveListController from "../controllers/announcements/announcementRetrieveList.controller";
import announcementListController from "../controllers/announcements/announcementRetrieveList.controller";
import announcementUpdateController from "../controllers/announcements/announcementUpdate.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";

export const announcementRoutes = Router();

announcementRoutes.post("", ensureAuthMiddleware, announcementCreateController);

announcementRoutes.get("", announcementListController);

announcementRoutes.get("/:id", announcementRetrieveListController);

announcementRoutes.delete("/:id", announcementDeleteController);

announcementRoutes.patch("/:id", announcementUpdateController);
