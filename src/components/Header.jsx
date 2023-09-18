//----- IMPORTS -----//
import { Link } from 'react-router-dom';
import '../assets/css/Header.css';

//----- EXPORTS -----//
export default function Header() {
    return (
        <div className='main-header'>
            <nav className="nav-bar">
                <Link className='developer-link' to="/dev">Developer</Link>
            </nav>
            <header>
                <h1>CSS Cheatsheet</h1>
                <p>Explore and effortlessly copy CSS code snippets with this CSS Cheatsheet, your go-to resource for streamlining web design and styling.</p>
            </header>
        </div>
    );
}