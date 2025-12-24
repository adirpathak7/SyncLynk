import http from "http"
import dotenv from "dotenv"
import app from "./src/app.js"
import connectDB from "./src/config/db.js"


dotenv.config()

const PORT = process.env.PORT || 5000

connectDB()

const server = http.createServer(app)

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});