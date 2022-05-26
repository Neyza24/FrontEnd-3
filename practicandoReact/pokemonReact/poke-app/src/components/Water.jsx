import Tarjeta from "./Card";
import React from "react";

const PokemonWater = ({tipo})=>{

  React.useEffect(()=> {
    document.body.style.background = '#00dbc0';
}, [])

    return(
        <Tarjeta 
        tipo = {tipo}
      />
    )
}

export default PokemonWater;