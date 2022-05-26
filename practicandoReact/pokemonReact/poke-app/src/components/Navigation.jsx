
const Navigation =({ChangeState})=>{



    return(
        <nav className="navigation">
            <button onClick={()=>ChangeState(1)} className="button">Pokemon Rock</button>
            <button onClick={()=>ChangeState(2)} className="button">Pokemon Water</button>
            <button onClick={()=>ChangeState(3)} className="button">Pokemon Fire</button>
            <button onClick={()=>ChangeState(4)} className="button">Pokemon Electric</button>
        </nav>
    )
}

export default Navigation;