import { Pokemon } from "../../providers/pokemon/pokemon.model";

export interface ContainerMainData{
    pokemons : Pokemon[]
    itemsForPage?: number
}