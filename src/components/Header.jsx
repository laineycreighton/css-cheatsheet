//----- IMPORTS -----//
import { Link } from 'react-router-dom';

//CSS
import '../assets/css/Header.css';

//----- EXPORTS -----//
export default function Header() {

    //Return
    return (
        //---------- HEADER ----------//
        <div className='main-header'>

            {/*-- Nav --*/}
            <nav className="nav-bar">
                <Link className='developer-link' to="/dev">Developer</Link>
            </nav>

            {/*-- Heading --*/}
            <header>
                <h1>Know CSS</h1>
                <p>Explore and effortlessly copy CSS code snippets with this CSS cheatsheet, your go-to resource for streamlining web design and styling.</p>
            </header>
        </div>
    );
}