import AppDataSource from "../../data-source";
import { Comment } from "../../entities/comments.entity";
import { AppError } from "../../errors/appError";

const commentDeleteService = async (idComment: string, idUser: string) => {
  const commentRepository = AppDataSource.getRepository(Comment);

  const comment = await commentRepository.findOne({
    relations: {
      user: true,
    },
    where: {
      id: idComment,
    },
  });

  if (!comment) {
    throw new AppError(404, "Comment not found");
  }

  if (idUser != comment.user.id) {
    throw new AppError(403, "You are not the owner of this comment");
  }

  await commentRepository.delete(idComment);

  return;
};

export default commentDeleteService;
