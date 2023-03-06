import sendEmail from '../../utils/sendEmail.util'
import { IEmailRequest } from './../../interfaces/email/index'

const sendEmailService = async ({ subject, text, to }: IEmailRequest) => {
  await sendEmail({ subject, text, to })
}
export default sendEmailService
