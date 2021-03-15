import axios from "axios";
import { AnyAction, Dispatch } from "redux";
import {
  FETCH_CHARACTER,
  FETCH_CHARACTERS,
  SET_INDEX,
  SET_NEXT,
  SET_PREVIOUS,
} from "../constants";

export const setCharacters = (data: object[]): AnyAction => ({
  type: FETCH_CHARACTERS,
  payload: data,
});

export const setIndex = (data: number): AnyAction => ({
  type: SET_INDEX,
  payload: data,
});

export const setNext = (data: string): AnyAction => ({
  type: SET_NEXT,
  payload: data,
});

export const setPrevious = (data: string): AnyAction => ({
  type: SET_PREVIOUS,
  payload: data,
});

export const setCharacter = (data: object): AnyAction => ({
  type: FETCH_CHARACTER,
  payload: data,
});

export const fetchCharacters = (url: string) => (dispatch: Dispatch) => {
  axios.get(url).then((data) => {
    dispatch(setCharacters(data.data.results));
    dispatch(setNext(data.data.next));
    data.data.previous
      ? dispatch(setPrevious(data.data.previous))
      : dispatch(setPrevious(""));
  });
};

//I don't think I should make another request to the API if I can avoid it,
//so this action is just to show a possible implementation of the feature if needed.
export const fetchCharacter = (url: string) => (dispatch: Dispatch) => {
  axios.get("url prop from desired result").then((data) => {
    dispatch(setCharacter(data.data.results));
  });
};
