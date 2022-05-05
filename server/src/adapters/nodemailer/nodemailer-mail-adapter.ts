import nodemailer, { Transporter } from 'nodemailer';

import { MailAdapter, SendEmailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
   host: "smtp.mailtrap.io",
   port: 2525,
   auth: {
     user: "5601dd639a9f4c",
     pass: "beb44551c5afce"
   }
 });

export class NodemailerMailAdapter implements MailAdapter {
   constructor() {}
   
   async sendEmail({ subject, body }: SendEmailData) {
      await transport.sendMail({
         from: 'Equipe Feedget <oi@feedget.com>',
         to: 'Raphael Capeto <raphaelcapetto@hotmail.com>',
         subject,
         html: body
      });
   }
}