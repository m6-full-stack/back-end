import { User } from '../../entities/user.entity'
import AppDataSource from '../../data-source'
import { AppError } from '../../errors/appError'

const userRetrieveService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User)

  const user = await userRepository.findOne({
    loadEagerRelations: false,
    relations: { announcements: {advertiser: true} },
    where: { id: id },
  })

  if (!user) {
    throw new AppError(404, 'User not Found')
  }

  return user
}
export default userRetrieveService
