
const Navigation =({ChangeState})=>{



    return(
        <nav className="navigation">
            <button onClick={()=>ChangeState(1)} className="button btnFire">Poke Fire</button>
            <button onClick={()=>ChangeState(2)} className="button btnWater">Poke Water</button>
            <button onClick={()=>ChangeState(3)} className="button btnRock">Poke Rock</button>
            <button onClick={()=>ChangeState(4)} className="button btnElectric">Poke Electric</button>
        </nav>
    )
}

export default Navigation;