//----- IMPORTS -----//
import { Link } from 'react-router-dom';
import '../assets/css/Footer.css';

//----- EXPORTS -----//
export default function Footer() {

    return (
        <footer>
            <p className='tag'>MADE WITH <span className='passion'>Passion</span> BY <Link to="/dev">LAINEY CREIGHTON</Link></p>
        </footer>
    )
}