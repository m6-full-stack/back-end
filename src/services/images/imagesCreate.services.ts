import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import { Image } from "../../entities/image.entity";

const imagesCreateService = async (images_list: string[], announcement: Announcement) => {

  const imagesRepository = AppDataSource.getRepository(Image)

    images_list.forEach(async element => {
      const newImage = imagesRepository.create({
        image_url: element, 
        announcement
      })

      await imagesRepository.save(newImage)
    });

};
export default imagesCreateService;
