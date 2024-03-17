import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "Api is working fine" });
});

app.listen(5000, () => {
  console.log("server is running at port number 5000");
});
