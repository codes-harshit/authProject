import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTemplates.js";
import { mailTrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const receipient = [{ email }];
  try {
    const response = await mailTrapClient.send({
      from: sender,
      to: receipient,
      subject: "Verify Your Email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email verification ",
    });
  } catch (error) {
    console.log("Error sending verification email", error);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const receipient = [{ email }];
  try {
    const response = await mailTrapClient.send({
      from: sender,
      to: receipient,
      template_uuid: "92f87453-9a9f-456f-a1db-a8be27f09cf3",
      template_variables: {
        company_info_name: "Authify",
        name: name,
        company_info_address: "MNIT Jaipur",
        company_info_city: "Jaipur",
        company_info_zip_code: "302017",
        company_info_country: "India",
      },
    });
    console.log("Welcome email sent successfully", response);
  } catch (error) {
    throw new Error("Error sending welcome email", error);
  }
};

export const sendPasswordResetMail = async (email, resetURL) => {
  const receipient = [{ email }];
  try {
    const response = await mailTrapClient.send({
      from: sender,
      to: receipient,
      subject: "Reset Password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
      category: "reset-password",
    });
  } catch (error) {
    console.log("Error sending password reset email", error);
  }
};

export const sendResetSuccessEmail = async (email) => {
  const receipient = [{ email }];
  try {
    const response = await mailTrapClient.send({
      from: sender,
      to: receipient,
      subject: "Password Reset Successful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: "reset-password",
    });
  } catch (error) {
    console.log("Error sending password reset success email", error);
    throw new Error("Error sending password reset success email", error);
  }
};
