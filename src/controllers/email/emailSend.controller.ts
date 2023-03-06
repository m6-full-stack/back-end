import { Request, Response } from 'express'
import sendEmailService from '../../services/email/emailSend.service'

const sendEmailController = async (req: Request, res: Response) => {
  const { subject, text, to } = req.body
  await sendEmailService({ subject, text, to })
  return res.json({
    message: 'Email sent successfully',
  })
}
export default sendEmailController
