import Button from '../ui/Button'

const Header = () => {
  return (
    <header id='main-header'>
      <h1>ReactMentoring</h1>
      <nav>
        <ul>
          <li>
            <Button to='/' textOnly>
              Our Mission
            </Button>
          </li>
          <li>
            <Button to='/sessions' textOnly>
              Browse Sessions
            </Button>
          </li>
          <li>
            <Button>Upcoming Sessions</Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
