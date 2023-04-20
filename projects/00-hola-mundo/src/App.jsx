import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'lemus777',
    name: 'Jorge Lemus',
    isFollowing: true
  },
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: false
  },
  {
    userName: 'pheralb',
    name: 'Pablo Heraldo',
    isFollowing: false
  },
  {
    userName: 'TMChein',
    name: 'Tomás',
    isFollowing: true
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
        ))
      }
    </section>
  )
}
