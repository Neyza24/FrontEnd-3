import Card from "./Card";
import { pokemonData } from "../data/data";
import React, { Fragment } from "react";


const PokemonWater = ({ tipo }) => {

  React.useEffect(() => {
    document.body.style.background = '#89ddff';
  }, [])

  const { water } = pokemonData;

  return (
    <Fragment>
      {
        water.map(pokemon =>
          <Card key={pokemon.id} name={pokemon.pokemonName} avatar={pokemon.avatar} />
        )
      }
    </Fragment>
  );
}

export default PokemonWater;