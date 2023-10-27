import { NavLink } from 'react-router-dom';
import '../nav/style.css';
import '../btnDarkMode/btnDarkMode';

const activlink = 'nav-list__link nav-list__link--active';
const normalink = 'nav-list__link ';
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>Portfolio_LaNs</strong>
          </NavLink>

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink
                to="/"
                className={(isActive) => {
                  return isActive ? activlink : normalink;
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/Project"
                className={(isActive) => {
                  return isActive ? activlink : normalink;
                }}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/Contacts"
                className={(isActive) => {
                  return isActive ? activlink : normalink;
                }}
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
