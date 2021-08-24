import React from 'react';
// import '../../../../public/assets/pokemons/'
import './PokemonCard.less';

const PokemonCard = (props) => {
  // console.log(props)
  const pokemon = props.pokemon
  return (
    <div className="pokemon">
      <a href=""><h2 className="pokemon-name">{pokemon.name}</h2></a>
      <img src="" alt="pokemon-img" />
      <button className="pokemon-catch">Catch</button>
    </div>
  )
}

export default PokemonCard;