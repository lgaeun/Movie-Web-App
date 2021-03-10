import { GraphQlServer } from "graphql-yoga"; //graphql-yoga로 start server (=create-react-app)
import resolvers from "./graphql/resovlers";

const server = new GraphQlServer({
  typeDefs: "graphql/schema.graphql",
  resolvers,
});

server.start(() => console.log("Graphql Server Running"));
