import Education from './Education';
import Avatar from './Avatar';
import {data} from '../data/data';

const SectionEducation =() =>{

    return(
        <section className="sectionContainer direction" >
            <Avatar avatar = {data.personalData.avatar} />
            <Education 
            title = "Education:"
            info={data.education}
          />
        </section>
    )
}

export default SectionEducation;