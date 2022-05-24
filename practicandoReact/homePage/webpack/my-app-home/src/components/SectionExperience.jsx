import Experience from './Experience';
import Avatar from './Avatar';
import {data} from '../data/data';

const SectionExperience =() =>{

    return(
        <section className="sectionContainer">
            <Avatar avatar = {data.personalData.avatar} />
            <Experience 
            title = "Experience:"
            info={data.experience}
            />
        </section>
    )
}

export default SectionExperience;