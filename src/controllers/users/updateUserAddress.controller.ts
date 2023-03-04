import { instanceToPlain } from 'class-transformer'
import { Request, Response } from 'express'
import updateAddressService from '../../services/user/userUpdateAddress.service';


export const updateUserAddressController = async (
  req: Request,
  res: Response
) => {
  const addressData = req.body
  const id = req.params.id;
  
  // @ts-ignore
  const updateAddress = await updateAddressService(addressData, id)

  return res.status(200).json(instanceToPlain(updateAddress))
}
