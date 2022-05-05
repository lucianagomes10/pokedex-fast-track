import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  DivInputButton,
  ContainerSearch,
  InputStyle,
  Input,
} from "../styles/index";
import { getPokemon } from "../../services/request/indexAPI";
import {
  Pokemon,
  CardDescription,
  Name,
  Image,
  ButtonSearch,
  UserTitle,
  UserTrue,
} from "./style";
import { connect } from "react-redux";

const SearchPokemon = (state) => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();

  let onInputChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value, "event");
  };

  const onClickChange = async () => {
    const data = await getPokemon(search);
    setPokemon(data);
  };

  return (
    <>
      <ContainerSearch>
        <DivInputButton>
          <InputStyle>
            <Input
              type="search"
              onChange={onInputChange}
              value={search}
            ></Input>
          </InputStyle>
          <ButtonSearch onClick={onClickChange}>
            <SearchIcon />
          </ButtonSearch>
        </DivInputButton>
      </ContainerSearch>

      {state.name && (
        <UserTrue>
          <UserTitle>
            Bem-vindo(a) a Web Pokedex: {state.name && state.name}
          </UserTitle>
        </UserTrue>
      )}
      <div>
        <Pokemon>
          <CardDescription>
            <Image>
              {" "}
              {pokemon && pokemon.sprites && (
                <img
                  width="250px"
                  src={pokemon.sprites.other["official-artwork"].front_default}
                />
              )}
            </Image>
            <Name> {pokemon && pokemon.name && <p>{pokemon.name}</p>}</Name>
          </CardDescription>
        </Pokemon>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  name: state.user.name,
});
export default connect(mapStateToProps)(SearchPokemon);
