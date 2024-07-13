import Button from "../UI/Button"
type SessionProps={
    id:string,
    title:string,
    summary:string,
    image:string,
}

export default function SessionItem({id,image, title, summary}: SessionProps){
    return(

        <article className="session-item">
            <img src={image} alt={title} />
            <div className="session-data">
                <div>
                    <h3>{title}</h3>
                    <p>{summary}</p>
                </div>
                <p className="actions">
                    <Button to={id}>Learn Here</Button>
                </p>
            </div>
        </article>
    )

}