import React from 'react';
import Pokeball from './pokeball.png';

export default function Header() {
  return (
    <div className="header">
      <img src={Pokeball} alt="pokeball" />
      <h1>Shiny Pokédex</h1>
      <img src={Pokeball} alt="pokedex" />
    </div>
  )
}
