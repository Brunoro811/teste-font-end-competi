import { ReactNode } from "react";
import { string } from "yup";

export interface PokemonProviderData{
    children: ReactNode
}
export interface PokemonContextData{
    pokemons: any
    allNamesPokemon: any
}
export interface Pokemon{
    name: string
    id: number
    types: string
    image: string
    abilities: [
        {
          ability: {
            name: string;
            url: string;
          };
        }
      ];
      stats: [
        {
            base_stat: number,
            effort: number,
            stat: {
            name: string,
            url: string
            }
          }
      ]
}
export interface PagesOfPokemons {
    page: number 
    url: string
}
export interface NamesPokemon{
    name: string,
    link: string
    next?: null,
    previous?: null
    results: any
}
export interface PokemonNameURL{
    pokemon: {
        name:string,
        url:string},
    url?: string
}