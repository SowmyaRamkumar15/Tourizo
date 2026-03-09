import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="navbar" id="main-navbar">
            <div className="navbar__inner">
                <NavLink to="/" className="navbar__brand" onClick={closeMenu}>
                    Touri<span>zo</span>
                </NavLink>

                <button
                    className="navbar__toggle"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`navbar__links ${isOpen ? 'open' : ''}`}>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => `navbar__link ${isActive ? 'active' : ''}`}
                            onClick={closeMenu}
                            end
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/destinations"
                            className={({ isActive }) => `navbar__link ${isActive ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            Destinations
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/booking"
                            className={({ isActive }) => `navbar__link ${isActive ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            Book Tour
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => `navbar__link ${isActive ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;