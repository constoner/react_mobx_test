import React from 'react';
import './style.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <h1 className="header__title">Список счётчиков</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
