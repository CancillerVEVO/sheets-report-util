import "dotenv/config";
import express from "express";
import logger from "./logger";
import { google } from "googleapis";

const app = express();
const PORT = process.env.PORT || 3000;
const CREDENTIALS_PATH = process.env.CREDENTIALS_PATH;

app.get("/", async (req, res) => {
  const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
  const auth = new google.auth.GoogleAuth({
    keyFile: CREDENTIALS_PATH,
    scopes: SCOPES,
  });


  const sheets = google.sheets({ version: "v4", auth: auth });

  const spreadsheetId = "1ei46Shsy0gLu6a9OUf6LMhwu7f_oy7nL843bylnJ0uA";


  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: "Sheet1!A1:B2",
  });

  const rows = response.data.values;

  if (rows.length) {
    res.json({ rows });
  } else {
    res.json({ message: "No data found." });
  }

});

app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});
