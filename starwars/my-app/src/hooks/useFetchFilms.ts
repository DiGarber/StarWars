import axios from "axios";

export default function useFetchFilms() {
type FilmArray = {
films: string[]
}
 const filmArray: FilmArray = {films: []}

  const fetchFilms = async (filmUrlArray: string[]): Promise<FilmArray> => {
   await filmUrlArray.map(url => axios.get(url).then((data) => filmArray.films.push(data.data.title)))
   return filmArray
  };

  return fetchFilms;
}