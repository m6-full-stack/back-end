import { AppError } from './../errors/appError'
import { IEmailRequest } from './../interfaces/email/index'
import { createTransport } from 'nodemailer'
import 'dotenv/config'

const sendEmail = async ({ subject, text, to }: IEmailRequest) => {
  const transporter = createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
  await transporter
    .sendMail({
      from: process.env.SMTP_USER,
      to: to,
      subject: subject,
      html: text,
    })
    .catch((err) => {
      console.log(err)
      throw new AppError(500, 'Error sending email, try again later')
    })
}

export default sendEmail
