import { Request, Response } from "express";
import commentUpdateService from "../../services/comment/commentUpdate.service";

const commentUpdateController = async (req: Request, res: Response) => {
  const comment = req.body.content;
  const idComment = req.params.id;
  const idUser = req.user.id;

  const updatedComment = await commentUpdateService(comment, idUser, idComment);

  return res.json(updatedComment).status(200);
};

export default commentUpdateController;
