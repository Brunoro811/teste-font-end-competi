import { ReactNode } from "react"
import { PokemonDetails } from "../../components/cardPokemon/cardPokemon.model"
import { Pokemon } from "../pokemon/pokemon.model"

export interface UserContextData{
    userLogged : UserData
    handleLogin: (user: UserRegisterLoginData)=> void
    handleRegister: (user: UserRegisterLoginData)=> void
    isLogged: boolean
    isWarning: boolean
    setIsWarning: React.Dispatch<React.SetStateAction<boolean>>
    isInformation: boolean
    setIsInformation: React.Dispatch<React.SetStateAction<boolean>>
    dbUsers: UserData[]
    handleLogout: ()=> void
    handleAddPokemon: (pokemon: PokemonDetails)=> void
    handleRemovePokemon: (pokemon: Pokemon)=> void
}
export interface UserProviderData{
    children: ReactNode
}
export interface UserData{
    name: string
    password: string
    pokedex: PokemonDetails[]
}
export interface UserRegisterLoginData{
    name: string
    password: string
}