import Card from "./Card";
import { pokemonData } from "../data/data";
import React, { Fragment } from "react";

const PokemonFire = () => {

  React.useEffect(() => {
    document.body.style.background = '#ff844b';
  }, [])

  const { fire } = pokemonData;

  return (
    <Fragment>
      {
        fire.map(pokemon =>
          <Card key={pokemon.id} name={pokemon.pokemonName} avatar={pokemon.avatar} />
        )
      }
    </Fragment>
  );
}

export default PokemonFire;