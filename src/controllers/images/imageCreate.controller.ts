import { Request, Response } from "express";
import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import imagesCreateService from "../../services/images/imagesCreate.services";

const imageCreateController = async (req: Request, res: Response) => {
  const images_list = req.body;

  const { id } = req.params;

  const announcementRepository = AppDataSource.getRepository(Announcement);

  const announcement = await announcementRepository.findOneBy({ id });

  const newimage = await imagesCreateService(images_list, announcement);
  return res.status(201).send(newimage);
};

export default imageCreateController;
