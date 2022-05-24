const Experience = ({info, title})=>{
    return(
        <div>
            <h3 className="subTittleStyle">{title}</h3>
            <ul className="liStyle">
                {info.map( item =>
                    <li key ={item.id}>
                       {item.movie}                 
                    </li>
                ) }
            </ul>
        </div>
    )
}

export default Experience;