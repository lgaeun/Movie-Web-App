// resolvers: something that resolves a query
import { getById, people } from "./db";

//resolvers can be anything - 어떤 일을 실행시키고 싶은지 정의! (다른 api 가기, DB접근 등등)
const resolvers = {
  Query: {
    // name: () => "nicolas", //어떤 사용자가 name query를 보내면 'nicolas'를 반환하는 함수로 답할 것.
    people: () => people,
    person: (_, { id }) => getById(id), // 사용자로부터 id 얻어오기
  },
};

export default resolvers;
