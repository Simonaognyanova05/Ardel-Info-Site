import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';

export default function Header() {
    const { user } = useAuth();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = (e) => {
        // Проверяваме дали сме на мобилно устройство (под 768px)
        if (window.innerWidth < 768) {
            e.preventDefault(); // Спира прескачането на страницата
            e.stopPropagation(); // Спира разпространението на събитието
            setIsDropdownOpen(prev => !prev); // Превключва: ако е true -> false, ако е false -> true
        }
    };

    const logged = (
        <li class="nav-item">
            <Link class="nav-link tm-nav-link" to="/messages">Съобщения</Link>
        </li>
    );
    return (

        <nav class="navbar navbar-expand-md tm-navbar" id="tmNav">
            <div class="container">
                <div class="tm-next">
                    <a href="#infinite" class="navbar-brand">Ардел Груп</a>
                </div>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars navbar-toggler-icon"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link tm-nav-link" href="#infinite">Начало</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link tm-nav-link" href="#about">За нас</a>
                        </li>
                        <li className={`nav-item dropdown tm-dropdown ${isDropdownOpen ? 'open' : ''}`}>
                            <span
                                className="nav-link tm-nav-link dropdown-toggle"
                                onClick={toggleDropdown}
                                style={{ cursor: 'pointer', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}
                            >
                                Обучения
                            </span>

                            {/* Менюто се показва само ако isDropdownOpen е true (за мобилни) */}
                            <ul className="dropdown-menu tm-dropdown-menu">
                                <li><a className="dropdown-item" href="#whatwedo" onClick={() => setIsDropdownOpen(false)}>Професионални обучения</a></li>
                                <li><a className="dropdown-item" href="#whatwedo" onClick={() => setIsDropdownOpen(false)}>Многоезикови компетентности</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link tm-nav-link" href="#gallery">Лицензи</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link tm-nav-link" href="#contact">Контакти</a>
                        </li>
                        {user.email ? logged : ""}
                    </ul>
                </div>
            </div>
        </nav>
    );
}