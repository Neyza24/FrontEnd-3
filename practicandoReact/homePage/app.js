const state = {
    personalData: {
        name: "Frederick",
        lastname: "Rabe",
        age: 24,
        nationality: "German",
        residence: "France",
        occupation: "Singer/Producer",
        avatar:
            "https://i.pinimg.com/originals/01/21/69/012169fe56572215e737d0be64a8680e.png",
    },
    career: [
        { id: 1, degree: "Contemporary music art" },
        { id: 2, degree: "English music producer" },
        { id: 3, degree: "Music psychology" },
    ],
    education: [
        { id: 1, institute: "University of Arts." },
        { id: 2, institute: "University Heidelberg" },
        { id: 3, institute: "University of Paris" },
    ],
    bio: "I am a person like everyone else, trying to have a normal life whilst doing the things that make me happy. German singer and guitarist who has gained fame as the frontman for the indie band Giant Rooks.",
};

const Header = () => {
    return (
        <header>
            <nav className="navStyle">
                <ul className="ulStyle">
                    <li>Home</li>
                    <li>About</li>
                    <li>Career</li>
                    <li>Education</li>
                </ul>
            </nav>
        </header>
    );
};

const PersonalInformation = ({ name, lastName, nationality, age, avatar }) => {
    return (
        <section className="sectionContainer">
            <div className="sectionPersonalInformation">
                <h1>Personal Information:</h1>
                <p>Name: {name}</p>
                <p>Last Name: {lastName}</p>
                <p>Age: {age} years old</p>
                <p>Nationality: {nationality}</p>
            </div>
            <div>
                <img className="imgAvatar" src={avatar} alt="profile picture" />
            </div>
        </section>
    );
};

const Experience = ({ degree }) => {
    return <li>{degree}</li>;
};

const Education = ({ institute }) => {
    return <li>{institute}</li>;
};

const Bio = ({ bio }) => {
    return <p className="paragraph">{bio}</p>;
};

const { career } = state;
const { education } = state;

const App = (
    <main>
        <Header />
        <PersonalInformation
            name={state.personalData.name}
            lastName={state.personalData.lastname}
            age={state.personalData.age}
            nationality={state.personalData.nationality}
            avatar={state.personalData.avatar}
        />
        <section className="sectionPersonalInformation ">
            <div className="sectionContainer">
                <div>
                    <img
                        className="imgAvatar"
                        src="https://readgem.files.wordpress.com/2021/01/20200609-giant-rooks-studio-c2a9-by-jean-raclet-150.jpg?w=683"
                    />
                </div>
                <div>
                    <h2 className="subTittleStyle">Experience</h2>
                    <ul className="liStyle">
                        {career.map((item) => (
                            <Experience key={item.id} degree={item.degree} />
                        ))}
                    </ul>
                </div>
            </div>

            <div className="sectionContainer direction">
                <div>
                    <img
                        className="imgAvatar"
                        src="https://media.biletomat.pl/media/galleries/galleries_file/150/13149/f433823660d44deabfd5c098e70d20e5.jpg"
                    />
                </div>
                <div>
                    <h2 className="subTittleStyle">Education</h2>
                    <ul className="liStyle">
                        {education.map((item) => (
                            <Education key={item.id} institute={item.institute} />
                        ))}
                    </ul>
                </div>
            </div>

            <div className="sectionContainer">
                <div>
                    <img
                        className="imgAvatar position"
                        src="https://media.biletomat.pl/media/tmp/tickets/tickets_event/237.0/8486/a7986555bf1d4e21bba37c9eae93e78c.png.280x280_q85_box-0%2C0%2C400%2C400_crop_detail.png"
                    />
                </div>
                <div>
                    <h2 className="subTittleStyle">Biography</h2>
                    <Bio bio={state.bio} />
                </div>
            </div>
        </section>
    </main>
);

const htmlElement = document.getElementById("root");

ReactDOM.render(App, htmlElement);
