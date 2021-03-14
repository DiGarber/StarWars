import React, { FC } from "react";
import { History } from "history";
import {
  Button,
  CardBox,
  CharacterName,
  CharacterStats,
} from "../styledComponents";
import { Character } from "../../containers/App";


interface CardProps {
  history: History;
  onClick: Function;
  character: Character;
  isSingleCharacter: boolean;
  index?: number;
  films?: string[];
}

interface RootState {
  isOn: boolean;
}


const CharacterCard: FC<CardProps> = ({
  history,
  onClick,
  isSingleCharacter,
  character,
  index,
  films,
}) => {
 
  return (
    <CardBox>
      <CharacterName>{character.name}</CharacterName>
      {isSingleCharacter && (
        <>
          <CharacterStats>Gender: {character.gender}</CharacterStats>
          <CharacterStats>Height: {character.height}</CharacterStats>
          <CharacterStats>Films:</CharacterStats>
          {films && films.map((film) => (
            <CharacterStats style={{ fontSize: "18px" }}>
             
              {film}
            </CharacterStats>
          ))}
        </>
      )}
      <Button
        onClick={() =>
          isSingleCharacter ? onClick() : onClick(character.name, index)
        }
      >
        {isSingleCharacter ? "Home" : "See More"}
      </Button>
    </CardBox>
  );
};

export default CharacterCard;
