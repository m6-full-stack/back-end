import { Request, Response } from 'express'
import { instanceToPlain } from 'class-transformer'
import passwordRecoverService from '../../services/password/passwordRecover.service'
const passwordRecoverController = async (req: Request, res: Response) => {
    const { tokenResetPassword, password } = req.body
    const updated = await passwordRecoverService(tokenResetPassword, password)
    return res.status(200).send(instanceToPlain(updated))
}

export default passwordRecoverController
