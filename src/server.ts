import "dotenv/config";
import { logger} from "./utils";
import express from "express";
import cors from "cors";
import router from "./api";

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/reports", router);

app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});
