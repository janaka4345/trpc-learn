import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { z } from "zod";
import { publicProcedure, router } from "./trpc";
const appRouter = router({
  todoList: publicProcedure
    .query(async () => {
      // Retrieve users from a data source, this is an imaginary database
      // const res = await fetch('https://jsonplaceholder.typicode.com/todos') ;
      // const data=await res.json()

         return {user:'gfgfdgdfggfd'}
         }), 
});
export type AppRouter = typeof appRouter;
const server = createHTTPServer({
  router: appRouter,
});

server.listen(5000,()=>{console.log('listening on port 5000');
});