import { NavLink } from 'react-router-dom'

export const AppFooter = () => {
  return (
    <section className='app-footer-container'>
      <div className='app-footer container flex align-center justify-center'>
        <NavLink className='nav-link' to={'/'}>
          Olympus
        </NavLink>|
        <NavLink className='nav-link' to={''}>
          שאלות ותשובות
        </NavLink>|
        <NavLink className='nav-link' to={''}>
          מדיניות פרטיות
        </NavLink>|
        <NavLink className='nav-link' to={''}>
          תנאי שימוש
        </NavLink>|
        <NavLink className='nav-link' to={''}>
          הצטרפות לOlympus
        </NavLink>
      </div>
    </section>
  )
}
