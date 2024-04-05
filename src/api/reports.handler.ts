import { SoldInSessionReportRequest } from "./schema/SoldInSession";
import { getSheetInstance } from "../utils";

const generateSoldInSessionReport = async (data: SoldInSessionReportRequest, sessionId: number) => {
    const sheet = await getSheetInstance();
    const worksheet = sheet.spreadsheets.values;

    const values = data.products.map((product) => [
        sessionId,
        product.sellingSessionProductId,
        product.productName,
        product.salePrice,
        product.saleDate,
    ]);

    const response = await worksheet.append({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: "SoldInSession",
        valueInputOption: "USER_ENTERED",
        requestBody: {
            values,
        },
    });
};