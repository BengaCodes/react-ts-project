import { createContext, useContext, useReducer } from 'react'

type Session = {
  id: string
  title: string
  summary: string
  description: string
  date: string
  image: string
  duration: number
}

type SessionState = {
  upcomingSessions: Session[]
}

type SessionsContextType = SessionState & {
  bookSession: (session: Session) => void
  cancelSession: (sessionId: string) => void
}

enum SessionsActions {
  BOOK_SESSION = 'BOOK_SESSION',
  CANCEL_SESSION = 'CANCEL_SESSION'
}

type BookSessionAction = {
  type: SessionsActions.BOOK_SESSION
  payload: Session
}

type CancelSessionAction = {
  type: SessionsActions.CANCEL_SESSION
  payload: Session['id']
}

type Action = BookSessionAction | CancelSessionAction

export const SessionsContext = createContext<SessionsContextType | null>(null)

export const useSessionsContext = () => {
  const ctx = useContext(SessionsContext)

  if (ctx === null) {
    throw new Error(
      'useSessionsContext must be used within a SessionsContextProvider'
    )
  }

  return ctx
}

type SessionsContextProviderProps = {
  children: React.ReactNode
}

const initialState: SessionState = {
  upcomingSessions: [
    {
      id: 's1',
      title: 'Introduction to React',
      summary: 'Learn the basics of React',
      description:
        'In this session, we will cover the basics of React. We will learn about components, props, and state.',
      date: '2021-12-24',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      duration: 60
    },
    {
      id: 's2',
      title: 'React State Management',
      summary: 'Learn how to manage state in React',
      description:
        'In this session, we will learn how to manage state in React. We will cover useState, useReducer, and context.',
      date: '2021-12-25',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      duration: 90
    }
  ]
}

function sessionsReducer(state: SessionState, action: Action) {
  switch (action.type) {
    case SessionsActions.BOOK_SESSION:
      return {
        ...state,
        upcomingSessions: state.upcomingSessions.map((session) =>
          session.id === action.payload.id
            ? { ...session, booked: true }
            : session
        )
      }
    case SessionsActions.CANCEL_SESSION:
      return {
        ...state,
        upcomingSessions: state.upcomingSessions.map((session) =>
          session.id === action.payload
            ? { ...session, booked: false }
            : session
        )
      }
    default:
      return state
  }
}

function SessionsContextProvider({ children }: SessionsContextProviderProps) {
  const [sessionsState, dispatch] = useReducer(sessionsReducer, initialState)

  const ctx: SessionsContextType = {
    upcomingSessions: sessionsState?.upcomingSessions,
    bookSession: (session: Session) => {
      dispatch({ type: SessionsActions.BOOK_SESSION, payload: session })
    },
    cancelSession: (sessionId: string) => {
      dispatch({ type: SessionsActions.CANCEL_SESSION, payload: sessionId })
    }
  }

  return (
    <SessionsContext.Provider value={ctx}>{children}</SessionsContext.Provider>
  )
}

export default SessionsContextProvider
