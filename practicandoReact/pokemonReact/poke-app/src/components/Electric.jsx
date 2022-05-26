import Card from "./Card";
import React from "react";

const PokemonElectric = ({tipo}) => {
  React.useEffect(()=> {
  
    document.body.style.background = '#e6e200';
}, [])


  return (
    <Card 
        tipo = {tipo}
      />
  )
}

export default PokemonElectric;