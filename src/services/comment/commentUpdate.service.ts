import AppDataSource from "../../data-source";
import { Comment } from "../../entities/comments.entity";
import { AppError } from "../../errors/appError";

const commentUpdateService = async (
  commentData: string,
  idUser: string,
  idComment: string
) => {
  const commentRepository = AppDataSource.getRepository(Comment);

  const findComment = await commentRepository.findOne({
    relations: {
      user: true,
    },
    where: {
      id: idComment,
    },
  });

  if (!findComment) {
    throw new AppError(404, "Comment not found");
  }

  if (idUser != findComment.user.id) {
    throw new AppError(403, "You are not the owner of this comment");
  }

  await commentRepository.update(idComment, {
    content: commentData,
  });

  const comment = await commentRepository.findOneBy({
    id: idComment,
  });

  return comment!;
};

export default commentUpdateService;
