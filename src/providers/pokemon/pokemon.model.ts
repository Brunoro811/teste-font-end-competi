import React, { ReactNode } from "react";

export interface PokemonProviderData{
    children: ReactNode
}
export interface PokemonContextData{
    handleGetPokemons : (defaultNumber?: number)=> void
    pokemons: any
    allNamesPokemon: any
    
   /* totalPages: number
    currentPokemons : Pokemon[]
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
    currentPage: number
    currentSubPage: number
    setCurrenSubtPage: React.Dispatch<React.SetStateAction<number>>
    numberPage: number
    */
}
export interface Pokemon{
    name: string
    id: number
    types: any
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