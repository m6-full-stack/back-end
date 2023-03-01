import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import { User } from "../../entities/user.entity";
import { Comment } from "../../entities/comments.entity";
import { AppError } from "../../errors/appError";

const commentCreateService = async (
  commentData: string,
  idAnnouncement: string,
  idUser: string
) => {
  const commentRepository = AppDataSource.getRepository(Comment);
  const userRepository = AppDataSource.getRepository(User);
  const announcementRepository = AppDataSource.getRepository(Announcement);

  const user = await userRepository.findOneBy({ id: idUser });

  if (!user) {
    throw new AppError(404, "User not exists");
  }

  const announcement = await announcementRepository.findOneBy({
    id: idAnnouncement,
  });

  if (!announcement) {
    throw new AppError(404, "Announcement not exists");
  }

  const comment = commentRepository.create({
    content: commentData,
    user: user,
    announcement: announcement,
  });

  await commentRepository.save(comment);

  const newComment = await commentRepository.findOne({
    where: {
      id: comment.id
    },
    relations: {
      user: true,
    }
  })

  return newComment;
};

export default commentCreateService;
