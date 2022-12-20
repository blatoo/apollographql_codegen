import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { readFileSync } from "fs"
import * as path from "path"
import { resolvers } from "./resolvers"

const typeDefs = readFileSync(path.join(__dirname, "../schema.graphql"), {
  encoding: "utf-8",
})

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const startServer = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  })
  console.log(`🚀 Server listening at: ${url}`)
}

startServer()
