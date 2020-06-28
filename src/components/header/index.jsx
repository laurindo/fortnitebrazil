import React from "react";
import '../../App.css';
function Header() {
  return (
    <header className="header">
      <img
        src="https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_411/v1593283625/ei.garotos.games/logo-fortnite.png"
        alt="fortnite logo"
        className="headerImg"
      />
      <ul className="headerMenu">
        <li><a href="/">Home</a></li>
        <li><a href="/#/torneios">Torneios</a></li>
        <li><a href="/#/mapas">Mapas</a></li>
        <li><a href="/#/pontos-de-interesse">Pontos de Interesse</a></li>
      </ul>
    </header>
  );
}

export default Header;
