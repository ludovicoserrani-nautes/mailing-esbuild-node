require("dotenv").config();
const nodemailer = require("nodemailer");
const { renderWelcome } = require("./templatesHelper");

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_AUTH_USER,
    pass: process.env.MAIL_AUTH_PASS,
  },
});

transport.sendMail(
  {
    from: process.env.MAIL_FROM,
    subject: "My First Email",
    to: process.env.MAIL_TO,
    html: renderWelcome({ includeUnsubscribe: true }),
  },
  (err, info) => {
    if (err) console.error(err);

    console.log("Mail sent!");
    console.log(info);
  }
);
