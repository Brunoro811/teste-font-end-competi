import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { PokemonDetails } from "../../components/cardPokemon/cardPokemon.model";
import {
  POKEMONS_USERS,
  POKEMONS_USER_LOGGED,
} from "../../services/localStorage";
import { Pokemon } from "../pokemon/pokemon.model";
import {
  UserContextData,
  UserData,
  UserRegisterLoginData,
  UserProviderData,
} from "./user.model";

import { toast } from "react-toastify";

const UserContext = createContext<UserContextData>({} as UserContextData);

export const UserProvider = ({ children }: UserProviderData) => {
  const history = useHistory();

  const dbUsers: UserData[] = JSON.parse(
    localStorage.getItem(POKEMONS_USERS) || "[]"
  );
  const [userLogged, setUserLogged] = useState<UserData>(
    JSON.parse(localStorage.getItem(POKEMONS_USER_LOGGED) || "{}")
  );
  const [isLogged, setIsLogged] = useState(
    JSON.parse(localStorage.getItem(POKEMONS_USER_LOGGED) || "{}").name
      ? true
      : false
  );
  const [isWarning, setIsWarning] = useState(false);
  const [isInformation, setIsInformation] = useState(false);

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem(POKEMONS_USERS) || "{}")) {
      localStorage.setItem(POKEMONS_USERS, JSON.stringify([]));
    }
    if (!JSON.parse(localStorage.getItem(POKEMONS_USER_LOGGED) || "{}").name) {
      localStorage.setItem(POKEMONS_USER_LOGGED, JSON.stringify({}));
    }
  }, []);

  const handleLogin = (user: UserRegisterLoginData) => {
    const isExist = dbUsers.filter(
      (element: UserRegisterLoginData) =>
        element.name === user.name && element.password === user.password
    );
    if (isExist[0]) {
      setIsLogged(true);
      localStorage.setItem(POKEMONS_USER_LOGGED, JSON.stringify(isExist[0]));
      setUserLogged(isExist[0]);
      toast.success("Login concluido com sucesso!");
      history.push("/dashboard");
    } else {
      setIsWarning(true);
    }
  };
  const handleRegister = (user: UserRegisterLoginData) => {
    const isExist = dbUsers.filter(
      (element: UserRegisterLoginData) => element.name === user.name
    );
    if (isExist[0]) {
      setIsWarning(true);
    } else {
      dbUsers.push({ ...user, pokedex: [] });
      localStorage.setItem(POKEMONS_USERS, JSON.stringify(dbUsers));
      toast.success("Cadastro concluido com sucesso!");
      history.push("/login");
    }
  };

  const handleLogout = () => {
    setIsLogged(false);
    localStorage.setItem(POKEMONS_USER_LOGGED, JSON.stringify({}));
    setUserLogged({} as UserData);
    history.push("/");
  };

  const handleAddPokemon = (pokemon: PokemonDetails) => {
    if (isLogged) {
      let user = JSON.parse(localStorage.getItem(POKEMONS_USER_LOGGED) || "{}");
      const pokemonExist = user.pokedex.filter(
        (element: any) => element.name === pokemon.name
      );
      if (pokemonExist[0]) {
        console.log("pokemon ja existe");
        toast.error("Você já possui esse pokemon!");
      } else if (!pokemonExist[0]) {
        user.pokedex.push(pokemon);
        localStorage.setItem(POKEMONS_USER_LOGGED, JSON.stringify(user));
        dbUsers.map((element) => {
          if (element.name === user.name) {
            element.pokedex.push(pokemon);
            localStorage.setItem(POKEMONS_USERS, JSON.stringify(dbUsers));
            setUserLogged(user);
          }
        });
        toast.success("Parabéns você capturou um pokemon!");
      }
    } else {
      setIsInformation(!isInformation);
    }
  };

  const handleRemovePokemon = (pokemon: Pokemon) => {
    const { name, password } = userLogged;
    const pokedex = userLogged.pokedex.filter(
      (element: Pokemon) => element.name !== pokemon.name
    );
    localStorage.setItem(
      POKEMONS_USER_LOGGED,
      JSON.stringify({ name: name, password: password, pokedex: pokedex })
    );
    setUserLogged({ name: name, password: password, pokedex: pokedex });
    toast.success("Você removeu um pokemon!");
  };

  return (
    <UserContext.Provider
      value={{
        userLogged,
        handleLogin,
        isLogged,
        handleRegister,
        isWarning,
        isInformation,
        setIsInformation,
        dbUsers,
        setIsWarning,
        handleLogout,
        handleAddPokemon,
        handleRemovePokemon,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => useContext(UserContext);
