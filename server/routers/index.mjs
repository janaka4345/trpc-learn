import { trpc } from "../trpc.mjs";

export const appRouter = trpc.router({
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