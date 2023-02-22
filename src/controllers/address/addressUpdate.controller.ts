import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import addressUpdateService from "../../services/address/addressUpdate.service";
const addressUpdateController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { cep, state, city, street, number, complement } = req.body;
    const updatedAddress = await addressUpdateService(id, {
      cep,
      state,
      city,
      street,
      number,
      complement,
    });
    return res.status(204).send(updatedAddress);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default addressUpdateController;
