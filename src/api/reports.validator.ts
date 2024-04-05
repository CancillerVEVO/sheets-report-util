import { NextFunction, Request, Response } from "express";
import { SoldInSessionReportRequestSchema } from "./schema/SoldInSession";

export const validateSoldInSessionReport = (req: Request, res: Response, next: NextFunction) => {
    try {
        const products = SoldInSessionReportRequestSchema.parse(req.body);
        next();
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
};