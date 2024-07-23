import { useState } from 'react'
import Button from '../ui/Button'
import UpcomingSessions from '../sessions/UpcomingSessions'

const Header = () => {
  const [openUpcomingSessions, setOpenUpcomingSessions] = useState(false)

  const handleOpenUpcomingSessions = () => {
    setOpenUpcomingSessions(true)
  }

  const handleCloseUpcomingSessions = () => {
    setOpenUpcomingSessions(false)
  }

  return (
    <>
      {openUpcomingSessions && (
        <UpcomingSessions onClose={handleCloseUpcomingSessions} />
      )}
      <header id='main-header'>
        <h1>ReactMentoring</h1>
        <nav>
          <ul>
            <li>
              <Button to='/' textonly>
                Our Mission
              </Button>
            </li>
            <li>
              <Button to='/sessions' textonly>
                Browse Sessions
              </Button>
            </li>
            <li>
              <Button onClick={handleOpenUpcomingSessions}>
                Upcoming Sessions
              </Button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
