import { Request, Response } from "express";
import commentCreateService from "../../services/comment/commentCreate.service";
import { instanceToPlain } from 'class-transformer'

const commentCreateController = async (req: Request, res: Response) => {
  const comment = req.body.content;
  const idAnnouncement = req.params.id;
  const idUser = req.user.id;

  const createdComment = await commentCreateService(
    comment,
    idAnnouncement,
    idUser
  );

  res.json(instanceToPlain(createdComment)).status(201);
};

export default commentCreateController;
