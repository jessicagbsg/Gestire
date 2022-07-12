import express, { Router } from "express"
import setupUserRoutes from "./routes/project-routes"
import setupMiddlewares from "./config/middlewares"

const app = express()
setupMiddlewares(app)

const router = Router()
setupUserRoutes(router)
app.use("/api/v1", router)

export default app
