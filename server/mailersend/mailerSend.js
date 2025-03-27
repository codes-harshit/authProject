import "dotenv/config";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

export const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_TOKEN,
});

export const sender = new Sender(
  "programming.harshit44@trial-q3enl6kj7d742vwr.mlsender.net",
  "Harshit Bihani"
);

// const recipients = [new Recipient("2022uec1579@mnit.ac.in", "Your Client")];

// const emailParams = new EmailParams()
//   .setFrom(sender)
//   .setTo(recipients)
//   .setReplyTo(sender)
//   .setSubject("This is a Subject")
//   .setHtml("<strong>This is the HTML content</strong>")
//   .setText("This is the text content");

// await mailerSend.email.send(emailParams);
