import { Pokemon,  } from "../../providers/pokemon/pokemon.model";
import { PokemonDetails } from "../cardPokemon/cardPokemon.model";

export interface ContainerMainData{
    pokemons : Pokemon[]
    itemsForPage?: number
    callbackAdd: (e: PokemonDetails)=>void 
} 