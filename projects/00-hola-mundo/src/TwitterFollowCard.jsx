export function TwitterFollowCard ({ username, name, isFollowing}) {
  const addAt = (username) => `@${username}`

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt={`el avatar de ${username}`}
          src={`https://unavatar.io/${username}`}
        />
        <div className='tw-followCard-info'>
          <strong>{name}</strong>
          <span className='tw-followCard-infoUsername'>{addAt(username)}</span>
        </div>
      </header>

      <aside>
        <button className='tw-followCard-button'>
          Seguir
        </button>
      </aside>
    </article>
  )
}
