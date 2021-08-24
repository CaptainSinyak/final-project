import { getPokemons } from "../reducers/pokemonReducer";
import api from '../api/pokemonsApi';

export const getPokemonsData = () => {
  return async (dispatch, getState) => {
    const res = await api.get("/pokemons")    
    dispatch(getPokemons(res.data))
    console.log("data: ", getState())
  }
}