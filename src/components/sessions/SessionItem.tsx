import Button from '../ui/Button'

type SessionItemProps = {
  id: string
  title: string
  summary: string
  image: string
}

const SessionItem = ({ id, image, title, summary }: SessionItemProps) => {
  return (
    <article className='session-item'>
      <img src={image} alt={title} />
      <div className='session-data'>
        <div>
          <h3>{title}</h3>
          <p>{summary}</p>
        </div>
        <p className='actions'>
          <Button to={`${id}`}>Learn More</Button>
        </p>
      </div>
    </article>
  )
}

export default SessionItem
