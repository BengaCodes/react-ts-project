import { useEffect, useRef } from 'react'
import { useSessionsContext } from '../../store/sessions-context'
import Button from '../ui/Button'
import Modal, { ModalHandler } from '../ui/Modal'
import UpcomingSession from './UpcomingSession'

type UpComingSessionsProps = {
  onClose: () => void
}

const UpcomingSessions = ({ onClose }: UpComingSessionsProps) => {
  const modal = useRef<ModalHandler>(null)

  useEffect(() => {
    if (modal.current) {
      modal.current?.open()
    }
  }, [])

  const { upcomingSessions, cancelSession } = useSessionsContext()

  const handleCancelSession = (sessionId: string) => {
    cancelSession(sessionId)
  }

  return (
    <Modal ref={modal} onClose={onClose}>
      <h2>Upcoming Sessions</h2>
      {upcomingSessions.length > 0 && (
        <ul>
          {upcomingSessions.map((session) => (
            <li key={session.id}>
              <UpcomingSession
                session={session}
                onCancel={() => handleCancelSession(session.id)}
              />
            </li>
          ))}
        </ul>
      )}
      {!upcomingSessions.length && <p>No upcoming sessions.</p>}
      {/* <p className='actions'>
        <Button onClick={onClose}>Close</Button>
      </p> */}
    </Modal>
  )
}

export default UpcomingSessions
