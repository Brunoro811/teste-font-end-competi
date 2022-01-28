import React, { ReactNode } from "react";
import { number } from "yup";

export interface PokemonProviderData{
    children: ReactNode
}
export interface PokemonContextData{
    handleGetPokemons : (defaultNumber?: number)=> void
    pokemons: any
    pages: number
    currentPokemons : Pokemon[]
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
    currentPage: number
    currentSubPage: number
    setCurrenSubtPage: React.Dispatch<React.SetStateAction<number>>
    numberPage: number
}
export interface Pokemon{
    name: string
    order: number
    types: any
    image: string
}
export interface PagesOfPokemons {
    page: number 
    pokemons: Pokemon[]
}