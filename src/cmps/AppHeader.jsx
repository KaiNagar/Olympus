import { NavLink } from 'react-router-dom'
import logo from '../assets/imgs/Olympus.jpeg'

export const AppHeader = () => {
  return (
    <section className='app-header-container'>
      <div className='app-header container flex space-between align-center'>
        <div className='nav-bar flex align-center'>
          <div className='tab'>
            <NavLink className='nav-link' to={'/'}>
              עמוד הבית
            </NavLink>
          </div>
          <div className='tab'>
            <NavLink className='nav-link' to={'/login'}>
              מידע לשליחים
            </NavLink>
          </div>
          <div className='tab'>
            <NavLink className='nav-link' to={'/join-info'}>
              הצטרף כשכיר
            </NavLink>
          </div>
        </div>
        <img className='logo-img' src={logo} alt='Olympus Logo' />
      </div>
    </section>
  )
}