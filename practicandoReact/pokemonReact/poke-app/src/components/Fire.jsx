import Card from "./Card";
import React from "react";

const PokemonFire = ({tipo}) => {

  React.useEffect(()=> {
    document.body.style.background = '#e49504';
}, [])
  return (
    <Card
        tipo = {tipo}
      />
  )
}

export default PokemonFire;