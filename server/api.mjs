import express from "express";
import cors from 'cors'
import { initTRPC } from "@trpc/server";
import { createExpressMiddleware } from '@trpc/server/adapters/express'


const trpc = initTRPC.create()

const appRouter = trpc.router({
    sayHi: trpc.procedure.query(() => {
        return 'hi'
    }),
    logToServer: trpc.procedure.input(value => {
        if (typeof value === 'string') {
            return value
        }
        throw new Error("Invalid input:expected string")
    }).mutation((req) => {
        console.log(`client says${req.input}`);
        return true

    })
})


const app = express()
app.use(cors({ origin: 'http://localhost:5173' }))
app.use("/trpc", createExpressMiddleware({ router: appRouter }))

app.listen(5000, () => {
    console.log('listening on port 5000');
})

// export type AppRouter = typeof appRouter
