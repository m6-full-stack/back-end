import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import userUpdateService from "../../services/user/userUpdate.service";
const userUpdateController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {
      name,
      password,
      email,
      phone,
      description,
      birthdate,
      is_buyer,
      cpf,
    } = req.body;
    const updated = await userUpdateService(id, {
      name,
      password,
      email,
      phone,
      description,
      birthdate,
      is_buyer,
      cpf,
    });
    return res.status(200).send(updated);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
    return res.status(401).send({ message: error });
  }
};

export default userUpdateController;
