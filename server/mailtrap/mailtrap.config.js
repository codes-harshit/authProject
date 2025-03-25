// import { MailtrapClient } from "mailtrap";
// import dotenv from "dotenv";
// dotenv.config();

// const TOKEN = process.env.MAILTRAP_TOKEN;

// const client = new MailtrapClient({
//   token: TOKEN,
// });

// const sender = {
//   email: "hello@demomailtrap.co",
//   name: "Harshit Bihani",
// };
// const recipients = [
//   {
//     email: "programming.harshit44@gmail.com",
//   },
// ];

// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);

import dotenv from "dotenv";
import { MailtrapClient } from "mailtrap";

dotenv.config(); // Load environment variables

const TOKEN = process.env.MAILTRAP_TOKEN;

if (!TOKEN) {
  console.error("❌ MAILTRAP_TOKEN is missing! Please check your .env file.");
  process.exit(1);
}

export const mailTrapClient = new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.co",
  name: "Harshit Bihani",
};
