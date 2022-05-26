
import React, {Fragment} from "react";


const Card = ({tipo}) => {
    
    return (
      <Fragment >
          {
              tipo.map(property => 
              <div  className="card">
                  <h2 > N°{property.id} {property.pokemonName}</h2>
                  <img className="avatar" id={property.id} src={property.avatar} alt={property.pokemonName} />
              </div>
              )
          }
      </Fragment>
    )
  }
  
  export default Card;