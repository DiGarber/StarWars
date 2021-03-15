import {
  FETCH_CHARACTER,
  FETCH_CHARACTERS,
  SET_INDEX,
  SET_NEXT,
  SET_PREVIOUS,
} from "../constants";

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
  next: string;
  previous: string;
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
  next: "",
  previous: "",
};

export default function (state = initialState, action: Action) {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return { ...state, characters: action.payload };
    case FETCH_CHARACTER:
      return { ...state, singleCharacter: action.payload };
    case SET_INDEX:
      return { ...state, currentCharacterIndex: action.payload };
    case SET_NEXT:
      return { ...state, next: action.payload };
    case SET_PREVIOUS:
      return { ...state, previous: action.payload };
    default:
      return state;
  }
}
