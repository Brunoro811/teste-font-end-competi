import { ReactNode } from "react";

export interface PokemonProviderData{
    children: ReactNode
}
export interface PokemonContextData{
    pokemons: Pokemon[]
    allNamesPokemon: NamesPokemon
    setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>
    pokemonsCarrosel: Pokemon[]
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
export interface NamesPokemon{
    name: string,
    link: string
    next?: null,
    previous?: null
    results: PokemonNameURL[]
}
export interface PokemonNameURL{
    name:string,
    url:string
}