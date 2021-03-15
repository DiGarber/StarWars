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

type PageProp = {
  page: number;
};

type PaginationProp = {
  hasNext: boolean;
};

const App: FC<AppProps> = ({ history }) => {
  const [page, setPage] = useState<PageProp>({ page: 0 });
  const [isNext, setIsNext] = useState<PaginationProp>({ hasNext: true });
  const { characters, next, previous } = useSelector(
    (state: RootStateOrAny) => state.charactersReducer
  );
  const dispatch = useDispatch();

  const handleClick = async (name: string, index: number) => {
    await dispatch(setIndex(index));
    history.push(`/${name}`);
  };

  const handlePage = (url: string) => {
    dispatch(fetchCharacters(url));
  };

  useEffect(() => {
    dispatch(fetchCharacters("https://swapi.dev/api/people/"));
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
      <div>
        {page.page !== 0 ? (
          <Button onClick={() => {
            handlePage(previous)
            setPage({page: page.page - 1})
            }} style={{ alignSelf: "flex-start", marginTop: "30px" }}>
            Previous
          </Button>
        ) : null}
        {isNext ? (
          <Button onClick={() =>{
            handlePage(next)
            setPage({page: page.page + 1})
            }} style={{ alignSelf: "flex-end", marginTop: "5px" }}>
            Next
          </Button>
        ) : null}
      </div>
    </Body>
  );
};

export default App;
