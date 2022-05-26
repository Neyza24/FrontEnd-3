import Card from "./Card";
import { pokemonData } from "../data/data";
import React, { Fragment } from "react";

const PokemonElectric = () => {
  React.useEffect(() => {
    document.body.style.background = '#e6e200';
  }, []);

  const { electric } = pokemonData;

  return (
    <Fragment>
      {
        electric.map(pokemon =>
          <Card key={pokemon.id} name={pokemon.pokemonName} avatar={pokemon.avatar} />
        )
      }
    </Fragment>
  );
}

export default PokemonElectric;