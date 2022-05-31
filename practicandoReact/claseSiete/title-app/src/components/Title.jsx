import titleStyles from "./Title.module.css"
import containerStyles from "./Title.module.css"

const Title =()=>{
    const arrayTitle = ["HOLA", "HOLA", "HOLA", "MUNDO"];

    return(
        <section className={containerStyles.container}>
            {
                arrayTitle.map(item => <div className={titleStyles.titleStyles}>{item}</div>)
            }
        </section>
    )
}


export default Title;