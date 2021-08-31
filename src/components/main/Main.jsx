import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsData } from '../../actions/pokemons';
import './Main.less';
import PokemonCard from './PokemonCard/PokemonCard';

const Main = () => {
  const dispatch = useDispatch()
  const pokemons = useSelector(state => state.pokemonsList.pokemons)
  useEffect(() => {
    dispatch(getPokemonsData())  
  }, [])

  // const store = useSelector(state => state)
  // console.log(store)
  return (
    <div className="pokemons">
      {pokemons.map(pokemon => 
        <PokemonCard pokemon={pokemon} />
      )}
    </div>
  )
}

export default Main;