// resolvers: something that resolves a query
const nicolas = {
  name: "Nicolas",
  age: 18,
  gender: "female",
};

const resolvers = {
  Query: {
    person: () => nicolas, //어떤 사용자가 name query를 보내면 'nicolas'를 반환하는 함수로 답할 것.
  },
};

export default resolvers;
