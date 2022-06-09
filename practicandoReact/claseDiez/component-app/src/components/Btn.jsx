import ClassPage from "./ClassComponent";
import FunPage from "./FunctionComponent";
import { useState } from "react";
import { ContainerBtn, BtnChange } from '../css/BtnChangeStyles';

const Btn = () => {
    const [type, setType] = useState();
    const [num, setNum] = useState(1);
    const [title, setTitle] = useState("Go to Class component");


    const switchType = (arg) => {
        if (arg === 1) {
            setType(<ClassPage />);
            setNum((prevState) => prevState + 1);
            setTitle("Go to Function component");
        } else if (arg === 2) {
            setType(<FunPage />);
            setNum((prevState) => prevState - 1);
            setTitle("Go to Class component");
        }
    };



    return (
        <ContainerBtn>
            {type}
            <BtnChange onClick={() => switchType(num)} >{title}</BtnChange>
        </ContainerBtn>
    );
};

export default Btn;
