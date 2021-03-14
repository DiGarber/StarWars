import { FETCH_CHARACTER, FETCH_CHARACTERS, SET_INDEX } from "../constants";

interface Action {
  payload: Character | Character[];
  type: string;
}

export interface Character {
  name: string;
  height: string;
  mass: string;
  hairColor: string;
  skinColor: string;
  gender: string;
  films: string[];
}

export interface State {
  characters: Character[];
  singleCharacter: Character;
  currentCharacterIndex: number;
}

const initialState: State = {
  characters: [],
  singleCharacter: {
    name: "",
    height: "",
    mass: "",
    hairColor: "",
    skinColor: "",
    gender: "",
    films: [],
  },
  currentCharacterIndex: 0,
};

export default function (state = initialState, action: Action) {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return { ...state, characters: action.payload };
    case FETCH_CHARACTER:
      return { ...state, singleCharacter: action.payload };
    case SET_INDEX:
      return { ...state, currentCharacterIndex: action.payload };
    default:
      return state;
  }
}
