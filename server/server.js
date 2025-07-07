import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./configs/db.js";
import adminRouter from "./routes/adminRouter.js";
import blogRouter from "./routes/blogRoute.js";

const app = express();

await connectDb();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("API is working");
});

app.use("/api/admin", adminRouter);
app.use("/api/blog", blogRouter);

const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

export default app;
