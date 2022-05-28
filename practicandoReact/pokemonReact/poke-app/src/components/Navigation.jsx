import '../css/Header.css';


const Navigation =({ChangePokemon, type, idx})=>{
    const objBg = {
        fire: "#EB5353",
        water: "#187498",
        rock: "#334443",
        electric: "#F1FA3C"
    }

    return(
        <nav>
            <button className="button" onClick={()=>ChangePokemon(idx)} style={{backgroundColor: objBg[type]}} >Pokemon {type}</button>
        </nav>
    )
}

export default Navigation;