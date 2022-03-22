import express from "express";
import db from "./config/database.js";
import siswaRouters from "./routes/index.js";
import cors from "cors"; // API dapat di akses di frontend

const app = express();

try {
    await db.authenticate();
    console.log("Database connected...");
} catch (error) {
    console.error("Connection error:", error);
}

app.get("/", (req, res) => {
    res.send("welcome");
});

app.use(cors());
app.use(express.json());
app.use("/dashboard", siswaRouters);

app.listen(5000, () => console.log("Server running at port 5000"));
