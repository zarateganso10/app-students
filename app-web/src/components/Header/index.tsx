import React from 'react';
import Logo from '../../assets/logo.png';

import './styles.css';

const Header = () => {
  return (
    <header>
      <div id="container-logo">
        <img id="logo" alt={"colégio"} src={Logo} />
        <h1>Colégio Fake</h1>
      </div>
    </header>
  )
}

export default Header;