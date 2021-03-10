export const people = [
  {
    id: "1",
    name: "Nicolas",
    age: 18,
    gender: "female",
  },
  {
    id: "2",
    name: "Emma",
    age: 18,
    gender: "female",
  },
  {
    id: "3",
    name: "Kaia",
    age: 18,
    gender: "female",
  },
  {
    id: "4",
    name: "Flynn",
    age: 18,
    gender: "male",
  },
  {
    id: "5",
    name: "Alec",
    age: 18,
    gender: "male",
  },
];

export const getById = (id) => {
  //요청된id(파라미터로 넘어온)가 people 배열의 id와 일치하는 것을 filteredPeople에 저장
  const filteredPeople = people.filter((person) => id === people.id);
  return filteredPeople[0]; // filter된 것들 중 첫 번째 것을 리턴
};
