//----- IMPORTS -----//
import github from './styles/images/github.png'
import linkedin from './styles/images/linkedin.png'
import email from './styles/images/email.png'
import './styles/Footer.css'

//----- EXPORTS -----//
export default function Footer() {

    const emailAddress = 'dev.lainey@gmail.com';

    return (
        <footer>
            <div className='icons'>
                <a href='https://github.com/laineycreighton' target='_blank'><img src={github} alt='github logo'/></a>
                <a href='https://www.linkedin.com/in/lainey-creighton/' target='_blank'><img src={linkedin} alt='linkedin logo'/></a>
                <a href={`mailto:${emailAddress}`} target='_blank'><img src={email} alt='email logo'/></a>
            </div>
            <p className='tag'>MADE WITH <span className='passion'>Passion</span> BY LAINEY CREIGHTON</p>
        </footer>
    )
}