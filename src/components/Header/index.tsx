import { Link } from 'react-router-dom';
import './styles.css'

export default function Header() {
    return(
        <header>
            <nav className='rt-container'>
                <Link to='/'>
                    <h2>MeuSite</h2>
                </Link>
            </nav>
        </header>
    );
}