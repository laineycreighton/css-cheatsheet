//----- IMPORTS -----//
import { Link } from 'react-router-dom'
import './styles/Header.css'

//----- EXPORTS -----//
export default function Header() {
    return (
        <div className='header'>
            <nav className="nav-bar">
                <div>
                    <Link to="/dev">Developer</Link>
                </div>
            </nav>
            <header>
                <h1>CSS Cheatsheet</h1>
                <p>Explore and effortlessly copy CSS code snippets with this CSS Cheatsheet, your go-to resource for streamlining web design and styling.</p>
            </header>
        </div>
    );
}