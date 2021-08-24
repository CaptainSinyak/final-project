import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import pokemonReducer from "./pokemonreducer";

const rootReducer = combineReducers({
  pokemonsList: pokemonReducer,   
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)