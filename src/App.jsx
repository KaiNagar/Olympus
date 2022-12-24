import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './views/Home'
import { Login } from './views/Login'
import { JoinInfo } from './views/JoinInfo'
import { AppHeader } from './cmps/AppHeader'
import './assets/styles/style.scss'
import { AppFooter } from './cmps/AppFooter'
import { JoinForm } from './views/JoinForm'

export function App() {
  return (
    <Router>
      <section className='app-container flex column'>
        <AppHeader />
        <div className='App'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/join-info' element={<JoinInfo />} />
            <Route path='/join-form' element={<JoinForm />} />
          </Routes>
        </div>
        <AppFooter />
      </section>
    </Router>
  )
}

export default App
