import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  return (
    <section className='App'>
      <TwitterFollowCard userName='lemus777'> {/* si usamos un prop sin declarar lo interpreta como true */}
        Jorge Lemus
      </TwitterFollowCard>
      <TwitterFollowCard userName='midudev'> {/* para false si hay que declararlo de este modo */}
      Miguel Ángel Durán
      </TwitterFollowCard>
    </section>
  )
}
