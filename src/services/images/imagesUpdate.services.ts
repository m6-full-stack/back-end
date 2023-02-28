import { Announcement } from "../../entities/announcement.entity";
import AppDataSource from "../../data-source";
import { Image } from "../../entities/image.entity";

const imagesListCreateService = async (images_list: string[], announcement: Announcement) => {

  const imagesRepository = AppDataSource.getRepository(Image)

    images_list.forEach(async element => {

      

      const newImage = imagesRepository.create({
        image_url: element, 
        announcement
      })

      await imagesRepository.save(newImage)
    });

};
export default imagesListCreateService;
