import cors from "cors"
import express, { Application, Request, Response } from "express"
import productRouter from "./app/modules/product/product.route"
import orderRouter from "./app/modules/order/order.router"

const app: Application = express()

//* Parsers
app.use(express.json())
app.use(cors())

//* App routes
app.use("/api", productRouter)
app.use("/api", orderRouter)

app.get("/", (req: Request, res: Response) => {
  res.json({ success: true, message: "Hello Assignment-2 World!" })
})

export default app
