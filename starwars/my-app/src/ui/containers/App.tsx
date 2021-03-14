import React, { FC, useEffect, useState } from "react";
import { History } from "history";
import {
  Body,
  Button,
  CardBox,
  CharacterName,
  StarWarsLogo,
} from "../commons/styledComponents";
import {
  fetchCharacters,
  setIndex,
} from "../../redux/actions/charactersActions";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import CharacterCard from "../commons/components/CharacterCard";

export interface Character {
  name: string;
  height: string;
  gender: string;
  planet?: string;
}

interface AppProps {
  history: History;
}

interface RootState {
  isOn: boolean;
}

const App: FC<AppProps> = ({ history }) => {
  const [results, setResults] = useState([]);
  const { characters } = useSelector(
    (state: RootStateOrAny) => state.charactersReducer
  );
  const dispatch = useDispatch();

  const handleClick = async (name: string, index: number) => {
    await dispatch(setIndex(index));
    history.push(`/${name}`);
  };

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  return (
    
    <Body>
      <StarWarsLogo src="https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/b6d0cc66-d8b7-42c0-985d-48c32d3d8de6" />
      <div
        style={{
          height: "100%",
          backgroundColor: "black",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        {characters &&
          characters.map((result: Character, index: number) => (
            <CharacterCard
              character={result}
              history={history}
              isSingleCharacter={false}
              index={index}
              onClick={handleClick}
            ></CharacterCard>
          ))}
      </div>
    </Body>
  );
};

export default App;
