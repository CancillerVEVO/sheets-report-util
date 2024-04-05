import {z} from 'zod';


const SoldInSessionReportSchema = z.object({
    sellingSessionProductId: z.number(),
    productName: z.string(),
    salePrice: z.number(),
    saleDate: z.string(),
});

export const SoldInSessionReportRequestSchema = z.object({
    products: z.array(SoldInSessionReportSchema),
});

export type SoldInSessionReportRequest = z.infer<typeof SoldInSessionReportRequestSchema>;
