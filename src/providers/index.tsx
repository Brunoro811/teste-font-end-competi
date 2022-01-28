import { ReactNode } from "react";
import { PokemonProvider } from "./pokemon";

interface ProvidersData {
  children: ReactNode;
}

function Providers({ children }: ProvidersData) {
  return <PokemonProvider>{children}</PokemonProvider>;
}
export default Providers;
