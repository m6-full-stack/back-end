import { Request, Response } from "express";
import imagesDeleteService from "../../services/images/imagesDelete.services";

const imageDeleteController = async (req: Request, res: Response) => {
  const { id } = req.params;

  await imagesDeleteService(id);

  return res.status(204).send();
};

export default imageDeleteController;
