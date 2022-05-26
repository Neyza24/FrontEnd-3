

import Navigation from './components/Navigation';
import PokemonRock from './components/Rock';
import PokemonWater from './components/Water'
import PokemonFire from './components/Fire';
import PokemonElectric from './components/Electric';
import Title from './components/Title';
import React, { useState } from 'react';
import './App.css';




function App() {

  const [state, setState] = useState();

  const ChangeCard = (valor) => {
    if (valor === 1) {
      setState(<PokemonFire
      />)
    } else if (valor === 2) {
      setState(<PokemonWater
      />)
    } else if (valor === 3) {
      setState(<PokemonRock
      />)
    } else if (valor === 4) {
      setState(<PokemonElectric
      />)
    }
  }

  return (
    
    
    <div className='ContainerApp'>
      <Title/>
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
