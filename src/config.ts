import * as dotenv from "dotenv";
// Support .env file
dotenv.config();

/** ChatGPT specific stuff */
export const openAiEmail = process.env.OPENAI_EMAIL as string;
export const openAiPassword = process.env.OPENAI_PASSWORD as string;
export const isGoogleLogin = Boolean(process.env.IS_GOOGLE_LOGIN) as boolean;
export const isMicrosoftLogin = Boolean(
  process.env.IS_MICROSOFT_LOGIN
) as boolean;

if (openAiEmail === undefined) {
  console.error("OPENAI_EMAIL env variable is undefined");
  process.exit(1);
}
if (openAiPassword === undefined) {
  console.error("OPENAI_PASSWORD env variable is undefined");
  process.exit(1);
}
if (isGoogleLogin === undefined) {
  console.error("IS_GOOGLE_LOGIN env variable is undefined");
  process.exit(1);
}

if (isMicrosoftLogin === undefined) {
  console.error("isMicrosoftLogin env variable is undefined");
  process.exit(1);
}
