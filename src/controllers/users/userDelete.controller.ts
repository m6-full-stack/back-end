import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import userDeleteService from "../../services/user/userDelete.service";
const userDeleteController = async (req: Request, res: Response) => {
    const { id } = req.user;
    await userDeleteService(id, res);
    return res.status(204).send();
};

export default userDeleteController;
