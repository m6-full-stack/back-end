import { Router } from "express";
import userLoginController from "../controllers/session/sessions.service";

const sessionRoutes = Router();

sessionRoutes.post("", userLoginController);

export default sessionRoutes;
