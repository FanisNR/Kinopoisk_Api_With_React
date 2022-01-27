import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";

export default class Header extends React.Component {

    render() {
        return (
            <section className="header-wrapper ">
                <header className="header container">
                    <div className="header__contact">
                        <a className="header__tel" href="tel:+78000000000">+7 (800) 000 00-00</a>
                        <a className="header__mail" href="mailto:kino@kino.ru">kino@kino.ru</a>
                        <div className="header__addres">
                            <a className="header__addres-link" href="https://go.2gis.com/d83cu" target="_blank"
                               rel="ofollow noopener noreferrer">ул. ​Университетская, 1</a>
                        </div>
                        <Link to={'/'}  className="header__call phone">
                            <svg className="header__phone-icon" viewBox="0 0 10 10" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.67222 7.98889C4.1 7.18333 2.81111 5.9 2.01111 4.32778L3.12371 3.49804C3.44322 3.25977 3.59072 2.85451 3.49912 2.4666L3.09853 0.770184C2.99196 0.318844 2.58905 0 2.1253 0H0.555556C0.25 0 0 0.25 0 0.555556C0 5.77222 4.22778 10 9.44444 10C9.75 10 10 9.75 10 9.44444V7.87332C10 7.4102 9.68201 7.00767 9.23146 6.90048L7.53545 6.49696C7.14653 6.40442 6.73987 6.55242 6.50139 6.87328L5.67222 7.98889Z"/>
                            </svg>
                            <span className="phone__span">Заказать звонок</span>
                        </Link>
                    </div>
                    <nav className="header__menu">
                        <ul className="header__block">
                            <li><Link to={'/'} className="header__link">Home</Link></li>
                            <li><Link to={'films'} className="header__link">Films</Link></li>
                            <li><Link to={'top_films'} className="header__link">Top films</Link></li>
                            <li><Link to={'/'} className="header__link">contact</Link></li>
                        </ul>
                    </nav>
                </header>
            </section>
        );
    }
}
