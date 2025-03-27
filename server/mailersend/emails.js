import { EmailParams, Recipient } from "mailersend";
import { mailerSend, sender } from "./mailerSend.js";
import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from "../mailersend/emailTemplates.js";

export const sendVerificationEmailFromMailerSend = async (
  email,
  name,
  verificationToken
) => {
  const receipient = [new Recipient(email, name)];

  try {
    const emailParams = new EmailParams()
      .setFrom(sender)
      .setTo(receipient)
      .setReplyTo(sender)
      .setSubject("Verify your email")
      .setHtml(
        VERIFICATION_EMAIL_TEMPLATE.replace(
          "{verificationCode}",
          verificationToken
        )
      )
      .setText("Verification Token: " + verificationToken);

    await mailerSend.email.send(emailParams);
  } catch (error) {
    console.log("Error sending verification email", error);
  }
};

export const sendWelcomeEmailFromMailersend = async (email, name) => {
  const receipient = [new Recipient(email, name)];

  try {
    const emailParams = new EmailParams()
      .setFrom(sender)
      .setTo(receipient)
      .setReplyTo(sender)
      .setSubject("Welcome to Authify")
      .setHtml(`<h1>Welcome to Authify ${name}</h1>`)
      .setText("Welcome to Authify");

    await mailerSend.email.send(emailParams);
  } catch (error) {
    console.log("Error sending welcome email", error);
  }
};

export const sendPasswordResetMailFromMailerSend = async (
  email,
  name,
  resetURL
) => {
  const receipient = [new Recipient(email, name)];

  try {
    const emailParams = new EmailParams()
      .setFrom(sender)
      .setTo(receipient)
      .setReplyTo(sender)
      .setSubject("Reset your password")
      .setHtml(PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL))
      .setText("Password reset Link", resetURL);

    await mailerSend.email.send(emailParams);
  } catch (error) {
    console.log("Error sending reset password email", error);
  }
};

export const sendResetSuccessEmailFromMailsender = async (email, name) => {
  const receipient = [new Recipient(email, name)];

  try {
    const emailParams = new EmailParams()
      .setFrom(sender)
      .setTo(receipient)
      .setReplyTo(sender)
      .setSubject("Reset password Successful")
      .setHtml(PASSWORD_RESET_SUCCESS_TEMPLATE)
      .setText("Reset password Successful");

    await mailerSend.email.send(emailParams);
  } catch (error) {
    console.log("Error sending Reset success email", error);
  }
};
