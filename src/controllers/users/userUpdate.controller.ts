<<<<<<< HEAD
import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import updateUserService from "../../services/user/userUpdate.service";
=======
import { Request, Response } from 'express'
import { instanceToPlain } from 'class-transformer'
import userUpdateService from '../../services/user/userUpdate.service'
const userUpdateController = async (req: Request, res: Response) => {
    const { id } = req.params
    const {
      name,
      password,
      email,
      phone,
      description,
      birthdate,
      is_seller,
      cpf,
    } = req.body
    const updated = await userUpdateService(id, {
      name,
      password,
      email,
      phone,
      description,
      birthdate,
      is_seller,
      cpf,
    })
    return res.status(200).send(instanceToPlain(updated))
}
>>>>>>> 21dddf59be33eae948eca6c7cdb685665aaee0cb

export const updateUserController = async (req: Request, res: Response) => {
  const userData = req.body;

  const { id } = req.params;

  const updateUser = await updateUserService(userData, id);

  return res.status(200).json(instanceToPlain(updateUser));
};