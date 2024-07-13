import UpcomingSession from "./UpcomingSession";
import { useEffect, useRef } from "react"
import Modal, { ModalHandle } from "../UI/Modal"
import { useSessionContext } from "../../hooks/sessionHooks";
import Button from "../UI/Button";

type upcomingSessionProps={
    onClose:()=>void;
}


const UpcomingSessions = ({onClose}:upcomingSessionProps) => {

    const modal = useRef<ModalHandle>(null);
    const sessionCtx = useSessionContext();
    console.log(sessionCtx);

    // useEffect is used to open the Modal via its exposed `open` method when the component is mounted
  useEffect(() => {
    if (modal.current) {
      modal.current.open();
    }
  }, []);

  function handleCancelSession(sessionId:string){
      sessionCtx.cancelSession(sessionId);
    }
    const hasSessions = sessionCtx.upcomingSession.length > 0;

  return (

    <Modal ref={modal} onClose={onClose}>
        <h2>Upcoming Sessions</h2>
        {hasSessions &&(
            <ul id="book">
                {sessionCtx.upcomingSession.map((session)=>(
                    <li key={session.id}>
                        <UpcomingSession
                            session={session}
                            onClose={()=>handleCancelSession(session.id)} 
                        />
                    </li>
                ))}
            </ul>
        )}
        {!hasSessions && <p>No Upcoming Sessions.</p>}
        <p className='actions'>
            <Button onClick={onClose}>Close</Button>
        </p>
    </Modal>
  )
}

export default UpcomingSessions