const Info = ({name, lastname, age, nationality, title}) =>{
    return(
        <div>
            <h3 className="subTittleStyle">{title}</h3>
            <ul className="liStyle">
                <p>Name: {name}</p>                       
                <p>Lastname: {lastname}</p>                       
                <p>Age: {age}</p>                       
                <p>Nationality: {nationality}</p>                      
            </ul>
        </div>
    )
}

export default Info;