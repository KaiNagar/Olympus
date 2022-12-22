import { NavLink } from 'react-router-dom'

export const WannaJoin = () => {
  return (
    <section className='wanna-join flex column'>
      <h1 className='wanna-join-title'>רוצים להצטרף לאולימפוס??</h1>
      <h2 className='wanna-join-subtitle'>
        אנחנו מזמינים אותך להצטרף לקהילת השליחים של אולימפוס וליהנות מהטבות
        ותנאים מיוחדים
      </h2>
      <NavLink className='wanna-join-btn' to={'/join-form'}>
        להצטרפות
      </NavLink>
    </section>
  )
}
