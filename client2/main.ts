import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../server2/index';
//     👆 **type-only** import

// Pass AppRouter as generic here. 👇 This lets the `trpc` object know
// what procedures are available on the server and their input/output types.
const trpc = createTRPCClient < AppRouter > ({
    links: [
        httpBatchLink({
            url: 'https://gq6t6z-5000.csb.app/',
        }),
        
    ],
});

const user = await trpc.todoList.query();

console.log(user);
