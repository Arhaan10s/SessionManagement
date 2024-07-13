import {SESSIONS} from '../../src/dummy-sessions';
import SessionList from '../components/Sessions/SessionList';

const SessionsPage = () => {
  return (
    <main id="sessions-page">
        <header>
          <h2>Available Monitoring Sessions</h2>
          <p>
            From an one-on-one introduction to React's basics all the way up to a
            deep dive into state mechanics - we got just the right session for
            you!
          </p>
        </header>
        <SessionList sessions={SESSIONS} />
    </main>
  )
}

export default SessionsPage