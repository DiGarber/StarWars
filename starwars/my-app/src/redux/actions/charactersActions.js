import axios from "axios";
import { FETCH_CHARACTER, FETCH_CHARACTERS, SET_INDEX } from "../constants";

export const setCharacters = (data) => ({
  type: FETCH_CHARACTERS,
  payload: data,
});

export const setIndex = (data) => ({
  type: SET_INDEX,
  payload: data,
});

export const setCharacter = (data) => ({
  type: FETCH_CHARACTER,
  payload: data,
});

export const fetchCharacters = () => (dispatch) => {
  axios.get("https://swapi.dev/api/people/").then((data) => {
    dispatch(setCharacters(data.data.results));
  });
};

//I don't think I should make another request to the API if I can avoid it,
//so this action is just to show a possible implementation of the feature if needed.
export const fetchCharacter = (url) => (dispatch) => {
  axios.get("url prop from desired result").then((data) => {
    dispatch(setCharacter(data.data.results));
  });
};
