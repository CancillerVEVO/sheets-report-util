import { SoldInSessionReportRequest } from "./schema/SoldInSession";
import { getSheetInstance } from "../utils";

const generateSoldInSessionReport = async (data: SoldInSessionReportRequest, sessionId: number) => {
    const sheet = await getSheetInstance();
    const worksheet = sheet.addWorksheet({
        title: `Session ${sessionId} - Sold Products`,
        headerValues: ['Selling Session Product ID', 'Product Name', 'Sale Price', 'Sale Date']
    });

    data.products.forEach((product) => {
        worksheet.addRow({
            sellingSessionProductId: product.sellingSessionProductId,
            productName: product.productName,
            salePrice: product.salePrice,
            saleDate: product.saleDate
        });
    });

    await worksheet.commit();
};