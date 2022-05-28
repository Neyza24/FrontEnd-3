
import Navigation from './components/Navigation';
import PokemonCard from './components/PokemonCard';
import { pokemonData } from "./data/data";
import React, { useState } from 'react';
import './css/Header.css';
import './css/App.css';





function App() {

  const [state, setState] = useState();

//Utilizando js para cambiar poke desde los cta
const arrOfKey = Object.keys(pokemonData);
console.log(arrOfKey);


  const ChangeCard = (valor) => {
    if (valor === 0) {
      setState(<PokemonCard type={arrOfKey[valor]} element={pokemonData.fire}/>)
    } else if (valor === 1) {
      setState(<PokemonCard type={arrOfKey[valor]} element={pokemonData.water}/>)
    } else if (valor === 2) {
      setState(<PokemonCard type={arrOfKey[valor]} element={pokemonData.rock}/>)
    } else if (valor === 3) {
      setState(<PokemonCard type={arrOfKey[valor]} element={pokemonData.electric}/>)
    }
  }

  return (
    <div className='body'>
      <header className="containerHeader">
        {
          arrOfKey.map((type, index) => 
            <Navigation
              ChangePokemon={ChangeCard}
              type={type}
              idx={index}
            />
          ) 
          }
      </header>
      {
        state
      }

    </div>
  );
}

export default App;
