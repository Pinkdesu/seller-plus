/* eslint-disable class-methods-use-this */
const mailer = require('nodemailer');
const { API_BASE_URL } = require('../constants');

class MainService {
  constructor() {
    this.transporter = mailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    });
  }

  async sendActivationMail(to, link) {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: 'Активация аккаунта на сайте "ТюменьСтройГаз"',
      html: `
         <div>
            <h1>
               Вы зарегистрировались на сайте 
               <a href=${API_BASE_URL}>ТюменьСтройГаз</a>
            </h1>
            <p>
               Для завершения регистрации перейдите по сыллке 
               <a href=${link}>${link}</a>
            </p>
         </div>
       `
    });
  }
}

module.exports = new MainService();
