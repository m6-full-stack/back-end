import { Request, Response } from "express";
import imagesCreateService from "../../services/images/imagesCreate.services";

const imageCreateController = async (req: Request, res: Response) => {
  const { image_url } = req.body;

  const images_list = [...image_url]

  const { id } = req.params;

  console.log(images_list, id)

  const newimage = await imagesCreateService(images_list, id);
  return res.status(201).send(newimage);
};

export default imageCreateController;
