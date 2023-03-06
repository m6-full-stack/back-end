import { Address } from '../../entities/address.entity'
import AppDataSource from '../../data-source'
import { Repository } from 'typeorm'
import { AppError } from '../../errors/appError'

interface AddressUpdateInput {
  id: string
  cep?: string
  state?: string
  city?: string
  street?: string
  number?: string
  complement?: string
}

const updateAddressService = async (input: AddressUpdateInput) => {
  const addressRepository: Repository<Address> = AppDataSource.getRepository(Address)
  const { id, ...updateFields } = input
  const address = await addressRepository.findOne({ where: { id } });

  if (!address) {
    throw new AppError(404, 'Endereço não encontrado')
  }

  const updatedAddress = addressRepository.merge(address, updateFields)
  await addressRepository.save(updatedAddress)

  return updatedAddress
}

export default updateAddressService
