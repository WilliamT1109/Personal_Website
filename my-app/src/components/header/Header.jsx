import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <header className='header'>
        <nav className='nav container'>
            <a href='index.html' className='nav__logo'>Thibault</a>

            <div className='nav__menu'>
                <ul className='nav__list grid'>

                    <li className='nav__item'>
                        <a href="#home" className='nav__link'>
                            <i className='uil uil-home-alt nav__icon'></i> Home
                        </a>
                    </li>

                    <li className='nav__item'>
                        <a href="#about" className='nav__link'>
                            <i className='uil uil-user-circle nav__icon'></i> About
                        </a>
                    </li>

                    <li className='nav__item'>
                        <a href="#skills" className='nav__link'>
                            <i className='uil uil-file-alt nav__icon'></i> Skills
                        </a>
                    </li>

                    <li className='nav__item'>
                        <a href="#experience" className='nav__link'>
                            <i className='uil uil-suitcase nav__icon'></i> Experience
                        </a>
                    </li>

                    <li className='nav__item'>
                        <a href="#projects" className='nav__link'>
                            <i className='uil uil-clipboard-notes nav__icon'></i> Projects
                        </a>
                    </li>

                    <li className='nav__item'>
                        <a href="#contact" className='nav__link'>
                            <i className='uil uil-envelope nav__icon'></i> Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header