import React from 'react';
import Menu from './Menu'; // Импортируем компонент Menu
import '../components/Header.css';

const Header = () => {
    return (
        <header className="header">
            <Menu />
            <h1 className="header__title">My React project</h1>
        </header>
    );
};

export default Header;