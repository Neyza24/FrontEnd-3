import { useState, useEffect } from "react";
import Card from "./Card";

const FunPage = () => {
    const [data, setData] = useState({});
    const [id, setId] = useState(1);

    useEffect(() => {
        const request = async () => {
            const response = await fetch(
                `https://rickandmortyapi.com/api/character/${id}`
            );

            const result = await response.json();
            setData(result);
        };
        request();
    }, [id]);

    const incrementId = (arg) => {
        if (arg === "prev") {
            setId((prevState) => prevState - 1);
        } else if (arg === "next") {
            setId((prevState) => prevState + 1);
        }
    }

    return (

        <div>
            <Card image={data.image} name={data.name} incrementId={incrementId} title="Function Component" />
        </div>

    )


}

export default FunPage;