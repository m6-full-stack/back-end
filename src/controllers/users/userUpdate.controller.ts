import { Request, Response } from 'express'
import { instanceToPlain } from 'class-transformer'
import userUpdateService from '../../services/user/userUpdate.service'
const userUpdateController = async (req: Request, res: Response) => {
    const { id } = req.params
    const {
      name,
      password,
      email,
      phone,
      description,
      birthdate,
      is_seller,
      cpf,
    } = req.body
    const updated = await userUpdateService(id, {
      name,
      password,
      email,
      phone,
      description,
      birthdate,
      is_seller,
      cpf,
    })
    return res.status(200).send(instanceToPlain(updated))
}

export default userUpdateController
