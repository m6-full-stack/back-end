import { Request, Response } from "express";
import commentCreateService from "../../services/comment/commentCreate.service";

const commentCreateController = async (req: Request, res: Response) => {
  const comment = req.body.content;
  const idAnnouncement = req.params.id;
  const idUser = req.user.id;

  const createdComment = await commentCreateService(
    comment,
    idAnnouncement,
    idUser
  );

  res.json(createdComment).status(201);
};

export default commentCreateController;
