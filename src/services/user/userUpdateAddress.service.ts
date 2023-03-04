import AppDataSource from '../../data-source'
import { Address } from '../../entities/address.entity'
import { User } from '../../entities/user.entity'
import { AppError } from '../../errors/appError'
import { IAddressUpdateRequest } from '../../interfaces/address'

const updateAddressService = async (
  { city, complement, number, state, street, cep }: IAddressUpdateRequest,
  id: string
) => {
  
  const userRepository = AppDataSource.getRepository(User)
  const addressRepository = AppDataSource.getRepository(Address)

  const user = await userRepository.findOneBy({ id })

  if (!user) {
    throw new AppError(404, 'User not found.')
  }

  await addressRepository.update(user.address.id, {
    city,
    complement,
    number,
    state,
    street,
    cep,
  })

  const updatedUserAddress = await userRepository.findOneBy({ id })

  return updatedUserAddress
}

export default updateAddressService
