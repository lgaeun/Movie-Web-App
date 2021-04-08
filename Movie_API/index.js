import { GraphQLServer } from "graphql-yoga"; //graphql-yoga로 start server (=create-react-app)
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
  typeDefs: "./graphql/schema.graphql",
  resolvers,
});

server.start(() => console.log("Graphql Server Running"));
