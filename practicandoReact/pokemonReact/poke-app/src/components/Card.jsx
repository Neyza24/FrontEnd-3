
const Card = ({ name, avatar }) => {

    return (
        <div className="card">
            <h3>{name}</h3>
            <img className="avatar" src={avatar} alt={name} />
        </div>
    )
}

export default Card;