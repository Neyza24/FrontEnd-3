

const Education = ({info, title})=>{

    return(
        <div>
            <h3 className="subTittleStyle">{title}</h3>
            <ul className="liStyle">                
                {info.map( item =>
                    <li key ={item.id}>
                        {item.institute}                 
                    </li>
                ) }
            </ul>
        <br/>
        </div>
    )
}

export default Education;