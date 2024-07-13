
import { SESSIONS } from "../dummy-sessions"
import Button from "../components/UI/Button"
import { useParams } from "react-router-dom";
import { useState } from "react";
import BookSession from "../components/Sessions/BookSession";

const SessionPage = () => {

  
  const params = useParams<{id:string}>();

  const [isBooking, setIsBooking] = useState(false);

  const sessionId = params.id;

  const loadedSession = SESSIONS.find( (session) => session.id === sessionId )

  if(!loadedSession){
    return(
      <main id="session-page">
        <p>No Session Found!</p>
      </main>
    )
  }

  function handleStartBook(){
    setIsBooking(true);
  }
  function handleStopBook(){
    setIsBooking(false);
  }

  return (
    <main id='session-page'>
      {isBooking &&(
        <BookSession session={loadedSession} onDone={handleStopBook}/>
      )}
        <article>
          <header>
            <img 
              src={loadedSession.image}
              alt={loadedSession.title}
              />
          <div>
            <h2>{loadedSession.title}</h2>
            <time dateTime={new Date(loadedSession.date).toISOString()}>
              {new Date(loadedSession.date).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </time>
            <p>
              <Button onClick={handleStartBook}>Book Session</Button>
            </p>
          </div>
          </header>
          <p id="content">{loadedSession.description}</p>
        </article>
    </main>
  )
}

export default SessionPage