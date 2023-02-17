import { Router } from "express";
import announcementCreateController from "../controllers/announcements/announcementCreate.controller";
import announcementDeleteController from "../controllers/announcements/announcementDelete.controller";
import announcementListController from "../controllers/announcements/announcementList.controller";
import announcementUpdateController from "../controllers/announcements/announcementUpdate.controller";

export const announcementRoutes = Router();

announcementRoutes.post("", announcementCreateController);

announcementRoutes.get("", announcementListController);

announcementRoutes.delete("/:id", announcementDeleteController);

announcementRoutes.patch("/:id", announcementUpdateController);
