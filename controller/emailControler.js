const nodemailer = require('nodemailer')
const asyncHandler = require('express-async-handler')
const dotenv = require('dotenv')

const sendEmail = asyncHandler(async (data, req, res) => {
   const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Updated host
      port: 465,
      secure: true,
      service: 'gmail',
      auth: {
         user: process.env.Mail_ID,
         pass: process.env.Mail_Password,
      },
   })

   async function main() {
      const info = await transporter.sendMail({
         from: 'Hey" <abca@gmail.com>', // Updated sender address
         to: data.to,
         subject: data.subject,
         text: data.text,
         html: data.html,
      })
   }

   await main()
})

module.exports = sendEmail
