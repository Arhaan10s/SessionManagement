import { NavLink } from "react-router-dom";
import Button from "../UI/Button";
import { useState } from "react";
import UpcomingSessions from "../Sessions/UpcomingSessions";

export default function MainHeader(){

    const[upcomingSessionVisible, setUpcomingSessionVisible] =useState(false);

    function showUpcomingSessions() {
        setUpcomingSessionVisible(true);
      }
    
      function hideUpcomingSessions() {
        setUpcomingSessionVisible(false);
      }

    return(
        <>
        {upcomingSessionVisible && (
            <UpcomingSessions onClose={hideUpcomingSessions} />
        )}
            <header id="main-header">
                <h1>ReactMonitoring</h1>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" className={({isActive})=>isActive ? 'active' :''} end>Our Mission</NavLink>
                        </li>
                        <li>
                            <NavLink to="/sessions" className={({isActive})=>isActive ? 'active' :''} end>Browse Sessions</NavLink>
                        </li>
                        <li>
                            <Button onClick={showUpcomingSessions}>Upcoming Sessions</Button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}