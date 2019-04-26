import React from 'react';
import {Link} from 'react-router-dom';

export const PokemonIndexItem = (props) => {
  return (
    <li> 
      <Link to={`/pokemon/${props.pokemon.id}`}>
        <span> {props.pokemon.name} </span>
        <img src={props.pokemon.image_url} />
      </Link>
    </li>
  );
}