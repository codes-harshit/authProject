import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
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
