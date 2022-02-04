import { ReactNode } from "react";
import { PokemonProvider } from "./pokemon";
import { UserProvider } from "./user";

interface ProvidersData {
  children: ReactNode;
}

function Providers({ children }: ProvidersData) {
  return (
    <PokemonProvider>
      <UserProvider>{children}</UserProvider>
    </PokemonProvider>
  );
}
export default Providers;
