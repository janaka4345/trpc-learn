import { z } from "zod";
import { trpc } from "../trpc.mjs";

const userProcedure = trpc.procedure.input(z.object({ userId: z.string() }))

export const userRouter = trpc.router({
    getUsers: userProcedure.query((input) => {
        return { id: input.userId }
    })
})