import { Request, Response } from "express";
import addressUpdateService from "../../services/address/addressUpdate.service";
const addressUpdateController = async (req: Request, res: Response) => {
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
  return res.status(200).send(updatedAddress);
};

export default addressUpdateController;
