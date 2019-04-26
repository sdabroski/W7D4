import React from 'react';
import {PokemonIndexItem} from './pokemon_index_item'

class PokemonIndex extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <ul>
  
        {this.props.pokemons.map(pokemon => {
          return (
            <div key={pokemon.id}>
              <PokemonIndexItem pokemon={pokemon} />
            </div>
          );
        })
        }
      </ul>
    );
  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }
}
export default PokemonIndex;