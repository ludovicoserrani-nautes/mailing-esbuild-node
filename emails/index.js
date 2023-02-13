import dotenv from "dotenv";
import nodemailer from "nodemailer";
import { buildSendMail } from "mailing-core";
dotenv.config();

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_AUTH_USER,
    pass: process.env.MAIL_AUTH_PASS,
  },
});

const sendMail = buildSendMail({
  transport,
  defaultFrom: process.env.MAIL_FROM,
  configPath: "./mailing.config.json",
});

export default sendMail;
