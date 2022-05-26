import Card from "./Card";
import React from "react";

const PokemonRock = ({tipo}) => {

  React.useEffect(()=> {
    document.body.style.background = '#b4e600';
}, [])

  return (
    <Card
        tipo = {tipo}
      />
  )
}

export default PokemonRock;