import { WannaJoin } from '../cmps/WannaJoin'
import { VerificationsList } from '../cmps/VerficationsList'
import logo from '../assets/imgs/Olympus.png'

export const Home = () => {
  return (
    <section className='home-page-container'>
      <div className='home-page'>
        <div className='hero flex space-around align-center'>
          <img src={logo} alt='' />
          <iframe
            src='https://giphy.com/embed/cmCHuk53AiTmOwBXlw'
            width='600'
            height='600'
            frameBorder='0'
            className='del-gif'
            allowFullScreen
          ></iframe>
        </div>
        <WannaJoin />
        <VerificationsList />
      </div>
    </section>
  )
}
