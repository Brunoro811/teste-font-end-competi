import { Pokemon } from "../../providers/pokemon/pokemon.model"

export interface PokemonDetails extends Pokemon {
  alt? : string
}

export interface CardPokemonData extends PokemonDetails {
  callbackAdd: (e:PokemonDetails)=> void
}
export interface SpanTypePokemonProps{
    type: string
} 