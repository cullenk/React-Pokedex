import React from 'react';

export default function PokemonList({ image, name, id, typeOne, typeTwo }) {
  return (
    <div className="pokemon-container">
      <div className="pokemon-contents">
        <img src={image} alt="pokemon" />
        <div className="title">
          <span>#{id}</span>
          <p>{name}</p>
        </div>
        <div id={typeOne} className="type">{typeOne}</div>
        <div id={typeTwo} className="type">{typeTwo}</div>
      </div>
    </div>
  )
}
