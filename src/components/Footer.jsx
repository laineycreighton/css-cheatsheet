//----- IMPORTS -----//
import { Link } from 'react-router-dom';

//CSS
import '../assets/css/Footer.css';

//----- EXPORTS -----//
export default function Footer() {

    //Return
    return (
        //---------- FOOTER ----------//
        <footer>
            <p className='tag'>MADE WITH <span className='passion'>Passion</span> BY <Link className='my-name' to="/dev">LAINEY CREIGHTON</Link></p>
        </footer>
    )
}