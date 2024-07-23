import Button from '../ui/Button'

type UpcomingSessionProps = {
  session: {
    id: string
    title: string
    summary: string
    date: string
  }
  onCancel: () => void
}

const UpcomingSession = ({
  session: { date, summary, title },
  onCancel
}: UpcomingSessionProps) => {
  return (
    <article className='upcoming-session'>
      <div>
        <h3>{title}</h3>
        <p>{summary}</p>
        <time dateTime={new Date(date).toISOString()}>
          {new Date(date).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          })}
        </time>
      </div>
      <p className='actions'>
        <Button textonly onClick={onCancel}>
          Cancel
        </Button>
      </p>
    </article>
  )
}

export default UpcomingSession
