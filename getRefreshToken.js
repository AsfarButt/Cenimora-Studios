import { google } from "googleapis";
import readline from "readline";

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

const SCOPES = ["https://www.googleapis.com/auth/gmail.send"];

const authUrl = oauth2Client.generateAuthUrl({
  access_type: "offline",
  prompt: "consent",
  scope: SCOPES,
});

console.log("STEP 1 → Open this URL in your browser:\n");
console.log(authUrl);
console.log("\nSTEP 2 → After login, you will get a CODE. Paste that code here.\n");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("CODE: ", async (code) => {
  try {
    const { tokens } = await oauth2Client.getToken(code);

    console.log("\nSUCCESS → Your REFRESH TOKEN is:\n");
    console.log(tokens.refresh_token);
    console.log("\nPut this inside your .env file as REFRESH_TOKEN");

    rl.close();
  } catch (err) {
    console.error("Error retrieving access token", err);
    rl.close();
  }
});
