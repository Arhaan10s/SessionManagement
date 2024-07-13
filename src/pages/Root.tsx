import {Outlet}  from 'react-router-dom'
import MainHeader from '../components/Navigations/MainHeader'
import SessionContextProvider from '../store/session-context'


export default function Root(){
    return(
        <SessionContextProvider>
            <MainHeader />
            <Outlet />
        </SessionContextProvider>
        )
}