import Card from "./Card";

const PokemonCard = ({type, element}) => {
    return (
        <div >
            <h1 className="title">Pokemon {type}</h1>
            <Card type={type} pokemons={element}/>
        </div>
    )
}

export default PokemonCard;