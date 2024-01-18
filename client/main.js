import { createTRPCProxyClient, httpBatchLink } from "@trpc/client"

const client = createTRPCProxyClient({
  links: [httpBatchLink({
    url: 'http://localhost:5000/trpc'
  })]
})
async function main() {
  // const results = await client.sayHi.query()
  await client.sayHi.query()
  await client.sayHi.query()
  await client.sayHi.query()
  // console.log(results);
}
// document.querySelector('#app').innerHTML = `hi${results}`
main()

