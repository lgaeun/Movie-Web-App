let movies = [
  {
    id: "1",
    name: "Avengers",
    score: 5,
  },
  {
    id: "2",
    name: "Emma",
    score: 4,
  },
  {
    id: "3",
    name: "Imitation Game",
    score: 5,
  },
  {
    id: "4",
    name: "How to Traian Your Dragon",
    score: 4,
  },
];

// DB를 통해 하고 싶은 함수들 정의
export const getMoives = () => movies;

export const getById = (id) => {
  //요청된id(파라미터로 넘어온)가 people 배열의 id와 일치하는 것을 filteredPeople에 저장
  const filteredMoives = movies.filter((movie) => movie.id === id);
  return filteredMovies[0]; // filter된 것들 중 첫 번째 것을 리턴
};

//define mutation
export const deleteMovie = (id) => {
  const cleanedMoives = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMoives.length) {
    movies = cleanedMoives;
    return true;
  } else {
    return false;
  }
};

export const addMoive = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
