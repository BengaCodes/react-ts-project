import { useEffect, useRef } from 'react'
import { Session, useSessionsContext } from '../../store/sessions-context'
import Button from '../ui/Button'
import Input from '../ui/Input'
import Modal, { ModalHandler } from '../ui/Modal'

type BookSessionProps = {
  session: Session
  onDone: () => void
}

const BookSession = ({ session, onDone }: BookSessionProps) => {
  const modal = useRef<ModalHandler>(null)

  const { bookSession, upcomingSessions } = useSessionsContext()

  console.log({ upcomingSessions })

  useEffect(() => {
    if (modal.current) {
      modal.current?.open()
    }
  }, [])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData) as { name: string; email: string }
    console.log({ data })
    bookSession(session)
    onDone()
  }

  return (
    <Modal ref={modal} onClose={onDone}>
      <h2>Book Session</h2>
      <form onSubmit={handleSubmit}>
        <Input label='Your name' id='name' name='name' type='text' />
        <Input label='Your email' id='email' name='email' type='email' />
        <p className='actions'>
          <Button type='button' textonly onClick={onDone}>
            Cancel
          </Button>
          <Button>Book Session</Button>
        </p>
      </form>
    </Modal>
  )
}

export default BookSession
