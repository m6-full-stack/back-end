import AppDataSource from "../../data-source";
import { Image } from "../../entities/image.entity";

const imagesDeleteService = async (id: string) => {

  const imageRepository = AppDataSource.getRepository(Image);

  const image = await imageRepository.findOneBy({ id });

  imageRepository.delete(image);

return "Image deleted";
};

export default imagesDeleteService;
