import React, { FC, useEffect, useState } from "react";
import logo from "../../logo.svg";
import {
  Body,
  Button,
  CardBox,
  CharacterName,
  StarWarsLogo,
} from "../commons/styledComponents";
import { History } from "history";
import { RootStateOrAny, useSelector } from "react-redux";
import CharacterCard from "../commons/components/CharacterCard";
import axios from "axios";
import useFetchFilms from "../../hooks/useFetchFilms";

interface SingleCharacterProps {
  history: History;
}

interface RootState {
  isOn: boolean;
}

export interface Films {
  films: string[];
}

const SingleCharacterContainer: FC<SingleCharacterProps> = ({ history }) => {
  const { characters, currentCharacterIndex } = useSelector(
    (state: RootStateOrAny) => state.charactersReducer
  );
  const [films, setFilms] = useState<Films>({films: []});
  const [character, setCharacter] = useState(characters[currentCharacterIndex]);
  const fetchFilms = useFetchFilms();
  const handleClick = () => {
    history.goBack();
  };

  useEffect(() => {
    character?.films &&
      fetchFilms(character.films).then((films) => setFilms(films))
  }, []);

  useEffect(() => {
    character?.films &&
      fetchFilms(character.films).then((films) => setFilms(films))
  }, [character]);

  return (
    <Body>
      <StarWarsLogo src="https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/b6d0cc66-d8b7-42c0-985d-48c32d3d8de6" />
      <CharacterCard
        isSingleCharacter={true}
        history={history}
        films={films?.films}
        character={character}
        onClick={handleClick}
      />
    </Body>
  );
};

export default SingleCharacterContainer;
