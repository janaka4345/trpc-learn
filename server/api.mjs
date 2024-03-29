import express from "express";
import cors from 'cors'
import { createExpressMiddleware } from '@trpc/server/adapters/express'
import { mergedRouters } from "./routers/index.mjs";

const app = express()
app.use(cors({ origin: 'http://localhost:5173' }))
app.use("/trpc", createExpressMiddleware({ router: mergedRouters }))

app.listen(5000, () => {
    console.log('listening on port 5000');
})

// export type AppRouter = typeof appRouter
