// resolvers: something that resolves a query
// import { addMoive, deleteMovie, getById, getMoives } from "./db";
import { getMovies } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
  },
};

//-------------------예시 형식------------------
//resolvers can be anything - 어떤 일을 실행시키고 싶은지 정의! (다른 api 가기, DB접근 등등)
// const resolvers = {
//   Query: {
//     // name: () => "nicolas", //어떤 사용자가 name query를 보내면 'nicolas'를 반환하는 함수로 답할 것.
//     movies: () => getMoives(),
//     movie: (_, { id }) => getById(id), // 사용자로부터 id 얻어오기
//   },
//   Mutation: {
//     addMovie: (_, { name, score }) => addMoive(name, score),
//     deleteMovie: (_, { id }) => deleteMovie(id),
//   },
// };

export default resolvers;
