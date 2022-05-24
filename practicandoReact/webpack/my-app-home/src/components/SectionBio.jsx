import Bio from './Bio';
import Avatar from './Avatar';
import {data} from '../data/data';

const SectionBio =() =>{

    return(
        <section className="sectionContainer direction">
            <Avatar avatar = {data.personalData.avatar} />
            <Bio
            bio = {data.bio}
            />
        </section>
    )
}

export default SectionBio;