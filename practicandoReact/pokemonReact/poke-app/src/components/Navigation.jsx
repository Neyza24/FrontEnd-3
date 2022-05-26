
const Navigation =({ChangeState})=>{



    return(
        <nav className="navigation">
            <button onClick={()=>ChangeState(1)} className="button">Poke Fire</button>
            <button onClick={()=>ChangeState(2)} className="button">Poke Water</button>
            <button onClick={()=>ChangeState(3)} className="button">Poke Rock</button>
            <button onClick={()=>ChangeState(4)} className="button">Poke Electric</button>
        </nav>
    )
}

export default Navigation;