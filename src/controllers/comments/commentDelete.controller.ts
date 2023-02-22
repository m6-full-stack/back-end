import { Request, Response } from "express";
import commentDeleteService from "../../services/comment/commentDelete.service";

const commentDeleteController = async (req: Request, res: Response) => {
  const idComment = req.params.id;
  const idUser = req.user.id;

  await commentDeleteService(idComment, idUser);

  return res.send(204);
};

export default commentDeleteController;
