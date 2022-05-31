import titleStyles from "./Title.module.css"
import containerStyles from "./Title.module.css"

const Title =()=>{
    const arrayTitle = ["HOLA", "HOLA", "HOLA", "MUNDO"];

    return(
        <section className={containerStyles.container}>
            {
                arrayTitle.map(item => <h1 className={titleStyles.titleStyles}>{item}</h1>)
            }
        </section>
    )
}


export default Title;