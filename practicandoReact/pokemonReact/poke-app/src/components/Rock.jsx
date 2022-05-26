import Card from "./Card";
import { pokemonData } from "../data/data";
import React, { Fragment } from "react";

const PokemonRock = () => {

  React.useEffect(() => {
    document.body.style.background = '#333333';
  }, [])

  const { rock } = pokemonData;

  return (
    <Fragment>
      {
        rock.map(pokemon =>
          <Card key={pokemon.id} name={pokemon.pokemonName} avatar={pokemon.avatar} />
        )
      }
    </Fragment>
  );
}

export default PokemonRock;