import { createContext,type ReactNode, useReducer } from "react";

export type Session={
    id:string,
    title:string,
    summary:string,
    description:string,
    date:string,
    image:string,
    duration:number,
}

type SessionState={
    upcomingSession: Session[];
}

type SessionContextValue = SessionState & {
    bookSession:(session:Session) =>void;
    cancelSession:(sessionId:string) =>void;
}

export const SessionContext = createContext<SessionContextValue | null>(null);

type BookSessionAction={
    type:"BOOK_SESSION";
    session: Session;
}
type CancelSessionAction={
    type:"CANCEL_SESSION";
    sessionId: string;
}

type SessionAction = BookSessionAction | CancelSessionAction ;

function SessionReducer(state:SessionState, action:SessionAction) {// session action banao
    if(action.type === 'BOOK_SESSION')
    {
        if(
            state.upcomingSession.some((session)=>session.id === action.session.id)
        )
        {
            return state;
        }
        return{
            upcomingSession: state.upcomingSession.concat(action.session)
        }
    }
    if(action.type === 'CANCEL_SESSION')
    {
        return{
            upcomingSession : state.upcomingSession.filter(
                (session) => session.id !== action.sessionId
            )
        }
    }
    return state;
}

export default function SessionContextProvider({children}:{children: ReactNode})
{
    const[sessionState, dispatch]= useReducer(SessionReducer,{
        upcomingSession:[]
    })

    function bookSession(session: Session){
        dispatch({type:'BOOK_SESSION',session})
    }

    function cancelSession(sessionId: string){
        dispatch({type:'CANCEL_SESSION',sessionId})
    }

    const ctxValue={
        upcomingSession: sessionState.upcomingSession,
        bookSession,
        cancelSession,
    }

    return (
        <SessionContext.Provider value={ctxValue}>
            {children}
        </SessionContext.Provider>
    )

}

