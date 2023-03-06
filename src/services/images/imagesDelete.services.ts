import AppDataSource from "../../data-source";
import { Image } from "../../entities/image.entity";
import { AppError } from "../../errors/appError";

const imagesDeleteService = async (id: string) => {

  const imageRepository = AppDataSource.getRepository(Image);

  const image = await imageRepository.findOneBy({ id });

  if (!image) {
    throw new AppError(400, 'This image does not exists!')
  }

  imageRepository.delete(image);

return "Image deleted";
};

export default imagesDeleteService;
