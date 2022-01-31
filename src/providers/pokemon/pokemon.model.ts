import { ReactNode } from "react";

export interface PokemonProviderData{
    children: ReactNode
}
export interface PokemonContextData{
    handleGetPokemons : (defaultNumber?: number)=> void
    pokemons: any
    allNamesPokemon: any
}
export interface Pokemon{
    name: string
    id: number
    types: string
    image: string
}
export interface PagesOfPokemons {
    page: number 
    link: string
}
export interface NamesPokemon{
    name: string,
    link: string
    next?: null,
    previous?: null
    results?: any
}