import { google } from "googleapis";

let sheetInstance = null;

export async function getSheetInstance() {
  if (sheetInstance) {
    return sheetInstance;
  }

  const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
  const auth = new google.auth.GoogleAuth({
    keyFile: process.env.CREDENTIALS_PATH,
    scopes: SCOPES,
  });

  sheetInstance = google.sheets({ version: "v4", auth: auth });

  return sheetInstance;
}
