import express from "express"
import authRoutes from "./routes/auth.routes.js";

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).json({
        data: 1,
        success: true,
        message: "Server is running."
    })
})

app.use("/api/auth", authRoutes);

export default app