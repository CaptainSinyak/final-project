const GET_POKEMONS = "GET_POKEMONS";

const initialState = {
  pokemons: [],
  // caughtPokemons: [],
  // perPage: 20,  
  // currentPage: 1,
  // totalDataCount: 0,
}

export default function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload.pokemons
      }
    default:
      return state;
  }
}

export const getPokemons = (pokemonList) => ({
  type: GET_POKEMONS,
  payload: pokemonList
})