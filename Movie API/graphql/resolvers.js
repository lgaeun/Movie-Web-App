// resolvers: something that resolves a query
import { getById, people } from "./db";

const resolvers = {
  Query: {
    // name: () => "nicolas", //어떤 사용자가 name query를 보내면 'nicolas'를 반환하는 함수로 답할 것.
    people: () => people,
    person: () => getById(),
  },
};

export default resolvers;
