import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import updateUserService from "../../services/user/userUpdate.service";

export const updateUserController = async (req: Request, res: Response) => {
  const userData = req.body;

  const { id } = req.params;

  const updateUser = await updateUserService(userData, id);

  return res.status(200).json(instanceToPlain(updateUser));
};