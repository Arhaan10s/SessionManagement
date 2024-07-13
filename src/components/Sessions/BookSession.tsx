import { FormEvent, useEffect, useRef } from "react";
import Modal,{ModalHandle} from "../UI/Modal"
import Input from "../UI/Input";
import Button from "../UI/Button";
import {useSessionContext} from "../../hooks/sessionHooks";
import { Session } from "../../store/session-context";

type BookSessionProps = {
  session:Session;
  onDone:()=>void;
}

const BookSession = ({session,onDone}:BookSessionProps) => {

  const modal = useRef<ModalHandle>(null);
  const sessionCtx = useSessionContext()

   // useEffect is used to open the Modal via its exposed `open` method when the component is mounted
   useEffect(() => {
    if (modal.current) {
      modal.current.open();
    }
  }, []);

  const handleSubmit=(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
    sessionCtx.bookSession(session);
    onDone();
  }

  return (
    <Modal ref={modal} onClose={onDone}>
      <h2>Book Session</h2>
      <form onSubmit={handleSubmit}>
      <Input label="Your name" id="name" name="name" type="text" />
      <Input label="Your email" id="email" name="email" type="email" />
      <p className="actions">
        <Button type="button" textOnly onClick={onDone}>
          Cancel
        </Button>
        <Button>Book Session</Button>
      </p>
      </form>
    </Modal>
  )
}

export default BookSession