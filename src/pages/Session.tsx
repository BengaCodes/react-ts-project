import { useParams } from 'react-router-dom'

import { SESSIONS } from '../dummy-sessions.ts'
import Button from '../components/ui/Button.tsx'
import { useEffect, useRef, useState } from 'react'
import Modal, { ModalHandler } from '../components/ui/Modal.tsx'
import BookSession from '../components/sessions/BookSession.tsx'

export default function SessionPage() {
  const [openBookSessionsModal, setOpenBookSessionsModal] = useState(false)
  const modal = useRef<ModalHandler>(null)

  useEffect(() => {
    if (modal.current) {
      modal.current?.open()
    }
  }, [])

  const params = useParams<{ id: string }>()

  const sessionId = params.id
  const loadedSession = SESSIONS.find((session) => session.id === sessionId)

  if (!loadedSession) {
    return (
      <main id='session-page'>
        <p>No session found!</p>
      </main>
    )
  }

  const handleOpenBookSessionsModal = () => {
    setOpenBookSessionsModal(true)
  }

  const handleCloseBookSessionsModal = () => {
    setOpenBookSessionsModal(false)
  }

  return (
    <>
      {openBookSessionsModal && (
        <BookSession
          onDone={handleCloseBookSessionsModal}
          session={loadedSession}
        />
      )}
      <main id='session-page'>
        <article>
          <header>
            <img src={loadedSession.image} alt={loadedSession.title} />
            <div>
              <h2>{loadedSession.title}</h2>
              <time dateTime={new Date(loadedSession.date).toISOString()}>
                {new Date(loadedSession.date).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric'
                })}
              </time>
              <p>
                <Button onClick={handleOpenBookSessionsModal}>
                  Book Session
                </Button>
              </p>
            </div>
          </header>
          <p id='content'>{loadedSession.description}</p>
        </article>
      </main>
    </>
  )
}
