
import Button from "../UI/Button";
type UpcomingSessionsProps={
   session:{
       id:string,
       title:string,
       summary:string,
       date:string,
    };
    onClose:()=>void;
}

export default function UpcomingSession({session, onClose}:UpcomingSessionsProps){
    return(
        <article className="upcoming-session">
            <div>
                <h3>
                    {session.title}
                </h3>
                <p>
                    {session.summary}
                </p>
                <time dateTime={new Date(session.date).toISOString()}>
                    {new Date(session.date).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                })}
                </time>
            </div>
            <p className="action">
                <Button textOnly onClick={onClose}>Cancel</Button>
            </p>
        </article>
    )
}