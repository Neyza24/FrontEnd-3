

import Navigation from './components/Navigation';
import PokemonRock from './components/Rock';
import PokemonWater from'./components/Water'
import PokemonFire from './components/Fire';
import PokemonElectric from './components/Electric';
import {pokemonData}  from './data/data';
import React, { useState } from 'react';
import './App.css';




function App() {

  const [state, setState] = useState();

  const ChangeCard =(valor)=>{
    if(valor === 1){
        setState(<PokemonFire 
          tipo = {pokemonData.fire}
        />)
          
    }else if (valor === 2) {
        setState(<PokemonWater 
          tipo = {pokemonData.water}
        />)
    } else if (valor === 3) {
      setState(<PokemonRock 
        tipo = {pokemonData.rock}
      />)
    } else if (valor === 4) {
      setState(<PokemonElectric
        tipo = {pokemonData.electric}
      />)
    } 
  }

  return (
    <div className='ContainerApp'>
      <Navigation
        ChangeState={ChangeCard}
      />
      <div className='container'>
      {
        state
      }  
      </div>
    
    </div>
  );
}

export default App;
