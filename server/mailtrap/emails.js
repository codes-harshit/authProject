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
