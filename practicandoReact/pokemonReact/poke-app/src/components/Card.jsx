import '../css/Card.css';


const Card = ({ pokemons, type }) => {
    //creando objeto para cambiar color
    const objBg = {
        fire: "#EB5353",
        water: "#187498",
        rock: "#334443",
        electric: "#F9D923"
    }

    return (
        <div className="containerCards">
            {
                pokemons.map(pokemon => 
                    <section className="card" key={pokemon.id}  style={{backgroundColor: objBg[type]}}>
                        <h2>{pokemon.pokemonName}</h2>
                        <img className="avatar" src={pokemon.avatar} alt={pokemon.pokemonName}/>
                    </section>
                    )               
            }
        </div>
    )
}

export default Card;