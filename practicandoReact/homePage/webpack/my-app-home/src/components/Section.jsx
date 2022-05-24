import Info from './PersonalInfo';
import Avatar from './Avatar';
import {data} from '../data/data';

const Section =() =>{
    return(
        <section className="sectionContainer">
            <Avatar avatar = {data.personalData.avatar} />
            <Info
                title = "Personal information"
                name = {data.personalData.name}
                lastname = {data.personalData.lastname}
                age = {data.personalData.age}
                nationality = {data.personalData.nationality}
                />
        </section>
    )
}

export default Section;