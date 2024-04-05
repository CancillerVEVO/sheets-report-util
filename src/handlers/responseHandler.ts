import { Response, Request } from "express";


const successResponse = (data = null, message = "Success", status = 200) => {
    return (res: Response) => {
        res.status(status).json({
            status: "success",
            message,
            data,
        });
    };
};
