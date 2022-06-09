import { ContainerS, TitleC, ContainerC, NameP, ImageC, ContainerB, BtnC } from '../css/CardStyles';

const Card = ({ image, name, title, incrementId }) => {

    return (
        <ContainerS>
            <TitleC>{title}</TitleC>
            <ContainerC>
                <div>
                    <NameP>{name}</NameP>
                    <ImageC src={image} alt={name} />
                </div>
                <ContainerB>

                    <BtnC onClick={() => incrementId("prev")}>Prev</BtnC>
                    <BtnC onClick={() => incrementId("next")}>Next</BtnC>
                </ContainerB>
            </ContainerC>
        </ContainerS>
    )
}

export default Card;