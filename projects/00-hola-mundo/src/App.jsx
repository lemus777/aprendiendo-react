import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  return (
    <section className='App'>
      <TwitterFollowCard isFollowing username='lemus777' name='Jorge Lemus' /> {/* si usamos un prop sin declarar lo interpreta como true */}
      <TwitterFollowCard isFollowing={false} username='midudev' name='Miguel Ángel Durán' /> {/* para false si hay que declararlo de este modo */}
      <TwitterFollowCard isFollowing username='pheralb' name='Pablo Hernández' />
      <TwitterFollowCard isFollowing username='elonmusk' name='Elon Musk' />
      <TwitterFollowCard isFollowing username='vnxder' name='Vanderhart' />
    </section>
  )
}
