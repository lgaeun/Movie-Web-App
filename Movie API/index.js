import { GraphQlServer } from "graphql-yoga"; //graphql-yoga로 start server (=create-react-app)

console.log("hello");
const server = new GraphQlServer({});

server.start(() => console.log("Graphql Server Running"));
