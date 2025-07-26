import { Link } from 'react-router-dom';
import '../styles/layout/_header.scss';

function Header() {
  return (
    <header className="header">
      <h1>🌟 ASTROMODERNA 🌟</h1>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/astrologia">Astrología</Link></li>
          <li><Link to="/tarot">Tarot</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
