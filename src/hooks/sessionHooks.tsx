import { SessionContext } from "../store/session-context";
import { useContext } from "react";


export function useSessionContext(){
    const context = useContext(SessionContext);
    if(!context){
        throw new Error(
            'useSessionsContext must be used within a SessionsContextProvider'
        )
    }
    return context;
}