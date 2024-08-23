import "./Header.css";

import React from "react";

function Header() {
  return (
    <div className="header">
      <h1 className="title">Products List</h1>
      <div className="menu">
        <button>All</button>
        <button>ELECTRONİCS</button>
        <button>JEWELERY</button>
        <button>MEN'S CLOTHİNS</button>
        <button>WOMEN'S CLOTHİNGS</button>
      </div>
    </div>
  );
}

export default Header;
